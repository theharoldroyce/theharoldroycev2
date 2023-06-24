import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Foother = () => {
    return (
        <>
            <div className="flex flex-wrap mx-auto max-w-screen-xl lg:mt-10">
                <div className="w-full mx-auto my-8 lg:my-24 border-2">
                    <div className="justify-center p-8">
                        <h1 className=" md:text-xl lg:text-3xl text-center font-bold mb-2 lg:mb-4">
                            Elevate Your Brand
                        </h1>
                        <h1 className=" md:text-2xl lg:text-5xl text-center font-bold my-4 lg:my-8">
                            Let's Turn Your <span className='text-[#FE025B] animate-pulse'>Vision </span>into, <span className='text-[#00F5FA] animate-pulse'>Reality!</span>
                        </h1>
                        <button className="flex items-center text-xl iplg:text-2xl font-bold justify-center mx-auto bg-[#FE025B] hover:bg-[#FEFFFE] text-white hover:text-[#FE025B] font-semibold py-3 lg:py-5 px-8 lg:px-20 rounded">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=theharoldroyce@gmail.com" target="_blank" className="flex items-center">
                                <h4 className="mr-4">
                                    Let's Talk
                                </h4>
                                <BsFillArrowRightCircleFill />
                            </a>
                        </button>


                    </div>
                </div>
                <footer className="w-full my-6">
                    <hr className="my-8 border-blue-gray-50" />
                    <h4 className="text-center font-normal">
                        &copy; 2023 All rights reserved. Harold Royce
                    </h4>
                </footer>
            </div>
        </>
    )
}

export default Foother