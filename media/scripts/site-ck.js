$(function(){var e,t=$("header"),n=$(".filter-nav a"),r=$(".resources-list"),i=$(".slider-left"),s=$(".slider-right");$(window).on("scroll",function(){e=$(window).scrollTop();e>105?t.addClass("sticky"):t.hasClass("sticky")&&t.removeClass("sticky")});n.on("click",function(e){var t=$(this);e.preventDefault();var n=t.data("filter");if(!r.hasClass(n)){r.addClass(n);t.addClass("on")}else{r.removeClass(n);t.removeClass("on")}});var o=0,u=$(".logos ul").length-1;$(".logos ul").eq(0).addClass("show");i.on("click",function(e){e.preventDefault();$(".logos ul:eq("+o+")").fadeOut(1e3,function(){$(this).removeClass("show");o-=1;if(o<0){o=u;$(".logos ul:eq("+o+")").fadeIn(1e3,function(){$(this).addClass("show")})}else $(".logos ul:eq("+o+")").fadeIn(1e3,function(){$(this).addClass("show")})})});s.on("click",function(e){e.preventDefault();$(".logos ul:eq("+o+")").fadeOut(1e3,function(){$(this).removeClass("show");o+=1;if(o>u){o=0;$(".logos ul:eq("+o+")").fadeIn(1e3,function(){$(this).addClass("show")})}else $(".logos ul:eq("+o+")").fadeIn(1e3,function(){$(this).addClass("show")})})})});