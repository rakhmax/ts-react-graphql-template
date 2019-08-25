const initFormState = (fields: object): object => {
  const initialFormState: any = {};

  for (let key in fields) {
    initialFormState[key] = null;
  }

  return initialFormState;
}

export default initFormState;