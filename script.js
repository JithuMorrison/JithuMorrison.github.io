document.addEventListener('DOMContentLoaded', () => {
  let searchForm = document.querySelector('.header .search-form');
  document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
  }

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
navbar.classList.toggle('active');
searchForm.classList.remove('active');
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

});

const placeholders = [
    "🔍 Pretend this works... go ahead, try me!",
    "Type anything... I dare you 😏",
    "Looking for something? You won’t find it",
    "This search bar is just vibing 😌",
    "Shhh... I’m undercover. Not really working 👀",
    "Feeling lucky? This won't help. 😅",
    "Search me... or don’t. I won’t judge.",
    "Looking for something? So am I.",
    "Spoiler: This doesn’t search anything 🤫",
    "A search box with trust issues."
  ];

const randomPlaceholder = placeholders[Math.floor(Math.random() * placeholders.length)];
document.getElementById("search-box").placeholder = randomPlaceholder;

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
        "https://tech-prospect.com/wp-content/uploads/2020/02/Tips-for-Successful-Mobile-App-Development-and-Deployment-scaled.jpg",
        "https://www.pixaura.com/wp-content/uploads/2021/01/web-hero.png",
        "https://theplaynet.com/wp-content/uploads/2023/07/Article-231.png", "https://media.licdn.com/dms/image/D4D12AQEdyYGxg6y0Qw/article-cover_image-shrink_720_1280/0/1655959968583?e=2147483647&v=beta&t=SVVMt4V4nJ7zPnmOhugwnzexGT1DLzKmTuwiZAPAXbs","https://beinsure.com/wp-content/uploads/2022/08/Cyber-Insurance.jpg","https://wallpapercave.com/wp/wp2049736.jpg"
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

const typed  = new Typed('.multiple-text',{
    strings: ['Frontend Developer','App Developer','Game Developer','Youtuber'],
    typespeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      }, observerOptions);

      // Observe all scroll-reveal elements
      document.querySelectorAll(".scroll-reveal").forEach((el) => {
        observer.observe(el);
      });

      // Add staggered animation delays
      document.querySelectorAll(".highlight").forEach((el, index) => {
        el.style.animationDelay = `${0.2 * index}s`;
      });

      document.querySelectorAll(".project-card").forEach((el, index) => {
        el.style.animationDelay = `${0.1 * index}s`;
      });

      // Smooth scrolling for any internal links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });

      // Add loading animation when images are loading
      document.querySelectorAll("img").forEach((img) => {
        if (!img.complete) {
          img.classList.add("loading-shimmer");
          img.addEventListener("load", () => {
            img.classList.remove("loading-shimmer");
          });
        }
      });

      // Add parallax effect to floating elements
      window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        const parallaxElements =
          document.querySelectorAll(".floating-elements");

        parallaxElements.forEach((element) => {
          const speed = 0.5;
          element.style.transform = `translateY(${scrolled * speed}px)`;
        });
      });

      // Add mouse movement effect to containers
      document
        .querySelectorAll(".jithucontainer-curve")
        .forEach((container) => {
          container.addEventListener("mousemove", (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 150;
            const rotateY = (centerX - x) / 150;

            container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
          });

          container.addEventListener("mouseleave", () => {
            container.style.transform = "";
          });
        });