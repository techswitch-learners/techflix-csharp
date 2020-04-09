import { Feature } from "../models/feature";
import { SearchModel } from "../models/searchModel";
import {runReadTransaction, runWriteTransaction} from "@daos/neo4jClient";
import {int, Record} from "neo4j-driver";
import {ListResponse} from "../models/listResponse";

export async function countFeatures(): Promise<number> {
    const records = await runReadTransaction("MATCH (feature:Feature) RETURN feature");
    return records.length;
}

export async function getFeatures(searchModel: SearchModel): Promise<ListResponse<Feature>> {
    const records = runReadTransaction(
        "MATCH (feature:Feature) RETURN feature SKIP $skip LIMIT $limit", 
        { 
            skip: int((searchModel.page - 1) * searchModel.perPage),
            limit: int(searchModel.perPage),
        }
    );
    const count = runReadTransaction("MATCH (feature:Feature) RETURN count(feature)");
    return {
        items: (await records).map(toFeature),
        count: int((await count)[0].get("count(feature)")),
    };
}

export async function getFeature(id: number): Promise<Feature> {
    const records = await runReadTransaction("MATCH (feature:Feature) WHERE feature.id = $id RETURN feature", {id: int(id)});
    return toFeature(records[0]);
}

export async function createFeature(id: number, feature: Feature): Promise<Feature> {
    const featureParam = { ...feature, id: int(id) };
    const records = await runWriteTransaction("CREATE (feature:Feature $feature) RETURN feature", {feature: featureParam});
    return toFeature(records[0]);
}

export async function updateFeature(id: number, feature: Feature): Promise<Feature> {
    const records = await runWriteTransaction(
        "CREATE (feature:Feature) " +
        "SET feature.linkUrl = $linkUrl, feature.imageUrl = $imageUrl " +
        "WHERE feature.id = $id " +
        "RETURN feature", {id: int(id), linkUrl: feature.linkUrl, imageUrl: feature.imageUrl});
    return toFeature(records[0]);
}

export async function deleteFeature(id: number): Promise<Feature> {
    const records = await runWriteTransaction(
        "DELETE (feature:Feature) WHERE feature.id = $id RETURN feature", {id: int(id)}
    );
    return toFeature(records[0]);
}

function toFeature(record: Record): Feature {
    const feature = record.get("feature").properties;
    return {
        id: feature.id.toNumber(),
        linkUrl: feature.linkUrl,
        imageUrl: feature.imageUrl,
    }
}