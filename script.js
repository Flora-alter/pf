const sendTxt = (address, subject, text) => {
    Email.send({
        SecureToken: "222aa628-6cd3-4b77-a83c-865138206fcb",
        To: "sprt.pfweb@gmail.com",
        From: address,
        Subject: subject,
        Body: text
    }).then(
        message => alert(message)
    );
}

const btn = document.getElementById("submit-txt");

btn.addEventListener("click", function () {
    const address = document.getElementById("email-address").value
    const subject = document.getElementById("subject").value
    const text = document.getElementById("message").value
    sendTxt(address, subject, text)
}, false)