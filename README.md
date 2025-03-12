**README.md**  

# Farmland Management

Este projeto consiste em uma API para gerenciar produtores rurais e suas propriedades, incluindo recursos de relatórios (dashboards).  

## Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- (Opcional) Postman ou Insomnia para testes

## Instalação e Execução

### Rodando em Docker

1. **Clone** ou baixe este repositório.  
2. **Abra** o terminal na pasta raiz.  
3. Execute:
   ```bash
   docker-compose up --build
   ```
4. Aguarde até que o contêiner do banco de dados (Postgres) e o contêiner da aplicação sejam inicializados.  
5. A aplicação estará disponível em **http://localhost:3000**.

### Rodando localmente (sem Docker)

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Execute a aplicação:
   ```bash
   npm run start:dev
   ```
3. A aplicação estará disponível em **http://localhost:3000**.

## Testando a API

1. Na pasta raiz, há um arquivo chamado `arquivo_import_insominia.json`.  
2. Abra o Insomnia.  
3. Vá em **Application** → **Import/Export** → **Import Data** → **From File**.  
4. Selecione `arquivo_import_insominia.json`.  
5. Será criado um workspace com as requisições de teste para **Producers**, **Properties** e **Dashboards**.  
6. Substitua os campos `REPLACE_WITH_ID` e `REPLACE_WITH_PRODUCER_ID` pelos IDs retornados nas requisições de listagem (`GET`).  

## Scripts Úteis

- **`npm run start`**: Sobe a aplicação em modo produção.  
- **`npm run start:dev`**: Sobe a aplicação em modo desenvolvimento, recarregando automaticamente a cada mudança.  
- **`npm run build`**: Compila o projeto TypeScript.  
- **`npm run test`**: Executa testes unitários.  

## Estrutura Básica

- **`src/`**: Código-fonte principal.  
- **`test/`**: Testes unitários e de integração.  
- **`docker-compose.yml`**: Sobe a aplicação e o banco em contêineres.  
- **`Dockerfile`**: Instruções de construção da imagem da aplicação.  
- **`arquivo_import_insominia.json`**: Arquivo com coleções de requisições para Insomnia.  
