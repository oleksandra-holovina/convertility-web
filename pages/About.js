import {GlobeIcon} from '@heroicons/react/outline';
import WrapperLayout from '../components/WrapperLayout';

const About = () => {
    return (
        <WrapperLayout className="mt-32">
            <h2 className="text-3xl font-bold border-b border-gray-300 flex items-center pb-5 mt-10">
                <GlobeIcon
                    className="h-6 w-6 text-gray-600" />
                <span className="ml-2">Who is this for?</span>
            </h2>
            <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-5 mt-8">
                <div className="sm:w-1/2 space-y-2">
                    <h5 className="font-bold uppercase text-xl">Business owners</h5>
                    <p className="text-lg">Are you tired of your project being implemented for months? Post your description here & a developer will build it fast. You'll end up spending less and getting stuff done faster!</p>
                </div>
                <div  className="sm:w-1/2 space-y-2">
                    <h5 className="font-bold uppercase text-xl">IT people (developers, designers, devops etc)</h5>
                    <p className="text-lg">Want a project for weekend or a couple of days? Find one here and get paid more for your skills!</p>
                </div>
            </div>
        </WrapperLayout>
    )
};

export default About;
