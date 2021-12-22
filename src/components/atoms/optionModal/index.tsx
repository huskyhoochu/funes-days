import React from 'react';
import ModalTemplate from '@/components/templates/modal';
import { AnimatePresence, useCycle } from 'framer-motion';

const OptionModal: React.FC = () => {
  const [isOpen, setIsOpen] = useCycle<boolean>(false, true);

  const toggleModal = () => {
    setIsOpen();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalTemplate onToggle={toggleModal} title="옵션">
          <div>hi</div>
        </ModalTemplate>
      )}
    </AnimatePresence>
  );
};

export default OptionModal;
