import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'

const TopContent: React.FC = () => {
  return (
    <div className="flex flex-col justify-center sm:items-start items-center sm:text-left text-center h-screen">
      <img
        className="w-20 h-20 rounded-full mb-5"
        src="assets/images/me.jpg"
        alt="Foto de Dionei Bianchati"
      />
      <div className="flex sm:flex-row flex-col">
        <h1
          style={{ lineHeight: '65px' }}
          className="text-white sm:text-5xl text-3xl font-light mb-5"
        >
          Hi there 👋 <br />
          I&apos;m Dionei Bianchati
        </h1>
        <div className="flex flex-row sm:self-end m-auto text-3xl text-gray_1 mb-9">
          <a className="transition duration-500 ease-in-out hover:text-yellow cursor-pointer ml-3">
            <AiFillGithub />
          </a>
          <a className="transition duration-500 ease-in-out hover:text-yellow cursor-pointer ml-3">
            <AiFillLinkedin />
          </a>
          <a className="transition duration-500 ease-in-out hover:text-yellow cursor-pointer ml-3">
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
      <p className="text-white text-xl font-extralight">
        eu <span className="text-yellow">{'<estudo e escrevo />'}</span> códigos
      </p>
      <div className="flex sm:flex-row flex-col mt-10">
        <button className="justify-center inline-flex text-black bg-green_1 border-0 py-2 px-6 focus:outline-none rounded text-lg cursor-pointer">
          Entrar em contato
        </button>
        <button className="sm:mt-0 mt-3 justify-center ml-4 inline-flex text-green_1 border-0 py-2 px-6 focus:outline-none rounded text-lg cursor-pointer">
          Perguntas frequentes
        </button>
      </div>
    </div>
  )
}

export default TopContent
