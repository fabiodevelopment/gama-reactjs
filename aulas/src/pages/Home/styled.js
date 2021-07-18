import styled from "styled-components";

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export const Content = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;


export const Input = styled.input`
	border: 1px solid #ddd;
	height: 1.5rem;
	padding: 0 .5rem;
	border-radius: .25rem 0 0 .25rem;

	&:focus,
	&:active {
		outline: none;
		box-shadow: none;
	}
`;

export const Button = styled.button`
	height: 1.6rem;
	border: 1px solid #000;
	background: #000;
	color: #FFF;
	border-radius: 0 .25rem .25rem 0;

	&:focus,
	&:active {
		outline: none;
		box-shadow: none;
	}
`;

export const ErrorMsg = styled.span`
	color: red;
	font-size: 0.7rem;
	display:block;
	font-weight: 600;
	margin-top: 1rem;
	font-family: Sans-Serif;
`;