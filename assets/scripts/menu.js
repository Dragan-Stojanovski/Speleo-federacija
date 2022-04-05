
$('[lang]').hide(); 
$('[lang="mk"]').show();
$('#lang-switch').change(function () {
    var lang = $(this).val(); 
    switch (lang) {
        case 'en':
            $('[lang]').hide();
            $('[lang="en"]').show();
        break;
        case 'mk':
            $('[lang]').hide();
            $('[lang="mk"]').show();
        break;
        default:
            $('[lang]').hide();
            $('[lang="mk"]').show();
        }
});
