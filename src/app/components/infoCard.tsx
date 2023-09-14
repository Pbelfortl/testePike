import { useState } from 'react'

export function Card({ title, desccription, cardNumber, openCard, setOpenCard}: { title: string, desccription: string, cardNumber: number, openCard: number, setOpenCard: Function }) {

    return (
        <div className={`card transition-all duration-700 delay-100 ease-in-out overflow-hidden ${(openCard===cardNumber) ? 'max-h-72' : 'max-h-[57px]'}`}>
            <div className={`hover:cursor-pointer flex justify-between items-center w-full `} onClick={() => {cardNumber !== openCard ? setOpenCard(cardNumber) : setOpenCard(0)}}>
                <span className='py-1.5'>{title}</span>
                <svg viewBox="0 0 16 16" fill="currentColor" height="1em" width="1em"
                    className={`transition-all ease-linear delay-100 ${openCard===cardNumber && 'rotate-45'}`}>
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