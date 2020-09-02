import { ethers } from "@nomiclabs/buidler";
import { expect } from "chai";
import { Signer, Wallet } from "ethers";

import { StakingRewardsFactory } from "../src/types/StakingRewardsFactory";
import { StakingRewards } from "../src/types/StakingRewards";

let TACO = "0x00d1793d7c3aae506257ba985b34c76aaf642557";

describe("StakingRewards", function() {
  let deployer: Signer;
  let stakingRewards: StakingRewards;

  beforeEach(async function() {
    [deployer] = await ethers.getSigners();
  });

  it("deploys contract", async function() {
    stakingRewards = await (new StakingRewardsFactory(deployer)).deploy(TACO, TACO);
    await stakingRewards.deployed();
    
    expect(stakingRewards.address).to.not.be.null;
  });
});
