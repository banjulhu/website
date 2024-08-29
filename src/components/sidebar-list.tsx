export default function SidebarList({ items }) {
    return (
        <ul role="list" className="list-disc pl-5">
            {items?.map((item, index) => (
                <li key={index} className="leading-6 mt-1 text-lg">
                    {item}
                </li>
            ))}
        </ul>
    )
}
