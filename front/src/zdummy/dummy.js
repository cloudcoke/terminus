const List = [
    {
        idx: 1,
        command: "ls",
        prompt: "디렉토리 내에 파일 목록을 확인할 수 있는 명령어입니다.",
        option: [
            { command: "-a", prompt: "-a에 대한 설명을 쓰면 된다." },
            { command: "-l", prompt: "-l에 대한 설명을 쓰면 된다." },
        ],
    },
    {
        idx: 2,
        command: "pwd",
        prompt: "현재 경로를 확인할 수 있는 명령어 입니다.",
    },
    {
        idx: 3,
        command: "cd",
        prompt: "Change Directory의 약자로 디렉토리를 이동하는 명령어입니다. ",
        option: [
            { command: "..", prompt: "바로 상위의 디렉토리로 이동" },
            { command: "/경로", prompt: "`경로`의 디렉토리로 이동" },
        ],
    },
]
export default List
