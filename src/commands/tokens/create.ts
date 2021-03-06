// token create command

import { Command, CommandArgs, CommandResult, help, success, failure, ErrorCodes, shortName, longName, hasArg, required } from "../../util/commandline";
import { out } from "../../util/interaction";
import { reportToken } from "./lib/format-token";
import { MobileCenterClient, models, clientRequest } from "../../util/apis";

const debug = require("debug")("mobile-center-cli:commands:apps:create");
import { inspect } from "util";

@help("Create a new API token")
export default class TokenCreateCommand extends Command {
  constructor(args: CommandArgs) {
    super(args);
  }

  @help("Description of the API token")
  @shortName("d")
  @longName("description")
  @hasArg
  description: string;

  async run(client: MobileCenterClient): Promise<CommandResult> {
    const tokenAttributes: models.ApiTokensCreateRequest = {
      description: this.description,
    };

    const createTokenResponse = await out.progress("Creating token ...",
      clientRequest<models.ApiTokensCreateResponse>(cb => client.account.createApiToken(tokenAttributes, cb))
    );

    const statusCode = createTokenResponse.response.statusCode;
    if (statusCode >= 400) {
      switch (statusCode) {
        case 400:
        default:
          return failure(ErrorCodes.Exception, "invalid request");
        case 403:
          return failure(ErrorCodes.InvalidParameter, "authorization to create an API token failed");
        case 404:
          return failure(ErrorCodes.NotLoggedIn, "user could not be found");
      }
    }

    reportToken(createTokenResponse.result);

    return success();
  }
}
