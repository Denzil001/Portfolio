async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  for (let i = 0; i < letters.length; i++) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
  }
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).text();
  const letters = sentence.split("");
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).text(letters.join(""));
  }
}

const carouselText = [
  { text: "Hi..", color: "#FAF3F0" },
  { text: "I'm Denzil001", color: "#C1F2B0" },
  { text: "I'm a developer..", color: "yellow" },
  { text: "i guess.. hehe :)", color: "white" }
];

async function carousel(carouselList, eleRef) {
  let i = 0;
  while (true) {
    await updateFontColor(eleRef, carouselList[i].color);
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++;
    if (i >= carouselList.length) {
      i = 0;
    }
  }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css('color', color);
}

const eleRef = document.getElementById("sentence");
carousel(carouselText, eleRef);
