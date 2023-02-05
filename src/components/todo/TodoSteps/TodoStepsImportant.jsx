import React from 'react'
import AppCheckbox from '../../ui/AppCheckbox/AppCheckbox'

export default function TodoFormImportant({setTodoProp}) {
  const onInputChange = (isImportant) => {
    setTodoProp({isImportant});
  };

  return (
    <>
      <AppCheckbox 
        onInputChange={onInputChange}
        label='Это срочная задача?'
      />
    </>
  )
}
