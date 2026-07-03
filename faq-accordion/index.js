const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const title = item.querySelector('.faq-item-title');
    const button = item.querySelector('.accordion-toggle');
    const faqItemText = item.querySelector('.faq-item-text');
    const icon = button.querySelector('img');

    title.addEventListener('click', function() {
        
        const isOpen = faqItemText.classList.contains('active');

        
        faqItems.forEach(otherItem => {
            const otherText = otherItem.querySelector('.faq-item-text');
            const otherButton = otherItem.querySelector('.accordion-toggle');
            const otherIcon = otherButton.querySelector('img');

            
            if (otherText) {
                otherText.classList.remove('active');
                otherButton.setAttribute('aria-expanded', 'false');
                otherIcon.src = "./images/icon-plus.svg";
            }
        });

        
        if (!isOpen) {
            faqItemText.classList.add('active');
            button.setAttribute('aria-expanded', 'true');
            icon.src = "./images/icon-minus.svg";
        }
    });
});