$(function(){function l(e){$.ajax({url:e,success:function(e){$("body").prepend(e);$(".overlay-door").delay(200).queue(function(e){$(this).addClass("open");e()});$(".overlay-close").on("click",function(e){e.preventDefault();$(".overlay-door").removeClass("open").addClass("close").delay(800).queue(function(e){$(this).remove();e()})})}})}var e,t=$("header"),n=$(".filter-nav a"),r=$(".resources-list"),i=$(".slider-left"),s=$(".slider-right"),o=$("#firstLastName"),u=$('input[type="email"]');$(window).on("scroll",function(){e=$(window).scrollTop();e>105?t.addClass("sticky"):t.hasClass("sticky")&&t.removeClass("sticky")});n.on("click",function(e){var t=$(this);e.preventDefault();var n=t.data("filter");if(!r.hasClass(n)){r.addClass(n);t.addClass("on")}else{r.removeClass(n);t.removeClass("on")}});var a=0,f=$(".logos ul").length-1;$(".logos ul").eq(0).addClass("show");i.on("click",function(e){e.preventDefault();$(".logos ul:eq("+a+")").fadeOut(1e3,function(){$(this).removeClass("show");a-=1;if(a<0){a=f;$(".logos ul:eq("+a+")").fadeIn(1e3,function(){$(this).addClass("show")})}else $(".logos ul:eq("+a+")").fadeIn(1e3,function(){$(this).addClass("show")})})});s.on("click",function(e){e.preventDefault();$(".logos ul:eq("+a+")").fadeOut(1e3,function(){$(this).removeClass("show");a+=1;if(a>f){a=0;$(".logos ul:eq("+a+")").fadeIn(1e3,function(){$(this).addClass("show")})}else $(".logos ul:eq("+a+")").fadeIn(1e3,function(){$(this).addClass("show")})})});$(".logo a").on("contextmenu",function(e){e.preventDefault();l("/js-templates/logo-modal.html")});$(".video-link").on("click",function(e){e.preventDefault();l("/js-templates/video-modal.html")});o.on("blur",function(){var e=$(this).val();if(e!==""){var t=e.slice(0,e.indexOf(" ")),n=e.slice(e.indexOf(" ")+1);$('input[type="hidden"]#firstName').val(t);$('input[type="hidden"]#lastName').val(n)}});u.on("blur",function(){if($(this).parents("form").find("#Company")&&$(this).val()!==""){var e=$(this).val().split("@"),t=e[1].split("."),n=t[0],r=["gmail","hotmail","outlook","rocketmail","live","msn","aol","yahoo"];$.inArray(n,r)<0&&$("#Company").val(n)}})});