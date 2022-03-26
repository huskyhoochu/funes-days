import React from 'react';
import { motion } from 'framer-motion';
import {
  NormalHorizontalVariants,
  NormalShowingVariants,
} from '@/framer/variants';
import useTheme from '@/hooks/useTheme';
import { SidebarWrapper } from './styled';
import { ShowingHierarchyVariants } from './framer';

interface Props {
  onToggle: () => void;
  children: React.ReactNode;
}

const Sidebar: React.FC<Props> = ({ onToggle, children }) => {
  const [ThemeClass] = useTheme();

  return (
    <SidebarWrapper
      theme={ThemeClass}
      variants={ShowingHierarchyVariants}
      initial="hide"
      animate="show"
      exit="hide"
    >
      <motion.div
        className="sidebar-background"
        variants={NormalShowingVariants}
        onClick={onToggle}
      />
      <motion.div
        layout="position"
        className="sidebar-body"
        variants={NormalHorizontalVariants}
      >
        <div className="title-group">
          <h4>Funes</h4>
          <button onClick={onToggle}>
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
        <div className="content">{children}</div>
      </motion.div>
    </SidebarWrapper>
  );
};

export default Sidebar;
