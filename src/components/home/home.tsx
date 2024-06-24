import { useState, ChangeEvent, useContext } from 'react';
import { IoIosSearch } from "react-icons/io";
import { data } from "../../constants";
import { Card } from "./card";
import { DarkModeContext, DarkModeContextType } from "../../context/dark-mode-context"; // Importe o contexto e o tipo DarkModeContextType

export function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    const context = useContext<DarkModeContextType | undefined>(DarkModeContext);

    if (!context) {
        throw new Error("DarkModeContext must be used within a DarkModeProvider");
    }
    const { darkMode } = context

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleRegionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedRegion(event.target.value);
    };

    const filteredData = data.filter((country) => {
        return (
            country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedRegion === '' || country.region === selectedRegion)
        );
    });

    return (
        <section className={`flex flex-col justify-between px-4 lg:px-14 pt-8 ${darkMode ? 'bg-very-dark-background' : 'bg-very-dark-light'}`}>
            <div className="flex flex-wrap lg:flex-row justify-between items-center mb-8">
                <div className="relative group">
                    <input
                        type="text"
                        placeholder="Search for a country..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className={`w-80 h-12 text-very-dark-blue dark:text-white pl-14 shadow-md lg:w-96 rounded-lg ${darkMode ? 'bg-dark-blue text-white' : 'bg-white text-very-dark-blue'}`}
                    />
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <IoIosSearch className={`dark:text-very-dark-light text-dark-gray-input size-6 ${darkMode ? 'text-white' : 'text-dark-gray-input'}`} />
                    </div>
                </div>
                <select
                    className={`cursor-pointer w-44 h-12 flex justify-between px-2 mt-11 lg:mt-0 shadow-md ${darkMode ? 'bg-dark-blue text-white' : 'bg-white text-very-dark-blue'} rounded-lg`}
                    value={selectedRegion}
                    onChange={handleRegionChange}
                >
                    <option value="">Filter by region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-between items-center lg:grid lg:grid-cols-4 gap-14">
                {filteredData.map((country) => (
                    <Card
                        key={country.name}
                        name={country.name}
                        capital={country.capital || 'N/A'}
                        region={country.region}
                        population={country.population}
                        flags={country.flags}
                    />
                ))}
            </div>
        </section>
    );
}
