let btn = document.querySelector('.wrap-popup .btn');
let btns = document.querySelectorAll('.wrap-popup .popup__tab__item');
let popup = document.querySelector('.wrap-popup .popup__tab');
let cardBtn = document.querySelectorAll('.btns__wrap-popup .card-btn');
let activeTotal = document.querySelector('.nav__item-active span');

let priceAsc = document.querySelector('.price-asc');
let priceDesc = document.querySelector('.price-desc');
let DateAsc = document.querySelector('.date-asc');
let DateDesc = document.querySelector('.date-desc');

btn.addEventListener('click', () => {
  popup.classList.toggle('popup__tab--active');
  document.querySelector('.popup-arr').classList.toggle('rotated');
});

btns.forEach((btns) => {
  btns.addEventListener('click', (e) => {
    let html = e.target.innerHTML;
    btn.innerHTML = html + '<img src="./assets/icons/arr.svg" alt="" class="popup-arr" />';
    document
      .querySelector('.popup__tab__item--active')
      .classList.remove('popup__tab__item--active');
    e.target.classList.add('popup__tab__item--active');
    popup.classList.toggle('popup__tab--active');
  });
});

cardBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.target.parentNode.parentNode
      .querySelector('.popup__tab')
      .classList.toggle('popup__tab--active');
  });
});

function ascSort() {
  let cards = document.querySelector('.cards');

  for (let i = 0; i < cards.children.length; i++) {
    for (let j = i; j < cards.children.length; j++) {
      if (
        +cards.children[i].getAttribute('data-price') >
        +cards.children[j].getAttribute('data-price')
      ) {
        let replaceNode = cards.replaceChild(cards.children[j], cards.children[i]);
        insertAfter(replaceNode, cards.children[i]);
      }
    }
  }
}

function descSort() {
  let cards = document.querySelector('.cards');

  for (let i = 0; i < cards.children.length; i++) {
    for (let j = i; j < cards.children.length; j++) {
      if (
        +cards.children[i].getAttribute('data-price') <
        +cards.children[j].getAttribute('data-price')
      ) {
        let replaceNode = cards.replaceChild(cards.children[j], cards.children[i]);
        insertAfter(replaceNode, cards.children[i]);
      }
    }
  }
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

function toggle(source) {
  checkboxes = document.getElementsByName('checkph');
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = source.checked;
  }
}

document.querySelector('.btn').addEventListener('click', () => {
  checkboxes = document.getElementsByName('checkph');

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
      checkboxes[i].parentNode.parentNode.parentNode.style.display = 'none';
      checkboxes[i].checked = false;
      document.querySelector('.custom-checkbox').checked = false;
    }
  }
});

var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
  },
});
var swiper2 = new Swiper('.mySwiper2', {
  pagination: {
    el: '.swiper-pagination',
  },
});

priceAsc.addEventListener('click', ascSort);
priceDesc.addEventListener('click', descSort);
DateAsc.addEventListener('click', ascSort);
DateDesc.addEventListener('click', descSort);
