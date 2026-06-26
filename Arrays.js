let tarefas = [

{
id:1,
descricao:"Estudar Banco de Dados",
prioridade:5
},

{
id:2,
descricao:"Fazer trabalho de JavaScript",
prioridade:4
},

{
id:3,
descricao:"Organizar arquivos",
prioridade:2
},

{
id:4,
descricao:"Criar projeto",
prioridade:5
},

{
id:5,
descricao:"Revisar conteúdo",
prioridade:3
}

];



// LISTAR DADOS

function listar(){

console.log("LISTA DE TAREFAS:");

tarefas.forEach(tarefa => {

console.log(
"ID:", tarefa.id,
"| Descrição:", tarefa.descricao,
"| Prioridade:", tarefa.prioridade
);

});

}



// SELECTION SORT
// Maior prioridade primeiro

function ordenar(){

for(let i = 0; i < tarefas.length; i++){

let maior = i;


for(let j = i+1; j < tarefas.length; j++){

if(tarefas[j].prioridade > tarefas[maior].prioridade){

maior = j;

}

}


let aux = tarefas[i];

tarefas[i] = tarefas[maior];

tarefas[maior] = aux;


}

}



// BUSCA BINÁRIA

function buscar(id){


let inicio = 0;

let fim = tarefas.length
1;

while(inicio <= fim){


let meio = Math.floor(
(inicio + fim) / 2
);


if(tarefas[meio].id === id){

return tarefas[meio];

}


if(tarefas[meio].id < id){

inicio = meio + 1;

}

else{

fim = meio -1;

}


}


return null;

}




// EXECUÇÃO

listar();


console.log("\nOrdenando tarefas...");

ordenar();


listar();



console.log("\nBusca pela tarefa ID 3:");

let resultado = buscar(3);


if(resultado){

console.log(resultado);

}

else{

console.log("Tarefa não encontrada");

}

