(function(jQuery){  
 jQuery.fn.jqbox = function(options) {  
  
   var defaults = {  
   html: "",
   width:200,
   height:200,
   alertbox:false,
   confirmbox:false,
   onyes:"",
   onno:"",
   onok:"",
   yestxt: "YES",
   notxt:"NO",
   oktxt: "OK",
   speed:1000,
   closebtn:true
    
  };  
    
  var options = jQuery.extend(defaults, options);  
      
  return this.each(function() { 
  
  		jQuery(".jqbox_innerhtml").remove();
		jQuery(".jqbox_shadow").remove();
		  	 
  		margin_top=(options.height/2)+50;
  		margin_left=(options.width/2)
  		
  		
  		jQuery("body").append("<div class='jqbox_shadow'></div>");
  		jQuery("body").append("<div class='jqbox_innerhtml'><div class='jqbox_html_data'>"+options.html+"</div></div>");
  		if(options.closebtn)
  		{
  			jQuery(".jqbox_innerhtml").append("<div class='jqbox_close' style='display:none'>&nbsp;</div>");
  		}
  		
  		if(options.alertbox)
  		{
  			jQuery(".jqbox_innerhtml").append("<div class='jqbox_bottom'><div class='jqbox_ok jqbox_btn'>"+options.oktxt+"</div></div>");
  		}
  		else if(options.confirmbox)
  		{
  			jQuery(".jqbox_innerhtml").append("<div class='jqbox_bottom'><div class='jqbox_yes jqbox_btn'>"+options.yestxt+"</div><div class='jqbox_no jqbox_btn'>"+options.notxt+"</div></div>");
  		}
  		
  		
  		
  		
  		//jQuery(".jqbox_innerhtml").css("width",options.width+"px");
  		//jQuery(".jqbox_innerhtml").css("height",options.height+"px");
  		jQuery(".jqbox_innerhtml").css("width","1px");
  		jQuery(".jqbox_innerhtml").css("height","1px");
  		jQuery(".jqbox_innerhtml").css("margin-top","-50.5px");
  		jQuery(".jqbox_innerhtml").css("margin-left","-0.5px");
		jQuery(".jqbox_innerhtml").css("opacity","0");
  		
  		jQuery(".jqbox_shadow").fadeIn();
  		//jQuery(".jqbox_innerhtml").fadeIn("slow");
  		jQuery(".jqbox_innerhtml").animate({
  							width:options.width+"px",
  							height:options.height+"px",
  							"margin-top":"-"+margin_top+"px",
  							"margin-left":"-"+margin_left+"px",
  							"opacity":1,
  							}, options.speed,function(){
  								jQuery(".jqbox_close").fadeIn("fase");
  							});
  		
  		if(options.closebtn)
  		{
  			jQuery(".jqbox_close").click(function(){
				jQuery(".jqbox_innerhtml").fadeOut("slow");
			  	jQuery(".jqbox_shadow").fadeOut("slow");
			  	
  			});
  		}
  		
  		jQuery(".jqbox_ok").click(function(){
  			jQuery(".jqbox_innerhtml").fadeOut("slow");
		  	jQuery(".jqbox_shadow").fadeOut("slow");
		  	
		  	if(options.onok!="") eval(options.onok);
		  	
  		});
  		
  		jQuery(".jqbox_yes").click(function(){
  			jQuery(".jqbox_innerhtml").fadeOut("slow");
		  	jQuery(".jqbox_shadow").fadeOut("slow");
		  	if(options.onyes!="")	eval(options.onyes);
  		});
  		
  		
  		jQuery(".jqbox_no").click(function(){
  			jQuery(".jqbox_innerhtml").fadeOut("slow");
		  	jQuery(".jqbox_shadow").fadeOut("slow");
		  	if(options.onno!="") eval(options.onno);
  		});

  		
  		
    });  
   
 };  
})(jQuery); 