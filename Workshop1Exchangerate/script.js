const currency_one=document.getElementById('currency-one');
const currency_two=document.getElementById('currency-two');

const amount_one=document.getElementById('amount-one');
const amount_two=document.getElementById('amount-two');

const rateText=document.getElementById('rate');
const swap=document.getElementById('btn');


currency_one.addEventListener('change',calculateMoney);
currency_two.addEventListener('change',calculateMoney);

function calculateMoney(){
    const one = currency_one.value;
    const two = currency_two.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${one}`)
    .then(res=>res.json().then(data=>{
        const rate=data.rates[two];
        rateText.innerText=`1 ${one} = ${rate}${two}`
    }))
}


calculateMoney();