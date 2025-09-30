import type { Config } from "../types/Config";
import { keys } from "../utils/keys";
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
    this.setActions();
  }

  /**
   * Affiche le visuel qui correspond à l'état du composant
   */
  render() {
    for (const key of keys(this.config)) {
      const elt = querySelector(`.command .${key} .value`);
      elt.innerHTML = this.config[key] + "";

      const sliderElt = querySelector(
        `.command .${key} input`,
        HTMLInputElement
      );
      sliderElt.value = this.config[key] + "";
    }
  }

  setActions() {
    for (const key of keys(this.config)) {
      const sliderElt = querySelector(
        `.command .${key} input`,
        HTMLInputElement
      );

      sliderElt.addEventListener("input", () => {
        this.config[key] = sliderElt.valueAsNumber;
        this.render();
        this.callback(this.config);
      });
    }
  }

  setConfig(config: Config) {
    this.config = config;
    this.render();
  }

  onChange(callback: Callback) {
    this.callback = callback;
  }
}
