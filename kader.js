document.addEventListener('DOMContentLoaded', function() {
  const downloadBtn = document.querySelector('.download-btn');
  const downloadIcons = document.querySelectorAll('.download-icon');
  
  const createDownloadModal = (downloadLink) => {
    const modal = document.createElement('div');
    modal.id = 'downloadModal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';
    modal.innerHTML = `
      <div style="background-color: var(--bg-secondary); border-radius: 10px; padding: 20px; width: 90%; max-width: 500px;">
        <h2 style="color: var(--accent); margin-bottom: 15px;">Confirmer le téléchargement</h2>
        <p style="color: var(--text-secondary); margin-bottom: 15px;">En téléchargeant ce contenu, vous acceptez les conditions d'utilisation. Vous serez rediriger dans le site méga pour Telecharger ou regarder en raison de sécurité.</p>
        <div style="display: flex; justify-content: space-between;">
          <button id="cancelDownload" class="btn" style="background-color: var(--danger);">Annuler</button>
          <a id="megaDownloadLink" href="${downloadLink}" class="btn btn-primary" style="background-color: #d9534f; color: white;">Télécharger</a>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    
    document.getElementById('cancelDownload').addEventListener('click', function() {
      modal.remove();
    });
    
    return modal;
  };
  
  // Gérer le bouton de téléchargement principal
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
      const downloadLink = this.getAttribute('data-download-link') || '';
      createDownloadModal(downloadLink);
    });
  }
  
  // Gérer les icônes de téléchargement dans les cartes
  downloadIcons.forEach(icon => {
    icon.addEventListener('click', function(e) {
      e.stopPropagation();
      const downloadLink = this.getAttribute('data-download-link') || '';
      createDownloadModal(downloadLink);
    });
  });
});