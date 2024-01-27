const alunos = [
    { nome: "João", nota: 8.5 },
    { nome: "Maria", nota: 5.0 },
    { nome: "Pedro", nota: 4.8 },
    { nome: "Ana", nota: 6.5 },
    { nome: "Carlos", nota: 9.5 }
];

const alunosAprovados = alunos => alunos.filter(aluno => aluno.nota >= 6);

const alunosAprovadosLista = alunosAprovados(alunos);

console.log("Alunos aprovados:");
alunosAprovadosLista.forEach(aluno => console.log(`Aluno: ${aluno.nome}, Nota: ${aluno.nota}`));
