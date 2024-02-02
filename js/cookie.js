document.addEventListener('DOMContentLoaded', function() {
    // Comprueba si el usuario ya aceptó las cookies
    if (!localStorage.getItem('cookiesAccepted')) {
      const message = "Este sitio web utiliza cookies para garantizar que obtenga la mejor experiencia en nuestro sitio web. Haga clic en 'Aceptar' para continuar.";
      const acceptCookies = confirm(message);
  
      if (acceptCookies) {
        localStorage.setItem('cookiesAccepted', 'true');
      }
    }
  });
  