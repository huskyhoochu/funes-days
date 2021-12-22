import React from 'react';
import { motion } from 'framer-motion';
import { ModalClass } from './classes';
import { NormalShowingVariants } from '@/framer/variants';

export interface ModalProps {
  onToggle: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalTemplate: React.FC<ModalProps> = ({ onToggle, title, children }) => {
  return (
    <motion.div
      className={ModalClass}
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
