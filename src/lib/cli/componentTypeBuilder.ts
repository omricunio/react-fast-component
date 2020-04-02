import { ComponentLanguages, ComponentModels, ComponentStyles, ValidatedQuery, ListQuery } from "config/interfaces"
import { OPTION_VALUES, COMMANDS } from "config/arguments";
import { NAME_QUERY, LANGUAGE_QUERY, TYPE_QUERY, STYLE_QUERY, OUTPUT_QUERY } from "config/queries";
import { ParsedArgs } from "minimist";
import { selectComponentType } from "lib/component/componentTypeSelector";

const { functional, classComponent } = OPTION_VALUES.type;
const { css, sass, materialjss, styledcomponents } = OPTION_VALUES.styles;
const { javascript, typescript, wizard } = COMMANDS;

const attributeToOptions: Record<string, string[]> = {
    [ComponentLanguages.JavaScript]: [javascript.short, javascript.long],
    [ComponentLanguages.TypeScript]: [typescript.short, typescript.long],

    [ComponentModels.ClassComponent]: [classComponent.short, classComponent.long],
    [ComponentModels.FunctionalComponent]: [functional.short, functional.long],
    
    [ComponentStyles.CSS]: [css.short, css.long],
    [ComponentStyles.MaterialJSS]: [materialjss.short, materialjss.long],
    [ComponentStyles.SASS]: [materialjss.short, materialjss.long],
    [ComponentStyles.StyledComponents]: [styledcomponents.short, styledcomponents.long]
}

export const buildComponentByArguments = (args: ParsedArgs) => {
    let nameQuery: ValidatedQuery = Object.create(NAME_QUERY);
    let languageQuery: ListQuery = Object.create(LANGUAGE_QUERY);
    let typeQuery: ListQuery = Object.create(TYPE_QUERY);
    let styleQuery: ListQuery = Object.create(STYLE_QUERY);
    let outputQuery: ListQuery = Object.create(OUTPUT_QUERY);

    const queries = [nameQuery, languageQuery, typeQuery, styleQuery, outputQuery];
    if(Object.keys(args).length > 1) {
        console.log("para");
    }
    else
    {
        const language = args._[0]
        if(language === typescript.short || language === typescript.long) {
            languageQuery.answer = ComponentLanguages.TypeScript;
        }        
    }

    nameQuery.answer = args._[1];
    const componentType = selectComponentType(queries);
    componentType?.handler(queries, componentType.folderPath);
}