import '../index.css'
import { useState,useEffect } from 'react'
export default function Navbar(){
    const [BgMode,setMode]=useState(null);
    const [text,setText]=useState(null);
    const [checking,setChecking]=useState(false)
    function changeMode(){
        setMode("purple-900")
        setText("text-white")
        setChecking(!checking)
    }
    useEffect(()=>{
        
        document.getElementById('bodyid').classList.toggle(`bg-${BgMode}`);
        document.getElementById('bodyid').classList.toggle(`${text}`);
    },[checking])
    return(
        <nav className={`flex flex-col p-0 md:flex-row md:justify-between md:my-4`}>
            <div className='flex justify-between p-2 font-Roboto font-bold md:w-1/2 md:justify-start md:px-3 '>
                <p className='text-xl pl-4'>Venumadhav</p> 
                <div className='text-yellow-500 w-auto flex md:px-6 md:py-1' >
                    <label htmlFor="toggle" className='bg-white w-10 h-5 rounded-2xl flex relative items-center border-2 border-purple-900'>
                        <input type="checkbox" id='toggle' className='invisible peer' defaultChecked={checking}  onChange={changeMode}/>
                        <span className={`w-4 h-4 bg-purple-900 rounded-full  peer-checked:bg-yellow-500 absolute left-0 peer-checked:left-5 transition-all duration-700`}></span>
                    </label>
                </div>
            </div>
            <div className='font-Roboto md:mx-4'>
                <ul className='md:flex'>
                    <li className='p-2'><a href="#home" className='hover:text-yellow-500 hover:font-extrabold'>Home</a></li>
                    <li className='p-2'><a href="#projects" className='hover:text-yellow-500 hover:font-extrabold'>Works</a></li>
                    <li className='p-2'><a href="#" className='hover:text-yellow-500 hover:font-extrabold'>About</a></li>
                    <li className='p-2'><a href="https://mail.google.com/mail/?view=cm&fs=1&to=venukommineni61@gmail.com" className='hover:text-yellow-500 hover:font-extrabold'>Contact</a></li>
                    
                </ul>
            </div>
        </nav>
    )
}
