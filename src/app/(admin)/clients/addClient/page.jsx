'use client'
import React, { useState } from "react";

const AddClient = () => {
    const [image, setImage] = useState(null);
    const [fullName, setFullName] = useState('');
    const [joinedOn, setJoinedOn] = useState('');
    const [address, setAddress] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [email, setEmail] = useState('');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const clientData = {
            fullName,
            joinedOn,
            address,
            contactNo,
            email,
            image
        };

        console.log("Client Data:", clientData);

        // Clear the form fields after submission
        setFullName('');
        setJoinedOn('');
        setAddress('');
        setContactNo('');
        setEmail('');
        setImage(null);
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-full p-7">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-4xl font-medium">Client Details</h1>
                    <button className=' p-2 w-40 h-12  rounded-xl border bg-custom-yellow text-white font-medium text-xl'
                        onClick={handleSubmit}>
                        Add Client
                    </button>
                </div>
                <div className="">
                    <form className=" border rounded-lg p-6 shadow-xl">
                        <div className="grid grid-cols-3 gap-4">
                            {/* Left Section */}
                            <div className="col-span-2 border-r ">
                                <div className="mb-6">
                                    <h2 className="text-md font-semibold mb-2">Client Information</h2>
                                    <div className="">
                                        <div className="flex gap-20 items-center mb-5">
                                            <label className="text-sm font-medium mb-1" htmlFor="fullName">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                placeholder="Enter full name"
                                                className="border-b px-3 py-2 mb-6"
                                            />
                                        </div>
                                        <div className="flex gap-20 items-center mb-5">
                                            <label className=" text-sm font-medium mb-1" htmlFor="joinedOn">
                                                Joined On
                                            </label>
                                            <input
                                                type="date"
                                                id="joinedOn"
                                                value={joinedOn}
                                                onChange={(e) => setJoinedOn(e.target.value)}
                                                className="border-b px-3 py-2 mb-6"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-md font-semibold mb-2">Contact Information</h2>
                                    <div className="">
                                        <div className="flex gap-20 items-center mb-5">
                                            <label className=" text-sm font-medium mb-1" htmlFor="address">
                                                Full Address
                                            </label>
                                            <input
                                                type="text"
                                                id="address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                placeholder="Enter full address"
                                                className="border-b px-3 py-2 mb-6"
                                            />
                                        </div>
                                        <div className="flex gap-20 items-center mb-5">
                                            <label className=" text-sm font-medium mb-1" htmlFor="contactNo">
                                                Contact No
                                            </label>
                                            <input
                                                type="text"
                                                id="contactNo"
                                                value={contactNo}
                                                onChange={(e) => setContactNo(e.target.value)}
                                                placeholder="Enter contact number"
                                                className="border-b px-3 py-2 mb-6"
                                            />
                                        </div>
                                        <div className="flex gap-16 items-center mb-5">
                                            <label className="text-sm font-medium mb-1" htmlFor="email">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter email address"
                                                className="border-b px-3 py-2 mb-6"
                                            />
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
                                <label
                                    htmlFor="uploadImage"
                                    className="bg-gray-200 text-sm text-gray-700 px-4 py-2 rounded hover:bg-gray-300 cursor-pointer"
                                >
                                    Browse Picture
                                </label>
                                <input
                                    type="file"
                                    id="uploadImage"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageUpload}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClient;
