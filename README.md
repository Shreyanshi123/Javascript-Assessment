# Javascript-Assessment
# NFT Minting and Listing Tool

This code is a simple tool for minting and listing NFTs (Non-Fungible Tokens). It allows you to create NFTs with specific metadata and then list them with their details.

## Assessment Requirements

1. **Create a variable to hold your NFTs**: The code uses the `NFTs` array variable to store the created NFT objects.

2. **Create an object inside the `mintNFT` function to hold NFT metadata**: The function `mintNFT` creates an NFT object using the parameters passed to it and stores it in the `NFTs` array.

3. **Implement the `listNFTs()` function**: This function iterates through the `NFTs` array and prints the metadata of each NFT using `console.log()`.

4. **Implement the `getTotalSupply()` function**: This function prints the total number of minted NFTs in the `NFTs` array.

## Usage

To use this tool, follow the steps below:

1. **Mint NFTs**: Call the `mintNFT` function and pass the required parameters (`pokemon`, `pokemon_type`, `power_level`, and `level`) to create NFTs. Example:

```javascript
mintNFT("Caterpie", "Grass", "50", "Basic");
mintNFT("Pikachu", "Electric", "185", "Stage1");
mintNFT("Lapras", "Water", "70", "Basic");
mintNFT("Charizard", "Fire", "280", "Stage3");
```

2. **List NFTs**: After minting the NFTs, you can call the `listNFTs()` function to view the metadata of all the minted NFTs. Example:

```javascript
listNFTs();
```

3. **Get Total Supply**: To see the total number of minted NFTs, call the `getTotalSupply()` function. Example:

```javascript
getTotalSupply();
```

# Authors
Shreyanshi Mishra
shreyanshimishra7689@gmail.com 

# License
This project is licensed under the MIT License - see the LICENSE.md file for details
