			function sendEmail() {

				var msg = document.getElementById("order").value;
				var sub = document.getElementById("betreff").value;
				var url = "mailto:jaehan.kim@studmail.w-hs.de?subject=" + sub + "&body=" + msg;
				location.href = url;

			}
