import type { Config } from "../types/Config";

type Callback = (newConfig: Config) => void;

export class Command {
  private config: Config = {
    samples: 0,
    multiplicationFactor: 0,
  };

  private callback: Callback = () => {};

  setConfig(config: Config) {
    this.config = config;
  }

  onChange(callback: Callback) {
    this.callback = callback;
  }
}
