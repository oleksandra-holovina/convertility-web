import Tag from '../../components/Tag';

const JobListingCard = ({listing, actions}) => {
    return (
        <div
            className="bg-white rounded-sm shadow-md flex flex-col md:flex-row md:space-x-20 px-5 py-3 justify-between">
            <div className="md:w-4/6">
                <div className="space-y-2">
                    <h3 className="text-xl font-bold truncate text-gray-500">{listing.title}</h3>
                    <p className="leading-relaxed text-gray-700 line-clamp-3">{listing.description}</p>
                </div>

                <div className="mt-5 flex">
                    <div className="border-r border-gray-300 pr-5">
                        <span
                            className="font-bold text-xl block">${listing.priceForDay}</span>
                        <span className="text-sm text-gray-500">On time delivery pay</span>
                    </div>
                    <div className="pl-5">
                        <span
                            className="font-bold text-xl block">{listing.decreasePercentage}%</span>
                        <span
                            className="text-sm text-gray-500">Decrease per day</span>
                    </div>
                </div>

                <div className="space-x-2 mt-8">
                    {listing.techStack.map(tech => <Tag key={tech.id}
                                                        name={tech.name} />)}
                </div>
            </div>
            {actions}
        </div>
    )
};

export default JobListingCard;
