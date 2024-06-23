/*👉 Au clic sur le bouton "New joke", récupérez une blague aléatoire au format JSON grâce au fetch du lien suivant: "https://v2.jokeapi.dev/joke/Any?lang=fr". N'hésitez pas à revenir sur les cours concernant les évènements du DOM pour déclencher une action au clic, et sur les APIs pour utiliser correctement le fetch.
👉 Une fois les données réceptionnées, vous devez avoir un objet avec deux propriétés "setup" (question) et "delivery" (punchline). Affichez maintenant la blague grâce au DOM en remplaçant le contenu texte des deux éléments HTML portant les id correspondants à ces propriétés.*/



document.querySelector("#fetch-btn").addEventListener("click",() => {fetch( "https://v2.jokeapi.dev/joke/Any?lang=fr")
    .then(response=>response.json())
    .then (data =>  {
document.querySelector("#result-question").textContent=data.setup
document.querySelector("#result-punchline").textContent=data.delivery})})


    





