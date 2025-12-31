
function typingGlow() {
  const text = "Aman Kumar | B.Tech AIML | Parul University | AI Engineer Goal 🚀";
  
  const target = document.querySelector(".scroll-text");
  let i = 0;

  function type() {
    if (i < text.length) {
      target.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100); 
    } else {
      
      setTimeout(() => {
        target.textContent = "";
        i = 0;
        type();
      }, 2000); 
    }
  }

  type();
}

window.onload = typingGlow;

script.js
