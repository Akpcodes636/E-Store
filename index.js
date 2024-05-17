const modalButton = document.querySelector("#modal");
const modalBox =  document.querySelector("#modalBox");
const shoppingBtn = document.querySelector(".shoppingCart");
const shoppingBox = document.querySelector("#shoppingModal");
const shoppingRemoveModal = document.querySelector("#removeModal");
const submit = document.getElementById("submit");
const removeBtnModal = document.getElementById("removeBtn");



modalButton.addEventListener("click",()=> {
    modalBox.classList.remove('hidden');
});

submit.addEventListener("click",()=> {
    modalBox.classList.add('hidden');
});

// modalBox.addEventListener("click",()=>{
//     modalBox.classList.add('hidden');
// });

// shoppingBtn.addEventListener("click",()=>{
//     console.log("THIS IS WORKING FINE!");
// })

shoppingBtn.addEventListener("click",()=>{
    shoppingBox.classList.remove('hidden');
});

shoppingRemoveModal.addEventListener("click",()=>{
    shoppingBox.classList.add('hidden');
});

removeBtnModal.addEventListener("click", ()=>{
  modalBox.classList.add('hidden');
});

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
}
















  // function changeImage(button, imageId, defaultImageUrl) {
  //   const color = button.dataset.color;
  //   const imageElement = document.getElementById(imageId);

  //   // Update image source based on color
  //   if (color === "red") {
  //     imageElement.src =
  //       "https://i.ibb.co/8403ZFZ/pexels-hormel-2762247-removebg-preview-2-1.png";
  //   } else if (color === "white") {
  //     imageElement.src =
  //       "src/img/Img (1).png"; // Closing parenthesis added
       
  //   } else if (color === "black") {
  //     imageElement.src =
  //       "src/img/img (2).png";
  //        imageElement.style.width="187px";
  //        imageElement.style.height="128px";
  //   }
  // }