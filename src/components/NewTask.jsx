import { useState } from 'react';
import styles from './NewTask.module.css'
import { FiClipboard , FiTrash2 , FiCircle , FiCheckCircle } from "react-icons/fi";
export function NewTask(){

    const [lista,setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("");



    function adicionaItem(form){
        form.preventDefault();
        if(!novoItem){
            return;
        }
        setLista([...lista, { text: novoItem , isCompleted:false}])
        setNovoItem("");
        document.getElementById('input-entrada').focus();
    }

    function clicou(index){
        const listAux = [...lista]
        listAux[index].isCompleted = !listAux[index].isCompleted
        setLista(listAux);
    }

    function deleta(index){
        const listAux = [...lista]
        listAux.splice(index,1)
        setLista(listAux)
    }

    return(
        <section>
        <div>
                <form 
                className={styles.forms}
                onSubmit={adicionaItem}
                >
                    <input
                    id="input-entrada"
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                    value={novoItem}
                    onChange={(e)=>setNovoItem(e.target.value)}
                    />
                    <button >Criar</button>
                </form>
            </div>
        <div className={styles.container}>
            <div className={styles.tarefas}>
                <span className={styles.createTask}>
                    Tarefas criadas
                </span>
        </div>

            {
                lista.length < 1
                ?
                <div className={styles.task}>
                    <FiClipboard className={styles.icon}/>
                    <p className={styles.textClean}>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e orginze seus itens a fazer</p>
                </div>
                :
                lista.map((item,index)=>(
                    <div
                    key={index} 
                    className={item.isCompleted ? styles.isCompleted : styles.toComplete}
                    > 
                        <button 
                        onClick={()=>{clicou(index)}}
                        className={styles.checkCircle}>
                            <FiCircle/>
                        </button>
                        <span  
                        className={item.isCompleted ? styles.checkedText : styles.content}
                        >
                            {item.text}
                        </span>
                        <button 
                        onClick={()=>{deleta(index)}}
                        className={styles.trash}>
                        <FiTrash2/>
                        </button>
                    </div>
                ))
            }

        </div>
        </section>
    )
}