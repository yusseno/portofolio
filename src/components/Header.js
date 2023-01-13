import logo from '../assets/images/Y-logo.png'
import { useRef } from 'react';
const Header = () => {

    const handleClick = (e) => {
        document.querySelector(".navbar-mobile").classList.toggle("max-[1023px]:hidden");
    }
    let navRef = useRef(null);
    let lastScrollTop;

    window.addEventListener("scroll", function() {  // listen for the scroll 
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) 
        navRef.current.style.opacity = 0; // hide the navRef.current-bar when going down
    else 
        navRef.current.style.opacity = 1; // display the nav-bar when going up
    
    lastScrollTop = st;

    navRef.current.style.top = `${st}px`; // set the position of the nav-bar to the current scroll
    }, false);
    
    return (
        <header className='absolute w-full transition duration-700 z-50' id='nav' ref={navRef}>
            <nav class="lg:flex justify-between items-center bg-[#09192F] text-slate-200 px-8 lg:px-16 py-4 font-mono max-[1023px]:opacity-90 max-[1023px]shadow-sm shadow-white">
                <div class="flex justify-between items-center w-full">
                    <a href="#home" class="flex items-center">
                        <img src={logo} class="h-16 " alt="Yusseno Logo" />
                    </a>
                    <aside>
                        <div class="flex items-center lg:order-2 lg:hidden" onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    </aside>
                </div>
                <div class="w-full lg:flex lg:w-auto lg:order-1 navbar-mobile max-[1023px]:hidden">
                    <ul class="flex flex-col justify-between mt-4 text-md lg:flex-row lg:space-x-8 lg:mt-0 lg:mr-0">
                        <li>
                            <a href="#about" className="block py-1 hover:text-[#64FFDA]">About</a>
                        </li>
                        <li>
                            <a href="#experience" className="block py-1 hover:text-[#64FFDA]">Experience</a>
                        </li>
                        <li>
                            <a href="#work" className="block py-1 hover:text-[#64FFDA]">Work</a>
                        </li>
                        <li>
                            <a href="#project" className="block py-1 hover:text-[#64FFDA]">Project</a>
                        </li>
                        <li className='min-[1023px]:hidden'>
                            <a href="#contact" className="block py-1 hover:text-[#64FFDA]">Contact</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1xnd2vOcrhB4HlbuZuX5EZb-P6PWRq_M0/view?usp=share_link" className="block m-auto w-fit p-1 px-4 border-[1px] rounded-md border-[#64FFDA] text-[#64FFDA]">Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header