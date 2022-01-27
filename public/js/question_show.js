/**
 * Simple (ugly) code to handle the comment vote up/down
 */
var $container = $('.js-vote-arrows');
$container.find('a').on('click', function(e) {
    e.preventDefault();
    var $link = $(e.currentTarget);

    $.ajax({
        url: '/comments/10/vote/'+$link.data('direction'),
        method: 'POST'
    }).then(function(data) {
        $container.find('.js-vote-total').text(data.votes);
    });
});


/*
    *Cela trouve l' .js-vote-arrowsélément - que nous avons ajouté ici - trouve toutes les abalises à l'intérieur et
    *enregistre un clickécouteur sur celles-ci. Au clic, nous faisons une requête AJAX à /comments/10- le 10 est
    *codé en dur pour l'instant - /vote/puis nous lisons l' data-directionattribut de l'élément d'ancrage pour savoir
    *s'il s'agit d'un upvote ou d'un downvote. En cas de succès, jQuery nous transmet les données JSON de notre point de terminaison.
    *Renommez cette variable en datapour être plus précis.
 */