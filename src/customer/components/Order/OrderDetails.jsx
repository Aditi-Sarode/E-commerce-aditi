import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import OrderTraker from './OrderTraker';
import { Grid, Box } from '@mui/material'; // Added Box
import StarBorderIcon from '@mui/icons-material/StarBorder'; // Imported StarBorderIcon
import { deepPurple } from '@mui/material/colors'; // Imported deepPurple for coloring the review section

const OrderDetails = () => {
    return (
        <div className='px-5 lg:px-20'> {/* Corrected typo: from 'px:5' to 'px-5' */}
            <div>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <AddressCard />
            </div>

            <div className='py-20'>
                <OrderTraker activeStep={3} />
            </div>

            {/* Product Section */}
            <Grid container spacing={4}> 
                {[1, 1, 1, 1, 1].map((item, index) => ( // Using [1,1,1,1,1] as requested
                    <Grid container key={index} className='shadow-xl rounded-md p-5 border mb-5' sx={{ alignItems: "center", justifyContent: 'space-between' }}>
                        {/* Product Image */}
                        <Grid item xs={2}>
                            <img
                                className='w-[5rem] h-[5rem] object-cover object-top'
                                src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/u/v/m/l-grey-106-yellow-freluro-original-imagc26vdpwxgztu-bb.jpeg?q=70"
                                alt='Product'
                            />
                        </Grid>

                        {/* Product Details */}
                        <Grid item xs={6}>
                            <div className='ml-5 space-y-2'>
                                <p>Product Description {index + 1}</p> {/* To differentiate each product */}
                                <p className='space-x-5'>
                                    <span>Color: Pink</span>
                                    <span>Size: M</span>
                                </p>
                                <p>Seller: Linaria</p>
                                <p className='font-bold'>₹1099</p>
                            </div>
                        </Grid>

                        {/* Rate & Review Section */}
                        <Grid item xs={4}>
                            <Box sx={{ color: deepPurple[500], display: 'flex', alignItems: 'center' }}>
                                <StarBorderIcon sx={{ fontSize: '2rem' }} className='px-2' />
                                <span>Rate & Review Product</span>
                            </Box>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default OrderDetails;
