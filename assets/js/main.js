
jQuery(document).ready(function($){
    $("#webdesign-progressbar").circleProgress({
    value: 0.9,
    size: 250,
    fill: '#13BBC0',
    thickness: 4,
    emptyFill: '#fff',    
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find(".progressbar-percentage").html(Math.round(90 * progress) + '<i>%</i>');
  });;
    
    $("#graphic-progressbar").circleProgress({
    value: 0.95,
    size: 250,
    fill: '#13BBC0',
    thickness: 4,
    emptyFill: '#fff',    
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find(".progressbar-percentage").html(Math.round(95 * progress) + '<i>%</i>');
  });;
    
    $("#digitalmarketing-progressbar").circleProgress({
    value: 0.84,
    size: 250,
    fill: '#13BBC0',
    thickness: 4,
    emptyFill: '#fff',    
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find(".progressbar-percentage").html(Math.round(84 * progress) + '<i>%</i>');
  });;
});