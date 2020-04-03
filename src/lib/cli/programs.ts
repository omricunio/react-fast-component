import helpProgram from "./help";
import startWizardProgram from "../../lib/wizard";
import componentBuilderProgram from "./componentBuilderProgram";
import { CliProgram } from "./interfaces";
import { COMMANDS } from "../../config/arguments";

const programs: Record<string, CliProgram> = {
    [COMMANDS.wizard.short]: startWizardProgram,
    [COMMANDS.wizard.long]: startWizardProgram,
    [COMMANDS.javascript.short]: componentBuilderProgram,
    [COMMANDS.javascript.long]: componentBuilderProgram,
    [COMMANDS.typescript.short]: componentBuilderProgram,
    [COMMANDS.typescript.long]: componentBuilderProgram,
    help: helpProgram
};

export default programs;