import Link from 'next/link'

const Technology = ({name}) => (
    <span className="rounded-full bg-gray-300 px-3 py-1">{name}</span>
)

const JobListing = ({listing}) => {
    return (
        <div className="rounded-sm p-5 bg-white shadow-md h-92">
            <div className="space-y-5">
                <h3 className="text-2xl font-bold text-gray-800">{listing.title}</h3>
                <div className="space-x-2">
                    {listing.techStack.map(tech => <Technology key={tech.id}
                                                               name={tech.name} />)}
                </div>
                <p className="text-sm text-gray-700">{listing.description}</p>
            </div>

            <div className="mt-5 space-y-2">
                <span className="font-bold text-sm">Can you get it done in 1 day?</span>
                <span
                    className="font-bold text-3xl text-blue-500 block">${listing.priceForDay}*</span>
                <span
                    className="block font-bold text-sm mt-1">every extra day -{listing.decreasePercentage}%</span>
                <span className="text-xs text-gray-500 block mt-2">*has to pass acceptance criteria</span>
            </div>

            <div
                className="mt-5 pt-5 flex justify-around items-center border-t border-gray-200">
                <span onClick={() => {
                }} className="underline block">More details</span>
                <div className="w-1/2 py-1 rounded-sm text-center cursor-pointer bg-gradient-to-br from-orange-400 to-orange-500">
                    <Link href="/apply"><a className="font-bold text-lg text-white">Apply</a></Link>
                </div>
            </div>
        </div>
    )
};

export default JobListing;
