// Load main.js dynamically so this file can run as a normal (non-module) script.
// If you prefer to keep static imports, update your HTML to use: <script type="module" src="public/js/login.js"></script>
import("./main.js").catch(() => {
  /* ignore if module not available */
});

// import main.js

// Contas de usuário simuladas
const users = [
  { email: "paulovitor.santos@ucsal.edu.br", password: "ucsal123" },
  { email: "carlos.marques@ucsal.edu.br", password: "ucsal123" },
  { email: "fabriciomaicon.santos@ucsal.edu.br", password: "ucsal123" },
  { email: "joaogustavo.teixeira@ucsal.edu.br", password: "ucsal123" },
  { email: "elton.figueiredo@pro.ucsal.br", password: "ucsal123" },
];

// Form #form-signin

const form = document.getElementById("form-signin");
form.addEventListener("submit", async function (e) {
  console.log("Form submitted");
  e.preventDefault();

  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword").value;

  spinner.classList.remove("d-none");
  spinner.classList.add("d-block");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  spinner.classList.remove("d-block");
  spinner.classList.add("d-none");

  // Verifica se o email e senha correspondem a um usuário na lista
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    // Login bem-sucedido
    showSuccess("Login realizado com sucesso! Redirecionando...");
    setTimeout(() => {
      window.location.href = "index";
    }, 1500);
  } else {
    // Login falhou
    showError(
      "Email ou senha inválidos. Por favor, verifique suas credenciais."
    );
    console.log("Email ou senha inválidos");
  }
});
