import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex'>
                {/* Image Section */}
                <div className='w-[5rem] h-full lg:w-[9rem] lg:h-[9rem]'>
                    <img
                        className='w-full h-full object-cover object-top'
                        src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/u/v/m/l-grey-106-yellow-freluro-original-imagc26vdpwxgztu-bb.jpeg?q=70"
                        alt=''
                    />
                </div>

                {/* Text and Price Section */}
                <div className='ml-5 flex flex-col justify-between'>
                    {/* Product Information */}
                    <div className='space-y-1'>
                        <p className='font-semibold'>Men jkjfjk jdkjdk</p>
                        <p className='opacity-70'>Size: L, White</p>
                        <p className='opacity-70 mt-2'>Seller: Crishtaliyo 2Fashion</p>
                    </div>

                    {/* Price Information */}
                    <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-2'>
                        <p className='font-semibold'>₹199</p>
                        <p className='opacity-50 line-through'>₹211</p>
                        <p className='text-green-600 font-semibold'>5% Off</p>
                    </div>


                    <div className='ld:flex item-center lg:space-x-10 pt-4'>
                        <div className='flex item-center space-x-2'>
                            <IconButton>
                                <RemoveCircleOutlineIcon/>
                            </IconButton>
                            <span className='py-1 px-7 border rounded-sm'>3</span>

                            <IconButton sx={{color:"RGB(145 85 253"}}>
                                <AddCircleOutlineIcon/>
                            </IconButton>

                        </div>
                        <div>
                            <Button sx={{color:"RGB(145 85 253"}}>remove</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
