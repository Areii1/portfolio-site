export const getModalBoxTopPosition = (isMobile: boolean) => {
  if (!isMobile) {
    return "calc(50% - 275px)";
  } else {
    return "calc(50% - 200px)";
  }
};

export const getModalBoxLeftPosition = (isMobile: boolean) => {
  if (!isMobile) {
    return "calc(50% - 150px)";
  } else {
    return "calc(50% - 100px)";
  }
};

export const getModalBoxWidth = (
  isMobile: boolean
) => {
  if (isMobile) {
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
