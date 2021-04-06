import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'

const TopContent: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <img
        className="w-20 h-20 rounded-full mb-5"
        src="assets/images/me.jpg"
        alt="Foto de Dionei Bianchati"
      />
      <div className="flex flex-row">
        <h1
          style={{ lineHeight: '65px' }}
          className="text-white text-5xl font-light mb-5"
        >
          Hi there 👋 <br />
          I&apos;m Dionei Bianchati
        </h1>
        <div className="flex flex-row self-end text-3xl text-gray_1 mb-9">
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
    </div>
  )
}

export default TopContent
