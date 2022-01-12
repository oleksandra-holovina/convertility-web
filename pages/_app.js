import '../styles/global.css';

// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp = ({ Component, pageProps }) => <div className="bg-gray-100 pt-5"><Component {...pageProps} /></div>;

export default MyApp;
