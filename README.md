# Docker-Meme-Generator
Gerador de Meme usando o pacote node meme-generator. A imagem que está no host é mapeada pelo container e manipulada pelo processador de imagens GrapicsMagick

# TODO
- Desenvolver front onde o usuário informe o texto que ficará acima e abaixo da imagem e, após clicar no botão 'Gerar meme', o meme pronto seja exibido em tela;
- Implementar funcionalidade onde o usuário possa informar o link de uma imagem ou upar uma imagem na própria aplicação;
- Deploy no Heroku;

# Como usar?
1. Pasa usar é necessário que tenha o Docker e Docker-Compose instalados;
2. Faça um clone do repositório;
3. Instale as dependências com usando o comando '**npm install**' na pasta do projeto
4. Inicie a aplicação usando o comando '**docker-compose up --build**'
5. As imagens estão na pasta 'img' na raíz do projeto. Para mudar a imagem e/ou textos do meme, basta copiar a imagem que você quer para a pasta 'img' e alterar o arquivo que ele está sendo usado no index.js.
