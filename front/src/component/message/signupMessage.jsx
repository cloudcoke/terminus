export const SignUpMessage = ({ isIdDuplicates, userId, userPw, userPwCheck }) => {
    if (userId && isIdDuplicates) {
        return (
            <>
                <dl className="success">
                    <dt>SUCCESS :</dt>
                    <dd>ID `{userId}` is available.</dd>
                </dl>
            </>
        )
    } else if (userId && !isIdDuplicates) {
        return (
            <>
                <dl className="warning">
                    <dt>WARNING :</dt>
                    <dd>ID `{userId}` is already exists.</dd>
                </dl>
            </>
        )
    } else if (userPwCheck && userPw === userPwCheck) {
        return (
            <>
                <dl className="success">
                    <dt>SUCCESS :</dt>
                    <dd>The passwords you entered match.</dd>
                </dl>
            </>
        )
    } else if (userPwCheck && userPw !== userPwCheck) {
        return (
            <>
                <dl className="warning">
                    <dt>WARNING :</dt>
                    <dd>The passwords you entered do not match. Please try again.</dd>
                </dl>
            </>
        )
    }
}
