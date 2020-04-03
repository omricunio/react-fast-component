import { ParsedArgs } from "minimist";

export interface CliProgram {
    handler: (args: ParsedArgs) => Promise<void>;
    validate?: (args: ParsedArgs) => boolean;
}