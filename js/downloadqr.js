function downloadQRCode(format) {
    const qrcodeContainer = document.getElementById('qrcode');
    
        // Используем html2canvas для создания изображения PNG или JPG
        html2canvas(qrcodeContainer).then(canvas => {
            const downloadLink = document.createElement('a');
            if (format === 'png') {
                // Создаем ссылку на скачивание
                downloadLink.href = canvas.toDataURL('image/png');
                downloadLink.download = 'qrcode.png';
            } else if (format === 'jpg') {
                // Создаем ссылку на скачивание
                downloadLink.href = canvas.toDataURL('image/jpeg');
                downloadLink.download = 'qrcode.jpg';
            }
            downloadLink.click();
        });
    }