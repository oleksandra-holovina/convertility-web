import Background from '../public/images/hero.png';
import Link from 'next/link'
import Image from 'next/image'
import WrapperLayout from '../components/WrapperLayout';

const Hero = () => {
    return (
        <WrapperLayout
            className="flex items-center mt-36 md:mt-20 space-x-24 relative z-50">
            <div>
                <h2 className="text-lg md:text-2xl">Do faster to get paid
                    extra</h2>

                <h1 className="text-5xl md:text-6xl mt-3 leading-tight w-full">
                    <span
                        className="z-10 relative font-bold">Proof of Concept<br /> in 72 hours</span>
                </h1>

                <div
                    className="flex items-center space-x-5 mt-10 justify-center sm:justify-left">
                    <div
                        className={`px-2 py-2.5 rounded-sm text-center cursor-pointer bg-gray-700 w-full`}>
                        <Link href="/find-project"><a
                            className="text-lg sm:text-2xl text-white">Find
                            Job</a></Link>
                    </div>
                    <div
                        className={`px-2 py-2 rounded-sm text-center cursor-pointer border border-gray-700 w-full`}>
                        <Link href="/create-project"><a
                            className="text-lg sm:text-2xl">Create
                            Job</a></Link>
                    </div>
                </div>
            </div>
            <div className="hidden sm:block w-2/6 relative">
                <Image src={Background} layout="responsive" className=""
                       alt="Coder" />
            </div>
        </WrapperLayout>
    )
};

export default Hero;
