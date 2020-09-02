// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

contract PausableAndOwnable is Pausable, Ownable {
    uint public lastPauseTime;

    constructor() internal Ownable() {
      _pause();
      lastPauseTime = now;
    }

    /**
     * @notice Change the paused state of the contract
     * @dev Only the contract owner may call this.
     */
    function setPaused(bool _toBePaused) external onlyOwner {
        // Ensure we're actually changing the state before we do anything
        if (_toBePaused == paused()) {
            return;
        }

        if (_toBePaused) {
          _pause();
          // Track the last pause time.
          lastPauseTime = now;
        } else {
          _unpause();
        }
    }
}
