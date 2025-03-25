# Documentação do Projeto Agenda Frontend

## Visão Geral

O **Agenda Frontend** é uma aplicação desenvolvida em **Vue.js** com o objetivo de realizar um CRUD (Criar, Ler, Atualizar, Deletar) de contatos. Ele está integrado com a **AgendaAPI** (desenvolvida em .NET 7) e permite interações como adicionar, listar, atualizar e deletar contatos.

### 📌 Observação Importante

Antes de rodar o projeto do frontend, **remova temporariamente a autenticação** do `ContatoController` nos métodos `POST`, `PUT` e `DELETE` da **AgendaAPI**. Pois o frontend foi desenvolvido sem autenticação devido que ainda estou estudando o Vue.Js e foi a primeira vez que usei em um projeto.

👉 Remover o atributo `[Authorize]` nos seguintes métodos da API:

```csharp
[HttpPost]
public async Task<IActionResult> CriarContato(CreateContatoInputModel model)

[HttpPut("{id}")]
public async Task<IActionResult> AtualizarContato(int id, UpdateContatoInputModel model)

[HttpDelete("{id}")]
public async Task<IActionResult> DeletarContato(int id)
```

> Após validar o frontend, você pode restaurar o `[Authorize]` para proteger essas rotas.

✅ **Importante**: O backend pode ser testado de forma independente utilizando o **Swagger** disponível em `https://localhost:7067/swagger`.   

---

## 🛠️ Tecnologias Utilizadas

- **Vue.js 3**: Framework progressivo para construção de interfaces.
- **PrimeVue**: Biblioteca de componentes UI para Vue.
- **Axios**: Cliente HTTP para fazer requisições assíncronas.
- **Vue Router**: Gerenciamento de rotas.
- **AgendaAPI**: Backend em .NET 7 responsável pelo armazenamento e processamento dos contatos.

## 📂 Estrutura de Diretórios

```
src/
├── assets/             # Arquivos estáticos (imagens, CSS globais)
├── components/         # Componentes reutilizáveis
│   ├── ContactForm.vue   # Formulário de contato (Adicionar/Atualizar)
│   └── ContactList.vue   # Lista de contatos (Página principal)
├── views/             
│   └── HomeView.vue      # Página inicial
├── router/              
│   └── index.js          # Configuração de rotas
├── App.vue               # Componente raiz
└── main.js               # Inicialização do Vue
```

## 📌 Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente:

- **Node.js** (versão 18 ou superior)
- **NPM** (gerenciador de pacotes do Node.js)

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**

```bash
git clone [https://github.com/seu-usuario/agenda-frontend.git](https://github.com/Sandokanalves/Agenda_Frontend_VueJS.git)
cd agenda-frontend
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Inicie a aplicação:**

```bash
npm run serve
```

A aplicação estará disponível em `http://localhost:8080`.

## 🔄 Fluxo do CRUD

1. **Listar contatos:** A página principal exibe todos os contatos cadastrados.
2. **Adicionar contato:** Preencha o formulário para adicionar um novo contato.
3. **Atualizar contato:** Edite um contato existente.
4. **Deletar contato:** Remova um contato da lista.

## 📊 Testar o Backend com Swagger

Se desejar testar a **AgendaAPI** independentemente do frontend,

&#x20;acesse o repositorio  :  [https://github.com/Sandokanalves/AgendaApi.git](https://github.com/Sandokanalves/AgendaApi.gito)

e use o para Swagger em:

```
https://localhost:7067/swagger
```

> Lembre-se de restaurar o `[Authorize]` nos métodos `POST`, `PUT` e `DELETE`  para usar autenticação funcionar;  após validar o frontend.

## 📣 Considerações Finais

Este projeto é uma primeira experiência com **Vue.js** e foi desenvolvido para um **Desafio Técnico**.  Ele pode ser expandido no futuro para incluir autenticação JWT diretamente no frontend e aprimorar a segurança das operações CRUD.


