const componentAction =[
  {
    type: 'add',
    path: '../src/components/{{pascalCase name}}/index.tsx',
    templateFile: 'templates/component.tsx.hbs',
  },
  {
    type: 'add',
    path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
    templateFile: 'templates/component.test.tsx.hbs',
  },
  {
    type: 'add',
    path: '../src/components/{{pascalCase name}}/styles.tsx',
    templateFile: 'templates/styles.tsx.hbs',
  },
  {
    type: 'add',
    path: '../src/components/{{pascalCase name}}/stories.tsx',
    templateFile: 'templates/stories.tsx.hbs',
  }
]

const hookAction =[
  {
    type: 'add',
    path: '../src/hooks/use{{pascalCase name}}.ts',
    templateFile: 'templates/hook.ts.hbs',
  }
]

const helperAction =[
  {
    type: 'add',
    path: '../src/helpers/helper{{pascalCase name}}.ts',
    templateFile: 'templates/helper.ts.hbs',
  }
]

const typeAction =[
  {
    type: 'add',
    path: '../src/types/I{{pascalCase name}}.ts',
    templateFile: 'templates/type.ts.hbs',
  }
]


module.exports = (plop) =>{
  // controller generator
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the element name',
      }, {
        type: 'list',
        name: 'type',
        message: 'Select the element type: ',
        choices: [
          {name: 'Component', value: 'component',checked: true},
          {name: 'Hook', value: 'hook'},
          {name: 'Type', value: 'type'},
          {name: 'Helper', value: 'helper'},
        ],
      },
    ],
    actions: (data)=> {
      switch (data.type) {
        case 'component':
          return [...componentAction];
        case 'hook':
          return [...hookAction];
        case 'type':
          return [...typeAction ];
        case 'helper':
          return [...helperAction];
        default:
          return new Error('Invalid Type');
      }
    },
  });
};


