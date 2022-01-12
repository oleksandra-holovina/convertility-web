import {useEffect, useState} from 'react';
import axios from 'axios';


const Filter = ({name, options, selectedIds, setSelectedIds}) => {

    const handleCheck = (id) => {
        if (selectedIds.indexOf(id) === -1) {
            setSelectedIds([...selectedIds, id]);
        } else {
            setSelectedIds(selectedIds.filter(i => i !== id));
        }
    }

    return (
        <div>
            <h5 className="font-bold text-lg">{name}:</h5>
            <div className="space-y-2 mt-3">
                {options.map(option => (
                    <div key={option.id}>
                        <input type="checkbox"
                               onChange={() => handleCheck(option.id)} />
                        <span className="ml-2">{option.name}</span>
                    </div>))
                }
            </div>
        </div>
    )
};
const JobListingFilters = ({selectedIds, setSelectedIds}) => {
    const [techOptions, setTechOptions] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/v1/tech-stack");
                setTechOptions(response.data);
            } catch (e) {
                //todo: log
            }
        })();
    }, []);

    return (
        <div className="space-y-5">
            <Filter name="Technology" options={techOptions}
                    selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
        </div>
    )
}

export default JobListingFilters;
