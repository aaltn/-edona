var formShowBtn = document.querySelector(".form-show");
var searchForm = document.querySelector(".search-form");

searchForm.classList.remove("modal-show");

formShowBtn.addEventListener("click", function(event) {
  event.preventDefault();
  if (searchForm.classList.contains("modal-show")) {
    searchForm.classList.remove("modal-show");
    searchForm.classList.remove("modal-error");
  } else {
    searchForm.classList.add("modal-show");
  }
});

// form.addEventListener("submit", function(event) {
//   if (!userName.value || !eMail.value) {
//     event.preventDefault();
//     searchForm.classList.remove("modal-error");
//     searchForm.offsetWidth = searchForm.offsetWidth;
//     searchForm.classList.add("modal-error");
//     // alert(eMail.value);
//     // alert(userName.value);
//   } else {
//     localStorage.setItem("userName", userName.value);
//   }
// });

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (searchForm.classList.contains("modal-show")) {
      searchForm.classList.remove("modal-show");
      searchForm.classList.remove("modal-error");      
    }
  }
});
