import { out } from "../../../util/interaction";
import { models } from "../../../util/apis";

export function reportApp(app: models.AppResponse): void {
  out.report(
  [
    ["ID", "id" ],
    [ "App Secret", "appSecret" ],
    [ "Description", "description"],
    [ "Display Name", "displayName"],
    [ "Name", "name"],
    [ "OS", "os"],
    [ "Platform", "platform"],
    [ "Owner ID", "owner.id"],
    [ "Owner Display Name", "owner.displayName"],
    [ "Owner Email", "owner.email" ],
    [ "Owner Name", "owner.name" ],
    [ "Azure Subscription ID", "azureSubscriptionId"]
  ], app);
}
