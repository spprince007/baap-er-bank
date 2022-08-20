document.getElementById('diposite-btn').addEventListener('click', function () {
    //get deposite tk from input field
    const depositeAmount = document.getElementById('diposite-tk');
    const newdeposite = depositeAmount.value;
    const deposite = parseFloat(newdeposite);
    //trans tk from input field to total deposite field
    const depositeTotalAmount = document.getElementById('total-deposite');
    const totalDeposite = depositeTotalAmount.innerText;
    const previousTotalDeposite = parseFloat(totalDeposite);
    //total deposite 
    depositeTotalAmount.innerText = previousTotalDeposite + deposite;

    //blance add
    //call the id of previous blance
    const previousBlance = document.getElementById('previous-blance');
    //find the value
    const totalPreviousBlance = previousBlance.innerText;
    //value convert to float
    const thePreviouseBlance = parseFloat(totalPreviousBlance);
    //update blance
    previousBlance.innerText = thePreviouseBlance + deposite;

    //clear deposite fild
    depositeAmount.value = '';
})