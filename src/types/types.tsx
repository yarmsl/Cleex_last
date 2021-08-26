import React, { MouseEventHandler } from 'react';

export interface Child {
	children?: React.ReactFragment;
}

export interface MetaLT extends Child {
	title: string;
}

export interface svgIcon {
	color?: string;
	viewBox?: string;
	className?: string;
}

export interface TabsProps {
	scrollTo: (page: number) => void;
	noParallax?: boolean;
}

export type avatarSize = '40' | '60' | '80' | '100' | '120';

export interface avatarUI {
	children?: string;
	size?: avatarSize;
	source?: string;
	onClick?: MouseEventHandler;
}

export interface LoginData {
	login: string;
	password: string;
}

export interface User {
	data_job_begin: string | null;
	data_job_end: string | null;
	email: string;
	id: number;
	institution_id: number;
	login: string;
	name: string;
	photo: string;
	position: number;
	slogan: string;
}

export interface loginResponse {
	access_token: string;
	message: string;
	refresh_token: string;
	user: User;
}

export interface userResponse {
	message: string;
	user: User;
}

export interface StageCTX {
	headerMobileTitle: string;
	setHeaderMobileTitle: React.Dispatch<React.SetStateAction<string>>;
	user: User;
	setUser: React.Dispatch<React.SetStateAction<User>>;
	setId: (id: string) => void;
	getId: () => string;
	removeId: () => void;
	waiter: User;
	setWaiter: React.Dispatch<React.SetStateAction<User>>;
	getWaierIfNeed: (route: string) => void;
}

export interface WaiterComp {
	name?: string;
	slogan?: string;
	source?: string;
	size?: avatarSize;
}

export type policiesTypes = '/useragreement' | '/privacypolicy';

export interface PoliciesProps {
	policy?: policiesTypes;
}


export interface PoliciesListItem {
	titel?: string;
	subtitel: string;
	index: number;
	url: string;
}

export interface SettingsProps {
	name: string;
	slogan: string;
}