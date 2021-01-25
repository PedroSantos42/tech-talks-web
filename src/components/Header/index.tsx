import React from 'react';
import { FiList } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoIcon from '../../assets/logo-icon.svg';

import { HeaderContainer } from './styles';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <HeaderContainer>
    <FiList />

    <p>{title}</p>

    <Link to="/">
      <img src={logoIcon} alt="Logomarca de Tech Talks" id="logo-image" />
    </Link>
  </HeaderContainer>
);

export default Header;
