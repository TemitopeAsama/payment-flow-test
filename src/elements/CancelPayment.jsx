import React from 'react';
import { CancelPaymentStyles } from '../styles/CancelPayment.styled';

const CancelPayment = ({formStep, setFormStep}) => {
  return (
		<CancelPaymentStyles
			onClick={() => {
				if (formStep > 0) {
          setFormStep(0);
					alert("PAYMENT CANCELLED");
				}
			}}
		>
			Cancel Payment
		</CancelPaymentStyles>
	);
}

export default CancelPayment