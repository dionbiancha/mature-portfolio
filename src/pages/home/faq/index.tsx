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
                  Posso usar sua pagina como modelo?
                </summary>

                <span>
                  Claro! Pode encontrar o código da mesma{' '}
                  <a href="https://github.com/dionbiancha/mature-portfolio">
                    <b className="text-yellow">AQUI</b>
                  </a>
                </span>
              </details>
              <details className="mb-4">
                <summary className="flex flex-row mb-3 cursor-pointer focus:outline-none list-none font-semibold  bg-gray_3 rounded-md py-2 px-4">
                  <BsArrowBarDown className="text-green_1 h-5 w-5 mr-5" />
                  Como ter minha pergunta respondida no canal?
                </summary>

                <span>
                  É só lançar a hashtag{' '}
                  <b className="text-yellow">#DioneiResponde</b> nos comentários
                  do canal ou no Twitter 😉
                </span>
              </details>
              <details className="mb-4">
                <summary className="flex flex-row mb-3 cursor-pointer focus:outline-none list-none font-semibold  bg-gray_3 rounded-md py-2 px-4">
                  <BsArrowBarDown className="text-green_1 h-5 w-5 mr-5" />
                  Tem alguma comunidade para tirar duvidas?
                </summary>

                <span>
                  Ainda não. Mas não fique triste pois ela está em construção 💚
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
                  Envie um documento detalhando todo seu projeto para meu email.
                  Retornarei a resposta no prazo de 48h.{' '}
                  <i>
                    Obs: Propostas enviadas por outros meios serão ignoradas.
                  </i>
                </span>
              </details>
              <details className="mb-4">
                <summary className="flex flex-row mb-3 cursor-pointer focus:outline-none list-none font-semibold  bg-gray_3 rounded-md py-2 px-4">
                  <BsArrowBarDown className="text-green_1 h-5 w-5 mr-5" />
                  Como anunciar meu produto em seu blog?
                </summary>

                <span>
                  Simples! Envie um email com o assunto &quot;ANUNCIANTE&quot;.
                  Será um prazer fechar uma parceria 😊
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
                  <b className="text-yellow">(+55) 45 9 3618 8144</b>. Vou
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
