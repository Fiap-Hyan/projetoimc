import React from 'react'
import "../css/resultado.css"
import "../css/global.css"

// TABELA IMC COM OS DADOS
const TABELA_IMC = [
  { id: "abaixo", limite: 18.5, classificacao: "Abaixo do Peso", faixa: "abaixo de 18,5" },
  { id: "normal", limite: 25, classificacao: "Peso Normal", faixa: "18,5 - 24,9" },
  { id: "sobrepeso", limite: 30, classificacao: "Sobrepeso", faixa: "25 - 29,9" },
  { id: "grau1", limite: 35, classificacao: "Obesidade Grau-I", faixa: "30 - 34,9" },
  { id: "grau2", limite: 40, classificacao: "Obesidade Grau-II", faixa: "35 - 39,9" },
  { id: "grau3", limite: Infinity, classificacao: "Obesidade Grau-III", faixa: "Maior ou Igual a 40" },
];

//Arrow function com destruct

const resultado = ({resultado}) => {
//Função parseFloat pega variavel resultado e converte em float
  const valor =parseFloat(resultado);
  return (
    <section className="w-full max-w-xl mx-auto my-6 px-4 ">
      <div className="overflow-hidden rounded-xl shadow-xl border bg-gray-300 ">
        <table className="w-full text-left text-sm text-gray-700 divide-y divide-black">
          <thead className='bg-blue-200 text-black uppercase text-xs font-semibold'>
            <tr>
              <th className='py-3 px-6 '>Classificação</th>
              <th className='py-3 px-6 '>IMC</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-black'>
            {TABELA_IMC.map((item,index)=>{
              const limitAnterior = index > 0 ? TABELA_IMC[index - 1].limite:0; 
              const isAtivo = !isNaN(valor) && valor >= limitAnterior && valor < item.limite;

              return(
                <tr key={item.id}
                  className={`transition-colors duration-200 
                                  ${isAtivo
                      ? "bg-amber-500 font-bold text-black border-blue-200"
                      : "hover-bg-gray-200 text-gray-700"}`}>
                  <td className='py-3 px-6'>{item.classificacao}</td>
                  <td className='py-3 px-6'>{item.faixa}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>  
  )
}

export default resultado
