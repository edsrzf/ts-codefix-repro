const {createProject} = require('@ts-morph/bootstrap');

async function main() {
  const project = await createProject({tsConfigFilePath: './tsconfig.json'});
  const sourceFile = project.getSourceFileOrThrow('source.ts');

  const languageService = project.getLanguageService();
  const diags = languageService.getSemanticDiagnostics("source.ts");
  const codeFixes = languageService.getCodeFixesAtPosition('source.ts', diags[0].start, diags[0].start + diags[0].length, [diags[0].code], {}, {})
}

main();
