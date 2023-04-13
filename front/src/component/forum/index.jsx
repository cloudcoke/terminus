import { List, DivWrap } from "./styled"
import { memo, useEffect, useRef, useState } from "react"
import { Button } from "../button"
import { InputForm } from "./form"
import { useSelector } from "react-redux"
import request from "../../utils/request"

export const Forum = () => {
    const user = useSelector((state) => state.user)
    const [list, setlist] = useState("")
    const inputRef = useRef(null)
    const wrapRef = useRef(null)
    let li

    if (list)
        li = list.map((v, i) => (
            <List key={i} id={v.id} className="forumList">
                <div className="p">
                    <div>
                        {v.userId}
                        <span className="date">{v.createdAt}</span>
                    </div>
                    <div>
                        <span className="modify">수정</span>
                        <span className="delete">삭제</span>
                    </div>
                </div>
                {v.isUpdata && <span>{v.comment}</span>}
                {!v.isUpdata && <input defaultValue={v.comment}></input>}
            </List>
        ))

    const submitHandler = async (e) => {
        e.preventDefault()
        if (!inputRef.current.value) return alert("내용이 없습니다")
        const body = {
            userId: user.data.userId,
            comment: inputRef.current.value,
        }
        const data = await request.post("/comment", body)
        if (data) getList()
        inputRef.current.value = ""
    }

    const getList = async (date) => {
        const month = (new Date().getMonth() + 1).toString().padStart(2, "0")
        const day = new Date().getDate().toString().padStart(2, "0")
        const year = new Date().getFullYear()
        if (!date) date = `${year}${month}${day}`
        const data = await request.get(`/comment/${date}`)
        setlist(data.data)
    }

    const changed = async (className, idx) => {
        switch (className) {
            case "modify":
                const a = list.filter((v) => v.id === parseInt(idx))
                a[0].isUpdata = true

                break
            case "delete":
                if (window.confirm("삭제 하시겠습니까?")) {
                    const data = await request.delete(`/comment/${idx}`)
                    if (data) getList()
                } else {
                    return
                }
                break
            default:
                return
        }
    }

    const clickHandler = (e) => {
        if (e.target.className === "modify" || e.target.className === "delete") {
            let idx = e.target.parentNode.parentNode.parentNode.id
            return changed(e.target.className, idx)
        }
        return
    }

    useEffect(() => {
        getList()
    }, [])

    useEffect(() => {
        wrapRef.current.scrollTop = wrapRef.current.scrollHeight
    }, [list])

    return (
        <>
            <div
                style={{
                    margin: "5rem auto 0",
                    padding: "2rem",
                    border: "2px groove #8d8d8d",
                    width: "85rem",
                    borderRadius: "2rem",
                }}
            >
                <DivWrap onClick={clickHandler} ref={wrapRef}>
                    {li}
                </DivWrap>
                {user.isLogin && (
                    <form
                        style={{
                            display: "flex",
                            padding: "2rem",
                            boxSizing: "border-box",
                            justifyContent: "space-between",
                        }}
                        onSubmit={submitHandler}
                    >
                        <InputForm refs={inputRef} />
                        <Button
                            height={4}
                            text="등록"
                            fontsize={2}
                            answerSubmit={submitHandler}
                            setSubmit={{ list, setlist }}
                        />
                    </form>
                )}
            </div>
        </>
    )
}
