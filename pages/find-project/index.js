import JobListing from './JobListing';
import JobListingFilters from './JobListingFilters';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {withPageAuthRequired} from '@auth0/nextjs-auth0';
import {API_ROOT} from '../../constants';
import Sort from '../../components/Sort';

export const getServerSideProps = withPageAuthRequired();

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
        <div>
            <div className="max-w-screen-lg m-auto px-5 sm:px-20 md:px-10">
                <Header activeId={2} profileUrl={user.picture} />
                <div className="flex md:space-x-10 mt-24">
                    <div className="w-1/6 md:w-2/6 hidden md:block">
                        <JobListingFilters selectedIds={techIds}
                                           setSelectedIds={setTechIds} />
                    </div>

                    <div className="md:w-4/6 lg:w-5/6">
                        <Sort />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                            {listings.map(listing => <JobListing
                                key={listing.id} listing={listing}
                                userId={user.sub} />)}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default JobList;
