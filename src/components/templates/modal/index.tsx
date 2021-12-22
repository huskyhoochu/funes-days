import React from 'react';
import { motion } from 'framer-motion';
import { ModalClass } from './classes';
import { NormalShowingVariants } from '@/framer/variants';
import useTheme from '@/hooks/useTheme';

interface Props {
  onToggle: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalTemplate: React.FC<Props> = ({ onToggle, title, children }) => {
  const ThemeClass = useTheme();

  return (
    <motion.div
      className={ModalClass(ThemeClass)}
      variants={NormalShowingVariants}
      initial="hide"
      animate="show"
      exit="hide"
    >
      <div className="modal-background" />
      <div className="modal-body">
        <div className="title-group">
          <h4>{title}</h4>
          <button onClick={onToggle}>
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
        <div className="content">{children}</div>
      </div>
    </motion.div>
  );
};

export default ModalTemplate;
