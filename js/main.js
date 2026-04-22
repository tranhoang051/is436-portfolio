
        document.querySelectorAll('.no-click').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
            });
        });

        const contactForm = document.getElementById('contactForm');
        if(contactForm) {
            contactForm.addEventListener('submit', function (event) {
                if (!contactForm.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault();
                    const alert = document.getElementById('successAlert');
                    alert.classList.remove('d-none');
                    contactForm.reset();
                    contactForm.classList.remove('was-validated');
                    setTimeout(() => {
                        alert.classList.add('d-none');
                    }, 5000);
                }
                contactForm.classList.add('was-validated');
            }, false);
        }