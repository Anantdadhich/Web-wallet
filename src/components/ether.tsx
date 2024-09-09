/*import { mnemonicToSeed } from 'bip39'
import { HDNodeWallet } from 'ethers';
import { Wallet } from 'ethers';
import React, { useState } from 'react'

const ether = ({mnemoic}:{mnemoic:string}) => {
    const [currentindex,setcurrentindex]=useState<number>(0);
    const [walletkey,setwalletkey]=useState<string[]>([]);
  return (
    <div>
      <button onClick={async()=>{
        const seed=await mnemonicToSeed(mnemoic);
        const path=`m/44'/60'/${currentindex}'/0'`;
        const  hdnode=HDNodeWallet.fromSeed(seed);
        const child=hdnode.derivePath(path);
        const privateky=child.privateKey;
        const wallet= new Wallet(privateky);
        setcurrentindex(currentindex+1);
        setwalletkey([...walletkey,wallet.address]);


      }}>
      Addd ether wallet
      </button>
      {walletkey.map(p=><div>
        eth -{p};
      </div>)}
    </div>
  )
}

export default ether
*/
import { mnemonicToSeed } from 'bip39'
import { HDNodeWallet, Wallet } from 'ethers';
import  { useState } from 'react'

const Ethereum = ({mnemoic}:{mnemoic:string}) => {
    const [currentindex, setcurrentindex] = useState<number>(0);
    const [walletkeys, setwalletkeys] = useState<string[]>([]);

    const addEthereumWallet = async () => {
        try {
            const seed = await mnemonicToSeed(mnemoic);
            const path = `m/44'/60'/${currentindex}'/0'`;
            const hdnode = HDNodeWallet.fromSeed(seed);
            const child = hdnode.derivePath(path);
            const privatekey = child.privateKey;
            const wallet = new Wallet(privatekey);
            setcurrentindex(currentindex + 1);
            setwalletkeys([...walletkeys, wallet.address]);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="mt-6 space-y-4">
            <button 
                className='w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out'
                onClick={addEthereumWallet}
            >
                Add Ethereum wallet
            </button>
            <div className="space-y-2">
                {walletkeys.map((address, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md border border-gray-200">
                        <span className="text-sm font-mono truncate text-gray-700">
                           {address}
                        </span>
                        <button
                            onClick={() => navigator.clipboard.writeText(address)}
                            className="ml-2 p-1 text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Ethereum