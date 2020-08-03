
import { Container } from "inversify";
import { TYPE } from 'inversify-restify-utils';

import { DependencyAService, DependencyBService } from "./Services";
import{ HomeController } from './Controller'


export async function bind(container: Container): Promise<void> {

    var container = new Container();

    // Bind Controllers
    container.bind<HomeController>(TYPE.Controller)
    .to(HomeController)
    .whenTargetNamed('HomeController');

    // Bind Services

    container.bind<DependencyAService>('Service')
    .to(DependencyAService).inSingletonScope()
    .whenTargetNamed('DependencyA');

    container.bind<DependencyBService>('Service')
    .to(DependencyBService).inSingletonScope()
    .whenTargetNamed('DependencyB');
}

export async function unbind(container: Container): Promise<void> {
    // await container.getNamed<Connection>('Connection', 'SQL')
    // .close(); // Uncomment when typeorm added.
    container.unbindAll();
}