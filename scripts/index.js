const fileInput = document.getElementById("upload-file");
const previewImage = document.getElementById("img-edit-form");
const imageBlock = document.getElementById("image-block");
const imageEffects = document.getElementById("image-effects");

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    previewImage.classList.remove("hidden");
    const body = document.querySelector("body");
    body.classList.add("modal-open");

    const newImage = document.createElement("img");
    newImage.src = reader.result;
    newImage.alt = " image";
    imageBlock.appendChild(newImage);

    // Original effect >>>
    const effectBlock = document.createElement("div");
    imageEffects.appendChild(effectBlock);
    effectBlock.classList.add("effect-col");

    const originalImage = document.createElement("img");
    originalImage.src = reader.result;
    originalImage.alt = " image";

    effectBlock.appendChild(originalImage);
    const text = document.createElement("p");
    text.textContent = "Оригинал";
    effectBlock.appendChild(text);
    effectBlock.addEventListener('click', () =>{
      newImage.classList.remove("sepia", "black-white", "invert", "brightness");
    })
    //<< Original effect

    const effectSepia = document.createElement("div");
    imageEffects.appendChild(effectSepia);
    effectSepia.classList.add("effect-col");

    const sepiaImage = document.createElement("img");
    console.log(reader.result);
    console.log(1);
    sepiaImage.src = reader.result;
    sepiaImage.alt = " image";
    sepiaImage.classList.add("sepia");

    effectSepia.appendChild(sepiaImage);
    const sepiaText = document.createElement("p");
    sepiaText.textContent = "Сепия";
    effectSepia.appendChild(sepiaText);

    // Add event listener to the sepia effect block
    effectSepia.addEventListener("click", () => {
      newImage.classList.remove("black-white", "invert", "brightness");

      newImage.classList.add("sepia");
    });

    // Black and White effect >>>
    const effectBW = document.createElement("div");
    imageEffects.appendChild(effectBW);
    effectBW.classList.add("effect-col");

    const bwImage = document.createElement("img");
    console.log(reader.result);
    console.log(1);
    bwImage.src = reader.result;
    bwImage.alt = " image";
    bwImage.classList.add("black-white");

    effectBW.appendChild(bwImage);
    const bwText = document.createElement("p");
    bwText.textContent = "Черно-белое";
    effectBW.appendChild(bwText);

    // Add event listener to the black and white effect block
    effectBW.addEventListener("click", () => {
      newImage.classList.remove("sepia","invert", "brightness");

      newImage.classList.add("black-white");
    });

    // Inverted colors effect >>>
    const effectInvert = document.createElement("div");
    imageEffects.appendChild(effectInvert);
    effectInvert.classList.add("effect-col");

    const invertImage = document.createElement("img");
    invertImage.src = reader.result;
    invertImage.alt = " image";
    invertImage.classList.add("invert");

    effectInvert.appendChild(invertImage);
    const invertText = document.createElement("p");
    invertText.textContent = "Инвертировать";
    effectInvert.appendChild(invertText);

    // Add event listener to the inverted colors effect block
    effectInvert.addEventListener("click", () => {
      newImage.classList.remove("sepia", "black-white", "brightness");

      newImage.classList.add("invert");
    });

    // Brightness effect >>>
    const effectBrightness = document.createElement("div");
    imageEffects.appendChild(effectBrightness);
    effectBrightness.classList.add("effect-col");

    const brightnessImage = document.createElement("img");
    brightnessImage.src = reader.result;
    brightnessImage.alt = " image";
    brightnessImage.classList.add("brightness");

    effectBrightness.appendChild(brightnessImage);
    const brightnessText = document.createElement("p");
    brightnessText.textContent = "Яркость";
    effectBrightness.appendChild(brightnessText);

    // Add event listener to the brightness effect block
    effectBrightness.addEventListener("click", () => {
      newImage.classList.remove("sepia", "black-white", "invert");

      newImage.classList.add("brightness");
    });
  });

  reader.readAsDataURL(file);
});


originalImage.addEventListener("click", () => {
  });