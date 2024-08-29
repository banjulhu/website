import React from 'react';
import { FaExclamationCircle } from "react-icons/fa";
import { MdCancel, MdCheck, MdInfo } from "react-icons/md";

const Callout = ({ variant = 'info', title, children }) => {

    const variants = {
        info: {
            bgColor: 'bg-blue-50',
            textColor: 'text-blue-800',
            icon: MdInfo,
            iconColor: 'text-blue-400',
        },
        success: {
            bgColor: 'bg-green-50',
            textColor: 'text-green-800',
            icon: MdCheck,
            iconColor: 'text-green-400',
        },
        warn: {
            bgColor: 'bg-yellow-50',
            textColor: 'text-yellow-800',
            icon: FaExclamationCircle,
            iconColor: 'text-yellow-400',
        },
        danger: {
            bgColor: 'bg-red-50',
            textColor: 'text-red-800',
            icon: MdCancel,
            iconColor: 'text-red-400',
        },
    };

    const { bgColor, textColor, icon: Icon, iconColor } = variants[variant] || variants.info;

    return (
        <div className={`rounded-md ${bgColor} p-4`}>
            <div className="flex">
                <div className="flex-shrink-0">
                    <Icon aria-hidden="true" className={`h-auto w-6 ${iconColor}`}/>
                </div>
                <div className="ml-3">
                    {title && <h3 className={`text-lg font-medium ${textColor}`}>{title}</h3>}
                    <div className={`mt-2 ${textColor} [&:first-child]:mt-0 [&_a]:font-bold [&_p]:text-base [&_p:first-child]:mt-0`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Callout;
