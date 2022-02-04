import Header from '../../components/Header';
import WrapperLayout from '../../components/WrapperLayout';
import Footer from '../../components/Footer';
import {withPageAuthRequired} from '@auth0/nextjs-auth0';
import {ClipboardListIcon, UserIcon} from '@heroicons/react/outline';
import FormItem from '../../components/FormItem';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {API_ROOT} from '../../constants';
import JobListingCard from './JobListingCard';
import Button from '../../components/Button';

export const getServerSideProps = withPageAuthRequired();

const MyAccount = ({user}) => {
    const [applications, setApplications] = useState([]);
    const [listings, setListings] = useState([]);

    useEffect(() => {
        (async () => {
            await getMyApplications();
            await getMyListings();
        })();
    }, []);

    const getMyApplications = async () => {
        try {
            const result = await axios.get(`${API_ROOT}/job-listings`, {
                params: {
                    userId: user.sub
                }
            });
            setApplications(result.data);
        } catch (e) {
            //todo: better logging
            console.log(e);
        }
    }

    const getMyListings = async () => {
        try {
            const result = await axios.get(`${API_ROOT}/job-listings`, {
                params: {
                    createdBy: user.sub
                }
            });
            setListings(result.data);
        } catch (e) {
            //todo: better logging
            console.log(e);
        }
    }

    return (
        <div>
            <Header activeId={-1} profileUrl={user.picture} />
            <WrapperLayout className="mt-24 space-y-10">
                <div className="space-y-5">
                    <h2 className="text-2xl font-bold border-b border-gray-300 flex items-center pb-5">
                        <UserIcon
                            className="h-6 w-6 text-gray-600" />
                        <span className="ml-2">My Profile</span>
                    </h2>
                    <FormItem label="Full Name" htmlFor="fullName">
                        <input
                            className="py-1 px-3 shadow-md rounded-sm text-sm outline-1 outline-offset-2 outline-gray-400 w-1/2"
                            id="fullName" name="fullName"
                            // onChange={e => setTitle(e.target.value)}
                            value={user.name} />
                    </FormItem>
                    <FormItem label="Email" htmlFor="email">
                        <input
                            className="py-1 px-3 shadow-md rounded-sm text-sm outline-1 outline-offset-2 outline-gray-400 w-1/2"
                            id="email" name="email"
                            // onChange={e => setTitle(e.target.value)}
                            value={user.email} />
                    </FormItem>
                </div>

                <div className="space-y-5">
                    <h2 className="text-2xl font-bold border-b border-gray-300 flex items-center pb-5">
                        <ClipboardListIcon
                            className="h-6 w-6 text-gray-600" />
                        <span className="ml-2">My Applications</span>
                    </h2>
                    {applications.map(application => <JobListingCard
                        listing={application} actions={
                        <div
                            className="flex flex-col mt-10 justify-evenly">
                            <div className="space-y-3">
                                <div
                                    className="grid grid-cols-3 gap-x-12 items-center">
                                    <span
                                        className="uppercase text-gray-500 text-sm ">Status:</span>
                                    <span
                                        className="uppercase font-bold text-sm col-span-2">Confirmed</span>
                                </div>
                                <div
                                    className="grid grid-cols-3 gap-12 items-center">
                                    <span
                                        className="uppercase text-gray-500 text-sm col-span-1 whitespace-nowrap">Confirmed At:</span>
                                    <span
                                        className="uppercase font-bold text-sm col-span-2">12 Feb 2021, 10:00 AM</span>
                                </div>
                            </div>
                            <div className="md:w-5/6 mt-5 md:mt-0">
                                <Button title="Complete" onClick={() => {
                                }} />
                            </div>
                        </div>
                    } />)}
                </div>

                <div className="space-y-5">
                    <h2 className="text-2xl font-bold border-b border-gray-300 flex items-center pb-5">
                        <ClipboardListIcon
                            className="h-6 w-6 text-gray-600" />
                        <span className="ml-2">My Listings</span>
                    </h2>
                    {listings.map(listing => <JobListingCard
                        listing={listing} actions={
                        <div
                            className="flex flex-col md:justify-evenly space-y-5">
                            <div className="space-y-3">
                                <div
                                    className="grid grid-cols-3 gap-x-12 items-center">
                                    <span
                                        className="uppercase text-gray-500 text-sm ">Status:</span>
                                    <span
                                        className="uppercase font-bold text-sm col-span-2">Pending Selection</span>
                                </div>
                                <div
                                    className="grid grid-cols-3 gap-12 items-center">
                                    <span
                                        className="uppercase text-gray-500 text-sm col-span-1 whitespace-nowrap">Created At:</span>
                                    <span
                                        className="uppercase font-bold text-sm col-span-2">12 Feb 2021, 10:00 AM</span>
                                </div>
                            </div>
                            <div className="w-5/6 flex items-center">
                                <div
                                    className="mt-3 flex -space-x-2 overflow-hidden">
                                    <img
                                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                        alt="" />
                                    <img
                                        className="inline-block h-10 w-10  rounded-full ring-2 ring-white"
                                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                        alt="" />
                                    <img
                                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80"
                                        alt="" />
                                    <img
                                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                        alt="" />
                                    <img
                                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                        alt="" />
                                </div>
                                <span className="mt-3 ml-2 font-bold text-gray-400">+3</span>
                            </div>
                            <div className="w-5/6 ml-2">
                                <Button title="Select developer" onClick={() => {
                                }} />
                            </div>
                        </div>
                    } />)}
                </div>
            </WrapperLayout>
            <Footer />
        </div>
    )
};

export default MyAccount;
