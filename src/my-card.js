import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My Card";
    this.description = "This is my card, it works.";
    this.image = "";
    this.link = "#";
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      image: { type: String },
      link: { type: String },
    };
  }

  static get styles() {
    return css
      :host {
        display: block;
        width: 300px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
        background: white;
        font-family: Arial, sans-serif;
      }

      :host(:hover) {
        transform: scale(1.05);
      }

      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .card img {
        width: 100%;
        height: 180px;
        object-fit: cover;
      }

      .card-content {
        padding: 15px;
      }

      h3 {
        margin: 10px 0;
        font-size: 1.2em;
      }

      p {
        color: #555;
        font-size: 0.9em;
      }

      .btn {
        display: inline-block;
        margin-top: 10px;
        padding: 8px 15px;
        text-decoration: none;
        color: white;
        background: #007BFF;
        border-radius: 5px;
        font-size: 0.9em;
      }

      .btn:hover {
        background: #0056b3;
      }
    ;
  }

  render() {
    return html
      <div class="card">
        <img src="${this.image}" alt="${this.title}" />
        <div class="card-content">
          <h3>${this.title}</h3>
          <p>${this.description}</p>
          <a class="btn" href="${this.link}" target="_blank">Learn More</a>
        </div>
      </div>
    ;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

