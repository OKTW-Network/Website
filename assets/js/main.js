var owo_title = true;

$(document).ready(function() {

    $('#fullpage').fullpage({
		navigation : true,
		navigationPosition : "right",
		slidesNavigation: true,
		controlArrows: true,
		verticalCentered: true,
		verticalCentered: true,
		easing: 'easeOutQuart',
		easingcss3: 'cubic-bezier(0.860, 0.000, 0.070, 1.000)'
    });     
    
    var tmp = document.getElementsByClassName("backgroundBlur")

	for (let i = 0; i < tmp.length; i++) {
		tmp[i].src = "/assets/bg/" + Math.floor(Math.random() * Math.floor(16 - 1) + 1) + ".jpg";
    }	 

    $('#title').hover(
        function(){ 
            if(owo_title){
                owo_title = false;
                $('#title').addClass('hinge animated')
                setTimeout(function(){ 
                    $('#title').removeClass('hinge animated');
                    $('#title').addClass('rubberBand animated');
                    setTimeout(function(){
                        owo_title = true;
                    },1500)
                }, 2500); 
            }
            
        }
    )

    cheet('f r o g', function () {
        $("#frog").show();
      });
    
});
