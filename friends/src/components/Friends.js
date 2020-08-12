import React, { useState, useEffect } from 'react';
import AuthFriends from './AuthFriends';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

const Name = styled.h2`
	color: black;
	font-size: 1.75rem;
`;
const Age = styled.h3`
	color: royalblue;
	font-size: 1.5rem;
`;
const Email = styled.h3`
color: rgb(191, 18, 18);
`;

const Friends = () => {
	const [ friends, setFriends ] = useState([]);

	useEffect(() => {
		axiosWithAuth()
			.get('/friends')
			.then((res) => {
				setFriends(...friends, res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div>
			<AuthFriends setFriends={setFriends} />
			{friends.map((item) => (
				<div className="friendsList" key={item.id}>
					<Name>Name: {item.name}</Name>
					<Age>Age: {item.age}</Age>
					<Email>Email: {item.email}</Email>
				</div>
			))}
		</div>
	);
};

export default Friends;
