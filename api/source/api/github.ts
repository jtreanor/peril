import { PERIL_INTEGRATION_ID, PRIVATE_GITHUB_SIGNING_KEY } from "../globals"

import { App } from "@octokit/app"
import winston from "../logger"

export async function getTemporaryAccessTokenForInstallation(installationId: number): Promise<string> {
  const app = new App({ id: parseInt(PERIL_INTEGRATION_ID, 10), privateKey: PRIVATE_GITHUB_SIGNING_KEY })
  const token = await app.getInstallationAccessToken({ installationId })
  winston.info(`[github auth] - ${token}`)
  return token
}
