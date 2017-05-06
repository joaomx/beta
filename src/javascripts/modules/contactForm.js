require('ajaxchimp');

export default class ContactForm {
	constructor (el) {
		$(document).ready(function () {

			$('#mc-embedded-contact-form').submit ( function(ev) {
				ev.preventDefault();

				let errEl = $('#contact-err');

        let nameField = $('#mce-FNAME');
        let emailField = $('#mce-EMAIL');
        let numberField = $('#mce-MMERGE2');
        let interestField = $('#mce-MMERGE4');
        let messageField = $('#mce-MMERGE3');

				let loadingIcon = $('#contact-loading');
				let successMessage = $('#contact-success');
				let $form = $('#mc-embedded-contact-form');

				loadingIcon.toggleClass("fa-circle-o-notch fa-spin fa-fw");

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

						loadingIcon.toggleClass("fa-circle-o-notch fa-spin fa-fw");
						errEl.html(`
							Erro ao comunicar com o servidor <br/>
							Verifique a sua ligação`);
						errEl.show();
					},
					success: function(data) {
						if (data.result != "success") {
							// mailchimp returned error, check data.msg
              console.log('err: ',data);
							loadingIcon.toggleClass("fa-circle-o-notch fa-spin fa-fw");
							errEl.text(`
								Erro num dos campos
								`);

							let timer = setTimeout(function(){
								errEl.hide();
							}, 5000);

							errEl.show();
						} else {
							// It worked, carry on...
							loadingIcon.toggleClass("fa-circle-o-notch fa-spin fa-fw");
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
