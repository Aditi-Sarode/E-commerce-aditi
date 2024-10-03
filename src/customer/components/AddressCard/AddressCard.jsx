import React from 'react'

const AddressCard = () => {
    return (
        <div className='text-left'> {/* Apply text-left to align everything to the left */}
            <div className='space-y-3'>
                <p className='font-semibold'>Aditi Sarode</p>
                <p>Plot no 300, gokuldham society, 440089</p>
                <div className='space-y-1'>
                    <p>Phone Number</p>
                    <p className='font-semibold'>9876543219</p>
                </div>
            </div>
        </div>
    )
}

export default AddressCard
