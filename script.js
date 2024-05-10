document.addEventListener('DOMContentLoaded', () => {
  let searchForm = document.querySelector('.header .search-form');
  document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
      shoppingCart.classList.remove('active');
      loginForm.classList.remove('active');
      navbar.classList.remove('active');
  }


  let loginForm = document.querySelector('.login-form');
  document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
      shoppingCart.classList.remove('active');
      navbar.classList.remove('active');
  }
  let navbar = document.querySelector('.navbar');
  document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
      shoppingCart.classList.remove('active');
      loginForm.classList.remove('active');
  }
  window.onscroll = () =>
    {
      searchForm.classList.remove('active');
      shoppingCart.classList.remove('active');
      loginForm.classList.remove('active');
      navbar.classList.remove('active');
    }
var swiper = new Swiper(".products-slider",
      {
        loop:true, spaceBetween:20,
      autoplay: {
        delay:7500,
        disableOnInteraction: false,
      },
    breakpoints: {
    0:{
      slidesPerView:1,}
    ,768: {slidesPerView:2,},
    1020: {slidesPerView:3,},
    },});

  let list = document.querySelector('.list');
  let listCard = document.querySelector('.listCard');
  let body = document.querySelector('.body');
  let total = document.querySelector('.total');
  let quantity = document.querySelector('.quantity');

  let products =[
    {
      id: 1,
      name: "pro",
      image: "carrot.jpg",
      price: 554
    },
    {
      id: 2,
      name: "pror",
      image: "carrot.jpg",
      price: 557
    },
    {
      id: 3,
      name: "prod",
      image: "banana.jpg",
      price: 555
    }
  ];
  let listCards =[];
  function initApp(){
    products.forEach((value,key)=> {
      let newDiv = document.createElement('div');
      newDiv.classList.add('item');
      newDiv.innerHTML = `
        <img src="image/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocalString()}</div>
        <button onclick="addToCart(${hey})">Add To Cart</button>
      `;
      list.appendChild(newDiv);
    })
  }
});
// Wrap your jQuery code within the document ready function
$(document).ready(function() {

    var properties = ["name", "wins", "draws", "losses", "total"];

    $.each(properties, function (i, val) {
        var orderClass = "";

        $("#" + val).click(function (e) {
            e.preventDefault();
            $(".filter__link.filter__link--active")
                .not(this)
                .removeClass("filter__link--active");
            $(this).toggleClass("filter__link--active");
            $(".filter__link").removeClass("asc desc");

            if (orderClass == "desc" || orderClass == "") {
                $(this).addClass("asc");
                orderClass = "asc";
            } else {
                $(this).addClass("desc");
                orderClass = "desc";
            }

            var parent = $(this).closest(".header__item");
            var index = $(".header__item").index(parent);
            var $table = $(".table-content");
            var rows = $table.find(".table-row").get();
            var isSelected = $(this).hasClass("filter__link--active");
            var isNumber = $(this).hasClass("filter__link--number");

            rows.sort(function (a, b) {
                var x = $(a).find(".table-data").eq(index).text();
                var y = $(b).find(".table-data").eq(index).text();

                if (isNumber == true) {
                    if (isSelected) {
                        return x - y;
                    } else {
                        return y - x;
                    }
                } else {
                    if (isSelected) {
                        return x.localeCompare(y);
                    } else {
                        return y.localeCompare(x);
                    }
                }
            });

            $.each(rows, function (index, row) {
                $table.append(row);
            });

            return false;
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var headerSection = document.getElementById("home");
    var imageIndex = 0;
    var imageArray = [
        "https://i0.wp.com/discvr.blog/wp-content/uploads/2020/12/The-beautiful-yet-feisty-Lilac-breasted-roller-bird-Africas-most-colorful-bird-2.png?resize=1024%2C576&ssl=1",
        "https://th.bing.com/th/id/R.41af45341d79e417a60c0946bf72bd2b?rik=0BB91tiFZZDrRQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f03%2fWild-Animals-Wallpaper-HD.jpg&ehk=GZDBtXQNLQbz%2bjPrjBmWmBLeKldT0y7Epk%2b9%2fE6Mk3A%3d&risl=&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/R.5a946614032f6485a32505b74c64a4b6?rik=bIOS5e21CAPBPg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f03%2fCool-Wild-Animal-Wallpaper-For-Desktop.jpg&ehk=ZHKBgyel59lcZJkvApLpZbuOBEoOaluNQdWYEgBGlt8%3d&risl=&pid=ImgRaw&r=0",
      "https://wallup.net/wp-content/uploads/2016/01/275471-animals-moose.jpg","https://wallpapercave.com/wp/wp2049736.jpg"
        // Add more image URLs as needed
    ];

    function changeImage() {
        headerSection.style.opacity = 0; // Fade out the current image

        setTimeout(function() {
            headerSection.style.backgroundImage = "url('" + imageArray[imageIndex] + "')"; // Change the background image
            headerSection.style.opacity = 1; // Fade in the new image
            imageIndex = (imageIndex + 1) % imageArray.length; // Move to the next image
        }, 500); // Adjust the duration to match the transition property in CSS
    }

    // Change the image every 5 seconds (adjust as needed)
    setInterval(changeImage, 5000);
});