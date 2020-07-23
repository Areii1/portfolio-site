import React from "react";
import styled from "styled-components";
import { Lan, SetDialogBoxContent } from "../../../pages/index";
import { sendEmail } from "../../../apiServices/SendEmail";
import { LoadingRipple } from "../../loadingRipple/LoadingRipple";

const fieldPlaceholdersFi = {
  name: "Nimi",
  email: "Sähköposti",
  subject: "Aihe",
  message: "Viesti",
  submit: "LÄHETÄ",
  submitTitle: "lähetä tiedot",
};

const fieldPlaceholdersEn = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
  submit: "SUBMIT",
  submitTitle: "submit form",
};

const dialogsEn = {
  success: "Message sent, thank you",
  methodError: "Could not send message",
  missingFieldsError: "Required fields are missing",
};

const dialogsFi = {
  success: "Viesti lähetetty, kiitos",
  methodError: "Viestiä ei pystytty lähettämään",
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
  const [sendEmailProcess, setSendEmailProcess] = React.useState<
    SendEmailProcess
  >({ status: Status.INITIAL });

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    setSubmitClicked(true);
    const dialogs = props.language === Lan.ENGLISH ? dialogsEn : dialogsFi;
    if (messageField && emailield && subjectField && nameField) {
      try {
        setSendEmailProcess({ status: Status.LOADING });
        const sendEmailResponse = await sendEmail(
          emailield,
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
    if (emailield === "") {
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

const SubmitWrapper = styled.div`
  display: initial;
`;
