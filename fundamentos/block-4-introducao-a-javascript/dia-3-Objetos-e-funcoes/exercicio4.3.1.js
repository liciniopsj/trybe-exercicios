let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim' //2
},  info2 = { //5
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

console.log('Bem-Vinda, ' + info.personagem); // 1
console.log('');
console.log(info); //2
console.log('');

for (let key in info){ //3
    console.log(key);
}

console.log('');

for (let key in info){ //4
    console.log(info[key]);
}
console.log('');
console.log(info.personagem + ' e ' + info2.personagem); //5
console.log(info.origem +' e '+ info2.origem);
console.log(info.nota +' e '+ info2.nota);
console.log('Ambos recorrentes');
console.log('');

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titutlo: 'Harry Potter e o Prisioneiro de Azkaban', //7
        autor: 'JK Rowling',
        editoria: 'Rocco',
      }
    ],
};
 
console.log('O livro favorito de Julia Pessoa se chama '+ leitor.livrosFavoritos[0].titulo); //6

console.log('');

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.'); //8
  

