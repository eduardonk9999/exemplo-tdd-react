

function Todo({todo}) {
  const { title, id } = todo
  return(
    <div data-testid={`todo-${id}`}>
      {title}
    </div>
  )
}

export default Todo;