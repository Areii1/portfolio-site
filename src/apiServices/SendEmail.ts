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
  try {
    const sendEmailResponse = await axios({
      method: "post",
      url: sendEmailEndpoint,
      data: sendEmailParams,
      headers: { Authorization: "sad" },
    });
    return { isError: false, response: sendEmailResponse };
  } catch (sendEmailError) {
    console.log(sendEmailError, "sendEmailResponse");
    return { isError: true, response: sendEmailError };
  }
};
