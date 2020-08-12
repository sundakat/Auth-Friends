import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';
import friendsCouch from '../images/friends-couch.png';

const Buttons = styled.button`
	background-color: yellow;
	padding: 7px;
	color: black;
	border: 2px solid rgb(0, 11, 126);
	border-radius: 6px;
	font-family: GabrielWeissFriendsFont;
	font-size: 1.0rem;
	font-weight: bold;
`;
const UserNameForm = styled.input`
	padding: 10px;
	border: 2px solid rgb(0, 11, 126);
	margin-right: 20px;
	border-radius: 8px;
`;
function Login(props) {
	const [isLoading, setIsLoading] = useState(false)
	const [ data, setData ] = useState({
		username : '',
		password : '',
	});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true)
		axiosWithAuth()
			.post('/login', data)
			.then((res) => {
				localStorage.setItem('token', res.data.payload);
				props.history.push('/private');
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			
			<br/>
			<h3>Welcome Friends! Please Log In</h3>
			<br/>
			{isLoading ? (
				<div className="spinner"><h2>Loading Data...</h2></div>
			) : (
					null
				)}
			<form onSubmit={handleSubmit}>
				<UserNameForm
					type='text'
					name='username'
					value={data.username}
					onChange={handleChange}
					placeholder='Username'
				/>
				<UserNameForm
					type='password'
					name='password'
					value={data.password}
					onChange={handleChange}
					placeholder='Password'
				/>
				<Buttons>Submit</Buttons>
			</form>
			<br/>
			<img src={friendsCouch} alt="Friends Home" />
		</div>
	);
}

export default Login;
