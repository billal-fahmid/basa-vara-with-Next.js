import { NextResponse } from "next/server";
import dbClient from '../../../db/dbClient'

export async function POST(req){
    const newProperty =await req.json();
    const client =await dbClient;
    const db= await client.db('propertisOfBachelors')
    const propertisCollection = await db.collection('propertis');

    const result = await propertisCollection.insertOne(newProperty)
    return NextResponse.json({
        result,status:'success'
    })
}