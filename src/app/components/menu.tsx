import {useState} from 'react'

export function Menu() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (

        <div className={`z-10 fixed right-0 top-0 flex justify-center shadow-lg items-center bg-white transition-all duration-300 ease-in
        ${isMenuOpen ? 'w-screen h-screen' : 'rounded-bl-full w-24 h-24'}`}>
            <div className='fixed right-5 top-5 flex-col cursor-pointer justify-center items-center' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className={`bg-black h-[5px] mb-1.5 transition-all ease-linear ${isMenuOpen ? 'rotate-[30deg] translate-x-3 translate-y-[7px] w-[20px]' : 'w-[30px]'}`}></div>
                <div className="h-[5px] w-[30px] bg-black mb-1.5"></div>
                <div className={`bg-black h-[5px] mb-1.5 transition-all ease-linear  ${isMenuOpen ? 'rotate-[-30deg] translate-x-3 -translate-y-[7px] w-[20px]' : 'w-[30px]'}`}></div>
            </div>
            <div className={`${isMenuOpen ? 'flex-col' : 'hidden'}`}>
                <ul>
                    <li className='menu-button'>
                        <a className='px-2 py-1 flex justify-center items-center h-10' href=''>VUIT CRED</a>
                    </li>
                    <li className='menu-button'>
                        <a className='px-2 py-1 flex justify-center items-center h-10' href=''>VUIT BENEFÍCIOS</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}