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

        // const copyNumber = document.getElementById('copy-number').innerText;
        // navigator.clipboard.writeText(copyNumber);

        const copyNumber = button.closest('.button-one').querySelector('.button-two').innerText;
        navigator.clipboard.writeText(copyNumber);

    });
});
// 2.copy count and number paste section end


// 3.call and call history section start
// call history data
let callHistoryData = [];

// coin balance amount
let coinBalance = 100;

document.getElementById('coin-balance').innerText = coinBalance;

document.querySelectorAll('.call-button').forEach(function(button){
    
    button.addEventListener('click', function(){

        if(coinBalance <= 0){
            alert(`❌ আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ কয়েন লাগবে।`);
            return coinBalance;
        };

        const serviceCompanyName = button.getAttribute('data-service-name');
        const serviceCompanyNumber = button.getAttribute('data-service-number');
        
        alert(`📞 Calling ${serviceCompanyName} ${serviceCompanyNumber}...`);

        coinBalance = coinBalance - 20;
        document.getElementById('coin-balance').innerText = coinBalance;

        const histroyData = {
            name: serviceCompanyName,
            number: serviceCompanyNumber,
            date: new Date().toLocaleTimeString()
        }

        callHistoryData.push(histroyData)

        const callHistoryContainer = document.getElementById('call-history-container');
        callHistoryContainer.innerHTML = '';

        for(const history of callHistoryData){
            callHistoryContainer.innerHTML += `
                <div class="flex justify-between items-center m-5 p-4 bg-gray-100 rounded-xl">
                    <div>
                        <h4 class="text-[18px] font-semibold">${history.name}</h4>
                        <p class="text-[18px] font-lightbold text-gray-500">${history.number}</p>
                    </div>
                    <p class="text-[18px] font-lightbold">${history.date}</p>
                </div>
            `;
        }

    });
});

document.getElementById('clear-button').addEventListener('click', function(){
    callHistoryData = [];
    
    const callHistoryContainer = document.getElementById('call-history-container');
    callHistoryContainer.innerHTML = '';
});
// 3.call and call history section end