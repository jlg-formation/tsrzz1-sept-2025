import { Board } from "./classes/Board.ts";
import { Command } from "./classes/Command.ts";
import "./style.css";
import type { Config } from "./types/Config.ts";

const config: Config = {
  samples: 10,
  multiplicationFactor: 2,
};

const board = new Board();
board.setConfig(config);
board.draw();

const command = new Command();
command.setConfig(config);
command.onChange((newConfig) => {
  board.setConfig(newConfig);
  board.redraw();
});
