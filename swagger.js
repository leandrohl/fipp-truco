
import swaggerAutogen from "swagger-autogen";
import UsuarioModel from "./models/usuarioModel.js";
import LoginModel from "./models/loginModel.js";

const doc = {
    info: {
        title: "API - FIPP Truco",
        description: "API utilizada para o jogo de truco"
    },
    host: 'localhost:5000',
    components: {
        securitySchemes:{
        },
        schemas: {
            usuarioModel: new UsuarioModel(999, "Fulano", "123abc", "fulano@unoeste.br").toJSON(),
            loginModel: new LoginModel("teste@teste.com", "123").toJSON(),
        },
    }
}

const outputJson = "./swagger-output.json";
const routes = ['./server.js']

swaggerAutogen({openapi: '3.0.0'})(outputJson, routes, doc)
.then( async () => {
    await import('./server.js');
})
