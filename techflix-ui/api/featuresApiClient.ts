import {CardData} from "../components/CardGrid/LandscapeCard/LandscapeCard";
import fetch from "node-fetch";

export async function GetFeatures(): Promise<CardData[]> {
    const response = await fetch(`${baseUrl()}/featured`);
    const json = await response.json();
    return json.features;
}

function baseUrl() {
    return process.env.URL_INTERNAL_API || "http://localhost:8000"
}