import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate(); // To programmatically navigate
  const querySearch = new URLSearchParams(location.search);

  // Get the step from the URL query string and convert it to a number
  const stepFromURL = Number(querySearch.get('step')) || 0;

  const [activeStep, setActiveStep] = React.useState(stepFromURL);

  const handleNext = () => {
    const newStep = activeStep + 1;
    setActiveStep(newStep);
    navigate(`?step=${newStep}`); // Update the URL with the new step
  };

  const handleBack = () => {
    const newStep = activeStep - 1;
    setActiveStep(newStep);
    navigate(`?step=${newStep}`); // Update the URL with the new step
  };

  React.useEffect(() => {
    // Update the active step whenever the URL query changes
    setActiveStep(stepFromURL);
  }, [stepFromURL]);

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
           
            
          </Box>

          <div>
            {activeStep === 1 ? <DeliveryAddressForm /> : <OrderSummary />}
          </div>
        </React.Fragment>
      )}
    </Box>
  );
}
