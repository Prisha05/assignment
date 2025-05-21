const NUM_CHECKOUTS = 3;
const queues = Array.from({ length: NUM_CHECKOUTS }, () => []);

const queuesContainer = document.getElementById('queues');
const form = document.getElementById('customerForm');
const itemsInput = document.getElementById('itemsInput');

function renderQueues() {
  queuesContainer.innerHTML = '';
  queues.forEach((queue, index) => {
    const total = queue.reduce((sum, val) => sum + val, 0);
    const div = document.createElement('div');
    div.className = 'checkout';
    div.innerHTML = `<h3>Checkout ${index + 1}</h3>
                     <p>Queue: [${queue.join(', ')}]</p>
                     <p>Total Items: ${total}</p>`;
    queuesContainer.appendChild(div);
  });
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const items = parseInt(itemsInput.value);
  if (isNaN(items) || items <= 0) return;

  let minIndex = 0;
  let minTotal = queues[0].reduce((a, b) => a + b, 0);
  for (let i = 1; i < queues.length; i++) {
    const total = queues[i].reduce((a, b) => a + b, 0);
    if (total < minTotal) {
      minTotal = total;
      minIndex = i;
    }
  }

  
  queues[minIndex].push(items);
  itemsInput.value = '';
  renderQueues();
});


renderQueues();
