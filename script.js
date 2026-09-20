// Элементы интерфейса калькулятора стоимости
const areaInput = document.getElementById('room-area');
const pestSelect = document.getElementById('pest-type');
const priceDisplay = document.getElementById('price-value');

// Функция расчета цены (Строго: Площадь * 140)
function calculatePrice() {
    if (!areaInput || !priceDisplay) return;
    
    const area = parseFloat(areaInput.value) || 0;
    const totalPrice = area * 140;
    
    priceDisplay.innerText = totalPrice;
}

// Слушатели событий ввода для калькулятора
if (areaInput && pestSelect) {
    areaInput.addEventListener('input', calculatePrice);
    pestSelect.addEventListener('change', calculatePrice);
}

// Выполняем расчет цены один раз при первой загрузке сайта
document.addEventListener('DOMContentLoaded', calculatePrice);
