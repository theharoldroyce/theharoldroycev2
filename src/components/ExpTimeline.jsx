import React from 'react'
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
} from "@material-tailwind/react";

const ExpTimeline = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl my-4 lg:mt-10">
                <div className="flex items-center justify-center mb-12 mx-auto">
                    <p className="text-xl text-center text-[#FE025B] font-clintonb md:text-4xl font-bold rounded hover:text-[#00F5FA]">
                        Experience
                    </p>
                </div>

                <div className="w-fit md:w-2/4 mx-3 md:mx-auto">
                    <Timeline>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="mb-2">
                                <TimelineIcon />
                                <Typography className="leading-none text-lg md:text-2xl text-[#00F5FA] font-bold">
                                    2023 - Graduation
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography className="leading-none mb-2 text-lg md:text-2xl text-[#FEFFFE] font-bold">
                                    City Colege of Calpan
                                </Typography>
                                <Typography
                                    className="font-normal text-base md:text-lg"
                                >
                                    Bachelor's Degree in Information Systems with specialization in Web Designing and Development.
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="mb-2">
                                <TimelineIcon />
                                <Typography className="leading-none text-lg md:text-2xl text-[#00F5FA] font-bold">
                                    2022 - 2023 Internship
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography className="leading-none mb-2 text-lg md:text-2xl text-[#FEFFFE] font-bold">
                                    MvSoftech Inc.
                                </Typography>
                                <Typography
                                    className="font-normal text-base md:text-lg"
                                >
                                    Performed software development tasks, assisted in the design and architecture of software applications, and communicated closely with senior software engineers.
                                </Typography>
                            </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader className="mb-2">
                                <TimelineIcon />
                                <Typography className="leading-none text-lg md:text-2xl text-[#00F5FA] font-bold">
                                    2020 - Present
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody>
                                <Typography className="leading-none mb-2 text-lg md:text-2xl text-[#FEFFFE] font-bold">
                                    Freelance
                                </Typography>
                                <Typography
                                    className="font-normal text-base md:text-lg"
                                >
                                    I create stunning and user-friendly websites for clients. I bring designs to life and ensure a seamless experience. I specialize in WordPress and empower clients to manage their own content. With attention to detail and clean code, I deliver high-quality websites that exceed expectations. Remote work allows me to collaborate closely with clients and bring their visions to life online.
                                </Typography>
                            </TimelineBody>
                            <TimelineIcon />
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </>
    )
}

export default ExpTimeline