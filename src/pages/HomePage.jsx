import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import RecentProjects from "../components/RecentProjects";
import Foother from "../components/Foother";


const HomePage = () => {



    return (
        <>
            <NavBar />
            <div className="pt-20">
                <Hero />
                <Services className="mb-11"/>
                <RecentProjects/>
            </div>
            <Foother/>
        </>
    )
}

export default HomePage