import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import { ConfirmPaymentStyles } from '../styles/ConfirmPayment.styled';

const ConfirmPayment = () => {
  return (
		<ConfirmPaymentStyles>
			<ScrollToTop />
			<div className='header'>
				<div>Item Name</div>
				<div>₦ Price</div>
			</div>
			<div className='table__body'>
				<ul className='purchase__one'>
					<li>Data science and usability</li>
					<li>50,000.00</li>
				</ul>
				<ul className='purchase__two'>
					<li>Shipping</li>
					<li>0.00</li>
				</ul>
				<ul className='total'>
					<li>Total</li>
					<li>50,000.00</li>
				</ul>
			</div>
		</ConfirmPaymentStyles>
	);
}

export default ConfirmPayment