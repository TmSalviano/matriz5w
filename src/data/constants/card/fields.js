export const fields = () => {
    const AdmnistracaoFields = [
      { label: 'O quê (What)', name: 'what', placeholder: 'Descreva o que será feito' },
      { label: 'Por quê (Why)', name: 'why', placeholder: 'Explique a razão ou o objetivo' },
      { label: 'Onde (Where)', name: 'where', placeholder: 'Indique onde ocorrerá' },
      { label: 'Quando (When)', name: 'when', placeholder: 'Informe o prazo ou data' },
      { label: 'Quem (Who)', name: 'who', placeholder: 'Especifique quem está envolvido' },
      { label: 'Como (How)', name: 'how', placeholder: 'Explique como será feito' },
      { label: 'Quanto custa (How Much)', name: 'howMuch', placeholder: 'Informe quanto irá custar' }
    ];
  
    const Fields2 = [ /* same structure as above */ ];
    const Fields3 = [ /* same structure as above */ ];
    const Fields4 = [ /* same structure as above */ ];
  
    return [AdmnistracaoFields, Fields2, Fields3, Fields4];
  };
  