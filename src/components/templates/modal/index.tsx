import React from 'react';
import { ModalClass } from './classes';

export interface ModalProps {
  onToggle: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalTemplate: React.FC<ModalProps> = ({ onToggle, title, children }) => {
  return (
    <div className={ModalClass}>
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
    </div>
  );
};

export default ModalTemplate;
