
import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("Nalgae!!");
  console.log(text);
}

doStuff();