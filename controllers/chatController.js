
let usuarios = [
]

export default class ChatContoller {

    adicionar(req, res) {
        if(usuarios.findIndex(x=> x.nome == req.body.nome && x.sala == req.body.sala) == -1)
            usuarios.push({nome: req.body.nome, sala: req.body.sala})

        let qtde = usuarios.length;

        res.status(200).json({qtde: qtde, usuarios: usuarios});
    }


    validarSala(req, res) {
        let cheia = usuarios.filter(x=>  x.sala == req.body.sala).length >= 4;
        res.status(200).json({cheia: cheia});
    }

    remover(nome, sala) {
        usuarios = usuarios.filter(x=> x.nome != nome && x.sala != sala);
    }
}