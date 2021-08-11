//อ้างอิง element ใน index.html
const balance = document.getElementById('balance')
const money_plus = document.getElementById('money-plus')
const money_minus = document.getElementById('money-minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')

const dataTransaction=[
    {id:1,text:"ค่าขนม",amount:-100},
    {id:2,text:"ค่าห้อง",amount:-1000},
    {id:3,text:"เงินเข้า",amount:+1000}
]

const transactions=dataTransaction;

function init(){
    transactions.forEach(addDataToList);
}
function addDataToList(transactions){    
    const symbol = transactions.amount < 0 ?'-':'+';
    const status = transactions.amount < 0 ? 'minus':'plus';
    const item=document.createElement('li');
    item.classList.add(status);
    item.innerHTML=`${transactions.text}<span>${symbol}${Math.abs(transactions.amount)}</span><button class="delete-btn">x</button>`;
    list.appendChild(item);
}

init();
