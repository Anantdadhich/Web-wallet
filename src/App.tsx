/*import { useState } from 'react'
import {generateMnemonic} from "bip39";
import Solana from './components/solana';


function App() {
  const [menomic, setmenomic] = useState<string>("")

  return (
    <>
       <input type="text" value={menomic} />
     <button className='text-center border b-2  ' onClick={async()=>{
       try {
         const men=await generateMnemonic();
        setmenomic(men);
       } catch (error) {
        console.log(error);
       }
     }}>
        Create seed phase
     </button>
     {menomic && <Solana mnemoic={menomic}></Solana>}
    </>
  )
}

export default App
*/
import { useState } from 'react'
import { generateMnemonic } from "bip39";
import Solana from './components/solana';
import Ethereum from './components/ether';

function App() {
  const [menomic, setmenomic] = useState<string>("")

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Wallet Generator</h1>
          <input 
            type="text" 
            value={menomic} 
            readOnly
            placeholder="Your seed phrase will appear here"
            className="w-full p-3 mb-4 bg-gray-50 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            className='w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out'
            onClick={async()=>{
              try {
                const men=await generateMnemonic();
                setmenomic(men);
              } catch (error) {
                console.log(error);
              }
            }}
          >
            Create seed phrase
          </button>
          {menomic && <Solana mnemoic={menomic}/>}
          
          {menomic && <Ethereum mnemoic={menomic}/>}
        </div>
      </div>
    </div>
  )
}

export default App