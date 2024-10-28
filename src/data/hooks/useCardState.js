import { useState } from 'react';

const useCardState = (fields) => { // Accept fields as an argument
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState('forward');
  const [formData, setFormData] = useState({
    what: '',
    why: '',
    where: '',
    when: '',
    who: '',
    how: '',
    howMuch: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleNext = () => {
    if (step < totalSteps - 1) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Matriz 5W2H", formData);
    alert('Formulário enviado com sucesso!');
  };

  const totalSteps = fields.length; // Use the passed fields

  const currentField = fields[step];
  const progress = ((step + 1) / totalSteps) * 100;

  return {
    step,
    setStep,
    direction,
    setDirection,
    formData,
    setFormData,
    handleChange,
    handleNext,
    handlePrev,
    handleSubmit,
    totalSteps,
    currentField,
    progress,
  };
};

export default useCardState;
