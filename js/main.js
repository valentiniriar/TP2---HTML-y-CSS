$(function () {

    const paginaActual = window.location.pathname.split('/').pop() || 'index.html';

    $('.navbar-nav .nav-link').each(function () {
        const href = $(this).attr('href');
        if (href === paginaActual) {
            $(this).addClass('active').attr('aria-current', 'page');
        }
    });

    $('#form-newsletter').on('submit', function (e) {
        e.preventDefault();  

        const emailInput = $('#email-newsletter');
        const email = emailInput.val().trim();

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexEmail.test(email)) {
            emailInput.addClass('is-invalid').removeClass('is-valid');
            return;
        }

        emailInput.addClass('is-valid').removeClass('is-invalid');
        $('#msg-newsletter').removeClass('d-none').fadeIn();
        emailInput.val('');

        setTimeout(function () {
            $('#msg-newsletter').fadeOut('slow', function () {
                $(this).addClass('d-none');
            });
        }, 4000);
    });

    const $btnTop = $('#btn-top');

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $btnTop.fadeIn(300);
        } else {
            $btnTop.fadeOut(300);
        }
    });

    $btnTop.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    window.sanitizarTexto = function (texto) {
        return texto
            .replace(/&/g,  '&amp;')
            .replace(/</g,  '&lt;')
            .replace(/>/g,  '&gt;')
            .replace(/"/g,  '&quot;')
            .replace(/'/g,  '&#039;');
    };

});
