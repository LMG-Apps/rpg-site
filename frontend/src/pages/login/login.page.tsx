import React from 'react';

import Grid from '@material-ui/core/Grid';

import SignInSignUpCard from './components/sign-in-sign-up-card.component';

import styled from 'styled-components';

import campfire from '../../assets/images/campire1.jpeg';
import campfire2 from '../../assets/images/campire2.jpeg';
import campfireResize from '../../assets/images/campfireresize.jpeg';
// import { Container } from './styles';

const StyledDiv = styled.div`
	position: fixed;
	background-image: url(${campfireResize});
	background-size: 100%;
	background-repeat: no-repeat;
	height: 100%;
	width: 100%;
`;

const StyledGrid = styled(Grid)`
	padding: 120px;
`;

const LoginPage: React.FC = () => {
	return (
		<StyledDiv>
			<StyledGrid container direction="row" spacing={2}>
				<Grid item xs={8}>
					{/* <img alt="campfire" src={campfire} width="100%" height="100%" />	 */}
				</Grid>
				<Grid item xs={4} justify="center">
					<SignInSignUpCard />
				</Grid>
			</StyledGrid>
		</StyledDiv>
	);
};

export default LoginPage;
