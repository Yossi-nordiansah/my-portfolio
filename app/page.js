"use client"
import { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const pdfURL = 'https://drive.google.com/file/d/1bc_fIXGVsPDWcqVp_2Q3TvZb4CDSXWsn/view?usp=sharing';
    const [showContact, setShowContact] = useState(false);
    return (
        <main className="w-full min-w-full sm:pt-24 xs:pt-20 pt-16 bg-gradient-to-b grid grid-rows-[auto_auto_auto_auto_30px_auto] gap-y-3 from-blue-950 to-blue-800">
            <div className="relative">
                <TypeAnimation
                    sequence={[
                        'Hallo...',
                        1000,
                        'Wellcome To My Portfolio',
                        1000,
                        'My Name is Yossi Nordiansah',
                        1000,
                        'I am a Fullstack Web Developer',
                        1000
                    ]}
                    wrapper="h1"
                    speed={50}
                    cursor={false}
                    repeat={0}
                    className="absolute font-kanit lg:text-4xl sm:text-4xl sm:text-left xs:text-[22px] xs:leading-[28px] text-[18px] xl:pl-32 lg:pl-14 md:pl-10 sm:pl-8 xs:pl-5 pl-5  text-sky-400 tracking-wider font-bold drop-shadow-[0_0px_15px_#0066ff]"
                />
            </div>

            {/* <!-- intro --> */}
            <div className="xl:w-4/5 lg:w-[90%] mx-auto lg:mt-16 sm:mt-14  xs:mt-14 mt-10 flex lg:flex-row flex-col-reverse justify-between items-center " id="about">
                <div className="lg:w-8/12 w-[90%] overflow-x-hidden">
                    <p className="overflow-x-hidden text-sm text-justify font-inter sm:text-xl xs:text-lg lg:w-full md:w-full sm:font-semibold xs:font-medium sm:first-letter:text-6xl xs:first-letter:text-4xl xxs:first-letter:text-2xl text-slate-200" data-aos="fade-right" data-aos-delay="300" data-aos-once='true'>
                        Hello, My name is <span className="text-blue-400 font-poppins">Yossi Nordiansah</span>, I am a Fullstack Web Developer specializing in user interface development (Front-End) using Next.js. My core expertise lies in using React.js to build responsive, interactive, user-friendly, modular, and efficient UI components, as well as Tailwind CSS to accelerate the styling process with a modern utility-first approach. I am accustomed to working collaboratively using Git and GitHub, both for effective version control and for team collaboration through pull requests, code reviews, issue tracking, and leveraging Artificial Intelligence to speed up the development process.
                    </p>
                    <div className="flex gap-3 mt-7">
                        <a href={pdfURL} target="_blank" download="Yossi Nordiansah Resume" className="flex items-center justify-center gap-2 px-3 py-3 border-2 border-yellow-400 border-dashed rounded-lg cursor-pointer hover:bg-stone-500 w-fit bg-white/30 sm:py-1">
                            <img src="/icons/view.svg" className='w-4 sm:w-6 ' alt="" />
                            <p className="text-white md:text-sm sm:text-[12px] xs:text-[12px] xs:font-medium xs: text-[8px] text-center">VIEW RESUME</p>
                        </a>
                    </div>
                </div>
                <div className="border-8 border-blue-300 overflow-hidden overflow-x-hidden rounded-full drop-shadow-[0_0px_15px_#0066ff] sm:h-72 sm:w-72 w-56 h-56" data-aos="fade-left" data-aos-delay="300" data-aos-once='true'>
                    <img className="mx-auto xs:w-66 bg-gradient-to-b to-blue-950 to from-blue-600" src="/images/img.png" alt="" />
                </div>
            </div>

            {/* <!-- Education --> */}
            <div className="xl:w-4/5 w-[90%] xl:mt-24 mt-20 m-auto justify-between mobile-sm:flex-col laptop:flex-row items-center" id="education">
                <h1 className="text-4xl font-bold text-left text-blue-300 font-poppins">Education</h1>
                <div className="mt-10 lg:pl-6" data-aos="fade-up" data-aos-delay="200" data-aos-once='true'>
                    <img src="/icons/course.svg" alt="" className="w-6" />
                    <div className="mt-2 ml-3 leading-5 border-l-2 border-white xs:h-20 h-28">
                        <div className="relative flex flex-col gap-2 ml-10 text-white lg:gap-3 -top-9">
                            <h1 className="font-bold lg:text-2xl sm:text-xl xs:text-base">Yayasan Adipurna Inovasi Asia &#40;Kampus Merdeka Program&#41;</h1>
                            <p className="text-sm sm:text-base">August 2023 - December 2023</p>
                            <p className="text-sm font-bold xs:text-base">Front End Web Developer</p>
                        </div>
                    </div>
                    <img src="/icons/education-cap-svgrepo-com.svg" alt="" className="w-6 mt-4" />
                    <div className="h-20 mt-2 ml-3 border-l-2 border-white xs:h-16">
                        <div className="relative flex flex-col gap-2 ml-10 text-white lg:gap-3 -top-9">
                            <h1 className="text-xl font-bold leading-6 lg:text-2xl">Universitas Islam Majapahit</h1>
                            <p className="text-sm sm:text-base">2020 - Present</p>
                            <p className="text-sm font-bold xs:text-base">Informatics Engineering</p>
                        </div>
                    </div>
                    <img src="/icons/education-cap-svgrepo-com.svg" alt="" className="w-6 mt-4" />
                    <div className="h-16 mt-2 ml-3 border-l-2 border-white">
                        <div className="relative flex flex-col gap-2 ml-10 text-white lg:gap-3 -top-9">
                            <h1 className="text-xl font-bold leading-6 lg:text-2xl">SMAN 1 Kutorejo</h1>
                            <p className="text-sm sm:text-base">2015 - 2018</p>
                            <p className="text-sm font-bold xs:text-base">Majoring Science</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Work Experience --> */}
            <div className="xl:w-4/5 w-[90%] mt-20 mx-auto justify-between relative overflow-y-hidden pb-3" id="education">
                <h1 className="pl-0 text-3xl font-bold text-left text-blue-300 font-poppins xs:text-4xl">Work Experience</h1>
                <div className="mt-10 lg:pl-6" data-aos="fade-up" data-aos-delay="200" data-aos-once='true'>
                    <img src="/icons/work.svg" alt="" className="w-6" />
                    <div className="mt-2 ml-3 border-l-2 border-white h-26 ">
                        <div className="relative flex flex-col gap-4 ml-10 text-white -top-9">
                            <h1 className="text-xl font-bold leading-6 lg:text-2xl">CV Natusi</h1>
                            <p className="font-semibold">Internship</p>
                            <p className="font-semibold">8 April 2024 - 8 Mei 2024</p>
                            <p className="font-bold">Front End Developer</p>
                        </div>
                    </div>
                    <img src="/icons/work.svg" alt="" className="w-6 mt-4" />
                    <div className="mt-4 ml-3 border-l-2 border-white h-26">
                        <div className="relative flex flex-col gap-4 ml-10 text-white -top-9">
                            <h1 className="text-xl font-bold leading-6 lg:text-2xl">PT Wezzo Sukses Mandiri</h1>
                            <p className="font-semibold">Full Time Job</p>
                            <p className="font-semibold">2021</p>
                            <p className="font-bold">Cleaning Service</p>
                        </div>
                    </div>
                    <img src="/icons/work.svg" alt="" className="w-6 mt-4" />
                    <div className="h-24 mt-2 ml-3 border-l-2 border-white">
                        <div className="relative flex flex-col gap-3 ml-10 text-white -top-9">
                            <h1 className="text-xl font-bold leading-6 lg:text-2xl">PT Prada Karya Perkasa</h1>
                            <p className="font-semibold">Full Time Job</p>
                            <p className="font-semibold">2020</p>
                            <p className="font-bold">Helper Thermo</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed right-6 bottom-9 animate-bounce" title="click to contact me" data-aos="fade-down" data-aos-delay="200" data-aos-once='true'>
                <a target="_blank" href="https://wa.me/6285655230897"><img src="/images/icons8-whatsapp-48.png" alt="" /></a>
            </div>
        </main>
    )
}

export default Home;