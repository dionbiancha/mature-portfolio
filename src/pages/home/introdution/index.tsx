import React from 'react'
import { FaPencilRuler } from 'react-icons/fa'
import { MdWeb } from 'react-icons/md'
import { ImMobile } from 'react-icons/im'

const Introdution: React.FC = () => {
  return (
    <div className="flex sm:flex-row flex-col mb-20">
      <div className="sm:w-2/5 w-full mb-10">
        <h2 className="text-white text-2xl">Introdução</h2>
        <p className="text-white italic font-thin sm:mt-20 mt-10 mb-10">
          “Não se trata de ter ideias, mas sim de levar essas ideias para a vida
          real..”
        </p>
        <p className="text-gray_2">
          Desde o início da minha jornada como desenvolvedortrabalhei
          remotamente para agências e colaborei com pessoas talentosas para a
          criação de produtos digitais. Silenciosamente confiante e naturalmente
          curioso, trabalho perpetuamente para melhorar minhas habilidades
          profissionais, sempre em busca de novas oportunidades de aprendizado.
        </p>
      </div>
      <div className="flex flex-col items-end sm:w-3/5 w-full">
        <div className="flex flex-col justify-between bg-gray_3 rounded-md sm:w-4/5 w-full h-40 mb-5 p-5">
          <div className="flex flex-row items-center text-green_1 text-xl w-full justify-between">
            <h3>Design</h3>
            <FaPencilRuler />
          </div>
          <p className="text-gray_2 italic">
            Criação de produtos com um visual unico
          </p>
          <div>
            <a className="transition duration-500 ease-in-out hover:text-yellow text-gray_2 italic underline cursor-pointer inline-flex items-center">
              Projetos
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-gray_3 rounded-md sm:w-4/5 w-full h-40 mb-5 p-5">
          <div className="flex flex-row items-center text-green_1 text-xl w-full justify-between">
            <h3>Front-end</h3>
            <MdWeb />
          </div>
          <p className="text-gray_2 italic">
            Desenvolvimento de aplicações com satisfação garantida
          </p>
          <div>
            <a className="transition duration-500 ease-in-out hover:text-yellow text-gray_2 italic underline cursor-pointer inline-flex items-center">
              Projetos
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-gray_3 rounded-md sm:w-4/5 w-full h-40 mb-5 p-5">
          <div className="flex flex-row items-center text-green_1 text-xl w-full justify-between">
            <h3>Mobile</h3>
            <ImMobile />
          </div>
          <p className="text-gray_2 italic">
            Partindo do zero até a publicação Play Store
          </p>
          <div>
            <a className="transition duration-500 ease-in-out hover:text-yellow text-gray_2 italic underline cursor-pointer inline-flex items-center">
              Projetos
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introdution
