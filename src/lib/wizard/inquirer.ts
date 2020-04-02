import inquirer from "inquirer";
import { QUERIES } from "config/queries";
import { Query, QueryType } from "config/interfaces";

export async function askComponentOptions(): Promise<QueryType[]>{
    const questions: inquirer.Answers[] = [];
    for(const query of QUERIES) {
        const inquirerQuery: inquirer.Answers = {};
        if("validate" in query) {
            inquirerQuery.validate = query.validate;
        }
        if("options" in query) {
            inquirerQuery.choices = query.options;
        }
        inquirerQuery.name = query.name;
        inquirerQuery.type = query.type;
        inquirerQuery.message = query.message;
        questions.push(inquirerQuery);
    }

    const answers = await inquirer.prompt(questions) as any;
    for(const [name, answer] of Object.entries(answers)) {
        (QUERIES.find((query) => query.name == name) as Query).answer = answer as string;
    }
    return QUERIES;
}