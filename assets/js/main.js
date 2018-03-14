var owo_title = true;
var backgroundCount = 0;
var backgroundloadedCount = 0;

function isMobile() {
    try{ document.createEvent("TouchEvent"); return true; }
    catch(e){ return false; }
}

function getContributors(){
    var json_request = new XMLHttpRequest();
    json_request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            jsonData = JSON.parse(this.responseText);
            generateContributors(jsonData.contributors);
            init();
         }
    };
    json_request.open("GET", "assets/data.json", true);
    json_request.send();
}

function generateContributors(json){
    console.log("Generating Contributors")
    i = 0;
    var slide = document.createElement("div");
    slide.className = "slide";
    var container = document.createElement("div");
    container.className = "centerBox";
    Object.keys(json).forEach(function(key){
        if(isMobile()){
            if(i == 1){
                slide.appendChild(container);
                $("#contributors").append(slide);
                slide = document.createElement("div")
                slide.className = "slide";
                container = document.createElement("div");
                container.className = "centerBox";
                i = 0;
            }
        }else{
            if(i == 3){
                slide.appendChild(container);
                $("#contributors").append(slide);
                slide = document.createElement("div")
                slide.className = "slide";
                container = document.createElement("div");
                container.className = "centerBox";
                i = 0;
            }
        }
        i++;
        window.loaded = true;
        container.appendChild(generateContributorCard(json[key]));
    });
    if(i > 0){
        slide.appendChild(container);
        $("#contributors").append(slide);
    }
}

function generateContributorCard(data){

    var contributor = document.createElement("div");
    contributor.className = "contributor"

    var avatar = document.createElement("img");
    avatar.className = "contributorAvatar";
    if(data.avatar){
        avatar.src = data.avatar;
    }else{
        avatar.src = "assets/img/default_avatar.png";
    }
    
    var displayname = document.createElement("div");
    displayname.className = "contributorDisplayname";
    displayname.innerHTML = data.displayname;

    var id = document.createElement("div");
    id.className = "contributorID";
    id.innerHTML = data.id;

    var introduction = document.createElement("div");
    introduction.className = "contributorIntroduction";
    introduction.innerHTML = data.introduction;

    contributor.appendChild(avatar);
    contributor.innerHTML += "<br/>";
    contributor.appendChild(displayname);
    contributor.innerHTML += "<br/>";
    contributor.appendChild(id);
    contributor.innerHTML += "<br/>";
    contributor.appendChild(introduction);
    return(contributor)

}


$(document).ready(function() {
    
    getContributors();
    
});

function init(){
    
    $('#fullpage').fullpage({
		navigation : true,
		navigationPosition : "right",
		slidesNavigation: true,
		controlArrows: false,
        verticalCentered: true,
        fitToSection: false,
        loopBottom: true,
        lazyLoading: true,
		easing: 'easeOutQuart',
		easingcss3: 'cubic-bezier(0.860, 0.000, 0.070, 1.000)'
    });     
    
    var tmp = document.getElementsByClassName("backgroundBlur")

	for (let i = 0; i < tmp.length; i++) {
        backgroundCount++;
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
            backgroundloadedCount++;
            if(backgroundloadedCount == backgroundCount){
                $("#loading").css("transform","scale(1.5)");
                $("#loading").css("opacity","0");
                $("#loading").css("filter","blur(1px)");

                $("#frog").attr("poster","https://media.giphy.com/media/pkYigxymEkV44/200_s.gif");
                var source = document.createElement('source');
                source.src = "https://media.giphy.com/media/pkYigxymEkV44/giphy.mp4";
                source.type = "video/mp4";
                $("#frog").append(source);
                
                setTimeout(function(){
                    $("#loading").css("display","none");
                },1000)
            }
        },1000)
        
        
    }).each(function() {
        if(this.complete) $(this).load();
    });


    cheet('f r o g', function () {
        $("#frog")[0].play()
        $("#frog").show();
      });
}
