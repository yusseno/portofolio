import React from "react"
import { Typewriter } from 'react-simple-typewriter'
const Test = () => {
    return (
        <div class="container mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
            <div class="text-center">
                <h2
                class="font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
                Simple Image Hove</h2>
            </div>
            <div class="mt-10 max-w-sm mx-auto">
                <div class="relative group">
                <img
                    src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80"
                    alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl" />
                <div
                    class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                </div>
                <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                    <div class="flex-row text-center">
                    <h1 class="text-gray-50 font-bold text-lg">Be careful on the way.</h1>
                    <p class="text-gray-200 font-medium text-sm">Tulus</p>
                    <small class="text-xs font-light text-gray-300">Photo by Sébastien Goldberg on Unsplash</small>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Test