export const UseKeyCheck = (e) => {
    if (e.key === "Enter") {
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
