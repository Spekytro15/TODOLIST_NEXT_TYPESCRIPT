import React ,{useContext}from 'React';
import { Chip } from 'primereact/chip';
interface TodoList{
    id?: string;
    item?:string;
}


const TodoList: React.FC <TodoList> =(props) => {

return (
    <>
      <Chip style={{backgroundColor : "#6366F1",color: "white"}} label={props.item}  className="mb-2" removable />
    </>
)

}

export default TodoList