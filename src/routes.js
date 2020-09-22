import NotFound from './actions/404'
import Bye from './actions/bye'
import Hello from './actions/hello'
import Help from './actions/help'
import Balance from './actions/balance'

export const routes = [
  /* Routes map user inputs to actions (React Components)
        A user input is an object like this:
        {
            type: "text", // Input type, it can be one of text, postback, image, video, audio, document, location
            data: "Hello!" // Raw text (or attachment URL if it's a media type)
            payload: "", // This is used when the user has clicked on a button or quick reply
            intent: "smalltalk.greeting" Intent ID according to the NLP backend
        }

        Every route (an entry in this array) is composed by a matching rule and an action.
        A matching rule looks like this: {attribute: test}, which basically means: "take that
        attribute from the user input and apply the test" if test passes, the action defined in
        that route will be triggered.

        There are 3 types of tests:
        - String --> Perfect match
        - Regexp --> Pass the regular expression
        - Function --> Passes if the function returns true

        The rules will be tested in order so if the 1st rule matches, Botonic won't test
        other routes and will execute the 1st action.
        If there are several matching rules in the same route, all of them have to pass
        to consider a match.
   */

  /* Hello - if we get the text starts with 'hello' or hi text and will execute the react component defines in pages/actions/hello.js */
  { path: 'hello', text: t => t.toLocaleLowerCase().startsWith('hello'), action: Hello },
  { path: 'hi',  text: t => t.toLocaleLowerCase().startsWith('hi'), action: Hello },

  /* Help - if we get the text starts with 'help' text and will execute the react component defines in pages/actions/help.js */
  { path: 'help', text: t => t.toLocaleLowerCase().startsWith('help'), action: Help },

  /* This rule uses a function test to capture any text that includes with 'check my balance' */
  { path: 'bye', text: t => t.toLocaleLowerCase().includes('check my balance'), action: Balance },

  /* This rule uses a function test to capture any text that contains with 'thanks'*/
  { path: 'bye', text: t => t.toLocaleLowerCase().includes('thanks'), action: Bye },

  /* This rule uses a function test to capture any text that contains with 'bye'*/
  { path: 'bye', text: t => t.toLocaleLowerCase().includes('bye'), action: Bye },

  /* There's an implicit rule that captures any other input and maps it to
        the 404 action, it would be equivalent to:
        {path: 'not-found', type: /^.*$/, action: NotFound}
   */
  { path: 'not_found', type: /.*/, action: NotFound }

]
