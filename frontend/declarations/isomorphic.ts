import {
  createActor as createBackendActor,
  canisterId as backendCanisterId,
} from "@/declarations/backend";

const host =
  process.env.DFX_NETWORK === "local"
    ? "http://127.0.0.1:4943"
    : "https://ic0.app";

export const backend = createBackendActor(backendCanisterId, {
  agentOptions: { host },
});
