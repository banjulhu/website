export default function Card({ title, icon: Icon, children, margin = true, className = "" }) {
    return (
        <div
            className={`divide-y ${margin ? "my-8" : ''} divide-gray-200 overflow-hidden rounded-lg bg-white shadow ${className}`}>
            <div className="px-4 py-5 sm:px-6 flex gap-x-4 items-start">
                {Icon && <Icon className="w-24 h-auto"/>}
                <h3 className="font-bold text-xl text-slate-900">{title}</h3>
            </div>
            <div className="px-4 py-5 sm:p-6 text-slate-700">
                {children}
            </div>
        </div>
    )
}
