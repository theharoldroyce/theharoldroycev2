import React from 'react'
import { BiLogoReact, BiLogoBootstrap, BiLogoTailwindCss, BiLogoWordpress, BiLogoJavascript, BiLogoRedux, BiLogoNodejs, BiLogoPhp, BiLogoFigma, BiLogoFirebase, BiLogoMongodb, BiLogoGit, BiLogoGithub, BiLogoGitlab, } from "react-icons/bi";
import { SiExpress, SiLaravel, SiMysql } from "react-icons/si";
import { tech } from "../static/data"
import { useMediaQuery } from 'react-responsive';

const TechStack = () => {

    const SocialIcon = ({ name }) => {
        const isSmallScreen = useMediaQuery({ maxWidth: 767 });

        const getSize = () => {
            if (isSmallScreen) {
                return "50";
            } else {
                return "90";
            }
        };
        switch (name) {
            case "BiLogoFigma":
                return <BiLogoFigma size={getSize()} />;
            case "BiLogoWordpress":
                return <BiLogoWordpress size={getSize()} />;
            case "BiLogoReact":
                return <BiLogoReact size={getSize()} />;
            case "BiLogoBootstrap":
                return <BiLogoBootstrap size={getSize()} />;
            case "BiLogoTailwindCss":
                return <BiLogoTailwindCss size={getSize()} />;
            case "BiLogoJavascript":
                return <BiLogoJavascript size={getSize()} />;
            case "BiLogoRedux":
                return <BiLogoRedux size={getSize()} />;
            case "BiLogoNodejs":
                return <BiLogoNodejs size={getSize()} />;
            case "BiLogoPhp":
                return <BiLogoPhp size={getSize()} />;
            case "SiLaravel":
                return <SiLaravel size={getSize()} />;
            case "SiExpress":
                return <SiExpress size={getSize()} />;
            case "BiLogoMongodb":
                return <BiLogoMongodb size={getSize()} />;
            case "SiMysql":
                return <SiMysql size={getSize()} />;
            case "BiLogoFirebase":
                return <BiLogoFirebase size={getSize()} />;
            case "BiLogoGit":
                return <BiLogoGit size={getSize()} />;
            case "BiLogoGithub":
                return <BiLogoGithub size={getSize()} />;
            case "BiLogoGitlab":
                return <BiLogoGitlab size={getSize()} />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="flex flex-wrap mx-auto max-w-screen-xl mt-4 lg:mt-10">
                <div className="flex items-center justify-center pb-8 mx-auto">
                    <p className="text-xl text-center text-[#FE025B] font-clintonb md:text-4xl font-bold hover:text-[#00F5FA]">
                        Technology Stack
                    </p>
                </div>
                <div className="container mx-auto">
                    <div className="flex items-center justify-between grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 lg:gap-3 gap-2 mx-3 md:mx-7">
                        {tech.map((item, index) => (
                            <div key={index} className="m-auto p-1 font-bold text-[#FEFFFE]">
                                <SocialIcon name={item.icon} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechStack