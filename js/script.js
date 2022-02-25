jQuery(document).ready(function(){
    jQuery(".left-menu-trigger button").on("click", function(){
     jQuery("body").toggleClass("side-menu-activated");
     //jQuery(".leftside-menu").toggleClass("side-menu-activated");
    })
    jQuery(".leftside-menu-wrapper>ul>li>a").on("click", function(e){
    //e.preventDefault();
     jQuery(this).parent().siblings().removeClass("activated");
     jQuery(this).parent().addClass("activated");
  console.log("Log");
    })

    $("#patient-reg-type").on('change', function(){
      var selectedItem = $("#patient-reg-type option:selected").val();
      if(selectedItem === 'general'){
        $("#patient-reg-doc").hide();
      } else{
        $("#patient-reg-doc").show();
      }
    
    })
})