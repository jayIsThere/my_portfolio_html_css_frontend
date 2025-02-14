			function sendEmail() {

				//var msg = document.getElementById("order").value;

				var checkboxes = document.forms[0];
				var text = "";
				var i;

				

				for (i = 0; i < checkboxes.length; i++) {

					if (checkboxes[i].checked) {

					text = text + checkboxes[i].value + " ";

					}

				}

				var url = "mailto:jaehan.kim@studmail.w-hs.de?subject=send%20me&body="+text;

				location.href = url;

			}
