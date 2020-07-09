import React from "react";
import styled from "styled-components";

export const ContactForm = (props: any) => {
  const [nameField, setNameField] = React.useState<string>("");
  const [emailield, setEmailField] = React.useState<string>("");
  const [subjectField, setSubjectField] = React.useState<string>("");
  const [messageField, setMessageField] = React.useState<string>("");

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    alert(
      `name ${nameField} email ${emailield} subject ${subjectField} message ${messageField}`
    );
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
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <InputWrapper>
        <InputField
          type="text"
          placeholder="name"
          onChange={handleFieldValueChange}
          id="name"
        />
        <InputField
          type="text"
          placeholder="email"
          onChange={handleFieldValueChange}
          id="email"
        />
      </InputWrapper>
      <InputField
        type="text"
        placeholder="subject"
        onChange={handleFieldValueChange}
        id="subject"
      />
      <InputField
        type="text"
        placeholder="message"
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
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
`;

const InputField = styled.input`
  background-color: transparent;
  width: 15rem;
  border: none;
  border-bottom: 1px solid black;
`;

const SubmitButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;
