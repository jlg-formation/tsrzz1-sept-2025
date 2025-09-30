import { querySelector } from "../utils/querySelector";
import { sleep } from "../utils/sleep";
import { Command } from "./Command";

export class ExtendedCommand extends Command {
  isPlaying = false;
  override setActions(): void {
    super.setActions();

    const buttonElt = querySelector(".command .configJSON", HTMLButtonElement);
    buttonElt.addEventListener("click", async () => {
      console.log("click");
      const response = await fetch("/config-special.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer xxxxxxxxxx",
        },
        // body: JSON.stringify(this.config),
      });
      const json = await response.json();
      console.log("json: ", json);

      this.setConfig(json);
      this.render();
      this.callback(this.config);
    });

    // button play
    this.setPlayAction();
  }

  setPlayAction() {
    console.log("set play action");
    const btnPlay = querySelector(".command .play", HTMLButtonElement);
    btnPlay.addEventListener("click", () => {
      console.log("update state");
      this.isPlaying = !this.isPlaying;
      this.render();

      if (this.isPlaying) {
        this.startPlaying();
      }
    });
  }
  async startPlaying() {
    while (this.isPlaying) {
      // dort un petit peu
      await sleep(15);
      // change l'etat en incrementant le facteur de multiplication
      let mf = this.config.multiplicationFactor;
      mf += 0.01;
      mf %= 100;
      mf = +mf.toFixed(2);
      this.config.multiplicationFactor = mf;
      // render
      // callback
      this.render();
      this.callback(this.config);
    }
  }

  override render(): void {
    super.render();

    // button play
    const btnPlay = querySelector(".command .play", HTMLButtonElement);
    btnPlay.innerHTML = this.isPlaying ? "Pause" : "Play";
  }
}
