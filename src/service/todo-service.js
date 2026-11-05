

export const todoService = {
    getTasks: ({ page }, { signal }) => {
        return fetch(`https://83e68f322ce7782d.mokky.dev/todos?page=${page}&limit=4`, {
            signal
        }).then((res) => res.json())
    },

}
