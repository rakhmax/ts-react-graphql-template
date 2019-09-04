const initFormState = (fields: object): object => {
  const initialFormState: any = {}

  for (const field in fields) {
    if (fields.hasOwnProperty(field)) {
      initialFormState[field] = null
    }
  }

  return initialFormState
}

export default initFormState
