import { Express } from "express";
import ObterProdutoPorId from "@/core/produto/service/ObterProdutoPorId";

export default class ObterProdutoPorIdController {
  constructor(
    servidor: Express, 
    casoDeUso: ObterProdutoPorId,
    ...middlewares: any[]
  
  ) {
    servidor.post(
      "/api/produtos/:id",
      ...middlewares,

      //async (req, resp, next) => { *PROCESSAMENTO* next()},

      // Padão de Midlleware,
      // onde passamos atraves de handless
      // as chamadas (404) quando algo da errado no codigo.

      async (req, resp) => {
        try {
          const produto = await casoDeUso.executar({
            produtoId: (req.params as any).id,
            usuario: (req as any).usuario
          })


          resp.status(200).send( produto);
        } 
        catch (erro: any) {
          resp.status(400).send(erro.message);
        }
      },
    );
  }
}
