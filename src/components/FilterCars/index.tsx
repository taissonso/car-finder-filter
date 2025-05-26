"use client"
import React, { useEffect, useState } from 'react';
import carsData from '@/data/cars.json';
import { Car } from '@/components/Cars/types';
import ListCars from '@/components/ListCars';
import SelectInput from '../Inputs/SelectInput';
import CheckBoxInput from '../Inputs/CheckBoxGroup/CheckBoxInput';
import CheckBoxGroup from '../Inputs/CheckBoxGroup';

const FilterCars = () => {

    const [brands, setBrands] = useState<string[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [fuel, setFuel] = useState<string[]>([]);
    const [transmission, setTransmission] = useState<string[]>([]);

    const [selectedBrand, setSelectedBrand] = useState<string>("todos");
    const [selectedCategory, setSelectedCategory] = useState<string>("todos");
    const [selectedFuel, setSelectedFuel] = useState<string[]>([]);
    const [selectedTransmission, setSelectedTransmission] = useState<string[]>([]);

    const [isActive, setIsActive] = useState(false);

    const [filteredCars, setFilteredCars] = useState<Car[]>(carsData);

    useEffect(() => {
        const uniqueBrands = Array.from(
            new Set(carsData.map(car => car.brand).filter(Boolean))
        ).sort() as string[];
        setBrands(uniqueBrands);

        const uniqueCategories = Array.from(
            new Set(carsData.map(car => car.category).filter(Boolean))
        ).sort() as string[];
        setCategories(uniqueCategories);

        const uniqueFuel = Array.from(
            new Set(carsData.map(car => car.fuel).filter(Boolean))
        ).sort() as string[];
        setFuel(uniqueFuel);

        const uniqueTransmissions = Array.from(
            new Set(carsData.map(car => car.transmission).filter(Boolean))
        ).sort() as string[];

        setTransmission(uniqueTransmissions);

    }, []);

    useEffect(() => {
        if (selectedBrand === "todos" && selectedCategory === "todos" &&
            selectedFuel.length === 0 && selectedTransmission.length === 0 && !isActive) {
            setFilteredCars(carsData);
            return;
        }

        let filtered = [...carsData];

        if (selectedBrand !== "todos") {
            filtered = filtered.filter(car =>
                car.brand?.toLowerCase() === selectedBrand.toLowerCase()
            );
        }

        if (selectedCategory !== "todos") {
            filtered = filtered.filter(car =>
                car.category?.toLowerCase() === selectedCategory.toLowerCase()
            );
        }

        if (selectedFuel.length > 0) {
            filtered = filtered.filter(car =>
                car.fuel && selectedFuel.includes(car.fuel.toLowerCase())
            );
        }

        if (selectedTransmission.length > 0) {
            filtered = filtered.filter(car =>
                car.transmission && selectedTransmission.includes(car.transmission.toLowerCase())
            );
        }

        setFilteredCars(filtered);
    }, [selectedBrand, selectedCategory, selectedFuel, selectedTransmission, isActive]);

    const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedBrand(e.target.value);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div className="flex flex-col md:flex-row gap-6 w-full">
            <aside className="flex flex-col gap-6 h-auto bg-white border border-[#edecf2] rounded-[4px] p-6 w-full md:max-w-[360px]">
                <h2 className="text-black text-[24px]/[28px] font-medium text-center">Filtros</h2>
                <SelectInput label={"Marca"} htmlFor="brand" value={selectedBrand} brands={brands} onChange={handleBrandChange} />
                <hr className="border-t border-t-[#edecf2] w-full" />
                <SelectInput label={"Categoria"} htmlFor="category" value={selectedCategory} brands={categories} onChange={handleCategoryChange} />
                <hr className="border-t border-t-[#edecf2] w-full" />
                <CheckBoxGroup
                    title="Câmbio"
                    options={transmission}
                    selectedOptions={selectedTransmission}
                    setSelectedOptions={setSelectedTransmission}
                />

                <hr className="border-t border-t-[#edecf2] w-full" />
                <CheckBoxGroup
                    title="Combustível"
                    options={fuel}
                    selectedOptions={selectedFuel}
                    setSelectedOptions={setSelectedFuel}
                />


            </aside>
            <ListCars filteredCars={filteredCars} />
        </div >
    );
};

export default FilterCars;