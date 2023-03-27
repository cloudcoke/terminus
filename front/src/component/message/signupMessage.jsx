export const SignUpMessage = ({ isIdDuplicates, userId, userPw, userPwCheck }) => {
    console.log(isIdDuplicates, userId)
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
                    <dd>패스워드가 일치</dd>
                </dl>
            </>
        )
    } else if (userPwCheck && userPw !== userPwCheck) {
        return (
            <>
                <dl className="warning">
                    <dt>WARNING :</dt>
                    <dd>패스워드가 일치하지 않음</dd>
                </dl>
            </>
        )
    }
    // userPw &&
    //     (isPwDuplicates === false ? (
    //         <>
    //             <dl className="warning">
    //                 <dt>WARNING :</dt>
    //                 <dd>패스워드가 일치하지 않음</dd>
    //             </dl>
    //         </>
    //     ) : (
    //         <>
    //             <dl className="success">
    //                 <dt>SUCCESS :</dt>
    //                 <dd>패스워드가 일치</dd>
    //             </dl>
    //         </>
    //     ))
}
