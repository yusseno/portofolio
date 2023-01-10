import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';

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
            <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 py-4" data-aos="fade-left">
                <figure className="flex justify-center pb-6">
                    <div className="w-[250px] h-[260px] bg-red-400 rounded-md z-10">
                    </div>
                    <div className="w-[250px] h-[260px] rounded-md absolute ml-10 mt-5 border-2 border-[#64FFDA] z-0">
                    </div>
                </figure>
                <figurcaption className="pb-8 min-[1023px]:hidden">Apalikasi Kanban</figurcaption>
                <figure className="flex justify-center pb-6">
                    <div className="w-[250px] h-[260px] bg-red-400 rounded-md z-10">
                    </div>
                    <div className="w-[250px] h-[260px] rounded-md absolute ml-10 mt-5 border-2 border-[#64FFDA] z-0">
                    </div>
                </figure>
                <figurcaption className="pb-8 min-[1023px]:hidden">Apalikasi Kanban</figurcaption>
                {/* resulusi desktop */}
                <figurcaption className="pb-8 max-[1023px]:hidden">Apalikasi Kanban</figurcaption>
                <figurcaption className="pb-8 max-[1023px]:hidden">On Progress</figurcaption>

            </div>

        </div>
    )
}
export default Projects