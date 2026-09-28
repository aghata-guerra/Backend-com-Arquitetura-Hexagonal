import dotenv from "dotenv";
import express from "express";
import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario";
import RepositorioUsuarioSQLite from "./external/dataBase/RepositorioUsuarioSQLite";
import SenhaCripto from "./external/auth/SenhaCripto";
import RegistrarUsuarioController from "./external/api/RegistrarUsuarioController";
import LoginUsuario from "./core/usuario/service/LoginUsuario";
import LoginUsarioController from "./external/api/LoginUsuarioController copy";
import ObterProdutoPorId from "./core/produto/service/ObterProdutoPorId";
import ObterProdutoPorIdController from "./external/api/ObterProdutoPorIdController";
import UsuarioMidlleware from "./external/api/UsuarioMidlleware";
dotenv.config();

const app = express();
const porta = process.env.API_PORT ?? 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(porta, () => {
  console.log(`🔥 Servidor executando na porta ${porta}!`);
});

// ------------------------------------------ Rotas Abertas

const repositorioUsuario = new RepositorioUsuarioSQLite()
const provedorCripto = new SenhaCripto()
const registrarUsuario = new RegistrarUsuario(
  repositorioUsuario,
  provedorCripto,
)
const loginUsuario = new LoginUsuario(

  repositorioUsuario,
  provedorCripto
)
 new RegistrarUsuarioController(app, registrarUsuario)
new LoginUsarioController(app, loginUsuario)

// ------------------------------------------ Rotas Protegidas

const usuarioMid = UsuarioMidlleware(repositorioUsuario)
const obterProdutoPorId = new ObterProdutoPorId()
new ObterProdutoPorIdController(app, obterProdutoPorId,usuarioMid)
