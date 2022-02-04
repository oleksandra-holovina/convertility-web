import {SortAscendingIcon} from '@heroicons/react/solid';
import Dropdown from './Dropdown';

const Sort = () => {
    return (
        <div className="flex items-center justify-end space-x-2">
            <div className="flex items-center space-x-2">
                <SortAscendingIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm uppercase font-bold text-gray-400">Sort by</span>
            </div>
            <div className="w-36">
                <Dropdown placeholder="New to Old" onSelect={() => {}} options={['New to Old', 'Old to New', 'Price High to Low', 'Price Low to High']} width="w-36"/>
            </div>
        </div>
    )
};

export default Sort;
