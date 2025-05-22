"use client"
import { useEffect, useState } from 'react';
import carsData from '@/data/cars.json';
import { Car } from '@/components/Cars/types';
import ListCars from '@/components/ListCars';
import SelectInput from '../Inputs/SelectInput';

const FilterCars = () => {

    const [brands, setBrands] = useState<string[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedBrand, setSelectedBrand] = useState<string>("todos");
    const [selectedCategory, setSelectedCategory] = useState<string>("todos");

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

    }, []);

    useEffect(() => {
        if (selectedBrand === "todos" && selectedCategory === "todos") {
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

        setFilteredCars(filtered);
    }, [selectedBrand, selectedCategory]);

    const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedBrand(e.target.value);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div className="flex flex-col md:flex-row gap-6">
            <aside className="h-auto bg-white border border-[#edecf2] rounded-[20px] p-6 w-full md:w-[360px]">
                <h2 className="text-black text-[24px]/[28px] font-medium mb-6">Filtros</h2>
                <SelectInput label={"Marca"} htmlFor="brand" value={selectedBrand} brands={brands} onChange={handleBrandChange} />
                <SelectInput label={"Categoria"} htmlFor="category" value={selectedCategory} brands={categories} onChange={handleCategoryChange} />
            </aside>
            <ListCars filteredCars={filteredCars} />
        </div>
    );
};

export default FilterCars;