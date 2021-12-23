import React from 'react';
import { Link } from 'gatsby';
import { ContainerWrapper } from '@/styles/container';
import { HeaderWrapper } from './styled';
import useTheme from '@/hooks/useTheme';
import OptionModal from '@/components/atoms/optionModal';
import { useCycle } from 'framer-motion';

const Header: React.FC = () => {
  const [ThemeClass] = useTheme();
  const [isOpen, setIsOpen] = useCycle<boolean>(false, true);

  const toggleOptionModal = () => {
    setIsOpen();
  };

  return (
    <HeaderWrapper themeClass={ThemeClass}>
      <ContainerWrapper>
        <div className="inner-wrapper">
          <div className="home">
            <Link to="/">Funes</Link>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/dev">dev</Link>
              </li>
              <li>
                <Link to="/journal">journal</Link>
              </li>
              <li>
                <Link to="/resume">resume</Link>
              </li>
              <li>
                <button type="button" onClick={toggleOptionModal}>
                  <span className="material-icons-outlined">settings</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </ContainerWrapper>
      <OptionModal isOpen={isOpen} onToggle={toggleOptionModal} />
    </HeaderWrapper>
  );
};

export default Header;
