const main = document.querySelector(`main`)
const baseURL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-fsa-et-web-ft-sf-helpdesk/`

const state = {
  artistData: []
}

const artistConstructor = async () =>{
  try{ 
    const response = await fetch(`${baseURL}artists`);
    const JSONresponse = await response.json();
   //ADD IN AN ERROR SITUATION
    state.artistData = JSONresponse.data;
  } catch (error) {
    console.log(error);
  }
  renderCards();
}

const renderCards = () => {
  const artistCardArray = state.artistData.map(artistInfo => {
    return `
    <content>
    <img src=${artistInfo.imageUrl} width=100%%>
    <h2>${artistInfo.name}</h2>
    </content>
    `
  })
  
  artistCardArray.forEach((artistCardInnerHTML, index) => {
    const artCard = document.createElement(`article`);
    artCard.id = (index);
    main.append(artCard);
    artCard.innerHTML=artistCardInnerHTML
    console.log(artCard)
  } )
}

artistConstructor();