const About = () => {
    return (
        <div className="mt-48">
            <h3 className="font-bold text-center text-3xl">Who is this for?</h3>
            <div className="flex space-x-5 mt-8">
                <div className="w-1/2">
                    <h5 className="font-bold text-lg">Business owners</h5>
                    <p>Are you tired of your project being implemented for months? Post your description here & a developer will build it fast. You'll end up spending less and getting stuff done faster!</p>
                </div>
                <div  className="w-1/2" >
                    <h5 className="font-bold text-lg">IT people (developers, designers, devops etc)</h5>
                    <p>Want a project for weekend or a couple of days? Find one here and get paid more for your skills!</p>
                </div>
            </div>
        </div>
    )
};

export default About;
