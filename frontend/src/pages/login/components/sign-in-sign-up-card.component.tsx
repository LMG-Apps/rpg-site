import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { StylesProvider } from '@material-ui/core/styles';

import styled from 'styled-components';

const StyledPaper = styled(Paper)`
	padding: 20px;
	background-color: rgba(255, 255, 255, 0.9);
	/* font-family: 'Grenze Gotisch', cursive;
	font-size: 40px; */
`;

const StyledButton = styled(Button)`
	font-family: 'Grenze Gotisch', cursive;
	font-size: 24px;
	text-transform: none;
	line-height: 17px;
	color: white;
	background-color: rgba(255, 85, 85, 1);
	&:hover {
		background-color: rgba(255, 85, 85, 0.9);
	}
`;

const SignInSignUpCard: React.FC = () => {
	const [tab, setTab] = useState('signin');

	return (
		<StylesProvider injectFirst>
			<StyledPaper elevation={3}>
				<Grid
					container
					direction="column"
					justify="center"
					alignContent="center"
					spacing={2}
				>
					<span
						style={{
							fontFamily: 'Grenze Gotisch, cursive',
							fontSize: '40px',
							textAlign: 'center',
							lineHeight: '30px',
							marginBottom: '10px',
						}}
					>
						Bem vindo
					</span>
					<Grid item>
						<TextField label="Usuário" variant="outlined" fullWidth />
					</Grid>
					<Grid item>
						<TextField
							label="Senha"
							variant="outlined"
							type="password"
							fullWidth
						/>
					</Grid>
					<Grid item>
						<StylesProvider injectFirst>
							<StyledButton variant="contained" size="large" fullWidth>
								Entrar
							</StyledButton>
						</StylesProvider>
					</Grid>
					<ListItem
						style={{ marginTop: '5px', marginBottom: '15px' }}
						button
						onClick={() => {
							if (tab === 'signin') {
								setTab('signup');
							} else {
								setTab('signin');
							}
						}}
					>
						<ListItemText primary="Ainda não é um membro?" />
						{tab === 'signup' ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
				</Grid>
				<Collapse in={tab === 'signup'}>
					<Grid container direction="column" spacing={2}>
						<Grid item>
							<TextField
								label="Email"
								variant="outlined"
								type="email"
								fullWidth
							/>
						</Grid>
						<Grid item>
							<TextField label="Nome de usuário" variant="outlined" fullWidth />
						</Grid>
						<Grid item>
							<TextField
								label="Senha"
								variant="outlined"
								type="password"
								fullWidth
							/>
						</Grid>
						<Grid item>
							<TextField
								label="Confirmar senha"
								variant="outlined"
								type="password"
								fullWidth
							/>
						</Grid>
						<Grid item>
							<StylesProvider injectFirst>
								<StyledButton variant="contained" size="large" fullWidth>
									Cadastrar
								</StyledButton>
							</StylesProvider>
						</Grid>
					</Grid>
				</Collapse>
			</StyledPaper>
		</StylesProvider>
	);
};

export default SignInSignUpCard;
