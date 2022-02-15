"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[3609],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=m(n),u=r,N=k["".concat(p,".").concat(u)]||k[u]||s[u]||i;return n?a.createElement(N,l(l({ref:t},d),{},{components:n})):a.createElement(N,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6646:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return k}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=["components"],o={sidebar_position:12},p="messaging",m={unversionedId:"reference/configuration/messaging",id:"reference/configuration/messaging",title:"messaging",description:"evcc unterst\xfctzt die \xdcbermittlung von Status-Informationen \xfcber Telegram, PushOver und viele weitere Dienste \xfcber das System shoutrrr. Die Konfiguration erm\xf6glich es eigene Nachrichten f\xfcr bestimmte Ereignisse und Systeme zu definieren.",source:"@site/docs/reference/configuration/messaging.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/messaging",permalink:"/docs/reference/configuration/messaging",editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/configuration/messaging.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"tariffs",permalink:"/docs/reference/configuration/tariffs"},next:{title:"eebus",permalink:"/docs/reference/configuration/eebus"}},d=[{value:"<code>events</code>",id:"events",children:[{value:"<code>title</code>",id:"title",children:[],level:3},{value:"<code>msg</code>",id:"msg",children:[],level:3}],level:2},{value:"<code>services</code>",id:"services",children:[{value:"<code>type</code>",id:"type",children:[],level:3}],level:2},{value:"Unterst\xfctzte Dienste",id:"unterst\xfctzte-dienste",children:[{value:"<code>pushover</code>",id:"pushover",children:[],level:3},{value:"<code>telegram</code>",id:"telegram",children:[],level:3},{value:"<code>email</code>",id:"email",children:[],level:3},{value:"<code>shout</code>",id:"shout",children:[],level:3}],level:2}],s={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"messaging"},(0,i.kt)("inlineCode",{parentName:"h1"},"messaging")),(0,i.kt)("p",null,"evcc unterst\xfctzt die \xdcbermittlung von Status-Informationen \xfcber ",(0,i.kt)("a",{parentName:"p",href:"https://telegram.org"},"Telegram"),", ",(0,i.kt)("a",{parentName:"p",href:"https://pushover.net"},"PushOver")," und viele weitere Dienste \xfcber das System ",(0,i.kt)("a",{parentName:"p",href:"https://containrrr.dev/shoutrrr/"},"shoutrrr"),". Die Konfiguration erm\xf6glich es eigene Nachrichten f\xfcr bestimmte Ereignisse und Systeme zu definieren."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"messging")," definiert in Subelementen was und wie es verschickt wird. Unter ",(0,i.kt)("inlineCode",{parentName:"p"},"events")," m\xfcssen die Ereignisse definiert werden, f\xfcr welche Nachrichten verschickt werden sollen. Und unter ",(0,i.kt)("inlineCode",{parentName:"p"},"services")," die Dienste \xfcber welche die Nachrichten verschickt werden sollen."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"messaging:\n  events:\n    ...\n  services:\n    ...\n")),(0,i.kt)("h2",{id:"events"},(0,i.kt)("inlineCode",{parentName:"h2"},"events")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"events")," definiert f\xfcr verschiedene vordefinierte Ereignisse, den Nachrichteninhalt."),(0,i.kt)("p",null,"Die verf\xfcgbaren Ereignisse sind:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start"),": Laden hat begonnen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stop"),": Laden wurde beendet"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connect"),": Fahrzeug angeschlossen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"disconnect"),": Fahrzeug entfernt")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'    start: # charge start event\n      title: Charge started\n      msg: Started charging in "${mode}" mode\n')),(0,i.kt)("h3",{id:"title"},(0,i.kt)("inlineCode",{parentName:"h3"},"title")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"title")," definiert den Text f\xfcr den Nachrichtentitel"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"      title: Charge started\n")),(0,i.kt)("h3",{id:"msg"},(0,i.kt)("inlineCode",{parentName:"h3"},"msg")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"msg")," definiert den Text f\xfcr den Nachrichteninhalt.",(0,i.kt)("br",{parentName:"p"}),"\n","Im Text k\xf6nnen verschiedene Variablen im Format ",(0,i.kt)("inlineCode",{parentName:"p"},"${<Variablenname>}")," zur Anzeige von evcc Informationen verwendet werden."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Bei Nutzung der Variablen ist auf die korrekte Schreibweise (gro\xdf/klein) zu achten!."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"N\xfctzliche Auswahl zur Nutzung in evcc Benachrichtungen"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"msg Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${chargedEnergy:%.1fk}")),(0,i.kt)("td",{parentName:"tr",align:null},"Geladene Energiemenge in kWh")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${chargeDuration}")),(0,i.kt)("td",{parentName:"tr",align:null},"Dauer der Ladezeit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${connectedDuration}")),(0,i.kt)("td",{parentName:"tr",align:null},"Dauer der Wallbox Verbindung")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${loadpoint}")),(0,i.kt)("td",{parentName:"tr",align:null},"Nummer des ",(0,i.kt)("a",{parentName:"td",href:"loadpoints"},(0,i.kt)("inlineCode",{parentName:"a"},"loadpoints"))," (Ladepunkt) 1,2...")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${mode}")),(0,i.kt)("td",{parentName:"tr",align:null},"Aktiver Lademodus (vgl. ",(0,i.kt)("a",{parentName:"td",href:"loadpoints/#mode"},(0,i.kt)("inlineCode",{parentName:"a"},"mode"))," des ",(0,i.kt)("a",{parentName:"td",href:"loadpoints"},(0,i.kt)("inlineCode",{parentName:"a"},"loadpoints")),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${pvPower:%.1fk}")),(0,i.kt)("td",{parentName:"tr",align:null},"Aktuell gemessene PV Leistung in kW")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${title}")),(0,i.kt)("td",{parentName:"tr",align:null},"Ladepunkt: Text des ",(0,i.kt)("a",{parentName:"td",href:"loadpoints"},(0,i.kt)("inlineCode",{parentName:"a"},"loadpoints"))," ",(0,i.kt)("a",{parentName:"td",href:"loadpoints/#title"},(0,i.kt)("inlineCode",{parentName:"a"},"title"))," Parameters")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"${vehicleTitle}")),(0,i.kt)("td",{parentName:"tr",align:null},"Fahrzeug: Text des  ",(0,i.kt)("a",{parentName:"td",href:"vehicles"},(0,i.kt)("inlineCode",{parentName:"a"},"vehicles"))," ",(0,i.kt)("a",{parentName:"td",href:"vehicles/#title"},(0,i.kt)("inlineCode",{parentName:"a"},"title"))," Parameters")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiele"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  # Message examples using evcc variables\n  # start\n  msg: Wallbox ${title} started charging ${vehicleTitle} in ${mode} mode\n  # stop\n  msg: Wallbox ${title} finished charging ${vehicleTitle} with ${chargedEnergy:%.1fk}kWh in ${chargeDuration}\n  # connect\n  msg: ${vehicleTitle} connected on wallbox ${title} at ${pvPower:%.1fk}kW PV\n  # disconnect\n  msg: ${vehicleTitle} disconnected of wallbox ${title} after ${connectedDuration}\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Vollst\xe4ndige Liste aller von evcc bereitgestellten Variablen"),":"),(0,i.kt)("p",null,"Die von evcc bereitgestellten Variablen m\xfcssen im Format ",(0,i.kt)("inlineCode",{parentName:"p"},"${<Variablenname>}")," im Text der Meldung definiert werden. Mehrere Variablen im Meldungstext sind m\xf6glich.    "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Site",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Konfiguration",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"site"},(0,i.kt)("inlineCode",{parentName:"a"},"siteTitle"))," - Haupt\xfcberschrift der evcc App (",(0,i.kt)("em",{parentName:"li"},"string"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"site/#prioritysoc"},(0,i.kt)("inlineCode",{parentName:"a"},"prioritySoC"))," - Mindest-F\xfcllstand der Powerwall in Prozent, vor ",(0,i.kt)("a",{parentName:"li",href:"loadpoints/#mode"},"PV mode")," Freigabe (",(0,i.kt)("em",{parentName:"li"},"integer"),")"))),(0,i.kt)("li",{parentName:"ul"},"Information",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"batteryConfigured")," - Indikator, Hausbatterie/Powerwall-Meter konfiguriert (",(0,i.kt)("em",{parentName:"li"},"bool"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gridConfigured")," - Indikator, Smart/Grid-Meter konfiguriert (",(0,i.kt)("em",{parentName:"li"},"bool"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pvConfigured")," - Indikator, Solaranlagen/Photovoltaik-Meter konfiguriert (",(0,i.kt)("em",{parentName:"li"},"bool"),")"))))),(0,i.kt)("li",{parentName:"ul"},"Infos zum Stromtarif",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"tariffs"},(0,i.kt)("inlineCode",{parentName:"a"},"currency"))," - Tarif-W\xe4hrung (",(0,i.kt)("em",{parentName:"li"},"string"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"tariffs/#feedin"},(0,i.kt)("inlineCode",{parentName:"a"},"tariffFeedIn"))," - PV-Einspeiseverg\xfctung pro kWh in der Tarif-W\xe4hrung (float)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"tariffs/#grid"},(0,i.kt)("inlineCode",{parentName:"a"},"tariffGrid"))," - Netz-Abnahmepreis pro kWh in der Tarif-W\xe4hrung (float)"))),(0,i.kt)("li",{parentName:"ul"},"Meter Infos",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"batteryPower")," - Aktuelle Hausbatterie/Powerwall-Leistung in Watt (",(0,i.kt)("em",{parentName:"li"},"float"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"batterySoC")," - Aktueller F\xfcllstand der Hausbatterie/Powerwall in Prozent (",(0,i.kt)("em",{parentName:"li"},"integer"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gridPower")," - Aktuelle Netz-Einspeisung(-) oder -Abnahme(+) in Watt (",(0,i.kt)("em",{parentName:"li"},"float"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"homePower")," - Aktuelle Haus-Abnahmeleistung (ohne Wallboxverbrauch) in Watt (",(0,i.kt)("em",{parentName:"li"},"float"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pvPower")," - Aktuelle Solaranlagen-Leistung in Watt (",(0,i.kt)("em",{parentName:"li"},"float"),")"))),(0,i.kt)("li",{parentName:"ul"},"Ladepunkte (loadpoint)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Konfiguration",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"loadpoints"},(0,i.kt)("inlineCode",{parentName:"a"},"loadpoint"))," - Laufende Nummer des Ladepunktes (",(0,i.kt)("em",{parentName:"li"},"integer"),") "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"loadpoints#maxcurrent"},(0,i.kt)("inlineCode",{parentName:"a"},"maxCurrent"))," - Maximale Lade-Stromst\xe4rke in Ampere (",(0,i.kt)("em",{parentName:"li"},"float"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"loadpoints#mincurrent"},(0,i.kt)("inlineCode",{parentName:"a"},"minCurrent"))," - Minimale Lade-Stromst\xe4rke in Ampere (",(0,i.kt)("em",{parentName:"li"},"float"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"loadpoints#min"},(0,i.kt)("inlineCode",{parentName:"a"},"minSoC"))," - Mindest-F\xfcllstand der Fahrzeugbatterie in Prozent (",(0,i.kt)("em",{parentName:"li"},"integer"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"loadpoints/#mode"},(0,i.kt)("inlineCode",{parentName:"a"},"mode"))," - Initialer Modus des Ladepunktes nach evcc-Start ",(0,i.kt)("inlineCode",{parentName:"li"},"off"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"now"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"min"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"pv")," (",(0,i.kt)("em",{parentName:"li"},"string"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"loadpoints/#phases"},(0,i.kt)("inlineCode",{parentName:"a"},"phases"))," - Initial aktive Anzahl Stromphasen des Ladepunktes nach evcc-Start (",(0,i.kt)("em",{parentName:"li"},"integer"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"loadpoints#target"},(0,i.kt)("inlineCode",{parentName:"a"},"targetSoC"))," - Ziel-F\xfcllstand der Fahrzeugbatterie in Prozent (",(0,i.kt)("em",{parentName:"li"},"integer"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"loadpoints/#title"},(0,i.kt)("inlineCode",{parentName:"a"},"title"))," - Bezeichnung des Ladepunktes in der evcc App (",(0,i.kt)("em",{parentName:"li"},"string"),") "))),(0,i.kt)("li",{parentName:"ul"},"Information",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"activePhases"),"- Aktuell aktive Anzahl Stromphasen des Ladepunktes (",(0,i.kt)("em",{parentName:"li"},"integer"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chargeCurrent")," - Aktuelle Gesamt-Lade-Stromst\xe4rke in Ampere (",(0,i.kt)("em",{parentName:"li"},"float"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chargeCurrents")," - Aktuelle Lade-Stromst\xe4rke pro aktiver Stromphase in Ampere (",(0,i.kt)("em",{parentName:"li"},"float"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chargeDuration")," - Ladedauer in Sekunden (",(0,i.kt)("em",{parentName:"li"},"integer"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chargePower")," - Aktuelle Lade-Leistung in Watt (",(0,i.kt)("em",{parentName:"li"},"float"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chargeRemainingDuration")," - Ladezeit in Sekunden bis zum Ziel-F\xfcllstand (",(0,i.kt)("em",{parentName:"li"},"integer"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chargeRemainingEnergy")," - Notwendige Energie bis zum Ziel-F\xfcllstand in Wh (",(0,i.kt)("em",{parentName:"li"},"float"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chargedEnergy")," - Bisher geladene Energie in Wh (",(0,i.kt)("em",{parentName:"li"},"float"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"charging")," - Indikator, Ladevorgang aktiv (",(0,i.kt)("em",{parentName:"li"},"bool"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," - Indikator, Beladung freigegeben (",(0,i.kt)("em",{parentName:"li"},"bool"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hasVehicle")," - Indikator, Fahrzeug-Definitionen sind dem Ladepunkt zugewiesen (",(0,i.kt)("em",{parentName:"li"},"bool"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"targetTime")," - Zielladezeit in Sekunden seit seit 1970 UTC (",(0,i.kt)("em",{parentName:"li"},"integer"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pvAction")," - Kontrollvariable zur PV-Timer Steuerung ",(0,i.kt)("inlineCode",{parentName:"li"},"enable"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"disable")," (",(0,i.kt)("em",{parentName:"li"},"string"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pvRemaining")," - Notwendige PV-Restladezeit bei aktivierter Timer Steuerung in Sekunden (",(0,i.kt)("em",{parentName:"li"},"integer"),")"))))),(0,i.kt)("li",{parentName:"ul"},"Fahrzeuge (vehicles)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Konfiguration",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"vehicles/#capacity"},(0,i.kt)("inlineCode",{parentName:"a"},"vehicleCapacity")),"- Kapazit\xe4t der Fahrzeugbatterie in Wh (",(0,i.kt)("em",{parentName:"li"},"float"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"vehicles/#title"},(0,i.kt)("inlineCode",{parentName:"a"},"vehicleTitle"))," - Bezeichnung des Fahrzeugs in der evcc App (",(0,i.kt)("em",{parentName:"li"},"string"),")"))),(0,i.kt)("li",{parentName:"ul"},"Information",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"climater")," - Status der Fahrzeug-Klimatisierung ",(0,i.kt)("inlineCode",{parentName:"li"},"on"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"off"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"heating"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"cooling")," (",(0,i.kt)("em",{parentName:"li"},"string"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connected")," - Indikator, Fahrzeug am Ladepunkt angeschlossen (",(0,i.kt)("em",{parentName:"li"},"bool"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connectedDuration")," - Anschlu\xdfdauer des Fahrzeugs in Sekunden (",(0,i.kt)("em",{parentName:"li"},"integer"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"vehicleOdometer")," - Aktueller Kilometerstand des Fahrzeugs in km (",(0,i.kt)("em",{parentName:"li"},"float"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"vehiclePresent")," - Indikator, evcc auf die Fahrzeugdaten zugreifen kann (",(0,i.kt)("em",{parentName:"li"},"bool"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"vehicleRange")," - Aktuelle Reichweite des Fahrzeugs in km (",(0,i.kt)("em",{parentName:"li"},"float"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"vehicleSoC")," - Aktueller F\xfcllstand der Fahrzeugbatterie in Prozent (",(0,i.kt)("em",{parentName:"li"},"integer"),")"))))),(0,i.kt)("li",{parentName:"ul"},"Infos zur Einsparungseffizienz ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"savingsAmount")," - Summe der evcc-Einsparung (",(0,i.kt)("em",{parentName:"li"},"float"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"savingsEffectivePrice")," - Kalkulierter Einsparungs-Preis (",(0,i.kt)("em",{parentName:"li"},"float"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"savingsGridCharged")," - Geladene Netzenergie in Wh (",(0,i.kt)("em",{parentName:"li"},"float"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"savingsSelfConsumptionCharged")," - Geladene Sonnenenergie in Wh (",(0,i.kt)("em",{parentName:"li"},"float"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"savingsSelfConsumptionPercent")," - Anteil der geladenen Sonnenenergie in Wh (",(0,i.kt)("em",{parentName:"li"},"float"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"savingsSince")," - Zeitperiode der Ersparnisberechnung in Sekunden (",(0,i.kt)("em",{parentName:"li"},"integer"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"savingsTotalCharged")," - Geladene Gesamtenergie in Wh (",(0,i.kt)("em",{parentName:"li"},"float"),")"))),(0,i.kt)("li",{parentName:"ul"},"Sponsor",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Konfiguration",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"sponsortoken"},(0,i.kt)("inlineCode",{parentName:"a"},"auth"))," - Authentication Token des evcc-Sponsors (",(0,i.kt)("em",{parentName:"li"},"string"),")"))),(0,i.kt)("li",{parentName:"ul"},"Information",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sponsor")," - Name des evcc-Sponsors (",(0,i.kt)("em",{parentName:"li"},"string"),")")))))),(0,i.kt)("h2",{id:"services"},(0,i.kt)("inlineCode",{parentName:"h2"},"services")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"services")," definiert eine Liste von zu verwendeten Nachrichtendienste."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  services:\n  - type: pushover\n    app: 12345\n    recipients:\n    - 234567\n")),(0,i.kt)("p",null,"Im folgenden werden nun alle erforderlichen Parameter erkl\xe4rt."),(0,i.kt)("h3",{id:"type"},(0,i.kt)("inlineCode",{parentName:"h3"},"type")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"type")," definiert den Nachrichtendienst der verwendet werden soll"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pushover"),": ",(0,i.kt)("a",{parentName:"li",href:"https://pushover.net/"},"Pushover"),". Siehe ",(0,i.kt)("a",{parentName:"li",href:"#pushover"},(0,i.kt)("inlineCode",{parentName:"a"},"pushover"))," Definition"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"telegram"),": ",(0,i.kt)("a",{parentName:"li",href:"https://telegram.org/"},"Telegram Messenger"),". Siehe ",(0,i.kt)("a",{parentName:"li",href:"#telegram"},(0,i.kt)("inlineCode",{parentName:"a"},"telegram"))," Definition"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"email"),": Email.  Siehe ",(0,i.kt)("a",{parentName:"li",href:"#email"},(0,i.kt)("inlineCode",{parentName:"a"},"email"))," Definition"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shout"),": ",(0,i.kt)("a",{parentName:"li",href:"https://containrrr.dev/shoutrrr"},"shoutrrr"),". Siehe ",(0,i.kt)("a",{parentName:"li",href:"#shout"},(0,i.kt)("inlineCode",{parentName:"a"},"shout"))," Definition")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  services:\n  - type: pushover\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"unterst\xfctzte-dienste"},"Unterst\xfctzte Dienste"),(0,i.kt)("h3",{id:"pushover"},(0,i.kt)("inlineCode",{parentName:"h3"},"pushover")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pushover")," verwendet den Dienst ",(0,i.kt)("a",{parentName:"p",href:"https://pushover.net/"},"Pushover")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: pushover\n  app: # app id\n  recipients:\n  - # list of recipient ids\n")),(0,i.kt)("h3",{id:"telegram"},(0,i.kt)("inlineCode",{parentName:"h3"},"telegram")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"telegram")," verwendet den Dienst ",(0,i.kt)("a",{parentName:"p",href:"https://telegram.org/"},"Telegram Messenger")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: telegram\n  token: # bot id : jede laufende Instanz von evcc ben\xf6tigt eine eigene bot id\n  chats:\n  - # Liste von Chat oder Group IDs. Jeder Eintrag ben\xf6tigt ein - Zeichen am Anfang und muss in einer eigenen Zeile sein.\n  - -GroupID #Achtung Group IDs in Telegram haben ein -Zeichen \n  - ChatID\n")),(0,i.kt)("h3",{id:"email"},(0,i.kt)("inlineCode",{parentName:"h3"},"email")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"email")," verwendet den Dienst ",(0,i.kt)("a",{parentName:"p",href:"https://containrrr.dev/shoutrrr"},"shoutrrr")),(0,i.kt)("p",null,"Hier wird der Parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"uri")," mit dem Wert ",(0,i.kt)("inlineCode",{parentName:"p"},"smtp://<user>:<password>@<host>:<port>/?fromAddress=<from>&toAddresses=<to>")," erwartet. Die Platzhalter sind wie folgt zu ersetzen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<host>"),": Adresse (hostname oder IP Adresse) des Email Servers"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<port>"),": Port Adresse des Email Servers"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<user>"),": Benutzername f\xfcr den Email Server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<password>"),": Passwort des Benutzers"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<from>"),": Email Adresse des Absenders"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<to>"),": Email Adresse des Empf\xe4ngers")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: email\n  uri: smtp://benutzername:passwort@emailserver.dom\xe4ne:1234/?fromAddress=absender@mail.com&toAddresses=empf\xe4nger@mail.com\n")),(0,i.kt)("h3",{id:"shout"},(0,i.kt)("inlineCode",{parentName:"h3"},"shout")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"shout")," verwendet den Dienst ",(0,i.kt)("a",{parentName:"p",href:"https://containrrr.dev/shoutrrr"},"shoutrrr")," unter unterst\xfctz alle seine Dienste."),(0,i.kt)("p",null,"Die Konfiguration wird im folgenden Beispiel anhand von ",(0,i.kt)("a",{parentName:"p",href:"https://gotify.net/"},"Gotify")," gezeigt und funktioniert bei den anderen M\xf6glichkeiten \xfcber den gleichen Weg."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  - type: shout\n    uri: gotify://gotify.example.com:443/AzyoeNS.D4iJLVa/?priority=1\n")),(0,i.kt)("p",null,"Weitere Informationen sind in der ",(0,i.kt)("a",{parentName:"p",href:"https://containrrr.dev/shoutrrr"},"shoutrrr")," Dokumentation zu den ",(0,i.kt)("a",{parentName:"p",href:"https://containrrr.dev/shoutrrr/v0.5/services/overview/"},"unterst\xfctzten Diensten")," zu finden."))}k.isMDXComponent=!0}}]);