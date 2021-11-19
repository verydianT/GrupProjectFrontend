import "../styles/css/coment.css";

export default function Coment() {
  return (
    <div className="field">
      <div className="control">
        <textarea className="textarea" placeholder="Type something here..."></textarea>
      </div>

      <button className="button-textarea">
        <a href={{}} style={{ textDecoration: "none", color: "white", marginTop: "-500px" }}>
          Send
        </a>
      </button>
    </div>
  );
}
