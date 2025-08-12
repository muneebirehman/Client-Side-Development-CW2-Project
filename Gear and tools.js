$(document).ready(function() {

    // --- Smooth Scrolling for Anchor Links ---
    $('a[href*="#"]').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // --- On-Scroll Animations for Sections ---
    // This function checks if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle the animation on scroll
    function handleScrollAnimations() {
        $('.laptop-card, .app-card, .connectivity-card, .gadget-card, .section-title, .section-subtitle').each(function() {
            if (isElementInViewport(this)) {
                $(this).addClass('animate__animated animate__fadeInUp');
                $(this).css('opacity', '1').css('transform', 'translateY(0)');
            }
        });
    }

    // Attach the scroll handler
    $(window).on('scroll', handleScrollAnimations);
    // Trigger on page load to animate elements already in view
    handleScrollAnimations();


    // --- Accordion for Co-working Compendium ---
    $('.accordion-header').on('click', function() {
        var $parent = $(this).parent('.accordion-item');
        
        // Close all other accordions
        $('.accordion-item').not($parent).removeClass('active');
        $('.accordion-item').not($parent).find('.accordion-content').slideUp(300);

        // Toggle the clicked accordion
        $parent.toggleClass('active');
        $parent.find('.accordion-content').slideToggle(300);
    });

    // --- App Card Hover Description (using CSS transition but jQuery for class handling) ---
    // The main animation is in CSS, but we can add a class here for more complex effects if needed.
    // This is a simple example. The logic is primarily handled in `page3_styles.css`
    $('.app-card').hover(function() {
        // Optional: add a class on hover for specific JS-based effects
        $(this).toggleClass('hovered');
    });

    // --- Simple Hover Effect for Connectivity Cards ---
    // This is an example of adding a class on hover for a subtle animation.
    $('.connectivity-card').hover(function() {
        $(this).toggleClass('hovered');
    });
});