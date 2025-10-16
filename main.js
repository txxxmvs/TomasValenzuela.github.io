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