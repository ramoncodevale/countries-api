import { Link } from "react-router-dom";
import { DarkModeContext, DarkModeContextType } from "../../context/dark-mode-context";
import { useContext } from "react";

interface CardProps{
    name: string
    population: number
    region: string
    flags: {
        svg: string
    }
    capital: string
}


export function Card({ name, population, region, capital, flags }: CardProps) {
    const context = useContext<DarkModeContextType | undefined>(DarkModeContext);

    if (!context) {
        throw new Error("DarkModeContext must be used within a DarkModeProvider");
    }

    const { darkMode } = context;

    return (
        <Link to={`/country/${name}`}>
            <div className={`lg:flex flex-col mt-10 w-60 h-auto ${darkMode ? 'bg-dark-blue text-white' : 'text-very-dark-blue'}`}>
                <img src={flags.svg} alt={`${name} flag`} className="w-full h-32 rounded-t-md object-cover" />
                <div className="shadow-md p-4">
                    <div className="pb-6">
                        <p className="font-bold text-lg">{name}</p>
                        <div className="mt-4">
                            <p className="text-sm"><span className="font-semibold">Population:</span> {population.toLocaleString()}</p>
                            <p><span className="text-sm font-semibold">Capital:</span> {capital}</p>
                            <p><span className="text-sm font-semibold">Region:</span> {region}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
