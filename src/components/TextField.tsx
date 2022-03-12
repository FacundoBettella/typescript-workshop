import React, { useRef, useState } from 'react';
import { StatefulInput } from 'baseui/input';

// Si pasamos un objeto usamos interface =>
interface Person {
    firstName: string
    lastName: string
}
interface AppProps {
    text: string;
    person: Person;
    ok?: boolean;
    fn?: () => void;
}

interface ITask {
    name: string;
    done: boolean;
}

// Si no es un objeto usar type =>
type FormElement = React.FormEvent<HTMLFormElement>;
type ButtonElement = React.MouseEvent<HTMLButtonElement>;



export const TextField: React.FC<AppProps> = ({ person, text }) => {
    // TO DO LIST -----------------------------------
    const [newTask, setNewTask] = useState<string>("");
    const [tasks, setTasks] = useState<ITask[]>([]);

    const handleSubmit = (e: FormElement) => {
        e.preventDefault();
        addTask(newTask);
        setNewTask("");
    }

    const addTask = (name: string) => {
        const newTasks: ITask[] = [...tasks, { name, done: false }];
        setTasks(newTasks);
    }

    const handleClearTask = (e: ButtonElement) => {
        e.preventDefault();
        setTasks([]);
    }

    //-------------------------------------------------
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    const refLog: Function = (): void => {
        console.log(inputRef.current?.value)
    }
    //-------------------------------------------------

    return (
        <div ref={divRef} >
            <div>{text}</div>
            <div>{person.firstName}</div>
            <div>{person.lastName}</div>
            <br /><hr />

            {/* <StatefulInput /> */}

            <pre>Create a to do: </pre>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} />
                <button>Guardar</button>
                <button onClick={e => handleClearTask(e)}>X</button>
                <p>{newTask}</p>
            </form>
            <p>
                {tasks.map((toDo: ITask, i: number) => {
                    return (
                        <div key={i}>
                            <h3>{toDo.name}</h3>
                            <p>{toDo.done}</p>
                        </div>
                    )
                })}
            </p>
            <br /><hr />

            <input ref={inputRef} />
            <button onClick={() => refLog()}>Console.log inputRef</button>
        </div>
    )
}