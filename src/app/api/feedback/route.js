import { NextResponse } from "next/server"
import dbClient from '../../../db/dbClient'


export async function GET(req){
    const client = await dbClient;
    const db =await client.db('propertisOfBachelors');
    const propertisCollection = await db.collection('feedback');

    // await collection.insertOne({'title':'this test insert one'});
    const feedback= await propertisCollection.find().toArray();

    return NextResponse.json({
        result:feedback
    })
}