# Opgave Titel - Svendeprøve-CarlAbel

Elev: Carl Abel

Hold: WU07

Uddannelse: Webudvikler


### Oversigt


- [Opgave Titel - Svendeprøve-CarlAbel](#opgave-titel---Svendeprøve-CarlAbel)

  * [Beskrivelse](#beskrivelse)

- [Tech Stack](#tech-stack)
  * [Frameworks](#frameworks)

  * [Libraries](#libraries)

  * [Projekt perspektivering](#projekt-perspektivering)


- [Kode Eksempler](#kode-eksempler)



## Beskrivelse

Vi har fået til opgave at lave en app til Landrup Dans, hvor man i appen kan logge på som "user" og "instructor" og tilmelde sig og afmelde sig hold. I dette repo har jeg lavet min eksamensopgave med frameworket React og en masse andre ting som npm pakker, læs videre for at lære mere om projektet, min tech-stack, hvad jeg har gjort af overvejelser og hvilke valg jeg har taget.


# Tech Stack

## Framework

### **React.js**

For mig var der to overvejelser til dette projekt, enten at skrive i frameworket [Vue.js] eller [React.js]. Jeg endte dog ud med at vælge frameworket React, da det er det framework jeg har mest erfaring med, og hvor jeg kender mest til de funktioner som React frameworket har tilgængeligt til udvikleren.

Med frameworket [React] er der et stort udvalg af npm-packages, hooks mm. jeg kan bruge til mit projekt. De har et stort community som gør det nemmere at fejlfinde, og med [React] er det nemmere at genanvende components, hvilket gør det nemmere for mig at skrive kode. Og jeg er også mere vant til at arbejde med [React] og den måde man opdeler sine components.

 Med [React] kan jeg også lave en single page applikation, hvilket gør at min applikation bliver hurtigere og virker mere smooth. Det er også nemmere at lave en single page applikation med [React] end med [Vue.js] da [Vue.js] ikke har en router som [React-router-dom] har.

### **TailwindCSS**

Jeg har valgt at bruge [TailwindCSS] til at style med fremfor normal CSS. Det er en af de teknologier jeg er gladest for og har mest erfaring med.
Med TailwindCSS, kan jeg hurtigt sætte en template op for mit projekt, og så kan jeg nemt ændre på stylingen, hvis jeg skulle have brug for det.

Til at starte med stod valget mellem [Bootstrap] & [TailwindCSS] Men fordi jeg havde mest erfaring med TailwindCSS, valgte jeg at bruge TailwindCSS fremfor Bootstrap.
Jeg føler det er mere frit med [TailwindCSS] da jeg kan lave stylingen på min egen måde, og jeg kan også lave stylingen på en måde som jeg synes er nemmere at læse og forstå. Med Bootstrap har meningerne med de generiske klasser mere indflydelse på hvordan tingene skal se ud, og det er ikke så nemt at ændre på stylingen, hvis jeg skulle have brug for det.

## Libraries

### **Framer-motion**

[Framer-motion] er en npm pakke som gør det muligt at lave animationer i React. Og jeg havde nok ikke haft brug for at bruge denne pakke i dette projekt af denne størrelse. Men jeg har valgt at bruge den alligevel fordi jeg har brugt den i nogle af mine tidligere projekter, og jeg synes det er en rigtig god pakke at bruge til animationer og i dette tilfælde brugte jeg den på den første knap på siden samt tilmeld og afmeld knapperne.

Det der er godt ved denne pakke er, det er meget nemmere at lave animationer, end hvis jeg skulle have lavet det med normal CSS.

Det er meget hurtigere med [framer-motion] netop fordi man bare adder sin framer-motion ved at give elementet `<motion.div>` og så giver du bare dit element de forskellige props eftersom hvordan du vil have dit element skal animeres.

### **React-router-dom**

Med npm pakken [React-router-dom] kan jeg nemt navigere rundt i min applikation, end hvis jeg skulle have lavet det med normal javascript. Det der er fedt ved [React-router-dom] er, at jeg kan lave en single page applikation, og det gør at min applikation bliver hurtigere og giver en mere smooth oplevelse for brugeren, fremfor hvis der skulle laves page reload ved alle skift af ens view.

### **Axios**

Jar har brugt Axios til mine HTTP-requests. Axios er en npm pakke som gør det nemmere at lave Http-requests fremfor med et normalt fetch kald. Med axios er formateringen til json allerede indbygget i pakken og så er axios også bagud kombatibelt sådet kan virke hos ældrere browsers.
 Personligt synes jeg også det nemmere at lave en error handling med axios samt med at sende loaders med, end hvis jeg skulle have lavet det med et normalt fetch kald. Jeg føler også at koden er nemmere at læse og forstå med axios fremfor end et normalt fetch-kald.

### **React-spinners**
Jeg har brugt npm pakken [react-spinners] og implementeret en loader på alle min fetch kald der skal hente data fra min database. Jeg valgte denne pakke da det er meget nemmere at få en loader, end hvis du skulle lave den selv fra bunden med Css. Med [react-spinners] importere jeg bare med `import { "WhateverLoader" } from "react-spinners";` og så kan jeg nemt adde loaderen med `<"WhateverLoader" />` og så kan jeg ændre på stylingen med props som fx `size={26}` og `color={"#5E2E53"}`.

### **React-Toastify**

Jeg har brugt npm pakken [React-Toastify] til at lave notifikationer og feedback til brugeren. Det er nemmere at lave notifikationer med [React-Toastify] end hvis jeg skulle have lavet det med normal CSS. Med den måde jeg har implementeret [React-Toastify] på mit layout, får jeg mine notifikatioer på alle views i min applikation. Det er også nemmere at lave en error handling med [React-Toastify] jeg adder den bare ved at lave et element `<ToastContainer />` og så kan jeg nemt og hurtigt lave en notifikation med `toast.error("Error message")` og så kan jeg nemt og hurtigt lave en success notifikation med `toast.success("Du er nu tilmeldt!")`.

### **Lucide-react**

[Lucide-React] er en npm pakke som jeg fornyligt er blevet introduceret til, normalt ville jeg bruge [React-icons]. Men ville gerne prøve noget nyt, og pakken indeholdt alle de ting jeg skulle bruge. Og et eller andet sted synes jeg også at det var nemmere at implementere, da jeg oplevede i projektet at det var nemmere at finde de ikoner jeg skulle bruge, end hvis jeg skulle have brugt [React-icons]. Jeg kunne bare skrive `import { "WhateverIconName" } from 'lucide-react'` og så kunne jeg bruge ikonet i mit projekt uden at tjekke dokumentationen, så i mit tilfælde var [lucide-react] mere tilgængeligt og symbolerne er af et moderne design lige hvad jeg havde brug for.

### **React-use-cookie**

[React-use-cookie] er en npm pakke som gør det nemmere at bruge cookies i React. Jeg har brugt den til at gemme brugerens UserId og token, så hvis brugeren skulle komme tilbage til siden, så kan jeg nemt og hurtigt hente brugerens token fra cookies, og så kan jeg nemt og hurtigt sætte min data ind med tokenContext.

# Kode Eksempler

### 1. Skriftligt Eksempel:

```javascript
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function useAxios({ url, method = "GET", headers = {} }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(function () {
    //IIFE - Immediately Invoked Function Expression
    (async function () {

      try {
        // Hvis url ikke er givet, giv en fejl
        if (!url) throw new Error("url is required")
        // Sætter loading tilstanden til true
        setLoading(true)
        // Udfører axios-anmodningen og gemmer responsdata
        const response = await axios({ url, method, headers })
        setData(response.data)
      } catch (error) {
        // Logger fejl i konsollen og sætter fejltilstanden
        console.error(error)
        setError("something went wrong")
      } finally {
        // Sætter loading tilstand til false
        setLoading(false)
      }
    })()
    /* eslint-disable-next-line */
  }, [url])

  // Returnerer responsdata, loading-tilstand og eventuelle fejl
  return { data, loading, error }
}
```

### Skriftlig forklaring: 

Dette er et custom react-hook, som bruger det populære HTTP-klientbibliotek kaldet Axios til at lave HTTP-request. Hooket kaldes useAxios, og den tager et objekt som parameter med følgende egenskaber:

1. url: URL'en for HTTP-request.

2. metode: HTTP-metoden, der skal bruges til anmodningen. Hvor standardværdien er "GET".

3. Headers: Headers skal sendes sammen med anmodningen. Standardværdien er et tomt objekt.

I dette hook importerer Axios og de nødvendige react-hooks, useState og useEffect, i begyndelsen af ​​filen.

Inde i useAxios-hooket er tre states erklæret ved hjælp af useState:

1. Data: Dette state gemmer svar dataen fra HTTP-requesten.

2. Loading: Denne variabel er en boolsk værdi, der angiver, om anmodningen er i gang.

3. fejl: Denne variabel gemmer alle fejlmeddelelser, der kan opstå under anmodningen.


useEffect-hooket bruges til at udføre vores Axios-requests, når komponentet er rendered, eller når url-parameteren ændres.
Inde i useEffect-hooket er der en IIFE til at udføre anmodningen asynkront.

Inde i vores IIFE=(Immediately Invoked Function Expression) er der en try-catch-finally blok til at håndtere fejl under anmodningen.
som gør således:

    a. Tjekker om url er der, hvis ikke, "throw an error".
    b. Sætter vores loading state til "true".
    c. Kører vores Axios request med vores url, method og headers og gemmer vores response i data statet.
    d. Catcher alle fejl, der opstår under anmodningen, logger dem i konsollen og sætter fejl statet.
    e. I finally blokken sætter vi vores loading state til "false".

Her er flowet af den asynkrone funktion:
Hvis url'en ikke er angivet, får jeg en fejl.
loading statet er sat til true for at angive, at anmodningen er i gang.
vores Axios-request udføres med den givne url, metode og header. Dataen gemmes i data Statet.
Hvis der opstår en fejl under anmodningen, logges den i konsolen, og skriver fejlen "noget gik galt".
I den sidste blok "finally" er loading statet sat til false, hvilket indikerer, at anmodningen er fuldført.
Hooket returnerer et objekt, der indeholder data, loading og Errors.

Du kan bruge dette tilpassede hook i dine komponenter til nemt at hente data fra et API'et og så skal der bare mappes udfra data og bare indsæt dit loading og error state. For eksempel:
  
  ```javascript
  export default function Activities() {
  // Bruger useAxios til at hente aktiviteter fra API'et
  const { data, loading, error } = useAxios({
    url: "http://localhost:4000/api/v1/activities",
  });
  ```

### 2. Skriftligt Eksempel:

```javascript
import React, { useContext, useEffect, useState } from 'react'
import { TokenContext } from '../contexts/TokenProvider';
import axios from "axios"
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";

export default function HandleSignUpBtn({ act }) {
  // Bruger useParams og TokenContext for at få adgang til aktivitets-ID og brugerens token
  const { id } = useParams()
  const [isSignedUp, setIsSignedUp] = useState(false);
  const { token } = useContext(TokenContext)

  // Tjekker, om brugeren er tilmeldt aktiviteten, og sætter isSignedUp til true, hvis brugeren er tilmeldt
  useEffect(() => {
    if (act.users.map(item => item.id).includes(token.userId)) {
      setIsSignedUp(true)
    }
  }, [act.users, token.userId]);

  // Axios-kald til backend, der tilmelder brugeren til aktiviteten
  async function handleSignUp() {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/v1/users/${token.userId}/activities/${id}`,
        undefined,
        {
          headers: {
            authorization: "Bearer " + token.token,
          },
        }
      );
      console.log(response);
      setIsSignedUp(true);
      toast.success('Du er nu tilmeldt! Vi glæder os til at se dig!');
    } catch (error) {
      console.log(error);
    }
  }
  // Axios-kald til backend, der fjerner brugeren fra aktiviteten
  async function handleDelete() {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/v1/users/${token.userId}/activities/${id}`,
        {
          headers: {
            authorization: "Bearer " + token.token,
          },
        }
      );
      console.log(response);
      setIsSignedUp(false);
      toast.success('Du er ikke længere tilmeldt dette hold!');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // Viser enten "Forlad" eller "Tilmeld" knappen baseret på brugerens tilmeldingsstatus
    <>
      {isSignedUp ? (
        <motion.input
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="bg-[#5E2E53] font-ubuntu h-[54px] w-[250px] text-white text-[18px] absolute right-6 px-8 py-2 bottom-6 rounded-xl"
          type="button"
          value="Forlad"
          onClick={handleDelete}
        />
      ) : (
        <motion.input
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="bg-[#5E2E53] font-ubuntu h-[54px] w-[250px] text-white text-[18px] absolute right-6 px-8 py-2 bottom-6 rounded-xl"
          type="button"
          value="Tilmeld"
          onClick={handleSignUp}
        />
      )}
    </>
  )
}
````
### Skriftlig forklaring: 

Dette er et react-komponent HandleSignUpBtn, der håndterer users tilmelding og afmelding til aktiviteter. Komponentet bruger flere hooks og libraries, React- Router-dom, useParams, useContext, useEffect, useState, React Toastify, og Framer Motion. Alle ting bliver importeret i toppen af ​​filen.

Komponentet tager "act" som en prop, som er en aktivitet, der skal tilmeldes eller afmeldes. Komponentet returnerer en knap, der enten siger "Tilmeld" eller "Forlad" baseret på brugerens tilmeldingsstatus til holdet. Hvis brugeren er tilmeldt, vises "Forlad" knappen, og hvis brugeren ikke er tilmeldt, vises "Tilmeld" knappen. Når brugeren klikker på knappen, udføres et axios-kald til backenden for at tilmelde eller afmelde brugeren til aktiviteten. Hvis kaldet går igennem, opdateres "isSignedUp" til true eller false, derefter vises en "toast-notifikation" for at bekræfte tilmeldingen eller afmeldingen for brugeren.

Jeg bruger useParams hooket til at få adgang til activitiesId fra "URL'en".
og bruger TokenContext til at få adgang til brugerens token. derefter bruger jeg et useState hook til at opbevare brugerens tilmeldingsstatus (isSignedUp).

på samme tid bruger jeg et useEffect hook til at kontrollere, om brugeren allerede er tilmeldt aktiviteten ved at søge efter activitiesId i aktivitetens brugerliste. Hvis brugeren er tilmeldt, skal du sætte "isSignedUp" til true.

Selve handleSignUp funktionen, udfører et Axios POST-request til backenden for at tilmelde brugeren til aktiviteten. Hvis kaldet er vellykket, opdateres isSignedUp til true, og en toast-notifikation vises for at bekræfte tilmeldingen og knappen ændres til "Forlad".

Selve handleDelete funktionen, udfører et Axios delete-request til backenden for at afmelde brugeren til aktiviteten. Hvis kaldet er vellykket, opdateres isSignedUp til true, og en toast-notifikation vises for at bekræfte tilmeldingen og knappen ændres tilbage til "tilmeld".

## Projekt skalering

Hvis jeg skulle skalere dette projekt, ville jeg tilføje muligheden for at oprette en bruger. Jeg ville også tilføje en instructor-bruger, der kunne oprette og redigere aktiviteter.

Hvis jeg skulle forbedre denne applikationen for brugere ville jeg tilføje flere synlige load-animationer i forhold til hvor lækkert det er at se på designet.