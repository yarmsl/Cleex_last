import { Theme } from '@material-ui/core';
import React from 'react';

export interface Child  {
	children?: React.ReactFragment;
}

export type Themes = 'light' | 'dark';

export interface LDTheme {
	type: Themes;
}

export interface ThemeCtx {
	theme?: Theme;
	switchTheme: (str: Themes) => void;
}

export interface StageCTX {
	headerMobileTitle: string;
    setHeaderMobileTitle: React.Dispatch<React.SetStateAction<string>>;
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
}

export type avatarSize = '40' | '60' | '80' | '100' | '120';

export interface avatarUI {
	children?: string;
	size?: avatarSize;
	source?: string;
}

export interface LoginData {
	login: string;
	password: string;
}

export interface User {
	data_job_begin?: string | null;
	data_job_end?: string | null;
	email?: string;
	id: number;
	institution_id: number;
	login: string;
	name?: string;
	photo?: string;
	position: number;
	slogan?: string
}

export interface loginResponse {
	access_token: string;
	message: string;
	refresh_token: string;
	user: User;
}

export interface WaiterComp {
	name?: string;
	slogan?: string;
	source?: string;
	size?: avatarSize;
}