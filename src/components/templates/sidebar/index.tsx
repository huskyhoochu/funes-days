import React, { useEffect } from 'react';
import { LayoutGroup, motion, usePresence } from 'framer-motion';
import useTheme from '@/hooks/useTheme';
import { SidebarWrapper } from './styled';

interface Props {
  onToggle: () => void;
  children: React.ReactNode;
}

const Sidebar: React.FC<Props> = ({ onToggle, children }) => {
  const [ThemeClass] = useTheme();
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 300);
  }, [isPresent]);

  return (
    <SidebarWrapper theme={ThemeClass}>
      <LayoutGroup>
        <motion.div
          layout={true}
          className={`sidebar-background ${isPresent ? 'active' : 'inactive'}`}
          onClick={onToggle}
        />
        <motion.div
          layout={true}
          className={`sidebar-body ${isPresent ? 'active' : 'inactive'}`}
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
