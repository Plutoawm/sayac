// script.js

// 1) Başlangıç tarihini tanımla (ISO formatında, yerel zaman dilimine görece)
const startDate = new Date('2025-03-14T19:21:00');

// 2) Farkı hesaplayıp ekrana yazdıran fonksiyon
function updateCounter() {
  const now = new Date();
  const diffMs = now - startDate; // aradaki fark (ms cinsinden)

  // Gün, saat, dakika, saniyeye dönüştür
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

  // Ekrana yaz
  document.getElementById('counter').textContent =
    `${days} gün, ${hours} saat, ${minutes} dakika, ${seconds} saniye`;
}

// İlk yüklemede hemen çalıştır, sonra her saniye güncelle
updateCounter();
setInterval(updateCounter, 1000);
