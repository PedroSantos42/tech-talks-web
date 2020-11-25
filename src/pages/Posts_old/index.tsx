import React from 'react';
import { FiActivity, FiSearch } from 'react-icons/fi';

import profileImg from '../../assets/nmancer-avatar.jpg';
import logoImg from '../../assets/logo-icon.svg';
import coverImg from '../../assets/background-cover.jpg';

import {
  Posts as PostList,
  Logo,
  Cover,
} from './styles';

const Posts: React.FC = () => (
  <>
    {/* <div id="main-cover">
      <img src={postsTemplate} alt="Postagem da capa" />

      <h2 id="post-title">
        TÍTULO DA POSTAGEM
      </h2>
    </div>

    <div id="side-bar">
      <div id="search-post">
        <FiSearch size={36} />
      </div>
    </div> */}

    <Logo>
      <img src={logoImg} alt="Logomarca de Tech Talks"/>
    </Logo>

    <Cover>
      <div>
        <h2>
          Titulo da postagem principal
        </h2>
        <img src={coverImg} alt="Capa da postagem principal"/>
      </div>

      <a href="#">
        <FiSearch size={36} />
      </a>
    </Cover>

    <PostList>
      <a href="#">
        <img src={profileImg} alt="Capa da postagem" />
        <div>
          <p>11/10/2020</p>
          <strong>Título da postagem</strong>
        </div>
        <FiActivity size={36} />
      </a>

      <a href="#">
        <img src={profileImg} alt="Capa da postagem" />
        <div>
          <p>11/10/2020</p>
          <strong>Título da postagem</strong>
        </div>
        <FiActivity size={36} />
      </a>
    </PostList>
  </>
)

export default Posts;
