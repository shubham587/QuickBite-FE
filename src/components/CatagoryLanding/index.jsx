import React from 'react'
import dosa from "../../assets/cat-images/dosa.jpg"
import chai from "../../assets/cat-images/chai.jpg"
import pizza from "../../assets/cat-images/pizza.jpg"
import biryani from "../../assets/cat-images/biryani.jpg"
import kfc from "../../assets/cat-images/kfc.jpg"
import momo from "../../assets/cat-images/momo.jpg"
import p1 from "../../assets/cat-images/pexels-miyatavictor-3682838.webp"
import { Button } from '@/components/ui/button'

const CATEGORY = [
    {
        "image": dosa,
        "name": "South Indian",
    },
    {
        "image": biryani,
        "name": "Biryani",
    },
    {
        "image": chai,
        "name": "Chai",
    },
    {
        "image": p1,
        "name": "Pizza",
    },
    {
        "image": kfc,
        "name": "KFC",
    },
    {
        "image": momo,
        "name": "Momo",
    },
]

const CategoryComp = () => {
    return (
        <div className="category-comp 2">
            <h1 className='m-5 text-5xl text-center text-black-500 text-black font-bold '>Category</h1>
            <div className="category-grid grid grid-cols-2 gap-6">
                {
                    CATEGORY.map((item, ind) => (
                        <div key={ind} className='relative w-full h-[550px]'>
                            <img src={item.image} alt={item.name} className="w-dvw h-full" />
                            <div className="absolute z-10 inset-0 bg-black opacity-60"></div>
                            <div className="absolute top-1/2 left-1/3  z-10 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold p-4">
                                <h1 className='text-5xl'>{item.name}...</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryComp