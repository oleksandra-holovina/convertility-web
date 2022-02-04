import {useEffect, useState} from 'react';
import axios from 'axios';
import {API_ROOT} from '../../constants';
import {AdjustmentsIcon} from '@heroicons/react/solid';
import MultiselectDropdown from '../../components/MultiselectDropdown';


const JobListingFilters = ({selectedIds, setSelectedIds}) => {
    const [techOptions, setTechOptions] = useState([]);


    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`${API_ROOT}/tech-stack`);
                setTechOptions(response.data);
            } catch (e) {
                //todo: log
            }
        })();
    }, []);

    return (
        <div>
            <h2 className="uppercase font-bold border-b border-gray-300 flex items-center pb-5 pt-3 space-x-2">
                <AdjustmentsIcon
                    className="h-6 w-6 text-gray-400" />
                <span className="text-sm text-gray-400">Filters</span>
            </h2>

            <div className="mt-5 space-y-3">
                <span className="text-sm uppercase font-bold text-gray-500">Tech Stack</span>
                <div className="w-full">
                    <MultiselectDropdown initialPlaceholder="Select technologies" options={techOptions.map(t => t.name)} width="w-full" multiple/>
                </div>
            </div>

            <div className="mt-5 space-y-3">
                <span className="text-sm uppercase font-bold text-gray-500">Project Pay</span>
                <div className="grid grid-cols-2 items-center space-x-2">
                    <span className="text-sm text-gray-500">Min Pay</span>
                    <input placeholder="0" className="pl-2 shadow-md rounded-sm"/>
                </div>
                <div className="grid grid-cols-2 items-center space-x-2">
                    <span className="text-sm text-gray-500">Max Decrease</span>
                    <input placeholder="0" className="pl-2 shadow-md rounded-sm"/>
                </div>
            </div>

        </div>
    )
}

export default JobListingFilters;
