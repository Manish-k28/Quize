const JavaScriptQuestions = [
    {
      ques: "What is JavaScript primarily used for?",
      a: "Interactivity on websites",
      b: "Assembly language programming",
      c: "Compilation of code",
      d: "None of the above",
      correct: "a",
    },
    {
      ques: "Which of the following is NOT a JavaScript data type?",
      a: "String",
      b: "Boolean",
      c: "Integer",
      d: "Array",
      correct: "c",
    },
    {
      ques: "What does DOM stand for in JavaScript?",
      a: "Document Object Model",
      b: "Data Object Mode",
      c: "Document Oriented Method",
      d: "None of the above",
      correct: "a",
    },
    {
      ques: "What keyword is used to declare variables in JavaScript?",
      a: "let",
      b: "var",
      c: "const",
      d: "All of the above",
      correct: "d",
    },
    {
      ques: "Which operator is used to concatenate strings in JavaScript?",
      a: "+",
      b: "-",
      c: "*",
      d: "/",
      correct: "a",
    },
    {
      ques: "What method is used to add a new element to the end of an array?",
      a: "push()",
      b: "pop()",
      c: "concat()",
      d: "shift()",
      correct: "a",
    },
    {
      ques: "What does the '=== operator' do in JavaScript?",
      a: "Checks for equality of value and type",
      b: "Assigns a value to a variable",
      c: "Compares two values",
      d: "None of the above",
      correct: "a",
    },
    {
      ques: "Which function is used to print a message to the console in JavaScript?",
      a: "log()",
      b: "print()",
      c: "console()",
      d: "message()",
      correct: "a",
    },
    {
      ques: "What does the 'typeof' operator do in JavaScript?",
      a: "Returns the type of a variable or expression",
      b: "Assigns a value to a variable",
      c: "Compares two values",
      d: "None of the above",
      correct: "a",
    },
    {
      ques: "What looping construct is used to iterate over arrays in JavaScript?",
      a: "for",
      b: "while",
      c: "do...while",
      d: "All of the above",
      correct: "d",
    },
];
index=0


const Question = JavaScriptQuestions[0].ques;
// let a = JavaScriptQuestions[0].a;
// let b = JavaScriptQuestions[0].b;
// let c = JavaScriptQuestions[0].c;
// let d = JavaScriptQuestions[0].d;


let QueNo = 0;

document.getElementById('queNo').innerText= QueNo
document.getElementById('que').innerText= Question

function questions(){
    
    let data =JavaScriptQuestions[QueNo]
    QueNo=QueNo+1
    
    document.getElementById('queNo').innerText=QueNo
    document.getElementById('que').innerText= data.ques
    document.getElementById('a').innerText= data.a
    document.getElementById('b').innerText= data.b
    document.getElementById('c').innerText= data.c
    document.getElementById('d').innerText= data.d
// console.log(QueNo);
}
questions()


function checkedAnswer() {
    
    
    
    

}



