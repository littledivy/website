/** @jsx h */
import { emojify, h, marked } from "./deps.ts";

export function Header() {
  return (
    <div class="flex items-start mt-4">
      <div class="md:ml-4 md:pt-8 sm:pt-2 md:pb-8 md:pl-6">
        <p class="text-3xl">divy.works</p>
        <small>(ik cringe domain name)</small>
      </div>
    </div>
  );
}

// Pre-render the HTML
const html = marked.parse(emojify(await Deno.readTextFile("index.md")));
const mdCss = await Deno.readTextFile("md.css");
const mdCssOverrides = await Deno.readTextFile("overrides.css");

export function Index() {
  return (
    <html class="bg-black text-gray-100 font-mono">
      <link
        href="https://fonts.googleapis.com/css?family=Vibur:400"
        rel="stylesheet"
        type="text/css"
      />
      <style>{mdCss}</style>
      <style>{mdCssOverrides}</style>
      <div class="md:pl-20 sm:pl-4 md:pr-20 sm:pr-4 ml-4 mr-4">
        <Header />
        <div class="md:pl-6 md:ml-4 mt-2">
          <div
            class="markdown-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </html>
  );
}
