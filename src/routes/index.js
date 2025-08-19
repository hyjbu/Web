import Padding from "../page/padding/padding.js";
import Margin from "../page/margin/margin.js";
import Display from "../page/display/display.js";
import Position from "../page/position/position.js";
import Button from "../page/button/button.js";
import Selection from "../page/selection/select.js";
import Input from "../page/input/input.js";

const publicRoutes = [
  { path: "/", component: Margin },
  { path: "/padding", component: Padding },
  { path: "/display", component: Display },
  { path: "/position", component: Position },
  { path: "/button", component: Button },
  { path: "/selection", component: Selection},
  { path: "/input", component: Input },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
