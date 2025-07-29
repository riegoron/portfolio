document.addEventListener('DOMContentLoaded', function () {
  // 🔁 Proxy Image Loader
  const useProxy = true;
  const proxyURL = "https://corsproxy.io/?";

  document.querySelectorAll('.proxy-img').forEach(img => {
    const original = img.getAttribute('src');
    img.src = useProxy ? proxyURL + original : original;
  });

  // 🔁 Scroll Animation Delay Setter
  const items = document.querySelectorAll('.item');
  const total = items.length;
  const duration = 30; // seconds

  items.forEach((item, index) => {
    const delay = (duration / total) * (total - index - 1) * -1;
    item.style.animationDelay = `${delay}s`;
  });
});
