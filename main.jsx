/** @jsx h */
import { h, router, serve, ssr } from "./deps.ts";
import { Index } from "./index.jsx";

const render = (component) => ssr(() => component);

serve(router(
  {
    "/": () => render(<Index />),
  },
));

console.log(
  "Listening on %chttp://localhost:8000/",
  "background: #222; color: #bada55",
);
