const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
// const toastTrigger = document.getElementById('liveToastBtn')
// const toastLiveExample = document.getElementById('liveToast')
//     if (toastTrigger) {
//       toastTrigger.addEventListener('click', () => {
//         const toast = new bootstrap.Toast(toastLiveExample)
    
//         toast.show()
//       })
//     }
    const addToCartBtn = document.getElementById("addToCartBtn");

addToCartBtn.addEventListener("click", function() {
    toast = new bootstrap.Toast(document.querySelector('.toast'));
    toast.show();
});
    const addToCartBtn1 = document.getElementById("addToCartBtn1");

addToCartBtn1.addEventListener("click", function() {
    toast1 = new bootstrap.Toast(document.querySelector('.toast'));
    toast1.show();
});
    const addToCartBtn2 = document.getElementById("addToCartBtn2");

addToCartBtn2.addEventListener("click", function() {
    toast2 = new bootstrap.Toast(document.querySelector('.toast'));
    toast2.show();
});
    const addToCartBtn3 = document.getElementById("addToCartBtn3");

addToCartBtn3.addEventListener("click", function() {
    toast3 = new bootstrap.Toast(document.querySelector('.toast'));
    toast3.show();
});
    const addToCartBtn4 = document.getElementById("addToCartBtn4");

addToCartBtn4.addEventListener("click", function() {
    toast4 = new bootstrap.Toast(document.querySelector('.toast'));
    toast4.show();
});
    const addToCartBtn5 = document.getElementById("addToCartBtn5");

addToCartBtn5.addEventListener("click", function() {
    toast5 = new bootstrap.Toast(document.querySelector('.toast'));
    toast5.show();
});
    const addToCartBtn6 = document.getElementById("addToCartBtn6");

addToCartBtn6.addEventListener("click", function() {
    toast6 = new bootstrap.Toast(document.querySelector('.toast'));
    toast6.show();
});
    const addToCartBtn7 = document.getElementById("addToCartBtn7");

addToCartBtn7.addEventListener("click", function() {
    toast7 = new bootstrap.Toast(document.querySelector('.toast'));
    toast7.show();
});
    const addToCartBtn8 = document.getElementById("addToCartBtn8");

addToCartBtn8.addEventListener("click", function() {
    toast8 = new bootstrap.Toast(document.querySelector('.toast'));
    toast8.show();
});
    const addToCartBtn9 = document.getElementById("addToCartBtn9");

addToCartBtn9.addEventListener("click", function() {
    toast9 = new bootstrap.Toast(document.querySelector('.toast'));
    toast9.show();
});
    const addToCartBtn10 = document.getElementById("addToCartBtn10");

addToCartBtn10.addEventListener("click", function() {
    toast10 = new bootstrap.Toast(document.querySelector('.toast'));
    toast10.show();
});
    const addToCartBtn11 = document.getElementById("addToCartBtn11");

addToCartBtn11.addEventListener("click", function() {
    toast11 = new bootstrap.Toast(document.querySelector('.toast'));
    toast11.show();
});
    const addToCartBtn12 = document.getElementById("addToCartBtn12");

addToCartBtn12.addEventListener("click", function() {
    toast12 = new bootstrap.Toast(document.querySelector('.toast'));
    toast12.show();
});
    const addToCartBtn13 = document.getElementById("addToCartBtn13");

addToCartBtn13.addEventListener("click", function() {
    toast13 = new bootstrap.Toast(document.querySelector('.toast'));
    toast13.show();
});
    const addToCartBtn14 = document.getElementById("addToCartBtn14");

addToCartBtn14.addEventListener("click", function() {
    toast14 = new bootstrap.Toast(document.querySelector('.toast'));
    toast14.show();
});
    const addToCartBtn15 = document.getElementById("addToCartBtn15");

addToCartBtn15.addEventListener("click", function() {
    toast15 = new bootstrap.Toast(document.querySelector('.toast'));
    toast15.show();
});
    
 
// Get the "Add to Cart" button
// var addToCartButton = document.getElementsByName("add-to-cart-button");

// Get the modal
// var modal = document.getElementById("cart-modal");

// Get the cancel button in the modal
// var cancelButton = document.getElementById("cancel-button");

// Get the "Add to Cart" button in the modal
// var addToCartModalButton = document.getElementById("add-to-cart-modal-button");

// Get the toast element
// var toastElement = document.getElementById("live-toast");

// When the user clicks the button, show the modal
// addToCartButton.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on the cancel button in the modal, close the modal
// cancelButton.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks on the "Add to Cart" button in the modal, show the toast notification
// addToCartModalButton.onclick = function() {
  // Show the toast notification

    toast++
  var toast = new bootstrap.Toast(toastElement);
  toast.show();
  
  // Close the modal
  modal.style.display = "none";
// }
