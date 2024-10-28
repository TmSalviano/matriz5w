import { useState } from 'react';

const useCardState = () => {
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

  const fields = [
    { label: 'O quê (What)', name: 'what', placeholder: 'Descreva o que será feito' },
    { label: 'Por quê (Why)', name: 'why', placeholder: 'Explique a razão ou o objetivo' },
    { label: 'Onde (Where)', name: 'where', placeholder: 'Indique onde ocorrerá' },
    { label: 'Quando (When)', name: 'when', placeholder: 'Informe o prazo ou data' },
    { label: 'Quem (Who)', name: 'who', placeholder: 'Especifique quem está envolvido' },
    { label: 'Como (How)', name: 'how', placeholder: 'Explique como será feito' },
    { label: 'Quanto custa (How Much)', name: 'howMuch', placeholder: 'Informe quanto irá custar' }
  ];

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

  const totalSteps = fields.length;


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
    fields,
    totalSteps,
    currentField,
    progress,
  };
};

export default useCardState;