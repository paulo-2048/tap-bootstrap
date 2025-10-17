document.addEventListener("DOMContentLoaded", function () {
  console.log("Bootstrap Webapp initialized");

  // Add smooth scrolling to all links
  addSmoothScrolling();

  // Initialize toast container
  initializeToastContainer();
});

function addSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#" && href !== "#!") {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });
}

/**
 * Initialize the toast container if it doesn't exist
 */
function initializeToastContainer() {
  if (!document.getElementById("toast-container")) {
    const container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container position-fixed top-0 end-0 p-3";
    container.style.zIndex = "9999";
    document.body.appendChild(container);
  }
}

/**
 * Show a toast notification
 * @param {string} message - The message to display
 * @param {string} type - The type of toast (danger, warning, success, info, primary)
 * @param {number} delay - Auto-hide delay in milliseconds (default: 5000)
 */
function showToast(message, type = "info", delay = 5000) {
  // Initialize container if not exists
  initializeToastContainer();

  const container = document.getElementById("toast-container");
  const toastId = `toast-${Date.now()}`;

  // Map type to Bootstrap color classes and icons
  const typeConfig = {
    danger: {
      bgClass: "bg-danger",
      textClass: "text-white",
      icon: "❌",
      title: "Erro",
    },
    warning: {
      bgClass: "bg-warning",
      textClass: "text-dark",
      icon: "⚠️",
      title: "Aviso",
    },
    success: {
      bgClass: "bg-success",
      textClass: "text-white",
      icon: "✓",
      title: "Sucesso",
    },
    info: {
      bgClass: "bg-info",
      textClass: "text-white",
      icon: "ℹ️",
      title: "Informação",
    },
    primary: {
      bgClass: "bg-primary",
      textClass: "text-white",
      icon: "📢",
      title: "Notificação",
    },
  };

  const config = typeConfig[type] || typeConfig.info;

  // Create toast element
  const toastElement = document.createElement("div");
  toastElement.id = toastId;
  toastElement.className = `toast align-items-center ${config.bgClass} ${config.textClass} border-0`;
  toastElement.setAttribute("role", "alert");
  toastElement.setAttribute("aria-live", "assertive");
  toastElement.setAttribute("aria-atomic", "true");
  toastElement.setAttribute("data-bs-delay", delay.toString());

  toastElement.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">
        <strong>${config.icon} ${config.title}:</strong> ${message}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;

  // Add toast to container
  container.appendChild(toastElement);

  // Initialize and show the toast
  const bsToast = new bootstrap.Toast(toastElement, {
    autohide: true,
    delay: delay,
  });

  // Remove toast element from DOM after it's hidden
  toastElement.addEventListener("hidden.bs.toast", function () {
    toastElement.remove();
  });

  bsToast.show();

  return bsToast;
}

/**
 * Show error toast
 * @param {string} message - The error message
 */
function showError(message) {
  return showToast(message, "danger", 6000);
}

/**
 * Show warning toast
 * @param {string} message - The warning message
 */
function showWarning(message) {
  return showToast(message, "warning", 7000);
}

/**
 * Show success toast
 * @param {string} message - The success message
 */
function showSuccess(message) {
  return showToast(message, "success", 4000);
}

/**
 * Show info toast
 * @param {string} message - The info message
 */
function showInfo(message) {
  return showToast(message, "info", 5000);
}

// Expose functions globally for use in other scripts
window.showToast = showToast;
window.showError = showError;
window.showWarning = showWarning;
window.showSuccess = showSuccess;
window.showInfo = showInfo;
window.initializeToastContainer = initializeToastContainer;

const spinner = document.getElementById("spinner");
