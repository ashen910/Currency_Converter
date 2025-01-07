import React, {useEffect, useState} from 'react';
import axios from 'axios'; 
export default function Mainpage() {

    //States for the form feilds

    const [date, setDate] = useState(null);
    const[sourceCurrency, setSourceCurrency] = useState("");
    const[targetCurrency, setTargetCurrency] = useState("");
    const[amountInSourceCurrency, setAmountInSourceCurrency] = useState(0);
    const[amountInTargetCurrency, setAmountInTargetCurrency] = useState(0);
    const [CurrencyNames, setCurrencyNames] = useState([]);

//handle submit method
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
           const responce = await axios.get("http://localhost:3000/convert", {
            params: {
                date,
                sourceCurrency,
                targetCurrency,
                amountInSourceCurrency,
            },
           });
    setAmountInTargetCurrency(responce.data);
    console.log(amountInSourceCurrency, amountInTargetCurrency);      

        } catch(err) {
            console.error(err);
        }
    };   
     
//Get all currency types
useEffect (() => {
   const getCurrencyNames = async() => {
    try {
        const responce = await axios.get("http://localhost:3000/getAllCurrencies");
         setCurrencyNames(responce.data);
    }catch(err) {
        console.error(err); 
    }    
  };
  getCurrencyNames();
}, [])

  return (
    <div>
        <h1 className= "lg:mx-32 text-5xl font-bold text-green-500">Convert Your Currencies In Today Rates</h1>
        <p className= "lg:mx-32 opacity-40 py-6">"Welcome to our Currency Exchange!" your trusted companion for the latest exchange rates, seamless trip planning, and effortless financial management across multiple currencies!"</p>
       
        <div className= "mt-5 flex items-center justify-center flex-col">
         <section className="w-full lg:w-1/2" >
            
            <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                         <label htmlFor={date} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                         <input 
                         onChange={(e) => setDate(e.target.value)}
                         type ="Date" id ={date} name ={date}
                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" 
                        placeholder="" required />
                     </div>

                     <div className="mb-4">
                         <label htmlFor={sourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
                         <select 
                         onChange ={(e) => setSourceCurrency(e.target.value)}
                         name={sourceCurrency} id={sourceCurrency} value={sourceCurrency}
                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                            <option value="">Select the source Currency</option>
                           //Currency names object's keys maps into get data
                            {Object.keys(CurrencyNames).map((currency)=> (
                            <option className="p-1" key={currency} value={currency}>
                                {CurrencyNames[currency]}
                            </option> 
                            ))}
                         </select>
                     </div>

                     <div className="mb-4">
                         <label htmlFor={targetCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
                         <select 
                         onChange={(e) => setTargetCurrency(e.target.value)}
                         name = {targetCurrency} id = {targetCurrency} value={targetCurrency} 
                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">

                            <option value="">Select the Target Currency</option>
                            {Object.keys(CurrencyNames).map((currency)=> (
                            <option className="p-1" key={currency} value={currency}>
                                {CurrencyNames[currency]}
                            </option> 
                            ))}
                         </select>
                     </div>

                     <div className="mb-4">
                         <label htmlFor={amountInSourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in Source Currency</label>
                         <input 
                         onChange={(e) => setAmountInSourceCurrency(e.target.value)}
                         type="text" id={amountInSourceCurrency} name={amountInSourceCurrency}
                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" 
                         placeholder="Amount in source Currency" required />
                     </div>

                     <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md">Get the target Currency</button>
            </form>
         </section>
         </div>
         {amountInTargetCurrency}
    </div>
  )
}
