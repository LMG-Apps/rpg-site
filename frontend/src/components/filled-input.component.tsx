import React from 'react'
import {
  TextField,
  // eslint-disable-next-line no-unused-vars
  FilledTextFieldProps,
} from '@material-ui/core'

export const CustomInput: React.FC<FilledTextFieldProps> = ({
  ...otherProps
}: FilledTextFieldProps) => (
  <TextField
    {...otherProps}
    InputProps={{
      style: { backgroundColor: 'rgb(34,34,44)' },
      ...otherProps.InputProps,
    }}
    inputProps={{ style: { color: 'white' } }}
    InputLabelProps={{
      style: { color: 'grey' },
      ...otherProps.InputLabelProps,
    }}
  />
)
