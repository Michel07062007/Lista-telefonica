const form = document.getElementById('form-tel')
let linhas = '';
const tel = [];
const Nome = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinhas()
    atualizaTabela()
});

function adicionaLinhas() {
    const nome = document.getElementById("nome")
    const telefone = document.getElementById("telefone")

    Nome.push(nome.value);
    tel.push(telefone.value);

    let linha = '<tr>';
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${telefone.value}</td>`;
    linha += '</tr>'

    linhas += linha

    nome.value = '';
    telefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

console.log(form);
