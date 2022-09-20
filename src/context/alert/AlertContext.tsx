import React, { createContext, useReducer } from 'react';
import alertReducer, { AlertActionTypes } from './AlertReducer';

export interface IAlert {
  msg: string;
  type: string;
}

export type AlertContextType = {
  alert: IAlert | null;
  setAlert: (msg: string, type: string) => void;
};

const AlertCtxState: AlertContextType = {
  alert: null,
  setAlert: () => {},
};

const AlertContext = createContext(AlertCtxState);

// interface Props {
//   children: React.ReactNode;
// }

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set an alert
  const setAlert = (msg: string, type: string) => {
    dispatch({ type: AlertActionTypes.SET_ALERT, payload: { msg, type } });

    setTimeout(() => {
      dispatch({ type: AlertActionTypes.REMOVE_ALERT });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
