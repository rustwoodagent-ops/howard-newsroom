import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "howard-newsroom";
const basePath = isGithubActions ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  distDir: isGithubActions ? "out" : "dist",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
  ...(isGithubActions
    ? {}
    : {
        turbopack: {
          root: "/home/rustwood/.openclaw/workspace/howard-newsroom",
        },
      }),
};

export default nextConfig;
