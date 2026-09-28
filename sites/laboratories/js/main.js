(() => {
  const drawer = document.querySelector(".drawer");
  const openBtn = document.querySelector(".menu-btn");
  const closeBtn = document.querySelector(".drawer-close");
  const backdrop = document.querySelector(".drawer-backdrop");

  const open = () => drawer?.classList.add("open");
  const close = () => drawer?.classList.remove("open");

  openBtn?.addEventListener("click", open);
  closeBtn?.addEventListener("click", close);
  backdrop?.addEventListener("click", close);
  drawer?.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));

  const cookie = document.querySelector(".cookie");
  if (cookie && !localStorage.getItem("opulab_cookie_ok")) {
    cookie.classList.add("show");
    document.body.classList.add("has-cookie");
  }
  cookie?.querySelector("button")?.addEventListener("click", () => {
    localStorage.setItem("opulab_cookie_ok", "1");
    cookie.classList.remove("show");
    document.body.classList.remove("has-cookie");
  });

  const topBtn = document.querySelector(".scroll-top");
  const onScroll = () => {
    if (!topBtn) return;
    topBtn.classList.toggle("show", window.scrollY > 500);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  topBtn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const form = document.querySelector("#contact-form");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const comment = String(data.get("comment") || "").trim();
    const subject = encodeURIComponent("Заявка OPULAB — лаборатории под ключ");
    const body = encodeURIComponent(
      `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}\n\nКомментарий:\n${comment}`
    );
    window.location.href = `mailto:info@opulab.ru?subject=${subject}&body=${body}`;
  });
})();
