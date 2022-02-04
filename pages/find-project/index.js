import JobListing from './JobListing';
import JobListingFilters from './JobListingFilters';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {withPageAuthRequired} from '@auth0/nextjs-auth0';
import {API_ROOT} from '../../constants';
import Sort from '../../components/Sort';
import Button from '../../components/Button';
import {CloudIcon} from '@heroicons/react/solid';
import WrapperLayout from '../../components/WrapperLayout';

export const getServerSideProps = withPageAuthRequired();

const EmptyListings = () => {
    return (
        <div className="flex flex-col items-center mt-48 text-center">
            <CloudIcon className="h-32 w-32 text-gray-300" />
            <h3 className="text-3xl mt-3">No Job Listings yet</h3>
            <p className="text-gray-500 mt-1 text-xl">Be the first one to add!</p>
            <div className="w-48 mt-5">
                <Button title="Create a job" onClick="/create-project" isLink={true}/>
            </div>
        </div>
    )
};

const JobList = ({user}) => {
    const [listings, setListings] = useState([]);
    const [techIds, setTechIds] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`${API_ROOT}/job-listings`, {
                    params: {
                        technologyIds: techIds.join(",")
                    }
                });
                setListings(response.data);
            } catch (e) {
                //todo: handle
            }
        })();
    }, [techIds]);

    return (
        <div className="flex flex-col justify-between h-screen">
            <div>
                <Header activeId={2} profileUrl={user.picture} />
                <WrapperLayout>
                    {listings?.length > 0 ? (
                            <div className="flex md:space-x-10 mt-24">
                                <div className="w-1/6 md:w-2/6 hidden md:block">
                                    <JobListingFilters selectedIds={techIds}
                                                       setSelectedIds={setTechIds} />
                                </div>

                                <div className="md:w-4/6 lg:w-5/6">
                                    <Sort />
                                    <div
                                        className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                                        {listings.map(listing => <JobListing
                                            key={listing.id} listing={listing}
                                            userId={user.sub} />)
                                        }
                                    </div>
                                </div>
                            </div>
                        ) :
                        <EmptyListings />
                    }
                </WrapperLayout>
            </div>
            <Footer />
        </div>
    )
};

export default JobList;
