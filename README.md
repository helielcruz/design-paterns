# design-paterns

# conventionalcommits.org/en/v1.0.0/  Padrões de commit

# chore: commitar configuração/setup/lib

# git-commit-msg-linter - garante que será usado o padrão de commit

# Adicionar .gitignore para não commitar node_modules e dist

# npm i -D typescript @types/node // adiciona tipagens no node

# Criar tsconfig.json
#   *Adicionar {"compilerOptions": { "outDir": "./dist", "module": "commonjs", "target": "es2019", "esModuleInterop: true, allowJs: true" } }
#   *https://node.green/ // Para verificar versões compatíveis do Node com funcionalidades

# standardjs.com  // No menu Rules mostra os padrões de códigos
#   * Eslint não funciona nativamente com o typescript. Para resolver: https://github.com/standard/eslint-config-standard-with-typescript - siga as instruções atualizadas de como instalar
#   * Instalar plugin eslint no VsCode
#   * Criar arquivo .eslintrc.json
#   * Incluir objeto: { "extends": "standard-with-typescript", "parserOptions": { "project": "/.tsconfig.json" } } // Serve para informar que o eslint será usado com o typscript

# instalar = npm install ts-node --save-dev
#   * usar = npx install ts-node arquivo.ts