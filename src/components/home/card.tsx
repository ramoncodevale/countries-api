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
        <div className="flex flex-col mt-10 w-60 h-auto"> 
            <img src={flags.svg} alt={`${name} flag`} className="w-full h-32  rounded-t-md object-cover"/>
        <div className=" bg-white shadow-md p-4">
            <div >
                <p className="font-bold text-lg">{name}</p>
                <p><strong>Population:</strong> {population.toLocaleString()}</p>
                <p><strong>Capital:</strong> {capital}</p>
                <p><strong>Region:</strong> {region}</p>
            </div>
        </div>
        </div>
    );
}
