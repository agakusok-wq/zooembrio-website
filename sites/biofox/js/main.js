(() => {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".menu-toggle");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-q");
    btn?.addEventListener("click", () => {
      const open = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((el) => el.classList.remove("open"));
      if (!open) item.classList.add("open");
    });
  });

  const slides = [...document.querySelectorAll(".review-slide")];
  const dotsWrap = document.querySelector(".dots");
  let index = 0;

  const render = () => {
    slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
    dotsWrap?.querySelectorAll("button").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  };

  if (slides.length && dotsWrap) {
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Отзыв ${i + 1}`);
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        index = i;
        render();
      });
      dotsWrap.appendChild(dot);
    });

    document.querySelector(".slider-btn.prev")?.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      render();
    });
    document.querySelector(".slider-btn.next")?.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      render();
    });
  }

  const form = document.querySelector("#samples-form");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const comment = String(data.get("comment") || "").trim();
    const subject = encodeURIComponent("Заявка на образцы BIOFOX");
    const body = encodeURIComponent(
      `Имя: ${name}\nEmail: ${email}\n\nКомментарий:\n${comment}`
    );
    window.location.href = `mailto:Biofox.info@yandex.ru?subject=${subject}&body=${body}`;
  });
})();
