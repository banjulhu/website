import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Dialog,
    DialogBackdrop,
    DialogPanel,
} from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { ExclamationCircleIcon, PencilSquareIcon, } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

const items = [
    {
        id: 1,
        name: 'Text',
        description: 'Add freeform text with basic formatting options.',
        url: '#',
        color: 'bg-indigo-500',
        icon: PencilSquareIcon,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CommandPalette({ open, setOpen }) {

    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [pagefind, setPagefind] = useState(null);

    useEffect(() => {
        // Load the Pagefind script
        const loadPagefind = async () => {
            const module = await import('../pages/pagefind/pagefind.js');
            setPagefind(module);
        };
        loadPagefind();
    }, []);

    const handleSearch = async (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (pagefind && term) {
            const search = await pagefind.search(term);
            const searchResults = await Promise.all(
                search.results.map(async (result) => {
                    return await result.data();
                })
            );
            setResults(searchResults);
        } else {
            setResults([]);
        }
    };


    const filteredItems =
        searchTerm === ''
            ? []
            : items.filter((item) => {
                return item.name.toLowerCase().includes(searchTerm.toLowerCase())
            })

    return (
        <Dialog
            className="isolate relative z-[999]"
            open={open}
            onClose={() => {
                setOpen(false)
                setSearchTerm('')
            }}
        >
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
                <DialogPanel
                    transition
                    className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    <Combobox
                        onChange={(item: any) => {
                            if (item) {
                                window.location = item.url
                            }
                        }}
                    >
                        <div className="relative">
                            <MagnifyingGlassIcon
                                className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                            <ComboboxInput
                                autoFocus
                                className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                                placeholder="Search..."
                                onChange={handleSearch}
                                onBlur={() => setSearchTerm('')}
                            />
                        </div>
                        {filteredItems.length > 0 && (
                            <ComboboxOptions static className="max-h-96 transform-gpu scroll-py-3 overflow-y-auto p-3">
                                {filteredItems.map((item) => (
                                    <ComboboxOption
                                        key={item.id}
                                        value={item}
                                        className="group flex cursor-default select-none rounded-xl p-3 data-[focus]:bg-gray-100"
                                    >
                                        <div
                                            className={classNames(
                                                'flex h-10 w-10 flex-none items-center justify-center rounded-lg',
                                                item.color,
                                            )}
                                        >
                                            <item.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                                        </div>
                                        <div className="ml-4 flex-auto">
                                            <p className="text-sm font-medium text-gray-700 group-data-[focus]:text-gray-900">{item.name}</p>
                                            <p className="text-sm text-gray-500 group-data-[focus]:text-gray-700">{item.description}</p>
                                        </div>
                                    </ComboboxOption>
                                ))}
                            </ComboboxOptions>
                        )}
                        {searchTerm !== '' && filteredItems.length === 0 && (
                            <div className="px-6 py-14 text-center text-sm sm:px-14">
                                <ExclamationCircleIcon
                                    type="outline"
                                    name="exclamation-circle"
                                    className="mx-auto h-6 w-6 text-gray-400"
                                />
                                {results}
                                <p className="mt-4 font-semibold text-gray-900">No results found</p>
                                <p className="mt-2 text-gray-500">No components found for this search term. Please try
                                    again.</p>
                            </div>
                        )}
                    </Combobox>
                </DialogPanel>
            </div>
        </Dialog>
    )
}
