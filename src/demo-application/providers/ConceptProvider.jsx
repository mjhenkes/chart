import React from 'react';

const ConceptContext = React.createContext();

const ConceptProvider = ({ children }) => {
  const patientId = window.location.search.slice(1);
  document.title = `Chart: Patient ${patientId}`;
  const [conceptState, setConceptState] = React.useState(patientId);

  const demoApplicationConceptContextProviderValue = React.useMemo(() => ({
    data: conceptState,
    updateData: (newConcept) => { setConceptState(newConcept); },
  }), [conceptState]);

  return (
    <ConceptContext.Provider value={demoApplicationConceptContextProviderValue}>
      {children}
    </ConceptContext.Provider>
  );
};

export default ConceptProvider;
export { ConceptContext };
