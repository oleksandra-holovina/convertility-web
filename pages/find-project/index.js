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
            <div className="max-w-screen-lg m-auto">
                <Header activeId={2} profileUrl={user.picture} />
                <div className="flex space-x-10 mt-24">
                    <JobListingFilters selectedIds={techIds}
                                       setSelectedIds={setTechIds} />

                    <div className="w-5/6">
                        <Sort />
                        <div className="grid grid-cols-2 gap-5 mt-5">
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
