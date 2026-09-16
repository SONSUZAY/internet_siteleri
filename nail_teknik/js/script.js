function sendWhatsApp() {
    // Form elemanlarını al
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // Telefon numaranız (Uluslararası formatta, başında + olmadan)
    const myNumber = "905073814870";

    // Mesaj metnini oluştur
    const text = `Merhaba Nail Teknik,%0A%0ABen *${name}*.%0A*Hizmet:* ${service}%0A*Telefon:* ${phone}%0A*Mesaj:* ${message}`;

    // WhatsApp URL'sini oluştur
    const whatsappUrl = `https://wa.me/${myNumber}?text=${text}`;

    // Yeni sekmede WhatsApp'ı aç
    window.open(whatsappUrl, '_blank');
}
