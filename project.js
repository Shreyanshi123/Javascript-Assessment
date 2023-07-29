/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(pokemon, pokemon_type, power_level, level) {
    const NFT = {
        "Pokemon": pokemon,
        "Pokemon_type": pokemon_type,
        "Power_level": power_level,
        "Level": level
    };
    NFTs.push(NFT);
    console.log("Cards:" + pokemon);


    // create a "loop" that will go through an "array" of NFT's
    // and print their metadata with console.log()
    function listNFTs() {
        for (let a = 0; a < NFTs.length; a++) {
            console.log('NFT ID:', NFT[a + 1]);
            console.log('NFT Pokemon:', NFT[a].Pokemon);
            console.log('NFT Pokemon_type:', NFT[a].Pokemon_type);
            console.log('NFT Power_Level:', NFT[a].Power_level);
            console.log('NFT Level:', NFT[a].Level);
        
        
        }
    }

    // print the total number of NFTs we have minted to the console
    function getTotalSupply() {
        console.log("Total Amount of Cards\n: " + NFTs.length);
    }

    // call your functions below this line

    mintNFT("Caterpie", "Grass", "50", "Basic");
    mintNFT("Pikachu", "Electric", "185", "Stage1");
    mintNFT("Lapras", "Water", "70", "Basic");
    mintNFT("Charizad", "Fire", "280", "Stage3");
    listNFTs();
    getTotalSupply();
}