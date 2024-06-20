import { useState, ChangeEvent } from 'react';
import { IoIosSearch } from "react-icons/io";
import { data } from "../../constants";
import { Card } from "./card";

export function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');

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
        <section className="flex flex-col justify-between px-14 mt-[30px] bg-white dark:bg-very-dark-background">
            <div className="flex justify-between items-center">
                <div className="relative group">
                    <input
                        type="text"
                        placeholder="Search for a country..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-96 h-12 bg-white dark:bg-dark-blue  text-very-dark-light pl-14 shadow-md   rounded-lg"
                    />
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <IoIosSearch className="dark:text-dark-gray-input text-very-dark-light size-4" />
                    </div>
                </div>
                <select
                    className="cursor-pointer w-44 h-12 flex justify-between px-2 shadow-md bg-white dark:bg-dark-blue dark:text-very-dark-light  text-very-dark-background"
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
            <div className="flex flex-wrap items-baseline gap-14 justify-between ">
                {filteredData.map((country) => (
                    <Card
                        key={country.name}
                        name={country.name}
                        capital={country.capital}
                        region={country.region}
                        population={country.population}
                        flags={country.flags}
                    />
                ))}
            </div>
        </section>
    );
}
