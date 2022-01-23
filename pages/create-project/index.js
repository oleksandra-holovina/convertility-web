import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {withPageAuthRequired} from '@auth0/nextjs-auth0';
import CreateProjectForm from './CreateProjectForm';
import JobListing from '../find-project/JobListing';
import {PresentationChartBarIcon} from '@heroicons/react/outline';
import {useState} from 'react';
import axios from 'axios';
import {API_ROOT} from '../../constants';
import Router from 'next/router';


export const getServerSideProps = withPageAuthRequired();

const NewListing = ({user}) => {
    const [title, setTitle] = useState('Name goes here');
    const [description, setDescription] = useState('Description goes here');
    const [tech, setTech] = useState([{id: 1, name: 'Tech 1'}, {id: 2, name: 'Tech 2'}]);
    const [price, setPrice] = useState(0);
    const [decreasePercentage, setDecreasePercentage] = useState(0);

    const handleCreate = async (isDraft) => {
        try {
            await axios.post(`${API_ROOT}/job-listings`, {
                title: title,
                description: description,
                techStack: tech.value.split('\n').map((v) => ({["name"]: v})), //todo: change
                acceptanceCriteria: "acceptanceCriteria".split('\n'), //todo: change
                priceForDay: price,
                decreasePercentage: decreasePercentage,
                createdBy: user.sub,
                isDraft: isDraft //todo: add to api
            });
            await Router.push('/') //todo: redirect to my listings
        } catch (e) {
            //todo: handle
        }
    }

    return (
        <div>
            <div className="max-w-screen-lg m-auto">
                <Header activeId={3} profileUrl={user.picture} />
                <div className="mt-24 flex space-x-10">
                    <CreateProjectForm user={user} setTitle={setTitle} setDescription={setDescription} setTech={setTech} setPrice={setPrice} setDecreasePercentage={setDecreasePercentage}/>

                    <div className="w-96 h-full">
                        <h2 className="text-2xl font-bold border-b border-gray-300 flex items-center pb-5 mb-5">
                            <PresentationChartBarIcon
                                className="h-6 w-6 text-gray-600" />
                            <span className="ml-2">Listing Preview</span>
                        </h2>
                        <JobListing listing={{
                            title: title,
                            description: description,
                            techStack: tech,
                            priceForDay: price,
                            decreasePercentage: decreasePercentage
                        }} showApplyButton={false} />

                        <div className="mt-8 flex space-x-3">
                            <div className="w-full px-9 py-2 rounded-sm text-center cursor-pointer border border-gray-800">
                                <button onClick={() => handleCreate(true)} className="font-bold text-lg">Save Draft</button>
                            </div>
                            <div className="w-full px-9 py-2 rounded-sm text-center cursor-pointer bg-gradient-to-br from-gray-600 to-gray-800">
                                <button onClick={() => handleCreate(false)} className="font-bold text-lg text-white">Post Listing</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default NewListing;
