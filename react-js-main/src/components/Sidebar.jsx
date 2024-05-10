import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";

function Sidebar() {
    const location = useLocation();
    const activeClass = 'bg-white text-blue-500';

    return (
        <aside className="navigation bg-blue-800 text-white fixed h-full w-64 transition-all duration-500 overflow-hidden">
            <div className="container h-full overflow-y-auto">
                <ul>
                    <li className="mb-2">
                        <NavLink exact to="/dashboard" className="flex items-center p-3">
                          <IoMdArrowDropdownCircle className="text-4xl mr-2"/> 
                            <div className="title font-bold text-3xl">Sidebar</div>
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink exact to="/dashboard" className={`flex items-center p-3 ${location.pathname === '/dashboard' ? activeClass : ''}`}>
                            <FaHome className="text-4xl mr-2" />
                            <div className="title text-2xl">Dashboard</div>
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink exact to="/admin" className={`flex items-center p-3 ${location.pathname === '/admin' ? activeClass : ''}`}>
                            <RiAdminFill className="text-4xl mr-2" />
                            <div className="title text-2xl">Admin</div>
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink exact to="/students" className={`flex items-center p-3 ${location.pathname === '/students' ? activeClass : ''}`}>
                            <PiStudentFill className="text-4xl mr-2" />
                            <div className="title text-2xl">Students</div>
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink exact to="/messages" className={`flex items-center p-3 ${location.pathname === '/messages' ? activeClass : ''}`}>
                            <BiSolidMessageSquareDots className="text-4xl mr-2" />
                            <div className="title text-2xl">Messages</div>
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink exact to="/settings" className={`flex items-center p-3 ${location.pathname === '/settings' ? activeClass : ''}`}>
                            <IoSettingsSharp className="text-4xl mr-2" />
                            <div className="title text-2xl">Settings</div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
