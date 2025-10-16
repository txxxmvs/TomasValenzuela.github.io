// Funciones para abrir y cerrar el modal de imagen
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