import { Picture } from "./Picture";

export interface SearchResponse {
    total: number;
    total_pages: number;
    results: Picture[];
}