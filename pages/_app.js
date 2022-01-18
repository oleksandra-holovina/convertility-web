import '../styles/global.css';
import {UserProvider} from '@auth0/nextjs-auth0';


// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp = ({Component, pageProps}) => <div className="bg-gray-100 pt-5">
    <UserProvider><Component {...pageProps} /></UserProvider></div>;

export default MyApp;
