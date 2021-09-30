
const fs = require('fs')


class  arquivo {
    constructor(){
        this.file = './public/arquivos/database.json';
        this.dados = new Array();
    }
   
    ler(){
        
        
        const lerArquivo = JSON.parse(fs.readFileSync(this.file, 'utf8'));
        //console.log('arquivo', lerArquivo);
        
        const rt = lerArquivo

        return rt

    }
    async abrir(){
        const striming = fs.createWriteStream(this.file, {file: 'a'});
        return striming
    }
   escrever(obj) {
        const dados = this.ler()
        
        const rt = [];

        for(let i in dados) {
            rt[i] = dados[i];
        }
        rt.push(obj)
        fs.writeFileSync(this.file, JSON.stringify(rt));
          
          
    }
    
   
}
export default arquivo;