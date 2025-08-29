// 1.heart counter section start
let heartCountVar = 0;
document.getElementById('heart-count').innerText = heartCountVar;

document.querySelectorAll('.heart-count-button').forEach(function(button){
    
    button.addEventListener('click', function(){
        button.disabled = true;

        heartCountVar = heartCountVar + 1;
        document.getElementById('heart-count').innerText = heartCountVar;
    });
});
// 1.heart counter section end