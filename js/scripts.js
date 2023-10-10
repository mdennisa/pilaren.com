jQuery(function($) {
    // initiate scrollmagic controller
    var controller = new ScrollMagic.Controller()

    // explode letters here
    lettering('.tagline')

    // #slide-1
    var tl = anime.timeline({})
    Pace.once('done', function() {
        tl
        .add({
            targets: '.brand',
            duration: 800,
            easing: 'easeOutExpo',
            translateY: [-100, 0],
            opacity: [0, 1]
        })
        .add({
            targets: '.brand h1',
            duration: 600,
            easing: 'easeOutSine',
            translateY: [25, 0],
        })
        .add({
            targets: '.hline',
            duration: 800,
            easing: 'easeOutExpo',
            width: [0, '100%'],
            opacity: [0, 1]
        })
        .add({
            targets: '.tagline span.letter',
            duration: 800,
            easing: 'easeInOutExpo',
            translateY: [6, 0],
            opacity: [0, 1],
            delay: anime.stagger(60),
        }, '-=800')
    })

    // #slide-2
    var tl_s2 = anime.timeline()
    tl_s2.add({
        targets: '#about-us',
        duration: 1000,
        easing: 'easeOutSine',
        translateY: [-200, 0],
        opacity: [0, 1]
    })

    var scene_2 = new ScrollMagic.Scene({
        triggerElement: '#slide-2',
        duration: '50%'
    })
    .setAnime(tl_s2)
    .addTo(controller)

    // #slide-3
    var tl_s3 = anime.timeline()
    tl_s3.add({
        targets: '#our-services',
        duration: 1000,
        easing: 'easeOutSine',
        translateY: [-200, 0],
        opacity: [0, 1]
    })

    var scene_3 = new ScrollMagic.Scene({
        triggerElement: '#slide-3',
        duration: '50%'
    })
    .setAnime(tl_s3)
    .addTo(controller)

    // fancybox
    $('a[data-fancybox]').fancybox({
        hideScrollbar: false
    })
})

function lettering(element) {
    var textWrapper = document.querySelector(element);
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}