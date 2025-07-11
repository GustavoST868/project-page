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
            
            // Scroll suave para a seção expandida
            if (section.classList.contains('active')) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
            }
        });
    });
    
    // Adiciona hover persistente para dispositivos com mouse
    if (window.matchMedia("(hover: hover)").matches) {
        const links = document.querySelectorAll('.link-url');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.querySelector('i').style.transform = 'translateX(3px)';
            });
            link.addEventListener('mouseleave', () => {
                link.querySelector('i').style.transform = 'translateX(0)';
            });
        });
    }
});