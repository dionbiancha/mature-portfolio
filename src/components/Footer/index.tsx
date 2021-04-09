import React from 'react'

import Container from '../Container'

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-gray_5 absolute left-0">
      <Container>
        <div className="flex flex-col items-center justify-center p-16">
          <p className="text-white font-bold text-2xl mb-10">
            pronto para trabalhar comigo?
          </p>
          <p className="text-sm text-gray_2 mb-3">Missal, PR, Brasil</p>
          <p className="text-green_1 font-bold text-4xl mb-5">
            contato@dionei.com
          </p>
          <p className="text-sm text-gray_2">(+55) 45 9 8826 9789</p>
        </div>
      </Container>
      <div className="flex w-full justify-end">
        <p className="text-sm text-gray_2 mb-3 mr-5">
          Made with 💚 by{' '}
          <a
            className="text-white"
            href="https://www.linkedin.com/in/dionbiancha/"
          >
            Dionei Bianchati
          </a>{' '}
        </p>
      </div>
    </div>
  )
}

export default Footer
