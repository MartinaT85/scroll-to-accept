import "./styles.css";

const TandC = document.querySelector(".terms-and-conditions");
const watch = document.querySelector(".watch");
const acceptBtn = document.querySelector(".accept");

function intersection(payload) {
  if (payload[0].intersectionRatio === 1) {
    acceptBtn.disabled = false;
    observer.unobserve(TandC.lastElementChild);
  }
}

const observer = new IntersectionObserver(intersection, {
  root: TandC,
  threshold: 1
});
observer.observe(TandC.lastElementChild);
