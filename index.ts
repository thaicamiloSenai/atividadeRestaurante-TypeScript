import { Prato } from "./models/Prato";
import { Contratado } from "./models/Contratado";
import { Freelancer } from "./models/Freelancer";
import { Entrega } from "./models/Entrega";

import { PratoRepository } from "./repositories/PratoRepository";
import { FuncionarioRepository } from "./repositories/FuncionarioRepository";
import { EntregaRepository } from "./repositories/EntregaRepository";

const prato1 = new Prato("Fettuccine Alfredo", "23/10/2026", "Italiana");
const prato2 = new Prato("Porção Camarão Empanado", "21/10/2026", "Brasileira");

const repoPratos = new PratoRepository();
repoPratos.salvar(prato1);
repoPratos.salvar(prato2);
repoPratos.consultarPratos();

const f1 = new Contratado("Alice", "Feminino", "05/11/2025", "262.847.547-28", "12.806.077-3", 3500);
const f2 = new Freelancer("Anthony", "Masculino", "09/09/2026", "504.673.168-18", "27.149.588-1", 45, 160, "09/09/2026", "15/12/2026");

const repoFuncionarios = new FuncionarioRepository();
repoFuncionarios.salvar(f1);
repoFuncionarios.salvar(f2);

repoFuncionarios.consultarFuncionarios();
repoFuncionarios.consultarTrabalhando();
repoFuncionarios.consultarSalarios();
repoFuncionarios.consultarContratoFreelancer();

const entrega1 = new Entrega("20/10/2026", "19h", "16", "Rua Antonio Marcos, 81");
const entrega2 = new Entrega("19/10/2026", "20h", "18", "Avenida Carlos Samartine, 171");

const repoEntregas = new EntregaRepository();
repoEntregas.salvar(entrega1);
repoEntregas.salvar(entrega2);
repoEntregas.consultarEntregas();