// IMPORT MODULES under test here:
import { renderTodo } from '../render-utils.js';

const test = QUnit.test;

test('renderTodo with a true completed value returns div with a class of complete', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="complete todo"><p>Walk Dog</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTodo({
        todo: 'Walk Dog',
        completed: true
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderTodo with a false completed value returns div with a class of incomplete', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="incomplete todo"><p>Walk Dog</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTodo({
        todo: 'Walk Dog',
        completed: false
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});