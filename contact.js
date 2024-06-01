const general=document.getElementById('general');
general.addEventListener('submit',function(event){
    event.preventDefault()
        const name=document.getElementById('name').value;
        console.log(name);
        window.alert("you have submitted successfully")
        const email=document.getElementById('email').value;
        console.log(email);
        const message=document.getElementById('message').value;
        console.log(message)
    
})