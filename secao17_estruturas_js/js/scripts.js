// VARIÁVEIS
// Let -> permite criar uma variável e alterar seu valor posteriormente
let nome = "Thiago";
console.log(nome);

nome = "Thiago Fischer"; // -> é permitido
console.log(nome);

// Const -> permite criar uma constante, seu valor não pode ser alterado
const idade = 25;
console.log(idade);

// idade = 26; -> não é permitido

// É permitido declarar várias variáveis de uma vez
let a = 10,
  b = 15,
  c = 20;
console.log(a, b, c);

// FUNÇÕES PRONTAS
// Prompt -> Cria uma caixa de diálogo para o usuário preencher uma informação
// const nomeUsuario = prompt("Digite o seu nome: ");
// console.log(`O usuário ${nomeUsuario} entrou no sistema.`);

// Alert -> Cria um aviso na tela, solicitando a confirmação do usuário para prosseguir
// alert(`Olá ${nomeUsuario}, para avançar clique em OK`);

// Math -> Permite alguns tratamentos com números
console.log(Math.max(1, 5, 3, 20, 4)); // -> retorna o maior número
console.log(Math.floor(3.14)); // -> arredonda o número para cima
console.log(Math.ceil(3.14)); // -> arredonda o número para baixo

// Console
console.log("Isso é um log!");
console.error("Isso é um erro!");
console.warn("Isso é um aviso!");

// ESTRUTURA DE CONTROLE
// If - Else - Else if
const cor = "Amarelo";

if (cor === "Amarela") {
  console.log("A cor é amarela");
} else if (cor === "Amarelo") {
  console.log("A cor é amarelo");
} else {
  console.log("A cor não é amarela e nem amarelo");
}

// ESTRUTURA DE REPETIÇÃO
// While
let contador = 1;
console.log("While contando até 10!");
while (contador <= 10) {
  console.log(contador);
  contador++;
}

// Do while
let condicao = false;
do {
  console.log(condicao);
} while (condicao);

// For
for (let i = 0; i < 10; i++) {
  console.log(`Repetindo até 10: tentativa número ${i}`);
}

// Switch
const trabalho = "Engenheiro";
switch (trabalho) {
  case "Programador":
    console.log("Você é programador!");
    break;
  case "Advogado":
    console.log("Você é advogado!");
    break;
  case "Engenheiro":
    console.log("Você é engenheiro!");
    break;
  default:
    console.log("Profissão não encontrada!");
}
