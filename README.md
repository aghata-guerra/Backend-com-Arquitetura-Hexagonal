# Arquitetura Hexagonal

Projeto desenvolvido durante os estudos de Arquitetura Hexagonal (Ports and Adapters), aplicando conceitos de separação de responsabilidades, casos de uso, entidades de domínio e persistência de dados.

## Tecnologias

- Node.js
- TypeScript
- Express
- SQLite
- Better SQLite3
- UUID
- Thunder Client / Postman

## Estrutura do Projeto

```text
src
├── core
│   └── usuario
│       ├── model
│       ├── service
│       └── provider
│
├── external
│   ├── api
│   └── db
│
└── shared
```

## Funcionalidades

- Cadastro de usuários
- Busca de usuários
- Validação de dados
- Persistência em banco SQLite
- API REST

## Instalação

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Entre na pasta:

```bash
cd nome-do-projeto
```

Instale as dependências:

```bash
npm install
```

## Executando o Projeto

Modo desenvolvimento:

```bash
npm run dev
```

Build do projeto:

```bash
npm run build
```

Executar versão compilada:

```bash
npm start
```

## Banco de Dados

O projeto utiliza SQLite para armazenamento local de dados.

O banco é criado automaticamente na primeira execução da aplicação.

## Exemplo de Requisição

### Criar usuário

**POST**

```http
/api/usuarios
```

Body:

```json
{
  "nome": "Aghata Guerra",
  "email": "aghata@email.com",
  "senha": "123456"
}
```

Resposta:

```json
{
  "id": "uuid-gerado",
  "nome": "Aghata Guerra",
  "email": "aghata@email.com"
}
```

## Conceitos Aplicados

- Arquitetura Hexagonal
- Clean Architecture
- Inversão de Dependência
- Separação de Responsabilidades
- Programação Orientada a Objetos
- Repository Pattern
- Injeção de Dependências

## Autor

Aghata Guerra
