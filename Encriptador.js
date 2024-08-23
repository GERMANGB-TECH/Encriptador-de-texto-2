document.getElementById('encrypt-btn').addEventListener('click', () => {
    processText('encrypt');
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
    processText('decrypt');
});

document.getElementById('copy-btn').addEventListener('click', copyToClipboard);

const inputTextArea = document.getElementById('input-text');
inputTextArea.addEventListener('input', toggleButtons);

function processText(action) {
    const inputText = inputTextArea.value;

    if (!validateText(inputText)) {
        return;
    }

    let resultText = '';

    if (action === 'encrypt') {
        resultText = inputText
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    } else if (action === 'decrypt') {
        resultText = inputText
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    displayOutput(resultText);
}

function validateText(text) {
    const validationMessage = document.querySelector('.warning');

    if (/[^a-z\s]/.test(text)) {
        validationMessage.textContent = "Solo se permiten letras minúsculas y espacios.";
        return false;
    } else {
        validationMessage.textContent = "";
        return true;
    }
}

function displayOutput(output) {
    document.getElementById('placeholder-image').style.display = 'none';
    document.getElementById('no-text-found').style.display = 'none';
    document.getElementById('instruction').style.display = 'none';
    document.getElementById('output-container').style.display = 'block';
    document.getElementById('output-text').value = output;
}

function copyToClipboard() {
    const textToCopy = document.getElementById('output-text');
    textToCopy.select();
    document.execCommand('copy');
}

function toggleButtons() {
    const text = inputTextArea.value.trim();
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');

    if (text.length > 0) {
        encryptBtn.disabled = false;
        decryptBtn.disabled = false;
    } else {
        encryptBtn.disabled = true;
        decryptBtn.disabled = true;
    }
}

// Inicialmente deshabilitar los botones si no hay texto
toggleButtons();

