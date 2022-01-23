import Background from '../public/images/hero.svg';
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className="flex mt-48 space-x-48">
            <div className="mt-20">
                <h2 className="text-lg">Do faster to get paid extra</h2>

                <h1 className="text-5xl mt-3 leading-tight relative">
                    <span className="z-10 relative">Proof of Concept<br/> in 72 hours</span>
                    <div className="bg-orange-300 w-40 h-5 left-14 top-24 absolute z-0"/>
                </h1>

                <div className="flex items-center space-x-5 mt-10">
                    <div className={`px-9 py-2.5 rounded-sm text-center cursor-pointer bg-gradient-to-br from-gray-600 to-gray-800`}>
                        <Link href="/find-project"><a className="font-bold text-lg text-white">Find Job</a></Link>
                    </div>
                    <div className={`px-7 py-2 rounded-sm text-center cursor-pointer border border-gray-500`}>
                        <Link href="/create-project"><a className="font-bold text-lg">Create Job</a></Link>
                    </div>
                </div>
            </div>
            <div className="w-2/6">
                <Image src={Background} alt="Coder"/>
            </div>
        </div>
    )
};

export default Hero;
