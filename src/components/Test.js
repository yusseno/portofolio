import React from "react"
import { Typewriter } from 'react-simple-typewriter'
const Test = () => {
    return (
        <div className="bg-red-200">
            <h3>
                <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={10}
                    deleteSpeed={25}
                    typeSpeed={75}
                    onLoopDone
                    words={[
                    'A Simple React Component/Hook for adding a nice Typewriter effect to your project.'
                    ]}
                />
            </h3>
            {/* <h1>
                <Typewriter options={{autostart:true, loop:true, delay:80, strings:["Hi Perkenalkan nama saya"]}}></Typewriter>
            </h1> */}
        </div>
    )
}
export default Test