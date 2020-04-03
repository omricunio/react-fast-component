export enum QueryNames {
    componentName = "componentName",
    componentLanguage = "componentLanguage",
    componentType = "componentType",
    componentStyle = "componentStyle",
    outputQuery = "outputQuery"
}

export enum InputTypes {
    input = "input",
    list = "list"
}

export enum ComponentLanguages {
    TypeScript = "TypeScript",
    JavaScript = "JavaScript"
}

export enum ComponentModels {
    FunctionalComponent = "React Functional Component",
    ClassComponent = "React Class Component"
}

export enum ComponentStyles {
    MaterialJSS = "JSS using Material-UI",
    SASS = "SASS",
    CSS = "CSS",
    StyledComponents = "Styled Components",
    NoStyles = "No Styles"
}

export enum OutputOptions {
    OpenOutputFolder = "Open output folder",
    SaveInsideCurrentFolder = "Save inside current folder"
}

export interface Query {
    name: string;
    type: string;
    message: string;
    answer?: string;
}

export interface ValidatedQuery extends Query {
    validate: (value: string) => string | boolean;
}

export interface ListQuery extends Query {
    options: string[];
}

export interface ComponentType {
    attributes: ComponentAttribute[];
    folderPath: string;
    handler: (queries: QueryType[], folderPath: string) => Promise<void>;
}

export type QueryType = Query | ValidatedQuery | ListQuery;

export type ComponentAttribute = ComponentLanguages | ComponentModels | ComponentStyles | OutputOptions