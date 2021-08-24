const verticalacco3 = () => {
    const trigger = document.querySelectorAll('.colors-acco__trigger-js');
    const body = document.querySelector('body');

    const calculateWidth = () => {
    
    const windowWidth = window.innerWidth;

    const MAX_WIDTH = 648;

    const triggerWidth = trigger[0].offsetWidth;

    const reqWidth = windowWidth - (triggerWidth * trigger.length);

    return reqWidth > MAX_WIDTH ? MAX_WIDTH : reqWidth;
    };

    function closeItem(activeElement) {
        const activeText = activeElement.querySelector(".colors-acco__content");
        activeText.style.width = "0px";
        activeElement.classList.remove("active");
    }

    trigger.forEach(function (elem) {
        elem.addEventListener("click", function (e) {
            e.preventDefault();
            const link = e.target.closest(".colors-acco__trigger-js");
            const active = document.querySelector(".colors-acco__item.active");
            if (active) {
                closeItem(active);
            }
        
    
            if (!active || active.querySelector(".colors-acco__trigger-js") !== link) {
                const current = link.closest(".colors-acco__item");
                current.classList.add("active")
                const currentText = current.querySelector(".colors-acco__content");
                if (body.offsetWidth > 480) {
                    currentText.style.width = calculateWidth() + 'px'

                    /*widthEl = calculateWidth();
                    console.log(widthEl); */
                    } else {
                    currentText.stile.width = '100%';
                    }
                }
    });
});      
    

    document.addEventListener("click", e => {
        /* e.preventDefault(); */
        let activePerson = document.querySelector(".colors-acco__item.active");
        const target = e.target;

        if (!target.closest(".colors-acco") && activePerson) {
            closeItem(activePerson);
        }          
    });
};

verticalacco3();
