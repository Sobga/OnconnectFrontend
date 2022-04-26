import { baseUrl, SESSOIN_KEY } from "../../static/constants";
import { KeywordRequestType } from "../../static/types";
import { handleResponse } from "./apiHelper";

export const GetRequestInit = {
    method: 'GET',
    headers: {
        'accept':'application/json',
        'Authorization':`Bearer ${SESSOIN_KEY}`
    }
}

export const PostRequestInit = (body: any) => {
    return {
        method:'POST',
        headers: {
            'accept': '*/*',
            'Authorization':`Bearer ${SESSOIN_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}

export const DeleteRequestInit = (body: any) => {
    return {
        method:'DELETE',
        headers: {
            'accept': '*/*',
            'Authorization':`Bearer ${SESSOIN_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}

export async function getUser(userID: string): Promise<object>{
    return fetch(`${baseUrl}api/users/${userID}`, GetRequestInit).then(handleResponse).then((result)=> result);
}

export async function getUsersInterests(userID: string): Promise<object> {
    return fetch(`${baseUrl}api/users/${userID}/interestID`,GetRequestInit).then(handleResponse).then((result)=> result);
}

export async function getUsersSuggestions(userID: string): Promise<object> {
    return fetch(`${baseUrl}api/users/${userID}/suggestionID`,GetRequestInit).then(handleResponse).then((result)=> result);
}

export async function postInterest(userID: string, keywordRequest: KeywordRequestType & any): Promise<object> {
    const postRequest= PostRequestInit(keywordRequest);

    return fetch(`${baseUrl}api/users/${userID}/interestID`, postRequest)
        .then(handleResponse)
        .then((result) => result)
    
}

export async function deleteInterest(userID: string, keywordRequest: KeywordRequestType & any): Promise<object> {
    const postRequest= DeleteRequestInit(keywordRequest);

    return fetch(`${baseUrl}api/users/${userID}/interestID`, postRequest)
        .then(handleResponse)
        .then((result) => result)
    
}