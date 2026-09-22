import dotenv from "dotenv";
import express from "express";
import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario";
import RepositorioUsuarioSQLite from "./external/dataBase/RepositorioUsuarioSQLite";
import SenhaCripto from "./external/auth/SenhaCripto";
import RegistrarUsuarioController from "./external/api/RegistrarUsarioController";
dotenv.config();

const app = express();
const porta = process.env.API_PORT ?? 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(porta, () => {
  console.log(`🔥 Servidor executando na porta ${porta}!`);
});

const repositorioUsuario = new RepositorioUsuarioSQLite()
const provedorCripto = new SenhaCripto()
const registrarUsuario = new RegistrarUsuario(
  repositorioUsuario,
  provedorCripto,
)
 new RegistrarUsuarioController(app, registrarUsuario)
