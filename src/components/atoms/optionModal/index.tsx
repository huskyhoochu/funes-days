import React from 'react';
import { AnimatePresence } from 'framer-motion';
import ModalTemplate from '@/components/templates/modal';

interface Props {
  isOpen: boolean;
  onToggle: () => void;
}

const OptionModal: React.FC<Props> = ({ isOpen, onToggle }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalTemplate onToggle={onToggle} title="옵션">
          <div>hi</div>
        </ModalTemplate>
      )}
    </AnimatePresence>
  );
};

export default OptionModal;
