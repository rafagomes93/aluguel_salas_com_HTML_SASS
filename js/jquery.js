let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.81,
    fill: {color: '#146666'}
}
$('.circle .bar').circleProgress(options).on('circle-animation-progress', 
function(event, progress, stepValue){
    //$(this).parent().find('span').text(String(stepValue.toFixed(1).substr(1)) + '%') 
});
$('.one .bar').circleProgress({
    value: 0.93
});
$('.two .bar').circleProgress({
    value: 0.85
});
$('.three .bar').circleProgress({
    value: 0.71
});
$('.four .bar').circleProgress({
    value: 0.79
});