import arquivo from "../../../../libs/arquivo"
export default function handler(req, res){
    const arq = new arquivo();
   
    const dados = arq.ler();

    const rt = [];
    for(let i in dados){
        if(dados[i].content_id == 1){
            rt[i] = dados[i];
        }
    }
    res.json({data: rt});
}