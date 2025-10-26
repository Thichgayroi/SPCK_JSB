// Kiểm tra trạng thái đăng nhập khi tải trang
document.addEventListener("DOMContentLoaded", function () {
  const userInfo = document.getElementById("user-info");
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (loggedInUser) {
    // Nếu đã đăng nhập -> hiện avatar + nút đăng xuất
    userInfo.style.display = "flex";
  }
});

// Xử lý nút đăng xuất
document.getElementById("logout-btn").addEventListener("click", function () {
  // Xóa thông tin người dùng đang đăng nhập
  localStorage.removeItem("loggedInUser");

  alert("Đăng xuất thành công!");
  // Chuyển về trang đăng nhập
  window.location.href = "login.html";
});
