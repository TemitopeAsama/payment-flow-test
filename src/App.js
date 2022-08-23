import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import PersonalInfo from "./components/PersonalInfo";
import BillingInfo from "./components/BillingInfo";
import ConfirmPayment from "./components/ConfirmPayment";
import Success from './pages/Success';

function App() {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
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

    const PageDisplay = () => {
			if (formStep === 0) {
				return <PersonalInfo formData={formData} setFormData={setFormData} />;
			} else if (formStep === 1) {
				return <BillingInfo formData={formData} setFormData={setFormData} />;
			} else {
				return <ConfirmPayment formData={formData} setFormData={setFormData} />;
			}
		};

  return (
		<Router>
			<div className='max-width-wrapper'>
				<ScrollToTop>
					<div className='App'>
						<Routes>
							<Route
								exact
								path='/'
								element={
									<Home
										PageDisplay={PageDisplay}
										formStep={formStep}
										setFormStep={setFormStep}
										setFormData={setFormData}
									/>
								}
							/>
							<Route path='/confirmation' element={<Success />} />
							{/* <Route path='*' element={<NotFound />}></Route> */}
						</Routes>
					</div>
				</ScrollToTop>
			</div>
		</Router>
	);
}

export default App;
