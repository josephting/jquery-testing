module.exports = () => {
  const div = document.createElement('div')
  div.innerHTML = `
    <form>
      <input type="text" name="title" value="lorem ipsum">
      <button type="button">Submit</button>
    </form>
  `
  const button = div.querySelector('button')
  button.addEventListener('click', () => {
    addTodo(button)
    return false
  })

  return div
}
