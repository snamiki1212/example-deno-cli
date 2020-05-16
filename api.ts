import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 8000 });

const randomID = () => Math.round(Math.random() * 1000);

/********************
 * Routes
 ********************/
const routes = [
  {
    method: "POST",
    path: "/todos",
    handle: async () => {
      const id = randomID();
      const content = new TextEncoder().encode(
        `This is todo itm.\nID is ${id}.\n`
      );
      await Deno.writeFile(`./${id}.txt`, content);
      return id;
    },
  },
];

/********************
 * Main
 ********************/
for await (const req of server) {
  console.log("req", req.url);

  const [endpoint, _q] = req.url.split("?");

  // routing
  const handle = routes.find(
    (it) => it.method === req.method && endpoint.includes(it.path)
  )?.handle;
  if (handle) {
    const result = await handle();
    // const body = new TextEncoder().encode(`${result}`);
    console.log(result)
    req.respond({ body: `${result}` });
  }else{
    req.respond({});
  }

  
}
