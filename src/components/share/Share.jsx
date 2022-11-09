import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";

function Share() {
  return (
    <div className="share-conatiner">
      <Button variant="contained" endIcon={<ShareIcon />}>
        Share
      </Button>
    </div>
  );
}

export default Share;
