import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/use-cases-by-type.svg";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

import Pagination from "@material-ui/lab/Pagination";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.users}>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && styles.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}{" "}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id}>
          <div className={styles.userContainer}>
            <div className={styles.photoButtonBlock}>
              <div>
                <NavLink to={`/profile/${u.id}`}>
                  <img
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    className={styles.userPhoto}
                  />
                </NavLink>
              </div>
              <div>
                {
                  u.followed ? (
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={props.followingInProgress.some(
                        (id) => id === u.id
                      )}
                      onClick={() => {
                        props.unfollow(u.id);
                      }}
                    >
                      {" "}
                      Unfollow{" "}
                    </Button>
                  ) : (
                    // <button disabled={props.followingInProgress.some(id => id ===u.id)}
                    //  onClick={() => {  props.unfollow(u.id);

                    // }}>Unfollow</button>
                    <Button
                      disabled={props.followingInProgress.some(
                        (id) => id === u.id
                      )}
                      onClick={() => {
                        props.follow(u.id);
                      }}
                      variant="contained"
                      color="secondary"
                    >
                      {" "}
                      Follow{" "}
                    </Button>
                  )
                  // <button disabled={props.followingInProgress.some(id => id ===u.id)}
                  //  onClick={() => {props.follow( u.id);

                  //  }}>Follow</button>
                }
              </div>
            </div>
            <div className={styles.nameStatusLocationBlock}>
              <div>{u.name}</div>
              <div>{u.status}</div>

              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </div>
          </div>
        </div>
      ))}

      <Pagination
        count={pagesCount}
        color="primary"
        onChange={() => console.log(props.users)}
      />
    </div>
  );
};
export default Users;
