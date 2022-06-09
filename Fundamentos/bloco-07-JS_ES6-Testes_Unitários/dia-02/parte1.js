const verify = (value1, value2) => {
  result = parseInt(value1) + parseInt(value2);
  if (value1 == '' || value2 == '') {
    throw new Error('Algum valor está faltando...');
  }
};

const verifyNaN = (value1, value2) => {
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error('Coloque apenas valores numéricos!');
  }
};

function sum(value1, value2) {
  value1 = document.getElementById('value1').value;
  value2 = document.getElementById('value2').value;
  const innerResult = document.getElementById('result');

  try {
    verify(value1, value2);
    verifyNaN(value1, value2);
    const finalResutl = (innerResult.innerHTML = `Resultado: ${result}`);
    return finalResutl;
  } catch (error) {
    return (innerResult.innerHTML = error.message);
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};
