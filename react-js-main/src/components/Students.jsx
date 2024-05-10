import React from 'react';
import { PiStudentFill } from "react-icons/pi";

function Students() {
    return (
        <main className="flex-1 bg-gray-100 p-8">
            <div className="container mx-auto flex justify-center"> 
                <div className="w-60 bg-white shadow-lg rounded-lg px-6 py-4 flex items-center space-x-4">
                    <PiStudentFill  className="text-6xl text-blue-500" />
                    <h1 className="text-4xl font-semibold">Student</h1>
                </div>
            </div>
        </main>
    );
}

export default Students;
