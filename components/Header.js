import Link from 'next/link'

const links = [
    {id: 1, name: 'Home', url: '/'},
    {id: 2, name: 'Find Project', url: '/find-project'},
    {id: 3, name: 'Create Project', url: '/create-project'},
    {id: 4, name: 'About', url: '/about'},
]

const Header = ({activeId}) => {
    return ( //todo: avatar
        <header className="flex justify-between items-center">
            <span className="font-bold">convertility</span>
            <div className="space-x-10 flex items-center">
                {links.map(link => <Link href={link.url} key={link.id}>
                    <a className={`hover:underline uppercase text-sm ${activeId === link.id ? 'font-bold': ''}`}>{link.name}</a>
                </Link>)}
                <div className="px-5 py-1 rounded-sm text-center cursor-pointer bg-gradient-to-br from-blue-400 to-blue-500">
                    <a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86tvsizmt73xzn&redirect_uri=http://localhost:8080/api/v1/auth2&scope=r_liteprofile r_emailaddress"
                       className="text-lg text-white">Sign up / Log in</a>
                </div>
            </div>
        </header>
    )
};

export default Header;
