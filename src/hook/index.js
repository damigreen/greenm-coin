import { useState } from 'react';

const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const reset = () => {
    setValue('');
  }

  const form ={
    type,
    value,
    onChange, 
  }

  return {
    form,
    reset,
  }
}

export default useField;
