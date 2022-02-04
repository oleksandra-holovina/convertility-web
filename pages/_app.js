import '../styles/global.css';
import {UserProvider} from '@auth0/nextjs-auth0';


// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp = ({Component, pageProps}) => <UserProvider><Component {...pageProps} /></UserProvider>;

export default MyApp;
