import help from "./help";
import startWizard from "lib/wizard";
import { ParsedArgs } from "minimist";
import { buildComponentByArguments } from "./componentTypeBuilder";

const handlers: Record<string, (args: ParsedArgs) => void> = {
    help: help,
    wizard: startWizard,
    js: buildComponentByArguments,
    ts: buildComponentByArguments
};

export default handlers;
