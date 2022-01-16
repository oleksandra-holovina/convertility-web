import Link from 'next/link'
import Image from 'next/image';
import {LINKED_IN_REDIRECT} from '../api/auth';

const links = [
    {id: 1, name: 'Home', url: '/'},
    {id: 2, name: 'Find Project', url: '/find-project'},
    {id: 3, name: 'Create Project', url: '/create-project'},
    {id: 4, name: 'About', url: '/about'},
]

const ProfileImage = ({profileUrl}) => (
    <div
        className="rounded-full w-10 h-10 border border-gray-500 relative">
        <Image src={profileUrl} alt="Profile picture"
               className="rounded-full w-10 h-10"
               layout="fill" />
    </div>
)

const SignIn = () => (
    <div
        className="px-5 py-1 rounded-sm text-center cursor-pointer bg-gradient-to-br from-blue-400 to-blue-500">
        <a href={LINKED_IN_REDIRECT}
           className="text-lg text-white">Sign up / Log
            in</a>
    </div>
)

const Header = ({activeId, profileUrl}) => {
    return (
        <header className="flex justify-between items-center">
            <span className="font-bold">convertility</span>
            <div className="space-x-10 flex items-center">
                {links.map(link => <Link href={link.url} key={link.id}>
                    <a className={`hover:underline uppercase text-sm ${activeId === link.id ? 'font-bold' : ''}`}>{link.name}</a>
                </Link>)}
                {profileUrl ? <ProfileImage profileUrl={profileUrl} /> : <SignIn />}
            </div>
        </header>
    )
};

export default Header;
