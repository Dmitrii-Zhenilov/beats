const sections = $("section");
const display = $(".maincontent");
const sideMenu = $(".fixed-menu");

let inScroll = false;

sections.first().addClass("active");

const countSectionPosition = sectionEq => {
    return sectionEq * -100;
}

const resetActiveClassForItem = (items, itemEq, activeClass) => {
    items.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);
}

const performTransition = (sectionEq) => {
    if (inScroll == false) {
        inScroll = true;

        const position = countSectionPosition(sectionEq);

        display.css({
            transform: `translateY(${position}%)`
        });

            
        sections.eq(sectionEq).addClass("active").siblings().removeClass("active");

        setTimeout(() => {
            inScroll = false;
            const currentSection = sections.eq(sectionEq);
            
            
            sideMenu
                .find(".fixed-menu__item")
                .eq(sectionEq)
                .addClass("fixed-menu__item--active")
                .siblings()
                .removeClass("fixed-menu__item--active");
        }, 1300)    
    };
};

const scrollViewport = direction => {
    const activeSection = sections.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction == "next" && nextSection.length) {
        performTransition(nextSection.index());
    }

    if (direction == "prev" && prevSection.length) {
        performTransition(prevSection.index());
    }
};

$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
        scrollViewport("next");
    }

    if (deltaY < 0) {
        scrollViewport("prev");
    } 
});

$(window).on("keydown", e => {

    const tagName = e.target.tagName.toLowerCase();

    if (tagName != "input" && tagName != "textarea") {
        switch (e.keyCode) {
            case 38: //prev
                scrollViewport("prev");
                break;
            
            case 40: //next
            scrollViewport("next");
                break;
        }
    }
});

$("[data-scroll-to]").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);
    const fullscrinMenu = $(".fullscreen-menu");

    fullscrinMenu.css({
        display: 'none'
    });

    performTransition(reqSection.index())
});
