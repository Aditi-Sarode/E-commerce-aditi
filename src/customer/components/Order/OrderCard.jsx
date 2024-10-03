import { Grid } from '@mui/material';
import React from 'react';
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
    return (
        <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1) hover:shadow-2xl' }}>
            <Grid container spacing={2} alignItems="center">
                {/* Image Section */}
                <Grid item xs={12} sm={2}>
                    <img
                        className='w-full h-auto'
                        style={{ maxWidth: '100px', maxHeight: '120px', objectFit: 'cover' }}
                        src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/u/v/m/l-grey-106-yellow-freluro-original-imagc26vdpwxgztu-bb.jpeg?q=70"
                        alt='Product'
                    />
                </Grid>

                {/* Product Details */}
                <Grid item xs={12} sm={6}>
                    <div className='ml-5 space-y-2'>
                        <p className='font-semibold'>Men Slim Black Jeans</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                    </div>
                </Grid>

                {/* Price Section */}
                <Grid item xs={12} sm={2}>
                    <p>₹1099</p>
                </Grid>

                {/* Delivery Status */}
                <Grid item xs={12} sm={2}>
                    <div>
                        <p>
                            <AdjustIcon sx={{ width: '15px', height: '15px' }} className='text-green-600 mr-2 text-sm' />
                            <span>Delivered on March 15</span>
                        </p>
                        <p className='text-xs'>Your item has been delivered</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default OrderCard;

































{/*import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
const OrderCard =()=> {
    return(
        <div>
            <Grid container spacing={15} sx={{justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <img className='' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/u/v/m/l-grey-106-yellow-freluro-original-imagc26vdpwxgztu-bb.jpeg?q=70" alt=''/>
                    <div className='ml-5 space-y-2'>
                        <p className=''>Men Slim Black Jeans</p>
                        <p className='opacity-50 text-xs font-semibold'>Size:M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                    </div>
                </Grid>


                <Grid item xs={2}>
                    <p>₹1099</p>
                </Grid>

                <Grid item xs={4}>
                    {true && <div>
                        <p>
                        <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                        <span>
                            Delivered on March 15
                        </span>
                    </p>
                    <p className='text-xs'>
                        your item has been delivered</p>
                        </div>}

                    {false && <p>
                        <span>
                            Expected Delivered on March 15
                        </span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}


export default OrderCard
*/}