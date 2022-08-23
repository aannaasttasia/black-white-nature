//import React, { useState } from "react";
const text = "They have complex interactions with each other and their environments, forming intricate food webs. The scientific study of animals is known as zoology.Most living animal species are in Bilateria, a clade whose members have a bilaterally symmetric body plan. The Bilateria include the protostomes, containing animals such as nematodes, arthropods, flatworms, annelids and molluscs, and the deuterostomes, containing the echinoderms and the chordates, the latter including the vertebrates. Life forms interpreted as early animals were present in the Ediacaran biota of the late Precambrian. Many modern animal phyla became clearly established in the fossil record as marine species during the Cambrian explosion, which began around 539 million years ago. 6,331 groups of genes common to all living animals have been identified; these may have arisen from a single common ancestor that lived 650 million years ago.Historically, Aristotle divided animals into those with blood and those without. Carl Linnaeus created the first hierarchical biological classification for animals in 1758 with his Systema Naturae, which Jean-Baptiste Lamarck expanded into 14 phyla by 1809. In 1874, Ernst Haeckel divided the animal kingdom into the multicellular Metazoa (now synonymous for Animalia) and the Protozoa, single-celled organisms no longer considered animals. In modern times, the biological classification of animals relies on advanced techniques, such as molecular phylogenetics, which are effective at demonstrating the evolutionary relationships between taxa."

export default function ShowButton(){
    const [showMore, setShowMore] = React.useState(false);
    return(
        <span id="showBtn">
        {showMore? '' : <button className="btn" onClick={() => setShowMore(!showMore)}>show more</button>}
        <p>{showMore ? text : ''}
         {showMore? <button className="btn" onClick={() => setShowMore(!showMore)}>show less</button> : ''}
         </p>
        </span>
    )

};

const domContainer = document.querySelector('#show_more');
const root = ReactDOM.createRoot(domContainer);
root.render(<ShowButton/>);

// class ShowButton extends React.Component{
//     constructor(props){
//         const [showMore, setShowMore] = useState(false);
//         const {text} = document.getElementById("text").innerHTML;
//     }
//     render(){
//         return(
//             <div class="ShowBtn">
//                 <p>
//                 {showMore ? text : `${text.substring(0, 10)}`}
//                 <button className="btn" onClick={() => setShowMore(!showMore)}>Show more</button>
//                 {showMore ? "Show less" : "Show more"}
//                 </p>
//             </div>
//             );
//     }
    
// }


// const domContainer = document.querySelector('#like_button_container');
// const root = ReactDOM.createRoot(domContainer);
// root.render(<ShowButton/>);