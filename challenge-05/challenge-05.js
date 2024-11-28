/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [9, 'Cicero', null, {a: 1}, function() {}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(array)[0]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arr, index){
        return arr[index];    
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array2 = [1, 'Cicero', true, undefined, null];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(array2, 0));
console.log(myFunction2(array2, 1));
console.log(myFunction2(array2, 2));
console.log(myFunction2(array2, 3));
console.log(myFunction2(array2, 4));
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function biblioteca(nomeLivro) {
    var res;
    var livraria = {
        'Mago': {            
            quantidadePaginas:  600,
            autor: 'Raymond Feist',
            editora: 'Abril'   
        },
        'Duna': {
            quantidadePaginas:  700,
            autor: 'Frank Herbert',
            editora: 'Novatec'     
        },
        'Senhor dos Aneis': {
            quantidadePaginas:  500,
            autor: 'JK Tolkien',
            editora: 'Edipro'     
        }
    }
    
    return !nomeLivro ? livraria : livraria[nomeLivro];
};        

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(biblioteca());
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nome_do_livro = 'Mago';

console.log('O livro ' + nome_do_livro + ' tem ' + biblioteca(nome_do_livro).quantidadePaginas + ' páginas!');
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + nome_do_livro +  ' é ' + biblioteca(nome_do_livro).autor + '.');
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + nome_do_livro +  ' foi publicado pela editora ' + biblioteca(nome_do_livro).editora + '.');