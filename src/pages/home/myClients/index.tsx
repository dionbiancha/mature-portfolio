import React from 'react'

const MyClients: React.FC = () => {
  return (
    <div>
      <h2 className="text-white text-2xl mb-10">Meus Clientes</h2>
      <div className="flex flex-row sm:justify-start justify-center flex-wrap">
        <div className="flex items-center justify-center p-5 sm:w-36 w-24 sm:h-36 h-24 bg-gray_3 sm:mr-10 mr-5 mb-5 rounded-md">
          <a href="https://www.lar.ind.br/" target="_blank" rel="noreferrer">
            <img
              className="transition duration-500 ease-in-out hover:opacity-100 opacity-30 cursor-pointer"
              src="assets/images/lar.png"
              alt="Logo Lar Agroindustrial"
            />
          </a>
        </div>
        <div className="flex items-center justify-center p-5 sm:w-36 w-24 sm:h-36 h-24 bg-gray_3 sm:mr-10 mr-5 mb-5 mb-5 rounded-md">
          <a
            href="https://www.facebook.com/Reacta-331471204001737"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="transition duration-500 ease-in-out hover:opacity-100 opacity-30 cursor-pointer"
              src="assets/images/reacta.png"
              alt="Logo Reacta"
            />
          </a>
        </div>
        <div className="flex items-center justify-center p-5 sm:w-36 w-24 sm:h-36 h-24 bg-gray_3 sm:mr-10 mr-5 mb-5 mb-5 rounded-md">
          <a href="https://sovaga.com.br/" target="_blank" rel="noreferrer">
            <img
              className="transition duration-500 ease-in-out hover:opacity-100 opacity-30 cursor-pointer"
              src="assets/images/sovaga.png"
              alt="Logo So Vaga"
            />
          </a>
        </div>
      </div>
      <section>
        <div className="flex flex-wrap justify-between mt-10">
          <div className="flex flex-row items-center mt-5 sm:w-1/4 w-2/4 justify-center">
            <h2 className="title-font mr-3 font-medium sm:text-5xl text-3xl text-white">
              2
            </h2>
            <p className="font-bold text-gray_2 sm:text-xl sm:leading-6 text-sm">
              anos
              <br />
              experiência
            </p>
          </div>
          <div className="flex flex-row items-center mt-5 sm:w-1/4 w-2/4 justify-center">
            <h2 className="title-font mr-3 font-medium sm:text-5xl text-3xl text-white">
              5
            </h2>
            <p className="font-bold text-gray_2 sm:text-xl sm:leading-6 text-sm">
              clientes
              <br />
              satisfeitos
            </p>
          </div>
          <div className="flex flex-row items-center mt-5 sm:w-1/4 w-2/4 justify-center">
            <h2 className="title-font mr-3 font-medium sm:text-5xl text-3xl text-white">
              16
            </h2>
            <p className="font-bold text-gray_2 sm:text-xl sm:leading-6 text-sm">
              projetos
              <br />
              concluidos
            </p>
          </div>
          <div className="flex flex-row items-center mt-5 sm:w-1/4 w-2/4 justify-center">
            <h2 className="title-font mr-3 font-medium sm:text-5xl text-3xl text-white">
              1K
            </h2>
            <p className="font-bold text-gray_2 sm:text-xl sm:leading-6 text-sm">
              xicaras
              <br />
              café
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MyClients
