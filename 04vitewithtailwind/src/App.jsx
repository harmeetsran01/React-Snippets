import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
 

function App() {
  const [count, setCount] = useState(0)

 
  return (
    <>
    <div className="p-4 bg-black text-white">This is TailWind Project </div>
    <div className="mt-5"></div>
    </>
  )
}

 export function Card3(data){
  console.log(name)
  console.log(data.age);
  //Data is Passed as object
  
  return (<>
    <div className="w-60 flex flex-col rounded-xl bg-black">
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-10 text-white">
        <div className="flex justify-between text-white mb-3">
          <p className=" ">Bored ape nft accidental {name}</p>
          <p>Price</p>
        </div>
        <div className="flex  justify-between">
          <p>#345</p>
          <p>0.01</p>
        </div>
      </div>
    </div>
  </>)
}

let  newName = ()=>{
  return (
    <div className="p-4 mt-5 bg-amber-600">5</div>
  )
}

export { newName }
export default App