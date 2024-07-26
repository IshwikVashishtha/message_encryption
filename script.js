function complexEncryption(normalText, key) {
    let xorText = '';
    for (let i = 0; i < normalText.length; i++) {
        xorText += String.fromCharCode(normalText.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    let shiftedText = '';
    for (let i = 0; i < xorText.length; i++) {
        shiftedText += String.fromCharCode(xorText.charCodeAt(i) + 3);
    }
    return btoa(shiftedText);
}

function complexDecryption(encryptedText, key) {
    let decodedText = atob(encryptedText);
    let unshiftedText = '';
    for (let i = 0; i < decodedText.length; i++) {
        unshiftedText += String.fromCharCode(decodedText.charCodeAt(i) - 3);
    }
    let originalText = '';
    for (let i = 0; i < unshiftedText.length; i++) {
        originalText += String.fromCharCode(unshiftedText.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return originalText;
}

document.getElementById("encryptButton").addEventListener("click", function() {
    const normalText = document.getElementById("normaltext").value;
    const key = "9528217357";
    const encryptedText = complexEncryption(normalText, key);
    document.getElementById("output").innerText = `${encryptedText}`;
});

document.getElementById("decryptButton").addEventListener("click", function() {
    const encryptedText = document.getElementById("encryptedText").value;
    const key = "9528217357";
    const decryptedText = complexDecryption(encryptedText, key);
    document.getElementById("output").innerText = `Decrypted text: ${decryptedText}`;
});

document.getElementById("whatsappButton").addEventListener("click", function() {
    const normalText = document.getElementById("normaltext").value;
    const key = "9528217357";
    const encryptedText = complexEncryption(normalText, key);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(encryptedText)}`;
    window.open(whatsappUrl, '_blank');
});

document.getElementById("copyButton").addEventListener("click", function() {
    const outputText = document.getElementById("output").innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});
