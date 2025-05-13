"use client"
import { useState, useEffect } from "react";
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Project = () => {

    const [settings] = useState({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true, // ✅ tambahkan ini
        centerPadding: "0px", // ✅ dan ini
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: true,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerMode: true,
                    centerPadding: "0px",
                },
            },
        ],
    });

    const [projects] = useState([
        {
            id: 1,
            title: 'Task Tracker',
            category: 'CRUD App',
            description: 'A web app to-do list that is simplified with features for completion and deletion from the lis',
            repo: 'https://github.com/Yossi-nordiansah/task-tracker-App',
            page: 'https://loquacious-horse-45d5f2.netlify.app/',
            img: '/images/task-tracker.png'
        },
        {
            id: 2,
            title: 'Books App',
            category: 'CRUD App',
            description: 'A web app that is useful for storing book data, featuring Create, Read, Update, and Delete functionalities.',
            repo: 'https://github.com/Yossi-nordiansah/task-tracker-App',
            page: 'https://yossi-nordiansah.github.io/books-app//',
            img: "/images/books-app.png"
        },
        {
            id: 3,
            title: 'Password Generator',
            category: 'Generate App',
            description: 'A web app that functions to generate a random password based on the username you input.',
            repo: 'https://github.com/Yossi-nordiansah/password-generator',
            page: 'https://yossi-nordiansah.github.io/password-generator/',
            img: "/images/password-generator.png"
        },
        {
            id: 4,
            title: 'Calculator',
            category: 'Calculator',
            description: 'A simple calculator App',
            repo: 'https://github.com/Yossi-nordiansah/kalkulator',
            page: 'https://yossi-nordiansah.github.io/kalkulator/',
            img: "/images/calculator.png"
        },
        {
            id: 5,
            title: 'Dapur Minang',
            category: 'Restaurant Landing Page',
            description: 'This is a landing page for the "Dapur Minang" restaurant website, equipped with simple and attractive animations. Additionally, this landing page is also equipped with a dark mode to better suit users.',
            repo: 'https://github.com/Yossi-nordiansah/dapur-minang',
            page: 'https://yossi-nordiansah.github.io/dapur-minang/',
            img: "/images/dapurMinang.png"
        },
        {
            id: 6,
            title: 'Netflix Clone',
            category: 'Landing Page',
            description: 'A cloning of the Netflix landing page.',
            repo: 'https://github.com/Yossi-nordiansah/netplix',
            page: 'https://yossi-nordiansah.github.io/netplix/',
            img: "/images/netflix.png"
        },
        {
            id: 7,
            title: 'YN Movie',
            category: 'Information System',
            description: 'A web app that functions to search for movie information using the API from omdb.com.',
            repo: 'https://github.com/Yossi-nordiansah/yn_movie',
            page: 'https://yossi-nordiansah.github.io/yn_movie/',
            img: "/images/ynmovie.png"
        },
        {
            id: 8,
            title: 'MetaVFest Prototype',
            category: 'Landing Page',
            description: 'A prototype landing page for ticket booking of an event.',
            repo: 'https://github.com/Yossi-nordiansah/metavfest_prototypenew.git',
            page: 'https://metavfest-prototypenew.vercel.app/',
            img: "/images/metavfest.png"
        },
    ])

    return (
        <section className="pt-20 bg-gradient-to-b lg:min-h-screen lg:pb-0 pb-6 from-blue-950 to-blue-800 px-4">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl mb-6 font-bold text-center text-blue-300 font-poppins">Projects</h2>
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <div key={index} className="px-3 py-2 h-full">
                            <div className="bg-[#0e1b34] border-2 transition-all duration-200 border-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full justify-between min-h-96">
                                <img src={project.img} alt={project.name} className="h-56 w-full object-cover mb-2" />
                                <div className='px-3'>
                                    <h1 className='text-white xl:text-2xl lg:text-[20px] xs:text-xl font-poppins font-bold underline mb-1 '>{project.title}</h1>
                                    <p className='font-semibold text-white font-inter'>{project.category}</p>
                                    <p className='max-w-full mt-1 mb-2 text-white transition-all duration-200 font-inter line-clamp-1 hover:line-clamp-none '>{project.description}</p>
                                </div>
                                <div className='flex gap-3 px-4 mb-2'>
                                    <a href={project.repo} target='_blank'>
                                        <button title='see repository' className='px-2 py-1 bg-yellow-500 border-2 rounded-md hover:bg-yellow-400'><img src="/icons/code.svg" alt="" /></button>
                                    </a>
                                    <a href={project.page} target='_blank'>
                                        <button title='visit site' className='px-2 py-1 bg-yellow-500 border-2 rounded-md hover:bg-yellow-400'><img src="/icons/external-link.svg" alt="" /></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Project;
