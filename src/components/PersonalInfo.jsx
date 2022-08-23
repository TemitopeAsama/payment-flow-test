import React from 'react'
import ScrollToTop from './ScrollToTop';
import { PersonalInfoStyles } from '../styles/PersonalInfo.styled';

const PersonalInfo = ({setFormData, formData}) => {
  return (
		<PersonalInfoStyles>
			<ScrollToTop />
			<label htmlFor='name'>Name</label>
			<input
				type='text'
				id='name'
				placeholder='Opara Linus Ahmed'
				value={formData.name}
				onChange={(event) =>
					setFormData({ ...formData, name: event.target.value })
				}
			/>

			<label htmlFor='email'>
				Email Address <span>*</span>
			</label>
			<span className='more__info'>
				The purchase reciept would be sent to this address
			</span>
			<input
				type='email'
				id='email'
				placeholder='OparaLinusAhmed@devmail.com'
				value={formData.email}
				required
				onChange={(event) =>
					setFormData({ ...formData, email: event.target.value })
				}
			/>

			<label htmlFor='address1'>Address 1</label>
			<input
				type='text'
				id='address1'
				placeholder='The address of the user goes here'
				value={formData.address1}
				onChange={(event) =>
					setFormData({ ...formData, address1: event.target.value })
				}
			/>

			<label htmlFor='address2'>Address 1</label>
			<input
				type='text'
				id='address2'
				placeholder='and here'
				value={formData.address2}
				onChange={(event) =>
					setFormData({ ...formData, address2: event.target.value })
				}
			/>

			<div className='lga__state'>
				<div className='lga'>
					<label htmlFor='lga'>Local Government</label>
					<input
						type='text'
						id='lga'
						placeholder='Surulere'
						value={formData.lga}
						onChange={(event) =>
							setFormData({ ...formData, lga: event.target.value })
						}
					/>
				</div>

				<div className='state'>
					<label htmlFor='state'>State</label>
					<select name='cardTypes' id='state'>
						<option value='' selected='selected'>
							Lagos
						</option>
						<option value='Abia'>Abia</option>
						<option value='Adamawa'>Adamawa</option>
						<option value='AkwaIbom'>AkwaIbom</option>
						<option value='Anambra'>Anambra</option>
						<option value='Bauchi'>Bauchi</option>
						<option value='Bayelsa'>Bayelsa</option>
						<option value='Benue'>Benue</option>
						<option value='Borno'>Borno</option>
						<option value='Cross River'>Cross River</option>
						<option value='Delta'>Delta</option>
						<option value='Ebonyi'>Ebonyi</option>
						<option value='Edo'>Edo</option>
						<option value='Ekiti'>Ekiti</option>
						<option value='Enugu'>Enugu</option>
						<option value='FCT'>FCT</option>
						<option value='Gombe'>Gombe</option>
						<option value='Imo'>Imo</option>
						<option value='Jigawa'>Jigawa</option>
						<option value='Kaduna'>Kaduna</option>
						<option value='Kano'>Kano</option>
						<option value='Katsina'>Katsina</option>
						<option value='Kebbi'>Kebbi</option>
						<option value='Kogi'>Kogi</option>
						<option value='Kwara'>Kwara</option>
						<option value='Lagos'>Lagos</option>
						<option value='Nasarawa'>Nasarawa</option>
						<option value='Niger'>Niger</option>
						<option value='Ogun'>Ogun</option>
						<option value='Ondo'>Ondo</option>
						<option value='Osun'>Osun</option>
						<option value='Oyo'>Oyo</option>
						<option value='Plateau'>Plateau</option>
						<option value='Rivers'>Rivers</option>
						<option value='Sokoto'>Sokoto</option>
						<option value='Taraba'>Taraba</option>
						<option value='Yobe'>Yobe</option>
						<option value='Zamfara'>Zamafara</option>
					</select>
				</div>
			</div>
		</PersonalInfoStyles>
	);
}

export default PersonalInfo