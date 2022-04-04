import "./Contact.css";
import Clock from "react-live-clock";

export default function Contact() {
  const text1 = `If (Time < 08:00 || Time > 01:00){
    
    `;

  const text2 = `
} 

else {
    `;

  const text3 = `

}`;

  return (
    <div id="contact" className="contactContainer">
      <h1>Contact</h1>
      <Clock className="digitalClock" format={"HH:mm:ss"} ticking={true} />
      <pre>
        <code>
          {text1}
          LoveIsAsleep === True
        </code>

        <code>{text2}</code>
        <p>
          Phone:
          <button>073-077 21 42</button>;
        </p>
        <p>
          Email:{" "}
          <a href="mailto:love.lanai@medieinstitutet.se">
            love.lanai@medieinstitutet.se
          </a>
          ;
        </p>
        <p>
          Github:
          <a href="https://github.com/lovelanai">
            https://github.com/lovelanai
          </a>
          ;
        </p>

        <code>{text3}</code>
      </pre>
    </div>
  );
}
