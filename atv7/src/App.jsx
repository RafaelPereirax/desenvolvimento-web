import React from 'react';
import './App.css'; // Importando o CSS que criamos

const Navigation = () => (
  <nav>
    <ul>
      <li><a href="#">Início</a></li>
      <li><a href="#">Sobre o Autor</a></li>
      <li><a href="#">Contato</a></li>
    </ul>
  </nav>
);

const Header = () => (
  <header>
    <h1>Aventuras de Verão</h1>
    <Navigation />
  </header>
);

const Article = (props) => (
  <main>
    <article>
      <h2>{props.titulo}</h2>
      <p className="meta-info">Por: <strong>{props.autor}</strong> | {props.data}</p>
      <p>{props.conteudo}</p>
      <figure>
        <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80" alt="Nordeste" />
        <figcaption>Registro das águas cristalinas.</figcaption>
      </figure>
    </article>
  </main>
);

const Sidebar = () => (
  <aside>
    <h3>Confira também:</h3>
    <ul>
      <li><a href="#">Como organizar sua mala</a></li>
      <li><a href="#">Guia gastronômico</a></li>
    </ul>
  </aside>
);

const Footer = () => (
  <footer>
    <p>&copy; 2026 - Todos os direitos reservados.</p>
  </footer>
);

function App() {
  const dadosPost = {
    titulo: "Descobrindo as Praias do Nordeste Brasileiro",
    autor: "Rafael Pereira",
    data: "15 de agosto de 2025",
    conteudo: "O Nordeste do Brasil é um destino obrigatório para quem ama natureza. Entre dunas douradas e coqueirais infinitos, cada estado revela uma beleza única."
  };

  return (
    <div className="app-container">
      <Header />
      <Article 
        titulo={dadosPost.titulo} 
        autor={dadosPost.autor} 
        data={dadosPost.data} 
        conteudo={dadosPost.conteudo} 
      />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;