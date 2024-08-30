export default function SidebarList({ title, items }) {
    return (
        <div>
            <h1 className="font-bold mb-4 text-lg">{title}</h1>
            <ul role="list" className="list-disc pl-5">
                {items?.map((item, index) => (
                    <li key={index} className="leading-6 mt-1 text-slate-600 dark:text-slate-300">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}
