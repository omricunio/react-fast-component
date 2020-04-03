import { QueryType, QueryNames, ComponentType } from "config/interfaces";
import _ from "lodash";
import { COMPONENT_TYPES } from "config/components";

function getComponentTypeByAttributes(attributes: string[]): ComponentType | null {
    for (const componentType of COMPONENT_TYPES) {
        if (_.difference(componentType.attributes, attributes).length === 0) {
            return componentType;
        }
    }
    return null;
}

export function selectComponentType(queries: QueryType[]): ComponentType | null {
    const attributesFromUser: string[] = [];
    for (const query of queries) {
        if ("options" in query && query.answer) {
            attributesFromUser.push(query.answer);
        }
    }

    return getComponentTypeByAttributes(attributesFromUser);
}
