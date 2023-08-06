export default {
 
  mounted(el, binding, vnode) {
        
        el.parentNode.lazyLoadItemObserver =
          el.parentNode.lazyLoadItemObserver ||
          new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const lazyImage = entry.target;

                lazyImage.srcset = lazyImage.getAttribute("data-srcset");

                lazyImage.addEventListener("load", () => {
                  lazyImage.classList.add("is-lazyloaded");
                });
                el.parentNode.lazyLoadItemObserver.unobserve(lazyImage);
              }
            });
          });
        el.parentNode.lazyLoadItemObserver.observe(el);
      },
      unmounted(el) {
        console.log("unobserving", el);
        el.parentNode.lazyLoadItemObserver.unobserve(el);
      },

};