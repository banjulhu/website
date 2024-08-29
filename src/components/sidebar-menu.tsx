import React, { useState, useEffect } from "react";

export default function SidebarMenu({ links }) {

    const [activePath, setActivePath] = useState('');

    useEffect(() => {
        setActivePath(window.location.pathname);
    }, []);

    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
                {links?.map((link, index) => {
                    const isActive = activePath === link.href;
                    return (
                        <li key={index}>
                            {JSON.stringify({ isActive, activePath })}
                            <a
                                href={link.href}
                                className={`block w-full h-full py-2 px-6 hover:bg-gray-50 transition duration-150 ease-in-out ${isActive ? 'bg-blue-100 text-blue-700' : ''}`}>
                                {link.text}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
