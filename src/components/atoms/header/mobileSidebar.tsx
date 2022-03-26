import React from 'react';
import Sidebar from '@/components/templates/sidebar';
import { Link } from 'gatsby';
import { MobileNavWrapper } from './styled';

interface Props {
  onToggle: () => void;
}

const MobileSidebar: React.FC<Props> = ({ onToggle }) => {
  return (
    <Sidebar onToggle={onToggle}>
      <MobileNavWrapper>
        <ul>
          <li>
            <Link to="/">
              <span className="material-icons-outlined">roofing</span>
              home
            </Link>
          </li>
          <li>
            <Link to="/dev">
              <span className="material-icons-outlined">code</span>
              dev
            </Link>
          </li>
          <li>
            <Link to="/journal">
              <span className="material-icons-outlined">auto_stories</span>
              journal
            </Link>
          </li>
          <li>
            <Link to="/resume">
              <span className="material-icons-outlined">fingerprint</span>
              resume
            </Link>
          </li>
        </ul>
      </MobileNavWrapper>
    </Sidebar>
  );
};

export default MobileSidebar;
