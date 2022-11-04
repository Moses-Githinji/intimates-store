import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Layout from '../components/Layout';

function payment() {
  const [value, setValue] = useState('cash');

  const handleChange = (e) => {
    console.log(setValue(e.target.value));
  };

  return (
    <Layout title="Payment Mode">
      <div className="payment-modes-container">
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{
              color: '#05052c',
              textTransform: 'capitalze',
              fontFamily: 'Raleway',
            }}
          >
            Payment Methods
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={value}
            onChange={handleChange}
            name="radio-buttons-group"
          >
            <FormControlLabel value="cash" control={<Radio />} label="Cash" />
            <FormControlLabel
              value="paypal"
              control={<Radio />}
              label="PayPal"
            />
            <FormControlLabel
              value="mastercard"
              control={<Radio />}
              label="MasterCard"
            />
            <FormControlLabel value="visa" control={<Radio />} label="Visa" />
            <FormControlLabel
              value="M-Pesa"
              control={<Radio />}
              label="M-Pesa"
            />
          </RadioGroup>
        </FormControl>
        <div className="payment-mode-navigation-buttons">
          <button type="submit" className="return-back-btn">
            back
          </button>
          <button type="submit" className="continue-checkout-btn">
            continue
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default payment;
