import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";
import Series from "./components/series";
import Figure from "./components/figure";

const language = navigator.language;
const urlEs =
  "https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/a467415350e87c13faf9c8e843ea2fd20df056f3/series-es.json";
const urlEn =
  "https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/e2d16f7440d51cae06a9daf37b0b66818dd1fe31/series-en.json";

ReactDOM.render(
  <IntlProvider
    locale={language === "es-ES" || language === "es" ? "es-ES" : "en"}
    messages={
      language === "es-ES" || language === "es"
        ? localeEsMessages
        : localeEnMessages
    }
  >
    <Series url={language === "es-ES" || language === "es" ? urlEs : urlEn} />
    <Figure
      url={language === "es-ES" || language === "es" ? urlEs : urlEn}
      episodes={
        language === "es-ES" || language === "es" ? "Episodios" : "Episodes"
      }
      seasons={
        language === "es-ES" || language === "es" ? "Temporadas" : "Seasons"
      }
    />
  </IntlProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
