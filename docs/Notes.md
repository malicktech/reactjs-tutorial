
# best link 

0. think in reactjs
https://reactjs.org/docs/thinking-in-react.html

1. A collection of awesome things regarding React ecosystem.
https://github.com/enaqx/awesome-react

https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f
https://medium.com/@boopathi/it-s-the-future-7a4207e028c2

# deux principes de base 

* déclarative :
on exprime à quoi doit ressembler l'app à un moment donnée dans le temps,
dès que les données en entrée changes : 
, react actualise , recalcule toute la vue, la vue est entièrement re-rendue
et met à jour que les partie de 'LUI qui on réellement changer, il patche le DOM

on a des données en entrée, on rend une vue 
s les donnée changes, on re_rend la vue avec les nouvelles données


* Approche orienté composanat : 
component : encapsulate blocks of functionality and design : markup + logic + style
Components are the building blocks of a React app. 
Components let you split the UI into small, independent, reusable pieces, and think about each piece in isolation.
autonome, réutulisable, composables, cohérente, facilement refactorer
web componenent: eusable page elements that encapsulate pieces of functionality, such as a search input that offers live previews of search results, or a button that shows a tooltip on hover.

Components are similar to functions in Javascript, and can be written as functions.
Components are modular UI elements.
It's OK to nest components. This is called composition.

	
	brique hautement cohésive et peu couplé avec les autres briques 

	react, on fabrique des composant, pas des templates !!!
	tous est composants
	dans une vue, on peut avoir plusieurs instances d'un composant, chaque instance ses données

React apps are organized as a series of nested components

# In React, Data Only Goes One Way!
These components are functional in nature: that is, they receive information through arguments (represented in the  props  attribute) and pass information via their return values (the return value of the  render  function). This is called unidirectional data flow. Data is passed down from components to their children.

# Notes fonctionnement React


Cible des grosse app JS avec des données qui changenet dans le temps 

faut aimer le javascript et bien connaitre comment sa fonctionne,
tout est fait avec js sur react

C'est un framework déclaratif : 
pas de template, on décrit à quoi va ressembler l'app à un moment t en fonction des donnée

 


en terme de rendu de message 'erreur, react est tres fort, c'est agréable


Approche purement composant, qui est entrain de devenir la norme,
on fait pas des template, mais des composant autonome et réutilisable !!



VIrtual DOM : 
DOM en mémoire
représentation méoire de la vue en mémoire
React rend entièrement la vue à chaque changement de son modèle
compliué de patcher la vue à la main quand les données change en permanence => effets de bords
pour le faire de facon performant, react s'appuie sur le dom virtuel

permet d'éviter de manipuler de DOM, c'est couteux en term de perf


react calcule la nouvelle vue, compare avec l'ancienne, calcule une liste des différences minimale
et bach tous les changements nécessaires vers le DOM

penser la vue comme une fonction


Synthetic events : 
React implémente un système d'event au dessus du DOM, ce qui fait ca fonctionne bien sur tous les 


