fetch('/api/delivery')
    .then(response => response.json())
    .then(data => {
        document.getElementById('delivery-state').textContent = data.delivery;
    })
    .catch(error => {
        console.error('Error fetching delivery info:', error);
        document.getElementById('delivery-state').textContent = '문제 발생';
    });