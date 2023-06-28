import { db } from "../database/database.connection";

export function getPersonDB(id: number){
    return db.query(`SELECT * FROM people WHERE id = $1`, [id])
}

export function getTotal(){
    return db.query(`SELECT COUNT(*) AS count FROM people;`)
}