/* eslint-disable react/function-component-definition */
import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="app" />
            <form>
                <h1>Faça seu logon</h1>

                <input placeholder="E-mail" />

                <input type="password" placeholder="Password" />

                <button type="submit">Entrar</button>

                <a href="forgot">Esqueci minha senha</a>
            </form>

            <a href="login">
                <FiLogIn />
                Criar conta
            </a>
        </Content>

        <Background />
    </Container>
);

export default SignIn;
