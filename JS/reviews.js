const reviewsDisplayInner = document.querySelectorAll('.reviews__display-inner');
const interactiveAvatar = document.querySelectorAll('.interactive-avatar__link');

const findBlockByAllias = allias => {
    return [...reviewsDisplayInner].filter((item) => {
        return item.dataset.linkedWidth === allias;
    });
};

interactiveAvatar.forEach(function (link) {
    link.addEventListener("click", e => {
        e.preventDefault();
        let itemToShow = [];
        const activeSwitcherItem = document.querySelector('.interactive-avatar.active');
        const activeReviewsItem = document.querySelector('.reviews__display-inner.active');
        const link = e.currentTarget;
        
        const currentDataName = link.dataset.open;
        const curretItem = link.closest('.reviews__switcher-item.interactive-avatar');
        itemToShow = findBlockByAllias(currentDataName);

        if(activeSwitcherItem && activeReviewsItem && itemToShow.length && curretItem) {
            activeSwitcherItem.classList.remove("active");
            activeReviewsItem.classList.remove("active");
        }

        if (itemToShow.length && curretItem) {
            itemToShow[0].classList.add("active");
            curretItem.classList.add("active");
        }

    });
});