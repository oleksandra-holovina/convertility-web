import axios from 'axios';
import Router from 'next/router';
import {API_ROOT} from '../../constants';
import Button from '../../components/Button';
import Tag from '../../components/Tag';

const JobListing = ({listing, userId, showApplyButton = true}) => {
        const applyForJob = async () => {
            try {
                await axios.post(`${API_ROOT}/job-listings/${listing.id}`, {}, {
                    params: {
                        userId: userId
                    }
                })
                await Router.push('/') //todo: redirect to my applications
            } catch (e) {
                //todo: handle
                console.log(e);
            }
        }

        return (
            <div
                className={`rounded-sm bg-white shadow-md h-92 flex flex-col justify-between ${showApplyButton ? '' : 'w-full md:w-96'}`}>
                <div className="px-5 py-3">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold truncate">{listing.title}</h3>
                        <p className="uppercase text-xs text-gray-400">Created 2h
                            ago</p>
                        <p className="leading-relaxed text-gray-700 line-clamp-3">{listing.description}</p>
                    </div>

                    <div className="mt-5 flex space-x-7">
                        <div className="w-1/2 border-r border-gray-300">
                            <span
                                className="font-bold text-xl block">${listing.priceForDay}</span>
                            <span className="text-sm text-gray-500">On time delivery pay</span>
                        </div>
                        <div className="w-1/2">
                            <span
                                className="font-bold text-xl block">{listing.decreasePercentage}%</span>
                            <span className="text-sm text-gray-500">Decrease per day</span>
                        </div>
                    </div>

                    <div className="space-x-2 mt-8">
                        {listing.techStack.map(tech => <Tag key={tech.id} name={tech.name} />)}
                    </div>
                </div>
                {showApplyButton && (
                    <div className="flex items-center space-x-3 px-5 py-3">
                        <Button title="More details" onClick={() => {}} outline />
                        <Button title="Apply" onClick={applyForJob} />
                    </div>
                )}
            </div>
        )
    }
;

export default JobListing;
