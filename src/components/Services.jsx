import React from 'react'
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";

const Services = () => {
    return (
        <>
            <div className="flex flex-wrap mx-auto max-w-screen-xl my-4 lg:mt-10">
                <div className="flex items-center justify-center pb-8 mx-auto">
                    <p className="text-xl text-center text-[#FE025B] font-clintonb md:text-4xl font-bold hover:text-[#00F5FA]">
                        Services Offered
                    </p>
                </div>
                <div className="flex items-center justify-between grid grid-cols-1 lg:grid-cols-3 lg:gap-6 mx-3 md:mx-7">
                    <Card className="mt-6 h-52 bg-[#00F4FB] hover:bg-[#FEFFFE] hover:animate-pulse">
                        <CardBody>
                            <Typography className="mb-2 text-center font-clintonb text-[#2D2C3B]">
                                Website Development
                            </Typography>
                            <Typography>
                                Design and develop customized, responsive websites that engage users, drive conversions, and reflect your brand's unique identity.
                            </Typography>
                        </CardBody>
                    </Card>
                    <Card className="mt-6 h-52 bg-[#00F4FB] hover:bg-[#FEFFFE] hover:animate-pulse">
                        <CardBody>
                            <Typography className="mb-2 text-center font-clintonb text-[#2D2C3B]">
                                Website Maintenance & Support
                            </Typography>
                            <Typography>
                                Keep your website secure, up-to-date, and running smoothly, allowing you to focus on your core business activities.
                            </Typography>
                        </CardBody>
                    </Card>
                    <Card className="mt-6 h-52 bg-[#00F4FB] hover:bg-[#FEFFFE] hover:animate-pulse">
                        <CardBody>
                            <Typography className="mb-2 text-center font-clintonb text-[#2D2C3B]">
                                E-commerce Solutions
                            </Typography>
                            <Typography>
                                Complete e-commerce solutions: website development, payment integration, inventory management, and user experience optimization for online business success.
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Services