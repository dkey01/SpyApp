import TeamMemberCard from "./TeamMemberCard"

const TeamMembers = ({selectedTeam, handleEmployeeCardClick, employees}) => {
    return (
        employees.map((employee) => {
            return (
                <TeamMemberCard employee={employee} selectedTeam={selectedTeam} handleEmployeeCardClick={handleEmployeeCardClick}/>
            )
        })
    )
}

export default TeamMembers;