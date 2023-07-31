import React from 'react';
import { Link } from 'gatsby';
import { AnimatePresence, useCycle } from 'framer-motion';
import { ContainerWrapper } from '@/styles/container';
import useTheme from '@/hooks/useTheme';
import OptionModal from '@/components/atoms/optionModal';
import MobileSidebar from '@/components/atoms/header/mobileSidebar';
import { HeaderWrapper } from './styled';

interface Props {
  backgroundColor?: string;
}

const Header: React.FC<Props> = ({ backgroundColor = '' }) => {
  const [ThemeClass, screen] = useTheme();
  const [isOptionOpen, setIsOptionOpen] = useCycle<boolean>(false, true);
  const [isMobileOpen, setIsMobileOpen] = useCycle<boolean>(false, true);

  const toggleOptionModal = () => {
    setIsOptionOpen();
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen();
  };

  return (
    <HeaderWrapper
      themeClass={ThemeClass}
      screen={screen}
      backgroundColor={backgroundColor}
    >
      <ContainerWrapper>
        <div className="inner-wrapper">
          <div className="home">
            <Link to="/">
              <h1>Funes</h1>
            </Link>
          </div>
          <div className="right-section">
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
              </ul>
            </nav>
            <button
              className="option"
              type="button"
              onClick={toggleOptionModal}
            >
              <span className="material-icons-outlined">settings</span>
            </button>
            <button
              className="mobile"
              type="button"
              onClick={toggleMobileSidebar}
            >
              <span className="material-icons-outlined">menu</span>
            </button>
          </div>
          <AnimatePresence exitBeforeEnter={true}>
            {isMobileOpen && <MobileSidebar onToggle={toggleMobileSidebar} />}
          </AnimatePresence>
        </div>
      </ContainerWrapper>
      <OptionModal isOpen={isOptionOpen} onToggle={toggleOptionModal} />
    </HeaderWrapper>
  );
};

export default Header;
