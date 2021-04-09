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
          <div className="flex flex-wrap justify-between sm:mx-auto sm:mb-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="flex flex-row mb-3 cursor-pointer focus:outline-none list-none font-semibold  bg-gray_3 rounded-md py-2 px-4">
                  <BsArrowBarDown className="text-green_1 h-5 w-5 mr-5" />
                  Qual a sua experiência com codificação até agora?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="flex flex-row mb-3 cursor-pointer focus:outline-none list-none font-semibold  bg-gray_3 rounded-md py-2 px-4">
                  <BsArrowBarDown className="text-green_1 h-5 w-5 mr-5" />
                  Qual é a sua linguagem mais forte?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="flex flex-row mb-3 cursor-pointer focus:outline-none list-none font-semibold  bg-gray_3 rounded-md py-2 px-4">
                  <BsArrowBarDown className="text-green_1 h-5 w-5 mr-5" />O que
                  mais entusiasma você no desenvolvimento ?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="flex flex-row mb-3 cursor-pointer focus:outline-none list-none font-semibold  bg-gray_3 rounded-md py-2 px-4">
                  <BsArrowBarDown className="text-green_1 h-5 w-5 mr-5" />
                  Can I change the domain you give me?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="flex flex-row mb-3 cursor-pointer focus:outline-none list-none font-semibold  bg-gray_3 rounded-md py-2 px-4">
                  <BsArrowBarDown className="text-green_1 h-5 w-5 mr-5" />
                  How many sites I can create at once?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="flex flex-row mb-3 cursor-pointer focus:outline-none list-none font-semibold  bg-gray_3 rounded-md py-2 px-4">
                  <BsArrowBarDown className="text-green_1 h-5 w-5 mr-5" />
                  How can I communicate with you?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
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
