import React, { useEffect, useState } from "react";
import { useFaucet } from "../context/contractFactory";
import { useAppKitAccount } from "@reown/appkit/react";
import useClaimFaucet from "../hooks/useClaimFaucet"; 

const Faucets = () => {
  const { address } = useAppKitAccount();
  const {
    faucets,
    userFaucets,
    totalContracts,
    getTokenInfo,
    getBalanceFromDeployedContract,
  } = useFaucet();

  const claimToken = useClaimFaucet();

  const [tokenInfos, setTokenInfos] = useState({});
  const [balances, setBalances] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTokenInfo = async () => {
      setIsLoading(true);
      for (const faucet of faucets) {
        await handleGetTokenInfo(faucet.contract);
      }
      setIsLoading(false);
    };

    fetchTokenInfo();
  }, [faucets, userFaucets, totalContracts, address]);

  const handleClaim = async (contractAddress) => {
    try {
      console.log("Claiming tokens for contract:", contractAddress);
      await claimToken(contractAddress); 
    } catch (error) {
      console.error("Error claiming tokens:", error);
    }
  };

  const handleGetTokenInfo = async (contractAddress) => {
    try {
      const info = await getTokenInfo(contractAddress);
      setTokenInfos((prevInfos) => ({
        ...prevInfos,
        [contractAddress]: info,
      }));
    } catch (error) {
      console.error("Error getting token info:", error);
    }
  };

  const handleGetBalance = async (contractAddress) => {
    try {
      const balance = await getBalanceFromDeployedContract(contractAddress);
      setBalances((prevBalances) => ({
        ...prevBalances,
        [contractAddress]: balance.toString(),
      }));
    } catch (error) {
      console.error("Error getting balance:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-blue-100 py-10 px-6 relative overflow-hidden">
      {/* Animated star background */}
      <div className="fixed inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animation: `twinkle ${Math.random() * 5 + 5}s infinite`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Cosmic Faucet Dashboard
        </h1>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {faucets.map((faucet, index) => {
              const isDeployer =
                address?.toLowerCase() === faucet.deployer.toLowerCase();
              const tokenInfo = tokenInfos[faucet.contract];

              return (
                <div
                  key={index}
                  className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex flex-col justify-between h-full border border-blue-500/30"
                >
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-2xl font-semibold text-blue-300">
                        {tokenInfo?.name}
                      </h2>
                      <button
                        onClick={() =>
                          isDeployer
                            ? handleGetBalance(faucet.contract)
                            : handleClaim(faucet.contract)
                        }
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
                        aria-label={isDeployer ? "Get Balance" : "Claim Tokens"}
                      >
                        <span className="text-2xl">
                          {isDeployer ? "💰" : "🪙"}
                        </span>
                      </button>
                    </div>
                    <p className="text-lg text-blue-200 mb-4">
                      {tokenInfo?.symbol || "Loading..."}
                    </p>
                    {balances[faucet.contract] && (
                      <p className="text-sm text-blue-300 mt-2">
                        <span className="font-semibold">Balance:</span>{" "}
                        {balances[faucet.contract]}
                      </p>
                    )}
                    <div className="text-sm text-blue-200 mb-4">
                      <p className="mb-1 truncate">
                        <span className="font-semibold">Contract Address:</span>{" "}
                        {faucet.contract}
                      </p>
                      {isDeployer && (
                        <p className="truncate">
                          <span className="font-semibold">
                            Deployer Address:
                          </span>{" "}
                          {faucet.deployer}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {!isDeployer && (
                      <button
                        onClick={() => handleClaim(faucet.contract)}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300 transform hover:scale-105"
                      >
                        Claim Tokens
                      </button>
                    )}
                    {isDeployer && (
                      <>
                        <button
                          onClick={() => handleGetTokenInfo(faucet.contract)}
                          className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-md hover:from-green-600 hover:to-blue-600 focus:ring-2 focus:ring-green-400 focus:outline-none transition-all duration-300 transform hover:scale-105"
                        >
                          Get Token Info
                        </button>
                        <button
                          onClick={() => handleGetBalance(faucet.contract)}
                          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:from-purple-600 hover:to-pink-600 focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all duration-300 transform hover:scale-105"
                        >
                          Get Balance
                        </button>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* CSS for star animation */}
      <style jsx>{`
        @keyframes twinkle {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Faucets;
