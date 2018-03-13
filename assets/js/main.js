var owo_title = true;

function generateContributors(){
    var json_request = new XMLHttpRequest();
    json_request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            jsonData = JSON.parse(this.responseText);
            console.log(jsonData);
            init();
         }
    };
    json_request.open("GET", "assets/data.json", true);
    json_request.send();
}

function generateContributorCard(key,data){

}

function isMobile() {
    try{ document.createEvent("TouchEvent"); return true; }
    catch(e){ return false; }
  }

$(document).ready(function() {
    
    generateContributors();
    
});

function init(){
    
    $('#fullpage').fullpage({
		navigation : true,
		navigationPosition : "right",
		slidesNavigation: true,
		controlArrows: false,
        verticalCentered: true,
        fitToSection: false,
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
                    },1000)
                }, 2500); 
            }
            
        }
    )

    $('.nextArrow').click(function(){
        $.fn.fullpage.moveSlideLeft();
    })

    $('.prevArrow').click(function(){
        $.fn.fullpage.moveSlideRight();
    })

    if(isMobile()){
        $('.nextArrow').hide();
        $('.prevArrow').hide();
        $('#nextPageArrow').hide();
    }

    $(".backgroundBlur").one("load", function() {
        setTimeout(function(){
            $("#loading").css("transform","scale(5)");
            $("#loading").css("opacity","0");
            $("#loading").css("filter","blur(5px)");
            setTimeout(function(){
                $("#loading").css("display","none");
            },1000)
        },1000)
        
    }).each(function() {
        if(this.complete) $(this).load();
    });

    cheet('f r o g', function () {
        $("#frog").show();
      });
}
