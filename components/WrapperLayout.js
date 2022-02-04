import Header from './Header';

const WrapperLayout = ({children, className}) => (
    <div className={`max-w-screen-lg m-auto px-5 lg:px-0 ${className}`}>
        {/*<Header */}
        {children}
    </div>
);

export default WrapperLayout;
