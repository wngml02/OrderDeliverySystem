fetch('/api/delivery')
    .then(response => response.json())
    .then(data => {
        document.getElementById('delivery-state').textContent = data.delivery;
    })
    .catch(error => {
        console.error('Error fetching delivery info:', error);
        document.getElementById('delivery-state').textContent = '문제 발생';
    });

const orderInput = document.getElementById('orderInput');
const order = orderInput.value;

function sendOrder() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/order');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('주문 전송 성공');
        } else {
            console.error('주문 전송 실패');
        }
    };
    xhr.send(JSON.stringify({ order: order }));
}