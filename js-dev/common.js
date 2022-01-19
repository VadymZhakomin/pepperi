"use strict";
jQuery(document).ready(function () {
<<<<<<< Updated upstream
=======
  window._wq = window._wq || [];
  $(".video-overlay").click(function () {
    _wq.push({
      id: videoIdProd,
      onReady: function (video) {
        video.play();
        $(".video-overlay").fadeOut("slow");
      },
    });
  });
  _wq.push({
    id: videoIdProd,
    onReady: function (video) {
      video.bind("end", function () {
        $(".video-overlay").fadeIn("slow");
      });
    },
  });
  _wq.push({
    id: videoIdProd,
    onReady: function (video) {
      video.bind("pause", function () {
        //$('.video-overlay').fadeIn("slow");
      });
    },
  });
  _wq.push({
    id: videoIdProd,
    onReady: function (video) {
      //prod video id is zkw20qafik
      video.bind("secondchange", function () {
        $(".video-overlay").fadeOut("slow");
      });
    },
  });

  $("#events-carousel").owlCarousel({
    items: 1,
    loop: 1,
    center: 1,
    margin: 0,
    autoplayHoverPause: 1,
    startPosition: 0,
    animateIn: "animate__flipInX",
    animateOut: "animate__slideOutDown",
    autoplay: true,
    slideTransition: "linear",
    autoplaySpeed: 3000,
    smartSpeed: 450,
    nav: 0,
    dots: 0,
  }),
    $("#customer-section-carousel").owlCarousel({
      items: 12,
      loop: 1,
      nav: 0,
      dots:0,
      center: 1,
      margin: 16,
      autoplay: true,
      slideTransition: "linear",
      autoplaySpeed: 3000,
      smartSpeed: 3000,
      autoWidth: true,
      responsive: {
        0: { items: 4.5 },
        375: { items: 5.5 },
        500: { items: 8 },
        960: { items: 10 },
        976: { items: 12 },
      },
    }),
  

>>>>>>> Stashed changes
  $("#features-section-carousel").owlCarousel({
    items: 1,
    loop: !1,
    center: !0,
    margin: 10,
    autoplayHoverPause: !1,
    startPosition: 0,
    dotsContainer: "#features-section-nav",
    onTranslated: features_onDragged,
  }),
    $("#quotes-data-section-carousel").owlCarousel({
      items: 1,
      loop: !1,
      center: !0,
      margin: 10,
      autoplayHoverPause: !1,
      startPosition: 0,
      dotsContainer: "#quotes-data-section-nav",
    }),
    $("#integrations-section__carousel").owlCarousel({
      items: 12,
      loop: 1,
      nav: 0,
      center: 1,
      margin: 16,
      autoplay: true,
      slideTransition: "linear",
<<<<<<< Updated upstream
      autoplaySpeed: 6000,
      smartSpeed: 6000,
      autoWidth:true,
=======
      autoplaySpeed: 3000,
      smartSpeed: 3000,
      autoWidth: true,
>>>>>>> Stashed changes
      responsive: {
        0: { items: 4.5 },
        375: { items: 5.5 },
        500: { items: 8 },
        960: { items: 10 },
        976: { items: 12 },
      },
    }),
    /*autoplay maintaining functions*/
    $("#integrations-section__carousel").trigger("play.owl.autoplay", [1000]);
    $("#customer-section-carousel").trigger("play.owl.autoplay", [1000]);

<<<<<<< Updated upstream
    $("#integrations-section__carousel").trigger('play.owl.autoplay',[1000]);

    function setSpeed(){
        $("#integrations-section__carousel").trigger('play.owl.autoplay',[6000]);
    }
=======
  function setSpeed() {
    $("#integrations-section__carousel").trigger("play.owl.autoplay", [3000]);
    $("#customer-section-carousel").trigger("play.owl.autoplay", [3000]);
  }
>>>>>>> Stashed changes

  setTimeout(setSpeed, 1000);

  /*endof autoplay maintaining functions*/
  $("#success-section-carousel").owlCarousel({
    items: 5,
    loop: !0,
    center: !0,
    margin: 20,
    autoplayHoverPause: !1,
    startPosition: 0,
    autoWidth: true,
    responsive: {
      0: { items: 1.8 },
      500: { items: 2.4 },
      768: { items: 2.5 },
      1024: { items: 2.5 },
      1150: { items: 3.5 },
      1320: { items: 4 },
    },
  });
  var e = $("#quotes-data-section-carousel"),
    o = $("#features-section-carousel"),
    r = $("#success-section-carousel");
  $(".features-section__navbar-elem").click(function () {
    o.trigger("to.owl.carousel", [$(this).index(), 300]);
  }),
    $(".quotes-data-section__navbar-elem").click(function () {
      e.trigger("to.owl.carousel", [$(this).index(), 300]);
    }),
    $("#quotes-next").click(function () {
      e.trigger("next.owl.carousel");
    }),
    $("#quotes-prev").click(function () {
      e.trigger("prev.owl.carousel");
    }),
    $("#success-next").click(function () {
      r.trigger("next.owl.carousel");
    }),
    $("#success-prev").click(function () {
      r.trigger("prev.owl.carousel");
    }),
    $(document).mouseup(function (e) {
      var o = $(".dropdown");
      o.is(e.target) ||
        0 !== o.has(e.target).length ||
        ($(".dropdown .dropdown__menu").fadeOut(),
        $(".dropdown .dropdown__controller, .dropdown").removeClass("active"),
        $(".header").removeClass("hide-drop"));
    }),
    $(document).on("click", ".dropdown__controller", function () {
      var e = $(this).closest(".dropdown"),
        o = e.find(".dropdown__menu");
      return (
        $(this).hasClass("active")
          ? ($(".dropdown .dropdown__menu").fadeOut(),
            $(".dropdown .dropdown__controller, .dropdown").removeClass(
              "active"
            ),
            $(".header").removeClass("hide-drop"))
          : ($(".dropdown .dropdown__controller, .dropdown").removeClass(
              "active"
            ),
            $(".dropdown .dropdown__menu").fadeOut(),
            e.addClass("active"),
            $(".header").addClass("hide-drop"),
            o.fadeToggle(),
            $(this).toggleClass("active")),
        !1
      );
    }),
    $(document).on("click", ".menu-step-back", function () {
      $(".dropdown .dropdown__menu").fadeOut(),
        $(".dropdown, .dropdown__controller").removeClass("active"),
        $(".header").removeClass("hide-drop");
    }),
    $(document).on("click", ".toggle-menu", function () {
      $(".header, .header-overlay").addClass("active");
    }),
    $(document).on("click", ".header-overlay, .close-menu", function () {
      $(".header, .header-overlay").removeClass("active");
    });

    /*features animation control*/
    //$(".features-section__carousel-slide").addClass("animate__animated animate__shakeX animate__slow");
    
    function toggleFeaturesShake() {
      //debugger;
      if( $(".features-section__carousel-slide").hasClass("animate__animated"))
      $(".features-section__carousel-slide").removeClass("animate__animated animate__shakeX");
      else
      $(".features-section__carousel-slide").addClass("animate__animated animate__shakeX");
    }
    //let featuresAnimIntervalID = setInterval(toggleFeaturesShake, 2000);
    /*remove animation when carousel dragged*/
    
    function features_onDragged(event) {
    $(".features-section__carousel-slide").removeClass("animate__animated animate__shakeX");
    clearInterval(featuresAnimIntervalID);
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.75
  }

  const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target
                console.log(target)
               $(".features-section__carousel-slide").addClass("animate__animated animate__shakeX");
                observer.unobserve(target);
            }
        })
    }, options)
    observer.observe(document.querySelector('.features-section'));
   

   
});



