let toastBox = document.getElementById("toast-Box");

let successMSG = `<i class="ri-checkbox-circle-fill" ></i>Successfully Submitted !`;
let errorMSG = `<i class="ri-close-circle-fill" style="color:red;"></i>Please fix the error !`;
let invalidMSG = `<i class="ri-error-warning-fill" style="color:orange;"></i>Invalid input , try again !`;
 

function showNotification(msg ){

    let toast = document.createElement("div")
    toast.innerHTML = msg;
    toast.classList.add("toast")
    toastBox.append(toast);
    
    if(msg.includes('error'))
    {
        toast.classList.add("error");
    }
    if(msg.includes('Invalid')){
        toast.classList.add("invalid")
    }
    
    setTimeout(() => {
        toast.remove();
    } , 5000);
}