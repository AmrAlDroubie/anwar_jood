const mainSwiper = new Swiper("#full-screen-swiper", {
  speed: 400,
  slidesPerView: 1,
  navigation: {
    nextEl: ".full-screen-swiper-next",
    prevEl: ".full-screen-swiper-prev",
  },
  pagination: {
    el: ".full-screen-pagination",
    clickable: true,
  },
  rtl: true,
});

const testiSwiper = new Swiper("#testimonial-swiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  },
  pagination: {
    el: ".testimonial-pagi",
    clickable: true,
  },
});

function currentYear() {
  const footer_year = document.getElementById("footer-current-year");
  const date = new Date();
  const current_year = date.getFullYear();
  footer_year.textContent = current_year;
}
currentYear();

function footerScrollTop() {
  const topBtn = document.getElementById("scroll-top-footer");
  const body = document.querySelector("body");
  topBtn.onclick = function () {
    window.scrollTo({
      top: 0,
    });
  };
}
footerScrollTop();

const portifolioImages = document.querySelectorAll(".our-work-box");
portifolioImages.forEach((porti) => {
  porti.onclick = function () {
    let modalHtml = `
    <div class="modal fade" id="portifolio-modal">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
            <div class="modal-body">
                <img src="${porti.querySelector("img").src}" alt="portifolio">
            </div>
        </div>
    </div>
  </div>
    `;

    const portifolioPopup = document.getElementById("portifolio-popup");
    portifolioPopup.innerHTML = modalHtml;
    const portifolioModal = new bootstrap.Modal(
      document.getElementById("portifolio-modal")
    );
    portifolioModal.show();
  };
});
