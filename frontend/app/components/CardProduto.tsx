import React from 'react'

function CardProduto() {
  return (
    <div className='grid grid-rows-[3fr_2fr] gap-2 w-60 h-60 bg-[var(--card)] md:h-80 rounded'>

      <div className="w-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-baLOMJ82jx90tDwJSWSFBTxAfqRCC7THZiIlqbFGGg&s=10')]
      bg-cover">
        <div className='flex w-full justify-end'>
            <span className="inline-flex items-center px-2 py-1 ring-1 ring-inset ring-brand-subtle text-white text-xs font-medium rounded bg-red-600">Americanas</span>
        </div>
      </div>

      <div className='grid grid-rows-3 justify-evenly'>
        <span className='text-xs text-white justify-self-start'>Apple Iphone 17 Pro 256GB - iOS 17</span>
        <span className='text-2xs justify-self-start text-white'>R$ 6.299,00</span>
        <div className='justify-self-end'>
            <button aria-label='ver ofertas'
            className='pr-2 pl-2 rounded bg-[var(--primary)]'>
                <span className='text-xs text-white'>Ver Ofertas</span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default CardProduto
