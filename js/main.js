;(function () {
	
	'use strict';



	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	var testimonialCarousel = function(){
		
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			autoHeight: true,
			smartSpeed: 800,
			autoHeight: true
		});

	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};

	var initJoinForm = function() {
		$('#join-form').on('submit', function() {
			if ($('#join-name').val().trim() === '' || $('#join-email').val().trim() === '') {
				$('#alert-join-invalid').removeClass('hide');
				$('#alert-join-invalid').addClass('show');
				setTimeout(function() {
					$('#alert-join-invalid').removeClass('show');
					$('#alert-join-invalid').addClass('hide');
				}, 5000);
				return false;
			}

			$('#join-btn').text('请等待...');
			$('#join-btn').prop('disabled', true);


			var iframe = $('<iframe></iframe>');
			iframe.attr('src', 'https://jpweb.chionlab.moe/postlog' + '?name=' + encodeURIComponent($('#join-name').val()) + '&email=' + encodeURIComponent($('#join-email').val()))
			iframe.css({'display': 'none'});
			
			$('body').append(iframe);

			iframe.on('load', function() {
				$('#alert-join-success').removeClass('hide');
				$('#alert-join-success').addClass('show');
				$('#join-btn').text('加入瓜皮科技');
				$('#join-btn').prop('disabled', false);

				setTimeout(function() {
					$('#alert-join-success').removeClass('show');
					$('#alert-join-success').addClass('hide');
				}, 10000);

				iframe.remove();
			});


			return false;
		});
	}

	
	$(function(){
		testimonialCarousel();
		contentWayPoint();
		initJoinForm();
	});


}());