import {useState} from 'react';
import Button from './components/Button';
import Screen from './components/Screen';
import Copyright from './components/Copyright';
import './assets/App.css';

function App() 
{
  const [screenValue, setScreenValue] = useState('');
  const [result, setResult] = useState(0);
  const [accumulator, setAccumulator] = useState(0);
  const [operated, setOperated] = useState(false);

  const addDigitOnScreen = (digit)=>
  {
    if((digit === '+' || digit === '-' || digit === '*' || digit === '/') && operated)
    {
      setOperated(false);
      setScreenValue(result+digit);
      console.log(digit + '1');
      return;
    }

    if(operated)
    {
      setScreenValue(digit);
      setOperated(false);
      return;
    }

    const valueEnteredScreen = screenValue + digit;
    setScreenValue(valueEnteredScreen);
  }

  const clearMemory = ()=>
  {
    setOperated(false);
    setScreenValue('');
    setResult(0);
    setAccumulator(0);
    return;
  } 

  const operation = (operation)=>
  {
    if(operation === 'backspace')
    {
      let valueOfScreen = screenValue;
      valueOfScreen = valueOfScreen.substring(0, (valueOfScreen.length-1))
      setScreenValue(valueOfScreen);
      setOperated(false);
      return;
    }

    try
    {
      const resultOperation = eval(screenValue); // Avalia a operação e executa o calculo com base nela
      setAccumulator(resultOperation);
      setResult(resultOperation);
      setOperated(true)
    }
    catch
    {
      setResult('ERRO!');
    }
  }

  return (
    <>
      <div className='container'>
        <h3>CALCULADORA MATEMÁTICA SIMPLES</h3>

        <Screen value={screenValue} result={result} />

        <div className='buttonsCalculator'>

          <Button label='C' onClick={clearMemory} />
          <Button label='(' onClick={()=>addDigitOnScreen('(')} />
          <Button label=')' onClick={()=>addDigitOnScreen(')')} />
          <Button label='/' onClick={()=>addDigitOnScreen('/')} />
          <Button label='7' onClick={()=>addDigitOnScreen('7')} />
          <Button label='8' onClick={()=>addDigitOnScreen('8')} />
          <Button label='9' onClick={()=>addDigitOnScreen('9')} />
          <Button label='*' onClick={()=>addDigitOnScreen('*')} />
          <Button label='4' onClick={()=>addDigitOnScreen('4')} />
          <Button label='5' onClick={()=>addDigitOnScreen('5')} />
          <Button label='6' onClick={()=>addDigitOnScreen('6')} />
          <Button label='-' onClick={()=>addDigitOnScreen('-')} />
          <Button label='1' onClick={()=>addDigitOnScreen('1')} />
          <Button label='2' onClick={()=>addDigitOnScreen('2')} />
          <Button label='3' onClick={()=>addDigitOnScreen('3')} />
          <Button label='+' onClick={()=>addDigitOnScreen('+')} />
          <Button label='.' onClick={()=>addDigitOnScreen('.')} />
          <Button label='0' onClick={()=>addDigitOnScreen('0')} />
          <Button label='<-'onClick={ ()=>operation('backspace')} />
          <Button label='=' onClick={()=>operation('=')} />

        </div>
      </div>

      <Copyright />
    </>
  );
}

export default App;