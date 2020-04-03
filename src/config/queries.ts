import {
    ValidatedQuery,
    QueryNames,
    InputTypes,
    ListQuery,
    ComponentModels,
    ComponentStyles,
    ComponentLanguages,
    QueryType,
    OutputOptions
} from "./interfaces";
import {
    DEFAULT_COMPONENT_STYLES,
    DEFAULT_COMPONENT_LANGUAGE,
    DEFAULT_COMPONENT_MODEL,
    DEFAULT_OUTPUT_OPTION
} from "./components";

export const NAME_QUERY: ValidatedQuery = {
    name: QueryNames.componentName,
    type: InputTypes.input,
    message: "✏️  Enter your component name",
    validate: (value: string) => {
        if (value.length <= 0) {
            return "Please enter a valid component name";
        }
        return true;
    }
};

export const LANGUAGE_QUERY: ListQuery = {
    name: QueryNames.componentLanguage,
    type: InputTypes.list,
    message: "📄 Please choose a language for your component",
    options: [ComponentLanguages.TypeScript, ComponentLanguages.JavaScript],
    answer: DEFAULT_COMPONENT_LANGUAGE
};

export const TYPE_QUERY: ListQuery = {
    name: QueryNames.componentType,
    type: InputTypes.list,
    message: "⚙️  Please choose a component type",
    options: [ComponentModels.FunctionalComponent, ComponentModels.ClassComponent],
    answer: DEFAULT_COMPONENT_MODEL
};

export const STYLE_QUERY: ListQuery = {
    name: QueryNames.componentStyle,
    type: InputTypes.list,
    message: "🖌  Please choose your component style",
    options: [
        ComponentStyles.MaterialJSS,
        ComponentStyles.StyledComponents,
        ComponentStyles.SASS,
        ComponentStyles.CSS,
        ComponentStyles.NoStyles
    ],
    answer: DEFAULT_COMPONENT_STYLES
};

export const OUTPUT_QUERY: ListQuery = {
    name: QueryNames.outputQuery,
    type: InputTypes.list,
    message: "💾 Where do you want to save the component?",
    options: [OutputOptions.OpenOutputFolder, OutputOptions.SaveInsideCurrentFolder],
    answer: DEFAULT_OUTPUT_OPTION
};

export const QUERIES: QueryType[] = [
    Object.create(NAME_QUERY),
    Object.create(LANGUAGE_QUERY),
    Object.create(TYPE_QUERY),
    Object.create(STYLE_QUERY),
    Object.create(OUTPUT_QUERY)
];
