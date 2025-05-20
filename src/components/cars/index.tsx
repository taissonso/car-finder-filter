import React from 'react';  
import carsData from '@/data/cars.json';
import Image from 'next/image';
import { Car } from './types';
const Cars = () => {

    const cars: Car[] = carsData;

    return (
        <div className="flex gap-4 flex-wrap w-full ">
            <div className="p-4 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {cars.map(car => (
                        <div key={car.id} className="border solid border-[#edecf2] rounded-[20px] flex flex-col gap-4 transition-shadow hover:shadow-[0px_4px_8px_0px_rgba(106,105,119,0.16)] cursor-pointer">
                            {car.imagem === "" 
                                ?   <div className='w-full h-[300px] bg-gray-200 flex items-center justify-center rounded-t-[20px]'>
                                        <p className='text-black text-[18px]/[22px] font-bold'>Imagem indisponível</p>
                                    </div>
                                : <Image src={car.imagem??""} alt={`${car.marca} ${car.modelo}`} width={200} height={150} className="w-full h-full max-h-[240px] lg:min-h-[300px] lg:max-h-[300px] rounded-t-[20px]" />
                            } 
                            <div className="p-6 flex flex-col justify-between gap-2 h-full">
                                <div className="flex flex-col gap-2">
                                    <h2 className="!text-[28px]/[32px] font-bold">{car.marca?.toUpperCase()} {car.modelo?.toUpperCase()}</h2>
                                    <p className='text-[#6A6977] text-[18px]/[22px] font-normal'>
                                        {car.motor} {car.cambio} {car.combustivel} {car.portas}p / {car.ano}
                                    </p>
                                </div>
                                <p className='text-black text-[20px]/[24px] font-bold mt-4 family-montserrat'>
                                    R$ {car.preco ? car.preco.toLocaleString('pt-BR') : '0'}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cars;