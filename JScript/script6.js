var data = {};
jQuery.each(form.serializeArray(), function(index, field) {
    data[field.name] = field.value;
});
