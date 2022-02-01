

function animateValue(obj, start, end, duration) {

    let startTimestamp = null;
    const step = (timestamp) => {

      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = (Math.floor(progress * (end - start) + start)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

jQuery(document).ready(function () {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.75
    }
  
    const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const target = entry.target
                  console.log(target)
                  const obj = document.getElementById("counter-value");
                  animateValue(obj, 0, 10000000, 2000);
                  observer.unobserve(target);
              }
          })
      }, options)
    observer.observe(document.querySelector('.info-block__colored'));
})

  
  