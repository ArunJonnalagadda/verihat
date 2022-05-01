import { useEffect, useState } from "react";

export default function useEventListener(contracts, contractName, eventName, provider, startBlock, args) {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    if (typeof provider !== "undefined" && typeof startBlock !== "undefined") {
      provider.resetEventsBlock(startBlock);
    }
    if (contracts && contractName && contracts[contractName]) {
      try {
        contracts[contractName].on(eventName, (...args) => {
          const blockNumber = args[args.length - 1].blockNumber;
          setUpdates(messages => [{ blockNumber, ...args.pop().args }, ...messages]);
        });
        return () => {
          contracts[contractName].removeListener(eventName);
        };
      } catch (e) {
        console.log(e);
      }
    }
  }, [provider, startBlock, contracts, contractName, eventName]);

  return updates;
}
