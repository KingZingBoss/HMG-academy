function calculateTotal() {
    const selectedSubject = document.querySelector('input[name="subject"]:checked').value;
    const hoursPerDay = document.getElementById('hoursPerDay').value;
    const daysPerWeek = document.getElementById('daysPerWeek').value;

    const subjectPrice = {
        physics: 2500,
        chemistry: 2500,
        mathematics: 2500,
        furtherMathematics: 2500
    }[selectedSubject];

    const totalAmount = subjectPrice * hoursPerDay * daysPerWeek;

    document.getElementById('totalAmount').innerText = '₦' + totalAmount;
}