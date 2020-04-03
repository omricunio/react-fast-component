import _ from "lodash";
import { ComponentLanguages, ComponentModels, ComponentStyles, ValidatedQuery, ListQuery, OutputOptions, ComponentAttribute } from "../../config/interfaces";
import { OPTION_VALUES, COMMANDS, OPTIONS } from "../../config/arguments";
import { NAME_QUERY, LANGUAGE_QUERY, TYPE_QUERY, STYLE_QUERY, OUTPUT_QUERY } from "../../config/queries";
import { ParsedArgs } from "minimist";
import { selectComponentType } from "../../lib/component/componentTypeSelector";
import { CliProgram } from "./interfaces";
import chalk from "chalk";

const { functional, classComponent } = OPTION_VALUES.type;
const { css, sass, materialjss, styledcomponents } = OPTION_VALUES.styles;
const { openOutputFolder, currentFolder } = OPTION_VALUES.destination;
const { type, style, destination } = OPTIONS;
const { javascript, typescript } = COMMANDS;

const optionToAttribute: Record<string, ComponentAttribute> = {
    [javascript.short]: ComponentLanguages.JavaScript,
    [javascript.long]: ComponentLanguages.JavaScript,
    [typescript.short]: ComponentLanguages.TypeScript,
    [typescript.long]: ComponentLanguages.TypeScript,

    [classComponent.short]: ComponentModels.ClassComponent,
    [classComponent.long]: ComponentModels.ClassComponent,
    [functional.short]: ComponentModels.FunctionalComponent,
    [functional.long]: ComponentModels.FunctionalComponent,

    [css.short]: ComponentStyles.CSS,
    [css.long]: ComponentStyles.CSS,
    [materialjss.short]: ComponentStyles.MaterialJSS,
    [materialjss.long]: ComponentStyles.MaterialJSS,
    [sass.short]: ComponentStyles.SASS,
    [sass.long]: ComponentStyles.SASS,
    [styledcomponents.short]: ComponentStyles.StyledComponents,
    [styledcomponents.long]: ComponentStyles.StyledComponents,

    [openOutputFolder.short]: OutputOptions.OpenOutputFolder,
    [openOutputFolder.long]: OutputOptions.OpenOutputFolder,
    [currentFolder.short]: OutputOptions.SaveInsideCurrentFolder,
    [currentFolder.long]: OutputOptions.OpenOutputFolder,
};


function validateArgs(args: ParsedArgs): boolean {
    if ((args._[0] !== "js" && args._[0] !== "ts") || !args._[1]) {
        return false;
    }

    for (const [option, optionValue] of Object.entries(args)) {
        if (option != "_") {
            if (!_.findKey(OPTIONS, (optionObj) => _.findKey(optionObj, (val) => val === option))) {
                return false;
            }
            if (
                !_.findKey(OPTION_VALUES, (optionValueSection) =>
                    _.findKey(optionValueSection, (optionValueObj) =>
                        _.findKey(optionValueObj, (val) => val === optionValue)
                    )
                )
            ) {
                return false;
            }
        }
    }
    return true;
};

async function buildComponentByArguments(args: ParsedArgs) {
    let nameQuery: ValidatedQuery = Object.create(NAME_QUERY);
    let languageQuery: ListQuery = Object.create(LANGUAGE_QUERY);
    let typeQuery: ListQuery = Object.create(TYPE_QUERY);
    let styleQuery: ListQuery = Object.create(STYLE_QUERY);
    let outputQuery: ListQuery = Object.create(OUTPUT_QUERY);

    const queries = [nameQuery, languageQuery, typeQuery, styleQuery, outputQuery];

    if (Object.keys(args).length > 1) {
        const modelValue = args[type.short] || args[type.long];
        const styleValue = args[style.short] || args[style.long];
        const destinationValue = args[destination.short] || args[destination.long];

        const typeAttribute = optionToAttribute[modelValue];
        if (typeAttribute) {
            typeQuery.answer = typeAttribute;
        }
        const styleAttribute = optionToAttribute[styleValue];
        if (styleAttribute) {
            styleQuery.answer = styleAttribute;
        }
        const destinationAttribute = optionToAttribute[destinationValue];
        if (destinationValue) {
            outputQuery.answer = destinationAttribute;
        }
    }

    const language = args._[0];
    if (language === typescript.short || language === typescript.long) {
        languageQuery.answer = ComponentLanguages.TypeScript;
    }

    nameQuery.answer = args._[1];
    const componentType = selectComponentType(queries);
    await componentType?.handler(queries, componentType.folderPath);
};

const componentBuilderProgram: CliProgram = {
    validate: validateArgs,
    handler: buildComponentByArguments
};

export default componentBuilderProgram;
