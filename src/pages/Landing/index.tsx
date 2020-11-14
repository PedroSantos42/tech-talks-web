import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import { Container, Content, AnimationContainer } from './styles';

import logoImg from '../../assets/logo-icon.svg';

const Landing: React.FC = () => (
  <Container>
    <Content>
      <AnimationContainer>
        <div className="logo-container">
          <img src={logoImg} alt="Logomarca de Tech Talks" />
          <strong>Tech Talks</strong>
        </div>

        <main className="headline">
          <h1>Informe-se sobre o mundo da Tecnologia</h1>

          <section className="enter">
            <p>Novas postagens e atualizações semanais abordando tópicos diversos.</p>

            <Link to="/posts" title="Entrar">
              <FiArrowRight size={36} />
            </Link>
          </section>
        </main>
      </AnimationContainer>
    </Content>
  </Container>
)

export default Landing;
