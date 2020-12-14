import Gherkin from "gherkin";


export default {
    printGherkinStream() {
        const parser = new Gherkin.Parser();
        parser.stopAtFirstError = false;
        const ins = `
            @allTagged
            Feature: My Feature
            
              A big feature file
            
              # is a comment
              @tag1
              Scenario: Automates stuff
                Given a bunch of old stuff
                # more comments here
                When i try to compile
                Then I get results
            `;
        let result;
        try {
            const ast = parser.parse(ins);
            result = JSON.stringify(ast, null, 2);
        } catch (e) {
            result = e.stack;
        }
        console.log(JSON.parse(result))
        return JSON.parse(result);
    }
}