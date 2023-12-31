import { useState } from 'react'

export function Card({ title, desccription, cardNumber, openCard, setOpenCard}: { title: string, desccription: string, cardNumber: number, openCard: number, setOpenCard: Function }) {

    return (
        <div className={`card relative transition-all duration-500 overflow-hidden ${(openCard===cardNumber) ? 'ease-in max-h-[1000px] delay-100' : 'ease-out max-h-[58px]'}`}>
            <div className={`hover:cursor-pointer font-bold flex justify-between items-center w-full h-[80%] `} onClick={() => {cardNumber !== openCard ? setOpenCard(cardNumber) : setOpenCard(0)}}>
                <span className='py-1.5 leading-5 my-2 w-[80%]'>{title}</span>
                <svg viewBox="0 0 16 16" fill="currentColor" height="1em" width="1em"
                    className={`transition-all absolute top-5 right-4 ease-linear delay-100 ${openCard===cardNumber && 'rotate-45'}`}>
                    <path
                        fill="currentColor"
                        d="M15.5 6H10V.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V6H.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5H6v5.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V10h5.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5z"
                    />
                </svg>
            </div>
            <div className={`flex items-center py-2`}>{desccription}</div>
        </div>
    )
}