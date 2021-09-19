import React from 'react'
import { BsArrowBarDown } from 'react-icons/bs'

const Faq: React.FC = () => {
  return (
    <div id="FAQ" className="flex flex-col mb-20">
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
                  Posso usar seu site como modelo?
                </summary>

                <span>
                  Claro! Pode encontrar o código do mesmo{' '}
                  <a href="https://github.com/dionbiancha/mature-portfolio">
                    <b className="text-yellow">AQUI</b>
                  </a>
                </span>
              </details>
              <details className="mb-4">
                <summary className="flex flex-row mb-3 cursor-pointer focus:outline-none list-none font-semibold  bg-gray_3 rounded-md py-2 px-4">
                  <BsArrowBarDown className="text-green_1 h-5 w-5 mr-5" />
                  Me Tira Uma Dúvida?
                </summary>

                <span>
                  É só entrar em contato no{' '}
                  <a href="https://www.instagram.com/dionbiancha/">
                    <b className="text-yellow">Instagram</b>
                  </a>{' '}
                  ou no{' '}
                  <a href="https://twitter.com/dionbiancha">
                    <b className="text-yellow">Twitter</b>
                  </a>
                  , vou ajudar no que for possivel 😊
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <details className="mb-4">
                <summary className="flex flex-row mb-3 cursor-pointer focus:outline-none list-none font-semibold  bg-gray_3 rounded-md py-2 px-4">
                  <BsArrowBarDown className="text-green_1 h-5 w-5 mr-5" />
                  Aceita ser sócio da meu projeto?
                </summary>

                <span>
                  Por motivos pessoais não estou aceitando no momento 😞
                </span>
              </details>
              <details className="mb-4">
                <summary className="flex flex-row mb-3 cursor-pointer focus:outline-none list-none font-semibold  bg-gray_3 rounded-md py-2 px-4">
                  <BsArrowBarDown className="text-green_1 h-5 w-5 mr-5" />
                  Como posso entrar em contato?
                </summary>

                <span>
                  Entre em contato pelo email{' '}
                  <b className="text-yellow">contato@dionei.com</b> ou em
                  qualquer uma de minhas redes sociais.
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
