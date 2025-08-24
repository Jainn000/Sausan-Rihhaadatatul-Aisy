        // Hamburger menu toggle
        function toggleMenu() {
            const menu = document.getElementById('menu');
            const hamburger = document.querySelector('.hamburger');
            menu.classList.toggle('active');
            hamburger.classList.toggle('active');
        }

        function closeMenu() {
            const menu = document.getElementById('menu');
            const hamburger = document.querySelector('.hamburger');
            menu.classList.remove('active');
            hamburger.classList.remove('active');
        }

        // Smooth scroll to contact section
        function scrollToContact() {
            document.getElementById('Contact').scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Contact form handler
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Send email
            emailjs.send('service_zr2qceh', 'template_31746v1', {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message
            })
            .then(function(response) {
                alert('Message sent successfully!');
                document.getElementById('contact-form').reset();
            }, function(error) {
                alert('Failed to send message. Please try again.');
                console.log('Error:', error);
            });

            // For now, just show success message
            alert('Thank you for your message! I will get back to you soon.');
            document.getElementById('contact-form').reset();
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            const menu = document.getElementById('menu');
            const hamburger = document.querySelector('.hamburger');
            
            if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
                menu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            const menu = document.getElementById('menu');
            const hamburger = document.querySelector('.hamburger');
            if (window.innerWidth > 768) {
                menu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll effect to navbar
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(0, 0, 0, 0.95)';
            } else {
                nav.style.background = 'rgba(0, 0, 0, 0.8)';
            }
        });
