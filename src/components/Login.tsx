import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./styles/Button.styled";
import { Input, InputContainer } from "./styles/Login.styled";
import { useLoginStore } from "../store/LoginStore";
import shallow from 'zustand/shallow'

export default function Login() {
    const { username, password, setUsername, setPassword } = useLoginStore(state => ({
        username: state.username,
        password: state.password,
        setUsername: state.setUsername,
        setPassword: state.setPassword
    }), shallow)

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log('submitted');
        if (!username || !password) {
            alert('Must enter data first !!!')
        } else {
            console.log(`Username : ${username}`);
            console.log(`Password : ${password}`);
            alert(`${username} is on board..🥳🥳🥳`)
            setUsername("")
            setPassword("")
        }

    }

    // const [userData, setUserData] = useState<{ username: string, password: any }>({ username: '', password: '' })

    // const onSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    //     e.preventDefault();
    //     if (!userData.username || !userData.password) {
    //         alert('Must enter data first !!!')
    //     } else {
    //         console.log(`Username : ${userData.username}`);
    //         console.log(`Password : ${userData.password}`);
    //         alert(`${userData.username} is on board..🥳🥳🥳`)
    //         setUserData({ username: '', password: '' })
    //     }
    // }

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Login Page 🚀</h1>
            <form onSubmit={onSubmitHandler}>
                <InputContainer>
                    <label htmlFor="username">Username:</label>
                    <Input type="text" name="username" placeholder="Enter Username" value={username} onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="password">Password:</label>
                    <Input type="password" name="password" placeholder="Enter Password" value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                </InputContainer>
                <InputContainer>
                    <Button type="submit">Submit</Button>
                </InputContainer>
            </form>
        </div>
    )
}
