import { ComponentType, ComponentLanguages, ComponentModels, ComponentStyles, OutputOptions } from "./interfaces";
import { baseComponentTypeHandler } from "lib/component/componentTypeHandlers";
import * as COMPONENT_TYPES_ALL from "./componentTypes";

const COMPONENT_TYPES_OBJECT = COMPONENT_TYPES_ALL as Record<string, ComponentType>;

export const COMPONENT_NAME = "COMPONENT_NAME";

export const COMPONENT_OUT_FOLDER = "components-out";

export const DEFAULT_COMPONENT_LANGUAGE = ComponentLanguages.JavaScript;
export const DEFAULT_COMPONENT_MODEL = ComponentModels.ClassComponent;
export const DEFAULT_COMPONENT_STYLES = ComponentStyles.NoStyles;
export const DEFAULT_OUTPUT_OPTION = OutputOptions.OpenOutputFolder;

export const COMPONENT_TYPES: ComponentType[] = Object.values(COMPONENT_TYPES_OBJECT);
