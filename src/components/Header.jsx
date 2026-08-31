import "../css/header.css"
import "../css/global.css"
import React from 'react'

const Header = () => {
  return (
    <section className="w-full bg-blue-500 py-4 shadow-md">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray">Calculadora IMC</h1>
      </div>
    </section>
  )
}

export default Header
