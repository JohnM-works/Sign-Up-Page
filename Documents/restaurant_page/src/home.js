import sinigang from "./asset/sinigang-image.png";

export const createHomePage = () => {
  //container dom
  const container = document.querySelector("#container");

  //add new dom for pageContent
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  const leftContent = document.createElement("div");
  leftContent.classList.add("left-content");

  const contentTitle = document.createElement("h1");
  contentTitle.classList.add("content-title");
  contentTitle.textContent = "Savor the Soul of Filipino Cuisine";

  const contentParagraph = document.createElement("p");
  contentParagraph.classList.add("content-paragraph");
  contentParagraph.textContent = `From the rich, slow-cooked flavors of kare-kare to the bright, citrusy kick of sinigang, our menu is a feast of tradition and creativity. \n
  
  At Lasa, we focus on what matters most — honest ingredients, bold flavors, and dishes made to be shared. \n
  
  Our food is rooted in heritage, reimagined with heart, and always served with warmth.`;

  const buttonContent = document.createElement("button");
  buttonContent.classList.add("content-button");
  buttonContent.textContent = "See More";

  const rightContent = document.createElement("div");
  rightContent.classList.add("right-content");

  const imageContent = document.createElement("img");
  imageContent.classList.add("image-content");
  imageContent.src = sinigang;

  leftContent.appendChild(contentTitle);
  leftContent.appendChild(contentParagraph);
  leftContent.appendChild(buttonContent);

  rightContent.appendChild(imageContent);

  pageContent.appendChild(leftContent);
  pageContent.appendChild(rightContent);

  container.appendChild(pageContent);
};
