// function encription(normalText){
//     const normalText = document.getElementById(normaltext).value ;
// let modifiedText = '';

// for (let i = 0; i < normalText.length; i++) {
//     modifiedText += String.fromCharCode(normalText.charCodeAt(i) + 4);
// }

// console.log(modifiedText);
// };
// function decription(encriptedText){
//     const encriptedText= document.getElementById("encriptedText").value ;
// let modifiedText = '';

// for (let i = 0; i < encriptedText.length; i++) {
//     modifiedText += String.fromCharCode(encriptedText.charCodeAt(i) + 4);
// }

// console.log(modifiedText);
// };


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
    document.getElementById("output").innerText = `Encrypted text: ${encryptedText}`;
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

    // const aesKey = CryptoJS.enc.Utf8.parse('0123456789012345');
    // const rsaPublicKey = `-----BEGIN PUBLIC KEY-----
    // [Your RSA Public Key Here]
    // -----END PUBLIC KEY-----`;
    // const rsaPrivateKey = `-----BEGIN PRIVATE KEY-----
    // [Your RSA Private Key Here]
    // -----END PRIVATE KEY-----`;

    // function rsaEncrypt(text, publicKey) {
    //     const encrypt = new JSEncrypt();
    //     encrypt.setPublicKey(publicKey);
    //     return encrypt.encrypt(text);
    // }

    // function rsaDecrypt(text, privateKey) {
    //     const decrypt = new JSEncrypt();
    //     decrypt.setPrivateKey(privateKey);
    //     return decrypt.decrypt(text);
    // }

    // function complexEncryption(normalText, key) {
    //     // Step 1: XOR with key
    //     let xorText = '';
    //     for (let i = 0; i < normalText.length; i++) {
    //         xorText += String.fromCharCode(normalText.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    //     }

    //     // Step 2: AES encryption
    //     const aesEncrypted = CryptoJS.AES.encrypt(xorText, aesKey).toString();

    //     // Step 3: RSA encryption
    //     const rsaEncrypted = rsaEncrypt(aesEncrypted, rsaPublicKey);

    //     // Step 4: Base64 encoding
    //     return btoa(rsaEncrypted);
    // }

    // function complexDecryption(encryptedText, key) {
    //     // Step 1: Base64 decoding
    //     const base64Decoded = atob(encryptedText);

    //     // Step 2: RSA decryption
    //     const rsaDecrypted = rsaDecrypt(base64Decoded, rsaPrivateKey);

    //     // Step 3: AES decryption
    //     const aesDecrypted = CryptoJS.AES.decrypt(rsaDecrypted, aesKey).toString(CryptoJS.enc.Utf8);

    //     // Step 4: XOR with key
    //     let normalText = '';
    //     for (let i = 0; i < aesDecrypted.length; i++) {
    //         normalText += String.fromCharCode(aesDecrypted.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    //     }

    //     return normalText;
    // }

    // document.getElementById("encryptButton").addEventListener("click", function() {
    //     const normalText = document.getElementById("normaltext").value;
    //     const encryptedText = complexEncryption(normalText, '9528217357');
    //     document.getElementById("output").innerText = `Encrypted text: ${encryptedText}`;
    // });

    // document.getElementById("decryptButton").addEventListener("click", function() {
    //     const encryptedText = document.getElementById("encryptedText").value;
    //     const decryptedText = complexDecryption(encryptedText, '9528217357');
    //     document.getElementById("output").innerText = `Decrypted text: ${decryptedText}`;
    // })