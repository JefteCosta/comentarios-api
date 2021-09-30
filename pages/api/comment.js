import arquivo from "../../libs/arquivo.js"
export default function comment(req, res){
    const arq = new arquivo();
    const addLinha = {email:"eve@example.com",comment:"Nah, you both are wrong",content_id:2}
    
    arq.escrever(addLinha);



    res.json({data: arq.ler()});
}