import { HttpResponse, HttpRequest } from "../protocols/http";

export interface HttpResponse {
    statusCode: number
    body: any
}

export interface HttpRequest {
    body?: any
}