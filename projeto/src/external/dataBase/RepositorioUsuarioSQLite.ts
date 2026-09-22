import db from "./db";
import Usuario from "../../core/usuario/model/Usuario";

export default class RepositorioUsuarioSQLite {
  async inserir(usuario: Usuario) {
    db.prepare(
      `INSERT INTO usuarios
            (id, nome, email, senha)
            VALUES (?, ?, ?, ?)`,
    ).run(usuario.id, usuario.nome, usuario.email, usuario.senha);
  }

  async buscarPorEmail(email: string): Promise<Usuario | null> {
    const usuario = db
      .prepare("SELECT * FROM usuarios WHERE email = ?")
      .get(email) as Usuario | undefined;

    if (!usuario) return null;

    return usuario;
  }
}
