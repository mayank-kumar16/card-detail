let submitBtn = document.querySelector(".submit-btn")

      submitBtn.addEventListener("click", function(e){
          e.preventDefault();

          let cardNum = document.querySelector(".card-num").value;
          let month = document.querySelector(".month").value;
          let year = document.querySelector(".year").value;

          let showNum = document.querySelector(".numeros");
          let showMonth = document.querySelector(".showMonth");
          let showYear = document.querySelector(".showYear");

          let cardArray = [cardNum.slice(0,4), cardNum.slice(4,8), cardNum.slice(8,12), cardNum.slice(12,16)];

          showNum.innerHTML = cardArray.join(" ");
          showMonth.innerHTML = month;
          showYear.innerHTML = year;

          console.log(cardArray);
      })