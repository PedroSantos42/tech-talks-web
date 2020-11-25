import React from 'react'

import coverImg from '../../assets/nmancer-avatar.jpg'

import { Container } from './styles'

interface IPostItemProps {
  title: string;
}

const PostItem: React.FC<IPostItemProps> = (props) => {
  return (
    <Container>
      <header>
        <img src={coverImg} alt="Capa da postagem" />
        <div>
          <strong>{props.title}</strong>
          <span>24/12/2020</span>
        </div>
      </header>
    </Container>
  )
}

export default PostItem;
