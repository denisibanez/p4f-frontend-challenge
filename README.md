# p4f-frontend-challenge

1 - Requisitos
A. Enquanto usuário, desejo visualizar uma lista de clientes.
B. Enquanto usuário, desejo que a lista de clientes seja navegável.
C. Enquanto usuário, desejo que por padrão o primeiro usuário da lista seja
selecionado inicialmente.
D. Enquanto usuário, desejo que ao selecionar o usuário seja exibido nome e o
endereço do usuário, abaixo do menu de navegação.
E. Enquanto usuário, desejo uma navegação de “Fotos” e “Posts” do usuário
selecionado, controlando o conteúdo exibido.
F. Enquanto usuário, desejo que por padrão a navegação “Fotos” seja exibida
inicialmente.
G. Enquanto usuário, desejo que ao navegar para opção “Fotos” seja exibida uma
imagem em destaque, por padrão, a primeira da lista do usuário selecionado.
H. Enquanto usuário, desejo que ao navegar para opção “Fotos” seja exibido um
carrossel de thumbnails das imagens listadas do usuário selecionado, com o intuito
de controlar a imagem em destaque.
I. Enquanto usuário, desejo que ao navegar para opção “Posts” seja exibida uma
listagem de todos os posts do usuário selecionado

2 - Especificações Técnicas
O sistema deve seguir o wireframe proposto, com isso as funcionalidades a serem
desenvolvidas serão avaliadas de acordo com o seu nível.
● A aplicação deve se comportar como uma Single Page Application;
● Utilização de Rotas para navegação;
● Ao navegar entre as rotas, as informações devem ser mantidas e não pode haver
refresh da listagem;
● Gerenciamento de estado;
● Armazenar todas as informações no estado utilizando a arquitetura Flux e/ou utilizar
Context API;
● Ao navegar nos filtros laterais, todas as informações devem já estar no estado;
● Configurar eslint;
Microinterações na interface;
● Testes unitários;
● Execução dos testes unitários no build do projeto;
● Utilizar alguma metodologia para CSS (BEM, SMACSS, OOCSS, ATOMIC CSS,
DRY CSS);
● Criar o Story Book dos Components;
● A aplicação deve ser responsiva (mobile, tablet, desktop);
● Mobile First;
● CSS in JS.

3 - Métodos da API
Método URL GET
Lista de usuários https://jsonplaceholder.typicode.com/us
ers
Lista de fotos por id do usuário https://jsonplaceholder.typicode.com/ph
otos?albumId={ID do usuário}
Lista de posts por id do usuário https://jsonplaceholder.typicode.com/po
sts?userId={ID do usuário}
