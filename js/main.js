

var owl = $('#slider_1');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:0,
  navigation: true,
    autoplay: true,
    smartSpeed: 800,
    rtl:true,
    nav: true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-right"></i>` , `<i class="fa-solid fa-chevron-left"></i>`],
    paginationSpeed : 800,
    dots: false,  
    dotsEach:true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 1,
        },
        1100:{
            items: 1,
        },
        1200:{
            items:1
        }
    }
});

var owl = $('#slider_2');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:0,
  navigation: true,
    autoplay: true,
    smartSpeed: 800,
    rtl:true,
    nav: true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-right"></i>` , `<i class="fa-solid fa-chevron-left"></i>`],
    paginationSpeed : 800,
    dots: false,  
    dotsEach:true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 2,
        },
        1100:{
            items: 3,
        },
        1200:{
            items:6
        }
    }
});

var owl = $('#slider_3');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:10,
    navigation: true,
    autoplay: true,
    smartSpeed: 800,
    rtl:true,
    nav: true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-right"></i>` , `<i class="fa-solid fa-chevron-left"></i>`],
    paginationSpeed : 800,
    dots: false,  
    dotsEach:true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 2,
        },
        1100:{
            items: 3,
        },
        1200:{
            items:9
        }
    }
});

var owl = $('#slider_5');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:0,
  navigation: true,
    autoplay: true,
    smartSpeed: 800,
    rtl:true,
    nav: true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-right"></i>` , `<i class="fa-solid fa-chevron-left"></i>`],
    paginationSpeed : 800,
    dots: false,  
    dotsEach:true,
    responsive:{
        0:{
            items: 3,
        },
        600:{
            items: 2,
        },
        1100:{
            items: 3,
        },
        1200:{
            items:8
        }
    }
});



////////////////
function fucas(){
document.getElementById("search_bar").focus();
}



document.getElementById("search_bar").addEventListener("input", function() {
    var input = document.getElementById("search_bar");
    var element = document.getElementById("product_in_search");

    if (this.value.trim() !== '') {
        element.style.display = "block"  ;
    } else {
        element.style.display = "none " ;
    }
});
