import Header from '../components/Header';
import Hero from './Hero';
import About from './About';
import Footer from '../components/Footer';
import {withUser} from '../api/auth';

export const getServerSideProps = async (context) => withUser(context);

const Home = ({profileUrl}) => {
    return (
        <div>
            <div className="max-w-screen-lg m-auto">
                <Header activeId={1} profileUrl={profileUrl}/>
                <Hero />
                <About />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
