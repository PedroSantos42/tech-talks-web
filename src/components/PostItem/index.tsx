import React from 'react';
import { Link } from 'react-router-dom';

import coverImg from '../../assets/nmancer-avatar.jpg';

import { Container } from './styles';

interface PostItemProps {
  title: string;
}

const PostItem: React.FC<PostItemProps> = ({ title }) => (
  <Container>
    <Link to="/post" style={{ textDecoration: 'none' }}>
      <header>
        <img src={coverImg} alt="Capa da postagem" />
        <div>
          <strong>{title}</strong>
          <span>24/12/2020</span>
        </div>
      </header>
    </Link>
  </Container>
);

export default PostItem;
