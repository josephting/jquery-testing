const code = cRequire(path.join(__dirname, '..', 'main.js'))
const domTestLib = require('dom-testing-library')

describe('main.js', () => {
  beforeEach(() => {
    (function(){
      eval.apply(this, arguments)
    }(code))
  })

  it('should load addTodo', () => {
    expect(addTodo).toBeDefined()
  })

  it('should be called correctly', () => {
    jest.spyOn(global.$, 'ajax')
    document.body.innerHTML = getTestDOM().innerHTML
    const button = domTestLib.getByText(document.body, 'Submit')
    button.addEventListener('click', () => {
      addTodo(button)
      return false
    })
    domTestLib.fireEvent.click(button)
    expect(global.$.ajax).toHaveBeenCalledTimes(1)
    expect(global.$.ajax).toHaveBeenCalledWith(expect.objectContaining({
      type: 'post',
      url: 'https://jsonplaceholder.typicode.com/todos',
      data: 'title=lorem%20ipsum',
      dataType: 'json'
    }))
  })
})
