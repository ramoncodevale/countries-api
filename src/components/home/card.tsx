import { Link } from 'react-router-dom';

interface FlagsProps {
    svg: string;
}

interface CardProps {
    name: string;
    capital: string;
    region: string;
    population: number;
    flags: FlagsProps;
}

export function Card({ name, population, region, capital, flags }: CardProps) {
    return (
        <Link to={`/country/${name}`}>
            <div className="flex flex-col mt-10 w-60 h-auto">
                <img src={flags.svg} alt={`${name} flag`} className="w-full h-32 rounded-t-md object-cover" />
                <div className="bg-white shadow-md p-4">
                    <div className="pb-6">
                        <p className="font-bold text-lg">{name}</p>
                        <div className="mt-4">
                            <p className="text-sm"><span className="text-sm font-semibold">Population:</span> {population.toLocaleString()}</p>
                            <p><span className="text-sm font-semibold">Capital:</span> {capital}</p>
                            <p><span className="text-sm font-semibold">Region:</span> {region}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
