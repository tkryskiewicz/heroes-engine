const { JSDOM } = require("jsdom");

const jsdom = new JSDOM("<!doctype html><html><body></body></html>");

const { window: w } = jsdom;

function copyProps(src: any, target: any) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

const g: any = global;

g.window = w;
g.document = w.document;
g.navigator = {
  userAgent: "node.js",
};

g.requestAnimationFrame = (callback: any) => setTimeout(callback, 0);

g.cancelAnimationFrame = (id: any) => clearTimeout(id);

copyProps(window, global);
