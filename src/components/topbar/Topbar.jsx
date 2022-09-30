import "./topbar.css";
import { Search, Person, Chat, Notifications, Bookmark, Share, Home, TimelineTwoTone } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarContainer">

      <div className="topbarLeft">
        <span className="logo">Photobook</span>
      </div>

      <div className="topbarLinks">
          <div className="topbarIconItem">
            <Home />
            <span className="topbarIconBadge"></span>
          </div>
          <div className="topbarIconItem">
            <TimelineTwoTone />
          </div>
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge"></span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge"></span>
          </div>
          <div className="topbarIconItem">
            <Share />
          </div>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search for friend, post or video" className="searchInput" />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarIcons">
          
          <div className="topbarIconItem">
            <Bookmark />
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge"></span>
          </div>
        </div>

        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>

        <h4>Divyash Goyani</h4>
      </div>
    </div>
  );
}
