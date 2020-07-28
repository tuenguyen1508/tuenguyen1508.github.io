$(function() {
  //Simple filter controls
  $('.simplefilter li').click(function() {
    $('.simplefilter li').removeClass('active');
    $(this).addClass('active');
  });
  //Multifilter controls
  $('.multifilter li').click(function() {
    $(this).toggleClass('active');
  });
  //Shuffle control
  $('.shuffle-btn').click(function() {
    $('.sort-btn').removeClass('active');
  });
  //Sort controls
  $('.sort-btn').click(function() {
    $('.sort-btn').removeClass('active');
    $(this).addClass('active');
  });
});

function validateForm()
{
    // Bước 1: Lấy giá trị của username và password
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
 
    // Bước 2: Kiểm tra dữ liệu hợp lệ hay không
    if (firstName == ''){
        alert('Bạn chưa nhập họ - tên đệm');
    }
    else if (lastName == '')
    {
        alert('Bạn chưa nhập tên');
    }
    else if (email == ''){
        alert('Bạn chưa nhập Email');
    }
    else if (email.value != '/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/'){
        alert('Email không tồn tại');
    }
    else if (subject == ''){
        alert('Bạn chưa nhập Subject');
    }
    else{
        alert('Dữ liệu hợp lệ, ta có thể chấp nhận submit form');
        return true;
    }
 
    return false;
}