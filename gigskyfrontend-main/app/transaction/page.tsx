"use client"
import { Button } from '@/components/ui/button'
import { transactionApi } from '@/services'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Page = () => {
  const [senderName, setSenderName] = useState('')
  const [upiNumber, SetUpiNumber] = useState('')
  const [upiId, setUpiId] = useState('')
  const [otp, setOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('')

  const handleSunmit = async (e: any) => {
    e.preventDefault();
    try {
      if(!otp){
        toast.error("Enter Otp")
      } else{
        if(otp && otp == enteredOtp){
        const data = {
          senderName: senderName,
          UPI_number: upiNumber,
          UPI_ID: upiId
        }
        const res = await transactionApi(data);
        console.log(res)
        if (res?.data?.success) {
          toast.success(res?.data?.message);
          setOtp('')
        }
    } else {
      toast.error("Incorrect OTP")

    }
  }
    } catch (err) {
      console.log('Error in Transaction', err)
    }
  }

  const handleOtp = (e:any) =>{
    e.preventDefault();
    try{
      const digits = '0123456789';
      let otp= "";
      for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length);
        otp += digits.charAt(randomIndex);
      }
      setOtp(otp);

      //  console.log(otp);
       toast.success(`Your OTP is ${otp}, {duration: 10000}`);

    } catch (err) {
      console.log(err)

    }
  }

  return (
    <div>
      <section className="bg-gray-900 h-screen md:mt-[-5rem]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Submit the transaction details
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sender Name</label>
                  <input type="text" name="senderName" onChange={(e) => setSenderName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UPI Number</label>
                  <input type="text" name="upinumber" id="email" onChange={(e) => SetUpiNumber(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="6967869690" required />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium dark:text-white">UPI ID</label>
                  <input type="email" name="upiid" onChange={(e) => setUpiId(e.target.value)} placeholder="johnhdoe@sbi" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                </div>
                <div className='flex flex-row '>
                  <div className={`${otp? "": "hidden"}`}>
                    <label className="block mb-2 text-sm font-medium dark:text-white">Enter Otp</label>
                    <input type="email" name="upiid" onChange={(e) => setEnteredOtp(e.target.value)} placeholder="- - - - - - " className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                  </div>
                  <Button className={`${otp? "mt-7 mx-3":""}`} onClick={handleOtp}>{otp? "Re-Send OTP":"Send OTP"}</Button>
                </div>
                <div>
                  <Button onClick={handleSunmit} disabled={otp?false:true}>Submit</Button>
                </div>
                
              </form>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page