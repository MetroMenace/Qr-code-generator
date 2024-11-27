function generateQrCode(){

    const url = document.getElementById("urlInput").value;

    if (url){

        const qrcodeurl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

        const qrImg = document.getElementById("qrCode");
        qrImg.scr = qrcodeurl;

        qrImg.style.display = "block";
    }else{
        alert("Please enter a valid URL");
    }
}