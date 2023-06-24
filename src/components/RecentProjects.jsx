import React from 'react'
import { Card } from "@material-tailwind/react";
import Unimak from "../assets/photos/E-commerce.png"
import Admin from "../assets/photos/Admin.png"
import Numinous from "../assets/photos/Numinous.png"

const RecentProjects = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl my-4 lg:mt-10">
                <div className="flex items-center justify-center mb-12 mx-auto">
                    <p className="text-xl text-center text-[#FE025B] font-clintonb md:text-4xl font-bold rounded hover:text-[#00F5FA]">
                        Recent Projects
                    </p>
                </div>
                <div className="flex items-center justify-center mx-3 md:mx-7 mb-4 md:mb-8">
                    <Card className="border-2 rounded justify-center mx-auto h-5/6">
                        <img src={Unimak} alt="Recent Projects" />
                    </Card>
                </div>

                <div className="flex items-center justify-between grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mx-3 md:mx-7">
                    <Card className="border-2 rounded justify-center mx-auto">
                        <img src={Numinous} alt="Recent Projects" />
                    </Card>
                    <Card className="border-2 rounded justify-center mx-auto ">
                        <img src={Admin} alt="Recent Projects" />
                    </Card>
                </div>

            </div>
        </>
    )
}

export default RecentProjects