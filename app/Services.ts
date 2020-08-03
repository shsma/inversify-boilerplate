import { injectable } from "inversify";
import { GatewayService } from "./GatewayService";

@injectable()
export class DependencyAService implements GatewayService {
  private readonly name: string = "dependencyA";

  public getName(): string {
    return this.name;
  }
}

@injectable()
export class DependencyBService implements GatewayService {
  private readonly name: string = "dependencyB";

  public getName(): string {
    return this.name;
  }
}