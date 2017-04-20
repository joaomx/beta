require('ajaxchimp');

export default class NewsletterForm {
	constructor (el) {
		$(document).ready(function () {
			console.log('el: ', $(el)[0] );
			console.log('form: ', $('mc-embedded-subscribe-form') );
			console.log('form.submit: ', $('#mc-embedded-subscribe-form').submit );
			console.log('ajaxchimp: ', $.ajaxChimp);
			$('#mc-embedded-subscribe-form').submit ( function(ev) {
				console.log('ev: ',ev);
				ev.preventDefault();

				var $form = $(el);
				$.ajax({
					type: $form.attr('method'),
					url: $form.attr('action').replace('/post?', '/post-json?').concat('&c=?'),
					data: $form.serialize(),
	  			timeout: 5000, // Set timeout value, 5 seconds
					cache: false,
					dataType: 'jsonp',
					contentType: "application/json; charset=utf-8",
					error: function(err) { // put user friendly connection error message
						console.log('err: ',err);

						$('#err_connect').style('display: block;');
					},
					success: function(data) {
						if (data.result != "success") {
							// mailchimp returned error, check data.msg
							$('#mce_EMAIL').addClass('state-error');
							console.log('success err: ',data);
						} else {
							// It worked, carry on...
							console.log('success: ', data);
						}
					}
				});

				return false;
			});
		});
	}
}
