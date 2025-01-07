import React from 'react'

export default function Mainpage() {
  return (
    <div>
        <h1 className= "lg:mx-32 text-5xl font-bold text-green-500">Convert Your Currencies In Today Rates</h1>
        <p className= "lg:mx-32 opacity-40 py-6">"Welcome to our Currency Exchange!" your trusted companion for the latest exchange rates, seamless trip planning, and effortless financial management across multiple currencies!"</p>
       
        <div className= "mt-5 flex items-center justify-center flex-col">
         <section className="w-full lg:w-1/2" >
            <form>
                    <div className="mb-4">
                         <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                         <input 
                         type="Date" 
                         id="" 
                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" 
                        placeholder="" required />
                     </div>

                     <div className="mb-4">
                         <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
                         <select name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                            <option value="">Select the source Currency</option>
                         </select>
                     </div>

                     <div className="mb-4">
                         <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
                         <select name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                            <option value="">Select the Target Currency</option>
                         </select>
                     </div>

                     <div className="mb-4">
                         <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in Source Currency</label>
                         <input 
                         type="text" 
                         id="" 
                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" 
                         placeholder="Amount in source Currency" required />
                     </div>
                     <button>Get the target Currency</button>
            </form>
         </section>
         </div>

    </div>
  )
}
