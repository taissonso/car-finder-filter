"use client";
import { useState, useEffect } from 'react';
import Car from "../Cars";
import { Car as CarType } from "../Cars/types";

interface ListCarsProps {
    filteredCars: CarType[];
}

const ListCars = ({ filteredCars }: ListCarsProps) => {
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [processedCars, setProcessedCars] = useState<CarType[]>([]);

    useEffect(() => {
        if (!isFirstLoad) {
            setProcessedCars(filteredCars || []);
            return;
        }

        const timer = setTimeout(() => {
            setProcessedCars(filteredCars || []);
            setIsFirstLoad(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [filteredCars, isFirstLoad]);

    if (isFirstLoad) {
        return (
            <section className="flex-1">
                <div className="bg-white p-6 rounded-[4px] text-center">
                    <p className="text-[#6A6977] text-[18px]/[22px]">Carregando...</p>
                </div>
            </section>
        );
    }

    if (!processedCars || processedCars.length === 0) {
        return (
            <section className="flex-1 w-full h-auto">
                <div className="bg-white w-full h-full p-6 rounded-[4px] text-center border border-[#edecf2]">
                    <p className="text-[#6A6977] text-[18px]/[22px]">
                        Nenhum carro encontrado com os filtros selecionados.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="flex-1 h-full min-h-[90vh]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 lg:px-6 gap-6">
                {processedCars.map(car => (
                    <Car key={car.id} car={car} />
                ))}
            </div>
        </section>
    );
};

export default ListCars;