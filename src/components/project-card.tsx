import { GrLinkNext } from "react-icons/gr";

export default function ProjectCard({ title, children, href="#" }) {
    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:px-6">
                <h1 className="font-bold text-xl">{title}</h1>
            </div>
            <div className="px-4 py-5 sm:p-6">
                {children}
            </div>
            <div className="px-4 py-4 sm:px-6 flex flex-row-reverse">
                <a href={href} className="text-blue-600 flex gap-x-1 items-center">Read more <GrLinkNext className="p-0 m-0" /></a>
            </div>
        </div>
    )
}
