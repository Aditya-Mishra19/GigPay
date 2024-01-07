"use client"
import { DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ReportUpiFraud } from '@/services'
import { useState } from 'react'
import toast from 'react-hot-toast'

const ReportForm = () => {
    const [senderName, setSenderName] = useState('')
    const [upiNumber, SetUpiNumber] = useState('')
    const [upiId, setUpiId] = useState('')

    const handleReport = async() =>{
        try{
            const data = {
                senderName,
                upiNumber,
                upiId
            }
            console.log(data)
           const res = await ReportUpiFraud(data)
           console.log(res)
           if(res?.data){
               toast.success(res?.data?.message)
           }
        }
        catch(err){
            console.log('Error in Reporting Upi',err)
        }
    }
  return (
    <DialogContent >
    <DialogHeader className='flex  gap-7 justify-center items-center'>
      <DialogTitle className='text-center text-2xl'>Report</DialogTitle>

       <div className='flex flex-col gap-7  justify-center w-4/5'>
            <Input type='text' placeholder='name' className='focus:outline-none' name='senderName' onChange={(e)=>setSenderName(e.target.value)}/>
            <Input type='text' placeholder='UPI ID' name='upiNumber' onChange={(e)=>SetUpiNumber(e.target.value)}/>
            <Input type='text' placeholder='UPI NUMBER' name='upiId' onChange={(e)=>setUpiId(e.target.value)}/>
            <Button onClick={handleReport}>Report</Button>
      </div>

    </DialogHeader>
  </DialogContent>
  )
}

export default ReportForm