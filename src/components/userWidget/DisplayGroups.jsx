import { User } from "../../style/Style";
import Box from "@mui/material/Box";

function DisplayGroups({ groups, handleUserOrGroupClick }) {
  return (
    <Box sx={{ width: "100%" }}>
      <span>Select a group</span>
      {groups.map((group) => {
        return (
          <User
            onClick={() => handleUserOrGroupClick(group)}
            key={"selected_" + group.id}
          >
            <div className="group-icon">{group.name.substring(0, 1)}</div>
            <span className="user-name">{group.name}</span>
          </User>
        );
      })}
    </Box>
  );
}

export default DisplayGroups;
