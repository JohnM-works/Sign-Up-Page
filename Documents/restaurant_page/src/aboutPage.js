import backgroundImage from "./asset/restaurant.jpg";

export const createAboutPage = () => {
  const container = document.querySelector(".container");
  const aboutPage = document.createElement("div");
  aboutPage.classList.add("about-page");

  const imageBackground = document.createElement("div");
  imageBackground.classList.add("background-image");

  const imgAbout = document.createElement("img");
  imgAbout.classList.add("about-image");
  imgAbout.src = backgroundImage;

  const aboutContent = document.createElement("div");
  aboutContent.classList.add("about-content");

  const aboutLasa = document.createElement("h2");
  aboutLasa.classList.add("title-content");
  const aboutParagraph = document.createElement("p");
  aboutParagraph.classList.add("paragraph-content");

  aboutLasa.textContent = "About Lasa";
  aboutParagraph.textContent =
    "Lasa was born from a craving for connection — to home, to heritage, and to the rich flavors of Filipino cuisine. Inspired by the kitchens we grew up in, we set out to create a space where tradition meets creativity. \r\n Every dish is a tribute to the food that raised us — bold, soulful, and made to be shared.";

  const weServeTitle = document.createElement("h2");
  weServeTitle.classList.add("title-content");
  const weServeParagraph = document.createElement("p");
  weServeParagraph.classList.add("paragraph-content");

  weServeTitle.textContent = "What We Serve";
  weServeParagraph.textContent =
    "From the tang of sinigang to the richness of kare-kare, each dish at Lasa is a tribute to flavor. We use fresh, local ingredients, and we’re not afraid to put a modern twist on the classics — always with respect to the roots.";

  const weDoTitle = document.createElement("h2");
  weDoTitle.classList.add("title-content");
  const weDoparagraph = document.createElement("p");
  weDoparagraph.classList.add("paragraph-content");

  weDoTitle.textContent = "Why We Do It";
  weDoparagraph.textContent =
    "To us, food isn’t just nourishment — it’s identity. It’s history. It’s community. We’re here to share the Filipino spirit with the world, one plate at a time.";

  const formDiv = document.createElement("div");
  formDiv.classList.add("form-div");

  const contactTitle = document.createElement("h2");
  contactTitle.classList.add("title-content");
  contactTitle.textContent = "Contact Us";

  const formInput = document.createElement("form");
  formInput.classList.add("form-input");

  const inputName = document.createElement("input");
  inputName.classList.add("input-name");
  inputName.type = "text";
  inputName.placeholder = "Full Name";

  const inputRow = document.createElement("div");
  inputRow.classList.add("input-row");

  const inputEmail = document.createElement("input");
  inputEmail.classList.add("input-email");
  inputEmail.type = "email";
  inputEmail.placeholder = "Email Address";

  const inputNumber = document.createElement("input");
  inputNumber.classList.add("input-phone-number");
  inputNumber.type = "tel";
  inputNumber.placeholder = "Phone Number";

  const inputMessage = document.createElement("textarea");
  inputMessage.classList.add("input-message");
  inputMessage.placeholder = "Your Message";

  const buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add("button-wrapper");

  const formButton = document.createElement("input");
  formButton.classList.add("form-button");
  formButton.type = "submit";
  formButton.value = "Send Message";
  formButton.formAction = "#";

  container.appendChild(aboutPage);

  aboutPage.appendChild(imageBackground);
  imageBackground.appendChild(imgAbout);

  aboutPage.appendChild(aboutContent);
  aboutContent.appendChild(aboutLasa);
  aboutContent.appendChild(aboutParagraph);
  aboutContent.appendChild(weServeTitle);
  aboutContent.appendChild(weServeParagraph);
  aboutContent.appendChild(weDoTitle);
  aboutContent.appendChild(weDoparagraph);

  aboutContent.appendChild(formDiv);

  formDiv.appendChild(contactTitle);
  formDiv.appendChild(formInput);
  formInput.appendChild(inputName);
  formInput.appendChild(inputRow);
  formInput.appendChild(inputMessage);
  formInput.appendChild(buttonWrapper);

  inputRow.appendChild(inputEmail);
  inputRow.appendChild(inputNumber);
  buttonWrapper.appendChild(formButton);
};
