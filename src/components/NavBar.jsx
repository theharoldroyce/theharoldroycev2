import { Fragment, useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { SiGithub, SiLinkedin } from 'react-icons/si';
import {
    Navbar,
    Collapse,
    IconButton,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { navItems, socItems } from '../static/data'
import Logo from "../assets/icons/hvicon.ico"

const NavBar = () => {

    const [openNav, setOpenNav] = useState(false);

    const [size, setSize] = useState(null);

    const handleOpen = (value) => {
        if (value === size) {
            setSize(null);
        } else {
            setSize(value);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const SocialIcon = ({ name }) => {
        switch (name) {
            case "SiGithub":
                return <SiGithub />;
            case "SiLinkedin":
                return <SiLinkedin />;
            default:
                return null;
        }
    };


    return (
        <>
            <Navbar className="fixed bg-[#2D2C3B] inset-0 z-10 h-max max-w-full rounded-none border-none py-2 px-4 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between">
                    <Link to="/">
                        <div className="flex items-center">
                            <img src={Logo} alt="logo" className="h-8 w-8 mr-2 rounded-lg" />
                            <p className="cursor-pointer py-1.5 font-clintonb font-bold text-xl lg:text-2xl text-[#FEFFFE]">theharoldroyce</p>
                        </div>
                    </Link>

                    <div className="hidden lg:block">
                        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            {navItems.map((item, index) => (
                                <li key={index} className="p-1 font-normal text-[#FEFFFE] hover:text-[#FE025B]">
                                    {item.title === 'Contact' ? (
                                        <a href="#" onClick={() => handleOpen("md")}>{item.title}</a>
                                    ) : (
                                        <Link to={item.url}>{item.title}</Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden lg:block">
                        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            {socItems.map((item, index) => (
                                <li key={index} className="p-1 font-normal text-[#FEFFFE] hover:text-[#FE025B]">
                                    <Link to={item.url} target="_blank">
                                        <SocialIcon name={item.icon} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-[#FEFFFE] hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>

                <Collapse open={openNav}>
                    <div className="container mx-auto">
                        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            {navItems.map((item, index) => (
                                <li key={index} className="p-1 font-normal text-[#FEFFFE]">
                                    {item.title === 'Contact' ? (
                                        <a href="#" onClick={() => handleOpen("md")}>{item.title}</a>
                                    ) : (
                                        <Link to={item.url}>{item.title}</Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="container mx-auto">
                        <ul className="mb-4 mt-2 flex flex-row gap-4 lg:mb-0 lg:mt-0 lg:items-center lg:gap-6">
                            {socItems.map((item, index) => (
                                <li key={index} className="p-1 font-normal text-[#FEFFFE] hover:text-[#FE025B]">
                                    <Link to={item.url} target="_blank">
                                        <SocialIcon name={item.icon} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Collapse>
            </Navbar>



            <Dialog open={size === "md"} size={size || "md"} handler={handleOpen} className="bg-[#2D2C3B]">
                <DialogBody divider>
                    <div className="m-auto py-4">
                        <h1 className="text-xl text-[#FE025B] text-center lg:text-4xl font-bold mb-2">I’M HERE TO HELP YOU</h1>
                        <h1 className="text-xl text-[#FE025B] text-center lg:text-2xl font-bold mb-2">LET'S TALK!</h1>
                    </div>
                    <form action="https://getform.io/f/75c75c46-f99c-4bec-805d-0170c2bff6d4"
                        method="POST"
                        className="w-full max-w-md mx-auto"
                    >
                        <div className="mb-4 flex">
                            <div className="w-1/2 mr-2">
                                <label htmlFor="name" className="block mb-2 font-bold text-[#FEFFFE]">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full px-3 py-2 leading-tight text-[#2D2C3B] border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="w-1/2 ml-2">
                                <label htmlFor="email" className="block mb-2 font-bold text-[#FEFFFE]">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full px-3 py-2 leading-tight text-[#2D2C3B] border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block mb-2 font-bold text-[#FEFFFE]">
                                Message
                            </label>
                            <textarea
                                name="massage"
                                className="w-full px-3 py-2 leading-tight text-[#2D2C3B] border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                rows="6"
                            ></textarea>
                        </div>
                        <div className="flex justify-center gap-6">
                            <button
                                className="rounded px-8 py-2 font-bold text-[#FEFFFE] hover:text-[#FE025B] bg-[#FE025B] hover:bg-[#FEFFFE] focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={() => handleOpen(null)}
                                className="rounded px-8 py-2 font-bold text-[#FEFFFE] hover:text-[#FE025B] bg-[#FE025B] hover:bg-[#FEFFFE] focus:outline-none focus:shadow-outline"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>

                </DialogBody>
            </Dialog>

        </>
    )
}

export default NavBar