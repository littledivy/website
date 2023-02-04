#!/usr/bin/env deno run --import-map=import_map.json --allow-net --allow-read --unstable --watch

/** @jsx h */
import { serve } from "std/http";
import { router } from "rutt";
import { h, html, tw } from "nanossr";
import { emojify } from "https://esm.sh/@twuni/emojify";
import { css } from "twind/css";

function Button({ children, ...props }) {
  return (
    <a
      class={tw`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md ${props.class}`}
    >
      {children}
    </a>
  );
}

function GitHub({ ...props }) {
  return (
    <a
      target="_blank"
      href="https://github.com/littledivy"
      {...props}
    >
      <img
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        alt="GitHub icon"
        width="32"
        height="32"
      />
    </a>
  );
}

function IconGreenCheck() {
  return (
    <div class={tw`flex-shrink-0`}>
      <svg
        class={tw`h-6 w-6 text-green-500`}
        x-description="Heroicon name: solid/check"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
  );
}

const features = [
  [
    () => <IconGreenCheck />,
    "Extensive contributions to the Deno CLI; most notably around performance, FFI and cryptography.",
  ],
];

function Home() {
  return (
    <main
      class={tw`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16`}
    >
      <div class={tw`max-w-3xl mx-auto`}>
        <p class={tw`text-gray-500`}>
          Hiee, I'm
        </p>
        <h1 class={tw`text-4xl font-bold`}>Divy</h1>

        <div
          class={tw`mt-8 ml-3 text-base text-gray-600`}
        >
          <p>
            I'm an open source developer. Software engineer at{"  "}
            <a
              href="https://deno.com"
              target="_blank"
              class={tw`text-indigo-600`}
            >
              Deno Land Inc.
            </a>, ex-CommunityLabs.
          </p>
          <p class={tw`mt-1`}>
            I've made extensive contributions to the Deno CLI; most notably
            around performance, FFI and cryptography. Original author of
            deno_ops, an essential core infrastructure in Deno.
          </p>

          <p class={tw`mt-2`}>
            Apart from that, I've contributed to{" "}
            <a
              href="https://v8.dev"
              target="_blank"
              class={tw`text-indigo-600`}
            >
              V8
            </a>{" "}
            and maintain many open source projects like deno_sdl2, webusb-rs,
            deno_bindgen, etc.
          </p>

          <p class={tw`mt-2`}>
            My default language is Rust. I like TypeScript, Go and Zig too.
          </p>
          <p class={tw`mt-2`}>I'm 18 years old, my pronouns are he/him.</p>
          {
            /*
          <Button
            class={tw`text-white bg-gradient-to-r from-blue-400 to-blue-500`}
            style="backdrop-filter: blur(10px);"
          >
            Get started
          </Button>
            /* <Button class={tw`ml-3 text-indigo-700 bg-indigo-100`}>
            Learn more
          </Button> */
          }
        </div>

        <GitHub class={tw`absolute top-0 right-0 mt-4 mr-4`} />
      </div>

      {
        /* Features list
      <div class={tw`mt-8 max-w-3xl mx-auto`}>
        <h2 class={tw`text-2xl font-bold`}></h2>
        <ul class={tw`mt-4 space-y-4`}>
          {features.map(([icon, description]) => (
            <li class={tw`flex`}>
              {icon()}
              <p class={tw`ml-3 text-base text-gray-500`}>
                {description}
              </p>
            </li>
          ))}
        </ul>
        </div>*/
      }

      <div class={tw`mt-8 max-w-3xl mx-auto`}>
        <div
          class={tw`bg-white overflow-hidden sm:rounded-lg border border-gray-200`}
        >
          <div class={tw`px-4 py-5 sm:px-6`}>
            <h3
              class={tw`text-lg

leading-6 font-medium text-gray-900`}
            >
              Get in touch {emojify(":call_me_hand:")}
            </h3>
            <p class={tw`mt-1 max-w-2xl text-sm text-gray-500`}>
              Message me on{" "}
              <a
                href="https://twitter.com/undefined_void"
                class={tw`text-indigo-600`}
              >
                Twitter
              </a>{" "}
              or shoot me an{" "}
              <a
                href="mailto:dj.srivastava23@gmail.com"
                class={tw`text-indigo-600`}
              >
                email
              </a>
              {" "}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

const options = {
  preflight: (preflight: string) =>
    css`
      ${preflight}
      @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
      h1 {
        font-family: 'Pacifico';
      }`,
};

function memoize<T>(fn: () => T): () => T {
  let cache: T | undefined;
  return () => {
    if (cache) return cache;
    cache = fn();
    return cache;
  };
}

const start = typeof Deno.serve !== "undefined" ? Deno.serve : serve;

const home = memoize(() => html(() => <Home />, { tw: options }));

await serve(
  router({
    "/": () =>
      new Response(home(), { headers: { "content-type": "text/html" } }),
  }) as Deno.ServeHandler,
);
