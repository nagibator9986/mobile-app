document.getElementById("checkAgeButton").addEventListener("click", function () {
    var age = parseInt(document.getElementById("ageInput").value);
  
    if (age === 21) {
      // Создаем новый input и кнопку
      var newInput = document.createElement("input");
      newInput.type = "text";
      newInput.id = "confirmationInput";
      
      var confirmButton = document.createElement("button");
      confirmButton.textContent = "Подтвердить";
      confirmButton.addEventListener("click", function () {
        var confirmationText = document.getElementById("confirmationInput").value;
        if (confirmationText.toLowerCase() === "нет") {
          alert("Ошибка!");
          // Воспроизводим звук ошибки
          var errorSound = document.getElementById("errorSound");
          errorSound.play();
        }
      });
  
      // Вставляем новый input и кнопку после текущего контейнера
      var errorInputContainer = document.getElementById("errorInputContainer");
      errorInputContainer.appendChild(newInput);
      errorInputContainer.appendChild(confirmButton);
    }
  });
  