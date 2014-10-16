/** ***************************************
	
    @Author			Avanzare
	@Website		www.avanzare.co
	@Last Update	09:05 PM Sunday, April 24, 2014

	TABLE OF CONTENTS
	---------------------------
	 1. Preloader
     2. Background
	 3. Cycle
	 4. Overlay
	 5. Ajax Subscribe
	 6. Ajax Contact
	 7. Google Analytics
		
 ** ***************************************/
 

/**	1. PRELOADER
 *****************************************************/
$(window).load(function() {
	
	  setTimeout(function() {
		$('.spinner,#prelaoder img').fadeOut("slow");
			
		  setTimeout(function() {
		  $('#prelaoder').fadeOut("slow");
		  
			  setTimeout(function() {
				  $('.content-block').addClass('animated fadeInDown').fadeIn("slow");
			       $('#footer').fadeIn('slow');
				   
			  }, 900);
		  }, 1000);	  
	  }, 1000);	
  
});

/**	2. BACKGROUND
 *****************************************************/
$(document).ready( function(){

(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|android|ipad|playbook|silk|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);


	if(jQuery.browser.mobile)
	{
		$.backstretch('assets/img/1.jpg');
		$('.tubular-mute').css('display','none')
	}
	else
	{
	   var options = { videoId: 'agRtaWTItQ0' };
		$('body').tubular(options);
		
		$('#tubular-container').css('z-index','-1');
		$('#tubular-shield').css('z-index','-1');
	}
	

});

/**	3. CYCLE
 *****************************************************/
$(document).ready( function(){
	
	$('#slider').cycle({
		fx : 'fade',
		timeout: 5500,
		speed: 500,
		slides: '.slide'
	});
	
});

/**	4. OVERLAY
 *****************************************************/
$(document).ready( function(){

	var openBtn = ( '#open-overlay' ),
	    closeBtn = ( '#close-overlay' ),
		
		openBtnContact = ( '#open-contact' ),
	    closeBtnContact = ( '#close-contact' ),
		
		mainContent = ( '.content-block' ),
		mainContentFade = ( '#footer,#home' ),
		patternID = ( '#bg-pattern' ),
		
	    overlayID = ( '#overlay' ),
		overlayAboutID = ( '#overlay-about,#open-contact' ),
		overlayContactID = ( '#overlay-contact' ),
		
		ContentLeaveAnimation = ( 'animated fadeOutDown' ),
		ContentEnterAnimation = ( 'animated fadeInDown' ),
		
		OverlayContentOpenAnimation = ( 'animated fadeInUpBig' ),
		OverlayContentCloseAnimation = ( 'animated fadeOutDownBig' );
		
		ContactBtnOpenAnimation = ( 'animated fadeOutDownBig' ),
		ContactBtnCloseAnimation = ( 'animated fadeInDown' );
		
		
		
		$(openBtnContact).tooltip({ title: 'Contact'})
			  
		$(openBtn).click(function() {
		  
		  $(mainContent).removeClass(ContentEnterAnimation).addClass(ContentLeaveAnimation).fadeOut('slow');
		  $(mainContentFade).fadeOut('slow');
		  $(patternID).fadeOut('slow');
			   
			  setTimeout(function() {
				$(overlayID).fadeIn('slow');
				
				  setTimeout(function() {
					$(overlayAboutID).removeClass(OverlayContentCloseAnimation).addClass(OverlayContentOpenAnimation).fadeIn('slow'); 
					  
				  }, 500);
			  }, 650);
	    });
		
		
		$(closeBtn).click(function() {
			
		  $(overlayAboutID).removeClass(OverlayContentOpenAnimation).addClass(OverlayContentCloseAnimation).fadeOut('slow'); ;
		  
			  setTimeout(function() {
				$(overlayID).fadeOut('slow');
				
				  setTimeout(function() {
					$(mainContent).removeClass(ContentLeaveAnimation).addClass(ContentEnterAnimation).fadeIn('slow');
					$(mainContentFade).fadeIn('slow');
					$(patternID).fadeIn('slow');
					
				  }, 900);
			  }, 700);

	    });
		
		
		$(openBtnContact).click(function() {
			$(openBtnContact).tooltip('hide')
			$(openBtnContact).removeClass(ContactBtnCloseAnimation).addClass(ContactBtnOpenAnimation);
			$(overlayContactID).removeClass(OverlayContentCloseAnimation).addClass(OverlayContentOpenAnimation).fadeIn('slow')
			;
			 setTimeout(function() {
					$(closeBtnContact).removeClass(OverlayContentCloseAnimation).addClass(OverlayContentOpenAnimation).fadeIn('slow')
					   
			  }, 800);
	    });
		
		
		$(closeBtnContact).click(function() {
			$(closeBtnContact).removeClass(OverlayContentOpenAnimation).addClass(OverlayContentCloseAnimation).fadeOut('slow');
			
			setTimeout(function() {
				   $(overlayContactID).removeClass(OverlayContentOpenAnimation).addClass(OverlayContentCloseAnimation).fadeOut('slow');  
                   $(openBtnContact).removeClass(ContactBtnOpenAnimation).addClass(ContactBtnCloseAnimation);
				   
			  }, 200);
	    });

});


/**	5. AJAX SUBSCRIBE
 *****************************************************/
$(document).ready( function(){
	
	$('.subscribe-form').submit(function() {
		  var postdata = $('.subscribe-form').serialize();
		  $.ajax({
			  type: 'POST',
			  url: 'assets/subscribe.php',
			  data: postdata,
			  dataType: 'json',
			  success: function(json) {
				  if(json.valid == 0) {
					  $('.status-message').html(json.error);
					  $('.status-message').fadeIn('slow');
				  }
				  else {
					  $("input, textarea").val('');
					  $('.subscribe-form button').prop('disabled',true);
					  $('.status-message').html(json.message);
					   $('.status-message').fadeIn('slow');
				  }
			  }
			});
			return false;
		});
		
});

/**	6. AJAX CONTACT
 *****************************************************/
$(document).ready( function(){
	
	$('.contact-form form').submit(function() {
	
			$('.contact-form form .nameLabel').html('Name');
			$('.contact-form form .emailLabel').html('Email');
			$('.contact-form form .messageLabel').html('Message');
	
			var postdata = $('.contact-form form').serialize();
			$.ajax({
				type: 'POST',
				url: 'assets/sendmail.php',
				data: postdata,
				dataType: 'json',
				success: function(json) {
					if(json.nameMessage != '') {
						$('.contact-form form .nameLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic"> ' + json.nameMessage + '</span>');
					}
					if(json.emailMessage != '') {
						$('.contact-form form .emailLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic"> ' + json.emailMessage + '</span>');
					}
					if(json.messageMessage != '') {
						$('.contact-form form .messageLabel').append(' - <span class="violet" style="font-size: 13px; font-style: italic"> ' + json.messageMessage + '</span>');
					}
					if(json.nameMessage == '' && json.emailMessage == '' && json.messageMessage == '') {
							$('.contact-form .status-message-contact').addClass('animated fadeIn').html('EMAIL SENT SUCCESSFULLY.');
							$('input[type="text"],textarea').val('');
					}
				}
			});
			return false;
		});	
			
});

/**	7. GOOGLE ANALYTICS
 *****************************************************/
$(document).ready( function(){
	
	var google_analytics_id = '';  // Enter your ID here. like this: UA-2121212-22
		  
		  if(google_analytics_id != '') {
			  var _gaq = _gaq || [];
			  _gaq.push(['_setAccount', google_analytics_id]);
			  _gaq.push(['_trackPageview']);
			  
			  (function() {
			  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			  })();
		  }	
		  
});