import { render, screen, cleanup } from '@testing-library/react'
import Todo from '../todo'


afterEach(() => {
    cleanup()
})

test('should render non-completed todos', () => {

    const todo = { id: 1, title: "workout", completed: false }

    render(<Todo todo={todo} />)
    const todoElement = screen.getByTestId('todo-1')
    expect(todoElement).toBeInTheDocument()
    expect(todoElement).toHaveTextContent('workout')

})

test('should render completed todos', () => {

    const todo = { id: 2, title: "shopping", completed: true }

    render(<Todo todo={todo} />)
    const todoElement = screen.getByTestId('todo-2')
    expect(todoElement).toBeInTheDocument()
    expect(todoElement).toHaveTextContent('shopping')
    expect(todoElement).toContainHTML('<strike><h1>shopping</h1></strike>')
})

