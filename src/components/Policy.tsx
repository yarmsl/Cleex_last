import { makeStyles } from '@material-ui/core';
import React, { ReactElement, useEffect, useState } from 'react';
import { PoliciesProps } from '../types/types';
import { useMedia } from '../lib/hooks/useMedia';
import PoliciesListItemBlock from './PoliciesListItem';
import List from '@material-ui/core/List';

const useStyles = makeStyles(({ palette }) => ({
	root: {
		width: '100%',
		backgroundColor: palette.background.paper,
	},
	nested: {
		paddingLeft: '20px'
	},
	titlePolicy: {
		fontSize: '36px',
		color: palette.text.secondary,
		textTransform: 'uppercase'
	},
	list: {
		marginTop: '80px'
	},
	content: {
	},
	contentTitel: {
		fontSize: '30px',
		padding: '20px 0',
		fontWeight: 'bold'
	},
	listItem: {
		fontSize: '20px',
		marginBottom: '20px'
	},
	innerListItem: {
		fontSize: '18px',
		marginBottom: '10px'
	},
	lastListItem: {
		marginBottom: '5px'
	},
	contentEndBlock: {
		marginBottom: '40px'
	},
	top: {
		marginTop: '80px',
		marginBottom: '80px'
	},
	test: {
		color: palette.text.primary
	}
}));


interface Term {
	name?: string;
	children?: Term[];
}

interface Terms {
	terms_of_service?: Term[];
}


const Policy = ({ policy }: PoliciesProps): ReactElement => {

	const classes = useStyles();
	const [text, setText] = useState({} as Terms);
	const { matchesMobile, matchesTablet } = useMedia();

	const getDataJson = async (url: string) => {
		const response = await fetch(url).then(r => r.json());
		setText(response as Terms);
	};


	useEffect(() => {
		if (policy == '/useragreement') {
			getDataJson('/json/terms1.json');
		}

		if (policy == '/privacypolicy') {
			getDataJson('/json/terms2.json');
		}

	}, []);


	// return <div>2</div>;

	const policyString = policy || '';

	if (matchesMobile || matchesTablet) {
		return (
			<div className={classes.top}>
				<List
					component="nav"
					aria-labelledby="nested-list-subheader"
					className={classes.root}
				>
					{text.terms_of_service?.map((item, index) => {
						return (
							<div key={index}>
								<PoliciesListItemBlock titel={item.name} subtitel={JSON.stringify(item.children)} index={index} url={policyString} />
							</div>
						);
					})}
				</List>
			</div>
		);
	}


	return (
		<div className={classes.list}>
			<h1 className={classes.titlePolicy}>{policy == '/useragreement' ? 'Пользовательское соглашение' : 'политика конфиденциальности'}</h1>
			{text.terms_of_service?.map((item, index) => {
				return (
					<div className={`${classes.content} ${text?.terms_of_service?.length == index + 1 ? classes.contentEndBlock : ''}`} key={index}>
						<div className={classes.contentTitel}>{index + 1}. {item.name}</div>
						<ul>
							{item.children?.map((item, index) => {
								return (
									<>
										<li className={classes.listItem} key={index}>{item.name}</li>
										{item.children ? (
											<ul>
												{item.children.map((item, index) => {
													if (item.name == 'получать от Администрации информацию, касающуюся обработки его персональных данных, в том числе содержащую:') console.log(item);
													return (
														<>
															<li className={classes.innerListItem} key={index}>{item.name}</li>
															{item.children ?
																<ul>
																	{item.children.map((item, index) => {
																		console.log(item);
																		return (
																			<li className={classes.lastListItem} key={index}>{item.name}</li>
																		);
																	})}
																</ul>
																: null}
														</>
													);
												})}
											</ul>
										) : null}
									</>
								);
							})}
						</ul>
					</div>
				);
			})}
		</div>
	);
};
export default Policy;