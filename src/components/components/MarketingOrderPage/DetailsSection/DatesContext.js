import { createContext, useContext, useState } from 'react';

const DateContext = createContext();

const DateProvider = ({ children }) => {
  const [deliveryDate, setDeliveryDate] = useState(null);
  const [giveawayDate, setGiveawayDate] = useState(null);

  return (
    <DateContext.Provider
      value={{
        deliveryDate,
        setDeliveryDate,
        giveawayDate,
        setGiveawayDate,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

const useDate = () => {
  const context = useContext(DateContext);

  if (!context) {
    throw new Error('useDate must be used within a DateProvider');
  }

  const { deliveryDate, setDeliveryDate, giveawayDate, setGiveawayDate } =
    context;

  return {
    deliveryDate,
    setDeliveryDate,
    giveawayDate,
    setGiveawayDate,
  };
};

export { DateProvider, useDate };
