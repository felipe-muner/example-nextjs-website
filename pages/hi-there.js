function HiThere() {
  return (
    <div>
      <p style={{ fontSize: "15px" }}>inline css</p>
      HiThere
      <p>scoped!</p>
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
          p {
            color: white;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          font-size: 30px;
        }
      `}</style>
    </div>
  );
}

export default HiThere;
