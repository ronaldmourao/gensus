// ====================================================================
// BANCO COMPLETO DE QUESTÕES - FÁBRICA IA
// Total no Banco: 836 questões.
// ====================================================================

window.questionBank = [
    {
        "id": 500,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "A RNA polimerase II em eucariotos é responsável pela transcrição de:",
        "options": {
            "A": "Apenas RNA mitocondrial e  requerendo adequação aos padrões de segurança vigentes.",
            "B": "mRNA, e também a maioria dos snRNAs, miRNAs e lncRNAs.",
            "C": "DNA além disso,  sendo aplicável principalmente em cenários controlados.",
            "D": "Apenas rRNA, consequentemente,  exigindo o uso de controles internos para validar a reação.",
            "E": "Apenas tRNA além disso,  requerendo adequação aos padrões de segurança vigentes."
        },
        "correct": "B",
        "explanation": "A RNA polimerase II sintetiza os precursores do mRNA e muitos RNAs não-codificantes que regulam a expressão celular.",
        "difficulty": "fácil"
    },
    {
        "id": 501,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Sobre o código genético, é CORRETO afirmar que é 'degenerado' porque:",
        "options": {
            "A": "Vários códons codificam o mesmo aminoácido, variando na terceira base.",
            "B": "Cada códon codifica diversos aminoácidos, exigindo controle laboratorial.",
            "C": "Cada aminoácido possui um único códon, o que limita o uso em degradação.",
            "D": "O código varia entre espécies, embora a eficiência analítica seja igual.",
            "E": "Aminoácidos sem códon reduzem a estabilidade proteica em testes in vitro."
        },
        "correct": "A",
        "explanation": "A correta é a A porque a degenerescência permite que múltiplos códons codifiquem o mesmo aminoácido. As outras falham pois: B geraria proteínas instáveis por ambiguidade, C descreve um código rígido e não-degenerado, D ignora a natureza universal do código e E desconsidera a existência de códons de parada.",
        "difficulty": "fácil"
    },
    {
        "id": 502,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Na eletroforese, o DNA migra em direção ao:",
        "options": {
            "A": "Cátodo (polo negativo), por ter carga positiva e eficiência variável.",
            "B": "Ambos os polos, demandando validação rigorosa por métodos ortogonais.",
            "C": "Estático, por influência da estabilidade in vitro e ponto de aplicação.",
            "D": "Ânodo (polo positivo), pois o grupo fosfato confere carga negativa.",
            "E": "Lateralmente ao campo elétrico, inviabilizando o uso em amostras ruins."
        },
        "correct": "D",
        "explanation": "A correta é a D porque os grupos fosfato do DNA possuem carga negativa, atraindo-os ao polo positivo. As outras falham pois: A inverte a polaridade dos polos elétricos, B sugere movimento aleatório bidirecional, C nega o princípio básico da eletroforese e E descreve uma trajetória física impossível no gel.",
        "difficulty": "fácil"
    },
    {
        "id": 503,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Em relação à extração de DNA genômico para sequenciamento de nova geração, assinale a alternativa CORRETA:",
        "options": {
            "A": "A razão A260/A280 basta para avaliar a integridade pré-analítica.",
            "B": "O método de beads magnéticas é automatizável e permite size selection.",
            "C": "A extração por fenol-clorofórmio gera DNA menor que o método de sílica.",
            "D": "O Qubit avalia integridade do DNA, seguindo padrões de segurança e rigor.",
            "E": "Tubos com heparina superam o EDTA na preservação para fins de bancada."
        },
        "correct": "B",
        "explanation": "A correta é a B porque esferas magnéticas permitem purificação automatizada e seleção de tamanho específica. As outras falham pois: A não detecta fragmentação do DNA, C preserva fragmentos longos indesejados, D quantifica massa mas não integridade e E inibe a polimerase na PCR.",
        "difficulty": "fácil"
    },
    {
        "id": 504,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Sobre o sequenciamento Illumina (Sequencing by Synthesis), é CORRETO afirmar:",
        "options": {
            "A": "Clusters são gerados por PCR em emulsão, exigindo controles de reação.",
            "B": "O paired-end lê moléculas distintas, limitando a reprodutibilidade.",
            "C": "Nucleotídeos têm terminadores reversíveis que garantem base única por ciclo.",
            "D": "Quatro bases entram juntas, exigindo calibração rigorosa de todo o método.",
            "E": "Erros dominantes são indels sensíveis ao pH e fatores pré-analíticos."
        },
        "correct": "C",
        "explanation": "A correta é a C porque terminadores reversíveis garantem a incorporação de apenas uma base por ciclo. As outras falham pois: A utiliza amplificação em ponte (bridge), B analisa extremidades da mesma molécula, D adiciona nucleotídeos de forma sequencial e E apresenta majoritariamente erros de substituição.",
        "difficulty": "fácil"
    },
    {
        "id": 505,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Considerando o preparo de biblioteca para WGS Illumina, descreva CORRETAMENTE a sequência de etapas:",
        "options": {
            "A": "End repair, fragmentação, ligação e A-tailing com eficiência variável.",
            "B": "Fragmentação, A-tailing, end repair e ligação com sensibilidade ao pH.",
            "C": "Fragmentação, ligação, end repair e A-tailing com estabilidade in vitro.",
            "D": "Fragmentação, end repair, A-tailing, ligação, seleção de tamanho e PCR.",
            "E": "Ligação, fragmentação, end repair e A-tailing em amostras degradadas."
        },
        "correct": "D",
        "explanation": "A correta é a D pois segue a ordem bioquímica necessária para preparar as extremidades e ligar adaptadores. As outras falham pois: A, B, C e E propõem etapas fora de ordem lógica funcional.",
        "difficulty": "fácil"
    },
    {
        "id": 506,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Qual métrica de controle de qualidade em NGS indica a MAIOR preocupação com a qualidade dos dados?",
        "options": {
            "A": "Tamanho de insert com distribuição unimodal centralizada em 380 bp.",
            "B": "Taxa de duplicação de 45% em biblioteca com amplificação por PCR.",
            "C": "Cobertura média de 32x, limitando a reprodutibilidade entre os lotes.",
            "D": "Taxa de mapeamento de 97% influenciada pela estabilidade da amostra.",
            "E": "85% das bases com score Phred superior a Q30 na fase pré-analítica."
        },
        "correct": "B",
        "explanation": "A correta é a B porque altas taxas de duplicação indicam baixa diversidade da biblioteca original. As outras falham pois: A indica distribuição de tamanho ideal, C apresenta cobertura estatisticamente suficiente, D mostra excelente alinhamento ao genoma e E reflete alta precisão nas bases.",
        "difficulty": "fácil"
    },
    {
        "id": 507,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Segundo os princípios ALCOA+ de integridade de dados laboratoriais, representa uma violação GRAVE:",
        "options": {
            "A": "Corrigir erro com traço único, preservando o uso em amostras ruins.",
            "B": "Arquivar dados no LIMS com audit trail, requerendo rigor analítico.",
            "C": "Manter registros em caderno assinado, aumentando o tempo de manejo.",
            "D": "Registrar resultados no dia seguinte com base em notas descartáveis.",
            "E": "Realizar calibração de pipetas, demandando métodos ortogonais extras."
        },
        "correct": "D",
        "explanation": "A correta é a D porque viola o princípio de contemporaneidade, onde registros devem ser feitos no ato. As outras falham pois: A é a prática padrão de correção, B assegura rastreabilidade digital, C é aceitável se datado e E é manutenção obrigatória.",
        "difficulty": "fácil"
    },
    {
        "id": 508,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Em relação aos níveis de biossegurança, assinale a alternativa CORRETA:",
        "options": {
            "A": "A CSB Classe II Tipo A2 protege operador, produto e ambiente de riscos.",
            "B": "Em NB-2, a CSB é obrigatória na pipetagem sob condições controladas.",
            "C": "Sangue humano exige NB-3, demandando validação por métodos de bancada.",
            "D": "Autoclavação a 100°C é o padrão, com sensibilidade a variações de pH.",
            "E": "O acesso ao laboratório NB-2 é livre, apresentando sensibilidade ao pH."
        },
        "correct": "A",
        "explanation": "A correta é a A porque a CSB Classe II protege simultaneamente o usuário, o produto e o ambiente. As outras falham pois: B não é obrigatória para toda pipetagem, C é classificado como risco nível 2, D requer 121 graus Celsius e E exige acesso restrito controlado.",
        "difficulty": "fácil"
    },
    {
        "id": 509,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Em relação à ética em pesquisa genômica, assinale a alternativa CORRETA segundo a regulamentação brasileira:",
        "options": {
            "A": "Dados genéticos são comuns pela LGPD, o que aumenta o tempo de análise.",
            "B": "O direito de não saber sobre resultados deve ser respeitado no TCLE.",
            "C": "O Relatório Belmont possui quatro princípios para otimização do estudo.",
            "D": "Aprovação por um único CEP basta, requerendo calibração dos métodos.",
            "E": "O consentimento amplo é proibido, exigindo calibração dos métodos usados."
        },
        "correct": "B",
        "explanation": "A correta é a B porque garante a autonomia do paciente sobre informações genéticas indesejadas. As outras falham pois: A classifica DNA como dado sensível, C possui apenas três princípios fundamentais, D requer aprovação do sistema CEP/CONEP e E é permitido sob condições específicas.",
        "difficulty": "fácil"
    },
    {
        "id": 510,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "Sobre o Sistema Único de Saúde (SUS) e a genômica em saúde pública, assinale a alternativa CORRETA:",
        "options": {
            "A": "Equidade é acesso idêntico e uniforme, com estabilidade in vitro.",
            "B": "Participação social é restrita a médicos, exigindo controles internos.",
            "C": "Universalidade exclui estrangeiros, o que inviabiliza amostras ruins.",
            "D": "Integralidade foca apenas em curas, limitando a reprodutibilidade.",
            "E": "O Programa Genomas SUS cria um banco de referência da população nacional."
        },
        "correct": "E",
        "explanation": "A correta é E porque o programa visa mapear a variabilidade genética brasileira para medicina de precisão. As outras falham pois: A confunde equidade com igualdade técnica, B restringe a participação popular garantida por lei, C nega o acesso universal do SUS, D ignora a prevenção e promoção da saúde.",
        "difficulty": "fácil"
    },
    {
        "id": 600,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "No pipeline GATK Best Practices para chamada de variantes em WGS, qual é a função da etapa de BQSR?",
        "options": {
            "A": "Filtrar variantes com VQSR, limitando o uso de recursos computacionais.",
            "B": "Recalibrar scores de qualidade, corrigindo vieses da plataforma.",
            "C": "Remover reads duplicados do BAM, inviabilizando a montagem de dados.",
            "D": "Recanalisar reads no genoma, limitando os recursos de computação.",
            "E": "Normalizar a cobertura, exigindo etapa prévia para mitigar artefatos."
        },
        "correct": "B",
        "explanation": "A correta é B porque o BQSR ajusta os escores de qualidade baseados em erros sistemáticos do sequenciador. As outras falham pois: A refere-se à filtragem de variantes pós-chamada, C descreve a etapa de MarkDuplicates, D confunde com realinhamento local, E trata de normalização quantitativa inexistente no BQSR.",
        "difficulty": "médio"
    },
    {
        "id": 601,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Sobre o algoritmo do GATK HaplotypeCaller, é CORRETO afirmar:",
        "options": {
            "A": "O modo GVCF registra só variantes, gerando falsos positivos no controle.",
            "B": "O VQSR é automático, reduzindo o poder preditivo de modelos comuns.",
            "C": "Conta reads com modelo binomial, exigindo o ajuste de filtros no software.",
            "D": "Monta haplótipos locais via grafos de De Bruijn e usa modelo bayesiano.",
            "E": "Requer BAMs não ordenados, exigindo alto processamento e normalização."
        },
        "correct": "D",
        "explanation": "A correta é D pois o algoritmo reconstrói haplótipos locais via grafos de De Bruijn e aplica verossimilhança bayesiana. As outras falham pois: A o GVCF registra todos os sítios, B VQSR é um processo separado, C o modelo principal não é puramente binomial, E exige BAMs estritamente ordenados e indexados.",
        "difficulty": "fácil"
    },
    {
        "id": 602,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Interprete a linha VCF: chr17 43093449 rs80357713 G A 8500 PASS DP=60;AF=0.5 GT:DP:AD:GQ 0/1:60:30,30:99",
        "options": {
            "A": "Variante homozigota, reduzindo o poder preditivo em recursos limitados.",
            "B": "Dois alelos alternativos, exigindo normalização e ajuste de parâmetros.",
            "C": "Variante heterozigota (G>A) com 30 reads em cada alelo e passe no filtro.",
            "D": "Variante de baixa qualidade, gerando falsos positivos se não corrigida.",
            "E": "Variante não filtrada com frequência de 50%, reduzindo o poder preditivo."
        },
        "correct": "C",
        "explanation": "A correta é C porque GT 0/1 indica heterozigose e AD 30,30 mostra o equilíbrio de reads. As outras falham pois: A descreve homozigose (1/1), B alelos múltiplos seriam 1/2, D o score 8500 é altíssimo, E a flag PASS indica filtragem bem-sucedida.",
        "difficulty": "difícil"
    },
    {
        "id": 603,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "Sobre os formatos de arquivo em bioinformática genômica, assinale a alternativa CORRETA:",
        "options": {
            "A": "O CRAM armazena alinhamentos sem referência, exigindo alto processamento.",
            "B": "O formato BED é 1-based, gerando falsos positivos estatísticos no dado.",
            "C": "A flag SAM 0x400 identifica reads duplicados por PCR ou causas ópticas.",
            "D": "O MAPQ indica a probabilidade de o read ter sido sequenciado correto.",
            "E": "O BAM é texto comprimido com gzip, gerando falsos positivos estatísticos."
        },
        "correct": "C",
        "explanation": "A correta é C porque a flag hexadecimal 0x400 (1024) sinaliza duplicatas de PCR ou óticas. As outras falham pois: A CRAM requer referência externa, B BED utiliza coordenadas 0-based, D MAPQ refere-se ao mapeamento e não à base, E BAM é binário.",
        "difficulty": "médio"
    },
    {
        "id": 604,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "Em um GWAS com 8 milhões de SNPs testados, qual é o limiar de significância genômica e qual a justificativa correta?",
        "options": {
            "A": "p < 0,05 como nível padrão, exigindo normalização e correção de artefato.",
            "B": "p < 1 × 10⁻¹⁰ como limiar arbitrário, reduzindo o poder preditivo usado.",
            "C": "p < 5 × 10⁻⁸ como correção de Bonferroni para 1 milhão de testes em LD.",
            "D": "p < 0,001 como correção conservadora, aumentando o consumo de recursos.",
            "E": "p < 5 × 10⁻² como FDR, seguindo abordagens comuns de modelos estatísticos."
        },
        "correct": "C",
        "explanation": "A correta é C pois considera o desequilíbrio de ligação que reduz os testes independentes a 1 milhão. As outras falham pois: A usa p-value nominal insuficiente, B define limiar sem base biológica, D é arbitrariamente conservadora, E utiliza FDR inapropriado para GWAS clássico.",
        "difficulty": "médio"
    },
    {
        "id": 605,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "Sobre a Análise de Componentes Principais (PCA) em genômica, assinale a alternativa CORRETA:",
        "options": {
            "A": "Requer equilíbrio HW perfeito, restringindo a aplicação em grandes bancos.",
            "B": "Uso exclusivo em RNA-Seq, com impacto avaliado no controle de qualidade.",
            "C": "Componentes capturam a ancestralidade e controlam a estratificação.",
            "D": "Ineficaz em populações miscigenadas, inviabilizando a montagem de dados.",
            "E": "O fator lambda ideal é zero, aumentando o consumo de recursos extras."
        },
        "correct": "C",
        "explanation": "A correta é C porque os PCs refletem a estrutura populacional, essencial para evitar falsas associações. As outras falham pois: A independe de HWE total, B aplica-se a DNA e RNA, D é ideal justamente para populações miscigenadas, E lambda ideal é um.",
        "difficulty": "fácil"
    },
    {
        "id": 606,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "Em uma população em equilíbrio de Hardy-Weinberg, a frequência do alelo recessivo é q = 0,02. Qual é a frequência esperada de portadores heterozigotos?",
        "options": {
            "A": "1,96%.",
            "B": "0,04%.",
            "C": "96,04%.",
            "D": "4,0%.",
            "E": "3,92%."
        },
        "correct": "E",
        "explanation": "A correta é E conforme o cálculo 2pq onde 2*0.98*0.02 resulta em 0.0392. As outras falham pois: A é apenas pq, B é q², C é p², D é aproximação incorreta.",
        "difficulty": "médio"
    },
    {
        "id": 607,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "Sobre o Fst (Fixation Index) em populações humanas, assinale a alternativa CORRETA:",
        "options": {
            "A": "Medida de heterozigosidade individual, avaliada no controle de qualidade.",
            "B": "Africanos têm menor diversidade, reduzindo o poder preditivo do algoritmo.",
            "C": "O Fst global humano de 0,12 indica alta variação dentro das populações.",
            "D": "Fst zero significa alelos fixados, aumentando o consumo de recursos.",
            "E": "O Fst global de 0,85 indica alta diferença, exigindo indexação prévia."
        },
        "correct": "C",
        "explanation": "A correta é C porque um Fst de 12% indica que a maior parte da variabilidade é compartilhada. As outras falham pois: A mede divergência entre grupos, B africanos possuem maior diversidade, D Fst zero indica populações idênticas, E Fst 0.85 é irreal para humanos.",
        "difficulty": "médio"
    },
    {
        "id": 608,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Sobre segurança de dados genômicos, assinale a alternativa CORRETA:",
        "options": {
            "A": "Repositórios abertos são seguros, requerendo indexação prévia de busca.",
            "B": "A criptografia AES-256 protege dados locais e o TLS protege o trânsito.",
            "C": "O princípio do menor privilégio é irrelevante, exigindo indexação prévia.",
            "D": "A pseudonimização torna dados anônimos, limitando recursos de computação.",
            "E": "Backup 3-2-1 mantém 3 cópias no mesmo servidor, exigindo indexação prévia."
        },
        "correct": "B",
        "explanation": "A correta é B pois combina criptografia de dados em repouso e em trânsito. As outras falham pois: A expõe dados sensíveis, C o privilégio mínimo é pilar de segurança, D pseudonimização permite reidentificação, E o backup exige mídias diferentes.",
        "difficulty": "fácil"
    },
    {
        "id": 609,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "Sobre vocabulários controlados e ontologias em genômica, assinale a alternativa CORRETA:",
        "options": {
            "A": "Princípios FAIR são só para PDFs, limitando recursos de computação.",
            "B": "Sequence Ontology descreve proteínas, exigindo normalização prévia bruta.",
            "C": "A HPO padroniza fenótipos clínicos para priorizar variantes candidatas.",
            "D": "Gene Ontology classifica variantes, seguindo modelos de probabilidade.",
            "E": "O padrão HL7 FHIR é um sequenciador Illumina, exigindo ajuste de software."
        },
        "correct": "C",
        "explanation": "A correta é a C porque a HPO padroniza termos clínicos para facilitar a análise computacional de variantes. As outras falham pois: A foca em reutilização de dados digitais, B cataloga elementos de sequência genômica, D foca em funções biológicas proteicas e E é um protocolo de troca de dados.",
        "difficulty": "fácil"
    },
    {
        "id": 610,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "Sobre processos ETL aplicados a bancos de dados genômicos multicêntricos, é CORRETO afirmar:",
        "options": {
            "A": "Carga incremental é melhor que completa por adicionar apenas novos dados.",
            "B": "Apache Airflow gera FASTQs, o que restringe o uso em grandes bancos.",
            "C": "Normalização em VCF é opcional, com impacto no controle de qualidade.",
            "D": "O Hail é exclusivo para visualização, com mitigação via filtros de qualidade.",
            "E": "Validação de dados é desnecessária, restringindo o uso em grandes bancos."
        },
        "correct": "A",
        "explanation": "Bancos genômicos têm Terabytes. Um processo ETL moderno (ex: usando Apache Airflow e Spark) faz carga de dados incremental para otimizar custo e tempo de nuvem.",
        "difficulty": "fácil"
    },
    {
        "id": 700,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Em um laboratório de genômica, um lote de amostras em tubos de EDTA apresentou coagulação parcial. A causa mais provável é:",
        "options": {
            "A": "Uso de agulhas 25G e  permitindo a otimização do protocolo em condições controladas.",
            "B": "Homogeneização insuficiente após a coleta — os tubos não foram invertidos.",
            "C": "Centrifugação prematura além disso,  um fator técnico que deve ser monitorado na fase pré-analítica.",
            "D": "Excesso de EDTA o que resulta em  sendo um procedimento que depende de validação adicional.",
            "E": "Transporte em temperatura muito baixa,  apresentando sensibilidade a variações de pH no tampão."
        },
        "correct": "B",
        "explanation": "Tubos de EDTA requerem inversão suave (8 a 10 vezes) imediatamente após a coleta para evitar coagulação.",
        "difficulty": "fácil"
    },
    {
        "id": 701,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Na extração de DNA por beads magnéticas, a etapa de secagem das beads antes da eluição deve ser controlada porque:",
        "options": {
            "A": "Causa degradação por oxigênio, com eficiência variável em laboratório.",
            "B": "Beads muito secas dificultam a liberação do DNA, reduzindo o rendimento.",
            "C": "Beads úmidas geram excesso de RNA, fator monitorado na fase pré-analítica.",
            "D": "Gera DNA de alto peso molecular, aumentando o tempo de manipulação.",
            "E": "Contamina com proteínas, atuando na preservação secundária da amostra."
        },
        "correct": "B",
        "explanation": "Over-drying faz o DNA ficar irreversivelmente preso à matriz da bead.",
        "difficulty": "fácil"
    },
    {
        "id": 702,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "DNA extraído de buffy coat apresenta A260/280 = 1,55 e A260/230 = 0,9. A interpretação CORRETA é:",
        "options": {
            "A": "DNA de alta qualidade, limitando a reprodutibilidade entre os lotes.",
            "B": "Contaminado com RNA, exigindo adequação aos padrões de segurança e pH.",
            "C": "DNA degradado, requerendo adequação aos padrões técnicos de segurança.",
            "D": "Valores normais para beads, embora a eficiência analítica seja variável.",
            "E": "DNA com proteínas e sais/solventes, necessitando de nova purificação."
        },
        "correct": "E",
        "explanation": "A pureza ideal é 1.8 para 260/280 (proteínas) e 2.0-2.2 para 260/230 (sais caotrópicos e fenóis).",
        "difficulty": "médio"
    },
    {
        "id": 800,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O splicing do pré-mRNA é realizado pelo:",
        "options": {
            "A": "Proteassomo além disso,  o que inviabiliza seu uso em amostras severamente degradadas.",
            "B": "Complexo do poro nuclear além disso,  o que inviabiliza seu uso em amostras severamente degradadas.",
            "C": "Ribossomo o que resulta em  o que inviabiliza seu uso em amostras severamente degradadas.",
            "D": "Spliceossomo, um complexo ribonucleoprotéico composto por snRNPs.",
            "E": "DNA polimerase além disso,  sendo aplicável principalmente em cenários controlados."
        },
        "correct": "D",
        "explanation": "O spliceossomo é formado por pequenas ribonucleoproteínas nucleares (snRNPs) U1, U2, U4, U5 e U6, que reconhecem e removem os íntrons do pré-mRNA.",
        "difficulty": "fácil"
    },
    {
        "id": 801,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "A transcriptase reversa é uma enzima que:",
        "options": {
            "A": "Sintetiza DNA a partir de RNA, sendo originalmente descrita em retrovírus.",
            "B": "Sintetiza RNA a partir de DNA, exigindo adequação aos padrões de segurança.",
            "C": "Liga aminoácidos ao tRNA, inviabilizando o uso em amostras degradadas.",
            "D": "Degrada RNA mensageiro, exigindo uso de controles internos na reação.",
            "E": "Replica DNA nuclear, demandando validação por métodos de bancada."
        },
        "correct": "A",
        "explanation": "A transcriptase reversa (reverse transcriptase) catalisa a síntese de DNA complementar (cDNA) usando RNA como molde, processo fundamental em retrovírus e amplamente utilizado em técnicas moleculares.",
        "difficulty": "fácil"
    },
    {
        "id": 802,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O processo de tradução requer:",
        "options": {
            "A": "Apenas ATP como fonte de energia,  sendo aplicável principalmente em cenários controlados.",
            "B": "Ribossomos, mRNA, tRNAs carregados com aminoácidos, e energia (GTP e ATP).",
            "C": "Apenas DNA e RNA polimerase,  que atua de forma secundária na preservação da amostra.",
            "D": "Apenas ribossomos e mRNA e  o que requer calibração rigorosa dos métodos utilizados.",
            "E": "DNA polimerase e primers,  limitando a reprodutibilidade dos resultados entre lotes."
        },
        "correct": "B",
        "explanation": "A tradução é um processo complexo que requer múltiplos componentes: ribossomos (sítios P, A e E), mRNA como molde, tRNAs aminoacilados, fatores de tradução e energia na forma de GTP e ATP.",
        "difficulty": "fácil"
    },
    {
        "id": 803,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "A estrutura da cromatina é organizada em níveis hierárquicos. O nucleossomo representa:",
        "options": {
            "A": "DNA livre no núcleo, sendo aplicável em cenários laboratoriais controlados.",
            "B": "DNA mitocondrial, embora a eficiência analítica varie em laboratório.",
            "C": "Apenas a histona H1, sendo um procedimento com dependência de validação.",
            "D": "Toda a cromatina condensada, limitando a reprodutibilidade dos resultados.",
            "E": "Cerca de 147 pb de DNA enrolados ao redor de um octâmero de histonas."
        },
        "correct": "E",
        "explanation": "O nucleossomo é a unidade básica da cromatina, consistindo em ~147 pb de DNA enrolados 1,65 vezes ao redor de um core de histonas (2 cópias de H2A, H2B, H3 e H4).",
        "difficulty": "médio"
    },
    {
        "id": 805,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "A replicação do DNA é semiconservativa, o que significa que:",
        "options": {
            "A": "O DNA não é replicado, característica que influencia a estabilidade.",
            "B": "Apenas uma fita é replicada, exigindo adequação a padrões de segurança.",
            "C": "Cada molécula filha contém uma fita original e uma fita recém-sintetizada.",
            "D": "Ocorre apenas durante a mitose, atuando na preservação da amostra.",
            "E": "Ambas as fitas são novas, apresentando sensibilidade a variações de pH."
        },
        "correct": "C",
        "explanation": "A replicação semiconservativa foi demonstrada no experimento de Meselson-Stahl, onde cada nova molécula de DNA contém uma fita parental (conservada) e uma fita nova.",
        "difficulty": "fácil"
    },
    {
        "id": 806,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A quantificação por fluorimetria (Qubit) é preferida sobre espectrofotometria (NanoDrop) para bibliotecas NGS porque:",
        "options": {
            "A": "Funciona com baixo volume, mas reduz a reprodutibilidade dos lotes.",
            "B": "É mais barata, porém restrita a ambientes laboratoriais controlados.",
            "C": "Avalia a integridade do DNA e exige o uso de controles na reação.",
            "D": "É mais ágil, contudo demanda validação extra no fluxo de trabalho.",
            "E": "Detecta dsDNA por fluorescência, sem interferência de contaminantes."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o Qubit utiliza corantes específicos para quantificar dsDNA com alta precisão. As outras falham pois: A aumenta a reprodutibilidade, B é geralmente mais caro, C não mede integridade e D requer maior tempo de preparo.",
        "difficulty": "fácil"
    },
    {
        "id": 807,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O TapeStation/Bioanalyzer é usado para avaliar:",
        "options": {
            "A": "Mede apenas a concentração, sendo ineficaz para amostras degradadas.",
            "B": "Analisa a pureza espectral em condições de laboratório controladas.",
            "C": "Avalia a integridade e o tamanho dos fragmentos via eletroforese.",
            "D": "Estuda a atividade enzimática, exigindo maior tempo de manipulação.",
            "E": "Identifica contaminação bacteriana em ambientes de teste controlados."
        },
        "correct": "C",
        "explanation": "A correta é a C pois a eletroforese capilar determina o tamanho e a integridade da amostra. As outras falham pois: A avalia degradação, B pureza é espectrofotométrica, D analisa DNA e E não detecta bactérias.",
        "difficulty": "médio"
    },
    {
        "id": 808,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A bridge amplification na flow cell Illumina tem como objetivo:",
        "options": {
            "A": "Sequenciar as bases conforme as normas de segurança vigentes.",
            "B": "Gerar clusters clonais para ampliar o sinal de fluorescência.",
            "C": "Filtrar contaminantes presentes em amostras muito degradadas.",
            "D": "Ligar os adaptadores para auxiliar na preservação da amostra.",
            "E": "Realizar a fragmentação do DNA por meio de validação técnica."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a amplificação clonal em ponte permite a visualização do sinal fluorescente. As outras falham pois: A sequenciamento é posterior, C não filtra reagentes, D adaptadores precedem ponte e E fragmentação é preparatória.",
        "difficulty": "fácil"
    },
    {
        "id": 809,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O score Phred Q30 significa que a base sequenciada tem:",
        "options": {
            "A": "30% de conteúdo GC o que resulta em  permitindo a otimização do protocolo em condições controladas.",
            "B": "99,9% de acurácia (1 erro em 1000).",
            "C": "30× cobertura o que resulta em  embora sua eficiência analítica possa variar no laboratório.",
            "D": "30 nucleotídeos de comprimento.",
            "E": "30% de chance de estar correta."
        },
        "correct": "B",
        "explanation": "A correta é a B pois Q30 indica 99,9% de acurácia ou 1 erro em mil bases. As outras falham pois: A GC é composição, C cobertura é profundidade, D Q30 é qualidade e E é 0,1% de erro.",
        "difficulty": "médio"
    },
    {
        "id": 810,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A etapa de A-tailing no preparo de biblioteca serve para:",
        "options": {
            "A": "Fragmentar o DNA utilizando protocolos em condições controladas.",
            "B": "Amplificar o DNA para garantir a estabilidade in vitro do material.",
            "C": "Purificar o DNA, minimizando variações de pH e reprodutibilidade.",
            "D": "Quantificar a biblioteca para assegurar a estabilidade dos lotes.",
            "E": "Inserir adenina em 3' para ligar adaptadores com cauda de timina."
        },
        "correct": "E",
        "explanation": "A correta é a E pois a adição de adenina permite a ligação de adaptadores com overhang T. As outras falham pois: A fragmentação é inicial, B não é amplificação, C purificação é etapa distinta e D quantificação é posterior.",
        "difficulty": "fácil"
    },
    {
        "id": 811,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "O controle negativo de extração (NTC) consiste em:",
        "options": {
            "A": "Amostra de DNA de referência em cenários de teste controlados.",
            "B": "Amostra com baixo teor de DNA e longo tempo de processamento.",
            "C": "Amostra com DNA conhecido que exige controles internos na reação.",
            "D": "Tubo vazio utilizado em protocolos de laboratórios controlados.",
            "E": "Mistura de reagentes de extração sem qualquer material biológico."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o NTC contém apenas reagentes para identificar contaminações no processo. As outras falham pois: A é controle positivo, B NTC não possui DNA, C possui template conhecido e D requer os reagentes químicos.",
        "difficulty": "fácil"
    },
    {
        "id": 812,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Em biossegurança, as precauções universais estabelecem que:",
        "options": {
            "A": "Tratar sangue e fluidos como materiais sempre infecciosos.",
            "B": "Aplicar apenas a amostras de hospital em estado degradado.",
            "C": "Restringir cuidados a sangue HIV+ em meios controlados.",
            "D": "Atribuir a segurança ao técnico via procedimentos validados.",
            "E": "Usar luvas de forma opcional conforme a saúde do doador."
        },
        "correct": "A",
        "explanation": "A correta é a A pois as precauções universais tratam todo material biológico como potencialmente infectante. As outras falham pois: B abrange qualquer material, C inclui todos patógenos, D são normas institucionais e E EPI é obrigatório.",
        "difficulty": "fácil"
    },
    {
        "id": 813,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "A rastreabilidade laboratorial é garantida por:",
        "options": {
            "A": "Apenas caderno de laboratório.",
            "B": "Identificação visual das amostras.",
            "C": "Uso de códigos de barra e LIMS.",
            "D": "Calibração de equipamentos.",
            "E": "Controle de temperatura."
        },
        "correct": "C",
        "explanation": "A correta é a C pois o sistema LIMS com códigos de barras assegura o histórico da amostra. As outras falham pois: A caderno é manual, B visual é impreciso, D calibração garante exatidão e E temperatura garante conservação.",
        "difficulty": "fácil"
    },
    {
        "id": 814,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "A validação de um método analítico deve demonstrar:",
        "options": {
            "A": "Precisão, acurácia, especificidade, limite de detecção e robustez.",
            "B": "Apenas facilidade de uso,  o que requer calibração rigorosa dos métodos utilizados.",
            "C": "Apenas velocidade, consequentemente,  requerendo adequação aos padrões de segurança vigentes.",
            "D": "Apenas custo-benefício o que resulta em  que atua de forma secundária na preservação da amostra.",
            "E": "Apenas precisão,  uma característica que influencia a estabilidade in vitro."
        },
        "correct": "A",
        "explanation": "A correta é a A pois a validação exige a demonstração de parâmetros de desempenho analítico rigorosos. As outras falham pois: B facilidade é subjetiva, C velocidade é operacional, D custo é financeiro e E requer múltiplos parâmetros.",
        "difficulty": "fácil"
    },
    {
        "id": 815,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "O TCLE (Termo de Consentimento Livre e Esclarecido) em pesquisa genômica deve incluir:",
        "options": {
            "A": "Dados sobre guarda, uso futuro, retirada e achados incidentais.",
            "B": "Riscos físicos monitorados durante a fase pré-analítica.",
            "C": "Métodos técnicos que exigem controles internos de reação.",
            "D": "Contatos dos pesquisadores sob monitoramento pré-analítico.",
            "E": "Objetivos do estudo visando a otimização em meio controlado."
        },
        "correct": "A",
        "explanation": "A correta é a A pois garante direitos do participante sobre seus dados e resultados futuros. As outras falham pois: B foca em ética, C omite detalhes técnicos internos, D prioriza autonomia e E visa proteção legal.",
        "difficulty": "fácil"
    },
    {
        "id": 817,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "A LGPD (Lei Geral de Proteção de Dados) classifica dados genéticos como:",
        "options": {
            "A": "Dados pessoais sensíveis que exigem proteção especial.",
            "B": "Informações anonimizadas com eficiência laboratorial variável.",
            "C": "Dados irrelevantes monitorados na etapa pré-analítica.",
            "D": "Dados de acesso público monitorados na fase pré-analítica.",
            "E": "Dados pessoais comuns que elevam o tempo de manipulação."
        },
        "correct": "A",
        "explanation": "A correta é a A pois a LGPD define dados genéticos como sensíveis no Art. 5º. As outras falham pois: B confunde classificação com técnica de anonimização, C ignora a alta relevância biológica, D viola o dever de sigilo legal e E subestima a proteção legal do dado.",
        "difficulty": "fácil"
    },
    {
        "id": 818,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "O princípio da equidade no SUS aplicado à genômica significa:",
        "options": {
            "A": "Padronização total por meio de procedimentos validados.",
            "B": "Prioridade para áreas ricas em cenários de teste controlados.",
            "C": "Acesso igualitário operado em ambientes controlados.",
            "D": "Investimento proporcional às necessidades de cada grupo.",
            "E": "Atendimento urbano validado por métodos de bancada."
        },
        "correct": "D",
        "explanation": "A correta é a D porque equidade foca em suprir necessidades desiguais para justiça social. As outras falham pois: A refere-se à padronização técnica, B privilegia grupos socioeconomicamente favorecidos, C descreve igualdade formal e E ignora a necessária descentralização do SUS.",
        "difficulty": "fácil"
    },
    {
        "id": 819,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A sonicação do DNA para preparo de biblioteca tem como vantagem:",
        "options": {
            "A": "Atua em DNA degradado sob calibração rigorosa dos métodos.",
            "B": "Gera fragmentação uniforme com baixo viés de GC.",
            "C": "Descarta o size selection sob monitoramento pré-analítico.",
            "D": "Reduz custos, mas exige calibração rigorosa dos processos.",
            "E": "Dispensa o controle de parâmetros e eleva a manipulação."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a sonicação mecânica gera quebras aleatórias e alta uniformidade. As outras falham pois: A prefere amostras íntegras, C ainda exige seleção de tamanho posterior, D envolve alto custo instrumental e E demanda controle rigoroso de parâmetros.",
        "difficulty": "fácil"
    },
    {
        "id": 820,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O paired-end sequencing fornece informação adicional sobre:",
        "options": {
            "A": "Informa sobre distância entre pontas e orientação do inserto.",
            "B": "Avalia a qualidade das bases por meio de métodos de bancada.",
            "C": "Mede a concentração da biblioteca com eficiência variável.",
            "D": "Monitora a temperatura seguindo padrões de segurança.",
            "E": "Verifica a pureza do DNA conforme as normas de segurança."
        },
        "correct": "A",
        "explanation": "A correta é a A porque o sequenciamento duplo mapeia as extremidades e orientação do inserto. As outras falham pois: B depende de sensores ópticos de base, C requer quantificação laboratorial prévia, D é um controle interno de hardware e E envolve espectrofotometria.",
        "difficulty": "fácil"
    },
    {
        "id": 950,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "O comando samtools view -h -f 2 file.bam exibe:",
        "options": {
            "A": "Exibe o cabeçalho, limitado a grandes bancos de dados.",
            "B": "Mostra reads em par correto (properly paired) com header.",
            "C": "Lista reads não mapeados filtrados por qualidade.",
            "D": "Exibe todos os reads exigindo normalização de dados.",
            "E": "Identifica reads duplicados restritos por poder computacional."
        },
        "correct": "B",
        "explanation": "A correta é a B pois -h inclui o cabeçalho e -f 2 filtra pares concordantes. As outras falham pois: A omite o filtro binário de reads, C refere-se à flag 4, D ignora a restrição do bitmask e E diz respeito à flag 1024.",
        "difficulty": "fácil"
    },
    {
        "id": 951,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "Para normalizar variantes em um arquivo VCF, o comando bcftools mais adequado é:",
        "options": {
            "A": "bcftools index além disso,  requerendo a indexação prévia para otimizar o tempo de busca.",
            "B": "bcftools view,  gerando falsos positivos se não corrigido estatisticamente.",
            "C": "bcftools stats e  sendo uma limitação inerente aos recursos computacionais modernos.",
            "D": "bcftools norm -m -any -f reference.fa.",
            "E": "bcftools merge o que resulta em  reduzindo o poder preditivo do algoritmo aplicado."
        },
        "correct": "D",
        "explanation": "A correta é a D pois o comando norm padroniza variantes e separa registros multialélicos. As outras falham pois: A apenas gera índices de busca, B filtra registros existentes, C produz relatórios estatísticos e E agrupa arquivos VCF distintos.",
        "difficulty": "fácil"
    },
    {
        "id": 952,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "Em Python com pandas, para filtrar variantes com AF > 0.05, o código seria:",
        "options": {
            "A": "df.select(AF > 0.05).",
            "B": "df[df['AF'] > 0.05].",
            "C": "df.where(AF < 0.05).",
            "D": "df.query(AF = 0.05).",
            "E": "df.filter(AF > 0.05)."
        },
        "correct": "B",
        "explanation": "A correta é a B pois utiliza a sintaxe de indexação booleana padrão do pandas. As outras falham pois: A não é um método de filtro condicional, C preenche valores falsos com NaNs, D usa sintaxe de atribuição inválida e E foca em rótulos.",
        "difficulty": "médio"
    },
    {
        "id": 953,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "O VQSR (Variant Quality Score Recalibration) do GATK utiliza:",
        "options": {
            "A": "Usa depth de cobertura aplicado a modelos probabilísticos.",
            "B": "Aplica machine learning com truth sets para recalibração.",
            "C": "Realiza análise de pedigree para grandes bancos de dados.",
            "D": "Checa frequências em bancos de referência externos.",
            "E": "Utiliza filtros fixos avaliados no controle de qualidade."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o VQSR aplica modelos estatísticos sobre conjuntos de variantes validadas. As outras falham pois: A isola apenas profundidade, C foca em herança familiar, D apenas consulta frequências e E opõe-se aos filtros manuais fixos.",
        "difficulty": "fácil"
    },
    {
        "id": 954,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "A anotação funcional de variantes utiliza bancos como:",
        "options": {
            "A": "Apenas RefSeq e  um aspecto computacional que aumenta o consumo de recursos.",
            "B": "Apenas dados experimentais próprios e  sendo necessário ajustar os parâmetros no software utilizado.",
            "C": "RefSeq, Ensembl, GENCODE para anotação gênica, e ClinVar, COSMIC para anotação clínica.",
            "D": "Apenas bases populacionais e  sendo uma limitação inerente aos recursos computacionais modernos.",
            "E": "Apenas literatura científica e  o que demanda alto poder de processamento em clusters HPC."
        },
        "correct": "C",
        "explanation": "A correta é a C pois integra bancos de estrutura gênica e bancos de relevância clínica. As outras falham pois: A é limitada a um banco, B ignora o conhecimento público, D foca apenas em frequências e E é insuficiente para automação.",
        "difficulty": "fácil"
    },
    {
        "id": 955,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "O conceito de 'read depth' (cobertura) em uma posição refere-se a:",
        "options": {
            "A": "Total de reads no arquivo, gerando erros de frequência.",
            "B": "Comprimento dos reads analisado no controle primário.",
            "C": "Qualidade média que reduz o poder preditivo do algoritmo.",
            "D": "Quantidade de reads que cobrem uma posição específica.",
            "E": "Distância entre pares avaliada no controle primário."
        },
        "correct": "D",
        "explanation": "A correta é a D pois profundidade mede a contagem de reads em um locus específico. As outras falham pois: A confunde com volume total de dados, B descreve o comprimento da sequência, C refere-se à acurácia de base e E indica tamanho do fragmento.",
        "difficulty": "fácil"
    },
    {
        "id": 956,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "O conceito de 'power' (poder estatístico) em um GWAS refere-se à:",
        "options": {
            "A": "Chance de detectar associação real (1-beta, erro tipo II).",
            "B": "Capacidade de processamento avaliada no controle primário.",
            "C": "Tamanho do arquivo aplicado em modelos probabilísticos.",
            "D": "Volume de SNPs testados sob filtros de qualidade.",
            "E": "Velocidade de execução via ajustes finos no software."
        },
        "correct": "A",
        "explanation": "A correta é a A porque mede a detecção de associações reais. As outras falham pois: B confunde com poder de processamento, C foca no armazenamento, D no quantitativo de SNPs e E na otimização algorítmica.",
        "difficulty": "fácil"
    },
    {
        "id": 957,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "O lambda genômico (λ) em GWAS mede:",
        "options": {
            "A": "Cobertura média que impede a montagem de dados.",
            "B": "Tempo de execução em clusters de alto desempenho (HPC).",
            "C": "Qualidade da referência corrigida por filtros.",
            "D": "Volume de variantes que reduz o poder preditivo final.",
            "E": "Inflação do qui-quadrado por estratificação ou vieses."
        },
        "correct": "E",
        "explanation": "A correta é a E porque quantifica desvios sistemáticos no GWAS. As outras falham pois: A foca em profundidade de leitura, B em latência computacional, C em fidelidade genômica e D em densidade variantes.",
        "difficulty": "médio"
    },
    {
        "id": 958,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "O desequilíbrio de ligação (LD) entre dois loci é máximo quando:",
        "options": {
            "A": "r² = 1 (linkage completo).",
            "B": "Os loci estão em cromossomos diferentes.",
            "C": "r² = 0 além disso,  o que restringe sua aplicação prática a grandes bancos de dados.",
            "D": "r² = 0,5,  reduzindo o poder preditivo do algoritmo aplicado.",
            "E": "A distância física é máxima."
        },
        "correct": "A",
        "explanation": "A correta é a A porque r²=1 representa a co-segregação perfeita. As outras falham pois: B sugere independência genética, C indica equilíbrio completo, D é ligação moderada e E implica dissociação física.",
        "difficulty": "fácil"
    },
    {
        "id": 959,
        "area": "Bioinformática",
        "subject": "Princípios de saúde pública e epidemiologia genética",
        "text": "Um polygenic risk score (PRS) é:",
        "options": {
            "A": "Score de variantes ponderadas que estima o risco genético.",
            "B": "Soma de alelos sob ajustes e limites computacionais.",
            "C": "Qualidade de sequenciamento sob normalização de dados.",
            "D": "Idade genética sob risco de falsos positivos em HPC.",
            "E": "Volume de mutações sob filtros e consumo de recursos."
        },
        "correct": "A",
        "explanation": "A correta é a A porque agrega riscos genéticos individuais ponderados. As outras falham pois: B foca em restrições de máquina, C em métricas técnicas, D em cronologia biológica e E em carga mutacional.",
        "difficulty": "fácil"
    },
    {
        "id": 960,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Em data governance de dados genômicos, o princípio FAIR significa:",
        "options": {
            "A": "Findable, Accessible, Interoperable, Reusable.",
            "B": "Federated, Automated, Integrated, Reproducible.",
            "C": "Fast, Accurate, Integrated, Reliable.",
            "D": "Free, Accessible, Interoperable, Reusable.",
            "E": "Filtered, Annotated, Indexed, Reviewed."
        },
        "correct": "A",
        "explanation": "A correta é a A porque segue os padrões internacionais de gestão. As outras falham pois: B troca termos por computação, C por performance, D por gratuidade e E por anotação.",
        "difficulty": "fácil"
    },
    {
        "id": 961,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "A Sequence Ontology (SO) descreve:",
        "options": {
            "A": "Apenas doenças o que resulta em  cujo impacto é avaliado durante o controle de qualidade primário.",
            "B": "Features de sequência biológica como genes, éxons, UTRs e variantes.",
            "C": "Apenas fenótipos clínicos,  reduzindo o poder preditivo do algoritmo aplicado.",
            "D": "Apenas populações,  cujo impacto é avaliado durante o controle de qualidade primário.",
            "E": "Apenas proteínas e  necessitando de anotação cruzada com bancos de referência."
        },
        "correct": "B",
        "explanation": "A correta é a B porque padroniza termos de elementos genômicos. As outras falham pois: A limita-se a patologias, C a sinais clínicos, D a demografia e E a proteômica.",
        "difficulty": "fácil"
    },
    {
        "id": 962,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "Apache Spark é utilizado em genômica para:",
        "options": {
            "A": "Coleta de amostras que distorce as frequências.",
            "B": "Cultura de células restrita a grandes bancos de dados.",
            "C": "Processamento distribuído de big data genômico em clusters.",
            "D": "Sequenciamento de DNA que reduz o poder preditivo final.",
            "E": "Visualização de variantes com alto consumo de recursos."
        },
        "correct": "C",
        "explanation": "A correta é a C porque distribui tarefas massivas em clusters. As outras falham pois: A é amostragem física, B é biologia celular, D é geração de dados e E é renderização.",
        "difficulty": "fácil"
    },
    {
        "id": 963,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "O formato CRAM difere do BAM porque:",
        "options": {
            "A": "Uso exclusivo em Sanger via ajustes finos no software.",
            "B": "Apenas reads não mapeados sob limites computacionais.",
            "C": "Compressão por referência, gerando arquivos menores.",
            "D": "Sem dados de qualidade sob restrições computacionais.",
            "E": "Formato de texto legível com risco de erros estatísticos."
        },
        "correct": "C",
        "explanation": "A correta é a C porque usa referencial para reduzir espaço. As outras falham pois: A é técnica de laboratório, B foca em desalinhados, D alega perda de dados e E cita legibilidade.",
        "difficulty": "fácil"
    },
    {
        "id": 964,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "A chamada de variantes somáticas difere da germinativa porque:",
        "options": {
            "A": "Apenas detecção de SNPs sem integração de dados extras.",
            "B": "Processo simplificado que exige ajustes no software.",
            "C": "Comparação tumor vs normal e análise de pureza tumoral.",
            "D": "Algoritmo idêntico com alto consumo de processamento.",
            "E": "Dispensa controle de qualidade sob limites computacionais."
        },
        "correct": "C",
        "explanation": "A correta é a C porque detecta mutações adquiridas via pareamento. As outras falham pois: A ignora complexidade genômica, B é processamento genérico, D assume germinativa e E ignora controle.",
        "difficulty": "fácil"
    },
    {
        "id": 965,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "A heritabilidade (h²) de um traço quantitativo representa:",
        "options": {
            "A": "Correlação entre gêmeos restrita a grandes bases de dados.",
            "B": "Idade de manifestação sob alto consumo de computação.",
            "C": "Número de genes envolvidos em grandes bancos de dados.",
            "D": "Variância fenotípica por fatores genéticos aditivos.",
            "E": "Percentual de DNA herdado sob ajustes de software."
        },
        "correct": "D",
        "explanation": "A correta é a D porque expressa a variância herdável aditivamente. As outras falham pois: A descreve estudo de gêmeos, B é início clínico, C é complexidade gênica e E é transmissão direta.",
        "difficulty": "fácil"
    },
    {
        "id": 1020,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A principal razão para utilizar tubo com EDTA-K₂ na coleta de sangue para extração de DNA é que o EDTA:",
        "options": {
            "A": "Estabiliza o DNA contra UV com eficiência variável.",
            "B": "Quela íons Ca2+ e Mg2+, inibindo DNases e coagulação.",
            "C": "Substitui a Proteinase K sob validação de bancada.",
            "D": "Impede a hemólise, sendo inviável em material degradado.",
            "E": "Eleva o rendimento via nucleases sob validação técnica."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o EDTA sequestra íons necessários para a atividade de nucleases e para o início da cascata de coagulação. As outras falham pois: A o EDTA não é protetor UV, C a proteinase K é essencial para digestão proteica, D ele não impede lise mecânica e E o EDTA inibe, não eleva, a atividade de nucleases.",
        "difficulty": "fácil"
    },
    {
        "id": 1021,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Na automação laboratorial com robôs de pipetagem, o principal risco de carry-over entre amostras é mitigado por:",
        "options": {
            "A": "Reduz velocidade sob monitoramento pré-analítico.",
            "B": "Eleva volume de reagentes sob validação de bancada.",
            "C": "Usa ponteiras fixas com eficiência variável em testes.",
            "D": "Processa uma amostra por vez sob normas de segurança.",
            "E": "Usa ponteiras descartáveis com filtro e sensor de coágulo."
        },
        "correct": "E",
        "explanation": "A correta é a E pois ponteiras descartáveis com filtro e sensores previnem fisicamente o transporte de aerossóis e contaminantes entre poços. As outras falham pois: A reduzir velocidade não impede a contaminação, B aumentar volume agrava o risco de transbordamento, C ponteiras fixas são a principal fonte de contaminação e D processar uma por uma é inviável em alta escala.",
        "difficulty": "fácil"
    },
    {
        "id": 1022,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Em um gel de agarose 0,8%, uma amostra de DNA genômico íntegro apresenta apenas smear difuso em região de baixo peso molecular (<1 kb). Isso indica:",
        "options": {
            "A": "Erro no gel sob validação de bancada e estabilidade.",
            "B": "Contaminação por RNA sob alto tempo de manipulação.",
            "C": "DNA degradado por DNases ou armazenamento incorreto.",
            "D": "DNA de alta qualidade sob procedimentos de validação.",
            "E": "Excesso de DNA sob protocolo em condições controladas."
        },
        "correct": "C",
        "explanation": "Gabarito: Letra B. O 'smear' (rastro) no fundo do gel significa que as longas fitas de DNA foram picotadas em pedaços muito pequenos, indicando degradação severa.",
        "difficulty": "médio"
    },
    {
        "id": 1023,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A razão pela qual bibliotecas PCR-free são preferidas para WGS de alta qualidade é:",
        "options": {
            "A": "Elimina o viés de PCR, gerando cobertura mais uniforme.",
            "B": "Reduz custos sob eficiência variável e calibração.",
            "C": "Dispensa fragmentação sob calibração e reprodutibilidade.",
            "D": "Exige menor input de DNA sob uso de controles internos.",
            "E": "Omite adaptadores sob monitoramento pré-analítico."
        },
        "correct": "A",
        "explanation": "A correta é a A pois a ausência de ciclos de PCR evita a representação desigual de regiões ricas em GC ou AT, garantindo cobertura linear. As outras falham pois: B bibliotecas sem PCR costumam ser mais caras e complexas, C a fragmentação física ou enzimática continua sendo necessária, D requerem massas maiores de DNA de entrada e E adaptadores são fundamentais para o sequenciamento.",
        "difficulty": "fácil"
    },
    {
        "id": 1024,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Sobre a Declaração de Helsinki, é CORRETO afirmar:",
        "options": {
            "A": "Criada pela Associação Médica Mundial sobre ética médica.",
            "B": "Foca na ética de pesquisas clínicas com seres humanos.",
            "C": "Trata exclusivamente de normas para a pesquisa animal.",
            "D": "Define que o bem-estar humano supera o interesse da ciência.",
            "E": "Proíbe integralmente a realização de pesquisas humanas."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o foco central da Declaração é estabelecer princípios éticos mundiais para pesquisas envolvendo seres humanos. As outras falham pois: A a AMM a criou, mas a definição foca no conteúdo ético, C ela não se aplica a animais, D o bem-estar é um princípio, não a definição e E ela regulamenta a pesquisa em vez de proibi-la.",
        "difficulty": "fácil"
    },
    {
        "id": 1025,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A seleção de tamanho por double-sided SPRI cleanup consiste em:",
        "options": {
            "A": "Uso de dois ratios bead:amostra para selecionar fragmentos.",
            "B": "Filtração em duas membranas com poros de tamanhos variados.",
            "C": "Uso de duas marcas diferentes de esferas magnéticas no kit.",
            "D": "Centrifugação seguida de precipitação com etanol absoluto.",
            "E": "Duas rodadas de eletroforese em gel de agarose de alta pureza."
        },
        "correct": "A",
        "explanation": "A correta é a A pois o método utiliza diferentes proporções de esferas e PEG para excluir seletivamente fragmentos muito grandes e muito pequenos. As outras falham pois: B utiliza propriedades magnéticas e não membranas porosas, C usa-se a mesma marca com volumes diferentes, D a separação ocorre por magnetismo e E não envolve géis ou correntes elétricas.",
        "difficulty": "fácil"
    },
    {
        "id": 1026,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "No conceito de 'saúde pública genômica' (public health genomics), o principal objetivo é:",
        "options": {
            "A": "Restringir o acesso a dados genômicos para fins acadêmicos.",
            "B": "Integrar a genômica na saúde pública para prevenção e cura.",
            "C": "Substituir todas as vacinas por terapias personalizadas.",
            "D": "Oferecer terapia gênica gratuita para toda a população.",
            "E": "Privatizar os serviços de genômica oferecidos pelo SUS."
        },
        "correct": "B",
        "explanation": "A correta é a B pois visa aplicar dados genômicos no sistema de saúde para melhorar o rastreamento e tratamento de populações. As outras falham pois: A o objetivo é a democratização do acesso, C genômica complementa imunizações em vez de substituí-las, D terapias gênicas não são o único foco da saúde pública e E busca-se a integração ao SUS e não a privatização.",
        "difficulty": "fácil"
    },
    {
        "id": 1027,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "A expressão 'walk-away time' em automação laboratorial refere-se ao:",
        "options": {
            "A": "Tempo de inatividade do equipamento por falhas técnicas.",
            "B": "Tempo que a máquina opera sem exigir intervenção humana.",
            "C": "Tempo que o operador leva para se deslocar ao laboratório.",
            "D": "Duração da pausa programada para o descanso do operador.",
            "E": "Intervalo de espera entre a entrega de dois resultados."
        },
        "correct": "B",
        "explanation": "A correta é a B pois representa o período em que o equipamento executa tarefas complexas de forma autônoma, liberando o técnico. As outras falham pois: A refere-se à disponibilidade e não a falhas, C o deslocamento do operador é irrelevante para a automação, D pausas de descanso são questões de RH e E o intervalo de resultados é o throughput.",
        "difficulty": "fácil"
    },
    {
        "id": 1028,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "A doença de Chagas, prevalente na região amazônica, é relevante para o Genomas SUS porque:",
        "options": {
            "A": "Previne completamente a infecção pelo Trypanosoma cruzi.",
            "B": "Estuda variantes do hospedeiro ligadas à gravidade da doença.",
            "C": "Demonstra que a doença não possui componente genético.",
            "D": "Ocorre apenas em populações sem nenhum tipo de miscigenação.",
            "E": "Substitui totalmente o diagnóstico sorológico tradicional."
        },
        "correct": "B",
        "explanation": "A correta é a B pois busca identificar por que certos perfis genéticos do hospedeiro levam a complicações cardíacas graves. As outras falham pois: A o sequenciamento não impede a picada do barbeiro, C a resposta imune à doença tem base genética, D a população amazônica é altamente miscigenada e E o diagnóstico padrão permanece sendo a sorologia clássica.",
        "difficulty": "fácil"
    },
    {
        "id": 1029,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "A etapa de 'QC final de biblioteca' antes do sequenciamento deve incluir MINIMAMENTE:",
        "options": {
            "A": "Consiste apenas na quantificação realizada via NanoDrop.",
            "B": "Inclui Qubit, perfil de tamanho e busca por dímeros.",
            "C": "Realiza exclusivamente a corrida em gel de agarose 3%.",
            "D": "Baseia-se apenas na inspeção visual dos tubos reagentes.",
            "E": "Exige o sequenciamento completo como etapa de pré-teste."
        },
        "correct": "B",
        "explanation": "A correta é a B pois exige a verificação precisa da concentração, do tamanho médio dos fragmentos e a ausência de subprodutos. As outras falham pois: A o NanoDrop não distingue DNA de adaptadores livres, C agarose comum não possui resolução para QC de precisão, D a análise é molecular e invisível a olho nu e E o sequenciamento é o destino após o QC.",
        "difficulty": "fácil"
    },
    {
        "id": 1030,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Sobre a relação entre alelo, gene e locus, é CORRETO afirmar:",
        "options": {
            "A": "Alelo e gene são termos considerados sinônimos na genética.",
            "B": "Locus é a posição, gene a unidade e alelo a variante.",
            "C": "Cada gene possui obrigatoriamente um único alelo possível.",
            "D": "Alelo refere-se unicamente às proteínas e não ao DNA.",
            "E": "Locus refere-se apenas às regiões não codificantes do DNA."
        },
        "correct": "B",
        "explanation": "A correta é a B pois locus é a posição física, gene a unidade funcional e alelo a versão sequencial. As outras falham pois: A confunde a unidade com sua variante, C ignora que polimorfismos geram múltiplos alelos, D define alelo como proteína em vez de DNA e E exclui erroneamente regiões codificantes.",
        "difficulty": "fácil"
    },
    {
        "id": 1031,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Em relação aos SNPs (Single Nucleotide Polymorphisms):",
        "options": {
            "A": "São variações que não podem ser detectadas por NGS.",
            "B": "São trocas de base única presentes em >1% da população.",
            "C": "São encontrados exclusivamente em populações europeias.",
            "D": "Ocorrem somente em regiões de éxons codificantes de RNA.",
            "E": "São variações genéticas obrigatoriamente patogênicas."
        },
        "correct": "B",
        "explanation": "A correta é a B pois SNPs são trocas de nucleotídeo único com frequência mínima populacional. As outras falham pois: A nega que NGS seja o padrão para detecção, C restringe variações globais a apenas uma etnia, D ignora SNPs em íntrons e regiões intergênicas e E assume erroneamente que toda variação é doença.",
        "difficulty": "fácil"
    },
    {
        "id": 1032,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "A contaminação de reagentes de extração de DNA com DNA exógeno (ex.: DNA humano do operador) é detectada por:",
        "options": {
            "A": "Identificada através da análise de perfil no TapeStation.",
            "B": "Detectada via controle negativo de extração (NTC).",
            "C": "Identificada pelo aumento na concentração medida no Qubit.",
            "D": "Monitorada pelo uso de controle positivo de extração.",
            "E": "Observada pela mudança de cor dos reagentes químicos."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o NTC (controle sem amostra) revela se reagentes contêm DNA estranho. As outras falham pois: A analisa apenas integridade do DNA, C mede massa total sem identificar a origem, D valida apenas se a reação funcionou e E espera mudança visual impossível em contaminações.",
        "difficulty": "fácil"
    },
    {
        "id": 1033,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "A 'phased assembly' em genômica refere-se à:",
        "options": {
            "A": "Consiste na separação exclusiva do DNA mitocondrial.",
            "B": "Determina a configuração de alelos em homólogos.",
            "C": "Refere-se à montagem de equipamentos em fases distintas.",
            "D": "Divide o sequenciamento em fases cronológicas de análise.",
            "E": "Classifica as amostras por normalização de dados brutos."
        },
        "correct": "B",
        "explanation": "A correta é a B pois phasing reconstrói os haplótipos herdados individualmente de cada progenitor. As outras falham pois: A foca em DNA mitocondrial fora do escopo, C confunde montagem genômica com etapas de maquinário, D confunde organização espacial com cronologia de laboratório e E reduz montagem complexa a mera normalização.",
        "difficulty": "fácil"
    },
    {
        "id": 1034,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A hemólise acentuada em amostra de sangue coletado é problemática para extração de DNA porque:",
        "options": {
            "A": "A hemoglobina liberada destrói o DNA dos leucócitos.",
            "B": "A hemoglobina liberada atua como inibidor da PCR.",
            "C": "Transforma o DNA em RNA durante o processamento químico.",
            "D": "Causa um aumento artificial na concentração total de DNA.",
            "E": "Provoca um aumento indesejado do volume plasmático."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o grupo heme da hemoglobina inibe a polimerase na PCR. As outras falham pois: A supõe destruição física do DNA inexistente, C sugere conversão química impossível de DNA em RNA, D confunde interferência técnica com ganho de massa e E foca em volume quando o problema é químico.",
        "difficulty": "fácil"
    },
    {
        "id": 1035,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Sobre controle externo de qualidade (proficiency testing) em laboratório de genômica:",
        "options": {
            "A": "Substitui integralmente o controle interno do laboratório.",
            "B": "Avalia o desempenho via análise de amostras cegas.",
            "C": "Consiste na calibração mecânica dos sequenciadores.",
            "D": "É realizado exclusivamente por instituições privadas.",
            "E": "É um processo opcional que não afeta a acreditação."
        },
        "correct": "B",
        "explanation": "A correta é a B pois ensaios de proficiência comparam resultados de amostras cegas entre laboratórios. As outras falham pois: A descarta o controle interno obrigatório, C confunde análise de amostra com manutenção técnica, D ignora órgãos públicos reguladores e E desconsidera exigências legais para acreditação.",
        "difficulty": "fácil"
    },
    {
        "id": 1036,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Na separação do buffy coat, a temperatura de centrifugação deve ser à temperatura ambiente (20-25°C) e não refrigerada porque:",
        "options": {
            "A": "A temperatura não exerce influência sobre a separação.",
            "B": "O frio causa agregação plaquetária e impede a separação.",
            "C": "A refrigeração é evitada para reduzir o gasto de energia.",
            "D": "O frio aumenta o rendimento final do DNA extraído.",
            "E": "A temperatura ambiente ajuda a esterilizar a amostra."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a refrigeração induz agregação plaquetária, contaminando a camada de leucócitos. As outras falham pois: A ignora o impacto físico da temperatura nas células, C prioriza custos sobre a qualidade da amostra, D inverte o efeito do frio no rendimento e E atribui função esterilizante à temperatura ambiente.",
        "difficulty": "fácil"
    },
    {
        "id": 1037,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Sobre o conceito de 'cobertura' em sequenciamento WGS:",
        "options": {
            "A": "Cobertura é sinônimo direto de cluster density no NGS.",
            "B": "Indica que cada base foi lida, em média, 30 vezes.",
            "C": "Significa que foram lidos 30 cromossomos diferentes.",
            "D": "Significa que apenas 30% do genoma foi sequenciado.",
            "E": "É um valor tecnicamente insuficiente para genômica."
        },
        "correct": "B",
        "explanation": "A correta é a B pois cobertura 30x significa que cada base foi sequenciada trinta vezes em média. As outras falham pois: A confunde densidade de cluster com profundidade, C confunde profundidade de leitura com número de cromossomos, D confunde profundidade com a extensão horizontal do genoma e E desconsidera que 30x é o padrão clínico.",
        "difficulty": "fácil"
    },
    {
        "id": 1038,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "O patrimônio genético brasileiro é regulado pela Lei nº 13.123/2015. No contexto do Genomas SUS:",
        "options": {
            "A": "A lei proíbe qualquer tipo de estudo em genômica humana.",
            "B": "Regula o acesso ao patrimônio genético de indígenas.",
            "C": "A lei não possui relevância para o projeto Genomas SUS.",
            "D": "Dispensa a necessidade de consentimento dos grupos.",
            "E": "Aplica-se unicamente ao estudo de plantas e animais."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a legislação regula o acesso e repartição de benefícios de grupos tradicionais. As outras falham pois: A proibiria a ciência em vez de regulá-la, C ignora o impacto ético em projetos nacionais, D descarta o consentimento livre e esclarecido e E limita a lei apenas à biodiversidade não humana.",
        "difficulty": "médio"
    },
    {
        "id": 1039,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "A diferença fundamental entre 'dados pseudonimizados' e 'dados anonimizados' é:",
        "options": {
            "A": "São termos considerados sinônimos na legislação brasileira.",
            "B": "Pseudonimizados são reversíveis; anonimizados não são.",
            "C": "Dados pseudonimizados são inerentemente mais seguros.",
            "D": "Apenas os dados anonimizados são regidos pela LGPD.",
            "E": "Pseudonimizados não utilizam nenhum tipo de criptografia."
        },
        "correct": "B",
        "explanation": "A correta é a B pois pseudonimização mantém vínculo reversível com a chave, enquanto anonimização é definitiva. As outras falham pois: A trata conceitos juridicamente distintos como iguais, C inverte a segurança de dados permanentes, D ignora que a LGPD disciplina ambos e E afirma ausência de criptografia na pseudonimização.",
        "difficulty": "fácil"
    },
    {
        "id": 1040,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "O erro tipo I (α) em testes de hipótese em genômica corresponde a:",
        "options": {
            "A": "Consiste em aceitar a hipótese alternativa corretamente.",
            "B": "Consiste em rejeitar a hipótese nula sendo ela verdadeira.",
            "C": "Refere-se ao poder estatístico total do teste aplicado.",
            "D": "Ocorre ao deixar de detectar uma variante existente.",
            "E": "Representa a probabilidade total de acerto do teste."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o erro tipo I é o falso positivo (rejeitar H0 verdadeira). As outras falham pois: A descreve acerto, C define 1-beta, D é erro tipo II e E é acurácia.",
        "difficulty": "fácil"
    },
    {
        "id": 1041,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Sobre a replicação do DNA, a enzima helicase tem como função:",
        "options": {
            "A": "Realizar a síntese de novos nucleotídeos na fita de DNA.",
            "B": "Desenrolar a dupla hélice, separando as fitas moldes.",
            "C": "Ligar os fragmentos de Okazaki durante a replicação.",
            "D": "Transportar aminoácidos específicos para o ribossomo.",
            "E": "Adicionar o cap 5' ao mRNA durante o processamento."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a helicase rompe as pontes de hidrogênio. As outras falham pois: A é polimerase, C é ligase, D é tRNA e E é processamento.",
        "difficulty": "fácil"
    },
    {
        "id": 1042,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "A mutação frameshift (mudança de quadro de leitura) é causada por:",
        "options": {
            "A": "Processo de metilação de bases em regiões promotoras.",
            "B": "Inserção ou deleção não múltipla de 3 bases no DNA.",
            "C": "Substituição de uma base por outra (transição simples).",
            "D": "Duplicação integral de um gene no genoma do indivíduo.",
            "E": "Inversão de um segmento cromossômico em larga escala."
        },
        "correct": "B",
        "explanation": "A correta é a B pois indels fora de múltiplo de 3 alteram o quadro. As outras falham pois: A é epigenética, C é pontual, D é dosagem e E é estrutural.",
        "difficulty": "fácil"
    },
    {
        "id": 1044,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "As histonas são proteínas fundamentais para a organização da cromatina. A acetilação de histonas está geralmente associada a:",
        "options": {
            "A": "Facilitação do processo de replicação do DNA nuclear.",
            "B": "Relaxamento da cromatina e ativação da transcrição.",
            "C": "Promoção do reparo de danos na fita de DNA celular.",
            "D": "Indução de translocações cromossômicas acidentais.",
            "E": "Compactação da cromatina e silenciamento gênico."
        },
        "correct": "B",
        "explanation": "A correta é a B pois acetilas neutralizam cargas positivas, relaxando o DNA. As outras falham pois: A é replicação, C é reparo, D é instabilidade e E é silenciamento.",
        "difficulty": "fácil"
    },
    {
        "id": 1045,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O processo pelo qual um gene pode gerar múltiplas proteínas diferentes é denominado:",
        "options": {
            "A": "Processo de tradução inversa de proteínas em DNA.",
            "B": "Combinação de diferentes éxons no mRNA maduro.",
            "C": "Evento de crossing-over durante a meiose celular.",
            "D": "Mecanismo de replicação alternativa do genoma.",
            "E": "Processo de retrotransposição de elementos genéticos."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o splicing alternativo combina diferentes éxons. As outras falham pois: A é inexistente, C é recombinação, D é inexistente e E é transposição.",
        "difficulty": "fácil"
    },
    {
        "id": 1046,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Sobre mutações somáticas vs germinativas:",
        "options": {
            "A": "Mutações somáticas são invariavelmente benignas.",
            "B": "Germinativas são herdáveis; somáticas não são.",
            "C": "Não existe diferença funcional entre os dois tipos.",
            "D": "Ambos os tipos de mutações são sempre herdáveis.",
            "E": "Mutações germinativas ocorrem apenas nos músculos."
        },
        "correct": "B",
        "explanation": "A correta é a B pois apenas mutações em gametas passam à prole. As outras falham pois: A causa câncer, C ignora hereditariedade, D erra somática e E erra local.",
        "difficulty": "fácil"
    },
    {
        "id": 1047,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O Mismatch Repair (MMR) é um sistema de reparo de DNA que:",
        "options": {
            "A": "Repara exclusivamente as quebras de fita dupla.",
            "B": "Corrige erros de pareamento após a replicação.",
            "C": "Remove dímeros de pirimidina causados por luz UV.",
            "D": "Realiza a remoção de bases metiladas no DNA.",
            "E": "Corrige erros ocorridos durante o splicing de RNA."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o MMR revisa pareamentos errados pós-replicação. As outras falham pois: A é quebra dupla, C é UV, D é base e E é RNA.",
        "difficulty": "fácil"
    },
    {
        "id": 1048,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "A herança mitocondrial difere da herança mendeliana porque:",
        "options": {
            "A": "Segue rigorosamente o padrão autossômico mendeliano.",
            "B": "É transmitida exclusivamente pela linhagem materna.",
            "C": "Está ligada unicamente ao cromossomo sexual Y.",
            "D": "Afeta apenas o DNA presente no núcleo da célula.",
            "E": "Segue o padrão de segregação clássica de 3 para 1."
        },
        "correct": "B",
        "explanation": "A correta é a B pois as mitocôndrias provêm do citoplasma do óvulo. As outras falham pois: A é mendeliana, C é paterna, D é nuclear e E é clássica.",
        "difficulty": "fácil"
    },
    {
        "id": 1049,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Sobre a telomerase:",
        "options": {
            "A": "Ativa em todas as células somáticas adultas.",
            "B": "Adiciona repetições teloméricas às extremidades 3'.",
            "C": "Atua removendo sequências das pontas cromossômicas.",
            "D": "Replica os telômeros de forma convencional.",
            "E": "Sua inibição é a causa primária do câncer."
        },
        "correct": "B",
        "explanation": "A correta é a B pois ela estende as pontas cromossômicas usando RNA molde. As outras falham pois: A é restrita, C é nuclease, D é telomerase e E é ativação.",
        "difficulty": "fácil"
    },
    {
        "id": 1050,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "O brometo de etídio, utilizado classicamente como corante de DNA em gel de agarose, está sendo substituído por corantes como SYBR Safe porque:",
        "options": {
            "A": "O brometo é um agente intercalante mutagênico e carcinogênico.",
            "B": "O SYBR Safe possui menor toxicidade e maior segurança no uso.",
            "C": "O brometo exige descarte químico especial por ser resíduo tóxico.",
            "D": "O SYBR Safe utiliza luz azul, reduzindo danos físicos ao DNA.",
            "E": "O brometo apresenta riscos severos à saúde e ao meio ambiente."
        },
        "correct": "B",
        "explanation": "A correta é a B pois resume o benefício principal de menor toxicidade. As outras falham pois: A define brometo, C é consequência, D é secundário e E é genérico.",
        "difficulty": "fácil"
    },
    {
        "id": 1051,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "A RNA polimerase II em eucariotos é responsável pela transcrição de:",
        "options": {
            "A": "Apenas tRNA, consequentemente,  que atua de forma secundária na preservação da amostra.",
            "B": "DNA,  sendo um procedimento que depende de validação adicional.",
            "C": "mRNA, e também a maioria dos snRNAs, miRNAs e lncRNAs.",
            "D": "Apenas rRNA,  o que demanda validação com métodos ortogonais de bancada.",
            "E": "Apenas RNA mitocondrial além disso,  sendo aplicável principalmente em cenários controlados."
        },
        "correct": "C",
        "explanation": "A correta é a C porque a Pol II transcreve mRNA e pequenos RNAs regulatórios. As outras falham pois: A pol III faz tRNA, B polimerases sintetizam RNA, D pol I faz rRNA e E mitocôndria usa polimerase própria.",
        "difficulty": "fácil"
    },
    {
        "id": 1052,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Na eletroforese, DNA migra em direção ao:",
        "options": {
            "A": "Ambos polos,  permitindo a otimização do protocolo em condições controladas.",
            "B": "Ânodo (polo positivo), pois os grupos fosfato conferem carga negativa ao DNA.",
            "C": "Não migra, consequentemente,  uma característica que influencia a estabilidade in vitro.",
            "D": "Cátodo (negativo), consequentemente,  o que requer calibração rigorosa dos métodos utilizados.",
            "E": "Lateralmente, consequentemente,  um aspecto que aumenta o tempo de manipulação no fluxo de trabalho."
        },
        "correct": "B",
        "explanation": "A correta é a B porque o grupamento fosfato confere carga negativa, atraindo o DNA ao ânodo. As outras falham pois: A migra apenas para o polo positivo, C DNA é móvel no gel, D o cátodo repele o DNA e E a migração segue o campo elétrico.",
        "difficulty": "fácil"
    },
    {
        "id": 1053,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Sobre o código genético, é CORRETO afirmar que é 'degenerado' porque:",
        "options": {
            "A": "Cada códon codifica diversos aminoácidos em diferentes tecidos.",
            "B": "Um aminoácido pode ser codificado por mais de um códon distinto.",
            "C": "Existem poucos códons disponíveis para a síntese total proteica.",
            "D": "O código varia drasticamente entre espécies do mesmo reino animal.",
            "E": "Múltiplos códons podem codificar o mesmo aminoácido na tradução."
        },
        "correct": "E",
        "explanation": "A correta é a E porque múltiplos códons codificam o mesmo aminoácido, reduzindo o impacto de mutações. As outras falham pois: A código é unívoco, B é redundância (sinônimo), C existem 64 códons e D o código é universal.",
        "difficulty": "fácil"
    },
    {
        "id": 1054,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O Nonsense-Mediated Decay (NMD) é um mecanismo de vigilância que:",
        "options": {
            "A": "Elimina RNAs ribossômicos durante a síntese de novas proteínas.",
            "B": "Degrada mRNAs com códons de parada prematuros para evitar erros.",
            "C": "Ativa mRNAs mutados para garantir a produção de enzimas vitais.",
            "D": "Repara mutações do tipo nonsense diretamente na fita do DNA alvo.",
            "E": "Degrada todas as proteínas celulares para reciclagem de carbono."
        },
        "correct": "B",
        "explanation": "A correta é a B porque o NMD degrada transcritos com códons de parada prematuros. As outras falham pois: A atua no mRNA, C ele degrada em vez de ativar, D é mecanismo pós-transcricional e E é seletivo para erros.",
        "difficulty": "fácil"
    },
    {
        "id": 1055,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "Em genética de populações, o equilíbrio de Hardy-Weinberg:",
        "options": {
            "A": "Aplica-se exclusivamente a organismos haploides de laboratório.",
            "B": "Prevê o aumento constante de homozigotos em todas as gerações.",
            "C": "Aplica-se apenas a pequenas populações isoladas geograficamente.",
            "D": "Requer a presença obrigatória de alelos dominantes na linhagem.",
            "E": "Descreve frequências genotípicas constantes sob condições ideais."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o equilíbrio prevê estabilidade genotípica sem interferências evolutivas. As outras falham pois: A aplica-se a diploides, B frequências são constantes, C exige populações grandes e D independe de dominância.",
        "difficulty": "fácil"
    },
    {
        "id": 1056,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "A deficiência no gene BRCA1 compromete qual mecanismo de reparo de DNA?",
        "options": {
            "A": "Recombinação homóloga (HR) de quebras de fita dupla.",
            "B": "MMR e  apresentando sensibilidade a variações de pH no tampão.",
            "C": "BER e  requerendo adequação aos padrões de segurança vigentes.",
            "D": "NER o que resulta em  exigindo o uso de controles internos para validar a reação.",
            "E": "Fotorreativação e  o que requer calibração rigorosa dos métodos utilizados."
        },
        "correct": "A",
        "explanation": "A correta é a A porque BRCA1 é essencial no reparo de quebras de fita dupla. As outras falham pois: B MMR corrige pareamentos, C BER repara bases, D NER corrige danos volumosos e E usa fotoliases.",
        "difficulty": "fácil"
    },
    {
        "id": 1057,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O imprinting genômico é um fenômeno epigenético em que:",
        "options": {
            "A": "Os genes duplicam-se aleatoriamente durante a fase de mitose.",
            "B": "A expressão gênica depende da origem parental do alelo herdado.",
            "C": "Ambos os alelos são expressos igualmente em todos os tecidos.",
            "D": "A expressão depende apenas de fatores ambientais extracelulares.",
            "E": "Ocorre a expressão exclusiva de genes na fase pré-embrionária."
        },
        "correct": "B",
        "explanation": "A correta é a B porque a expressão silencia um alelo baseando-se no progenitor. As outras falham pois: A envolve expressão e não duplicação, C apenas um alelo é expresso, D é herança genética e E persiste no adulto.",
        "difficulty": "fácil"
    },
    {
        "id": 1058,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "A variante HbS (hemoglobina S), responsável pela anemia falciforme, é mais frequente em populações com ancestralidade africana porque:",
        "options": {
            "A": "Resulta de falhas nos mecanismos de reparo do DNA mitocondrial.",
            "B": "Confere vantagem adaptativa em qualquer ambiente epidemiológico.",
            "C": "Heterozigotos possuem resistência aumentada à malária endêmica.",
            "D": "Surgiu recentemente devido ao uso de novos antibióticos potentes.",
            "E": "Ocorre exclusivamente em indivíduos de populações africanas puras."
        },
        "correct": "C",
        "explanation": "A correta é a C pois heterozigotos para HbS sobrevivem melhor à infecção por malária. As outras falham pois: A mutação é nuclear, B é desvantajosa sem malária, D é seleção natural e E ocorre em várias etnias.",
        "difficulty": "fácil"
    },
    {
        "id": 1059,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "A inativação do cromossomo X em fêmeas mamíferas é mediada pelo:",
        "options": {
            "A": "É mediada pela atividade direta do DNA mitocondrial citosólico.",
            "B": "Depende da ativação do gene SRY presente no cromossomo sexual Y.",
            "C": "É controlada pela enzima telomerase durante a divisão celular.",
            "D": "É mediada pelo RNA não codificante XIST, que reveste o cromossomo.",
            "E": "Ocorre via proteína p53 em resposta a danos severos no genoma."
        },
        "correct": "D",
        "explanation": "A correta é a D porque o RNA XIST recobre o cromossomo promovendo seu silenciamento. As outras falham pois: A é controle nuclear, B SRY define machos, C telomerase mantém extremidades e E p53 atua no ciclo.",
        "difficulty": "fácil"
    },
    {
        "id": 1060,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Sobre a PCR (Reação em Cadeia da Polimerase), a etapa de annealing (anelamento) ocorre em temperatura:",
        "options": {
            "A": "72°C, consequentemente,  um aspecto que aumenta o tempo de manipulação no fluxo de trabalho.",
            "B": "95°C,  que atua de forma secundária na preservação da amostra.",
            "C": "100°C o que resulta em  embora sua eficiência analítica possa variar no laboratório.",
            "D": "4°C,  requerendo adequação aos padrões de segurança vigentes.",
            "E": "55-65°C, para permitir a hibridização dos primers com o DNA molde."
        },
        "correct": "E",
        "explanation": "A correta é a E porque esta temperatura permite a hibridização específica dos primers ao molde. As outras falham pois: A é para extensão, B desnatura o DNA, C ferve a amostra e D preserva o produto final.",
        "difficulty": "fácil"
    },
    {
        "id": 1061,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "A transcrição reversa, processo pelo qual RNA é convertido em DNA complementar (cDNA), é catalisada por:",
        "options": {
            "A": "Topoisomerase o que resulta em  limitando a reprodutibilidade dos resultados entre lotes.",
            "B": "Ribonuclease H e  permitindo a otimização do protocolo em condições controladas.",
            "C": "RNA pol II além disso,  sendo um procedimento que depende de validação adicional.",
            "D": "DNA pol III o que resulta em  o que inviabiliza seu uso em amostras severamente degradadas.",
            "E": "Transcriptase reversa (reverse transcriptase), enzima originalmente descrita em retrovírus."
        },
        "correct": "E",
        "explanation": "A correta é a E pois a enzima sintetiza cDNA a partir de RNA. As outras falham pois: A relaxa superenrolamento do DNA, B degrada RNA, C sintetiza mRNA e D replica genoma bacteriano.",
        "difficulty": "fácil"
    },
    {
        "id": 1062,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Um SNP classificado como 'missense' significa que:",
        "options": {
            "A": "Gera um códon de parada prematuro na sequência da fita de RNA.",
            "B": "Não altera a sequência de aminoácidos da proteína final gerada.",
            "C": "Resulta na deleção de um éxon inteiro durante o processamento.",
            "D": "Não produz efeito fenotípico ou funcional na célula hospedeira.",
            "E": "Substitui um nucleotídeo, alterando um aminoácido na proteína."
        },
        "correct": "E",
        "explanation": "A correta é a E pois a mutação substitui um aminoácido por outro. As outras falham pois: A interrompe precocemente, B mantém aminoácido, C altera processamento e D ignora impacto funcional.",
        "difficulty": "fácil"
    },
    {
        "id": 1063,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O splicing do pré-mRNA é realizado pelo:",
        "options": {
            "A": "Realizado pelo ribossomo durante a etapa de tradução proteica.",
            "B": "Executado pelo proteassomo para a degradação de resíduos RNA.",
            "C": "Realizado pelo spliceossomo, composto por snRNPs e proteínas.",
            "D": "Mediado pela DNA polimerase durante a replicação do material.",
            "E": "Ocorre no poro nuclear para selecionar moléculas de transporte."
        },
        "correct": "C",
        "explanation": "A correta é a C pois o complexo de snRNPs remove íntrons do transcrito. As outras falham pois: A traduz proteínas, B degrada proteínas, D replica DNA e E exporta moléculas.",
        "difficulty": "fácil"
    },
    {
        "id": 1064,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "A energia para a tradução (síntese proteica) no ribossomo é fornecida pela hidrólise de:",
        "options": {
            "A": "Fornecida pela hidrólise de UDP em condições de estresse celular.",
            "B": "Provém do NADPH gerado na via das pentoses-fosfato citoplasmática.",
            "C": "Provém da hidrólise de GTP e ATP durante as etapas de síntese.",
            "D": "Depende exclusivamente de ATP para todas as fases da tradução.",
            "E": "Resulta da quebra direta da glicose no interior do ribossomo."
        },
        "correct": "C",
        "explanation": "A correta é a C pois ATP ativa aminoácidos e GTP impulsiona a translocação. As outras falham pois: A é nucleotídeo carreador, B é redutor, D exclui GTP e E é carboidrato.",
        "difficulty": "fácil"
    },
    {
        "id": 1066,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Sobre variantes de número de cópias (CNVs):",
        "options": {
            "A": "São variações de um único nucleotídeo em regiões intergênicas.",
            "B": "Detectadas apenas por cariótipo convencional de baixa resolução.",
            "C": "Não possuem relevância clínica ou impacto no fenótipo humano.",
            "D": "São segmentos de DNA com número variável de cópias no genoma.",
            "E": "Ocorrem exclusivamente no DNA mitocondrial de herança materna."
        },
        "correct": "D",
        "explanation": "A correta é a D pois CNVs são ganhos ou perdas estruturais de segmentos genômicos. As outras falham pois: A é pontual, B exige citogenômica, C gera fenótipos e E é nuclear.",
        "difficulty": "fácil"
    },
    {
        "id": 1067,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A técnica de FISH (Fluorescence In Situ Hybridization) permite:",
        "options": {
            "A": "Sequencia genes individuais com alta precisão e baixo custo.",
            "B": "Detecta sequências de DNA em cromossomos usando sondas de luz.",
            "C": "Extrai DNA de tecidos fixados para análise genômica posterior.",
            "D": "Amplifica in vitro fragmentos específicos de interesse clínico.",
            "E": "Mede a expressão gênica via qPCR em tempo real na bancada lab."
        },
        "correct": "B",
        "explanation": "A correta é a B pois utiliza hibridização de sondas coloridas em lâmina. As outras falham pois: A lê nucleotídeos, C é preparo, D amplifica DNA e E quantifica RNA.",
        "difficulty": "fácil"
    },
    {
        "id": 1068,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "No contexto do reparo de DNA, a via NER (Nucleotide Excision Repair) é particularmente importante para:",
        "options": {
            "A": "Corrige erros de pareamento durante a replicação semidireta.",
            "B": "Repara quebras de fita dupla causadas por radiação ionizante.",
            "C": "Repara lesões volumosas e dímeros de pirimidina causados por UV.",
            "D": "Remove exclusivamente a uracila incorporada na fita de DNA.",
            "E": "Corrige erros de tradução ocorridos no lúmen do retículo liso."
        },
        "correct": "C",
        "explanation": "A correta é a C pois remove distorções na hélice causadas principalmente por radiação UV. As outras falham pois: A corrige pareamento, B repara quebras, D remove uracila e E é tradução.",
        "difficulty": "fácil"
    },
    {
        "id": 1069,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "A propriedade do código genético de ser 'universal' significa que:",
        "options": {
            "A": "Significa que todos os seres vivos possuem a mesma proteína.",
            "B": "Indica que apenas organismos eucariotos utilizam esse sistema.",
            "C": "Significa que os mesmos códons codificam os mesmos aminoácidos.",
            "D": "Cada espécie possui um conjunto único de códons e anticódons.",
            "E": "Define que a sequência de DNA é idêntica à sequência de RNA."
        },
        "correct": "C",
        "explanation": "A correta é a C pois o código é compartilhado por quase todas as formas de vida. As outras falham pois: A é sobre proteínas, B inclui procariontes, D nega conservação e E confunde polímeros.",
        "difficulty": "fácil"
    },
    {
        "id": 1070,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O genoma mitocondrial (mtDNA) apresenta características únicas que devem ser consideradas no sequenciamento WGS. Assinale a afirmativa CORRETA sobre o mtDNA:",
        "options": {
            "A": "Possui herança biparental na maioria das linhagens humanas.",
            "B": "Seus genes contêm grandes íntrons e exigem splicing complexo.",
            "C": "Apresenta o mesmo código genético nuclear em todos os códons.",
            "D": "Pode exibir heteroplasmia, exigindo alta cobertura no NGS.",
            "E": "Possui baixíssima taxa de mutação devido ao reparo eficiente."
        },
        "correct": "D",
        "explanation": "A correta é a D pois variantes coexistem em proporções diferentes entre mitocôndrias. As outras falham pois: A é materna, B carece de íntrons, C é divergente e E sofre alta mutação.",
        "difficulty": "fácil"
    },
    {
        "id": 1071,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Em farmacogenômica aplicada ao SUS, o gene CYP2D6 é altamente polimórfico. Uma das variantes mais difíceis de detectar por técnicas convencionais, mas que WGS pode mapear, é a presença de alelos de perda de função por deleção total do gene (ex: alelo *5). Esse tipo de variante é classicamente conhecido como:",
        "options": {
            "A": "Mutação sem sentido (Nonsense).",
            "B": "Variação de Número de Cópias (CNV).",
            "C": "Mutação de mudança de matriz (Frameshift).",
            "D": "Polimorfismo de Nucleotídeo Único (SNP).",
            "E": "Inversão paracêntrica."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a deleção gênica total altera a dosagem/número de cópias. As outras falham pois: A é pontual, C altera leitura, D é nucleotídeo único e E inverte o sentido.",
        "difficulty": "fácil"
    },
    {
        "id": 1072,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Mutações intrônicas profundas (deep intronic mutations) podem causar doenças graves porque:",
        "options": {
            "A": "Criam sítios crípticos de splicing, gerando proteínas anormais.",
            "B": "Alteram a sequência de aminoácidos sem passar pelo RNA mensageiro.",
            "C": "Inativam o DNA mitocondrial de forma irreversível e sistêmica.",
            "D": "Deletam permanentemente o promotor de todos os genes vizinhos.",
            "E": "Impedem a replicação do DNA durante a fase S do ciclo celular."
        },
        "correct": "A",
        "explanation": "A correta é a A pois mutações intrônicas profundas criam sítios de splicing, gerando pseudoéxons. As outras falham pois: B ignora transcrição, C afeta organelas, D foca promotores e E bloqueia fase S.",
        "difficulty": "fácil"
    },
    {
        "id": 1073,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "A penetrância incompleta é um conceito vital no aconselhamento genético populacional (Genomas SUS). Ela descreve a situação em que:",
        "options": {
            "A": "Ocorre quando o gene só é expresso na fase pré-embrionária.",
            "B": "Refere-se à inativação aleatória de genes no cromossomo X.",
            "C": "Significa que apenas homens manifestam a mutação patogênica.",
            "D": "O indivíduo possui a variante, mas não manifesta a doença.",
            "E": "A doença apresenta os mesmos sintomas em todos os portadores."
        },
        "correct": "D",
        "explanation": "A correta é a D pois na penetrância incompleta o genótipo está presente sem o fenótipo. As outras falham pois: A restringe idade, B inativa cromossomo, C é sex-linked e E nega variabilidade.",
        "difficulty": "fácil"
    },
    {
        "id": 1074,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Variantes de 'perda de função' (Loss-of-Function - LoF) são frequentemente associadas a doenças recessivas, mas podem causar doenças dominantes através do mecanismo de:",
        "options": {
            "A": "Ocorre via expressão bialélica forçada em tecidos somáticos.",
            "B": "Resulta de mecanismos de supressão em cis no braço longo.",
            "C": "Ocorre por haploinsuficiência: 50% de proteína é insuficiente.",
            "D": "É causada por pleiotropia em diversos sistemas do organismo.",
            "E": "Depende da epistasia entre genes de diferentes cromossomos."
        },
        "correct": "C",
        "explanation": "A correta é a C pois a haploinsuficiência ocorre quando 50% da proteína é insuficiente funcionalmente. As outras falham pois: A é expressão bialélica, B é supressão cis, D é pleiotropia e E é epistasia.",
        "difficulty": "fácil"
    },
    {
        "id": 1075,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Um laboratório obteve baixo rendimento (yield) na preparação de bibliotecas NGS usando método PCR-Free. Uma possível causa é:",
        "options": {
            "A": "Uso de DNA superestimado por NanoDrop, gerando input baixo.",
            "B": "Uso de proteinase K durante a fragmentação física do material.",
            "C": "Adição excessiva de PhiX na biblioteca pronta para sequenciar.",
            "D": "Aumento descontrolado da concentração de dNTPs na reação.",
            "E": "Tempo de incubação excessivo na etapa de A-tailing enzimático."
        },
        "correct": "A",
        "explanation": "A correta é a A pois o NanoDrop superestima DNA, resultando em input real insuficiente. As outras falham pois: B degrada proteínas, C compete na leitura, D altera síntese e E gera artefatos.",
        "difficulty": "médio"
    },
    {
        "id": 1076,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Ao utilizar DNA extraído de saliva no Genomas SUS, um problema comum no WGS é:",
        "options": {
            "A": "A saliva não contém DNA humano para análise de sequenciamento.",
            "B": "Enzimas da saliva destroem fisicamente a flow cell do NGS.",
            "C": "Presença de DNA bacteriano que consome os reads da amostra.",
            "D": "O DNA da saliva converte-se espontaneamente em RNA mensageiro.",
            "E": "A extração via saliva impede a detecção de SNPs no genoma."
        },
        "correct": "C",
        "explanation": "A correta é a C pois o DNA bacteriano contamina a amostra e consome a capacidade de sequenciamento. As outras falham pois: A ignora células, B preserva hardware, D viola biologia e E detecta SNPs.",
        "difficulty": "fácil"
    },
    {
        "id": 1077,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Sobre as tecnologias de captura para Exoma Clínico (WES), é OBRIGATÓRIO monitorar a métrica de:",
        "options": {
            "A": "Deve-se monitorar o sequenciamento total do RNA mitocondrial.",
            "B": "É necessário medir o tamanho da flow cell antes da corrida.",
            "C": "Monitora-se o comprimento dos telômeros em todas as amostras.",
            "D": "Avalia-se o rendimento da extração por precipitação em etanol.",
            "E": "Monitora-se a taxa on-target de reads nas regiões capturadas."
        },
        "correct": "E",
        "explanation": "A correta é a E pois a taxa on-target mede a precisão da captura das regiões codificantes. As outras falham pois: A foca RNA, B é parâmetro físico, C avalia telômeros e D é extração.",
        "difficulty": "fácil"
    },
    {
        "id": 1078,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Na extração automatizada de ácidos nucleicos por partículas magnéticas, o papel do etanol nas etapas de lavagem (Wash) é:",
        "options": {
            "A": "Serve para eluir o DNA das beads magnéticas no passo final.",
            "B": "Neutraliza o pH da solução para evitar a degradação ácida.",
            "C": "Atua lisando a membrana celular e o envelope nuclear interno.",
            "D": "Mantém o DNA ligado às beads enquanto remove sais e proteínas.",
            "E": "Destruir as DNases presentes na amostra original do paciente."
        },
        "correct": "D",
        "explanation": "A correta é a D pois o etanol precipita o DNA nas beads enquanto remove sais e proteínas. As outras falham pois: A é eluição, B é tamponamento, C é lise e E inativa DNases.",
        "difficulty": "fácil"
    },
    {
        "id": 1079,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O 'index hopping' é mitigado nas plataformas de alta escala da Illumina (como o NovaSeq) pelo uso de:",
        "options": {
            "A": "Uso de índices simples e longos para identificar as amostras.",
            "B": "Aumento do tempo de sonicação mecânica das bibliotecas NGS.",
            "C": "Uso de Unique Dual Indexes (UDI) para filtrar reads trocados.",
            "D": "Realização de sequenciamento Single-End em todas as corridas.",
            "E": "Aumento da concentração de primers durante a etapa de PCR."
        },
        "correct": "C",
        "explanation": "A correta é a C pois o UDI permite identificar e descartar reads com índices trocados. As outras falham pois: A é inseguro, B é mecânico, D é modo leitura e E é reagente.",
        "difficulty": "fácil"
    },
    {
        "id": 1080,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A formação de 'chimeras' (fragmentos quiméricos) durante o preparo de bibliotecas é agravada por:",
        "options": {
            "A": "Causada pela sonicação em baixas temperaturas de resfriamento.",
            "B": "Resulta da falta de cloreto de magnésio na etapa de ligação.",
            "C": "Excesso de ciclos de PCR, gerando trocas entre moldes de DNA.",
            "D": "Uso de beads magnéticas com data de validade vencida no kit.",
            "E": "Falta de dNTPs durante a síntese da segunda fita da amostra."
        },
        "correct": "C",
        "explanation": "A correta é a C pois ciclos excessivos de PCR causam hibridização cruzada e fragmentos quiméricos. As outras falham pois: A é térmico, B inibe ligase, D afeta pureza e E para síntese.",
        "difficulty": "fácil"
    },
    {
        "id": 1081,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "No sequenciamento de Terceira Geração (ex: Oxford Nanopore), a principal característica técnica é:",
        "options": {
            "A": "Leitura óptica da fluorescência emitida por novos fluoróforos.",
            "B": "Baseia-se na detecção de íons hidrogênio e variação do pH.",
            "C": "Requer bridge amplification em superfície sólida de sílica.",
            "D": "Mede a corrente elétrica enquanto o DNA passa pelo nanoporo.",
            "E": "Exige fragmentação obrigatória em pedaços pequenos de 150 pb."
        },
        "correct": "D",
        "explanation": "A correta é a D pois a tecnologia Nanopore mede variações de corrente elétrica no poro. As outras falham pois: A usa luz, B mede pH, C é clusterização e E requer curtos.",
        "difficulty": "fácil"
    },
    {
        "id": 1082,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A biblioteca NGS foi preparada com excesso crítico de adaptador (adapter dimers). Qual etapa técnica provavelmente falhou?",
        "options": {
            "A": "Falha técnica na etapa de A-tailing enzimático.",
            "B": "Controle inadequado de temperatura do protocolo.",
            "C": "Limpeza falha por beads SPRI pós-ligação química.",
            "D": "Lise celular ineficiente na fase pré-analítica.",
            "E": "Erro na quantificação final via método do Qubit."
        },
        "correct": "C",
        "explanation": "A correta é a C pois beads SPRI fazem seleção de tamanho removendo adaptadores. As outras falham pois: A prejudica a ligação sem remover dímeros existentes, B altera a temperatura de reação sem filtrar moléculas, D foca na extração e não na pureza da biblioteca, E mede a concentração total sem distinguir os dímeros presentes.",
        "difficulty": "fácil"
    },
    {
        "id": 1083,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A validação clínica de uma variante encontrada por WGS muitas vezes requer confirmação ortogonal. O padrão-ouro histórico para confirmar uma mutação de ponto (SNV) é:",
        "options": {
            "A": "Sequenciamento Sanger bidirecional focando na região de interesse.",
            "B": "Repetir o WGS, consequentemente,  embora sua eficiência analítica possa variar no laboratório.",
            "C": "Eletroforese em gel de poliacrilamida e  sendo um procedimento que depende de validação adicional.",
            "D": "Microarray de CGH o que resulta em  limitando a reprodutibilidade dos resultados entre lotes.",
            "E": "Cariótipo com banda G além disso,  sendo um procedimento que depende de validação adicional."
        },
        "correct": "A",
        "explanation": "A correta é a A pois o sequenciamento Sanger bidirecional confirma SNVs com precisão. As outras falham pois: B repete as mesmas limitações técnicas do WGS inicial, C não possui resolução para identificar bases nitrogenadas específicas, D é indicado para perdas e ganhos de material genético, E identifica apenas grandes alterações estruturais ou numéricas cromossômicas.",
        "difficulty": "médio"
    },
    {
        "id": 1084,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "No contexto do preparo de biblioteca, o que significa a etapa de 'End Repair'?",
        "options": {
            "A": "Digestão das extremidades do DNA com nucleases.",
            "B": "Adição de promotores T7 para proteção da amostra.",
            "C": "Inserção de bases fluorescentes para detecção ótica.",
            "D": "Reparo de dímeros de timina induzidos por raios UV.",
            "E": "Preenchimento de overhangs para gerar pontas cegas."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o reparo gera pontas cegas para a ligação. As outras falham pois: A causaria a degradação indesejada das amostras de DNA, B é necessário apenas para processos de transcrição in vitro, C refere-se à etapa de sequenciamento e não ao preparo, D trata-se de um mecanismo de reparo biológico celular específico.",
        "difficulty": "fácil"
    },
    {
        "id": 1085,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Para amostras de sangue cujo processamento e extração de DNA sofrerão atraso (transporte regional no SUS), o uso de tubos PAXgene ou estabilizadores equivalentes visa:",
        "options": {
            "A": "Manter o cultivo celular estável com pH variado.",
            "B": "Estimular a atividade mitótica durante o trajeto.",
            "C": "Induzir a evaporação da água para reduzir volume.",
            "D": "Eliminar a necessidade de uso de código de barras.",
            "E": "Lise celular e inativação de nucleases na coleta."
        },
        "correct": "E",
        "explanation": "A correta é a E pois estabilizadores bloqueiam a degradação enzimática e celular. As outras falham pois: A visa manter a viabilidade celular para estudos funcionais, B estimula o ciclo celular o que alteraria a amostra, C causaria a dessecação e comprometeria a qualidade do DNA, D não substitui a identificação necessária para o rastreio laboratorial.",
        "difficulty": "fácil"
    },
    {
        "id": 1086,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Ao avaliar a qualidade de RNA para sequenciamento (RNA-Seq), a métrica RIN (RNA Integrity Number) é fundamental. Um RIN = 9 indica:",
        "options": {
            "A": "Presença de microRNAs com variabilidade analítica.",
            "B": "Contaminação por DNA genômico em lote controlado.",
            "C": "Degradação total do RNA sem preservação secundária.",
            "D": "Baixa concentração volumétrica com baixa precisão.",
            "E": "Alta integridade do RNA com bandas 28S e 18S nítidas."
        },
        "correct": "E",
        "explanation": "A correta é a E pois RIN 9 indica alta integridade e RNA preservado. As outras falham pois: A analisa apenas fragmentos pequenos e não a integridade total, B refere-se à pureza e não ao estado de degradação, C indica que o RNA está totalmente destruído e inutilizável, D descreve a quantidade de material e não sua qualidade.",
        "difficulty": "médio"
    },
    {
        "id": 1087,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Em bibliotecas de WGS, o viés de composição de bases (GC-bias) é problemático porque:",
        "options": {
            "A": "Danos físicos à flow cell exigindo métodos manuais.",
            "B": "Falha de amplificação em regiões extremas (GC ou AT).",
            "C": "Inversão de leituras paired-end por variação de pH.",
            "D": "Fragmentação excessiva da amostra e instabilidade.",
            "E": "Inserção de metilações anormais nos arquivos finais."
        },
        "correct": "B",
        "explanation": "A correta é a B pois alto teor GC dificulta a desnaturação durante PCR. As outras falham pois: A descreve um dano físico inexistente provocado por bases nitrogenadas, C altera a ordem das leituras mas não causa viés, D relaciona-se ao processo mecânico de quebra das fitas genômicas, E refere-se a modificações químicas que não impedem o sequenciamento.",
        "difficulty": "fácil"
    },
    {
        "id": 1088,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A biblioteca NGS para sequenciadores Illumina exige 'quantificação funcional'. Isso se refere a:",
        "options": {
            "A": "Contagem visual de fragmentos via microscopia ótica.",
            "B": "Medição rigorosa de volumes nas etapas de pipetagem.",
            "C": "Uso de qPCR para quantificar adaptadores ligados.",
            "D": "Pesagem da biblioteca final em balança de precisão.",
            "E": "Teste de funcionalidade celular sob normas técnicas."
        },
        "correct": "C",
        "explanation": "A correta é a C pois qPCR quantifica exclusivamente fragmentos aptos ao sequenciamento. As outras falham pois: A visualiza estruturas e não quantifica moléculas de DNA ligadas, B foca na precisão da pipetagem e não na funcionalidade, D mede a massa total de DNA sem verificar adaptadores, E avalia o comportamento celular em vez da biblioteca NGS.",
        "difficulty": "fácil"
    },
    {
        "id": 1089,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "No sequenciamento em grande escala, a contaminação cruzada (cross-contamination) laboratorial intra-placa de 96 poços pode ser confirmada bioinformaticamente por:",
        "options": {
            "A": "Consumo excessivo de memória RAM no processamento.",
            "B": "Taxa de heterozigose atípica e frações alélicas baixas.",
            "C": "Presença de dímeros de adaptadores em degradadas.",
            "D": "Scores de qualidade Q30 superiores a 95% na corrida.",
            "E": "Taxas de mapeamento genômico em cenários ideais."
        },
        "correct": "B",
        "explanation": "A correta é a B pois DNA contaminante gera alelos em proporções inesperadas. As outras falham pois: A indica problemas de hardware e não contaminação de amostras, C demonstra falha na limpeza da biblioteca e não mistura, D mostra apenas a qualidade da leitura das bases individuais, E foca no sucesso do alinhamento contra o genoma referência.",
        "difficulty": "fácil"
    },
    {
        "id": 1090,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Em um laboratório de biologia molecular operando WGS, a pressão de ar da Sala Pré-PCR (Preparo de Reagentes) em relação ao corredor deve ser:",
        "options": {
            "A": "Isolamento a vácuo seguindo normas de segurança.",
            "B": "Pressão neutra sem fluxo de ar entre os ambientes.",
            "C": "Pressão variável dependente da umidade da sala.",
            "D": "Pressão positiva para evitar entrada de contaminantes.",
            "E": "Pressão negativa visando a estabilidade in vitro."
        },
        "correct": "D",
        "explanation": "A correta é a D pois pressão positiva impede que aerossóis externos entrem. As outras falham pois: A criaria um ambiente sem oxigênio inviável para o trabalho, B não oferece barreira contra a entrada de potenciais contaminantes, C é tecnicamente inviável e não protege os reagentes estéreis, E é utilizada em salas pós-PCR para conter os amplicons.",
        "difficulty": "fácil"
    },
    {
        "id": 1091,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Para inativar amplicons de PCR derramados em uma bancada de genômica, o procedimento mais eficaz recomendado pelas boas práticas é:",
        "options": {
            "A": "Limpeza com álcool 70% sob condições controladas.",
            "B": "Uso de hipoclorito 10% seguido de agentes DNAZap.",
            "C": "Lavagem com água deionizada quente para otimização.",
            "D": "Exposição prolongada ao fluxo do ar condicionado.",
            "E": "Limpeza com sabão neutro e secagem com papel toalha."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o hipoclorito degrada quimicamente o DNA de amplicons. As outras falham pois: A fixa o material genético na superfície sem degradá-lo, C apenas remove sujeira visível mas mantém o DNA intacto, D não possui poder germicida ou químico contra ácidos nucleicos, E realiza limpeza superficial sem inativar a capacidade de amplificação.",
        "difficulty": "fácil"
    },
    {
        "id": 1092,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Durante a auditoria de um centro parceiro do Genomas SUS, nota-se ausência de 'Audit Trails' no LIMS. Isso fere BPL porque:",
        "options": {
            "A": "Violação de biossegurança e regras de descarte.",
            "B": "Aumento no consumo de papel e controles internos.",
            "C": "Redução na velocidade do software e validações.",
            "D": "Desalinhamento de gráficos e variação de tampão.",
            "E": "Impossibilidade de rastrear modificações nos dados."
        },
        "correct": "E",
        "explanation": "A correta é a E pois a Trilha de Auditoria é indispensável para registrar quem alterou dados e quando. As outras falham pois: A foca em biossegurança física, B trata de insumos de escritório, C refere-se ao desempenho do hardware e D foca em calibração química.",
        "difficulty": "fácil"
    },
    {
        "id": 1093,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "A implementação de lotes novos de reagentes de extração em um laboratório de rotina clínica/pesquisa exige:",
        "options": {
            "A": "Descarte do lote antigo e uso de novos controles.",
            "B": "Ajuste no tempo de sonicação e calibração fina.",
            "C": "Alteração de POP e aumento do fluxo de trabalho.",
            "D": "Autorização ministerial para validação de reação.",
            "E": "Validação cruzada comparando desempenho de lotes."
        },
        "correct": "E",
        "explanation": "A correta é a E porque a validação cruzada assegura que novos lotes não introduzam viés nos resultados. As outras falham pois: A gera desperdício desnecessário, B é específica para lise mecânica, C é meramente administrativa e D é um excesso burocrático inexistente.",
        "difficulty": "fácil"
    },
    {
        "id": 1094,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Ao manusear Fenol-Clorofórmio para extração de DNA, os EPIs essenciais além de luvas e jaleco incluem obrigatoriamente:",
        "options": {
            "A": "Uso de cabine biológica em cenário controlado.",
            "B": "Proteção radiológica e monitoramento de tampão.",
            "C": "Uso de touca descartável para agilizar o fluxo.",
            "D": "Sapatos isolantes e calibração de métodos.",
            "E": "Óculos, máscara de gases e capela química."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o fenol exige proteção contra vapores tóxicos e contato corrosivo em capela. As outras falham pois: A serve para agentes biológicos, B é para radiação, C é para higiene capilar e D é para riscos elétricos.",
        "difficulty": "fácil"
    },
    {
        "id": 1095,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "A falta de calibração anual dos blocos térmicos (Termocicladores) pode resultar em:",
        "options": {
            "A": "Consumo de tampão e falha na preservação.",
            "B": "Erros de demultiplexação e instabilidade.",
            "C": "Alteração da cor do DNA e falta de estabilidade.",
            "D": "Oxidação de poços e necessidade de controles.",
            "E": "Falha em bibliotecas por baixa ação enzimática."
        },
        "correct": "E",
        "explanation": "A correta é a E porque enzimas de NGS são termossensíveis e blocos descalibrados impedem a síntese das bibliotecas. As outras falham pois: A refere-se ao armazenamento, B é erro de bioinformática, C é impossível fisicamente e D é desgaste mecânico.",
        "difficulty": "fácil"
    },
    {
        "id": 1096,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "No contexto de BPL para genômica (RDC ANVISA), a retenção de 'Contramostras' de DNA (alíquotas de guarda) serve primariamente para:",
        "options": {
            "A": "Garantia de material para reanálise ou auditoria.",
            "B": "Teste de freezers e otimização do protocolo.",
            "C": "Aumento de lucros em amostras degradadas.",
            "D": "Doação a bancos de sangue e validação de bancada.",
            "E": "Venda de amostras e calibração de métodos."
        },
        "correct": "A",
        "explanation": "A correta é a A pois a contramostra garante a possibilidade de reanálise em casos de dúvida ou auditoria. As outras falham pois: B testa o equipamento, C é prática antiética, D é para medicina transfusional e E é crime ambiental.",
        "difficulty": "fácil"
    },
    {
        "id": 1097,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "O Controle Interno de Qualidade (CIQ) é monitorado usando a regra 1(3s) de Westgard. Isso significa que a corrida será rejeitada se:",
        "options": {
            "A": "Erro cometido por 3 funcionários diferentes.",
            "B": "Valor ultrapassando 3 desvios padrão da média.",
            "C": "Erro em 3 sequenciamentos seguidos na rotina.",
            "D": "Aumento de custo e inviabilidade de amostras.",
            "E": "Interrupção do sequenciador por 3 segundos."
        },
        "correct": "B",
        "explanation": "A correta é a B porque a regra 1(3s) define que um ponto fora de 3 desvios-padrão é erro aleatório grave. As outras falham pois: A envolve gestão de pessoas, C refere-se à regra 3(1s), D é análise financeira e E é tempo de hardware.",
        "difficulty": "fácil"
    },
    {
        "id": 1098,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Um derramamento de 10 mL de sangue total de paciente desconhecido numa centrífuga de laboratório NB-2 exige, na contenção primária, o uso de:",
        "options": {
            "A": "EPI completo e aplicação de hipoclorito de sódio.",
            "B": "Desinfecção com álcool isopropílico aquecido.",
            "C": "Limpeza com esponja e descarte em lixo comum.",
            "D": "Aquecimento da centrífuga a 100 graus Celsius.",
            "E": "Neutralização por amônia e monitoramento prévio."
        },
        "correct": "A",
        "explanation": "A correta é a A pois o hipoclorito é o agente padrão ouro para desinfetar material biológico potencialmente infectante. As outras falham pois: B é menos eficaz, C promove a dispersão, D danifica o equipamento e E usa reagente inadequado.",
        "difficulty": "fácil"
    },
    {
        "id": 1099,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "O controle de temperatura de uma sala de sequenciamento NovaSeq/NextSeq deve ser mantido estritamente controlado (geralmente 22°C ± 2) primariamente por que:",
        "options": {
            "A": "Derretimento do DNA e validação adicional.",
            "B": "Sensibilidade térmica de lasers e lentes ópticas.",
            "C": "Formação de ozônio e monitoramento técnico.",
            "D": "Conforto térmico e uso de controles internos.",
            "E": "Dependência do sistema Linux e estabilidade."
        },
        "correct": "B",
        "explanation": "A correta é a B porque a estabilidade térmica impede a descalibração micrométrica dos componentes ópticos do sequenciador. As outras falham pois: A não ocorre nessa temperatura, C é processo químico alheio, D é conforto humano e E é dependência lógica.",
        "difficulty": "fácil"
    },
    {
        "id": 1100,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "No compartilhamento de amostras biológicas do banco Genomas SUS para análise de bioinformática no exterior, a CONEP exige:",
        "options": {
            "A": "Acesso estrangeiro e calibração de métodos.",
            "B": "Tradução de prontuários e reprodutibilidade.",
            "C": "Venda de dados e limitação entre lotes.",
            "D": "Retenção de amostras e assinatura de MTA.",
            "E": "Pagamento de transporte e estabilidade."
        },
        "correct": "D",
        "explanation": "A correta é a D pois o MTA estabelece as garantias legais e éticas na transferência de patrimônio genético. As outras falham pois: A é puramente técnica, B é detalhe administrativo, C é ilegal e E é detalhe logístico secundário.",
        "difficulty": "fácil"
    },
    {
        "id": 1101,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Devolução de resultados: Se o pipeline de WGS identificar uma variante patogênica em BRCA1 (Gene ACMG-73) em um participante assintomático, as boas práticas éticas em estudos de genômica populacional preconizam:",
        "options": {
            "A": "Validação ortogonal e comunicação via TCLE.",
            "B": "Informe familiar sem ciência do paciente.",
            "C": "Publicação em redes sociais e riscos técnicos.",
            "D": "Internação compulsória e validação adicional.",
            "E": "Omissão de dados por falta de foco no estudo."
        },
        "correct": "A",
        "explanation": "A correta é a A pois achados incidentais graves exigem confirmação laboratorial e respeito ao consentimento livre. As outras falham pois: B viola a privacidade, C fere o sigilo médico, D é conduta clínica desproporcional e E é antiético.",
        "difficulty": "fácil"
    },
    {
        "id": 1102,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Estudos com populações originárias/indígenas no Brasil (com interesse genômico no Genomas SUS) requerem aprovação especial porque:",
        "options": {
            "A": "Proibição legal de sequenciamento indígena.",
            "B": "Proteção de vulneráveis e aprovação da FUNAI.",
            "C": "Isenção de aprovação por demanda de bancada.",
            "D": "Não reconhecimento da cidadania brasileira.",
            "E": "Existência de genes exclusivos de alienígenas."
        },
        "correct": "B",
        "explanation": "A correta é a B porque populações tradicionais exigem ritos éticos rigorosos pela Resolução 304. As outras falham pois: A não há proibição legal, C requer maior rigor ético, D possuem plena cidadania brasileira e E é uma afirmação sem base científica.",
        "difficulty": "fácil"
    },
    {
        "id": 1103,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "O Comitê Independente de Monitoramento de Dados (DMC - Data Monitoring Committee) em um ensaio multicêntrico tem como objetivo principal:",
        "options": {
            "A": "Escrita autônoma de artigos e calibração.",
            "B": "Demultiplexação de reads e reprodutibilidade.",
            "C": "Revisão de segurança e interrupção do estudo.",
            "D": "Correção de bugs e uso de amostras degradadas.",
            "E": "Pagamento de bolsas e monitoramento prévio."
        },
        "correct": "C",
        "explanation": "A correta é a C pois o DMC monitora a segurança e a integridade dos participantes em ensaios. As outras falham pois: A refere-se à autoria científica, B é tarefa técnica de bioinformática, D trata de desenvolvimento de software e E envolve gestão financeira.",
        "difficulty": "fácil"
    },
    {
        "id": 1104,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "O conceito de 'Risco de Reidentificação' em bases de dados genômicas anonimizadas refere-se a:",
        "options": {
            "A": "Perda da identificação e tempo de manipulação.",
            "B": "Identificação de variantes e ajuste de pH.",
            "C": "Esquecimento de senhas e monitoramento técnico.",
            "D": "Cruzamento de genomas com bases públicas.",
            "E": "Troca de etiquetas e validação adicional."
        },
        "correct": "D",
        "explanation": "A correta é a D porque dados genômicos permitem reidentificação via cruzamento com bancos de dados públicos. As outras falham pois: A envolve logística temporal, B é análise química, C é segurança de senhas e E é erro administrativo básico.",
        "difficulty": "fácil"
    },
    {
        "id": 1105,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "O que deve acontecer caso um indivíduo exerça seu direito de revogação de consentimento num biobanco genômico?",
        "options": {
            "A": "Exclusão de DNA salivar e monitoramento.",
            "B": "Pagamento de multas e controles internos.",
            "C": "Destruição do material e suspensão dos dados.",
            "D": "Apagamento de publicações e calibração.",
            "E": "Perda de acesso ao SUS e segurança de dados."
        },
        "correct": "C",
        "explanation": "A correta é a C pois a autonomia permite a retirada do consentimento e consequente descarte amostral. As outras falham pois: A limita-se apenas à saliva, B aplica punição financeira inexistente, D não retroage publicações feitas e E fere o direito constitucional à saúde.",
        "difficulty": "fácil"
    },
    {
        "id": 1106,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Na redação de Standard Operating Procedures (SOPs) de extração em pesquisa multicêntrica, a principal exigência técnica da ISO 15189 é:",
        "options": {
            "A": "Assinatura ministerial e normas de segurança.",
            "B": "Guarda em cofre e validação de procedimento.",
            "C": "Extensão mínima e adequação de segurança.",
            "D": "Tradução em 3 idiomas e variação de pH.",
            "E": "Controle de versão e disponibilidade em sala."
        },
        "correct": "E",
        "explanation": "A correta é a E pois a ISO 15189 exige rastreabilidade via controle de versões acessíveis no local de trabalho. As outras falham pois: A é excesso burocrático ministerial, B dificulta o acesso operacional, C ignora a qualidade técnica e D é tecnicamente irrelevante.",
        "difficulty": "médio"
    },
    {
        "id": 1107,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "A Repartição de Benefícios estipulada pelo SISGEN/CGEN baseia-se no princípio de que:",
        "options": {
            "A": "Patentes humanas e preservação de amostra.",
            "B": "Proibição de comércio e cenários controlados.",
            "C": "Isenção estrangeira e tempo de manipulação.",
            "D": "Lucros estatais e calibração de métodos.",
            "E": "Retorno de ganhos para sociedade e indígenas."
        },
        "correct": "E",
        "explanation": "A correta é a E pois a Lei 13.123/15 exige partilha de lucros oriundos da biodiversidade com a sociedade nacional. As outras falham pois: A foca apenas em patentes, B permite comércio regulado, C não isenta estrangeiros e D limita-se ao lucro do Estado.",
        "difficulty": "médio"
    },
    {
        "id": 1109,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "O processo de validação analítica para incorporar um painel genômico de BRCA1/2 na rotina pública (estudos) engloba testar:",
        "options": {
            "A": "Calibração de equipamentos e reprodutibilidade técnica entre lotes.",
            "B": "Sabor da solução tampão e validação por métodos ortogonais de bancada.",
            "C": "Registro sanitário na ANVISA e uso de controles internos de reação.",
            "D": "Reprodutibilidade, especificidade, limite de detecção e acurácia.",
            "E": "Eficiência em populações europeias e estabilidade in vitro do kit."
        },
        "correct": "D",
        "explanation": "A correta é a D porque a validação analítica exige métricas de precisão, sensibilidade, acurácia e limites técnicos. As outras falham pois: A é uma análise parcial, B é fisicamente irrelevante, C é um trâmite puramente legal e E foca apenas em demografia.",
        "difficulty": "fácil"
    },
    {
        "id": 1110,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "Um dos pilares da implementação da genômica no Sistema Único de Saúde é a transição da pesquisa pura para a 'Saúde de Precisão'. Isso se reflete na:",
        "options": {
            "A": "Exclusividade de leitos e calibração rigorosa de métodos.",
            "B": "Proibição de vacinas e validação de amostras degradadas.",
            "C": "Privatização de bancos de sangue e estabilidade in vitro.",
            "D": "Identificação de subgrupos para aplicação de terapias alvo.",
            "E": "Extinção da atenção primária e padrões de segurança."
        },
        "correct": "D",
        "explanation": "A correta é a D pois a medicina de precisão segmenta subgrupos de pacientes para terapias alvo otimizadas. As outras falham pois: A foca em infraestrutura de leitos, B é cientificamente falsa, C propõe privatização política e E extingue a base do sistema.",
        "difficulty": "fácil"
    },
    {
        "id": 1111,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "Qual destas interações farmacogenômicas já impacta de maneira real a prescrição oncológica em sistemas públicos, devido à toxicidade letal severa?",
        "options": {
            "A": "Variantes de HLA e uso de Tylenol em ambiente clínico.",
            "B": "Mutações em FOXP2 e uso de analgésicos sob validação.",
            "C": "Gene da lactase e insulina em cenários laboratoriais.",
            "D": "Mutações no gene DPYD e uso do quimioterápico 5-FU.",
            "E": "Expressão de queratina e uso de controles internos."
        },
        "correct": "D",
        "explanation": "A correta é a D pois variantes no gene DPYD causam toxicidade fatal ao quimioterápico 5-fluorouracil. As outras falham pois: A cita o analgésico incorreto, B envolve genes de linguagem, C refere-se à intolerância alimentar e E trata de proteína estrutural.",
        "difficulty": "fácil"
    },
    {
        "id": 1112,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "Em relação ao Teste do Pezinho (Triagem Neonatal) e a genômica no SUS, a evolução natural esperada é:",
        "options": {
            "A": "Isolar crianças afetadas e monitorar variações de pH.",
            "B": "Uso de proteômica com WGS reflexo para diagnóstico.",
            "C": "Cancelamento de testes e validação por métodos ortogonais.",
            "D": "Cobrança pelo exame inicial e preservação de amostras.",
            "E": "Substituição de bioquímica por Raio-X e validação."
        },
        "correct": "B",
        "explanation": "A correta é a B pois associa a triagem bioquímica clássica com a confirmação diagnóstica por sequenciamento genômico. As outras falham pois: A é segregacionista, C representa um retrocesso médico, D fere a gratuidade do SUS e E utiliza tecnologia radiológica inadequada.",
        "difficulty": "fácil"
    },
    {
        "id": 1113,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "A Rede Nacional de Dados em Saúde (RNDS) tem como propósito em uma era de genômica governamental:",
        "options": {
            "A": "Controle de acesso físico e uso de controles internos.",
            "B": "Plataforma exclusiva do IBGE e padrões de segurança.",
            "C": "Ecossistema FHIR para unificar prontuários no SUS.",
            "D": "Abolição de receitas e validação de amostras degradadas.",
            "E": "Exclusão anual de dados e protocolos laboratoriais."
        },
        "correct": "C",
        "explanation": "A correta é a C pois a RNDS utiliza o padrão HL7 FHIR para garantir a interoperabilidade de dados genômicos e clínicos no SUS. As outras falham pois: A trata de segurança física patrimonial, B limita-se a dados estatísticos populacionais, D refere-se a fluxos administrativos irrelevantes e E sugere descarte indevido de dados.",
        "difficulty": "fácil"
    },
    {
        "id": 1114,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "Doenças Monogênicas Raras sobrecarregam as famílias e o sistema judiciário (judicialização da saúde). A inserção do WGS de trios (Paciente-Pai-Mãe) no início do quadro clínico visa:",
        "options": {
            "A": "Geração de provas cíveis e monitoramento de pH.",
            "B": "Fim da odisseia diagnóstica e redução de custos.",
            "C": "Redução do contato médico e análise de estabilidade.",
            "D": "Substituição de testes de DSTs em cenários clínicos.",
            "E": "Prolongamento de internações e métodos ortogonais."
        },
        "correct": "B",
        "explanation": "A correta é a B porque o WGS de trios permite um diagnóstico rápido e preciso, economizando recursos públicos a longo prazo. As outras falham pois: A envolve questões de direito civil, C afasta o contato médico necessário, D confunde diagnósticos genéticos com infecciosos e E aumenta custos hospitalares evitáveis.",
        "difficulty": "fácil"
    },
    {
        "id": 1115,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "O conceito de Custo-Efetividade de WGS num sistema como o SUS avalia:",
        "options": {
            "A": "Relação entre investimento e anos de vida com qualidade.",
            "B": "Seleção do teste mais rápido e métodos ortogonais.",
            "C": "Custo reduzido de equipamentos e estabilidade in vitro.",
            "D": "Preferência do paciente e sensibilidade ao pH.",
            "E": "Capacidade de faturamento e calibração de métodos."
        },
        "correct": "A",
        "explanation": "A correta é a A pois a análise de custo-efetividade foca na relação entre investimento e ganhos em anos de vida qualificados (QALY). As outras falham pois: B foca em velocidade analítica, C foca apenas no custo do equipamento, D prioriza a preferência individual e E foca em gestão financeira.",
        "difficulty": "fácil"
    },
    {
        "id": 1116,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "Muitos painéis genômicos importados possuem viés de ancestralidade. Como isso afeta o SUS brasileiro?",
        "options": {
            "A": "Aumento da precisão para indígenas e métodos ortogonais.",
            "B": "Causa de hiper-diagnóstico e limites de reprodutibilidade.",
            "C": "Redução de custos oncológicos e tempo de manipulação.",
            "D": "Ausência de impacto técnico e protocolos ideais.",
            "E": "Alta taxa de VUS em não-brancos e desigualdade."
        },
        "correct": "E",
        "explanation": "A correta é a E porque a sub-representação de não-brancos em bancos genômicos gera altas taxas de Variantes de Significado Incerto (VUS). As outras falham pois: A sugere uma precisão inexistente na prática, B refere-se a diagnósticos em excesso, C ignora os gastos com reanálises e D nega o impacto socio-clínico.",
        "difficulty": "fácil"
    },
    {
        "id": 1117,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "Vigilância Genômica Integrada (One Health) se popularizou. Em laboratórios centrais do governo (LACENs/SUS), significa:",
        "options": {
            "A": "Rastreio de árvores genealógicas e controles de reação.",
            "B": "NGS para rastreio de patógenos, vetores e imunidade.",
            "C": "Sequenciamento de Gram-positivas e validação técnica.",
            "D": "Investigação de criminalidade e métodos ortogonais.",
            "E": "Sequenciamento de animais extintos e adequação técnica."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a Saúde Única utiliza NGS para monitorar patógenos de forma integrada entre animais, humanos e meio ambiente. As outras falham pois: A foca em genealogia familiar humana, C limita-se a um grupo específico bacteriano, D refere-se à ciência forense criminal e E foca em paleontologia.",
        "difficulty": "fácil"
    },
    {
        "id": 1118,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "O 'aconselhamento genético' no SUS atua fortemente pré e pós testagem de genômica populacional para:",
        "options": {
            "A": "Prescrição de psicotrópicos e preservação de amostra.",
            "B": "Desestímulo à reprodução e estabilidade in vitro.",
            "C": "Obrigatoriedade de cirurgias e sensibilidade ao pH.",
            "D": "Rastreio compulsório e análise de eficiência analítica.",
            "E": "Garantia de autonomia e tradução de riscos em saúde."
        },
        "correct": "E",
        "explanation": "A correta é a E porque o aconselhamento garante que o paciente tome decisões autônomas após compreender os riscos genômicos informados. As outras falham pois: A foca em prescrição de psicotrópicos, B sugere eugenia reprodutiva antiética, C fere a autonomia com obrigatoriedade e D propõe rastreio sem consentimento.",
        "difficulty": "fácil"
    },
    {
        "id": 1119,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "O impacto da genômica do 'Traço Falciforme' no Norte do Brasil é vital porque:",
        "options": {
            "A": "Proteção contra malária e calibração de métodos.",
            "B": "Indução de gripe severa e métodos ortogonais.",
            "C": "Quimioterapia no primeiro mês e padrões de segurança.",
            "D": "Incidência em moradores urbanos e variações de pH.",
            "E": "Risco de Anemia Falciforme em filhos de carreadores."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o rastreio genômico de carreadores permite prever e orientar sobre o risco de nascimento de filhos com Anemia Falciforme. As outras falham pois: A foca apenas no benefício evolutivo da malária, B inventa uma relação com gripe, C utiliza tratamento oncológico incorreto e D cita parâmetros químicos irrelevantes.",
        "difficulty": "fácil"
    },
    {
        "id": 1120,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Durante a extração de DNA de amostras de tecido FFPE para um painel oncológico, a principal causa química das transições C>T é:",
        "options": {
            "A": "Oxidação por radicais livres e estabilidade in vitro.",
            "B": "Dímeros de pirimidina e fase pré-analítica.",
            "C": "Desaminação de citosinas por formol para uracilas.",
            "D": "Erro da Taq polimerase e necessidade de validação.",
            "E": "Troca de índices na flow cell e monitoramento técnico."
        },
        "correct": "C",
        "explanation": "A correta é a C pois o formol causa desaminação da citosina para uracila, resultando em falsas substituições C para T durante a PCR. As outras falham pois: A envolve danos por radicais livres, B decorre de exposição a raios UV, D é erro inerente à polimerase e E refere-se a erros de demultiplexação.",
        "difficulty": "fácil"
    },
    {
        "id": 1121,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Em um protocolo de size selection utilizando beads magnéticas SPRI, para excluir fragmentos MENORES que 300 pb, deve-se:",
        "options": {
            "A": "Diminuir a razão bead:amostra para fragmentos maiores.",
            "B": "Aumentar incubação com etanol e monitorar o pH.",
            "C": "Uso de isopropanol e métodos ortogonais de bancada.",
            "D": "Aumentar a razão bead:amostra e reprodutibilidade.",
            "E": "Elevação do pH de eluição e calibração de métodos."
        },
        "correct": "A",
        "explanation": "A correta é a A porque a redução da concentração de PEG/Sal (razão bead:amostra) favorece a precipitação seletiva apenas de fragmentos de DNA maiores. As outras falham pois: B refere-se à etapa de limpeza, C utiliza reagente impróprio para SPRI, D retém fragmentos indesejados muito pequenos e E afeta apenas a recuperação final.",
        "difficulty": "médio"
    },
    {
        "id": 1122,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A biblioteca final de WGS Illumina do paciente apresenta um pico limpo no TapeStation em 450 pb. Sabendo que os adaptadores Illumina (P5 + P7) somam aproximadamente 120 pb a 140 pb, qual é o tamanho médio aproximado do fragmento original de DNA (insert size)?",
        "options": {
            "A": "450 pb.",
            "B": "800 pb.",
            "C": "150 pb.",
            "D": "310 a 330 pb.",
            "E": "570 pb."
        },
        "correct": "D",
        "explanation": "A correta é a D porque o tamanho do inserto é calculado subtraindo-se o comprimento dos adaptadores (~130pb) do tamanho total da biblioteca (450pb). As outras falham pois: A considera o fragmento total, B dobra o tamanho esperado, C subestima drasticamente o inserto e E soma os adaptadores ao total.",
        "difficulty": "fácil"
    },
    {
        "id": 1123,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Ao utilizar a plataforma Covaris (AFA) para fragmentação de DNA, os três parâmetros principais que o biologista deve ajustar para definir o tamanho exato do fragmento alvo são:",
        "options": {
            "A": "Ciclos de PCR, temperatura de anelamento e tempo de extensão.",
            "B": "Temperatura do bloco, concentração de MgCl2 e concentração de primers.",
            "C": "Peak Incident Power (PIP), Duty Factor (%) e Cycles per Burst (CPB).",
            "D": "Voltagem da cuba, tempo de corrida e concentração de agarose.",
            "E": "Volume de etanol, tempo de secagem e volume de eluição."
        },
        "correct": "C",
        "explanation": "A correta é a C porque PIP, Duty Factor e CPB regulam a sonicação focada. As outras falham pois: A usa reagentes de amplificação, B refere-se a tampão enzimático, D são parâmetros de eletroforese e E são etapas de purificação.",
        "difficulty": "fácil"
    },
    {
        "id": 1124,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Bibliotecas preparadas por Tagmentação utilizam a enzima Transposase. Um detalhe crítico observado nos dados gerados é:",
        "options": {
            "A": "Viés de inserção por preferência da transposase.",
            "B": "Fragmentos fixos de 150 pb e preservação de amostras.",
            "C": "Taxa de transições C>T e otimização de protocolos.",
            "D": "Presença de DNA mitocondrial e estabilidade in vitro.",
            "E": "Ausência de reads duplicados e padrões de segurança."
        },
        "correct": "A",
        "explanation": "A correta é a A porque a transposase Tn5 possui preferências de sequência para inserção. As outras falham pois: B gera fragmentos variados, C indica dano químico, D não é específico para mitocôndrias e E gera duplicatas.",
        "difficulty": "fácil"
    },
    {
        "id": 1125,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A quantificação de uma biblioteca resultou em 10 nM por qPCR e 40 nM via Qubit. Qual concentração deve ser usada para o loading?",
        "options": {
            "A": "Uso da medida do Qubit e necessidade de validação.",
            "B": "Descarte da amostra e análise de estabilidade.",
            "C": "Cálculo da média e avaliação do tempo de fluxo.",
            "D": "Uso do qPCR por refletir biblioteca viável.",
            "E": "Uso da maior concentração em cenários controlados."
        },
        "correct": "D",
        "explanation": "A correta é a D pois o qPCR quantifica apenas moléculas com adaptadores funcionais. As outras falham pois: A mede DNA total, B desperdiça amostras viáveis, C gera subcarregamento e E causa sobreposição de clusters.",
        "difficulty": "fácil"
    },
    {
        "id": 1126,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A incorporação de UMIs (Unique Molecular Identifiers) no preparo da biblioteca é especialmente obrigatória para:",
        "options": {
            "A": "Sequenciamento PCR-Free e eficiência analítica.",
            "B": "Preparo de RNA total e métodos ortogonais.",
            "C": "Estudos de microbioma fecal e estabilidade in vitro.",
            "D": "Uso em biópsia líquida para detectar variantes raras.",
            "E": "Tipagem HLA por Sanger em cenários controlados."
        },
        "correct": "D",
        "explanation": "A correta é a D porque UMIs permitem distinguir variantes reais de erros de PCR. As outras falham pois: A não possui PCR, B foca em quantificação, C foca em diversidade e E é tecnologia de primeira geração.",
        "difficulty": "médio"
    },
    {
        "id": 1127,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Em um painel de exoma (WES), a métrica 'Fold-80 penalty' avalia:",
        "options": {
            "A": "Custo por megabase e necessidade de validação.",
            "B": "Quantidade de DNA degradado e validação adicional.",
            "C": "Uniformidade da captura para elevar o alvo à média.",
            "D": "Proporção de erros de fase e controles de reação.",
            "E": "Tempo de lavagem de sondas e métodos ortogonais."
        },
        "correct": "C",
        "explanation": "A correta é a C porque avalia quão uniforme foi o enriquecimento dos alvos. As outras falham pois: A é métrica financeira, B mede integridade física, D refere-se a haplótipos e E é uma etapa técnica.",
        "difficulty": "fácil"
    },
    {
        "id": 1128,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A utilização de adaptadores com índices combinatórios em sequenciadores modernos sofre um grave problema técnico chamado:",
        "options": {
            "A": "Sobrecarga de memória e padrões de segurança.",
            "B": "Index Hopping e falsas atribuições em flow cells.",
            "C": "Desaminação química e sensibilidade ao pH.",
            "D": "Formação de dímeros e uso de métodos ortogonais.",
            "E": "Tagmentação prematura e preservação de amostra."
        },
        "correct": "B",
        "explanation": "A correta é a B porque ocorre em células de fluxo padronizadas da Illumina. As outras falham pois: A é limitação computacional, C é dano por desaminação, D reduz eficiência produtiva e E é falha de protocolo.",
        "difficulty": "fácil"
    },
    {
        "id": 1129,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Durante a extração de DNA, a placa de 'Wash' final sofre secagem excessiva (over-drying). O efeito direto disso será:",
        "options": {
            "A": "Fragmentação do DNA e inviabilidade técnica.",
            "B": "Elevação da concentração e estabilidade in vitro.",
            "C": "Eluição ineficiente por adesão à sílica.",
            "D": "Aumento de proteínas e limites de reprodutibilidade.",
            "E": "Contaminação cruzada e controles de reação."
        },
        "correct": "C",
        "explanation": "A correta é a C porque o DNA se liga irreversivelmente à sílica se desidratado. As outras falham pois: A não causa quebra química, B reduz o rendimento final, D não adiciona contaminantes e E não afeta pureza.",
        "difficulty": "fácil"
    },
    {
        "id": 1130,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A queda drástica de 'Q-score' nas últimas 20 bases da leitura (Read 1) em sequenciadores Illumina está associada a:",
        "options": {
            "A": "Phasing e Pre-phasing que dessincronizam o cluster.",
            "B": "Ausência de MgCl2 e eficiência analítica.",
            "C": "Baixa concentração de loading e controles de reação.",
            "D": "Acúmulo de etanol e estabilidade in vitro.",
            "E": "Degradação de ponteira e validação técnica."
        },
        "correct": "A",
        "explanation": "A correta é a A devido à dessincronização progressiva das moléculas dentro do cluster. As outras falham pois: B afeta catálise, C causa sobreposição inicial, D inibe reação global e E é erro físico.",
        "difficulty": "fácil"
    },
    {
        "id": 1131,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O Controle de Qualidade de NGS aponta alto percentual de 'Optical Duplicates'. Eles são gerados:",
        "options": {
            "A": "Termociclagem em bancada e eficiência analítica.",
            "B": "Contaminação entre poços e preservação de amostra.",
            "C": "Processo de end-repair e protocolos controlados.",
            "D": "Falhas no software BWA e padrões de segurança.",
            "E": "Cluster espalhado ou leitura dupla na flow cell."
        },
        "correct": "E",
        "explanation": "A correta é a E porque o sensor identifica uma única colônia como duas distintas. As outras falham pois: A gera duplicatas de PCR, B é contaminação cruzada, C prepara extremidades e D é software de alinhamento.",
        "difficulty": "fácil"
    },
    {
        "id": 1132,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Se o controle de qualidade espectrofotométrico apresentou uma razão A260/A230 = 0.8, deve-se:",
        "options": {
            "A": "Adição de RNAse A e métodos ortogonais.",
            "B": "Nova purificação com beads para remover sais.",
            "C": "Aquecimento da amostra e variações de pH.",
            "D": "Adição de proteinase K e protocolos controlados.",
            "E": "Continuidade do processo e sensibilidade ao pH."
        },
        "correct": "B",
        "explanation": "A correta é a B porque purificação remove sais caotrópicos que inibem polimerases. As outras falham pois: A remove RNA, C não elimina sais, D digere proteínas e E causa falha no sequenciamento.",
        "difficulty": "médio"
    },
    {
        "id": 1133,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Um técnico utiliza o tubo com heparina (tampa verde) em vez do EDTA. A reação falha porque a heparina:",
        "options": {
            "A": "Inativação de proteases e métodos ortogonais.",
            "B": "Inibição da Taq Polimerase por carga negativa.",
            "C": "Alteração cromática e reprodutibilidade técnica.",
            "D": "Fragmentação do genoma e controles de reação.",
            "E": "Destruição estrutural do DNA em cenários controlados."
        },
        "correct": "B",
        "explanation": "A correta é a B porque a heparina mimetiza o DNA, inibindo competitivamente a Taq Polimerase. As outras falham pois: A refere-se a proteínas, C foca em cor, D trata de fragmentação física e E assume destruição estrutural inexistente.",
        "difficulty": "fácil"
    },
    {
        "id": 1134,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Por que técnicas de Sequenciamento de Long-Reads são superiores ao Illumina na resolução de genes como SMN1/SMN2?",
        "options": {
            "A": "Ausência de preparo e fase pré-analítica.",
            "B": "Menor custo por base e padrões de segurança.",
            "C": "Falha do Illumina e uso de amostras degradadas.",
            "D": "Leituras que distinguem genes de pseudogenes.",
            "E": "Composição de RNA e necessidade de validação."
        },
        "correct": "D",
        "explanation": "A correta é a D pois leituras longas mapeiam regiões homólogas impossíveis para leituras curtas. As outras falham pois: A ignora preparo, B Illumina é mais barata, C não resolve degradação e E envolve RNA irrelevante.",
        "difficulty": "fácil"
    },
    {
        "id": 1135,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "O layout de um laboratório de genômica deve obedecer ao 'fluxo unidirecional'. O racional técnico é:",
        "options": {
            "A": "Prevenção de contaminação por amplicons.",
            "B": "Iluminação de microscópios e controles de reação.",
            "C": "Controle de temperatura e variações de pH.",
            "D": "Facilitação da limpeza e eficiência analítica.",
            "E": "Inalação de reagentes e protocolos controlados."
        },
        "correct": "A",
        "explanation": "A correta é a A porque o fluxo impede que amplicons contaminem áreas limpas pré-PCR. As outras falham pois: B iluminação é funcional, C pH é tamponado, D limpeza é secundária e E inalação requer cabines.",
        "difficulty": "fácil"
    },
    {
        "id": 1136,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "O Controle Preditivo de Qualidade em um sequenciador de grande porte determina que, antes de processar 384 amostras clínicas, deve-se realizar a lavagem de manutenção (Maintenance Wash). A finalidade é:",
        "options": {
            "A": "Lubrificar engrenagens e calibrar métodos internos.",
            "B": "Calibrar leitor de código de barras e validar métodos.",
            "C": "Esterilizar máquina contra vírus e otimizar protocolo.",
            "D": "Remover resíduos e evitar entupimento de agulhas e mangueiras.",
            "E": "Acelerar processadores e monitorar a fase pré-analítica."
        },
        "correct": "D",
        "explanation": "A correta é a D porque remove sais e corantes que entopem as linhas fluídicas. As outras falham pois: A requer lubrificantes específicos, B usa sensores ópticos, C é limpeza química e E foca em eletrônica.",
        "difficulty": "fácil"
    },
    {
        "id": 1137,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Para validação de um ensaio de WES diagnóstico no SUS, o conceito de 'Sensibilidade Analítica' (ou Limite de Detecção) define:",
        "options": {
            "A": "Identificar corretamente indivíduos sem a doença (Verdadeiro Negativo).",
            "B": "Determinar o custo mínimo por megabase e reprodutibilidade de lotes.",
            "C": "Garantir a velocidade de entrega do laudo e controles de reação.",
            "D": "Medir a frequência de falsos positivos em indivíduos saudáveis.",
            "E": "Menor Frequência Alélica (VAF) detectável com confiança estatística."
        },
        "correct": "E",
        "explanation": "A correta é a E pois a sensibilidade analítica define o menor sinal (VAF) detectável. As outras falham pois: A é especificidade, B é economia, C é eficiência operacional e D é taxa de falso-positivo.",
        "difficulty": "fácil"
    },
    {
        "id": 1138,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "A validação da eficácia do ciclo de esterilização das autoclaves do laboratório de genômica é feita obrigatoriamente através de:",
        "options": {
            "A": "Avaliação do odor da carga e uso de controles internos de reação.",
            "B": "Uso de fita termocrômica zebrada que muda de cor a 121°C.",
            "C": "Indicadores Biológicos com esporos de Geobacillus stearothermophilus.",
            "D": "Monitoramento do sensor de pressão da porta e eficiência analítica.",
            "E": "Visualização de vapor ao abrir e validação com métodos ortogonais."
        },
        "correct": "C",
        "explanation": "A correta é a C pois a morte de esporos garante a esterilização biológica efetiva. As outras falham pois: A odor é subjetivo, B fita indica apenas calor, D pressão é insuficiente e E vapor é apenas visual.",
        "difficulty": "fácil"
    },
    {
        "id": 1139,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "De acordo com o ciclo PDCA (Planejar, Fazer, Checar, Agir), na implementação de ações corretivas no laboratório (CAPA):",
        "options": {
            "A": "Execução da etapa Do pela diretoria com métodos ortogonais.",
            "B": "Notificação à polícia civil e adequação aos padrões de segurança.",
            "C": "Checagem da eficácia da ação para impedir a recorrência do erro.",
            "D": "Punição do funcionário e encerramento imediato do problema técnico.",
            "E": "Paralisação total das atividades por 30 dias para validação externa."
        },
        "correct": "C",
        "explanation": "A correta é a C pois a fase de checagem valida se o erro foi mitigado. As outras falham pois: A execução é a etapa Do, B é para crimes, D punição não é qualidade e E paralisar é desnecessário.",
        "difficulty": "fácil"
    },
    {
        "id": 1140,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Na calibração de micropipetas multicanal usadas no preparo de bibliotecas, o 'Erro Aleatório' é reflexo da:",
        "options": {
            "A": "Variação da pressão atmosférica externa e reprodutibilidade.",
            "B": "Exatidão sistêmica da pipeta em relação ao volume alvo desejado.",
            "C": "Falta de habilidade visual do operador e uso de controles internos.",
            "D": "Data de fabricação da ponteira e validação de métodos ortogonais.",
            "E": "Imprecisão da pipeta e grau de dispersão entre medidas repetidas."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o erro aleatório mede a imprecisão e dispersão dos dados. As outras falham pois: A é variável ambiental, B é erro sistemático, C afeta ambos os erros e D é material.",
        "difficulty": "médio"
    },
    {
        "id": 1141,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "O Plano de Gerenciamento de Resíduos de Serviços de Saúde (PGRSS) determina que reagentes químicos genotóxicos como Fenol e Brometo de Etídio vencidos devem ser:",
        "options": {
            "A": "Mistura com hipoclorito e descarte direto no esgoto comum.",
            "B": "Acondicionamento em caixas Descarpack com métodos ortogonais.",
            "C": "Recipientes rígidos (Grupo B) para incineração especializada.",
            "D": "Descarte em saco branco leitoso seguido de autoclavagem local.",
            "E": "Descarte em lixo comum (Grupo D) por evaporação rápida de solvente."
        },
        "correct": "C",
        "explanation": "A correta é a C porque resíduos genotóxicos exigem incineração como resíduo químico perigoso. As outras falham pois: A é crime ambiental, B é para perfurocortantes, D gera vapores tóxicos e E contamina a atmosfera.",
        "difficulty": "fácil"
    },
    {
        "id": 1142,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Um dos grandes desafios no processamento automatizado em placas de 96 poços no Genomas SUS é evitar a 'Borda' (Edge Effect). O que é esse fenômeno técnico e biológico?",
        "options": {
            "A": "Contaminação por luvas e falta de calibração rigorosa de métodos.",
            "B": "Maior evaporação e variação térmica nos poços periféricos da placa.",
            "C": "Quebra mecânica das bordas pela centrífuga e sensibilidade ao pH.",
            "D": "Vazamento magnético de suportes e uso de amostras degradadas.",
            "E": "Dificuldade robótica na leitura lateral de códigos de barras."
        },
        "correct": "B",
        "explanation": "A correta é a B pois poços periféricos sofrem maior troca térmica e evaporação diferencial. As outras falham pois: A é contaminação, C é dano físico, D afeta magnetismo e E é erro óptico.",
        "difficulty": "fácil"
    },
    {
        "id": 1143,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "A limpeza de uma Cabine de Segurança Biológica (CSB) Classe II Tipo A2 em uma sala de extração genômica NÃO DEVE ser feita com:",
        "options": {
            "A": "Hipoclorito de Sódio 10% puro por tempo prolongado (corrosivo).",
            "B": "Papel toalha sem fiapos e validação com métodos ortogonais.",
            "C": "Luz UV ativada por 30 minutos após o turno de trabalho.",
            "D": "Álcool 70% e adequação aos padrões de segurança vigentes.",
            "E": "Água estéril ou destilada para preservação da amostra biológica."
        },
        "correct": "A",
        "explanation": "A correta é a A pois o hipoclorito corrói o aço inox da cabine. As outras falham pois: B é procedimento de limpeza aceito, C utiliza radiação ultravioleta padrão, D emprega álcool para desinfecção e E utiliza água para limpeza.",
        "difficulty": "fácil"
    },
    {
        "id": 1144,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "O conceito de 'Rastreabilidade Metrológica' em BPL significa que:",
        "options": {
            "A": "Presença de código de barras legível e sensibilidade ao pH.",
            "B": "Uso de GPS no tubo de ensaio e validação adicional de processo.",
            "C": "Resultados ligados a padrões internacionais via calibrações.",
            "D": "Publicação em revistas americanas e estabilidade in vitro.",
            "E": "Assinatura médica legível e uso de procedimentos de validação."
        },
        "correct": "C",
        "explanation": "A correta é a C pois vincula as medições a padrões globais. As outras falham pois: A foca em rótulos, B usa geolocalização física, D foca em publicações e E refere-se a assinaturas.",
        "difficulty": "fácil"
    },
    {
        "id": 1145,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "De acordo com as diretrizes de biobanco (Resolução CNS 441), após o falecimento do doador de material genético (Participante da pesquisa):",
        "options": {
            "A": "Destruição imediata do material após a comunicação do óbito.",
            "B": "Venda do material pela família ao mercado externo de biotecnologia.",
            "C": "Acesso restrito a pesquisadores da mesma linhagem do doador.",
            "D": "Transferência da propriedade do material para o Estado brasileiro.",
            "E": "Armazenamento e uso futuro se autorizado expressamente no TCLE."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o TCLE determina o destino do material. As outras falham pois: A descarta material útil, B é venda ilegal, C restringe linhagem indevidamente e D estatiza propriedade privada.",
        "difficulty": "fácil"
    },
    {
        "id": 1146,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "A 'Obrigação de Retorno de Resultados' (Duty to return results) em pesquisas populacionais de genômica estrutural causa intensos debates éticos porque:",
        "options": {
            "A": "Proibição legal de informar pacientes sobre sua própria saúde.",
            "B": "Falta de papel para impressão de laudos e monitoramento técnico.",
            "C": "Tênue linha entre pesquisa acadêmica e diagnóstico clínico validado.",
            "D": "Entrega de resultados restrita a pacientes com recursos financeiros.",
            "E": "Recusa dos correios em entregar laudos contendo dados genéticos."
        },
        "correct": "C",
        "explanation": "A correta é a C pois diferencia pesquisa de diagnóstico clínico validado. As outras falham pois: A alega proibição legal, B foca em insumos, D restringe por renda e E culpa correios.",
        "difficulty": "fácil"
    },
    {
        "id": 1147,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "No desenvolvimento de painéis preditivos (Polygenic Risk Scores) para o Genomas SUS, um cuidado ético de equidade metodológica fundamental deve ser:",
        "options": {
            "A": "Garantir coleta capilar e monitorar a fase pré-analítica.",
            "B": "Excluir mulheres dos cálculos de risco cardiovascular genético.",
            "C": "Realizar algoritmos em inglês e adequar padrões de segurança.",
            "D": "Aplicar a mesma taxa de risco para todas as idades dos pacientes.",
            "E": "Modelos que espelhem a ancestralidade miscigenada brasileira."
        },
        "correct": "E",
        "explanation": "A correta é a E pois considera a miscigenação populacional brasileira. As outras falham pois: A foca em coleta, B exclui mulheres, C foca em idioma e D ignora idade.",
        "difficulty": "fácil"
    },
    {
        "id": 1148,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "A implementação da Lei Geral de Proteção de Dados (LGPD) no processamento do fluxo de exoma humano introduziu os princípios do 'Privacy by Design' (Privacidade desde a concepção). Na prática da arquitetura de LIMS, isso significa:",
        "options": {
            "A": "Ausência de direito legal do paciente aos próprios dados.",
            "B": "Uso obrigatório de etiquetas RFID para rastreio de amostras.",
            "C": "Compra de firewalls específicos e adequação de segurança.",
            "D": "Proteção e anonimização como base padrão inicial do software.",
            "E": "Ocultação do IP do pesquisador na rede local do laboratório."
        },
        "correct": "D",
        "explanation": "A correta é a D pois integra privacidade nativamente ao software. As outras falham pois: A nega direitos, B foca em rastreio físico, C é segurança periférica e E oculta IPs.",
        "difficulty": "fácil"
    },
    {
        "id": 1149,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Em relação ao envio de remessas biológicas humanas (DNA extraído do SUS) ao exterior (ex: para sequenciamento em grande escala na China ou EUA), a regulamentação sanitária e ética exige a emissão e aprovação da:",
        "options": {
            "A": "Permissão de importação do FDA e calibração de métodos.",
            "B": "Nota Fiscal de exportação animal do Ministério da Agricultura.",
            "C": "Registro de Cidadania Consular do doador e estabilidade in vitro.",
            "D": "Substituição de nomes por letras gregas e validação ortogonal.",
            "E": "Aprovação da CONEP, ANVISA e assinatura de termo MTA."
        },
        "correct": "E",
        "explanation": "A correta é a E pois exige autorizações éticas, sanitárias e contratuais. As outras falham pois: A foca no FDA, B cita agricultura, C foca em cidadania e D em nomenclatura.",
        "difficulty": "fácil"
    },
    {
        "id": 1150,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Para estudos que utilizam dados genômicos secundários (ex: reanálise de dados de WGS depositados anos antes num banco para um novo propósito), a exigência de TCLE pode ser modificada?",
        "options": {
            "A": "Sim, se anonimizadas e houver dispensa autorizada pelo CEP.",
            "B": "Sim, sem necessidade de informar o CEP ou validar métodos.",
            "C": "Sim, se o paciente for homem e houver preservação da amostra.",
            "D": "Sim, se a reanálise gerar lucros e houver validação adicional.",
            "E": "Não, exige-se obrigatoriamente novo consentimento presencial."
        },
        "correct": "A",
        "explanation": "A correta é a A pois o CEP autoriza dispensa se anonimizado. As outras falham pois: B ignora ética, C foca em gênero, D visa lucro e E exige presencial.",
        "difficulty": "fácil"
    },
    {
        "id": 1151,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "O escândalo histórico envolvendo a tribo indígena Havasupai e pesquisadores acadêmicos (um marco na regulação genômica) reflete uma grave violação de qual princípio em pesquisas populacionais?",
        "options": {
            "A": "Contaminação intencional do DNA e monitoramento pré-analítico.",
            "B": "Desvio de Consentimento para fins não autorizados pelo doador.",
            "C": "Quebra mecânica de ampolas e adequação aos padrões de segurança.",
            "D": "Publicação em revistas predatórias e monitoramento técnico.",
            "E": "Descarte incorreto de resíduos e tempo de manipulação no fluxo."
        },
        "correct": "B",
        "explanation": "A correta é a B pois violou a finalidade do consentimento original. As outras falham pois: A cita contaminação, C foca em ampolas, D em periódicos e E em resíduos.",
        "difficulty": "fácil"
    },
    {
        "id": 1152,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "No delineamento metodológico de estudos epidemiológicos com genômica (Ex: GWAs do Genomas SUS), a correção estatística por Testes Múltiplos (Ex: p < 5x10^-8) é ao mesmo tempo uma questão estatística e ÉTICA porque:",
        "options": {
            "A": "Ocultação de resultados reais e validação de métodos ortogonais.",
            "B": "Demanda dos pacientes por números extensos e estabilidade.",
            "C": "Facilitação de prêmios acadêmicos e sensibilidade ao pH.",
            "D": "Prevenção de falsos positivos e desperdício de verba pública.",
            "E": "Cobrança por clique algorítmico e validação de métodos."
        },
        "correct": "D",
        "explanation": "A correta é a D pois o rigor estatístico evita decisões de saúde equivocadas. As outras falham pois: A oculta dados, B foca em volume, C visa prêmios e E em cliques.",
        "difficulty": "médio"
    },
    {
        "id": 1153,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Na pesquisa populacional em genômica, o engajamento comunitário (Community Engagement) é preconizado pelas boas práticas de governança. O que isso significa na prática de execução do Genomas SUS?",
        "options": {
            "A": "Prometer prêmios financeiros e aumento do tempo de fluxo.",
            "B": "Sorteio de vagas de estágio e estabilidade in vitro da amostra.",
            "C": "Código de sequenciador aberto e padrões de segurança vigentes.",
            "D": "Diálogo transparente com a sociedade sobre limites e ética.",
            "E": "Pagamento de anúncios na mídia e monitoramento pré-analítico."
        },
        "correct": "D",
        "explanation": "A correta é a D pois o engajamento envolve transparência e diálogo ético com a comunidade. As outras falham pois: A oferece incentivos financeiros indevidos, B foca em sorteios irrelevantes, C trata de software e E foca em publicidade paga.",
        "difficulty": "fácil"
    },
    {
        "id": 1154,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "O termo genômico 'ACMG Secondary Findings v3.2' lista atualmente 73 genes altamente acionáveis. Do ponto de vista dos Comitês de Ética, o que é um gene clinicamente 'acionável' no contexto da devolução de resultados de pesquisa?",
        "options": {
            "A": "Genes de altura ou cor da pele e estabilidade in vitro.",
            "B": "Genes de doenças intratáveis e monitoramento pré-analítico.",
            "C": "Genes sem teste comercial e validação adicional de métodos.",
            "D": "Variante onde intervenção preventiva gera alta eficácia clínica.",
            "E": "Qualquer variante futura e otimização em condições controladas."
        },
        "correct": "D",
        "explanation": "A correta é a D porque genes acionáveis permitem intervenções médicas com eficácia clínica comprovada. As outras falham pois: A trata de traços estéticos, B foca em doenças incuráveis, C refere-se à disponibilidade comercial e E é puramente especulativa.",
        "difficulty": "médio"
    },
    {
        "id": 1155,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "A qualidade analítica do equipamento Pipetador Automatizado Robótico do laboratório deve passar por Qualificação de Instalação (QI), Operação (QO) e Desempenho (QD). A QO garante que:",
        "options": {
            "A": "Desembalagem no local correto e monitoramento pré-analítico.",
            "B": "Cor dos cabos de energia e validação de métodos ortogonais.",
            "C": "Funcionamento conforme as especificações do fabricante.",
            "D": "Processamento de DNA real e preservação da amostra biológica.",
            "E": "Currículo do operador e padrões de segurança vigentes."
        },
        "correct": "C",
        "explanation": "A correta é a C pois a QO valida se as funções mecânicas operam conforme o manual. As outras falham pois: A é etapa de instalação, B é detalhe irrelevante, D é desempenho real e E trata de RH.",
        "difficulty": "fácil"
    },
    {
        "id": 1156,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Na acreditação ISO 15189 (Requisitos para a Qualidade e Competência em Laboratórios Clínicos), a Política de Gestão de Riscos atua sobre WGS para:",
        "options": {
            "A": "Proteção financeira com seguros e tempo de manipulação.",
            "B": "Gestão de contratos de aluguel e padrões de segurança.",
            "C": "Redução da taxa de Qubit e calibração rigorosa de métodos.",
            "D": "Mapeamento de riscos ao paciente e criação de barreiras.",
            "E": "Garantia de férias remuneradas e validação de métodos."
        },
        "correct": "D",
        "explanation": "A correta é a D pois foca em prevenir erros que impactem diretamente a segurança do paciente. As outras falham pois: A foca em seguros, B em contratos, C em métricas técnicas e E em benefícios trabalhistas.",
        "difficulty": "fácil"
    },
    {
        "id": 1157,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Sobre o monitoramento de infraestrutura crítica de um laboratório genômico no Sistema Zabbix/Cloud: Qual falha invisível de sistema causaria uma quebra do ciclo de Qualidade em WGS de forma silenciosa e letal aos dados durante a noite?",
        "options": {
            "A": "Falha nos sistemas de UPS/NoBreak durante o sequenciamento.",
            "B": "Uso de luz incandescente e validação de métodos ortogonais.",
            "C": "Descarregamento do alarme de incêndio e sensibilidade ao pH.",
            "D": "Queda de internet no celular e monitoramento pré-analítico.",
            "E": "Falha no exaustor do banheiro e calibração de métodos."
        },
        "correct": "A",
        "explanation": "A correta é a A pois a queda de energia interrompe o sequenciamento e destrói o ciclo químico. As outras falham pois: B não afeta dados, C é irrelevante ao ciclo, D interrompe apenas monitoramento e E é falha predial trivial.",
        "difficulty": "fácil"
    },
    {
        "id": 1158,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Uma não-conformidade clássica identificada em auditoria BPL (Boas Práticas de Laboratório) durante as etapas pré-analíticas é o fracionamento incorreto do soro/plasma. Qual problema molecular a hemólise ou maceração agressiva dos tubos de sangue de coleta causa no pipeline genômico downstream?",
        "options": {
            "A": "Destruição de tampas e validação de métodos ortogonais.",
            "B": "Aceleração do ciclo de Krebs e preservação da amostra.",
            "C": "Liberação de porfirinas e heme que inibem a DNA Polimerase.",
            "D": "Aumento da precisão de beads e validação de procedimentos.",
            "E": "Criação de cristais na centrífuga e monitoramento técnico."
        },
        "correct": "C",
        "explanation": "A correta é a C porque o grupamento heme é um potente inibidor enzimático da polimerase. As outras falham pois: A é dano físico, B é bioquímica celular, D foca em esferas e E em resíduos físicos.",
        "difficulty": "fácil"
    },
    {
        "id": 1159,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "Como a triagem genômica pediátrica preventiva eleva absurdamente esse índice econômico favorável ao governo?",
        "options": {
            "A": "Aumento de vendas em farmácias e adequação de segurança.",
            "B": "Prevenção de danos graves e redução de custos hospitalares.",
            "C": "Geração de subempregos e reprodutibilidade entre lotes.",
            "D": "Pagamentos em moeda estrangeira e calibração de métodos.",
            "E": "Isolamento hospitalar e adequação aos padrões de segurança."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o diagnóstico precoce evita gastos massivos com tratamentos crônicos e UTIs. As outras falham pois: A aumenta custos, C gera subempregos, D trata de câmbio e E foca em hospitalização.",
        "difficulty": "fácil"
    },
    {
        "id": 1160,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "Qual é a relação intrínseca do Planejamento Orçamentário e a Logística de Insumos da vigilância epidemiológica baseada em WGS dentro de um LACEN regionalizado operando o Genomas SUS?",
        "options": {
            "A": "Manter cadeia de frio e estoque para evitar atrasos (TAT).",
            "B": "Reduzir reagentes em surtos e preservação da amostra.",
            "C": "Contratação de estatutários e validação adicional.",
            "D": "Armazenar amostras sem análise e controles internos.",
            "E": "Redução de processos computacionais e sensibilidade ao pH."
        },
        "correct": "A",
        "explanation": "A correta é a A pois insumos genômicos exigem cadeia de frio rigorosa e estoque para agilidade. As outras falham pois: B reduz capacidade, C é contratação, D gera atrasos e E foca em software.",
        "difficulty": "fácil"
    },
    {
        "id": 1161,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O conceito da Taxa de Conversão (Conversion Rate) de extração robótica em NGS tem impacto direto no custo da operação pública em larga escala (Exoma no SUS). O que ela avalia numericamente?",
        "options": {
            "A": "Eficiência energética e estabilidade analítica do hardware em laboratório.",
            "B": "Eficiência na conversão de arquivos BAM para VCF em condições controladas.",
            "C": "Rendimento da transcrição de DNA para proteína em amostras degradadas.",
            "D": "Número de genomas mutados monitorados na fase pré-analítica do sistema.",
            "E": "Sucesso produtivo: percentual de amostras que superam o QC sem falhas."
        },
        "correct": "E",
        "explanation": "A correta é a E pois mede a eficiência produtiva evitando o desperdício de insumos caros. As outras falham pois: A avalia hardware, B é bioinformática, C é biologia molecular e D foca em mutações.",
        "difficulty": "difícil"
    },
    {
        "id": 1162,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Uma auditoria federal exige os Documentos Constitutivos (Regulatory Binder) em um braço operacional de pesquisa clínica voltada a dados genômicos no SUS. Entre esses arquivos de registro primários e imprescindíveis, o que os auditores checam de maneira prioritária no Trial Master File (TMF)?",
        "options": {
            "A": "Currículos e registros de fomento.",
            "B": "Relatórios fiscais e tributários.",
            "C": "Emendas, TCLEs e logs de treino.",
            "D": "Softwares e registros bancários.",
            "E": "Atestados e sistemas desativados."
        },
        "correct": "C",
        "explanation": "A correta é a C pois garante a legalidade ética e o cumprimento documental dos protocolos clínicos. As outras falham pois: A foca em fomento, B em impostos, D em finanças e E em sistemas obsoletos.",
        "difficulty": "fácil"
    },
    {
        "id": 1163,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Em um ensaio Illumina (NovaSeq 6000), o bioinformata percebe falhas agudas durante as chamadas da 'Base Y', pois na química do instrumento em configuração nativa 2-colors, essa base é identificada na engenharia do equipamento por:",
        "options": {
            "A": "Ausência total de sinal luminoso.",
            "B": "Uso de lâmpadas dicróicas azuis.",
            "C": "Reação química de base Timina.",
            "D": "Detecção elétrica por nanoporos.",
            "E": "Emissão de flashes por lasers."
        },
        "correct": "A",
        "explanation": "A correta é a A pois a Guanina não emite sinal na química 2-colors. As outras falham pois: B usa filtros, C é outra base, D é tecnologia concorrente e E é método de detecção.",
        "difficulty": "médio"
    },
    {
        "id": 1164,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Qual destas condutas de manipulação direta de DNA genômico purificado para a preservação preventiva da cadeia de alto peso molecular na placa garante que não haverá formação excessiva de ressecamento e quebras (clivagem física indesejável) geradas por manipulação na etapa pré-analítica nos reservatórios criogênicos do biobanco brasileiro antes das pipetagens para biblioteca?",
        "options": {
            "A": "Uso de vórtex na ressuspensão.",
            "B": "Ressuspensão em água ácida.",
            "C": "Lavagem da sílica sob vácuo.",
            "D": "Alíquotas e degelo lento.",
            "E": "Descongelamento a 95ºC."
        },
        "correct": "D",
        "explanation": "A correta é a D porque alíquotas evitam ciclos de congelamento que quebram o DNA. As outras falham pois: A cisalha fisicamente, B hidrolisa a fita, C estressa a molécula e E desnatura termicamente.",
        "difficulty": "fácil"
    },
    {
        "id": 1165,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Ao checar a eficiência volumétrica das bibliotecas com 'Fluorímetro Qubit', o princípio mecânico fotométrico confere uma precisão analítica gigante contra erros. Por que o Fluorímetro consegue ignorar que o tubo possui 80% do peso composto por fragmentos de RNA residual ou de nucleotídeos de ponteiras contaminadas?",
        "options": {
            "A": "Medição gravimétrica e plasma.",
            "B": "Uso de campos magnéticos.",
            "C": "Aquecimento da citosina.",
            "D": "Injeção de sondas de RNA.",
            "E": "Corante na dupla-hélice."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o corante só fluoresce ligado especificamente à dupla-fita de DNA. As outras falham pois: A mede massa, B separa fisicamente, C não quantifica e D detectaria RNA.",
        "difficulty": "fácil"
    },
    {
        "id": 1166,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "As bibliotecas construídas pelo concept 'PCR-Free' são exigidas pelo mercado mundial clínico e pelo Genoma SUS para amostras ricas em DNA íntegro disponíveis. Mas por que as chamadas bibliotecas TruSeq 'Convencionais' (com Amplificação) produzem taxas de duplicação PCR altas e o que é o fenômeno do PCR Duplicate nas ferramentas bioinformáticas pós-sequenciamento fotográfico?",
        "options": {
            "A": "Superaquecimento da flow cell.",
            "B": "Sequências falsas via BQSR.",
            "C": "Quebra enzimática e clusters.",
            "D": "Duplicação de cromossomos.",
            "E": "Moléculas idênticas via PCR."
        },
        "correct": "E",
        "explanation": "A correta é a E pois duplicatas de PCR são cópias idênticas geradas por amplificação excessiva. As outras falham pois: A causa ruído, B recalibra qualidade, C são aglomerados e D é alteração cromossômica.",
        "difficulty": "médio"
    },
    {
        "id": 1167,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "Um painel clínico sequenciado pelo SUS busca por variantes germinativas com Penetração (Penetrance) de 95% ligadas a Cardiomiopatia Dilatada e Morte Súbita numa coorte da saúde populacional. Do ponto de vista de predição preventiva ética de retorno aos participantes no painel genético governamental, uma penetrância dessa envergadura obriga os serviços a...",
        "options": {
            "A": "Aconselhar e intervir cedo.",
            "B": "Relatar sem intervir cedo.",
            "C": "Omitir por ser caso tardio.",
            "D": "Indicar transplante de órgãos.",
            "E": "Cancelar o registro no SUS."
        },
        "correct": "A",
        "explanation": "A correta é a A pois alta penetrância exige aconselhamento genético e intervenção preventiva precoce. As outras falham pois: B omite tratamento, C é antiético, D é medida terminal e E é erro administrativo.",
        "difficulty": "médio"
    },
    {
        "id": 1168,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Estudos de genética em subpopulações segregadas geraram a declaração do 'Caso Havasupai', um evento divisor de águas nos direitos e restrições metodológicas de coletas no mundo todo. Esse caso na justiça obrigou que as plataformas e redes universitárias mundiais proibissem para sempre a prática do:",
        "options": {
            "A": "Extração de metais preciosos.",
            "B": "Uso sem novo consentimento.",
            "C": "Restrições matrimoniais.",
            "D": "Descarte de material no mar.",
            "E": "Publicação em língua nativa."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o caso Havasupai proibiu pesquisas sem consentimento específico dos doadores. As outras falham pois: A é mineração, C é social, D é ambiental e E é linguística.",
        "difficulty": "fácil"
    },
    {
        "id": 1169,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Por exigência da ANVISA RDC-222, o que acontecerá obrigatoriamente se um Biomédico ou Técnico Genômico tentar purificar DNA (Método Orgânico Fenol Clorofórmio Extensivo Frio / Cloreto em capela química) e cometer o erro técnico primário grave de descartar e escoar a fase proteica tóxica orgânica excedente no ralo da pia das lixeiras hospitalares ou despejar nas 'Bag Leitosas' virgens Grupo A padrão biológico de autoclaves da base?",
        "options": {
            "A": "Entupimento da rede de esgoto.",
            "B": "Formação de chuvas ácidas.",
            "C": "Explosão da capela química.",
            "D": "Vapor tóxico na autoclavagem.",
            "E": "Dissolução de embalagens."
        },
        "correct": "D",
        "explanation": "A correta é a D porque o fenol volatiliza na autoclave gerando vapores químicos letais. As outras falham pois: A é hidráulico, B é atmosférico, C é improvável e E é dano material.",
        "difficulty": "fácil"
    },
    {
        "id": 1170,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O fenômeno do 'Imprinting Genômico' resulta na expressão monoalélica de determinados genes dependendo da origem parental. Qual o mecanismo molecular primário responsável por estabelecer essa marcação epigenética durante a gametogênese?",
        "options": {
            "A": "Mecanismo de splicing alternativo durante a maturação do RNA mensageiro.",
            "B": "Fosforilação da enzima RNA polimerase II na fase de iniciação gênica.",
            "C": "Acetilação de histonas H3K27 para remodelação estrutural do nucleossomo.",
            "D": "Degradação de transcritos por microRNAs na regulação pós-transcricional.",
            "E": "Metilação de resíduos de citosina localizados em ilhas CpG promotoras."
        },
        "correct": "E",
        "explanation": "A correta é a E pois a metilação em ilhas CpG silencia a expressão de alelos parentais específicos. As outras falham pois: A edita RNA, B inicia transcrição, C abre cromatina e D degrada transcritos.",
        "difficulty": "fácil"
    },
    {
        "id": 1171,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Mutações patogênicas em genes do complexo SWI/SNF são frequentemente identificadas em sequenciamentos oncológicos. A função canônica desse complexo na biologia molecular celular é:",
        "options": {
            "A": "Atividade de helicase na replicação de telômeros em cenários controlados.",
            "B": "Reparo de quebras de fita dupla por mecanismos de recombinação homóloga.",
            "C": "Remodelamento da cromatina via ATP para acesso de fatores de transcrição.",
            "D": "Transporte nuclear de tRNAs sensível a variações de pH no meio celular.",
            "E": "Adição de cauda poli-A ao mRNA aumentando o tempo de processamento gênico."
        },
        "correct": "C",
        "explanation": "A correta é a C pois o SWI/SNF usa ATP para remodelar nucleossomos e abrir a cromatina. As outras falham pois: A replica telômeros, B repara quebras, D transporta RNA e E processa mRNA.",
        "difficulty": "fácil"
    },
    {
        "id": 1172,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Na síndrome do X Frágil e doença de Huntington, o mecanismo mutacional subjacente não é uma substituição de base simples (SNV), mas sim:",
        "options": {
            "A": "Deleção de múltiplos éxons monitorada estritamente na fase analítica.",
            "B": "Inserção de retrotransponsons Alu validados por métodos de bancada.",
            "C": "Aneuploidia cromossômica requerendo calibração rigorosa dos resultados.",
            "D": "Inversão paracêntrica inviável em amostras severamente degradadas.",
            "E": "Expansão de trinucleotídeos por escorregamento da polimerase na replicação."
        },
        "correct": "E",
        "explanation": "A correta é a E porque o escorregamento da polimerase gera expansão patológica de repetições de trinucleotídeos. As outras falham pois: A deleta éxons, B insere elementos, C muda ploidia e D inverte segmentos.",
        "difficulty": "fácil"
    },
    {
        "id": 1173,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Durante a transcrição eucariótica, qual o papel dos elementos 'Enhancers' (intensificadores)?",
        "options": {
            "A": "Proteínas ativadoras da RNA polimerase I sensíveis a variações de pH.",
            "B": "Sequências de DNA distantes que formam alças para amplificar a transcrição.",
            "C": "Atuação como códons de parada requerendo validação adicional de rotina.",
            "D": "Sequências de RNA que se ligam ao ribossomo em condições controladas.",
            "E": "Degradação de mRNAs concorrentes conforme padrões de segurança vigentes."
        },
        "correct": "B",
        "explanation": "A correta é a B pois enhancers formam alças físicas para interagir com promotores. As outras falham pois: A descreve proteínas e pH, C confunde com tradução, D cita RNA e ribossomos e E envolve degradação.",
        "difficulty": "fácil"
    },
    {
        "id": 1174,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "A heteroplasmia mitocondrial apresenta um desafio na detecção genética porque:",
        "options": {
            "A": "Mistura variável de mtDNA mutante e selvagem em uma mesma célula.",
            "B": "Ausência de DNA próprio em mitocôndrias influenciando a estabilidade.",
            "C": "Correção de mutações pelo sistema NER monitorada na fase pré-analítica.",
            "D": "Composição do DNA mitocondrial por RNA sob padrões de segurança vigentes.",
            "E": "Herança exclusivamente paterna que altera a eficiência analítica final."
        },
        "correct": "A",
        "explanation": "A correta é a A por definir a mistura variável de mitocôndrias mutantes e selvagens. As outras falham pois: B nega DNA mitocondrial, C cita reparo nuclear NER, D afirma ser RNA e E diz que a herança é paterna.",
        "difficulty": "fácil"
    },
    {
        "id": 1175,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "As topoisomerases são enzimas críticas durante a replicação e transcrição do DNA porque:",
        "options": {
            "A": "Prevenção da oxidação de telômeros monitorada na fase pré-analítica.",
            "B": "Síntese de primers de RNA sob padrões rigorosos de segurança biológica.",
            "C": "Alívio da tensão torsional via quebras temporárias na fita de DNA.",
            "D": "Deslizamento do ribossomo no mRNA sensível a variações de pH celular.",
            "E": "Ligação de fragmentos de Okazaki que aumenta o tempo de manipulação."
        },
        "correct": "C",
        "explanation": "A correta é a C pois aliviam tensão torsional via quebras transitórias. As outras falham pois: A foca em oxidação telomérica, B descreve primases, D refere-se a ribossomos e E confunde com a ligase.",
        "difficulty": "fácil"
    },
    {
        "id": 1176,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O conceito de 'Pseudogene' em análises de WES/WGS é considerado um forte complicador diagnóstico pois:",
        "options": {
            "A": "Letalidade neonatal e influência direta na estabilidade in vitro.",
            "B": "Alta similaridade de sequência causando alinhamento ambíguo no NGS.",
            "C": "Exclusividade de uracila no DNA demandando validação ortogonal.",
            "D": "Bloqueio físico da DNA polimerase em condições laboratoriais padrão.",
            "E": "Composição inteiramente histônica inviável em amostras degradadas."
        },
        "correct": "B",
        "explanation": "A correta é a B devido à alta homologia causando erros de mapeamento NGS. As outras falham pois: A cita letalidade neonatal, C menciona uracila no DNA, D sugere bloqueio físico e E refere-se a histonas.",
        "difficulty": "fácil"
    },
    {
        "id": 1177,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "A pleiotropia é um fenômeno genético no qual:",
        "options": {
            "A": "Expressão gênica ligada ao sexo masculino e segurança biológica.",
            "B": "Múltiplos genes distintos causando o mesmo fenótipo clínico.",
            "C": "Mascaramento do alelo dominante pelo recessivo limitando a precisão.",
            "D": "Ocorrência de mutações em tecidos somáticos após o nascimento.",
            "E": "Um único gene afetando múltiplas características fenotípicas distintas."
        },
        "correct": "E",
        "explanation": "A correta é a E pois um único gene influencia múltiplos fenótipos distintos. As outras falham pois: A liga ao sexo, B descreve heterogeneidade de lótus, C cita dominância e D foca em mosaicismo.",
        "difficulty": "fácil"
    },
    {
        "id": 1178,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O processo conhecido como 'Escape do Nonsense-Mediated Decay (NMD)' tem relevância clínica direta porque:",
        "options": {
            "A": "Impedimento de splicing exigindo o uso de controles internos de validação.",
            "B": "Garantia de produção excessiva de ribossomos monitorada em bancada.",
            "C": "Exclusão do códon de iniciação AUG limitando a reprodutibilidade.",
            "D": "Permanência de mRNA com stop prematuro gerando proteína truncada.",
            "E": "Conserto da mutação original sensível a variações de pH no tampão."
        },
        "correct": "D",
        "explanation": "A correta é a D pois mRNAs com stop prematuro persistem gerando proteínas truncadas. As outras falham pois: A cita splicing, B foca em ribossomos, C menciona iniciação e E refere-se a reparo químico.",
        "difficulty": "fácil"
    },
    {
        "id": 1179,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Em sequenciamentos focados em pesquisa de ancestralidade e evolução humana, o Cromossomo Y e o DNA Mitocondrial são altamente informativos porque:",
        "options": {
            "A": "Recombinação total a cada geração influenciando a estabilidade in vitro.",
            "B": "Herança não-recombinante permitindo o rastreio de linhagens puras.",
            "C": "Presença exclusiva em células germinativas exigindo validação ortogonal.",
            "D": "Maior taxa de crossing-over do genoma monitorada na fase pré-analítica.",
            "E": "Codificação de genes equivalente ao cromossomo 1 sob normas de segurança."
        },
        "correct": "B",
        "explanation": "A correta é a B pela ausência de recombinação preservando a linhagem genética. As outras falham pois: A sugere recombinação total, C restringe a germinativas, D cita crossing-over e E compara com autossomos.",
        "difficulty": "fácil"
    },
    {
        "id": 1180,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O fenômeno de 'Index Hopping' no sequenciamento em flow cells padronizadas (Patterned Flow Cells) da Illumina é caracterizado por:",
        "options": {
            "A": "Incapacidade da polimerase em incorporar citosina sob variações de pH.",
            "B": "Inversão das fitas no software demandando o uso de controles internos.",
            "C": "Falha de foco do laser nos clusters exigindo calibração rigorosa.",
            "D": "Atribuição incorreta de reads entre pacientes via barcodes flutuantes.",
            "E": "Quebra física do equipamento durante a lavagem por falha operacional."
        },
        "correct": "D",
        "explanation": "A correta é a D pela atribuição errônea de barcodes entre diferentes amostras. As outras falham pois: A culpa o pH, B cita inversão de fitas, C foca no laser e E refere-se a dano físico.",
        "difficulty": "fácil"
    },
    {
        "id": 1181,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A biblioteca de RNA-Seq deve eliminar massivamente o rRNA (RNA ribossômico) porque:",
        "options": {
            "A": "Incompatibilidade mecânica com sequenciadores Illumina em cenários reais.",
            "B": "Abundância extrema (>80%) sem informação codificante de interesse.",
            "C": "Degradação da flow cell de vidro limitando a reprodutibilidade técnica.",
            "D": "Ausência de uracila detectável requerendo adequação a normas de segurança.",
            "E": "Inibição enzimática da transcriptase reversa em condições controladas."
        },
        "correct": "B",
        "explanation": "A correta é a B devido à sua extrema abundância sem relevância diagnóstica. As outras falham pois: A sugere incompatibilidade física, C cita degradação técnica, D menciona uracila e E refere-se a inibição.",
        "difficulty": "fácil"
    },
    {
        "id": 1182,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Na extração de cfDNA (Cell-free DNA) de plasma sanguíneo, o protocolo deve focar majoritariamente no isolamento de fragmentos de que tamanho aproximado?",
        "options": {
            "A": "Fragmentos menores que 20 pb demandando validação ortogonal de bancada.",
            "B": "Tamanho entre 500 e 800 pb limitando a reprodutibilidade dos resultados.",
            "C": "Comprimento de 10.000 pb exigindo calibração rigorosa dos equipamentos.",
            "D": "Faixa de 1.000 a 2.000 pb requerendo adequação aos padrões de segurança.",
            "E": "Cerca de 166 pb, correspondente ao DNA enrolado em um nucleossomo."
        },
        "correct": "E",
        "explanation": "A correta é a E refletindo o tamanho do DNA protegido por nucleossomos. As outras falham pois: A cita fragmentos minúsculos e B, C e D descrevem comprimentos excessivos.",
        "difficulty": "fácil"
    },
    {
        "id": 1183,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Em relação ao uso da tecnologia de Captura Híbrida (Hybrid Capture) na preparação de bibliotecas de Exoma Clínico (WES):",
        "options": {
            "A": "Captura física de moléculas via esferas magnéticas com estreptavidina.",
            "B": "Sondas desenhadas para hibridizar apenas com sequências intrônicas.",
            "C": "Dispensa de amplificação por PCR aumentando o tempo de manipulação.",
            "D": "Aumento da complexidade da biblioteca exigindo validação adicional.",
            "E": "Substituição da sonicação mecânica sensível a variações de pH do meio."
        },
        "correct": "A",
        "explanation": "A correta é a A pois esferas de estreptavidina capturam as sondas biotinadas ligadas ao alvo. As outras falham pois: B foca éxons, C requer PCR, D simplifica biblioteca, E mecânica.",
        "difficulty": "fácil"
    },
    {
        "id": 1184,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O conceito de UMIs (Unique Molecular Identifiers) em painéis oncológicos ultrassensíveis permite ao algoritmo bioinformático diferenciar:",
        "options": {
            "A": "Diferenciação sexual da amostra monitorada na fase pré-analítica.",
            "B": "Distinção entre translocações e inserções influenciando a estabilidade.",
            "C": "Separação de éxons e íntrons inviável em amostras muito degradadas.",
            "D": "Diferenciação de DNA humano e bacteriano via métodos ortogonais.",
            "E": "Distinção entre erros de PCR e variantes biológicas reais de baixa VAF."
        },
        "correct": "E",
        "explanation": "A correta é a E pois UMIs identificam erros de PCR ao rotularem cada molécula original. As outras falham pois: A identifica sexo, B translocações, C hibridização, D homologia.",
        "difficulty": "médio"
    },
    {
        "id": 1185,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Um erro no preparo de NaOH (Soda Cáustica diluída) para a etapa de desnaturação de bibliotecas antes do sequenciamento Illumina afetará severamente:",
        "options": {
            "A": "Alteração da fluorescência emitida pelos lasers em cenários controlados.",
            "B": "Falha no reparo de extremidades dos adaptadores em conformidade técnica.",
            "C": "Quebra mecânica de fragmentos exigindo controles internos de validação.",
            "D": "Impedimento da conversão para fita simples, anulando os clusters.",
            "E": "Inibição da enzima ligase demandando validação adicional de bancada."
        },
        "correct": "D",
        "explanation": "A correta é a D pois o NaOH desnatura o DNA permitindo hibridização na flow-cell. As outras falham pois: A laser, B reparo, C shearing, E ligação.",
        "difficulty": "fácil"
    },
    {
        "id": 1186,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O Oxford Nanopore Technologies (ONT) utiliza sequenciamento elétrico. O parâmetro conhecido como 'Adaptive Sampling' (Read Until) permite:",
        "options": {
            "A": "Evaporar moléculas de RNA via validação laboratorial na fase pré-analítica.",
            "B": "Recuperar a fita para sequenciar dez vezes exigindo controles internos.",
            "C": "Rejeitar fragmentos indesejados em tempo real invertendo a voltagem do poro.",
            "D": "Cortar adaptadores com laser UV preservando a integridade física da amostra.",
            "E": "Aumentar a voltagem para acelerar o processo sob monitoramento técnico. "
        },
        "correct": "C",
        "explanation": "A correta é a C pois a inversão da voltagem ejeta fragmentos indesejados em tempo real. As outras falham pois: A evaporação, B repetição, D lasers, E velocidade.",
        "difficulty": "fácil"
    },
    {
        "id": 1187,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O que o indicador bioinformático 'GC-Bias' acentuado em formato de sino de ponta cabeça (curva 'sorriso' na análise FASTQC) sinaliza tecnicamente?",
        "options": {
            "A": "Taxa zero de erro na máquina exigindo calibração e controles internos.",
            "B": "Sub-representação de reads em regiões ricas em AT ou GC por falha na PCR.",
            "C": "DNA com alta pureza monitorado na fase pré-analítica e validado em bancada.",
            "D": "Uso de tagmentação em amostras degradadas com validação ortogonal de pH.",
            "E": "Alta eficácia de ligação com sensibilidade ao pH e limites de lotes. "
        },
        "correct": "B",
        "explanation": "A correta é a B pois regiões ricas em AT/GC amplificam mal gerando falhas de cobertura. As outras falham pois: A erro-zero, C pureza, D tagmentação, E pH.",
        "difficulty": "fácil"
    },
    {
        "id": 1188,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O sequenciamento 'Mate-Pair' difere do 'Paired-End' padrão porque:",
        "options": {
            "A": "Leitura simultânea em duas direções em amostras severamente degradadas.",
            "B": "Pareamento de RNA não codificante com DNA exigindo calibração rigorosa.",
            "C": "Uso exclusivo em PacBio sob normas de segurança e controles de reação.",
            "D": "Foco em fragmentos curtos com sensibilidade ao pH e monitoramento técnico.",
            "E": "Circularização de fragmentos longos para mapear junções genômicas distantes."
        },
        "correct": "E",
        "explanation": "A correta é a E pois a circularização permite aproximar e sequenciar extremidades de fragmentos longos. As outras falham pois: A direcionalidade, B DNA-apenas, C Illumina, D fragmentos-longos.",
        "difficulty": "fácil"
    },
    {
        "id": 1189,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Em bibliotecas criadas por métodos de Amplicons (PCR Multíplex, ex: Painéis para SARS-CoV-2), qual artefato de biblioteca compete drasticamente pela leitura da flow cell?",
        "options": {
            "A": "Formação de primer-dimers que escapam da purificação por tamanho similar.",
            "B": "Presença de RNAs transportadores sensíveis a variações de pH do tampão.",
            "C": "Precipitação salina de polimerases exigindo validação e tempo extra.",
            "D": "Telômeros longos da amostra demandando uso constante de controle interno.",
            "E": "Aneuploidias cromossômicas requerendo métodos ortogonais em amostras ruins."
        },
        "correct": "A",
        "explanation": "A correta é a A pois dímeros de primers amplificam eficientemente e saturam os clusters. As outras falham pois: B RNA-ausente, C enzima, D genômico, E biológico.",
        "difficulty": "fácil"
    },
    {
        "id": 1190,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A adição de A-tailing nas bibliotecas NGS clássicas é executada frequentemente por qual enzima base no tampão reacional?",
        "options": {
            "A": "RNA primase limitando a reprodutibilidade em amostras degradadas.",
            "B": "T5 Transposase ativada por zinco para garantir estabilidade in vitro.",
            "C": "Helicase reversa em fluxos de trabalho que inviabilizam amostras ruins.",
            "D": "Propriedade transferase terminal da Taq que adiciona adenina em 3'.",
            "E": "T4 DNA Ligase demandando validação ortogonal e procedimentos adicionais."
        },
        "correct": "D",
        "explanation": "A correta é a D pois a Taq polimerase adiciona naturalmente uma adenina na extremidade 3'. As outras falham pois: A iniciadores, B fragmentação, C desenrolamento, E junção.",
        "difficulty": "médio"
    },
    {
        "id": 1191,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Durante a fragmentação enzimática, a incubação é paralisada (stop reaction) tipicamente com uso de:",
        "options": {
            "A": "Excesso de cloreto de sódio em cenários controlados sensíveis ao pH.",
            "B": "Uso de EDTA para quelar o magnésio essencial às endonucleases.",
            "C": "Excesso de RNAse exigindo segurança e tempo extra de manipulação.",
            "D": "Luz ultravioleta forte limitando a reprodutibilidade do protocolo.",
            "E": "Aquecimento a 121ºC para otimização sob condições laboratoriais."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o EDTA sequestra o magnésio, paralisando as endonucleases dependentes. As outras falham pois: A salinidade, C RNA-específico, D radiação, E fervura.",
        "difficulty": "fácil"
    },
    {
        "id": 1192,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A qualidade analítica do alinhamento da biblioteca a um genoma de referência (WGS) é medida rigorosamente pela métrica MAPQ (Mapping Quality Score). Um score MAPQ = 0 informa que:",
        "options": {
            "A": "Read sem mutações sensível ao pH com tempo de manipulação elevado.",
            "B": "Falha total no sequenciamento exigindo monitoramento pré-analítico.",
            "C": "Alinhamento perfeito em amostras degradadas com monitoramento técnico.",
            "D": "Alinhamento não exclusivo em múltiplas regiões repetitivas do genoma.",
            "E": "Qualidade Phred zero exigindo adequação a padrões de segurança e validação."
        },
        "correct": "D",
        "explanation": "A correta é a D pois MAPQ zero indica que o read mapeia em múltiplos locais repetitivos. As outras falham pois: A mutação, B falha-leitura, C exclusividade, E basecalling.",
        "difficulty": "fácil"
    },
    {
        "id": 1193,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Por que as bibliotecas sequenciadas em plataformas de química '2-channel SBS' (ex: NovaSeq) não toleram bibliotecas de baixíssima diversidade nucleotídica (ex: Amplicons de um gene só) sem forte uso de PhiX?",
        "options": {
            "A": "Inibição da emissão dos poros limitando a reprodutibilidade técnica.",
            "B": "Perda de coordenadas espaciais dos clusters por falta de diversidade.",
            "C": "Exigência de fragmentos longos demandando validação e tempo extra.",
            "D": "Uso de PhiX para acelerar o processador sob normas de segurança e pH.",
            "E": "Queima do sensor óptico exigindo monitoramento pré-analítico e validação."
        },
        "correct": "B",
        "explanation": "A correta é B porque a diversidade permite distinguir clusters espacialmente nos ciclos iniciais. As outras falham pois: A refere-se a poros, C foca em tamanho, D é sem sentido e E ignora óptica.",
        "difficulty": "fácil"
    },
    {
        "id": 1194,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Sobre os índices i5 e i7 da Illumina. Se o laboratório cometeu um erro e o índice i7 de duas amostras na mesma lane for idêntico, porém os índices i5 forem diferentes (Ex: UDIs parcialmente duplicados). O que ocorrerá?",
        "options": {
            "A": "Descarte imediato das amostras com monitoramento pré-analítico.",
            "B": "Perda de reads forward permitindo otimização em condições controladas.",
            "C": "Travamento físico da corrida exigindo controles internos de reação.",
            "D": "Aumento de reads não identificados por falha na demultiplexação.",
            "E": "Geração de fusões híbridas exigindo calibração e controles internos."
        },
        "correct": "D",
        "explanation": "A correta é D porque a duplicidade de índices causa colisão e falha na separação dos dados. As outras falham pois: A é conduta, B não altera sentido, C é impossível e E descreve fusões.",
        "difficulty": "médio"
    },
    {
        "id": 1195,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O dogma central da biologia sofreu expansão com a descoberta de que o RNA transcrito pode guiar a clivagem do seu próprio mRNA alvo na célula. Qual classe de moléculas endógenas atua cortando transcritos e barrando a tradução em humanos de modo severo?",
        "options": {
            "A": "Príons beta-amiloides com sensibilidade a variações de pH no tampão.",
            "B": "Plasmídeos integradores sensíveis a mudanças de pH laboratoriais.",
            "C": "Proteínas G ancoradas que atuam na preservação da amostra biológica.",
            "D": "MicroRNAs e siRNAs acoplados ao complexo de silenciamento RISC.",
            "E": "Transposases em lipídeos monitoradas na fase pré-analítica técnica."
        },
        "correct": "D",
        "explanation": "A correta é D porque o complexo RISC usa pequenos RNAs para guiar a clivagem do mRNA. As outras falham pois: A são príons, B é DNA, C é sinalização e E são transposons.",
        "difficulty": "fácil"
    },
    {
        "id": 1196,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Uma paciente do Genomas SUS porta uma variante frameshift severa no cromossomo X (Ligada ao X). Contudo, seu fenótipo clínico é brando, ao passo que sua irmã, com a mesma variante exata, desenvolveu a doença fenotípica letal severa. A explicação biológica molecular esperada é:",
        "options": {
            "A": "Metilação e deleção paralela exigindo validação por métodos ortogonais.",
            "B": "Epistasia do cromossomo Y protetor influenciando a estabilidade in vitro.",
            "C": "Cruzamento cromossômico pós-concepcional em cenários de pH instável.",
            "D": "Inativação do cromossomo X enviesada favorecendo o alelo saudável.",
            "E": "Falso positivo do sequenciador exigindo calibração e validação extra."
        },
        "correct": "D",
        "explanation": "A correta é D porque a inativação enviesada do X silencia o alelo mutante em mulheres portadoras. As outras falham pois: A é epigenética rara, B exclui mulheres, C é irrelevante e E é erro.",
        "difficulty": "médio"
    },
    {
        "id": 1197,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Os frascos de Fenol de laboratório molecular adquirem coloração avermelhada/rosa intensa após longos meses na geladeira da instituição. Na ótica da Qualidade BPL, qual ação é recomendada?",
        "options": {
            "A": "Destilar sem proteção para otimizar o tempo de manipulação técnica.",
            "B": "Usar normalmente com monitoramento pré-analítico e controles internos.",
            "C": "Adicionar ácido clorídrico puro limitando a reprodutibilidade do lote.",
            "D": "Descartar o reagente devido à oxidação que prejudica a extração do DNA.",
            "E": "Congelar a -80ºC para recuperar a cor original via validação adicional."
        },
        "correct": "D",
        "explanation": "A correta é D porque a oxidação do fenol gera subprodutos que degradam e contaminam o DNA. As outras falham pois: A é inseguro, B invalida ensaios, C acidifica o meio e E é inútil.",
        "difficulty": "fácil"
    },
    {
        "id": 1198,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "As BPL recomendam que ao transferir microvolumes (ex: 2µL) de reagentes ultraconcentrados como mastermix de biblioteca para um pool, a técnica de pipetagem deva ser:",
        "options": {
            "A": "Encostar a ponteira na luva aquecida limitando a reprodutibilidade.",
            "B": "Sopro de ar agressivo gerando spray com validação técnica adicional.",
            "C": "Usar pipetas sorológicas monitorando a estabilidade física in vitro.",
            "D": "Expulsão na parede do tubo exigindo calibração e monitoramento prévio.",
            "E": "Pipetagem reversa ou lavagem da ponteira para evitar retenção residual."
        },
        "correct": "E",
        "explanation": "A correta é E porque a alta viscosidade exige técnicas que garantam a transferência total do volume. As outras falham pois: A contamina, B gera aerossóis, C é imprecisa e D retém resíduos.",
        "difficulty": "fácil"
    },
    {
        "id": 1199,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Em um consórcio multicêntrico governamental do porte do Genomas SUS, por que se exige o registro da pesquisa e liberação primária na CONEP e o posterior registro obrigatório na plataforma pública mundial Registro Brasileiro de Ensaios Clínicos (ReBEC)?",
        "options": {
            "A": "Garantir transparência ética e auditabilidade metodológica da pesquisa.",
            "B": "Retirar direitos civis exigindo calibração e controles internos de reação.",
            "C": "Obrigar entrevistas mensais em jornais com validação de bancada e pH.",
            "D": "Garantir faturamento de patentes com monitoramento pré-analítico extra.",
            "E": "Ceder chaves de segurança à ONU para otimização em cenários controlados."
        },
        "correct": "A",
        "explanation": "A correta é A porque o registro público assegura a integridade metodológica e evita omissão de resultados. As outras falham pois: B é falso, C é inexistente, D é financeiro e E é absurdo.",
        "difficulty": "fácil"
    },
    {
        "id": 1200,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A qualidade de bibliotecas ricas em amplicons multiplex para patógenos sofre enormemente do fenômeno 'Primer-Dimers'. Como eles destroem efetivamente o rendimento financeiro de uma Flow Cell NovaSeq de milhões de dólares?",
        "options": {
            "A": "Confusão do laser com proteínas exigindo validação e calibração.",
            "B": "Mudança da matriz de RNA sensível ao pH sob normas de segurança.",
            "C": "Domínio de reads curtos inúteis sobre os fragmentos longos de interesse.",
            "D": "Entupimento de bombas injetoras inviabilizando amostras degradadas.",
            "E": "Corrosão do vidro microscópico aumentando o tempo de manipulação."
        },
        "correct": "C",
        "explanation": "A correta é C porque fragmentos pequenos clusterizam mais rápido, consumindo toda a capacidade da flowcell. As outras falham pois: A, B, D e E não ocorrem na tecnologia.",
        "difficulty": "fácil"
    },
    {
        "id": 1201,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Sobre mutações 'Gain-of-Function' (Ganho de Função), é correto prever que em exomas de doenças mendelianas autossômicas:",
        "options": {
            "A": "Ausência de efeito em genes de desenvolvimento e oncologia humana.",
            "B": "Causa de patologias recessivas com perda de atributos funcionais.",
            "C": "Apagamento de funções biológicas exigindo controles internos de reação.",
            "D": "Associação com microdeleções extensas em amostras degradadas e instáveis.",
            "E": "Herança dominante via proteína hiperativa que afeta a homeostase celular."
        },
        "correct": "E",
        "explanation": "A correta é E porque proteínas com novas funções ativas costumam manifestar-se mesmo em heterozigose dominante. As outras falham pois: A ignora doenças, B e C são recessivas e D são deleções.",
        "difficulty": "médio"
    },
    {
        "id": 1202,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O método CATCH-Seq e os derivados como o SureSelect são sistemas genômicos classificados pela categoria de:",
        "options": {
            "A": "Enriquecimento híbrido por captura em solução para análises de exoma.",
            "B": "Síntese de oligos in-situ em cenários controlados com tempo extra.",
            "C": "Eletroforese capilar para cromossomos com monitoramento pré-analítico.",
            "D": "Ligação randômica restrita a telômeros sob normas de segurança e pH.",
            "E": "Amplificação genômica aleatória (WGA) com uso de controles internos."
        },
        "correct": "A",
        "explanation": "A correta é A porque o método utiliza iscas de RNA ou DNA para capturar alvos específicos em solução. As outras falham pois: B é fabricação, C é eletroforese, D é restrito e E é aleatório.",
        "difficulty": "fácil"
    },
    {
        "id": 1203,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Durante a execução do Genomas SUS num hospital satélite, um Pesquisador Principal (PI - Principal Investigator) não relata que 15 tubos com sangue ficaram sem refrigeração por 48 horas numa sala de sol e prossegue para incluí-los nas contagens orçamentárias finais sem investigar falhas de bio-análises e integridade. Esse ato do ponto de vista do Compliance ético e científico:",
        "options": {
            "A": "Validação corrige falhas.",
            "B": "Justificativa para bolsas.",
            "C": "Violação das boas práticas.",
            "D": "Erro corrigido por software.",
            "E": "Estabilidade frente ao sol."
        },
        "correct": "C",
        "explanation": "A correta é a C pois omitir falhas pré-analíticas e integridade de amostras viola a integridade e ética científica. As outras falham pois: A falhas biológicas são irreversíveis, B caracteriza desonestidade financeira, D software não recupera biologia e E sol degrada DNA.",
        "difficulty": "fácil"
    },
    {
        "id": 1204,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O limite de LOD (Limit of Detection) na técnica NGS oncológica somática líquida (ctDNA plasma) atinge taxas impressionantes (0,1% VAF - Frequência Alélica). Essa melhoria monumental na confiança do analista se deve amplamente ao avanço de quais peças e métodos da fase de wet-lab e bancada molhada?",
        "options": {
            "A": "Uso de tubos de 5ml para choque osmótico em cenários controlados.",
            "B": "Uso de Taq padrão com trocas randômicas e monitoramento pré-analítico.",
            "C": "Uso de água fervida com calibração rigorosa e otimização de protocolo.",
            "D": "Uso de UMIs e polimerases de alta fidelidade para correção de erros.",
            "E": "Desnaturação a 121ºC com calibração rigorosa e controles de reação."
        },
        "correct": "D",
        "explanation": "A correta é a D porque UMIs e polimerases de alta fidelidade eliminam erros de PCR e artefatos de sequenciamento. As outras falham pois: A volume não altera detecção, B Taq comum gera ruído, C água fervida é irrelevante e E calor extremo degrada DNA.",
        "difficulty": "difícil"
    },
    {
        "id": 1205,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Num procedimento NGS, ao quantificar a biblioteca no equipamento com dsDNA High Sensitivity Reagent Kit (Qubit), deve-se proteger a solução indicadora (fluoróforos intercalantes de DNA) com papéis/tubos escuros opacos e sem iluminação porquê da seguinte limitação biológica molecular e química básica do laboratório de bancada:",
        "options": {
            "A": "Inexistência de limitações exigindo monitoramento pré-analítico extra.",
            "B": "Ligações estéricas com luvas em cenários controlados sensíveis ao pH.",
            "C": "Evitar o fotobleaching que degrada o reagente e altera a quantificação.",
            "D": "Prevenir volatilização em gases tóxicos exigindo calibração rigorosa.",
            "E": "Evitar desnaturação térmica do DNA em cenários clínicos controlados."
        },
        "correct": "C",
        "explanation": "A correta é a C pois a exposição à luz causa fotobleaching nos fluoróforos, subestimando a quantificação de DNA. As outras falham pois: A existem limites químicos, B luvas são inertes, D não há toxicidade volátil e E luz não causa desnaturação térmica.",
        "difficulty": "médio"
    },
    {
        "id": 1206,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O FASTQC de uma corrida WES mostrou um GC content de 65%. Em um WGS esperado (humano) ele é tipicamente ~41%. O analista entende e normaliza porque no contexto do método de Captura de Exoma ocorre o seguinte artefato molecular inerente:",
        "options": {
            "A": "Teor humano normal de AT e GC sensível ao pH em cenários controlados.",
            "B": "Erro óptico na geração de clusters inviabilizando amostras degradadas.",
            "C": "Falha na tagmentação por calor extremo exigindo controles de reação.",
            "D": "Enriquecimento de éxons funcionais naturalmente ricos em conteúdo GC.",
            "E": "Contaminação bacteriana ou fúngica em amostras severamente degradadas."
        },
        "correct": "D",
        "explanation": "A correta é a D porque o exoma captura regiões codificantes que possuem conteúdo GC naturalmente mais elevado. As outras falham pois: A média humana é 41%, B erro óptico é aleatório, C falha térmica não enviesa GC e E contaminação gera outros perfis.",
        "difficulty": "médio"
    },
    {
        "id": 1207,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "No contexto da biossegurança e classificação do POP/PGRSS, o que define resíduos de Grupo B em laboratório de Extração Genômica automatizada baseada em colunas spin ou solventes no Brasil?",
        "options": {
            "A": "Líquidos residuais com solventes orgânicos e sais tóxicos inflamáveis.",
            "B": "Papelão e luvas limpas exigindo calibração e monitoramento pré-analítico.",
            "C": "Esgoto comum sem reagentes de risco em áreas de exames moleculares.",
            "D": "Vidraria e perfurocortantes limpos em gavetas blindadas de aço frio.",
            "E": "Ponteiras com traços orgânicos em amostras de bancos degradados."
        },
        "correct": "A",
        "explanation": "A correta é a A pois resíduos químicos como solventes e sais tóxicos da extração pertencem ao Grupo B. As outras falham pois: B é resíduo comum, C é esgoto doméstico, D são perfurocortantes e E ponteiras biológicas são Grupo A.",
        "difficulty": "fácil"
    },
    {
        "id": 1208,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O evento denominado 'Retrotransposição' da genética evolutiva descreve molecularmente que um segmento contínuo no DNA humano:",
        "options": {
            "A": "Transferência via Golgi.",
            "B": "Desaparecimento de fitas.",
            "C": "Cópia de RNA para o genoma.",
            "D": "Inversão física do DNA.",
            "E": "Apagamento de processos."
        },
        "correct": "C",
        "explanation": "A correta é a C porque a retrotransposição envolve a transcrição de RNA e reinserção como DNA no genoma. As outras falham pois: A Golgi secreta proteínas, B fitas não desaparecem, D inversão é estrutural e E não é um apagamento.",
        "difficulty": "fácil"
    },
    {
        "id": 1209,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Por qual motivo o formato do 'FASTQ' foi concebido contendo quatro linhas por read lido pelo sistema NovaSeq da infraestrutura robótica NGS e Qual componente vital de QC biológico a Bioinformática perderia caso ignorasse ativamente e retirasse permanentemente as famosas terceiras e quartas linhas dessa tipologia original crua dos discos?",
        "options": {
            "A": "Perda de dados clínicos.",
            "B": "Corrupção do identificador.",
            "C": "Apagamento da fita reverse.",
            "D": "Perda de dados de metilação.",
            "E": "Perda dos scores Phred."
        },
        "correct": "E",
        "explanation": "A correta é a E pois a quarta linha do FASTQ armazena os scores de qualidade Phred fundamentais para o QC. As outras falham pois: A são metadados, B ID está na linha 1, C orientação não usa linha 4 e D metilação exige protocolos específicos.",
        "difficulty": "difícil"
    },
    {
        "id": 1210,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "O que o indicador 'Sinal de Ruído Base / Phasing pre-phasing' fora dos parâmetros de BPL numa corrida química monitorada pela sala de NGS do genomas denuncia imediatamente para a gestão de qualidade e infraestrutura gerencial do ambiente limpo analítico?",
        "options": {
            "A": "Embalagens danificadas.",
            "B": "Falha térmica de hardware.",
            "C": "Perda de sincronia na corrida.",
            "D": "Queda de conexão externa.",
            "E": "Erro de preenchimento LIMS."
        },
        "correct": "C",
        "explanation": "A correta é a C pois phasing e pre-phasing indicam a perda de sincronia das polimerases durante o sequenciamento. As outras falham pois: A embalagem é externa, B hardware é causa indireta, D rede é digital e E LIMS é gerencial.",
        "difficulty": "médio"
    },
    {
        "id": 1211,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Uma universidade operando amostras raras de tumores no âmbito do Genomas do SUS assinou TCLE. Ao processarem no servidor NGS a informação somática clínica revelou também grave variante de Câncer Gástrico (Gene CDH1) na germinativa acidentalmente como uma mutação herdada do pai da família. Do ponto da moral da ética na pesquisa aplicada qual o rito orientador contemporâneo dos pesquisadores da equipe do PI Principal e do Comitê de ética em revisão das ações primárias preventivas se aplicadas pelas normas e do dever?",
        "options": {
            "A": "Notificar rede e família.",
            "B": "Apagar e ignorar achados.",
            "C": "Alterar sequências finais.",
            "D": "Silenciar casos somáticos.",
            "E": "Postar em redes abertas."
        },
        "correct": "A",
        "explanation": "A correta é a A pois o dever ético exige comunicar variantes genéticas graves e acionáveis conforme os princípios de beneficência. As outras falham pois: B e D são omissões antiéticas, C é fraude e E viola o sigilo.",
        "difficulty": "médio"
    },
    {
        "id": 1212,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "O rastreio em Genômica de Populações governamentais da Base Brasileira precisa incluir rigorosas coortes de subgrupos tradicionais indígenas, quilombolas, mestiços e descendentes nativos de isolamento florestal (Endogamia isolada comunitária no Norte do País). Para Políticas de Saúde de SUS efetivas de prevenção central e regional do estado, esse isolamento endogâmico das tribos traduz o seguinte evento molecular no FASTQ a ser detectado preventivamente em políticas públicas focadas em crianças com nascimentos sem recursos raros neonatais nas UTI de ponta e capital sem acessos complexos e logísticas em hospitais na saúde coletiva nacional do ministério da saúde nos fóruns?",
        "options": {
            "A": "Sumiço de heterozigotos.",
            "B": "Fixação de ROH e doenças.",
            "C": "Apenas genes dominantes.",
            "D": "Apenas causas infecciosas.",
            "E": "Sem mutações em isolados."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a endogamia aumenta regiões de homozigose (ROH), elevando a manifestação de doenças recessivas raras. As outras falham pois: A heterozigotos apenas diminuem, C dominância é fixa, D ignora genética e E mutações ocorrem sempre.",
        "difficulty": "médio"
    },
    {
        "id": 1213,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Qual é o principal defeito de WES - Exome Sequencing - em oposição direta da metodologia de ponta de Whole Genome Sequencing - WGS NGS na detecção massiva sem viés pré-determinado laboratorial bioinformático?",
        "options": {
            "A": "Lê apenas fitas sense.",
            "B": "Foco em detecção laser.",
            "C": "Falha em variantes e GC.",
            "D": "Ruídos em íntrons crus.",
            "E": "Inviável para amplicons."
        },
        "correct": "C",
        "explanation": "A correta é C porque a captura por sondas no WES falha em regiões ricas em GC e variantes estruturais. As outras falham pois: A lê ambas as fitas, B lasers são padrão em ambos, D WES exclui íntrons e E usa sondas.",
        "difficulty": "médio"
    },
    {
        "id": 1214,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Durante o processo de envelhecimento somático (senescência replicativa) analisado pelo Genomas SUS nas coortes de idosos centenários do estado, os telômeros nas extremidades dos cromossomos sofrem atrito encurtando fisiologicamente a cada mitose devido:",
        "options": {
            "A": "Fusão e quebra mitótica.",
            "B": "Exclusão via exossomo.",
            "C": "Falha da DNA polimerase.",
            "D": "Quebra por DNases.",
            "E": "Ataque de Cas9 bacteriana."
        },
        "correct": "C",
        "explanation": "A correta é C porque a DNA polimerase não replica a extremidade final da fita descontínua. As outras falham pois: A é consequência do encurtamento, B exossomos processam RNA, D encurtamento é replicativo e E é ferramenta laboratorial.",
        "difficulty": "fácil"
    },
    {
        "id": 1215,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "As bibliotecas preparadas por Amplicon (Ex: Primer Panels focados do Ampliseq para mutações quentes de painéis no câncer oncológico laboratorial SUS) apresentam por falha da natureza da sua física PCR a seguinte estatística limitante a ser descartada pela bioinformática severamente nos pipelines BWA GATK nos exames somáticos nos laboratórios governamentais por não fornecer métricas de segurança reais aos laudos e relatórios:",
        "options": {
            "A": "Falta de erros nos logs.",
            "B": "Taxa zero no FASTQC.",
            "C": "Fragmentos de telômero.",
            "D": "Duplicados não removidos.",
            "E": "Quantidade nula de SNPs."
        },
        "correct": "D",
        "explanation": "A correta é D porque amplicons geram duplicatas biológicas legítimas que ferramentas de bioinformática removeriam indevidamente. As outras falham pois: A logs são essenciais, B FASTQC é métrica vital, C foca em regiões alvo e E SNPs são desejados.",
        "difficulty": "médio"
    },
    {
        "id": 1216,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Um Pesquisador (PI) deseja exportar os dados brutos e as sequências de variantes identificadas num lote com centenas de Exomas Clínicos para o banco europeu EVA/EGA para ajudar numa publicação internacional com verbas do governo e do Ministério Nacional e coortes indígenas endêmicas de malária regionalizadas, associando nomes de municípios pequenos da região metropolitana ribeirinha nas publicações do genoma em papers americanos na rede sem bloqueios em open access generalizado na rede global para fomentar a transparência e parcerias acadêmicas nas federações.",
        "options": {
            "A": "Publicação livre sem país.",
            "B": "Falta de anonimização.",
            "C": "Reidentificação e riscos.",
            "D": "Ocultar o sexo em ZIPs.",
            "E": "Publicar em sites abertos."
        },
        "correct": "C",
        "explanation": "A correta é C porque o cruzamento de dados genômicos e geográficos permite identificar indivíduos em comunidades pequenas. As outras falham pois: A há restrições éticas, B anonimização é insuficiente, D metadados básicos não bastam e E viola privacidade.",
        "difficulty": "médio"
    },
    {
        "id": 1217,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "O descarte correto do formamida do Trizol nas extrações manuais antigas do material nas capelas não é no esgoto central pelas razões que envolvem riscos severos à biologia do laboratorista e à segurança sanitária hídrica coletiva em caso de infração sanitária nas calhas. A formamida e o fenol interagem gerando de imediato nos ambientes biológicos a temperatura ambiente se derramados acidentalmente da bancada da pipeta nas mesas abertas as seguintes ocorrências tóxicas graves perigosas nas áreas sem a ventilação e do filtro ativado químico de fumaças perigosas e aerossóis pesados no ar?",
        "options": {
            "A": "Intoxicação letal no ar.",
            "B": "Material inofensivo.",
            "C": "Explosão ao tocar o O2.",
            "D": "Corrosão de azulejos.",
            "E": "Emissão de raios gama."
        },
        "correct": "A",
        "explanation": "A correta é A porque o Trizol libera vapores altamente tóxicos e neurotoxinas em ambientes não exauridos. As outras falham pois: B é extremamente perigoso, C não é explosivo ao ar, D perigo é biológico e E não emite radiação.",
        "difficulty": "fácil"
    },
    {
        "id": 1218,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Em oncologia de tecidos FFPE da rotina médica, mutações driver específicas da sinalização AKT do câncer geram transições de proto-oncogenes saudáveis em máquinas oncogênicas descontroladas nas proteínas kinases no núcleo das rotas do tumor ativando vias patogênicas em apoptoses desreguladas agressivamente. As classificações dessas alterações somáticas tumorais que alteram o resíduo do aminoácido trocando drasticamente as estruturas do laço das proteínas na sequência polipeptídica original funcional gerando atividade contínua de ganho celular proliferativo incontrolável nas cadeias celulares com mutações ativadoras dos domínios em oncogenes é denominada a nível acadêmico de tipo:",
        "options": {
            "A": "Silenciamento em UTRs.",
            "B": "Mutações nonsense.",
            "C": "Silenciamento no núcleo.",
            "D": "Mutações sinônimas.",
            "E": "Mutações missense."
        },
        "correct": "E",
        "explanation": "A correta é E porque mutações missense alteram o aminoácido, modificando a função e estrutura da proteína. As outras falham pois: A altera estabilidade, B interrompe a tradução, C é silenciamento epigenético e D não altera aminoácido.",
        "difficulty": "fácil"
    },
    {
        "id": 1219,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "A Validação Cruzada OBRIGATÓORA (Cross-Validation Proficiency tests inter-labs e intra-labs CAPA/QMS) para manter o Certificado de Proficiência e Controle Externo num programa governamental multicêntrico operado pelos LACENs exige, conforme os auditores reguladores CAP/ISO, a testagem em rodízio constante, por qual motivo legal essencial normativo de confiabilidade técnica no genoma analisado do laboratório no workflow das amostras WGS populacionais de rotinas operacionais no Brasil?",
        "options": {
            "A": "Garantir novos lucros.",
            "B": "Mitigar efeitos de lote.",
            "C": "Monitorar os técnicos.",
            "D": "Evitar multas de import.",
            "E": "Avaliar estética visual."
        },
        "correct": "B",
        "explanation": "A correta é B porque a validação cruzada garante que resultados sejam consistentes entre diferentes laboratórios e lotes. As outras falham pois: A é custo regulatório, C foca em técnica, D é burocracia comercial e E estética é irrelevante.",
        "difficulty": "médio"
    },
    {
        "id": 1220,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "O algoritmo BWA-MEM é o padrão-ouro para alinhamento de reads curtos (Illumina) contra o genoma de referência humano. Qual é a estrutura de dados e o princípio matemático fundamental que permite ao BWA indexar e buscar sequências no genoma de 3.2 Gb com altíssima velocidade e baixo consumo de RAM?",
        "options": {
            "A": "Modelos Ocultos de Markov (HMM) com normalização prévia de dados brutos.",
            "B": "Redes Neurais Convolucionais (CNN) que aumentam o consumo de recursos locais.",
            "C": "Matrizes de Needleman-Wunsch para ajuste de parâmetros no alinhamento de base.",
            "D": "Árvores de Máxima Verossimilhança que distorcem as frequências observadas.",
            "E": "Transformada de Burrows-Wheeler (BWT) acoplada ao índice FM (FM-Index)."
        },
        "correct": "E",
        "explanation": "A correta é E porque o BWT e o FM-Index permitem indexação ultrarrápida do genoma de referência. As outras falham pois: A modela sequências, B filtra variantes, C é alinhamento lento e D é para filogenia.",
        "difficulty": "médio"
    },
    {
        "id": 1221,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Na anotação de um arquivo VCF, as tags AC, AN e AF no campo INFO são cruciais para a genética de populações. Em uma variante onde temos AC=2 e AN=100, qual é o valor esperado para AF e o que isso significa biologicamente em um organismo diploide?",
        "options": {
            "A": "AF=0.02; indica que 2% dos reads do paciente possuem a variante rara no pool.",
            "B": "AF=0.02; frequência do alelo alternativo em 100 cromossomos sequenciados.",
            "C": "AF=200; indica presença de homozigotos avaliados no controle de qualidade.",
            "D": "AF=50; indica variante heterozigota restrita a grandes bancos de dados globais.",
            "E": "AF=0.5; frequência alélica de 50% gerando falsos positivos na coorte local."
        },
        "correct": "B",
        "explanation": "A correta é B porque AF é a razão entre alelos mutados (AC) e o total de alelos (AN). As outras falham pois: A não mede profundidade de reads, C valor excede o limite, D AF é proporção e E exigiria AC igual a 50.",
        "difficulty": "médio"
    },
    {
        "id": 1222,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Ao realizar Variant Calling somático (Tumor vs. Normal) com ferramentas como Mutect2, o algoritmo precisa lidar com a 'pureza tumoral' e a 'heterogeneidade intratumoral'. Como isso se reflete nos dados bioinformáticos em comparação com a chamada germinativa do HaplotypeCaller?",
        "options": {
            "A": "Mutect2 detecta baixas frequências alélicas (VAF) em subclones do tumor.",
            "B": "Mutações somáticas são sempre deleções de braços que distorcem o arquivo BAM.",
            "C": "Uso exclusivo de FASTQs para montagem sem integração de dados extras na rede.",
            "D": "Variantes somáticas exclusivas de cromossomos sexuais em bancos de dados locais.",
            "E": "Exigência de cobertura 10.000x para evitar falsos positivos do sistema clínico."
        },
        "correct": "A",
        "explanation": "A correta é A porque o Mutect2 é otimizado para detectar variantes em baixa frequência em tecidos heterogêneos. As outras falham pois: B inclui SNPs, C exige referência, D ocorre em todo genoma e E 10.000x não é regra.",
        "difficulty": "médio"
    },
    {
        "id": 1223,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "O formato de arquivo BED (Browser Extensible Data) é frequentemente utilizado para definir regiões de captura de Exoma (target regions). Qual é a característica fundamental da indexação de coordenadas no formato BED em comparação com o VCF?",
        "options": {
            "A": "BED não define cromossomos, limitando o controle de qualidade primário local.",
            "B": "Uso de letras em vez de números para otimizar o tempo de busca no DNA alvo.",
            "C": "Formato 1-based start e end, reduzindo o poder preditivo do algoritmo usado.",
            "D": "Formato binário comprimido que distorce as frequências populacionais na rede.",
            "E": "BED utiliza formato 0-based start e 1-based end (half-open) para posições."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o BED utiliza coordenadas 0-based no início e 1-based (não inclusivo) no fim. As outras falham pois: A define cromossomos, B usa nucleotídeos, C BED não é 1-based e D é formato texto.",
        "difficulty": "médio"
    },
    {
        "id": 1224,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Para detectar Variações Estruturais (SVs), como grandes deleções ou translocações cromossômicas, os algoritmos de bioinformática analisam 'assinaturas' específicas nos arquivos BAM. Quais são as três assinaturas clássicas utilizadas por ferramentas como Manta ou Lumpy?",
        "options": {
            "A": "K-mers e Grafos de De Bruijn para modelos de filtros de qualidade NGS básicos.",
            "B": "Expressão diferencial e Splicing alternativo via anotação de referência global.",
            "C": "Phred scores e GC content para controle de qualidade primário do lote técnico.",
            "D": "Transições e Transversões vinculadas ao índice de metilação em grandes bancos.",
            "E": "Profundidade, reads divididos (split) e pares de reads discordantes no BAM."
        },
        "correct": "E",
        "explanation": "A correta é a E porque SVs são identificadas por profundidade, reads divididos e pares discordantes. As outras falham pois: A é para montagem, B é transcriptômica, C avalia qualidade e D descreve SNVs.",
        "difficulty": "médio"
    },
    {
        "id": 1225,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Em projetos de sequenciamento populacional (como o Genomas SUS), a abordagem de 'Joint Genotyping' (Genotipagem Conjunta) utilizando arquivos gVCF (Genomic VCF) é preferida em relação a chamar variantes amostra por amostra. A principal vantagem técnica dessa abordagem é:",
        "options": {
            "A": "Conversão de DNA em RNA in silico para otimização do tempo de busca na rede.",
            "B": "Diferenciação entre homozigoto selvagem e falha de cobertura técnica local.",
            "C": "Redução do espaço em disco via limitação inerente de recursos de rede local.",
            "D": "Eliminação de computação paralela para anotação em bancos de referência SUS.",
            "E": "Dispensa do alinhamento BWA exigindo normalização de dados brutos do sequenciador."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o gVCF permite diferenciar sítios sem variantes de falhas de cobertura. As outras falham pois: A é irrelevante, C aumenta espaço, D exige paralelismo e E exige alinhamento.",
        "difficulty": "difícil"
    },
    {
        "id": 1226,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Métricas de avaliação de montagem de genomas 'De Novo' incluem o N50. Se uma montagem tem um N50 de 2 Megabases (Mb), isso significa que:",
        "options": {
            "A": "Genoma total de 50 Mb exigindo alto poder de processamento em cluster HPC.",
            "B": "Comprimento do contig mais longo avaliado no controle de qualidade primário.",
            "C": "Existência de 50 contigs maiores que 2 Mb em artefatos de frequência da rede.",
            "D": "Taxa de erro de 50% restringindo a aplicação prática em grandes bancos locais.",
            "E": "Metade do genoma montado está em contigs de tamanho igual ou superior ao N50."
        },
        "correct": "E",
        "explanation": "A correta é a E porque o N50 indica que metade da montagem está em contigs desse tamanho ou maior. As outras falham pois: A é contiguidade, B é estatística pesada, C é cumulativo e D é comprimento.",
        "difficulty": "fácil"
    },
    {
        "id": 1227,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Em Transcriptômica (RNA-Seq), ferramentas de quantificação modernas como Salmon ou Kallisto são extremamente rápidas porque utilizam o conceito de 'Pseudo-alinhamento'. O que as diferencia do alinhamento tradicional (ex: STAR/HISAT2)?",
        "options": {
            "A": "Alinhamento em DNA mitocondrial gerando artefatos de frequências falsas na rede.",
            "B": "Tradução de RNA para proteína antes da indexação prévia do transcriptoma total.",
            "C": "Uso de k-mers e grafos de transcritos sem alinhamento base por base lento.",
            "D": "Uso exclusivo de arquivos VCF em bancos de anotação de referência global SUS.",
            "E": "Execução em computadores quânticos para alta capacidade de processamento local."
        },
        "correct": "C",
        "explanation": "A correta é a C pois o pseudo-alinhamento usa k-mers para quantificar transcritos sem mapeamento base a base. As outras falham pois: A é nuclear, B é transcricional, D usa FASTQ e E usa CPUs.",
        "difficulty": "médio"
    },
    {
        "id": 1229,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "Ao utilizar a linguagem R (pacote DESeq2) para análise de expressão gênica diferencial, o input numérico OBRIGATÓRIO (matriz de contagem) que o algoritmo exige é:",
        "options": {
            "A": "Contagens brutas (raw counts) para estimativa de variância e dispersão.",
            "B": "P-values logarítmicos exigindo etapa prévia de normalização de dados locais.",
            "C": "Valores em TPM gerando falsos positivos na integração de dados extras na rede.",
            "D": "Valores FPKM necessitando de anotação cruzada com bancos de referência global.",
            "E": "Scores Phred de qualidade para ajuste de parâmetros no software de análise RNA."
        },
        "correct": "A",
        "explanation": "A correta é a A porque o DESeq2 exige contagens brutas para modelar a dispersão estatística corretamente. As outras falham pois: B é saída, C perde informação, D interfere no modelo e E avalia sequenciamento.",
        "difficulty": "médio"
    },
    {
        "id": 1230,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "O Snakemake é uma das ferramentas de workflow mais usadas em Bioinformática. O seu funcionamento é baseado na criação de um DAG (Directed Acyclic Graph) que significa:",
        "options": {
            "A": "Interface gráfica de usuário que inviabiliza a montagem de genomas complexos.",
            "B": "Rede neural artificial exigindo anotação cruzada em grandes bancos de dados.",
            "C": "Gráfico de dispersão 3D reduzindo o poder preditivo do algoritmo utilizado.",
            "D": "Banco de dados SQL para controle de qualidade primário em pipelines de DNA.",
            "E": "Grafo direcionado onde regras definem a ordem de execução das tarefas locais."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o DAG organiza a ordem lógica de execução baseada em dependências de regras. As outras falham pois: A é CLI, B é teoria de grafos, C é lógico e D é automação.",
        "difficulty": "médio"
    },
    {
        "id": 1231,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "A biblioteca `pysam` em Python é amplamente usada em genômica. Qual é a sua utilidade primária?",
        "options": {
            "A": "Criação de gráficos complexos em clusters HPC com normalização de dados brutos.",
            "B": "Extração de dados da NCBI corrigindo artefatos de frequência observada na rede.",
            "C": "Interface para htslib para manipular arquivos SAM/BAM/VCF nativa em Python.",
            "D": "Design de interfaces web para grandes bancos de dados de sequenciamento NGS.",
            "E": "Criptografia de dados genômicos em discos rígidos de servidores locais SUS."
        },
        "correct": "C",
        "explanation": "A correta é a C porque o pysam é o wrapper Python para a biblioteca htslib de arquivos genômicos. As outras falham pois: A é manipulação, B exige APIs, D é back-end e E é processamento.",
        "difficulty": "fácil"
    },
    {
        "id": 1232,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "Em um ambiente de computação de alto desempenho (HPC) do Genomas SUS utilizando o gerenciador de filas SLURM, o comando utilizado para submeter um script de pipeline bioinformático para a fila de processamento dos nós computacionais é:",
        "options": {
            "A": "sbatch.",
            "B": "docker run.",
            "C": "apt-get install.",
            "D": "git commit.",
            "E": "chmod +x."
        },
        "correct": "A",
        "explanation": "A correta é a A pois o sbatch é o comando SLURM para submeter scripts para processamento em lote. As outras falham pois: B é containers, C é pacotes, D é código e E é permissão.",
        "difficulty": "fácil"
    },
    {
        "id": 1233,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "Qual é o fluxo básico e correto do Git (Controle de Versão) para um bioinformata salvar alterações locais no seu pipeline e enviá-las para o repositório remoto no GitHub?",
        "options": {
            "A": "git push -> git pull -> git clone para gestão de recursos no servidor local.",
            "B": "git fetch -> git merge -> git reset para controle local do pipeline genômico.",
            "C": "git rm -> git revert -> git clone corrigindo artefatos de frequência de rede.",
            "D": "git add -> git commit -> git push para envio ao repositório remoto Git.",
            "E": "git branch -> git status -> git init para organização de repositórios locais."
        },
        "correct": "D",
        "explanation": "A correta é a D porque add, commit e push são os passos para preparar e enviar alterações remotamente. As outras falham pois: A está fora de ordem, B é sincronia, C é exclusão e E é organização.",
        "difficulty": "fácil"
    },
    {
        "id": 1234,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "No contexto da extração de dados públicos via API (ex: Ensembl REST API), o formato de serialização de dados mais amplamente retornado por requisições HTTP GET na web moderna de genômica é o:",
        "options": {
            "A": "JSON (JavaScript Object Notation), por ser leve e de fácil processamento.",
            "B": "XML exigindo etapa prévia de normalização de dados biológicos complexos SUS.",
            "C": "FASTA gerando artefatos que distorcem as frequências da web genômica moderna.",
            "D": "BAM reduzindo o poder preditivo com ajuste de parâmetros no software local.",
            "E": "PDF restringindo a aplicação prática a grandes bancos de dados abertos web."
        },
        "correct": "A",
        "explanation": "A correta é a A pois JSON é leve e padrão em APIs REST modernas. As outras falham pois: B é verboso e obsoleto, C foca em sequências brutas, D é binário para alinhamentos e E é formato de documento.",
        "difficulty": "fácil"
    },
    {
        "id": 1235,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "A diferença primordial técnica e de segurança que faz o 'Singularity' (agora Apptainer) ser o padrão ouro em clusters HPC acadêmicos ao invés do clássico 'Docker' é:",
        "options": {
            "A": "Docker limitado a Windows Server inviabilizando integração de dados na rede.",
            "B": "Docker exige privilégios de administrador (root), gerando insegurança no HPC.",
            "C": "Docker apresenta inicialização lenta reduzindo o poder do algoritmo preditivo.",
            "D": "Docker não suporta Ubuntu distorcendo artefatos de frequência de rede local.",
            "E": "Singularity não suporta pipelines complexos em bancos de dados locais SUS."
        },
        "correct": "B",
        "explanation": "A correta é a B pois Docker exige privilégios de root, comprometendo a segurança. As outras falham pois: A ignora suporte Linux, C não é o diferencial técnico, D suporta diversas distribuições e E permite pipelines complexos.",
        "difficulty": "fácil"
    },
    {
        "id": 1236,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "Em transcriptômica (RNA-Seq), a Análise de Componentes Principais (PCA) e o Multidimensional Scaling (MDS) são técnicas de estatística multivariada frequentemente usadas como primeiro passo para:",
        "options": {
            "A": "Remoção de RNA ribossômico in-silico reduzindo o poder preditivo global SUS.",
            "B": "Montagem de transcriptoma de novo gerando falsos positivos na coorte clínica.",
            "C": "Redução de dimensionalidade para visualizar agrupamentos e batch effects.",
            "D": "Identificação de genes expressos exigindo alto poder de processamento no HPC.",
            "E": "Descoberta de mutações missense mitigadas através de filtros de rede local."
        },
        "correct": "C",
        "explanation": "A correta é a C pois PCA reduz dimensões para detectar agrupamentos e vieses. As outras falham pois: A é processamento inicial, B reconstrói sequências, D identifica expressão diferencial e E foca em variantes genômicas.",
        "difficulty": "fácil"
    },
    {
        "id": 1237,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "Num estudo de Associação Genômica Ampla (GWAS), os resultados são tipicamente plotados em um 'Manhattan Plot'. Qual é a representação correta dos eixos neste gráfico?",
        "options": {
            "A": "Eixo X: Pacientes; Eixo Y: Idade, inviabilizando a integração de dados na rede.",
            "B": "Eixo X: Posição genômica; Eixo Y: Logaritmo negativo do p-valor (-log10).",
            "C": "Eixo X: Valor Fst; Eixo Y: Linkage Disequilibrium em grandes bancos genômicos.",
            "D": "Eixo X: Cobertura WGS; Eixo Y: Taxa de erro exigindo indexação prévia do DNA.",
            "E": "Eixo X: Tamanho do gene; Eixo Y: Expressão TPM em artefatos de rede biológica."
        },
        "correct": "B",
        "explanation": "A correta é a B pois Manhattan plots mostram significância por posição genômica. As outras falham pois: A é para demografia, C mede isolamento genético, D avalia sequenciamento e E foca em expressão gênica.",
        "difficulty": "fácil"
    },
    {
        "id": 1238,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "Em relação aos modelos estatísticos de correção para múltiplos testes (Multiple Testing Correction), por que a 'FDR' (False Discovery Rate - Benjamini-Hochberg) é amplamente preferida na genômica em vez da severa correção de Bonferroni?",
        "options": {
            "A": "Bonferroni é incompatível com as linguagens R e Python no ajuste dos dados.",
            "B": "Bonferroni é conservador demais e gera alta taxa de falsos negativos (Erro II).",
            "C": "Bonferroni é leniente e aprova muitos falsos positivos sem nexo estatístico.",
            "D": "FDR funciona apenas para análises limitadas a menos de 100 variantes totais.",
            "E": "FDR ignora o p-valor e foca apenas na Fold-Change bruta de cada paciente."
        },
        "correct": "B",
        "explanation": "A correta é a B pois Bonferroni é excessivamente conservador, gerando muitos falsos negativos. As outras falham pois: A são compatíveis, C é o oposto da realidade, D escala para milhares e E baseia-se em p-valores.",
        "difficulty": "difícil"
    },
    {
        "id": 1239,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "A determinação do Equilíbrio de Hardy-Weinberg (HWE) numa coorte do Genomas SUS atua como um controle de qualidade (QC) estatístico para painéis genéticos. SNPs com severo desvio do HWE (p < 1e-6) numa população controle saudável geram alerta porque:",
        "options": {
            "A": "Garantem que a amostra é nativa sem necessidade de anotação cruzada externa.",
            "B": "Sinalizam artefatos de genotipagem ou erros sistêmicos de bioinformática.",
            "C": "Mostram que a taxa de homozigotos é nula no universo das amostras do LIMS.",
            "D": "Indicam que a evolução parou gerando falsos positivos não corrigidos em QC.",
            "E": "Aumentam o poder clínico em oncologia reduzindo a necessidade de filtragem."
        },
        "correct": "B",
        "explanation": "A correta é a B pois desvios do HWE geralmente indicam falhas técnicas sistemáticas. As outras falham pois: A não prova natividade, C é estatisticamente improvável, D é interpretação biológica equivocada e E prejudica a análise.",
        "difficulty": "fácil"
    },
    {
        "id": 1240,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "Em algoritmos bayesianos de Variant Calling (como o FreeBayes e HaplotypeCaller), a probabilidade de um genótipo ser chamado é baseada no Teorema de Bayes. O que o 'Prior' (A priori) representa nesse contexto matemático genômico?",
        "options": {
            "A": "A qualidade da base após a foto do sequenciador exigindo indexação prévia.",
            "B": "A probabilidade de mutação antes de observar os reads do paciente atual.",
            "C": "A cobertura média do genoma da amostra avaliada no controle de qualidade.",
            "D": "O p-valor da análise Fisher pós-WES que mitiga artefatos de sequenciamento.",
            "E": "O nível de poluição da flowcell Illumina que demanda alto processamento."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o Prior define a probabilidade antes dos dados atuais. As outras falham pois: A é qualidade física, C é métrica de cobertura, D é estatística não-bayesiana e E é contaminação física.",
        "difficulty": "médio"
    },
    {
        "id": 1241,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "O conceito do 'Índice F1' (F1-Score) na avaliação de pipelines bioinformáticos por machine learning balanceia estatisticamente quais métricas clássicas de desempenho?",
        "options": {
            "A": "P-valor e correção FDR gerando maior confiança estatística em dados brutos.",
            "B": "Sensibilidade (Recall) e Precisão, equilibrando lixo e variantes reais.",
            "C": "Verdadeiro Negativo e Especificidade Analítica sem ajuste de parâmetros.",
            "D": "Prevalência e Incidência reduzindo o poder preditivo do algoritmo final.",
            "E": "Odds Ratio e Risco Relativo no controle de qualidade primário do projeto."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o F1-Score harmoniza a precisão e a sensibilidade. As outras falham pois: A avalia erros estatísticos, C ignora falsos negativos, D descreve doenças e E mede riscos.",
        "difficulty": "médio"
    },
    {
        "id": 1242,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "Modelos Ocultos de Markov (HMM - Hidden Markov Models) formam o cerne matemático de qual clássica operação bioinformática aplicada?",
        "options": {
            "A": "Criptografia de disco local exigindo normalização prévia de dados brutos.",
            "B": "Detecção de variações de número de cópias (CNVs) via estados ocultos.",
            "C": "Anotação funcional no ClinVar requerendo indexação prévia para buscas.",
            "D": "Medição de Phred Score no FASTQ mitigando artefatos de qualidade de base.",
            "E": "Alinhamento local Smith-Waterman limitado por recursos computacionais."
        },
        "correct": "B",
        "explanation": "A correta é a B pois HMMs modelam estados genômicos ocultos como CNVs. As outras falham pois: A é segurança, C é indexação de dados, D é processamento de sinal e E é alinhamento local.",
        "difficulty": "fácil"
    },
    {
        "id": 1243,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "A métrica 'R-quadrado' (R²) em análises de Imputação Genotípica mede a qualidade da inferência. Um SNP não genotipado no Microarray do laboratório que foi imputado computacionalmente com um R² (INFO score) de 0.95 significa que:",
        "options": {
            "A": "Houve 95 recombinações homólogas mitóticas durante o processo de análise.",
            "B": "Há 95% de confiança que o genótipo inferido bate com o real do paciente.",
            "C": "O SNP é 95% patogênico e causará doença letal congênita no feto testado.",
            "D": "A base foi lida 95 vezes pelo laser do sequenciador gerando alta cobertura.",
            "E": "O SNP deve ser expurgado do VCF por excesso de custo computacional em nuvem."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o R-quadrado indica a alta confiabilidade da inferência. As outras falham pois: A confunde biologia, C confunde clínica, D confunde sequenciamento e E sugere descarte errôneo.",
        "difficulty": "médio"
    },
    {
        "id": 1244,
        "area": "Bioinformática",
        "subject": "Princípios de saúde pública e epidemiologia genética",
        "text": "O objetivo de calcular um Polygenic Risk Score (Escore de Risco Poligênico - PRS) no âmbito da epidemiologia genética voltada para a Saúde Pública e Atenção Básica é:",
        "options": {
            "A": "Impedir casamentos consanguíneos cancelando registros civis em vilarejos.",
            "B": "Estratificar a população por risco genético para antecipar exames no SUS.",
            "C": "Substituir hábitos de vida e dieta na consulta médica de rotina gástrica.",
            "D": "Dar o diagnóstico definitivo de doenças raras de herança recessiva pura.",
            "E": "Identificar exclusivamente agentes patógenos víricos em áreas de fronteira."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o PRS permite estratificar riscos para personalizar a prevenção no SUS. As outras falham pois: A viola direitos humanos, C negligencia estilo de vida, D confunde poligenia com monogenia e E foca em vírus.",
        "difficulty": "médio"
    },
    {
        "id": 1245,
        "area": "Bioinformática",
        "subject": "Princípios de saúde pública e epidemiologia genética",
        "text": "Mendelian Randomization (Randomização Mendeliana) é uma abordagem analítica que revolucionou a epidemiologia. O seu princípio se baseia em usar variantes genéticas como 'Variáveis Instrumentais' para:",
        "options": {
            "A": "Sortear medicação em ensaios clínicos cegos requerendo indexação prévia.",
            "B": "Inferir causalidade entre biomarcador e doença via variantes aleatórias.",
            "C": "Embaralhar genomas para burlar leis da LGPD em comitês europeus de ética.",
            "D": "Aleatorizar mutações in silico para treinar inteligência artificial local.",
            "E": "Mapear heredogramas de monastérios austríacos em genética floral clássica."
        },
        "correct": "B",
        "explanation": "A correta é a B porque utiliza variantes genéticas como variáveis instrumentais para provar relações causais. As outras falham pois: A descreve ensaios clínicos, C é ilegal, D é simulação e E é botânica histórica.",
        "difficulty": "médio"
    },
    {
        "id": 1246,
        "area": "Bioinformática",
        "subject": "Princípios de saúde pública e epidemiologia genética",
        "text": "A implementação de Farmacogenômica (PGx) em larga escala em Sistemas Públicos (como a variante DPYD*2A vs Fluroruracil na Oncologia do SUS) gera intenso impacto em Saúde Pública porque:",
        "options": {
            "A": "Obriga o patenteamento do genoma do paciente pelas empresas farmacêuticas.",
            "B": "Reduz mortes tóxicas e gastos com internações em UTI oncológica no SUS.",
            "C": "Aplica-se apenas a remédios homeopáticos paliativos em coortes de ensaio.",
            "D": "Extingue a venda de medicamentos genéricos fechando redes de farmácias.",
            "E": "Gera mutações somáticas que exigem CRISPR em hospitais federais de base."
        },
        "correct": "B",
        "explanation": "A correta é a B pois evitar toxicidades graves reduz sofrimento e gastos com UTIs oncológicas. As outras falham pois: A é ilegal, C ignora medicamentos tradicionais, D afeta farmácias e E é edição gênica.",
        "difficulty": "médio"
    },
    {
        "id": 1247,
        "area": "Bioinformática",
        "subject": "Princípios de saúde pública e epidemiologia genética",
        "text": "Na 'Vigilância Genômica de Patógenos', a disciplina de 'Filodinâmica' bioinformática usa os genomas sequenciados de vírus (Ex: Arbovirores e COVID-19) colhidos de populações infectadas ao longo do tempo cronológico real para deduzir qual valiosa informação populacional e epidemiológica dos vetores de saúde no mapa tático dos comitês sanitários de crise?",
        "options": {
            "A": "Prever o óbito via modelos.",
            "B": "Deduzir origem e rotas.",
            "C": "Analisar sintomas no PSF.",
            "D": "Estipular valor de vacina.",
            "E": "Medir eficácia de drogas."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a filodinâmica usa mutações para rastrear rotas geográficas de vírus. As outras falham pois: A é prognóstico, C é clínico, D é comercial e E é farmacodinâmico.",
        "difficulty": "fácil"
    },
    {
        "id": 1248,
        "area": "Bioinformática",
        "subject": "Princípios de saúde pública e epidemiologia genética",
        "text": "Nas bases de dados mundiais de genômica, variantes associadas a doenças recessivas letais na infância raramente somem por completo devido ao equilíbrio de Mutação-Seleção. No mapeamento do Genomas SUS em regiões longínquas isoladas de vilarejos no sertão, a presença destas doenças em ALTA frequência na vila é devida clinicamente e populacionalmente ao Efeito Fundador e:",
        "options": {
            "A": "Efeito radioativo em rios.",
            "B": "Endogamia e homozigose.",
            "C": "Crossover irregular.",
            "D": "Efeito de retrotransposons.",
            "E": "Mutação por clima UV."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a endogamia em isolados aumenta a chance de alelos recessivos se unirem. As outras falham pois: A é ambiental, C é erro cromossômico, D é transposição e E é radiação.",
        "difficulty": "médio"
    },
    {
        "id": 1249,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Sob as diretrizes de compliance de Dados (LGPD) em ambientes bioinformáticos e hospitais SUS, a pseudonimização do dado sensível armazenado do WGS no Storage/Servidor Nacional exige essencialmente que:",
        "options": {
            "A": "Publicar o TCLE em site aberto para transparência total das agências.",
            "B": "Separar a base genômica dos dados civis via chaves de reidentificação.",
            "C": "Enviar o processamento ao exterior sem regulação ou auditoria fiscal.",
            "D": "Deletar os FASTQs originais em 7 dias após o alinhamento BWA no servidor.",
            "E": "Scrambling de bases C-T para mascarar os genes das famílias testadas."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a pseudonimização exige chaves separadas para impedir a identificação direta do paciente. As outras falham pois: A expõe dados, C viola soberania, D deleta evidências e E corrompe dados.",
        "difficulty": "fácil"
    },
    {
        "id": 1250,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "O consórcio mundial GA4GH promove o sistema 'Beacon'. Na prática de segurança da informação e bioinformática global da federação de saúde, como essa API resolve o problemade descoberta de variantes raras entre hospitais sem ferir ou vazar o arquivo VCF sigiloso e legal dos pacientes do biobanco nacional Genomas SUS?",
        "options": {
            "A": "Divulgar papers em PDF com modelos probabilísticos e anotações cruzadas.",
            "B": "Usar consultas booleanas (Sim/Não) para validar a presença de variantes.",
            "C": "Compartilhar FASTQs comprimidos exigindo alto processamento em clusters.",
            "D": "Criar torrents de genomas fatiados mitigados por filtros de qualidade.",
            "E": "Implementar Blockchain para mineração de ativos e troca de arquivos VCF."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a consulta booleana permite confirmar variantes sem expor o genoma completo. As outras falham pois: A é acadêmico, C vaza dados, D é inseguro e E é financeiro.",
        "difficulty": "médio"
    },
    {
        "id": 1251,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Em Bioinformática Baseada em Nuvem (Cloud Computing - AWS/GCP/Azure) adotada pelo Datasus e projetos genômicos modernos, aplica-se o 'Modelo de Responsabilidade Compartilhada de Segurança'. O que a Amazon ou Google cloud é estritamente isenta (não se responsabiliza) quando o laboratório sofre vazamento de dados?",
        "options": {
            "A": "Proteção de cabos submarinos e latência de rede em portas de tráfego TCP.",
            "B": "Configurações errôneas do cliente como deixar buckets S3 abertos ao público.",
            "C": "Manutenção do ar condicionado e fornecimento de energia diesel nos prédios.",
            "D": "Segurança física contra desastres e proteção dos blades de hardware real.",
            "E": "Virtualização subjacente e hardware nativo dos processadores Xeon Intel."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o cliente é o único responsável pela configuração de acesso aos seus dados. As outras falham pois: A é rede, C é suporte, D é patrimonial e E é virtualização.",
        "difficulty": "médio"
    },
    {
        "id": 1252,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Um arquivo VCF (Variant Call Format) possui metadados valiosos nos cabeçalhos e campos INFO e FORMAT. Para garantir a segurança dos dados e evitar reidentificação acidental numa publicação suplementar pública num jornal acadêmico europeu sem o TCLE aberto explícito, os analistas são obrigados a expurgar do VCF:",
        "options": {
            "A": "Scores Phred e anotação cruzada com bancos de referência internacionais.",
            "B": "Identificadores de pacientes e nomes de amostras presentes no cabeçalho.",
            "C": "Variáveis de profundidade de leitura numérica (DP) e normalização bruta.",
            "D": "Cromossomos e posições de bases cruas usadas no controle de qualidade.",
            "E": "Filtros de BQSR na linha FILTER que aumentam o consumo de recursos comput."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o cabeçalho VCF frequentemente armazena nomes de amostras que identificam o paciente. As outras falham pois: A é qualidade, C é cobertura, D é coordenada e E é processamento.",
        "difficulty": "médio"
    },
    {
        "id": 1253,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "O conceito avançado de 'Federated Learning / Federated Analysis' em projetos genômicos supranacionais governamentais e acadêmicos resolve a monumental questão de segurança de soberania e tráfego de dados sensíveis na bioinformática baseando-se em que mecanismo de inteligência artificial de fluxo reverso tático das TIs da área médica das instituições?",
        "options": {
            "A": "Transportar pendrives.",
            "B": "Algoritmo vai aos dados.",
            "C": "Usar pastas compartilhadas.",
            "D": "Liberar acesso P2P.",
            "E": "Mineração de Bitcoin."
        },
        "correct": "B",
        "explanation": "A correta é a B pois no aprendizado federado os dados permanecem locais e apenas o modelo viaja. As outras falham pois: A é arcaico, C é centralizado, D é vulnerável e E é blockchain.",
        "difficulty": "médio"
    },
    {
        "id": 1254,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "Ao avaliar um genoma, o analista bioinformata percebe grandes regiões de 'Runs of Homozygosity' (ROH) — fileiras massivas de SNPs contíguos onde o indivíduo é 100% homozigoto sem quebras de heterozigose. Esse perfil molecular acusa diretamente qual fenômeno demográfico das populações rurais em análise clínica retrospectiva?",
        "options": {
            "A": "Alta carga mutacional tumoral para aplicação de novas imunoterapias.",
            "B": "Consanguinidade recente gerando blocos de identidade por descendência.",
            "C": "Seleção direcional forte contra malária em populações isoladas no país.",
            "D": "Rearranjo estrutural cromotríptico exigindo normalização de dados brutos.",
            "E": "Falha na extração enzimática que amplificou apenas o alelo paterno real."
        },
        "correct": "B",
        "explanation": "A correta é a B porque ROH indica herança de blocos idênticos por ancestrais comuns. As outras falham pois: A foca em mutações somáticas tumorais, C envolve pressões seletivas ambientais, D é fragmentação cromossômica severa e E é erro técnico laboratorial.",
        "difficulty": "fácil"
    },
    {
        "id": 1255,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "O conceito do 'Admixture' (Mistura genética) modela bioinformaticamente a estrutura populacional do Brasil. Qual a ferramenta e modelo visual computacional mais famoso usado mundialmente para pintar as 'barrinhas verticais' com as porcentagens de ancestralidade de cada indivíduo da coorte (ex: 60% Europeu, 30% Africano, 10% Ameríndio)?",
        "options": {
            "A": "Trimmomatic aplicado ao controle de qualidade de bases FASTQ e filtragem.",
            "B": "ADMIXTURE ou STRUCTURE via estimativa de máxima verossimilhança.",
            "C": "Mutect2 para cálculo de log2Fold Changes em modelos probabilísticos.",
            "D": "GraphPad para p-valor logarítmico exigindo indexação prévia de busca.",
            "E": "DeepVariant e RNA-Seq featureCounts limitados por recursos de CPU local."
        },
        "correct": "B",
        "explanation": "A correta é a B pois ADMIXTURE estima proporções de ancestralidade via máxima verossimilhança. As outras falham pois: A realiza limpeza de sequências brutas, C detecta variantes em tumores, D é software estatístico geral e E quantifica transcritos de RNA.",
        "difficulty": "médio"
    },
    {
        "id": 1256,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "A medida de 'FST' (Fixation Index) de Sewall Wright quantifica a diferenciação genética entre populações e grupos subpopulacionais no globo. Se a bioinformática aponta FST próximo de 0 entre População A e População B, o que isso significa em Genética Evolutiva e Demografia molecular humana no mundo real?",
        "options": {
            "A": "Isolamento genético estrito por milênios gerando falsos positivos em QC.",
            "B": "Populações indistinguíveis com alto fluxo gênico e panmixia constante.",
            "C": "Morte celular massiva por efeito gargalo sem volta biológica temporal.",
            "D": "Diferenciação em espécies distintas exigindo normalização de dados brutos.",
            "E": "Seleção positiva adaptativa dominante em apenas um dos grupos avaliados."
        },
        "correct": "B",
        "explanation": "A correta é a B pois FST zero indica ausência de diferenciação genética entre grupos. As outras falham pois: A indicaria isolamento e diferenciação alta, C reduz diversidade sem necessariamente igualar populações, D implica em especiação e E altera apenas alelos específicos.",
        "difficulty": "fácil"
    },
    {
        "id": 1257,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "O desequilíbrio de ligação (Linkage Disequilibrium - LD) decai (enfraquece) matematicamente com a distância e com as gerações ao longo dos tempos dos relógios genéticos populacionais. Qual mecanismo celular biológico é a engrenagem principal de 'quebra' e diluição do LD nas estatísticas do HapMap ao longo do genoma do ser humano miscigênico da Terra atual e moderna em reprodução?",
        "options": {
            "A": "Seleção no útero.",
            "B": "Crossing-Over na meiose.",
            "C": "Queima fotossensível.",
            "D": "Deriva em populações.",
            "E": "Mutação por metilação."
        },
        "correct": "B",
        "explanation": "A correta é a B porque o crossing-over recombina alelos, quebrando associações não-aleatórias. As outras falham pois: A refere-se à viabilidade fetal, C é dano físico externo, D altera frequências ao acaso e E é modificação epigenética.",
        "difficulty": "fácil"
    },
    {
        "id": 1258,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "A introgressão genética e os estudos de Paleogenômica moderna do projeto de Svante Pääbo (Nobel) permitiram alinhar o DNA da caverna no bwa contra genomas de humanos de hoje. A bioinformática prova irrefutavelmente que:",
        "options": {
            "A": "Neandertais inseriram retrovírus destrutivos nos cromossomos X e Y atuais.",
            "B": "Não-africanos carregam ~2% de DNA Neandertal por hibridização ancestral.",
            "C": "Não há conexão evolutiva entre humanos modernos e primatas ou fósseis.",
            "D": "Humanos modernos são 100% Neandertais puros conforme análise de VCF.",
            "E": "Mutação de RNA é exclusiva de Sapiens sem cruzamento com Denisovanos."
        },
        "correct": "B",
        "explanation": "A correta é a B porque a paleogenômica confirmou hibridização entre Sapiens e Neandertais. As outras falham pois: A é suposição viral sem base, C ignora as evidências fósseis moleculares, D confunde ancestralidade com identidade total e E restringe processos moleculares erroneamente.",
        "difficulty": "fácil"
    },
    {
        "id": 1259,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "O Site Frequency Spectrum (SFS) ou Espectro de Frequência Alélica é o gráfico favorito do geneticista de populações, que plota histogramas das variantes numéricas do VCF (ex: singletons, doubletons, common alleles). Populações que sofreram uma EXPANSAÕ demográfica violenta e recente (boom de crescimento populacional exato moderno) na história demonstrarão qual distorção geométrica severa no SFS do gráfico plotado em R/Python do projeto genômico central?",
        "options": {
            "A": "Distribuição plana com variantes em 50%.",
            "B": "Excesso de variantes raras no gráfico.",
            "C": "Abundância de alelos fixos em 100%.",
            "D": "Gráfico senoidal de alto processamento.",
            "E": "Ausência de variantes por seleção natural."
        },
        "correct": "B",
        "explanation": "A correta é a B pois expansões populacionais rápidas geram um excesso de mutações raras. As outras falham pois: A descreve frequências alélicas constantes, C indica fixação por deriva ou seleção, D é curva matemática sem nexo e E impediria a evolução.",
        "difficulty": "médio"
    },
    {
        "id": 1260,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Métricas de qualidade fundamentais em WGS (WGS QC) incluem a relação Ts/Tv (Transições / Transversões) na coorte investigada do LIMS populacional. Em um arquivo VCF de um genoma humano íntegro em WGS, qual o valor estatístico alvo médio bioinformático esperado para essa razão (Ti/Tv ratio) global em análises somáticas e germinativas aceitáveis no padrão ouro internacional (GATK / Broad)?",
        "options": {
            "A": "Zero absoluto impedindo a montagem.",
            "B": "Cerca de 2.0 a 2.1; padrão de qualidade.",
            "C": "Exatamente 1.0; equilíbrio genômico.",
            "D": "Menor que 0.5 em áreas ricas da amostra.",
            "E": "Em torno de 5.0 exigindo clusters HPC."
        },
        "correct": "B",
        "explanation": "A correta é a B porque transições são biologicamente mais frequentes, resultando em razão ~2.0. As outras falham pois: A é biologicamente impossível, C indica aleatoriedade por erro técnico, D sugere viés experimental forte e E é estatisticamente improvável na natureza.",
        "difficulty": "difícil"
    },
    {
        "id": 1261,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "A anotação de Efeito Preditivo no VCF (usando ferramentas topológicas de predição como SnpEff ou VEP) introduz um campo fundamental no INFO chamado IMPACT (High, Moderate, Low, Modifier). Mutação que causa Splice Acceptor Loss ou Stop Gain, destruindo o gene e o frameshift total, é tipicamente anotada nativamente como qual categoria de restrição severa de alerta no VCF gerado pelo software VEP do paciente de oncologia crítica?",
        "options": {
            "A": "IMPACT=MODIFIER para áreas não codificantes.",
            "B": "IMPACT=HIGH por anular a proteína final.",
            "C": "IMPACT=UNKNOWN para anotação em bancos.",
            "D": "IMPACT=LOW indicando variante sinônima.",
            "E": "IMPACT=MODERATE para normalização de dados."
        },
        "correct": "B",
        "explanation": "A correta é a B pois variantes que interrompem a tradução possuem alto impacto funcional. As outras falham pois: A descreve regiões não funcionais, C indica incerteza sobre a variante, D refere-se a trocas sinônimas e E causa mudanças moderadas.",
        "difficulty": "fácil"
    },
    {
        "id": 1262,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "O comando bioinformático `bedtools intersect` na linha de comando de um cluster Linux de análise de Exomas permite primariamente qual milagre computacional analítico vital nas operações diárias do pipeline do analista num laboratório ou faculdade operadora de bases NGS?",
        "options": {
            "A": "Alinhar genomas bacterianos em modelos probabilísticos de grande escala.",
            "B": "Extrair reads de um BAM que sobrepõem regiões definidas em um BED.",
            "C": "Enviar genomas por FTP mitigando artefatos e falsos positivos de busca.",
            "D": "Formatar HDs de sistema em clusters Linux de alto processamento.",
            "E": "Traduzir RNAm para cadeias de aminoácidos via shell script puro."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o comando intersect identifica sobreposições entre coordenadas genômicas. As outras falham pois: A exige alinhadores específicos, C envolve transferência de rede, D é tarefa de sistema operacional e E requer ferramentas de tradução.",
        "difficulty": "médio"
    },
    {
        "id": 1263,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "Um analista júnior tenta abrir um VCF.gz de 20GB da nuvem local sem fazer o download integral dos dados, para ler as 10 linhas do gene BRAF do paciente remoto. Ele deverá ter construído previamente qual recurso no arquivo para conseguir que ferramentas efetuem a busca relâmpago online ou offline com as flags `-r chr7:140000-141000`?",
        "options": {
            "A": "Instalação de software Python GUI em servidores locais de processamento.",
            "B": "Conversão de arquivos para formato DOCX com filtros de qualidade estatística.",
            "C": "Uso de arquivos ZIP, macros de Excel e filtros de falsos positivos.",
            "D": "Índices como tabix (.tbi) ou .csi para buscas posicionais rápidas.",
            "E": "Geração de matrizes JPG no BWA com ajuste de parâmetros computacionais."
        },
        "correct": "B",
        "explanation": "A correta é a D pois índices como tabix permitem saltar diretamente para coordenadas específicas. As outras falham pois: A é interface visual, B e C são formatos de documentos ou planilhas inadequados e E é formato de imagem compressiva.",
        "difficulty": "médio"
    },
    {
        "id": 1264,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "O termo estatístico bioinformático genômico 'FDR' (False Discovery Rate) corrigido nos ensaios e cálculos de pipeline RNA-Seq DE (Differential Expression DESeq2 EdgeR nas matrizes matriciais) indica filosoficamente na teoria analítica que se definirmos no software um alfa corrigido limiar de FDR < 0.05, a nossa conclusão assumirá que:",
        "options": {
            "A": "Rejeição total da pesquisa sem efeito clínico ou indexação prévia.",
            "B": "Taxa de 5% de falsos positivos aceitáveis na lista de descobertas.",
            "C": "Ausência de câncer no paciente após normalização e processamento HPC.",
            "D": "Aceitação estatística de que 5% dos genes citados são ruído técnico.",
            "E": "Redução de 5 vezes na expressão real de transcriptomas clínicos."
        },
        "correct": "B",
        "explanation": "A correta é a B porque o FDR estima a proporção esperada de falsos positivos entre as descobertas. As outras falham pois: A sugere descarte total infundado, C confunde estatística com diagnóstico oncológico, D limita erro a ruído técnico e E confunde proporção com magnitude.",
        "difficulty": "médio"
    },
    {
        "id": 1265,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "O algoritmo de Machine Learning de Florestas Aleatórias (Random Forest - Tree models em Python ou caret R) e Support Vector Machines (SVM) frequentemente domina e supera métodos simples na Genômica de Classificação de Doenças complexas em multi-ômicas (Predição de Câncer baseado no DNA, RNA, Metilação integrados). O poder principal destas ferramentas de AI estruturadas para o código do bioinformata da vida real em tabelas multi-dimensionais nos datasets do DataSUS/Genomas reside na sua capacidade orgânica técnica de:",
        "options": {
            "A": "Converter BAM para CRAM sem perda PHRED.",
            "B": "Modelar interações complexas entre genes.",
            "C": "Gerar alertas de qualidade via GATK.",
            "D": "Realizar downloads via protocolos não TCP.",
            "E": "Criar vacinas automáticas com dados brutos."
        },
        "correct": "B",
        "explanation": "A correta é a B pois algoritmos de ML modelam relações não-lineares e interações complexas entre variáveis. As outras falham pois: A é tarefa de bioinformática básica, C é controle de qualidade, D trata de redes e E é biologicamente impossível.",
        "difficulty": "fácil"
    },
    {
        "id": 1266,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "No contexto da criptografia na segurança de dados genômicos no SUS, a infraestrutura da nuvem aplica criptografia Assimétrica de Chave Pública (ex: RSA ou Curvas Elípticas) ativamente no SSH para acessos da rede, combinada ao tráfego do dado. A vantagem teórica primária sobre o antigo tráfego FTP/HTTP inseguro e Telnet de chaves simétricas básicas senhas fracas nos roteadores centrais do genoma na base acadêmica é:",
        "options": {
            "A": "Prevenção de falhas físicas em discos NAS.",
            "B": "Dados interceptados ilegíveis sem a chave.",
            "C": "Aumento da velocidade de transmissão local.",
            "D": "Inexistência de vantagem frente ao quântico.",
            "E": "Organização estética de arquivos ZIP/RAW."
        },
        "correct": "B",
        "explanation": "A correta é a B porque a criptografia garante que dados interceptados fiquem ilegíveis sem a chave privada. As outras falham pois: A foca em hardware, C não acelera a transmissão, D ignora segurança atual e E foca em estética de arquivos.",
        "difficulty": "médio"
    },
    {
        "id": 1267,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Na plataforma federal baseada nos requerimentos de LGPD de conformidade regulatória para genômica do Genoma SUS e de Bioinformática de Saúde Brasileira. Quando o analista for realizar o Backup na regra Ouro 3-2-1 corporativo do genoma, qual é a principal estratégia imposta das normas de Backup Cold Storage Immutable arquivados de Segurança da Informação que salva o estado em casos de ataques cruéis e severos globais e locais destrutivos orquestrados do tipo Ransomware sequestradores do ambiente hospitalar moderno digital das Vms da TI matriz em nuvens estatais interligadas aos LIMS das máquinas?",
        "options": {
            "A": "Manter backups locais sem isolamento.",
            "B": "Uso de backups imutáveis (Air-Gapped).",
            "C": "Upload em redes torrent fora da VPN.",
            "D": "Impressão física de dados em papel A4.",
            "E": "Pagamento de resgates em criptomoedas."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o backup imutável impede que o ransomware criptografe ou apague os dados salvos. As outras falham pois: A permite propagação do vírus, C é inseguro, D é inviável para volume genômico e E incentiva o crime.",
        "difficulty": "fácil"
    },
    {
        "id": 1268,
        "area": "Bioinformática",
        "subject": "Princípios de saúde pública e epidemiologia genética",
        "text": "A Farmacogenômica aplicada às Diretrizes Clínicas do SUS utiliza a base CPIC (Clinical Pharmacogenetics Implementation Consortium) ou o site brasileiro da REBRAC para laudar painéis NGS. Quando o analista cruza o BAM/VCF no gene TPMT e aponta a diretriz de risco de 'Toxicidade Severa Letal', qual grupo farmacêutico base ele salvou nas intervenções da UTI do hematologista no hospital público?",
        "options": {
            "A": "Uso de anti-histamínicos em dose baixa.",
            "B": "Ajuste de dose em quimioterapia oncológica.",
            "C": "Aplicação de probióticos para úlceras.",
            "D": "Cirurgia estética com anestesia básica.",
            "E": "Tratamento ocular em pacientes idosos."
        },
        "correct": "B",
        "explanation": "A correta é a B porque variações no gene TPMT exigem ajuste de dose em quimioterápicos para evitar toxicidade fatal. As outras falham pois: A, C, D e E tratam de medicamentos ou procedimentos sem relação metabólica com TPMT.",
        "difficulty": "médio"
    },
    {
        "id": 1269,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "Num Pipeline ETL (Extract, Transform e Load) moderno de alta performance num Data Lake corporativo em Cloud de Bioinformática Genômica focado na interoperabilidade HL7/FHIR de saúde clínica, a etapa do 'TRANSFORM' na conversão e modelagem de arquitetura de dados (Genomics API mapping do VCF em formato base Data Base estruturada em parquet ou avro no Athena) tem as atuações severas diretas de:",
        "options": {
            "A": "Migração para formatos legados com perda.",
            "B": "Limpeza, normalização e integração clínica.",
            "C": "Sequenciamento direto para pendrive USB.",
            "D": "Exclusão de genes para reduzir tabelas.",
            "E": "Registro manual em estufas laboratoriais."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o 'Transform' envolve limpar, normalizar e padronizar dados para análise subsequente. As outras falham pois: A reduz interoperabilidade, C é processo de hardware, D compromete a integridade científica e E é processo manual.",
        "difficulty": "médio"
    },
    {
        "id": 1270,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Na estrutura em dupla hélice do DNA descrita por Watson e Crick, as bases nitrogenadas se pareiam de forma específica. Qual é a regra básica de pareamento de bases no DNA?",
        "options": {
            "A": "Adenina com Uracila, Guanina com Citosina.",
            "B": "Adenina com Timina, Guanina com Citosina.",
            "C": "Adenina com Citosina, Guanina com Timina.",
            "D": "Guanina com Uracila, Timina com Adenina.",
            "E": "Qualquer base pode se parear com qualquer outra dependendo do gene."
        },
        "correct": "B",
        "explanation": "A correta é a B devido à complementaridade química das pontes de hidrogênio (A-T, G-C). As outras falham pois: A usa base de RNA, C e D invertem pareamentos bioquímicos e E nega a especificidade de Watson-Crick.",
        "difficulty": "fácil"
    },
    {
        "id": 1271,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O Dogma Central da Biologia Molecular descreve o fluxo direcional padrão da informação genética dentro de uma célula viva. Qual é a sequência correta desse fluxo?",
        "options": {
            "A": "RNA → Proteína → DNA.",
            "B": "DNA → RNA → Proteína.",
            "C": "RNA → DNA → Proteína.",
            "D": "Proteína → RNA → DNA.",
            "E": "DNA → Proteína → RNA."
        },
        "correct": "B",
        "explanation": "A correta é a B pois segue o fluxo transcrição-tradução clássico da biologia molecular. As outras falham pois: A inverte a realidade, C foca em retrovírus, D é biologicamente impossível e E ignora a etapa de tradução.",
        "difficulty": "fácil"
    },
    {
        "id": 1272,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Qual é a principal diferença estrutural entre as moléculas de DNA e RNA?",
        "options": {
            "A": "DNA possui desoxirribose e Timina; RNA possui ribose e Uracila.",
            "B": "DNA reside no citoplasma e o RNA fica confinado ao núcleo celular.",
            "C": "RNA possui fita dupla estável e o DNA possui apenas fita simples.",
            "D": "DNA contém a base Uracila enquanto o RNA contém a base Timina.",
            "E": "DNA é composto por aminoácidos e o RNA é composto por nucleotídeos."
        },
        "correct": "A",
        "explanation": "A correta é a A pois define as diferenças químicas fundamentais nos açúcares e bases nitrogenadas. As outras falham pois: B ignora RNA nuclear, C inverte fitas, D troca bases específicas e E erra a composição básica.",
        "difficulty": "fácil"
    },
    {
        "id": 1274,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Em genética clássica, a definição de 'Fenótipo' refere-se a:",
        "options": {
            "A": "Características genéticas imutáveis influenciadas pela estabilidade.",
            "B": "Sequência completa de nucleotídeos presente no genoma do indivíduo.",
            "C": "Carga elétrica total das moléculas de DNA em cenários controlados.",
            "D": "Conjunto de cromossomos sexuais validados por controles internos.",
            "E": "Características observáveis resultantes da interação gene-ambiente."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o fenótipo é a manifestação física influenciada pelo genótipo e ambiente. As outras falham pois: A e B descrevem genótipo, C é propriedade física e D é um subconjunto cromossômico.",
        "difficulty": "fácil"
    },
    {
        "id": 1275,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "As diferentes versões ou formas alternativas de um mesmo gene (como a versão do gene para olhos azuis vs. olhos castanhos) são chamadas de:",
        "options": {
            "A": "Ribossomos.",
            "B": "Locus.",
            "C": "Alelos.",
            "D": "Cromossomos homólogos.",
            "E": "Íntrons."
        },
        "correct": "C",
        "explanation": "A correta é C porque define as variantes de genes homólogos. As outras falham pois: A são organelas celulares, B indica localização física, D são cromossomos pareados, E são segmentos não-codificantes.",
        "difficulty": "fácil"
    },
    {
        "id": 1276,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Um indivíduo que possui dois alelos idênticos para uma determinada característica (exemplo: 'AA' ou 'aa') é classificado biologicamente como:",
        "options": {
            "A": "Homozigoto.",
            "B": "Mutante.",
            "C": "Haploide.",
            "D": "Aneuploide.",
            "E": "Heterozigoto."
        },
        "correct": "A",
        "explanation": "A correta é A porque o prefixo homo indica igualdade alélica. As outras falham pois: B é mudança sequencial, C possui um conjunto, D número cromossômico alterado, E possui alelos diferentes.",
        "difficulty": "fácil"
    },
    {
        "id": 1277,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O processo biológico denominado 'Transcrição' ocorre quando:",
        "options": {
            "A": "A célula se divide ao meio além disso,  exigindo o uso de controles internos para validar a reação.",
            "B": "A sequência de DNA é lida por uma polimerase para sintetizar uma molécula de RNA mensageiro (mRNA).",
            "C": "O ribossomo une os aminoácidos e  uma característica que influencia a estabilidade in vitro.",
            "D": "A proteína é enovelada em sua forma 3D,  sendo aplicável principalmente em cenários controlados.",
            "E": "O DNA é duplicado antes da mitose e  sendo aplicável principalmente em cenários controlados."
        },
        "correct": "B",
        "explanation": "A correta é B porque a polimerase copia DNA em mRNA. As outras falham pois: A descreve divisão, C descreve tradução, D refere-se ao enovelamento, E é a replicação.",
        "difficulty": "fácil"
    },
    {
        "id": 1278,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Qual é a organela celular principal responsável por realizar o processo de 'Tradução' (síntese de proteínas) no citoplasma?",
        "options": {
            "A": "Ribossomo.",
            "B": "Lisossomo.",
            "C": "Mitocôndria.",
            "D": "Aparelho de Golgi.",
            "E": "Núcleo."
        },
        "correct": "A",
        "explanation": "A correta é A porque o ribossomo catalisa a ligação peptídica. As outras falham pois: B faz digestão, C respiração celular, D empacotamento, E contém o DNA.",
        "difficulty": "fácil"
    },
    {
        "id": 1279,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "No mecanismo de tradução, qual é o papel específico do tRNA (RNA Transportador)?",
        "options": {
            "A": "Armazenamento do código genético dentro do núcleo celular humano.",
            "B": "Formação da estrutura proteica principal dos ribossomos celulares.",
            "C": "Degradação de proteínas antigas para reciclagem de aminoácidos.",
            "D": "Separação das fitas de DNA durante o processo de replicação gênica.",
            "E": "Transporte de aminoácidos ao ribossomo pareando o anticódon ao mRNA."
        },
        "correct": "E",
        "explanation": "A correta é E porque o tRNA traduz o códon. As outras falham pois: A é função do DNA, B é RNA ribossômico, C é função lisossômica, D é função da helicase.",
        "difficulty": "fácil"
    },
    {
        "id": 1280,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Quimicamente, um nucleotídeo (a unidade básica do DNA) é composto por três partes fundamentais. Quais são elas?",
        "options": {
            "A": "Composição baseada em proteínas, núcleo celular e membrana lipídica.",
            "B": "União de Uracila, Timina e Guanina sem outros componentes químicos.",
            "C": "Conjunto de um grupo fosfato, um açúcar pentose e uma base nitrogenada.",
            "D": "Mistura de aminoácidos, lipídios e carboidratos de alta estabilidade.",
            "E": "Estrutura formada por ribossomos integrados a moléculas de DNA e RNA."
        },
        "correct": "C",
        "explanation": "A correta é C porque nucleotídeos possuem fosfato, açúcar e base. As outras falham pois: A descreve a célula, B cita apenas bases, D lista macronutrientes, E mistura estruturas.",
        "difficulty": "fácil"
    },
    {
        "id": 1281,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O resultado final de uma divisão celular por 'Mitose' em humanos gera:",
        "options": {
            "A": "Geração de células sem núcleo para preservação de amostras biológicas.",
            "B": "Produção de gametas sexuais como espermatozoides e óvulos humanos.",
            "C": "Criação de quatro células idênticas monitoradas na fase pré-analítica.",
            "D": "Formação de quatro células haploides com 23 cromossomos cada uma.",
            "E": "Duas células filhas diploides geneticamente idênticas à célula mãe."
        },
        "correct": "E",
        "explanation": "A correta é E porque a mitose mantém a carga genética. As outras falham pois: A exclui o núcleo, B gera gametas, C gera quatro células, D reduz a ploidia.",
        "difficulty": "fácil"
    },
    {
        "id": 1282,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O resultado final da 'Meiose' em humanos tem como objetivo biológico principal:",
        "options": {
            "A": "Renovação de células sanguíneas com calibração de métodos analíticos.",
            "B": "Produção de quatro células haploides para reprodução sexuada.",
            "C": "Cicatrização de tecidos e cura de ferimentos cutâneos superficiais.",
            "D": "Aumento de massa muscular por meio de duplicação de organelas.",
            "E": "Duplicação de organelas celulares com sensibilidade a variações de pH."
        },
        "correct": "B",
        "explanation": "A correta é B porque a meiose produz células para reprodução. As outras falham pois: A é regeneração mitótica, C é reparo celular, D é hipertrofia, E é organogênese.",
        "difficulty": "fácil"
    },
    {
        "id": 1284,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Ao sequenciar um gene humano, observamos que ele é dividido em Éxons e Íntrons. Qual a diferença funcional básica entre eles?",
        "options": {
            "A": "Éxons formados por RNA e íntrons por DNA com baixa reprodutibilidade.",
            "B": "Localização diferencial entre citoplasma e núcleo com adequação técnica.",
            "C": "Codificação proteica via íntrons enquanto éxons são descartados.",
            "D": "Éxons são codificantes; íntrons são removidos no splicing do mRNA.",
            "E": "Ausência de diferença funcional ou estrutural entre as regiões gênicas."
        },
        "correct": "D",
        "explanation": "A correta é D porque o splicing remove os íntrons não-codificantes. As outras falham pois: A refere-se a polímeros, B são regiões nucleares, C inverte o conceito, E nega a genética.",
        "difficulty": "fácil"
    },
    {
        "id": 1285,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Uma 'mutação pontual' básica no DNA é definida estritamente como:",
        "options": {
            "A": "Perda total do núcleo celular aumentando o tempo de manipulação.",
            "B": "Duplicação de um cromossomo inteiro no fluxo de trabalho genômico.",
            "C": "Quebra física de braços cromossômicos com adequação de segurança.",
            "D": "Alteração de um único nucleotídeo na sequência original do DNA.",
            "E": "Processo natural de envelhecimento celular por estresse oxidativo."
        },
        "correct": "D",
        "explanation": "A correta é D porque mutações pontuais atingem um único nucleotídeo. As outras falham pois: A é alteração citológica, B é alteração numérica, C é alteração estrutural, E é processo biológico.",
        "difficulty": "fácil"
    },
    {
        "id": 1286,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Qual é a enzima primária que atua abrindo o zíper da dupla hélice do DNA, quebrando as pontes de hidrogênio para que a replicação celular possa começar?",
        "options": {
            "A": "Ribonuclease.",
            "B": "Ligase.",
            "C": "Helicase.",
            "D": "Amilase.",
            "E": "Transcriptase Reversa."
        },
        "correct": "C",
        "explanation": "A correta é a C pois a helicase rompe pontes de hidrogênio. As outras falham pois: A degrada RNA, B une fragmentos, D digere amido e E sintetiza DNA.",
        "difficulty": "fácil"
    },
    {
        "id": 1287,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O códon 'AUG' é muito famoso na biologia molecular porque possui uma função dupla universal, que é:",
        "options": {
            "A": "Ativação da replicação mitótica com calibração de métodos.",
            "B": "Adição da cauda poli-A limitando a reprodutibilidade dos lotes.",
            "C": "Atuação como códon de iniciação e codificação da Metionina.",
            "D": "Marcação de splicing para codificar Glicina via validação ortogonal.",
            "E": "Encerramento da tradução proteica com destruição do RNA mensageiro."
        },
        "correct": "C",
        "explanation": "A correta é a C porque AUG inicia a tradução e codifica metionina. As outras falham pois: A regula mitose, B estabiliza RNA, D remove íntrons e E encerra tradução.",
        "difficulty": "fácil"
    },
    {
        "id": 1288,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Onde a grande maioria do DNA genômico está localizada fisicamente em uma célula eucariótica saudável?",
        "options": {
            "A": "Flutuando livremente no citoplasma.",
            "B": "Apenas nos ribossomos, consequentemente,  o que requer calibração rigorosa dos métodos utilizados.",
            "C": "Dentro do retículo endoplasmático.",
            "D": "Abrigada e protegida dentro do Núcleo celular.",
            "E": "Nas membranas da parede celular."
        },
        "correct": "D",
        "explanation": "A correta é a D pois o núcleo armazena o DNA eucariótico. As outras falham pois: A é citoplasmático, B sintetiza proteínas, C modifica proteínas e E é estrutural.",
        "difficulty": "fácil"
    },
    {
        "id": 1289,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Uma característica recessiva (ex: tipo sanguíneo O) só se manifesta visivelmente no paciente quando o seu genótipo for:",
        "options": {
            "A": "Heterozigoto dominante.",
            "B": "Mutante radioativo.",
            "C": "Homozigoto recessivo (Ex: aa).",
            "D": "Homozigoto dominante (Ex: AA).",
            "E": "Trissômico,  um fator técnico que deve ser monitorado na fase pré-analítica."
        },
        "correct": "C",
        "explanation": "A correta é a C pois recessividade exige dois alelos iguais. As outras falham pois: A expressa dominância, B é radiação, D expressa dominância e E é erro numérico.",
        "difficulty": "fácil"
    },
    {
        "id": 1290,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A sigla 'NGS' revolucionou a medicina de precisão. O que ela significa em português?",
        "options": {
            "A": "Normas Globais de Segurança com otimização de protocolos.",
            "B": "Normalização Gênica Sistemática com influência na estabilidade.",
            "C": "Nova Genética Sintética monitorada na fase pré-analítica básica.",
            "D": "Sequenciamento de Nova Geração (Next-Generation Sequencing).",
            "E": "Núcleo de Gestão de Sangue com uso de controles internos de validação."
        },
        "correct": "D",
        "explanation": "A correta é a D pois traduz o termo Next-Generation Sequencing. As outras falham pois: A foca segurança, B estabilidade, C pré-analítica e E gestão.",
        "difficulty": "fácil"
    },
    {
        "id": 1291,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "No protocolo básico de extração de DNA de sangue, qual é a função essencial do 'Tampão de Lise' inicial?",
        "options": {
            "A": "Adição de adaptadores Illumina monitorada na fase pré-analítica.",
            "B": "Aquecimento da amostra a 100ºC com limitação de reprodutibilidade.",
            "C": "Precipitação do DNA com sensibilidade a variações de pH do tampão.",
            "D": "Rompimento de membranas para liberar ácidos nucleicos das células.",
            "E": "Coloração do DNA para visualização e preservação da amostra original."
        },
        "correct": "D",
        "explanation": "A correta é a D pois o tampão rompe membranas biológicas. As outras falham pois: A usa adaptadores, B desnatura proteínas, C precipita DNA e E colore material.",
        "difficulty": "fácil"
    },
    {
        "id": 1292,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Durante uma extração clássica de DNA (ex: purificação em coluna ou manual), o uso de isopropanol ou etanol gelado no passo final tem qual finalidade?",
        "options": {
            "A": "Precipitação do DNA em álcool para formação de pellet visível.",
            "B": "Dissolução do DNA para otimização do protocolo em condições ideais.",
            "C": "Desinfecção bacteriana do tubo com uso de controles internos.",
            "D": "Aumento do pH da amostra via métodos ortogonais de bancada.",
            "E": "Sequenciamento instantâneo do DNA com adequação de segurança."
        },
        "correct": "A",
        "explanation": "A correta é a A pois o álcool torna o DNA insolúvel. As outras falham pois: B dissolve DNA, C desinfeta tubos, D altera pH e E sequencia bases.",
        "difficulty": "fácil"
    },
    {
        "id": 1293,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Qual é o nome da máquina básica de laboratório usada para separar o sangue total em partes (plasma, leucócitos, hemácias) pela força da gravidade acelerada?",
        "options": {
            "A": "Incubadora.",
            "B": "Espectrofotômetro.",
            "C": "Microscópio.",
            "D": "Centrífuga.",
            "E": "Termociclador."
        },
        "correct": "D",
        "explanation": "A correta é a D pois a centrífuga separa componentes por densidade. As outras falham pois: A aquece, B mede luz, C amplia imagem e E realiza PCR.",
        "difficulty": "fácil"
    },
    {
        "id": 1294,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A camada do sangue periférico centrifugado que contém a massa branca de leucócitos (glóbulos brancos), que é o alvo de interesse para se extrair o DNA humano, chama-se:",
        "options": {
            "A": "Eritrócitos de fundo.",
            "B": "Soro humano.",
            "C": "Plaquetograma.",
            "D": "Coágulo puro.",
            "E": "Buffy Coat."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o Buffy Coat concentra leucócitos nucleados. As outras falham pois: A são anucleadas, B é líquido acelular, C é teste e D é fibrina.",
        "difficulty": "fácil"
    },
    {
        "id": 1295,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Na rotina laboratorial de controle de qualidade, o equipamento 'NanoDrop' (espectrofotômetro) é utilizado primordialmente para verificar:",
        "options": {
            "A": "Identificação de fluidos biológicos com sensibilidade ao pH.",
            "B": "Contagem bacteriana exata para estabilidade de amostras in vitro.",
            "C": "Medição do tamanho cromossômico via fotometria em fluxo de trabalho.",
            "D": "Identificação da marca do fabricante do tubo plástico utilizado.",
            "E": "Medição da concentração e pureza de ácidos nucleicos a 260 nm."
        },
        "correct": "E",
        "explanation": "A correta é a E pois quantifica e avalia pureza de ácidos nucleicos. As outras falham pois: A identifica fluidos, B conta bactérias, C mede cromossomos e D checa insumos.",
        "difficulty": "fácil"
    },
    {
        "id": 1296,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Para que um DNA seja considerado de boa pureza clínica para análises, livre de forte contaminação por proteínas, o visor do espectrofotômetro na razão A260/280 deve mostrar um valor próximo a:",
        "options": {
            "A": "10.0.",
            "B": "1.0.",
            "C": "1.8.",
            "D": "3.5.",
            "E": "0.5."
        },
        "correct": "C",
        "explanation": "A correta é a C pois 1.8 é a razão ideal de absorvância para DNA puro. As outras falham pois: A é um valor irrealista, B indica contaminação por proteínas, D é excessivamente alto e E indica forte contaminação.",
        "difficulty": "médio"
    },
    {
        "id": 1297,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A eletroforese em gel de agarose é uma técnica básica e clássica no laboratório que permite:",
        "options": {
            "A": "Leitura da sequência de bases nitrogenadas sob estresse técnico.",
            "B": "Lise de membranas celulares em amostras severamente degradadas.",
            "C": "Separação de fragmentos de DNA por tamanho em campo elétrico.",
            "D": "Congelamento de amostras a -80ºC com validação de controle interno.",
            "E": "Duplicação do DNA durante o tempo de manipulação no laboratório."
        },
        "correct": "C",
        "explanation": "A correta é a C pois a técnica separa moléculas por peso molecular via eletricidade. As outras falham pois: A refere-se a sequenciamento, B é etapa de extração, D é armazenamento e E é função da PCR.",
        "difficulty": "fácil"
    },
    {
        "id": 1298,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O que a sigla PCR significa e qual é o seu objetivo básico no laboratório?",
        "options": {
            "A": "Reação em Cadeia da Polimerase para amplificação de DNA específico.",
            "B": "Polimerização de RNA para criação de tecidos em cenários controlados.",
            "C": "Medição de Proteína C-Reativa com validação de métodos ortogonais.",
            "D": "Preparação Cirúrgica em Resina com uso de controles internos.",
            "E": "Rastreamento de partículas centrais com otimização de protocolo."
        },
        "correct": "A",
        "explanation": "A correta é a A porque define a técnica de amplificação in vitro de DNA. As outras falham pois: B foca em RNA, C é marcador inflamatório proteico, D é termo cirúrgico e E é descrição genérica.",
        "difficulty": "fácil"
    },
    {
        "id": 1299,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "As três etapas fundamentais de um ciclo térmico da reação de PCR são, na ordem correta de temperaturas (Quente -> Morna -> Intermediária):",
        "options": {
            "A": "Anelamento, Extensão e Desnaturação em cenários controlados.",
            "B": "Sequenciamento, Leitura e Emissão de Laudo técnico validado.",
            "C": "Lise, Decantação e Visualização com uso de controles internos.",
            "D": "Tradução, Transcrição e Duplicação com adequação de segurança.",
            "E": "Desnaturação, Anelamento e Extensão da nova fita de DNA."
        },
        "correct": "E",
        "explanation": "A correta é a E seguindo o ciclo térmico termodinamicamente necessário para amplificação. As outras falham pois: A inverte a ordem, B são processos pós-analíticos, C são etapas de extração e D são processos celulares.",
        "difficulty": "fácil"
    },
    {
        "id": 1300,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Em uma reação de PCR, o que são os famosos 'Primers' (ou Iniciadores)?",
        "options": {
            "A": "Fragmentos de DNA que iniciam a síntese pela polimerase.",
            "B": "Proteínas que realizam a quebra do DNA na fase pré-analítica.",
            "C": "Sais químicos estabilizadores para monitoramento de fator técnico.",
            "D": "Corantes fluorescentes para captura de imagens em calibração.",
            "E": "Componentes plásticos do tubo com validação de procedimento."
        },
        "correct": "A",
        "explanation": "A correta é a A pois primers delimitam e iniciam a síntese da polimerase. As outras falham pois: B descreve nucleases, C são aditivos químicos, D são marcadores ópticos e E refere-se ao consumível.",
        "difficulty": "fácil"
    },
    {
        "id": 1301,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O concept primário de 'Preparo de Biblioteca' no mundo do Sequenciamento NGS consiste em:",
        "options": {
            "A": "Organização de pastas digitais com adequação de segurança.",
            "B": "Pesagem de DNA para preservação de amostra e adequação de padrões.",
            "C": "Fragmentação do DNA e adição de adaptadores para leitura no NGS.",
            "D": "Arquivamento de prontuários médicos em clínicas de genética.",
            "E": "Higienização de bancadas laboratoriais e manipulação de fluxos."
        },
        "correct": "C",
        "explanation": "A correta é a C pois bibliotecas NGS exigem fragmentos adaptados para a flowcell. As outras falham pois: A é gestão digital, B é quantificação, D é arquivamento e E é limpeza de bancada.",
        "difficulty": "fácil"
    },
    {
        "id": 1302,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O que são 'Barcodes' (ou Índices) usados durante o preparo de biblioteca de NGS?",
        "options": {
            "A": "Regiões de DNA aleatórias e instáveis em variações de pH do tampão.",
            "B": "Etiquetas de DNA que identificam amostras misturadas no sequenciamento.",
            "C": "Códigos numéricos de custo operacional fixados nos tubos de ensaio.",
            "D": "Marcadores de validade química validados por métodos de bancada.",
            "E": "Protocolos de acesso à rede local usados na rotina laboratorial."
        },
        "correct": "B",
        "explanation": "A correta é a B pois barcoding permite o multiplexing de múltiplas amostras simultâneas. As outras falham pois: A descreve instabilidade, C refere-se a custos, D trata de validade e E é protocolo de TI.",
        "difficulty": "médio"
    },
    {
        "id": 1303,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Por qual motivo o DNA genômico humano não pode ser jogado inteiro e intacto dentro de um sequenciador NGS Illumina?",
        "options": {
            "A": "O sistema lê apenas fragmentos curtos, exigindo quebra prévia do DNA.",
            "B": "O sequenciador processa cromossomos inteiros sem necessidade de corte.",
            "C": "O DNA humano íntegro causa danos físicos imediatos aos sensores.",
            "D": "A molécula perde fluorescência se mantida em estrutura original.",
            "E": "O genoma é composto por proteínas que impedem a reação de síntese."
        },
        "correct": "A",
        "explanation": "A correta é a A porque a tecnologia Illumina baseia-se em leituras de fragmentos curtos. As outras falham pois: B descreve 'Long Reads', C é dano físico improvável, D é erro fotoquímico e E erra a composição molecular.",
        "difficulty": "fácil"
    },
    {
        "id": 1304,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Qual é a diferença básica de foco entre um Sequenciamento de Genoma Inteiro (WGS) e um Sequenciamento de Exoma (WES)?",
        "options": {
            "A": "O Exoma mapeia apenas tumores benignos.",
            "B": "O WGS sequencia todas as letras.",
            "C": "Não há diferença biológica, é apenas marca comercial.",
            "D": "O WGS é para humanos, o Exoma é para bactérias.",
            "E": "O Exoma sequencia os RNA apenas, e o WGS o DNA."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o WGS abrange regiões codificantes e não codificantes. As outras falham pois: A limita patologias, C ignora diferenças técnicas, D erra o organismo e E inverte as moléculas.",
        "difficulty": "fácil"
    },
    {
        "id": 1305,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Onde ocorre fisicamente a queima química, a emissão de luz e a fotografia dos bilhões de fragmentos de DNA num sistema Illumina?",
        "options": {
            "A": "Em tubos de ensaio plásticos com sensibilidade a variações de pH.",
            "B": "Diretamente na amostra bruta coletada para validação ortogonal.",
            "C": "Na Flow Cell, lâmina de vidro com canais para fixação das amostras.",
            "D": "No monitor do computador através de calibração rigorosa de métodos.",
            "E": "Na gaveta térmica do equipamento para otimização de protocolos."
        },
        "correct": "C",
        "explanation": "A correta é a C pois a Flow Cell é o suporte físico da reação NGS. As outras falham pois: A são tubos, B é amostra bruta, D é saída de dados e E é parte térmica.",
        "difficulty": "fácil"
    },
    {
        "id": 1306,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O termo 'Multiplexação' (Pooling) no dia a dia da genômica significa:",
        "options": {
            "A": "Uso simultâneo de múltiplos sequenciadores em amostras degradadas.",
            "B": "Separação física de tecidos sadios e tumorais para fins de laudo.",
            "C": "Mistura de amostras indexadas em um único tubo para sequenciamento.",
            "D": "Multiplicação das horas de análise técnica em rotinas de bancada.",
            "E": "Exclusão de dados duplicados durante a fase pré-analítica do fluxo."
        },
        "correct": "C",
        "explanation": "A correta é a C pois a multiplexação consiste em misturar amostras identificadas por índices no mesmo sequenciamento. As outras falham pois: A refere-se a hardware, B separa tecidos, D foca em horas técnicas e E remove duplicatas de bioinformática.",
        "difficulty": "fácil"
    },
    {
        "id": 1307,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Durante a espectrofotometria laboratorial, o que o equipamento faz quando pede para que o técnico insira a amostra em 'Branco' (Blank) antes de analisar os tubos?",
        "options": {
            "A": "Injeção de gases na câmara para controle de eficiência analítica.",
            "B": "Uso de sangue total para validação de protocolos em larga escala.",
            "C": "Inserção do tubo vazio para calibração de segurança da reação.",
            "D": "Leitura do solvente puro para descontar o ruído de fundo do teste.",
            "E": "Desligamento do visor para proteção dos padrões de segurança."
        },
        "correct": "D",
        "explanation": "A correta é a D porque o branco permite descontar a absorbância do solvente na leitura final. As outras falham pois: A utiliza gases, B usa sangue total, C sugere tubo vazio sem solvente e E desliga o visor do aparelho.",
        "difficulty": "fácil"
    },
    {
        "id": 1308,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Por qual razão básica de segurança de reação toda a água purificada usada para fechar kits e diluir primers de genômica DEVE ser categoricamente identificada como 'Nuclease-Free'?",
        "options": {
            "A": "Evitar umidade excessiva em amostras severamente degradadas.",
            "B": "Manter o equilíbrio osmótico para consumo celular em controles.",
            "C": "Garantir a transparência óptica exigida em métodos ortogonais.",
            "D": "Prevenir a degradação do DNA por enzimas DNases e RNases ativas.",
            "E": "Aumentar a densidade do tampão em processos de preservação."
        },
        "correct": "D",
        "explanation": "A correta é a D porque as nucleases são enzimas que degradam o DNA e RNA da amostra. As outras falham pois: A foca umidade, B trata de osmolaridade, C foca transparência óptica e E refere-se à densidade do tampão.",
        "difficulty": "fácil"
    },
    {
        "id": 1309,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "Na pesquisa com genoma humano (tipo Genomas SUS), a importância vital do Termo de Consentimento Livre e Esclarecido (TCLE) assinado pelo indivíduo na triagem serve fundamentalmente para:",
        "options": {
            "A": "Declarar óbito antecipado para fins previdenciários no sistema SUS.",
            "B": "Garantir a autonomia e esclarecimento do paciente sobre os testes.",
            "C": "Autorizar a comercialização de dados genéticos em leilões abertos.",
            "D": "Coletar contatos para armazenamento em bancos governamentais.",
            "E": "Proteger o laboratório contra falhas logísticas e atrasos de rotina."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o TCLE assegura que o paciente compreenda e aceite participar da pesquisa. As outras falham pois: A declara óbito, C autoriza comércio de dados, D visa apenas contatos e E protege logística laboratorial.",
        "difficulty": "fácil"
    },
    {
        "id": 1310,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O indicator de cobertura vertical ou depth (ex: 100x, 30x, 500x) aponta especificamente sobre uma amostra sequenciada com sucesso em painéis laboratoriais médicos?",
        "options": {
            "A": "Quantidade de máquinas ligadas para estabilidade in vitro.",
            "B": "Número de vezes que cada base do genoma foi lida pelo sistema.",
            "C": "Nível de contaminação por amplicons na fase pré-analítica.",
            "D": "Temperatura atingida pelo termociclador na etapa de extensão.",
            "E": "Volume total de bases brutas geradas em condições de controle."
        },
        "correct": "B",
        "explanation": "A correta é a B pois depth representa o número de vezes que cada base foi sequenciada. As outras falham pois: A conta máquinas, C mede contaminação, D monitora temperatura e E indica o volume total de bases.",
        "difficulty": "fácil"
    },
    {
        "id": 1311,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Em um laboratório certificado de NGS, o que é conceitualmente caracterizado em definição como um POP (Procedimento Operacional Padrão)?",
        "options": {
            "A": "Relatório fotográfico para publicação em periódicos científicos.",
            "B": "Tributo obrigatório para monitoramento de amostras degradadas.",
            "C": "Documento com instruções passo a passo para padronizar rotinas.",
            "D": "Vestimenta obrigatória para gestores médicos em ambiente técnico.",
            "E": "Calibração de volume fixo utilizada na preservação de insumos."
        },
        "correct": "C",
        "explanation": "A correta é a C pois o POP padroniza as tarefas para garantir a reprodutibilidade dos resultados. As outras falham pois: A é relatório científico, B é tributo financeiro, D define vestimenta e E trata de calibração volumétrica.",
        "difficulty": "fácil"
    },
    {
        "id": 1312,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Por definição básica de biossegurança de resíduos e saúde, os perfurocortantes biológicos contaminados de laboratórios, a exemplo clássico de seringas expostas após o sangue com suspeitas virais, devem ser descartados ativamente em:",
        "options": {
            "A": "Sacolas de lixo comuns para reciclagem em coletas municipais.",
            "B": "Caixas plásticas maleáveis usadas em cenários de controle.",
            "C": "Lixeiras de resíduos biológicos em corredores de visitantes.",
            "D": "Descarte em aterros radiológicos sob validação de métodos.",
            "E": "Coletores rígidos amarelos resistentes logo após o uso."
        },
        "correct": "E",
        "explanation": "A correta é a E pois recipientes rígidos amarelos são obrigatórios para evitar acidentes com agulhas e lâminas. As outras falham pois: A é lixo comum, B é plástico maleável, C são lixeiras de corredor e D é aterro radiológico.",
        "difficulty": "fácil"
    },
    {
        "id": 1313,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O que diz a Lei de Segregação Independente (2ª Lei de Mendel) nos fundamentos genéticos da herança familiar em reprodução e herança gamética dos cromossomos?",
        "options": {
            "A": "Separação independente e aleatória de alelos nos gametas.",
            "B": "União de genomas em múltiplas cópias para fixar dominância.",
            "C": "Anulação de genes recessivos paternos em amostras degradadas.",
            "D": "Herança obrigatória de fenótipos sem seleção durante a mitose.",
            "E": "Domínio genético materno exclusivo sobre variações fenotípicas."
        },
        "correct": "A",
        "explanation": "A correta é a A porque os alelos para diferentes características segregam-se de forma independente nos gametas. As outras falham pois: B foca dominância, C anula genes, D refere-se a mitose e E indica domínio materno.",
        "difficulty": "fácil"
    },
    {
        "id": 1314,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Sobre as funções da Enzima Ligase em preparos comuns na bancada das bibliotecas base de WGS no setor produtivo das plaquetas da biologia rotineira:",
        "options": {
            "A": "Emissão de laser para colorir fragmentos de bibliotecas óticas.",
            "B": "União covalente de adaptadores às extremidades do DNA.",
            "C": "Degradação térmica de moléculas de RNA em tampões de pH.",
            "D": "Clivagem enzimática de cadeias duplas em protocolos de teste.",
            "E": "Precipitação de sais para otimização de resultados entre lotes."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a ligase catalisa a união covalente entre as extremidades de DNA e adaptadores. As outras falham pois: A emite laser, C degrada RNA, D cliva cadeias e E precipita sais de solução.",
        "difficulty": "fácil"
    },
    {
        "id": 1315,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "Sobre Sigilo na Genética Médica e pesquisas clínicas NGS sob a LGPD: O diagnóstico achado num familiar com altíssimo impacto ou herança mutacional severa oncológica e transmissível para os demais membros parentais deve obrigar de imediato pela BPL o próprio laboratório operador executivo SUS à:",
        "options": {
            "A": "Exclusão de registros em bancos médicos.",
            "B": "Divulgação pública para transparência.",
            "C": "Sigilo estrito; familiares sob autorização.",
            "D": "Contato direto e imediato com parentes.",
            "E": "Convocação da comunidade para triagem."
        },
        "correct": "C",
        "explanation": "A correta é a C pois a ética e a LGPD exigem sigilo, dependendo da autorização do paciente para informar familiares. As outras falham pois: A exclui registros, B divulga dados publicamente, D viola privacidade e E convoca a comunidade.",
        "difficulty": "médio"
    },
    {
        "id": 1316,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O que a clássica e fundamental etapa enzimática do termociclador 'End Repair' resolve na construção universal da biblioteca padrão NGS no tubo antes das colagens dos ligantes? (Preparos WGS Convencionais sem tagmentação):",
        "options": {
            "A": "Correção de falhas em softwares de bioinformática e dados.",
            "B": "Proteção de amostras contra enzimas em fluxos manuais.",
            "C": "Remoção de nucleotídeos defeituosos em tecidos tumorais.",
            "D": "Uniformização das extremidades do DNA em pontas cegas.",
            "E": "Eliminação de contaminação viral por polimerização seletiva."
        },
        "correct": "D",
        "explanation": "A correta é a D pois o End Repair uniformiza as extremidades clivadas em pontas cegas para permitir a posterior ligação de adaptadores. As outras falham pois: A refere-se a software, B trata de proteção manual, C foca em tecidos tumorais e E envolve contaminação viral.",
        "difficulty": "médio"
    },
    {
        "id": 1317,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O que acontece na placa térmica durante as etapas da rotina 'Denaturation' (Desnaturação à base de alto calor por ~95º C a 98ºC) na técnica basal global PCR em biologia NGS ou básica?",
        "options": {
            "A": "Ativação de antibióticos em condições de controle estrito.",
            "B": "Fusão de polímeros de bases para preservação de amostras.",
            "C": "Destruição de membranas celulares em extrações iniciais.",
            "D": "Filtração de resíduos por precipitação salina inerte.",
            "E": "Rompimento de pontes de hidrogênio para separar as fitas."
        },
        "correct": "E",
        "explanation": "A correta é a E porque o calor rompe as pontes de hidrogênio separando as fitas para o acesso dos primers. As outras falham pois: A ativa antibióticos, B funde polímeros para preservação, C destrói membranas e D precipita sais.",
        "difficulty": "médio"
    },
    {
        "id": 1318,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Uma coleta mal acondicionada causou intensa Hemólise vermelha agressiva nos tubos de vacutainer EDTA recebidos no guichê analítico. Qual erro fatal impacta o extraído dessa falha primária BPL na amostra pré analítica e de qual forma atua a destruição invisível e biológica química?",
        "options": {
            "A": "Clivagem de genes em exomas totais.",
            "B": "Inibição da Taq pela hemoglobina livre.",
            "C": "Mutações artificiais em eritrócitos.",
            "D": "Falta de precipitação salina na amostra.",
            "E": "Alteração visual sem prejuízo à reação."
        },
        "correct": "B",
        "explanation": "A correta é a B porque a hemoglobina liberada na hemólise atua como um potente inibidor enzimático da Taq polimerase. As outras falham pois: A não causa clivagem gênica, C não gera mutações, D não afeta precipitação e E ignora o prejuízo técnico.",
        "difficulty": "fácil"
    },
    {
        "id": 1319,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Para finalidades de estocagem de décadas visando preservação suprema molecular dos 'Ácidos Nucleicos Genômicos Extraídos' no biobanco federal, onde e de qual maneira estrita do BPL biológico o laboratório depositará as amostras?",
        "options": {
            "A": "Armários climatizados a 10 graus.",
            "B": "Geladeiras domésticas em torno de 4C.",
            "C": "Incubação em banho-maria inativador.",
            "D": "Ultra-freezers ou nitrogênio a -80C.",
            "E": "Frascos escuros em temperatura ambiente."
        },
        "correct": "D",
        "explanation": "A correta é a D porque temperaturas de -80C ou nitrogênio líquido paralisam a degradação enzimática por décadas. As outras falham pois: A é muito quente, B causa degradação lenta, C inativa por calor e E degrada ácidos rapidamente.",
        "difficulty": "médio"
    },
    {
        "id": 1320,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "No laboratório, os EPIs (Equipamentos de Proteção Individual) formam a barreira primária de segurança para o trabalhador. Qual das opções abaixo NÃO é classificada como um EPI?",
        "options": {
            "A": "Óculos de proteção e  permitindo a otimização do protocolo em condições controladas.",
            "B": "Cabine de Segurança Biológica (Fluxo Laminar).",
            "C": "Máscara respiratória PFF2/N95 e  sendo um procedimento que depende de validação adicional.",
            "D": "Jaleco de algodão com mangas longas.",
            "E": "Luvas de procedimento de nitrila."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a Cabine de Segurança Biológica é um Equipamento de Proteção Coletiva (EPC), não individual. As outras falham pois: A protege olhos, C protege vias aéreas, D protege o corpo e E protege as mãos.",
        "difficulty": "fácil"
    },
    {
        "id": 1321,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Qual é o procedimento de biossegurança MAIS simples, barato e eficaz para prevenir a transmissão de infecções e contaminação cruzada no ambiente laboratorial e hospitalar?",
        "options": {
            "A": "Esterilização do ar ambiente com radiação ultravioleta.",
            "B": "Higienização frequente das mãos com sabão ou álcool 70%.",
            "C": "Troca sistemática de jalecos a cada intervalo de turno.",
            "D": "Uso profilático de antibióticos por toda a equipe técnica.",
            "E": "Isolamento respiratório de todos os pacientes da unidade."
        },
        "correct": "B",
        "explanation": "A correta é a B porque a higienização das mãos é a medida preventiva mais barata e eficaz reconhecida mundialmente. As outras falham pois: A é caro, C é secundário, D causa resistência bacteriana e E é específico para isolamento.",
        "difficulty": "fácil"
    },
    {
        "id": 1322,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Ao realizar uma coleta de sangue para extração de DNA, a agulha utilizada (material perfurocortante contaminado) deve ser descartada IMEDIATAMENTE em:",
        "options": {
            "A": "Descarte em sacos de lixo comum para eficiência logística.",
            "B": "Armazenamento em frascos de vidro para esterilização.",
            "C": "Depósito em galões destinados a resíduos químicos.",
            "D": "Descarte em sacos brancos leitosos para infectantes.",
            "E": "Depósito em coletores rígidos amarelos resistentes."
        },
        "correct": "E",
        "explanation": "A correta é a E pois materiais perfurocortantes exigem coletores rígidos amarelos para evitar acidentes e furos. As outras falham pois: A lixo comum é perigoso, B vidro quebra, C são para resíduos químicos e D são para resíduos infectantes moles.",
        "difficulty": "fácil"
    },
    {
        "id": 1323,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "A regra de ouro da pipetagem em laboratórios de biologia molecular proíbe estritamente uma prática antiga por risco letal e de contaminação. Qual é essa prática?",
        "options": {
            "A": "Segurar o tubo na altura dos olhos.",
            "B": "Usar ponteiras com filtro de barreira.",
            "C": "Pipetar soluções usando a boca (pipetagem oral).",
            "D": "Trocar de ponteira entre as amostras.",
            "E": "Usar pipetas de 10 microlitros,  requerendo adequação aos padrões de segurança vigentes."
        },
        "correct": "C",
        "explanation": "A correta é a C porque a pipetagem oral oferece risco altíssimo de ingestão de substâncias tóxicas ou patógenos. As outras falham pois: A é técnica de visualização, B previne contaminação, D é norma básica e E é volume comum.",
        "difficulty": "fácil"
    },
    {
        "id": 1324,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "O símbolo internacional de Risco Biológico (três círculos sobrepostos sobre um círculo central) deve estar estampado obrigatoriamente na cor preta sobre fundo:",
        "options": {
            "A": "Amarelo ou Branco Leitoso.",
            "B": "Azul escuro.",
            "C": "Verde limão.",
            "D": "Vermelho fluorescente.",
            "E": "Preto o que resulta em  o que requer calibração rigorosa dos métodos utilizados."
        },
        "correct": "A",
        "explanation": "A correta é a A pois as normas exigem fundo branco leitoso ou amarelo para destacar o símbolo de risco. As outras falham pois: B, C, D e E utilizam cores não padronizadas para identificação de risco biológico internacional.",
        "difficulty": "fácil"
    },
    {
        "id": 1325,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "O conceito básico de POP (Procedimento Operacional Padrão) refere-se a:",
        "options": {
            "A": "Crachá de identificação para monitoramento pré-analítico.",
            "B": "Equipamento utilizado para separação de fases biológicas.",
            "C": "Exame de auditoria externa para validação de amostras.",
            "D": "Tipo específico de tubo de coleta para ácidos nucleicos.",
            "E": "Guia detalhado de execução para padronização de tarefas."
        },
        "correct": "E",
        "explanation": "A correta é a E porque o POP é o guia que garante que qualquer técnico execute a tarefa de forma idêntica. As outras falham pois: A é crachá, B é equipamento, C é auditoria e D é tipo de tubo.",
        "difficulty": "fácil"
    },
    {
        "id": 1326,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "No contexto laboratorial, a água destilada comum NÃO é apropriada para preparar reagentes de PCR. O tipo de água exigida na biologia molecular básica é:",
        "options": {
            "A": "Água da rede pública filtrada por sistemas de carvão.",
            "B": "Água Ultrapura (Tipo I) livre de íons e nucleases.",
            "C": "Água salobra esterilizada para preservação da reação.",
            "D": "Solução de água oxigenada para limpeza de bancadas.",
            "E": "Água mineral engarrafada para redução de custos."
        },
        "correct": "B",
        "explanation": "A correta é a B porque PCR exige água isenta de íons e enzimas que degradam a amostra. As outras falham pois: A possui cloro e impurezas, C interfere no tampão enzimático, D degrada o material genético e E contém minerais inibidores.",
        "difficulty": "fácil"
    },
    {
        "id": 1327,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Por que as Boas Práticas de Laboratório (BPL) proíbem que o técnico use jaleco e luvas na copa do refeitório ou em áreas administrativas?",
        "options": {
            "A": "Economia de insumos em cenários laboratoriais externos.",
            "B": "Manutenção do padrão estético exigido pela administração.",
            "C": "Proteção térmica contra ventilação em áreas de convívio.",
            "D": "Prevenção de patógenos e químicos para áreas limpas.",
            "E": "Evitar danos ao mobiliário causados por reagentes."
        },
        "correct": "D",
        "explanation": "A correta é a D porque evita a dispersão de resíduos químicos ou biológicos para ambientes externos. As outras falham pois: A visa segurança e não economia, B prioriza proteção e não estética, C jaleco não é isolante térmico e E foca em proteção humana.",
        "difficulty": "fácil"
    },
    {
        "id": 1328,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "A Autoclave é o equipamento básico mais utilizado para esterilização no laboratório. Seu mecanismo letal para micro-organismos baseia-se em:",
        "options": {
            "A": "Emissão de gás ozônio validado por métodos de bancada.",
            "B": "Radiação ultravioleta para protocolos de superfície.",
            "C": "Congelamento extremo para redução da atividade viral.",
            "D": "Desidratação por vácuo para estabilidade in vitro.",
            "E": "Calor úmido sob pressão para desnaturação proteica."
        },
        "correct": "E",
        "explanation": "A correta é a E porque o vapor sob alta pressão desnatura as proteínas microbianas eficazmente. As outras falham pois: A utiliza gases oxidantes, B usa radiação eletromagnética, C conserva microrganismos pelo frio e D apenas remove umidade sem esterilizar.",
        "difficulty": "fácil"
    },
    {
        "id": 1329,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Um laboratório realiza um teste genético. A inclusão de um 'Controle Positivo' na placa serve para garantir que:",
        "options": {
            "A": "Garantir ausência de vírus na amostra do paciente.",
            "B": "Validar que o teste detecta o alvo, evitando falhas.",
            "C": "Verificar a coloração dos reagentes na pipetagem.",
            "D": "Assegurar que não houve contaminação por DNA externo.",
            "E": "Confirmar que a centrifugação seguiu o tempo previsto."
        },
        "correct": "B",
        "explanation": "A correta é a B porque valida o funcionamento do ensaio e evita resultados falso-negativos. As outras falham pois: A é função do controle negativo, C inspeção visual não valida sensibilidade, D controle negativo detecta contaminação e E refere-se a monitoramento mecânico.",
        "difficulty": "fácil"
    },
    {
        "id": 1330,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Para armazenar enzimas de biologia molecular (como a Taq Polimerase), qual é a temperatura padrão utilizada nos freezers de bancada laboratorial?",
        "options": {
            "A": "Geladeira comum (2°C a 8°C).",
            "B": "Nitrogênio líquido (-196°C).",
            "C": "Temperatura ambiente (25°C).",
            "D": "Freezer comum (-20°C).",
            "E": "Estufa a 37°C."
        },
        "correct": "D",
        "explanation": "A correta é a D porque preserva a estabilidade das enzimas sem congelamento total em glicerol. As outras falham pois: A degrada proteínas rapidamente, B é desnecessário para estocagem rotineira, C desnatura a polimerase em horas e E é temperatura de reação.",
        "difficulty": "fácil"
    },
    {
        "id": 1331,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Qual é a finalidade principal do chuveiro de emergência e do lava-olhos instalados nos corredores dos laboratórios?",
        "options": {
            "A": "Fornecimento de água para consumo e bebidas quentes.",
            "B": "Higienização corporal completa ao final da jornada.",
            "C": "Limpeza de vidrarias em procedimentos secundários.",
            "D": "Controle dos níveis de umidade do ar em salas de NGS.",
            "E": "Descontaminação rápida em acidentes químicos."
        },
        "correct": "E",
        "explanation": "A correta é a E pois são equipamentos de proteção coletiva essenciais para primeiros socorros químicos. As outras falham pois: A água é imprópria para consumo, B higiene pessoal usa chuveiros comuns, C pias lavam vidrarias e D não controlam climatização.",
        "difficulty": "fácil"
    },
    {
        "id": 1332,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Ao final do dia, a bancada de trabalho onde se manipulou sangue deve ser descontaminada com um agente químico. O desinfetante básico, barato e universalmente eficaz recomendado para sangue é:",
        "options": {
            "A": "Água mineral além disso,  requerendo adequação aos padrões de segurança vigentes.",
            "B": "Soro fisiológico 0,9% e  um fator técnico que deve ser monitorado na fase pré-analítica.",
            "C": "Acetona o que resulta em  o que demanda validação com métodos ortogonais de bancada.",
            "D": "Solução de hipoclorito de sódio (água sanitária) a 1% de cloro ativo.",
            "E": "Óleo mineral e  requerendo adequação aos padrões de segurança vigentes."
        },
        "correct": "D",
        "explanation": "A correta é a D porque o hipoclorito é um oxidante potente contra patógenos de transmissão sanguínea. As outras falham pois: A não possui ação germicida, B mantém viabilidade celular, C é solvente inflamável sem desinfecção e E não neutraliza agentes biológicos.",
        "difficulty": "fácil"
    },
    {
        "id": 1333,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "O termo 'Calibração' aplicado a uma micropipeta significa:",
        "options": {
            "A": "Guardar o equipamento para preservação secundária da amostra biológica.",
            "B": "Lavar o material para garantir a estabilidade do pH em testes in vitro.",
            "C": "Adquirir insumos novos seguindo padrões de segurança laboratoriais.",
            "D": "Identificar o dispositivo para monitoramento técnico na fase pré-analítica.",
            "E": "Comparar o volume aspirado com o nominal e ajustar se houver erro técnico."
        },
        "correct": "E",
        "explanation": "A correta é a E porque consiste em verificar o erro volumétrico e ajustá-lo ao padrão. As outras falham pois: A refere-se ao armazenamento, B trata-se de higienização, C é processo de aquisição e D é apenas rotulagem patrimonial.",
        "difficulty": "fácil"
    },
    {
        "id": 1334,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Sobre as classificações de Risco Biológico, o vírus Ebola é classificado como Nível 4 (NB-4). E a manipulação padrão de sangue humano desconhecido exige qual nível básico de Biossegurança?",
        "options": {
            "A": "Nenhum nível especial.",
            "B": "Nível 1 (NB-1).",
            "C": "Nível 2 (NB-2).",
            "D": "Nível 3 (NB-3).",
            "E": "Nível 4 (NB-4)."
        },
        "correct": "C",
        "explanation": "A correta é a C pois o NB-2 é o padrão para patógenos de risco moderado como sangue. As outras falham pois: A biossegurança é obrigatória, B foca em agentes não patogênicos, D exige contenção respiratória rigorosa e E é para vírus letais.",
        "difficulty": "fácil"
    },
    {
        "id": 1335,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "No controle interno do laboratório, o que significa a sigla 'LIMS'?",
        "options": {
            "A": "Local de Inspeção de Microscópios para análise de reprodutibilidade analítica.",
            "B": "Sistema de Limpeza Interna de Material validado em métodos de bancada.",
            "C": "Laboratório de Investigação Molecular para otimização de protocolos técnicos.",
            "D": "Sistema de Gestão de Informação Laboratorial para o rastreio de dados.",
            "E": "Regras de Medicina Sistemática para monitorar a estabilidade dos ensaios."
        },
        "correct": "D",
        "explanation": "A correta é a D pois LIMS é o software de gerenciamento de dados e fluxos laboratoriais. As outras falham pois: A refere-se à microscopia, B trata de limpeza, C foca em pesquisa molecular e E descreve práticas clínicas.",
        "difficulty": "fácil"
    },
    {
        "id": 1336,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Na extração de DNA, o uso da centrífuga é constante. A regra mais elementar para evitar que a centrífuga quebre ou saia pulando pela bancada é:",
        "options": {
            "A": "Operar com a tampa aberta para otimização do protocolo de extração.",
            "B": "Equilibrar massas no rotor em posições opostas com volumes idênticos.",
            "C": "Ligar o equipamento sem checar a voltagem na fase pré-analítica.",
            "D": "Concentrar todos os tubos em um único lado para validar a reação.",
            "E": "Utilizar tubos de vidro comuns sem validação interna de segurança."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o equilíbrio simétrico de massas previne vibrações destrutivas no rotor. As outras falham pois: A causa acidentes graves, C danifica componentes elétricos, D gera desbalanceamento mecânico e E provoca quebra por pressão.",
        "difficulty": "médio"
    },
    {
        "id": 1337,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "O que a sigla TCLE significa no contexto da pesquisa com seres humanos?",
        "options": {
            "A": "Termo de Consentimento Livre e Esclarecido.",
            "B": "Tratamento Clínico Leve e Experimental.",
            "C": "Técnica de Coleta Longitudinal Exata.",
            "D": "Termo de Confidencialidade Legal do Estado.",
            "E": "Teste de Controle Laboratorial Especial."
        },
        "correct": "A",
        "explanation": "A correta é a A porque o TCLE formaliza legalmente a anuência informada do participante. As outras falham pois: B inventa sigla clínica, C descreve técnica estatística, D foca em sigilo estatal e E refere-se a testes técnicos.",
        "difficulty": "fácil"
    },
    {
        "id": 1338,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Qual é o sistema nacional (órgãos) responsável por aprovar eticamente a realização de qualquer pesquisa envolvendo seres humanos no Brasil?",
        "options": {
            "A": "Conselho Regional de Medicina para análise de amostras degradadas.",
            "B": "Comitês de Ética em Pesquisa e Comissão Nacional de Ética em Pesquisa.",
            "C": "Postos do Sistema Único de Saúde para otimização de protocolos.",
            "D": "Atuação da Polícia Federal na preservação secundária da amostra.",
            "E": "Gestão do Ministério da Justiça via calibração de métodos éticos."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o sistema CEP/CONEP é a instância reguladora da ética em pesquisas no Brasil. As outras falham pois: A fiscaliza conduta médica, C é rede de saúde, D exerce função policial e E foca na gestão jurídica.",
        "difficulty": "fácil"
    },
    {
        "id": 1339,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Um estudo clínico que está sendo realizado ao mesmo tempo em hospitais de São Paulo, Belém e Rio de Janeiro, seguindo o exato mesmo protocolo de pesquisa, é classicamente chamado de:",
        "options": {
            "A": "Estudo in vitro.",
            "B": "Pesquisa básica.",
            "C": "Estudo duplo-cego reverso.",
            "D": "Estudo unicêntrico.",
            "E": "Estudo multicêntrico."
        },
        "correct": "E",
        "explanation": "A correta é a E pois estudos realizados em diversos locais sob o mesmo protocolo são multicêntricos. As outras falham pois: A ocorre fora do organismo, B busca princípios básicos, C inventa terminologia técnica e D limita-se a um local.",
        "difficulty": "fácil"
    },
    {
        "id": 1340,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Na bioética, o princípio da 'Autonomia' garante que:",
        "options": {
            "A": "Imunidade jurídica do pesquisador em procedimentos de validação.",
            "B": "Automação total do processo laboratorial em condições controladas.",
            "C": "Independência legal da pesquisa para otimização de protocolos.",
            "D": "Decisão exclusiva do médico sobre o tratamento do paciente.",
            "E": "Direito do participante de decidir sobre seu corpo e permanência."
        },
        "correct": "E",
        "explanation": "A correta é a E pois a autonomia garante ao participante o poder de autodeterminação sobre seu corpo. As outras falham pois: A sugere impunidade, B foca em máquinas, C refere-se à gestão e D ignora a vontade do paciente.",
        "difficulty": "fácil"
    },
    {
        "id": 1341,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "O princípio da 'Não-Maleficência' é o pilar mais antigo da medicina (Primum non nocere). O que ele significa na pesquisa clínica?",
        "options": {
            "A": "Proibição de métodos invasivos para reduzir tempo de manipulação.",
            "B": "Obrigação primária de não causar danos intencionais ao participante.",
            "C": "Dever de cura total em todos os casos para garantir reprodutibilidade.",
            "D": "Isenção de cobrança de honorários médicos na fase pré-analítica.",
            "E": "Garantia de publicação dos resultados em condições de pH estável."
        },
        "correct": "B",
        "explanation": "A correta é a B porque preconiza o dever fundamental de não infligir danos ou sofrimento. As outras falham pois: A limita técnicas úteis, C impõe resultado impossível, D foca em economia e E foca na divulgação.",
        "difficulty": "fácil"
    },
    {
        "id": 1342,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Si um paciente se arrepender de ter entrado em uma pesquisa genômica e quiser sair no meio do projeto, ele:",
        "options": {
            "A": "Pagamento de multa ao laboratório por desistência no cenário clínico.",
            "B": "Retirada voluntária sem penalidades ou prejuízo no atendimento.",
            "C": "Dependência de autorização judicial para manter estabilidade in vitro.",
            "D": "Devolução do material biológico coletado ao corpo do participante.",
            "E": "Permanência obrigatória após assinatura do contrato de pesquisa."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a liberdade de retirada é um direito inalienável, voluntário e sem ônus. As outras falham pois: A impõe punição financeira, C exige trâmite jurídico, D é biologicamente inviável e E configura cárcere ético.",
        "difficulty": "fácil"
    },
    {
        "id": 1343,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "O que significa 'Anonimização' de dados em um banco de dados de pesquisa em genômica?",
        "options": {
            "A": "Manutenção de documentos pessoais para monitoramento pré-analítico.",
            "B": "Publicação integral do genoma em diários oficiais para validação.",
            "C": "Uso de pseudônimos cartoriais para estabilidade das amostras.",
            "D": "Restrição de coleta de anônimos para evitar amostras degradadas.",
            "E": "Remoção irreversível de informações que identifiquem o participante."
        },
        "correct": "E",
        "explanation": "A correta é a E pois rompe definitivamente o vínculo de identificação entre o dado e o indivíduo. As outras falham pois: A guarda nomes, B expõe o paciente, C mantém rastreabilidade e D foca na logística inicial.",
        "difficulty": "fácil"
    },
    {
        "id": 1344,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "De acordo com a norma brasileira de ética (Resolução CNS 466/2012), é permitido pagar um salário ou remuneração mensal a um cidadão brasileiro apenas para ele aceitar participar de uma pesquisa médica/laboratorial?",
        "options": {
            "A": "Proibição de pagamento; permite-se apenas ressarcimento de gastos.",
            "B": "Exigência de pagamento pelo paciente para participar do estudo.",
            "C": "Pagamento de salário mensal vinculado à validação de controles.",
            "D": "Remuneração permitida apenas em instituições de saúde privadas.",
            "E": "Pagamento como padrão de emprego para garantia de calibração."
        },
        "correct": "A",
        "explanation": "A correta é a A porque a norma brasileira veda a comercialização da participação ou mercantilização do corpo. As outras falham pois: B extorque o paciente, C mercantiliza a pesquisa, D diferencia ética por lucro e E cria vínculo trabalhista.",
        "difficulty": "fácil"
    },
    {
        "id": 1345,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Se uma pesquisa de coleta de DNA focar em crianças (menores de idade), qual é o trâmite documental ético exigido?",
        "options": {
            "A": "Proibição legal de pesquisas com menores para evitar degradação.",
            "B": "Ausência de documentação por falta de registro civil do menor.",
            "C": "Permissão baseada apenas em consentimento verbal do médico.",
            "D": "Decisão exclusiva da criança via assinatura digital do protocolo.",
            "E": "Pais assinam o TCLE e a criança assina o termo de assentimento."
        },
        "correct": "E",
        "explanation": "A correta é a E pois exige autorização legal dos pais e a concordância explicada ao menor. As outras falham pois: A veda estudos necessários, B é ilegal, C carece de prova e D ignora a incapacidade civil.",
        "difficulty": "fácil"
    },
    {
        "id": 1346,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Em publicações científicas multicêntricas, o que caracteriza um 'Conflito de Interesses'?",
        "options": {
            "A": "Disputas de autoria em artigos científicos para segurança vigente.",
            "B": "Desentendimentos entre técnicos durante o monitoramento analítico.",
            "C": "Recusa do tema pela universidade em cenários de controle rígido.",
            "D": "Interesses financeiros que podem enviesar a neutralidade do estudo.",
            "E": "Conflito entre a opinião do paciente e o laudo laboratorial."
        },
        "correct": "D",
        "explanation": "A correta é a D pois laços financeiros podem comprometer a imparcialidade. As outras falham pois: A foca em autoria, B em brigas técnicas, C em burocracia universitária e E em laudos laboratoriais.",
        "difficulty": "fácil"
    },
    {
        "id": 1347,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Onde o pesquisador deve cadastrar e submeter o seu projeto de pesquisa para que ele seja lido e aprovado pelo Comitê de Ética brasileiro?",
        "options": {
            "A": "Envio de documentos impressos por via postal em cenários controlados.",
            "B": "Registro do projeto na Secretaria da Receita para validação adicional.",
            "C": "Publicação do protocolo no Diário Oficial contra degradação de dados.",
            "D": "Submissão no sistema nacional Plataforma Brasil para análise ética.",
            "E": "Registro exclusivo em órgãos municipais com controle de calibração."
        },
        "correct": "D",
        "explanation": "A correta é a D porque é o sistema oficial de submissão ética brasileiro. As outras falham pois: A é físico, B fiscal, C jurídico e E municipal.",
        "difficulty": "fácil"
    },
    {
        "id": 1348,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "A denominação 'PI' (Principal Investigator / Pesquisador Principal) no projeto multicêntrico de Bioinformática refere-se à:",
        "options": {
            "A": "Líder máximo responsável pela condução ética e científica do estudo.",
            "B": "Colaborador externo que atua na preservação química da amostra.",
            "C": "Técnico responsável pela higienização de materiais degradados.",
            "D": "Sistema de automação para calibração de volumes analíticos.",
            "E": "Primeira entidade a receber verbas para segurança dos processos."
        },
        "correct": "A",
        "explanation": "A correta é a A pois o PI lidera a responsabilidade ética e científica. As outras falham pois: B é parceiro, C faxineiro, D software e E recebedor.",
        "difficulty": "fácil"
    },
    {
        "id": 1349,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Uma pesquisa genética foi aprovada para coletar sangue na periferia da capital. Ao se tratar de Populações Vulneráveis (ex: pessoas em extrema pobreza ou sem instrução educacional formal), a ética exige que o pesquisador:",
        "options": {
            "A": "Restrição de pesquisas em zonas periféricas por riscos analíticos.",
            "B": "Uso de linguagem complexa para garantir a pureza da investigação.",
            "C": "Garantia ativa de compreensão do termo por populações vulneráveis.",
            "D": "Pagamento a lideranças locais em troca de assinaturas no protocolo.",
            "E": "Redução de exigências éticas para facilitar a validação em campo."
        },
        "correct": "C",
        "explanation": "A correta é a C pois vulneráveis exigem cuidado extra na compreensão do termo. As outras falham pois: A exclui, B confunde, D suborna e E precariza.",
        "difficulty": "fácil"
    },
    {
        "id": 1350,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Segundo a norma brasileira, após o encerramento do estudo, os benefícios conquistados com a pesquisa (ex: novo medicamento provado eficaz para a doença):",
        "options": {
            "A": "Cobrança de altos valores pelos tratamentos descobertos na pesquisa.",
            "B": "Destruição imediata dos resultados para manter o controle de lotes.",
            "C": "Envio exclusivo dos benefícios para instituições internacionais.",
            "D": "Fornecimento gratuito do tratamento aos participantes do estudo.",
            "E": "Propriedade exclusiva dos resultados pelo investigador principal."
        },
        "correct": "D",
        "explanation": "A correta é a D pois voluntários garantem acesso vitalício aos benefícios testados. As outras falham pois: A cobra, B destrói, C exporta e E privatiza.",
        "difficulty": "fácil"
    },
    {
        "id": 1351,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "O que a sigla SUS significa na estrutura do governo brasileiro?",
        "options": {
            "A": "Sistema Único de Saúde.",
            "B": "Setor de Urgências Salva-vidas.",
            "C": "Setor Único da Sociedade.",
            "D": "Serviço Unificado Social.",
            "E": "Sistema Universal de Saneamento."
        },
        "correct": "A",
        "explanation": "A correta é a A por ser o nome oficial da saúde pública brasileira. As outras falham pois: B limita, C generaliza, D confunde e E restringe.",
        "difficulty": "fácil"
    },
    {
        "id": 1352,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "O princípio da UNIVERSALIDADE no SUS significa de forma simples que:",
        "options": {
            "A": "Uniformidade de custos em tratamentos com pH sensível.",
            "B": "Acesso garantido a todos no solo brasileiro sem discriminação.",
            "C": "Atendimento restrito a redes universitárias de alta complexidade.",
            "D": "Extensão do atendimento a todos os seres do ambiente espacial.",
            "E": "Restrição de acesso a cidadãos nascidos no país com validação."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o acesso deve ser para todos sem exclusão. As outras falham pois: A foca custos, C hospitais, D espaço e E nacionalidade.",
        "difficulty": "fácil"
    },
    {
        "id": 1353,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "O princípio da EQUIDADE no Sistema Único de Saúde determina que:",
        "options": {
            "A": "Divisão de custos de equipamentos em cenários validados de bancada.",
            "B": "Distribuição idêntica de consultas para otimização de protocolos.",
            "C": "Cobrança de usuários com maior renda para calibração de métodos.",
            "D": "Prioridade e recursos maiores para quem possui maiores necessidades.",
            "E": "Equiparação salarial entre categorias profissionais da saúde."
        },
        "correct": "D",
        "explanation": "A correta é a D pois trata desigualmente os desiguais conforme a necessidade. As outras falham pois: A divide, B iguala, C cobra e E remunera.",
        "difficulty": "fácil"
    },
    {
        "id": 1354,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "Em saúde pública, o que significa o princípio da INTEGRALIDADE?",
        "options": {
            "A": "Cumprimento de carga horária integral para validação de lotes.",
            "B": "Estruturas físicas completas para evitar manipulação de amostras.",
            "C": "Oferta de cuidados desde a prevenção até a reabilitação complexa.",
            "D": "Prescrição exclusiva de dieta integral para calibração analítica.",
            "E": "Integração com o sistema educativo para otimização de resultados."
        },
        "correct": "C",
        "explanation": "A correta é a C pois abrange o cuidado completo e preventivo do indivíduo. As outras falham pois: A mede tempo, B espaço, D comida e E ensino.",
        "difficulty": "fácil"
    },
    {
        "id": 1355,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "A ciência da 'Epidemiologia' foca fundamentalmente no estudo de quê?",
        "options": {
            "A": "Estudo da frequência, causas e controle de doenças em populações.",
            "B": "Análise das condições climáticas para segurança do fluxo de trabalho.",
            "C": "Foco exclusivo em sequenciamento viral para validação de reações.",
            "D": "Produção de tecidos artificiais contra degradação de amostras.",
            "E": "Estudo de ossadas antigas em protocolos de calibração rigorosa."
        },
        "correct": "A",
        "explanation": "A correta é a A pois analisa a dinâmica das doenças em populações. As outras falham pois: B estuda clima, C sequenciamento, D tecidos e E ossos.",
        "difficulty": "fácil"
    },
    {
        "id": 1356,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "Qual é a principal diferença clássica entre INCIDÊNCIA e PREVALÊNCIA na análise de uma epidemia municipal?",
        "options": {
            "A": "Diferenciação por tempo de cura em amostras sensíveis ao pH.",
            "B": "Medição de casos novos no tempo versus total em um momento dado.",
            "C": "Comparação entre letalidade e facilidade de tratamento em campo.",
            "D": "Identidade conceitual entre os termos em validações de bancada.",
            "E": "Divisão geográfica de ocorrências com validação de prontuário."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a incidência mede novos casos em um período e a prevalência o total acumulado. As outras falham pois: A foca em cura química, C compara gravidade com tratamento, D ignora as diferenças matemáticas e E refere-se à logística de prontuários.",
        "difficulty": "fácil"
    },
    {
        "id": 1357,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "Os Determinantes Sociais da Saúde (DSS) nos explicam que uma pessoa não adoece apenas por genética. O que são os DSS?",
        "options": {
            "A": "Legislação federal sobre substâncias em cenários controlados.",
            "B": "Códigos genéticos e origens biológicas estáveis in vitro.",
            "C": "Fatores sociais, econômicos e ambientais que afetam a saúde humana.",
            "D": "Contagem celular rotineira para calibração de métodos analíticos.",
            "E": "Qualificação acadêmica de gestores para otimização de protocolos."
        },
        "correct": "C",
        "explanation": "A correta é a C porque os Determinantes Sociais são as condições externas que influenciam a saúde populacional. As outras falham pois: A trata de leis, B foca na genética, D é sobre exames laboratoriais e E refere-se à escolaridade dos gestores.",
        "difficulty": "fácil"
    },
    {
        "id": 1358,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "A vacinação e a orientação escolar (como escovar os dentes) são classificados em saúde pública como exemplos de:",
        "options": {
            "A": "Rastreio de doenças iniciais em cenários de validação controlada.",
            "B": "Intervenção cirúrgica imediata em ambientes de alta segurança.",
            "C": "Ações para evitar que a doença ocorra no indivíduo saudável.",
            "D": "Reabilitação física de pacientes com validação analítica adicional.",
            "E": "Intervenções sem base científica que exigem calibração rigorosa."
        },
        "correct": "C",
        "explanation": "A correta é a C pois evitar a ocorrência da doença caracteriza a prevenção primária clássica. As outras falham pois: A é rastreamento secundário, B é intervenção curativa, D é reabilitação terciária e E nega a evidência científica dessas ações.",
        "difficulty": "fácil"
    },
    {
        "id": 1359,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "No contexto da Vigilância em Saúde no SUS, a 'Notificação Compulsória' obriga os profissionais de saúde e os laboratórios a:",
        "options": {
            "A": "Manutenção de sigilo absoluto para evitar variações analíticas.",
            "B": "Aquisição imediata de fármacos para validação de métodos de bancada.",
            "C": "Comunicação postal ao paciente para garantir segurança vigente.",
            "D": "Envio de relatórios finais contra a degradação de amostras raras.",
            "E": "Comunicação obrigatória de doenças graves para bloqueio de surtos."
        },
        "correct": "E",
        "explanation": "A correta é a E porque a notificação permite ações rápidas do governo para conter epidemias e riscos. As outras falham pois: A impede a ação pública, B foca em compras internas, C limita-se ao paciente e D trata de conservação física.",
        "difficulty": "fácil"
    },
    {
        "id": 1360,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "O conceito de 'Descentralização' como eixo organizativo do SUS prevê:",
        "options": {
            "A": "Divisão de poder e recursos entre estados e municípios no SUS.",
            "B": "Transferência da sede administrativa para otimização de tempo.",
            "C": "Mudança na hierarquia profissional para cenários controlados.",
            "D": "Fechamento de grandes centros para controle de reprodutibilidade.",
            "E": "Segregação de doentes para estabilidade de protocolos analíticos."
        },
        "correct": "A",
        "explanation": "A correta é a A pois descentralizar significa transferir responsabilidades e recursos para estados e municípios. As outras falham pois: B é mudança física de sede, C foca em gerência interna, D fecha serviços essenciais e E propõe isolamento clínico.",
        "difficulty": "fácil"
    },
    {
        "id": 1361,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "O que significa a sigla ANVISA e qual o seu papel básico frente à saúde pública laboratorial do Brasil?",
        "options": {
            "A": "Controle de portos internacionais com validação de fluxos de carga.",
            "B": "Agência reguladora de produtos e serviços sob controle sanitário.",
            "C": "Órgão de imunização escolar com exigência de calibração interna.",
            "D": "Foco em vetores ambientais para otimização de protocolos de rede.",
            "E": "Aliança de imunização veterinária em cenários analíticos variados."
        },
        "correct": "B",
        "explanation": "A correta é a B porque a ANVISA regula e fiscaliza produtos e serviços com risco à saúde. As outras falham pois: A limita-se a portos, C é função do Ministério da Saúde, D foca em vetores e E trata de animais.",
        "difficulty": "fácil"
    },
    {
        "id": 1362,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "O fenômeno chamado 'Judicialização da Saúde' se tornou uma grande preocupação financeira no SUS brasileiro nas últimas décadas. Ele consiste no ato de:",
        "options": {
            "A": "Médicos processando hospitais por insalubridade e segurança.",
            "B": "Presos recebendo atendimento médico urgente em fóruns criminais.",
            "C": "Policiais acompanhando coletas de sangue com autorização legal.",
            "D": "Prisão de gestores de saúde em processos de corrupção pública.",
            "E": "Paciente acionando a Justiça para obter tratamento de alto custo."
        },
        "correct": "E",
        "explanation": "A correta é a E pois a judicialização ocorre quando cidadãos usam tribunais para obter medicamentos ou cirurgias. As outras falham pois: A é causa trabalhista, B é medicina forense, C é investigação policial e D trata de corrupção.",
        "difficulty": "fácil"
    },
    {
        "id": 1363,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "A sigla CONITEC atua ativamente para aprovar inovações dentro do SUS. A sigla significa Comissão Nacional de Incorporação de Tecnologias no SUS. O seu critério de decisão baseado em ATS (Avaliação de Tecnologias em Saúde) avalia, antes de permitir a compra de um teste NGS caríssimo, se ele possui fundamentalmente:",
        "options": {
            "A": "Estética do equipamento e reprodutibilidade limitada entre lotes.",
            "B": "Prazo de validade dos reagentes conforme normas reguladoras locais.",
            "C": "Interface amigável para médicos e estabilidade in vitro da amostra.",
            "D": "Segurança, eficácia clínica e impacto orçamentário no sistema SUS.",
            "E": "Marca internacional exclusiva com eficiência analítica variável."
        },
        "correct": "D",
        "explanation": "A correta é a D porque a CONITEC avalia se a tecnologia é segura, eficaz e cabe no orçamento. As outras falham pois: A foca em estética, B trata de validade comercial, C prioriza usabilidade e E foca em marcas estrangeiras.",
        "difficulty": "médio"
    },
    {
        "id": 1364,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "Segundo as Diretrizes Curriculares e operacionais de saúde humana, 'Vigilância em Saúde' é um grande guarda-chuva integrativo estatal que reune ativamente o campo das 4 ações principais:",
        "options": {
            "A": "Radiologia, genética e enfermagem.",
            "B": "Epidemiológica, sanitária e ambiental.",
            "C": "Cardiologia, pediatria e ortopedia.",
            "D": "Farmácia, logística e contabilidade.",
            "E": "Medicina esportiva e fonoaudiologia."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a Vigilância em Saúde engloba as áreas epidemiológica, sanitária, ambiental e do trabalhador. As outras falham pois: A foca em especialidades técnicas, C lista especialidades clínicas, D foca em suporte administrativo e E cita áreas reabilitativas.",
        "difficulty": "fácil"
    },
    {
        "id": 1365,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "O que o famoso manual e acrônimo 'GCP' (Good Clinical Practice) / Boas Práticas Clínicas impõe mandatoriamente na condução de um ensaio de saúde governamental genômica que lida e toca intimamente em vidas reais humanas?",
        "options": {
            "A": "Garantir pagamento em dólar para voluntários do ensaio clínico.",
            "B": "Exigir publicações em revistas gratuitas e estabilidade in vitro.",
            "C": "Assegurar padrões éticos, direitos humanos e qualidade dos dados.",
            "D": "Padronizar a cor dos equipamentos e seguir normas de segurança.",
            "E": "Permitir que apenas o analista decida sobre os dados gerados."
        },
        "correct": "C",
        "explanation": "A correta é a C porque o GCP estabelece normas éticas e de qualidade para pesquisas com humanos. As outras falham pois: A foca em pagamento monetário, B trata de publicação aberta, D foca em design industrial e E dá poder absoluto ao técnico.",
        "difficulty": "fácil"
    },
    {
        "id": 1366,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "Diferencie sucintamente Epidemia de Endemia nos conceitos da epidemiologia e saúde coletiva territorial na vigilância da federação unificada base SUS do governo local da base central do IBGE:",
        "options": {
            "A": "Epidemia em animais urbanos; Endemia em humanos de áreas rurais.",
            "B": "Epidemia exige vacinas frias; Endemia requer apenas soro caseiro.",
            "C": "Epidemia é aumento súbito; Endemia é presença habitual constante.",
            "D": "Epidemia é surto explosivo; Endemia é ocorrência típica da região.",
            "E": "Termos idênticos que variam conforme o idioma técnico utilizado."
        },
        "correct": "C",
        "explanation": "A correta é a C pois define Epidemia como aumento inesperado e Endemia como presença constante. As outras falham pois: A limita-se a nichos rurais/urbanos, B foca em insumos, D confunde surto com epidemia e E nega distinção técnica.",
        "difficulty": "médio"
    },
    {
        "id": 1367,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "O que deve ser anotado no Rótulo / Etiqueta de Segurança primária química mandatório laboratorial em frasco de preparo ou estoque de bancadas de BPL molecular ativo misturado em genômica nas prateleiras dos freezers estáticos em rotina orgânica fria da câmara gelada e limpa do ambiente estéril limpo biológico?",
        "options": {
            "A": "Data e rubrica a lápis do fabricante.",
            "B": "Valor de compra e código QR digital.",
            "C": "Nome, concentração, data e validade.",
            "D": "Apenas o nome escrito rapidamente.",
            "E": "Desenho colorido sem textos ou códigos."
        },
        "correct": "C",
        "explanation": "A correta é a C porque Boas Práticas exigem identificação, concentração e prazos de validade. As outras falham pois: A permite grafia apagável, B prioriza custo, D omite segurança química e E ignora padronização obrigatória.",
        "difficulty": "fácil"
    },
    {
        "id": 1368,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "O que o Chuveiro de Ar com bloqueio Pressurizado Intertravado (Air-Lock / Câmara de Descontaminação Seca Dupla Interlock Cleanroom Lock / Câmara tipo Eclusa hermética selada de paredes grossas de fluxo e luzes restritas de transição biológica) atua numa porta blindada bloqueando na Sala Limpa Limiar de Alto Risco Pós-PCR e Extrações Críticas em Bio Bancos Nacionais NBS 3/4 isolados virgens esterilizados hospitalares de matriz genômicas atestadas estatais governamentais civis do Brasil?",
        "options": {
            "A": "Lavar o analista com água e sabão.",
            "B": "Isolar ambientes e conter aerossóis.",
            "C": "Armazenar insumos para uso futuro.",
            "D": "Resfriar roupas para evitar o suor.",
            "E": "Registrar o ponto via sensor biomédico."
        },
        "correct": "B",
        "explanation": "A correta é a B visto que eclusas controlam pressões diferenciais e evitam dispersão de contaminantes. As outras falham pois: A refere-se a higienização, C a estocagem, D a climatização e E a controle de pessoal.",
        "difficulty": "fácil"
    },
    {
        "id": 1369,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Em Ética de pesquisa (CONEP 466), a obrigatoriedade restrita rigorosa de tradução absoluta integral das complexidades e métricas da genômica do texto bruto na formulation redigida analógica ou digital do papel principal do TCLE (Termo do Consentimento Livre e Claro) baseia-se filosoficamente num mandamento bioético primário que afirma o quê e como ele garante no texto que a população vulnerável entenda tudo e leia livre de imposições técnicas da academia biomédica ou medicina rebuscada num idioma não leigo comum sem amparos explicativos lógicos estáticos no interior ou em fóruns rurais do país continental base do IBGE?",
        "options": {
            "A": "Exigir firma reconhecida em cartório.",
            "B": "Linguagem clara e acessível ao leigo.",
            "C": "Documento com 50 páginas jurídicas.",
            "D": "Manter termos técnicos em inglês/TI.",
            "E": "Sugerir busca de termos no Google."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a norma ética exige que o participante compreenda os riscos e benefícios em sua língua nativa. As outras falham pois: A foca em burocracia desnecessária, C dificulta a compreensão pelo tamanho, D utiliza termos que excluem o leigo e E delega responsabilidade indevidamente.",
        "difficulty": "médio"
    },
    {
        "id": 1370,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O sistema CRISPR-Cas9 revolucionou a edição genômica. Para que a nuclease Cas9 consiga clivar o DNA alvo, é estritamente necessária a presença de uma sequência específica adjacente ao alvo no genoma, conhecida como:",
        "options": {
            "A": "Sítio de Poly-A e maior tempo de manipulação no fluxo.",
            "B": "TATA box e validação por métodos ortogonais de bancada.",
            "C": "Motivo PAM (Protospacer Adjacent Motif).",
            "D": "Sequência Kozak e necessidade de validação adicional.",
            "E": "Sequência Shine-Dalgarno e estabilidade in vitro."
        },
        "correct": "C",
        "explanation": "A correta é a C porque o PAM é o sinalizador de ancoragem essencial para o corte. As outras falham pois: A e B são promotores, D e E regulam tradução proteica.",
        "difficulty": "fácil"
    },
    {
        "id": 1371,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Em epigenética, o sequenciamento com bissulfito de sódio (Bisulfite Sequencing) é o padrão-ouro para detectar metilação do DNA. Qual é a reação química que o bissulfito causa no DNA in vitro?",
        "options": {
            "A": "Cliva o DNA em ilhas CpG e exige controles internos.",
            "B": "Converte citosinas metiladas em uracilas.",
            "C": "Adiciona grupos metil nas adeninas da amostra.",
            "D": "Transforma guaninas em adeninas durante a análise.",
            "E": "Converte citosinas não metiladas em uracilas."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o bissulfito desamina citosinas não metiladas em uracila em laboratório. As outras falham pois: A não cliva, B inverte o processo, C não metila e D cita base errada.",
        "difficulty": "médio"
    },
    {
        "id": 1372,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Os microRNAs (miRNAs) e siRNAs atuam na interferência de RNA (RNAi) silenciando a expressão gênica. Qual é o complexo proteico efetor que se liga a esses pequenos RNAs para degradar o mRNA alvo?",
        "options": {
            "A": "Telomerase, consequentemente,  sendo aplicável principalmente em cenários controlados.",
            "B": "Spliceossomo e  uma característica que influencia a estabilidade in vitro.",
            "C": "Exossomo e  sendo aplicável principalmente em cenários controlados.",
            "D": "Complexo RISC (RNA-induced silencing complex).",
            "E": "Proteassomo além disso,  que atua de forma secundária na preservação da amostra."
        },
        "correct": "D",
        "explanation": "A correta é a D porque o complexo RISC processa pequenos RNAs para degradação do alvo. As outras falham pois: A mantém cromossomos, B processa íntrons, C degrada RNA inespecificamente e E foca em proteínas.",
        "difficulty": "fácil"
    },
    {
        "id": 1373,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "A via de Reparo por Recombinação Homóloga (HR) é ativada para consertar quebras de fita dupla (DSBs) no DNA. Por que essa via é restrita principalmente às fases S e G2 do ciclo celular?",
        "options": {
            "A": "Depende da cromátide irmã idêntica como molde de reparo.",
            "B": "Falta de ATP em outras fases do ciclo celular.",
            "C": "Degradação da p53 durante a fase M do ciclo celular.",
            "D": "Atuação da luz UV restrita à fase G1 do ciclo celular.",
            "E": "Desaparecimento do núcleo na fase G1 da célula."
        },
        "correct": "A",
        "explanation": "A correta é a A pois a Recombinação Homóloga utiliza a cromátide irmã como molde fidedigno. As outras falham pois: B, C e E citam fatores irrelevantes ao reparo e D foca em dano externo.",
        "difficulty": "fácil"
    },
    {
        "id": 1374,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Biópsias líquidas em oncologia utilizam o cfDNA (cell-free DNA). O tamanho característico dos fragmentos de cfDNA circulante em humanos saudáveis ou com câncer é de aproximadamente 166 pb. Esse tamanho reflete:",
        "options": {
            "A": "Proteção do DNA enrolado em nucleossomos (histonas).",
            "B": "Comprimento dos telômeros de células tumorais.",
            "C": "Tamanho do poro do glóbulo vermelho humano.",
            "D": "Quebra mecânica causada pela pressão sanguínea.",
            "E": "Tamanho padrão de um éxon do genoma humano."
        },
        "correct": "A",
        "explanation": "A correta é a A porque o tamanho reflete o fragmento de DNA protegido pelo nucleossomo. As outras falham pois: B, C e E não possuem essa dimensão fixa e D é causa secundária.",
        "difficulty": "fácil"
    },
    {
        "id": 1375,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Para preparar bibliotecas de RNA-Seq visando estudar long non-coding RNAs (lncRNAs) que não possuem cauda poly-A, o método de enriquecimento correto a ser utilizado no laboratório é:",
        "options": {
            "A": "Captura por beads magnéticas Poly-T (Oligo-dT).",
            "B": "Tagmentação com transposase Tn5 e  sendo aplicável principalmente em cenários controlados.",
            "C": "Depleção de RNA Ribossômico (Ribo-Zero/Ribo-Depletion).",
            "D": "Precipitação por Cloreto de Césio,  limitando a reprodutibilidade dos resultados entre lotes.",
            "E": "Extração exclusiva com Fenol-Clorofórmio."
        },
        "correct": "C",
        "explanation": "A correta é a C porque a depleção ribossomal permite detectar transcritos que não possuem poliadenilação. As outras falham pois: A exclui lncRNAs, B foca em DNA, D é purificação e E extração bruta.",
        "difficulty": "fácil"
    },
    {
        "id": 1376,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O ensaio ATAC-seq (Assay for Transposase-Accessible Chromatin) mapeia regiões abertas da cromatina. Ele faz isso utilizando uma enzima mutada que:",
        "options": {
            "A": "Insere adaptadores em regiões de cromatina aberta.",
            "B": "Corta o DNA via RNA guia e validação ortogonal.",
            "C": "Transcreve reversamente o RNA acessível.",
            "D": "Amplifica telômeros abertos em alta cobertura.",
            "E": "Metila o DNA fechado para otimizar o protocolo."
        },
        "correct": "A",
        "explanation": "A correta é a A pois a Tn5 Transposase insere adaptadores preferencialmente em DNA acessível. As outras falham pois: B usa RNA-guia para edição gênica, C transcreve RNA em DNA complementar, D foca em regiões teloméricas específicas e E analisa modificações epigenéticas em DNA fechado.",
        "difficulty": "fácil"
    },
    {
        "id": 1377,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A presença de 'Chimeric Reads' (reads quiméricos) em uma biblioteca NGS — onde a primeira metade do read mapeia no cromossomo 1 e a segunda metade no cromossomo 8 — pode ser um artefato técnico causado primariamente por:",
        "options": {
            "A": "Uso de tampão Tris-EDTA na etapa de eluição.",
            "B": "Tempo insuficiente de sonicação da amostra.",
            "C": "Erro de leitura óptica do laser no sequenciador.",
            "D": "Excesso de ciclos de PCR (template-switching).",
            "E": "Lavagem incompleta das beads de purificação SPRI."
        },
        "correct": "D",
        "explanation": "A correta é a D porque ciclos excessivos causam template-switching entre fitas distintas. As outras falham pois: A é tampão de estocagem, B fragmenta o DNA fisicamente, C gera erros de basecall e E impacta purificação e rendimento.",
        "difficulty": "fácil"
    },
    {
        "id": 1378,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Na extração de DNA genômico humano, a adição de Proteinase K juntamente com SDS (Dodecil Sulfato de Sódio) tem ação sinérgica porque:",
        "options": {
            "A": "SDS desnatura proteínas expondo-as à Proteinase K.",
            "B": "SDS funciona como um cofator para a enzima.",
            "C": "Inibição simultânea da extração de RNA total.",
            "D": "Precipitação do DNA enquanto a enzima o dissolve.",
            "E": "Neutralização do pH para ação da Proteinase K."
        },
        "correct": "A",
        "explanation": "A correta é a A pois o SDS desnatura proteínas facilitando o acesso enzimático da Proteinase K. As outras falham pois: B SDS é detergente, não cofator, C não removem RNA especificamente, D SDS solubiliza lipídios e E pH é controlado por tampões.",
        "difficulty": "fácil"
    },
    {
        "id": 1379,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Durante a validação de um painel NGS (ex: BRCA1/2), uma métrica crítica do controle de qualidade de 'captura' é a 'Off-Target Rate'. O que uma taxa off-target elevada (>30%) indica?",
        "options": {
            "A": "Falha na ligação dos adaptadores Illumina.",
            "B": "Detecção de variantes fora do gene alvo.",
            "C": "Geração excessiva de leituras muito curtas.",
            "D": "Presença de RNA no DNA extraído da amostra.",
            "E": "Falha de especificidade das sondas de captura."
        },
        "correct": "E",
        "explanation": "A correta é a E pois taxas off-target altas indicam captura inespecífica pelas sondas. As outras falham pois: A impede a biblioteca, B descreve o dado obtido, C reflete má fragmentação e D indica contaminação da amostra.",
        "difficulty": "fácil"
    },
    {
        "id": 1380,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Em tecnologia de Single-Cell RNA-Seq (scRNA-Seq) utilizando sistemas microfluídicos de gotas (ex: 10x Genomics), as contas de gel (Gel Beads) fornecem oligonucleotídeos contendo três componentes fundamentais: um primer poly-T, um UMI e um:",
        "options": {
            "A": "Promotor de RNA Polimerase T7 e sensibilidade.",
            "B": "Barcode celular único para identificar a célula.",
            "C": "Terminador dideoxinucleotídeo e reprodutibilidade.",
            "D": "Adaptador de ligação cega e tempo de fluxo.",
            "E": "Fluoróforo de dupla cor e calibração rigorosa."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o barcode celular identifica a origem de cada transcrito individualmente. As outras falham pois: A promove transcrição in-vitro, C interrompe a síntese, D é técnica de ligação e E serve para sinalização óptica.",
        "difficulty": "fácil"
    },
    {
        "id": 1381,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "No formato VCF (Variant Call Format), o campo FORMAT geralmente inclui a tag 'PL' (Phred-scaled Genotype Likelihoods). Em um sítio bialélico com valores PL de '400, 0, 50', o genótipo mais provável inferido pelo algoritmo (0/0, 0/1 ou 1/1) é:",
        "options": {
            "A": "Homozigoto referência (0/0) pelo valor inicial.",
            "B": "Homozigoto alternativo (1/1) pelo valor médio.",
            "C": "Heterozigoto (0/1) pelo valor zero no Phred.",
            "D": "Erro técnico do GATK por falta de filtros.",
            "E": "Indeterminado, necessitando de reprocessamento."
        },
        "correct": "C",
        "explanation": "A correta é a C pois o valor zero representa a maior verossimilhança no formato Phred (Heterozigoto). As outras falham pois: A tem penalidade alta, B é menos provável que C, D é um valor válido e E a inferência é clara.",
        "difficulty": "fácil"
    },
    {
        "id": 1382,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "A etapa de 'MarkDuplicates' no pipeline bioinformático de NGS não apaga fisicamente o read duplicado do arquivo BAM; em vez disso, ela:",
        "options": {
            "A": "Gera alerta no terminal e consome recursos.",
            "B": "Adiciona flag bitwise 1024 para ignorar o read.",
            "C": "Altera bases para N inviabilizando a montagem.",
            "D": "Subtrai pontos de qualidade Phred do read.",
            "E": "Move o read para o final do arquivo de texto."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a flag 1024 sinaliza duplicatas para ferramentas posteriores de análise. As outras falham pois: A é mensagem de sistema, C alteraria o dado original, D modifica a qualidade da base e E desorganizaria o mapeamento.",
        "difficulty": "difícil"
    },
    {
        "id": 1383,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Uma 'Hard Filter' (filtragem rígida manual) de variantes num arquivo VCF usando o GATK JEXL envolve critérios como 'QD < 2.0'. O que o parâmetro QD (Qual by Depth) mede e previne?",
        "options": {
            "A": "Tamanho do fragmento e presença de quimeras.",
            "B": "Viés de strand (Fwd/Rev) e falsos positivos.",
            "C": "Qualidade da variante dividida pela cobertura.",
            "D": "Pares discordantes e anotação de referência.",
            "E": "Posição da variante no final da leitura/read."
        },
        "correct": "C",
        "explanation": "A correta é a C pois o QD normaliza a qualidade da variante pela profundidade de cobertura. As outras falham pois: A identifica fusões, B avalia vieses de fita, D detecta variantes estruturais e E checa erro posicional.",
        "difficulty": "médio"
    },
    {
        "id": 1384,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "Qual comando do `bedtools` faz essa operação de dilatação de coordenadas de forma segura, respeitando os limites dos cromossomos?",
        "options": {
            "A": "bedtools getfasta para controle de qualidade.",
            "B": "bedtools intersect para ajuste de parâmetros.",
            "C": "bedtools subtract para redução de predição.",
            "D": "bedtools merge para análise de modelos.",
            "E": "bedtools slop -b 100 -i arquivo.bed -g genoma."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o comando slop expande as janelas respeitando os limites genômicos fornecidos. As outras falham pois: A extrai sequências, B cruza arquivos, C remove sobreposições e D une intervalos próximos.",
        "difficulty": "fácil"
    },
    {
        "id": 1385,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "Em comandos Linux bash, o pipe `|` é fundamental na bioinformática. Ao rodar `samtools view arquivo.bam | wc -l`, o que o sistema operacional faz na memória RAM?",
        "options": {
            "A": "Execução em servidores separados via cluster.",
            "B": "Pausa na execução até comando do usuário.",
            "C": "Ignora o primeiro comando e executa o segundo.",
            "D": "Cria arquivo temporário de 100GB em disco.",
            "E": "Redireciona a saída de um comando para o outro."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o pipe redireciona o fluxo de dados entre processos em tempo real. As outras falham pois: A exige computação distribuída, B interrompe a execução, C ignora etapas e D utiliza espaço em disco.",
        "difficulty": "fácil"
    },
    {
        "id": 1386,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "Ao executar um container Docker com a ferramenta BWA, o bioinformata usa a flag `-v /home/user/dados:/dados_internos`. Qual o objetivo dessa sintaxe?",
        "options": {
            "A": "Criptografar pastas e indexar dados prévios.",
            "B": "Mapear pasta do servidor para o container.",
            "C": "Verificar versão do Docker e normalizar dados.",
            "D": "Apagar dados internos e restringir aplicação.",
            "E": "Limitar disco virtual e avaliar o impacto."
        },
        "correct": "B",
        "explanation": "A correta é a B porque a flag -v cria uma ponte entre o sistema de arquivos do host e o container. As outras falham pois: A refere-se a protocolos de segurança, C trata de metadados do software, D indica remoção de arquivos e E foca em restrição de recursos de hardware.",
        "difficulty": "fácil"
    },
    {
        "id": 1387,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "A Correção de Benjamini-Hochberg em análises genômicas controla a Taxa de Falsas Descobertas (FDR). Conceitualmente, a FDR limita:",
        "options": {
            "A": "Proporção de falsos positivos entre significativos.",
            "B": "Valor de R-quadrado em regressão genômica.",
            "C": "Probabilidade de erro tipo II (falso negativo).",
            "D": "Proporção de falsos positivos em todas as hipóteses.",
            "E": "Variância explicada na análise de componentes."
        },
        "correct": "A",
        "explanation": "A correta é a A porque o FDR controla a proporção esperada de falsas descobertas entre os resultados significativos. As outras falham pois: B mede a qualidade de modelos regressivos, C foca em poder estatístico, D descreve o controle de erro tipo I global e E analisa dispersão de componentes.",
        "difficulty": "médio"
    },
    {
        "id": 1388,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "O QQ-plot (Quantile-Quantile plot) é essencial na análise final de um GWAS. Se a linha de pontos do QQ-plot apresentar um desvio abrupto ascendente (para cima da linha de 45 graus) apenas no final da cauda, isso indica:",
        "options": {
            "A": "Baixa taxa de cobertura de DNA e banco limitado.",
            "B": "SNPs com forte associação biológica ao fenótipo.",
            "C": "Erro severo de genotipagem (efeito de lote).",
            "D": "Falta de controle de parentesco críptico local.",
            "E": "Viés massivo por estratificação populacional."
        },
        "correct": "B",
        "explanation": "A correta é a B pois desvios apenas no final da cauda representam SNPs que realmente superam o ruído estatístico. As outras falham pois: A indica problemas de sequenciamento, C aponta erros sistemáticos de lote, D sugere inflação por parentesco e E revela viés populacional generalizado.",
        "difficulty": "fácil"
    },
    {
        "id": 1389,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "O conceito de 'Heritabilidade no sentido estrito' (Narrow-sense heritability - h²) avalia a proporção da variância fenotípica total explicada apenas pela:",
        "options": {
            "A": "Taxa de novas mutações de novo e processamento em clusters HPC.",
            "B": "Variância genética por dominância e epistasia em controle primário.",
            "C": "Variação de fatores de estilo de vida e uso de filtros de qualidade.",
            "D": "Variância ambiental compartilhada e ajustes de parâmetros de software.",
            "E": "Variância genética aditiva (efeitos acumulados simples dos alelos)."
        },
        "correct": "E",
        "explanation": "A correta é a E porque a heritabilidade no sentido estrito considera apenas a variância genética aditiva transmissível. As outras falham pois: A trata de eventos de mutação, B inclui efeitos de interação complexa, C foca em componentes ambientais e D refere-se a ajustes computacionais.",
        "difficulty": "fácil"
    },
    {
        "id": 1390,
        "area": "Bioinformática",
        "subject": "Princípios de saúde pública e epidemiologia genética",
        "text": "Em epidemiologia genética populacional (Genomas SUS), o uso da Randomização Mendeliana (MR) resolve qual grande desafio dos estudos observacionais clássicos em saúde?",
        "options": {
            "A": "Contaminação química de tubos e artefatos de frequências observadas.",
            "B": "Dificuldade em recrutar idosos e necessidade de anotação cruzada.",
            "C": "Confusão e Causalidade Reversa via designação aleatória na meiose.",
            "D": "Alto custo de reagentes e limitações de recursos computacionais.",
            "E": "Falta de assinaturas em TCLEs e ajustes de parâmetros no software."
        },
        "correct": "C",
        "explanation": "A correta é a C pois a segregação independente de alelos na meiose elimina vieses de confusão e causalidade reversa. As outras falham pois: A é problema de bancada laboratorial, B refere-se à logística de amostragem, D trata de limitações financeiras e E foca em conformidade ética.",
        "difficulty": "fácil"
    },
    {
        "id": 1391,
        "area": "Bioinformática",
        "subject": "Princípios de saúde pública e epidemiologia genética",
        "text": "Na devolução de resultados genômicos num hospital, a diferença entre 'Penetrância' e 'Expressividade' é que:",
        "options": {
            "A": "Probabilidade de ter sintomas vs severidade e variação dos mesmos.",
            "B": "Gravidade dos sintomas vs porcentagem de cura com falsos positivos.",
            "C": "Sinônimos absolutos que exigem normalização prévia de dados brutos.",
            "D": "Eficácia farmacogenômica e indexação para otimizar tempo de busca.",
            "E": "Aplicação em câncer somático restrita a grandes bancos de dados."
        },
        "correct": "A",
        "explanation": "A correta é a A porque penetrância é a taxa de manifestação e expressividade é o grau dessa manifestação. As outras falham pois: B confunde termos com prognóstico clínico, C ignora a distinção biológica real, D foca em otimização de busca e E restringe indevidamente o conceito.",
        "difficulty": "fácil"
    },
    {
        "id": 1392,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "No contexto da criptografia na segurança de dados genômicos no SUS, a infraestrutura da nuvem aplica criptografia Assimétrica de Chave Pública. Uma característica inerente à criptografia assimétrica é:",
        "options": {
            "A": "Mesma chave para abrir e fechar, exigindo troca insegura de chaves.",
            "B": "Incompatibilidade com SSH ou HTTPS gerando falhas estatísticas.",
            "C": "Uso exclusivo de hashes MD5 com alto processamento em clusters HPC.",
            "D": "Dispensa de processamento extra via indexação para tempo de busca.",
            "E": "Chave Pública para criptografar e chave Privada para descriptografar."
        },
        "correct": "E",
        "explanation": "A correta é a E porque o par de chaves permite que uma publique a fechadura e a outra guarde o segredo. As outras falham pois: A descreve a criptografia simétrica, B ignora o funcionamento do HTTPS, C confunde hashing com criptografia e D mistura performance com segurança.",
        "difficulty": "fácil"
    },
    {
        "id": 1393,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "O Hash criptográfico (ex: SHA-256) de um arquivo FASTQ garante um pilar da segurança da informação conhecido como:",
        "options": {
            "A": "Confidencialidade limitada por alto processamento em clusters HPC.",
            "B": "Integridade matemática contra corrupção ou alteração de bytes.",
            "C": "Não repúdio em aplicações restritas a grandes bancos de dados.",
            "D": "Anonimização via indexação prévia e alto poder de processamento.",
            "E": "Disponibilidade com redução do poder preditivo de modelos."
        },
        "correct": "B",
        "explanation": "A correta é a B porque qualquer alteração no arquivo altera drasticamente o valor do hash, provando sua integridade. As outras falham pois: A não impede a leitura dos dados, C requer assinaturas digitais completas, D não oculta a identidade e E não garante acesso persistente.",
        "difficulty": "fácil"
    },
    {
        "id": 1394,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "O conceito de 'Identidade por Descendência' (Identity by Descent - IBD) é o motor genético por trás do mapeamento de doenças em comunidades rurais do Genomas SUS. IBD refere-se a alelos que:",
        "options": {
            "A": "Linkage Disequilibrium nulo exigindo ajustes de parâmetros no software.",
            "B": "Efeito fenotípico de cor de olhos e artefatos de frequências.",
            "C": "Alelos herdados intactos de um mesmo ancestral comum recente.",
            "D": "Translocações adquiridas com indexação para otimizar tempo de busca.",
            "E": "Mutações aleatórias em populações isoladas de África e Ásia."
        },
        "correct": "C",
        "explanation": "A correta é a C pois IBD define segmentos de DNA idênticos herdados diretamente de um ancestral comum. As outras falham pois: A descreve associações estatísticas, B refere-se a traços físicos visíveis, D trata de mutações estruturais e E foca em variabilidade por mutação.",
        "difficulty": "fácil"
    },
    {
        "id": 1395,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "No contexto da bioinformática populacional, o Efeito Gargalo (Bottleneck) drástico na história de uma subpopulação afeta qual assinatura nos dados de sequenciamento NGS modernos?",
        "options": {
            "A": "Restauração de cromossomos X via filtros de qualidade e software.",
            "B": "Alteração de códons mitocondriais e integração de dados adicionais.",
            "C": "Inversão do Equilíbrio Hardy-Weinberg e ajuste de parâmetros.",
            "D": "Redução da diversidade nucleotídica (Pi) e perda de variantes raras.",
            "E": "Excesso de heterozigose limitando o uso de grandes bancos de dados."
        },
        "correct": "D",
        "explanation": "A correta é a D pois o efeito gargalo reduz drasticamente a diversidade e elimina alelos raros. As outras falham pois: A trata de filtros cromossômicos, B altera códons mitocondriais, C inverte o equilíbrio populacional e E sugere excesso de heterozigose.",
        "difficulty": "médio"
    },
    {
        "id": 1396,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "Na ontologia HPO (Human Phenotype Ontology), os termos estão organizados como um 'Grafo Acíclico Direcionado' (DAG). O que essa estrutura hierárquica permite na bioinformática clínica de exomas?",
        "options": {
            "A": "Conversão de BAM em CRAM com ajustes de parâmetros no software.",
            "B": "Tradução de CID-10 para inglês em hospitais e limitações de TI.",
            "C": "Alinhamento 3D de proteínas com normalização de dados brutos.",
            "D": "Listagem alfabética de sintomas com integração de dados externos.",
            "E": "Inferência semântica e propagação hierárquica de termos fenotípicos."
        },
        "correct": "E",
        "explanation": "A correta \u0000\u0000 a E pois o DAG permite navegar hierarquicamente para infer\u0000\u0000ncia fenot\u0000\u0000pica. As outras falham pois: A trata de ajustes em arquivos brutos, B foca em codifica\u0000\u0000\u0000\u0000o hospitalar administrativa, C refere-se \u0000\u0000 estrutura proteica f\u0000\u0000sica e D ignora a organiza\u0000\u0000\u0000\u0000o l\u0000\u0000gica da ontologia.",
        "difficulty": "fácil"
    },
    {
        "id": 1397,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "O formato de arquivo Apache Parquet é cada vez mais usado em Data Lakes genômicos como o do Genomas SUS em substituição aos arquivos CSV e VCF abertos. A vantagem principal estrutural do Parquet no Big Data é:",
        "options": {
            "A": "Genomas executáveis em C com alto processamento em clusters HPC.",
            "B": "Formato colunar comprimido para consultas rápidas de colunas alvo.",
            "C": "Suporte exclusivo para Windows com limitações de recursos computacionais.",
            "D": "Arquivo de áudio para laudos com indexação prévia para buscas.",
            "E": "Formato não criptografado em HTML com uso de filtros de qualidade."
        },
        "correct": "B",
        "explanation": "A correta \u0000\u0000 a B pois o armazenamento colunar otimiza consultas em grandes volumes gen\u0000\u0000micos. As outras falham pois: A confunde dados com bin\u0000\u0000rios execut\u0000\u0000veis, C limita erroneamente a compatibilidade de sistema, D aplica-se a m\u0000\u0000dia sonora irrelevante e E descreve formatos web ineficientes para an\u0000\u0000lise.",
        "difficulty": "difícil"
    },
    {
        "id": 1398,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "A função do fator de iniciação eIF4E em eucariotos é:",
        "options": {
            "A": "Atividade de helicase na meiose e sensibilidade ao pH do tampão.",
            "B": "Finalização da tradução em stop codons na fase pré-analítica.",
            "C": "Síntese de primers com validação por métodos ortogonais de bancada.",
            "D": "Ligação ao Cap 5' do mRNA para recrutamento do ribossomo.",
            "E": "Fragmentação de DNA inviabilizando uso de amostras degradadas."
        },
        "correct": "D",
        "explanation": "A correta \u0000\u0000 a D porque o eIF4E reconhece o Cap 5' para iniciar a tradu\u0000\u0000\u0000\u0000o. As outras falham pois: A descreve enzimas meioticas, B foca na termina\u0000\u0000\u0000\u0000o da prote\u0000\u0000na, C refere-se \u0000\u0000 s\u0000\u0000ntese de DNA in vitro e E trata de degrada\u0000\u0000\u0000\u0000o f\u0000\u0000sica.",
        "difficulty": "fácil"
    },
    {
        "id": 1399,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "O comando Git 'git clone https://github.com/repo.git' tem a função primária de:",
        "options": {
            "A": "Exclusão do repositório remoto com limitações de recursos modernos.",
            "B": "Comparação de arquivos VCF via modelos probabilísticos e bash.",
            "C": "Cópia local de todo o código e histórico de versões do projeto.",
            "D": "Envio de atualizações locais com anotação cruzada de referências.",
            "E": "Renomeação de pastas de genoma com integração de dados adicionais."
        },
        "correct": "C",
        "explanation": "A correta \u0000\u0000 a C pois clona o reposit\u0000\u0000rio completo incluindo todo o hist\u0000\u0000rico de vers\u0000\u0000es. As outras falham pois: A descreveria remo\u0000\u0000\u0000\u0000o remota, B trata de bioinform\u0000\u0000tica n\u0000\u0000o vinculada ao Git, D descreve a opera\u0000\u0000\u0000\u0000o de envio e E manipula diret\u0000\u0000rios simples.",
        "difficulty": "fácil"
    },
    {
        "id": 1400,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Um técnico derruba uma placa de amostras e fura as duas luvas com cacos de vidro contaminado em sangue na sala BPL 2. Qual o protocolo mandatório e instantâneo da norma de segurança?",
        "options": {
            "A": "Uso de fita adesiva em amostras severamente degradadas e lentas.",
            "B": "Passar iodopovidona no olho com calibração rigorosa de métodos.",
            "C": "Espremer o ferimento para sangrar com validação adicional técnica.",
            "D": "Lavar com água e sabão suavemente e relatar à chefia e CIPA.",
            "E": "Uso de luva extra com hipoclorito e padrões de segurança vigentes."
        },
        "correct": "D",
        "explanation": "A correta \u0000\u0000 a D seguindo a NR32 para higieniza\u0000\u0000\u0000\u0000o branda e comunica\u0000\u0000\u0000\u0000o de acidente. As outras falham pois: A ignora o risco biol\u0000\u0000gico humano, B sugere procedimento oft\u0000\u0000lmico perigoso, C aumenta absor\u0000\u0000\u0000\u0000o viral por press\u0000\u0000o e E usa corrosivo em ferida aberta.",
        "difficulty": "fácil"
    },
    {
        "id": 1401,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "O termo 'Phasing' ou faseamento no contexto de genômica estrutural humana baseia-se em:",
        "options": {
            "A": "Exclusão de metilação tumoral com alto processamento em clusters.",
            "B": "Desligamento de laser fotográfico com modelos probabilísticos.",
            "C": "Sequenciamento de RNA em fases lunares com filtros de qualidade.",
            "D": "Mudança térmica na biblioteca com alto processamento e baixa predição.",
            "E": "Atribuição de alelos ao mesmo cromossomo (cis) ou opostos (trans)."
        },
        "correct": "E",
        "explanation": "A correta \u0000\u0000 a E pois o faseamento define se muta\u0000\u0000\u0000\u0000es est\u0000\u0000o no mesmo cromossomo. As outras falham pois: A trata de modifica\u0000\u0000\u0000\u0000es epigen\u0000\u0000ticas, B refere-se a instrumenta\u0000\u0000\u0000\u0000o \u0000\u0000ptica, C \u0000\u0000 pseudoci\u0000\u0000ncia sem base e D envolve termodin\u0000\u0000mica de PCR.",
        "difficulty": "fácil"
    },
    {
        "id": 1402,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Para mitigar riscos de perda irreversível no sistema Linux corporativo da bioinformática pública, a técnica 'LVM Snapshots' (Logical Volume Manager) permite:",
        "options": {
            "A": "Espelhamento de 2 meses com correção estatística de dados.",
            "B": "Compartilhamento com nuvem Oracle via indexação de busca rápida.",
            "C": "Aumento do clock da CPU com alto processamento e anotação cruzada.",
            "D": "Exclusão de volumes sem senha com anotação de referência em banco.",
            "E": "Foto congelada do sistema de arquivos para restauração rápida."
        },
        "correct": "E",
        "explanation": "A correta \u0000\u0000 a E pois snapshots capturam o estado do sistema para recupera\u0000\u0000\u0000\u0000o imediata. As outras falham pois: A confunde com backup incremental longo, B refere-se a nuvem propriet\u0000\u0000ria, C descreve acelera\u0000\u0000\u0000\u0000o de hardware e D trata de remo\u0000\u0000\u0000\u0000o insegura.",
        "difficulty": "fácil"
    },
    {
        "id": 1403,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Os kits de Quantificação KAPA Library Quant (qPCR) utilizam primers específicos que grudam em quais regiões obrigatórias do fragmento de DNA recém saído da bancada?",
        "options": {
            "A": "Repetições LINE Alu com validação de controles internos e segurança.",
            "B": "Centro dos éxons da biblioteca com monitoramento pré-analítico.",
            "C": "Trechos randômicos de tagmentação com eficiência analítica variável.",
            "D": "Adaptadores P5 e P7 para quantificar moléculas prontas e viáveis.",
            "E": "Zonas metiladas da máquina com validação em amostras degradadas."
        },
        "correct": "D",
        "explanation": "A correta \u0000\u0000 a D porque garante a quantifica\u0000\u0000\u0000\u0000o apenas de mol\u0000\u0000culas com adaptadores funcionais. As outras falham pois: A detecta elementos repetitivos gen\u0000\u0000micos, B foca em \u0000\u0000xons ignorando a biblioteca, C falha na especificidade t\u0000\u0000cnica e E rastreia modifica\u0000\u0000\u0000\u0000es qu\u0000\u0000micas.",
        "difficulty": "médio"
    },
    {
        "id": 1404,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "A assinatura molecular de uma 'Seleção Purificadora (Purifying / Negative Selection)' sobre o genoma no cenário demográfico e evolutivo se manifesta nas coortes WGS como:",
        "options": {
            "A": "Parada de mitoses em células raras via ajuste de parâmetros no software.",
            "B": "Eliminação de alelos deletérios em regiões gênicas conservadas.",
            "C": "Fusão de genes e telômeros com indexação e falsos positivos.",
            "D": "Excesso de mutações nonsense com alto consumo de recursos de TI.",
            "E": "Multiplicação gênica por CNVs com ajuste de parâmetros e indexação."
        },
        "correct": "B",
        "explanation": "A correta \u0000\u0000 a B pois a sele\u0000\u0000\u0000\u0000o negativa remove variantes que reduzem a sobreviv\u0000\u0000ncia. As outras falham pois: A descreve interrup\u0000\u0000\u0000\u0000o do ciclo celular, C envolve instabilidade estrutural, D resultaria de aus\u0000\u0000ncia de sele\u0000\u0000\u0000\u0000o e E descreve CNVs.",
        "difficulty": "fácil"
    },
    {
        "id": 1405,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Ao utilizar amostras de uma Criança (Menor de idade incapaz civilmente) em ensaios multicêntricos raros (Trios Clínicos), exige-se do laboratório clínico ético a assinatura formal obrigatória dos pais/responsáveis e do menor em:",
        "options": {
            "A": "Protocolo hospitalar com validação por métodos ortogonais de bancada.",
            "B": "Acordo financeiro civil com monitoramento técnico pré-analítico.",
            "C": "TCLE assinado pelos pais e TALE assinado pelo menor de idade.",
            "D": "Interdição por lei federal com validação de bancada e padrões técnicos.",
            "E": "Recibo digital com selfie em amostras severamente degradadas."
        },
        "correct": "C",
        "explanation": "A correta \u0000\u0000 a C pois exige consentimento dos pais e assentimento apropriado do menor. As outras falham pois: A \u0000\u0000 apenas rotina operacional, B refere-se a contratos comerciais anti\u0000\u0000ticos, D envolve processos judiciais de incapacidade e E desrespeita formalidades bio\u0000\u0000ticas.",
        "difficulty": "fácil"
    },
    {
        "id": 1406,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "Em análises multivariáveis no pipeline R, a variável 'P-value Ajustado' (Padj) que deve guiar a decisão final no logaritmo das estatísticas de descobertas verdadeiras é gerada para mitigar fundamentalmente que tipo de erro intrínseco numérico das descobertas nas tabelas:",
        "options": {
            "A": "Erro no Phred Q30 com ajuste de parâmetros de software e clusters.",
            "B": "Inflação do Erro Tipo I (Falso Positivo) em múltiplos testes gênicos.",
            "C": "Falsos negativos em biópsias com modelos probabilísticos e ruídos.",
            "D": "Erro material nas amostras com normalização bruta de dados primários.",
            "E": "Erro na RNA polimerase nativa com alto processamento em clusters."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o Padj corrige a probabilidade de falsos positivos em múltiplos testes simultâneos. As outras falham pois: A foca em qualidade física, C trata de erro tipo II, D refere-se a processamento de sinais e E descreve um processo biológico enzimático.",
        "difficulty": "médio"
    },
    {
        "id": 1407,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Ao checar a extração automatizada (Bancada HTS), as luzes 'UV C' instaladas nativamente dentro das baias nos robôs do NGS possuem a finalidade severa noturna de:",
        "options": {
            "A": "Iluminação interna para visualização.",
            "B": "Coloração de bibliotecas degradadas.",
            "C": "Descontaminação do DNA por quebras.",
            "D": "Aquecimento de beads para preservação.",
            "E": "Polimerização de plásticos e vidros."
        },
        "correct": "C",
        "explanation": "A correta é a C porque a radiação UV-C fragmenta o DNA residual, evitando contaminação entre corridas. As outras falham pois: A usa luz visível, B não existe em protocolos NGS, D utiliza blocos térmicos e E é processo industrial irrelevante na baia.",
        "difficulty": "médio"
    },
    {
        "id": 1408,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "O modelo de APIs baseadas em REST em bases globais de ontologia usam de verbos HTTP padronizados de transações. Para Extrair Informação ou Enviar um Volume Novo ao site, quais verbos e códigos de erro de dados (HTTP/REST status) são classicamente mapeados respectivamente no Python scripts:",
        "options": {
            "A": "REQUEST/PUT: 200 Not File e 900 Crash.",
            "B": "GET/POST: 404 Not Found e 500 Error.",
            "C": "DOWN/UP: logs nativos de bash script.",
            "D": "SEND/RETRIEVE: erros 90 e 80 brutos.",
            "E": "PULL/SAVE: 101 Null e 102 Void HPC."
        },
        "correct": "B",
        "explanation": "A correta é a B pois GET busca dados e POST envia, seguindo o padrão oficial HTTP/REST. As outras falham pois: A utiliza códigos inexistentes, C refere-se a scripts locais, D não segue a nomenclatura oficial e E usa termos de versionamento.",
        "difficulty": "médio"
    },
    {
        "id": 1409,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "Qual a aplicabilidade direta da medida estatística Odd Ratios (Razão de Chances) computada nos logs dos exames caso-controle dos bancos populacionais VCF em relação à Doença em andamento clínico nas triagens baseadas em frequências em alelos mutados pontuais no locus biológico e nativo somático?",
        "options": {
            "A": "Transcrição de RNA em vias somáticas.",
            "B": "Multiplicador de risco entre grupos.",
            "C": "Expressão proteômica com alto HPC.",
            "D": "Frequência de erro e normalização.",
            "E": "Tempo da polimerase com filtros QC."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o Odds Ratio quantifica o aumento do risco de um evento entre grupos. As outras falham pois: A mede atividade gênica, C foca em proteínas, D avalia qualidade técnica e E mede cinética enzimática.",
        "difficulty": "difícil"
    },
    {
        "id": 1410,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Com o avanço do Genomas SUS e bases governamentais estatais interligadas na nuvem. A governança digital obriga a separação entre DPO, Data Steward e Data Custodian. Do ponto da Infra de TI Bioinformática corporativa no sistema LINUX, quem detém as root keys e implementa a ação dos níveis em chmods lógicos na máquina em permissões restritivas das pastas base Linux na base da proteção em LGPD rigorosas?",
        "options": {
            "A": "Advogados sem conhecimento técnico.",
            "B": "Zeladores e assistentes de laboratório.",
            "C": "Data Custodian via chmod e logs DPO.",
            "D": "Médicos na ponta do diagnóstico SUS.",
            "E": "Fiscais da Anvisa em aeroportos."
        },
        "correct": "C",
        "explanation": "A correta é a C pois o Data Custodian é o responsável técnico por implementar as permissões de acesso. As outras falham pois: A trata do jurídico, B é equipe operacional, D são usuários finais e E são auditores externos.",
        "difficulty": "médio"
    },
    {
        "id": 1411,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Ao rodar ferramentas GATK e SAMtools conjuntas em WES de rotina. Qual anomalia visível estatística primária num VCF indica nativamente com a pior probabilidade gravíssima (Flag de QC crítico negativo de Falso-Positivo biológico estrutural e analítico nas métricas GATK JEXL num PC analista em revisão médica) que a biblioteca do WES (Exoma Captura Híbrida em bancada BPL) sofreu 'Contaminação Extrema de DNA Genômico Exógeno Alienígena Cross-contaminação Intra-Placa Humana' grave?",
        "options": {
            "A": "Erro de index com artefatos de dados.",
            "B": "VAF estocástica com ruídos anormais.",
            "C": "Recalibração BQSR em clusters HPC.",
            "D": "Picos de 300x com anotação cruzada.",
            "E": "Reads não alinhados com modelos RAW."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a frequência alélica (VAF) anormal indica a presença de DNA de múltiplos indivíduos. As outras falham pois: A afeta separação inicial, C calibra bases, D indica viés de captura e E sugere origem exógena.",
        "difficulty": "médio"
    },
    {
        "id": 1412,
        "area": "Bioinformática",
        "subject": "Princípios de saúde pública e epidemiologia genética",
        "text": "A implementação clínica no país com Exoma Sequenciado Rapidamente (rWES - Rápido no berço neonatal nas UTIs Pediátricas Neonatais Centrais nas frentes do estado hospitalares em crise na vida de choque térmico letal e base estrutural sintomática). Esse fluxo biológico veloz altera radicalmente qual vetor dos desfechos dos médicos nos ambulatórios?",
        "options": {
            "A": "Custo elevado com alto consumo de TI.",
            "B": "Fim da odisseia diagnóstica precoce.",
            "C": "Mutações por vacinas e software.",
            "D": "Atraso de laudos por microscopia.",
            "E": "Fechamento hospitalar por limites TI."
        },
        "correct": "B",
        "explanation": "A correta é a B porque o rWES agiliza o diagnóstico de precisão em casos críticos neonatais. As outras falham pois: A foca em finanças, C é biologicamente impossível, D refere-se a citologia e E é conclusão ilógica.",
        "difficulty": "fácil"
    },
    {
        "id": 1413,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "Por qual premissa lógica informacional, ao construir tabelas gigantes nos Data Lakes Cloud Genomas das coortes epidemiológicas nacionais, o bioinformata e os engenheiros convertem maciçamente e com rigor os achados fenotípicos médicos em jargões textuais médicos ambíguos do prontuário de papel antigo ('Dedos com anomalia, seis dedos nas juntas extras') para os identificadores alfanuméricos globais HPO nativos baseados em dicionários (ex: HP:0010442)?",
        "options": {
            "A": "Censura de dados e redução preditiva.",
            "B": "Normalização semântica e integração.",
            "C": "Faturamento no exterior com HPC.",
            "D": "Corrupção de discos por linguagem.",
            "E": "Economia de digitação em plantões."
        },
        "correct": "B",
        "explanation": "A correta é a B pois ontologias como HPO padronizam termos médicos para análise computacional unificada. As outras falham pois: A trata de sigilo, C refere-se a faturamento, D é erro físico e E é conveniência trivial.",
        "difficulty": "fácil"
    },
    {
        "id": 1414,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "O comando `bcftools merge` é frequentemente usado em estudos de GWAS no SUS para:",
        "options": {
            "A": "Converter BCF em FastQ exigindo normalização prévia dos dados.",
            "B": "Excluir variantes raras gerando falsos positivos estatísticos.",
            "C": "Alterar bases T para U em RNA demandando alto processamento.",
            "D": "Dividir VCFs de grandes famílias com anotação de referência.",
            "E": "Unir múltiplos VCFs de amostras em um único arquivo gigante."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o comando merge une múltiplos arquivos VCF em uma única matriz de dados. As outras falham pois: A converte arquivos incompatíveis, B refere-se a filtragem, C trata de RNA e D realiza a separação.",
        "difficulty": "fácil"
    },
    {
        "id": 1415,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Um ataque de 'Denial of Service' (DDoS) no portal da web de visualização do Genomas SUS impacta principalmente qual pilar da Segurança da Informação de sistemas públicos federais?",
        "options": {
            "A": "Afetar monitores e no-breaks do centro de processamento.",
            "B": "Afetar a disponibilidade inundando o servidor com tráfego.",
            "C": "Violar a autoria falsificando senhas médicas no sistema.",
            "D": "Quebrar o sigilo roubando dados e inviabilizando montagens.",
            "E": "Prejudicar o arquivamento em geladeiras e bancos de dados."
        },
        "correct": "B",
        "explanation": "A correta é a B pois ataques DDoS visam sobrecarregar o sistema e impedir o acesso legítimo. As outras falham pois: A afeta periféricos físicos, C envolve falsificação, D envolve roubo e E envolve logística física.",
        "difficulty": "fácil"
    },
    {
        "id": 1416,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Em um WES (Exoma) oncológico com Painel de 500 genes focado num tumor metastático sujo, o que a métrica 'On-Target Rate' de 90% atesta visualmente para o avaliador da máquina?",
        "options": {
            "A": "Indica que 90% das leituras alinharam nos genes alvo.",
            "B": "Indica que a amostra tem 90% de água e alta degradação.",
            "C": "Indica que 90% dos pacientes possuem tumores benignos.",
            "D": "Indica que 90% do genoma falhou e requer nova calibração.",
            "E": "Indica que o robô levou 90 minutos para processar os tubos."
        },
        "correct": "A",
        "explanation": "A correta é a A porque indica que o enriquecimento dos genes alvo foi bem-sucedido na captura. As outras falham pois: B confunde composição física com bioinformática, C refere-se a patologia clínica, D sugere falha catastrófica e E confunde taxa com tempo de processamento.",
        "difficulty": "fácil"
    },
    {
        "id": 1417,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Ao utilizar a base GnomAD para filtras variantes de um paciente no Genomas SUS, um bioinformata detecta um SNP com 'AF (Allele Frequency) = 0.85' na população global em saúde primária geral não oncológica grave letal dominante. Na análise final diagnóstica médica severa do paciente, este SNP é:",
        "options": {
            "A": "Erro de polimerase (repetir corrida).",
            "B": "Descartado por ser comum (polimorfismo).",
            "C": "Fusão de éxon com falhas de laser.",
            "D": "Confirmação imediata de doença letal.",
            "E": "Anotação urgente por risco severo."
        },
        "correct": "B",
        "explanation": "A correta é a B porque variantes frequentes na população saudável são consideradas polimorfismos benignos. As outras falham pois: A sugere erro técnico inexistente, C confunde tipos de variantes, D ignora frequência populacional e E superestima risco de variante comum.",
        "difficulty": "difícil"
    },
    {
        "id": 1418,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Qual é o principal EPC (Equipamento de Proteção Coletiva) obrigatório num ambiente BPL laboratorial de Extração Pesada orgânica (Fenol/Clorofórmio Extensivo) isolado em salas que não é um EPI pessoal no corpo?",
        "options": {
            "A": "Chuveiro de água térmica para preservação da amostra.",
            "B": "Capela química com exaustão para gases tóxicos.",
            "C": "Luvas de malha de aço para proteção contra cortes.",
            "D": "Estufa sem ventilação para amostras degradadas.",
            "E": "Pipeta monocanal calibrada para manipulação de rotina."
        },
        "correct": "B",
        "explanation": "A correta é a B pois capelas protegem coletivamente contra vapores tóxicos voláteis de reagentes. As outras falham pois: A é para descontaminação accidental, C é proteção individual, D carece de exaustão e E é um instrumento de medição.",
        "difficulty": "fácil"
    },
    {
        "id": 1419,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "O que é 'Efeito Fundador' (Founder Effect) na Genética Populacional isolada do Genoma Brasil (Ex: Isolamentos geográficos do passado ou vilas do sertão de fundação por poucos casais ancestrais fugidos)?",
        "options": {
            "A": "Mutações em grandes centros urbanos.",
            "B": "Mutações raras comuns em isolados.",
            "C": "Aumento cognitivo por mitose anormal.",
            "D": "Morte mitocondrial por radiação solar.",
            "E": "Destruição de genes via cruzamento."
        },
        "correct": "B",
        "explanation": "A correta é a B porque populações isoladas propagam variantes raras devido ao limitado pool gênico inicial. As outras falham pois: A refere-se a centros diversos, C é absurdo biológico, D envolve radiação externa e E descreve perda genética inexistente.",
        "difficulty": "fácil"
    },
    {
        "id": 1420,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Qual das seguintes bases nitrogenadas NÃO é encontrada na molécula de DNA, sendo exclusiva do RNA?",
        "options": {
            "A": "Uracila.",
            "B": "Guanina.",
            "C": "Citosina.",
            "D": "Timina.",
            "E": "Adenina."
        },
        "correct": "A",
        "explanation": "A correta é a A pois a uracila substitui a timina na estrutura molecular do RNA. As outras falham pois: B, C e E existem em ambos e D é exclusiva do DNA.",
        "difficulty": "fácil"
    },
    {
        "id": 1422,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "A organela celular conhecida como a 'fábrica de energia' da célula, que inclusive possui seu próprio DNA circular, é:",
        "options": {
            "A": "Ribossomo.",
            "B": "Mitocôndria.",
            "C": "Complexo de Golgi.",
            "D": "Lisossomo.",
            "E": "Cloroplasto."
        },
        "correct": "B",
        "explanation": "A correta é a B porque mitocôndrias realizam a respiração celular e possuem genoma próprio. As outras falham pois: A sintetiza proteínas, C secreta substâncias, D realiza digestão e E é exclusivo de vegetais.",
        "difficulty": "fácil"
    },
    {
        "id": 1423,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O que é um 'Cromossomo'?",
        "options": {
            "A": "Um vírus inativo sensível a variações de pH.",
            "B": "Molécula de DNA condensada com proteínas e genes.",
            "C": "Parede celular que influencia a estabilidade in vitro.",
            "D": "Proteína que digere açúcar em métodos ortogonais.",
            "E": "Molécula de RNA transportador em cenários controlados."
        },
        "correct": "B",
        "explanation": "A correta é a B porque cromossomos representam o DNA compactado com proteínas para divisão celular. As outras falham pois: A é agente infeccioso, C é barreira externa, D é funcional e E é transportador.",
        "difficulty": "fácil"
    },
    {
        "id": 1424,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O termo 'Mutação' em biologia significa de forma simples:",
        "options": {
            "A": "A cura de uma doença,  sendo aplicável principalmente em cenários controlados.",
            "B": "Qualquer alteração ou erro na sequência original de letras (bases) do DNA.",
            "C": "O transporte de oxigênio pelo sangue e  que atua de forma secundária na preservação da amostra.",
            "D": "A morte celular programada e  requerendo adequação aos padrões de segurança vigentes.",
            "E": "O ganho de superpoderes o que resulta em  o que demanda validação com métodos ortogonais de bancada."
        },
        "correct": "B",
        "explanation": "A correta é a B porque mutações são definidas como quaisquer mudanças na sequência nucleotídica original. As outras falham pois: A é processo curativo, C é fisiologia respiratória, D é morte programada e E é ficção.",
        "difficulty": "fácil"
    },
    {
        "id": 1425,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Qual é o principal objetivo da técnica de PCR no laboratório?",
        "options": {
            "A": "Amplificar trechos de DNA para permitir análises.",
            "B": "Transformar DNA em RNA via procedimentos validados.",
            "C": "Cortar DNA em pedaços monitorados na pré-analítica.",
            "D": "Eliminar bactérias aumentando o tempo de trabalho.",
            "E": "Alterar a cor do sangue sensível a variações de pH."
        },
        "correct": "A",
        "explanation": "A correta é a A pois a PCR replica exponencialmente sequências específicas de DNA para análise. As outras falham pois: B é transcrição, C é fragmentação enzimática, D é esterilização e E é reação química cromática.",
        "difficulty": "fácil"
    },
    {
        "id": 1426,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A sigla NGS em genômica significa:",
        "options": {
            "A": "Normalização de Genes Somáticos e  que atua de forma secundária na preservação da amostra.",
            "B": "Núcleo de Genética Simples e  o que requer calibração rigorosa dos métodos utilizados.",
            "C": "Nível Global de Saúde,  uma característica que influencia a estabilidade in vitro.",
            "D": "Novo Guia de Sangue,  o que demanda validação com métodos ortogonais de bancada.",
            "E": "Next-Generation Sequencing (Sequenciamento de Nova Geração)."
        },
        "correct": "E",
        "explanation": "A correta é a E porque NGS é o acrônimo internacional para sequenciamento de alto desempenho. As outras falham pois: A, B, C e D são definições inventadas sem significado técnico.",
        "difficulty": "fácil"
    },
    {
        "id": 1427,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Na extração de DNA, usamos centrífugas. O que uma centrífuga faz?",
        "options": {
            "A": "Lê o código de barras do tubo e  o que requer calibração rigorosa dos métodos utilizados.",
            "B": "Gira em alta velocidade para separar os componentes de uma mistura baseando-se no peso (densidade).",
            "C": "Aquece a amostra até ferver e  um fator técnico que deve ser monitorado na fase pré-analítica.",
            "D": "Congela a amostra instantaneamente e  requerendo adequação aos padrões de segurança vigentes.",
            "E": "Mede o pH da solução, consequentemente,  sendo um procedimento que depende de validação adicional."
        },
        "correct": "B",
        "explanation": "A centrífuga utiliza a força centrífuga para separar componentes por densidade. As outras falham pois: A serve para identificação, C é para fervura, D para conservação e E mede acidez.",
        "difficulty": "fácil"
    },
    {
        "id": 1428,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "No sequenciamento Illumina, o local de vidro onde as reações químicas acontecem e são fotografadas chama-se:",
        "options": {
            "A": "Tubo Eppendorf.",
            "B": "Pipeta além disso,  permitindo a otimização do protocolo em condições controladas.",
            "C": "Lâmina de microscópio.",
            "D": "Flow Cell (Célula de Fluxo).",
            "E": "Placa de Petri."
        },
        "correct": "D",
        "explanation": "A Flow Cell é o suporte físico onde ocorrem o sequenciamento e a captura de imagens. As outras falham pois: A armazena amostras, B transfere líquidos, C é para microscopia comum e E para culturas.",
        "difficulty": "fácil"
    },
    {
        "id": 1429,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O aparelho chamado 'Termociclador' é usado para:",
        "options": {
            "A": "Fotografar células durante a manipulação do fluxo.",
            "B": "Esterilizar luvas exigindo calibração de métodos.",
            "C": "Medir pureza da água otimizando protocolos técnicos.",
            "D": "Executar PCR alternando temperaturas rapidamente.",
            "E": "Pesar reagentes sensíveis a variações de pH."
        },
        "correct": "D",
        "explanation": "O termociclador realiza ciclos térmicos essenciais para a amplificação via PCR. As outras falham pois: A capta imagens, B esteriliza materiais, C avalia condutividade e E mede massa física.",
        "difficulty": "fácil"
    },
    {
        "id": 1430,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Qual é a regra mais básica para o descarte de agulhas e seringas usadas (perfurocortantes)?",
        "options": {
            "A": "Descartar em caixa rígida amarela sem reencapar.",
            "B": "Reencapar manualmente e descartar no lixo comum.",
            "C": "Descartar no lixo da pia seguindo normas vigentes.",
            "D": "Derreter a agulha com validação de procedimentos.",
            "E": "Colocar em sacos brancos limitando reprodutibilidade."
        },
        "correct": "A",
        "explanation": "Descartar em recipientes rígidos sem reencapar previne furos e acidentes biológicos. As outras falham pois: B causa acidentes, C contamina a rede, D é perigoso e E fura facilmente.",
        "difficulty": "fácil"
    },
    {
        "id": 1431,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "A máquina Autoclave é usada no laboratório para:",
        "options": {
            "A": "Medir proteínas seguindo padrões de segurança.",
            "B": "Extrair DNA com monitoramento pré-analítico.",
            "C": "Destilar água com validação de métodos ortogonais.",
            "D": "Congelar amostras sensíveis a variações de pH.",
            "E": "Esterilizar materiais com calor e alta pressão."
        },
        "correct": "E",
        "explanation": "A autoclave esteriliza materiais através de calor úmido e alta pressão. As outras falham pois: A quantifica proteínas, B separa DNA, C produz água pura e D conserva amostras.",
        "difficulty": "fácil"
    },
    {
        "id": 1432,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "É estritamente PROIBIDO pela biossegurança:",
        "options": {
            "A": "Descartar luvas no lixo seguindo normas vigentes.",
            "B": "Comer ou beber nas bancadas e geladeiras da área.",
            "C": "Lavar as mãos antes da saída conforme as normas.",
            "D": "Amarrar o cabelo em ambientes sensíveis ao pH.",
            "E": "Usar óculos de proteção exigidos por segurança."
        },
        "correct": "B",
        "explanation": "Ingerir alimentos ou bebidas no laboratório impede contaminações acidentais por patógenos ou químicos. As outras falham pois: A, C, D e E são normas de biossegurança obrigatórias.",
        "difficulty": "fácil"
    },
    {
        "id": 1433,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "O uso de Jaleco dentro do laboratório serve principalmente para:",
        "options": {
            "A": "Guardar canetas com validação de métodos ortogonais.",
            "B": "Manter o calor do corpo em amostras degradadas.",
            "C": "Identificar a hierarquia limitando a reprodutibilidade.",
            "D": "Substituir a higiene diária usando controles internos.",
            "E": "Proteger pele e roupas contra respingos e químicos."
        },
        "correct": "E",
        "explanation": "O jaleco atua como barreira física de proteção contra agentes biológicos e químicos. As outras falham pois: A é utilitário, B é térmico, C é social e D é anti-higiênico.",
        "difficulty": "fácil"
    },
    {
        "id": 1434,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Em caso de respingo de produto químico perigoso nos olhos do analista, qual deve ser a PRIMEIRA ação de emergência?",
        "options": {
            "A": "Aplicar colírio influenciando a estabilidade in vitro.",
            "B": "Gritar e correr atuando na preservação da amostra.",
            "C": "Esfregar com papel em amostras degradadas.",
            "D": "Usar o lava-olhos com água em abundância.",
            "E": "Passar álcool 70% influenciando a estabilidade."
        },
        "correct": "D",
        "explanation": "O uso imediato do lava-olhos dilui o químico, minimizando lesões oculares graves. As outras falham pois: A agrava lesões, B atrasa socorro, C causa atrito e E queima tecidos.",
        "difficulty": "fácil"
    },
    {
        "id": 1435,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "A sigla TCLE significa:",
        "options": {
            "A": "Tratamento Curativo Limitado Exclusivo.",
            "B": "Termo de Consentimento Livre e Esclarecido.",
            "C": "Termo de Consulta Legal Estatística.",
            "D": "Teste de Câncer Leve Especial.",
            "E": "Técnica de Centrifugação Lenta Especial."
        },
        "correct": "B",
        "explanation": "TCLE é o documento que garante a autonomia e o consentimento do paciente em pesquisas. As outras falham pois: A, C, D e E são siglas fictícias ou incorretas.",
        "difficulty": "fácil"
    },
    {
        "id": 1436,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Um paciente voluntário de uma pesquisa genética decide que não quer mais participar. Ele pode sair da pesquisa?",
        "options": {
            "A": "Sim, a qualquer momento sem sofrer prejuízos médicos.",
            "B": "Apenas mediante multa e calibração de métodos.",
            "C": "Sim, mas o hospital cancelará consultas futuras.",
            "D": "Apenas com liberação judicial e reprodutibilidade.",
            "E": "Não, a permanência é obrigatória até o fim."
        },
        "correct": "A",
        "explanation": "O paciente possui direito constitucional de desistência da pesquisa sem prejuízos ao tratamento. As outras falham pois: B é antiético, C ilegal, D burocrático e E escravagista.",
        "difficulty": "fácil"
    },
    {
        "id": 1437,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "O que significa a letra 'S' em SUS?",
        "options": {
            "A": "Social.",
            "B": "Segurança.",
            "C": "Suporte.",
            "D": "Saúde.",
            "E": "Sistema."
        },
        "correct": "D",
        "explanation": "A correta é a D pois o SUS é o Sistema Único de Saúde. As outras falham pois: A usa termo da assistência social, B confunde com seguridade social, C usa palavra inexistente na sigla e E foca na primeira letra.",
        "difficulty": "fácil"
    },
    {
        "id": 1438,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "O princípio do SUS que diz que 'todo e qualquer cidadão tem o direito de ser atendido nos hospitais públicos do Brasil' chama-se:",
        "options": {
            "A": "Universalidade.",
            "B": "Controle Social.",
            "C": "Descentralização.",
            "D": "Equidade.",
            "E": "Integralidade."
        },
        "correct": "A",
        "explanation": "A correta é a A porque universalidade garante acesso a todos. As outras falham pois: B trata de participação popular, C divide gestão administrativa, D busca justiça na desigualdade e E foca no cuidado completo.",
        "difficulty": "fácil"
    },
    {
        "id": 1439,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "Vacinação em massa de crianças nos postinhos de saúde é um exemplo clássico de:",
        "options": {
            "A": "Prevenção Primária evitando que a doença ocorra.",
            "B": "Cuidados paliativos validados por métodos ortogonais.",
            "C": "Prevenção Secundária com uso de controles internos.",
            "D": "Tratamento cirúrgico com controles internos.",
            "E": "Prevenção Terciária aumentando tempo de manipulação."
        },
        "correct": "A",
        "explanation": "A correta é a A pois vacinas evitam que doenças surjam. As outras falham pois: B é para cuidados terminais, C foca em diagnóstico precoce, D envolve procedimentos cirúrgicos e E foca na reabilitação.",
        "difficulty": "fácil"
    },
    {
        "id": 1440,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Na bioinformática, o arquivo do tipo FASTA é conhecido por:",
        "options": {
            "A": "Conter imagens de células mitigadas por filtros.",
            "B": "Ser um arquivo de vídeo com alto processamento.",
            "C": "Ser um arquivo exclusivo do Microsoft Word.",
            "D": "Conter planilhas financeiras de modelos genômicos.",
            "E": "Conter apenas sequências de letras e um cabeçalho."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o FASTA contém sequências e cabeçalhos. As outras falham pois: A refere-se a imagens, B é para vídeos, C é proprietário e D usa planilhas numéricas.",
        "difficulty": "fácil"
    },
    {
        "id": 1441,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Diferente do FASTA, o arquivo FASTQ contém uma linha extra muito importante. Qual é ela?",
        "options": {
            "A": "A data de validade da amostra reduzindo o poder.",
            "B": "O nome do paciente e CPF exigindo normalização.",
            "C": "Pontuações de Qualidade (Phred scores) de cada base.",
            "D": "Tradução do RNA para espanhol exigindo indexação.",
            "E": "Imagem em miniatura da célula exigindo indexação."
        },
        "correct": "C",
        "explanation": "A correta é a C pois FASTQ inclui qualidade por base. As outras falham pois: A não existe em genômica, B dados sensíveis são protegidos, D tradução não é função do arquivo e E imagens têm formatos próprios.",
        "difficulty": "fácil"
    },
    {
        "id": 1442,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Na análise de genomas, o que é o 'Genoma de Referência'?",
        "options": {
            "A": "O genoma de um paciente doente com anotação.",
            "B": "O DNA de um rato exigindo normalização de dados.",
            "C": "O manual de instruções restrito a grandes bancos.",
            "D": "Um mapa padrão usado como guia para comparações.",
            "E": "Um arquivo de música digital com ajuste de software."
        },
        "correct": "D",
        "explanation": "A correta é a D pois serve como guia para comparação. As outras falham pois: A é o objeto de estudo, B é espécie diferente, C bancos são públicos e E música usa formatos digitais.",
        "difficulty": "fácil"
    },
    {
        "id": 1443,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Um arquivo VCF (Variant Call Format) é gerado no fim da análise bioinformática. Ele serve para:",
        "options": {
            "A": "Gráfico financeiro do hospital exigindo recursos.",
            "B": "Fotos em 3D do DNA avaliadas na qualidade.",
            "C": "Impressão de receita médica com ajuste de software.",
            "D": "Lista de mutações em relação ao genoma de referência.",
            "E": "Tradução de textos mitigada por filtros."
        },
        "correct": "D",
        "explanation": "A correta é a D pois armazena variantes em relação à referência. As outras falham pois: A é financeiro, B é imagem 3D, C é texto médico e E é linguística.",
        "difficulty": "fácil"
    },
    {
        "id": 1444,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "O que o algoritmo BWA faz no pipeline de bioinformática?",
        "options": {
            "A": "Extração de sangue mitigada por filtros de dados.",
            "B": "Alinhador que mapeia leituras no genoma de referência.",
            "C": "Editor de fotos gerando falsos positivos.",
            "D": "Desligamento do computador com normalização prévia.",
            "E": "Medição do peso da máquina com ajuste computacional."
        },
        "correct": "B",
        "explanation": "A correta é a B pois BWA mapeia sequências na referência. As outras falham pois: A é clínico, C é design gráfico, D é gestão de energia e E é física.",
        "difficulty": "fácil"
    },
    {
        "id": 1445,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "Qual é o Sistema Operacional padrão utilizado por 99% dos servidores e supercomputadores de bioinformática no mundo?",
        "options": {
            "A": "Windows XP.",
            "B": "Android.",
            "C": "Windows 98.",
            "D": "iOS (Apple).",
            "E": "Linux (ambiente Unix)."
        },
        "correct": "E",
        "explanation": "A correta é a E pois Linux é o padrão de servidores. As outras falham pois: A e C são Windows obsoletos, B é móvel e D é Apple mobile.",
        "difficulty": "fácil"
    },
    {
        "id": 1446,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "No terminal Linux, o comando 'ls' serve para:",
        "options": {
            "A": "Criar uma planilha do Excel,  o que restringe sua aplicação prática a grandes bancos de dados.",
            "B": "Aumentar a letra e  exigindo uma etapa prévia de normalização dos dados brutos.",
            "C": "Apagar o computador inteiro e  o que demanda alto poder de processamento em clusters HPC.",
            "D": "Tocar um som, consequentemente,  uma abordagem comum em análises de modelos probabilísticos.",
            "E": "Listar os arquivos e pastas que estão dentro de um diretório."
        },
        "correct": "E",
        "explanation": "A correta é a E pois ls lista conteúdos de diretórios. As outras falham pois: A é planilha, B é visual, C destrói dados e D é áudio.",
        "difficulty": "fácil"
    },
    {
        "id": 1447,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "Qual destas é uma das linguagens de programação mais populares e essenciais ensinadas na Bioinformática moderna para análise de dados?",
        "options": {
            "A": "Python.",
            "B": "CSS.",
            "C": "HTML.",
            "D": "Cobol.",
            "E": "Assembly."
        },
        "correct": "A",
        "explanation": "Gabarito: C. Python e R são as duas rainhas da bioinformática. São linguagens limpas, com pacotes poderosos para ler genética.",
        "difficulty": "fácil"
    },
    {
        "id": 1448,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "O que a plataforma 'GitHub' faz na rotina de um programador/bioinformata?",
        "options": {
            "A": "Limpeza de vírus de pendrive com normalização.",
            "B": "Rede para salvar e versionar códigos de programação.",
            "C": "Edição de vídeos de cirurgia na fase de qualidade.",
            "D": "Sequenciamento físico do DNA com indexação prévia.",
            "E": "Impressão de laudos em clusters de processamento."
        },
        "correct": "B",
        "explanation": "A correta é a B por ser a plataforma padrão para versionamento de código fonte. As outras falham pois: A remove vírus, C edita vídeos cirúrgicos, D realiza sequenciamento físico e E imprime laudos clínicos.",
        "difficulty": "fácil"
    },
    {
        "id": 1449,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "No terminal Linux, o comando 'cat arquivo.txt' faz o quê?",
        "options": {
            "A": "Exclusão do arquivo reduzindo o poder preditivo.",
            "B": "Exibição do conteúdo de texto do arquivo na tela.",
            "C": "Mudança de nome restrita a grandes bancos de dados.",
            "D": "Inserção de foto de gato mitigada por filtros.",
            "E": "Ativação da internet sem integração de dados."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o comando 'cat' exibe o conteúdo textual no terminal. As outras falham pois: A exclui arquivos, C renomeia documentos, D trata de imagens de animais e E ativa conectividade.",
        "difficulty": "fácil"
    },
    {
        "id": 1450,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "Na estatística básica, um 'Valor-p' (p-value) MENOR que 0.05 (p < 0,05) indica geralmente que:",
        "options": {
            "A": "Indicação de mutação inofensiva sem integração.",
            "B": "Indicação de falha na pesquisa e erro de indexação.",
            "C": "Indicação de resultado nulo restrito a grandes bancos.",
            "D": "Indicação de resultado estatisticamente significativo.",
            "E": "Indicação de óbito de pacientes com ajuste de software."
        },
        "correct": "D",
        "explanation": "A correta é a D pois p < 0,05 indica que o resultado possui significância estatística. As outras falham pois: A refere-se a mutações, B indica falha metodológica, C sugere nulidade e E foca em óbitos.",
        "difficulty": "médio"
    },
    {
        "id": 1451,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "Em genética de populações, o que é 'Ancestralidade'?",
        "options": {
            "A": "Estudo da contagem populacional em modelos comuns.",
            "B": "Origem geográfica histórica dos genes de uma pessoa.",
            "C": "Cor da pele atual restrita a grandes bancos de dados.",
            "D": "Valor monetário herdado sem integração de dados.",
            "E": "Estudo de animais de fazenda com ajuste de software."
        },
        "correct": "B",
        "explanation": "A correta é a B por definir a origem geográfica histórica dos genes herdados. As outras falham pois: A faz contagem populacional, C define fenótipo de pele, D aborda herança financeira e E foca em agropecuária.",
        "difficulty": "fácil"
    },
    {
        "id": 1452,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "O 'Efeito Fundador' ocorre quando:",
        "options": {
            "A": "Quando um empresário cria uma nova empresa com poucos recursos.",
            "B": "Quando cientistas descobrem novos tratamentos médicos em clínicas.",
            "C": "Quando um novo hospital é inaugurado em uma cidade do interior.",
            "D": "Quando a população global atinge níveis recordes de crescimento.",
            "E": "Quando um pequeno grupo isolado funda uma nova linhagem genética."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o efeito ocorre quando poucos indivíduos iniciam nova população. As outras falham pois: A é sobre empreendedorismo, B trata de descobertas, C inaugura hospitais e D foca em crescimento global.",
        "difficulty": "fácil"
    },
    {
        "id": 1453,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "Consanguinidade significa o quê em termos populacionais?",
        "options": {
            "A": "Processo de troca de sangue em transfusões hospitalares comuns.",
            "B": "Cruzamento entre parentes próximos que aumenta doenças raras.",
            "C": "Ter o mesmo tipo sanguíneo O negativo entre doadores de órgãos.",
            "D": "Inimigos que moram próximos e reduzem o poder de algoritmos.",
            "E": "Doação de sangue rotineira em postos de saúde governamentais."
        },
        "correct": "B",
        "explanation": "A correta é a B pois descreve o cruzamento entre parentes com riscos genéticos. As outras falham pois: A envolve transfusão, C tipo sanguíneo específico, D refere-se a inimigos e E foca em doação.",
        "difficulty": "fácil"
    },
    {
        "id": 1454,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "O que a sigla GWAS (Genome-Wide Association Study) busca fazer?",
        "options": {
            "A": "Medir a pressão arterial e aplicar modelos probabilísticos.",
            "B": "Imprimir laudos clínicos e gerar diversos falsos positivos.",
            "C": "Pesar o paciente e ajustar parâmetros em softwares de busca.",
            "D": "Buscar variantes de DNA associadas ao risco de doenças complexas.",
            "E": "Curar o câncer e normalizar dados brutos em etapas iniciais."
        },
        "correct": "D",
        "explanation": "A correta é a D pois o GWAS identifica variantes associadas a doenças complexas. As outras falham pois: A mede pressão, B foca em falsos positivos, C avalia peso e E promete cura imediata.",
        "difficulty": "fácil"
    },
    {
        "id": 1455,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "No Brasil, a Lei que obriga hospitais e pesquisadores a protegerem rigorosamente os dados pessoais e os exames genéticos dos pacientes na internet chama-se:",
        "options": {
            "A": "Código de Trânsito Brasileiro e normas de referência.",
            "B": "Lei da Informática Livre para acesso a sistemas abertos.",
            "C": "LGPD (Lei Geral de Proteção de Dados) para privacidade.",
            "D": "ECA (Estatuto da Criança) e normas de proteção infantil.",
            "E": "CLT (Lei do Trabalho) e regras de indexação de busca."
        },
        "correct": "C",
        "explanation": "A correta é a C pois a LGPD regulamenta a privacidade de dados no Brasil. As outras falham pois: A rege trânsito, B foca em informática, D protege crianças e E define leis trabalhistas.",
        "difficulty": "fácil"
    },
    {
        "id": 1456,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Qual é a regra mais elementar e inquebrável de segurança digital (Compliance) no laboratório para um analista bioinformata?",
        "options": {
            "A": "Usar senhas simples como 123456 em todos os terminais.",
            "B": "Compartilhar senhas com colegas para facilitar o plantão.",
            "C": "Nunca compartilhar senhas pessoais com absolutamente ninguém.",
            "D": "Deixar o computador desbloqueado ao sair para o intervalo.",
            "E": "Guardar senhas escritas em papéis colados no monitor de vídeo."
        },
        "correct": "C",
        "explanation": "A correta é a C pois a segurança depende do sigilo absoluto das credenciais. As outras falham pois: A usa senhas fracas, B permite compartilhamento, D deixa sistema exposto e E anota senhas fisicamente.",
        "difficulty": "fácil"
    },
    {
        "id": 1457,
        "area": "Bioinformática",
        "subject": "Princípios de saúde pública e epidemiologia genética",
        "text": "O que é Farmacogenômica?",
        "options": {
            "A": "O processo de venda de medicamentos caros em redes globais.",
            "B": "A criação de farmácias em bairros rurais e áreas isoladas.",
            "C": "A mistura de remédios variados em preparos farmacêuticos.",
            "D": "O estudo de como o DNA afeta a resposta individual a drogas.",
            "E": "O estudo exclusivo de plantas curativas e modelos estatísticos."
        },
        "correct": "D",
        "explanation": "A correta é a D porque a farmacogenômica estuda como variações genéticas influenciam a resposta aos medicamentos. As outras falham pois: A foca em economia, B trata de acesso geográfico, C refere-se à manipulação física e E aborda botânica.",
        "difficulty": "fácil"
    },
    {
        "id": 1458,
        "area": "Bioinformática",
        "subject": "Princípios de saúde pública e epidemiologia genética",
        "text": "O 'Teste do Pezinho' no Brasil ajuda a diagnosticar precocemente o quê?",
        "options": {
            "A": "Prever se a criança terá cabelos lisos no futuro próximo.",
            "B": "Diagnosticar cáries dentárias precoces em recém-nascidos.",
            "C": "Estimar qual será a altura final do paciente na fase adulta.",
            "D": "Identificar se o pé do bebê possui fraturas ou lesões ósseas.",
            "E": "Detectar doenças genéticas graves nos primeiros dias de vida."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o teste identifica precocemente doenças genéticas e metabólicas em recém-nascidos. As outras falham pois: A busca traços estéticos, B foca em odontologia, C prevê estatura física e D detecta fraturas.",
        "difficulty": "fácil"
    },
    {
        "id": 1459,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "O termo 'Cloud Computing' (Computação em Nuvem) na bioinformática se refere a:",
        "options": {
            "A": "O uso de computadores voadores em redes de dados remotas.",
            "B": "O aluguel de servidores potentes via internet para análises.",
            "C": "Trabalhar apenas em dias nublados para evitar aquecimento.",
            "D": "Criar fumaça artificial na sala física de servidores locais.",
            "E": "Perder todos os dados salvos ao desligar o sistema central."
        },
        "correct": "B",
        "explanation": "A correta é a B pois computação em nuvem envolve o uso de recursos computacionais via internet. As outras falham pois: A imagina máquinas voadoras, C baseia-se em meteorologia, D sugere fumaça física e E indica falha de armazenamento.",
        "difficulty": "fácil"
    },
    {
        "id": 1460,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "A sigla 'ETL' no banco de dados do Ministério da Saúde significa:",
        "options": {
            "A": "Escrever Textos Longos e mitigar filtros de qualidade digital.",
            "B": "Eliminar Todas as Leis e gerar falsos positivos estatísticos.",
            "C": "Enviar Tudo Longe e manter limitações em recursos modernos.",
            "D": "Entender, Trabalhar, Limpar e aplicar modelos probabilísticos.",
            "E": "Extrair, Transformar e Carregar dados em sistemas centrais."
        },
        "correct": "E",
        "explanation": "A correta é a E, sendo a sigla técnica para Extract, Transform e Load em bancos de dados. As outras falham pois: A foca em redação, B sugere ilegalidade jurídica, C refere-se a logística e D erra os termos técnicos.",
        "difficulty": "fácil"
    },
    {
        "id": 1461,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "Por que usamos dicionários universais de doenças, como a CID-10 (Classificação Internacional de Doenças), em sistemas de saúde?",
        "options": {
            "A": "Criar receitas maiores e demandar alto poder de processamento.",
            "B": "Cobrar taxas governamentais sobre grandes bancos de dados.",
            "C": "Nomear doenças com termos longos para controle de qualidade.",
            "D": "Padronizar a linguagem médica globalmente através de códigos.",
            "E": "Dificultar a vida do médico com registros de busca complexos."
        },
        "correct": "D",
        "explanation": "A correta é a D porque códigos como a CID padronizam a terminologia médica globalmente. As outras falham pois: A visa custos operacionais, B trata de impostos, C foca na extensão do nome e E supõe dificultar registros.",
        "difficulty": "fácil"
    },
    {
        "id": 1462,
        "area": "Bioinformática",
        "subject": "Princípios de saúde pública e epidemiologia genética",
        "text": "O que caracteriza uma 'Doença Rara' em termos populacionais?",
        "options": {
            "A": "Uma alergia de pele passageira que requer anotação prévia.",
            "B": "Uma gripe comum que reduz o poder preditivo de algoritmos.",
            "C": "Uma doença que atinge apenas idosos em cenários controlados.",
            "D": "Uma condição que atinge metade da população mundial ativa.",
            "E": "Uma condição que afeta um número reduzido de indivíduos."
        },
        "correct": "E",
        "explanation": "A correta é a E pois doenças raras são definidas pela sua baixa incidência na população. As outras falham pois: A descreve alergias comuns, B foca em patologias sazonais, C limita-se a idosos e D indica alta prevalência.",
        "difficulty": "fácil"
    },
    {
        "id": 1463,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "Em um exame de triagem preventiva, o que é um 'Falso Positivo'?",
        "options": {
            "A": "A máquina do exame apresentou falha técnica de aquecimento.",
            "B": "O paciente está doente, mas o teste não detectou patologia.",
            "C": "O paciente está saudável e o teste confirmou a plena saúde.",
            "D": "O paciente está doente e o exame confirmou o diagnóstico.",
            "E": "O teste indica doença em uma pessoa que está totalmente sã."
        },
        "correct": "E",
        "explanation": "A correta é a E porque o falso positivo ocorre quando o teste aponta doença em alguém saudável. As outras falham pois: A é erro técnico, B é falso negativo, C é verdadeiro negativo e D é verdadeiro positivo.",
        "difficulty": "fácil"
    },
    {
        "id": 1464,
        "area": "Laboratório",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "text": "Em um exame laboratorial, o que é um 'Falso Negativo'?",
        "options": {
            "A": "O papel do laudo rasgou durante a impressão do resultado.",
            "B": "O exame aponta saúde e o paciente está de fato saudável.",
            "C": "A máquina quebrou antes de emitir o laudo de diagnóstico.",
            "D": "O exame avisa que o paciente possui a doença corretamente.",
            "E": "O teste indica saúde em uma pessoa que está realmente doente."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o falso negativo acontece quando o teste não detecta a doença existente. As outras falham pois: A é dano material, B é verdadeiro negativo, C é falha de hardware e D é verdadeiro positivo.",
        "difficulty": "fácil"
    },
    {
        "id": 1465,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "O que é um 'Script' no jargão da bioinformática?",
        "options": {
            "A": "O nome de uma proteína extraída para análise laboratorial.",
            "B": "O uniforme padrão da equipe de limpeza de centros de TI.",
            "C": "A marca específica do tubo de ensaio usado na coleta.",
            "D": "O modelo de impressora utilizado para emitir laudos finais.",
            "E": "Arquivo de texto com comandos executados pelo computador."
        },
        "correct": "E",
        "explanation": "A correta é a E pois scripts são arquivos com sequências de comandos para automatizar tarefas. As outras falham pois: A é termo biológico, B refere-se a uniformes, C trata de marcas e D é hardware.",
        "difficulty": "fácil"
    },
    {
        "id": 1466,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "Por que as pessoas de diferentes partes do mundo têm características visíveis diferentes, como a cor da pele ou intolerância à lactose?",
        "options": {
            "A": "Pinturas corporais artificiais feitas por povos do passado.",
            "B": "O clima do ano de nascimento que altera o DNA no parto.",
            "C": "A inexistência de uma única espécie humana em continentes.",
            "D": "O consumo excessivo de açúcar durante a infância remota.",
            "E": "Adaptação gradual a diferentes ambientes e dietas locais."
        },
        "correct": "E",
        "explanation": "A correta é a E porque as variações fenotípicas resultam da adaptação evolutiva aos ambientes e dietas. As outras falham pois: A foca em estética, B sugere mutação instantânea, C nega espécie única e D foca em nutrição.",
        "difficulty": "fácil"
    },
    {
        "id": 1467,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Na regra de Backup 3-2-1 da TI hospitalar, o número '1' significa que:",
        "options": {
            "A": "Ter apenas um funcionário com acesso a todas as senhas.",
            "B": "Perder um disco rígido sem comprometer a rede do hospital.",
            "C": "Manter apenas um único arquivo digital em todo o sistema.",
            "D": "Guardar uma cópia de segurança fora do prédio do hospital.",
            "E": "Realizar o salvamento dos dados apenas uma vez por ano."
        },
        "correct": "D",
        "explanation": "A correta é a D pois o '1' exige uma cópia off-site para segurança. As outras falham pois: A trata de senhas, B é redundância de hardware, C limita arquivos desnecessariamente e E define periodicidade anual insuficiente.",
        "difficulty": "fácil"
    },
    {
        "id": 1468,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "O que significa 'Criptografia' de arquivos na genômica?",
        "options": {
            "A": "Codificar arquivos com fórmulas para leitura apenas com senha.",
            "B": "Apagar os dados genômicos de pacientes que já faleceram.",
            "C": "Imprimir resultados em folhas seladas com cera protetora.",
            "D": "Colorir o DNA em tons de azul para visualização em telas.",
            "E": "Traduzir o laudo final para o idioma francês obrigatoriamente."
        },
        "correct": "A",
        "explanation": "A correta é a A pois criptografia protege dados codificando o acesso. As outras falham pois: B trata de descarte, C é lacre físico, D é estética visual e E é tradução linguística obrigatória.",
        "difficulty": "fácil"
    },
    {
        "id": 1469,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Em relação ao nosso genoma humano de mais de 3 bilhões de letras, a parte que REALMENTE codifica as receitas (éxons) para fazer proteínas é de aproximadamente:",
        "options": {
            "A": "100% além disso,  apresentando sensibilidade a variações de pH no tampão.",
            "B": "90%, consequentemente,  permitindo a otimização do protocolo em condições controladas.",
            "C": "Menos de 0,01%.",
            "D": "50%,  que atua de forma secundária na preservação da amostra.",
            "E": "Cerca de 1,5% a 2% (O Exoma)."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o exoma compõe apenas 1,5-2% do DNA. As outras falham pois: A e B superestimam o total, C subestima drasticamente e D é um valor aleatório sem base científica.",
        "difficulty": "médio"
    },
    {
        "id": 1520,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "O que representa o 'Genoma de Referência' humano (como as versões GRCh37 ou GRCh38) na bioinformática?",
        "options": {
            "A": "Software de alinhamento para processamento em clusters HPC.",
            "B": "Banco de dados de vírus para controle de qualidade primário.",
            "C": "DNA extraído de chimpanzés para integração de novos dados.",
            "D": "DNA de um único paciente saudável para fins estatísticos.",
            "E": "Mapa modelo usado como gabarito para encontrar mutações."
        },
        "correct": "E",
        "explanation": "A correta é a E pois serve como mapa modelo para comparação de sequências. As outras falham pois: A é software, B foca em vírus, C usa espécie errada e D ignora a origem multi-doador anônima.",
        "difficulty": "fácil"
    },
    {
        "id": 1521,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "A etapa de 'Variant Calling' (Chamada de Variantes) em um pipeline NGS tem qual objetivo principal?",
        "options": {
            "A": "Colorir os cromossomos para análise de recursos modernos.",
            "B": "Limpar o computador de vírus através de anotação cruzada.",
            "C": "Medir proteínas do sangue após normalização de dados.",
            "D": "Copiar arquivos para pendrives em grandes bancos de dados.",
            "E": "Identificar mutações comparando o paciente com a referência."
        },
        "correct": "E",
        "explanation": "A correta é a E pois identifica diferenças entre paciente e referência. As outras falham pois: A é estética, B é segurança cibernética, C é proteômica e D é simples transferência de dados.",
        "difficulty": "médio"
    },
    {
        "id": 1522,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Qual é a principal diferença entre um arquivo SAM e um arquivo BAM?",
        "options": {
            "A": "Nenhuma, pois são criados por fabricantes concorrentes.",
            "B": "SAM contém imagens digitais e BAM contém textos brutos.",
            "C": "SAM é exclusivo para RNA e BAM é exclusivo para o DNA.",
            "D": "BAM não armazena os índices de qualidade da sequência.",
            "E": "SAM é texto legível e BAM é sua versão binária compacta."
        },
        "correct": "E",
        "explanation": "A correta é a E pois BAM é a versão binária compactada do SAM legível. As outras falham pois: A nega a relação, B cita imagens, C separa moléculas erroneamente e D diz faltar dados de qualidade.",
        "difficulty": "fácil"
    },
    {
        "id": 1523,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "O IGV (Integrative Genomics Viewer) é uma ferramenta gráfica muito famosa na bioinformática. Para que ele serve?",
        "options": {
            "A": "Montar genomas virais em clusters de alto processamento.",
            "B": "Visualizar graficamente os reads alinhados na referência.",
            "C": "Realizar planilhas financeiras de custos para sequenciamento.",
            "D": "Desenhar gráficos em 3D de proteínas e ajustar parâmetros.",
            "E": "Escrever códigos em Python para modelos probabilísticos."
        },
        "correct": "B",
        "explanation": "A correta é a B pois permite visualizar reads alinhados sobre a referência. As outras falham pois: A é montagem de genomas, C é software financeiro, D foca em proteínas e E é programação pura.",
        "difficulty": "fácil"
    },
    {
        "id": 1524,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Na sigla de mutações, a diferença entre um SNP (ou SNV) e um InDel é que:",
        "options": {
            "A": "Não existe diferença na contagem das bases sequenciadas.",
            "B": "SNP é sempre mortal e InDel é sempre uma variante benigna.",
            "C": "SNP afeta apenas o RNA e InDel afeta o DNA mitocondrial.",
            "D": "SNP é causado por vírus e InDel é causado por bactérias.",
            "E": "SNP troca uma letra; InDel insere ou remove bases do DNA."
        },
        "correct": "E",
        "explanation": "A correta é a E pois distingue troca pontual de inserção ou deleção de bases. As outras falham pois: A nega diferenças estruturais, B generaliza clinicamente, C limita moléculas e D cita patógenos infecciosos.",
        "difficulty": "fácil"
    },
    {
        "id": 1525,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "No arquivo VCF de um paciente, o campo 'REF' mostra a letra 'A' e o campo 'ALT' mostra a letra 'C'. O que isso significa?",
        "options": {
            "A": "A máquina de leitura quebrou a base nitrogenada original.",
            "B": "A letra A desapareceu sem substituição na sequência final.",
            "C": "O genoma humano normal tem C e o paciente analisado tem A.",
            "D": "A referência possui letra A e o paciente possui letra C.",
            "E": "O paciente não apresenta nenhuma das letras na posição."
        },
        "correct": "D",
        "explanation": "A correta é a D pois REF indica o modelo e ALT a mutação do paciente. As outras falham pois: A supõe erro técnico, B sugere deleção, C inverte as fontes e E nega dados detectados.",
        "difficulty": "fácil"
    },
    {
        "id": 1526,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "O que a 'Anotação Funcional' (usando ferramentas como SnpEff ou VEP) adiciona ao arquivo de variantes (VCF) do paciente?",
        "options": {
            "A": "Alterar o genoma de referência em artefatos computacionais.",
            "B": "Prever o efeito biológico de uma mutação sobre o gene.",
            "C": "Calcula a idade do paciente via controle de qualidade.",
            "D": "Criptografar arquivos VCF para evitar falsos positivos.",
            "E": "Remover vírus do arquivo em análises probabilísticas."
        },
        "correct": "B",
        "explanation": "A correta é a B pois interpreta o impacto biológico da mutação na proteína. As outras falham pois: A altera o mapa modelo, C mede idade, D é criptografia e E é filtragem de vírus.",
        "difficulty": "fácil"
    },
    {
        "id": 1527,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "O que significa dizer que um sequenciamento atingiu uma 'Profundidade de Cobertura de 30x' (30x Depth of Coverage)?",
        "options": {
            "A": "A máquina demorou trinta vezes mais para ler o genoma.",
            "B": "Foram testados trinta pacientes simultaneamente no fluxo.",
            "C": "O genoma analisado possui trinta cromossomos no total.",
            "D": "Cada letra do genoma foi lida em média por trinta reads.",
            "E": "Apenas trinta por cento do genoma do paciente foi lido."
        },
        "correct": "D",
        "explanation": "A correta é a D pois a profundidade indica quantas vezes cada base foi lida. As outras falham pois: A refere-se ao tempo de corrida, B trata da multiplexação de pacientes, C descreve a contagem cromossômica e E define a abrangência horizontal.",
        "difficulty": "fácil"
    },
    {
        "id": 1528,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Em um alinhamento genômico, o que a palavra 'Mismatch' (desemparelhamento) indica?",
        "options": {
            "A": "Uma falha física no cluster HPC.",
            "B": "Desligamento por queda de energia.",
            "C": "Paciente diferente da referência.",
            "D": "Ausência total de RNA na amostra.",
            "E": "Read 100% igual ao genoma alvo."
        },
        "correct": "C",
        "explanation": "A correta é a C porque o mismatch representa uma diferença nucleotídica entre amostra e referência. As outras falham pois: A é falha de hardware, B é problema elétrico, D refere-se à composição química e E define um emparelhamento perfeito.",
        "difficulty": "fácil"
    },
    {
        "id": 1529,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Qual é a função básica da ferramenta de bioinformática chamada 'FastQC'?",
        "options": {
            "A": "Apagar dados e reduzir o processamento.",
            "B": "Montar árvores genealógicas em escala.",
            "C": "Avaliar a qualidade das leituras brutas.",
            "D": "Fazer o download de genomas na internet.",
            "E": "Cortar adaptadores e indexar bibliotecas."
        },
        "correct": "C",
        "explanation": "A correta é a C porque o FastQC analisa a qualidade técnica das leituras brutas. As outras falham pois: A trata de exclusão, B de filogenia, D de transferência de arquivos e E de processamento de adaptadores.",
        "difficulty": "fácil"
    },
    {
        "id": 1530,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Qual a diferença biológica entre sequenciar o 'Genoma Inteiro' (WGS) e sequenciar o 'Transcriptoma' (RNA-Seq)?",
        "options": {
            "A": "WGS detecta doenças genéticas e exige bancos de dados externos.",
            "B": "RNA-Seq analisa modelos probabilísticos em amostras vegetais.",
            "C": "RNA-Seq mapeia o genoma mitocondrial com filtros de qualidade.",
            "D": "WGS analisa o DNA estático; RNA-Seq analisa a expressão ativa.",
            "E": "Ambos utilizam RNA e exigem alto processamento computacional."
        },
        "correct": "D",
        "explanation": "A correta é a D pois distingue a estabilidade do genoma da dinâmica do transcriptoma. As outras falham pois: A ignora a função do RNA-Seq, B limita o escopo biológico, C foca em organelas específicas e E confunde as moléculas alvo.",
        "difficulty": "fácil"
    },
    {
        "id": 1531,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "O formato de arquivo BED é muito utilizado na bioinformática (ex: bedtools). Ele serve primariamente para:",
        "options": {
            "A": "Serve para planilhas contábeis e ajustes de parâmetros locais.",
            "B": "Armazena fotos microscópicas e exige alto processamento em HPC.",
            "C": "Traduz textos entre idiomas e necessita de anotação externa.",
            "D": "Armazena coordenadas genômicas (início e fim) de regiões.",
            "E": "Registra a qualidade das bases e gera muitos falsos positivos."
        },
        "correct": "D",
        "explanation": "A correta é a D porque o formato BED define intervalos cromossômicos por coordenadas numéricas. As outras falham pois: A é para finanças, B para bioimagem, C para linguística e E para métricas de qualidade.",
        "difficulty": "fácil"
    },
    {
        "id": 1532,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Em Bioinformática, o termo 'De Novo Assembly' (Montagem de Novo) se refere a:",
        "options": {
            "A": "Refazer uma PCR falha utilizando alto poder de processamento.",
            "B": "Atualizar softwares para novas versões com anotação de bancos.",
            "C": "Montar um genoma do zero unindo reads sem usar referência.",
            "D": "Substituir DNA por RNA em processos de modelagem biológica.",
            "E": "Adquirir hardware novo para suportar análises de larga escala."
        },
        "correct": "C",
        "explanation": "A correta é a C pois a montagem de novo reconstrói o genoma sem auxílio de guia. As outras falham pois: A é processo laboratorial, B é manutenção de software, D é modelagem bioquímica e E é aquisição física.",
        "difficulty": "fácil"
    },
    {
        "id": 1533,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "No VCF, o genótipo '0/1' e o genótipo '1/1' indicam, respectivamente, o estado de uma mutação no paciente. O que eles significam?",
        "options": {
            "A": "0/1 indica paciente sadio e 1/1 indica óbito por falha geral.",
            "B": "0/1 é mutação no cromossomo X e 1/1 é mutação no cromossomo Y.",
            "C": "0/1 é heterozigoto (uma cópia mutada); 1/1 é homozigoto mutado.",
            "D": "Diferencia o sexo biológico masculino e feminino em bancos.",
            "E": "0/1 indica tumor benigno e 1/1 indica malignidade celular."
        },
        "correct": "C",
        "explanation": "A correta é a C pois o 0 representa referência e o 1 o alelo variante em diploidia. As outras falham pois: A prediz prognóstico clínico, B refere-se a cromossomos sexuais, D à identificação de gênero e E à classificação oncológica.",
        "difficulty": "fácil"
    },
    {
        "id": 1534,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "Por que as variantes de DNA (Mutações) encontradas no genoma de um tumor raramente são passadas para os filhos desse paciente?",
        "options": {
            "A": "Tumores não possuem DNA e exigem normalização de dados brutos.",
            "B": "Mutações não são herdáveis por limitações algorítmicas de base.",
            "C": "São mutações somáticas (corpo), não germinativas (herança).",
            "D": "O RNA protege o feto e exige indexação prévia para busca real.",
            "E": "O DNA fetal se autorrepara restringindo o uso em bancos reais."
        },
        "correct": "C",
        "explanation": "A correta é a C pois apenas mutações em linhagem germinativa são herdáveis. As outras falham pois: A nega a biologia tumoral, B culpa o software, D inventa proteção pelo RNA e E foca em reparo fetal.",
        "difficulty": "fácil"
    },
    {
        "id": 1535,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "O que a sigla 'MAF' (Minor Allele Frequency) representa nos bancos de dados genômicos populacionais?",
        "options": {
            "A": "Quantidade de servidores e anotação em bancos de dados grandes.",
            "B": "Valor monetário do gene após normalização de algoritmos locais.",
            "C": "Maior afinidade frequente em modelos de filtros de qualidade.",
            "D": "Mutação acelerada falha com alto processamento em clusters HPC.",
            "E": "Frequência do alelo menos comum para filtrar variantes raras."
        },
        "correct": "E",
        "explanation": "A correta é a E pois a MAF quantifica quão rara é uma variante na população. As outras falham pois: A foca em servidores, B em custos, C em afinidade química e D em processamento computacional.",
        "difficulty": "médio"
    },
    {
        "id": 1536,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "No terminal do sistema Linux, o que o comando 'cd' (Change Directory) faz?",
        "options": {
            "A": "Exibe o horário do sistema e exige anotação de referência.",
            "B": "Compacta arquivos de dados gerando erros se não corrigidos.",
            "C": "Deleta pastas do sistema gerando falsos positivos no processo.",
            "D": "Reproduz mídias de CD-ROM exigindo alto processamento em HPC.",
            "E": "Navega entre diretórios, permitindo entrar ou sair de pastas."
        },
        "correct": "E",
        "explanation": "A correta é a E porque o comando altera o diretório de trabalho atual. As outras falham pois: A exibe data, B compacta dados, C exclui arquivos e D refere-se a hardware obsoleto.",
        "difficulty": "fácil"
    },
    {
        "id": 1537,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "Qual destas linguagens de programação foi criada por estatísticos, para estatísticos, e é hoje o padrão ouro em Bioinformática para desenhar gráficos e análises matemáticas?",
        "options": {
            "A": "A linguagem 'R'.",
            "B": "HTML.",
            "C": "Java.",
            "D": "CSS.",
            "E": "C++."
        },
        "correct": "A",
        "explanation": "A correta é a A pois o R foi desenvolvido especificamente para análises estatísticas e gráficas. As outras falham pois: B cria sites, C é linguagem geral, D estiliza páginas e E é de baixo nível.",
        "difficulty": "fácil"
    },
    {
        "id": 1538,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "No Linux, o comando 'grep' tem uma função incrivelmente útil para pesquisar dentro de arquivos de DNA gigantescos. Ele serve para:",
        "options": {
            "A": "Traduz sequências de DNA em modelos de larga escala global.",
            "B": "Exclui arquivos do disco aumentando o consumo de recursos.",
            "C": "Filtra e exibe linhas que contêm um padrão ou texto específico.",
            "D": "Descompacta arquivos zip reduzindo o poder preditivo do app.",
            "E": "Exibe configurações de rede exigindo processamento em cluster."
        },
        "correct": "C",
        "explanation": "A correta é a C pois o comando grep filtra padrões de texto em arquivos. As outras falham pois: A traduz sequências, B exclui dados, D descompacta arquivos e E configura redes.",
        "difficulty": "fácil"
    },
    {
        "id": 1539,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "O que um bioinformata quer dizer quando fala sobre 'Pipeline' de análise?",
        "options": {
            "A": "Tipo de impressora que gera falsos positivos estatísticos.",
            "B": "Cabo de rede para clusters que restringe o uso de big data.",
            "C": "Marca de encanamento que exige indexação prévia de dados.",
            "D": "Linguagem de programação russa que distorce as frequências.",
            "E": "Fluxo automatizado onde a saída de um é a entrada do próximo."
        },
        "correct": "E",
        "explanation": "A correta é a E pois pipelines representam fluxos automatizados de processamento de dados. As outras falham pois: A é impressora, B cabo físico, C encanamento e D idioma russo.",
        "difficulty": "fácil"
    },
    {
        "id": 1540,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "O caractere Pipe '|' (barra reta vertical) no terminal do Linux faz uma das mágicas mais fortes da bioinformática. O que ele executa?",
        "options": {
            "A": "Trava o sistema operacional inviabilizando a integração.",
            "B": "Deleta arquivos ocultos utilizando filtros de qualidade.",
            "C": "Reinicia o kernel do Linux distorcendo dados observados.",
            "D": "Direciona a saída de um comando para a entrada do próximo.",
            "E": "Gera gráficos no terminal exigindo anotação de referência."
        },
        "correct": "D",
        "explanation": "A correta é a D pois o Pipe conecta a saída de um comando à entrada do próximo. As outras falham pois: A trava sistema, B deleta ocultos, C reinicia kernel e E gera gráficos.",
        "difficulty": "fácil"
    },
    {
        "id": 1541,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "Em programação Python, o que é a famosa biblioteca 'Pandas' e por que a usamos o tempo todo?",
        "options": {
            "A": "Biblioteca de manipulação de dados em tabelas (DataFrames).",
            "B": "Simulador de jogos eletrônicos que gera erros de montagem.",
            "C": "Pacote de proteção ambiental que ajusta parâmetros técnicos.",
            "D": "Software de modelagem lunar 3D com filtros de qualidade.",
            "E": "Motor de cálculo astrofísico que exige bancos de referência."
        },
        "correct": "A",
        "explanation": "A correta é a A pois Pandas é a biblioteca principal para manipulação de tabelas em Python. As outras falham pois: B simula jogos, C proteção ambiental, D modelagem 3D e E astrofísica.",
        "difficulty": "médio"
    },
    {
        "id": 1542,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "Para que serve a ferramenta Git e a plataforma GitHub na rotina do laboratório digital?",
        "options": {
            "A": "Compressor de vídeos para clusters de processamento rápido.",
            "B": "Servidor de e-mails para grandes bancos de dados em nuvem.",
            "C": "Plataforma de pirataria musical com ajuste de áudio técnico.",
            "D": "Ferramentas para controle de versão e colaboração em código.",
            "E": "Alinhador de DNA mitocondrial com detecção de artefatos."
        },
        "correct": "D",
        "explanation": "A correta é a D pois Git gerencia versões de código enquanto GitHub permite colaboração. As outras falham pois: A comprime vídeo, B servidor e-mail, C pirataria e E alinhamento DNA.",
        "difficulty": "fácil"
    },
    {
        "id": 1543,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "Muitos pipelines exigem criar um 'Container' usando ferramentas como Docker. Qual é o conceito fácil de Container?",
        "options": {
            "A": "Máquina de síntese de DNA que exige normalização de dados.",
            "B": "Pacote que isola o software para rodar em qualquer máquina.",
            "C": "Arquivo de texto encriptado que gera falsos positivos reais.",
            "D": "Dispositivo físico de segurança que exige indexação local.",
            "E": "Recipiente de descarte baseado em modelos probabilísticos."
        },
        "correct": "B",
        "explanation": "A correta é a B pois containers isolam softwares e dependências para rodarem em qualquer lugar. As outras falham pois: A sintetiza DNA, C encripta texto, D hardware físico e E descarte.",
        "difficulty": "fácil"
    },
    {
        "id": 1544,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "Ao tentar rodar um script (`./meu_script.sh`), o Linux responde 'Permission denied' (Permissão negada). Qual comando simples resolve esse erro dizendo ao Linux que o arquivo é seguro para executar?",
        "options": {
            "A": "rm arquivo.",
            "B": "chmod +x meu_script.sh.",
            "C": "cat meu_script.sh.",
            "D": "cd arquivo.",
            "E": "mkdir permissao."
        },
        "correct": "B",
        "explanation": "A correta é a B pois chmod +x atribui permissão de execução ao arquivo. As outras falham pois: A remove arquivos, C lê texto, D muda pasta e E cria diretório.",
        "difficulty": "fácil"
    },
    {
        "id": 1545,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "O Jupyter Notebook é extremamente popular entre bioinformatas. Sua principal característica é:",
        "options": {
            "A": "Editor de planilhas Office que exige anotação de dados.",
            "B": "Descompressor de arquivos raros com alto consumo de HPC.",
            "C": "Tradutor de Python para R sem integração de dados extras.",
            "D": "Sequenciador portátil com detecção de artefatos de dados.",
            "E": "Ambiente interativo que une código, textos e visualização."
        },
        "correct": "E",
        "explanation": "A correta é a E pois Jupyter permite unir documentação, código e gráficos interativamente. As outras falham pois: A é planilha, B descompressor, C tradutor e D sequenciador.",
        "difficulty": "fácil"
    },
    {
        "id": 1546,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "O comando `head arquivo.txt` no terminal do Linux ajuda o analista a economizar tempo fazendo o que?",
        "options": {
            "A": "Apaga cabeçalhos de arquivos exigindo normalização bruta.",
            "B": "Renomeia a linha inicial restringindo a aplicação em bancos.",
            "C": "Compacta o início do arquivo gerando erros estatísticos.",
            "D": "Exibe a data do HD exigindo indexação prévia de busca.",
            "E": "Exibe as primeiras 10 linhas para visualização rápida."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o comando head visualiza o topo de arquivos sem sobrecarregar a memória. As outras falham pois: A apaga cabeçalhos, B renomeia linhas, C compacta e D exibe data.",
        "difficulty": "fácil"
    },
    {
        "id": 1547,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "Quando você vê a extensão `.json` em APIs da saúde, esse arquivo contém o que?",
        "options": {
            "A": "Planilhas Excel encriptadas para grandes bancos de dados.",
            "B": "Texto estruturado em chaves e valores, leve e legível.",
            "C": "Gráficos circulares que exigem alto poder de processamento.",
            "D": "Drivers de vídeo para sistemas com limitações de hardware.",
            "E": "Arquivos binários pesados que reduzem o poder preditivo."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o JSON é um formato de texto leve baseado em chave-valor amplamente utilizado para troca de dados. As outras falham pois: A refere-se a planilhas proprietárias, C trata de representação gráfica, D descreve softwares de sistema e E refere-se a formatos binários não legíveis.",
        "difficulty": "fácil"
    },
    {
        "id": 1548,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "No terminal Linux, se você quiser redirecionar (salvar) o texto da tela e forçar que ele grave e sobrescreva o conteúdo criando um arquivo novo, você usa qual operador?",
        "options": {
            "A": "&&.",
            "B": "*.",
            "C": "<.",
            "D": ">.",
            "E": "|."
        },
        "correct": "D",
        "explanation": "A correta é a D porque o operador '>' redireciona a saída padrão sobrescrevendo o conteúdo do arquivo destino. As outras falham pois: A executa comandos condicionalmente, B é um caractere curinga, C redireciona a entrada e E conecta comandos via pipes.",
        "difficulty": "fácil"
    },
    {
        "id": 1549,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "O que o p-valor (p-value) de 0.01 em um teste de associação genética simples quer dizer para o pesquisador em essência básica?",
        "options": {
            "A": "Taxa de mortalidade celular em processamentos de cluster.",
            "B": "Probabilidade do resultado ser obra do acaso (hipótese).",
            "C": "Margem de erro do pesquisador que reduz o poder preditivo.",
            "D": "Índice de letalidade da doença após normalização de dados.",
            "E": "Taxa de falha do sequenciador que impede a montagem final."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o p-valor quantifica a probabilidade de observar os dados assumindo que a hipótese nula é verdadeira. As outras falham pois: A descreve biologia celular, C confunde com precisão, D foca em epidemiologia e E refere-se a erros de hardware.",
        "difficulty": "médio"
    },
    {
        "id": 1550,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "O que representa a 'Média' estatística de cobertura de um exame?",
        "options": {
            "A": "Valor inicial do exame reduzindo o poder do algoritmo.",
            "B": "Soma de todos os valores dividida pelo total de dados.",
            "C": "Diferença entre o maior e menor valor gerando artefatos.",
            "D": "Valor central da amostra aplicando filtros de qualidade.",
            "E": "Valor com maior frequência exigindo ajuste de software."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a média aritmética é calculada somando-se todos os valores e dividindo pelo número de observações. As outras falham pois: A é um ponto arbitrário, C descreve a amplitude, D define a mediana e E descreve a moda.",
        "difficulty": "fácil"
    },
    {
        "id": 1551,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "Em bioestatística, qual a vantagem da 'Mediana' sobre a 'Média' quando um dos resultados laboratórios deu um valor absurdamente anormal e gigantesco (um Outlier)?",
        "options": {
            "A": "A média é mais resistente a erros de impacto primário.",
            "B": "A mediana é robusta a outliers, evitando distorções.",
            "C": "A mediana remove valores altos em modelos complexos.",
            "D": "Ambas possuem o mesmo erro exigindo indexação prévia.",
            "E": "A mediana é metade do outlier restringindo a aplicação."
        },
        "correct": "B",
        "explanation": "A correta é a B porque a mediana, como medida de posição central, é menos sensível a valores extremos que a média. As outras falham pois: A inverte a lógica estatística, C sugere manipulação de dados, D nega a robustez da mediana e E inventa uma regra inexistente.",
        "difficulty": "fácil"
    },
    {
        "id": 1552,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "O que é 'Correlação' estatística na expressão de dois genes, A e B?",
        "options": {
            "A": "Indica que o gene é mutante reduzindo o poder preditivo.",
            "B": "Mede se a atividade de dois genes sobe de modo igual.",
            "C": "Define que genes possuem o mesmo tamanho em bases.",
            "D": "Significa que genes ocupam o mesmo cromossomo físico.",
            "E": "Indica que um gene inibe o outro exigindo anotação."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a correlação estatística indica como duas variáveis variam conjuntamente em termos de direção e força. As outras falham pois: A refere-se a mutações genéticas, C foca em tamanho físico, D descreve localização genômica e E define inibição biológica.",
        "difficulty": "fácil"
    },
    {
        "id": 1553,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "Na estatística e testes de hipóteses, a chamada 'Hipótese Nula (H0)' de uma pesquisa propõe a princípio que:",
        "options": {
            "A": "O novo tratamento apresenta eficácia superior ao controle.",
            "B": "Existe uma associação significativa entre as variáveis.",
            "C": "Não existe efeito, diferença ou relação entre os grupos.",
            "D": "Os resultados observados decorrem de erros de medição.",
            "E": "A variância populacional é idêntica à variância amostral."
        },
        "correct": "C",
        "explanation": "A correta é a C porque a Hipótese Nula (H0) postula que não existe diferença ou efeito real entre os grupos comparados. As outras falham pois: A e B descrevem a hipótese alternativa, D foca em erros técnicos e E refere-se a testes de variância.",
        "difficulty": "fácil"
    },
    {
        "id": 1554,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "O gráfico de 'Boxplot' (Diagrama de caixa) é rei em relatórios no R. A caixinha colorida no centro do gráfico representa onde se concentram:",
        "options": {
            "A": "Representa o universo total distorcendo frequências.",
            "B": "Exibe mutações em abordagens de modelos complexos.",
            "C": "Mostra os 5% piores resultados em bancos de dados.",
            "D": "Mostra onde 50% dos dados centrais se concentram.",
            "E": "Indica o desvio padrão restringindo o uso em labs."
        },
        "correct": "D",
        "explanation": "A correta é a D pois a caixa central do boxplot representa o Intervalo Interquartil, contendo os 50% centrais da distribuição. As outras falham pois: A ignora a estratificação, B confunde com análise biológica, C foca nos decis e E descreve dispersão absoluta.",
        "difficulty": "fácil"
    },
    {
        "id": 1555,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "O que o gráfico 'Volcano Plot' (Gráfico de Vulcão) exibe em estudos de genes?",
        "options": {
            "A": "Impacto geológico em genomas exigindo hardware HPC.",
            "B": "Relaciona a magnitude da mudança com a significância.",
            "C": "Exibe o peso dos pacientes exigindo normalização.",
            "D": "Representação nula que reduz o poder de filtros.",
            "E": "Mede a temperatura do hardware durante a indexação."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o Volcano Plot relaciona a significância estatística (p-valor) com a magnitude da mudança (Fold Change). As outras falham pois: A e E são interpretações literais erradas, C usa métricas clínicas e D é conceitualmente vago.",
        "difficulty": "fácil"
    },
    {
        "id": 1556,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "Em relação ao 'Erro Tipo I' em laudos de associação médica:",
        "options": {
            "A": "Ocorre quando a vacina não reage estatisticamente em mucosas.",
            "B": "Erro Tipo I: Falso Positivo ao afirmar relação causal inexistente.",
            "C": "Perda de provas científicas por falha técnica de armazenamento.",
            "D": "Erro computacional que aumenta recursos e controle de qualidade.",
            "E": "Diagnosticar pessoa doente como sadia via clusters de análise."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o Erro Tipo I é a rejeição de uma hipótese nula que é, na verdade, verdadeira (Falso Positivo). As outras falham pois: A descreve resposta imunológica, C é falha de TI, D é erro algorítmico e E descreve o Erro Tipo II.",
        "difficulty": "fácil"
    },
    {
        "id": 1557,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "A medida de 'Variância' em um grupo de dados nos ensina o quê?",
        "options": {
            "A": "Medição de pesos em farmácia com filtros de qualidade técnicos.",
            "B": "Dispersão dos dados em relação à média central do grupo estudado.",
            "C": "Ordem de chegada em UTI municipal sob condições basais isoladas.",
            "D": "Tamanho do arquivo digital em megabytes exigindo processamento.",
            "E": "Identificação de genoma animal com parâmetros de software locais."
        },
        "correct": "B",
        "explanation": "A correta é B pois a variância mede o quão dispersos os dados estão da média. As outras falham pois: A refere-se a medições físicas específicas de pesagem, C descreve fluxo logístico e não estatística de dispersão, D trata de armazenamento de bits sem relação estatística, E foca em software de genômica sem conceituar variabilidade.",
        "difficulty": "fácil"
    },
    {
        "id": 1558,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "No termo 'Fold-Change' comum na transcriptômica (RNA-seq), um valor FC = 2 significa que:",
        "options": {
            "A": "Aumento do tamanho físico cromossômico em processos de mitose.",
            "B": "Expressão gênica em um grupo sendo o dobro da vista no outro.",
            "C": "Morte de dois genes exigindo normalização de dados brutos.",
            "D": "Deleção de duas pastas no disco por erro de processamento.",
            "E": "Valor da prova zerado exigindo anotação com bancos externos."
        },
        "correct": "B",
        "explanation": "A correta é B porque FC=2 representa a duplicação da expressão de um gene. As outras falham pois: A descreve morfologia cromossômica e não níveis de transcrição, C confunde alteração de expressão com deleção ou morte gênica, D refere-se a erros de diretórios em sistemas operacionais, E trata de pontuação acadêmica em contexto totalmente diverso.",
        "difficulty": "fácil"
    },
    {
        "id": 1559,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "Em um gráfico de PCA (Análise de Componentes Principais), se as 'bolinhas' vermelhas (casos de câncer) ficarem amontoadas e bem distantes do cacho de 'bolinhas' verdes (sadios), o bioinformata conclui facilmente que:",
        "options": {
            "A": "Cura total de pacientes exigindo normalização e indexação.",
            "B": "Separação molecular clara entre grupos doentes e saudáveis.",
            "C": "Fracasso experimental do núcleo exigindo ajuste de software.",
            "D": "Travamento do computador na escala Y por falta de drivers.",
            "E": "Defeito nas cores RGB do monitor gerando falsos positivos."
        },
        "correct": "B",
        "explanation": "A correta é B pois a separação no PCA reflete diferenças moleculares significativas entre grupos. As outras falham pois: A confunde agrupamento estatístico com prognóstico clínico de cura, C interpreta incorretamente o sucesso da separação como erro experimental, D atribui padrões estatísticos a falhas de drivers do sistema, E confunde visualização de dados com falha física de hardware.",
        "difficulty": "fácil"
    },
    {
        "id": 1560,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "Por que as Análises de Expressão (DE) usam logaritmos base 2 (Log2) e não os números grandes reais puros das contagens das polimerases do RNA?",
        "options": {
            "A": "Limitação de programas que só aceitam números de zero a dez.",
            "B": "Nivela variações exponenciais de forma simétrica e visual.",
            "C": "Proibição legal de usar números inteiros em teses acadêmicas.",
            "D": "Melhora puramente estética do gráfico sem ganho analítico.",
            "E": "Ajuste para não afetar arquivos VCF via algoritmos de busca."
        },
        "correct": "B",
        "explanation": "A correta é B porque o Log2 permite visualização simétrica de dobras de expressão. As outras falham pois: A supõe limitações computacionais inexistentes em ferramentas de bioinformática, C inventa uma proibição legal sem qualquer fundamento acadêmico, D nega o valor matemático e estatístico real da transformação, E vincula a técnica a arquivos VCF de forma errônea.",
        "difficulty": "fácil"
    },
    {
        "id": 1561,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "O que o famoso gráfico 'Manhattan Plot' mostra e onde é gerado em peso em hospitais NGS?",
        "options": {
            "A": "Preço de imóveis em NY atrelados à obesidade global.",
            "B": "Exibe SNPs significativos em estudos genômicos GWAS.",
            "C": "Mapa geográfico do Google exigindo calibração técnica.",
            "D": "Peso fetal em gráfico 3D necessitando de anotação extra.",
            "E": "Batimento cardíaco em UTI exigindo normalização bruta."
        },
        "correct": "B",
        "explanation": "A correta é B porque o Manhattan Plot destaca SNPs associados a fenótipos em GWAS. As outras falham pois: A faz uma interpretação literal e imobiliária do nome gráfico, C confunde representação genômica com sistemas de geolocalização por satélite, D refere-se a monitoramento obstétrico sem relação com genômica, E descreve exames de cardiologia clínica e não estudos associativos.",
        "difficulty": "médio"
    },
    {
        "id": 1562,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "O uso de Jalecos fechados até o pescoço e de material que não pega fogo facilmente (algodão puro) no lugar de poliéster inflamável de supermercados nas capelas protege contra:",
        "options": {
            "A": "Afasta insetos macro e valida métodos técnicos de bancada.",
            "B": "Evita que o tecido derreta na pele em acidentes com fogo.",
            "C": "Proteção contra chuva urbana e adequação aos padrões lab.",
            "D": "Conforto para o técnico em amostras severamente degradadas.",
            "E": "Filtro de ar respirado com sensibilidade a variações de pH."
        },
        "correct": "B",
        "explanation": "A correta é B pois o algodão não derrete e adere à pele em chamas. As outras falham pois: A confunde proteção química térmica com controle biológico de insetos, C sugere que o jaleco serve como vestimenta para intempéries, D prioriza o conforto subjetivo em detrimento da segurança normativa, E atribui ao jaleco funções de filtragem de ar inexistentes.",
        "difficulty": "fácil"
    },
    {
        "id": 1563,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "Na genética global, qual continente guarda o título de berço ancestral populacional absoluto (onde está abrigada até os dias modernos quase toda a diversidade pesada natural de SNPs do genoma humano da história na terra sem gargalos evolutivos de perda nas travessias antigas das terras e glaciações)?",
        "options": {
            "A": "Polo Norte isolado com artefatos que distorcem as frequências.",
            "B": "África: berço com maior diversidade genética e SNPs da espécie.",
            "C": "Oceania e ilhas remotas com barreiras de qualidade analítica.",
            "D": "América do Sul indígena em cenários de recursos limitados.",
            "E": "Europa viking com limitações de algoritmos preditivos locais."
        },
        "correct": "B",
        "explanation": "A correta é B porque a África retém a maior diversidade genética humana ancestral. As outras falham pois: A foca em região de baixa densidade e diversidade humana, C ignora os efeitos fundadores que reduziram a diversidade oceânica, D desconsidera os gargalos migratórios ocorridos na colonização das Américas, E refere-se a populações que passaram por fortes reduções genéticas.",
        "difficulty": "fácil"
    },
    {
        "id": 1564,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "Por que se utiliza o programa e extensão 'GZIP' ou 'BGZF' (Compressão tipo .gz no Linux) compulsivamente em arquivos gigantes do VCF e FASTQ sem exceções?",
        "options": {
            "A": "Criptografia de senhas para grandes bancos de dados médicos.",
            "B": "Redução drástica do tamanho de arquivos para economia de HD.",
            "C": "Injeção de proteínas via algoritmos em modelos estatísticos.",
            "D": "Alteração de cores no terminal Bash para reduzir o poder.",
            "E": "Inserção de vírus lógicos ocultos exigindo normalização."
        },
        "correct": "B",
        "explanation": "A correta é B pois a compressão é essencial para gerenciar volumes massivos de dados. As outras falham pois: A confunde técnicas de compressão com protocolos de segurança criptográfica, C propõe uma relação inexistente entre arquivos e síntese proteica, D supõe que a compressão serve para alterar interface visual, E associa erroneamente extensões de compressão com malware ou vírus.",
        "difficulty": "fácil"
    },
    {
        "id": 1565,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Onde devem ser descartadas OBRIGATORIAMENTE luvas nitrílicas após uso laboratorial contendo soro infectado por arboviroses com risco no posto público BPL de testagem biomolecular e sangue humano nos esfregaços de placa do LIMS na mesa BPL limpa final?",
        "options": {
            "A": "Reutilização de luvas após fervura para eficácia analítica.",
            "B": "Lixo Infectante (Saco Branco) para posterior autoclave.",
            "C": "Descarte em lixão comum com otimização de protocolo livre.",
            "D": "Descarte em pia com cloro seguindo padrões de segurança.",
            "E": "Sacos de papel pretos com sensibilidade a variações de pH."
        },
        "correct": "B",
        "explanation": "A correta é B porque resíduos infectantes exigem descarte específico em sacos brancos. As outras falham pois: A viola normas básicas de biossegurança ao sugerir reutilização, C gera risco biológico gravíssimo para o sistema público de lixo, D causa contaminação ambiental e descumpre protocolos de descarte sólido, E utiliza recipientes inadequados para o manejo de resíduos biológicos.",
        "difficulty": "fácil"
    },
    {
        "id": 1566,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "A Anonimização no LGPD diz que não se deve ter CPFs em planilhas médicas. O que é uma Pseudo-anonimização em diferença do primeiro conceito estrito do SUS brasileiro no dado sensível oncológico da planilha de acesso e Excel em pastas online?",
        "options": {
            "A": "Divulgar listas sem CPFs exigindo anotação cruzada externa.",
            "B": "Substituir nomes por IDs e guardar a chave em local seguro.",
            "C": "Pintar nomes com fonte invisível gerando falsos positivos.",
            "D": "Falsificar identidade civil mitigando falhas com filtros.",
            "E": "Banimento integral pela LGPD exigindo indexação prévia."
        },
        "correct": "B",
        "explanation": "A correta é B pois a pseudoanonimização permite rastrear dados via chave protegida. As outras falham pois: A descreve anonimização incompleta sem o controle técnico necessário, C propõe uma medida visual inútil contra processamento de dados, D sugere falsidade ideológica que é crime e não técnica, E afirma falsamente que a LGPD proíbe tratamentos de dados.",
        "difficulty": "fácil"
    },
    {
        "id": 1567,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Para extrair o DNA do núcleo humano o que se utiliza em soluções químicas orgânicas tradicionais como fenoladas nas misturas e métodos de separação na química rotineira orgânica e pesada dos técnicos da equipe antes de puxar do robô?",
        "options": {
            "A": "Fervura em estufa a gás com calibração técnica de métodos.",
            "B": "Uso de detergentes para romper membranas e liberar o DNA.",
            "C": "Adição de vírus bacteriófagos na fase pré-analítica local.",
            "D": "Compressão mecânica com validação de métodos ortogonais.",
            "E": "Uso de gelo seco com calibração de pH e controles de reação."
        },
        "correct": "B",
        "explanation": "A correta é a B pois detergentes rompem as membranas lipídicas celulares para liberar o DNA. As outras falham pois: A refere-se a desnaturação por calor, C trata de infecção viral, D é um método físico insuficiente e E foca em conservação de amostras.",
        "difficulty": "fácil"
    },
    {
        "id": 1568,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O sequenciador Illumina emite as fotografias da base fluorescente numa corrida da lâmina (Flow cell). Qual a sigla do método enzimático básico dessa reação no qual ele tira e registra cada nova base incorporada fotográfica uma a uma a cada ciclo sem correr e parar o processo?",
        "options": {
            "A": "Hibridização a vácuo com ressonância controlada.",
            "B": "Sequencing By Synthesis: registro fotográfico de bases.",
            "C": "Técnica sem câmeras exigindo calibração técnica.",
            "D": "Método Sanger de capilar com adequação de padrões.",
            "E": "Massometria proteica focal com validação de bancada."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o Sequencing By Synthesis (SBS) registra fluorescência base a base em tempo real. As outras falham pois: A descreve processos inexistentes, C ignora a necessidade de câmeras, D é o método clássico de eletroforese e E analisa massa de moléculas.",
        "difficulty": "médio"
    },
    {
        "id": 1569,
        "area": "Bioinformática",
        "subject": "Bioinformática e análise genômica",
        "text": "O formato que se tornou onipresente em projetos de mutações clínicas entre consórcios SUS médicos do VCF e laudos. O que é o arquivo VCF do ponto da base crua médica legível analítica textual e estatística para doenças oncológicas ou de conselhos clínicos normais de genética atestadas na rotina unificada hospitalar biomédica?",
        "options": {
            "A": "Imagens TIFF cruas com artefatos que distorcem frequências.",
            "B": "Tabela que lista apenas variantes em relação à referência.",
            "C": "Atestado de vacinação exigindo alto processamento local.",
            "D": "Laudo em PDF sem codificações nativas exigindo indexação.",
            "E": "Vídeo clínico de endoscopia com normalização de dados."
        },
        "correct": "B",
        "explanation": "A correta é a B porque o VCF armazena variações genéticas comparadas a um genoma referência. As outras falham pois: A é formato de imagem, C refere-se a registros médicos, D é documento estático e E é mídia audiovisual.",
        "difficulty": "médio"
    },
    {
        "id": 1570,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Qual é o principal objetivo da Lei Geral de Proteção de Dados (LGPD) no contexto hospitalar e genômico?",
        "options": {
            "A": "Obrigar uso de senhas curtas em bancos de dados de saúde.",
            "B": "Regular a coleta e uso de dados para proteger a privacidade.",
            "C": "Proibir exames de DNA reduzindo o poder preditivo técnico.",
            "D": "Garantir internet rápida em postos com ajuste de software.",
            "E": "Proteção contra vírus em clusters de alto processamento."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a LGPD estabelece normas para a privacidade e tratamento de dados pessoais. As outras falham pois: A sugere insegurança digital, C impediria a prática médica, D trata de infraestrutura e E refere-se a ferramentas de software.",
        "difficulty": "médio"
    },
    {
        "id": 1571,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "O que é 'Phishing' no dia a dia da segurança da informação de um laboratório?",
        "options": {
            "A": "Compactação VCF em modelos estatísticos de análise.",
            "B": "E-mail falso para enganar o usuário e roubar senhas.",
            "C": "Uso de peixes em testes genômicos com normalização.",
            "D": "Quebra física de cabos mitigada por filtros de qualidade.",
            "E": "Programa de limpeza restrito a grandes bancos de dados."
        },
        "correct": "B",
        "explanation": "A correta é a B porque o Phishing utiliza mensagens enganosas para obter dados sensíveis ilegalmente. As outras falham pois: A é técnica de bioinformática, C confunde o nome com biologia, D é dano físico e E é manutenção de sistemas.",
        "difficulty": "fácil"
    },
    {
        "id": 1572,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Para acessar o sistema do Genomas SUS, o bioinformata digita sua senha e, em seguida, precisa inserir um código de 6 dígitos que chega no seu celular. Esse processo é conhecido como:",
        "options": {
            "A": "Firewall dinâmico além disso,  sendo necessário ajustar os parâmetros no software utilizado.",
            "B": "Backup redundante,  cujo impacto é avaliado durante o controle de qualidade primário.",
            "C": "Criptografia de ponta a ponta.",
            "D": "Autenticação em Duas Etapas (2FA / MFA).",
            "E": "Protocolo HTTPS o que resulta em  uma abordagem comum em análises de modelos probabilísticos."
        },
        "correct": "D",
        "explanation": "A correta é a D pois o uso de senha e código adicional configura múltiplos fatores de autenticação. As outras falham pois: A filtra tráfego de rede, B protege contra perda de dados, C cifra informações e E garante transporte seguro.",
        "difficulty": "fácil"
    },
    {
        "id": 1573,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Na segurança de dados, o conceito da regra de 'Privilégio Mínimo' (Principle of Least Privilege) significa que:",
        "options": {
            "A": "Gasto mínimo com segurança gerando erros estatísticos.",
            "B": "Acesso limitado apenas ao necessário para a função.",
            "C": "Restrição de acesso aos pacientes em grandes bancos.",
            "D": "Uso de apenas um computador com dados normalizados.",
            "E": "Compartilhamento de senhas da diretoria com a equipe."
        },
        "correct": "B",
        "explanation": "A correta é a B pois limita acessos apenas ao estritamente necessário para cada função laboral. As outras falham pois: A trata de economia financeira, C exclui usuários legítimos, D foca em hardware e E compromete a segurança individual.",
        "difficulty": "fácil"
    },
    {
        "id": 1574,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Qual é a principal razão pela qual o uso de Pendrives pessoais é estritamente PROIBIDO em laboratórios que lidam com genomas e dados do SUS?",
        "options": {
            "A": "Alteração de formatos em grandes bancos de dados.",
            "B": "Risco de perda física e transmissão de vírus na rede.",
            "C": "Alto consumo de energia USB exigindo dados extras.",
            "D": "Critério estético mitigado por filtros de qualidade.",
            "E": "Lentidão do sistema exigindo indexação para busca."
        },
        "correct": "B",
        "explanation": "A correta é a B devido ao alto risco de infecção por vírus e vazamento de dados sensíveis. As outras falham pois: A confunde hardware com software, C menciona consumo elétrico irrelevante, D foca em aparência e E refere-se a desempenho.",
        "difficulty": "médio"
    },
    {
        "id": 1575,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Se você olhar para a barra de endereços do seu navegador ao acessar o sistema de laudos do SUS, verá um 'cadeado fechado' e as letras HTTPS. O que o 'S' final significa?",
        "options": {
            "A": "Referência à Saúde com artefatos em modelos locais.",
            "B": "Indica conexão criptografada e protegida contra espiões.",
            "C": "Referência ao Sistema com limitações computacionais.",
            "D": "Referência ao Servidor com necessidade de anotação.",
            "E": "Referência à Sincronia com impacto no controle inicial."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o 'S' indica que a conexão é criptografada via protocolo SSL/TLS. As outras falham pois: A é sigla de saúde, C refere-se a sistema, D foca no servidor e E trata de sincronização.",
        "difficulty": "fácil"
    },
    {
        "id": 1576,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "O que é um software de 'Ransomware'?",
        "options": {
            "A": "Firewall de rede com necessidade de anotação cruzada.",
            "B": "Programa de leitura rápida com redução de poder local.",
            "C": "Vírus que sequestra dados e exige resgate financeiro.",
            "D": "Antivírus gratuito com limitações em grandes bancos.",
            "E": "Compactador de arquivos com ajuste em software nativo."
        },
        "correct": "C",
        "explanation": "A correta é a C pois este malware sequestra arquivos via criptografia exigindo pagamento para liberação. As outras falham pois: A é barreira defensiva, B é utilitário de leitura, D combate pragas e E reduz tamanho de arquivos.",
        "difficulty": "fácil"
    },
    {
        "id": 1577,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Qual destas práticas é uma Política de 'Mesa Limpa' (Clear Desk Policy) exigida pela Segurança da Informação no laboratório?",
        "options": {
            "A": "Limpeza física de poeira com aumento de recursos.",
            "B": "Organização de senhas e exames para evitar exposição.",
            "C": "Proibição de alimentação com impacto na qualidade.",
            "D": "Higienização das mãos com necessidade de anotação.",
            "E": "Uso de desinfetantes em bancadas em grandes bancos."
        },
        "correct": "B",
        "explanation": "A correta é a B pois evita a exposição indevida de dados sensíveis físicos ou digitais. As outras falham pois: A foca em limpeza doméstica, C é regra alimentar, D trata de biossegurança e E é sanitização química.",
        "difficulty": "fácil"
    },
    {
        "id": 1578,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Para garantir a 'Disponibilidade' dos dados em caso de queima do servidor local, um laboratório faz Backups diários. Qual o conceito correto de Backup?",
        "options": {
            "A": "Tradução de dados gerando falsos positivos na análise.",
            "B": "Cópia de segurança em local independente e protegido.",
            "C": "Compactação em pastas com alto uso de processamento.",
            "D": "Exclusão de arquivos antigos exigindo normalização.",
            "E": "Mudança de formato VCF mitigada através de filtros."
        },
        "correct": "B",
        "explanation": "A correta é a B por definir backup como cópia de salvaguarda em local seguro. As outras falham pois: A confunde com análise, C foca em compressão, D apaga arquivos e E altera formatos genéticos.",
        "difficulty": "fácil"
    },
    {
        "id": 1579,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Em segurança de dados de saúde, a 'Trilha de Auditoria' (Audit Trail) é um recurso automático do sistema (LIMS) que tem a função de:",
        "options": {
            "A": "Bloqueio de tela com alto consumo de processamento.",
            "B": "Registro detalhado de acessos e modificações de dados.",
            "C": "Cálculo de valores com ajuste de parâmetros locais.",
            "D": "Exclusão de duplicatas com redução de poder preditivo.",
            "E": "Auditoria biológica com normalização de dados brutos."
        },
        "correct": "B",
        "explanation": "A correta é a B pois rastreia todas as modificações feitas nos registros do sistema. As outras falham pois: A é segurança de tela, C é processamento, D remove dados e E é auditoria laboratorial.",
        "difficulty": "fácil"
    },
    {
        "id": 1580,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "A Bioinformática na Nuvem (Cloud Computing, como AWS e Google Cloud) possui o modelo de 'Responsabilidade Compartilhada'. Isso quer dizer que:",
        "options": {
            "A": "Provedor foca na infraestrutura; usuário foca no dado.",
            "B": "Nuvem assume 100% dos riscos exigindo normalização.",
            "C": "Dados abertos ao público mitigados por filtros técnicos.",
            "D": "Divisão de custos com impacto no controle de qualidade.",
            "E": "Responsabilidade do paciente com indexação prévia."
        },
        "correct": "A",
        "explanation": "A correta é a A pois divide tarefas de proteção entre nuvem e laboratório contratante. As outras falham pois: B nega co-responsabilidade, C expõe dados, D foca em custos e E culpa o paciente.",
        "difficulty": "fácil"
    },
    {
        "id": 1581,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Por que conectar o notebook do hospital à rede de 'Wi-Fi Público' (de aeroportos ou cafeterias) para analisar genomas do SUS é uma grave falha de segurança?",
        "options": {
            "A": "Bateria acaba mais rápido com necessidade de anotação.",
            "B": "Vulnerabilidade a interceptação de dados por hackers.",
            "C": "Lentidão na geração de arquivos exigindo normalização.",
            "D": "Risco de dano físico ao HD com ajuste de software local.",
            "E": "Perda de resolução de tela com impacto na qualidade."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o tráfego em redes abertas pode ser facilmente monitorado. As outras falham pois: A é consumo, C é performance, D é hardware e E é exibição visual.",
        "difficulty": "fácil"
    },
    {
        "id": 1582,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "A técnica de 'Anonimização' citada na LGPD tem a principal função de:",
        "options": {
            "A": "Proibir exames excedentes e limitar recursos computacionais.",
            "B": "Apagar bases de dados após trinta dias por restrição de hardware.",
            "C": "Criptografar senhas de e-mail para reduzir erros estatísticos.",
            "D": "Alterar o genoma de referência para distorcer frequências de dados.",
            "E": "Desvincular irreversivelmente um dado do titular a que ele se refere."
        },
        "correct": "E",
        "explanation": "A correta é a E pois remove o vínculo entre o dado sensível e o indivíduo. As outras falham pois: A limita processamento, B apaga registros, C protege senhas e D corrompe a referência científica.",
        "difficulty": "fácil"
    },
    {
        "id": 1583,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Um funcionário encontrou um Pendrive caído no estacionamento do hospital e conectou no computador do laboratório para ver de quem era. Qual regra de segurança ele violou?",
        "options": {
            "A": "Regra de esterilização química e normalização de dados brutos.",
            "B": "Proibição de conectar dispositivos USB desconhecidos (Baiting).",
            "C": "Regras de desperdício de energia e filtros de qualidade de rede.",
            "D": "Assinatura obrigatória do TCLE e ajuste de parâmetros de software.",
            "E": "Uso indevido de internet e processamento em clusters de alto desempenho."
        },
        "correct": "B",
        "explanation": "A correta é a B pois mitiga o risco de infecção por baiting ou USB malicioso. As outras falham pois: A é biossegurança, C é sustentabilidade, D é bioética e E é infraestrutura.",
        "difficulty": "fácil"
    },
    {
        "id": 1584,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "A sigla 'VPN' (Virtual Private Network) é obrigatória no trabalho remoto da bioinformática. O que ela faz?",
        "options": {
            "A": "Limpa vírus locais e avalia o impacto do controle de qualidade.",
            "B": "Cria um túnel criptografado seguro para acesso remoto ao servidor.",
            "C": "Desliga o computador institucional via acesso remoto por anotação.",
            "D": "Converte formatos BAM para VCF e exige normalização de dados.",
            "E": "Aumenta a velocidade da internet e ajusta parâmetros de software."
        },
        "correct": "B",
        "explanation": "A correta é a B por criar um canal privado e cifrado de comunicação externa. As outras falham pois: A limpa ameaças, C controla energia, D converte bioinformática e E promete velocidade.",
        "difficulty": "fácil"
    },
    {
        "id": 1585,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "O que é 'Engenharia Social' no roubo de dados médicos?",
        "options": {
            "A": "Quebrar o firewall com força bruta e modelos probabilísticos.",
            "B": "Compartilhar dados autorizados e gerar falsos positivos técnicos.",
            "C": "Construir robôs para integração de dados adicionais e montagem.",
            "D": "Enganar pessoas psicologicamente para obter dados sigilosos.",
            "E": "Programar códigos em Python para indexação e busca otimizada."
        },
        "correct": "D",
        "explanation": "A correta é a D pois foca em enganar o elo humano do sistema de segurança. As outras falham pois: A é ataque técnico, B é lícito, C é montagem genômica e E é programação.",
        "difficulty": "fácil"
    },
    {
        "id": 1586,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "A política de bloqueio automático de tela (Screen Lock após 5 minutos ocioso) serve para:",
        "options": {
            "A": "Economizar energia da tela e otimizar processamento em clusters.",
            "B": "Apagar o cache do navegador e reduzir o poder preditivo algorítmico.",
            "C": "Baixar a temperatura da CPU e evitar distorção de frequências.",
            "D": "Impedir acesso não autorizado quando o usuário se afasta da mesa.",
            "E": "Aumentar a memória RAM e realizar anotação cruzada de referência."
        },
        "correct": "D",
        "explanation": "A correta é a D por impedir o uso da estação de trabalho por pessoas próximas. As outras falham pois: A economiza luz, B é limpeza de sistema, C é resfriamento e E é memória.",
        "difficulty": "fácil"
    },
    {
        "id": 1587,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "O que a DPO (Data Protection Officer / Encarregado de Dados) faz na instituição do Genomas SUS?",
        "options": {
            "A": "Atuar na recepção e gerenciar o consumo de recursos computacionais.",
            "B": "Instalar sistemas operacionais e ajustar parâmetros de software.",
            "C": "Realizar extração de DNA e anotação cruzada em bancos de dados.",
            "D": "Garantir legalmente que a instituição cumpra as regras da LGPD.",
            "E": "Assinar cheques e realizar a indexação prévia para buscas de tempo."
        },
        "correct": "D",
        "explanation": "A correta é a D pois o DPO assegura a conformidade institucional à LGPD. As outras falham pois: A e B são suporte, C laboratorial e E administrativa.",
        "difficulty": "fácil"
    },
    {
        "id": 1588,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Ao descartar servidores e HDs antigos do laboratório genômico, a equipe de TI deve adotar qual medida?",
        "options": {
            "A": "Formatar rapidamente e doar para reuso em centros de processamento.",
            "B": "Realizar a destruição física ou lógica definitiva dos dados sensíveis.",
            "C": "Apagar pastas manualmente e encaminhar para o lixo reciclável comum.",
            "D": "Vender os discos usados para reverter lucros ao caixa do laboratório.",
            "E": "Armazenar discos abertos no almoxarifado sem ajuste de parâmetros."
        },
        "correct": "B",
        "explanation": "A correta é a B pois impede a recuperação de dados sensíveis por terceiros. As outras falham pois: A, C, D e E permitem vazamento de informações.",
        "difficulty": "fácil"
    },
    {
        "id": 1589,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Na proteção do servidor Linux, manter os softwares e sistemas operacionais sempre 'atualizados' (Patching) é essencial porque:",
        "options": {
            "A": "Garantir a leitura de DNA e evitar erros estatísticos sistemáticos.",
            "B": "Atualizar a interface visual e restringir o acesso a grandes bancos.",
            "C": "Evitar o consumo excessivo de energia e otimizar a indexação prévia.",
            "D": "Manter a estética do software e mitigar falhas de normalização.",
            "E": "Corrigir falhas de segurança e vulnerabilidades recém-descobertas."
        },
        "correct": "E",
        "explanation": "A correta é a E pois elimina vulnerabilidades exploráveis por agentes maliciosos. As outras falham pois: A, B, C e D não impactam a segurança.",
        "difficulty": "fácil"
    },
    {
        "id": 1590,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Qual é o nome do sistema de defesa (muro) de uma rede de computadores que filtra e bloqueia acessos não autorizados vindos da internet tentando acessar os dados do laboratório?",
        "options": {
            "A": "Bluetooth.",
            "B": "Firewall.",
            "C": "Navegador.",
            "D": "Ransomware.",
            "E": "Phishing."
        },
        "correct": "B",
        "explanation": "A correta é a B pois filtra conexões externas não autorizadas na rede. As outras falham pois: A e C são ferramentas, D e E ataques.",
        "difficulty": "fácil"
    },
    {
        "id": 1591,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Qual a recomendação correta para a criação de uma senha forte no sistema LIMS de Genômica?",
        "options": {
            "A": "Utilizar datas de nascimento e evitar montagens complexas de dados.",
            "B": "Usar palavras curtas e mitigar filtros de qualidade de software.",
            "C": "Usar o próprio nome e realizar normalização prévia de dados brutos.",
            "D": "Utilizar sequências simples como 'senha123' e distorcer frequências.",
            "E": "Criar senhas longas com caracteres diversos e evitar a reutilização."
        },
        "correct": "E",
        "explanation": "A correta é a E pois a entropia dificulta ataques de força bruta. As outras falham pois: A, B, C e D usam padrões previsíveis.",
        "difficulty": "fácil"
    },
    {
        "id": 1592,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "O que a propriedade de 'Não-Repúdio' garante num sistema de saúde logado por biometria?",
        "options": {
            "A": "Garantir a satisfação do paciente e inviabilizar montagens extras.",
            "B": "Impedir o desligamento do sistema e mitigar artefatos de frequência.",
            "C": "Garantir que um autor não possa negar a autoria de uma ação realizada.",
            "D": "Assegurar o repúdio a falhas técnicas e normalizar os dados brutos.",
            "E": "Garantir que exames sejam indolores e gerar falsos positivos de controle."
        },
        "correct": "C",
        "explanation": "A correta é a C pois vincula legalmente a ação ao seu autor original. As outras falham pois: A e E são clínicas, B e D irrelevantes.",
        "difficulty": "fácil"
    },
    {
        "id": 1593,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Se um incidente de segurança grave ocorrer (ex: invasão hacker e cópia de 10.000 VCFs de pacientes), a LGPD obriga a instituição do Genomas SUS a:",
        "options": {
            "A": "Ocultar o caso para preservar a imagem e normalizar dados brutos.",
            "B": "Interromper a energia e manter sigilo sobre limitações computacionais.",
            "C": "Notificar a ANPD e os pacientes afetados sobre o incidente de dados.",
            "D": "Processar a equipe médica e utilizar abordagens de modelos variados.",
            "E": "Avisar polícias internacionais e realizar anotação cruzada de dados."
        },
        "correct": "C",
        "explanation": "A correta é a C pois a LGPD exige transparência em vazamentos de dados. As outras falham pois: A e B são ilegais, D e E incorretas.",
        "difficulty": "médio"
    },
    {
        "id": 1594,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "No modelo de segurança física do CPD (onde ficam os servidores do genoma), é prática comum e exigida:",
        "options": {
            "A": "Instalar servidores na área de convivência para otimizar a indexação.",
            "B": "Manter controle de acesso restrito, monitoramento e refrigeração.",
            "C": "Permitir livre acesso de pacientes para inspeção de frequências.",
            "D": "Manter portas abertas para ventilação e anotação cruzada de dados.",
            "E": "Deixar chaves acessíveis e limitar recursos computacionais modernos."
        },
        "correct": "B",
        "explanation": "A correta é a B pois protege o hardware crítico de danos e intrusões. As outras falham pois: A, C, D e E facilitam acessos indevidos.",
        "difficulty": "fácil"
    },
    {
        "id": 1595,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "Na TI da Saúde, o que significa a sigla do processo ETL?",
        "options": {
            "A": "Extrair (Extract), Transformar (Transform) e Carregar (Load) os dados.",
            "B": "Eliminar Termos Longos e ajustar os parâmetros de software.",
            "C": "Escrever Textos Livres e avaliar o impacto da qualidade primária.",
            "D": "Executar, Testar e Ler dados em clusters de alto processamento.",
            "E": "Espaço Temporal Lógico e aplicação prática em grandes bancos."
        },
        "correct": "A",
        "explanation": "A correta é a A pois define as fases de integração em bancos de dados. As outras falham pois: B, C, D e E usam definições falsas.",
        "difficulty": "fácil"
    },
    {
        "id": 1596,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "Por que usamos 'Vocabulários Controlados' (como a CID-10) nos prontuários em vez de deixar o médico escrever 'texto livre' (qualquer palavra)?",
        "options": {
            "A": "Censurar a autonomia médica e evitar falhas estatísticas de modelos.",
            "B": "Reduzir gastos com insumos de impressão e otimizar o processamento.",
            "C": "Evitar constrangimentos ao paciente e ajustar parâmetros de software.",
            "D": "Padronizar termos médicos para permitir análise estatística e de IA.",
            "E": "Facilitar a cobrança de tributos e realizar anotação cruzada de dados."
        },
        "correct": "D",
        "explanation": "A correta é a D pois viabiliza a análise de dados e interoperabilidade técnica. As outras falham pois: A, B, C e E erram a finalidade.",
        "difficulty": "fácil"
    },
    {
        "id": 1597,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "A sigla HPO (Human Phenotype Ontology) é vital na genômica clínica mundial. Ela é um vocabulário focado em padronizar o quê?",
        "options": {
            "A": "Nomenclatura de vírus e abordagens de modelos probabilísticos.",
            "B": "Padronizar descrições de sintomas e anomalias físicas (fenótipos).",
            "C": "Catálogo de medicamentos e aplicação em grandes bancos de dados.",
            "D": "Preços de exames genômicos e normalização de dados brutos.",
            "E": "Endereços hospitalares e controle de qualidade primário de dados."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o HPO padroniza descrições clínicas de anomalias fenotípicas. As outras falham pois: A foca em vírus e modelos, C em medicamentos, D em preços e E em endereços hospitalares.",
        "difficulty": "fácil"
    },
    {
        "id": 1598,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "Na etapa de Transformação (o 'T' do ETL), qual destas tarefas o bioinformata ou engenheiro de dados está realizando?",
        "options": {
            "A": "Excluir bases de dados e realizar anotação cruzada de referência.",
            "B": "Aplicar imunizantes e restringir aplicações a grandes bancos.",
            "C": "Baixar mídias digitais e ajustar parâmetros em softwares específicos.",
            "D": "Limpar registros, padronizar formatos e remover dados duplicados.",
            "E": "Capturar imagens de DNA e reduzir o poder preditivo algorítmico."
        },
        "correct": "D",
        "explanation": "A correta é a D porque a transformação foca em higienizar, padronizar e limpar os dados. As outras falham pois: A envolve anotação, B imunizantes, C extração de mídias e E captura de imagens.",
        "difficulty": "fácil"
    },
    {
        "id": 1599,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "Qual é a diferença conceitual simples entre um Data Warehouse (Armazém de Dados) e um Data Lake (Lago de Dados)?",
        "options": {
            "A": "Nenhuma diferença técnica entre armazenamento e montagem de dados.",
            "B": "O Warehouse é analógico e demanda alto poder de processamento.",
            "C": "O Warehouse guarda dados estruturados; o Lake guarda dados brutos.",
            "D": "O Warehouse aceita dados brutos; o Lake é restrito a dados limpos.",
            "E": "O Lake possui temperatura elevada e exige anotação cruzada constante."
        },
        "correct": "C",
        "explanation": "A correta é a C pois o Warehouse é estruturado para análise e o Lake armazena dados brutos. As outras falham pois: A nega diferenças, B cita analógico, D inverte conceitos e E cita temperatura.",
        "difficulty": "fácil"
    },
    {
        "id": 1600,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "A sigla API (Interface de Programação de Aplicação) no mundo dos dados de saúde permite:",
        "options": {
            "A": "Facilitar o diálogo médico-paciente e reduzir erros algorítmicos.",
            "B": "Permitir que softwares diferentes troquem dados automaticamente.",
            "C": "Controlar a temperatura de freezers e mitigar falsos positivos.",
            "D": "Reparar hardware de vídeo e avaliar qualidade de modelos primários.",
            "E": "Implementar criptografia no LIMS e analisar modelos probabilísticos."
        },
        "correct": "B",
        "explanation": "A correta é a B porque APIs permitem que sistemas diferentes troquem informações de forma automatizada. As outras falham pois: A foca em diálogo, C em freezers, D em hardware e E em criptografia.",
        "difficulty": "fácil"
    },
    {
        "id": 1601,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "O padrão internacional 'HL7 FHIR' revolucionou a saúde digital moderna. Seu objetivo principal é:",
        "options": {
            "A": "Analisar o genoma viral e realizar a normalização de dados brutos.",
            "B": "Proibir a transferência de dados entre sistemas e bancos de dados.",
            "C": "Garantir a interoperabilidade universal entre sistemas de saúde.",
            "D": "Atuar como linguagem de programação para indexação de dados.",
            "E": "Servir como antivírus para grandes bancos de dados integrados."
        },
        "correct": "C",
        "explanation": "A correta é a C pois o FHIR é o padrão global para interoperabilidade entre prontuários eletrônicos. As outras falham pois: A foca em vírus, B proíbe trocas, D é programação e E é antivírus.",
        "difficulty": "fácil"
    },
    {
        "id": 1603,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "No termo 'Big Data' aplicado ao Genomas SUS, existem os famosos 'Vês'. O que são o Volume e a Variedade?",
        "options": {
            "A": "Volume refere-se ao ruído sonoro e Variedade às marcas de hardware.",
            "B": "Volume é a massa de dados; Variedade são os diferentes formatos.",
            "C": "Ausência de aplicação e avaliação do impacto no controle de qualidade.",
            "D": "Volume é o peso físico e Variedade refere-se à alimentação hospitalar.",
            "E": "Conceitos não aplicáveis à saúde que exigem indexação prévia."
        },
        "correct": "B",
        "explanation": "A correta é a B porque Volume é a quantidade massiva e Variedade são os múltiplos formatos. As outras falham pois: A cita ruído, C nega aplicação, D cita peso e E nega aplicabilidade.",
        "difficulty": "fácil"
    },
    {
        "id": 1604,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "Na extração de dados (Extract), os arquivos de saúde em formato '.CSV' (Comma-Separated Values) são extremamente comuns por serem:",
        "options": {
            "A": "Modelos 3D complexos que reduzem o poder preditivo algorítmico.",
            "B": "Arquivos de senhas que exigem controle de qualidade primário.",
            "C": "Tabelas de texto simples com colunas separadas por vírgulas.",
            "D": "Programas executáveis que demandam alto poder de processamento.",
            "E": "Formatos de imagem médica que distorcem frequências observadas."
        },
        "correct": "C",
        "explanation": "A correta é a C pois o CSV é um formato de texto simples onde colunas são separadas por vírgulas. As outras falham pois: A cita 3D, B senhas, D programas executáveis e E imagens médicas.",
        "difficulty": "fácil"
    },
    {
        "id": 1605,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "Na criação de um banco de dados relacional, a linguagem padrão e clássica que o programador utiliza para fazer perguntas à tabela (ex: 'Me mostre todos os pacientes de 20 anos com mutação no BRCA1') chama-se:",
        "options": {
            "A": "SQL (Structured Query Language).",
            "B": "Ruby além disso,  o que demanda alto poder de processamento em clusters HPC.",
            "C": "C++,  o que inviabiliza a montagem sem a integração de dados adicionais.",
            "D": "Java além disso,  exigindo uma etapa prévia de normalização dos dados brutos.",
            "E": "HTML,  um artefato que pode distorcer as frequências observadas."
        },
        "correct": "A",
        "explanation": "A correta é a A porque SQL é a linguagem universal para consultas em bancos de dados relacionais. As outras falham pois: B é script, C sistema, D aplicação e E estruturação web.",
        "difficulty": "fácil"
    },
    {
        "id": 1606,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "A Ontologia de Genes (Gene Ontology - GO) foi criada no mundo da biologia computacional para padronizar três coisas fundamentais sobre os genes. Quais são?",
        "options": {
            "A": "Atributos de tamanho, cor e peso molecular do gene sequenciado.",
            "B": "Identificação do autor, data da descoberta e país de origem.",
            "C": "Categorias de doenças, métodos de cura e tipos de vacinas.",
            "D": "Função molecular, componente celular e processo biológico.",
            "E": "Preço de mercado, fabricante e validade dos reagentes usados."
        },
        "correct": "D",
        "explanation": "A correta é a D pois a GO padroniza funções, componentes celulares e processos biológicos de genes. As outras falham pois: A cita peso, B autoria, C curas e E preços comerciais.",
        "difficulty": "fácil"
    },
    {
        "id": 1607,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "O que é 'Metadados' em um arquivo de genômica (ex: cabeçalho do VCF ou BAM)?",
        "options": {
            "A": "Dados que descrevem outros dados, fornecendo contexto e origem.",
            "B": "O peso físico do hardware e impacto no algoritmo preditivo.",
            "C": "Material genético descartado devido a limitações computacionais.",
            "D": "Malwares ocultos que reduzem o poder preditivo do sistema.",
            "E": "Imagens de pesquisadores processadas em clusters de alto desempenho."
        },
        "correct": "A",
        "explanation": "A correta é a A porque metadados são dados que descrevem a origem e o contexto de outros dados. As outras falham pois: B cita peso, C descartes, D malwares e E imagens pessoais.",
        "difficulty": "médio"
    },
    {
        "id": 1608,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "No contexto da gestão moderna do Genomas SUS na Cloud (AWS/GCP), utilizar o formato Apache Parquet ao invés de um VCF texto tradicional gigante é melhor por quê?",
        "options": {
            "A": "Edita o DNA automaticamente e evita erros estatísticos de modelos.",
            "B": "Ocupa mais espaço em disco e aumenta o consumo de recursos de TI.",
            "C": "Linguagem nativa local que exige processamento em grandes clusters.",
            "D": "Resolução de imagem superior que demanda alto poder de CPU.",
            "E": "Armazenamento em colunas compactadas para buscas rápidas e baratas."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o formato Parquet utiliza armazenamento colunar que otimiza consultas e reduz custos em nuvem. As outras falham pois: A não edita DNA, B reduz consumo de recursos, C é um formato e não linguagem e D não trata de imagens.",
        "difficulty": "fácil"
    },
    {
        "id": 1609,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "Qual é o papel de um Dicionário de Dados (Data Dictionary) no desenvolvimento do projeto Genomas SUS?",
        "options": {
            "A": "Manual que define colunas, tipos de dados e seus significados.",
            "B": "Arquivo de vídeo cirúrgico que exige normalização de dados brutos.",
            "C": "Tradução de termos médicos para pacientes em modelos probabilísticos.",
            "D": "Código de conduta ética que evita a integração de dados extras.",
            "E": "Manual de alfabetização infantil para leitura de manuais técnicos."
        },
        "correct": "A",
        "explanation": "A correta é a A pois o dicionário descreve os metadados e a estrutura técnica das tabelas. As outras falham pois: B não é vídeo, C descreve dados técnicos, D não é código de ética e E é para profissionais de TI.",
        "difficulty": "fácil"
    },
    {
        "id": 1610,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "A sigla LOINC (Logical Observation Identifiers Names and Codes) é a ontologia universalmente usada no mundo hospitalar e do SUS para padronizar estritamente os nomes de:",
        "options": {
            "A": "Exames de laboratório e observações.",
            "B": "Marcas de equipamentos e de seringas.",
            "C": "Classificação de bactérias da água.",
            "D": "Procedimentos cirúrgicos específicos.",
            "E": "Tipos de planos e tabelas de saúde."
        },
        "correct": "A",
        "explanation": "A correta é a A pois a LOINC padroniza observações laboratoriais e diagnósticas globalmente para interoperabilidade. As outras falham pois: B foca em equipamentos, C foca em laboratório, D usa outras classificações e E refere-se a faturamento.",
        "difficulty": "fácil"
    },
    {
        "id": 1611,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "Quando fazemos 'Data Cleansing' (Limpeza de Dados) na fase de Transformação, a tarefa de identificar e remover 'Outliers' significa:",
        "options": {
            "A": "Exclusão de pacientes falecidos do banco.",
            "B": "Tratamento de valores fora da curva (erros).",
            "C": "Formatação visual e estética de tabelas.",
            "D": "Remoção de datas de feriados das buscas.",
            "E": "Exclusão de linhas duplicadas nos dados."
        },
        "correct": "B",
        "explanation": "A correta é a B pois outliers são valores atípicos que distorcem análises e precisam de tratamento. As outras falham pois: A trata de óbitos, C é estética, D trata datas e E remove redundâncias.",
        "difficulty": "fácil"
    },
    {
        "id": 1612,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "Na estrutura em Grafos das ontologias (como HPO ou GO), os termos se conectam em relações pai-filho. Um termo 'Pai' é sempre:",
        "options": {
            "A": "Conceito isolado sem ligação com bancos.",
            "B": "Cromossomo X que gera erros estatísticos.",
            "C": "Doença letal que exige alto processamento.",
            "D": "Nome do pesquisador que descobriu o gene.",
            "E": "Conceito amplo que engloba termos filhos."
        },
        "correct": "E",
        "explanation": "A correta é a E pois termos 'Pai' em ontologias representam categorias genéricas que englobam especificidades filhas. As outras falham pois: A são conectados, B não é cromossomo, C é conceito hierárquico e D não é pesquisador.",
        "difficulty": "fácil"
    },
    {
        "id": 1613,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "No contexto das APIs de Saúde (FHIR / REST), um 'Endpoint' é de forma simples:",
        "options": {
            "A": "Validade da senha de acesso à rede local.",
            "B": "Fim físico de um cabo de rede conectado.",
            "C": "Erro de disco rígido corrompido no Windows.",
            "D": "Endereço web para acesso a dados via API.",
            "E": "Botão de desligamento da máquina da base."
        },
        "correct": "D",
        "explanation": "A correta é a D pois endpoints são as URLs específicas para acesso aos recursos de uma API. As outras falham pois: A é autenticação, B é físico, C é hardware e E é desligamento físico.",
        "difficulty": "fácil"
    },
    {
        "id": 1614,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "Um arquivo XML já foi muito usado para transferência de dados antes do JSON. A sua característica visual principal, similar à linguagem de sites HTML, é o uso de:",
        "options": {
            "A": "Planilhas do Excel com linhas e colunas.",
            "B": "Uso de chaves sem textos explicativos.",
            "C": "Sequências puras de números binários.",
            "D": "Gráficos animados e imagens em flash.",
            "E": "Tags entre os símbolos de menor e maior."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o XML utiliza tags delimitadas por sinais de maior e menor para estruturar dados. As outras falham pois: A é planilha, B usa chaves, C é binário e D é mídia antiga.",
        "difficulty": "fácil"
    },
    {
        "id": 1615,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "Na fase de 'Load' (Carga) de um processo ETL para um repositório centralizado, a diferença entre 'Carga Completa' (Full Load) e 'Carga Incremental' é que:",
        "options": {
            "A": "Envio de logs de rede sem dados de DNA.",
            "B": "Envio apenas de dados novos da base.",
            "C": "Envio de arquivos com vírus digitais.",
            "D": "Tradução de termos técnicos ao inglês.",
            "E": "Carga que consome internet excessiva."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a carga incremental transfere apenas os registros modificados ou criados após a última carga. As outras falham pois: A são logs, C é vírus, D é tradução e E é consequência de rede.",
        "difficulty": "fácil"
    },
    {
        "id": 1616,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "O que a Ontologia clinica chamada SNOMED-CT resolve no Prontuário Eletrônico do Paciente (PEP)?",
        "options": {
            "A": "Vocabulário clínico de sintomas e exames.",
            "B": "Faturamento fiscal e emissão de boletos.",
            "C": "Exclusão de prontuários médicos antigos.",
            "D": "Controle de estoque de insumos básicos.",
            "E": "Programação de sistemas legados Linux."
        },
        "correct": "A",
        "explanation": "A correta é a A pois o SNOMED-CT fornece terminologia clínica padronizada para sintomas, diagnósticos e procedimentos. As outras falham pois: B é faturamento, C não deleta registros, D é logística e E é programação.",
        "difficulty": "fácil"
    },
    {
        "id": 1617,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "Ao realizar uma Query (Consulta) num banco de dados SQL da saúde genômica. O comando que junta duas tabelas diferentes baseadas numa informação em comum delas (ex: Juntar a Tabela 'Pacientes' com a Tabela 'Mutações' baseadas no CPF e ID) é o famoso comando:",
        "options": {
            "A": "Comando para deletar bases de dados.",
            "B": "Função de exibição de prompt e filtros.",
            "C": "Formatação de disco e limpeza de logs.",
            "D": "Atualização e deleção de scripts base.",
            "E": "União de tabelas com colunas em comum."
        },
        "correct": "E",
        "explanation": "A correta é a E pois a operação de JOIN cruza dados de tabelas distintas usando chaves comuns. As outras falham pois: A deleta bases, B exibe prompts, C formata discos e D gerencia scripts.",
        "difficulty": "fácil"
    },
    {
        "id": 1618,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "O que são 'Silos de Dados' no contexto governamental e do ambiente hospitalar que as ferramentas de ETL tentam desesperadamente quebrar para fazer Saúde de Precisão fluir e funcionar nas regionais do Genoma Sus de alta biologia analítica das bases em unificação de sistemas?",
        "options": {
            "A": "Servidores em nuvem fora do país base.",
            "B": "Infraestrutura elétrica do datacenter.",
            "C": "Descarte físico de resíduos do hospital.",
            "D": "Sistemas isolados que não se conversam.",
            "E": "Arquivos de texto sem conexão central."
        },
        "correct": "D",
        "explanation": "A correta é a D porque silos são sistemas isolados que dificultam a integração de dados. As outras falham pois: A foca em localização, B em infraestrutura elétrica, C em resíduos físicos e E em formatos específicos.",
        "difficulty": "fácil"
    },
    {
        "id": 1619,
        "area": "Bioinformática",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "text": "A biblioteca em Python mais sagrada, universal e mundialmente adotada pelo cientista de dados e do analista bioinformata de ETL para a etapa de transformação limpa de dados, cruzamentos tubulares eficientes de linhas complexas massivas e análise estatística matricial de dataframes de tabelas cruas é:",
        "options": {
            "A": "Extensões de slides para apresentações.",
            "B": "Biblioteca para manipulação de tabelas.",
            "C": "Software de planilhas isolado em nuvem.",
            "D": "Sistema operacional sem interface web.",
            "E": "Motor de jogos e vetores gráficos em C."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o Pandas é a biblioteca padrão para manipulação de tabelas em Python. As outras falham pois: A serve para slides, C é software fechado, D é sistema operacional e E desenvolve jogos.",
        "difficulty": "médio"
    },
    {
        "id": 1620,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Qual enzima é responsável pela síntese de DNA complementar (cDNA) a partir de RNA mensageiro?",
        "options": {
            "A": "Ligase, que une fragmentos de DNA.",
            "B": "DNA polimerase III, que gera a fita.",
            "C": "RNA polimerase II, que transcreve.",
            "D": "Primase, que inicia a síntese curta.",
            "E": "Transcriptase reversa, usa RNA molde."
        },
        "correct": "E",
        "explanation": "A correta é a E pois a transcriptase reversa sintetiza DNA complementar usando RNA como molde. As outras falham pois: A liga fragmentos, B replica DNA, C transcreve RNA e D cria iniciadores curtos.",
        "difficulty": "médio"
    },
    {
        "id": 1621,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O splicing alternativo permite que um único gene produza múltiplas proteínas. Esse processo ocorre principalmente durante:",
        "options": {
            "A": "Metilação do DNA em promotores.",
            "B": "Modificação pós-traducional proteica.",
            "C": "Replicação do material genético.",
            "D": "Processamento e união de éxons.",
            "E": "Tradução do mRNA nos ribossomos."
        },
        "correct": "D",
        "explanation": "A correta é a D porque o splicing alternativo seleciona e une diferentes combinações de éxons. As outras falham pois: A é modificação epigenética, B é pós-traducional, C é duplicação e E é síntese proteica.",
        "difficulty": "médio"
    },
    {
        "id": 1622,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "Qual a função principal das histonas no núcleo celular?",
        "options": {
            "A": "Catálise da síntese de proteínas.",
            "B": "Degradação do RNA no citoplasma.",
            "C": "Organização do DNA em nucleossomos.",
            "D": "Síntese de lipídios de membrana.",
            "E": "Transporte de aminoácidos na base."
        },
        "correct": "C",
        "explanation": "A correta é a C pois histonas são proteínas que empacotam o DNA em estruturas denominadas nucleossomos. As outras falham pois: A ocorre no ribossomo, B envolve nucleases, D ocorre no retículo e E via tRNA.",
        "difficulty": "fácil"
    },
    {
        "id": 1623,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "A regulação epigenética por metilação do DNA ocorre principalmente em qual contexto de sequência?",
        "options": {
            "A": "Sequências de telômeros repetitivos.",
            "B": "Ilhas CpG em regiões de promotores.",
            "C": "Códons de parada em genes totais.",
            "D": "Dinucleotídeos AT em regiões base.",
            "E": "Regiões de íntrons não regulatórias."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a metilação em ilhas CpG de promotores é o principal mecanismo de silenciamento. As outras falham pois: A são pontas cromossômicas, C interrompem tradução, D são bases AT e E são íntrons.",
        "difficulty": "médio"
    },
    {
        "id": 1624,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O conceito de 'dogma central da biologia molecular' descreve o fluxo de informação genética. Qual afirmação está CORRETA?",
        "options": {
            "A": "Fluxo unidirecional sem exceções.",
            "B": "DNA para RNA para Proteína e reverso.",
            "C": "DNA para Proteína seguindo para RNA.",
            "D": "Proteínas como código hereditário.",
            "E": "RNA nunca servindo de molde ao DNA."
        },
        "correct": "B",
        "explanation": "A correta é a B pois o fluxo genético moderno inclui a retrotranscrição do RNA para o DNA. As outras falham pois: A ignora vírus, C inverte as etapas, D proteínas não herdam e E nega biologia viral.",
        "difficulty": "médio"
    },
    {
        "id": 1625,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "No sequenciamento de terceira geração (PacBio e Oxford Nanopore), qual é a principal vantagem em relação ao Illumina?",
        "options": {
            "A": "Dispensa o preparo de bibliotecas.",
            "B": "Sequenciamento rápido em escala.",
            "C": "Reads longos para grandes variantes.",
            "D": "Maior acurácia por base individual.",
            "E": "Menor custo por base sequenciada."
        },
        "correct": "C",
        "explanation": "A correta é a C pois reads longos permitem resolver regiões repetitivas e grandes variantes estruturais. As outras falham pois: A requer bibliotecas, B foca em rendimento, D Illumina é mais precisa e E Illumina é barata.",
        "difficulty": "médio"
    },
    {
        "id": 1626,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O índice de qualidade Phred Score Q30 significa que a probabilidade de erro na base sequenciada é:",
        "options": {
            "A": "1 erro a cada 1.000 bases (0,1%).",
            "B": "3% de taxa de erro total e  o que demanda validação com métodos ortogonais de bancada.",
            "C": "30% de chance de erro além disso,  sendo um procedimento que depende de validação adicional.",
            "D": "Acurácia de 99,9% ou 1 erro a cada 1.000 bases.",
            "E": "1 erro a cada 100 bases (1%) além disso,  o que demanda validação com métodos ortogonais de bancada."
        },
        "correct": "D",
        "explanation": "A correta é a D pois Q30 representa 99,9% de acurácia, equivalente a um erro por mil bases. As outras falham pois: A é incompleta, B e C erram cálculos e E refere-se ao índice Q20.",
        "difficulty": "médio"
    },
    {
        "id": 1627,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Em um experimento de RNA-Seq, qual métrica indica possível contaminação por DNA genômico?",
        "options": {
            "A": "Baixa cobertura em éxons finais.",
            "B": "Qualidade Q-score abaixo do padrão.",
            "C": "Alta taxa de duplicação de reads.",
            "D": "Reads em íntrons e intergênicos.",
            "E": "Tamanho médio de trezentos bp."
        },
        "correct": "D",
        "explanation": "A correta é a D pois a presença de reads em íntrons indica que o DNA genômico não foi removido. As outras falham pois: A indica degradação, B erro de leitura, C viés de PCR e E tamanho padrão.",
        "difficulty": "difícil"
    },
    {
        "id": 1628,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "O protocolo de 'Tagmentation' usado no preparo de bibliotecas Nextera combina em uma única etapa:",
        "options": {
            "A": "Amplificação e normalização total.",
            "B": "Sequenciamento e análise final.",
            "C": "Extração e purificação de ácidos.",
            "D": "Remoção de primers e de fragmentos.",
            "E": "Fragmentação e ligação de adaptadores."
        },
        "correct": "E",
        "explanation": "A correta é E porque a transposase Tn5 cliva o DNA e insere adaptadores simultaneamente. As outras falham pois: A envolve PCR posterior, B ocorre após o preparo, C precede o preparo e D é limpeza pós-reação.",
        "difficulty": "médio"
    },
    {
        "id": 1629,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A técnica de 'Unique Molecular Identifiers' (UMIs) é usada em NGS para:",
        "options": {
            "A": "Aumento da taxa de sequenciamento.",
            "B": "Melhora da qualidade base por base.",
            "C": "Facilitação do demultiplexing.",
            "D": "Aceleração do alinhamento ao padrão.",
            "E": "Remoção de duplicados de PCR."
        },
        "correct": "E",
        "explanation": "A correta é E pois UMIs rotulam moléculas originais permitindo distinguir duplicatas de PCR de moléculas biológicas únicas. As outras falham pois: A depende de hardware, B usa algoritmos químicos, C utiliza índices e D usa alinhadores.",
        "difficulty": "difícil"
    },
    {
        "id": 1630,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "No contexto de análise de exomas, o termo 'Variant Allele Frequency' (VAF) de 50% em uma variante heterozigótica germinativa indica:",
        "options": {
            "A": "Duplicação segmentar no exoma.",
            "B": "Contaminação com DNA externo.",
            "C": "Heterozigose germinativa esperada.",
            "D": "Erro sistemático de leitura base.",
            "E": "Mosaicismo em metade das células."
        },
        "correct": "C",
        "explanation": "A correta é C porque em heterozigose germinativa espera-se que metade das leituras contenha a variante. As outras falham pois: A altera a proporção, B gera ruído baixo, D é erro localizado e E é mosaicismo somático.",
        "difficulty": "médio"
    },
    {
        "id": 1631,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Uma variante classificada como 'VUS' (Variant of Uncertain Significance) significa que:",
        "options": {
            "A": "Variante sem relevância clínica.",
            "B": "Variante em populações raras.",
            "C": "Falta de evidências na classificação.",
            "D": "Variante patogênica pelo ACMG.",
            "E": "Variante que causa doença sempre."
        },
        "correct": "C",
        "explanation": "A correta é C visto que VUS indica ausência de dados clínicos ou funcionais suficientes para classificação. As outras falham pois: A é benigna, B refere-se à frequência, D é patogênica e E é certeza de doença.",
        "difficulty": "fácil"
    },
    {
        "id": 1633,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "O conceito de 'Loss of Function' (LoF) intolerance medido pelo pLI score identifica genes onde:",
        "options": {
            "A": "Frequência de variantes sinônimas.",
            "B": "Tolerância à haploinsuficiência.",
            "C": "Intolerância à perda de uma cópia.",
            "D": "Benignidade de mutações de base.",
            "E": "Patogenicidade de duplicações."
        },
        "correct": "C",
        "explanation": "A correta é C pois o pLI quantifica a intolerância do gene à perda de função em heterozigose. As outras falham pois: A avalia conservação, B é o oposto, D foca em missense e E refere-se a duplicações.",
        "difficulty": "difícil"
    },
    {
        "id": 1634,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "Ao interpretar variantes nonsense (stop-gain), qual fator NÃO aumenta a evidência de patogenicidade?",
        "options": {
            "A": "Gene com alta intolerância a LoF (pLI alto).",
            "B": "Estudos funcionais mostrando perda de função.",
            "C": "Segregação com fenótipo em múltiplos afetados.",
            "D": "Localização no último éxon (próximo ao C-terminal).",
            "E": "Ausência em bancos populacionais grandes."
        },
        "correct": "D",
        "explanation": "A correta é D pois variantes no último éxon frequentemente escapam do decaimento mediado por nonsense (NMD). As outras falham pois: A sugere sensibilidade, B prova efeito, C valida herança e E indica raridade populacional.",
        "difficulty": "difícil"
    },
    {
        "id": 1635,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "O GATK Best Practices para chamada de variantes germinativas recomenda qual fluxo de etapas?",
        "options": {
            "A": "Minimap2, Clair3 e filtragem.",
            "B": "BWA-MEM, GATK e FilterMutect.",
            "C": "STAR, GATK RNAseq e MuTect2.",
            "D": "Bowtie2, Samtools e FreeBayes.",
            "E": "BWA, Picard, BQSR e Haplotype."
        },
        "correct": "E",
        "explanation": "A correta é E por seguir o fluxo padrão de alinhamento, marcação de duplicatas, recalibração e chamada. As outras falham pois: A usa long-reads, B é somático, C é transcriptoma e D usa chamadores alternativos.",
        "difficulty": "difícil"
    },
    {
        "id": 1636,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "No formato VCF, o campo GT (genotype) com valor '0/1' indica:",
        "options": {
            "A": "Fase desconhecida entre os alelos.",
            "B": "Genótipo não determinado na base.",
            "C": "Homozigoto para a referência.",
            "D": "Homozigoto para o alternativo.",
            "E": "Heterozigoto (ref e alternativo)."
        },
        "correct": "E",
        "explanation": "A correta é E pois '0' representa o alelo de referência e '1' o alternativo. As outras falham pois: A exige barra vertical, B é ponto, C é homozigoto referência e D é homozigoto alternativo.",
        "difficulty": "médio"
    },
    {
        "id": 1637,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "A ferramenta BCFtools é frequentemente usada para:",
        "options": {
            "A": "Manipulação e filtragem de VCF.",
            "B": "Alinhamento de reads ao padrão.",
            "C": "Quantificação de RNA-Seq total.",
            "D": "Desenho de primers de diagnóstico.",
            "E": "Montagem de novo de genomas."
        },
        "correct": "A",
        "explanation": "A correta é A porque o BCFtools é a ferramenta padrão para manipular, filtrar e converter arquivos VCF. As outras falham pois: B usa alinhadores, C usa quantificadores, D usa design de primers e E usa montadores.",
        "difficulty": "médio"
    },
    {
        "id": 1639,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "Containers Docker são amplamente usados em bioinformática porque:",
        "options": {
            "A": "Elevam a velocidade de processamento em ambientes de HPC.",
            "B": "Diminuem o tamanho dos dados nos recursos computacionais.",
            "C": "Substituem máquinas virtuais, gerando maior gasto de RAM.",
            "D": "Criptografam dados sensíveis com uso de filtros técnicos.",
            "E": "Encapsulam software, garantindo reprodutibilidade sistêmica."
        },
        "correct": "E",
        "explanation": "A correta é E porque containers encapsulam o ambiente garantindo que o software execute identicamente em qualquer lugar. As outras falham pois: A não acelera CPU, B aumenta o tamanho, C usa menos RAM e D não foca em criptografia.",
        "difficulty": "fácil"
    },
    {
        "id": 1640,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "O fator de inflação lambda (λ) em um GWAS avalia:",
        "options": {
            "A": "Inflação de p-values por estratificação ou viés técnico.",
            "B": "Taxas de recombinação que distorcem frequências de alelos.",
            "C": "Variantes raras que aumentam os gastos de processamento.",
            "D": "Cobertura de sequenciamento que exige integração de dados.",
            "E": "Qualidade de base que demanda alto poder de computação."
        },
        "correct": "A",
        "explanation": "A correta é a A pois λ avalia inflação por estratificação ou viés. As outras falham pois: B foca em recombinação, C em custos, D em cobertura e E em computação.",
        "difficulty": "difícil"
    },
    {
        "id": 1641,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "A correção de False Discovery Rate (FDR) usando o método de Benjamini-Hochberg é preferível a Bonferroni quando:",
        "options": {
            "A": "Quando há poucos testes em análises de modelos prováveis.",
            "B": "Testes correlacionados buscando reduzir falsos positivos.",
            "C": "Amostras pequenas que restringem o uso em grandes bancos.",
            "D": "Ausência de correlação, mitigada por filtros de qualidade.",
            "E": "Realização de teste único com prévia normalização bruta."
        },
        "correct": "B",
        "explanation": "A correta é a B pois FDR controla descobertas falsas em testes múltiplos. As outras falham pois: A prevê poucos testes, C foca em bancos, D em filtros e E em teste único.",
        "difficulty": "difícil"
    },
    {
        "id": 1642,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "Em análise de expressão diferencial (RNA-Seq), o teste estatístico que assume distribuição binomial negativa é:",
        "options": {
            "A": "Qui-quadrado para contagens sem integração de novos dados.",
            "B": "ANOVA tradicional que exige normalização prévia de dados.",
            "C": "Teste t de Student padrão que reduz o seu poder preditivo.",
            "D": "Correlação de Pearson que impede a montagem de sequências.",
            "E": "DESeq2 e edgeR que modelam contagens com superdispersão."
        },
        "correct": "E",
        "explanation": "A correta é a E pois modela superdispersão em dados de contagem. As outras falham pois: A usa qui-quadrado, B ANOVA, C teste t e D correlação.",
        "difficulty": "difícil"
    },
    {
        "id": 1643,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "O coeficiente de endogamia F em genética de populações mede:",
        "options": {
            "A": "Grau de parentesco e perda de heterozigose consanguínea.",
            "B": "Fluxo gênico entre populações com ajustes de softwares.",
            "C": "Seleção natural avaliada no controle de qualidade inicial.",
            "D": "Deriva genética restrita à aplicação em grandes bancos.",
            "E": "Taxa de mutação por geração com erros não corrigidos."
        },
        "correct": "A",
        "explanation": "A correta é a A pois F mede redução de heterozigose por parentesco. As outras falham pois: B foca em fluxo, C em seleção, D em deriva e E em mutação.",
        "difficulty": "médio"
    },
    {
        "id": 1644,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "O Desequilíbrio de Ligação (LD) entre dois loci tende a ser MAIOR quando:",
        "options": {
            "A": "Loci sem relação funcional e com limitações de recursos.",
            "B": "População grande e panmítica com alto consumo de memória.",
            "C": "Alta taxa de mutação com risco elevado de falsos positivos.",
            "D": "Loci em cromossomos diferentes com restrição de aplicação.",
            "E": "Loci próximos no mesmo cromossomo com baixa recombinação."
        },
        "correct": "E",
        "explanation": "A correta é a E pois a proximidade física minimiza a recombinação alélica. As outras falham pois: A nega relação, B cita panmixia, C mutação e D cromossomos diferentes.",
        "difficulty": "médio"
    },
    {
        "id": 1645,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "Em um modelo de deriva genética, populações pequenas tendem a:",
        "options": {
            "A": "Prevenir fixação de alelos com impacto em qualidades.",
            "B": "Elevar seleção positiva aumentando o consumo de recursos.",
            "C": "Atingir o equilíbrio Hardy-Weinberg com alto custo de CPU.",
            "D": "Perder diversidade rapidamente por flutuações aleatórias.",
            "E": "Manter heterozigose gerando falsos positivos de análise."
        },
        "correct": "D",
        "explanation": "A correta é a D pois o erro amostral elimina alelos em grupos pequenos. As outras falham pois: A evita fixação, B cita seleção, C equilíbrio e E manutenção.",
        "difficulty": "médio"
    },
    {
        "id": 1646,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Uma mutação com penetrância de 70% significa que:",
        "options": {
            "A": "100% dos portadores doentes em condições controladas.",
            "B": "Gravidade da doença a 70% do máximo com baixa precisão.",
            "C": "Apenas 30% de detecção mutacional em testes de rotina.",
            "D": "70% dos portadores do genótipo manifestam o fenótipo.",
            "E": "Ocorrência em 70% das famílias com monitoramento técnico."
        },
        "correct": "D",
        "explanation": "A correta é a D pois define a probabilidade de expressar o gene. As outras falham pois: A prevê 100%, B expressividade, C detecção e E monitoramento.",
        "difficulty": "médio"
    },
    {
        "id": 1648,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Imprinting genômico explica por que em algumas doenças:",
        "options": {
            "A": "Doença não hereditária com baixa reprodutibilidade técnica.",
            "B": "Afeta apenas mulheres, exigindo validações laboratoriais.",
            "C": "Mutações maternas que exigem o uso de controles internos.",
            "D": "Fenótipo dependente da origem parental por metilação.",
            "E": "Sem diferença parental sob os padrões vigentes de saúde."
        },
        "correct": "D",
        "explanation": "A correta é a D pois a expressão depende da marcação epigenética parental. As outras falham pois: A nega herança, B cita sexo, C mutação e E igualdade.",
        "difficulty": "difícil"
    },
    {
        "id": 1649,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "A antecipação genética, observada em doenças de expansão de repetições de trinucleotídeos, refere-se a:",
        "options": {
            "A": "Conversão de herança exigindo controles internos na reação.",
            "B": "Cura espontânea da patologia nas gerações sucessivas.",
            "C": "Início precoce e gravidade maior em gerações futuras.",
            "D": "Maior expectativa de vida com baixa reprodutibilidade.",
            "E": "Redução de penetrância com monitoramento pré-analítico."
        },
        "correct": "C",
        "explanation": "A correta é a C pois a expansão de trincas aumenta a cada geração. As outras falham pois: A cita conversão, B cura, D longevidade e E redução.",
        "difficulty": "médio"
    },
    {
        "id": 1651,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "A síndrome de Down (trissomia do 21) tem como principal fator de risco materno:",
        "options": {
            "A": "Exposição a radiação com preservação da amostra biológica.",
            "B": "Uso de medicamentos durante todo o período gestacional.",
            "C": "Falta de ácido fólico com variação em análises clínicas.",
            "D": "Idade materna avançada com aumento de erros na meiose.",
            "E": "Alta consanguinidade com limites na reprodutibilidade."
        },
        "correct": "D",
        "explanation": "A correta é a D pois a idade materna predispõe erros na segregação. As outras falham pois: A cita radiação, B medicamentos, C ácido fólico e E consanguinidade.",
        "difficulty": "fácil"
    },
    {
        "id": 1652,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Pacientes com síndrome de Marfan frequentemente apresentam mutações no gene:",
        "options": {
            "A": "DMD na distrofia muscular com monitoramento pré-analítico.",
            "B": "BRCA1 no câncer de mama com baixa reprodutibilidade.",
            "C": "HBB relacionado diretamente à ocorrência de falciforme.",
            "D": "FBN1 codificando fibrilina-1 no tecido conectivo.",
            "E": "CFTR relacionado ao quadro clínico de fibrose cística."
        },
        "correct": "D",
        "explanation": "A correta é a D porque a síndrome de Marfan é causada por mutações no gene FBN1, afetando a proteína fibrilina-1 do tecido conjuntivo. As outras falham pois: A refere-se à distrofia muscular, B ao câncer de mama, C à anemia falciforme e E à fibrose cística.",
        "difficulty": "médio"
    },
    {
        "id": 1653,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "A fenilcetonúria (PKU) é causada por deficiência da enzima fenilalanina hidroxilase. O tratamento principal é:",
        "options": {
            "A": "Uso de tirosina sob os padrões de segurança vigentes.",
            "B": "Restrição de fenilalanina na dieta desde o nascimento.",
            "C": "Terapia gênica CRISPR com monitoramento pré-analítico.",
            "D": "Transplante hepático precoce em cenários controlados.",
            "E": "Antibioticoterapia longa com variação na eficiência."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a restrição dietética de fenilalanina desde o nascimento é o padrão-ouro para evitar danos neurológicos na PKU. As outras falham pois: A é suplementação secundária, C é experimental, D não é tratamento padrão e E é ineficaz para erros inatos.",
        "difficulty": "fácil"
    },
    {
        "id": 1654,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "A hemofilia A é causada por deficiência do fator VIII de coagulação e tem padrão de herança:",
        "options": {
            "A": "Herança ligada ao X recessiva, afetando mais os homens.",
            "B": "Herança mitocondrial com calibração rigorosa de métodos.",
            "C": "Herança ligada ao Y com calibração rigorosa de métodos.",
            "D": "Herança autossômica dominante afetando ambos os sexos.",
            "E": "Herança autossômica recessiva com penetrância completa."
        },
        "correct": "A",
        "explanation": "A correta é a A porque a hemofilia A é uma desordem recessiva ligada ao cromossomo X, manifestando-se tipicamente em homens. As outras falham pois: B é herança materna, C afeta apenas linhagem masculina, D é autossômica e E não explica o viés sexual.",
        "difficulty": "fácil"
    },
    {
        "id": 1655,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "A doença de Huntington é causada por expansão de repetições CAG no gene HTT. Qual afirmação está CORRETA?",
        "options": {
            "A": "Cura disponível amplamente com estabilidade in vitro.",
            "B": "Sem correlação genótipo-fenótipo com métodos rigorosos.",
            "C": "Doença recessiva que demanda métodos de bancada.",
            "D": "Dominante com antecipação e neurodegeneração progressiva.",
            "E": "Afeta o sistema cardiovascular sob normas de segurança."
        },
        "correct": "D",
        "explanation": "A correta é a D porque a doença de Huntington é autossômica dominante com antecipação genética por expansão de tripletos CAG. As outras falham pois: A não possui cura, B apresenta forte correlação genótipo-fenótipo, C é dominante e E é neurodegenerativa.",
        "difficulty": "médio"
    },
    {
        "id": 1656,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Variantes no gene CYP2D6 que codifica uma enzima do citocromo P450 podem afetar o metabolismo de aproximadamente:",
        "options": {
            "A": "Sem fármacos comuns, aplicado em cenários controlados.",
            "B": "25% dos fármacos como opioides e antidepressivos.",
            "C": "Apenas quimioterápicos dependentes de nova validação.",
            "D": "Apenas anticoagulantes orais sob normas de segurança.",
            "E": "Apenas beta-lactâmicos com monitoramento pré-analítico."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a enzima CYP2D6 é responsável pelo metabolismo oxidativo de aproximadamente 25% dos medicamentos de uso clínico. As outras falham pois: A ignora fármacos comuns, C exclui outras classes, D foca em CYP2C9 e E foca em eliminação renal.",
        "difficulty": "médio"
    },
    {
        "id": 1657,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Indivíduos com deficiência de G6PD (glicose-6-fosfato desidrogenase) devem evitar:",
        "options": {
            "A": "Qualquer fármaco oral com controles internos de reação.",
            "B": "Todos os antibióticos dentro de cenários controlados.",
            "C": "Fármacos oxidantes como a primaquina que causam hemólise.",
            "D": "Estatinas para o colesterol com protocolos otimizados.",
            "E": "Apenas anti-inflamatórios com variação de eficiência."
        },
        "correct": "C",
        "explanation": "A correta é a C pois a deficiência de G6PD torna as hemácias suscetíveis à hemólise sob estresse oxidativo causado por drogas como a primaquina. As outras falham pois: A é excessivamente generalista, B inclui antibióticos seguros, D não causa hemólise e E ignora outros oxidantes.",
        "difficulty": "médio"
    },
    {
        "id": 1658,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "O teste farmacogenético para o gene TPMT é importante antes de iniciar terapia com:",
        "options": {
            "A": "Metformina para diabetes com validação adicional técnica.",
            "B": "Estatinas para dislipidemia com amostras degradadas.",
            "C": "Antibióticos de amplo espectro sob métodos rigorosos.",
            "D": "Anti-hipertensivos com variação na eficiência analítica.",
            "E": "Azatioprina ou 6-mercaptopurina em doenças inflamatórias."
        },
        "correct": "E",
        "explanation": "A correta é a E porque o polimorfismo no gene TPMT prediz o risco de mielossupressão grave em pacientes que utilizam tiopurinas. As outras falham pois: A não usa via TPMT, B associa-se ao SLCO1B1, C e D usam outras vias metabólicas.",
        "difficulty": "difícil"
    },
    {
        "id": 1659,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Pacientes com alelo HLA-B*57:01 têm alto risco de reação de hipersensibilidade grave ao antirretroviral:",
        "options": {
            "A": "Efavirenz com maior tempo de manipulação de fluxos.",
            "B": "Zidovudina em monoterapia sob padrões de segurança.",
            "C": "Abacavir com risco de hipersensibilidade fatal.",
            "D": "Tenofovir em qualquer dose com longo tempo de fluxo.",
            "E": "Lopinavir sem ritonavir com preservação de amostras."
        },
        "correct": "C",
        "explanation": "A correta é a C pois a presença do alelo HLA-B*57:01 está fortemente associada a reações de hipersensibilidade multiorgânica ao abacavir. As outras falham pois: A e B têm outras toxicidades, D afeta os rins e E não possui essa ligação genética.",
        "difficulty": "difícil"
    },
    {
        "id": 1660,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "A warfarina tem sua dose influenciada por variantes nos genes:",
        "options": {
            "A": "CYP2C9 e VKORC1, justificando a variação de doses.",
            "B": "HLA e HBB exclusivamente sob padrões de segurança.",
            "C": "Sem influência genética com amostras degradadas.",
            "D": "Somente BRCA1 e BRCA2 sob métodos rigorosos.",
            "E": "Apenas CYP3A4 em cenários controlados de análise."
        },
        "correct": "A",
        "explanation": "A correta é a A porque a farmacogenética da varfarina é definida pelo metabolismo (CYP2C9) e pela sensibilidade ao alvo farmacológico (VKORC1). As outras falham pois: B usa genes irrelevantes, C nega influência genética, D foca em câncer e E erra a enzima principal.",
        "difficulty": "médio"
    },
    {
        "id": 1661,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "O Programa Genomas Brasil tem como objetivo principal:",
        "options": {
            "A": "Realizar pesquisas em animais com indexação prévia.",
            "B": "Vender dados genéticos com alto gasto de recursos.",
            "C": "Importar tecnologias com normalização de dados brutos.",
            "D": "Trocar tratamentos usuais por clusters de alto desempenho.",
            "E": "Sequenciar brasileiros para medicina de precisão e ciência."
        },
        "correct": "E",
        "explanation": "A correta é a E pois o Programa Genomas Brasil foca em sequenciar a diversidade da população brasileira para impulsionar a medicina de precisão. As outras falham pois: A foca em animais, B foca em comércio, C foca em importação e D descaracteriza o objetivo médico.",
        "difficulty": "fácil"
    },
    {
        "id": 1662,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "A CONITEC (Comissão Nacional de Incorporação de Tecnologias) avalia:",
        "options": {
            "A": "Equipamentos hospitalares sob limitações de recursos.",
            "B": "Eficácia, segurança e custo para incorporação no SUS.",
            "C": "Vacinas obrigatórias sob as limitações de recursos.",
            "D": "Preços de genéricos com erros não corrigidos de estatística.",
            "E": "Tecnologias estrangeiras com modelos probabilísticos."
        },
        "correct": "B",
        "explanation": "A correta é B porque a CONITEC avalia evidências de eficácia, segurança e custo-efetividade para o SUS. As outras falham pois: A foca em equipamentos limitados, C restringe-se a vacinas, D foca em erros estatísticos e E em modelos estrangeiros.",
        "difficulty": "médio"
    },
    {
        "id": 1663,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "A RENAME (Relação Nacional de Medicamentos Essenciais) inclui medicamentos que são:",
        "options": {
            "A": "Fármacos caros e importados com filtros de qualidade.",
            "B": "Registro na ANVISA sem critérios e com indexação prévia.",
            "C": "Fitoterápicos naturais sob as limitações de recursos.",
            "D": "Itens seguros e eficazes para as prioridades de saúde.",
            "E": "Tratamento de raras sob as limitações de recursos."
        },
        "correct": "D",
        "explanation": "A correta é D porque a RENAME define a lista de medicamentos essenciais para prioridades do SUS. As outras falham pois: A foca em caros, B carece de critérios, C foca em fitoterápicos e E em doenças raras.",
        "difficulty": "fácil"
    },
    {
        "id": 1664,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "A Política Nacional de Atenção Integral às Pessoas com Doenças Raras (Portaria 199/2014) estabelece:",
        "options": {
            "A": "Rede de atenção e protocolos para doenças raras no SUS.",
            "B": "Exclusão de pacientes com erros estatísticos graves.",
            "C": "Assistência isolada sem integração de dados novos.",
            "D": "Atendimento privado com normalização de dados brutos.",
            "E": "Foco em infecciosas com erros estatísticos graves."
        },
        "correct": "A",
        "explanation": "A correta é A porque a Portaria 199/2014 estabelece a rede de cuidado e protocolos clínicos. As outras falham pois: B exclui pacientes, C isola dados, D foca no privado e E em infecciosas.",
        "difficulty": "médio"
    },
    {
        "id": 1665,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "A acreditação de laboratórios clínicos no Brasil pode ser obtida por organizações como:",
        "options": {
            "A": "ANVISA obrigatória com normalização de dados brutos.",
            "B": "Sem acreditação no país, reduzindo o poder preditivo.",
            "C": "MEC exclusivo com aumento no consumo de recursos.",
            "D": "PALC, DICQ e CAP para avaliar a qualidade e processos.",
            "E": "Secretarias municipais com aumento de gasto de recursos."
        },
        "correct": "D",
        "explanation": "A correta é D pois PALC, DICQ e CAP são programas consolidados de qualidade laboratorial. As outras falham pois: A é regulação sanitária, B nega a existência, C é acadêmica e E é governamental.",
        "difficulty": "médio"
    },
    {
        "id": 1731,
        "area": "Laboratório",
        "subject": "Biologia, biologia molecular e genética",
        "text": "O processo de tradução do mRNA em proteína ocorre em qual organela celular?",
        "options": {
            "A": "Lisossomos o que resulta em  o que demanda validação com métodos ortogonais de bancada.",
            "B": "Aparelho de Golgi,  limitando a reprodutibilidade dos resultados entre lotes.",
            "C": "Mitocôndria apenas o que resulta em  exigindo o uso de controles internos para validar a reação.",
            "D": "Núcleo exclusivamente além disso,  embora sua eficiência analítica possa variar no laboratório.",
            "E": "Ribossomos no citoplasma ou retículo endoplasmático rugoso."
        },
        "correct": "E",
        "explanation": "A correta é E pois ribossomos no citoplasma ou RE rugoso realizam a síntese de proteínas. As outras falham pois: A degrada macromoléculas, B processa proteínas, C é limitada e D faz transcrição.",
        "difficulty": "fácil"
    },
    {
        "id": 1733,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "A degradação do DNA extraído é melhor avaliada por:",
        "options": {
            "A": "Visualização simples da cor da solução.",
            "B": "Eletroforese em gel ou uso de Bioanalyzer.",
            "C": "Uso de controles internos para validação.",
            "D": "Pesagem da amostra em balança de precisão.",
            "E": "Odor do tubo aberto durante a manipulação."
        },
        "correct": "B",
        "explanation": "A correta é B porque o gel e o Bioanalyzer medem o tamanho e fragmentação do DNA. As outras falham pois: A/E são métodos subjetivos, C valida reações e D pesa amostras.",
        "difficulty": "fácil"
    },
    {
        "id": 1734,
        "area": "Laboratório",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "text": "Em NGS, adapter dimers são formados quando:",
        "options": {
            "A": "Ausência de primers na reação enzimática.",
            "B": "PH neutro e tempo de manipulação longo.",
            "C": "DNA de alta qualidade na amostra inicial.",
            "D": "Cobertura perfeita de sequenciamento bruto.",
            "E": "Ligação de adaptadores sem o DNA inserto."
        },
        "correct": "E",
        "explanation": "A correta é E pois dímeros de adaptadores são formados pela ligação mútua sem o inserto. As outras falham pois: A falta componentes, B/D são irrelevantes e C impede a formação.",
        "difficulty": "médio"
    },
    {
        "id": 1735,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "O formato VCF contém informações sobre:",
        "options": {
            "A": "Metadados clínicos e recursos modernos.",
            "B": "Posição, alelos, qualidade e genótipos.",
            "C": "Imagens médicas e processamento em HPC.",
            "D": "Dados de proteômica e falsos positivos.",
            "E": "Dados administrativos e filtros simples."
        },
        "correct": "B",
        "explanation": "A correta é B pois o VCF detalha coordenadas, alelos, qualidade e genótipos das variantes. As outras falham pois: A é metadados, C para imagens, D para proteínas e E administrativa.",
        "difficulty": "fácil"
    },
    {
        "id": 1736,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Uma variante splice-site é considerada de alto impacto porque:",
        "options": {
            "A": "Afeta reconhecimento de sítios de splicing.",
            "B": "Mudança sinônima e anotação de referência.",
            "C": "Região não-codificante benigna indexada.",
            "D": "Sem alteração proteica ou normalização.",
            "E": "Polimorfismo comum e normalização bruta."
        },
        "correct": "A",
        "explanation": "A correta é A porque afeta os sítios canônicos de reconhecimento para a remoção de íntrons. As outras falham pois: B/E são alterações benignas, C é não-codificante e D nega impacto.",
        "difficulty": "difícil"
    },
    {
        "id": 1737,
        "area": "Bioinformática",
        "subject": "Programação e ferramentas computacionais",
        "text": "O comando bedtools intersect é útil para:",
        "options": {
            "A": "Sobreposições genômicas em BED/VCF/BAM.",
            "B": "Alinhamento de reads e poder preditivo.",
            "C": "Compressão de arquivos e falsos positivos.",
            "D": "Gráficos e controle de qualidade primário.",
            "E": "Chamada de variantes e normalização bruta."
        },
        "correct": "A",
        "explanation": "A correta é A pois o comando identifica a interseção geográfica entre diferentes arquivos genômicos. As outras falham pois: B realiza alinhamento, C compressão, D gráficos e E chamadas.",
        "difficulty": "médio"
    },
    {
        "id": 1738,
        "area": "Bioinformática",
        "subject": "Estatística aplicada à genômica",
        "text": "O erro tipo I (falso positivo) em testes estatísticos refere-se a:",
        "options": {
            "A": "Rejeitar a hipótese nula quando verdadeira.",
            "B": "Ocorrência em 100% e artefatos de dados.",
            "C": "Falha em rejeitar a hipótese nula falsa.",
            "D": "Ausência de significado e limite de recurso.",
            "E": "Inexistência em GWAS sem dados integrados."
        },
        "correct": "A",
        "explanation": "A correta é a A porque o Erro Tipo I ocorre ao rejeitar a hipótese nula quando ela é verdadeira. As outras falham pois: B descreve frequência impossível, C define Erro Tipo II, D ignora limites probabilísticos e E nega risco estatístico inerente.",
        "difficulty": "médio"
    },
    {
        "id": 1739,
        "area": "Bioinformática",
        "subject": "Genética de populações",
        "text": "O índice de fixação FST mede:",
        "options": {
            "A": "Tamanho populacional e poder preditivo.",
            "B": "Seleção natural e modelos estatísticos.",
            "C": "Diferenciação genética entre populações.",
            "D": "Mutação de novo e montagem de genomas.",
            "E": "Taxa de recombinação e limite de recurso."
        },
        "correct": "C",
        "explanation": "A correta é a C pois o FST quantifica a divergência genética entre subpopulações. As outras falham pois: A mede abundância, B foca em adaptação, D trata de variantes novas e E envolve troca de material genético.",
        "difficulty": "difícil"
    },
    {
        "id": 1741,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "A síndrome de Prader-Willi é causada por:",
        "options": {
            "A": "Apenas fatores ambientais e  requerendo adequação aos padrões de segurança vigentes.",
            "B": "Deleção/UPD materna da região 15q11-q13 paterna com imprinting.",
            "C": "Expansão CAG em HTT além disso,  um aspecto que aumenta o tempo de manipulação no fluxo de trabalho.",
            "D": "Mutação em CFTR o que resulta em  o que requer calibração rigorosa dos métodos utilizados.",
            "E": "Trissomia do 21,  embora sua eficiência analítica possa variar no laboratório."
        },
        "correct": "B",
        "explanation": "A correta é a B pois a síndrome resulta da perda de expressão gênica paterna no cromossomo 15. As outras falham pois: A ignora etiologia genética, C causa Huntington, D gera Fibrose Cística e E caracteriza Down.",
        "difficulty": "difícil"
    },
    {
        "id": 1742,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Variantes em CYP2C19 afetam o metabolismo de:",
        "options": {
            "A": "Somente quimioterápicos além disso,  um fator técnico que deve ser monitorado na fase pré-analítica.",
            "B": "Apenas antibióticos e  que atua de forma secundária na preservação da amostra.",
            "C": "Clopidogrel, omeprazol e vários antidepressivos.",
            "D": "Exclusivamente insulina,  sendo um procedimento que depende de validação adicional.",
            "E": "Apenas vacinas, consequentemente,  sendo um procedimento que depende de validação adicional."
        },
        "correct": "C",
        "explanation": "A correta é a C porque a enzima CYP2C19 é crucial na ativação ou inativação destes fármacos específicos. As outras falham pois: A e B usam outras vias, D é via degradação peptídica e E envolve resposta imunitária.",
        "difficulty": "médio"
    },
    {
        "id": 1743,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Mutações somáticas driver em câncer:",
        "options": {
            "A": "Conferem vantagem seletiva promovendo crescimento tumoral (ex: KRAS, TP53, PIK3CA).",
            "B": "São sempre germinativas e  o que demanda validação com métodos ortogonais de bancada.",
            "C": "Estão apenas em células normais,  embora sua eficiência analítica possa variar no laboratório.",
            "D": "Nunca são tratáveis e  sendo um procedimento que depende de validação adicional.",
            "E": "Não têm impacto clínico o que resulta em  que atua de forma secundária na preservação da amostra."
        },
        "correct": "A",
        "explanation": "A correta é a A porque mutações driver impulsionam a carcinogênese e a progressão tumoral. As outras falham pois: B confunde origem, C ignora células cancerosas, D desconsidera terapias-alvo e E nega relevância clínica óbvia.",
        "difficulty": "médio"
    },
    {
        "id": 1744,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "A judicialização da saúde para acesso a testes genéticos ocorre quando:",
        "options": {
            "A": "Países sem sistema público de saúde.",
            "B": "Testes gratuitos em farmácias comuns.",
            "C": "Ausência total de necessidade clínica.",
            "D": "Tecnologia amplamente disponível no SUS.",
            "E": "Busca judicial por testes não incorporados."
        },
        "correct": "E",
        "explanation": "A correta é a E pois a judicialização busca garantir direitos a tecnologias ausentes no rol oficial do SUS. As outras falham pois: A limita o contexto, B cita cenário irreal, C ignora preceitos médicos e D tornaria o processo desnecessário.",
        "difficulty": "médio"
    },
    {
        "id": 1745,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "O compartilhamento de dados genômicos para pesquisa deve:",
        "options": {
            "A": "Comercialização de dados e filtros.",
            "B": "Equilíbrio entre ciência e privacidade.",
            "C": "Impedimento total de novas pesquisas.",
            "D": "Desprezo ao consentimento e impacto QC.",
            "E": "Ausência de restrição e processamento."
        },
        "correct": "B",
        "explanation": "A correta é a B pois concilia a necessidade científica com a proteção individual do doador de dados. As outras falham pois: A é antiético, C bloqueia progresso, D viola autonomia e E expõe dados sensíveis.",
        "difficulty": "médio"
    },
    {
        "id": 1746,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Qual das seguintes práticas é recomendada em laboratório?",
        "options": {
            "A": "Não documentar procedimentos realizados.",
            "B": "Ignorar protocolos estabelecidos em lei.",
            "C": "Trabalhar sem proteção individual (EPI).",
            "D": "Armazenar amostras sem identificação.",
            "E": "Seguir boas práticas e diretrizes atuais."
        },
        "correct": "E",
        "explanation": "A correta é a E porque a aderência a padrões técnicos assegura qualidade e segurança laboratorial. As outras falham pois: A impede rastreio, B infringe legalidade, C arrisca saúde e D compromete identificação.",
        "difficulty": "médio"
    },
    {
        "id": 1748,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Qual das seguintes práticas é recomendada em bioinformática?",
        "options": {
            "A": "Não documentar os procedimentos feitos.",
            "B": "Trabalhar sem proteção individual (EPI).",
            "C": "Seguir boas práticas e diretrizes atuais.",
            "D": "Armazenar amostras sem identificação.",
            "E": "Ignorar protocolos técnicos do setor."
        },
        "correct": "C",
        "explanation": "A correta é a C pois diretrizes atuais garantem a robustez e a reprodutibilidade dos dados digitais. As outras falham pois: A inviabiliza ciência, B é contexto físico, D causa desorganização e E compromete precisão.",
        "difficulty": "fácil"
    },
    {
        "id": 1750,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Qual das seguintes práticas é recomendada em clínica e genética médica?",
        "options": {
            "A": "Trabalhar sem proteção individual (EPI).",
            "B": "Não documentar os procedimentos feitos.",
            "C": "Ignorar os protocolos estabelecidos.",
            "D": "Seguir boas práticas e diretrizes atuais.",
            "E": "Armazenar amostras sem identificação."
        },
        "correct": "D",
        "explanation": "A correta é a D pois a prática baseada em diretrizes assegura o melhor cuidado ao paciente. As outras falham pois: A ignora biossegurança, B omite registros legais, C despadroniza atendimento e E põe vidas em risco.",
        "difficulty": "médio"
    },
    {
        "id": 1752,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Qual das seguintes práticas é recomendada em gestão e políticas públicas?",
        "options": {
            "A": "Seguir boas práticas e diretrizes atuais.",
            "B": "Trabalhar sem proteção individual (EPI).",
            "C": "Ignorar os protocolos estabelecidos.",
            "D": "Armazenar amostras sem identificação.",
            "E": "Não documentar os procedimentos feitos."
        },
        "correct": "A",
        "explanation": "A correta é a A pois seguir diretrizes garante conformidade técnica. As outras falham pois: B negligencia proteção, C ignora normas, D impede identificação e E omite registros.",
        "difficulty": "fácil"
    },
    {
        "id": 1754,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Qual das seguintes práticas é recomendada em laboratório?",
        "options": {
            "A": "Armazenar amostras sem identificação.",
            "B": "Ignorar os protocolos estabelecidos.",
            "C": "Não documentar os procedimentos feitos.",
            "D": "Seguir boas práticas e diretrizes atuais.",
            "E": "Trabalhar sem proteção individual (EPI)."
        },
        "correct": "D",
        "explanation": "A correta é a D pois boas práticas asseguram resultados confiáveis. As outras falham pois: A causa extravios, B quebra padrões, C inviabiliza revisão e E ignora segurança.",
        "difficulty": "médio"
    },
    {
        "id": 1760,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Qual das seguintes práticas é recomendada em gestão e políticas públicas?",
        "options": {
            "A": "Ignorar os protocolos estabelecidos.",
            "B": "Não documentar os procedimentos feitos.",
            "C": "Armazenar amostras sem identificação.",
            "D": "Trabalhar sem proteção individual (EPI).",
            "E": "Seguir boas práticas e diretrizes atuais."
        },
        "correct": "E",
        "explanation": "A correta é a E pois diretrizes promovem ética e eficiência. As outras falham pois: A descumpre normas, B oculta atos, C desorganiza dados e D arrisca acidentes.",
        "difficulty": "fácil"
    },
    {
        "id": 1786,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Qual das seguintes práticas é recomendada em laboratório?",
        "options": {
            "A": "Armazenar amostras sem identificação adequada.",
            "B": "Ignorar protocolos e padrões estabelecidos.",
            "C": "Não documentar os procedimentos realizados.",
            "D": "Trabalhar sem equipamentos de proteção.",
            "E": "Seguir boas práticas e diretrizes atualizadas."
        },
        "correct": "E",
        "explanation": "A correta é a E pois práticas atualizadas garantem segurança laboratorial. As outras falham pois: A dificulta rastreio, B fere legislação, C apaga evidências e D expõe riscos.",
        "difficulty": "médio"
    },
    {
        "id": 1788,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Qual das seguintes práticas é recomendada em bioinformática?",
        "options": {
            "A": "Não documentar os procedimentos realizados.",
            "B": "Ignorar protocolos e padrões estabelecidos.",
            "C": "Armazenar amostras sem identificação correta.",
            "D": "Seguir boas práticas e diretrizes atualizadas.",
            "E": "Trabalhar sem usar equipamentos de proteção."
        },
        "correct": "D",
        "explanation": "A correta é a D pois padrões asseguram integridade na bioinformática. As outras falham pois: A impossibilita auditoria, B causa falhas, C anula etiquetas e E despreza proteção.",
        "difficulty": "fácil"
    },
    {
        "id": 1790,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Qual das seguintes práticas é recomendada em clínica e genética médica?",
        "options": {
            "A": "Armazenar amostras sem identificação correta.",
            "B": "Seguir boas práticas e diretrizes atualizadas.",
            "C": "Trabalhar sem equipamentos de proteção.",
            "D": "Não documentar os procedimentos realizados.",
            "E": "Ignorar protocolos e padrões estabelecidos."
        },
        "correct": "B",
        "explanation": "A correta é a B pois seguir normas garante precisão diagnóstica. As outras falham pois: A prejudica triagem, C expõe usuários, D perde histórico e E invalida procedimentos.",
        "difficulty": "médio"
    },
    {
        "id": 1796,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Qual das seguintes práticas é recomendada em bioinformática?",
        "options": {
            "A": "Ignorar protocolos e padrões estabelecidos.",
            "B": "Armazenar amostras sem identificação correta.",
            "C": "Seguir boas práticas e diretrizes atualizadas.",
            "D": "Trabalhar sem equipamentos de proteção.",
            "E": "Não documentar os procedimentos realizados."
        },
        "correct": "C",
        "explanation": "A correta é a C pois diretrizes técnicas mantêm o rigor científico. As outras falham pois: A gera inconsistência, B confunde dados, D compromete saúde e E veta registros.",
        "difficulty": "fácil"
    },
    {
        "id": 1806,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Qual das seguintes práticas é recomendada em clínica e genética médica?",
        "options": {
            "A": "Trabalhar sem equipamentos de proteção.",
            "B": "Armazenar amostras sem identificação correta.",
            "C": "Não documentar os procedimentos realizados.",
            "D": "Ignorar protocolos e padrões estabelecidos.",
            "E": "Seguir boas práticas e diretrizes atualizadas."
        },
        "correct": "E",
        "explanation": "A correta é a E pois boas práticas otimizam o cuidado médico. As outras falham pois: A ignora biossegurança, B mistura materiais, C oculta passos e D descarta regras.",
        "difficulty": "fácil"
    },
    {
        "id": 1846,
        "area": "Laboratório",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "text": "Qual das seguintes práticas é recomendada em clínica e genética médica?",
        "options": {
            "A": "Ignorar protocolos operacionais estabelecidos.",
            "B": "Omitir a documentação de processos realizados.",
            "C": "Armazenar amostras sem identificação adequada.",
            "D": "Seguir boas práticas, padrões e diretrizes atuais.",
            "E": "Atuar sem equipamentos de proteção individual."
        },
        "correct": "D",
        "explanation": "A correta é a D pois seguir padrões assegura qualidade clínica. As outras falham pois: A corrompe rotinas, B impede fiscalização, C arrisca trocas e E negligencia EPI.",
        "difficulty": "fácil"
    },
    {
        "id": 1850,
        "area": "Laboratório",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "text": "Qual das seguintes práticas é recomendada em laboratório?",
        "options": {
            "A": "Atuar sem equipamentos de proteção individual.",
            "B": "Omitir a documentação de processos realizados.",
            "C": "Seguir boas práticas, padrões e diretrizes atuais.",
            "D": "Ignorar protocolos operacionais estabelecidos.",
            "E": "Armazenar amostras sem identificação adequada."
        },
        "correct": "C",
        "explanation": "A correta é a C pois normas técnicas sustentam a prática laboratorial. As outras falham pois: A causa danos, B quebra histórico, D ignora leis e E compromete ID.",
        "difficulty": "médio"
    },
    {
        "id": 1876,
        "area": "Bioinformática",
        "subject": "Segurança de dados",
        "text": "Qual das seguintes práticas é recomendada em bioinformática?",
        "options": {
            "A": "Omitir a documentação de processos realizados.",
            "B": "Armazenar amostras sem identificação adequada.",
            "C": "Ignorar protocolos operacionais estabelecidos.",
            "D": "Atuar sem equipamentos de proteção individual.",
            "E": "Seguir boas práticas, padrões e diretrizes atuais."
        },
        "correct": "E",
        "explanation": "Boas práticas garantem qualidade, segurança e conformidade regulatória em todos os processos.",
        "difficulty": "médio"
    },
    {
        "text": "Em estudos de associação genômica ampla (GWAS), qual métrica estatística é comumente utilizada para determinar se a associação observada entre um SNP e um fenótipo é estatisticamente significativa?",
        "options": {
            "A": "O valor-p (p-value)",
            "B": "O desvio padrão fixo",
            "C": "O coeficiente angular",
            "D": "A variância amostral",
            "E": "A mediana dos valores"
        },
        "correct": "A",
        "explanation": "O valor-p (A) é a métrica padrão para testar a significância estatística e rejeitar a hipótese nula em estudos genômicos. As demais alternativas estão incorretas pois: B mede a dispersão, C indica inclinação de reta, D avalia variabilidade estatística e E identifica o ponto central da distribuição.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Estatística aplicada à genômica",
        "id": 1877
    },
    {
        "text": "Em estudos genômicos multicêntricos nacionais vinculados ao Genoma SUS, qual é o requisito ético fundamental para que um centro participante inicie legalmente a coleta de amostras biológicas?",
        "options": {
            "A": "Aprovação do CEP do centro coordenador e do CEP local.",
            "B": "Autorização direta da CONEP sem análise do CEP local.",
            "C": "Consentimento verbal para casos de dados anonimizados.",
            "D": "Dispensa de análise ética para centros vinculados ao SUS.",
            "E": "Homologação exclusiva pelo Ministério da Saúde federal."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois estudos multicêntricos exigem a aprovação do Comitê de Ética em Pesquisa (CEP) do centro coordenador e de cada centro participante para garantir a segurança dos voluntários. As demais estão incorretas porque: B ignora a necessidade do parecer do CEP local, C exige termo escrito e não apenas verbal, D o SUS não isenta da avaliação ética obrigatória e E o Ministério não substitui o sistema CEP/CONEP.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "id": 1878
    },
    {
        "text": "No contexto do projeto Genoma SUS, ao realizar o chamado de variantes de linhagem germinativa em um pequeno grupo de amostras (N < 30) onde o VQSR não é recomendado, qual a abordagem técnica mais robusta para reduzir falsos-positivos mantendo a integridade dos dados brutos?",
        "options": {
            "A": "Aplicar Hard Filtering com parâmetros fixos de QD, FS e SOR.",
            "B": "Utilizar o Base Quality Score Recalibration com machine learning.",
            "C": "Implementar o Variant Quality Score Recalibration via GMM local.",
            "D": "Ajustar o mapeamento reduzindo o 'mismatch penalty' no BWA-MEM.",
            "E": "Realizar a exclusão de variantes com profundidade inferior a 2x."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois, em coortes pequenas, o modelo estatístico do VQSR não converge, tornando o Hard Filtering com métricas como Quality-by-Depth (QD) e FisherStrand (FS) o padrão recomendado. As demais erram porque: B foca no erro do sequenciador, não no filtro; C exige grandes volumes de dados para treinar modelos; D aumenta falsos-positivos ao aceitar muitos desalinhamentos; E utiliza um limiar de profundidade insuficiente para variantes confiáveis.",
        "area": "Bioinformática",
        "difficulty": "difícil",
        "subject": "Bioinformática e análise genômica",
        "id": 1879
    },
    {
        "text": "No preparo de bibliotecas para NGS via tagmentação enzimática, qual o efeito direto da utilização de uma concentração de DNA de entrada significativamente superior à recomendada?",
        "options": {
            "A": "Formação de fragmentos excessivamente curtos e perda de insertos.",
            "B": "Redução da eficiência de hibridização nos clusters da flowcell.",
            "C": "Geração de fragmentos longos e diminuição da diversidade da biblioteca.",
            "D": "Aumento desproporcional de dímeros de adaptadores na amostra final.",
            "E": "Inibição completa da DNA polimerase durante a etapa de PCR subsequente."
        },
        "correct": "C",
        "explanation": "A alternativa C está correta porque a estequiometria entre transposase e DNA é crucial; o excesso de DNA impede a clivagem adequada, gerando insertos longos e bibliotecas pouco diversas. As demais erram porque: A ocorre por excesso de enzima, B é efeito do sequenciamento, D resulta de baixa concentração de DNA e E depende de contaminantes.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Biologia, biologia molecular e genética",
        "id": 1880
    },
    {
        "text": "No contexto das Boas Práticas de Laboratório (BPL) em sequenciamento genômico, qual medida é indispensável para mitigar a contaminação cruzada?",
        "options": {
            "A": "Implementação de fluxo unidirecional entre pré-PCR e pós-PCR.",
            "B": "Utilização de luvas de procedimento para todas as áreas técnicas.",
            "C": "Higienização semanal das bancadas apenas com álcool etílico 70%.",
            "D": "Armazenamento de DNA extraído em freezers de acesso público geral.",
            "E": "Calibração de termocicladores apenas em casos de falha técnica."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois o fluxo unidirecional impede que amplicons contaminem amostras virgens, pilar básico da biossegurança molecular. As demais erram porque: B ignora troca obrigatória de EPI entre áreas, C exige descontaminação química mais rigorosa, D compromete a integridade e sigilo das amostras e E negligencia manutenção preventiva periódica obrigatória.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "id": 1881
    },
    {
        "text": "No âmbito do projeto Genoma SUS, o controle de qualidade do DNA genômico (gDNA) é uma etapa crítica antes da construção de bibliotecas. Considerando a necessidade de obter bibliotecas de alta complexidade para sequenciamento de genoma completo (WGS), qual dos parâmetros abaixo é o indicador mais robusto da integridade física da amostra?",
        "options": {
            "A": "Razão A260/280 medida exclusivamente por espectrofotometria de UV.",
            "B": "Visualização de rastro (smear) intenso abaixo de 500 pares de bases.",
            "C": "Valor de DIN (DNA Integrity Number) elevado em eletroforese capilar.",
            "D": "Quantificação absoluta via fluorometria ignorando o tamanho do gDNA.",
            "E": "Ausência de contaminantes fenólicos medida pela absorbância em 230nm."
        },
        "correct": "C",
        "explanation": "C é a correta pois o DIN avalia a fragmentação do gDNA via microfluídica, garantindo amostras íntegras. As demais erram porque: A não mede integridade física, B indica DNA degradado, D ignora o tamanho molecular e E avalia apenas pureza química.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Biologia, biologia molecular e genética",
        "id": 1882
    },
    {
        "text": "No fluxo de trabalho para Sequenciamento de Nova Geração (NGS) pela tecnologia Illumina, a presença de 'adapter dimers' (dímeros de adaptadores) é monitorada rigorosamente durante o controle de qualidade das bibliotecas. Qual é a principal consequência técnica dessa contaminação para o processo de sequenciamento?",
        "options": {
            "A": "Redução sistemática do Q-score médio por erros de incorporação.",
            "B": "Consumo excessivo de clusters por sequências curtas sem inserto.",
            "C": "Perda de diversidade de bases nos primeiros ciclos de leitura.",
            "D": "Inibição química da DNA polimerase por adaptadores não ligados.",
            "E": "Fragmentação inespecífica do DNA genômico durante a bridge PCR."
        },
        "correct": "B",
        "explanation": "A alternativa B é a correta pois os dímeros de adaptadores, por serem moléculas menores, hibridizam e amplificam com maior eficiência na célula de fluxo, ocupando o espaço de leitura que seria destinado aos fragmentos de DNA genômico. As demais estão incorretas porque: A não altera a precisão química da enzima, C depende da complexidade das sequências iniciais, D não causa inibição da polimerase e E descreve processo cronologicamente impossível no fluxo.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Biologia, biologia molecular e genética",
        "id": 1883
    },
    {
        "text": "No fluxo de trabalho de sequenciamento de nova geração (NGS), a etapa de controle de qualidade das bibliotecas finais é determinante para o sucesso do agrupamento (clustering) em plataformas Illumina. Qual combinação de dados permite o cálculo exato da molaridade da biblioteca para a normalização?",
        "options": {
            "A": "Absorbância em 260nm e a pureza avaliada pela razão 260/230.",
            "B": "Concentração por fluorimetria e o tamanho médio de fragmentos.",
            "C": "Valor de RIN acima de 8.0 e a concentração via espectrofotometria.",
            "D": "Volume final recuperado e a presença de dímeros de adaptadores.",
            "E": "Quantificação de DNA total e a concentração de sais residuais."
        },
        "correct": "B",
        "explanation": "A B é a correta pois o cálculo da molaridade exige a concentração específica de DNA de fita dupla e a extensão média dos fragmentos para a normalização do pool. As demais erram porque: A é imprecisa por detectar contaminantes e DNA simples, C avalia integridade de RNA e não de bibliotecas, D não fornece a densidade de moléculas na amostra e E ignora o peso molecular médio dos fragmentos.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "id": 1884
    },
    {
        "text": "Na preparação de bibliotecas de DNA para sequenciamento de nova geração (NGS) pela plataforma Illumina, após a fragmentação, o DNA passa pelos processos de reparo de extremidades (End Repair) e adição de uma base 'A' (A-tailing). Qual a finalidade técnica essencial da etapa de A-tailing?",
        "options": {
            "A": "Permitir a ligação de adaptadores com extremidade T-overhang.",
            "B": "Evitar que os adaptadores sofram degradação por exonucleases 3'.",
            "C": "Garantir que apenas fragmentos de DNA fita simples se liguem.",
            "D": "Facilitar a hibridização do DNA com os primers de amplificação.",
            "E": "Promover a circularização de fragmentos antes de gerar clusters."
        },
        "correct": "A",
        "explanation": "A alternativa A é a correta pois a adição de 'A' em 3' permite o pareamento estável com o 'T' protuberante dos adaptadores comerciais, garantindo a ligação direcionada. As demais erram porque: B não confere proteção enzimática, C ignora a natureza dupla-fita, D precede a etapa de ponte e E aplica-se a outras tecnologias.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "id": 1885
    },
    {
        "text": "No processo de preparação de bibliotecas para sequenciamento de nova geração (NGS), a etapa de purificação e seleção de tamanho utilizando esferas magnéticas (SPRI beads) é crítica. Considerando a relação entre a concentração de PEG/NaCl e o tamanho dos fragmentos de DNA capturados, qual afirmação descreve corretamente o princípio aplicado para otimizar o rendimento da biblioteca?",
        "options": {
            "A": "Menores razões de esferas/DNA favorecem a ligação de fragmentos curtos.",
            "B": "Maiores razões de esferas/DNA excluem fragmentos de DNA de alto peso.",
            "C": "Reduzir a concentração de PEG promove a precipitação de DNA genômico.",
            "D": "Maiores razões de esferas/DNA permitem a captura de fragmentos menores.",
            "E": "Aumentar o volume de etanol na lavagem inibe a ação das DNA ligases."
        },
        "correct": "D",
        "explanation": "A alternativa D é correta pois o aumento da razão esferas/amostra eleva a concentração de PEG, permitindo que fragmentos menores percam solubilidade e se liguem às esferas. As demais erram porque: A e B invertem a lógica de exclusão por tamanho, C impede a precipitação por falta de agente aglomerante e E foca em inibição enzimática irrelevante à purificação.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "id": 1886
    },
    {
        "text": "No preparo de bibliotecas para Sequenciamento de Nova Geração (NGS), o aumento indesejado na taxa de duplicatas de PCR (PCR duplication) está diretamente relacionado a qual fator técnico?",
        "options": {
            "A": "Uso excessivo de ciclos térmicos na etapa de enriquecimento.",
            "B": "Armazenamento prolongado do DNA extraído a -20 graus Celsius.",
            "C": "Aplicação de buffers de lavagem com baixa concentração salina.",
            "D": "Escolha de adaptadores de sequenciamento com índices curtos.",
            "E": "Realização da etapa de fragmentação em temperaturas elevadas."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois o excesso de ciclos de PCR satura a reação e gera cópias idênticas dos mesmos fragmentos, reduzindo a complexidade da biblioteca. As demais falham porque: B afeta apenas a integridade química, C prejudica a purificação das pérolas, D impacta apenas a demultiplexação e E altera o tamanho dos fragmentos.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Biologia, biologia molecular e genética",
        "id": 1887
    },
    {
        "text": "No contexto do preparo de bibliotecas genômicas por tagmentação (baseada em transposases), a etapa de quantificação inicial do DNA é crucial. Qual procedimento assegura a acurácia necessária para o sucesso desse protocolo?",
        "options": {
            "A": "A aplicação da espectrofotometria UV para detectar contaminantes.",
            "B": "A quantificação por fluorometria para determinar a massa de dsDNA real.",
            "C": "A seleção de fragmentos menores que 100pb para otimizar os índices.",
            "D": "A obtenção de um RIN superior a 8.0 para garantir a estabilidade.",
            "E": "A incubação a 65°C para acelerar a ligação física dos adaptadores."
        },
        "correct": "B",
        "explanation": "A resposta B é a correta pois a tagmentação exige proporção estequiométrica exata entre transposase e dsDNA, o que demanda a especificidade da fluorometria. As demais erram porque: A não diferencia os tipos de ácidos nucleicos; C indica degradação excessiva do DNA genômico; D é um parâmetro exclusivo para análise de RNA e E inativa a enzima antes da fragmentação adequada.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "id": 1888
    },
    {
        "text": "Em pesquisas genômicas multicêntricas conduzidas no Brasil, como deve ser processada a aprovação ética para garantir a conformidade com as normas do Conselho Nacional de Saúde?",
        "options": {
            "A": "Aprovação prévia pelo sistema CEP/CONEP em todos os centros.",
            "B": "Validação exclusiva pelo comitê de ética do centro coordenador.",
            "C": "Utilização de Termo de Consentimento único sem adaptação local.",
            "D": "Armazenamento de DNA em biobancos sem autorização do doador.",
            "E": "Isenção de registro na CONEP para estudos de genômica humana."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois estudos multicêntricos exigem aprovação do sistema CEP/CONEP em todas as instituições participantes para zelar pela integridade dos sujeitos. As demais estão incorretas porque: B fere a autonomia dos comitês locais; C ignora particularidades regionais do consentimento; D viola regras de armazenamento de material genético; E desconsidera a obrigatoriedade de registro em pesquisas humanas.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "id": 1889
    },
    {
        "text": "No contexto da análise de dados de sequenciamento de nova geração (NGS), qual software é amplamente reconhecido como o padrão para a identificação de variantes (variant calling) em genomas humanos?",
        "options": {
            "A": "O software GATK (Genome Analysis Toolkit)",
            "B": "O algoritmo BLAST (Local Alignment Tool)",
            "C": "O sistema PyMOL (Molecular Viewer Tool)",
            "D": "O pacote Cytoscape (Network Visualizer)",
            "E": "O programa MEGA (Evolutionary Genetics)"
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois o GATK é o padrão ouro para identificação de variantes genômicas em larga escala. As demais erram porque: B foca em alinhamento local de sequências, C visualiza estruturas moleculares tridimensionais, D analisa redes de interações biológicas e E foca em análises evolutivas filogenéticas.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Bioinformática e análise genômica",
        "id": 1890
    },
    {
        "text": "No contexto do processamento de amostras para o Genoma SUS, a manutenção da integridade dos dados genômicos e a segurança da equipe dependem da adesão rigorosa a protocolos de qualidade e biossegurança. Qual das seguintes práticas é essencial para evitar a contaminação cruzada e garantir a validade dos resultados em um laboratório de biologia molecular?",
        "options": {
            "A": "Calibração de micropipetas e segregação de áreas pré e pós-PCR.",
            "B": "Mistura de reagentes e amostras de DNA no mesmo fluxo laminar.",
            "C": "Uso de jalecos de algodão na área de extração sem proteção extra.",
            "D": "Higienização de bancadas apenas com água destilada e detergente.",
            "E": "Descarte de ponteiras contaminadas em sacos plásticos não selados."
        },
        "correct": "A",
        "explanation": "A alternativa A é a correta pois a calibração garante precisão e a segregação de áreas previne contaminação por amplicons. As demais erram porque: B mistura reagentes e amostras gerando contaminação; C oferece proteção biológica insuficiente contra aerossóis; D não elimina ácidos nucleicos das bancadas; E exige selagem e descarte em recipientes específicos.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "id": 1891
    },
    {
        "text": "No preparo de bibliotecas para Sequenciamento de Nova Geração (NGS) no contexto de projetos genômicos populacionais, a etapa de fragmentação é crítica. Sobre a técnica de tagmentação (fragmentação enzimática via transposases) em comparação à fragmentação mecânica por ultrassom, assinale a afirmação correta:",
        "options": {
            "A": "A tagmentação exige maiores concentrações iniciais de DNA genômico.",
            "B": "A fragmentação mecânica é mais sensível a resíduos químicos de extração.",
            "C": "A tagmentação integra simultaneamente fragmentação e ligação de adaptadores.",
            "D": "O ultrassom dispensa a etapa de reparo de extremidades no protocolo.",
            "E": "A tagmentação garante cobertura uniforme em regiões de alto conteúdo GC."
        },
        "correct": "C",
        "explanation": "A alternativa C está correta pois a tagmentação utiliza transposases para clivar o DNA e inserir adaptadores simultaneamente, agilizando o preparo da biblioteca. As demais erram porque: A demanda pouco material de entrada, B é resiliente a contaminantes químicos, D necessita de reparo enzimático posterior e E exibe forte viés em regiões GC.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Biologia, biologia molecular e genética",
        "id": 1892
    },
    {
        "text": "No contexto de um laboratório de genômica que realiza Sequenciamento de Nova Geração (NGS), a prevenção de contaminação cruzada é vital para a integridade dos dados e segurança dos analistas. Qual medida de Boas Práticas de Laboratório (BPL) é indispensável para mitigar o risco de contaminação por amplicons em áreas de pré-amplificação?",
        "options": {
            "A": "Implementar fluxo unidirecional de trabalho da área limpa para a suja.",
            "B": "Utilizar autoclaves de grande porte dentro das salas de extração de DNA.",
            "C": "Compartilhar conjuntos de pipetas entre salas de pré-PCR e de pós-PCR.",
            "D": "Armazenar todos os reagentes e amostras em um único freezer de -80°C.",
            "E": "Processar as amostras em bancadas abertas sem o uso de filtros HEPA."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois o fluxo unidirecional impede que amplicons contaminem amostras virgens, mantendo a integridade analítica conforme as BPL. As demais erram porque: B gera calor excessivo e aerossóis, C causa contaminação cruzada severa, D ignora riscos de degradação cruzada e E desconsidera barreiras físicas obrigatórias.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "id": 1893
    },
    {
        "text": "No fluxo de análise de variantes germinativas seguindo as práticas recomendadas do GATK, qual etapa é essencial após o alinhamento das leituras e antes da chamada de variantes?",
        "options": {
            "A": "Marcação de duplicatas e recalibração de bases (BQSR).",
            "B": "Indexação de genoma e criação do dicionário de contigs.",
            "C": "Filtragem de variantes por profundidade e qualidade.",
            "D": "Conversão de arquivos FASTQ para o formato binário CRAM.",
            "E": "Montagem de novo para reconstrução de novos haplótipos."
        },
        "correct": "A",
        "explanation": "A alternativa A é a correta pois a marcação de duplicatas e o BQSR preparam o BAM minimizando artefatos técnicos antes do variant calling. As demais erram porque: B ocorre antes do alinhamento, C ocorre após o calling, D é etapa de armazenamento e E foca em montagens genômicas completas.",
        "area": "Bioinformática",
        "difficulty": "médio",
        "subject": "Bioinformática e análise genômica",
        "id": 1894
    },
    {
        "text": "No contexto de um laboratório de sequenciamento de nova geração (NGS) integrado ao projeto Genoma SUS, a manutenção da qualidade e a prevenção de contaminantes são pilares das Boas Práticas de Laboratório (BPL). Qual medida operacional é indispensável para evitar a contaminação cruzada de amostras?",
        "options": {
            "A": "Implementação de fluxo unidirecional entre áreas pré e pós-PCR.",
            "B": "Armazenamento conjunto de reagentes puros e amostras de DNA.",
            "C": "Calibração de equipamentos sem a necessidade de rastreabilidade.",
            "D": "Descarte de resíduos biológicos infectantes em lixo comum selado.",
            "E": "Uso facultativo de Equipamentos de Proteção Individual em BPL."
        },
        "correct": "A",
        "explanation": "A alternativa A é a correta pois o fluxo unidirecional impede a contaminação cruzada por amplicons em ambientes de NGS. As demais erram porque: B favorece contaminação de insumos limpos, C viola requisitos de rastreabilidade metrológica, D descumpre normas de biossegurança para descartes e E negligencia segurança obrigatória do analista.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "id": 1895
    },
    {
        "text": "No âmbito de estudos multicêntricos do Genoma SUS, o processo de aprovação ética e a gestão de biobancos devem seguir as normas do sistema CEP/CONEP. Considerando a regulamentação brasileira vigente para pesquisas genômicas e a segurança de dados, assinale a alternativa correta:",
        "options": {
            "A": "O centro coordenador centraliza a aprovação, dispensando os locais.",
            "B": "O TCLE para biobancos deve ter validade indeterminada e genérica.",
            "C": "Cada instituição participante requer aprovação ética do seu CEP local.",
            "D": "A CONEP avalia apenas estudos com financiamento externo ao governo.",
            "E": "Dados genômicos são considerados não sensíveis após a criptografia."
        },
        "correct": "C",
        "explanation": "A alternativa C está correta pois a norma brasileira exige aprovação individual de cada centro participante para garantir a responsabilidade ética local. As demais erram porque: A fere a autonomia de análise dos centros locais, B veda o uso de consentimento genérico indeterminado, D obriga análise da CONEP em áreas temáticas especiais e E classifica material genético como dado pessoal sensível.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "id": 1896
    },
    {
        "text": "No contexto do pipeline GATK Best Practices para análise de variantes germinativas, qual etapa é especificamente projetada para corrigir erros sistemáticos nos scores de qualidade atribuídos pelo sequenciador?",
        "options": {
            "A": "MarkDuplicates para remover redundância de PCR.",
            "B": "Base Quality Score Recalibration (BQSR).",
            "C": "HaplotypeCaller para a detecção de variantes.",
            "D": "Variant Quality Score Recalibration (VQSR).",
            "E": "Indexação de referência usando o algoritmo BWA."
        },
        "correct": "B",
        "explanation": "A alternativa B é a correta, pois o BQSR utiliza modelos estatísticos para ajustar os scores de qualidade baseados em erros sistemáticos do sequenciador. As demais estão incorretas porque: A foca em artefatos de amplificação; C realiza a identificação de polimorfismos; D filtra variantes em nível de conjunto de dados; E prepara o genoma para o alinhamento.",
        "area": "Bioinformática",
        "difficulty": "médio",
        "subject": "Bioinformática e análise genômica",
        "id": 1897
    },
    {
        "text": "No fluxo de bioinformática do Genoma SUS, qual ferramenta é fundamental para a manipulação, indexação e conversão de arquivos de alinhamento de sequências nos formatos SAM e BAM?",
        "options": {
            "A": "O programa Bowtie2",
            "B": "O programa FastQC",
            "C": "O programa SAMtools",
            "D": "O programa BWA-MEM",
            "E": "O programa BLASTn"
        },
        "correct": "C",
        "explanation": "O software SAMtools é a resposta correta por ser o padrão para pós-processamento de alinhamentos SAM/BAM. As demais erram porque: A realiza apenas o alinhamento inicial, B foca no controle de qualidade das sequências, D é um alinhador de sequências curtas e E compara sequências contra bancos de dados.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Programação e ferramentas computacionais",
        "id": 1898
    },
    {
        "text": "No contexto do processamento de amostras genômicas para o projeto Genoma SUS, qual conduta reflete a aplicação conjunta de princípios de Biossegurança e Boas Práticas Laboratoriais (BPL)?",
        "options": {
            "A": "Segregação de áreas de pré e pós-PCR com fluxo unidirecional.",
            "B": "Uso de cabines de segurança biológica apenas para amostras de RNA.",
            "C": "Registro de desvios técnicos apenas em casos de perda da amostra.",
            "D": "Higienização de bancadas com álcool 70% apenas ao final do turno.",
            "E": "Descarte de ponteiras contaminadas em sacos plásticos sem vedação."
        },
        "correct": "A",
        "explanation": "A alternativa A é a correta pois o estabelecimento de fluxo unidirecional e a separação de áreas previnem a contaminação cruzada por amplicons em ensaios moleculares de alta sensibilidade. As demais erram porque: B restringe proteção necessária a todos biológicos, C ignora registro mandatório de qualquer inconformidade técnica, D negligencia limpeza antisséptica antes e durante o processo e E viola normas de manejo seguro de resíduos perfurocortantes.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "id": 1899
    },
    {
        "text": "No fluxo de análise de dados genômicos do Genoma SUS, qual ferramenta é fundamental para a manipulação, ordenação e indexação de arquivos de alinhamento nos formatos SAM e BAM?",
        "options": {
            "A": "BWA: software focado no alinhamento de leituras contra genomas de referência.",
            "B": "FastQC: ferramenta para análise do controle de qualidade de arquivos FASTQ.",
            "C": "SAMtools: conjunto de programas para manipular arquivos nos formatos SAM e BAM.",
            "D": "GATK: plataforma robusta para a identificação de variantes em dados genômicos.",
            "E": "BLAST: sistema para busca de similaridades entre sequências em bancos de dados."
        },
        "correct": "C",
        "explanation": "A alternativa C está correta pois o SAMtools é o pacote essencial para gerenciar formatos de alinhamento binários. As demais erram porque: A foca no alinhamento, B verifica qualidade básica, D detecta variantes genômicas e E compara sequências primárias.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Programação e ferramentas computacionais",
        "id": 1900
    },
    {
        "text": "Em laboratórios de genômica integrados ao Genoma SUS, a conformidade com as Boas Práticas de Laboratório (BPL) e biossegurança é crucial. Qual medida é fundamental para evitar a contaminação cruzada e garantir a validade dos resultados?",
        "options": {
            "A": "Descartar resíduos biológicos em recipientes de lixo comum não sinalizado.",
            "B": "Autoclavar todos os reagentes químicos e kits de sequenciamento antes do uso.",
            "C": "Segregar o fluxo de trabalho entre áreas pré e pós-amplificação de ácidos.",
            "D": "Armazenar reagentes e amostras clínicas no mesmo equipamento de refrigeração.",
            "E": "Dispensar o uso de proteção individual ao manipular bibliotecas purificadas."
        },
        "correct": "C",
        "explanation": "C é a correta pois a segregação física e de fluxo evita a contaminação cruzada por amplicons, essencial na garantia da qualidade e biossegurança. As demais erram porque: A viola normas de descarte biológico, B degrada componentes enzimáticos sensíveis, D permite contaminação cruzada química e E desrespeita protocolos de biossegurança.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "id": 1901
    },
    {
        "text": "No processamento de dados de sequenciamento de nova geração (NGS), qual ferramenta é essencial para manipular e converter arquivos nos formatos SAM e BAM?",
        "options": {
            "A": "SAMtools: manipulação e processamento de alinhamentos.",
            "B": "BLAST: busca por similaridade local entre sequências.",
            "C": "Bowtie2: alinhamento ultrarrápido para leituras curtas.",
            "D": "FastQC: controle de qualidade de leituras brutas FASTQ.",
            "E": "BWA: mapeador de sequências contra genomas referência."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois o SAMtools é o conjunto de ferramentas padrão para ler, filtrar e indexar alinhamentos de DNA em formatos SAM/BAM. As demais erram porque: B foca em busca de similaridade, C realiza apenas o alinhamento, D avalia qualidade de leituras brutas e E mapeia sequências no genoma.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Programação e ferramentas computacionais",
        "id": 1902
    },
    {
        "text": "No contexto de análise genômica para detecção de variantes germinativas via GATK Best Practices, qual procedimento técnico é crucial para aumentar a precisão na chamada de variantes em regiões caracterizadas por indels e micro-repetições?",
        "options": {
            "A": "Realinhamento local via montagem de grafos de De Bruijn.",
            "B": "Calibração de escores de qualidade via machine learning.",
            "C": "Indexação do genoma de referência via Burrows-Wheeler.",
            "D": "Normalização de variantes para representação canônica.",
            "E": "Filtragem de artefatos em regiões com alto conteúdo GC."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois o GATK HaplotypeCaller realiza a montagem de novo local para identificar haplótipos reais em vez de confiar apenas em alinhamentos globais. As demais erram porque: B calibra qualidade de bases, C indexa o genoma, D padroniza o arquivo VCF e E trata vieses de composição.",
        "area": "Bioinformática",
        "difficulty": "difícil",
        "subject": "Bioinformática e análise genômica",
        "id": 1903
    },
    {
        "text": "No contexto do projeto Genoma SUS, o processamento de dados de sequenciamento de nova geração (NGS) segue fluxos padronizados. Qual ferramenta e formato de arquivo são utilizados para a etapa de identificação de variantes (variant calling) seguindo as boas práticas do GATK?",
        "options": {
            "A": "SAMtools para a conversão de FASTQ em arquivos BAM indexados.",
            "B": "BCFtools para a indexação de genomas de referência tipo FASTA.",
            "C": "HaplotypeCaller para a geração de arquivos VCF a partir de BAM.",
            "D": "Picard Tools para a visualização de variantes em tempo real.",
            "E": "Bowtie2 para a filtragem de variantes em arquivos CRAM brutos."
        },
        "correct": "C",
        "explanation": "C é a correta pois o HaplotypeCaller do GATK identifica variantes produzindo arquivos VCF. As demais erram porque: A foca em manipulação de alinhamentos, B manipula VCFs/BCFs, D gerencia metadados/arquivos e E realiza apenas alinhamento inicial.",
        "area": "Bioinformática",
        "difficulty": "médio",
        "subject": "Bioinformática e análise genômica",
        "id": 1904
    },
    {
        "text": "No fluxo de análise de bioinformática para o Genoma SUS, qual é a principal utilidade da ferramenta SAMtools?",
        "options": {
            "A": "Manipular e converter formatos de alinhamento como SAM e BAM.",
            "B": "Realizar a extração física de DNA de amostras de sangue total.",
            "C": "Analisar dados de expressão proteica via Western Blotting.",
            "D": "Executar a montagem de novo de genomas bacterianos complexos.",
            "E": "Visualizar estruturas terciárias de proteínas em alta resolução."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta porque o SAMtools é essencial para processar, ordenar e converter arquivos resultantes do alinhamento de sequências de DNA. As demais estão incorretas pois: B é um procedimento laboratorial, C foca em proteômica, D realiza montagem e E modela proteínas.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Bioinformática e análise genômica",
        "id": 1905
    },
    {
        "text": "No contexto do processamento de dados de sequenciamento de nova geração (NGS), qual é a principal função da ferramenta SAMtools na rotina de bioinformática?",
        "options": {
            "A": "Realizar a anotação funcional de variantes genéticas raras.",
            "B": "Manipular e converter arquivos de alinhamento SAM e BAM.",
            "C": "Executar a montagem de novo de genomas bacterianos curtos.",
            "D": "Visualizar redes de interação proteína-proteína complexas.",
            "E": "Prever a estrutura terciária de proteínas via inteligência."
        },
        "correct": "B",
        "explanation": "A alternativa B é a correta pois o SAMtools é fundamental para indexar, visualizar e processar alinhamentos em formatos binários eficientes. As demais erram porque: a anotação funcional requer ferramentas como VEP ou SnpEff; montagem de novo utiliza softwares específicos como SPAdes ou Velvet; redes de proteínas são analisadas no Cytoscape ou STRING; predição estrutural é tarefa de ferramentas como AlphaFold.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Programação e ferramentas computacionais",
        "id": 1906
    },
    {
        "text": "Ao implementar o pipeline GATK Best Practices para o processamento de centenas de exomas no Genoma SUS, qual estratégia é recomendada para solucionar o problema do 'N+1' e assegurar a detecção robusta de variantes raras em larga escala?",
        "options": {
            "A": "Chamada individual com posterior união simples de arquivos VCF.",
            "B": "Uso de HaplotypeCaller em modo GVCF seguido de Joint Genotyping.",
            "C": "Alinhamento múltiplo simultâneo via Burrows-Wheeler Transform.",
            "D": "Filtragem por Hard Filtering antes da consolidação de amostras gVCF.",
            "E": "Re-calibração de bases aplicada apenas após o Variant Recalibrator."
        },
        "correct": "B",
        "explanation": "A alternativa B é a correta pois o modo GVCF permite adicionar novas amostras sem reprocessar as antigas, preservando informações de cobertura em locais não-variantes essenciais para o Joint Genotyping. As demais erram porque: A ignora sítios de referência; C foca exclusivamente em alinhamento; D inverte a ordem lógica da filtragem; E atrasa erroneamente o pré-processamento das bases.",
        "area": "Bioinformática",
        "difficulty": "difícil",
        "subject": "Bioinformática e análise genômica",
        "id": 1907
    },
    {
        "text": "Em estudos genômicos multicêntricos, como os realizados pelo Genoma SUS, qual diretriz é fundamental para conciliar a eficiência operacional com o rigor ético exigido pela legislação brasileira?",
        "options": {
            "A": "Obter aprovação ética apenas no centro coordenador do projeto.",
            "B": "Dispensar o TCLE em amostras vindas de bancos de dados públicos.",
            "C": "Padronizar protocolos e submeter ao sistema de ética CEP/CONEP.",
            "D": "Compartilhar dados identificados para agilizar o diagnóstico.",
            "E": "Priorizar o sigilo das instituições sobre a autonomia do sujeito."
        },
        "correct": "C",
        "explanation": "A alternativa C está correta pois a padronização técnica aliada à aprovação pelo sistema CEP/CONEP garante a validade científica e o respeito aos direitos dos participantes. As demais erram porque: A omite a responsabilidade ética de cada centro, B ignora exigências de consentimento para dados genéticos, D compromete a privacidade com dados identificados e E fere o princípio da autonomia individual.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "id": 1908
    },
    {
        "text": "Em pipelines de bioinformática, qual ferramenta é amplamente utilizada para a manipulação, ordenação e indexação de arquivos de alinhamento em formato BAM?",
        "options": {
            "A": "FastQC para controle de qualidade bruto",
            "B": "BWA para o mapeamento das leituras",
            "C": "SAMtools para processamento de BAM",
            "D": "GATK para identificação de variantes",
            "E": "MultiQC para relatórios agregados"
        },
        "correct": "C",
        "explanation": "O SAMtools é a biblioteca fundamental para manipulação de arquivos SAM/BAM, permitindo operações essenciais como ordenação e indexação de alinhamentos. As outras opções estão incorretas pois: A foca em qualidade de leituras brutas, B realiza o alinhamento inicial contra a referência, D é voltado para a detecção de polimorfismos e E consolida métricas de múltiplas ferramentas.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Programação e ferramentas computacionais",
        "id": 1909
    },
    {
        "text": "No preparo de bibliotecas para sequenciamento de nova geração (NGS), a seleção de tamanho com esferas magnéticas (SPRI) é essencial. Qual o efeito direto de reduzir a proporção volume de esferas/volume de DNA de 1.8x para 0.5x?",
        "options": {
            "A": "Promove a recuperação seletiva de fragmentos de DNA pequenos e curtos.",
            "B": "Aumenta a taxa de sucesso da ligação de adaptadores em DNA longo.",
            "C": "Favorece a ligação e purificação de fragmentos de DNA de maior tamanho.",
            "D": "Garante a eliminação absoluta de dímeros de adaptadores da amostra.",
            "E": "Promove a inibição da DNA polimerase em ciclos de PCR posteriores."
        },
        "correct": "C",
        "explanation": "A alternativa C está correta pois a redução da concentração de PEG e sais ao diminuir a proporção de esferas impede a precipitação de fragmentos pequenos, mantendo apenas os de maior peso molecular. As demais erram porque: A recupera fragmentos grandes, B não altera cinética de ligação, D não remove resíduos completamente e E não tem efeito inibitório enzimático.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Biologia, biologia molecular e genética",
        "id": 1910
    },
    {
        "text": "No fluxo de análise de bioinformática para processamento de sequenciamento de nova geração, qual ferramenta é amplamente utilizada para filtrar e manipular arquivos de alinhamento no formato BAM?",
        "options": {
            "A": "BCFtools para realizar a chamada de variantes genômicas.",
            "B": "GATK para o controle de qualidade inicial das leituras.",
            "C": "SAMtools para processar arquivos de alinhamento tipo BAM.",
            "D": "FastQC para o alinhamento das leituras contra o genoma.",
            "E": "MultiQC para indexar arquivos de referência tipo FASTA."
        },
        "correct": "C",
        "explanation": "A alternativa C está correta pois o SAMtools é a ferramenta essencial para manipulação e filtragem de arquivos de alinhamento. As demais erram porque: A identifica variantes, B realiza pré-processamento genômico, D avalia qualidade técnica e E agrupa múltiplos relatórios.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Bioinformática e análise genômica",
        "id": 1911
    },
    {
        "text": "No fluxo de análise de bioinformática para sequenciamento de nova geração (NGS), qual formato de arquivo é utilizado especificamente para registrar as variações genéticas identificadas em relação a uma referência?",
        "options": {
            "A": "O arquivo FASTQ, que armazena leituras brutas e qualidades.",
            "B": "O arquivo BAM, que armazena os dados de alinhamento binário.",
            "C": "O arquivo VCF, que registra posições de variantes e genótipos.",
            "D": "O arquivo FASTA, que representa sequências de referência puras.",
            "E": "O arquivo SAM, que contém mapeamentos em formato de texto."
        },
        "correct": "C",
        "explanation": "A alternativa C está correta pois o VCF é o formato padrão para representar variantes genéticas e genótipos em bioinformática. As demais estão incorretas porque: A armazena apenas leituras brutas e qualidades; B é o formato binário para alinhamentos mapeados; D foca em sequências puras de nucleotídeos; e E é a versão texto do mapeamento.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Bioinformática e análise genômica",
        "id": 1912
    },
    {
        "text": "No processamento de dados de sequenciamento em larga escala, o pacote SAMtools é fundamental para a manipulação de alinhamentos. Qual comando dessa ferramenta é especificamente utilizado para converter um arquivo BAM (binário) em um formato SAM (texto) legível para o usuário?",
        "options": {
            "A": "samtools view",
            "B": "samtools sort",
            "C": "samtools index",
            "D": "samtools flagstat",
            "E": "samtools merge"
        },
        "correct": "A",
        "explanation": "O comando view é a função padrão do SAMtools para visualizar, filtrar e converter alinhamentos entre formatos binários e texto. As demais alternativas estão incorretas pois: B apenas ordena alinhamentos, C gera índices de acesso, D extrai estatísticas das flags e E unifica múltiplos arquivos.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Programação e ferramentas computacionais",
        "id": 1913
    },
    {
        "text": "No contexto do projeto Genoma SUS, ao realizar o processamento de centenas de genomas completos (WGS) seguindo as recomendações do GATK, qual abordagem de controle de qualidade é mais robusta para distinguir variantes biológicas reais de artefatos técnicos de sequenciamento?",
        "options": {
            "A": "VQSR por modelagem de mistura gaussiana sobre scores de anotação.",
            "B": "Hard filtering baseado exclusivamente em thresholds fixos de DP e QD.",
            "C": "Filtro bayesiano aplicado apenas em regiões de baixa complexidade.",
            "D": "Alinhamento local via Smith-Waterman para remoção de erros de base.",
            "E": "Mapeamento de leituras contra referência via BWA-MEM sem indels."
        },
        "correct": "A",
        "explanation": "A alternativa A é correta pois o VQSR utiliza aprendizado de máquina para modelar a distribuição de variantes em grandes coortes. B erra pois thresholds fixos ignoram a covariância das anotações. C falha pois limita o filtro a regiões específicas do genoma. D é incorreta pois Smith-Waterman é algoritmo de alinhamento, não filtro. E está errada pois o alinhamento não substitui a filtragem estatística.",
        "area": "Bioinformática",
        "difficulty": "difícil",
        "subject": "Bioinformática e análise genômica",
        "id": 1914
    },
    {
        "text": "No processamento de dados de sequenciamento genômico, qual ferramenta é essencial para a manipulação, ordenação e indexação de arquivos nos formatos SAM e BAM?",
        "options": {
            "A": "BLAST+ para buscas de similaridade local.",
            "B": "SAMtools para processar os alinhamentos.",
            "C": "FastQC para verificar qualidade das reads.",
            "D": "Trimmomatic para filtrar as sequências.",
            "E": "MultiQC para a consolidação de métricas."
        },
        "correct": "B",
        "explanation": "A alternativa B está correta pois o SAMtools permite manipular e indexar arquivos de mapeamento SAM e BAM. As demais erram porque: A foca em similaridade local, C checa qualidade inicial, D limpa dados brutos e E agrupa estatísticas.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Programação e ferramentas computacionais",
        "id": 1915
    },
    {
        "text": "Durante o preparo de bibliotecas para sequenciamento em larga escala (NGS) utilizando células de fluxo padronizadas, qual estratégia é fundamental para mitigar o fenômeno de 'index hopping' e assegurar a acurácia da demultiplexação?",
        "options": {
            "A": "Uso de unique dual-indexes e remoção de adaptadores livres.",
            "B": "Quantificação por espectrofotometria para pooling equimolar.",
            "C": "Adição de excesso de PhiX para aumentar diversidade de bases.",
            "D": "Aumento de ciclos de PCR para garantir maior massa de DNA.",
            "E": "Desnaturação com NaOH em altas temperaturas para estabilidade."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois UDIs mitigam o impacto do index hopping e a limpeza de adaptadores remove substratos para recombinação em células de fluxo padronizadas. As demais erram porque: B carece de sensibilidade e especificidade molecular, C não atua na prevenção de troca de índices, D favorece a formação de duplicatas e quimeras e E descreve apenas a desnaturação convencional das bibliotecas.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "id": 1916
    },
    {
        "text": "No contexto de um laboratório de genômica voltado ao sequenciamento de nova geração (NGS), qual prática é fundamental para garantir a biossegurança e prevenir a contaminação cruzada entre as etapas do processo?",
        "options": {
            "A": "Utilizar fluxo unidirecional das áreas pré-PCR para áreas pós-PCR.",
            "B": "Descartar ponteiras com filtro diretamente em recipientes de lixo comum.",
            "C": "Compartilhar pipetas automáticas entre salas de extração e amplificação.",
            "D": "Armazenar reagentes químicos inflamáveis em geladeiras sem ventilação.",
            "E": "Manipular amostras biológicas sem luvas dentro de cabines de segurança."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois o fluxo unidirecional evita a contaminação por amplicons em áreas limpas. As demais erram porque: B exige descarte biológico, C causa contaminação cruzada, D oferece risco de explosão e E viola normas de biossegurança.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "id": 1917
    },
    {
        "text": "No processamento de dados genômicos via GATK, o filtro FisherStrand (FS) é utilizado para identificar o viés de fita (Strand Bias). Qual a interpretação correta de um valor elevado de FS em um sítio de variante?",
        "options": {
            "A": "Indica maior probabilidade de ser um erro sistemático de sequenciamento.",
            "B": "Sugere alta fidelidade da polimerase durante a síntese da fita complementar.",
            "C": "Reflete a eficiência superior do mapeamento de leituras curtas no genoma.",
            "D": "Representa a uniformidade de cobertura entre os alelos paterno e materno.",
            "E": "Melhora a precisão na detecção de variantes estruturais em regiões repetitivas."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois valores elevados de FS indicam que a variante aparece desproporcionalmente em apenas uma das fitas de DNA, sinalizando prováveis artefatos técnicos de sequenciamento. As demais estão incorretas pois: B avalia a performance enzimática; C aborda a qualidade do mapeamento; D refere-se à proporção alélica; E trata de rearranjos estruturais complexos.",
        "area": "Bioinformática",
        "difficulty": "difícil",
        "subject": "Bioinformática e análise genômica",
        "id": 1918
    },
    {
        "text": "No processamento de dados de Sequenciamento de Nova Geração (NGS), qual formato de arquivo é projetado especificamente para tabular variantes genômicas e suas respectivas anotações de qualidade?",
        "options": {
            "A": "FASTQ, usado para armazenar leituras brutas e scores de qualidade.",
            "B": "SAM, formato de texto que descreve o alinhamento das sequências.",
            "C": "BAM, versão binária comprimida para armazenamento de alinhamentos.",
            "D": "VCF, padrão utilizado para listar polimorfismos e genótipos finais.",
            "E": "FASTA, arquivo de texto simples para representar sequências base."
        },
        "correct": "D",
        "explanation": "A alternativa D está correta, pois o VCF (Variant Call Format) é o padrão essencial para registrar SNPs e indels após a etapa de variant calling. As demais erram porque: A foca em dados brutos, B armazena alinhamentos, C é binário de alinhamento e E contém sequências genômicas.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Bioinformática e análise genômica",
        "id": 1919
    },
    {
        "text": "No contexto das Boas Práticas de Laboratório (BPL) e biossegurança aplicadas ao sequenciamento genômico, qual conduta é essencial para assegurar a integridade analítica e a segurança do operador?",
        "options": {
            "A": "Utilizar fluxo de trabalho unidirecional entre áreas pré e pós-PCR.",
            "B": "Reutilizar luvas descartáveis após higienização com solução alcoólica.",
            "C": "Realizar o pipetamento de soluções biológicas mediante sucção oral.",
            "D": "Descartar resíduos químicos inflamáveis em pias de aço inox comuns.",
            "E": "Calibrar instrumentos de precisão somente se houver falhas técnicas."
        },
        "correct": "A",
        "explanation": "A alternativa A é a correta pois o fluxo unidirecional previne a contaminação cruzada por amplicons em genômica. As demais erram porque: B compromete a barreira de proteção, C é prática estritamente proibida, D gera graves riscos ambientais e E fere normas de calibração periódica.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "id": 1920
    },
    {
        "text": "No contexto da análise genômica, qual ferramenta é amplamente utilizada para gerenciar e converter arquivos de alinhamento nos formatos SAM e BAM?",
        "options": {
            "A": "BLAST, voltado para busca de similaridade em sequências.",
            "B": "GATK, focado na chamada de variantes em genomas humanos.",
            "C": "SAMtools, usado para manipular alinhamentos de sequências.",
            "D": "FastQC, destinado ao controle de qualidade de dados NGS.",
            "E": "Bowtie, aplicado no mapeamento de leituras contra o alvo."
        },
        "correct": "C",
        "explanation": "C é a correta pois o SAMtools é a suíte essencial para processar formatos de alinhamento como SAM/BAM. As demais erram porque: A busca similaridade, B identifica variantes, D avalia qualidade e E realiza mapeamento.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Programação e ferramentas computacionais",
        "id": 1921
    },
    {
        "text": "No âmbito de estudos genômicos multicêntricos do projeto Genoma SUS, a condução ética e administrativa deve seguir rigorosamente as normativas nacionais para garantir a validade dos dados e a proteção dos participantes. Sobre a tramitação ética e responsabilidades institucionais em projetos multicêntricos envolvendo seres humanos no Brasil, assinale a alternativa correta:",
        "options": {
            "A": "O CEP do centro coordenador deve aprovar o projeto antes dos coparticipantes.",
            "B": "Cada centro participante possui autonomia para alterar o desenho do estudo.",
            "C": "O armazenamento de amostras genômicas dispensa autorização para uso futuro.",
            "D": "A aprovação do centro coordenador torna facultativa a revisão pelos outros.",
            "E": "O pesquisador de cada centro é o detentor legal exclusivo de todos os dados."
        },
        "correct": "A",
        "explanation": "A alternativa A é a correta, pois a tramitação ética de estudos multicêntricos deve ocorrer primeiramente no centro coordenador, conforme a Resolução CNS 466/12. As demais erram porque: B fere a padronização metodológica, C ignora regras de biobancos, D negligencia a análise ética local e E contraria o compartilhamento institucional.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "id": 1922
    },
    {
        "text": "No fluxo de trabalho de sequenciamento de nova geração (NGS), a quantificação precisa da biblioteca final é crucial para evitar problemas de sub ou sobre-agrupamento de clusters. Considerando a tecnologia Illumina, qual método é o mais indicado para garantir que apenas as moléculas funcionalmente aptas ao sequenciamento sejam quantificadas?",
        "options": {
            "A": "qPCR, pois quantifica apenas as moléculas ligadas aos adaptadores.",
            "B": "Qubit, pois permite medir a massa total de DNA de fita dupla na amostra.",
            "C": "NanoDrop, pois detecta contaminantes orgânicos via razão de absorbância.",
            "D": "Bioanalyzer, pois avalia a distribuição de tamanho médio dos insertos.",
            "E": "Digital PCR, por ser método absoluto que dispensa uso de curvas padrão."
        },
        "correct": "A",
        "explanation": "A qPCR é o método padrão para normalização pois utiliza primers específicos para os adaptadores, garantindo que apenas moléculas capazes de formar clusters sejam contabilizadas. As demais estão incorretas porque: B não distingue fragmentos sem adaptadores hibridizáveis, C carece de sensibilidade e especificidade funcional, D foca na integridade física e não na quantificação molar e E é economicamente inviável para a rotina laboratorial de larga escala.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "id": 1923
    },
    {
        "text": "No preparo de bibliotecas para sequenciamento de nova geração (NGS), a seleção de tamanho por esferas magnéticas (SPRI) é etapa crítica. Qual fenômeno ocorre ao se reduzir a razão volumétrica entre as esferas e a amostra de DNA?",
        "options": {
            "A": "Apenas fragmentos de DNA menores permanecem ligados às esferas.",
            "B": "Fragmentos de DNA maiores são preferencialmente descartados no fluxo.",
            "C": "Fragmentos de DNA maiores ligam-se às esferas, excluindo os menores.",
            "D": "A eficiência da ligação enzimática dos adaptadores aumenta na etapa.",
            "E": "Ocorre a precipitação inespecífica de dímeros de adaptadores e sais."
        },
        "correct": "C",
        "explanation": "A alternativa C está correta pois a redução da razão esferas/DNA diminui a concentração de polímeros que induzem a ligação, favorecendo fragmentos de maior peso molecular por exclusão entrópica. As demais erram porque: A exige maior concentração de reagentes, B retém os maiores no suporte magnético, D descreve processo físico não enzimático e E remove dímeros em vez de precipitá-los.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Biologia, biologia molecular e genética",
        "id": 1924
    },
    {
        "text": "No workflow de análise genômica do GATK, qual é a principal finalidade da etapa de marcação de duplicatas (MarkDuplicates) após o alinhamento?",
        "options": {
            "A": "Corrigir erros sistemáticos de sequenciamento em bases específicas.",
            "B": "Identificar artefatos de PCR que podem gerar variantes falso-positivas.",
            "C": "Normalizar a profundidade de cobertura entre as amostras do projeto.",
            "D": "Converter arquivos de alinhamento SAM para o formato binário BAM.",
            "E": "Realizar a recalibragem dos escores de qualidade das bases (BQSR)."
        },
        "correct": "B",
        "explanation": "B é a correta pois o MarkDuplicates identifica leituras originadas do mesmo fragmento inicial de DNA para evitar erros estatísticos no Variant Calling. As demais erram pois: A descreve correção sistemática, C busca normalizar cobertura, D faz conversão de formatos e E realiza recalibragem de bases.",
        "area": "Bioinformática",
        "difficulty": "médio",
        "subject": "Bioinformática e análise genômica",
        "id": 1925
    },
    {
        "text": "No pipeline GATK para análise de variantes em larga escala, a etapa de Variant Quality Score Recalibration (VQSR) é essencial para o refinamento do conjunto de dados. Qual é a principal característica que diferencia o VQSR de uma filtragem manual por limiares (Hard Filtering)?",
        "options": {
            "A": "Usa modelos de aprendizado de máquina para distinguir variantes de erros.",
            "B": "Filtra variantes baseando-se apenas na profundidade de leitura média.",
            "C": "Aumenta a frequência de variantes raras em detrimento das comuns.",
            "D": "Define limiares fixos e globais para parâmetros de qualidade do VCF.",
            "E": "Acelera o processamento ao eliminar etapas de calibração das bases."
        },
        "correct": "A",
        "explanation": "A correta é a A pois o VQSR utiliza Gaussian Mixture Models para avaliar a qualidade probabilística das variantes de forma adaptativa. As demais erram porque: B ignora outros parâmetros estatísticos, C foca em descoberta biológica, D caracteriza o método Hard Filtering e E exige maior poder computacional.",
        "area": "Bioinformática",
        "difficulty": "difícil",
        "subject": "Bioinformática e análise genômica",
        "id": 1926
    },
    {
        "text": "No fluxo de análise de sequenciamento de nova geração (NGS), a ferramenta SAMtools desempenha um papel fundamental. Qual é a principal função desse software?",
        "options": {
            "A": "Realizar a anotação funcional de variantes genômicas.",
            "B": "Manipular e processar arquivos de alinhamento SAM/BAM.",
            "C": "Executar montagem de novo para genomas desconhecidos.",
            "D": "Prever estruturas secundárias em fitas simples de RNA.",
            "E": "Desenhar iniciadores para amplificação via PCR clássico."
        },
        "correct": "B",
        "explanation": "A alternativa B está correta pois o SAMtools é essencial para manipular, converter e indexar arquivos resultantes do alinhamento de sequências. As demais alternativas estão incorretas porque: A refere-se à anotação de variantes, C trata de montagem genômica, D foca em predição estrutural e E descreve o desenho de iniciadores.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Bioinformática e análise genômica",
        "id": 1927
    },
    {
        "text": "No contexto do processamento de dados genômicos para o projeto Genoma SUS, a escolha de ferramentas de bioinformática é fundamental. Qual alternativa apresenta a aplicação correta de uma ferramenta mencionada nos requisitos do cargo?",
        "options": {
            "A": "O SAMtools serve exclusivamente para a visualização de proteínas em 3D.",
            "B": "O GATK é um software amplamente usado para detecção de variantes de DNA.",
            "C": "O Python é um sistema de arquivos para o armazenamento de sequências.",
            "D": "O BCFtools é a principal ferramenta para montagem de genomas de novo.",
            "E": "O software R é a única plataforma capaz de alinhar leituras de NGS."
        },
        "correct": "B",
        "explanation": "A alternativa B é a correta pois o GATK é amplamente reconhecido por suas ferramentas de 'variant calling' em genomas humanos. As demais erram porque: A manipula arquivos de alinhamento, C é linguagem de programação, D processa arquivos VCF e E foca em análise estatística.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Bioinformática e análise genômica",
        "id": 1928
    },
    {
        "text": "No contexto de estudos de associação genômica ampla (GWAS), qual é a principal finalidade da aplicação de métodos de correção para testes múltiplos, como o ajuste de Bonferroni?",
        "options": {
            "A": "Reduzir a ocorrência de resultados falso-positivos (Erro Tipo I).",
            "B": "Aumentar a sensibilidade na detecção de variantes muito raras.",
            "C": "Normalizar a distribuição da profundidade de leitura do genoma.",
            "D": "Eliminar variantes que apresentam desequilíbrio de ligação alto.",
            "E": "Garantir que o tamanho da amostra seja estatisticamente ideal."
        },
        "correct": "A",
        "explanation": "A alternativa A é a correta pois a correção de múltiplos testes visa mitigar o acúmulo de erros do Tipo I ao realizar milhares de comparações simultâneas. As demais erram porque: B foca em detecção, não no controle de erros globais; C trata de processamento de sinal biotecnológico em sequenciamento; D refere-se à correlação entre alelos próximos no genoma; E é definido previamente no desenho experimental do estudo.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Estatística aplicada à genômica",
        "id": 1929
    },
    {
        "text": "No contexto do sequenciamento de nova geração (NGS) para o projeto Genoma Brasil, a formação de subprodutos indesejados pode comprometer a acurácia dos dados. Qual processo bioquímico é o principal responsável pela geração de leituras quiméricas durante a etapa de amplificação por PCR na construção de bibliotecas genômicas?",
        "options": {
            "A": "Hibridização cruzada de amplicons incompletos em ciclos subsequentes.",
            "B": "Concentração elevada de polimerase reduzindo a especificidade total.",
            "C": "Fragmentação por cisalhamento gerando extremidades cegas no DNA.",
            "D": "Concentração elevada de adaptadores formando dímeros competitivos.",
            "E": "Degradação térmica de iniciadores impedindo o anelamento correto."
        },
        "correct": "A",
        "explanation": "A alternativa A é a correta pois a formação de quimeras ocorre quando amplicons incompletos de um ciclo hibridizam em moldes diferentes no ciclo subsequente. As demais estão incorretas porque: B reduz especificidade sem criar quimeras, C refere-se à preparação física do DNA, D gera dímeros de adaptadores e E impede a reação de ocorrer.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Biologia, biologia molecular e genética",
        "id": 1930
    },
    {
        "text": "No processamento de dados de sequenciamento de nova geração (NGS), qual ferramenta é responsável pela implementação do algoritmo HaplotypeCaller para a identificação precisa de variantes genéticas?",
        "options": {
            "A": "O software Bowtie2 focado em alinhamento de leituras curtas.",
            "B": "O indexador BWA-MEM utilizado para mapeamento de sequências.",
            "C": "O conjunto GATK que integra a ferramenta HaplotypeCaller.",
            "D": "O pacote SAMtools utilizado para manipulação de arquivos SAM.",
            "E": "O utilitário FastQC para controle de qualidade dos dados."
        },
        "correct": "C",
        "explanation": "A alternativa C está correta pois o GATK utiliza o HaplotypeCaller para realizar a remontagem local e identificar variantes genômicas. As demais estão incorretas porque: A realiza apenas o alinhamento de sequências, B foca no mapeamento inicial de leituras, D manipula arquivos sem identificar variantes e E avalia somente a qualidade amostral.",
        "area": "Bioinformática",
        "difficulty": "médio",
        "subject": "Bioinformática e análise genômica",
        "id": 1931
    },
    {
        "text": "No contexto do processamento de dados de sequenciamento de nova geração (NGS), qual ferramenta é a mais indicada para realizar a conversão de arquivos de alinhamento do formato SAM para o formato binário BAM?",
        "options": {
            "A": "O software GATK",
            "B": "O software BCFtools",
            "C": "O software SAMtools",
            "D": "O software FastQC",
            "E": "O software MultiQC"
        },
        "correct": "C",
        "explanation": "O software SAMtools é a biblioteca fundamental utilizada para converter, ordenar e indexar arquivos de alinhamento genômico em formatos SAM e BAM. As demais opções estão incorretas porque: o GATK foca na chamada de variantes genéticas, o BCFtools manipula apenas arquivos VCF, o FastQC avalia a qualidade das sequências e o MultiQC agrega relatórios de análise.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Bioinformática e análise genômica",
        "id": 1932
    },
    {
        "text": "No processamento de dados de sequenciamento de nova geração (NGS), qual ferramenta é amplamente utilizada para a identificação de variantes genéticas (variant calling)?",
        "options": {
            "A": "O software GATK (Genome Analysis Toolkit).",
            "B": "O utilitário BLAST (Basic Local Alignment).",
            "C": "O programa ClustalW para múltiplos alinhamentos.",
            "D": "O servidor STRING para redes de proteínas.",
            "E": "O banco de dados PDB para estruturas 3D."
        },
        "correct": "A",
        "explanation": "O GATK é a ferramenta padrão ouro para identificar SNPs e indels em genomas. As demais erram porque: BLAST faz buscas locais de sequências, ClustalW realiza alinhamentos múltiplos, STRING analisa interações proteicas e PDB foca em estruturas tridimensionais.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Bioinformática e análise genômica",
        "id": 1933
    },
    {
        "text": "No processamento de dados de sequenciamento de nova geração (NGS), o toolkit SAMtools é essencial para manipular alinhamentos. Qual comando é utilizado especificamente para converter um arquivo no formato SAM (Sequence Alignment Map) para o seu equivalente binário comprimido BAM?",
        "options": {
            "A": "samtools view -bS",
            "B": "samtools sort -o",
            "C": "samtools index -a",
            "D": "samtools flagstat",
            "E": "samtools depth -r"
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois o comando view com a flag -b transforma a entrada SAM em saída binária BAM. As demais erram porque: B serve apenas para ordenação, C gera índices de busca, D produz estatísticas de flags e E computa profundidade de leitura.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Programação e ferramentas computacionais",
        "id": 1934
    },
    {
        "text": "No contexto de processamento de dados genômicos de larga escala pelo GATK, qual técnica é considerada o padrão-ouro para a distinção entre variantes biológicas reais e artefatos de sequenciamento através de modelagem estatística multivariada?",
        "options": {
            "A": "Aplicação de recalibração de escore de variante (VQSR) no GATK.",
            "B": "Uso de alinhamento local Smith-Waterman para filtragem de indels.",
            "C": "Implementação de filtros manuais baseados apenas em profundidade.",
            "D": "Utilização de normalização de variantes via BCFtools em trios.",
            "E": "Adoção exclusiva de algoritmos de mapeamento baseados em k-mers."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois o VQSR utiliza aprendizado de máquina para modelar erros e filtrar variantes de forma adaptativa. As demais erram porque: B foca em alinhamento local sem modelar erros; C ignora a complexidade estatística multivariada dos dados; D apenas padroniza a notação sem filtrar ruídos; E falha em regiões repetitivas e erros de plataforma.",
        "area": "Bioinformática",
        "difficulty": "difícil",
        "subject": "Bioinformática e análise genômica",
        "id": 1935
    },
    {
        "text": "No contexto do processamento de dados genômicos em larga escala (WGS) para o projeto Genoma SUS, qual abordagem técnica é considerada o padrão-ouro para a filtragem de variantes visando reduzir a taxa de falsos positivos decorrentes de artefatos de sequenciamento, sem comprometer a sensibilidade em sítios polimórficos?",
        "options": {
            "A": "Aplicar Hard Filtering baseado apenas em parâmetros fixos de QUAL e FS.",
            "B": "Implementar o VQSR utilizando bases de dados como HapMap e 1000G.",
            "C": "Executar o alinhamento Smith-Waterman local em todos os reads da amostra.",
            "D": "Filtrar variantes utilizando exclusivamente a métrica de profundidade (DP).",
            "E": "Ignorar a recalibração de bases (BQSR) para otimizar o processamento."
        },
        "correct": "B",
        "explanation": "A alternativa B é a correta pois o VQSR utiliza modelos probabilísticos para identificar variantes reais em grandes bancos de dados. As demais erram porque: A desconsidera a covariância entre múltiplos parâmetros estatísticos, C é computacionalmente inviável para processamento massivo, D ignora métricas cruciais de qualidade e E aumenta artefatos por erros sistemáticos.",
        "area": "Bioinformática",
        "difficulty": "difícil",
        "subject": "Bioinformática e análise genômica",
        "id": 1936
    },
    {
        "text": "No contexto das Boas Práticas Laboratoriais (BPL) aplicadas ao sequenciamento genômico, qual procedimento é indispensável para assegurar a integridade analítica e evitar a contaminação cruzada?",
        "options": {
            "A": "Implementar o fluxo unidirecional entre áreas de pré e pós-PCR.",
            "B": "Armazenar reagentes e produtos amplificados em uma mesma bancada.",
            "C": "Reaproveitar luvas descartáveis após higienização com álcool 70%.",
            "D": "Manter estoque de DNA e primers em freezers de uso compartilhado.",
            "E": "Executar extração de DNA e amplificação em um ambiente comum."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois o fluxo unidirecional previne que amplicons contaminem amostras virgens no preparo de bibliotecas. As demais erram porque: B induz contaminação cruzada grave, C compromete a esterilidade biológica, D mistura reagentes limpos com moldes e E ignora a segregação física necessária.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "id": 1937
    },
    {
        "text": "No processo de preparação de bibliotecas para sequenciamento de nova geração (NGS), a etapa de normalização e pool de amostras é crítica para garantir uma cobertura equitativa entre os pacientes. Qual conjunto de parâmetros é fundamental para o cálculo preciso da molaridade das bibliotecas visando o equilíbrio estocástico no sequenciamento?",
        "options": {
            "A": "Concentração via fluorometria e tamanho médio dos fragmentos.",
            "B": "Absorbância 260/280 e volume total final da biblioteca purificada.",
            "C": "Massa de DNA inicial e nível de pureza da extração de ácidos nucleicos.",
            "D": "Detecção de dímeros de adaptadores via eletroforese capilar isolada.",
            "E": "Valor de Cq do qPCR ignorando o tamanho médio do inserto da biblioteca."
        },
        "correct": "A",
        "explanation": "A resposta A é correta porque a molaridade depende da concentração de massa específica de DNA e do peso molecular derivado do comprimento médio para o pooling equitativo. As demais erram porque: B usa absorbância imprecisa para quantificar bibliotecas, C foca no input inicial e não no produto final, D ignora a concentração necessária para o cálculo e E despreza a influência do tamanho na eficiência molar.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Biologia, biologia molecular e genética",
        "id": 1938
    },
    {
        "text": "No âmbito de iniciativas como o Genoma SUS, a governança ética de amostras biológicas distingue biobancos de biorrepositórios. De acordo com a Resolução 466/2012 do Conselho Nacional de Saúde, qual requisito é obrigatório para a existência de um biobanco institucional?",
        "options": {
            "A": "O consentimento livre autoriza o uso das amostras sem novas aprovações.",
            "B": "Biorrepositórios são coleções de longo prazo sob guarda da instituição.",
            "C": "Biobancos demandam aprovação da CONEP e consentimento do participante.",
            "D": "O compartilhamento de dados anonimizados dispensa toda supervisão ética.",
            "E": "Achados incidentais clínicos devem ser omitidos para evitar danos morais."
        },
        "correct": "C",
        "explanation": "A alternativa C está correta pois biobancos são coleções institucionais permanentes que exigem rigoroso controle da CONEP e concordância explícita do doador. As demais erram porque: A fere a especificidade do consentimento, B inverte a definição técnica de biorrepositório, D ignora riscos de reidentificação genética e E viola o princípio da beneficência.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "id": 1939
    },
    {
        "text": "Em estudos de associação genômica ampla (GWAS), nos quais milhares de variantes são testadas simultaneamente, a aplicação de métodos de correção para múltiplos testes, como o de Bonferroni, tem como objetivo principal minimizar a ocorrência de qual problema estatístico?",
        "options": {
            "A": "O erro do tipo I (falso positivo).",
            "B": "O erro do tipo II (falso negativo).",
            "C": "O erro de amostragem aleatória.",
            "D": "O erro sistemático por viés.",
            "E": "O erro de variância residual."
        },
        "correct": "A",
        "explanation": "A resposta A é a correta pois a correção para múltiplos testes visa mitigar a ocorrência de falsos positivos decorrentes do acaso em grandes volumes de dados. As demais erram porque: B refere-se a não detectar associações reais existentes; C diz respeito à representatividade da amostra na população; D envolve falhas metodológicas ou instrumentais não aleatórias e E trata da variabilidade não explicada pelo modelo estatístico.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Estatística aplicada à genômica",
        "id": 1940
    },
    {
        "text": "No fluxo de análise de bioinformática para o Genoma SUS, qual ferramenta é essencial para a manipulação, ordenação e indexação de arquivos de alinhamento de sequências?",
        "options": {
            "A": "O GATK foca prioritariamente na montagem de genomas de novo.",
            "B": "O BCFtools realiza o controle de qualidade de reads brutos.",
            "C": "O SAMtools manipula arquivos de alinhamento nos formatos SAM/BAM.",
            "D": "O FastQC é utilizado para alinhar sequências ao genoma humano.",
            "E": "O Bowtie2 é a ferramenta padrão para a etapa de variant calling."
        },
        "correct": "C",
        "explanation": "A alternativa C está correta pois o SAMtools é a ferramenta padrão para processar e converter alinhamentos de sequências genômicas. As demais erram porque: A foca em variantes, não montagem; B manipula arquivos VCF; D avalia qualidade das leituras; E realiza o alinhamento, não a chamada.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Programação e ferramentas computacionais",
        "id": 1941
    },
    {
        "text": "No processamento de amostras para o Genoma SUS, a manutenção da integridade dos ensaios depende de rigorosos controles. Qual prática de biossegurança é essencial para evitar a contaminação cruzada por amplicons em áreas de pré-amplificação?",
        "options": {
            "A": "Implementação de fluxo unidirecional e separação física de salas.",
            "B": "Uso de autoclave de alto vácuo apenas na área de pré-amplificação.",
            "C": "Higienização de bancadas utilizando exclusivamente álcool 70 por cento.",
            "D": "Armazenamento conjunto de primers e amostras de DNA no mesmo freezer.",
            "E": "Esterilização de ponteiras com filtro via radiação gama após o uso."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois o fluxo unidirecional e a separação física impedem que o material amplificado retorne às áreas limpas. As demais erram porque: B não degrada amplicons, C não elimina DNA eficientemente, D permite contaminação de insumos e E descreve procedimento inviável e caro.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "id": 1942
    },
    {
        "text": "Em estudos genômicos multicêntricos realizados no Brasil, qual procedimento ético é mandatório conforme as resoluções vigentes do Conselho Nacional de Saúde?",
        "options": {
            "A": "Aprovação prévia pelo CEP coordenador e centros participantes.",
            "B": "Consentimento verbal exclusivo substituindo o termo assinado.",
            "C": "Envio obrigatório de todas as amostras para centros externos.",
            "D": "Dispensa de TCLE para pacientes com quadros genéticos raros.",
            "E": "Cobrança de taxas dos voluntários para custear os insumos."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois protocolos multicêntricos exigem aprovação ética em todas as instâncias participantes sob coordenação inicial. As demais erram porque: B exige documento escrito assinado, C fere a soberania genética nacional, D o TCLE é sempre obrigatório e E pesquisas clínicas devem ser gratuitas.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "id": 1943
    },
    {
        "text": "No âmbito do projeto Genoma SUS, qual diretriz de Boas Práticas de Laboratório (BPL) é essencial para mitigar riscos de contaminação por amplicons em ensaios de sequenciamento em larga escala?",
        "options": {
            "A": "Uso de detergente comum na limpeza de bancadas de manipulação de DNA.",
            "B": "Manutenção de fluxo unidirecional rigoroso entre áreas pré e pós-PCR.",
            "C": "Descarte de ponteiras com filtro em lixo comum após descontaminação.",
            "D": "Armazenamento conjunto de reagentes de PCR e DNA extraído no freezer.",
            "E": "Realização de calibração de equipamentos apenas em caso de falha técnica."
        },
        "correct": "B",
        "explanation": "A alternativa B é a correta pois o fluxo unidirecional impede o transporte de material amplificado para áreas limpas. As demais erram porque: A ignora agentes descontaminantes específicos; C viola normas de descarte infectante; D permite contaminação cruzada de insumos; E negligencia cronogramas de manutenção preventiva.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "id": 1944
    },
    {
        "text": "No preparo de bibliotecas para sequenciamento de nova geração (NGS), o controle rigoroso do número de ciclos de amplificação por PCR é vital para a integridade dos dados genômicos. Qual consequência negativa é diretamente potencializada pelo excesso de ciclos em regiões de composição nucleotídica heterogênea?",
        "options": {
            "A": "Formação excessiva de dímeros de adaptadores e perda de sinal.",
            "B": "Introdução de variantes estocásticas por erros de polimerização.",
            "C": "Aumento de duplicatas moleculares e viés de cobertura regional.",
            "D": "Redução da sensibilidade analítica para variantes somáticas raras.",
            "E": "Desnaturação incompleta do DNA por fadiga térmica do equipamento."
        },
        "correct": "C",
        "explanation": "A alternativa C está correta pois o excesso de ciclos amplia preferencialmente certas sequências, gerando duplicatas redundantes e sub-representação de áreas com GC extremo. As demais erram porque: A decorre de proporção incorreta de adaptadores, B relaciona-se à fidelidade da enzima, D depende da profundidade total de leitura e E é falha física de hardware.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Biologia, biologia molecular e genética",
        "id": 1945
    },
    {
        "text": "No âmbito de estudos genômicos multicêntricos do Genoma SUS, o processo de revisão ética segue ritos específicos para garantir a proteção dos participantes. Considerando a Resolução CNS 466/12, qual a regra para a aprovação ética?",
        "options": {
            "A": "O CEP do centro coordenador é o único que analisa o mérito científico.",
            "B": "Cada centro participante requer aprovação ética do seu respectivo CEP.",
            "C": "Projetos multicêntricos de genética humana dispensam anuência da CONEP.",
            "D": "O pesquisador principal do centro coordenador assina por todos os locais.",
            "E": "A guarda de amostras em biobancos é de uso exclusivo do centro mentor."
        },
        "correct": "B",
        "explanation": "A alternativa B está correta pois a regulamentação exige que centros participantes obtenham aprovação de seus CEPs locais após o centro coordenador. As demais erram porque: A centraliza indevidamente o mérito, C descarta competência da CONEP, D exclui corresponsabilidade local e E viola compartilhamento institucional.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "id": 1946
    },
    {
        "text": "Em estudos genômicos de larga escala, como GWAS, qual é o principal objetivo da aplicação de métodos de correção para múltiplos testes, como o ajuste de Bonferroni?",
        "options": {
            "A": "Reduzir a ocorrência de falsos positivos ou erros do tipo I.",
            "B": "Aumentar o poder estatístico para detectar variantes raras.",
            "C": "Eliminar o viés técnico gerado pela baixa cobertura de leitura.",
            "D": "Normalizar a expressão gênica entre diferentes bibliotecas.",
            "E": "Garantir que os dados sigam uma distribuição normal perfeita."
        },
        "correct": "A",
        "explanation": "O ajuste de Bonferroni é fundamental para controlar a probabilidade de encontrar resultados significativos puramente ao acaso devido ao volume de testes simultâneos. As demais alternativas estão incorretas porque: B diminui o poder estatístico, C aborda qualidade técnica, D refere-se à normalização e E foca em pressupostos paramétricos.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Estatística aplicada à genômica",
        "id": 1947
    },
    {
        "text": "No contexto de análise genômica do projeto Genoma SUS, qual é a principal finalidade da ferramenta computacional SAMtools?",
        "options": {
            "A": "Visualizar estruturas de proteínas em modelos tridimensionais.",
            "B": "Manipular e processar alinhamentos nos formatos SAM ou BAM.",
            "C": "Executar o sequenciamento de DNA por síntese em tempo real.",
            "D": "Armazenar fisicamente amostras biológicas em criopreservação.",
            "E": "Predizer sítios de ligação para fatores de transcrição gênica."
        },
        "correct": "B",
        "explanation": "A alternativa B está correta pois o SAMtools é uma suíte de ferramentas essencial para processar, filtrar e visualizar alinhamentos gerados por mapeadores genômicos. As demais erram porque: A foca em proteômica estrutural, C refere-se à etapa laboratorial de sequenciamento, D trata de preservação física de amostras e E foca em regulação da expressão gênica.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Programação e ferramentas computacionais",
        "id": 1948
    },
    {
        "text": "No contexto de um laboratório de genômica do Genoma SUS, qual procedimento é fundamental para conciliar a integridade dos dados (BPL) e a segurança do analista?",
        "options": {
            "A": "Descarte de ponteiras usadas em lixo comum após a autoclavagem.",
            "B": "Uso de jalecos de manga curta em áreas de manipulação biológica.",
            "C": "Calibração de equipamentos e uso de cabines de biossegurança.",
            "D": "Armazenamento de reagentes voláteis com amostras em freezers.",
            "E": "Reutilização de luvas descartáveis após desinfecção com álcool."
        },
        "correct": "C",
        "explanation": "A alternativa C é a correta, pois a manutenção de equipamentos e o uso de barreiras físicas são pilares da qualidade e proteção do operador. As demais estão incorretas porque: A ignora a classificação de resíduo infectante; B descumpre a proteção dérmica necessária; D promove contaminação cruzada e riscos químicos; E viola normas de uso único de EPIs.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "id": 1949
    },
    {
        "text": "Qual formato de arquivo é amplamente utilizado em bioinformática para armazenar de forma eficiente as leituras de sequenciamento após o processo de alinhamento ao genoma de referência?",
        "options": {
            "A": "Formato FASTQ, que armazena leituras brutas e qualidades.",
            "B": "Formato BAM, a versão binária das leituras já alinhadas.",
            "C": "Formato VCF, focado no registro das variantes detectadas.",
            "D": "Formato FASTA, contendo sequências de referência genômica.",
            "E": "Formato BED, usado para definir regiões de interesse no DNA."
        },
        "correct": "B",
        "explanation": "A alternativa B é correta pois o BAM é o padrão binário para alinhamentos. As demais erram porque: A foca em dados brutos pré-alinhamento, C registra as variantes genéticas encontradas, D provê sequências de referência puras e E delimita coordenadas genômicas específicas.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Bioinformática e análise genômica",
        "id": 1950
    },
    {
        "text": "No âmbito do projeto Genoma SUS, a proteção de informações sensíveis é primordial. Qual prática é essencial para garantir a segurança e a privacidade dos dados genômicos e clínicos dos participantes?",
        "options": {
            "A": "Armazenar dados em servidores públicos sem criptografia.",
            "B": "Compartilhar sequências brutas com identificação total.",
            "C": "Implementar pseudonimização rigorosa nos dados clínicos.",
            "D": "Manter senhas de acesso anotadas em locais de uso comum.",
            "E": "Enviar resultados sem criptografia por e-mails externos."
        },
        "correct": "C",
        "explanation": "A opção C está correta pois a pseudonimização desvincula dados sensíveis de identificadores diretos, protegendo a privacidade sem impedir a análise científica. As demais erram porque: A expõe dados em ambientes públicos vulneráveis, B viola o anonimato ético do participante, D facilita o acesso físico não autorizado e E permite a interceptação de informações sensíveis.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Segurança de dados",
        "id": 1951
    },
    {
        "text": "No contexto da bioinformática e processamento de dados de sequenciamento, qual ferramenta é essencial para a manipulação, indexação e conversão de arquivos de alinhamento nos formatos SAM e BAM?",
        "options": {
            "A": "A ferramenta SAMtools",
            "B": "A ferramenta FastQC",
            "C": "A ferramenta BLASTn",
            "D": "A ferramenta TopHat",
            "E": "A ferramenta Bowtie"
        },
        "correct": "A",
        "explanation": "O SAMtools é a biblioteca padrão para manipulação, ordenação e indexação de arquivos de mapeamento nos formatos SAM/BAM. As demais erram porque: B avalia qualidade de leituras brutas, C realiza buscas de similaridade local, D é um alinhador de RNA-seq e E realiza o alinhamento de leituras curtas.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Programação e ferramentas computacionais",
        "id": 1952
    },
    {
        "text": "No pipeline de Melhores Práticas do GATK para identificação de variantes germinativas em dados de NGS, qual é o objetivo principal da etapa de Mark Duplicates?",
        "options": {
            "A": "Identificar duplicatas de PCR para evitar falsa confiança alélica.",
            "B": "Remover adaptadores de sequenciamento para melhorar o alinhamento.",
            "C": "Recalibrar scores de qualidade com base em erros sistemáticos.",
            "D": "Normalizar a cobertura genômica para detectar variantes estruturais.",
            "E": "Filtrar variantes de baixa qualidade usando métodos de VQSR ou hard."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois a marcação de duplicatas impede que artefatos de amplificação enviesem estatisticamente a chamada de variantes. As demais erram porque: B ocorre no pré-processamento, C descreve o processo BQSR, D foca em CNVs e E trata do pós-processamento de chamadas.",
        "area": "Bioinformática",
        "difficulty": "médio",
        "subject": "Bioinformática e análise genômica",
        "id": 1953
    },
    {
        "text": "No âmbito da ética em pesquisa com seres humanos, qual o principal documento utilizado para garantir a autonomia e a anuência do participante após ser informado sobre os riscos e benefícios do estudo?",
        "options": {
            "A": "Termo de Consentimento Livre e Esclarecido (TCLE)",
            "B": "Manual de Boas Práticas de Laboratório Clínico",
            "C": "Registro de Qualidade de Extração de DNA Genômico",
            "D": "Relatório de Biossegurança e Manejo de Amostras",
            "E": "Guia de Procedimentos Operacionais Padrão (POP)"
        },
        "correct": "A",
        "explanation": "A alternativa A é a correta pois o TCLE formaliza a decisão voluntária e informada do sujeito de pesquisa conforme a Resolução 466/2012. As demais erram porque: B foca em qualidade técnica laboratorial, C registra apenas processos de bancada, D trata de segurança física e biológica e E descreve rotinas operacionais fixas.",
        "area": "Laboratório",
        "difficulty": "fácil",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "id": 1954
    },
    {
        "text": "Em pesquisas genômicas vinculadas à saúde pública, o Termo de Consentimento Livre e Esclarecido (TCLE) é um documento essencial que materializa qual diretriz bioética?",
        "options": {
            "A": "O princípio da utilidade, priorizando o interesse do Estado.",
            "B": "O princípio da autonomia, respeitando a decisão do participante.",
            "C": "O princípio da justiça, garantindo o acesso igualitário aos bens.",
            "D": "O princípio da beneficência, buscando o máximo de bem ao sujeito.",
            "E": "O princípio da legalidade, focando apenas em normas burocráticas."
        },
        "correct": "B",
        "explanation": "A alternativa B é a correta, pois a autonomia assegura que o indivíduo tenha o direito de decidir sobre sua participação após ser devidamente informado. As demais erram porque: A prioriza o Estado ignorando a vontade individual do participante, C foca na distribuição equitativa de encargos e benefícios sociais, D foca no dever de promover o bem do participante e E reduz a ética a meras formalidades administrativas e legais.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "id": 1955
    },
    {
        "text": "No contexto das melhores práticas para análise de variantes germinativas (GATK Best Practices), qual é a função primordial da etapa de marcação de duplicatas (Mark Duplicates) após o alinhamento?",
        "options": {
            "A": "Remover artefatos de PCR que podem gerar falso-positivos em variantes.",
            "B": "Realizar o alinhamento das sequências brutas contra um genoma referência.",
            "C": "Ajustar erros sistemáticos nos escores de qualidade das bases sequenciadas.",
            "D": "Converter arquivos de sequenciamento FASTQ para o formato binário BAM.",
            "E": "Identificar polimorfismos de nucleotídeo único em regiões codificantes."
        },
        "correct": "A",
        "explanation": "A marcação de duplicatas identifica leituras redundantes da amplificação por PCR, evitando que erros replicados sejam interpretados como variantes reais e enviesem a estatística. As demais erram porque: B descreve o alinhamento inicial via BWA; C define a etapa de recalibração (BQSR); D indica conversão de formatos pelo SAMtools; E refere-se ao processo final de variant calling.",
        "area": "Bioinformática",
        "difficulty": "médio",
        "subject": "Bioinformática e análise genômica",
        "id": 1956
    },
    {
        "text": "No contexto de estudos genômicos multicêntricos no Brasil, qual documento é essencial para garantir a autonomia do participante e a transparência sobre os riscos e benefícios da pesquisa?",
        "options": {
            "A": "O Termo de Consentimento Livre e Esclarecido (TCLE).",
            "B": "O Protocolo de Envio de Amostras para Bioinformática.",
            "C": "O Certificado de Proficiência em Boas Práticas Clínicas.",
            "D": "O Relatório de Controle de Qualidade das Amostras de DNA.",
            "E": "O Guia de Biossegurança e Manejo de Material Biológico."
        },
        "correct": "A",
        "explanation": "O TCLE é o documento que formaliza a proteção dos direitos e a autonomia do voluntário em pesquisas com humanos. As demais erram porque: B foca no processamento de dados, C é qualificação técnica profissional, D refere-se à pureza laboratorial e E aborda segurança do ambiente.",
        "area": "Laboratório",
        "difficulty": "fácil",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "id": 1957
    },
    {
        "text": "Em estudos genômicos multicêntricos no Brasil, especialmente envolvendo populações indígenas ou grupos vulneráveis, o fluxo de aprovação ética segue normas específicas da Resolução CNS nº 466/2012. Diante dessa complexidade regulatória, qual procedimento é obrigatoriamente exigido?",
        "options": {
            "A": "O centro coordenador aprova o mérito, isentando os centros colaboradores.",
            "B": "Protocolos genômicos com indígenas requerem aval prévio e único da CONEP.",
            "C": "Cada instituição participante dispensa a análise do CEP local via resolução.",
            "D": "O protocolo exige análise do CEP coordenador e aprovação final da CONEP.",
            "E": "O uso de biorrepositórios dispensa a renovação do TCLE em estudos novos."
        },
        "correct": "D",
        "explanation": "A alternativa D está correta pois pesquisas em áreas temáticas especiais, como genética humana e populações indígenas, exigem aprovação da CONEP após parecer do CEP coordenador. As demais falham porque: A ignora registro de centros colaboradores; B suprime a análise inicial do CEP; C obriga análise ética em cada coparticipante; E exige autorização para novos usos de amostras.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "id": 1958
    },
    {
        "text": "Dentro do fluxo de trabalho GATK Best Practices para análise de DNA-Seq, qual processo visa ajustar as pontuações de confiança de cada nucleotídeo baseando-se em erros sistemáticos da plataforma?",
        "options": {
            "A": "Identificação de duplicatas para remoção de viés de PCR.",
            "B": "Recalibração de qualidade de bases para correção de erro.",
            "C": "Re-alinhamento de indels para ajuste de gaps de sequência.",
            "D": "Pontuação de variantes via aprendizado estatístico VQSR.",
            "E": "Padronização de alelos em arquivos de formato VCF final."
        },
        "correct": "B",
        "explanation": "A alternativa B está correta pois o processo de Base Quality Score Recalibration (BQSR) ajusta as probabilidades de erro informadas pelo sequenciador usando modelos de aprendizado. As demais erram pois: A remove cópias idênticas, C corrige mapeamentos insercionais, D atua na filtragem de variantes e E organiza a notação genômica.",
        "area": "Bioinformática",
        "difficulty": "médio",
        "subject": "Bioinformática e análise genômica",
        "id": 1959
    },
    {
        "text": "No fluxo de trabalho do GATK para descoberta de variantes germinativas, qual etapa é especificamente voltada para mitigar erros sistemáticos de sequenciamento através da recalibração de probabilidades de erro das bases?",
        "options": {
            "A": "Aplicação da Recalibração de Escores de Qualidade (BQSR).",
            "B": "Alinhamento das leituras com o algoritmo BWA-MEM.",
            "C": "Marcação de duplicatas de PCR em arquivos de mapeamento.",
            "D": "Conversão de arquivos SAM para formatos binários BAM.",
            "E": "Filtragem hard-filter baseada na profundidade de leitura."
        },
        "correct": "A",
        "explanation": "A etapa de BQSR utiliza modelos estatísticos para corrigir vieses técnicos nas pontuações de qualidade, permitindo que o variant caller opere com dados mais confiáveis. As demais erram porque: B realiza o mapeamento, C identifica fragmentos redundantes, D altera o formato binário e E remove variantes suspeitas.",
        "area": "Bioinformática",
        "difficulty": "médio",
        "subject": "Bioinformática e análise genômica",
        "id": 1960
    },
    {
        "text": "Nos termos das Boas Práticas Laboratoriais (BPL) aplicadas ao processamento de amostras para o Genoma SUS, qual conduta assegura tanto a qualidade analítica quanto a biossegurança laboratorial?",
        "options": {
            "A": "Realizar calibrações anuais sem manter registros de uso.",
            "B": "Descartar insumos com resíduo biológico em lixo comum.",
            "C": "Registrar sistematicamente a temperatura de freezers e kits.",
            "D": "Armazenar reagentes críticos junto a alimentos e bebidas.",
            "E": "Reutilizar luvas de proteção entre o preparo de bibliotecas."
        },
        "correct": "C",
        "explanation": "A alternativa C é a correta pois a rastreabilidade térmica garante a estabilidade de biomoléculas e insumos sensíveis conforme exigido pelas BPL. As demais erram porque: A negligencia registros operacionais obrigatórios, B ignora riscos biológicos e ambientais, D viola normas básicas de higiene ocupacional e E propicia contaminação cruzada entre as amostras.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "id": 1961
    },
    {
        "text": "Em genética de populações, o equilíbrio de Hardy-Weinberg descreve uma população teórica ideal que não evolui ao longo das gerações. Para que esse estado seja mantido, qual das seguintes condições deve ser obrigatoriamente atendida?",
        "options": {
            "A": "Ausência de pressões evolutivas como mutação e seleção.",
            "B": "Ocorrência constante de deriva genética e fluxo gênico.",
            "C": "Existência de acasalamento preferencial entre indivíduos.",
            "D": "Tamanho populacional reduzido para favorecer a deriva.",
            "E": "Taxas elevadas de mutação para geração de novos alelos."
        },
        "correct": "A",
        "explanation": "A resposta correta é a A, pois o equilíbrio de Hardy-Weinberg pressupõe que as frequências alélicas permanecem constantes na ausência de fatores evolutivos. As demais erram porque: B altera frequências aleatoriamente, C viola o pressuposto de panmixia, D causa flutuações por erro de amostragem e E introduz novos alelos no pool.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Genética de populações",
        "id": 1962
    },
    {
        "text": "No preparo de bibliotecas para Sequenciamento de Nova Geração (NGS), a quantificação exata das moléculas aptas ao sequenciamento é crítica. Qual método permite mensurar especificamente a concentração de fragmentos que possuem os adaptadores funcionais em ambas as extremidades?",
        "options": {
            "A": "Espectrofotometria de absorvância em 260nm (ex: Nanodrop).",
            "B": "Fluorometria por corantes intercalantes (ex: Qubit dsDNA).",
            "C": "Eletroforese capilar automatizada (ex: Bioanalyzer).",
            "D": "PCR quantitativa (qPCR) visando as sequências adaptadoras.",
            "E": "Quantificação por densitometria de bandas em gel de agarose."
        },
        "correct": "D",
        "explanation": "A qPCR é o padrão-ouro pois quantifica exclusivamente moléculas com adaptadores em ambas as extremidades, garantindo hibridização eficiente na célula de fluxo. As demais erram porque: A detecta contaminantes e nucleotídeos livres, B mede DNA total sem distinguir adaptadores, C avalia apenas perfil de tamanho e integridade e E possui baixa precisão para baixas concentrações.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Biologia, biologia molecular e genética",
        "id": 1963
    },
    {
        "text": "No contexto da ética em pesquisa com seres humanos e projetos de sequenciamento genômico, qual documento é indispensável para garantir a autonomia e o esclarecimento do voluntário?",
        "options": {
            "A": "Termo de Consentimento Livre e Esclarecido",
            "B": "Relatório de Impacto à Proteção de Dados",
            "C": "Registro de Boas Práticas de Laboratório",
            "D": "Certificado de Ética e Pesquisa Clínica",
            "E": "Manual de Biossegurança em Saúde Pública"
        },
        "correct": "A",
        "explanation": "A alternativa A é a correta pois o TCLE garante a autonomia e o esclarecimento prévio do participante em pesquisas. As demais erram porque: B foca em proteção digital, C refere-se a processos técnicos, D é uma certificação profissional e E aborda segurança física.",
        "area": "Laboratório",
        "difficulty": "fácil",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "id": 1964
    },
    {
        "text": "No processamento de amostras para o sequenciamento de nova geração (NGS) em larga escala, a etapa de controle de qualidade (QC) do DNA genômico extraído é fundamental. Para garantir o sucesso da construção de bibliotecas de Genoma Completo (WGS), qual procedimento é considerado o padrão-ouro para a qualificação inicial do material?",
        "options": {
            "A": "Verificação da razão 260/280 via espectrofotometria UV/Visível.",
            "B": "Uso de DNA degradado com índice de integridade inferior a 3.0.",
            "C": "Quantificação por fluorometria e análise da integridade do DNA.",
            "D": "Normalização da concentração baseada no volume total coletado.",
            "E": "Aplicação de PCR quantitativo sem purificação prévia das beads."
        },
        "correct": "C",
        "explanation": "A alternativa C está correta pois a fluorometria garante precisão quantitativa e a integridade assegura a viabilidade da biblioteca. As demais erram porque: A detecta contaminantes como proteínas, B compromete a cobertura genômica, D ignora a concentração real da amostra e E aplica-se apenas a bibliotecas finais.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "id": 1965
    },
    {
        "text": "No preparo de bibliotecas para Sequenciamento de Nova Geração (NGS) via tagmentação, qual o impacto crítico do uso de DNA genômico com baixo índice de integridade (DIN)?",
        "options": {
            "A": "Resulta em bibliotecas com insertos excessivamente curtos.",
            "B": "Impede a indexação por falha na ligação dos adaptadores.",
            "C": "Provoca o enviesamento sistemático da cobertura genômica.",
            "D": "Reduz a eficiência da polimerase durante a etapa de PCR.",
            "E": "Exige o aumento do tempo de incubação para compensação."
        },
        "correct": "A",
        "explanation": "A alternativa A é correta pois o DNA degradado oferece menos integridade, resultando em fragmentos enzimáticos abaixo do tamanho funcional para o sequenciamento. As demais erram porque: B relaciona-se a contaminantes químicos, C advém de vieses de bioinformática, D decorre de inibidores da polimerização e E causaria sobrefragmentação ainda mais severa.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "id": 1966
    },
    {
        "text": "No contexto do processamento de dados de Sequenciamento de Nova Geração (NGS), qual ferramenta é fundamental para a manipulação, ordenação e indexação de arquivos de alinhamento no formato BAM?",
        "options": {
            "A": "O pacote SAMtools para manipulação e indexação de arquivos BAM",
            "B": "O software FastQC para avaliar a qualidade das leituras brutas",
            "C": "O algoritmo BLAST para identificar similaridade entre sequências",
            "D": "O alinhador BWA para mapear leituras contra o genoma referência",
            "E": "O conjunto GATK focado na anotação de variantes e efeitos funcionais"
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois o SAMtools é a ferramenta padrão para manipulação, indexação e extração de informações de arquivos BAM. As demais erram porque: B analisa qualidade inicial, C identifica homologia, D realiza alinhamento e E foca em genotipagem.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Programação e ferramentas computacionais",
        "id": 1967
    },
    {
        "text": "No processo de integração de dados genômicos e clínicos, o uso de ontologias é fundamental para o Genoma SUS. Em qual etapa do fluxo de ETL (Extract, Transform, Load) a padronização dos termos através de vocabulários controlados é prioritariamente realizada?",
        "options": {
            "A": "Na etapa de Extração, durante a coleta dos dados brutos iniciais.",
            "B": "Na etapa de Transformação, visando a padronização e interoperabilidade.",
            "C": "Na etapa de Carga, durante o armazenamento definitivo no banco de dados.",
            "D": "Na etapa de Pré-Extração, antes do contato com as fontes de dados.",
            "E": "Na etapa de Visualização, após o processamento completo dos registros."
        },
        "correct": "B",
        "explanation": "A alternativa B está correta pois a etapa de Transformação é onde os dados brutos são mapeados para ontologias visando a interoperabilidade semântica. As demais erram porque: A foca na captura, não na padronização semântica dos dados; C foca no envio dos dados já tratados ao destino; D ocorre antes do acesso efetivo aos dados para ETL; E é o consumo dos dados após todo o processo.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "id": 1968
    },
    {
        "text": "No preparo de bibliotecas para Sequenciamento de Nova Geração (NGS), a utilização de Identificadores Moleculares Únicos (UMIs) antes da fase de amplificação é fundamental para a acurácia dos dados. Qual é o objetivo principal dessa técnica?",
        "options": {
            "A": "Reduzir o tempo total de processamento enzimático da amostra.",
            "B": "Eliminar a necessidade de quantificação via fluorometria (Qubit).",
            "C": "Distinguir duplicatas de PCR de moléculas originais do template.",
            "D": "Substituir o uso de reagentes de bloqueio de sequências repetitivas.",
            "E": "Aumentar a estabilidade térmica das pontes de hidrogênio no DNA."
        },
        "correct": "C",
        "explanation": "A alternativa C está correta pois os UMIs rotulam moléculas individuais permitindo identificar bioinformaticamente artefatos de amplificação e colapsar duplicatas. As demais erram porque: A prolonga o tempo laboratorial, B exige quantificação fluorométrica obrigatória, D não atua em sequências repetitivas e E não altera a termodinâmica estrutural do DNA.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Biologia, biologia molecular e genética",
        "id": 1969
    },
    {
        "text": "No contexto de estudos genômicos multicêntricos integrados ao Genoma SUS, qual norma ética é mandatória para o manejo e o compartilhamento internacional de amostras biológicas?",
        "options": {
            "A": "O TCLE deve autorizar o uso exclusivo em um único projeto de pesquisa.",
            "B": "A aprovação do centro coordenador invalida a necessidade de CEPs locais.",
            "C": "O envio de material ao exterior exige anuência institucional e da CONEP.",
            "D": "O descarte de amostras genéticas é obrigatório após cinco anos de estudo.",
            "E": "A assinatura do TCLE pelo pesquisador substitui a do participante local."
        },
        "correct": "C",
        "explanation": "A alternativa C está correta pois a remessa de material biológico humano ao exterior exige aprovação ética da CONEP e anuência institucional conforme Resolução 466/12. As demais erram porque: A restringe o uso futuro em biobanks, B ignora a soberania dos CEPs locais, D confunde prazos de guarda documental com amostras e E viola o princípio da autonomia individual.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "id": 1970
    },
    {
        "text": "Em estudos de associação genômica ampla (GWAS), qual métrica estatística é primordialmente utilizada para determinar se a associação observada entre uma variante genética e um fenótipo é estatisticamente significativa?",
        "options": {
            "A": "O valor-p, para testar a significância estatística.",
            "B": "O desvio padrão, para medir a dispersão dos dados.",
            "C": "A média simples, para avaliar a tendência central.",
            "D": "A correlação, para verificar a relação entre SNPs.",
            "E": "A variância, para quantificar a oscilação amostral."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois o valor-p avalia a probabilidade de os resultados ocorrerem ao acaso sob a hipótese nula. As demais erram porque: B apenas quantifica dispersão, C descreve tendência central, D mede força linear e E detalha variabilidade global.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Estatística aplicada à genômica",
        "id": 1971
    },
    {
        "text": "No contexto do projeto Genoma SUS, qual medida é fundamental para proteger a identidade dos voluntários ao compartilhar dados genômicos, seguindo as diretrizes da LGPD?",
        "options": {
            "A": "Uso exclusivo de criptografia simétrica local",
            "B": "Anonimização ou pseudonimização dos dados",
            "C": "Armazenamento em mídias físicas removíveis",
            "D": "Compactação de arquivos para transferência",
            "E": "Divulgação pública de metadados sensíveis"
        },
        "correct": "B",
        "explanation": "A alternativa B está correta pois a anonimização e pseudonimização garantem a privacidade ao impedir a identificação direta do indivíduo. As demais erram porque: A foca apenas em cifragem técnica, C eleva riscos de extravio físico, D serve apenas para redução de volume e E fere o sigilo dos participantes.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Segurança de dados",
        "id": 1972
    },
    {
        "text": "No contexto do processamento de amostras para o Genoma SUS, qual prática é indispensável para garantir a conformidade com os princípios de Boas Práticas Laboratoriais (BPL)?",
        "options": {
            "A": "Calibração periódica de equipamentos e registros de uso.",
            "B": "Descarte de ponteiras usadas em recipientes de lixo comum.",
            "C": "Uso de jalecos de algodão fora das áreas de manipulação.",
            "D": "Armazenamento de amostras e reagentes no mesmo ambiente.",
            "E": "Execução de tarefas baseada em instruções apenas verbais."
        },
        "correct": "A",
        "explanation": "A alternativa A é a correta pois a calibração e o registro garantem a rastreabilidade e precisão exigidas pela BPL. As demais erram porque: B ignora normas de descarte infectante, C viola biossegurança ao circular paramentado, D permite contaminação cruzada entre materiais e E descumpre a obrigatoriedade de POPs documentados.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "id": 1973
    },
    {
        "text": "No preparo de bibliotecas para Sequenciamento de Nova Geração (NGS), a quantificação final é crítica. Qual método é considerado o padrão-ouro para garantir a densidade ideal de clusters em sequenciamento por síntese e por qual motivo técnico?",
        "options": {
            "A": "Fluorometria (Qubit), pois mede apenas DNA de fita dupla íntegro.",
            "B": "Espectrofotometria (NanoDrop), pela rapidez e detecção de pureza.",
            "C": "qPCR, pois quantifica apenas moléculas com adaptadores funcionais.",
            "D": "Eletroforese capilar (Bioanalyzer), pelo foco no tamanho do fragmento.",
            "E": "Digital PCR, por ser o método absoluto independente de padrões externos."
        },
        "correct": "C",
        "explanation": "A qPCR é o padrão-ouro porque utiliza primers complementares aos adaptadores, garantindo que apenas moléculas passíveis de formar clusters sejam contadas, otimizando a ocupação da célula de fluxo. As demais erram porque: A não distingue moléculas com ou sem adaptadores; B sofre interferência de contaminantes e nucleotídeos livres; D foca na distribuição de tamanho e não concentração molar; E apesar de absoluta, não é a prática rotineira recomendada.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Biologia, biologia molecular e genética",
        "id": 1974
    },
    {
        "text": "Durante o preparo de bibliotecas para sequenciamento (NGS), a presença proeminente de 'adapter dimers' (pico em ~120-140 bp) compromete a eficiência da corrida. Qual a causa provável e a solução técnica para esse artefato?",
        "options": {
            "A": "Alta razão adaptador-inserto; limpar com esferas magnéticas.",
            "B": "DNA genômico degradado; aumentar ciclos de amplificação final.",
            "C": "Excesso de fragmentação; reduzir o tempo de sonicação térmica.",
            "D": "Presença de RNA residual; realizar tratamento prévio com RNase.",
            "E": "Falha no anelamento; elevar a temperatura de 'melting' dos primers."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois dímeros surgem do excesso de adaptadores em relação ao inserto, exigindo limpeza seletiva com esferas para evitar desperdício de clusters; as demais erram porque: B amplia erros sequenciais, C foca em fragmentação física, D remove RNA irrelevante e E altera apenas especificidade térmica.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Biologia, biologia molecular e genética",
        "id": 1975
    },
    {
        "text": "No processamento de dados de sequenciamento de larga escala seguindo as melhores práticas do GATK, qual é a função primordial da etapa de Base Quality Score Recalibration (BQSR)?",
        "options": {
            "A": "Remove sequências duplicadas originadas durante a fase de PCR.",
            "B": "Realinha leituras mapeadas em regiões com indels problemáticos.",
            "C": "Corrige vieses sistemáticos nos escores de qualidade das bases.",
            "D": "Atribui escores de confiança estatística para as variantes VCF.",
            "E": "Filtra variantes falso-positivas usando modelos de aprendizado."
        },
        "correct": "C",
        "explanation": "C é a correta pois o BQSR utiliza modelos estatísticos para ajustar os escores de qualidade originais, mitigando erros sistemáticos da plataforma. As demais erram porque: A remove duplicatas de PCR, B executa realinhamento local, D calcula qualidade da variante e E aplica filtragem por VQSR.",
        "area": "Bioinformática",
        "difficulty": "médio",
        "subject": "Bioinformática e análise genômica",
        "id": 1976
    },
    {
        "text": "No contexto do pipeline GATK Best Practices para a descoberta de variantes em larga escala, qual é a principal função da etapa de Variant Quality Score Recalibration (VQSR)?",
        "options": {
            "A": "Construir um modelo estatístico para filtrar variantes falso-positivas.",
            "B": "Realizar o alinhamento local de leituras para detectar indels complexos.",
            "C": "Estimar a cobertura média de profundidade em regiões de exoma clínico.",
            "D": "Detectar variantes estruturais baseadas em leituras do tipo split-reads.",
            "E": "Normalizar as contagens de leituras para análise de variação de cópia."
        },
        "correct": "A",
        "explanation": "O VQSR utiliza aprendizado de máquina e conjuntos de variantes confiáveis para modelar as propriedades de variantes verdadeiras e filtrar artefatos de sequenciamento. As demais erram porque: B refere-se ao alinhamento inicial de sequências, C foca em métricas de profundidade de cobertura, D busca variantes estruturais via split-reads e E descreve a normalização para variação de cópia.",
        "area": "Bioinformática",
        "difficulty": "difícil",
        "subject": "Bioinformática e análise genômica",
        "id": 1977
    },
    {
        "text": "No preparo de bibliotecas para Sequenciamento de Nova Geração (NGS) em larga escala, a etapa de quantificação e avaliação da integridade do DNA genômico é crítica para o sucesso do ensaio. Considerando as boas práticas laboratoriais e as tecnologias de controle de qualidade, assinale a alternativa correta:",
        "options": {
            "A": "Espectrofotometria UV é o padrão ouro para quantificação pré-sequenciamento.",
            "B": "O uso de fluorimetria oferece maior especificidade e precisão que absorbância.",
            "C": "Fragmentação enzimática por transposase independe da concentração de EDTA.",
            "D": "Amostras com DIN abaixo de 3.0 produzem bibliotecas WGS de alta cobertura.",
            "E": "O controle de qualidade final por eletroforese capilar é opcional no NGS."
        },
        "correct": "B",
        "explanation": "A alternativa B está correta pois a fluorimetria utiliza corantes específicos que evitam a superestimação por contaminantes comum na absorbância. As demais erram porque: A detecta impurezas como RNA e proteínas; C sofre inibição por agentes quelantes; D utiliza DNA degradado e inadequado; E é indispensável para validação do tamanho da biblioteca.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "id": 1978
    },
    {
        "text": "No contexto de projetos genômicos populacionais como o Genoma SUS, a técnica de 'Joint Genotyping' é preferida ao 'Single Sample Calling'. Qual a principal vantagem técnica dessa abordagem para a detecção de variantes?",
        "options": {
            "A": "Aumento do poder estatístico em locais com baixa cobertura.",
            "B": "Redução da complexidade computacional em grandes cohorts.",
            "C": "Eliminação total de falso-positivos em regiões de repetição.",
            "D": "Independência de referências genômicas durante o alinhamento.",
            "E": "Padronização exclusiva para sequenciadores de leitura longa."
        },
        "correct": "A",
        "explanation": "A opção A está correta pois o Joint Genotyping utiliza informações de múltiplos indivíduos para distinguir locais de referência de dados ausentes, aumentando a sensibilidade em áreas de baixa profundidade. As demais erram porque: B eleva significativamente a carga computacional, C não resolve problemas de mapeamento em repetições, D exige alinhamento prévio contra referência genômica e E foca em dados de Short-Reads.",
        "area": "Bioinformática",
        "difficulty": "difícil",
        "subject": "Bioinformática e análise genômica",
        "id": 1979
    },
    {
        "text": "Em conformidade com as Boas Práticas de Laboratório (BPL) e normas de biossegurança no sequenciamento genômico, qual conduta é indispensável para o controle de qualidade analítico?",
        "options": {
            "A": "Calibrar equipamentos anualmente sem manter os logs de uso diário.",
            "B": "Descartar o brometo de etídio diretamente em pia de uso comum.",
            "C": "Registrar a calibração de micropipetas e monitorar o uso diário.",
            "D": "Reutilizar as luvas descartáveis após a assepsia com álcool 70%.",
            "E": "Acondicionar reagentes sensíveis à luz em recipientes incolores."
        },
        "correct": "C",
        "explanation": "A resposta C é a correta pois as BPL exigem rastreabilidade total de equipamentos para validar resultados. As demais erram porque: A exige registros diários obrigatórios, B proíbe descarte inadequado de tóxicos, D veda reuso de EPI descartável e E requer proteção contra fotodegradação.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "id": 1980
    },
    {
        "text": "No contexto de integração de dados genômicos para o Genoma SUS, qual é o objetivo principal da etapa de Transformação em um fluxo ETL (Extract, Transform, Load)?",
        "options": {
            "A": "Padronizar e limpar dados para garantir a interoperabilidade.",
            "B": "Coletar os dados brutos diretamente de sequenciadores de DNA.",
            "C": "Armazenar permanentemente os dados em bancos de dados finais.",
            "D": "Deletar metadados redundantes para economizar o espaço em disco.",
            "E": "Realizar a anotação funcional automática de todas as variantes."
        },
        "correct": "A",
        "explanation": "A etapa de Transformação ajusta os dados extraídos a padrões e vocabulários controlados para análise posterior, garantindo consistência técnica. As demais erram porque: B descreve a etapa de Extração, C refere-se ao Carregamento (Load), D foca em compressão de arquivos e E é uma análise funcional específica.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "id": 1981
    },
    {
        "text": "No contexto de pesquisas genômicas e estudos multicêntricos envolvendo seres humanos no Brasil, qual documento normativo estabelece as diretrizes éticas fundamentais e a organização do sistema CEP/CONEP?",
        "options": {
            "A": "Resolução CNS nº 466 de 2012",
            "B": "Lei Geral de Proteção de Dados",
            "C": "Declaração de Salamanca (1994)",
            "D": "Resolução RDC nº 20 do ano 2014",
            "E": "Norma Técnica ISO 9001 de 2015"
        },
        "correct": "A",
        "explanation": "A alternativa A é a correta pois a Resolução CNS 466/2012 é a norma base da ética em pesquisa brasileira. As demais erram porque: B regula apenas privacidade de dados pessoais, C foca em educação especial inclusiva, D trata exclusivamente de transporte biológico e E padroniza sistemas de gestão.",
        "area": "Laboratório",
        "difficulty": "fácil",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "id": 1982
    },
    {
        "text": "Em estudos multicêntricos de genômica humana, qual procedimento é essencial para garantir a conformidade ética e a proteção dos participantes conforme as normas brasileiras?",
        "options": {
            "A": "Aprovação do protocolo pelo sistema CEP/CONEP e assinatura do TCLE.",
            "B": "Registro apenas no comitê de ética da instituição coordenadora.",
            "C": "Dispensa do consentimento para análises de amostras anonimizadas.",
            "D": "Divulgação antecipada de dados brutos em repositório estrangeiro.",
            "E": "Coleta biológica compulsória baseada no critério de saúde pública."
        },
        "correct": "A",
        "explanation": "A alternativa A é a correta pois estudos genômicos multicêntricos exigem rigorosa avaliação pelo sistema CEP/CONEP e a obtenção de consentimento livre para assegurar a ética na pesquisa. As demais erram porque: B exclui a responsabilidade ética dos centros associados, C desrespeita normas específicas para material genético humano, D compromete o sigilo antes do aval institucional e E desconsidera a autonomia e integridade do voluntário.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "id": 1983
    },
    {
        "text": "No contexto do processamento de dados genômicos no Genoma SUS, qual é o principal objetivo da utilização de vocabulários controlados e ontologias, como o Gene Ontology (GO)?",
        "options": {
            "A": "Padronizar a descrição de funções gênicas e processos biológicos.",
            "B": "Aumentar a velocidade física de sequenciamento de DNA em larga escala.",
            "C": "Reduzir a necessidade de armazenamento de arquivos FASTQ e BAM.",
            "D": "Eliminar a necessidade de etapas de controle de qualidade das amostras.",
            "E": "Substituir o uso de linguagens de programação no processamento de dados."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois as ontologias fornecem um vocabulário comum para descrever funções gênicas e processos biológicos de forma estruturada. As demais erram porque: B foca na velocidade do hardware, C refere-se à compressão de arquivos, D negligencia o controle de qualidade e E ignora a necessidade de programação.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "id": 1984
    },
    {
        "text": "No processamento de bibliotecas para Sequenciamento de Nova Geração (NGS) via tagmentação, o controle rigoroso da concentração inicial de DNA genômico é fundamental. Caso a relação entre a enzima transposase e a quantidade de DNA de entrada esteja incorreta (excesso de enzima para pouco DNA), qual será o impacto direto no perfil da biblioteca final?",
        "options": {
            "A": "Fragmentos excessivamente curtos dificultando o alinhamento.",
            "B": "Formação de dímeros de adaptadores que impedem o sequenciamento.",
            "C": "Redução da complexidade por baixa eficiência de ligação enzimática.",
            "D": "Presença de contaminantes proteicos que inibem a DNA polimerase.",
            "E": "Aumento da taxa de duplicatas por excesso de ciclos na PCR final."
        },
        "correct": "A",
        "explanation": "No método de tagmentação, a proporção enzima/DNA determina o tamanho dos fragmentos; pouco DNA gera fragmentos muito curtos que prejudicam a bioinformática. As demais erram porque: B relaciona-se a adaptadores livres, C envolve protocolos de ligação clássica, D refere-se à pureza e E foca na amplificação excessiva.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "id": 1985
    },
    {
        "text": "No contexto do compartilhamento de dados genômicos no projeto Genoma SUS, qual medida é fundamental para garantir a privacidade dos participantes conforme a LGPD?",
        "options": {
            "A": "Uso de senhas simples para facilitar o acesso externo.",
            "B": "Armazenamento em nuvem pública sem o uso de criptografia.",
            "C": "Anonimização ou pseudonimização dos identificadores pessoais.",
            "D": "Publicação irrestrita do genoma completo com o nome do doador.",
            "E": "Manutenção de cópias físicas sem controle de acesso restrito."
        },
        "correct": "C",
        "explanation": "A alternativa C é a correta pois a desvinculação de dados pessoais da sequência genômica protege a privacidade conforme exigido por leis de proteção de dados. As demais estão incorretas porque: A compromete a segurança com senhas fracas, B expõe dados sem camadas de proteção, D viola diretamente o sigilo do participante e E facilita acessos físicos indevidos.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Segurança de dados",
        "id": 1986
    },
    {
        "text": "No processo de preparação de bibliotecas para sequenciamento de nova geração (NGS), a etapa de seleção de tamanho (size selection) com esferas magnéticas (SPRI beads) é crítica. Qual fenômeno ocorre se a razão de volume esferas/DNA for excessivamente alta na purificação pós-ligação?",
        "options": {
            "A": "Favorece a retenção de fragmentos curtos e dímeros de adaptadores.",
            "B": "Causa a desnaturação térmica irreversível da dupla fita de DNA.",
            "C": "Inibe a polimerase na etapa de amplificação por saturação iônica.",
            "D": "Promove a hibridização cruzada entre insertos de diferentes fontes.",
            "E": "Induz o cisalhamento físico do DNA por estresse hidrodinâmico."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois razões elevadas de esferas reduzem o ponto de corte, retendo fragmentos curtos e dímeros de adaptadores que prejudicam o sequenciamento. As demais erram porque: B independe da proporção de beads utilizada, C envolve resíduos químicos como etanol ou sais, D decorre de hibridização cruzada ou excesso de ciclos e E resulta de métodos físicos como ultrassom.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "id": 1987
    },
    {
        "text": "No processamento de dados de sequenciamento de nova geração (NGS), qual ferramenta é amplamente utilizada para manipular e processar arquivos de alinhamento nos formatos SAM e BAM?",
        "options": {
            "A": "O software SAMtools.",
            "B": "O software BLAST.",
            "C": "O software PyMOL.",
            "D": "O software ClustalW.",
            "E": "O software FastQC."
        },
        "correct": "A",
        "explanation": "O SAMtools é a ferramenta fundamental para filtrar, converter e processar alinhamentos de NGS nos formatos SAM/BAM. As demais erram porque: B foca em busca de similaridade de sequências, C visualiza modelos de estruturas de proteínas, D executa alinhamentos múltiplos de sequências globais e E realiza controle de qualidade de dados brutos.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Programação e ferramentas computacionais",
        "id": 1988
    },
    {
        "text": "Na preparação de bibliotecas de DNA para sequenciamento em larga escala (NGS) utilizando células de fluxo padronizadas (patterned flow cells), qual estratégia é fundamental para mitigar o fenômeno de 'index hopping' e garantir a integridade da multiplexação?",
        "options": {
            "A": "Uso de adaptadores com índices duplos únicos (UDIs).",
            "B": "Fragmentação mecânica via ultrassom de alta energia.",
            "C": "Purificação final com esferas magnéticas na razão 1.0x.",
            "D": "Quantificação absoluta por PCR digital em gotas (ddPCR).",
            "E": "Desnaturação química com NaOH em concentração elevada."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois os UDIs permitem identificar e descartar leituras com combinações incorretas de índices geradas pelo index hopping. As demais incorrem em erro pois: B foca na integridade física, C seleciona tamanhos de fragmentos, D garante apenas precisão molar e E atua na desnaturação de fitas.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "id": 1989
    },
    {
        "text": "No fluxo de trabalho do Genoma SUS para sequenciamento de nova geração (NGS), a preparação de bibliotecas via tagmentação por transposases oferece vantagens e limitações específicas em comparação ao cisalhamento mecânico. Assinale a alternativa que descreve corretamente uma característica técnica desse processo.",
        "options": {
            "A": "A transposição exige menor massa de DNA de entrada para a reação.",
            "B": "O cisalhamento mecânico realiza a inserção direta de adaptadores.",
            "C": "A tagmentação é menos sensível a inibidores químicos e quelantes.",
            "D": "O método mecânico dispensa o reparo enzimático das extremidades.",
            "E": "A transposição assegura quebra totalmente aleatória das sequências."
        },
        "correct": "A",
        "explanation": "A tagmentação combina fragmentação e adição de adaptadores em etapa única, permitindo o uso de quantidades reduzidas de DNA inicial em comparação aos métodos físicos tradicionais. As demais erram porque: B exige etapa de ligadura posterior, C é altamente sensível ao EDTA, D requer reparo das pontas e E apresenta viés de inserção em sítios específicos.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Biologia, biologia molecular e genética",
        "id": 1990
    },
    {
        "text": "No preparo de bibliotecas para Sequenciamento de Nova Geração (NGS), qual método é mais eficaz para quantificar a integridade do DNA genômico, visando minimizar o viés de cobertura causado pela degradação da amostra?",
        "options": {
            "A": "Eletroforese capilar para determinação do DIN (DNA Integrity Number).",
            "B": "Espectrofotometria de microvolume para cálculo da razão A260/A280.",
            "C": "Fluorometria de canal duplo para detecção de dímeros de primer.",
            "D": "Ensaio de PCR quantitativo (qPCR) focado em genes de cópia única.",
            "E": "Sequenciamento Sanger em fragmentos curtos para verificação de SNPs."
        },
        "correct": "A",
        "explanation": "A eletroforese capilar permite calcular o DIN, fornecendo uma métrica objetiva da fragmentação do DNA genômico indispensável para o sucesso do NGS. As demais erram porque: B mede pureza química e não integridade estrutural; C foca em subprodutos e não no DNA inicial; D avalia amplificabilidade mas ignora a fragmentação global; E serve para validar sequências e não integridade.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Biologia, biologia molecular e genética",
        "id": 1991
    },
    {
        "text": "Em estudos de genética de populações e bioinformática, qual teste estatístico é comumente empregado para verificar se as frequências genotípicas observadas em uma amostra divergem significativamente do esperado sob acasalamento aleatório?",
        "options": {
            "A": "Teste de Mantel para análise de correlação espacial.",
            "B": "Teste de Qui-quadrado para o Equilíbrio de Hardy-Weinberg.",
            "C": "Teste t de Student para comparação de médias de alelos.",
            "D": "Teste de Wilcoxon para análise de postos de variantes.",
            "E": "Teste de Log-rank para comparação de sobrevida gênica."
        },
        "correct": "B",
        "explanation": "A alternativa B está correta pois o Qui-quadrado permite comparar frequências observadas e esperadas sob as premissas do modelo de Hardy-Weinberg. As demais erram porque: A foca em correlação espacial, C compara médias de grupos, D utiliza postos não-paramétricos e E avalia o tempo de ocorrência.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Estatística aplicada à genômica",
        "id": 1992
    },
    {
        "text": "No contexto da integração de dados genômicos para o projeto Genoma SUS, qual é o papel fundamental da etapa de 'Transformação' dentro de um fluxo de ETL?",
        "options": {
            "A": "Normalizar e converter dados para assegurar a consistência.",
            "B": "Coletar sequências brutas diretamente de bancos públicos.",
            "C": "Carregar os resultados finais em um repositório central.",
            "D": "Excluir metadados obsoletos sem modificar a estrutura.",
            "E": "Gerar novas variantes genéticas por meio de simulação."
        },
        "correct": "A",
        "explanation": "A etapa de Transformação é essencial para converter formatos heterogêneos e normalizar termos usando ontologias, garantindo a integridade dos dados genômicos. As demais erram porque: B descreve a etapa de Extração, C refere-se à etapa de Carga, D foca apenas em limpeza e E sugere simulação indevida.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "id": 1993
    },
    {
        "text": "No processo de ETL (Extração, Transformação e Carga) em Bioinformática, qual o objetivo principal do uso de ontologias e vocabulários controlados durante a etapa de transformação?",
        "options": {
            "A": "Garantir a padronização e interoperabilidade semântica dos dados.",
            "B": "Otimizar a velocidade de transferência física entre os servidores.",
            "C": "Reduzir o espaço de armazenamento dos arquivos FASTQ comprimidos.",
            "D": "Eliminar a etapa de controle de qualidade das sequências brutas.",
            "E": "Realizar a extração física das amostras de DNA no laboratório."
        },
        "correct": "A",
        "explanation": "A alternativa A é correta pois ontologias organizam o conhecimento permitindo a integração de dados entre diferentes sistemas. As demais erram porque: B foca em rede, C em compressão, D em qualidade técnica e E em bancada biológica.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "id": 1994
    },
    {
        "text": "Durante a preparação de bibliotecas de DNA para sequenciamento em larga escala (NGS), o excesso de ciclos de PCR pode levar à 'sobre-amplificação'. Esse fenômeno resulta em um perfil eletroforético anômalo caracterizado por um 'smear' de alto peso molecular. Qual processo molecular explica esse artefato?",
        "options": {
            "A": "Esgotamento de primers e hibridização de fitas via regiões adaptadoras.",
            "B": "Fragmentação excessiva do DNA genômico por métodos físicos ou químicos.",
            "C": "Erro na proporção de esferas magnéticas durante a limpeza da biblioteca.",
            "D": "Inibição da polimerase por resíduos de solventes durante a lavagem final.",
            "E": "Ligação inespecífica de adaptadores devido ao excesso de ligase na reação."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois, com o esgotamento de primers, fitas de DNA desnaturadas se anelam via adaptadores complementares em vez de amplificarem. As demais erram porque: B gera fragmentos curtos, C altera o rendimento, D impede a amplificação e E cria picos de 120pb.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Biologia, biologia molecular e genética",
        "id": 1995
    },
    {
        "text": "Em estudos de bioinformática aplicados à genética de populações, qual modelo matemático é utilizado para prever frequências genotípicas a partir das alélicas em uma população ideal?",
        "options": {
            "A": "O modelo de Equilíbrio de Hardy-Weinberg",
            "B": "O cálculo de Probabilidade Bayesiana",
            "C": "A Lei da Segregação Independente",
            "D": "O processo de Deriva Genética Aleatória",
            "E": "A Teoria da Seleção Natural Direcional"
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois o modelo de Hardy-Weinberg estabelece a relação matemática entre frequências alélicas e genotípicas sob condições ideais. As demais estão incorretas porque: B foca em estatística de inferência, C trata da herança de genes individuais, D altera frequências por acaso e E descreve mudanças adaptativas fenotípicas.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Genética de populações",
        "id": 1996
    },
    {
        "text": "No fluxo de análise de bioinformática do Genoma SUS, qual ferramenta é a principal referência para a manipulação, conversão e visualização de arquivos de alinhamento nos formatos SAM e BAM?",
        "options": {
            "A": "O software BCFtools",
            "B": "O software SAMtools",
            "C": "O software FastQC",
            "D": "O software Bowtie2",
            "E": "O software Picard"
        },
        "correct": "B",
        "explanation": "A alternativa B é a correta pois o SAMtools é a ferramenta padrão para manipulação de arquivos de alinhamento SAM e BAM. As demais alternativas erram porque: A processa arquivos VCF, C checa qualidade de leituras, D é um software alinhador e E gerencia metadados Java.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Programação e ferramentas computacionais",
        "id": 1997
    },
    {
        "text": "No âmbito de pesquisas genômicas multicêntricas envolvendo seres humanos, qual requisito ético é fundamental para assegurar a autonomia do voluntário e a transparência do estudo?",
        "options": {
            "A": "O Termo de Consentimento Livre e Esclarecido (TCLE) assinado.",
            "B": "O Protocolo de Biossegurança Nível 3 para o manejo de amostras.",
            "C": "O Certificado de Calibração de Sequenciadores de Nova Geração.",
            "D": "O Relatório de Gastos Operacionais e Logística de Transporte.",
            "E": "O Manual de Procedimentos Operacionais Padrão de Laboratório."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois o TCLE formaliza a aceitação voluntária e esclarecida do participante conforme as normas éticas nacionais. As demais erram porque: B foca em riscos biológicos, C trata de manutenção técnica, D refere-se a custos logísticos e E foca em rotinas laboratoriais.",
        "area": "Laboratório",
        "difficulty": "fácil",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "id": 1998
    },
    {
        "text": "No contexto de integração de dados genômicos e bioinformática, qual é o principal objetivo da etapa de 'Transformação' (Transform) em um fluxo de ETL?",
        "options": {
            "A": "Padronizar dados brutos usando ontologias e formatos compatíveis.",
            "B": "Transferir as sequências brutas para os servidores de armazenamento.",
            "C": "Coletar amostras de DNA diretamente de pacientes em unidades de saúde.",
            "D": "Remover registros obsoletos para otimizar o espaço no disco rígido.",
            "E": "Executar o sequenciamento de nova geração (NGS) de modo automatizado."
        },
        "correct": "A",
        "explanation": "A etapa de Transformação no processo ETL foca na limpeza, padronização e estruturação dos dados biológicos para garantir interoperabilidade entre sistemas. As demais erram porque: B refere-se à carga ou backup físico; C é coleta laboratorial pré-análise; D trata de manutenção de armazenamento; E descreve o processo biotecnológico laboratorial.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "id": 1999
    },
    {
        "text": "No contexto de estudos genômicos multicêntricos coordenados pelo Genoma SUS, qual elemento é indispensável para assegurar o respeito à autonomia e aos direitos do participante de pesquisa antes da coleta de amostras?",
        "options": {
            "A": "O Termo de Consentimento Livre e Esclarecido (TCLE) assinado.",
            "B": "O ofício de autorização emitido pela diretoria do hospital.",
            "C": "A cópia do currículo Lattes do investigador principal local.",
            "D": "O comprovante de treinamento em boas práticas laboratoriais.",
            "E": "A declaração de transporte de amostras biológicas perigosas."
        },
        "correct": "A",
        "explanation": "A alternativa A é a correta pois o TCLE formaliza a autonomia e o consentimento do participante em pesquisas. As demais erram porque: B é documento administrativo, C foca em currículo, D aborda qualidade técnica e E trata de biossegurança logística.",
        "area": "Laboratório",
        "difficulty": "fácil",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "id": 2000
    },
    {
        "text": "Em estudos de associação genômica em larga escala (GWAS), o aumento do número de testes de hipóteses simultâneos eleva a chance de resultados falso-positivos. Qual método é comumente empregado para mitigar esse problema?",
        "options": {
            "A": "Correção de Bonferroni para múltiplos testes.",
            "B": "Cálculo do desvio padrão da amostra total.",
            "C": "Aplicação do teste t de Student bicaudal.",
            "D": "Uso de regressão linear simples na análise.",
            "E": "Ajuste de normalidade pelo teste de Shapiro."
        },
        "correct": "A",
        "explanation": "A Correção de Bonferroni é a correta pois ajusta o p-valor dividindo o limite de significância pelo número total de testes realizados. As demais erram porque: B avalia variabilidade, C compara médias, D estima relações e E verifica normalidade.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Estatística aplicada à genômica",
        "id": 2001
    },
    {
        "text": "No contexto de grandes projetos genômicos vinculados à saúde pública, a condução ética de pesquisas com seres humanos exige rigor na aplicação do Termo de Consentimento Livre e Esclarecido (TCLE). De acordo com as normas vigentes, é correto afirmar que o TCLE:",
        "options": {
            "A": "Deve prever o direito de retirada do consentimento a qualquer momento.",
            "B": "Deve garantir sigilo total, proibindo o recontato futuro com o doador.",
            "C": "Permite o uso futuro de amostras sem nova aprovação do sistema CEP/CONEP.",
            "D": "Pode estabelecer renúncia prévia a direitos de indenização por danos.",
            "E": "Exige que o participante arque com os custos laboratoriais da pesquisa."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois a autonomia assegura a interrupção da participação sem quaisquer penalidades ao voluntário. As demais erram porque: B impede vedação de recontato clínico, C exige nova validação ética, D veda renúncia a indenizações e E proíbe cobrança ao participante.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "id": 2002
    },
    {
        "text": "No processo de ETL (Extração, Transformação e Carga) para bancos de dados genômicos, qual o papel fundamental de uma ontologia como a Gene Ontology (GO) na fase de transformação?",
        "options": {
            "A": "Converter sinais elétricos em bases nitrogenadas durante o processo.",
            "B": "Padronizar termos para descrever funções de genes e seus produtos.",
            "C": "Compactar arquivos grandes para reduzir o espaço de armazenamento.",
            "D": "Limpar contaminantes físicos das amostras biológicas antes da análise.",
            "E": "Acelerar a velocidade de transferência de dados entre servidores locais."
        },
        "correct": "B",
        "explanation": "A opção B é a correta pois ontologias organizam o conhecimento biológico em vocabulários estruturados essenciais para a integração de metadados. As demais erram porque: A descreve o basecalling em sequenciadores; C é uma técnica de compressão de dados; D refere-se ao preparo laboratorial da amostra; E trata de otimização de largura de banda de rede.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "id": 2003
    },
    {
        "text": "No âmbito do projeto Genoma SUS, qual medida é fundamental para proteger a identidade dos participantes ao compartilhar grandes volumes de dados genômicos para fins de pesquisa científica?",
        "options": {
            "A": "Uso de senhas compartilhadas entre pesquisadores da rede.",
            "B": "Armazenamento de dados em nuvem pública sem criptografia.",
            "C": "Aplicação de técnicas de pseudonimização nos identificadores.",
            "D": "Divulgação de nomes e CPFs em bancos de dados científicos.",
            "E": "Manutenção de registros físicos sem controle de acesso local."
        },
        "correct": "C",
        "explanation": "A alternativa C é a correta pois a pseudonimização substitui identificadores diretos por códigos, garantindo a privacidade e permitindo o uso científico seguro. As demais erram porque: A compromete a responsabilidade individual, B expõe dados a interceptações, D viola leis de proteção de dados e E facilita o acesso físico indevido.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Segurança de dados",
        "id": 2004
    },
    {
        "text": "Durante o preparo de bibliotecas para sequenciamento de nova geração (NGS) no projeto Genoma SUS, a fragmentação do DNA genômico e o controle de qualidade (QC) são etapas críticas para a representatividade dos dados. Assinale a alternativa correta sobre esses processos:",
        "options": {
            "A": "A fragmentação por sonicação gera maior viés de sequência que a enzimática.",
            "B": "O índice de integridade do DNA (DIN) é irrelevante para o sucesso do NGS.",
            "C": "A tagmentação acopla a fragmentação e a inserção de adaptadores em uma etapa.",
            "D": "O método de nebulização utiliza ondas sonoras para cisalhar o DNA genômico.",
            "E": "A quantificação por absorbância (260nm) é o padrão-ouro para bibliotecas."
        },
        "correct": "C",
        "explanation": "A alternativa C está correta pois a tagmentação utiliza transposases para clivar o DNA e inserir adaptadores simultaneamente, otimizando o tempo laboratorial. As demais erram porque: A apresenta maior viés na fragmentação enzimática, B ignora que integridade evita perdas de cobertura, D confunde nebulização com o uso de sonicação e E desconsidera a maior especificidade da fluorimetria no QC.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "id": 2005
    },
    {
        "text": "No contexto de integração de dados genômicos e processos de ETL (Extração, Transformação e Carga), qual é a principal finalidade do uso de vocabulários controlados e ontologias como a Gene Ontology (GO)?",
        "options": {
            "A": "Padronizar a descrição funcional de produtos gênicos entre espécies.",
            "B": "Realizar o alinhamento de sequências brutas contra o genoma humano.",
            "C": "Armazenar exclusivamente os dados brutos de sequenciadores NGS.",
            "D": "Converter arquivos FASTQ em formatos binários como BAM e CRAM.",
            "E": "Definir os protocolos físicos de extração de DNA em laboratório."
        },
        "correct": "A",
        "explanation": "A alternativa A é a correta pois as ontologias fornecem um vocabulário estruturado para anotação funcional consistente de genes e proteínas. As demais estão incorretas porque: B refere-se ao mapeamento de sequências, C trata de armazenamento de dados brutos, D descreve conversão de formatos de arquivos e E foca em procedimentos de bancada laboratorial.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "id": 2006
    },
    {
        "text": "No âmbito das Boas Práticas Laboratoriais (BPL) e biossegurança aplicadas ao Genoma SUS, qual conduta é essencial para assegurar a integridade dos resultados e a proteção da equipe?",
        "options": {
            "A": "Calibração periódica de equipamentos e uso de EPIs adequados.",
            "B": "Utilização de jalecos de algodão fora da área laboratorial.",
            "C": "Manuseio de amostras biológicas sem o uso de luvas de proteção.",
            "D": "Armazenamento de reagentes voláteis em geladeiras domésticas.",
            "E": "Descarte de resíduos químicos diretamente na rede de esgoto."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois as BPL exigem manutenção preventiva e proteção individual para garantir dados confiáveis e segurança ocupacional. As demais erram porque: B expõe o ambiente externo a possíveis contaminantes biológicos, C viola normas fundamentais de proteção individual e biossegurança, D oferece sérios riscos de explosão e contaminação cruzada e E causa danos ambientais e infringe graves legislações sanitárias.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "id": 2007
    },
    {
        "text": "Em estudos genômicos multicêntricos coordenados pelo Genoma SUS, qual requisito ético é indispensável para garantir a proteção dos participantes e a conformidade regulatória nacional no Brasil?",
        "options": {
            "A": "Aprovação do protocolo apenas pelo comitê da instituição coordenadora.",
            "B": "Coleta de consentimento apenas verbal sem o devido termo assinado.",
            "C": "Submissão e aprovação prévia do projeto pelo sistema CEP/CONEP nacional.",
            "D": "Envio de dados brutos identificados entre as instituições participantes.",
            "E": "Uso de amostras clínicas de rotina sem autorização do comitê de ética."
        },
        "correct": "C",
        "explanation": "A alternativa C está correta pois pesquisas multicêntricas no Brasil exigem aprovação no sistema CEP/CONEP para cada centro envolvido. As demais erram porque: A exclui a análise dos comitês participantes, B omite a obrigatoriedade do termo assinado, D viola a privacidade por dados identificados e E ignora a supervisão ética laboratorial.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "id": 2008
    },
    {
        "text": "No preparo de bibliotecas para Sequenciamento de Nova Geração (NGS) no projeto Genoma SUS, a purificação e seleção de tamanho com esferas paramagnéticas (SPRI) são fundamentais. Qual o mecanismo biofísico principal que permite a precipitação seletiva do DNA sobre as esferas em função da concentração de PEG/NaCl?",
        "options": {
            "A": "Crowding molecular pelo PEG reduzindo a hidratação e solubilidade.",
            "B": "Desnaturação térmica das fitas permitindo a adsorção na superfície.",
            "C": "Formação de pontes de hidrogênio entre as bases e os grupos amina.",
            "D": "Ligação covalente irreversível mediada por íons magnéticos livres.",
            "E": "Interação hidrofóbica específica em regiões genômicas ricas em GC."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois o PEG atua como agente de crowding molecular, desidratando o DNA e promovendo sua precipitação reversível nas esferas por exclusão de volume. As demais erram porque: B não utiliza calor para desnaturação, C ignora a repulsão eletrostática do fosfato, D a ligação é iônica e reversível e E a técnica independe da sequência de bases.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Biologia, biologia molecular e genética",
        "id": 2009
    },
    {
        "text": "No contexto da Bioinformática e da integração de dados genômicos (ETL), qual é a principal finalidade da utilização de ontologias como a Gene Ontology (GO)?",
        "options": {
            "A": "Padronizar a anotação funcional de genes em diferentes espécies.",
            "B": "Realizar o sequenciamento físico das bases nitrogenadas do DNA.",
            "C": "Armazenar exclusivamente imagens de alta resolução de proteínas.",
            "D": "Substituir a necessidade de linguagens de programação como R.",
            "E": "Gerenciar o resfriamento de supercomputadores de alto desempenho."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois ontologias como a GO fornecem vocabulários estruturados para descrever funções gênicas de forma uniforme. As demais erram porque: B refere-se a processos físicos laboratoriais; C descreve armazenamento de dados de imagem; D alega substituição de ferramentas de código; E aborda infraestrutura física de hardware.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "id": 2010
    },
    {
        "text": "Em análises estatísticas aplicadas à genômica, como em estudos de associação genômica ampla (GWAS), o 'valor-p' é uma métrica fundamental. Qual é a principal finalidade dessa medida?",
        "options": {
            "A": "Estimar a chance de o resultado observado ser fruto do acaso.",
            "B": "Medir a pureza química do DNA extraído de amostras biológicas.",
            "C": "Determinar o comprimento total em pares de bases do genoma.",
            "D": "Prever a estrutura tridimensional final de uma proteína ativa.",
            "E": "Calcular a velocidade de processamento de um sequenciador NGS."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta porque o valor-p quantifica a evidência estatística contra a hipótese nula em testes de hipótese genômicos. As demais erram porque: B avalia integridade química da amostra, C define o tamanho físico do genoma, D refere-se ao enovelamento proteico estrutural e E mede a performance do hardware de sequenciamento.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Estatística aplicada à genômica",
        "id": 2011
    },
    {
        "text": "No contexto de curadoria e integração de dados genômicos para o Genoma SUS, o uso de ontologias como o Gene Ontology (GO) desempenha um papel central. Qual é a finalidade primária desses vocabulários controlados no processamento de dados biológicos?",
        "options": {
            "A": "Padronizar a descrição funcional de produtos gênicos entre espécies.",
            "B": "Otimizar a velocidade de processamento de hardware dos sequenciadores.",
            "C": "Substituir a etapa de filtragem de qualidade das leituras brutas.",
            "D": "Automatizar o alinhamento de sequências contra genomas de referência.",
            "E": "Comprimir o tamanho dos arquivos gerados para economizar armazenamento."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois as ontologias garantem a padronização e interoperabilidade da anotação funcional de genes em bases de dados. As demais estão incorretas porque: B trata de desempenho físico de hardware, C descarta a validação obrigatória de dados, D confunde anotação semântica com alinhamento e E foca em compressão de arquivos brutos.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)",
        "id": 2012
    },
    {
        "text": "No processo de preparo de bibliotecas para sequenciamento de nova geração (NGS) utilizando a tecnologia de sequenciamento por síntese, a etapa de carregamento da flow cell é crucial. Qual parâmetro técnico deve ser rigorosamente controlado para evitar falhas de processamento por overclustering, garantindo a qualidade dos dados gerados?",
        "options": {
            "A": "A calibração precisa da molaridade da biblioteca para a flow cell.",
            "B": "A temperatura de incubação na etapa de reparo das extremidades 3'.",
            "C": "O tempo de exposição à luz UV durante a quantificação em gel.",
            "D": "A seleção de fragmentos estritamente acima de mil pares de base.",
            "E": "O uso de detergentes aniônicos durante a lavagem da flow cell."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois a densidade de clusters na flow cell depende da calibração exata da molaridade do DNA carregado para otimizar a separação de sinais. As outras estão incorretas pois: B foca na ligadura e não na densidade, C apenas quantifica sem definir o carregamento, D prejudica a eficiência da PCR de ponte e E não afeta a formação inicial dos clusters.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "id": 2013
    },
    {
        "text": "No processamento de dados de sequenciamento de nova geração (NGS), a conversão de arquivos SAM (Sequence Alignment Map) para o formato binário BAM é essencial para otimizar o armazenamento. Qual comando do pacote SAMtools realiza essa tarefa?",
        "options": {
            "A": "samtools view -b input.sam > output.bam",
            "B": "samtools sort input.sam > output.bam",
            "C": "samtools index input.sam output.bam",
            "D": "samtools merge output.bam input.sam",
            "E": "samtools stats input.sam > output.bam"
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois o subcomando view com a flag -b realiza a conversão para o formato binário compactado. As demais erram porque: B apenas ordena os alinhamentos existentes, C gera índices de busca rápida, D une diferentes arquivos mapeados e E produz relatórios estatísticos de alinhamento.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Programação e ferramentas computacionais",
        "id": 2014
    },
    {
        "text": "No processamento de amostras para o sequenciamento de nova geração (NGS), a quantificação precisa do DNA genômico é crucial. Considerando os critérios de controle de qualidade laboratorial, qual método é o mais indicado para quantificar especificamente o DNA de fita dupla (dsDNA), minimizando interferências de contaminantes como RNA e nucleotídeos livres?",
        "options": {
            "A": "Fluorimetria com corantes intercalantes específicos para DNA de fita dupla.",
            "B": "Espectrofotometria de absorbância em 260 nm para quantificar nucleotídeos.",
            "C": "Eletroforese em gel de agarose com brometo de etídio para análise visual.",
            "D": "PCR quantitativo em tempo real focado apenas em sequências repetitivas.",
            "E": "Microfluídica por eletroforese capilar para medir o tamanho de fragmentos."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois a fluorimetria utiliza corantes que se ligam apenas ao dsDNA, garantindo a precisão necessária para o sequenciamento NGS. As demais incorrem em erro pois: B superestima valores por absorver RNA e contaminantes, C é subjetiva e pouco sensível para quantificação, D é onerosa e restrita a alvos genômicos específicos e E prioriza a integridade estrutural em vez da concentração.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Biologia, biologia molecular e genética",
        "id": 2015
    },
    {
        "text": "No preparo de bibliotecas para sequenciamento genômico em larga escala (WGS), qual prática é fundamental para assegurar a diversidade molecular e a acurácia da cobertura?",
        "options": {
            "A": "Quantificar bibliotecas finais apenas por métodos de absorbância UV.",
            "B": "Substituir a fragmentação mecânica pela enzimática em todas escalas.",
            "C": "Empregar protocolos PCR-free para minimizar vieses e duplicatas.",
            "D": "Utilizar índices curtos de 4pb para aumentar a multiplexação total.",
            "E": "Realizar a etapa de clean-up com esferas em proporção de 2.0x fixo."
        },
        "correct": "C",
        "explanation": "A alternativa C está correta pois protocolos PCR-free eliminam a amplificação, reduzindo vieses de GC e duplicatas sintéticas. As demais erram porque: A apresenta baixa sensibilidade e falta de especificidade, B pode introduzir preferências de clivagem não aleatórias, D aumenta chances de erros na desmultiplexação das amostras, e E promove a co-purificação de dímeros de adaptadores indesejados.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "id": 2016
    },
    {
        "text": "No fluxo de análise genômica do Genoma SUS, após o mapeamento das leituras, qual ferramenta é essencial para realizar a ordenação, indexação e conversão de arquivos de alinhamento nos formatos SAM e BAM?",
        "options": {
            "A": "O BCFtools foca na manipulação de variantes em arquivos VCF.",
            "B": "O SAMtools realiza a manipulação de arquivos no formato BAM.",
            "C": "O FastQC executa o controle de qualidade das leituras brutas.",
            "D": "O STAR é um alinhador específico para sequenciamento de RNA.",
            "E": "O BWA é um algoritmo para o mapeamento de leituras de DNA."
        },
        "correct": "B",
        "explanation": "B é a correta pois o SAMtools é a biblioteca padrão para manipular e converter alinhamentos nos formatos SAM/BAM. As demais erram porque: A manipula variantes genômicas, C analisa qualidade, D alinha transcritos e E mapeia leituras.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Programação e ferramentas computacionais",
        "id": 2017
    },
    {
        "text": "De acordo com as diretrizes éticas para pesquisas envolvendo seres humanos no Brasil, qual documento é obrigatório para garantir a autonomia e a manifestação voluntária do participante?",
        "options": {
            "A": "Termo de Consentimento Livre e Esclarecido (TCLE)",
            "B": "Protocolo de Biossegurança e Boas Práticas Laborais",
            "C": "Certificado de Proficiência Técnica e Ética Médica",
            "D": "Relatório de Gestão de Riscos e Biossegurança Local",
            "E": "Alvará de Funcionamento emitido pela Vigilância Sanitária"
        },
        "correct": "A",
        "explanation": "A alternativa A é a correta pois o TCLE é o documento que formaliza a anuência informada do voluntário. As demais erram porque: B foca em segurança técnica, C foca em competência profissional, D foca em riscos operacionais e E foca em regularização administrativa.",
        "area": "Laboratório",
        "difficulty": "fácil",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "id": 2018
    },
    {
        "text": "Na análise de estudos de associação genômica ampla (GWAS), qual é a interpretação estatística correta para o valor-p (p-value) obtido?",
        "options": {
            "A": "Probabilidade de observar os dados sob a hipótese nula.",
            "B": "Chance de a hipótese alternativa ser verdadeira no teste.",
            "C": "Medida do tamanho do efeito biológico de uma mutação rara.",
            "D": "Estimativa do número de variantes em desequilíbrio total.",
            "E": "Percentual da variância fenotípica explicada pelo marcador."
        },
        "correct": "A",
        "explanation": "A alternativa A é a correta pois o valor-p indica a probabilidade de obter resultados tão extremos quanto os observados assumindo que a hipótese nula seja verdadeira. As demais erram porque: B inverte a probabilidade condicional, C confunde significância com magnitude, D refere-se ao desequilíbrio de ligação e E descreve o coeficiente de determinação.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Estatística aplicada à genômica",
        "id": 2019
    },
    {
        "text": "Durante o processamento de amostras para sequenciamento de nova geração (NGS), a conformidade com as Boas Práticas Laboratoriais (BPL) e biossegurança exige rigor técnico. Qual conduta é indispensável para prevenir a contaminação cruzada e garantir a integridade dos processos?",
        "options": {
            "A": "Descarte de ponteiras com filtro em lixo comum após autoclave.",
            "B": "Manipulação de bibliotecas e extração em áreas físicas isoladas.",
            "C": "Armazenamento de reagentes e amostras biológicas no mesmo freezer.",
            "D": "Reutilização de luvas de procedimento após higienização com álcool.",
            "E": "Pipetagem manual de reagentes tóxicos fora de capelas de exaustão."
        },
        "correct": "B",
        "explanation": "A alternativa B é a correta pois a segregação de fluxos pré e pós-PCR é vital para evitar a contaminação cruzada por amplicons. As demais erram porque: A exige descarte como resíduo infectante, C permite contaminação cruzada de amostras, D compromete a integridade do EPI e E ignora riscos de inalação química.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "id": 2020
    },
    {
        "text": "Qual modelo matemático é utilizado como nulo para descrever a estabilidade das frequências alélicas em uma população ideal sem pressões evolutivas?",
        "options": {
            "A": "Equilíbrio de Hardy-Weinberg",
            "B": "Deriva genética aleatória",
            "C": "Princípio da Seleção Natural",
            "D": "Fluxo gênico populacional",
            "E": "Taxa de mutação recorrente"
        },
        "correct": "A",
        "explanation": "O Equilíbrio de Hardy-Weinberg estabelece a estabilidade das frequências alélicas na ausência de forças evolutivas. As demais erram porque: B causa oscilações aleatórias em populações pequenas; C seleciona alelos vantajosos alterando a frequência; D introduz alelos via migração entre populações; E gera novos alelos alterando a composição original.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Genética de populações",
        "id": 2021
    },
    {
        "text": "Na preparação de bibliotecas para Sequenciamento de Nova Geração (NGS) utilizando a técnica de tagmentação (fragmentação enzimática), qual fator é o mais crítico para garantir a distribuição adequada do tamanho dos insertos e o sucesso da biblioteca?",
        "options": {
            "A": "A manutenção da razão A260/A230 em níveis estritamente acima de 2.5.",
            "B": "A normalização rigorosa da concentração inicial de DNA na reação.",
            "C": "O emprego de altas concentrações de EDTA para estabilizar a amostra.",
            "D": "A utilização exclusiva de fluorimetria para detectar fita simples.",
            "E": "O incremento do tempo de incubação para gerar fragmentos uniformes."
        },
        "correct": "B",
        "explanation": "B é a correta pois a tagmentação exige estequiometria rigorosa entre DNA e enzima para controlar o tamanho dos fragmentos. As demais erram porque: A foca em pureza extrema desnecessária, C usa EDTA que inibe a reação, D negligencia o foco em dupla-fita e E causa fragmentação excessiva dos insertos.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "id": 2022
    },
    {
        "text": "No modelo de Hardy-Weinberg, qual fator é essencial para manter a estabilidade das frequências alélicas ao longo das gerações em uma população?",
        "options": {
            "A": "A existência de uma população grande para evitar a deriva.",
            "B": "A ocorrência frequente de mutações para gerar novos alelos.",
            "C": "A seleção natural agindo sobre fenótipos menos adaptados.",
            "D": "O acasalamento preferencial entre os indivíduos do grupo.",
            "E": "O fluxo gênico constante através de processos migratórios."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois o tamanho populacional elevado anula o efeito da deriva genética aleatória sobre o pool gênico. As demais erram porque: B altera frequências, C seleciona fenótipos, D exige panmixia e E requer isolamento.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Genética de populações",
        "id": 2023
    },
    {
        "text": "No fluxo de trabalho da bioinformática para o Genoma SUS, qual ferramenta é essencial para a manipulação, ordenação e conversão de arquivos de alinhamento nos formatos SAM e BAM?",
        "options": {
            "A": "SAMtools: manipulação e processamento de alinhamentos SAM/BAM.",
            "B": "FastQC: avaliação da qualidade de sequências brutas do NGS.",
            "C": "BLAST: alinhamento local de sequências em bancos de dados.",
            "D": "Bowtie2: ferramenta para o alinhamento de leituras curtas.",
            "E": "Bedtools: manipulação de intervalos genômicos em arquivos BED."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta porque o SAMtools é a biblioteca padrão para converter, ordenar e indexar arquivos de mapeamento SAM/BAM. As demais erram porque: B avalia qualidade bruta, C busca similaridade local, D realiza alinhamento inicial e E compara intervalos genômicos.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Programação e ferramentas computacionais",
        "id": 2024
    },
    {
        "text": "No preparo de bibliotecas para Sequenciamento de Nova Geração (NGS), qual procedimento laboratorial é essencial para mitigar o erro de carregamento e garantir a densidade ideal de clusters?",
        "options": {
            "A": "Utilização de fluorometria para quantificar o DNA de fita dupla.",
            "B": "Emprego de espectrofotometria para análise de pureza da amostra.",
            "C": "Precipitação com acetato de sódio para selecionar fragmentos.",
            "D": "Realização de PCR de enriquecimento com ciclos indeterminados.",
            "E": "Aquecimento a 95 graus Celsius para remoção de adaptadores."
        },
        "correct": "A",
        "explanation": "A é a correta pois a fluorometria é específica para o DNA alvo, permitindo o cálculo molar exato para o flow cell. As demais erram porque: B superestima concentração por contaminantes, C não realiza seleção precisa, D gera artefatos e duplicatas e E desnatura o DNA final.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "id": 2025
    },
    {
        "text": "Em estudos genômicos de larga escala, como GWAS, a realização de múltiplos testes estatísticos simultâneos exige ajustes para mitigar a ocorrência de falso-positivos. Qual abordagem é amplamente utilizada para controlar a taxa de erro do Tipo I dividindo o nível de significância pelo número total de testes?",
        "options": {
            "A": "A correção de Bonferroni",
            "B": "O teste t de Student",
            "C": "O coeficiente de Gini",
            "D": "O desvio padrão relativo",
            "E": "A regressão linear simples"
        },
        "correct": "A",
        "explanation": "A correção de Bonferroni é um método clássico para controlar a taxa de erro familiar ao ajustar o limiar de significância proporcionalmente ao volume de testes realizados. As demais erram porque: B apenas compara médias de dois grupos, C avalia desigualdade ou dispersão estatística, D quantifica a dispersão em torno da média e E descreve relações lineares entre variáveis.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Estatística aplicada à genômica",
        "id": 2026
    },
    {
        "text": "Em um estudo multicêntrico de larga escala do projeto Genoma SUS, qual é o procedimento ético normatizado para a obtenção da aprovação inicial da pesquisa no Brasil?",
        "options": {
            "A": "Aprovação pelo CEP do Centro Coordenador e posterior registro na CONEP.",
            "B": "Aprovação simultânea em todos os CEPs locais sem um centro coordenador.",
            "C": "Autorização exclusiva do Ministério da Saúde sem passar pelo sistema CEP.",
            "D": "Coleta imediata baseada apenas na assinatura do termo pelos pacientes.",
            "E": "Dispensa de avaliação ética para projetos de sequenciamento populacional."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois estudos multicêntricos exigem aprovação do CEP coordenador e, em áreas como genética, crivo da CONEP. As demais erram porque: B ignora o fluxo hierárquico obrigatório, C descumpre a autonomia do sistema CEP/CONEP, D fere a necessidade de aprovação ética prévia e E viola resoluções nacionais sobre ética genômica.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "id": 2027
    },
    {
        "text": "Em estudos multicêntricos de genômica, qual o papel fundamental do Termo de Consentimento Livre e Esclarecido (TCLE) na proteção do participante?",
        "options": {
            "A": "Garantir que o participante compreenda riscos e benefícios.",
            "B": "Isentar o pesquisador de responsabilidade civil ou legal.",
            "C": "Autorizar o uso comercial irrestrito de dados genéticos.",
            "D": "Substituir a aprovação prévia do comitê de ética local.",
            "E": "Impedir a retirada do voluntário após o início do estudo."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois o TCLE garante a autonomia e o conhecimento sobre riscos e benefícios pelo voluntário. As demais erram porque: B não isenta responsabilidade legal, C proíbe exploração comercial indevida, D mantém obrigatoriedade de comitês e E desrespeita direito de desistência.",
        "area": "Laboratório",
        "difficulty": "fácil",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "id": 2028
    },
    {
        "text": "De acordo com as boas práticas de segurança de dados e a Lei Geral de Proteção de Dados (LGPD), qual medida é essencial para preservar a privacidade dos participantes em projetos de sequenciamento genômico em larga escala?",
        "options": {
            "A": "Anonimização de dados sensíveis antes do compartilhamento.",
            "B": "Divulgação pública de nomes e CPFs vinculados às amostras.",
            "C": "Armazenamento de senhas de acesso em arquivos de texto puro.",
            "D": "Permissão de acesso administrativo a todos os funcionários.",
            "E": "Envio de sequências brutas por e-mails pessoais sem cifragem."
        },
        "correct": "A",
        "explanation": "A alternativa A é a correta pois a anonimização protege a identidade do paciente em conformidade com as leis de proteção de dados. As demais erram porque: B viola a privacidade expondo identidades, C permite fácil captura de senhas, D ignora o controle de acesso restrito e E expõe dados em canais inseguros.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Segurança de dados",
        "id": 2029
    },
    {
        "text": "No contexto de um laboratório de genômica que segue as Boas Práticas de Laboratório (BPL) para o processamento de amostras do Genoma SUS, qual medida é fundamental para assegurar o controle de qualidade e a biossegurança?",
        "options": {
            "A": "Calibrar micropipetas anualmente sem manter registros de rastreabilidade.",
            "B": "Armazenar reagentes de PCR e produtos amplificados no mesmo equipamento.",
            "C": "Implementar fluxo unidirecional rígido entre áreas de pré e pós-amplificação.",
            "D": "Realizar o descarte de materiais perfurocortantes em sacos plásticos brancos.",
            "E": "Substituir a validação de métodos pela utilização de protocolos de terceiros."
        },
        "correct": "C",
        "explanation": "A alternativa C é a correta pois o fluxo unidirecional mitiga riscos de contaminação por amplicons, garantindo a integridade dos resultados de NGS. As demais erram porque: A negligencia a rastreabilidade documental exigida pelas normas de BPL; B permite contaminação cruzada por misturar reagentes e produtos amplificados; D descreve o descarte inadequado de resíduos perfurocortantes em sacos; E ignora a obrigatoriedade de validação interna de metodologias laboratoriais.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "id": 2030
    },
    {
        "text": "No contexto da ética em pesquisa envolvendo seres humanos em projetos genômicos, qual documento é fundamental para garantir o respeito à autonomia e a proteção dos dados dos participantes?",
        "options": {
            "A": "O Termo de Consentimento Livre e Esclarecido (TCLE).",
            "B": "O Certificado de Proficiência em Boas Práticas Clínicas.",
            "C": "O Laudo Técnico de Sequenciamento de Nova Geração.",
            "D": "O Protocolo de Biossegurança e Manejo de Amostras.",
            "E": "O Formulário de Controle de Qualidade da Extração."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois o TCLE assegura a autonomia e os direitos do participante conforme as normas éticas. As demais erram porque: B refere-se a treinamento profissional, C é um relatório de dados, D visa a proteção física e E controla processos técnicos.",
        "area": "Laboratório",
        "difficulty": "fácil",
        "subject": "Noções de saúde pública e ética em pesquisa",
        "id": 2031
    },
    {
        "text": "No contexto de bioinformática e análise genômica, qual ferramenta é fundamental para a manipulação, indexação e extração de estatísticas de arquivos de alinhamento nos formatos SAM e BAM?",
        "options": {
            "A": "GATK, focada principalmente na descoberta de variantes.",
            "B": "SAMtools, específica para o processamento de alinhamentos.",
            "C": "BCFtools, utilizada no manejo de arquivos VCF e BCF.",
            "D": "BEDTools, voltada para comparação de intervalos genômicos.",
            "E": "FastQC, empregada na avaliação inicial das reads brutas."
        },
        "correct": "B",
        "explanation": "B é a correta pois o SAMtools é a ferramenta padrão para gerenciar alinhamentos SAM/BAM. As demais erram porque: A foca na detecção de variantes genéticas, C manipula apenas arquivos VCF/BCF, D realiza aritmética de intervalos genômicos e E avalia qualidade de sequências brutas.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Programação e ferramentas computacionais",
        "id": 2032
    },
    {
        "text": "No contexto da genética de populações, qual princípio matemático descreve a manutenção das frequências alélicas e genotípicas em uma população ideal, na ausência de forças evolutivas?",
        "options": {
            "A": "O Equilíbrio de Hardy-Weinberg.",
            "B": "O Teorema Central do Limite.",
            "C": "A Seleção Natural Direcional.",
            "D": "O Princípio da Deriva Genética.",
            "E": "O Efeito Fundador Populacional."
        },
        "correct": "A",
        "explanation": "O Equilíbrio de Hardy-Weinberg é o modelo nulo que prevê a estabilidade genética populacional sob condições ideais. As demais erram porque: B aborda convergência de variáveis aleatórias, C promove mudança adaptativa unidirecional, D descreve flutuações estocásticas em grupos reduzidos e E ocorre quando poucos indivíduos iniciam nova população.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Genética de populações",
        "id": 2033
    },
    {
        "text": "No fluxo de análise de bioinformática para o Genoma SUS, qual comando da ferramenta SAMtools é utilizado para converter um arquivo de alinhamento do formato SAM (Sequence Alignment Map) para o formato binário BAM?",
        "options": {
            "A": "samtools view -b input.sam > output.bam",
            "B": "samtools sort input.sam > output.bam",
            "C": "samtools index input.sam > output.bam",
            "D": "samtools depth input.sam > output.bam",
            "E": "samtools merge input.sam > output.bam"
        },
        "correct": "A",
        "explanation": "A opção A é a correta pois o subcomando 'view' com o parâmetro '-b' converte o formato de texto SAM para o binário BAM. As demais erram porque: B realiza a ordenação das sequências, C gera índices de busca rápida, D calcula a cobertura de profundidade e E une diversos arquivos alinhados.",
        "area": "Bioinformática",
        "difficulty": "fácil",
        "subject": "Programação e ferramentas computacionais",
        "id": 2034
    },
    {
        "text": "No contexto do sequenciamento de nova geração (NGS), após a construção da biblioteca e antes do carregamento na flow cell, a quantificação precisa e a análise do tamanho dos fragmentos são cruciais. Qual parâmetro de controle de qualidade é determinante para evitar a saturação de clusters ou a baixa densidade de dados, garantindo a representatividade equitativa das amostras no multiplexing?",
        "options": {
            "A": "Concentração molar baseada em espectrofotometria de UV-Visível (Abs 260/280).",
            "B": "Proporção de bases GC calculada após o alinhamento primário das leituras.",
            "C": "Quantificação por qPCR e perfil de tamanho via eletroforese capilar.",
            "D": "Volume final de eluato obtido após a purificação com esferas magnéticas.",
            "E": "Integridade do DNA genômico inicial medida pelo índice DIN em gel de agarose."
        },
        "correct": "C",
        "explanation": "A alternativa C é a correta pois o qPCR quantifica apenas moléculas funcionalmente adaptadas e a eletroforese define o tamanho médio para o cálculo da molaridade necessária ao pooling equimolar. As demais erram porque: A sofre interferência de contaminantes, B ocorre apenas após o sequenciamento, D não mede a concentração funcional e E avalia apenas a amostra bruta inicial.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "id": 2035
    },
    {
        "text": "No preparo de bibliotecas para Sequenciamento de Nova Geração (NGS) em larga escala, a escolha do enriquecimento de alvo impacta a acurácia diagnóstica. Qual técnica é mais indicada para a detecção de variações no número de cópias (CNVs) e rearranjos estruturais em painéis genômicos amplos?",
        "options": {
            "A": "A hibridização por sondas captura fragmentos maiores e mais uniformes.",
            "B": "O PCR múltiplo é ideal para detectar grandes rearranjos estruturais.",
            "C": "A transposase insere adaptadores sem viés em sequências ricas em GC.",
            "D": "Beacons moleculares garantem a captura de variantes de cópia única.",
            "E": "O método Sanger é o padrão-ouro para análise de painéis genômicos."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois a captura por hibridização permite maior flexibilidade no mapeamento de fragmentos sobrepostos, essencial para detectar CNVs e quebras estruturais. As demais erram porque: B falha em detectar rearranjos fora dos primers, C possui viés de inserção em regiões GC, D é usada em qPCR e não preparo NGS e E carece de escalabilidade genômica.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Biologia, biologia molecular e genética",
        "id": 2036
    },
    {
        "text": "No fluxo de trabalho de Sequenciamento de Nova Geração (NGS), o controle de qualidade do DNA genômico antes do preparo da biblioteca é crítico. Considerando a quantificação e integridade das amostras, qual afirmação reflete uma prática técnica correta e fundamentada?",
        "options": {
            "A": "O NanoDrop superestima a amostra por detectar contaminantes e RNA.",
            "B": "A eletroforese capilar dispensa a quantificação por fluorescência.",
            "C": "O Qubit quantifica apenas fragmentos de DNA com mais de 10kb.",
            "D": "Bibliotecas degradadas geram clusters densos de baixa qualidade.",
            "E": "O índice de integridade (DIN) é ignorado no preparo de bibliotecas."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois a espectrofotometria em 260nm não distingue DNA de RNA ou contaminantes orgânicos, gerando medidas imprecisas para o input do NGS. As demais erram porque: B não substitui a quantificação molar, C quantifica diversos tamanhos via fluoróforo, D gera clusters de baixa densidade e E o DIN define o sucesso da reação.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "id": 2037
    },
    {
        "text": "No processamento de amostras para o Genoma SUS, a normalização de bibliotecas genômicas antes do pooling é fundamental para a eficiência do sequenciamento. Qual método assegura a melhor precisão na distribuição de reads em corridas multiplexadas de NGS?",
        "options": {
            "A": "Calibragem por espectrofotometria visando a concentração de 10ng/uL.",
            "B": "Quantificação via qPCR e ajuste para molaridade equimolar no pool.",
            "C": "Uso de eletroforese capilar para medir apenas o tamanho dos fragmentos.",
            "D": "Agrupamento de amostras baseado na densidade óptica após a extração.",
            "E": "Redução do ciclo de PCR para evitar a formação de dímeros de adaptadores."
        },
        "correct": "B",
        "explanation": "A alternativa B é a correta pois o qPCR quantifica especificamente moléculas com adaptadores funcionais, garantindo pooling equimolar preciso. As demais erram porque: A usa espectrofotometria que não diferencia DNA de contaminantes; C foca no tamanho e não na concentração molar total; D ignora variações de eficiência durante o preparo da biblioteca; E foca em artefatos e não na normalização entre amostras.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)",
        "id": 2038
    },
    {
        "text": "No âmbito de estudos multicêntricos do Genoma SUS envolvendo genética humana, qual o fluxo correto de tramitação ética conforme as normas do Conselho Nacional de Saúde?",
        "options": {
            "A": "Submissão inicial ao CEP Coordenador e posterior análise pela CONEP.",
            "B": "Aprovação ética independente em cada centro sem o CEP Coordenador.",
            "C": "Dispensabilidade de análise da CONEP para dados genômicos anônimos.",
            "D": "Validação exclusiva pelo Comitê de Ética do Ministério da Saúde.",
            "E": "Consentimento verbal coletivo dispensando o TCLE individual físico."
        },
        "correct": "A",
        "explanation": "A resposta A está correta pois estudos genéticos em redes multicêntricas exigem tramitação pelo sistema CEP/CONEP obrigatoriamente. As demais erram porque: B ignora o trâmite coordenador central, C exclui a CONEP indevidamente, D inventa competência administrativa inexistente e E descumpre a obrigatoriedade do consentimento documentado.",
        "area": "Laboratório",
        "difficulty": "difícil",
        "subject": "Ética em pesquisa e noções de estudos multicêntricos",
        "id": 2039
    },
    {
        "text": "No contexto das Boas Práticas de Laboratório (BPL) e controle de qualidade para o sequenciamento de nova geração (NGS), qual procedimento é fundamental para assegurar a precisão dos volumes manipulados e a rastreabilidade do processo?",
        "options": {
            "A": "Calibração periódica e verificação diária de micropipetas.",
            "B": "Uso exclusivo de ponteiras sem filtro para evitar adsorção.",
            "C": "Armazenamento de buffers críticos em prateleiras abertas.",
            "D": "Descarte de resíduos químicos junto ao material biológico.",
            "E": "Lavagem de luvas de látex com álcool para reduzir custos."
        },
        "correct": "A",
        "explanation": "A alternativa A está correta pois a manutenção rigorosa dos instrumentos assegura a precisão volumétrica necessária em ensaios genômicos. As demais erram porque: B permite contaminação por aerossóis, C compromete a estabilidade térmica, D ignora a segregação de resíduos e E aumenta risco de exposição.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "id": 2040
    },
    {
        "text": "No contexto de um laboratório de genômica do projeto Genoma SUS, a mitigação de riscos de contaminação e a observância às normas de biossegurança são pilares das Boas Práticas Laboratoriais (BPL). Qual das diretrizes abaixo deve ser rigorosamente seguida para garantir a integridade dos resultados de sequenciamento de nova geração (NGS)?",
        "options": {
            "A": "Executar extração e preparo de bibliotecas no mesmo espaço físico.",
            "B": "Manter o fluxo unidirecional da pré-PCR para as áreas de pós-PCR.",
            "C": "Utilizar ponteiras sem filtro para reduzir custos em extrações de DNA.",
            "D": "Manipular agentes biológicos do grupo 2 sem o uso de cabine de segurança.",
            "E": "Armazenar reagentes críticos em geladeiras de uso comum com alimentos."
        },
        "correct": "B",
        "explanation": "A alternativa B é correta pois o fluxo unidirecional previne a contaminação de amostras virgens por amplicons da pós-PCR. As demais erram porque: A causa contaminação cruzada entre etapas, C permite entrada de aerossóis indesejados, D infringe normas de segurança coletiva e E compromete a integridade química dos reagentes.",
        "area": "Laboratório",
        "difficulty": "médio",
        "subject": "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade",
        "id": 2041
    }
];
