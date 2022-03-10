import { render, screen } from "@testing-library/react"
import Todo from "../todo"


test('shoukd render todo no-component', () => {
  const todo = { id: 1, title: 'task 1', completed: false }

  render(<Todo todo={todo}/>);

  const todoElement = screen.getByTestId('todo-1')
  expect(todoElement).toBeInTheDocument()
  expect(todoElement).toHaveTextContent('task 1')
})

test('shoukd render todo component', () => {
  const todo = { id: 2, title: 'task 2', completed: true }

  render(<Todo todo={todo}/>);

  const todoElement = screen.getByTestId('todo-2')
  expect(todoElement).toBeInTheDocument()
  expect(todoElement).toHaveTextContent('task 2')
})