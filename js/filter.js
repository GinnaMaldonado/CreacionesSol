document.addEventListener('DOMContentLoaded', () => {
    // Verificar si la página contiene filtros
    if (document.querySelectorAll('input[type="checkbox"]').length > 0) {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
    });
    }
    });
    
    function filterProducts() {
    // Obtener los valores seleccionados de los filtros
    const selectedCategories = getSelectedValues('category'); // Solo en página de edredones/sábanas
    const selectedColors = getSelectedValues('color'); // Aplica a camisetas y edredones/sábanas
    const selectedSizes = getSelectedValues('size'); // Aplica a camisetas y edredones/sábanas
    
    document.querySelectorAll('.product-item').forEach(product => {
    // Verificar coincidencias de categorías (solo para página de edredones/sábanas)
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.some(category => product.classList.contains(category));
    
    // Verificar coincidencias de colores
    const colorMatch = selectedColors.length === 0 || selectedColors.some(color => product.classList.contains(color));
    
    // Verificar coincidencias de tamaños
    const sizeMatch = selectedSizes.length === 0 || selectedSizes.some(size => product.classList.contains(size));
    
    // Mostrar u ocultar el producto según los filtros aplicados
    if (categoryMatch && colorMatch && sizeMatch) {
    product.style.display = 'block';
    } else {
    product.style.display = 'none';
    }
    });
    }
    
    function getSelectedValues(groupName) {
    const selected = [];
    document.querySelectorAll(`input[name="${groupName}"]:checked`).forEach(checkbox => {
    selected.push(checkbox.value);
    });
    return selected;
    }