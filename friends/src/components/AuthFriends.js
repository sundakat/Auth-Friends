import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';


const AddForm = styled.input`
	border: 2px solid rgb(0, 11, 126);
	margin-right: 20px;
	border-radius: 10px;
	padding: 10px;
`;
const Buttons = styled.button`
	background-color: yellow;
	padding: 8px;
	color: black;
	border: 2px solid rgb(0, 11, 126);
	border-radius: 6px;
	font-family: GabrielWeissFriendsFont;
	font-size: 1.0rem;
	font-weight: bold;
`;

const AuthFriends = ({ setFriends }) => {
	const [ newFriend, setNewFriend ] = useState({
		name  : '',
		age   : '',
		email : '',
		id    : Date.now(),
	});
	const handleChanges = (e) => {
		setNewFriend({
			...newFriend,
			[e.target.name]: e.target.value,
		});
	};
	const friendPosted = (data) => {
		axiosWithAuth()
			.post('/friends', data)
			.then((res) => {
				setFriends(res.data);
				console.log('Added', res);
			})
			.catch((err) => {
				console.log('Failed', err);
			});
		setNewFriend({
			name  : '',
			age   : '',
			email : '',
		});
	};
	return (
		<div>	
			<AddForm type='text' name='name' value={newFriend.name} onChange={handleChanges} placeholder='Name:' />
			<AddForm type='text' name='age' value={newFriend.age} onChange={handleChanges} placeholder='Age:' />
			<AddForm type='text' name='email' value={newFriend.email} onChange={handleChanges} placeholder='Email:' />
			<Buttons className="add" onClick={() => friendPosted(newFriend)}>Add Friend</Buttons>
		</div>
	);
};

export default AuthFriends;
