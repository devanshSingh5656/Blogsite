import React from "react";
import "./Header.css";
import SaveIcon from "@material-ui/icons/Save";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header({ Vali, setVali, setsearchdata, searchdata }) {
  const [{ Save, data }] = useStateValue();

  const handelAuthentication = () => {
    setVali(false);
  };

  return (
    <div className="container-fluid  header">
      <Link to="/">
        <div
          onClick={() => {
            setsearchdata("");
          }}
        >
          <img
            className="header_logo"
            src="https://www.flaticon.com/premium-icon/icons/svg/2593/2593549.svg"
            alt="im"
          />
        </div>
      </Link>

      <div className="container header_search">
        <input
          id="searchTxt"
          className="header_searchInput"
          placeholder={searchdata}
          onKeyPress={(e) =>
            e.key === "Enter" && setsearchdata(e.target.value.toLowerCase())
          }
          type="text"
        />

        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_basket">
          <div class="dropdown">
            <Link to="/Login">
              <div className="header_option" onClick={handelAuthentication}>
                <span className="header_optionLineOne">
                  Hello {!Vali ? "Guest" : data[0]?.name}
                </span>
                <span className="header_optionLineTwo">
                  {Vali ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>
            {!Vali ? (
              <div class="dropdown-content">
                <Link to="/Login">
                  <p>Sign-In</p>
                </Link>
                <Link to="/Signup">
                  <p>Sign-Up</p>
                </Link>
              </div>
            ) : null}
          </div>
        </div>
        {Vali ? (
          <Link to="/AddBlogs">
            <div className="header_option">
              <span className="header_optionLineOne">Add</span>
              <span className="header_optionLineTwo">Blogs</span>
            </div>
          </Link>
        ) : (
          <div className="header_option">
            <span className="header_optionLineOne">Add</span>
            <span className="header_optionLineTwo">Blogs</span>
          </div>
        )}
      </div>

      {Vali ? (
        <Link to="/Saved">
          {" "}
          <div className="header_basket">
            <SaveIcon onClick={() => setsearchdata("")} />
            <span className="header_optionLineTwo header_basketcount">
              {Save?.length}
            </span>
          </div>
        </Link>
      ) : (
        <div className="header_basket">
          <SaveIcon />
          <span className="header_optionLineTwo header_basketcount">
            {Save?.length}
          </span>
        </div>
      )}
    </div>
  );
}

export default Header;
