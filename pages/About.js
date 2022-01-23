import {GlobeIcon} from '@heroicons/react/outline';

const About = () => {
    return (
        <div className="mt-32 sm:mt-48">
            <h2 className="text-2xl font-bold border-b border-gray-300 flex items-center pb-5 mt-10">
                <GlobeIcon
                    className="h-6 w-6 text-gray-600" />
                <span className="ml-2">Who is this for?</span>
            </h2>
            <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-5 mt-8">
                <div className="sm:w-1/2 space-y-2">
                    <h5 className="font-bold uppercase">Business owners</h5>
                    <p>Are you tired of your project being implemented for months? Post your description here & a developer will build it fast. You'll end up spending less and getting stuff done faster!</p>
                </div>
                <div  className="sm:w-1/2 space-y-2">
                    <h5 className="font-bold uppercase">IT people (developers, designers, devops etc)</h5>
                    <p>Want a project for weekend or a couple of days? Find one here and get paid more for your skills!</p>
                </div>
            </div>
        </div>
    )
};

export default About;
