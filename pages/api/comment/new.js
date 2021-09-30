import arquivo from "../../../libs/arquivo"
export default function comment(req, res){
    if (req.method === 'POST') {
        console.log(req.body)

        const arq = new arquivo();
        const addLinha = req.body;
        
        arq.escrever(addLinha);
        res.status(200).send("sucesso")
      } else {
        res.send('nada foi enviado');
      }
 }