# React JS

React : Javascript Library dévellopé par facebook depuis 2013


version : 16.0.0


# caractéristiques 
moteur de rendu JavaScript
se démarque de ses concurrents par sa flexibilité, son éfficacité  et ses performances,
architecture très souple
utilise un DOM virtuel

utilisée notamment par Netflix5, Yahoo6, Airbnb7, Sony8, Atlassian9, facebook, instagram, whatsapp


# avantags
Il s'agit d'une librairie JavaScript et non d'un framework - comme AngularJS 
React se concentre sur la gestion du rendu de la vue

React n'utilise pas de système de templates et ne fonctionne qu'avec du Javascript : 
encapsulation complète du composant au sein d'une unique classe

"Le choix d'AngularJS est comparable à l'achat d'un PC tout fait. C'est un framework full-stack. 
A la différence de React qui s'apparenterait plutôt à un PC à assembler soi-même"

React est orienté composants
adapté à la création d'architectures modulaires

* ecosystème riche, plein de bibliothèque

# concept

* DOM Virtuel
représentation du DOM en JavaScript
Au lieu de générer le DOM lui meme comme avec un langage de templating, c'est-à-dire au lieu de dialoguer avec les API du navigateur pour construire le DOM, on ne génère qu'une arborescence d'objets JavaScript en mémoire
En termes de performance, React optimise les opérations sur le DOM en utilisant un DOM virtuel.
	
* JSX : 
langage qui permet de générer des objets Javascript avec une notation similaire à HTML
 langage qui étend JavaScript avec une syntaxe déclarative permettant de définir le mode de rendu HTML du composant.
permet de manipuler le DOm virtuel
permet d'écrire le html directement dans le js

- a templating language that compiles to Javascript.
- a superset of Javascript.
- template language comes with the full power of JavaScript.
- recommend using it with React to describe what the UI should look like.

React uses a template language called JSX, which literally combines HTML and Javascript into a single file.
handling HTML in Javascript


EmberJS and Angular both separate template files from Javascript, whereas in React you just build elements directly in Javascript.

* Asset management 
CSS, web fonts, images, and svg can be used as normally in HTML, but can also be loaded through the module system if they are included in the app's `src` directory.


* Functionnal Programming 

stateles functonnel, conatiner compoenet

* Props et State

Props : 
props  is an object available on  this  inside a component class that gives you access to the values that were passed when a component was called.

deux source de donnée d'un composant react
props : propriétes définies à la création d'une instance de composant: idéalement immutable; peuvent avoir valeur par défaut; 

validation du type d'un propriété  :
leur type peuvent être validés pour faciliter la réutisation : 
React.PropTypes.array
React.PropTypes.bool

proprité particulière : props.children | sert à rajouter des enfants dans un compsant

Props are read-only
Inside your component, you should only access  this.props  to read values. 
You should never modify the  this.props  property.

state : 
représente état interne du composant,
state  is a private property of components 
Nothing outside of a component should ever know about a component's state.
mutable par le composnat lui même;
c'est le changement de l'état qui lance la mise à jour de la vue;
le double data binding est supporté mais non encouragé

state



* Mixins
c'est qui remplace l'héritage
on peut rajouter des mixins à un composannt 

ce n''est plus utilisé, HIght order componenent

le code devient non maintable




* Cycle de vie du composant : 
COmponentWiilMount, DipMount, WillReceivePropos, ShouldUPdateComponent ....
c'est dans le dipMount qu'on lance des appel AJAX

* Flux 
Design pattern qui n'impose pas d'implémentation de référence
c'est la facon qu'a choisis facebook pour construire ses apps en complément de react
basé sur les flux de donnée unidirectionnel
plus simle à maintenir

*  Redux
state management
like rxJS in angular 4
FLux + reducer = flux
implémentation de référene du pattern flux
il permet de gérer la prblèmatique des states
sert à organiser la logique
putôt que de mettre les states dans les composants, on les gère dans redux
l'app doit porter le moint de donnée/etats possible, tout dit être localisé dans redux
state  : 
action : 
reducer :

rules : 
- Single source of truth ( ce qui est dans le state nedoit pas être ailleur, l'état de l'app est décrite dans objet simple)
- State is read-only (state ne doit être modifié que par une action, pas directement, les changements sont des objets simples)
- changes are made with pure functions (la logique est ralisé dans des fonctions pures)

tools : looger, devtools, timetravels, undo, hot releao
chrome redux devtools


* NextJS
 React Routeur / NexJS routing
standars pour tourage dynamique 
pour faire des SPA

* Fetch
gestion ajax
ES6

*Test Unitaire
JEST
Enzyme (airb&B)

test composant : 
simuler des event : click, ...
utilisation du addons TestUtils, qui permet de rendre des composant en mémoire et de faire des clic dessus 


* static typing : FLow


* Build : 
webpack, Balel
& Docker

hot releod, 

* React Page login

* SEO-Ready


* NextJS
Framework for server-rendered React apps
https://github.com/zeit/next.js


* Syntaxt : ES6
ECMAS2015
react est compatible avec les classe ES6
il est facile d'interface le build avec Babel qui supporte JSX

* Ecosystème :
composant graphiques : boostrap, matériel design
GraphQL
ReactNative
ReactMotion
React hot loader
Awesome React
React Canvas
React art
JSXStyle
Radium
Immutable.js

* librairies graphique : HIghCharts

* Isomorphic Apps
Comme react s'appuie sur le DOM virtuel , pas obligatoire de se brancher dans le DOM du browser
on peut rendre des vues React sur le serveur
pour ensuite laisser la version client prendre le relai dès que tout est chargé

en mettant les donnée dans template renud par le servuer,
on a une prmière vue des données sans atendre le chargement du js
dès que le js est chargé coté nav, react le détecte et se remixe et prend relais pour une app dynamique

* web components

# Question / 


* Pattern de sépration of concern ?
pourquoi mettre la vue dans le controller/composant, avec le style
r : TEMPLATE SÉPARENT LES TECHNO PAS LES CONCERN,

* Modularié avec COmpose / recompose , notion de state, sans réutiliser de state

* librairie nodejs : REACTmAILCHIMPS SUBSCRIBE

* Licence changé par facebook ?
en mai 2013,  licence Apache 2.0 
Depuis la sortie de sa version 0.12 en octobre 2014, React est proposé sous licence BSD clause 3 


* Traduction des composat en composant fonctionnels
* 
