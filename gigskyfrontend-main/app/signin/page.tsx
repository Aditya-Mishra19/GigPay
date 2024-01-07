"use client"
import { Button } from '@/components/ui/button'
import { signinApi } from '@/services'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

const Page = () => {
    const [password, setPassword] = useState('')
    const [email, setemail] = useState('')
    const router = useRouter();

    const handleLOgin = async(e:any) =>{
        e.preventDefault()
        try{
            const data = {email,password};
            const res = await signinApi(data);
            const { token } = res?.data
            Cookies.set('token',token)
            router.push('/transaction');
        }catch(err){
            console.log('Error in singin')
        }
    }

  return (
    <div>
            <section className="bg-gray-900 md:mt-[-5rem]">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                           
                            <div>
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" onChange={(e)=>setemail(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required/>
                            </div>
                            <div>
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" onChange={(e)=>setPassword(e.target.value)}  name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required/>
                            </div>


                            <Button onClick={handleLOgin}>Signin</Button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            {`Don't have a account ? `}
                                <Link href='/signup' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                          
                    </div>
                </div>
            </div>
            </section>
    </div>
  )
}

export default Page