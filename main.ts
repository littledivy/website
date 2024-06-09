import { serveDir } from "jsr:@std/http@0.221/file-server";

Deno.serve((req) =>
  serveDir(req, {
    fsRoot: "./out",
  })
);
