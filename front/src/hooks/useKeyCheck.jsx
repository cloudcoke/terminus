export const UseKeyCheck = (e) => {
    if (e.key === "Enter") {
        console.log(e.target.value)
        switch (e.target.value) {
            case "Y":
                return "Y"
            case "y":
                return "y"
            default:
                return null
        }
    }
}
