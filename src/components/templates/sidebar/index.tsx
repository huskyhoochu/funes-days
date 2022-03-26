import React from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import {
  NormalHorizontalVariants,
  NormalShowingVariants,
} from '@/framer/variants';
import useTheme from '@/hooks/useTheme';
import { SidebarWrapper } from './styled';

interface Props {
  onToggle: () => void;
  children: React.ReactNode;
}

const Sidebar: React.FC<Props> = ({ onToggle, children }) => {
  const [ThemeClass] = useTheme();

  return (
    <SidebarWrapper theme={ThemeClass}>
      <LayoutGroup>
        <motion.div
          layout={true}
          className="sidebar-background"
          variants={NormalShowingVariants}
          onClick={onToggle}
          initial="hide"
          animate="show"
          exit="hide"
        />
        <motion.div
          layout={true}
          className="sidebar-body"
          variants={NormalHorizontalVariants}
          initial="hide"
          animate="show"
          exit="hide"
        >
          <div className="title-group">
            <h4>Funes</h4>
            <button onClick={onToggle}>
              <span className="material-icons-outlined">close</span>
            </button>
          </div>
          <div className="content">{children}</div>
        </motion.div>
      </LayoutGroup>
    </SidebarWrapper>
  );
};

export default Sidebar;
