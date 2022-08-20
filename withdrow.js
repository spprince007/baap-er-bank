document.getElementById('withdrow-btn').addEventListener('click', function () {
    //collect tk from input field
    const withdrowTk = document.getElementById('withdrow-tk');
    const totalWithdrowTk = withdrowTk.value;
    const theWithdrow = parseFloat(totalWithdrowTk);
    //previous withdrow balnce
    const previousWithdrow = document.getElementById('total-withdrow')
    const totalPreviousWithdrow = previousWithdrow.innerText;
    const withdrow = parseFloat(totalPreviousWithdrow);
    //total withdrow
    previousWithdrow.innerText = withdrow + theWithdrow;
    //blance
    //call the id of previous blance
    const previousBlance = document.getElementById('previous-blance');
    //find the value
    const totalPreviousBlance = previousBlance.innerText;
    //value convert to float
    const thePreviouseBlance = parseFloat(totalPreviousBlance);
    //update blance
    previousBlance.innerText = thePreviouseBlance - theWithdrow;
    //clear deposite fild
    withdrowTk.value = '';
})