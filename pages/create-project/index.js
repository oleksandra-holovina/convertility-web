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
import Button from '../../components/Button';
import WrapperLayout from '../../components/WrapperLayout';


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
                techStack: [],//tech.value.split('\n').map((v) => ({["name"]: v})), //todo: change
                acceptanceCriteria: [],//"acceptanceCriteria".split('\n'), //todo: change
                priceForDay: price,
                decreasePercentage: decreasePercentage,
                createdBy: user.sub,
                // isDraft: isDraft //todo: add to api
            });
            await Router.push('/') //todo: redirect to my listings
        } catch (e) {
            console.log(e)
            //todo: handle
        }
    }

    return (
        <div>
            <Header activeId={3} profileUrl={user.picture} />
            <WrapperLayout>
                <div className="mt-24 flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
                    <CreateProjectForm user={user} setTitle={setTitle} setDescription={setDescription} setTech={setTech} setPrice={setPrice} setDecreasePercentage={setDecreasePercentage}/>

                    <div className="w-full lg:w-96 h-full">
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
                            <Button title="Save Draft" onClick={() => handleCreate(true)} outline/>
                            <Button title="Post Listing" onClick={() => handleCreate(false)} />
                        </div>
                    </div>
                </div>
            </WrapperLayout>
            <Footer />
        </div>
    )
};

export default NewListing;
