import arquivo from "../../../libs/arquivo"
import {connectToDatabase } from "../../../config/mongodb";
export default async function newComent(req, res){
  const {
    body = {          
      email,
      comment,
      content_id    
    },
    method,
  } = req;

  const { db } = await connectToDatabase();
  const dados = await db.collection("comentarios")
  
  if (req.method === 'POST') {
        // console.log(req.body)

        // const arq = new arquivo();
        // const addLinha = req.body;
        
        // arq.escrever(addLinha);
        // res.status(200).send("sucesso")
    
    if(!body){
          res.status(400).json({ name: `Jefte A. Costa`, msg:"error", code:'0'})
    }else{
      try{
          const result = await dados.insertOne(body);
          if(result){
              res.status(200).json({ name: `Jefte A. Costa`, msg:"sucesso", code:'0'})
          }
      }catch(e){
          res.status(500).json({ name: `Jefte A. Costa`, msg:e, code:'99'})
      }
    }

  } else {
        res.send('nada foi enviado');
  }
 }