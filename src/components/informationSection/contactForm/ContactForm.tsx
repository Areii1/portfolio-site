import React from "react";
import styled from "styled-components";
import { lan } from "../../../pages/index";

const fieldPlaceholdersFi = {
  name: "Nimi",
  email: "Sähköposti",
  subject: "Aihe",
  message: "Viesti",
};

const fieldPlaceholdersEn = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

type Props = {
  language: lan;
};

export const ContactForm = (props: Props) => {
  const [nameField, setNameField] = React.useState<string>("");
  const [emailield, setEmailField] = React.useState<string>("");
  const [subjectField, setSubjectField] = React.useState<string>("");
  const [messageField, setMessageField] = React.useState<string>("");

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    setNameField("");
    setEmailField("");
    setSubjectField("");
    setMessageField("");
    alert(
      `name ${nameField} email ${emailield} subject ${subjectField} message ${messageField}`
    );
  };

  const fieldPlaceholders =
    props.language === lan.ENGLISH ? fieldPlaceholdersEn : fieldPlaceholdersFi;

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
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <InputWrapper>
        <InputField
          type="text"
          placeholder={fieldPlaceholders.name}
          onChange={handleFieldValueChange}
          id="name"
        />
        <InputField
          type="text"
          placeholder={fieldPlaceholders.email}
          onChange={handleFieldValueChange}
          id="email"
        />
      </InputWrapper>
      <InputField
        type="text"
        placeholder={fieldPlaceholders.subject}
        onChange={handleFieldValueChange}
        id="subject"
      />
      <InputField
        type="text"
        placeholder={fieldPlaceholders.message}
        onChange={handleFieldValueChange}
        id="message"
      />
      <SubmitButton type="submit" title="submit form">
        Submit
      </SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  margin-top: 2.5rem;
`;

const InputWrapper = styled.div`
  display: flex;
`;

const InputField = styled.input`
  background-color: transparent;
  width: 15rem;
  border: none;
  border-bottom: 1px solid black;
  display: block;
`;

const SubmitButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  display: block;
  padding: 0;
`;
