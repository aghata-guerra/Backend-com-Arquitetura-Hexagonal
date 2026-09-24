// Esta interface é uma porta na arquitetura hexagonal.
// Faz parte do core da aplicação

export default interface ProvedorCriptografia{
    criptografar(texto: string): string
    comparar(senha: string, senhaCriptografada: string): boolean
}