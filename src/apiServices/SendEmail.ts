import { sendEmailEndpoint } from "../../config";
import axios from "axios";

export const sendEmail = async (
  email: string,
  name: string,
  subject: string,
  message: string
) => {
  const sendEmailParams = {
    email,
    name,
    subject,
    message,
  };
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: sendEmailEndpoint,
      data: sendEmailParams,
    })
      .then(result => resolve(result))
      .catch(error => reject(error));
  });
};
