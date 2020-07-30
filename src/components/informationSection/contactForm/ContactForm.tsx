import React from "react";
import styled, { keyframes } from "styled-components";
import { Lan, SetDialogBoxContent } from "../../../pages/index";
import { sendEmail } from "../../../apiServices/SendEmail";
import { LoadingRipple } from "../../loadingRipple/LoadingRipple";

const fieldPlaceholdersFi = {
  name: "Koko nimi",
  email: "Sähköposti",
  subject: "Aihe",
  message: "Viesti",
  submit: "LÄHETÄ",
  submitTitle: "lähetä tiedot",
};

const fieldPlaceholdersEn = {
  name: "Full name",
  email: "Email",
  subject: "Subject",
  message: "Message",
  submit: "SUBMIT",
  submitTitle: "submit form",
};

const dialogsEn = {
  success: "Message sent, thank you",
  methodError: "Something went wrong sending the message",
  missingFieldsError: "Required fields are missing",
};

const dialogsFi = {
  success: "Viesti lähetetty, kiitos",
  methodError: "Jotain meni pieleen viestiä lähettäessä",
  missingFieldsError: "Pakollisia kenttiä puuttuu",
};

type Props = {
  language: Lan;
  setDialogBoxContent: SetDialogBoxContent;
};

enum Status {
  INITIAL,
  LOADING,
  SUCCESS,
  ERROR,
}

type SendEmailProcess =
  | { status: Status.INITIAL }
  | { status: Status.LOADING }
  | { status: Status.SUCCESS; data: any }
  | { status: Status.ERROR; error: any };

export const ContactForm = (props: Props) => {
  const [nameField, setNameField] = React.useState<string>("");
  const [emailField, setEmailField] = React.useState<string>("");
  const [subjectField, setSubjectField] = React.useState<string>("");
  const [messageField, setMessageField] = React.useState<string>("");
  const [missingFields, setMissingFields] = React.useState<Array<string>>([
    "name",
    "email",
    "subject",
    "message",
  ]);
  const [submitClicked, setSubmitClicked] = React.useState<boolean>(false);
  const [sendEmailProcess, setSendEmailProcess] = React.useState<
    SendEmailProcess
  >({ status: Status.INITIAL });

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    setSubmitClicked(true);
    const dialogs = props.language === Lan.ENGLISH ? dialogsEn : dialogsFi;
    if (messageField && emailField && subjectField && nameField) {
      try {
        setSendEmailProcess({ status: Status.LOADING });
        const sendEmailResponse = await sendEmail(
          emailField,
          nameField,
          subjectField,
          messageField
        );
        setSendEmailProcess({
          status: Status.SUCCESS,
          data: sendEmailResponse,
        });
        const dialogBoxContent = {
          isError: false,
          message: dialogs.success,
        };
        props.setDialogBoxContent(dialogBoxContent);
        resetFieldsState();
      } catch (sendEmailError) {
        setSendEmailProcess({
          status: Status.ERROR,
          error: sendEmailError,
        });
        const dialogBoxContent = {
          isError: true,
          message: dialogs.methodError,
        };
        props.setDialogBoxContent(dialogBoxContent);
        resetFieldsState();
      }
    } else {
      const dialogBoxContent = {
        isError: true,
        message: dialogs.missingFieldsError,
      };
      props.setDialogBoxContent(dialogBoxContent);
    }
  };

  const updateMissingFields = () => {
    let updatedMissingFields: Array<string> = [];
    if (nameField === "") {
      updatedMissingFields = ["name"];
    }
    if (emailField === "") {
      updatedMissingFields = [...updatedMissingFields, "email"];
    }
    if (subjectField === "") {
      updatedMissingFields = [...updatedMissingFields, "subject"];
    }
    if (messageField === "") {
      updatedMissingFields = [...updatedMissingFields, "message"];
    }
    setMissingFields(updatedMissingFields);
  };

  const resetFieldsState = () => {
    setNameField("");
    setEmailField("");
    setSubjectField("");
    setMessageField("");
    setMissingFields(["name", "email", "subject", "message"]);
    setSubmitClicked(false);
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
          isSubject={false}
          value={nameField}
        />
        <InputField
          type="text"
          placeholder={fieldPlaceholders.email}
          onChange={handleFieldValueChange}
          id="email"
          showError={
            submitClicked && missingFields.some(field => field === "email")
          }
          isSubject={false}
          value={emailField}
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
        isSubject
        value={subjectField}
      />
      <MessageArea
        placeholder={fieldPlaceholders.message}
        onChange={handleFieldValueChange}
        id="message"
        showError={
          submitClicked && missingFields.some(field => field === "message")
        }
        value={messageField}
      />
      <SubmitWrapper>
        {sendEmailProcess.status === Status.LOADING && <LoadingRipple />}
        {sendEmailProcess.status !== Status.LOADING && (
          <SubmitButton title={fieldPlaceholders.submitTitle} type="submit">
            <ButtonText>{fieldPlaceholders.submit}</ButtonText>
          </SubmitButton>
        )}
      </SubmitWrapper>
    </Form>
  );
};

const Form = styled.form`
  margin-top: var(--space-6);
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const InputsWrapper = styled.div`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

type FieldProps = {
  showError: boolean;
};

type InputFieldProps = {
  showError: boolean;
  isSubject: boolean;
};

const InputField = styled.input`
  font-family: "Poppins";
  margin: var(--space-4) var(--space-4) 0 0;
  background-color: transparent;
  width: ${(props: InputFieldProps) =>
    props.isSubject
      ? "calc(var(--space-14) + var(--space-4))"
      : "var(--space-12)"};
  height: var(--space-6);
  border: none;
  border-bottom: ${(props: FieldProps) =>
    props.showError ? "1px solid red" : "1px solid black"};
  display: block;
  :hover {
    ::placeholder {
      color: var(--secondary-headline-color);
    }
  }
  @media (max-width: 800px) {
    width: var(--space-11);
    margin: var(--space-4) 0 0 0;
  }
`;

const MessageArea = styled.textarea`
  font-family: "Poppins";
  padding: var(--space-4);
  margin-top: var(--space-7);
  width: calc(var(--space-14) + var(--space-4));
  height: var(--space-9);
  background-color: lightgray;
  border: ${(props: FieldProps) =>
    props.showError ? "1px solid red" : "1px solid black"};
  resize: none;
  :hover {
    ::placeholder {
      color: var(--secondary-headline-color);
    }
  }
  @media (max-width: 800px) {
    width: var(--space-11);
  }
`;

const changeColor = keyframes`
  from {
    color: white;
  }
  to {
    color: var(--secondary-headline-color);
  }
`;

const ButtonText = styled.h3`
  margin: 0;
  color: white;
  font-size: var(--font-size-5);
  font-weight: 700;
  :hover {
    animation-name: ${changeColor};
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
  }
`;

const SubmitButton = styled.button`
  margin-top: var(--space-4);
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  display: block;
  padding: 0;
`;

const SubmitWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
