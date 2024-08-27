import { commonAPI } from "./commonAPI"
import { server_url } from "./serverUrl"

export const registerAPI  =async(reqBody)=>{
    return await commonAPI("POST",`${server_url}/register`,reqBody)
}