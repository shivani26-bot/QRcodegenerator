// https://goqr.me/api/

const Imageurl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;

let qrBox = document.querySelector(".qr-box");

let qrImage = document.getElementById("qr-image");
let qrInput = document.getElementById("qr-input");

function gnerateQR() {
  if (qrInput.value.length > 0) {
    qrImage.src = Imageurl + qrInput.value;
    qrBox.classList.add("show-qrImage");
  } else {
    qrInput.classList.add("error");
    setTimeout(() => {
      qrInput.classList.remove("error");
    }, 1000);
  }
}
