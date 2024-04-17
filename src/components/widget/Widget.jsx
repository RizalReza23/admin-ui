import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <div className="title">USERS</div>
        <div className="counter">512</div>
        <div className="link">See all users</div>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          10%
        </div>
        <PersonOutlinedIcon />
      </div>
    </div>
  );
};

export default Widget;
