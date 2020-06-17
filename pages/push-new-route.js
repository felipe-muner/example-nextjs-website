import Router from "next/router";

function ReadMore() {
  return (
    <div>
      Click
      <span
        style={{ fontSize: "30px", cursor: "pointer", margin: "4px" }}
        onClick={() => Router.push("/about")}
      >
        here
      </span>
      to read more
    </div>
  );
}

export default ReadMore;
