import { ethers } from "@nomiclabs/buidler";
import { expect } from "chai";
import { deployMockContract } from '@ethereum-waffle/mock-contract';
import { Signer } from "ethers";

import { StakingRewardsFactory } from "../src/types/StakingRewardsFactory";
import { StakingRewards } from "../src/types/StakingRewards";

describe("StakingRewards", function() {
  let deployer: Signer;
  let stakingRewards: StakingRewards;

  beforeEach(async function() {
    [deployer] = await ethers.getSigners();
  });

  it("deploys contract", async function() {
    stakingRewards = await (new StakingRewardsFactory(deployer)).deploy('a', 'b') 
    await stakingRewards.deployed();
    
    expect(stakingRewards.address).to.not.be.null;
  });
});
