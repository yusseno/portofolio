import {MdCastForEducation} from 'react-icons/md';
import {MdSchool} from 'react-icons/md';
import {GoOrganization} from 'react-icons/go';
import {MdGroupWork} from 'react-icons/md';

import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';

const Experience = () => {
    
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="font-mono lg:px-40 px-10 lg:py-12 py-2 lg:pb-36 bg-[#09192F] text-slate-400 w-full" id="experience">
            <div className="flex" data-aos="fade-right">
                <div>
                    <h2 className="text-[32px] w-[180px] text-slate-100 font-bold pb-2">Experience</h2>
                </div>
                <div className="bg-slate-400 w-full h-[2px] mt-6 ml-2">
                </div>
            </div>
                           
            <div className="flex">
                <article>
                    <div className="flex" data-aos="fade-left">
                        <MdCastForEducation className='text-[26px] ml-1 mt-[6px]'></MdCastForEducation>
                        <p className="ml-2 mt-2">Study</p>
                    </div>
                    <div className="flex" data-aos="fade-right">
                        <MdSchool className='text-[26px] ml-8 mt-[6px]'></MdSchool>
                        <p className="text-slate-400 ml-2 mt-2 mb-6 text-justify">Kampus Merdeka white Ruang Guru Software Engineering Backend Golang <i>(Agustus - Desember 2022)</i></p>
                    </div>
                    <div className="flex" data-aos="fade-right">
                        <GoOrganization className='text-[26px] ml-1 mt-[6px]'></GoOrganization>
                        <p className="ml-2 mt-2">Organization</p>
                    </div>
                    <div className="flex" data-aos="fade-right">
                        <MdGroupWork className='text-[26px] ml-8 mt-[6px]'></MdGroupWork>
                        <p className="text-slate-400 ml-2 mt-2 text-justify">Unit Kegiatan Mahasiswa Informatika dan Komputer <i>(2020 - Sekarang)</i></p>
                    </div>
                    <div className="flex" data-aos="fade-right">
                        <MdGroupWork className='text-[26px] ml-8 mt-[6px]'></MdGroupWork>
                        <p className="text-slate-400 ml-2 mt-2 text-justify">Himpunan Mahasiswa Jurusan Informatika <i>(2020 - Sekarang)</i></p>
                    </div>
                    <div className="flex" data-aos="fade-right">
                        <MdGroupWork className='text-[26px] ml-8 mt-[6px]'></MdGroupWork>
                        <p className="text-slate-400 ml-2 mt-2 text-justify">Badan Eksekutif Mahasiswa Kementrian SDM dan Luar negeri <i>(2020 - 2021)</i></p>
                    </div>
                </article>
            </div>
        </div>
    )
}
export default Experience