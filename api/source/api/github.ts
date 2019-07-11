import { PERIL_INTEGRATION_ID, PRIVATE_GITHUB_SIGNING_KEY } from "../globals"

import { App } from "@octokit/app"
import winston from "../logger"

export const GithubApp = new App({ id: PERIL_INTEGRATION_ID, privateKey: PRIVATE_GITHUB_SIGNING_KEY })

export async function getTemporaryAccessTokenForInstallation(installationId: number): Promise<string> {
  const token = await GithubApp.getInstallationAccessToken({ installationId })
  winston.info(`[github auth] - ${token}`)
  return token
}
