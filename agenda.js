let ids = 0;
let agenda = [];

module.exports = {
    save(nome,tipo,contato){
        let obj = {id: ++ids, nome: nome, tipo: tipo, contato: contato}
        agenda.push(obj)
        return obj;
    },
    update(id, nome, tipo, contato){
        let pos = this.getPositionById(id);
        if(pos >=0){
            let obj = {id: id, nome: nome, tipo: tipo, contato: contato}
            agenda[pos] = obj;
        }
        return agenda[pos]
    },
    list(){
        return agenda;
    },
    listByname(nome){
        let lista = [];
        for(let i = 0; i<agenda.length; i++){
            if(agenda[i].nome.toUpperCase().startsWith(nome.toUpperCase())){
                lista.push(agenda[i])
            }
        }
        return lista;
    },
    getElementById(id){
        let pos = this.getPositionById(id);
        if(pos >=0){
            return agenda[pos];
        }
        return null;
    },
    getPositionById(id){
        for(let i =0; i<agenda.length; i++){
            if(agenda[i].id == id){
                return i;
            }
        }
        return -1;
    },
    delete(id){
        let i = this.getPositionById(id);
        if(i >= 0){
            agenda.splice(i,l);
            return true;
        }
        return false;
    }
}