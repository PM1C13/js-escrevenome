Skip to Play Sketch
Cookies
The p5.js Editor uses cookies. Some are essential to the website functionality and allow you to manage an account and preferences. Others are not essential—they are used for analytics and allow us to learn more about our community. We never sell this data or use it for advertising. You can decide which cookies you would like to allow, and learn more in our Privacy Policy.


Allow All

Allow Essential

Angry ravioli
by PM1C13

PM1C13
My Stuff
Settings
Log Out

Arquivo
Novo
Salvar
Exemplos
Editar
Organizar Código
Procurar
Esboço
Adicionar Arquivo
Adicionar Pasta
Settings
Preferences
Language
Ajuda
Atalhos de Teclado
Referência
Sobre


sketch.js
1
// ação, drama, esporte, ficção científica, aventura, fantasia, super-heroi
2
​
3
// Gigantes de Aço, 10, ação, drama, esporte, ficção científica
4
// Circulo de Fogo, 12, ação, aventura, ficção científica
5
// Circulo de Fogo: A Revolta, 12, ação
6
// Vingadores: Ultimato, 12, ação, aventura, fantasia, ficção científica, super-herói
7
// Guardiões da Galáxia, 12, fantasia, aventura
8
​
9
let campoIdade;
10
let campoFantasia;
11
function setup() {
12
  createCanvas(800, 400);
13
  createElement("h2", "Recomendador de filmes");
14
  createSpan("Sua idade:");
15
  campoIdade = createInput("5");
16
   campoFantasia = createCheckbox("Gosta de fantasia?");
17
  campoAventura = createCheckbox("Gosta de aventura?");
18
}
19
function draw() {
20
  background("white");
21
  let idade = campoIdade.value();
22
  let gostaDeFantasia = campoFantasia.checked();
23
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia);
24
  
25
  fill(color(60, 50, 110)); // Um tom de roxo escuro
26
 textAlign(CENTER, CENTER); 
27
  textSize(38);
28
    text(recomendacao, width/2, height/2);
29
}
30
​
31
function geraRecomendacao() {
32
  return "Gigantes de Aço";
33
}
34
​
35
function geraRecomendacao(idade, gostaDeFantasia) {
36
    if (idade >= 10) {
Não há mensagens de Lint
Linha atuallinha 1