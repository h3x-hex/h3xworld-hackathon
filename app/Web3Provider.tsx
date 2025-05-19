'use client'

import { WagmiProvider, createConfig, http } from "wagmi";
import { lensTestnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { ReactNode } from "react";

type Web3ProviderProps = {
    children: ReactNode;
};

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [lensTestnet],
    transports: {
      // RPC URL for each chain
      [lensTestnet.id]: http(
        `https://lens-sepolia.g.alchemy.com/v2/xo6V5kULZHRCwGEuinRFYq_8Ma4rD8Mx`,
      ),
    },

    // Required API Keys
    walletConnectProjectId: '827be33e3731b46bd8cbc5196af626c7',

    // Required App Info
    appName: "h3x.world",

    // Optional App Info
    appDescription: "Web3 Social Media platform for creators, entrepreneurs and influencers.",
    appUrl: "http://localhost:3000", // your app's url
    appIcon: "/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: Web3ProviderProps) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};