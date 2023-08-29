import { NextResponse } from "next/server"
import dbClient from '../../../db/dbClient'


export async function GET(req){
    const client = await dbClient;
    const db =await client.db('propertisOfBachelors');
    const propertisCollection = await db.collection('propertis');

    // await collection.insertOne({'title':'this test insert one'});
    const propertis= await propertisCollection.find().toArray();

    return NextResponse.json({
        result:propertis
    })
}