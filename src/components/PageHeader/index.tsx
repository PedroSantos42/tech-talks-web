import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo-icon.svg'

import { FiHome } from 'react-icons/fi'

import { Container } from './styles'

interface IPageHeaderProps {
  title: string;
}

const PageHeader: React.FC<IPageHeaderProps> = (props) => {
  return (
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
            {props.title}
          </strong>

          {props.children}
        </div>
      </header>
    </Container>
  )
}

export default PageHeader;
