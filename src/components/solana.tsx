/*import { Keypair, PublicKey } from '@solana/web3.js';
import { mnemonicToSeed } from 'bip39';
import { derivePath } from 'ed25519-hd-key';
import { useState } from 'react'
import nacl from "tweetnacl";
import {Buffer} from "buffer"

const Solana = ({mnemoic}:{mnemoic:string}) => {
   
    const [currentindex,setcurrentindex]=useState<number>(0);
    const [publickeys,setpublickeys]=useState<PublicKey[]>([]);

  return (
    <div>
      <button onClick={async()=>{
      try {
          const seed=await mnemonicToSeed(mnemoic);
        const path=`m/44'/501'/${currentindex}'/0'`;
        const {key:derivedseed}=derivePath(path,Buffer.from(seed).toString("hex"))
        const secret=nacl.sign.keyPair.fromSeed(derivedseed).secretKey;
        const keypair=Keypair.fromSecretKey(new Uint8Array(secret));
        setcurrentindex(currentindex+1);
        setpublickeys([...publickeys,keypair.publicKey]);

      } catch (error) {
        console.log(error)
      }

      }}>
        Add wallet 
      </button>
          <div>
            {publickeys.map(p=> <div > 
         {p.toBase58()}
      </div>)}
          </div>
    </div>
  )
}

export default Solana
*/
import { Keypair, PublicKey } from '@solana/web3.js';
import { mnemonicToSeed } from 'bip39';
import { derivePath } from 'ed25519-hd-key';
import { useState } from 'react'
import nacl from "tweetnacl";
import { Buffer } from "buffer"

const Solana = ({mnemoic}:{mnemoic:string}) => {
  const [currentindex,setcurrentindex]=useState<number>(0);
  const [publickeys,setpublickeys]=useState<PublicKey[]>([]);

  return (
    <div className="mt-6 space-y-4">
      <button 
        className='w-full py-2 px-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-md hover:from-green-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 ease-in-out'
        onClick={async()=>{
          try {
            const seed=await mnemonicToSeed(mnemoic);
            const path=`m/44'/501'/${currentindex}'/0'`;
            const {key:derivedseed}=derivePath(path,Buffer.from(seed).toString("hex"))
            const secret=nacl.sign.keyPair.fromSeed(derivedseed).secretKey;
            const keypair=Keypair.fromSecretKey(new Uint8Array(secret));
            setcurrentindex(currentindex+1);
            setpublickeys([...publickeys,keypair.publicKey]);
          } catch (error) {
            console.log(error)
          }
        }}
      >
        Add Solana wallet
      </button>
      <div className="space-y-2">
        {publickeys.map((p, index) => (
          <div key={index} className="flex items-center justify-between bg-white p-3 rounded-md shadow">
            <span className="text-sm font-mono truncate text-gray-700">{p.toBase58()}</span>
            <button
              onClick={() => navigator.clipboard.writeText(p.toBase58())}
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

export default Solana