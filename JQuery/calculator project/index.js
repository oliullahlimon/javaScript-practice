const resultField = $("#result");

const insertNumber = (num) => {
  const currentValue = resultField.val();
  if (currentValue === "0") {
    resultField.val(num);
  } else {
    resultField.val(currentValue + num);
  }
};

const clearResult = () => {
  resultField.val("");
};

const calculateResult = () => {
  const result = eval(resultField.val());
  resultField.val(result);
};

const deleteLastCharacter = () => {
  const currentValue = resultField.val();
  if (currentValue.length > 0) {
    resultField.val(currentValue.slice(0, -1));
  }
};
