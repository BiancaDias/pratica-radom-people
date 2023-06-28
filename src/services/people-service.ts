import {getTotal} from "../repositories/people-repositories";
import {getPersonDB} from "../repositories/people-repositories";

export default async function getPersonService(){
    const total = await getTotal()
    const id = Math.floor(Math.random()*total.rows[0].count)+1
    return await getPersonDB(id)
}