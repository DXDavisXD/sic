function calculate(){
    const princple = Number(document.getElementById("princple").value);
    const ROI = Number(document.getElementById("ROI").value);
    const time = Number(document.getElementById("time").value);
    const answer = document.getElementById("answer");

    answer.textContent = (`${(princple * ROI * time) / 100} ₹`);
}