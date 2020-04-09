import Integer from "neo4j-driver/types/integer";

export interface ListResponse<T> {
    count: Integer;
    items: T[];
}