import { baseUrl } from "../../static/constants";
import { handleResponse } from "./apiHelper";
import { GetRequestInit } from "./userAPI";

export async function getResourceById(resourceID: string) : Promise<object> {
    return fetch(`${baseUrl}api/resources/${resourceID}`,GetRequestInit).then(handleResponse).then((result)=> result);
}

export async function getKeywords(): Promise<object> {
    return fetch(`${baseUrl}api/keywords`,GetRequestInit).then(handleResponse).then((result)=> result);
}

export async function getSynonyms(): Promise<object> {
    return fetch(`${baseUrl}api/synonyms`,GetRequestInit).then(handleResponse).then((result)=> result);
}

export async function getResourcesKeywords(resourceID: string): Promise<object> {
    return fetch(`${baseUrl}api/resources/${resourceID}/keywordID`,GetRequestInit).then(handleResponse).then((result)=> result);
}