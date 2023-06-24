import React, { useState } from 'react';
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { trainCertItems } from "../static/data"



const TrainingCert = () => {

    const [visibleItems, setVisibleItems] = useState(6);
    const totalItems = trainCertItems.length;
    const loadMoreText = visibleItems < totalItems ? 'Load More' : 'Load Less';

    const handleLoadMore = () => {
        setVisibleItems(prevVisibleItems => {
            if (prevVisibleItems === 6) {
                return totalItems; // Load all items
            } else {
                return 6; // Reset to initial visible items
            }
        });
    };

    return (
        <>
            <div className="flex flex-wrap mx-auto max-w-screen-xl mt-4 lg:mt-10">

                <div className="flex items-center justify-center pb-8 mx-auto">
                    <p className="text-xl text-center text-[#FE025B] font-clintonb md:text-4xl font-bold hover:text-[#00F5FA]">
                        Training Certificates
                    </p>
                </div>

                <div className="flex items-center justify-between grid grid-cols-1 lg:grid-cols-3 lg:gap-4 mx-auto">
                    {trainCertItems.slice(0, visibleItems).map((item, index) => (
                        <Card key={index} className="mt-6 h-40 bg-[#FEFFFE]">
                            <CardBody>
                                <Typography className="mb-2 font-clintonb text-[#2D2C3B] text-sm">
                                    {item.title}
                                </Typography>
                                <Typography>
                                    {item.sub}
                                </Typography>
                                <button className='mt-3 rounded'>
                                    <p className='px-4 py-1 text-[#FEFFFE]'>View Certificate</p>
                                </button>
                            </CardBody>
                        </Card>
                    ))}
                </div>
                {totalItems > 6 && (
                    <div className="mx-auto justify-center mt-6">
                        <button onClick={handleLoadMore} className='flex items-center rounded bg-[#FE025B] hover:bg-[#FEFFFE] text-white hover:text-[#FE025B] px-6 py-2'>
                            {loadMoreText}
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default TrainingCert