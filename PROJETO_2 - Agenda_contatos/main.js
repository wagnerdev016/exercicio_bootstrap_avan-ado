const form = document.getElementById('form-contato')
const nomes = [];
const numeros =[];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();

})

function adicionaLinha() {

    const nomeContato = document.getElementById('nome-contato');
    const numeroContato = document.getElementById('numero-contato');
    
    if (nomes.includes(nomeContato.value)) {
        alert(`o nome: ${nomeContato.value} já foi inserido`)
    } else {
        
        nomes.push(nomeContato.value);
        numeros.push(parseInt(numeroContato.value));
        
        let linha = '<tr>';
        linha += (`<td> ${nomeContato.value} </td>`);
        linha += (`<td> ${numeroContato.value} </td>`);
        linha += '<tr>';
    
        linhas += linha
    } 
    
    nomeContato.value = '';
    numeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

