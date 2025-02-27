import { render, screen } from '@testing-library/react'
import { ComponentProps } from 'react'

import { Combobox } from '~/components/combobox'

describe('Combobox', () => {
  it('render', async () => {
    const props: ComponentProps<typeof Combobox> = {
      data: [{ label: 'Item', value: 'item' }],
      onChangeValue: () => {},
      placeholder: 'Placholder',
      value: 'item'
    }
    render(<Combobox {...props} />)

    const item = props.data.find(e => e.value === props.value)
    const title = await screen.findByText(item ? item.label : 'label')
    const combobox = await screen.findByRole('combobox')

    expect(combobox).not.toBeNull()
    expect(title).not.toBeNull()
  })
})
