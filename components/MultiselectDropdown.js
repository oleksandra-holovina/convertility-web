import {ChevronDownIcon} from '@heroicons/react/solid';
import {useState} from 'react';
import {selectMultiple} from '../utils/utils';

const MultiselectDropdown = ({options, initialPlaceholder, width}) => {
    const [open, setOpen] = useState(false);
    const [placeholder, setPlaceholder] = useState(initialPlaceholder)
    const [selectedTechOptions, setSelectedTechOptions] = useState([])

    const handleSelect = (option) => {
        selectMultiple(option, selectedTechOptions, (result) => {
            setSelectedTechOptions(result);
            if (result?.length > 0) {
                setPlaceholder(result.join(", "));
            } else {
                setPlaceholder(initialPlaceholder)
            }
        })
    }

    return (
        <div className="relative cursor-pointer">
            <div onClick={() => setOpen(!open)}
                 className="flex justify-between items-center bg-white border border-gray-200 pl-2 py-1 shadow-sm">
                <span
                    className="text-sm text-gray-500 truncate">{placeholder}</span>
                <ChevronDownIcon className="h-6 w-6 text-gray-400" />
            </div>

            {open && (
                <div
                    className={`bg-white absolute top-8 left-0 border border-gray-200 drop-shadow-2xl ${width}`}>
                    {options.map(option => (
                        <div onClick={() => handleSelect(option)}
                             className="flex items-center w-full border-t border-gray-200 hover:bg-gray-300">
                            <input type="checkbox" className="ml-2" checked={selectedTechOptions.find(o => o === option)}/>
                            <p className="py-2 px-2 text-sm font-bold">{option}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MultiselectDropdown;
