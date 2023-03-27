export const SignInMessage = ({ statusCode }) => {
    console.log(statusCode)
    if (statusCode >= 400) {
        return (
            <>
                <dl className="warning">
                    <dt>WARNING :</dt>
                    <dd>ID or PASSWORD is incorrect</dd>
                </dl>
            </>
        )
    } else if (statusCode === 200) {
        return (
            <>
                <dl className="success">
                    <dt>SUCCESS :</dt>
                    <dd>Complete. Enjoy 'Terminus'.</dd>
                </dl>
            </>
        )
    }
}
