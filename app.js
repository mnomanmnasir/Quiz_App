
const digital= () =>
{

    let date = new Date();

    let h = date.getHours();

    
    let m = date.getMinutes();

    
    let s = date.getSeconds();

let time = h + ":" + m +":" + s


document.getElementById('Digital_clock').textContent = time;
    
    

}

setInterval(() => {
digital()
}, 1000);



const questions = [
    {
        'que': ')Which of the following is a markup language',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JAVASCRIPT',
        'd': 'PHP',
        'correct': 'a'
    },
{    
    'que': ')Which type of JavaScript language is',

    'a': 'Object-Oriented',
     'b': 'Object-Based',
    'c': 'Assembly-language',
     'd': 'High-level',
     'correct' : 'b'
},

{
     'que': ')Which one of the following also known as Conditional Expression:',
     

     'a': 'Alternative to if-else',
    'b': 'Switch statement',
    'c': 'If-then-else statement',
     'd': 'immediate if',
      'correct' : 'd'
},

{
    'que': ')The "function" and " var" are known as:',
    

    'a': 'Keywords',
   'b': 'Data types',
   'c': 'Declaration statements',
    'd': 'Prototypes',
     'correct' : 'c'
},


{
    'que': ')Which of the following type of a variable is volatile:',
    

    'a': 'Mutable variable',
   'b': 'Dynamic variable',
   'c': 'Volatile variable',
    'd': 'Immutable variable',
     'correct' : 'a'
},

{
    'que': ')Which of the following option is used as hexadecimal literal beginning:',
    

    'a': '00',
   'b': '0x',
   'c': '0X',
    'd': 'Both 0x and 0X',
     'correct' : 'd'
},
{
    'que': ')In the JavaScript, which one of the following is not considered as an error:',
    

    'a': 'Syntax error',
   'b': 'Missing of semicolons',
   'c': 'Division by zero',
    'd': 'Missing of Bracket',
     'correct' : 'c'
},
{
    'que': ')In JavaScript, what is a block of statement:',
    

    'a': 'Conditional block',
   'b': 'block that combines a number of statements into a single compound statement',
   'c': 'both conditional block and a single statement',
    'd': 'block that contains a single statement',
     'correct' : 'b'
},

{
        'que': ')What year was Javascript launched',
        'a': '1996',
        'b': '1995',
        'c': '1998',
        'd': 'None of the above',
        'correct': 'b'
    },
    {
        'que': ')What does CSS stands for',
        'a': 'Hyper Text Markup Language',
        'b': 'Cascading Style Sheet',
        'c': 'JavaScript Object Notation',
        'd': 'none of above',
        'correct': 'b'
    },
]


let index =0;
let total = questions.length;
let right = 0, wrong = 0;
const queBox = document.getElementById('queBox');
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () =>{

    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index]
    // console.log(data);
    queBox.innerText = ` ${index+1} ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}


const submitQuiz = () =>{
    const data = questions[index];
    const ans  = getAnswer()
    if(ans === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;

}
const getAnswer = () => {
    let answer;
    optionInputs.forEach (
        (input) => {
            if(input.checked){
                // return input.value;
                answer = input.value;

            }
        }
    )
    return answer;
}


const reset = () =>{
    optionInputs.forEach (
        (input) => {
             input.checked = false ;
        }
    )
}

const endQuiz = () =>{
    document.getElementById('box').innerHTML = `
    <div style="text-align:center" >
    <h2> ${"Thankyou For Using the Quiz"} <br> <br> ${right} / ${total} are correct</h2>
    </div>
    `
}



loadQuestion();

