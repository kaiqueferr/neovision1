let email = $('#txEmail');
let name = $('#txName');

function envionm()
{
	let obj = {
		nome: name.val(),
		email: email.val()
	};

	$.ajax({
		type: "POST",
		url: "https://85k7bv04na.execute-api.us-east-1.amazonaws.com/dev/register",
		dataType : 'json',
		headers: {"candidate": "kaique.ferr@gmail.com" },
		data: obj,
	}).fail(function() {
		alert( "erro!" );
	  });

	name.val('');
	email.val('');
}
					   