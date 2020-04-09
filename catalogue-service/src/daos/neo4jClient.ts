import neo4j, {Record} from "neo4j-driver";

const driver = neo4j.driver(
    process.env.NEO4J_URL!,
    neo4j.auth.basic(process.env.NEO4J_USER!, process.env.NEO4J_PASSWORD!)
);

export async function runReadTransaction<T>(query: string, params?: any): Promise<Record[]> {
    const session = driver.session();
    return await session.readTransaction(async transaction => {
        const result = await transaction.run(query, params);
        return result.records;
    })
}

export async function runWriteTransaction<T>(query: string, params?: any): Promise<Record[]> {
    const session = driver.session();
    return await session.writeTransaction(async transaction => {
        const result = await transaction.run(query, params);
        return result.records;
    })
}