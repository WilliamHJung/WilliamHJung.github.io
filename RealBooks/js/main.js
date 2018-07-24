/* --------------------------------Unhide/Hide Song Image Div-------------------------------- */
function divUnHide() {
    var x = document.getElementById("bookImages");
    if (x.style.display !== "none") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
} 

/* --------------------------------Drop down Menu-------------------------------- */
$(window).on('load',function(){
    $('#btnMenu').click(function(){
        var submenu = $(this).parent().children('#dropDownMenu_sub_dd');
        if (submenu.css('display') == 'none') {
            $('#dropDownMenu_sub_dd').hide(); 	//first hide any previously showing submenu's
            submenu.show(); 			//then show the current submenu
        } else {
            submenu.hide(); 			//hide the current submenu again
        }
    });
});


// select DIVs by Id (#) or Class (.) and Detect if click occured then close menu
jQuery(function($){
  $('#titleBar, #dropDownMenu_sub_dd, #bookImages').click(function(e){	
	$('#dropDownMenu_sub_dd').hide(); 		// hide DIV Class
    e.stopPropagation(); 			// Stop the click event from bubbling to parent elements
  });
});