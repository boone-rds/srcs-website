import { type ReactNode, useState } from 'react';
import ContactModal from './ContactModal';
import { ContactModalContext } from './ContactModalContext';

type ContactModalProviderProps = {
  children: ReactNode;
};

function ContactModalProvider({ children }: ContactModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactModal = () => {
    setIsOpen(true);
  };

  const closeContactModal = () => {
    setIsOpen(false);
  };

  return (
    <ContactModalContext.Provider
      value={{
        openContactModal,
        closeContactModal,
      }}
    >
      {children}

      <ContactModal isOpen={isOpen} onClose={closeContactModal} />
    </ContactModalContext.Provider>
  );
}

export default ContactModalProvider;
