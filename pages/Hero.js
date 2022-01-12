import Background from '../public/images/hero.svg';
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className="flex mt-48 space-x-48">
            <div className="mt-20">
                <h2 className="text-lg">Do faster to get paid extra</h2>

                <h1 className="text-5xl mt-3 leading-tight">Software Engineering by<br/> <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-orange-600">Top Talent</span>
                </h1>

                <div className="flex items-center space-x-5 mt-10">
                    <div className={`px-9 py-2.5 rounded-sm text-center cursor-pointer bg-gradient-to-br from-orange-400 to-orange-500`}>
                        <Link href="/find-project"><a className="font-bold text-lg text-white">Find Job</a></Link>
                    </div>
                    <div className={`px-7 py-2 rounded-sm text-center cursor-pointer border border-gray-500`}>
                        <Link href="/create-project"><a className="font-bold text-lg">Create Job</a></Link>
                    </div>
                </div>
            </div>
            <div className="w-4/6">
                <Image src={Background} alt="Coder"/>
            </div>
        </div>
    )
};

export default Hero;
