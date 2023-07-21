$(document).ready(function(){
    $('.testimonial-content').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    merge:false,
    merfeFit:false,
    autoplay:false,
    autoplayTimeout:3000,
    items:2,
navText:[
  "<i class='fa fa-angle-left'></i>",
  "<i class='fa fa-angle-right'></i>"
],
    responsive:{
      0:{
        items:1,
      },
      600:{
        items:1,
      },
      950:{
        items:2,
      }
    }

  })
})

