import React from 'react';
import Image from 'next/image';
import { Car as CarType } from './types';
import { assetsHelper } from '@/utils/assetsHelper';

interface CarProps {
    car: CarType;
}

const Car = ({ car }: CarProps) => {
    if (!car) {
        return null;
    }

    return (
        <div key={car.id} className="bg-white border solid border-[#edecf2] rounded-[20px] flex flex-col gap-4 transition-shadow hover:shadow-[0px_4px_8px_0px_rgba(106,105,119,0.16)] cursor-pointer">
            {
                car.image === "" ? (
                    <div className='w-full h-[300px] bg-gray-200 flex items-center justify-center rounded-t-[20px]'>
                        <p className='text-black text-[18px]/[22px] font-bold'>Imagem indisponível</p>
                    </div>
                ) : (
                    <Image
                        src={car.image ? assetsHelper(car.image) : ""}
                        alt={`${car.brand} ${car.model}`}
                        width={200}
                        height={150}
                        className="w-full h-full max-h-[240px] lg:min-h-[300px] lg:max-h-[300px] rounded-t-[20px]"
                    />
                )
            }
            < div className="p-6 flex flex-col justify-between gap-2 h-full" >
                <div className="flex flex-col gap-2">
                    <h2 className="!text-[28px]/[32px] font-bold">{car.brand?.toUpperCase()} {car.model?.toUpperCase()}</h2>
                    <p className='text-[#6A6977] text-[18px]/[22px] font-normal'>
                        {car.engine} {car.transmission} {car.fuel} {car.doors}p / {car.year}
                    </p>
                </div>
                <p className='text-black text-[20px]/[24px] font-bold mt-4 family-montserrat'>
                    R$ {car.price ? car.price.toLocaleString('pt-BR') : '0'}
                </p>
            </div >
        </div >
    );
};

export default Car;