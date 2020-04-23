AFRAME.registerComponent("rotate-on-mouseleave", {
  init: function () {
    var el = this.el;
    this.el.addEventListener("mouseleave", function () {
      el.setAttribute("animation", "property: rotation; to: 0 383.15 0; dur: 3000; easing: linear; loop: true");
    });

    this.el.addEventListener("mouseenter", function () {
        el.setAttribute("animation", "property: null");
        el.setAttribute("rotation", "0 23.15 0");
      });
  },
});
