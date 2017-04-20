require('ajaxchimp');

export default class NewsletterForm {
	constructor (el) {
		$(document).ready(function () {

			$('#mc-embedded-subscribe-form').submit ( function(ev) {
				ev.preventDefault();

				let errEl = $('#newsletter-err');
				let inputField = $('#mce-EMAIL');
				let loadingIcon = $('#newsletter-loading');
				let successMessage = $('#newsletter-success');
				let $form = $(el);

				loadingIcon.show();

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

						loadingIcon.hide();
						errEl.html(`
							Erro ao comunicar com o servidor <br/>
							Verifique a sua ligação`);
						errEl.show();
					},
					success: function(data) {
						if (data.result != "success") {
							// mailchimp returned error, check data.msg

							loadingIcon.hide();
							inputField.addClass('NewsletterForm-input--error')
							errEl.text(`
								Erro no e-mail introduzido
								`);

							let timer = setTimeout(function(){
								inputField.removeClass('NewsletterForm-input--error');
								errEl.hide();
							}, 5000);
							inputField.one('input', function(){
								window.clearTimeout(timer);
								inputField.removeClass('NewsletterForm-input--error');
								errEl.hide();
							});
							errEl.show();

						} else {
							// It worked, carry on...
							loadingIcon.hide();
							$form[0].reset();
							$form.fadeOut(200, function(){
								successMessage.fadeIn(250, "linear");
							});


						}
					}
				});

				return false;
			});
		});
	}
}
