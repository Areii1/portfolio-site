import { ModalTypes } from "../../pages/index";

export const getModalBoxTopPosition = (
  pdfInFullScreen: boolean,
  modalContentType: ModalTypes,
  isMobile: boolean
) => {
  if (pdfInFullScreen && modalContentType === ModalTypes.CV) {
    return "calc(50% - 50vh)";
  } else {
    if (modalContentType === ModalTypes.VIDEO) {
      if (!isMobile) {
        return "calc(50% - 275px)";
      } else {
        return "calc(50% - 200px)";
      }
    } else {
      return "calc(50% - 400px)";
    }
  }
};

export const getModalBoxLeftPosition = (
  pdfInFullScreen: boolean,
  modalContentType: ModalTypes,
  isMobile: boolean
) => {
  if (pdfInFullScreen && modalContentType === ModalTypes.CV) {
    return "0";
  } else {
    if (modalContentType === ModalTypes.VIDEO) {
      if (!isMobile) {
        return "calc(50% - 150px)";
      } else {
        return "calc(50% - 100px)";
      }
    } else {
      return "calc(50% - 150px)";
    }
  }
};

export const getModalBoxWidth = (
  pdfInFullScreen: boolean,
  modalContentType: ModalTypes,
  isMobile: boolean
) => {
  if (pdfInFullScreen && modalContentType === ModalTypes.CV) {
    return "100vw";
  } else {
    if (modalContentType === ModalTypes.VIDEO && isMobile) {
      return "200px";
    } else {
      return "300px";
    }
  }
};

export const getModalBoxHeight = (
  pdfInFullScreen: boolean,
  modalContentType: ModalTypes,
  isMobile: boolean
) => {
  if (pdfInFullScreen && modalContentType === ModalTypes.CV) {
    return "100vh";
  } else if (!pdfInFullScreen && modalContentType === ModalTypes.CV) {
    return "800px";
  } else {
    if (!isMobile) {
      return "auto";
    } else {
      return "400px";
    }
  }
};