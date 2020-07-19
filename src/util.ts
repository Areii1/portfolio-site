export const downloadFile = (fileName: string, fileUrl: string) => {
  // eslint-disable-next-line
  const newPromise = new Promise((resolve, _) => {
    fetch(fileUrl)
      .then(res => res.blob())
      .then(blob => {
        const a = document.createElement("a");
        a.style.display = "none";
        document.body.appendChild(a);
        a.href = window.URL.createObjectURL(blob);
        a.setAttribute("download", fileName);
        a.click();
        window.URL.revokeObjectURL(a.href);
        document.body.removeChild(a);
        resolve("done");
      });
  });
  return newPromise;
};
