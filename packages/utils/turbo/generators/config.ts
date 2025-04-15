import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("util", {
    description: "Create a default utility function with unit test",
    prompts: [
      {
        type: "input",
        name: "UTIL_NAME",
        message: "Utility name (e.g. 'Is not nullish'):",
        validate: (value) => !!value || "The name is mandatory.",
      },
    ],
    actions: function (data) {
      const kebabName = plop.getHelper("kebabCase")(data?.UTIL_NAME);
      const camelName = plop.getHelper("camelCase")(data?.UTIL_NAME);

      return [
        {
          type: "add",
          path: `src/${kebabName}/index.ts`,
          templateFile: "templates/index.hbs",
          data: {
            name: camelName,
            rawName: kebabName,
          },
        },
        {
          type: "add",
          path: `src/${kebabName}/${kebabName}.ts`,
          templateFile: "templates/util.hbs",
          data: {
            name: camelName,
          },
        },
        {
          type: "add",
          path: `src/${kebabName}/${kebabName}.test.ts`,
          templateFile: "templates/test.hbs",
          data: {
            name: camelName,
            rawName: kebabName,
          },
        },
      ];
    },
  });
}
