import Header from '../components/Header';
import Hero from './Hero';
import About from './About';
import Footer from '../components/Footer';
import {withPageAuthRequired} from '@auth0/nextjs-auth0';

export const getServerSideProps = withPageAuthRequired();

const Home = ({user}) => {
    return (
        <div>
            <div className="absolute bg-gray-100 w-full h-5/6 clip-path-ellipse hidden sm:block" />
            <div className="sm:bg-amber-200">
                <Header activeId={1} profileUrl={user.picture} />
                <Hero />
            </div>
            <About />
            <Footer />
        </div>
    );
};

export default Home;
