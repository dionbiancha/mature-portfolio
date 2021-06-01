import React from 'react'
import { BsArrowBarDown } from 'react-icons/bs'

const Faq: React.FC = () => {
  return (
    <div className="flex flex-col mb-20">
      <div className="flex sm:flex-row flex-col items-center mt-32">
        <h2 className="text-white text-2xl">FAQ</h2>
        <h3 className="text-gray_2 italic text-sm sm:ml-5">
          Perguntas frequentes
        </h3>
      </div>
      <section className="text-white mt-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between sm:mx-auto sm:mb-2  sm:text-base text-sm">
            <div className="w-full lg:w-1/2 px-4">
              <details className="mb-4">
                <summary className="flex flex-row mb-3 cursor-pointer focus:outline-none list-none font-semibold  bg-gray_3 rounded-md py-2 px-4">
                  <BsArrowBarDown className="text-green_1 h-5 w-5 mr-5" />
                  Qual a sua experiência com codificação até agora?
                </summary>

                <span>Desenvolvimento de projetos Front-end | Mobile.</span>
              </details>
              <details className="mb-4">
                <summary className="flex flex-row mb-3 cursor-pointer focus:outline-none list-none font-semibold  bg-gray_3 rounded-md py-2 px-4">
                  <BsArrowBarDown className="text-green_1 h-5 w-5 mr-5" />
                  Qual é a sua linguagem mais forte?
                </summary>

                <span>
                  Atualmente a minha principal linguagem é o JavaScript,
                  utilizando de seus derivados Framewoks.
                </span>
              </details>
              <details className="mb-4">
                <summary className="flex flex-row mb-3 cursor-pointer focus:outline-none list-none font-semibold  bg-gray_3 rounded-md py-2 px-4">
                  <BsArrowBarDown className="text-green_1 h-5 w-5 mr-5" />O que
                  mais entusiasma você no desenvolvimento ?
                </summary>

                <span>
                  Aqueles que sabem programar parecem ter poderes mágicos perto
                  do restante das pessoas. Alguns dizem que a habilidade da
                  programação é o que se tem de mais próximo de um super poder.
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <details className="mb-4">
                <summary className="flex flex-row mb-3 cursor-pointer focus:outline-none list-none font-semibold  bg-gray_3 rounded-md py-2 px-4">
                  <BsArrowBarDown className="text-green_1 h-5 w-5 mr-5" />
                  Aceita ser sócio da meu produto?
                </summary>

                <span>
                  Envie um documento detalhando todo seu projeto para{' '}
                  <b className="text-yellow">contato@dionei.com</b> Retornarei a
                  resposta no prazo de 48h.{' '}
                  <i>
                    Obs: Propostas enviadas por outros meios serão ignoradas.
                  </i>
                </span>
              </details>
              <details className="mb-4">
                <summary className="flex flex-row mb-3 cursor-pointer focus:outline-none list-none font-semibold  bg-gray_3 rounded-md py-2 px-4">
                  <BsArrowBarDown className="text-green_1 h-5 w-5 mr-5" />
                  Tenho garantias quanto as entregas?
                </summary>

                <span>
                  Sim. Todo cliente está juridicamente protegido por meio de
                  contratos ou até mesmo formalização via e-mail, garantindo
                  entregas e evitando calote.
                </span>
              </details>
              <details className="mb-4">
                <summary className="flex flex-row mb-3 cursor-pointer focus:outline-none list-none font-semibold  bg-gray_3 rounded-md py-2 px-4">
                  <BsArrowBarDown className="text-green_1 h-5 w-5 mr-5" />
                  Como posso me comunicar com você?
                </summary>

                <span>
                  Entre em contato pelo email{' '}
                  <b className="text-yellow">contato@dionei.com</b> ou pelo
                  Whatsap comercial{' '}
                  <b className="text-yellow">(+XX) XX X XXXX XXXX</b>. Vou
                  retornar o contato no prazo de 48h (horario comercial).
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Faq
