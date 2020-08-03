import { inject, injectable, named } from 'inversify';
import { DependencyAService, DependencyBService } from "./Services";

@injectable()
export class HomeController {

  constructor(
    @inject('Service')
    @named('DependencyA')
    private depA: DependencyAService,
    @inject('Service')
    @named('DependencyB')
    private depB: DependencyBService
        
  ) {}

  public getAllNames(): string[] {
    return [this.depA.getName(), this.depB.getName()];
  }
}