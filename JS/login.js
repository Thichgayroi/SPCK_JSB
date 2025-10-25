document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

	
  const password = document.getElementById("password").value.trim();

  // Lấy dữ liệu người dùng từ localStorage
  const userData = localStorage.getItem(username);

  if (!userData) {
    alert("Tài khoản không tồn tại!");
    return;
  }

  const parsedData = JSON.parse(userData);

  if (password === parsedData.password) {
    alert("Đăng nhập thành công!");

    // Lưu người dùng hiện tại vào localStorage
    const loggedInUser = {
      username: username,
      email: parsedData.email
    };
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    // Chuyển sang trang chính
    window.location.href = "index.html";
  } else {
    alert("Sai mật khẩu!");
  }
});
