
const input = document.querySelector('#taskInput');
const btn = document.querySelector('#addTaskBtn');
const lista = document.querySelector('#taskList');


function adicionarTarefa() {
    const textoTarefa = input.value.trim();

    if (textoTarefa !== "") {
        
        const novaLi = document.createElement('li');
        
        
        novaLi.textContent = textoTarefa;

        
        lista.appendChild(novaLi);

        
        input.value = "";
        input.focus();
    } else {
        alert("Digite algo antes de adicionar!");
    }
}

//botão
btn.addEventListener('click', adicionarTarefa);


input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') adicionarTarefa();
});


lista.addEventListener('click', function(event) {
    
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});