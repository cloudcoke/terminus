export const Message = (value) => {
    console.log(value)
    if (value !== 200) {
        return (
            <>
                <dl className="warning">
                    <dt>WARNING :</dt>
                    <dd>UserId ‘sampleId’ is already exists.</dd>
                </dl>
            </>
        )
    } else if (value === 200) {
        return (
            <>
                <dl className="success">
                    <dt>SUCCESS :</dt>
                    <dd>ok.</dd>
                </dl>
            </>
        )
    }
}
