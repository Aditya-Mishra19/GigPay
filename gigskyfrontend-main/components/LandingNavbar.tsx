"use client"
import Link from "next/link";
import Cookies from "js-cookie";

import { Button } from "./ui/button";

export const LandingNavbar = () => {
  const token = Cookies.get('token')

  return (
    <div>
      <nav className=" md:p-4 bg-transparent flex items-center justify-between  px-4 mt-5 md:px-60">
          <Link href='/' className="flex items-center">
              <h1 className="text-xl md:text-2xl font-bold text-white" >Fraudulent Reporter</h1>
          </Link>
          <div className="flex items-center gap-x-2 ">
            <Link href={token ? '/transaction':'/signin'}>
             <Button variant="outline"  className="rounded-full">
             Transaction 
           </Button>)
            </Link>
             
          </div>
      </nav>
    </div>
  )
}

export default LandingNavbar