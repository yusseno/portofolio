import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
import Kanban from '../assets/images/kanban_app.png'
import Cashier from '../assets/images/cashier_app.png'



const Projects = () => {
    
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="font-mono lg:px-40 px-10 lg:py-12 py-2 lg:pb-0 bg-[#09192F] text-slate-400 w-full" id="project">
            <div className="flex" data-aos="fade-right">
                <div>
                    <h2 className="text-[32px] w-[125px] text-slate-100 font-bold pb-2">Project</h2>
                </div>
                <div className="bg-slate-400 w-full h-[2px] mt-6 ml-2">
                </div>
            </div> 
            <div className="grid grid-cols-2 pt-8">
                <div className="text-left p-4" data-aos="fade-left">
                    <span className="flex text-[#64FFDA] text-[16px]">future Project</span>
                    <span className="flex font-semibold text-[22px]">Kanban APP</span>
                    <span className="flex text-[16px] text-justify italic">Project ini dibangun ketika mengerjakan final project MKBM Studi Independen di Ruang Guru, dengan program Sofware Enginnering dengan pilihan kelas Backend</span>
                    <span className="flex text-[16px] text-justify italic">Teknologi : Golang dan TailwindCSS</span>
                </div>
                <div className="relative group">
                    <img src={Kanban} className="pr-4" data-aos="fade-right"></img>
                </div>
                <div
                    class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                </div>
               
            </div>
            <div className="grid grid-cols-2 pt-8">
                <div className="">
                    <img src={Cashier} className="pl-4" data-aos="fade-right"></img>
                </div>
                <div className="text-left p-4" data-aos="fade-left">
                    <span className="flex text-[#64FFDA] text-[16px]">future Project</span>
                    <span className="flex font-semibold text-[22px]">Cashier APP</span>
                    <span className="flex text-[16px] text-justify italic">Project ini dibangun ketika mengerjakan Assigmrnt project MKBM Studi Independen di Ruang Guru, dengan program Sofware Enginnering dengan pilihan kelas Backend</span>
                    <span className="flex text-[16px] text-justify italic">Teknologi : Golang dan TailwindCSS</span>
                </div>

            </div>

        </div>
    )
}
export default Projects