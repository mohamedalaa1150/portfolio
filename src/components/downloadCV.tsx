import personalInfo from "../data/personalInfo.json";

export const downloadCV = () => {
  const link = document.createElement("a");
  link.href = personalInfo.cvDownloadUrl; // المسار من public
  link.download = "Mohamed Alaa CV.pdf"; // اسم الملف عند التحميل
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
