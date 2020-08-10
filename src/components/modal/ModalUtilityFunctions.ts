import { ModalTypes } from "../../pages/index";

export const getModalBoxTopPosition = (
  modalContentType: ModalTypes,
  isMobile: boolean
) => {
  if (modalContentType === ModalTypes.VIDEO) {
    if (!isMobile) {
      return "calc(50% - 275px)";
    } else {
      return "calc(50% - 200px)";
    }
  }
};

export const getModalBoxLeftPosition = (
  modalContentType: ModalTypes,
  isMobile: boolean
) => {
  if (modalContentType === ModalTypes.VIDEO) {
    if (!isMobile) {
      return "calc(50% - 150px)";
    } else {
      return "calc(50% - 100px)";
    }
  }
};

export const getModalBoxWidth = (
  modalContentType: ModalTypes,
  isMobile: boolean
) => {
  if (modalContentType === ModalTypes.VIDEO && isMobile) {
    return "200px";
  } else {
    return "300px";
  }
};

export const getModalBoxHeight = (isMobile: boolean) => {
  if (!isMobile) {
    return "auto";
  } else {
    return "400px";
  }
};
