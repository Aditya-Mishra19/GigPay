import { Button } from "./ui/button"
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"
import ReportForm from "./Report"


export const LandingContent = () => {

  return (
    <div className='px-10 pb-20'>

      <div className='flex justify-center items-center'>
        <div className="flex flex-col gap-5">
          <Dialog>

            <DialogTrigger>
              <Button className=" text-black font-semibold bg-white px-9 hover:bg-white/90 rounded-full"> Report</Button>
            </DialogTrigger>
            <ReportForm />
          </Dialog>
        </div>
      </div>

    </div>
  )
}
