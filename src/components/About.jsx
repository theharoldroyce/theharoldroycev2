import React from 'react'
import Profile from "../assets/photos/Profilee.png"

const About = () => {
    return (
        <>
            <div className="flex flex-wrap mx-auto max-w-screen-xl lg:mt-10">
                <div className="flex justify-center w-full m-auto lg:w-2/5 relative">
                    <div className="h-3/4 p-4 lg:p-8 relative">
                        <img src={Profile} alt="Profile-Photo" className="w-9/12 h-3/5 mx-auto rounded-lg bg-[#00F5FA]" />
                    </div>
                </div>
                <div className="w-full lg:w-3/5 flex">
                    <div className="p-4 lg:p-8">
                        <h1 className="text-xl lg:text-4xl text-center lg:text-left font-bold mb-2">Hi, I'm Harold Royce</h1>
                        <h3 className="text-md lg:text-lg text-center lg:text-left mb-4 text-[#FE025B] font-bold">Software Engineer | Web Developer</h3>
                        <p className="text-sm lg:text-lg mb-4">
                            As an enthusiastic web developer, I have honed my skills over the years to create impactful online experiences that captivate and engage users. With a keen eye for design aesthetics and a solid understanding of user experience principles, I strive to deliver websites that not only look visually stunning but also provide seamless navigation and intuitive functionality.
                        </p>
                        <p className="text-sm lg:text-lg mb-8">
                            Beyond my technical skills, I am a proactive problem-solver and an effective communicator. I take pride in staying up-to-date with the latest trends and best practices in the industry, allowing me to deliver solutions that are both modern and functional. My passion for web development drives me to constantly expand my knowledge and push the boundaries of what is possible.
                        </p>

                        <p className='text-sm md:text-base'>
                            For any sort of help or inquiries, feel free to send me an email at
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=theharoldroyce@gmail.com" target="_blank">
                                <span className='text-[#00F5FA]'>  theharoldroyce@gmail.com  </span>
                            </a>
                            and I'll get back to you soon.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About