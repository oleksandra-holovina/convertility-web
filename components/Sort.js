import {ChevronDownIcon, SortAscendingIcon} from '@heroicons/react/solid';

const Sort = () => {
    return (
        <div className="flex items-center justify-end space-x-2">
            <div className="flex items-center space-x-2">
                <SortAscendingIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm uppercase font-bold text-gray-400">Sort by</span>
            </div>
            <div className="flex justify-between items-center bg-white border border-gray-200 pl-2 py-1 w-36">
                <span className="text-sm text-gray-500">New to Old</span>
                <ChevronDownIcon className="h-6 w-6 text-gray-400" />
            </div>
        </div>
    )
};

export default Sort;
