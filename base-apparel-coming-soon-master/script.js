let emailCollectorForm = document.getElementById("email-collector")

emailCollectorForm.addEventListener("submit", event=>{
    event.preventDefault()
    
    let ourFormData = new FormData(emailCollectorForm)
    let userEmail = ourFormData.get("email")

    let updatedContent = document.getElementById("content-body")
    updatedContent.innerHTML=`
    <h1><span>We're</span><br>coming<br>soon</h1>
    <p> Thank you for submitting your email ${userEmail}</p>
    <p> You will hear from us very soon</p>
    `
})