import React from 'react';
import Grid from '@mui/material/Grid'; // Correct import for Material-UI Grid
import AddressCard from '../AddressCard/AddressCard';
import Button from '@mui/material/Button'; // Correct import for Material-UI Button
import { TextField, Box } from '@mui/material'; // Import Box from Material-UI

const DeliveryAddressForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const address = {
            firstname: data.get("firstname"),
            lastname: data.get("lastname"),
            address: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zip: data.get("zip"),
            mobile: data.get("phonenumber")
        }

        console.log("Address Data:", address);
    }

    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={10} lg={6} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AddressCard />
                        <div className="text-left">
    <Button
        sx={{ mt: 2, bgcolor: 'RGB(145 85 253)' }}
        size="large"
        variant="contained"
    >
        Deliver Here
    </Button>
</div>

                    </div>
                </Grid>

                <Grid item xs={12} lg={5}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='firstname'
                                        name='firstname'
                                        label='First Name'
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='lastname'
                                        name='lastname'
                                        label='Last Name'
                                        fullWidth
                                        autoComplete='family-name'
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id='address'
                                        name='address'
                                        label='Address'
                                        fullWidth
                                        autoComplete='street-address'
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='city'
                                        name='city'
                                        label='City'
                                        fullWidth
                                        autoComplete='address-level2'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='state'
                                        name='state'
                                        label='State'
                                        fullWidth
                                        autoComplete='address-level1'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='zip'
                                        name='zip'
                                        label='Zip/Postal Code'
                                        fullWidth
                                        autoComplete='postal-code'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='phonenumber'
                                        name='phonenumber'
                                        label='Phone Number'
                                        fullWidth
                                        autoComplete='tel'
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        sx={{ mt: 2, bgcolor: 'RGB(145 85 253)' }}
                                        size="large"
                                        variant="contained"
                                        type='submit'
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default DeliveryAddressForm;
