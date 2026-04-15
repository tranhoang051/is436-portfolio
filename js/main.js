function navigateTo(pageId) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(p => p.classList.remove('active'));

            const targetPage = document.getElementById(pageId);
            if(targetPage) {
                targetPage.classList.add('active');
            }

            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('data-page') === pageId) {
                    link.classList.add('active');
                }
            });

            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }

            document.querySelector('.page-container').scrollTop = 0;
        }