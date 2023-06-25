import React, { useState, useEffect } from 'react';
import Lottie from "lottie-react";
import heroa from "../assets/animations/heroa.json"


const Hero = () => {

    return (
        <>
            <div className="flex flex-wrap mx-auto max-w-screen-xl lg:mt-10">
                <div className="w-full lg:w-1/2 flex lg:mt-24">
                    <div className="p-8">
                        <h1 className="text-xl lg:2xl font-bold mb-4 text-[#00F4FB] animate-pulse">You Found Me!</h1>
                        <h1 className="text-2xl md:text-4xl font-bold mb-4">Hi, I'm Harold Royce</h1>
                        <h3 className=" text-md md:text-lg mb-4 text-[#FE025B] font-bold animate-pulse">Software Engineer | Web Developer</h3>
                        <p className="text-lg mb-8">I seamlessly integrate technology and design to craft immersive digital experiences. Leveraging my expertise in account management, frontend web development, and graphic design, I offer a distinctive approach to each project, resulting in captivating outcomes.</p>
                        <a className="hidden bg-[#FE025B] hover:bg-[#FEFFFE] text-white hover:text-[#FE025B] font-semibold py-2 px-4 rounded">Learn More</a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="h-full">
                        <Lottie animationData={heroa} loop={true} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero