import './Form.scss'

const Form = () => {
  return (
    <form>
    <label >Количество элементов:</label>
    <select id="items" name="items">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
    </select>
    <label >Номер страницы:</label>
    <input type="number" id="page" name="page" min="1"/>
    <button className="buttonForm" type="button" id="previous">N</button>
    <button className="buttonForm" type="button" id="next">B</button>
</form>
  )
}

export default Form;