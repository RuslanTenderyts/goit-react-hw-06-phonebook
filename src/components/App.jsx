import { Layout } from "components/Layout/Layout";
import { GlobalStyle } from "./GlobalStyle"
import { ContactFormik } from "./ContactForm/ContactFormik";
import ContactList  from "./ContactList/ContactList" ;
import Filter from "./Filter/Filter"


export const App = () => {
  return (
      <Layout>
        <h1> PhoneBook </h1>
        <ContactFormik />
        <h2> Contacts </h2>
        <Filter  />
        <ContactList/>
        <GlobalStyle/>
      </Layout>
    
    
  );
};
