import { useState } from "react"
import Counter from "./components/Counter"
import TeamName from "./components/TeamName"

function App() {
  const [teamHome, setTeamHome] = useState("Home")
  const [teamGuest, setTeamGuest] = useState("Guest")

  return (
    <>
      <div className="board">
        <div>
          <Counter bgColor="#3C38FF" key={`home-${teamHome}`} />
          <TeamName name={teamHome} onChange={setTeamHome} />
        </div>
        <div>
          <Counter bgColor="#c90000" key={`guest-${teamGuest}`} />
          <TeamName name={teamGuest} onChange={setTeamGuest} />
        </div>
      </div>

      {/* <input type="text" value={teamHome} onChange={e => setTeamHome(e.target.value)} /> */}
      </>
  )
}

export default App
