import { ComponentStyles, ComponentModels, ComponentType, ComponentLanguages } from "./interfaces";
import { baseComponentTypeHandler } from "../lib/component/componentTypeHandlers";

export const TYPESCRIPT_FUNCTIONAL_MATERIAL: ComponentType = {
    attributes: [ComponentLanguages.TypeScript, ComponentModels.FunctionalComponent, ComponentStyles.MaterialJSS],
    folderPath: "components/typescript/functional/material-styles/",
    handler: baseComponentTypeHandler
};

export const TYPESCRIPT_FUNCTIONAL_CSS: ComponentType = {
    attributes: [ComponentLanguages.TypeScript, ComponentModels.FunctionalComponent, ComponentStyles.CSS],
    folderPath: "components/typescript/functional/css-styles/",
    handler: baseComponentTypeHandler
};

export const TYPESCRIPT_FUNCTIONAL_NOSTYLES: ComponentType = {
    attributes: [ComponentLanguages.TypeScript, ComponentModels.FunctionalComponent, ComponentStyles.NoStyles],
    folderPath: "components/typescript/functional/no-styles/",
    handler: baseComponentTypeHandler
};

export const TYPESCRIPT_FUNCTIONAL_SASS: ComponentType = {
    attributes: [ComponentLanguages.TypeScript, ComponentModels.FunctionalComponent, ComponentStyles.SASS],
    folderPath: "components/typescript/functional/sass-styles/",
    handler: baseComponentTypeHandler
};

export const TYPESCRIPT_FUNCTIONAL_STYlEDCOMPONENTS: ComponentType = {
    attributes: [ComponentLanguages.TypeScript, ComponentModels.FunctionalComponent, ComponentStyles.StyledComponents],
    folderPath: "components/typescript/functional/styled-components/",
    handler: baseComponentTypeHandler
};

export const TYPESCRIPT_CLASS_MATERIAL: ComponentType = {
    attributes: [ComponentLanguages.TypeScript, ComponentModels.ClassComponent, ComponentStyles.MaterialJSS],
    folderPath: "components/typescript/class/material-styles/",
    handler: baseComponentTypeHandler
};

export const TYPESCRIPT_CLASS_CSS: ComponentType = {
    attributes: [ComponentLanguages.TypeScript, ComponentModels.ClassComponent, ComponentStyles.CSS],
    folderPath: "components/typescript/class/css-styles/",
    handler: baseComponentTypeHandler
};

export const TYPESCRIPT_CLASS_NOSTYLES: ComponentType = {
    attributes: [ComponentLanguages.TypeScript, ComponentModels.ClassComponent, ComponentStyles.NoStyles],
    folderPath: "components/typescript/class/no-styles/",
    handler: baseComponentTypeHandler
};

export const TYPESCRIPT_CLASS_SASS: ComponentType = {
    attributes: [ComponentLanguages.TypeScript, ComponentModels.ClassComponent, ComponentStyles.SASS],
    folderPath: "components/typescript/class/sass-styles/",
    handler: baseComponentTypeHandler
};

export const TYPESCRIPT_CLASS_STYlEDCOMPONENTS: ComponentType = {
    attributes: [ComponentLanguages.TypeScript, ComponentModels.ClassComponent, ComponentStyles.StyledComponents],
    folderPath: "components/typescript/class/styled-components/",
    handler: baseComponentTypeHandler
};

export const JAVASCRIPT_FUNCTIONAL_MATERIAL: ComponentType = {
    attributes: [ComponentLanguages.JavaScript, ComponentModels.FunctionalComponent, ComponentStyles.MaterialJSS],
    folderPath: "components/javascript/functional/material-styles/",
    handler: baseComponentTypeHandler
};

export const JAVASCRIPT_FUNCTIONAL_CSS: ComponentType = {
    attributes: [ComponentLanguages.JavaScript, ComponentModels.FunctionalComponent, ComponentStyles.CSS],
    folderPath: "components/javascript/functional/css-styles/",
    handler: baseComponentTypeHandler
};

export const JAVASCRIPT_FUNCTIONAL_NOSTYLES: ComponentType = {
    attributes: [ComponentLanguages.JavaScript, ComponentModels.FunctionalComponent, ComponentStyles.NoStyles],
    folderPath: "components/javascript/functional/no-styles/",
    handler: baseComponentTypeHandler
};

export const JAVASCRIPT_FUNCTIONAL_SASS: ComponentType = {
    attributes: [ComponentLanguages.JavaScript, ComponentModels.FunctionalComponent, ComponentStyles.SASS],
    folderPath: "components/javascript/functional/sass-styles/",
    handler: baseComponentTypeHandler
};

export const JAVASCRIPT_FUNCTIONAL_STYlEDCOMPONENTS: ComponentType = {
    attributes: [ComponentLanguages.JavaScript, ComponentModels.FunctionalComponent, ComponentStyles.StyledComponents],
    folderPath: "components/javascript/functional/styled-components/",
    handler: baseComponentTypeHandler
};

export const JAVASCRIPT_CLASS_MATERIAL: ComponentType = {
    attributes: [ComponentLanguages.JavaScript, ComponentModels.ClassComponent, ComponentStyles.MaterialJSS],
    folderPath: "components/javascript/class/material-styles/",
    handler: baseComponentTypeHandler
};

export const JAVASCRIPT_CLASS_CSS: ComponentType = {
    attributes: [ComponentLanguages.JavaScript, ComponentModels.ClassComponent, ComponentStyles.CSS],
    folderPath: "components/javascript/class/css-styles/",
    handler: baseComponentTypeHandler
};

export const JAVASCRIPT_CLASS_NOSTYLES: ComponentType = {
    attributes: [ComponentLanguages.JavaScript, ComponentModels.ClassComponent, ComponentStyles.NoStyles],
    folderPath: "components/javascript/class/no-styles/",
    handler: baseComponentTypeHandler
};

export const JAVASCRIPT_CLASS_SASS: ComponentType = {
    attributes: [ComponentLanguages.JavaScript, ComponentModels.ClassComponent, ComponentStyles.SASS],
    folderPath: "components/javascript/class/sass-styles/",
    handler: baseComponentTypeHandler
};

export const JAVASCRIPT_CLASS_STYlEDCOMPONENTS: ComponentType = {
    attributes: [ComponentLanguages.JavaScript, ComponentModels.ClassComponent, ComponentStyles.StyledComponents],
    folderPath: "components/javascript/class/styled-components/",
    handler: baseComponentTypeHandler
};
