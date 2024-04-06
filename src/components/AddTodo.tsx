import { useState } from "react";

//新增任务需要添加内容判断
interface AddTodoProps {
    addTodo:(text: string) => void;
}
function AddTodo({addTodo}:AddTodoProps)
{
    const [text, setText] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(text.trim()===''){
            return
        }
        addTodo(text)
        setText('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)} />
            <button>新建事项</button>
        </form>
    )
}
export default AddTodo;