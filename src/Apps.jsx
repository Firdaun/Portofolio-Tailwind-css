import { useEffect, useRef, useState } from "react"
import useInView from "./useView"
import emailjs from '@emailjs/browser'

export default function Apps() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <Portofolio />
            <Clients />
            <Blog />
            <Contact />
            <Footer />
        </>
    )
}


// ---------------------------------------------------------------------------------------------------- NAVBAR ---------------------------------------------------------------------------------------------------- //

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.addEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('touchstart', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('touchstart', handleClickOutside)
        }
    }, [])


    return (
        <nav className={`nav ${isScrolled ? 'shadow-lg' : ''} `}>
            <header className="place flex justify-between">
                <h1 className="text-xl leading-9 font-medium">Brrads</h1>
                <div ref={menuRef} className="flex">
                    <div onClick={() => setIsOpen(!isOpen)} className="md:hidden hover:cursor-pointer" >
                        <span className={`${isOpen ? 'rotate-43 origin-top-left' : ''} transition-all duration-400 ease-in-out w-[30px] h-[2px] my-2 block bg-dark`}></span>
                        <span className={`${isOpen ? 'opacity-0' : 'opacity-100'} transition-all duration-400 ease-in-out w-[20px] h-[2px] my-2 block bg-dark`}></span>
                        <span className={`${isOpen ? '-rotate-43 origin-bottom-left w-[30px]' : 'w-[10px]'} transition-all duration-400 ease-in-out  h-[2px] my-2 block bg-dark`}></span>
                    </div>
                    <ul className={`flex tracking-widest text-[15px] gap-4 md:gap-5 items-center flex-col md:flex-row md:opacity-100 absolute md:pointer-events-auto md:static top-17 p-3 md:p-0 right-10 bg-white shadow-lg md:shadow-none rounded-lg md:bg-transparent w-50 md:w-auto md:h-auto ${isOpen ? 'opacity-100 pointer-events-auto translate-y-0 ' : 'opacity-0 pointer-events-none -translate-y-7'} md:translate-0 transition-all duration-300 ease-in-out `}>
                        <li><a onClick={() => setIsOpen(false)} className="text-primary md:relative md:after:content-[''] md:after:absolute md:after:left-1/2 md:after:-bottom-1 md:after:w-0 md:after:h-[1px] md:after:bg-primary md:after:transition-all md:after:duration-700 md:hover:after:left-0 md:hover:after:w-full px-[65px] md:px-0 py-[10px] md:py-0 hover:text-primary transition-all duration-300 " href="#">Beranda</a></li>
                        <li><a onClick={() => setIsOpen(false)} className="md:relative md:after:content-[''] md:after:absolute md:after:left-1/2 md:after:-bottom-1 md:after:w-0 md:after:h-[1px] md:after:bg-primary md:after:transition-all md:after:duration-700 md:hover:after:left-0 md:hover:after:w-full px-[30px] md:px-0 py-[10px] md:py-0 hover:text-primary transition-all duration-300 " href="#about">Tentang Saya</a></li>
                        <li><a onClick={() => setIsOpen(false)} className="md:relative md:after:content-[''] md:after:absolute md:after:left-1/2 md:after:-bottom-1 md:after:w-0 md:after:h-[1px] md:after:bg-primary md:after:transition-all md:after:duration-700 md:hover:after:left-0 md:hover:after:w-full px-[58px] md:px-0 py-[10px] md:py-0 hover:text-primary transition-all duration-300 " href="#portofolio">Portofolio</a></li>
                        <li><a onClick={() => setIsOpen(false)} className="md:relative md:after:content-[''] md:after:absolute md:after:left-1/2 md:after:-bottom-1 md:after:w-0 md:after:h-[1px] md:after:bg-primary md:after:transition-all md:after:duration-700 md:hover:after:left-0 md:hover:after:w-full px-[69px] md:px-0 py-[10px] md:py-0 hover:text-primary transition-all duration-300 " href="#clients">Clients</a></li>
                        <li><a onClick={() => setIsOpen(false)} className="md:relative md:after:content-[''] md:after:absolute md:after:left-1/2 md:after:-bottom-1 md:after:w-0 md:after:h-[1px] md:after:bg-primary md:after:transition-all md:after:duration-700 md:hover:after:left-0 md:hover:after:w-full px-[80px] md:px-0 py-[10px] md:py-0 hover:text-primary transition-all duration-300 " href="#blog">Blog</a></li>
                        <li><a onClick={() => setIsOpen(false)} className="md:relative md:after:content-[''] md:after:absolute md:after:left-1/2 md:after:-bottom-1 md:after:w-0 md:after:h-[1px] md:after:bg-primary md:after:transition-all md:after:duration-700 md:hover:after:left-0 md:hover:after:w-full px-[68px] md:px-0 py-[10px] md:py-0 hover:text-primary transition-all duration-300 " href="#contact">Contact</a></li>
                    </ul>
                </div>
            </header>
        </nav>
    )
}


// ---------------------------------------------------------------------------------------------------- NAVBAR ---------------------------------------------------------------------------------------------------- //






// ---------------------------------------------------------------------------------------------------- HERO SECTION START ---------------------------------------------------------------------------------------------------- //

function HeroSection() {
    return (
        <section className="bg-indigo-50 py-20">
            <div className="place xl:h-[calc(100vh-10rem)] ">
                <div className="flex mt-10 flex-wrap">
                    <div className="flex flex-col gap-4 w-full lg:w-1/2 self-center ">
                        <h1 className="text-xl font-semibold text-primary">Halo semua 🙋‍♂️, saya</h1>
                        <div className="-translate-x-1 font-medium text-dark text-5xl md:text-6xl">Fahrul Brrads</div>
                        <h2 className="font-medium text-secondary text-lg sm:text-xl md:text-2xl"> <span className="text-dark">programmer</span> & kodingers</h2>
                        <p className="font-medium text-secondary text-base sm:text-lg md:text-xl leading-relaxed">Belajar web programming menyelangkan bukan. <span className="text-dark font-semibold">bukan!</span> </p>
                        <div className="mt-5">
                            <a href="#" className="text-base bg-primary font-semibold text-white py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Hubungi saya</a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 my-20">
                        <div className="relative block py-10">
                            <img className="w-[89%] z-10 relative md:w-1/2 mx-auto scale-125 md:scale-150" src={`${import.meta.env.BASE_URL}img/Lana.png`} />
                            <svg className="w-[300px] sm:w-[550px] md:w-[400px] lg:w-[300px] xl:w-[340px] scale-x-[-1] absolute -top-5 sm:-top-20 xl:-top-15 left-1/2 -translate-x-[145px] sm:-translate-x-[270px] md:-translate-x-[200px] lg:-translate-x-[140px] xl:-translate-x-[170px]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="oklch(51.1% 0.262 276.966)" d="M44,-20.9C56,-4.6,64,18.5,56,33.9C48,49.3,24,57.1,0,57C-23.9,57,-47.8,49.2,-57.1,33.1C-66.3,16.9,-60.8,-7.5,-48.9,-23.7C-36.9,-40,-18.5,-48,-1.2,-47.2C16,-46.5,32,-37.1,44,-20.9Z" transform="translate(100 100) scale(1.6)" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// ---------------------------------------------------------------------------------------------------- HERO SECTION END ---------------------------------------------------------------------------------------------------- //






// ---------------------------------------------------------------------------------------------------- ABOUT SECTION START ---------------------------------------------------------------------------------------------------- //

function AboutSection() {
    const [line, isTerlihat] = useInView({ threshold: 0.5 })
    return (
        <section id="about" className="pt-36 place pb-32">
            <div className="">
                <div className="flex flex-col w-[176px]">
                    <h4 ref={line} className="font-bold uppercase text-primary text-2xl ">Tentang Saya</h4>
                    <div className={`h-1 rounded-xl bg-primary transition-all duration-[2000ms] ${isTerlihat ? 'w-full' : 'w-0'}`}></div>
                </div>
                <div className="flex flex-wrap mt-4">
                    <div className="w-full mb-10 lg:w-1/2">
                        <h2 className="font-bold text-dark text-3xl mb-5 max-w-md">Yuk, belajar web programming di WPU!</h2>
                        <p className="font-medium text-base text-secondary max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam assumenda quo laudantium rerum beatae doloremque error.</p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h3 className="font-semibold text-dark text-2xl mb-4">Mari berteman</h3>
                        <p className="font-medium text-base text-secondary mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eveniet, soluta doloribus nesciunt quaerat iste perferendis eum sit.</p>
                        <div className="flex justify-between text-3xl tablet:text-4xl w-[153px] tablet:w-[180px]">
                            <a className="text-secondary" href="https://www.threads.com/@andiirtf" target="_blank"><svg className="hover:text-primary transition-all ease-in-out duration-[450ms]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948.591.621.928 1.509 1.005 2.644.328.138.63.299.905.484 1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.217 6.217 0 0 0-1.528-.161Z"></path></svg></a>
                            <a className="text-secondary" href="https://www.tiktok.com/@fauzan2k?is_from_webapp=1&sender_device=pc" target="_blank"><svg className="hover:text-primary transition-all ease-in-out duration-[450ms]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path></svg></a>
                            <a className="text-secondary" href="https://www.instagram.com/andiirtf/" target="_blank"><svg className="hover:text-primary transition-all ease-in-out duration-[450ms]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path></svg></a>
                            <a className="text-secondary" href="https://x.com/Fahrul7309" target="_blank"><svg className="hover:text-primary transition-all ease-in-out duration-[450ms]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"></path></svg></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// ---------------------------------------------------------------------------------------------------- ABOUT SECTION START ---------------------------------------------------------------------------------------------------- //






// ---------------------------------------------------------------------------------------------------- PORTOFOLIO ---------------------------------------------------------------------------------------------------- //

function Portofolio() {
    const [line, isTerlihat] = useInView({ threshold: 0.5 })
    return (
        <section id="portofolio" className="py-32 bg-slate-100">
            <div className="place gap-5 ">
                <div className="w-full justify-center flex mb-10">
                    <div className="max-w-xl flex flex-col justify-center items-center gap-5 text-center">
                        <div>
                            <h4 ref={line} className="font-semibold text-lg text-primary md:text-2xl">Portofolio</h4>
                            <div className={`h-1 w-[105px] rounded-xl mx-auto bg-primary transition-all duration-[2000ms] origin-center ${isTerlihat ? 'scale-x-100' : 'scale-x-0'}`}></div>
                        </div>
                        <h2 className="font-bold text-dark text-3xl md:text-5xl">Project Terbaru</h2>
                        <p className="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus delectus quia voluptates similique eaque omnis eum perspiciatis veniam! Atque, earum!</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="flex overflow-hidden flex-col rounded-lg bg-white">
                        <div className="overflow-hidden w-full h-[70%] ">
                            <img className="object-cover object-top w-full h-full" src={`${import.meta.env.BASE_URL}img/porto-1.png`} width="full" />
                        </div>
                        <div className="p-7 flex flex-col gap-3">
                            <h3 className="font-semibold text-xl text-dark">Landing Page Fahrul</h3>
                            <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, laudantium.</p>
                        </div>
                    </div>
                    <div className="flex overflow-hidden flex-col rounded-lg bg-white">
                        <div className="overflow-hidden w-full h-[70%] ">
                            <img className="object-cover object-top w-full h-full" src={`${import.meta.env.BASE_URL}img/porto-2.png`} width="full" />
                        </div>
                        <div className="p-7 flex flex-col gap-3">
                            <h3 className="font-semibold text-xl text-dark">Website Pertama Fahrul</h3>
                            <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, laudantium.</p>
                        </div>
                    </div>
                    <div className="flex overflow-hidden flex-col rounded-lg bg-white">
                        <div className="overflow-hidden w-full h-[70%] ">
                            <img className="object-cover object-top w-full h-full" src={`${import.meta.env.BASE_URL}img/porto-3.png`} width="full" />
                        </div>
                        <div className="p-7 flex flex-col gap-3">
                            <h3 className="font-semibold text-xl text-dark">Kedai Emih</h3>
                            <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, laudantium.</p>
                        </div>
                    </div>
                    <div className="flex overflow-hidden flex-col rounded-lg bg-white">
                        <div className="overflow-hidden w-full h-[70%] ">
                            <img className="object-cover object-top w-full h-full" src={`${import.meta.env.BASE_URL}img/porto-4.png`} width="full" />
                        </div>
                        <div className="p-7 flex flex-col gap-3">
                            <h3 className="font-semibold text-xl text-dark">Website Kesehatan</h3>
                            <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, laudantium.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// ---------------------------------------------------------------------------------------------------- PORTOFOLIO END ---------------------------------------------------------------------------------------------------- //







// ---------------------------------------------------------------------------------------------------- CLIENT ---------------------------------------------------------------------------------------------------- //
function Clients() {
    const [line, isTerlihat] = useInView({ threshold: 0.5 })
    return (
        <section id="clients" className="py-36 bg-slate-700">
            <div className="place ">
                <div className="w-full">
                    <div className="mx-auto text-center mb-16">
                        <div>
                            <h4 ref={line} className="font-semibold text-lg md:text-2xl text-primary ">Clients</h4>
                            <div className={`h-1 w-17 rounded-xl mx-auto bg-primary transition-all duration-[2000ms] origin-center ${isTerlihat ? 'scale-x-100' : 'scale-x-0'}`}></div>
                        </div>
                        <h2 className="font-bold text-white text-3xl md:text-5xl my-4">Yang Pernah Bekerjasama</h2>
                        <p className="font-medium text-md text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officia cumque similique!</p>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex flex-wrap items-center gap-10 justify-center">
                        <a className="w-[120px] h-[38px] overflow-hidden grayscale opacity-60 transition duration-500 ease-in-out hover:grayscale-0 hover:opacity-100" href="#"><img className="w-full h-full object-cover scale-120" src={`${import.meta.env.BASE_URL}SVG/Google-Logo.wine.svg`} /></a>
                        <a className="max-w-[120px] grayscale opacity-60 transition duration-500 ease-in-out hover:grayscale-0 hover:opacity-100" href="#"><img className="" src={`${import.meta.env.BASE_URL}SVG/Gojek.svg`} alt="Gojek" /></a>
                        <a className="max-w-[120px] grayscale opacity-60 transition duration-500 ease-in-out hover:grayscale-0 hover:opacity-100" href="#"><img className="" src={`${import.meta.env.BASE_URL}SVG/Tokopedia.svg`} alt="Tokopedia" /></a>
                        <a className="max-w-[120px] grayscale opacity-60 transition duration-500 ease-in-out hover:grayscale-0 hover:opacity-100" href="#"><img className="" src={`${import.meta.env.BASE_URL}SVG/TikTok.svg`} alt="Tiktok" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

// ---------------------------------------------------------------------------------------------------- CLIENT END ---------------------------------------------------------------------------------------------------- //







// ---------------------------------------------------------------------------------------------------- BLOG ---------------------------------------------------------------------------------------------------- //

function Blog() {
    const [line, isTerlihat] = useInView({ threshold: 0.5 })
    return (
        <section id="blog" className="pt-36 pb-32 bg-slate-100">
            <div className="place">
                <div className="w-full">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <div>
                            <h4 ref={line} className="font-semibold mb-[2px] text-lg text-primary md:text-2xl">Blog</h4>
                            <div className={`h-1 w-12 rounded-xl mx-auto bg-primary transition-all duration-[2000ms] origin-center ${isTerlihat ? 'scale-x-100' : 'scale-x-0'}`}></div>
                        </div>
                        <h2 className="font-bold text-dark text-3xl my-4 md:text-5xl">Tulisan Terkini</h2>
                        <p className="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat voluptatibus ea odit?</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="bg-white relative overflow-hidden rounded-xl grid justify-between">
                        <img className="w-full object-cover" src={`${import.meta.env.BASE_URL}img/Coding.jpg`} />
                        <div className="p-4 flex flex-col gap-5 mb-17 ">
                            <h3><a href="#" className="font-semibold text-xl text-dark hover:text-primary">Tips Belajar Programming</a></h3>
                            <p className="font-medium text-base  text-secondary">Pelajari dasar-dasar programming dengan cara yang mudah dan praktis untuk pemula.</p>
                        </div>
                        <p className="font-medium bottom-4 left-4 absolute text-sm px-4 py-3 w-39 bg-primary rounded-lg hover:opacity-80 text-white"><a href="#">Baca Selengkapnya</a></p>
                    </div>
                    <div className="bg-white relative overflow-hidden rounded-xl grid justify-between">
                        <img className="w-full object-cover" src={`${import.meta.env.BASE_URL}img/Coding.jpg`} />
                        <div className="p-4 flex flex-col gap-5 mb-17 ">
                            <h3><a href="#" className="font-semibold text-xl text-dark hover:text-primary white">styling lebih mudah pake Tailwind</a></h3>
                            <p className="font-medium text-base  text-secondary">Gunakan Tailwindcss agar styling website jadi lebih cepat, rapi, dan konsisten.</p>
                        </div>
                        <p className="font-medium bottom-4 left-4 absolute text-sm px-4 py-3 w-39 bg-primary rounded-lg hover:opacity-80 text-white"><a href="#">Baca Selengkapnya</a></p>
                    </div>
                    <div className="bg-white relative overflow-hidden rounded-xl">
                        <img className="w-full object-cover" src={`${import.meta.env.BASE_URL}img/Coding.jpg`} />
                        <div className="p-4 flex flex-col gap-5 mb-17 ">
                            <h3><a href="#" className="font-semibold text-xl text-dark hover:text-primary">apa itu react?</a></h3>
                            <p className="font-medium text-base  text-secondary">Kenali React, library JavaScript populer untuk membangun UI modern dan interaktif.</p>
                        </div>
                        <p className="font-medium bottom-4 left-4 absolute text-sm px-4 py-3 w-39 bg-primary rounded-lg hover:opacity-80 text-white"><a href="#">Baca Selengkapnya</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

// ---------------------------------------------------------------------------------------------------- BLOG END ---------------------------------------------------------------------------------------------------- //






// ---------------------------------------------------------------------------------------------------- CONTACT ---------------------------------------------------------------------------------------------------- //

function Contact() {
    const [line, isTerlihat] = useInView({ threshold: 0.5 })
    const form = useRef(); // <-- Buat ref untuk form
    const [isSending, setIsSending] = useState(false); // Untuk status loading

    const sendEmail = (e) => {
        e.preventDefault(); // Mencegah halaman refresh
        setIsSending(true); // Tombol loading

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    alert('Pesan berhasil terkirim!');
                    form.current.reset(); // Mengosongkan form setelah terkirim
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Gagal mengirim pesan, coba lagi.');
                }
            )
            .finally(() => {
                setIsSending(false); // Selesai loading
            });
    };
    return (
        <section id="contact" className="place py-36">
            <div className="max-w-xl mx-auto text-center mb-16">
                <div>
                    <h4 ref={line} className="font-semibold text-lg text-primary md:text-2xl">Contact</h4>
                    <div className={`h-1 w-21 rounded-xl mx-auto bg-primary transition-all duration-[2000ms] origin-center ${isTerlihat ? 'scale-x-100' : 'scale-x-0'}`}></div>
                </div>
                <h2 className="font-bold text-dark text-3xl mb-4 md:text-5xl">Hubungi Kami</h2>
                <p className="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat voluptatibus ea odit?</p>
            </div>
            <div className="gap-16 md:grid-cols-2 grid">
                <div className="self-center">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Let's Connect</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            I'm always interested in new opportunities and exciting projects.
                            Whether you need a website, web application, or just want to chat about tech,
                            feel free to reach out!
                        </p>
                    </div>


                    <div className="space-y-4">
                        <div>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail text-indigo-600"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Email</p>
                                    <p className="text-gray-600">john.doe@example.com</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone text-indigo-600"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Phone</p>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin text-indigo-600"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx={12} cy={10} r={3} /></svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Location</p>
                                    <p className="text-gray-600">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex space-x-4 mt-8">
                        <a href="#" className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white hover:bg-indigo-700 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                        </a>
                        <a href="#" className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white hover:bg-indigo-700 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg>
                        </a>
                        <a href="#" className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white hover:bg-indigo-700 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                        </a>
                    </div>

                </div>

                {/* form */}

                <div className=" self-center ">
                    {/* Tambahkan ref dan onSubmit ke tag <form> */}
                    <form ref={form} onSubmit={sendEmail} className="space-y-8">
                        <div className="">
                            <label htmlFor="name" className="text-base font-bold text-primary">Nama</label>
                            {/* Tambahkan attribute 'name' agar sesuai dengan template */}
                            <input type="text" id="name" name="name" className="text-dark p-3 rounded-md focus:outline-none w-full bg-slate-200 focus:ring-primary focus:ring-1 focus:border-primary" required />
                        </div>
                        <div className="">
                            <label htmlFor="email" className="text-base font-bold text-primary">Email</label>
                            {/* Tambahkan attribute 'name' */}
                            <input type="email" id="email" name="email" className="text-dark p-3 rounded-md focus:outline-none w-full bg-slate-200 focus:ring-primary focus:ring-1 focus:border-primary" required />
                        </div>
                        <div className="">
                            <label htmlFor="message" className="text-base font-bold text-primary">pesan</label>
                            {/* Tambahkan attribute 'name' dan perbaiki id */}
                            <textarea id="message" name="message" className="text-dark p-3 rounded-md focus:outline-none w-full bg-slate-200 focus:ring-primary focus:ring-1 focus:border-primary" required></textarea>
                        </div>
                        <div className="w-full">
                            {/* Tambahkan status loading di tombol */}
                            <button type="submit" disabled={isSending} className="text-base font-semibold bg-primary text-white py-3 px-8 w-full rounded-full hover:shadow-lg transition-all duration-500 disabled:opacity-50">
                                {isSending ? 'Mengirim...' : 'kirim'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

// ---------------------------------------------------------------------------------------------------- CONTACT END ---------------------------------------------------------------------------------------------------- //






// ---------------------------------------------------------------------------------------------------- FOOTER ---------------------------------------------------------------------------------------------------- //

function Footer() {
    return (
        <footer className="bg-dark pt-15 pb-5">
            <div className="place">
                <div className="flex flex-wrap">
                    <div className="bm-12 w-1/2 md:w-1/3">
                        <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
                        <ul className="text-slate-300 mb-5">
                            <li><a href="#" className="inline-block text-base hover:text-primary mb-1">Beranda</a></li>
                            <li><a href="#about" className="inline-block text-base hover:text-primary mb-1">Tentang Saya</a></li>
                            <li><a href="#portofolio" className="inline-block text-base hover:text-primary mb-1">Portofolio</a></li>
                            <li><a href="#clients" className="inline-block text-base hover:text-primary mb-1">Clients</a></li>
                            <li><a href="#blog" className="inline-block text-base hover:text-primary mb-1">Blog</a></li>
                            <li><a href="#contact" className="inline-block text-base hover:text-primary mb-1">Contact</a></li>
                        </ul>
                    </div>
                    <div className="bm-12 w-1/2 md:w-1/3">
                        <h3 className="font-semibold text-xl text-white mb-5">Kategori Tulisan</h3>
                        <ul className="text-slate-300">
                            <li><a href="#" className="inline-block text-base hover:text-primary mb-1">Programming</a></li>
                            <li><a href="#" className="inline-block text-base hover:text-primary mb-1">Teknologi</a></li>
                            <li><a href="#" className="inline-block text-base hover:text-primary mb-1">Gaya Hidup</a></li>
                        </ul>
                    </div>
                    <div className="mb-12 text-slate-300 w-1/2 md:w-1/3">
                        <h3 className="text-lg mb-2">Hubungi Kami</h3>
                        <p className="mb-1">fahrulmuhammad764@gmail.com</p>
                        <p className="mb-1">Jl. Rw. Sukahening No. 193</p>
                        <p className="mb-1">Tasikmalaya</p>
                    </div>
                </div>
                <div className="pt-5 border-t grid border-slate-700">
                    <div className="flex mx-auto justify-between text-2xl tablet:text-4xl w-[170px] mb-5">
                        <a className="text-secondary" href="https://www.threads.com/@andiirtf" target="_blank"><svg className="hover:text-primary transition-all ease-in-out duration-[450ms]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948.591.621.928 1.509 1.005 2.644.328.138.63.299.905.484 1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.217 6.217 0 0 0-1.528-.161Z"></path></svg></a>
                        <a className="text-secondary" href="https://www.tiktok.com/@fauzan2k?is_from_webapp=1&sender_device=pc" target="_blank"><svg className="hover:text-primary transition-all ease-in-out duration-[450ms]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path></svg></a>
                        <a className="text-secondary" href="https://www.instagram.com/andiirtf/" target="_blank"><svg className="hover:text-primary transition-all ease-in-out duration-[450ms]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path></svg></a>
                        <a className="text-secondary" href="https://x.com/Fahrul7309" target="_blank"><svg className="hover:text-primary transition-all ease-in-out duration-[450ms]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"></path></svg></a>
                    </div>
                    <p className="text-white text-base mx-auto">Dibuat Oleh <span className="text-primary font-medium">Fahrul</span> Pakai <span className="text-blue-500 font-medium"><a href="https://tailwindcss.com/" target="_blank">Tailwind V4</a></span></p>
                    <p className="text-white mx-auto">© 2025 Fahrul. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}