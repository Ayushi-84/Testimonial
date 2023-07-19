$(document).ready(function(){
    $('.testimonial-content').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    dots:true,
    merge:false,
    merfeFit:false,
    autoplay:true,
    autoplayTimeout:3000,
    items:2,
navText:[
  "<i class='fa fa-angle-left'></i>",
  "<i class='fa fa-angle-right'></i>"
],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:2
      }
    }

  })
})
