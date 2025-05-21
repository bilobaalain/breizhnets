function handleLogin(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
  
    if (!username || !password || !role) {
      alert("Veuillez remplir tous les champs.");
      return false;
    }
  
    let users = JSON.parse(localStorage.getItem('users')) || {};
  
    if (users.hasOwnProperty(username)) {
      if (users[username].password !== password) {
        alert("Mot de passe incorrect pour l'utilisateur : " + username);
        return false;
      }
    } else {
      // Enregistre le nouvel utilisateur
      users[username] = { password: password };
      localStorage.setItem('users', JSON.stringify(users));
    }
  
    // Enregistre l’utilisateur actif
    localStorage.setItem('username', username);
  
    // Redirection vers la page correspondante
    switch (role) {
      case 'admin': window.location.href = 'admin.html'; break;
      case 'contributor': window.location.href = 'contributor.html'; break;
      case 'medecin': window.location.href = 'medecin.html'; break;
      case 'client': window.location.href = 'client.html'; break;
      case 'other': window.location.href = 'autre.html'; break;
      default: alert("Rôle invalide.");
    }
  
    return false;
  }
  