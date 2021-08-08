import { Theme } from '@material-ui/core';
import React from 'react';

export interface Child  {
	children?: React.ReactNode;
}

export type Themes = 'light' | 'dark';

export interface LDTheme {
	type: Themes;
}

export interface ThemeCtx {
	theme?: Theme;
	switchTheme: (str: Themes) => void;
}

export type Companies = 'cleex' | 'topka';

export interface CompanyAction {
	type: Companies;
}

export interface CompanyCtx {
	company: Companies;
	switchCompany: (str: Companies) => void;
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