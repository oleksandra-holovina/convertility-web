import JobListing from './JobListing';
import SearchBar from '../../components/SearchBar';
import Sort from '../../components/Sort';
import JobListingFilters from './JobListingFilters';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {withUser} from '../../api/auth';

export const getServerSideProps = async (context) => withUser(context);

const JobList = ({profileUrl}) => {
    const [listings, setListings] = useState([]);
    const [techIds, setTechIds] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/v1/job-listings", {
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
        <div className="m-auto">
            <div className="px-20">
                <Header activeId={2} profileUrl={profileUrl}/>
                <div className="flex space-x-10 mt-32">
                    <div className="mt-12 w-1/6">
                        <JobListingFilters selectedIds={techIds} setSelectedIds={setTechIds}/>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between align-center">
                            <SearchBar
                                placeholder="Search for keywords, e.g. design" />
                            <Sort />
                        </div>
                        <div className="mt-5 grid grid-cols-3 gap-5">
                            {listings.map(listing => <JobListing key={listing.id} listing={listing} />)}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default JobList;
