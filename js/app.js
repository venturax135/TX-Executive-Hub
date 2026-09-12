let historico = JSON.parse(
localStorage.getItem("txHistorico")
) || [];

const favoritos = [

"Emergent Cold",
"Nexxa",
"Patrus",
"Mercado Livre",
"Braspress",
"Favorita",
"Pulmer",
"3 Corações",
"ID Logistics",
"Super Frio"

];

function carregarPrompt(nome){

document.getElementById(
"promptArea"
).value = prompts[nome];

salvarHistorico(prompts[nome]);

}

function gerarCliente(){

let cliente =
document.getElementById(
"cliente"
).value;

let prompt = `
Monte um dossiê completo do cliente ${cliente}.

Analise:

- Emails
- Reuniões
- Arquivos

Mostre:

Histórico
Contratos
Pendências
Riscos
Próximos passos
`;

document.getElementById(
"promptArea"
).value = prompt;

salvarHistorico(prompt);

}

function copiarPrompt(){

let texto =
document.getElementById(
"promptArea"
).value;

navigator.clipboard
.writeText(texto);

alert("Prompt copiado.");

}

function abrirCopilot(){

copiarPrompt();

let popup =

window.open(

"https://m365.cloud.microsoft/chat",

"_blank"

);

if(

!popup ||
popup.closed ||
typeof popup.closed==="undefined"

){

alert("O navegador bloqueou o pop-up.");

return;

}

}

function salvarHistorico(texto){

if(!texto) return;

historico.unshift(texto);

historico =
historico.slice(0,20);

localStorage.setItem(

"txHistorico",

JSON.stringify(historico)

);

renderHistorico();

}

function renderHistorico(){

let div =
document.getElementById("historico");

if(!div) return;

div.innerHTML="";

historico.forEach(item=>{

div.innerHTML += `
<div class='history-item'
onclick='recarregarPrompt(\`${item}\`)'>
${item.substring(0,60)}...
</div>`;

});

}

function recarregarPrompt(texto){

document.getElementById(
"promptArea"
).value = texto;

}

function carregarFavoritos(){

let div =
document.getElementById("favoritos");

div.innerHTML = "";

favoritos.forEach(cliente=>{

div.innerHTML += `
<button class='fav-btn'
onclick="favorito('${cliente}')">
${cliente}
</button>`;

});

}

function favorito(cliente){

document.getElementById(
"cliente"
).value = cliente;

gerarCliente();

}

window.onload = ()=>{

carregarFavoritos();
renderHistorico();

if('serviceWorker' in navigator){

navigator.serviceWorker
.register('service-worker.js');

}

};
