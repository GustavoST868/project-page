document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
            
    // Inicialmente, apenas a primeira seção está expandida
    sections.forEach((section, index) => {
        if (index !== 0) {
            section.classList.remove('active');
        }
                
        const header = section.querySelector('.section-header');
        header.addEventListener('click', () => {
            // Fecha todas as outras seções
            sections.forEach(s => {
                if (s !== section) {
                    s.classList.remove('active');
                }
            });
                    
            // Alterna a seção clicada
            section.classList.toggle('active');
        });
    });
});