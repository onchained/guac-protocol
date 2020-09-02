// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GUAC is ERC20, Ownable {
  constructor (uint256 _initialSupply)
    public
    ERC20("Guacamole", "GUAC")
    Ownable()
  {
      _mint(msg.sender, _initialSupply);
  }
}