//login js
document.getElementById('btn').addEventListener('click',function(){
    console.log("this clicked");
    const emailField=document.getElementById('user-email');
    const email=emailField.value;
    // console.log(email);
    const passField=document.getElementById('user-pass');
    const pass=passField.value;
    console.log(pass);
    console.log(email);

    if(email==="almamun01817@gmail.com" && pass==="12121212"){
        window.location.href='index.html';
    }
    else{
        alert('Wrong user');
    }
})



//function 1;
function getInputFieldValueById(inputId){
    const inputField=document.getElementById(inputId);
    const inputFieldString=inputField.value;
    const inputFieldValue=parseFloat(inputFieldString);
    inputField.value="";
    return inputFieldValue; 
}
//function 2;
function getElementValueById(elementId){
    const elementField=document.getElementById(elementId);
    const elementValueString=elementField.innerText;
    const elementValue=parseFloat(elementValueString);
    return elementValue;
    
}
//function 3;
function setTextElementValueById(elementId,newValue){
    const textElement=document.getElementById(elementId);
    textElement.innerText=newValue;
}
document.getElementById('first-btn').addEventListener('click',function(){
    const newDepositAmount=getInputFieldValueById('deposit-field');
    const previousDepositTotal=getElementValueById('deposit-total');
    const totalDeposit=newDepositAmount+previousDepositTotal;
    setTextElementValueById('deposit-total',totalDeposit);
    //get privious balance by using the function
    const previousBalanceTotal=getElementValueById('balance-total');
    const totalBalance=previousBalanceTotal+newDepositAmount;
    // 2line
    setTextElementValueById('balance-total',totalBalance);
    //console.log(typeof totalBalance)

})

// widthdraw balance;
document.getElementById("widthdraw-btn").addEventListener('click',function(){
    const newWidtrawBalance=getInputFieldValueById('widthdraw-input-field');
    const previousWidthrawBalance=getElementValueById('total-widthraw');
    const widthrawNewValue=previousWidthrawBalance+newWidtrawBalance;
    setTextElementValueById('total-widthraw',widthrawNewValue);
    const previousBalanaceTotal=getElementValueById('balance-total');
    const newBalanceTotal=previousBalanaceTotal-newWidtrawBalance;
    setTextElementValueById('balance-total',newBalanceTotal);

})

