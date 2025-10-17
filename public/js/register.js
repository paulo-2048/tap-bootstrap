// Load main.js dynamically so this file can run as a normal (non-module) script.
// If you prefer to keep static imports, update your HTML to use: <script type="module" src="public/js/login.js"></script>
import("./main.js").catch(() => {
  /* ignore if module not available */
});

// import main.js

// Contas de usuário simuladas
const dominiosPermitidos = ["ucsal.edu.br", "pro.ucsal.br"];
let suggestWarnCounter = 0;

// Form #form-signin
const form = document.getElementById("form-signin");
form.addEventListener("submit", async function (e) {
  console.log("Form submitted");
  e.preventDefault();

  const name = document.getElementById("inputName").value;
  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword").value;

  spinner.classList.remove("d-none");
  spinner.classList.add("d-block");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  spinner.classList.remove("d-block");
  spinner.classList.add("d-none");

  //  Validação dos campos
  if (!name || !email || !password) {
    showError("Por favor, preencha todos os campos.");
    return;
  }

  const emailParts = email.split("@");
  if (emailParts.length !== 2 || !dominiosPermitidos.includes(emailParts[1])) {
    showError(
      "Email inválido. Use um email institucional (@ucsal.edu.br ou @pro.ucsal.br)."
    );
    return;
  }

  if (name.split(" ").length < 2 && suggestWarnCounter < 1) {
    suggestWarnCounter++;
    showWarning(
      "Por favor, prefira inserir seu nome completo. Esta é apenas uma sugestão, caso queira ignorar, submeta o formulário novamente."
    );
    return;
  }

  // Registro bem-sucedido
  showSuccess("Registro realizado com sucesso! Redirecionando...");
  setTimeout(() => {
    window.location.href = "index";
  }, 1500);
});
