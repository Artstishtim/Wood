// Данные товаров с категориями
const products = [
    {
        id: 1,
        name: "Резная деревянная шкатулка",
        description: "Изящная шкатулка из массива дуба с ручной резьбой. Идеально для хранения украшений и памятных вещей.",
        price: 4290,
        images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        specs: {
            "Материал": "Массив дуба",
            "Размер": "20×15×10 см",
            "Отделка": "Натуральное льняное масло",
            "Вес": "850 г",
            "Особенности": "Ручная резьба, бархатная подкладка"
        },
        category: "boxes",
        badge: "Ручная работа"
    },
    {
        id: 2,
        name: "Деревянная разделочная доска",
        description: "Практичная и стильная разделочная доска из ясеня с уникальной текстурой дерева.",
        price: 1890,
        images: ['https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        specs: {
            "Материал": "Ясень",
            "Размер": "35×25×2 см",
            "Обработка": "Пищевое минеральное масло",
            "Вес": "1.2 кг",
            "Уход": "Ручная мойка, периодическая обработка маслом"
        },
        category: "kitchen",
        badge: "Хит продаж"
    },
    {
        id: 3,
        name: "Рамка для фото из ореха",
        description: "Элегантная рамка для фотографий из натурального ореха. Подчеркнёт важные моменты вашей жизни.",
        price: 2490,
        images: ['https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        specs: {
            "Материал": "Грецкий орех",
            "Размер": "21×30 см",
            "Стекло": "Закалённое, антибликовое",
            "Цвет": "Натуральный орех",
            "Формат": "А4"
        },
        category: "decor",
        badge: "Эксклюзив"
    },
    {
        id: 4,
        name: "Деревянная подставка для ножей",
        description: "Удобная и безопасная подставка для ножей из массива бука. Сохранит остроту лезвий.",
        price: 3290,
        images: ['https://images.unsplash.com/photo-1590736969956-6d9c2a8d6977?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        specs: {
            "Материал": "Бук",
            "Размер": "25×12×8 см",
            "Вместимость": "6 ножей",
            "Особенности": "Магнитное крепление, наклонные пазы",
            "Отделка": "Вощение"
        },
        category: "kitchen"
    },
    {
        id: 5,
        name: "Набор деревянных ложек",
        description: "Набор из 5 ложек разного размера из вишни. Идеально для приготовления и сервировки.",
        price: 1590,
        images: ['https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        specs: {
            "Материал": "Вишня",
            "Количество": "5 шт",
            "Длина": "От 15 до 35 см",
            "Обработка": "Пищевое масло",
            "Упаковка": "Хлопковый мешочек"
        },
        category: "kitchen",
        badge: "Набор"
    },
    {
        id: 6,
        name: "Деревянная полка для специй",
        description: "Компактная полка для специй из берёзы. Организуйте пространство на кухне с помощью натурального дерева.",
        price: 2890,
        images: ['https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        specs: {
            "Материал": "Берёза",
            "Размер": "40×15×15 см",
            "Вместимость": "8 банок",
            "Крепление": "Настенное",
            "Отделка": "Пчелиный воск"
        },
        category: "furniture"
    },
    {
        id: 7,
        name: "Деревянная тетрадь с обложкой из кожи",
        description: "Эксклюзивная тетрадь с деревянными страницами и кожаной обложкой. Идеально для записей и скетчей.",
        price: 1890,
        images: ['https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        specs: {
            "Материал": "Берёза, натуральная кожа",
            "Размер": "А5 (15×21 см)",
            "Страницы": "120 листов",
            "Переплёт": "Ручной работы",
            "Особенности": "Ляссе, кармашек"
        },
        category: "stationery",
        badge: "Эксклюзив"
    },
    {
        id: 8,
        name: "Деревянная ключница с крючками",
        description: "Стильная ключница из ореха с 4 крючками. Сохранит порядок и добавит уюта прихожей.",
        price: 2190,
        images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        specs: {
            "Материал": "Орех, латунь",
            "Размер": "20×15×3 см",
            "Крючки": "4 шт, латунные",
            "Крепление": "Настенное",
            "Отделка": "Вощение"
        },
        category: "keyholders",
        badge: "Новинка"
    },
    {
        id: 9,
        name: "Шкатулка для украшений",
        description: "Изящная шкатулка с несколькими отделениями для хранения украшений.",
        price: 3590,
        images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        specs: {
            "Материал": "Вишня, бархат",
            "Размер": "25×18×12 см",
            "Отделения": "3 основных + 2 для колец",
            "Замок": "Магнитный",
            "Особенности": "Бархатная подкладка"
        },
        category: "boxes",
        badge: "Популярное"
    },
    {
        id: 10,
        name: "Деревянная подставка для посуды",
        description: "Практичная подставка для сушки посуды из влагостойкого дерева.",
        price: 2790,
        images: ['https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        specs: {
            "Материал": "Бамбук",
            "Размер": "40×30×10 см",
            "Вместимость": "6-8 тарелок",
            "Особенности": "Наклонная конструкция, поддон",
            "Уход": "Влагостойкая пропитка"
        },
        category: "kitchen"
    }
];

// Инициализация корзины
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM элементы
const productsGrid = document.getElementById('productsGrid');
const allProductsGrid = document.getElementById('allProducts');
const cartCount = document.getElementById('cartCount');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartBody = document.getElementById('cartBody');
const totalPrice = document.getElementById('totalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutOverlay = document.getElementById('checkoutOverlay');
const closeCheckout = document.getElementById('closeCheckout');
const orderForm = document.getElementById('orderForm');
const orderSummary = document.getElementById('orderSummary');
const productModal = document.getElementById('productModal');
const productOverlay = document.getElementById('productOverlay');
const productModalContent = document.getElementById('productModalContent');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const notificationContainer = document.getElementById('notificationContainer');

// Новые элементы для категорий
const categoriesSidebar = document.getElementById('categoriesSidebar');
const categoryItems = document.querySelectorAll('.category-item');
const productsCount = document.getElementById('productsCount');
const categoryCounts = {
    all: document.getElementById('allCount'),
    boxes: document.getElementById('boxesCount'),
    kitchen: document.getElementById('kitchenCount'),
    decor: document.getElementById('decorCount'),
    furniture: document.getElementById('furnitureCount'),
    stationery: document.getElementById('stationeryCount'),
    keyholders: document.getElementById('keyholdersCount')
};

// Статистика по категориям
const categoryStats = {
    all: 0,
    boxes: 0,
    kitchen: 0,
    decor: 0,
    furniture: 0,
    stationery: 0,
    keyholders: 0
};

// Функция для автоматического показа/скрытия меню категорий
function handleCategoriesVisibility() {
    const productsSection = document.getElementById('products');
    
    if (!productsSection || !categoriesSidebar) return;
    
    // Получаем позицию секции каталога
    const productsRect = productsSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    // Если секция каталога видна на экране (верхняя часть в пределах видимости)
    if (productsRect.top < viewportHeight * 0.8 && productsRect.bottom > 100) {
        // Показываем меню категорий
        categoriesSidebar.classList.add('visible');
    } else {
        // Скрываем меню категорий
        categoriesSidebar.classList.remove('visible');
    }
}

// Отображение всех товаров
function displayAllProducts() {
    allProductsGrid.innerHTML = '';
    displayProductsInGrid(products, allProductsGrid);
}

// Отображение товаров по категориям
function displayProductsByCategory() {
    // Очищаем все категории
    document.querySelectorAll('.category-products').forEach(grid => {
        grid.innerHTML = '';
    });
    
    // Сбрасываем статистику
    Object.keys(categoryStats).forEach(key => {
        categoryStats[key] = 0;
    });
    
    // Распределяем товары по категориям
    products.forEach(product => {
        const categoryGrid = document.querySelector(`.category-products[data-category="${product.category}"]`);
        
        if (categoryGrid) {
            const productCard = createProductCard(product);
            categoryGrid.appendChild(productCard);
            categoryStats[product.category]++;
        }
        
        // Увеличиваем счётчик всех товаров
        categoryStats.all++;
    });
    
    // Обновляем счётчики
    updateCategoryCounts();
    
    // Скрываем пустые категории
    hideEmptyCategories();
}

// Создание карточки товара
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
        <div class="product-image">
            <img src="${product.images[0]}" alt="${product.name}" class="product-img" loading="lazy">
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <div class="product-price">${product.price.toLocaleString('ru-RU')} ₽</div>
                <div class="product-actions">
                    <button class="btn-add" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    productCard.addEventListener('click', (e) => {
        if (!e.target.closest('.btn-add')) {
            viewProduct(product.id);
        }
    });
    
    return productCard;
}

// Отображение товаров в grid
function displayProductsInGrid(productsArray, gridElement) {
    gridElement.innerHTML = '';
    
    productsArray.forEach(product => {
        const productCard = createProductCard(product);
        gridElement.appendChild(productCard);
    });
}

// Обновление счётчиков категорий
function updateCategoryCounts() {
    // Обновляем общее количество товаров
    productsCount.textContent = categoryStats.all;
    
    // Обновляем счётчики для каждой категории
    Object.keys(categoryCounts).forEach(category => {
        if (categoryCounts[category]) {
            const count = categoryStats[category] || 0;
            const text = count === 0 ? 'Нет товаров' : `${count} ${getProductWord(count)}`;
            categoryCounts[category].textContent = text;
        }
    });
}

// Функция для правильного склонения слова "товар"
function getProductWord(count) {
    if (count % 10 === 1 && count % 100 !== 11) return 'товар';
    if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) return 'товара';
    return 'товаров';
}

// Скрытие пустых категорий
function hideEmptyCategories() {
    Object.keys(categoryStats).forEach(category => {
        if (category !== 'all') {
            const categorySection = document.getElementById(category);
            const categoryGrid = document.querySelector(`.category-products[data-category="${category}"]`);
            
            if (categorySection && categoryGrid) {
                if (categoryStats[category] === 0) {
                    categorySection.style.display = 'none';
                } else {
                    categorySection.style.display = 'block';
                }
            }
        }
    });
}

// Прокрутка к категории с анимацией
function scrollToCategory(categoryId) {
    const categorySection = document.getElementById(categoryId);
    
    if (categorySection) {
        // Добавляем класс для подсветки
        categorySection.classList.add('highlighted');
        
        // Прокручиваем к категории
        categorySection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Убираем подсветку через 2 секунды
        setTimeout(() => {
            categorySection.classList.remove('highlighted');
        }, 2000);
    }
}

// Обновление активной категории в меню
function updateActiveCategory(categoryId) {
    // Убираем активный класс у всех категорий
    categoryItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Добавляем активный класс выбранной категории
    const activeItem = document.querySelector(`.category-item[data-category="${categoryId}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

// Просмотр деталей товара
function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const imagesHTML = product.images.map((img, index) => `
        <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage(${productId}, ${index})">
            <img src="${img}" alt="${product.name} - миниатюра ${index + 1}">
        </div>
    `).join('');
    
    const specsHTML = Object.entries(product.specs || {}).map(([key, value]) => `
        <div class="spec-item">
            <span class="spec-label">${key}</span>
            <span class="spec-value">${value}</span>
        </div>
    `).join('');
    
    productModalContent.innerHTML = `
        <div class="product-detail">
            <div class="product-detail-images">
                <div class="main-image" id="mainImage">
                    <img src="${product.images[0]}" alt="${product.name}" class="product-detail-img">
                </div>
                <div class="thumbnail-images">
                    ${imagesHTML}
                </div>
            </div>
            <div class="product-detail-info">
                <h2 class="product-detail-title">${product.name}</h2>
                <div class="product-detail-price">${product.price.toLocaleString('ru-RU')} ₽</div>
                <p class="product-detail-description">${product.description}</p>
                
                <div class="product-detail-specs">
                    ${specsHTML}
                </div>
                
                <div class="product-detail-actions">
                    <button class="btn btn-outline" onclick="closeProductModal()">
                        <i class="fas fa-arrow-left"></i>
                        Назад к каталогу
                    </button>
                    <button class="btn btn-primary" onclick="addToCartFromModal(${product.id})">
                        <i class="fas fa-shopping-bag"></i>
                        Добавить в корзину
                    </button>
                </div>
            </div>
        </div>
    `;
    
    productModal.classList.add('active');
}

// Функция для добавления в корзину из модального окна
function addToCartFromModal(productId) {
    addToCart(productId);
    showNotification('Товар добавлен в корзину!', 'success');
    closeProductModal();
}

function changeMainImage(productId, imageIndex) {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('#mainImage img');
    const product = products.find(p => p.id === productId);
    
    if (product && mainImage) {
        mainImage.src = product.images[imageIndex];
        
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === imageIndex);
        });
    }
}

function closeProductModal() {
    productModal.classList.remove('active');
}

// Корзина
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    
    if (!productModal.classList.contains('active')) {
        showNotification('Товар добавлен в корзину!', 'success');
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    displayCartItems();
    showNotification('Товар удален из корзины', 'error');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity < 1) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartCount();
        displayCartItems();
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCartItems() {
    cartBody.innerHTML = '';
    
    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-box-open"></i>
                <h3>Корзина пуста</h3>
                <p>Добавьте товары из каталога</p>
            </div>
        `;
        totalPrice.textContent = '0 ₽';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <i class="fas fa-box-open"></i>
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${item.price.toLocaleString('ru-RU')} ₽</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                    <i class="fas fa-minus"></i>
                </button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                    <i class="fas fa-plus"></i>
                </button>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartBody.appendChild(cartItem);
    });
    
    totalPrice.textContent = `${total.toLocaleString('ru-RU')} ₽`;
}

// Обновление сводки заказа
function updateOrderSummary() {
    if (cart.length === 0) {
        orderSummary.innerHTML = '<p class="empty-cart-message">Корзина пуста. Добавьте товары для оформления заказа.</p>';
        return;
    }
    
    let summaryHTML = '<h4><i class="fas fa-shopping-bag"></i> Ваш заказ:</h4>';
    let total = 0;
    let itemsText = '';
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        summaryHTML += `
            <div class="summary-item">
                <div class="summary-item-name">
                    <span class="item-name">${item.name}</span>
                    <span class="item-quantity">× ${item.quantity}</span>
                </div>
                <span class="item-total">${itemTotal.toLocaleString('ru-RU')} ₽</span>
            </div>
        `;
        
        // Формируем текстовое описание для скрытого поля
        itemsText += `${item.name} (${item.quantity} шт.) - ${itemTotal.toLocaleString('ru-RU')} ₽`;
        if (index < cart.length - 1) itemsText += '\n';
    });
    
    summaryHTML += `
        <div class="summary-total">
            <span>Итого к оплате:</span>
            <span class="total-amount">${total.toLocaleString('ru-RU')} ₽</span>
        </div>
    `;
    
    orderSummary.innerHTML = summaryHTML;
    
    // Обновляем скрытые поля
    if (orderItems) orderItems.value = itemsText;
    if (orderTotal) orderTotal.value = `${total.toLocaleString('ru-RU')} ₽`;
    if (orderDate) orderDate.value = new Date().toLocaleString('ru-RU');
}

// Обработка отправки формы через Formspree
orderForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (cart.length === 0) {
        showNotification('Добавьте товары в корзину', 'error');
        return;
    }
    
    const submitBtn = orderForm.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
    submitBtn.disabled = true;
    
    try {
        showNotification('Отправляем ваш заказ...', 'success');
        
        // Для отладки - посмотрим что отправляем
        const formData = new FormData(orderForm);
        console.log('FormData содержимое:');
        for (let [key, value] of formData.entries()) {
            console.log(key + ': ' + value);
        }
        
        // Отправляем форму
        const response = await fetch(orderForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        const result = await response.json();
        
        if (response.ok) {
            showNotification('✅ Заказ успешно отправлен! Мы свяжемся с вами в течение часа.', 'success');
            
            // Очищаем корзину
            cart = [];
            saveCart();
            updateCartCount();
            displayCartItems();
            
            // Закрываем модальное окно
            checkoutModal.classList.remove('active');
            
            // Сбрасываем форму
            orderForm.reset();
            
        } else {
            console.error('Formspree error:', result);
            let errorMessage = 'Ошибка отправки заказа';
            
            if (result.errors && result.errors.length > 0) {
                errorMessage = result.errors[0].message;
            } else if (result.error) {
                errorMessage = result.error;
            }
            
            showNotification('❌ ' + errorMessage, 'error');
        }
        
    } catch (error) {
        console.error('Network error:', error);
        showNotification('❌ Ошибка соединения с интернетом', 'error');
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
});
    
    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Обновляем активную категорию если это категория
                if (targetId !== '#home' && targetId !== '#about' && targetId !== '#contacts') {
                    const category = targetId.replace('#', '');
                    updateActiveCategory(category);
                }
            }
        });
    });
    
    // Активное состояние ссылок при прокрутке
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id], .category-section[id]');
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 200;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                updateActiveCategory(sectionId);
            }
        });
        
        // Автоматическое управление видимостью меню категорий
        handleCategoriesVisibility();
    });
    
    // Добавляем текстуру дерева
    document.querySelector('.hero').classList.add('textured-bg');
    document.querySelector('.about').classList.add('textured-bg');
    
    // Инициализация видимости меню категорий при загрузке
    setTimeout(handleCategoriesVisibility, 100);

// Глобальные функции
window.viewProduct = viewProduct;
window.addToCart = addToCart;
window.addToCartFromModal = addToCartFromModal;
window.closeProductModal = closeProductModal;
window.changeMainImage = changeMainImage;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.scrollToCategory = scrollToCategory;