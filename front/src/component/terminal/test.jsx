export const Termi = ({ height, socket, setSubmit }) => {
    const terms = useRef(null)
    const term = useRef(null)
    const hidden = useRef(null)
    const [history, setHistory] = useState({ command: [], index: 0 })
    const location = useLocation().pathname
    const { userId } = useSelector((state) => state.user.data)
    const { examMode } = useSelector((state) => state.examMode)
    const { env } = useSelector((state) => state.mode)
    const kind = location.split("/")[2]
    const command = location.split("/")[3]
    let commandInput = ""
    // const handleKeyDown = (e) => {
    //     if (e.keyCode !== 32) {
    //         e.preventDefault()
    //     }
    // }
    
    useEffect(() => {
        socket.emit("user", userId)
        socket.emit("command", `${command}/${kind}`)
    }, [])
    useEffect(() => {
        if (!term.current && env) {
            const handleEmit = (prev) => {
                socket.emit("send", prev)
            }
            socket.on("data", (datar) => {
                term.current.write(`${datar}`)
            })

            term.current.open(terms.current)
          
            term.current.onData((data) => {
                
            })
            return () => {
                socket.off("data")
            }
        }
    }, [env,command])
    useEffect(() => {
        if (kind === "linux") {
            socket.emit("send", "exit")
        }
        console.log(userId)
        socket.emit("user", userId)
        socket.emit("command", `${command}/${kind}`)
        kind === "linux"
            ? socket.emit("send", "clear")
            : socket.emit("send", "system clear;")
        
    }, [command])

    useEffect(() => {
        hidden.current.value = JSON.stringify(history)
    }, [history])

    const answer = history.command[history.command.length - 1]