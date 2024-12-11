import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { GrPowerShutdown } from "react-icons/gr";

function Settings() {
    return (
        <main className="flex-1 bg-gray-100 p-8">
            <div className="container mx-auto flex justify-end"> {/* Adjusted to occupy the right side */}
                <div className="w-1/2"> {/* Set width to 50% */}
                    <div className="bg-white shadow-lg rounded-lg px-6 py-4"> {/* Added shadow, rounded corners, and padding */}
                        <h2 className="text-2xl font-semibold mb-4">Settings</h2>
                        <div className="space-y-4">
                            <Link to="/edit-profile" className="flex items-center text-blue-500 hover:underline"> {/* Added flex and items-center */}
                                <FaUserEdit className="mr-2" /> {/* Added margin to the right */}
                                Edit Profile
                            </Link>
                            <Link to="/security" className="flex items-center text-blue-500 hover:underline"> {/* Added flex and items-center */}
                                <MdOutlineSecurity className="mr-2" /> {/* Added margin to the right */}
                                Security
                            </Link>
                            <Link to="/logout" className="flex items-center text-red-500 hover:underline"> {/* Added flex and items-center */}
                                <GrPowerShutdown className="mr-2" /> {/* Added margin to the right */}
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Settings;
