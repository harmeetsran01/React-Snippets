// Will use Hook such as copy and realtime change
import { useState, useCallback, useEffect, useRef } from 'react'

function Proj1() {
    const [length, setLength] = useState(0)
    const [numberallowed, setnumberallowed] = useState(false)
    const [charallowed, setcharallowed] = useState(false)
    const [Password, setPassword] = useState("")
    // ref hook, null as default value, binds to the input field, allows us to directly access the DOM 
    // element and its properties, such as value, without needing to rely on state or props. 
    // This can be useful for tasks like copying the generated password to the clipboard when the 
    // "Copy" button is clicked.
    // place ref={} in input and anohter to button
    const passwordref = useRef(null) 

    let fn = () => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberallowed) str += "0123456789"
        if (charallowed) str += "!@#$%^&*()_+"

        for (let index = 0; index < length; index++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)

    }
    // useCallback will return a memoized version of the callback that only changes if one of the dependencies 
    // has changed. This is useful when passing callbacks to optimized child components that rely on reference 
    // equality to prevent unnecessary renders.
    // In this case, the passwordGenerator function will only be recreated if any of the dependencies 
    // (length, numberallowed, charallowed, setPassword) change. This can help improve performance 
    // by preventing unnecessary re-renders of components that depend on the passwordGenerator function.
    const passwordGenerator = useCallback(fn, [length, numberallowed, charallowed, setPassword])
    // useEffect will run the passwordGenerator function whenever any of the dependencies 
    // (length, numberallowed, charallowed, setPassword) change. 
    // This ensures that the password is updated in real-time as the user interacts with the input fields and 
    // checkboxes.
    
    const copypassword = useCallback(() => {
        passwordref.current.select()
        window.navigator.clipboard.writeText(Password)
    }, [Password])
    
    useEffect( passwordGenerator , [passwordGenerator])
    return (<>
        <h1 className='text-white'>Password Generator</h1>
        <div className="w-full rounded-lg p-4 bg-gray-900 text-white">
            <input className="bg-white text-black rounded-lg w-80 ml-20 border border-gray-600 "
                id="field" type="text" ref={passwordref} value={Password} placeholder='&nbsp;password' readOnly />

            <button className='ml-5 w-10 outline-none rounded-lg bg-blue-400 cursor-pointer' onClick={copypassword}
            >Copy</button>

            <div className="flex gap-20 mt-5">
                <div className="flex items-center ">
                    <input defaultValue={length} id="range" type="range" min="4" max="20"
                        onChange={(e) => {
                            setLength(e.target.value)
                        }}
                        className="cursor-pointer w-20 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                    <label htmlFor="range" className="ml-2 text-sm">Length: {length}</label>
                </div>
                <div className="flex items-center mr-4">
                    <input id="numberallowed"
                        onChange={(e) => {
                            setnumberallowed((prev) => !prev)
                        }}
                        type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                    <label htmlFor="numberallowed" className="ml-2 text-sm">Include Numbers</label>
                </div>
                <div className="flex items-center">
                    <input id="charallowed"
                        onChange={(e) => {
                            setcharallowed((prev) => !prev)
                        }}
                        type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                    <label htmlFor="charallowed" className="ml-2 text-sm">Include Symbols</label>
                </div>
            </div>
        </div>
    </>
    )
}

export default Proj1