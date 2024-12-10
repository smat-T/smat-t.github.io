// script.js
document.getElementById("generateBtn").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
  
    const preview = `
      <h2>${name}</h2>
      <p>Email: ${email}</p>
      <h3>Education</h3>
      <p>${education.replace(/\n/g, "<br>")}</p>
      <h3>Work Experience</h3>
      <p>${experience.replace(/\n/g, "<br>")}</p>
    `;
  
    document.getElementById("cvPreview").innerHTML = preview;
  });
  document.getElementById("generateBtn").addEventListener("click", function () {
    const element = document.getElementById("cvPreview");
    const options = {
      margin: 1,
      filename: 'MyCV.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
  
    html2pdf().set(options).from(element).save();
  });
    