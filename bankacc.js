let amount = 0;
amount = Number(amount);
// function depositmoney(){
//     let depositamt = 0;
//     depositamt = Number(depositamt);
//    depositamt = document.getElementById("depositamt").value;
//    console.log(depositamt);
//    return depositamt;
// }
// function withdrawmoney(){
//     let withdraw = 0;
// }
    document.getElementById("depositbtn").onclick = function(){
        let depositamount = document.getElementById("depositamt").value;
        depositamount = Number(depositamount);
        console.log("deposited: ",depositamount );
        if (depositamount > 0){
        amount = amount + depositamount;
        document.getElementById("balance").innerHTML = amount.toLocaleString("de-DE", {style:"currency", currency:"EUR"});
        console.log("Deposited amt:",amount); }
        else{
            window.alert("INVALID AMOUNT!!!!!!!")
            console.log("Invalid Amt");
        }
        
    }
    

    document.getElementById("withdrawbtn").onclick = function(){
        let withdrawamt = document.getElementById("withdrawamt").value;
        withdrawamt = Number(withdrawamt);
        console.log("Withdrawn:",withdrawamt);
        if (withdrawamt > amount){
            window.alert("Insufficient Funds to Withdraw!!!!!!")
            console.log("Insufficient Funds");
        }
        else{
        if (withdrawamt > 0){
        amount = amount - withdrawamt;
        document.getElementById("balance").innerHTML = amount.toLocaleString("de-DE", {style:"currency", currency:"EUR"});
        console.log("Withdrawn amt:",amount); }
        else{
            window.alert("Not Valid Amount!!!!!!!!!")
            console.log("The amount is not valid");
        }}
    }