import arquivo from "../../libs/arquivo.js"
import {connectToDatabase } from "../../config/mongodb";
export default async function comment(req, res){
    const arq = new arquivo();
    const addLinha = {email:"eve@example.com",comment:"Nah, you both are wrong",content_id:2}
    
    arq.escrever(addLinha);

    const { db } = await connectToDatabase();
    const dados = await db.collection("comentarios")

    const comentarios = await dados.find().limit(20).toArray();
    //console.log(ofertas)
    res.status(200).json({ name: `Jefte A. Costa`, data: comentarios , msg:"sucesso", code:'0'})
    
}