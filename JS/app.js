'use strict';

let table = document.getElementById('donationData');
let tablehead = document.createElement('thead');
table.appendChild(tablehead);

let tr1 = document.createElement('tr');
tablehead.appendChild(tr1);
let th1 = document.createElement('th');
tr1.appendChild(th1);
th1.textContent='Donor Name';
let th2 = document.createElement('th');
tr1.appendChild(th2);
th2.textContent='Donor Age';
let th3= document.createElement('th');
tr1.appendChild(th3);
th3.textContent='Amount';

let tableFoot = document.createElement('tfoot');
table.appendChild(tableFoot);
let trf = document.createElement('tr');
tableFoot.appendChild(trf);
let tf = document.createElement('th');
trf.appendChild(tf);
tf.textContent='Total';
let tfd = document.createElement('td');
trf.appendChild(tfd);

let tableBody = document.createElement('tbody');
table.appendChild(tableBody);



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


let donors =[];


function Donation (name, amount, age){
  this.name=name;
  this.amount=amount;
  this.age=age;
  donors.push(this);

}


let submitbtn = document.getElementById('donateForm');
submitbtn.addEventListener('submit', handleSubmitting);

function handleSubmitting(event){
  event.preventDefault();
  Donation.prototype.addDonor();
}




Donation.prototype.addDonor= function() {
//   let form = document.getElementById('donateForm');
  let dName = document.getElementById('name').value;
  console.log(dName);

  let dAmount = document.getElementById('money').value;
  console.log(dAmount);

  let dAge = getRandomIntInclusive(18 ,30);
  console.log(dAge);

  new Donation(dName, dAmount, dAge);

  console.log(donors);

  setToLs();

  //rendering data

  console.log('render');

  let row = document.createElement('tr');
  tableBody.appendChild(row);
  let rowdata1 = document.createElement('td');
  row.appendChild(rowdata1);
  rowdata1.textContent= dName;
  let rowdata2 = document.createElement('td');
  row.appendChild(rowdata2);
  rowdata2.textContent=dAge;
  let rowdata3 = document.createElement('td');
  row.appendChild(rowdata3);
  rowdata3.textContent=dAmount;




};



//adding to and getting from Local Storage

function setToLs(){
  console.log('set');
  let donorsArr = JSON.stringify(donors);
  localStorage.setItem('DonationData', donorsArr);
  getFromLs();

}

//getting data from Local Storage

function getFromLs(){

  console.log('get');
  let lsTable = localStorage.getItem('DonationData');
  let tablelsData = JSON.parse(lsTable);

  let reInst;

  if(tablelsData){
    for (let i=0; i < donors.length; i++){
      reInst = new Donation (donors[i].name, donors[i].age, donors[i].amount);
      reInst.Donation.prototype.addDonor();

    }
    Donation.prototype.addDonor();

  }



}


