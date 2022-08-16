document.getElementById("add-btn").addEventListener("click", function () {
  const addNewValue = parseFloat(document.getElementById("add-input").value);
  const addPrevValue = parseFloat(
    document.getElementById("added-amount").innerText
  );
  const totalAddedValue = addNewValue + addPrevValue;
  document.getElementById("added-amount").innerText = totalAddedValue;

  const totalAmount = parseFloat(
    document.getElementById("total-amount").innerText
  );
  const newTotalAmount = addNewValue + totalAmount;
  document.getElementById("total-amount").innerText = newTotalAmount;
  document.getElementById("add-input").value = "";
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdrawValue = parseFloat(
    document.getElementById("withdraw-input").value
  );

  document.getElementById("withdrawal-amount").innerText = newWithdrawValue;

  const totalAmount = parseFloat(
    document.getElementById("total-amount").innerText
  );
  const newTotalAmount = totalAmount - newWithdrawValue;
  document.getElementById("total-amount").innerText = newTotalAmount;

  document.getElementById("withdraw-input").value = "";
});
