import React, { useState } from 'react';
import { evaluate } from 'mathjs'

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>('0');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleClick = (symbol: string) => {
    if(symbol == '<'){
        if(display.length === 1){
            setDisplay('0')
        }else{
            setDisplay(display.slice(0, -1));
        }
    }

    if(symbol == 'C'){
        setDisplay('0');
        setErrorMessage("")
    }

    switch (symbol) {
        case '=':
            try {
                var result = evaluate(display)
                setDisplay(result+'')
            }catch(e){
                setErrorMessage("Invalid expression entered")
                console.log(e)
                console.log("Problem occurred")
            }
            break;
        case '/':
        case '*':
        case '-':
        case '+':
        case '.':
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            setDisplay(display + symbol);
      }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-700 p-4">
      <div className="w-full max-w-xs bg-white rounded-lg shadow-md p-4">
        <div className="text-right mb-4 text-2xl font-mono">{display}</div>
        <div className="text-left text-rose-700 font-mono">{errorMessage}</div>
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-3 row-span-1">
            <button className="w-full h-full p-4 bg-orange-600 text-white rounded" onClick={()=> handleClick('C')}>C</button>
          </div>
          <button className="p-4 bg-blue-500 text-white rounded" onClick={() => handleClick('/')}>/</button>
          
          <button className="p-4 bg-gray-200 rounded" onClick={() => handleClick('7')}>7</button>
          <button className="p-4 bg-gray-200 rounded" onClick={() => handleClick('8')}>8</button>
          <button className="p-4 bg-gray-200 rounded" onClick={() => handleClick('9')}>9</button>
          <button className="p-4 bg-blue-500 text-white rounded" onClick={() => handleClick('*')}>*</button>
          
          <button className="p-4 bg-gray-200 rounded" onClick={() => handleClick('4')}>4</button>
          <button className="p-4 bg-gray-200 rounded" onClick={() => handleClick('5')}>5</button>
          <button className="p-4 bg-gray-200 rounded" onClick={() => handleClick('6')}>6</button>
          <button className="p-4 bg-blue-500 text-white rounded" onClick={() => handleClick('-')}>-</button>
          
          <button className="p-4 bg-gray-200 rounded" onClick={() => handleClick('1')}>1</button>
          <button className="p-4 bg-gray-200 rounded" onClick={() => handleClick('2')}>2</button>
          <button className="p-4 bg-gray-200 rounded" onClick={() => handleClick('3')}>3</button>
          <button className="p-4 bg-blue-500 text-white rounded" onClick={() => handleClick('+')}>+</button>
          
          <button className="p-4 bg-gray-200 rounded" onClick={() => handleClick('0')}>0</button>
          <button className="p-4 bg-gray-200 rounded" onClick={() => handleClick('.')}>.</button>
          <button className="p-4 bg-orange-600 text-white rounded" onClick={() => handleClick('<')}>&lt;</button>
          <button className="p-4 bg-blue-500 text-white rounded" onClick={() => handleClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
