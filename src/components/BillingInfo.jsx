import React from 'react';
import { BillingInfoStyles } from '../styles/BillingInfo.styled';
import { usePaymentInputs } from "react-payment-inputs";

const BillingInfo = ({ setFormData, formData }) => {

	    const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();

        const handleChangeCardNumber = (event) => setFormData({ ...formData, cardNumber: event.target.value });
        const handleChangeExpiryDate = (event) => setFormData({ ...formData, expiryDate: event.target.value });
        const handleChangeCVC = (event) => setFormData({ ...formData, cvv: event.target.value });

	return (
		<BillingInfoStyles>
			<label htmlFor='cardName'>
				Name on Card <span>*</span>
			</label>
			<input
				type='text'
				id='cardName'
				placeholder='The address of the user goes here'
				value={formData.cardName}
				required='required'
				onChange={(event) =>
					setFormData({ ...formData, cardName: event.target.value })
				}
			/>

			<label htmlFor='cardType'>
				Card Type <span className='asterisk'>*</span>
			</label>
			<select name='cardTypes' id='cardType'>
				<option value='Visa'>Visa</option>
				<option value='MasterCard'>MasterCard</option>
				<option value='American Express'>American Express</option>
			</select>

			<div className='card__details'>
				<div className='card__number'>
					<label htmlFor='cardType'>
						{" "}
						Card Details <span className='asterisk'>*</span>
					</label>
					<input
						{...getCardNumberProps({ onChange: handleChangeCardNumber })}
						value={formData.cardDetails}
					/>
				</div>

				<div className='expiry'>
					<label htmlFor='cardType'>
						Expiry Date <span className='asterisk'>*</span>
					</label>
					<input
						{...getExpiryDateProps({ onChange: handleChangeExpiryDate })}
						value={formData.expiryDate}
						required='required'
						placeholder='04  /  23'
					/>
				</div>

				<div className='cvv'>
					<label htmlFor='cardType'>
						CVV <span className='asterisk'>*</span>
					</label>
					<input
						{...getCVCProps({ onChange: handleChangeCVC })}
						value={formData.cvv}
						required='required'
						placeholder='923'
					/>
				</div>
			</div>
			{meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
		</BillingInfoStyles>
	);
};

export default BillingInfo