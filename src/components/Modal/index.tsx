import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../../public/assets/lottie/baby-yoda.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const Modal: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen fixed bg-black bg-opacity-70 inset-0 z-50">
        <div className="p-8 rounded-xl bg-gray_3 flex justify-center items-center flex-row text-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-bold m-10">
              PRODUCT BACKLOG
            </h1>
            <p className="text-yellow text-xs">
              &#34;Aguardar <i>feature</i> voce deve&#34;
            </p>
            <button className="text-black bg-green_1 border-0 py-2 px-5 focus:outline-none rounded text-lg cursor-pointer mt-5">
              Voltar
            </button>
          </div>
          <Lottie
            options={defaultOptions}
            height={200}
            width={200}
            isClickToPauseDisabled={true}
          />
        </div>
      </div>
    </>
  )
}

export default Modal
