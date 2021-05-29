import React, { useState } from "react";
import { IntlProvider } from "react-intl"

import English from '../languages/en-US.json';

import Deutsch from '../languages/de-DE.json';
import Spanish from '../languages/es-MX.json';
export const Context = React.createContext();

const local = navigator.language;
let lang;

if (local == "en-US") {
    lang = English;
} 
if(local == "es-MX"){
    lang = Spanish;
}
if(local == "de-DE") {
    lang = Deutsch;
}


function Wrapper(props) {

    const [locale, setLocale] = useState(local)
    const [messages, setMessages] = useState(lang);

    function selectLang(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === "de-DE") {
            setMessages(Deutsch);

        } 
        if(newLocale === "es-MX"){
            setMessages(Spanish);
        }
        if(newLocale ==="en-US") {
            setMessages(English);
        }

    }

    return (
        <Context.Provider value={{locale, selectLang}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>

        </Context.Provider>


    )
}

export default Wrapper;
