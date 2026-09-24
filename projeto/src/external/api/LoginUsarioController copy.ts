import { Express } from "express";
import LoginUsuario from "@/core/usuario/service/LoginUsuario";

export default class LoginUsarioController {

  constructor(servidor: Express, casoDeUso: LoginUsuario) {
    
    servidor.post("/api/usuarios/login", async (req, resp) => {
      try {
        const resposta = await casoDeUso.executar({
          email: req.body.email,
          senha: req.body.senha,
        });
        resp.status(200).send(resposta);
      } 
      catch (erro: any) {
        resp.status(400).send(erro.message);
      }
    });
  }
}
