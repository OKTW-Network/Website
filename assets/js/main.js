let owo_title = true;
let backgroundCount = 0;
let backgroundloadedCount = 0;

function isMobile() {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) return true;
    return false;
}

function getContributors() {
    const json_request = new XMLHttpRequest();
    json_request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            jsonData = JSON.parse(this.responseText);
            generateContributors(jsonData.contributors);
            init();
        }
    };
    json_request.open("GET", "assets/data.json", true);
    json_request.send();
}

function generateContributors(json) {
    console.log("Generating Contributors")
    let i = 0;
    let slide = document.createElement("div");
    slide.className = "slide";
    let container = document.createElement("div");
    container.className = "centerBox";
    Object.keys(json).forEach(function (key) {
        if (isMobile()) {
            if (i == 1) {
                slide.appendChild(container);
                $("#contributors").append(slide);
                slide = document.createElement("div")
                slide.className = "slide";
                container = document.createElement("div");
                container.className = "centerBox";
                i = 0;
            }
        } else {
            if (i == 3) {
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
    if (i > 0) {
        slide.appendChild(container);
        $("#contributors").append(slide);
    }
}

function generateContributorCard(data) {
    const contributor = document.createElement("div");
    contributor.className = "contributor"

    const avatar = document.createElement("img");
    avatar.className = "contributorAvatar";
    if (data.avatar) {
        avatar.src = data.avatar;
    } else {
        avatar.src = "assets/img/default_avatar.png";
    }

    const displayname = document.createElement("div");
    displayname.className = "contributorDisplayname";
    displayname.innerHTML = data.displayname;

    const id = document.createElement("div");
    id.className = "contributorID";
    id.innerHTML = data.id;

    const introduction = document.createElement("div");
    introduction.className = "contributorIntroduction";
    introduction.innerHTML = data.introduction;

    contributor.appendChild(avatar);
    contributor.innerHTML += "<br/>";
    contributor.appendChild(displayname);
    contributor.innerHTML += "<br/>";
    contributor.appendChild(id);
    contributor.innerHTML += "<br/>";
    contributor.appendChild(introduction);
    return (contributor)
}

$(document).ready(function () {
    getContributors();
});

let plugin_desc = true;
let oktw_desc = true;
function init() {
    $('#fullpage').fullpage({
        fitToSection: false,
        autoScrolling: false,
        navigation: true,
        navigationPosition: "right",
        slidesNavigation: true,
        controlArrows: false,
        verticalCentered: true,
        loopBottom: true,
        lazyLoading: true,
        easing: 'easeOutQuart',
        easingcss3: 'cubic-bezier(0.860, 0.000, 0.070, 1.000)',

        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            console.log(anchorLink, index, slideAnchor, slideIndex);
            if (index == 3 && slideAnchor == 1 && slideIndex == 1) {
                if (plugin_desc) { plugin_desc = false; } else { return }
                console.log("show plugin server desc");
                plugin_desc = document.getElementsByName("plugin-desc");
                let time = 200;
                for (let i = 0; i < plugin_desc.length; i++) {
                    setTimeout(function () {
                        plugin_desc[i].style.opacity = 1;
                        if (plugin_desc[i].className == "next-page") {
                            $.fn.fullpage.moveSlideRight();
                        }
                    }, time);
                    time = time + 1200;
                }
            }
            if (index == 2 && slideAnchor == 1 && slideIndex == 1) {
                if (oktw_desc) { oktw_desc = false; } else { return }
                console.log("show oktw desc");
                oktw_desc = document.getElementsByName("oktw-desc");
                let time = 200;
                for (let i = 0; i < oktw_desc.length; i++) {
                    setTimeout(function () {
                        oktw_desc[i].style.opacity = 1;
                        if (oktw_desc[i].className == "next-page") {
                            $.fn.fullpage.moveSlideRight();
                        }
                    }, time);
                    time = time + 1200;
                }
            }
        }
    });

    const tmp = document.getElementsByClassName("backgroundBlur")

    for (let i = 0; i < tmp.length; i++) {
        backgroundCount++;
        tmp[i].src = "/assets/bg/" + Math.floor(Math.random() * Math.floor(16 - 1) + 1) + ".jpg";
    }

    $('#title').hover(
        function () {
            if (owo_title) {
                owo_title = false;
                $('#title').addClass('hinge animated')
                setTimeout(function () {
                    $('#title').removeClass('hinge animated');
                    $('#title').addClass('rubberBand animated');
                    setTimeout(function () {
                        owo_title = true;
                    }, 1000)
                }, 2500);
            }

        }
    )

    $('.nextArrow').click(function () {
        $.fn.fullpage.moveSlideRight();
    })

    $('.preletrow').click(function () {
        $.fn.fullpage.moveSlideLeft();
    })

    if (isMobile()) {
        $('.nextArrow').hide();
        $('.preletrow').hide();
        $('#nextPageArrow').hide();
    }

    $(".backgroundBlur").one("load", function () {
        setTimeout(function () {
            backgroundloadedCount++;
            if (backgroundloadedCount == backgroundCount) {

                $("#loading").css("opacity", "0");
                $("#loading").css("filter", "blur(1000px)");

                setTimeout(function () {
                    $("#loading").css("display", "none");
                }, 1000)
            }
        }, 1000)


    }).each(function () {
        try {
            if (this.complete) $(this).load();
        } catch (e) { };
    });

    cheet('f r o g', function () {
        $("#frog").attr("poster", "https://media.giphy.com/media/pkYigxymEkV44/200_s.gif");
        const source = document.createElement('source');
        source.src = "https://media.giphy.com/media/pkYigxymEkV44/giphy.mp4";
        source.type = "video/mp4";
        $("#frog").append(source);
        $("#frog")[0].play()
        $("#frog").show();
    });

    cheet('t h i n k i n g', function () {
        $("#thinking").show();
        $("#thinking").attr("src", "assets/img/thinking.gif");
    });
}