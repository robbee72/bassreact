var questionsOnJavascript = [
	{
		question: 'In the Programming Language Javascript, what is a simple definition of closure?',
		answers: [
			{
				type: 'Incorrect',
				content: ' Completing a tag with </...>'
			},
			{
				type: 'Correct',
				content: ' When a function remembers the variables around it even when that function is executed elsewhere.'
			},
			{
				type: 'Incorrect',
				content: ' When your code has been executed and removed from the lexical scope shack. '
			}
		]
	},
	{
		question: "In ES6, the keyword 'const' refers to...?",
		answers: [
			{
				type: 'Correct',
				content: 'a variable that can not be changed.'
			},
			{
				type: 'Incorrect',
				content: 'defining a block scope local variable, optionally initializing it to a value.'
			},
			{
				type: 'Incorrect',
				content: 'an inspect tool in V8.'
			}
		]
	},
	{
		question: 'Which of these is a arrow function?',
		answers: [
			{
				type: 'Incorrect',
				content: 'var multiply = function(x, y) {return x * y; };'
			},
			{
				type: 'Correct',
				content: 'var multiply = (x, y) => { return x * y };'
			},
			{
				type: 'Incorrect',
				content: '(function () {})();'
			}
		]
	},
	{
		question: 'Which of the following is NOT a javascript framework or library?',
		answers: [
			{
				type: 'Correct',
				content: 'Webpack'
			},
			{
				type: 'Incorrect',
				content: 'React'
			},
			{
				type: 'Incorrect',
				content: 'Lodash'
			}
		]
	},
	{
		question: 'In reference to coercion, which statement is true?',
		answers: [
			{
				type: 'Incorrect',
				content: 'true === 1;'
			},
			{
				type: 'Incorrect',
				content: "Operator precedence, only coerces variables that are the primitive type 'Numbers'."
			},
			{
				type: 'Correct',
				content:
					'If one operand is a string and the other is not, implicit coercion kicks in and forces the non-string to be a string, and then the two are concatenated.'
			}
		]
	},
	{
		question: "What Javascript framework or library often uses the '$'?",
		answers: [
			{
				type: 'Incorrect',
				content: 'Typescript.'
			},
			{
				type: 'Correct',
				content: 'jQuery.'
			},
			{
				type: 'incorrect',
				content: 'Angular.'
			}
		]
	},
	{
		question: 'Which of the following is an example of a pure function in javascript programming?',
		answers: [
			{
				type: 'Incorrect',
				content: 'The function being wrapped with paratheses.'
			},
			{
				type: 'Correct',
				content: 'Given the same inputs, always returns the same output, and has no side-effects.'
			},
			{
				type: 'incorrect',
				content: 'Using {this.state.name} instead of {this.props.name}. '
			}
		]
	},
	{
		question: "The keyword 'this' returns what in the chrome inspect console?",
		answers: [
			{
				type: 'Incorrect',
				content: 'An Array.'
			},
			{
				type: 'Correct',
				content: 'An Object.'
			},
			{
				type: 'incorrect',
				content: 'undefined.'
			}
		]
	},
	{
		question: "What does the 'this' keyword refer to? ",
		answers: [
			{
				type: 'Incorrect',
				content: 'Global variable.'
			},
			{
				type: 'Correct',
				content: 'Current execution context.'
			},
			{
				type: 'incorrect',
				content: '!window.'
			}
		]
	},
	{
		question: 'What does Math.random() return? ',
		answers: [
			{
				type: 'Incorrect',
				content: 'undefined.'
			},
			{
				type: 'Correct',
				content: 'A number between 0 and 1.'
			},
			{
				type: 'incorrect',
				content: 'null.'
			}
		]
	}
];

export default questionsOnJavascript;
