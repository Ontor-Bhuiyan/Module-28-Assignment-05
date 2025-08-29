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

// 2.copy count and number paste section start
let copyCountVar = 0;
document.getElementById('copy-count').innerText = copyCountVar;

document.querySelectorAll('.copy-button').forEach(function(button){
    
    button.addEventListener('click', function(){
        button.disabled = true;

        const serviceName = button.getAttribute('data-service-name');
        const serviceNumber = button.getAttribute('data-service-number');

        alert(`⿻ ${serviceName} - ${serviceNumber}...`);

        copyCountVar = copyCountVar + 1;
        document.getElementById('copy-count').innerText = copyCountVar;

        const copyNumber = document.getElementById('copy-number').innerText;
        navigator.clipboard.writeText(copyNumber);
    });
});
// 2.copy count and number paste section end