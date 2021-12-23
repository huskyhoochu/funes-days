import React from 'react';
import { AnimatePresence } from 'framer-motion';
import ModalTemplate from '@/components/templates/modal';
import ScreenForm from '@/components/atoms/optionModal/screenForm';
import ThemeForm from '@/components/atoms/optionModal/themeForm';

interface Props {
  isOpen: boolean;
  onToggle: () => void;
}

const OptionModal: React.FC<Props> = ({ isOpen, onToggle }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalTemplate onToggle={onToggle} title="옵션">
          <div>
            <ScreenForm />
            <ThemeForm />
          </div>
        </ModalTemplate>
      )}
    </AnimatePresence>
  );
};

export default OptionModal;
