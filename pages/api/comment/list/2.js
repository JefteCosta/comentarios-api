import arquivo from "../../../../libs/arquivo"
import {connectToDatabase } from "../../../../config/mongodb";
export default async function handler(req, res){
    // const arq = new arquivo();
   
    // const dados = arq.ler();

    // const rt = [];
    // for(let i in dados){
    //     if(dados[i].content_id == 2){
    //         rt[i] = dados[i];
    //     }
    // }
    // res.json({data: rt});
    const { db } = await connectToDatabase();
    const dados = await db.collection("comentarios")

    const comentarios = await dados.find({content_id:2}).limit(20).toArray();
    
    res.status(200).json({ name: `Jefte A. Costa`, data: comentarios , msg:"sucesso", code:'0'})
}