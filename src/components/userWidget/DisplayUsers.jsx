import { User } from "../../style/Style";
import WadeAvtar from "../../icons/avtar/WadeAvtar";
import Box from "@mui/material/Box";

function DisplayUsers({ users, handleUserOrGroupClick }) {
  return (
    <Box sx={{ width: "100%" }}>
      <span>Select a person</span>
      {users.map((user) => {
        return (
          <User
            onClick={() => handleUserOrGroupClick(user)}
            key={"selected_" + user.id}
          >
            <WadeAvtar />
            <span className="user-name">{user.name}</span>
          </User>
        );
      })}
    </Box>
  );
}

export default DisplayUsers;
