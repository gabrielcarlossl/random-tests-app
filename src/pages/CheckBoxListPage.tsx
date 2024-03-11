/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox, List, ListItemText, ListItem } from '@mui/material'
import React, { useState } from 'react'
import BackButton from '../components/button/BackButton'

const CheckboxList: React.FC<any> = () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
    { label: 'Option 5', value: 'option5' }
  ]
  const [selectAll, setSelectAll] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleSelectAll = () => {
    setSelectAll(!selectAll)
    if (!selectAll) {
      setSelectedOptions(options.map(option => option.value))
    } else {
      setSelectedOptions([])
    }
  }

  const handleCheckboxChange = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter(option => option !== value))
    } else {
      setSelectedOptions([...selectedOptions, value])
    }
  }

  return (
    <div>
      <BackButton url='/'>Voltar</BackButton>
      <List>
      <ListItem>
        <Checkbox
          checked={selectAll}
          onChange={handleSelectAll}
          indeterminate={selectedOptions.length > 0 && selectedOptions.length < options.length}
        />
        <ListItemText primary="Select All" />
      </ListItem>
      {options.map(option => (
        <ListItem key={option.value}>
          <Checkbox
            checked={selectedOptions.includes(option.value)}
            onChange={() => handleCheckboxChange(option.value)}
          />
          <ListItemText primary={option.label} />
        </ListItem>
      ))}
    </List>
    </div>
  )
}

export default CheckboxList
