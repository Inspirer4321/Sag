document.querySelectorAll(".list1").forEach(function(element) {
    element.addEventListener("click", function() {
 
      window.location.href = "catalog.html";
    });
  });

  document.querySelectorAll(".list2").forEach(function(element) {
    element.addEventListener("click", function() {
 
      window.location.href = "client.html";
    });
  });
  
  document.querySelectorAll(".list3").forEach(function(element) {
    element.addEventListener("click", function() {
 
      window.location.href = "rate.html";
    });
  });
  
  document.querySelectorAll(".list4").forEach(function(element) {
    element.addEventListener("click", function() {
 
      window.location.href = "about.html";
    });
  });

  var backButton = document.querySelector(".back");
if (backButton) {
  backButton.addEventListener("click", function() {
    
    window.location.href = "index.html";
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const employeeList = document.querySelector('.down-list');
  const chooseEmployee = document.querySelector('.down');

  if (chooseEmployee) {
    chooseEmployee.addEventListener('click', function () {
      employeeList.classList.toggle('visible');
    });

    employeeList.addEventListener('click', function (event) {
      const target = event.target;

      if (target.classList.contains('list')) {
        const selectedEmployee = target.textContent.trim();
        chooseEmployee.textContent = `${selectedEmployee}`;
        employeeList.classList.remove('visible');
      }
    });

    
    document.addEventListener('click', function (event) {
      const target = event.target;

      if (!target.closest('.down') && !target.classList.contains('list')) {
        employeeList.classList.remove('visible');
      }
    });

  
    employeeList.addEventListener('click', function (event) {
      event.stopPropagation();
    });
  }
});
