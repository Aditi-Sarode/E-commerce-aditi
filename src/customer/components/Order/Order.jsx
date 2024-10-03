import React from 'react';
import { Grid } from '@mui/material';
import OrderCard from './OrderCard';

const orderStatus = [
    { label: "On The Way", value: "on_the_way" },
    { label: "Delivered", value: "Delivered" },
    { label: "Cancelled", value: "Cancelled" },
    { label: "Returned", value: "Returned" },
];

const Cart = () => {
    return (
        <div>
            <Grid container sx={{ justifyContent: 'space-between' }}>
                {/* Filter Section */}
                <Grid item xs={2.5}>
                    <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                        <h1 className='font-bold text-lg'>Filter</h1>
                        <div className='space-y-14 mt-10'>
                            <h1 className='font-semibold'>ORDER STATUS</h1>

                            {orderStatus.map((option) => (
                                <div className='flex items-center' key={option.value}>
                                    <input defaultValue={option.value} type='checkbox' className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                                    <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>
                                        {option.label}
                                    </label>
                                </div>
                            ))}

                        </div>
                    </div>
                </Grid>

                {/* OrderCard Section */}
                <Grid item xs={9}>
                   <div className='space-y-5'>
                    {[1,1,1,1,1,1,1].map((item)=><OrderCard/>)}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cart;































{/*import React from 'react'
import {Grid} from '@mui/material'
import OrderCard from './OrderCard'

const orderStatus=[
    {label:"On The Way",Value:"on_the_way"},
    {label:"Delivered",Value:"Delivered"},
    {label:"Cancelled",Value:"Cancelled"},
    {label:"Returned",Value:"Returned"},
]


const Cart =()=> {
    return(
        <div>
            <Grid container sx={{justifyContent:"space-between"}}>
                <Grid item xs={2.5}>
                    <div className='h-auto shadow-lg vg-white p-5 sticky top-5'>
                        <h1 className='font-bold text-lg'>Filter</h1>
                        <div className='space-y-14 mt-10'>
                            <h1 className='font-semibold'>ORDER STATUS</h1>



                            {orderStatus.map((option)=><div className='flex item-center'>
                                <input defaultValue={option.value} type='checkbox' className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'/>
                                <lable className='ml-3 text-sm text-gray-600' htmlFor={option.value}>
                                    {option.label}
                                </lable>
                    </div>)}
                    
                            
                        </div>
                    </div>

                    <Grid item xs={9}>
                <OrderCard/>
                </Grid>
                </Grid>
            </Grid>

           
        </div>
    )
}


export default Cart*/}