function getMessageEncoding() {
    const messageBox = document.querySelector(".aes-cbc #message");
    // console.log(messageBox)
    let message = messageBox.value;
    let enc = new TextEncoder();
    return enc.encode(message);
}

function encryptMessage(key) {
    let encoded = getMessageEncoding();
    // iv will be needed for decryption
    iv = window.crypto.getRandomValues(new Uint8Array(16));
    return window.crypto.subtle.encrypt(
        {
            name: "AES-CBC",
            iv
        },
        key,
        encoded
    );
}

let key = window.crypto.subtle.generateKey(
    { name: 'AES-CBC', length: 256 },
    true,
    ['encrypt', 'decrypt']
);