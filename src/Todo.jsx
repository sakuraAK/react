// export default function Todo({children}) {
//     return <li>{children}</li>;
// }

// export default function Todo({todo}) {
//     return <li>{todo}</li>;
// }

export default function Todo(props) {
    return <li>{props.todo}</li>;
}