import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';

import styled from 'styled-components';

const StyledPaper = styled(Paper)`
	padding: 20px;
	font-family: 'Grenze Gotisch', cursive;
	font-size: 40px;
`;

const StyledButton = styled(Button)`
	/* font-size: 30px; */
	text-transform: none;
	line-height: 17px;
	/* padding: 10px; */
	border-radius: 20px;
`;

// import { Container } from './styles';

const SignInSignUpCard: React.FC = () => {
	const [tab, setTab] = useState('signIn');

	return (
		<StyledPaper>
			<Grid
				container
				direction="column"
				justify="center"
				alignContent="center"
				spacing={1}
			>
				<span style={{ textAlign: 'center' }}>Bem vindo</span>
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
					<StyledButton variant="contained" color="primary" fullWidth>
						Entrar
					</StyledButton>
				</Grid>
				<Grid item>Ainda nao tem uma conta?</Grid>
				<Grid item>
					<TextField label="Email" variant="outlined" type="email" fullWidth />
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
					<StyledButton variant="contained" color="primary" fullWidth>
						Entrar
					</StyledButton>
				</Grid>
			</Grid>
		</StyledPaper>
	);
};

export default SignInSignUpCard;
