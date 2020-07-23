import React from "react";
import styled from "styled-components";
import { Lan, SetDialogBoxContent } from "../../../pages/index";
import { sendEmail } from "../../../apiServices/SendEmail";

const fieldPlaceholdersFi = {
  name: "Nimi",
  email: "Sähköposti",
  subject: "Aihe",
  message: "Viesti",
  submit: "LÄHETÄ",
};

const fieldPlaceholdersEn = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
  submit: "SUBMIT",
};

const dialogsEn = {
  success: "Message sent, thank you",
  error: "Could not send message",
};

const dialogsFi = {
  success: "Viesti lähetetty, kiitos",
  error: "Viestiä ei pystytty lähettämään",
};

type Props = {
  language: Lan;
  setDialogBoxContent: SetDialogBoxContent;
};

export const ContactForm = (props: Props) => {
  const [nameField, setNameField] = React.useState<string>("");
  const [emailield, setEmailField] = React.useState<string>("");
  const [subjectField, setSubjectField] = React.useState<string>("");
  const [messageField, setMessageField] = React.useState<string>("");
  const [missingFields, setMissingFields] = React.useState<Array<string>>([
    "name",
    "email",
    "subject",
    "message",
  ]);
  const [submitClicked, setSubmitClicked] = React.useState<boolean>(false);

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    setSubmitClicked(false);
    const dialogs = props.language === Lan.ENGLISH ? dialogsEn : dialogsFi;
    if (messageField && emailield && subjectField && nameField) {
      try {
        const sendEmailResponse = await sendEmail(
          emailield,
          nameField,
          subjectField,
          messageField
        );
        const dialogBoxContent = {
          isError: false,
          message: dialogs.success,
        };
        props.setDialogBoxContent(dialogBoxContent);
        console.log(sendEmailResponse, "sendEmailResponse");
      } catch (sendEmailError) {
        const dialogBoxContent = {
          isError: true,
          message: dialogs.error,
        };
        props.setDialogBoxContent(dialogBoxContent);
        console.log(sendEmailError, "sendEmailError");
      }
    }
  };

  const updateMissingFields = () => {
    let updatedMissingFields: Array<string> = [];
    if (nameField === "") {
      updatedMissingFields = ["name"];
    }
    if (emailield === "") {
      updatedMissingFields = ["email"];
    }
    if (subjectField === "") {
      updatedMissingFields = ["subject"];
    }
    if (messageField === "") {
      updatedMissingFields = ["message"];
    }
    setMissingFields(updatedMissingFields);
  };

  const handleFieldValueChange = (event: any) => {
    switch (event.target.id) {
      case "name": {
        setNameField(event.target.value);
        break;
      }
      case "email": {
        setEmailField(event.target.value);
        break;
      }
      case "subject": {
        setSubjectField(event.target.value);
        break;
      }
      case "message": {
        setMessageField(event.target.value);
        break;
      }
    }
    updateMissingFields();
  };

  const fieldPlaceholders =
    props.language === Lan.ENGLISH ? fieldPlaceholdersEn : fieldPlaceholdersFi;

  return (
    <Form onSubmit={handleFormSubmit}>
      <InputsWrapper>
        <InputField
          type="text"
          placeholder={fieldPlaceholders.name}
          onChange={handleFieldValueChange}
          id="name"
          showError={
            submitClicked && missingFields.some(field => field === "name")
          }
        />
        <InputField
          type="text"
          placeholder={fieldPlaceholders.email}
          onChange={handleFieldValueChange}
          id="email"
          showError={
            submitClicked && missingFields.some(field => field === "email")
          }
        />
      </InputsWrapper>
      <InputField
        type="text"
        placeholder={fieldPlaceholders.subject}
        onChange={handleFieldValueChange}
        id="subject"
        showError={
          submitClicked && missingFields.some(field => field === "subject")
        }
      />
      <MessageArea
        placeholder={fieldPlaceholders.message}
        onChange={handleFieldValueChange}
        id="message"
        showError={
          submitClicked && missingFields.some(field => field === "message")
        }
      />
      <SubmitButton title="submit form" type="submit">
        <ButtonText>{fieldPlaceholders.submit}</ButtonText>
      </SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  margin-top: 2.5rem;
`;

const InputsWrapper = styled.div`
  display: flex;
`;

type FieldProps = {
  showError: boolean;
};

const InputField = styled.input`
  margin: 1rem 1rem 0 0;
  background-color: transparent;
  width: 15rem;
  height: 2rem;
  border: none;
  border-bottom: ${(props: FieldProps) =>
    props.showError ? "1px solid red" : "1px solid black"};
  display: block;
`;

const MessageArea = styled.textarea`
  margin-top: 3rem;
  width: 31rem;
  height: 5rem;
  background-color: lightgray;
  border: ${(props: FieldProps) =>
    props.showError ? "1px solid red" : "1px solid black"};
`;

const ButtonText = styled.h3`
  margin: 0;
  color: white;
`;

const SubmitButton = styled.button`
  margin-top: 1rem;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  display: block;
  padding: 0;
`;
