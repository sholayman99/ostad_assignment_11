

const AddTodo = () => {
    return (
        <div style={{padding:"30px"}}>
            <h2>Add A Todo:</h2>
            <form>
                
                <input type="text" placeholder="Title" /> <br/><br/>
                <input type="text" placeholder="Description" /><br/><br/>
                <select>
                    <option value={""} >Status</option>
                    <option value={""} >New</option>
                    <option value={""} >Completed</option>

                </select>
            </form>
        </div>
    );
};

export default AddTodo;