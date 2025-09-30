import { querySelector } from "../utils/querySelector";
import { Command } from "./Command";

export class ExtendedCommand extends Command {
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
        body: JSON.stringify(this.config),
      });
      const json = await response.json();
      console.log("json: ", json);

      this.setConfig(json);
      this.render();
      this.callback(this.config);
    });
  }
}
