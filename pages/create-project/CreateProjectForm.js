import {ViewGridAddIcon} from '@heroicons/react/solid';
import {useState} from 'react';
import {CurrencyDollarIcon} from '@heroicons/react/outline';

const FormItem = ({label, htmlFor, children}) => (
    <div className="flex flex-col space-y-2 w-full">
        <label htmlFor={htmlFor}
               className="uppercase text-sm text-gray-500 font-bold">{label}</label>
        {children}
    </div>
);


const CreateProjectForm = ({
                               setTitle,
                               setDescription,
                               setTech,
                               setPrice,
                               setDecreasePercentage
                           }) => {
    const [selectedTech, setSelectedTech] = useState([]);

    const toggle = (tech) => {
        if (selectedTech.find(t => t.id === tech.id)) {
            const filter = selectedTech.filter(i => i.id !== tech.id);
            setTech(filter)
            setSelectedTech(filter)
        } else {
            const newVar = [...selectedTech, tech];
            setTech(newVar)
            setSelectedTech(newVar)
        }
    }

    return (
        <div>
            <h2 className="text-2xl font-bold border-b border-gray-300 flex items-center pb-5">
                <ViewGridAddIcon
                    className="h-6 w-6 text-gray-600" />
                <span className="ml-2">General Information</span>
            </h2>

            <div className="space-y-5 mt-5">
                <FormItem label="Title" htmlFor="title">
                    <input
                        className="py-1 px-3 shadow-md rounded-sm text-sm outline-1 outline-offset-2 outline-gray-400"
                        id="title" name="title"
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Need a website developer for my cat website" />
                </FormItem>
                <FormItem label="Description" htmlFor="description">
                    <textarea
                        className="py-1 px-3 shadow-md rounded-sm resize-none h-32 text-sm outline-1 outline-offset-2 outline-gray-400"
                        id="description" name="description"
                        onChange={e => setDescription(e.target.value)}
                        placeholder="A website for displaying cat pictures..." />
                </FormItem>
                <FormItem label="Tech stack" htmlFor="title">
                    <div className="flex flex-wrap">
                        {[{id: 1, name: 'Java'}, {
                            id: 2,
                            name: 'JavaScript'
                        }, {id: 3, name: 'React'}, {
                            id: 4,
                            name: 'Python'
                        }, {id: 5, name: 'AWS'}, {
                            id: 6,
                            name: 'Terraform'
                        }, {id: 7, name: 'HTML'}, {
                            id: 8,
                            name: 'Angular'
                        }, {id: 9, name: 'CSS'}, {
                            id: 10,
                            name: 'C++'
                        }, {id: 11, name: 'C#'}].map(tech =>
                            <span onClick={() => toggle({
                                id: tech.id,
                                name: tech.name
                            })}
                                  className={`bg-gray-300 px-3 py-1 rounded-sm text-sm m-1 cursor-pointer ${selectedTech.find(t => t.id === tech.id) ? 'bg-gray-700 text-white' : ''}`}>{tech.name}</span>)
                        }
                    </div>
                </FormItem>
            </div>

            <h2 className="text-2xl font-bold border-b border-gray-300 flex items-center pb-5 mt-10">
                <CurrencyDollarIcon
                    className="h-6 w-6 text-gray-600" />
                <span className="ml-2">Delivery and Pricing</span>
            </h2>

            <div className="space-y-5 mt-5">
                <FormItem label="Acceptance criteria"
                          htmlFor="acceptanceCriteria">
                            <textarea
                                className="py-1 px-3 shadow-md rounded-sm resize-none h-32 text-sm outline-1 outline-offset-2 outline-gray-400"
                                id="acceptanceCriteria"
                                name="acceptanceCriteria"
                                placeholder="- I can see a list of cat pictures and info about cats
- I am able to upload a new picture
- I can modify cat information" />
                </FormItem>
                <div className="flex space-x-5">
                    <FormItem label="On time delivery price"
                              htmlFor="priceForDay">
                        <input
                            className="py-1 px-3 shadow-md rounded-sm outline-1 outline-offset-2 outline-gray-400"
                            id="priceForDay" name="priceForDay"
                            onChange={e => setPrice(e.target.value)}
                            placeholder="$5,000" />
                    </FormItem>
                    <FormItem label="Decrease Per Day">
                        <input
                            className="py-1 px-3 shadow-md rounded-sm outline-1 outline-offset-2 outline-gray-400"
                            id="decreasePercentage"
                            onChange={e => setDecreasePercentage(e.target.value)}
                            name="decreasePercentage"
                            placeholder="5%" />
                    </FormItem>
                </div>
            </div>
        </div>

    )
};

export default CreateProjectForm;
