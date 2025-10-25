// Khi nhấn nút đăng ký
document.getElementById("signupForm").addEventListener("submit", function(e){
	e.preventDefault();

	const username = document.getElementById("username").value.trim();
	const email = document.getElementById("email").value.trim();
	const password = document.getElementById("password").value.trim();
	const agree = document.getElementById("chkbox").checked;

	if(!agree){
		alert("Bạn phải đồng ý với điều khoản trước khi đăng ký!");
		return;
	}

	if(password.length < 8){
		alert("Mật khẩu phải đủ 8 kí tự")
		return;
	}

	// Kiểm tra nếu tài khoản đã tồn tại
	if(localStorage.getItem(username)){
		alert("Tên người dùng đã tồn tại, hãy chọn tên khác!");
		return;
	}

	// Lưu vào localStorage
	const userData = {
		email: email,
		password: password
	};
	localStorage.setItem(username, JSON.stringify(userData));

	alert("Đăng ký thành công! Giờ bạn có thể đăng nhập.");
	window.location.href = "login.html"; // chuyển sang trang đăng nhập
});
