import type { ReactNode } from "react";

export type CardTypeProps = {
    title: string;
    icon?: any;
    children?: ReactNode;
    margin?: boolean;
    className?: string;
}

export default function Card({ title, icon: Icon, children, margin = true, className = "" }: CardTypeProps) {
    return (
        <div
            className={`${margin ? "my-8" : ''} overflow-hidden rounded-lg bg-white dark:bg-dark-surface shadow ${className}`}>
            <div className="px-4 py-5 sm:px-6 flex gap-x-4 items-start shadow-md">
                {Icon && <Icon className="w-24 h-auto"/>}
                <h3 className="font-bold text-xl">{title}</h3>
            </div>
            <div className="px-4 py-5 sm:p-6 [&_p]:text-base [&_p]:leading-relaxed">
                {children}
            </div>
        </div>
    )
}
