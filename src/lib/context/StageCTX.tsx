import React, { ReactElement, useContext, useState, createContext, useEffect } from 'react';
import { Child, StageCTX, User, userResponse } from '../../types/types';
import { STATIC_URL } from '../constants';
import { getAuthData, getData } from '../fetch';
import { queryString } from '../queryString';
import { isEmpty } from '../services';

const stageCTX = createContext({} as StageCTX);

export const useStage = (): StageCTX => useContext(stageCTX);

const setId = (id: string) => {
	id = window.btoa(String(+id * 666 - 143));
	localStorage.setItem('id', id);
};

const getId = (): string => {
	let id = localStorage.getItem('id');
	if (id !== null) {
		id = window.atob(id);
		id = String((+id + 143) / 666);
	} else id = '';
	return id;
};

const removeId = () => {
	localStorage.removeItem('id');
};

const StageProvider = ({ children }: Child): ReactElement => {
	const [headerMobileTitle, setHeaderMobileTitle] = useState('');
	const [user, setUser] = useState({} as User);
	const [waiter, setWaiter] = useState({} as User);

	useEffect(() => {
		getAuthData(`staff/${getId()}`)
			.then(r => {
				if (!isEmpty(r as userResponse)) {
					setUser((r as userResponse).user);
					setUser(p => {
						return {
							...p,
							photo: `${STATIC_URL}/${p.photo}`
						};
					});
					console.log(r);
				}
			});
	}, []);

	const getWaierIfNeed = (route: string) => {
		if (isEmpty(waiter) && route !== '') {
			getData(`staff_info/topka/${queryString(route)}`)
				.then((r => {
					if (r !== undefined || r !== null) {
						console.log(r);
						switch ((r as userResponse).message) {
						case 'success':
							return (
								setWaiter((r as userResponse).user),
								setWaiter(p => {
									return {
										...p,
										photo: `${STATIC_URL}/${p.photo}`
									};
								})
							);
						case 'the table is not serviced':
							return alert('Столик не занят');
						}
					}
				}))
				.catch(e => console.error(e));
		}
	};

	return (
		<stageCTX.Provider value={{ headerMobileTitle, setHeaderMobileTitle, user, setUser, setId, getId, removeId, waiter, setWaiter, getWaierIfNeed }}>
			{children}
		</stageCTX.Provider>
	);
};

export default StageProvider;