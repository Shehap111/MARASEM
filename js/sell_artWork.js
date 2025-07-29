


var srcDefault = '../img/Uplode_img.png'

$('.custom-input').on('change', function() {
  var input = $(this);
  if(input[0] && input[0].files && input[0].files[0]) {
    if(!input[0].files[0].type.includes("image")) { 
      $('#image').attr('src', srcDefault);
      return false;                                                 
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#image')
        .attr('src', e.target.result);
    };

    reader.readAsDataURL(input[0].files[0]);
  }
});

var srcDefault = '../img/Uplode_img.png'

$('.custom-input3').on('change', function() {
  var input = $(this);
  if(input[0] && input[0].files && input[0].files[0]) {
    if(!input[0].files[0].type.includes("image")) { 
      $('#image3').attr('src', srcDefault);
      return false;                                                 
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#image3')
        .attr('src', e.target.result);
    };

    reader.readAsDataURL(input[0].files[0]);
  }
});     

var srcDefault = '../img/Uplode_img.png'

$('.custom-input4').on('change', function() {
  var input = $(this);
  if(input[0] && input[0].files && input[0].files[0]) {
    if(!input[0].files[0].type.includes("image")) { 
      $('#image4').attr('src', srcDefault);
      return false;                                                 
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#image4')
        .attr('src', e.target.result);
    };

    reader.readAsDataURL(input[0].files[0]);
  }
});     

var srcDefault = '../img/Uplode_img.png'

$('.custom-input5').on('change', function() {
  var input = $(this);
  if(input[0] && input[0].files && input[0].files[0]) {
    if(!input[0].files[0].type.includes("image")) { 
      $('#image5').attr('src', srcDefault);
      return false;                                                 
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#image5')
        .attr('src', e.target.result);
    };

    reader.readAsDataURL(input[0].files[0]);
  }
});     

var srcDefault = '../img/Uplode_img.png'

$('.custom-input6').on('change', function() {
  var input = $(this);
  if(input[0] && input[0].files && input[0].files[0]) {
    if(!input[0].files[0].type.includes("image")) { 
      $('#image6').attr('src', srcDefault);
      return false;                                                 
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#image6')
        .attr('src', e.target.result);
    };

    reader.readAsDataURL(input[0].files[0]);
  }
});     

var srcDefault = '../img/Uplode_img.png'

$('.custom-input2').on('change', function() {
  var input = $(this);
  if(input[0] && input[0].files && input[0].files[0]) {
    if(!input[0].files[0].type.includes("image")) { 
      $('#image2').attr('src', srcDefault);
      return false;                                                 
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#image2')
        .attr('src', e.target.result);
    };

    reader.readAsDataURL(input[0].files[0]);
  }
});     

var srcDefault = '../img/Uplode_img.png'

$('.custom-input7').on('change', function() {
  var input = $(this);
  if(input[0] && input[0].files && input[0].files[0]) {
    if(!input[0].files[0].type.includes("image")) { 
      $('#image7').attr('src', srcDefault);
      return false;                                                 
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#image7')
        .attr('src', e.target.result);
    };

    reader.readAsDataURL(input[0].files[0]);
  }
});     

