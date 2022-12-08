
let cursos_idiomas = [
    { nome: "Inglês", preco: 2500, carga_horaria: 160 },
    { nome: "Espanhol", preco: 1500, carga_horaria: 110 },
    { nome: "Francês", preco: 3600, carga_horaria: 200 },
    { nome: "Chinês", preco: 5500, carga_horaria: 400 },
    { nome: "Alemão", preco: 3800, carga_horaria: 230 }
];

for (let curso of cursos_idiomas) {

    let nome = curso.nome;
    let carga_horaria = curso.carga_horaria;
    let preco = curso.preco;

    console.log("Nome do curso: " + nome);
    console.log("Carga horária do curso: " + carga_horaria + "hrs");
    console.log("Preço do curso: " + preco);
    
    let valor_hora = preco / carga_horaria;

    if (valor_hora >= 15){
        console.log("Hora/aula superior ou igual a R$15,00");
    }
    else {
        console.log("Hora/aula inferior a R$15,00");
    
    }
    console.log("\n");
}
