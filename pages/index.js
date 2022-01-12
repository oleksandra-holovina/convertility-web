import Header from '../components/Header';
import Hero from './Hero';
import About from './About';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <div className="max-w-screen-lg m-auto">
                <Header activeId={1}/>
                <Hero />
                <About />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
