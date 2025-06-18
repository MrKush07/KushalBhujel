function sendEmail(){
    const templateparams = {
        "name": document.getElementById("name").value,
        "email": document.getElementById("email").value,
        "subject": document.getElementById("subject").value,
        "message": document.getElementById("message").value, 
    };

        emailjs.send("service_ji0wen2", "template_5n4pyak", templateparams).then(
            ()=> alert("Message Sent!").catch(()=> alert("Message Not Sent!!")));
}