import { useCallback } from "react";
import { toast } from "react-toastify";
import { baseSepolia } from "@reown/appkit/networks";
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react";
import { ethers } from "ethers";
import useSignerOrProvider from "./useSignerOrProvider";

import CLAIM_FAUCET_ABI from "../ABI/ClaimFaucet.json";

const useClaimFaucet = () => {
  const { address, isConnected } = useAppKitAccount();
  const { chainId } = useAppKitNetwork();
  const { signer } = useSignerOrProvider();

  return useCallback(
    async (contractAddress) => {
      if (!address || !isConnected) {
        toast.error("Please connect wallet");
        return;
      }

      if (Number(chainId) !== Number(baseSepolia.id)) {
        toast.error("Please switch network to Sepolia");
        return;
      }

      if (!signer) {
        toast.error("Signer is not available");
        return;
      }

      try {
        const contract = new ethers.Contract(
          contractAddress,
          CLAIM_FAUCET_ABI,
          signer
        );

        // const estimatedGas = await contract.estimateGas.claimToken(address);

        const txn = await contract.claimToken(address);

        const receipt = await txn.wait();

        if (receipt.status === 1) {
          toast.success("Tokens claimed successfully!");
        } else {
          toast.error("Something went wrong, failed to claim tokens.");
        }
      } catch (error) {
        console.error("Error claiming tokens:", error);
        toast.error("Failed to claim tokens");
      }
    },
    [address, isConnected, chainId, signer]
  );
};

export default useClaimFaucet;
