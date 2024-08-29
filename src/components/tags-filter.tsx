import React, { useEffect, useState } from "react";

export type Tag = {
    id: string | number;
    value: string;
    label: string;
};

export default function TagsFilter({ name, tags = [] }: { name: string; tags: Tag[] }) {

    const [selectedTags, setSelectedTags] = useState<(number | string)[]>([]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const selectedFromUrl = params.getAll('tags').map(String);
        setSelectedTags(selectedFromUrl);
    }, []);

    const updateUrl = (newSelectedTags: (number | string)[]) => {
        const params = new URLSearchParams();
        newSelectedTags.forEach(tagId => params.append('tags', tagId.toString()));
        window.history.replaceState(
            null,
            '',
            `${window.location.pathname}?${params.toString()}`
        );
        // Dispatch a custom event to notify anyone about the URL change
        window.dispatchEvent(new Event('url-change'));
    };

    const toggleTag = (id: number | string) => {
        console.assert(!!id, "TagsFilter: {id} cannot be null|undefined")
        setSelectedTags((prevSelectedTags) => {
            const newSelectedTags = prevSelectedTags.includes(id)
                ? prevSelectedTags.filter((tagId) => tagId !== id)
                : [...prevSelectedTags, id];
            // Update URL with new selected tags
            updateUrl(newSelectedTags);
            return newSelectedTags;
        });
    };

    return (
        <form className="mt-6 flex flex-wrap gap-y-2 gap-x-1">
            {tags.map(({ id, label, value }) => {
                const isSelected = selectedTags.includes(id);
                return (
                    <div key={`${id}`}
                         className={`items-center rounded-full border border-gray-300 dark:border-gray-500 bg-slate-50 dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-300 ${isSelected ? "bg-indigo-100! border-indigo-300!" : ""}`}>
                        <input
                            id={`tags-filter-${id}`}
                            name={name}
                            value={value}
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleTag(id)}
                            className="hidden h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                            onClick={() => toggleTag(id)}
                            className="items-center py-1 px-3 inline-flex flex-shrink-0 rounded-full hover:bg-gray-200 hover:text-gray-500 cursor-pointer">
                            {label}
                            {isSelected && (
                                <span
                                    className="ml-2 text-gray-400 hover:text-gray-600 cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleTag(id);
                                    }}>✕
                                </span>
                            )}
                        </label>
                    </div>
                );
            })}
            {/*<pre>{JSON.stringify({ selectedTags, tags }, null, 2)}</pre>*/}
        </form>
    );
}
