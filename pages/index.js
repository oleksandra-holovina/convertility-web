import Header from '../components/Header';
import Hero from './Hero';
import About from './About';
import Footer from '../components/Footer';
import {withPageAuthRequired} from '@auth0/nextjs-auth0';

export const getServerSideProps = withPageAuthRequired();

const Home = ({user}) => {
    return (
        <div>
            <div className="max-w-screen-lg m-auto">
                <Header activeId={1} profileUrl={user.picture}/>
                <Hero />
                <About />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
