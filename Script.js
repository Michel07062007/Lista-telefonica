const form = document.getElementById('form-tel')
let linhas = '';
const tel = [];
const Nome = [];
const nome = document.getElementById("nome")
const telefone = document.getElementById("telefone")

form.addEventListener('submit', function(e) {
    e.preventDefault();

    verificacaoEAdicaoTabela();
    atualizaTabela();
})

function verificacaoEAdicaoTabela() {
    if ((nome.value) == Nome) {
        alert("O nome ou o telefone já foram registrados!!!")
    } else {
        let linha = '<tr>';
        linha += `<td>${nome.value}</td>`;
        linha += `<td>${telefone.value}</td>`;
        linha += '</tr>'
        linhas += linha
        Nome.push(nome.value)
        tel.push(telefone.value)
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

console.log(form);
