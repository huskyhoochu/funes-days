import React from 'react';
import { Link } from 'gatsby';
import { ContainerClass } from '@/styles/container';
import { HeaderClass } from './classes';
import useTheme from '@/hooks/useTheme';
import OptionModal from '@/components/atoms/optionModal';
import { useCycle } from 'framer-motion';

const Header: React.FC = () => {
  const ThemeClass = useTheme();
  const [isOpen, setIsOpen] = useCycle<boolean>(false, true);

  const toggleOptionModal = () => {
    setIsOpen();
  };

  return (
    <header className={HeaderClass(ThemeClass)}>
      <div className={ContainerClass}>
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
      </div>
      <OptionModal isOpen={isOpen} onToggle={toggleOptionModal} />
    </header>
  );
};

export default Header;
