import axios from "axios";
import { DataStore } from "@aws-amplify/datastore";
import { Message } from "./models";

const webhookURL = process.env.WEB_HOOK_URL
const MessageForm = document.getElementById("message-form");
const successMessage = document.getElementById("success-message");
const errorMessage = document.getElementById("error-message");

MessageForm.addEventListener("submit", async () => {
  const name = document.querySelector('[name = "name"]').value;
  const email = document.querySelector('[name = "email"]').value;
  const site = document.querySelector('[name = "url"]').value;
  const message = document.querySelector('[name = "textarea"]').value;

  const payload = {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `You have a new message:\n\n Name: *<mailto:${email}|${name}>*`,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `Email: ${email}`,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `Website: <${site}>`,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `Message: \n\n${message}`,
        },
      },
      {
        type: "divider",
      },
    ],
  };

  try {
    const sendMessage = await DataStore.save(
      new Message({ name, email, site, message })
    );
    if (sendMessage) {
    await axios.post(webhookURL,JSON.stringify(payload));
    successMessage.removeAttribute("hidden")
    errorMessage.setAttribute("hidden", "false");  
    }
  } catch (error) {
    console.log(error);
    errorMessage.removeAttribute("hidden"); 
    successMessage.setAttribute("hidden", "false"); 

  }
});
