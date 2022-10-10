# Project Trybesmith

# Sobre
- API de uma loja de itens medievais, utilizando Typescript.

- Foi desenvolvido CRUD (Create, Read, Update e Delete) de itens medievais, no formato de uma API, utilizando Typescript.

- Foi criado endpoints que para ler e escrever em um banco de dados, utilizando o MySQL.

# Rode o projeto 
  - git clone git@github.com:otavioadias/trybesmith.git
  - Instale as dependências após iniciar o projeto [Caso existam] com npm install
  
# Com Docker
Após o clone:
Rode os serviços node e db com o comando docker-compose up -d.

Lembre-se de parar o mysql se estiver usando localmente na porta padrão (3306), ou adapte, caso queira fazer uso da aplicação em containers
Esses serviços irão inicializar um container chamado trybesmith e outro chamado trybesmith_db.
A partir daqui você pode rodar o container trybesmith via CLI ou abri-lo no VS Code.
Use o comando docker exec -it trybesmith bash.

Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
Instale as dependências [Caso existam] com npm install

# Endpoints
Para testar as requisições HTTP pode ser usado qualquer cliente, no projeto foi utilizado o Thunder Client direto do VSCode.

Caso use o Thunder Client basta fazer o import, está disponível todos os endpoints no arquivo: thunder-collection_TRYBESMITH.json

<!-- Olá, Tryber!

Esse é apenas um arquivo inicial para o README do seu projeto.

É essencial que você preencha esse documento por conta própria, ok?

Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!

⚠️ IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.

-->
