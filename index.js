const ratings = document.getElementsByClassName("rating");
const submitButton = document.getElementById("submit-button");
const card = document.getElementById("main-cnt");
let ratingSelected;

let selectedRating;

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", function () {
    for (let j = 0; j < ratings.length; j++) {
      if (ratings[j].classList.contains("selected-rating")) {
        ratings[j].classList.remove("selected-rating");
        console.log("removed");
      }
    }
    ratings[i].classList.add("selected-rating");
    ratingSelected = ratings[i].textContent;

    console.log(ratings);
  });
}

if (submitButton && card) {
  submitButton.addEventListener("click", function () {
    while (card.lastElementChild) {
      card.removeChild(card.lastElementChild);
    }

    card.style.alignItems = "center";
    card.style.paddingInline = "24px";

    const image = document.createElement("img");
    image.src = "./images/illustration-thank-you.svg";
    card.appendChild(image);

    const ratingSelectedParagraph = document.createElement("p");
    ratingSelectedParagraph.id = "selected-rating-p";
    ratingSelectedParagraph.textContent = `You selected ${ratingSelected} out of 5`;
    card.appendChild(ratingSelectedParagraph);

    const thankYouH1 = document.createElement("h1");
    thankYouH1.id = "thanksH1";
    thankYouH1.textContent = "Thank You!";
    card.appendChild(thankYouH1);

    const thanksParagraph = document.createElement("p");
    thanksParagraph.id = "thanks-p";
    thanksParagraph.textContent =
      "We appreciate you taking the time to give a ratings. If you ever need more support, don't hesitate to get in touch!";
    card.appendChild(thanksParagraph);
  });
}
