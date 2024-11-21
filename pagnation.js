document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentPage = 0;
  
    function updatePagination() {
      cards.forEach((card, index) => {
        card.classList.toggle('active', index === currentPage);
      });
      prevButton.disabled = currentPage === 0;
      nextButton.disabled = currentPage === cards.length - 1;
    }
  
    prevButton.addEventListener('click', () => {
      if (currentPage > 0) {
        currentPage--;
        updatePagination();
      }
    });
  
    nextButton.addEventListener('click', () => {
      if (currentPage < cards.length - 1) {
        currentPage++;
        updatePagination();
      }
    });
  
    // Initialize the first page
    updatePagination();
  });
  