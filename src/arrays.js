const alunos = [
    {nome: 'Joao', nota: 7},
    {nome: 'Maria', nota: 5},
    {nome: 'Julia', nota: 6}
];
const filtraNotasAlunos = alunos.filter((aluno) => aluno.nota >= 6);
console.log('Alunos com notas >= 6');
console.log('------------------- ');
console.log(filtraNotasAlunos);