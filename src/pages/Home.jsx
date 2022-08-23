import React from 'react';
import ProgressButton from "../elements/ProgressButton";
import CancelPayment from "../elements/CancelPayment";
import {
	NavStyles,
	InActiveNavLinkStyles,
	ActiveNavLinkStyles,
} from "../styles/NavStyles";



const Home = ({formStep, setFormStep, PageDisplay, setFormData}) => {
  return (
		<div className='home'>
			<header>
				<h1>Complete your Purchase</h1>
			</header>

			<NavStyles>
				<ul>
					{formStep === 0 ? (
						<ActiveNavLinkStyles>
							Personal Info
						</ActiveNavLinkStyles>
					) : (
						<InActiveNavLinkStyles>Personal Info</InActiveNavLinkStyles>
					)}
					{formStep === 1 ? (
						<ActiveNavLinkStyles>
							Billing Info
						</ActiveNavLinkStyles>
					) : (
						<InActiveNavLinkStyles>Billing Info</InActiveNavLinkStyles>
					)}
					{formStep === 2 ? (
						<ActiveNavLinkStyles>
							Confirm Payment
						</ActiveNavLinkStyles>
					) : (
						<InActiveNavLinkStyles>Confirm Payment</InActiveNavLinkStyles>
					)}
				</ul>
			</NavStyles>

			<main>{PageDisplay()}</main>

			<footer>
				<ProgressButton
					formStep={formStep}
					setFormStep={setFormStep}
					setFormData={setFormData}
				/>
				<CancelPayment formStep={formStep} setFormStep={setFormStep} />
			</footer>
		</div>
	);
}

export default Home