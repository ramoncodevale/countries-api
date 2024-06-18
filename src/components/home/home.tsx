import { IoIosSearch } from "react-icons/io";
import { data } from "../../constants";
import { Card } from "./card";



export function Home() {
    return (
        <section>
            <div className="px-14 mt-[30px] flex justify-between items-center"> 
            <div className="relative group  ">
                <input
                    type="email"
                    placeholder="Search for a country..."
                    className="w-96  h-12 bg-white pl-14  shadow-md text-dark-gray-input  rounded-lg"
                />
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <IoIosSearch  className="text-dark-gray-input size-4" />
                </div>
            </div>
                <div className="w-44 h-12 bg-white shadow-md  flex justify-around items-center">
                    <label className="px-2">Filter by region</label>
                    <select className="cursor-pointer">
                    <option>
                    </option>
                    </select>
                </div>
                </div>
                <div className="grid grid-cols-4 px-12"> 
                {data.map((country) => (
                <Card 
                name={country.name}
                capital={country.capital}
                region={country.region}
                population={country.population}
                flags={country.flags}
            />
                ))}
                </div>
        </section>
    )
}