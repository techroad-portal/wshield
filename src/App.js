import "./App.css";
import { useState } from "react";
import { Contact, Navbar, Header, Feature01, Feature02, Feature03, Feature04, FAQ, Feature05, Images, Feature06, Carousel, Testimonials, ContactInfo, UsefulLinks, Footer,} from "./ui-components";
import axios from "axios";
import { DataStore } from "@aws-amplify/datastore";
import { Message } from "./models";

const initialState = { name: "", email: "", site: "", message: "" };

function App() {
  const [formData, setFormData] = useState(initialState);
  const webhookURL ="https://hooks.slack.com/services/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";

  
  const payload = {
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `You have a new message:\n\n*<mailto:${formData.email}|${formData.name}>*\n\n`
        }
      },
      {
        "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": `${formData.message}`
          }
          
      },
      
      {
        "type": "divider"
      },
    ],
  };
  // Create message
  const handleClick = async (e) => {
    
    e.preventDefault();
    try {
      const storeData = await DataStore.save(new Message({ ...formData }));
      if (storeData) {
        const postMessage = await axios.post(webhookURL, JSON.stringify(payload));
        console.log(postMessage);
      }else {
        console.log(storeData);
      }
      console.log(postMessage);

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // override component
  const ContactOverrides = {
    Name: {
      onChange: handleChange,
    },
    Email: {
      onChange: handleChange,
    },
    YourSite: {
      onChange: handleChange,
    },
    Message: {
      onChange: handleChange,
    },
    Rectangle2276: {
      onClick: handleClick,
    },
  };

  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Navbar />
      <Header />
      <Feature01 />
      <Feature02 />
      <Feature03 />
      <Feature04 />
      <FAQ />
      <Feature05 />
      <Images />
      <Feature06 />
      <Carousel />
      <Testimonials />
      <ContactInfo />
      <Contact // @ts-ignore
        overrides={ContactOverrides}
        style={{ margin: "auto" }}
      />
      <UsefulLinks />
      <Footer />
    </div>
  );
}

export default App;
