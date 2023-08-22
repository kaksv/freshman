// SPDX-License-dentifier:MIT
pragma solidity ^0.8.18;

// Import the openzepplin contracts
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// The contract we are creating is an NFT Contract because it extends ERC721
contract NFTee is ERC721 {
    constructor()
    ERC721("NFTee", "ZNJ") {
        _mint(msg.sender, 1);
    }
}