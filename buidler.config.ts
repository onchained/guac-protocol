import { usePlugin, task } from "@nomiclabs/buidler/config";
usePlugin("@nomiclabs/buidler-ethers");
usePlugin("@nomiclabs/buidler-waffle");
usePlugin("buidler-typechain");

// You have to export an object to set up your config
// This object can have the following optional entries:
// defaultNetwork, networks, solc, and paths.
// Go to https://buidler.dev/config/ to learn more
const config = {
  // This is a sample solc configuration that specifies which version of solc to use
  solc: {
    version: "0.6.8",
  },
  typechain: {
    outDir: "./src/types",
    target: "ethers-v4",
  },
};

export default config;
