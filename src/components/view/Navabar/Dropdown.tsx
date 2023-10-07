"use client"
import { navigationItems } from '@/components/utils/arrays';
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

const Dropdown = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDrawer}
                className="fixed top-4 right-4 z-50 p-2 text-gray-600 transition duration-300 transform hover:text-gray-800 hover:scale-110"
            >
                {open ? (
                    <GiHamburgerMenu />
                ) : (
                    <div className="w-6 h-6 border-t-2 border-gray-600"></div>
                )}
            </button>

            <div
                className={`fixed z-[100] top-0 right-0 w-64 h-full bg-white border-l border-gray-200 ${open ? 'translate-x-0' : 'translate-x-full'
                    } transition-all duration-300 ease-in-out`}
            >
                <div
                    onClick={toggleDrawer}
                >
                    <AiOutlineClose />
                </div>
                <ul className="pt-12 px-4">
                    {navigationItems.map((item: string, index: number) => (
                        <li key={index} className="mb-4">
                            <a
                                href="#"
                                className="text-gray-800 hover:text-blue-600"
                                onClick={toggleDrawer}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;
