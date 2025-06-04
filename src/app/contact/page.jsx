'use client'
import { ToastContainer, toast } from 'react-toastify';
export default function contact () {
    return (
        <>
       
            <div className="top-80 items-center justify-center flex absolute right-115 w-3xl h-[400px]">

                <div >
                    <img className="object-contain w-[30rem] shadow rounded h-80 bg-amber-400 flex p-4 items-center justify-center" src="./pokemon.png" alt="" />
                </div>

                <div>
                    <div className="bg-fuchsia-50 rounded shadow w-[30rem] h-80 p-6 grid grid-cols-1 gap-5">
                        <input placeholder="Name" className="bg-white rounded  py-3 px-2 " type="text" />
                        <input placeholder="Email" className="bg-white rounded  py-3 px-2" type="text" />
                        <textarea  placeholder="message" className="bg-white rounded py-3 px-2">Message</textarea>
                        <button
                         onClick={()=>notify()}
                         className="bg-amber-400 text-white rounded font-bold hover:bg-amber-600 py-3 px-2">Send Message</button>
                         <ToastContainer />
                    </div>

                </div>
            </div>
            
        </>

    )
}