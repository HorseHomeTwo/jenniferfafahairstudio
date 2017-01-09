$(document).ready(function() {
  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 40
    }, 500, 'swing', function() {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });

  // Highlight day
  $('.times-item:eq(' + new Date().getDay() + ')').addClass('active');

  // Hero resize
  $("#hero").height($(window).height() - 40);
	$(window).resize(function () {
	  $("#hero").height($(window).height() - 40);
	});

});

function onScroll(event) {
  var scrollPosition = ($(document).scrollTop() + 40);
  $('nav a').each(function() {
    var currentLink = $(this);
    var refElement = $(currentLink.attr("href"));
    if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
      $('nav ul li a').removeClass("active");
      currentLink.addClass("active");
    } else {
      currentLink.removeClass("active");
    }
  });
}

// Typekit fonts
(function(d) {
  var config = {
    kitId: 'xqm2njv',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);