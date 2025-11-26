function scrollToInfo() {
        // 1. Obtiene la sección con el ID 'info-section'
        const infoSection = document.getElementById('info-section');

        if (infoSection) {
            // 2. Desplaza la vista a esa sección
            infoSection.scrollIntoView({
                behavior: 'smooth', 
                block: 'start'
            });
        }
    }