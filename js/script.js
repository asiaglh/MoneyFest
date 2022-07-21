"use strict"

document.getElementById('discount').onclick = function() {
  document.getElementById('advertising').hidden = true;
};

$("#sendMail").on("click", function(e){
	e.preventDefault();
	var name = $("#formName").val().trim();
	var email = $("#formEmail").val().trim();
	var tel = $("#formTel").val().trim();


	if (name == ""){
		alert("Введіть ім'я");
		return false;
	} else if (email == ""){
		alert("Введіть email");
		return false;
	} else if (message == ""){
		alert("Введіть повідомлення");
		return false;
	}
  
	$.ajax({
		url:'send.php',
		type:'POST',
		data:{ 'name': name, 'email':email, 'tel': tel},
		beforeSend: function() {
			$("#sendMail").prop("disabled", true);
		},
		success: function(data){
			if(!data)
				alert("Виникла помилка, повідомлення не відправлене!");
			else
				$("#mailForm").trigger("reset");
			
			$("#sendMail").prop("disabled", false);
		}
	});


});

function formAddError(input){
  input.parentElement.classList.add('_error');
  input.classList.add('_error');
}

function formRemoveError(input){
input.parentElement.classList.remove('_error');
input.classList.remove('_error');
}

//перевірка пошти
function emailTest(input){
  return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(input.value);
};

//перевірка телефону
function phoneTest(input){
  return /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(input.value)
};

//перевірка імені
function nameTest(input){
  return /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/.test(input.value)
}ж
