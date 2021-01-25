import React from 'react';
import { Link } from 'react-router-dom';

import { FiHome } from 'react-icons/fi';
import logoImg from '../../assets/logo-icon.svg';

import { Container } from './styles';

interface PostHeaderProps {
  title: string;
  cover: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ title, cover }) => (
  <Container>
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <div>
            <FiHome size={42} />
          </div>
        </Link>
        <img src={logoImg} alt="Logo de Tech Talks" />
      </div>

      <div className="header-content">
        <strong>
          {title}
        </strong>

        <img
          src={cover}
          alt="Capa da postagem"
          className="main-cover"
        />
      </div>
    </header>
  </Container>
);

export default PostHeader;
