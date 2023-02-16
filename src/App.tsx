import Login from "./components/Login"
import { Conatiner } from "./components/styles/Container.styled"
import { StyledGlobal } from "./components/styles/Global.styled"

const App = () => {

  return (
    <div>
      <Conatiner>
        <StyledGlobal />
        <Login />
      </Conatiner>
    </div>
  )
}

export default App