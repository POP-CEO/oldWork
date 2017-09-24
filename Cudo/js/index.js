
$('.second.circle').circleProgress({
    value: 0.75,
    size: 150.0,
    reverse: true,
    fill: {
        gradient: ['#D74680', '#D74680']
}

}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
});


$('.first.circle').circleProgress({
    value: 0.90,
    size: 150.0,
    reverse: true,
    fill: {
        gradient: ['#30BAE7', '#30BAE7']
    }

}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
});


$('.three.circle').circleProgress({
    value: 0.70,
    size: 150.0,
    reverse: true,
    fill: {
        gradient: ['#15C7A8', '#15C7A8']
    }

}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
});

$('.four.circle').circleProgress({
    value: 0.85,
    size: 150.0,
    reverse: true,
    fill: {
        gradient: ['#EB7D4B', '#EB7D4B']
    }

}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(85 * progress) + '<i>%</i>');
});


