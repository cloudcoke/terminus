import List from "../../../zdummy/dummy"

// const groupedCommands = List.reduce((acc, item) => {
//     if (!acc[item.difficulty]) {
//         acc[item.difficulty] = {
//             difficulty: item.difficulty.toUpperCase(),
//             list: {
//                 title: item.title,
//                 commands: [],
//             },
//         }
//     }
//     acc[item.difficulty].list.commands.push(item.command)
//     return acc
// }, {})
// const htmlList = groupedCommands.map((group) => (<div key={group.command}><h2>{group.title}</h2><ul>{group.commands.map((command) =><li>{command}</li>)}</ul></div>)

export const Navi = () => {
    const B = List.reduce(
        (acc, item) => {
            acc.difficulty.add(item.difficulty)
            acc.title.add(item.title)
            acc.commands.add(item.command)

            return acc
        },
        {
            difficulty: new Set(),
            title: new Set(),
            commands: new Set(),
        }
    )

    const A = {
        difficulty: [...B.difficulty],
        title: [...B.title],
        commands: [...B.commands],
    }
    console.log(A, 123123)

    const list = A.commands.map((v) => <li>{v}</li>)
    const list2 = A.title.map((a) => (
        <ul>
            {a}
            {list}
        </ul>
    ))
    console.log(list2)
    return <>{list2}</>
}
