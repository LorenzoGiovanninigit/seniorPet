import React from "react";
import { View, Text } from "react-native";
import email from "react-native-email";
import { sendEmail, firestore } from "./../firebase";

export default function MailSender(data) {
  console.log("Mail Sender", data);
  sendEmail(data).then((response) => {
    console.log("response:", response);
  });
  // const to = ["lorenzogiovannini19@gmail.com"];
  // email(to, {
  //   cc: ["lorenzogiovannini9@gmail.com"],
  //   subject: "richiesta assistenza",
  //   body: "scrivi qui la motivazione della richiesta",
  // }).catch(console.error);s
}
