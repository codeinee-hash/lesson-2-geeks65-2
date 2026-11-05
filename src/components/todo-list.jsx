import {useQuery} from '@tanstack/react-query'
import {todoService} from '../service/todo-service.js'
import {useState} from 'react'

export function TodoList() {
    const [page, setPage] = useState(1)

    const { data, isPending, error } = useQuery({
        queryKey: ['todos', { page }],
        queryFn: (meta) => todoService.getTasks({ page }, meta),

    })

    if(isPending) {
        return <div>LOADING...</div>
    }

    if (error) {
        return <div>Error: {JSON.stringify(error)}</div>
    }

    return (
        <>
            <h1>TodoList</h1>

            <ul>
                {data?.items?.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>

            <div>
                <button onClick={() => setPage((p) => Math.max(p - 1, 1))}>
                    prev
                </button>
                <button onClick={() => setPage((p) => Math.min(p + 1, data?.meta?.total_pages))}>
                    next
                </button>
            </div>
        </>
    )
}
