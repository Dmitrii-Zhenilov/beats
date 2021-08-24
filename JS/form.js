/* $('.form').submit(e => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const sectionSent = $("section-sent");
    const content = sectionSent.find("sent__text");

    content.removeClass("error-text");

    [name, phone, comment, to].forEach(field => {

        field.removeClass("input-error");
        if (field.val().trim() == "") {
            field.addClass("input-error");
        }
    });

    const errorFields = form.find(".input-error");

    if (errorFields.length == 0) {
        $.ajax ({
            url: "https://webdev-api.loftschool.com/sendmail",
            method: "post",
            data: {
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                to: to.val(),
            },
            success: data => {
                content.text(data.message)
                $('.section-sent').css('display', 'flex');
            }
        });
    }
    error: data => {
        const message = data.responseJSON.message;
        content.text(message);
        content.addClass("error-text");
        
    }      
});

$(".js-button__sent").click(e => {
    e.preventDefault();

    $('.section-sent').css('display', 'none');
})
 */
/* 2 способ */

/* const validateFields = (form , fieldsArray) => {
    fieldsArray.forEach((field) => {
        if (field.val().trim() == "") {
            field.addClass("input-error");
        } else {
            field.removeClass("input-error");
        }
    });


const errorFields = form.find(".input-error");

return errorFields.length == 0;
}

$(".form").submit( e => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const sectionSent = $(".section-sent");
    const content = sectionSent.find(".sent__text");

});

sectionSent.removeClass("error-modal"); //что сюда пихать

const isValid = validateFields(form, [name, phone, comment, to]);

if (isValid) {
    const request = $.ajax ({
        url: "https://webdev-api.loftschool.com/sendmail",
        metod: "post",
        data: {
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                to: to.val()
        }
    });

    request.done((data) => {
        content.text(data.message);
        e.target.reset();
    });

    request.fail((data) => {
        const message = data.responseJSON.message;
        content.text(message);
        sectionSent.addClass("error-modal"); //что сюда пихать
    });

    request.always(() => {
        $('.section-sent').addClass("open");
    })
    
}

$(".js-button__sent").click(e => {
    e.preventDefault();

    $('.section-sent').css('display', 'none');
}) */


const validateFields = (form, fieldsArray) => {
    fieldsArray.forEach((field) => {
        if (field.val().trim() == "") {
            field.addClass("input-error");
        } else {
            field.removeClass("input-error");
        }
    });
    const errorFields = form.find(".input-error");
    return errorFields.length == 0;
}
$(".form").submit(e => {
    e.preventDefault();
    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");
    const modal = $("#modal");
    const content = modal.find(".modal__message");
    modal.removeClass("error-modal");
    const isValid = validateFields(form, [name, phone, comment, to]);
    if (isValid) {
        const request = $.ajax({
            url: "https://webdev-api.loftschool.com/sendmail",
            method: "post",
            data: {
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                to: to.val()
            }
        });
        request.done((data) => {
            content.text(data.message);
            e.target.reset();
        });
        request.fail((data) => {
            const message = data.responseJSON.message;
            content.text(message);
            modal.addClass("error-modal");
        });
        request.always(() => {
            $('.section__modal').addClass("open");
        })
    }
});
$(".js-button__modal").on("click", function (event) {
    $('.section__modal').removeClass("open");
});