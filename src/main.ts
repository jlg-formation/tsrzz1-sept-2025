import { Board } from "./classes/Board.ts";
import { ExtendedCommand } from "./classes/ExtendedCommand.ts";
import "./style.css";
import type { Config } from "./types/Config.ts";

const config: Config = {
  samples: 10,
  multiplicationFactor: 2,
};

const board = new Board();
board.setConfig(config);
board.draw();

const command = new ExtendedCommand();
command.setConfig(config);
command.onChange((newConfig) => {
  board.setConfig(newConfig);
  board.redraw();
});
