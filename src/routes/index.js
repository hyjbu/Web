import Padding from "../component/page/padding/padding.js";
import Margin from "../component/page/margin/margin.js";
import Display from "../component/page/display/display.js";
import Position from "../component/page/position/position.js";

const publicRoutes = [
  { path: "/margin", component: Margin },
  { path: "/padding", component: Padding },
  { path: "/display", component: Display },
  { path: "/position", component: Position },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
