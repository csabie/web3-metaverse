import React from 'react';
import Image from "next/image";
import { useMoralis } from 'react-moralis';

export const Login = () => {
    const {authenticate} = useMoralis();
  
    return (
    <div className='bg-black relative'>
        <h1>Login</h1>
        
        <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4'>
            <Image className='object-cover rounded-full' src="https://links.papareact.com/3pi"
                height={200} width={200}/>

            <button onClick={()=>authenticate()} className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse'>Login to the METAVERSE</button>
        </div>

        {/* h-screen : height: 100vh
        w-full: 100% */}
        <div className='w-full h-screen'>
            {/* ahhoz, hogy elérhető legyen a link, meg kell adni a next.config.js-ben, és újra kell indítani az appot, hogy észrevegye */}
            <Image src="https://links.papareact.com/55n"
            layout='fill' objectFit='cover'/>
        </div>
    </div>
  )
}