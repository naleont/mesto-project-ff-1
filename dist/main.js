(()=>{"use strict";var e=document.querySelector("#card-template").content,t=document.querySelector(".places__list");function c(e){var t=e.querySelector(".card__delete-button");t.addEventListener("click",(function(){t.closest(".places__item").remove()}))}initialCards.forEach((function(r){cardElement=function(t,c){var r=e.querySelector(".card").cloneNode(!0);return cardImage=r.querySelector(".card__image"),cardImage.src=t.link,cardImage.alt="Фотография. "+t.name,cardText=r.querySelector(".card__title"),cardText.textContent=t.name,c(r),r}(r,c),function(e){t.append(e)}(cardElement)}))})();