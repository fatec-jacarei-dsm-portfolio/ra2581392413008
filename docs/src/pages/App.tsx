export default function App() {
  return (
    <main className="min-h-screen bg-blue-200 text-gray-800 font-sans">
      {/* Header */}
      <header className="cabecalho">
        <img src="./mug.jpg" className="mug" />
        <h1 className="roboto-titulo nome">Breno de Luca</h1>
        {/* Contato */}
        <nav className="space-x-4">
          <a
            href="https://github.com/brn-lc"
            target="_blank"
            className="text-gray-700 hover:underline"
          >
            <img src="./github.png" alt="GitHub" className="logo" />
          </a>
          <a
            href="https://linkedin.com/in/brenoluca"
            target="_blank"
            className="text-gray-700 hover:underline"
          >
            <img src="./linkedin.png" alt="LinkedIn" className="logo" />
          </a>
        </nav>
      </header>

      {/* Sobre */}
      <div className="conteudo">
        <section id="sobre" className="p-8 max-w-3xl mx-auto">
          <h2 className="roboto-titulo text-xl font-semibold mb-2 text-center">
            Sobre Mim
          </h2>
          <p className="roboto-texto text-center">
            Cursando Desenvolvimento de Software Multiplataforma.
          </p>
        </section>

        {/* Projetos */}
        <section id="projetos" className="roboto-texto p-8">
          <h2 className="roboto-titulo text-xl font-semibold mb-4 text-center">
            Projetos
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="projeto">
              <h3 className="roboto-titulo titulo-projeto">
                ABP - 1º semestre
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Plataforma de ensino sobre Scrum.
              </p>
              <p className="text-xs text-gray-500 mb-2">
                Tecnologias: HTML, CSS, Javascript
              </p>
              <a
                href="https://github.com/frevisto/hardstop"
                className="text-blue-600 hover:underline text-sm"
                target="_blank"
              >
                Ver no GitHub
              </a>
            </div>

            <div className="projeto">
              <h3 className="roboto-titulo titulo-projeto">
                ABP - 2º semestre
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Sistema de gerenciamento nutricional que permita aos usuários
                registrar dados fisiológicos e nutricionais, calcular calorias e
                acompanhar o consumo diário por meio de relatórios.
              </p>
              <p className="text-xs text-gray-500 mb-2">
                Tecnologias: Typescript, React, CSS, PostgreSQL
              </p>
              <a
                href="https://github.com/Steel-Hard/VitalU"
                className="text-blue-600 hover:underline text-sm"
                target="_blank"
              >
                Ver no GitHub
              </a>
            </div>

            <div className="projeto">
              <h3 className="roboto-titulo titulo-projeto">
                ABP - 3º semestre
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Desenvolvimento de uma plataforma para a disseminação de dados
                meteorológicos.
              </p>
              <p className="text-xs text-gray-500 mb-2">
                Tecnologias: Typescript, React, TailwindCSS, MongoDB
              </p>
              <a
                href="https://github.com/Steel-Hard/LabWind"
                className="text-blue-600 hover:underline text-sm"
                target="_blank"
              >
                Ver no GitHub
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center p-4 border-t mt-8 text-sm text-gray-500">
        {new Date().getFullYear()}
      </footer>
    </main>
  );
}
