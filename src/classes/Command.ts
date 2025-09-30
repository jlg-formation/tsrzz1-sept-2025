import type { Config } from "../types/Config";
import { querySelector } from "../utils/querySelector";

type Callback = (newConfig: Config) => void;

export class Command {
  private config: Config = {
    samples: 0,
    multiplicationFactor: 0,
  };

  private callback: Callback = () => {};

  constructor() {
    this.render();
  }

  /**
   * Affiche le visuel qui correspond à l'état du composant
   */
  render() {
    const elt = querySelector(".command .samples .value");
    elt.innerHTML = this.config.samples + "";
    const elt2 = querySelector(".command .multiplicationFactor .value");
    elt2.innerHTML = this.config.multiplicationFactor + "";

    const sliderElt = querySelector(
      ".command .samples input",
      HTMLInputElement
    );
    sliderElt.value = this.config.samples + "";
    const sliderElt2 = querySelector(
      ".command .multiplicationFactor input",
      HTMLInputElement
    );
    sliderElt2.value = this.config.multiplicationFactor + "";
  }

  setConfig(config: Config) {
    this.config = config;
    this.render();
  }

  onChange(callback: Callback) {
    this.callback = callback;
  }
}
