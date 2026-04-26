import { useState } from 'react'
import './App.css'

function App() {
  // REQUISITO: Estado da Lista (Array de objetos)
  const [tarefas, setTarefas] = useState([
    { id: 1, text: 'Aprender React Hooks' }
  ]);

  // REQUISITO: Estado do Input (Componente Controlado)
  const [inputTexto, setInputTexto] = useState('');

  // REQUISITO: Adicionar Tarefa
  const adicionarTarefa = (e) => {
    e.preventDefault(); // Evita que a página recarregue ao enviar o form

    if (inputTexto.trim() === '') return;

    const novaTarefa = {
      id: Date.now(), // Gera um ID único baseado no tempo atual
      text: inputTexto
    };

    // Atualização IMUTÁVEL: criamos um novo array com a nova tarefa
    setTarefas([...tarefas, novaTarefa]);
    
    // Limpar o input após adicionar
    setInputTexto('');
  };

  // REQUISITO: Remover Tarefa
  const removerTarefa = (idParaRemover) => {
    // Filtramos o array para manter apenas quem NÃO tem o ID clicado
    const listaFiltrada = tarefas.filter(tarefa => tarefa.id !== idParaRemover);
    setTarefas(listaFiltrada);
  };

  return (
    <div className="container">
      <h1>To-Do List React</h1>

      <form onSubmit={adicionarTarefa}>
        {/* REQUISITO: Input Controlado (value + onChange) */}
        <input 
          type="text" 
          placeholder="O que precisa estudar?"
          value={inputTexto}
          onChange={(e) => setInputTexto(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {/* REQUISITO: Renderização com .map() */}
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <span>{tarefa.text}</span>
            <button 
              className="btn-remover" 
              onClick={() => removerTarefa(tarefa.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App