import {ChevronDownIcon} from '@heroicons/react/solid';
import {useState} from 'react';

const Dropdown = ({options, onSelect, placeholder, width}) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(placeholder)

    const handleSelect = (option) => {
        onSelect(option);
        setSelected(option);
        setOpen(false);
    }

    return (
        <div className="relative cursor-pointer">
            <div onClick={() => setOpen(!open)} className="flex justify-between items-center bg-white border border-gray-200 pl-2 py-1 shadow-sm">
                <span className="text-sm text-gray-500 truncate">{selected}</span>
                <ChevronDownIcon className="h-6 w-6 text-gray-400" />
            </div>

            {open && (
                <div
                    className={`bg-white absolute top-8 left-0 border border-gray-200 drop-shadow-2xl ${width}`}>
                    {options.map(option => (
                        <div
                            className="flex items-center w-full border-t border-gray-200 hover:bg-gray-300">
                            <p className="py-2 px-2 text-sm font-bold" onClick={() => handleSelect(option)}>{option}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown;
