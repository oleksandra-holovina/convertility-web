import Link from 'next/link';

const Button = ({title, onClick, outline = false, isLink = false}) => {
    return (
        <div
            className={`rounded-sm text-center cursor-pointer w-full ${outline ? 'border border-gray-700': 'bg-gradient-to-br from-yellow-400 to-orange-300'} py-3 flex justify-center items-center`}>
            {isLink ? (
                    <Link href={onClick}>
                        <a className="uppercase text-sm font-bold">{title}</a>
                    </Link>
                )
                : <span className="uppercase text-sm font-bold" onClick={onClick}>{title}</span>
            }
        </div>
    );
}

export default Button;
