$(document)
  .ready(function() {
    $(".bars")
      .click(function() {
        $(".bar1")
          .toggleClass("b1");
        $(".bar2")
          .toggleClass("b2");
        $(".bar3")
          .toggleClass("b3");
        $(".outer-section")
          .toggleClass("down-slide");
      });
  });
$(".bars")
  .click(function() {
    TweenMax.staggerFrom(".menu-list a", 1.5, {
      x: 50,
      opacity: 0,
      ease: Bounce.easeOut
    }, .5);
    TweenMax.staggerFrom(".Channels a,.Channels h4", 1.5, {
      x: 50,
      opacity: 0,
      ease: Bounce.easeOut

    }, .5);
    TweenMax.from(".newsletter", 1, {
      x: 150,
      opacity: 0,
      ease: Bounce.easeOut
    });
  });
