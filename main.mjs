class CounterComponent extends HTMLElement {
  /** @type {ShadowRoot | undefined} */
  shadowRoot = undefined;

  count = 0;

  css = () => /*css*/ `
    .app {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      & > span {
        height: var(--height-header);
        font-size: 24px;
        font-weight: bold;
      }

      & > div.counter-container {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template:
          ". count ." 32px
          "minus . plus" 32px
          / 1fr 100px 1fr;
        gap: 8px;
        place-content: center;

        & > span.count {
          width: 100%;
          grid-area: count;
          font-weight: bold;
          text-align: center;
        }

        & > button {
          width: 32px;
          height: 32px;
          border-radius: 100vh;
          border: none;
          background-color: var(--color-primary);
          cursor: pointer;

          &:hover,
          &:focus {
            background-color: var(--color-secondary);
          }

          &.plus {
            grid-area: plus;
            margin-right: auto;
          }
          &.minus {
            grid-area: minus;
            margin-left: auto;
          }
        }
      }
    }
  `;

  html = () => /*html*/ `
    <style>${this.css()}</style>
    <div class="app">
      <span>カウンター</span>
      <div class="counter-container">
        <span class="count">${this.count}</span>
        <button class="plus">+</button>
        <button class="minus">-</button>
      </div>
    </div>
  `;

  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = this.html();

    this.shadowRoot.querySelector("button.plus").addEventListener("click", () => {
      this.count += 1;
      this.render();
    });
    this.shadowRoot.querySelector("button.minus").addEventListener("click", () => {
      this.count -= 1;
      this.render();
    });
  }
}

customElements.define("counter-component", CounterComponent);
