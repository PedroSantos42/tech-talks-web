import React from 'react';
import { FiActivity, FiSearch } from 'react-icons/fi';

import { Container } from './styles';

import coverImg from '../../assets/background-cover.jpg';

import PageHeader from '../../components/PageHeader'
import PostItem from '../../components/PostItem'

const Posts: React.FC = () => (
  <Container>
    <PageHeader title="Postagens">
      <img
        src={coverImg}
        alt="Capa da postagem principal"
        className="main-cover"
      />
    </PageHeader>

    <main>
      <PostItem title="Post 00" />
      <PostItem title="Post 01" />
      <PostItem title="Post 02" />
      <PostItem title="Post 03" />
      <PostItem title="Post 04" />
    </main>
  </Container>
)

export default Posts;
