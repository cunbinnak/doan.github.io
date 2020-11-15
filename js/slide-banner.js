$(document).ready(function(){
	 $('#responsive').lightSlider({
  		auto:true,
        loop:true,
        item:1,
        speed:1000,
        pause:4000,
        prevHtml:('<span class="custom-prev-html"><i class="fa fa-angle-left" aria-hidden="true"></i></span>'),
        nextHtml:('<span class="custom-next-html"><i class="fa fa-angle-right" aria-hidden="true"></i></span>'),
    });
});