"use client"

import Link from 'next/link';
import  TypeWriterComponent from 'typewriter-effect'
import { Button } from './ui/button';
import { redirect } from 'next/navigation';
import { LandingContent } from './LandingContent';

export const LandingHero = () => {

  return (
    <div className='text-white font-bold py-36 text-center space-y-5 '>
       <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold ">
            <h1>Your In Hand Friend For</h1>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                   <TypeWriterComponent
                     options={{
                        strings:[
                            "Fraudlent.",
                            "Upi Ids.",
                            "Report Fraud",
                        ],
                        autoStart:true,
                        loop:true
                     }}
                   />
            </div>
       </div>


       <LandingContent/>

       <div className='text-white text-xs md:text-sm font-normal'>
         Teke a step forward.
       </div>
        
    </div>
  )
}
