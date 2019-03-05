import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'

import Dashboard from './Dashboard'


describe('<Display />', () => {
    it('displays strike button', () => {
        const { getByTestId } = render(<Dashboard />)
        expect(getByTestId('strike-btn')).toBeInTheDocument()
    })
    it('displays ball button', () => {
        const { getByTestId } = render(<Dashboard />)
        expect(getByTestId('ball-btn')).toBeInTheDocument()
    })
    it('displays foul button', () => {
        const { getByTestId } = render(<Dashboard />)
        expect(getByTestId('foul-btn')).toBeInTheDocument()
    })
    it('displays hit button', () => {
        const { getByTestId } = render(<Dashboard />)
        expect(getByTestId('hit-btn')).toBeInTheDocument()
    })

})
describe('add ball', () => {
    const { getByTestId, getByText } = render(<Dashboard/>)
    const selected = getByTestId('balls')
    const button = getByTestId('ballButton')
    it('Increments ball count', () => {
        fireEvent.click(button)
        expect(selected).toHaveTextContent(/Balls: 1/i)
        fireEvent.click(button)
        expect(selected).toHaveTextContent(/Balls:2/i)
        fireEvent.click(button)
        expect(selected).toHaveTextContent(/Balls:3/i)
    })
})