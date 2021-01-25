import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import PostItem from '../../components/PostItem';

const PostList: React.FC = () => (
  <Container>
    <Header title="Postagens" />

    <main>
      <PostItem title="Java Spring Boot" />
      <PostItem title="Backend" />
      <PostItem title="Frontend e UX" />
      <PostItem title="DevOps" />
      <PostItem title="Dicas de Engenharia" />
      <PostItem title="Ofertas de trabalho" />
      <PostItem title="Gestão humanizada" />
    </main>
  </Container>
);

export default PostList;
