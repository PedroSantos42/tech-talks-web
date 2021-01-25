import React from 'react';
// import { Link } from 'react-router-dom';

// import { FiArrowLeft } from 'react-icons/fi';
// import logoImg from '../../assets/logo-icon.svg';

// import coverImg from '../../assets/background-cover.jpg';

import { Container } from './styles';
// import PostHeader from '../../components/PostHeader';
import PostsHeader from '../../components/PostsHeader';

const Post: React.FC = () => (
  <Container>
    {/* <PostHeader title="Só talentos! Temos gente nova no time!" cover={coverImg} /> */}
    <PostsHeader />
  </Container>

  // <Container>
  //   <Header>
  //     <Link to="/posts">
  //       <FiArrowLeft />
  //     </Link>

  //     <p>Pessoas</p>

  //     <Link to="/">
  //       <img src={logoImg} alt="Logomarca de Tech Talks" />
  //     </Link>
  //   </Header>

  //   <PostContent>
  //     <h1>texto da postagem texto da postagem texto da postagem </h1>
  //   </PostContent>
  // </Container>
);

export default Post;
