function openTab(tabId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

function generateQRCode() {
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = ''; // Очистка предыдущего QR-кода

    let content;
    if (document.getElementById('link').classList.contains('active')) {
        content = document.getElementById('linkInput').value;
    } else if (document.getElementById('text').classList.contains('active')) {
        content = document.getElementById('textInput').value;
    } else if (document.getElementById('photo').classList.contains('active')) {
        content = document.getElementById('photoInput').value;
    } else if (document.getElementById('social').classList.contains('active')) {
        content = document.getElementById('socialInput').value;
    } else if (document.getElementById('video').classList.contains('active')) {
        content = document.getElementById('videoInput').value;
    }

    if (content) {
        new QRCode(qrcodeContainer, {
            text: content,
            width: 145,
            height: 145
        });
        document.querySelector('.btns').style.display = 'flex';
        linkInput.value = '';
        textInput.value = '';
        photoInput.value = '';
        socialInput.value = '';
        videoInput.value = '';
    } else {
        qrcodeContainer.innerHTML = '<p>Пожалуйста, введите данные для генерации QR-кода.</p>';
        setTimeout(() => qrcodeContainer.innerHTML = '', 2000);
        document.querySelector('.btns').style.display = 'none';
    }
}
