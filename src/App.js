import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';

import { useState } from "react";
import {Contact, Navbar, Header, Feature01, Feature02, Feature03, Feature04, FAQ, Feature05, Images, Feature06, Carousel, Testimonials, ContactInfo, UsefulLinks, Footer} from "./ui-components";
import { DataStore } from '@aws-amplify/datastore';
import { Message } from './models';

const initialState = {name: "", email: "", site: "", message: ""}

function App() {
  const [formData, setFormData] = useState(initialState);
  
  // Create message
  const handleClick = async (e) => {
  e.preventDefault();
  console.log({...formData});
     try {
      await DataStore.save( 
        new Message({...formData
      })
    );
     } catch (error) {
       console.log(error);
     }
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  // override component 
  const ContactOverrides = {
    "Name": {
      onChange:handleChange,
      
    },
    "Email": {
      onChange:handleChange,
    },
    "YourSite": {
      onChange:handleChange,
    },
    "Message": {
      onChange: handleChange,
  
    },
    "Rectangle2276": {
      onClick: handleClick
    }
  }

  return (
    <div className="App" style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Navbar/>
      <Header/>
      <Feature01/>
      <Feature02/>
      <Feature03/>
      <Feature04/>
      <FAQ/>
      <Feature05/>
      <Images/>
      <Feature06/>
      <Carousel/>
      <Testimonials/>
      <ContactInfo/>
      <Contact // @ts-ignore
      overrides={ContactOverrides}style  = {{margin: "auto"}}/>

      <UsefulLinks/>
      <Footer/>
    </div>
  );
}

export default withAuthenticator(App);


