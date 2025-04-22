import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("react-component", {
    description: "Adds a new react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Name of the component - Should not contain info about the domain (eg: Card ✅ - UserCard ❌",
        validate: value => !!value || "Name is mandatory"
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{kebabCase name}}/index.ts",
        templateFile: "templates/index.hbs",
      },
      {
        type: "add",
        path: "src/{{kebabCase name}}/{{kebabCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "add",
        path: "src/{{kebabCase name}}/{{kebabCase name}}.styles.ts",
        templateFile: "templates/styles.hbs",
      },
      {
        type: "add",
        path: "src/{{kebabCase name}}/{{kebabCase name}}.test.ts",
        templateFile: "templates/test.hbs",
      },
    ],
  });
}
