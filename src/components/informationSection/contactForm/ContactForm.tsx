import React from "react";
import styled, { keyframes } from "styled-components";
import { Lan, SetDialogBoxContent } from "../../../pages/index";
import { sendEmail } from "../../../apiServices/SendEmail";
import { LoadingRipple } from "../../icons/loadingRipple/LoadingRipple";
import {
  fieldPlaceholdersFi,
  fieldPlaceholdersEn,
  dialogsEn,
  dialogsFi,
} from "./ContactFormLabels";

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
  const [erroredFields, setErroredFields] = React.useState<Array<string>>([
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
      if (validateEmail(emailField)) {
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
          message: dialogs.emailFormatError,
        };
        props.setDialogBoxContent(dialogBoxContent);
        updateErroredFields(true);
      }
    } else {
      const dialogBoxContent = {
        isError: true,
        message: dialogs.erroredFieldsError,
      };
      props.setDialogBoxContent(dialogBoxContent);
    }
  };

  const validateEmail = (email: string) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const updateErroredFields = (emailErrored?: boolean) => {
    let updatederroredFields: Array<string> = [];
    if (nameField === "") {
      updatederroredFields = ["name"];
    }
    if (emailField === "" || emailErrored) {
      updatederroredFields = [...updatederroredFields, "email"];
    }
    if (subjectField === "") {
      updatederroredFields = [...updatederroredFields, "subject"];
    }
    if (messageField === "") {
      updatederroredFields = [...updatederroredFields, "message"];
    }
    setErroredFields(updatederroredFields);
  };

  const resetFieldsState = () => {
    setNameField("");
    setEmailField("");
    setSubjectField("");
    setMessageField("");
    setErroredFields(["name", "email", "subject", "message"]);
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
    updateErroredFields();
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
            submitClicked && erroredFields.some(field => field === "name")
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
            submitClicked && erroredFields.some(field => field === "email")
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
          submitClicked && erroredFields.some(field => field === "subject")
        }
        isSubject
        value={subjectField}
      />
      <MessageArea
        placeholder={fieldPlaceholders.message}
        onChange={handleFieldValueChange}
        id="message"
        showError={
          submitClicked && erroredFields.some(field => field === "message")
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
  background-color: lightgray;
  width: ${(props: InputFieldProps) =>
    props.isSubject
      ? "calc(var(--space-14) + var(--space-4))"
      : "var(--space-12)"};
  height: var(--space-6);
  border: ${(props: FieldProps) =>
    props.showError ? "1px solid red" : "1px solid black"};
  display: block;
  padding: var(--space-2);
  @media (max-width: 800px) {
    width: var(--space-11);
    margin: var(--space-4) 0 0 0;
  }
  :focus {
    ::placeholder {
      color: var(--secondary-headline-color);
    }
  }
`;

const MessageArea = styled.textarea`
  font-family: "Poppins";
  padding: var(--space-2);
  margin-top: var(--space-4);
  width: calc(var(--space-14) + var(--space-4));
  height: var(--space-9);
  background-color: lightgray;
  border: ${(props: FieldProps) =>
    props.showError ? "1px solid red" : "1px solid black"};
  resize: none;
  :focus {
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
    text-shadow: 1px 1px 3px black;
  }
  to {
    color: var(--secondary-headline-color);
    text-shadow: none;
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
  background-color: var(--information-section-bg-color);
  padding: var(--space-2) var(--space-4);
  border: none;
  color: white;
  cursor: pointer;
  display: block;
`;

const SubmitWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
