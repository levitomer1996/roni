import React, { useReducer } from "react";

const ContactFormContext = React.createContext();
const ContactFormReducer = (state, action) => {
  switch (action.type) {
    case "set_phone":
      return { ...state, phone: action.payload };
    case "set_name":
      return { ...state, name: action.payload };
    case "set_mail":
      return { ...state, mail: action.payload };
    case "set_message":
      return { ...state, message: action.payload };
    case "open_modal":
      return { ...state, isModalOpen: state.isModalOpen ? false : true };
    default:
      break;
  }
};

export const ContactFormProvider = ({ children }) => {
  //d = dispatch
  const [contactFormState, d] = useReducer(ContactFormReducer, {
    isModalOpen: false,
    name: null,
    mail: null,
    phone: null,
    message: null,
  });
  const dispatch = (type, payload) => {
    d({ type, payload });
  };
  const setPhone = (data) => {
    dispatch("set_phone", data);
    return;
  };
  const setName = (data) => {
    dispatch("set_name", data);
    return;
  };
  const setMail = (data) => {
    dispatch("set_mail", data);
  };

  const setMessage = (data) => {
    dispatch("set_message", data);
  };
  const openModal = () => {
    dispatch("open_modal");
  };

  return (
    <ContactFormContext.Provider
      value={{
        contactFormState,
        setName,
        setMessage,
        setMail,
        setPhone,
        openModal,
      }}
    >
      {children}
    </ContactFormContext.Provider>
  );
};
export default ContactFormContext;
