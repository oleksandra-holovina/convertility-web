import Link from 'next/link'
import Image from 'next/image';
import {MenuIcon} from '@heroicons/react/outline';

const links = [
    {id: 1, name: 'Home', url: '/'},
    {id: 2, name: 'Find Project', url: '/find-project'},
    {id: 3, name: 'Create Project', url: '/create-project'},
]

const ProfileImage = ({profileUrl}) => (
    <div
        className="rounded-full w-10 h-10 border border-gray-500 relative cursor-pointer">
        <Link href="/my-account">
            <Image src={profileUrl} alt="Profile picture"
                   className="rounded-full w-10 h-10"
                   layout="fill" />
        </Link>
    </div>
)

const SignIn = () => (
    <div
        className="px-5 py-1 rounded-sm text-center cursor-pointer bg-gradient-to-br from-blue-400 to-blue-500">
        <a href="/api/auth/login"
           className="text-lg text-white">Sign up / Log in</a>
    </div>
)

const Header = ({activeId, profileUrl}) => {
    return (
        <header
            className="flex justify-between items-center pt-5 relative z-50 max-w-screen-lg m-auto px-5 lg:px-0">
            <span className="font-bold text-lg">convertility</span>
            <MenuIcon className="h-6 w-6 text-gray-500 block sm:hidden" />
            <div
                className="space-x-5 md:space-x-10 items-center hidden sm:flex">
                {links.map(link => <Link href={link.url} key={link.id}>
                    <a className={`hover:underline uppercase ${activeId === link.id ? 'font-bold' : ''}`}>{link.name}</a>
                </Link>)}
                {profileUrl ? <ProfileImage
                        profileUrl={profileUrl || "/images/blankUser.png"} /> :
                    <SignIn />}
            </div>
        </header>
    )
};

export default Header;
