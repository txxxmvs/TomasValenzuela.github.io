// Modal de CV
const cvBtn = document.getElementById('cvBtn');
const cvModal = document.getElementById('cvModal');
const cvModalContent = document.getElementById('cvModalContent');
const closeCvModal = document.getElementById('closeCvModal');

cvBtn.addEventListener('click', () => {
  cvModal.classList.remove('hidden');
  setTimeout(() => {
    cvModal.classList.add('opacity-100');
    cvModalContent.classList.remove('scale-90', 'opacity-0');
    cvModalContent.classList.add('scale-100', 'opacity-100');
  }, 10);
});

function closeModal() {
  cvModal.classList.remove('opacity-100');
  cvModalContent.classList.remove('scale-100', 'opacity-100');
  cvModalContent.classList.add('scale-90', 'opacity-0');
  setTimeout(() => {
    cvModal.classList.add('hidden');
  }, 300);
}

closeCvModal.addEventListener('click', closeModal);

cvModal.addEventListener('click', (e) => {
  if (e.target === cvModal) closeModal();
});

//  Modal de imágenes
function openImgModal(src) {
  const imgModal = document.getElementById('imgModal');
  const imgModalContent = document.getElementById('imgModalContent');
  imgModalContent.src = src;
  imgModal.classList.remove('hidden');
}

function closeImgModal() {
  const imgModal = document.getElementById('imgModal');
  const imgModalContent = document.getElementById('imgModalContent');
  imgModal.classList.add('hidden');
  imgModalContent.src = '';
}

document.getElementById('imgModal').addEventListener('click', function (e) {
  if (e.target === this) closeImgModal();
});

// Tarjetas desplegables (desktop y móvil)

//Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  //Manejo por clic en móviles
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const content = card.querySelector('.contenido');
      if (!content) return;

      // Alternar solo en pantallas pequeñas
      if (window.innerWidth <= 1024) {
        const isOpen = content.classList.contains('open');
        document.querySelectorAll('.contenido').forEach(c => {
          c.classList.remove('open');
          c.style.maxHeight = '0';
        });

        if (!isOpen) {
          content.classList.add('open');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      }
    });
  });

  // Cerrar si se hace clic fuera
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.card')) {
      document.querySelectorAll('.contenido').forEach(c => {
        c.classList.remove('open');
        c.style.maxHeight = '0';
      });
    }
  });

  // Actualizar en resize (para no dejar cosas abiertas al cambiar de tamaño)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      document.querySelectorAll('.contenido').forEach(c => {
        c.classList.remove('open');
        c.style.maxHeight = '';
      });
    }
  });
});