'use client'
import React, { useState } from "react";
import Image from "next/image";
const AddClient = () => {
    const [image, setImage] = useState(null);
    const [fullName, setFullName] = useState('John Doe');
    const [joinedOn, setJoinedOn] = useState('2024-01-01');
    const [address, setAddress] = useState('1234 Main St, City, Country');
    const [contactNo, setContactNo] = useState('+1234567890');
    const [email, setEmail] = useState('johndoe@example.com');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className=" flex justify-center items-center">
            <div className="w-full p-7">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-medium">Client Details</h1>
                </div>
                <div className="">
                    <div className="border rounded-lg p-6 shadow-xl ">
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {/* Left Section */}
                            <div className="col-span-2 border-r pr-6 ">
                                <div className="mb-10">
                                    <h2 className="text-md font-semibold mb-10">Client Information</h2>
                                    <div>
                                        <div className="flex gap-20 items-center mb-10">
                                            <label className="text-sm font-medium mb-1">Full Name</label>
                                            <span className="text-sm">{fullName}</span>
                                        </div>
                                        <div className="flex gap-20 items-center mb-5">
                                            <label className="text-sm font-medium mb-1">Joined On</label>
                                            <span className="text-sm">{joinedOn}</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-md font-semibold mb-10">Contact Information</h2>
                                    <div>
                                        <div className="flex gap-20 items-center mb-10">
                                            <label className="text-sm font-medium mb-1">Full Address</label>
                                            <span className="text-sm">{address}</span>
                                        </div>
                                        <div className="flex gap-20 items-center mb-10">
                                            <label className="text-sm font-medium mb-1">Contact No</label>
                                            <span className="text-sm">{contactNo}</span>
                                        </div>
                                        <div className="flex gap-16 items-center mb-5">
                                            <label className="text-sm font-medium mb-1">Email Address</label>
                                            <span className="text-sm">{email}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="flex flex-col items-center mb-5 pl-6">
                                <div className="w-32 h-32 rounded-full overflow-hidden border mb-4">
                                    {image ? (
                                        <img
                                            src={image}
                                            alt="Client"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                                            No Image
                                        </div>
                                    )}
                                </div>
                                <div className="text-sm text-gray-500">
                                    {image ? "Uploaded Image" : "No Image Uploaded"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClient;
