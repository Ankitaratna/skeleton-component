import * as React from "react";
import SkeletonComp from "../skeleton";
import "./index.css";

const Card: React.FC<{}> = (props: any) => {
  const { title, content, logo, loading } = props;
  console.log(props, "hey");
  return (
    <div className="card">
      {loading ? (
        <React.Fragment>
          <SkeletonComp
            variant="circular"
            width="4rem"
            height="4rem"
            customClass="logo"
          />
          <div>
            <SkeletonComp
              variant="text"
              width="100px"
              height="25px"
              customClass="title"
            />
            <SkeletonComp
              variant="rounded"
              width="350px"
              height="35px"
              customClass="content"
            />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {logo ? (
            <img
              src={logo}
              className="logo"
              alt="Girl in a jacket"
              loading="lazy"
            />
          ) : (
            ""
          )}
          <div className="text">
            {title ? <div className="title">{title}</div> : ""}
            {content ? <div className="content">{content}</div> : ""}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Card;
