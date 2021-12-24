import React from 'react';
import { ModalWrapper } from './styled';
import { NormalShowingVariants } from '@/framer/variants';
import useTheme from '@/hooks/useTheme';

interface Props {
  onToggle: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalTemplate: React.FC<Props> = ({ onToggle, title, children }) => {
  const [ThemeClass] = useTheme();

  return (
    <ModalWrapper
      themeClass={ThemeClass}
      variants={NormalShowingVariants}
      initial="hide"
      animate="show"
      exit="hide"
    >
      <div className="modal-background" onClick={onToggle} />
      <div className="modal-body">
        <div className="title-group">
          <h4>{title}</h4>
          <button onClick={onToggle}>
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
        <div className="content">{children}</div>
      </div>
    </ModalWrapper>
  );
};

export default ModalTemplate;
