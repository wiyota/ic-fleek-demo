import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    DFX_NETWORK: process.env.DFX_NETWORK,
    CANISTER_ID_BACKEND: process.env.CANISTER_ID_BACKEND,
  },
};

export default nextConfig;
