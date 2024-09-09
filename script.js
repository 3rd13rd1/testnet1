document.addEventListener('DOMContentLoaded', function() {
    // API'den verileri çek
    fetch('https://api.binance.com/api/v1/ticker/24hr')
        .then(response => response.json())
        .then(data => {
            // Tabloya veri ekle
            const tableBody = document.querySelector('#crypto-table tbody');
            tableBody.innerHTML = ''; // Eski verileri temizle

            data.forEach(item => {
                // Tabloya satır ekle
                const row = document.createElement('tr');
                
                row.innerHTML = `
                    <td>${item.symbol}</td>
                    <td>${item.lastPrice}</td>
                    <td>${item.priceChangePercent}</td>
                    <td>${item.volume}</td>
                    <td>${item.highPrice}</td>
                    <td>${item.lowPrice}</td>
                `;
                
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('API çağrısı başarısız:', error));
});
