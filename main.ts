import { serveDir } from "jsr:@std/http/file_server";

Deno.serve((req) =>
  serveDir(req, {
    fsRoot: ".",
  })
);
