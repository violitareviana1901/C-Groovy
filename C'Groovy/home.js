$(document).ready(function () {
    let currentIndex = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;
    let autoSlideTimer;
    let userInactiveTimer;


    for (let i = 0; i < totalSlides; i++) {
        $('.dot-container').append('<span class="dot" data-index="' + i + '"></span>');
    }
    const dots = $('.dot');

    function showSlide(index) {
        slides.removeClass('active');
        dots.removeClass('active');
        slides.eq(index).addClass('active');
        dots.eq(index).addClass('active');
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }
    
    function startAutoSlide() {
        stopAutoSlide();
        autoSlideTimer = setInterval(() => {
            nextSlide();
        }, 4000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideTimer);
    }
    
    function resetUserInactiveTimer() {
        clearTimeout(userInactiveTimer);
        stopAutoSlide();
        userInactiveTimer = setTimeout(() => {
            startAutoSlide();
        }, 5000);
    }

    $('#next').click(function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
        resetUserInactiveTimer();
    });

    $('#prev').click(function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
        resetUserInactiveTimer();
    });

    $('.dots').on('click', '.dot', function () {
        currentIndex = $(this).data('index');
        showSlide(currentIndex);
        resetUserInactiveTimer();
    });

    resetUserInactiveTimer();

    showSlide(currentIndex);
});