const wrapper = document.querySelector(".wrapper");
const qrInput = wrapper.querySelector(".form input");
const generateBtn =wrapper.querySelector(".form button");
const qrImg = wrapper.querySelector(".qr-code img");
let preValue;

// TOTO: l'utilisateur utilise un text ou un lien dans le champs d'enter 
// TODO: Quand il clique sur le boutton générer un code, l'application vérifie le text ou le lien et valide
// TODO: Générer l'image du code QR à l'aide de l'API QR Server
// TODO: Afficher l'image du code QR dans l'élément img de la page
generateBtn.addEventListener("click", () => {
    // Recupération de la valeur entré par l'utilisateur
    let qrValue = qrInput.value.trim();
    if (!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    // Le texte du champs button  quand l'image du QRcode est en téléchargement 
    generateBtn.innerText = "Generating QR Code ...";
    // Appel à l'API qr server pour la création du qr code
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEvenListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

// TODO:Si l'utilisateur vide le champs d'entrée, le code est masqué
qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()){
        wrapper.classList.remove("active");
        preValue = "";
    };
});