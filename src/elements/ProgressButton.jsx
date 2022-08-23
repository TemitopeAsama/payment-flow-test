import React from 'react';
import { useNavigate } from "react-router-dom";
import { ProgressButtonStyles } from '../styles/ProgressButton.styled';

const ProgressButton = ({ formStep, setFormStep, setFormData }) => {
	const navigate = useNavigate();

	function handleClick() {
		navigate("/confirmation");
		setFormStep(0);
		setFormData({
			name: "",
			email: "",
			address1: "",
			address2: "",
			lga: "",
			state: "",
			cardName: "",
			cardType: "",
			cardDetails: "",
			expiryDate: "",
			cvv: "",
		});
	}

	return (
		<ProgressButtonStyles
			onClick={() => {
				if (formStep === 2) {
					handleClick();
				} else {
					setFormStep((currPage) => currPage + 1);
				}
			}}
		>
			{formStep === 2 ? "Pay" : "Next"}
		</ProgressButtonStyles>
	);
};

export default ProgressButton