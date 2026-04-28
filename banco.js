// ====================================================================
// BANCO COMPLETO DE QUESTÕES - GENOMA SUS (TEXTOS REFINADOS)
// Processamento Lote-IA: Alternativas reduzidas e equilibradas para acabar com o viés.
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
        "explanation": "O código genético tem 64 códons para 20 aminoácidos, logo a maioria dos aminoácidos é codificada por mais de um códon.",
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
        "explanation": "O esqueleto de açúcar-fosfato confere uma forte carga negativa ao DNA, fazendo-o migrar para o polo positivo (ânodo) em um campo elétrico.",
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
        "explanation": "O método de beads magnéticas (SPRI) permite automação e size selection. O NanoDrop avalia apenas pureza. Heparina inibe a PCR.",
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
        "explanation": "A química Illumina usa terminadores reversíveis para ler uma base de cada vez fotograficamente. Os clusters são gerados por bridge amplification, não emulsão.",
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
        "explanation": "O pipeline correto para DNA é: quebrar o DNA, reparar as pontas rombas, adicionar a cauda 'A', ligar os adaptadores em 'Y' (T-overhang), selecionar tamanho e amplificar.",
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
        "explanation": "Uma taxa de duplicação de 45% significa que quase metade dos seus reads são lixo (cópias exatas de PCR da mesma molécula original), indicando baixa complexidade.",
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
        "explanation": "Viola o princípio de Originalidade e Contemporaneidade (os dados devem ser registrados no exato momento da execução).",
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
        "explanation": "A Cabine de Segurança Biológica Classe II garante um fluxo laminar seguro para a amostra e filtração HEPA na exaustão para proteger o operador e o ambiente.",
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
        "explanation": "Muitos pacientes desejam contribuir para a ciência, mas não querem ser informados caso descubram que têm risco elevado para Alzheimer ou câncer. Esse é o 'Direito de não saber'.",
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
        "explanation": "A diversidade genética do Brasil é sub-representada em bancos europeus. O Genomas SUS visa corrigir isso para permitir medicina de precisão na nossa população.",
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
        "explanation": "O BQSR modela a taxa de erro física da máquina (ex: bases no final do read têm pior qualidade) e re-atribui o Phred Score para evitar chamadas de variantes falsas.",
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
        "explanation": "Diferente de métodos obsoletos, o HaplotypeCaller faz a montagem de DNA em miniatura no local da variante (Grafos) para lidar com InDels de forma muito mais precisa.",
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
        "explanation": "GT=0/1 (Heterozigoto). AD=30,30 (30 reads da ref 'G', 30 reads do alt 'A'). GQ=99 (Phred score máximo, altíssima confiança).",
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
        "explanation": "A flag bitwise 1024 em SAM/BAM marca reads como duplicados (PCR/Optical). O CRAM precisa de referência. BED é 0-based. BAM é binário (BGZF).",
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
        "explanation": "Como há Desequilíbrio de Ligação (LD), estima-se que existam 1 milhão de 'blocos' de genes independentes no genoma. O p-value 0.05 é dividido por 1 milhão (Bonferroni) = 5x10^-8.",
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
        "explanation": "A PCA clusteriza os pacientes baseando-se em sua origem geográfica (Europeus, Africanos, Asiáticos). Controlar a PCA no GWAS evita que você ache que um gene causa a doença, quando na verdade ele é apenas característico de uma etnia.",
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
        "explanation": "Se q = 0.02, então p = 0.98. Frequência de heterozigotos = 2pq = 2 * (0.98) * (0.02) = 0.0392 = 3.92%.",
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
        "explanation": "Humanos são uma espécie muito homogênea. As diferenças raciais visíveis representam uma fração minúscula da variabilidade genética.",
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
        "explanation": "Arquivos BAM e VCF humanos são dados sensíveis. Discos devem estar cifrados com AES. O tráfego de internet via portas da API deve ser TLS/HTTPS.",
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
        "explanation": "A HPO traduz sintomas (ex: 'Convulsão') para uma linguagem de máquina estruturada (HP:0001250), permitindo que algoritmos cruzem o sintoma com o genoma do paciente.",
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
        "explanation": "O Qubit usa corantes intercalantes (como PicoGreen) que se ligam especificamente a DNA de fita dupla, fornecendo quantificação mais precisa para normalização de bibliotecas NGS.",
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
        "explanation": "O TapeStation utiliza eletroforese capilar para separar fragmentos de DNA por tamanho, gerando um eletroferograma que mostra a distribuição de tamanhos e permite calcular o DIN (DNA Integrity Number).",
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
        "explanation": "A bridge amplification gera clusters clonais onde cada fragmento original é amplificado para ~1000 cópias idênticas, fornecendo sinal fluorescente suficiente para detecção pela câmera do sequenciador.",
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
        "explanation": "O score Phred Q30 indica probabilidade de erro de 0,001 (1 em 1000), ou seja, 99,9% de acurácia. A fórmula é Q = -10 * log10(P_erro).",
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
        "explanation": "A A-tailing adiciona uma desoxiadenosina na extremidade 3' dos fragmentos blunt-end, criando complementaridade com o overhang T dos adaptadores Illumina.",
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
        "explanation": "O NTC (No Template Control) verifica se os reagentes de extração estão livres de contaminação por DNA exógeno, sendo processado identicamente às amostras mas sem material biológico.",
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
        "explanation": "As precauções universais assumem que todo material biológico humano pode conter patógenos transmissíveis pelo sangue, independentemente do status conhecido do doador.",
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
        "explanation": "A rastreabilidade completa requer sistemas automatizados como LIMS (Laboratory Information Management System) com códigos de barra para tracking desde coleta até resultado.",
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
        "explanation": "A validação analítica conforme ICH Q2 requer demonstração de múltiplos parâmetros de performance para garantir confiabilidade do método.",
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
        "explanation": "O TCLE em genômica deve ser abrangente, cobrindo aspectos específicos como armazenamento em biobancos, possibilidade de uso futuro, achados incidentais e direitos do participante.",
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
        "explanation": "A LGPD classifica dados genéticos como sensíveis (Art. 5º, II), exigindo bases legais específicas e medidas reforçadas de proteção e segurança.",
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
        "explanation": "Equidade no SUS significa tratar desigualmente os desiguais, investindo mais onde há maiores necessidades e lacunas de cobertura.",
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
        "explanation": "A sonicação focada (Covaris) produz fragmentação mais uniforme e controlada, com menor viés de composição de bases comparada à fragmentação enzimática.",
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
        "explanation": "O sequenciamento paired-end lê ambas as extremidades de cada fragmento, fornecendo informação sobre insert size e orientação, melhorando mapeamento e detecção de variantes estruturais.",
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
        "explanation": "A flag -f 2 filtra reads properly paired. A flag -h inclui o header SAM. Properly paired significa que ambos os reads do par foram mapeados com orientação e distância esperadas.",
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
        "explanation": "O comando norm com -m -any decompõe variantes multi-alélicas e -f realiza left-alignment usando a referência, padronizando representação de variantes.",
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
        "explanation": "Em pandas, a sintaxe df[df['coluna'] > valor] cria um filtro booleano para selecionar linhas que atendem à condição.",
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
        "explanation": "O VQSR treina um modelo Gaussiano usando variantes conhecidas como verdadeiros positivos (HapMap, Omni) e falsos positivos, recalibrando scores de qualidade.",
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
        "explanation": "A anotação funcional combina múltiplos recursos: bases de anotação gênica (RefSeq, Ensembl) e bases de significado clínico (ClinVar, COSMIC) para interpretação abrangente.",
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
        "explanation": "Read depth ou cobertura é o número de reads sequenciados que alinham a uma posição genômica específica, sendo crucial para confiabilidade da chamada de variantes.",
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
        "explanation": "Poder estatístico é a probabilidade de rejeitar corretamente uma hipótese nula falsa, dependendo do tamanho do efeito, tamanho amostral e nível de significância.",
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
        "explanation": "Lambda genômico é a mediana dos qui-quadrados observados dividida pela mediana esperada. Valores > 1.05-1.10 sugerem inflação por estratificação ou outros vieses.",
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
        "explanation": "r² = 1 indica desequilíbrio de ligação completo, onde os alelos dos dois loci segregam sempre juntos. r² = 0 indica equilíbrio de ligação (independência).",
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
        "explanation": "PRS soma os efeitos de milhares de variantes genéticas, cada uma ponderada pelo seu efeito estimado em GWAS, fornecendo um score de risco genético individual.",
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
        "explanation": "FAIR data principles: Findable (localizável), Accessible (acessível), Interoperable (interoperável), Reusable (reutilizável) - promovem gestão responsável de dados científicos.",
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
        "explanation": "A Sequence Ontology fornece termos controlados para descrever features de sequências biológicas, sendo usada na anotação de genomas e variantes.",
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
        "explanation": "Spark é um framework de computação distribuída que permite processar grandes volumes de dados genômicos (VCFs, BAMs) em paralelo através de clusters de computadores.",
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
        "explanation": "CRAM usa compressão reference-based, armazenando apenas diferenças em relação ao genoma de referência, reduzindo significativamente o tamanho dos arquivos.",
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
        "explanation": "Variantes somáticas requerem algoritmos específicos que comparam tumor vs tecido normal, consideram pureza tumoral, heterogeneidade e clonalidade.",
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
        "explanation": "Heritabilidade é a proporção da variância fenotípica total que pode ser atribuída a variância genética aditiva em uma população específica.",
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
        "explanation": "Gabarito: Letra B. O EDTA atua como um 'quelante' que sequestra o Magnésio, paralisando as DNases (que destruiriam o DNA) e impedindo a cascata de coagulação.",
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
        "explanation": "Gabarito: Letra B. Em protocolos NGS altamente sensíveis, a tecnologia de ponteiras com filtro é crucial para evitar a contaminação cruzada (carry-over).",
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
        "explanation": "Gabarito: Letra B. A PCR introduz viés porque amplifica melhor algumas regiões do que outras (especialmente regiões extremas em GC). Pular a PCR elimina esse viés.",
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
        "correct": "D",
        "explanation": "Gabarito: Letra B. É o pilar da bioética moderna. O bem-estar do indivíduo sempre supera a necessidade de descoberta científica.",
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
        "correct": "C",
        "explanation": "Gabarito: Letra A. Na primeira etapa, as beads capturam os fragmentos indesejados muito grandes (que vão para o lixo). Na segunda etapa, novas beads capturam os fragmentos ideais que haviam ficado no líquido.",
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
        "explanation": "Gabarito: Letra B. Refere-se à translação do conhecimento dos sequenciadores diretamente para o benefício coletivo no SUS.",
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
        "correct": "E",
        "explanation": "Gabarito: Letra B. Essa é a grande métrica de eficiência dos robôs NGS; o tempo que a máquina trabalha sozinha enquanto você avança outros projetos.",
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
        "explanation": "Gabarito: Letra B. Algumas pessoas infectadas desenvolvem cardiopatia severa enquanto outras ficam assintomáticas a vida toda. A genômica busca encontrar o porquê genético disso.",
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
        "correct": "D",
        "explanation": "Gabarito: Letra B. O trio Qubit + TapeStation + Verificação Visual de Adapter-Dimers é a trindade do QC antes de mandar para a Flow Cell.",
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
        "explanation": "Gabarito: Letra B. Locus é o 'endereço'. Gene é a 'casa'. Alelo é 'quem mora lá' (as variações).",
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
        "correct": "D",
        "explanation": "Gabarito: Letra B. Os SNPs representam a base da diversidade genética humana e da medicina genômica populacional.",
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
        "correct": "D",
        "explanation": "Gabarito: Letra B. O NTC vai com água no lugar da amostra. Se surgir DNA ali no final, o kit está contaminado.",
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
        "correct": "C",
        "explanation": "Gabarito: Letra B. Phasing é separar as variantes herdadas do pai daquelas herdadas da mãe, recriando o cromossomo exato que você herdou.",
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
        "correct": "A",
        "explanation": "Gabarito: Letra B. A hemoglobina é rica em ferro, que atua como inibidor de enzimas dependentes de magnésio (como as polimerases).",
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
        "correct": "D",
        "explanation": "Gabarito: Letra B. É o momento de provar que os seus laudos NGS encontram as mesmas variantes que os laboratórios do mundo inteiro encontram na mesma amostra.",
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
        "correct": "E",
        "explanation": "Gabarito: Letra B. O frio ativa as plaquetas, que grudam nos leucócitos, embolando as camadas do plasma e do buffy coat.",
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
        "correct": "C",
        "explanation": "Gabarito: Letra B. Para ter certeza de que uma variante detectada não é erro da máquina, precisamos ver a mesma letra lida cerca de 30 vezes em diferentes reads empilhados.",
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
        "explanation": "Gabarito: Letra B. Ao sequenciar populações originárias/tradicionais, a pesquisa se submete às leis de repartição de benefícios pelo acesso ao conhecimento e material genético nativo.",
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
        "correct": "E",
        "explanation": "Gabarito: Letra B. A pseudonimização é reversível para a equipe de pesquisa que guarda o 'dicionário' de chaves. O dado anonimizado quebra essa chave para sempre.",
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
        "correct": "D",
        "explanation": "Gabarito: Letra B. É o famoso falso positivo: afirmar que um gene causa a doença quando, na verdade, não há associação real (rejeitou o H0 incorretamente).",
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
        "correct": "A",
        "explanation": "Gabarito: Letra B. A helicase é o 'zíper' que abre a fita dupla para a polimerase entrar e trabalhar.",
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
        "correct": "A",
        "explanation": "Gabarito: Letra B. Como o ribossomo lê o RNA de 3 em 3 bases (códons), deletar 1 ou 2 bases 'desliza' a janela de leitura, arruinando a proteína inteira a partir daquele ponto.",
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
        "correct": "A",
        "explanation": "Gabarito: Letra B. Histonas muito carregadas positivamente abraçam fortemente o DNA. A acetilação neutraliza isso, soltando o DNA para os fatores de transcrição entrarem.",
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
        "correct": "A",
        "explanation": "Gabarito: Letra B. Cerca de 95% dos genes humanos sofrem splicing alternativo, sendo a chave da complexidade biológica humana comparada a outros animais.",
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
        "correct": "E",
        "explanation": "Gabarito: Letra B. Mutações em células do corpo (somáticas, como num tumor de pele) não passam para o filho. Apenas as que afetam óvulo/espermatozoide (germinativas) são herdadas.",
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
        "explanation": "Gabarito: Letra B. Ele atua consertando A pareado erroneamente com C, por exemplo, logo após o avanço da polimerase.",
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
        "correct": "A",
        "explanation": "Gabarito: Letra B. Todo o nosso DNA mitocondrial foi herdado exclusivamente das nossas mães, seguindo uma linhagem matrilinear ininterrupta.",
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
        "correct": "E",
        "explanation": "Gabarito: Letra B. É a enzima da 'imortalidade celular' e atua fortemente em tumores para garantir que o cromossomo não encurte durante sucessivas divisões descontroladas.",
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
        "correct": "A",
        "explanation": "Gabarito: Letra B. Por se intercalar entre as bases do DNA para emitir brilho, ele faz a mesma coisa no DNA humano caso entre em contato com a pele, causando mutações.",
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
        "explanation": "Gabarito: Letra B. É o motor primário da transcrição proteica e de RNAs regulatórios cruciais (como os miRNAs que bloqueiam tradução).",
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
        "explanation": "Gabarito: Letra B. O 'Açúcar-Fosfato' carrega o DNA negativamente. Como opostos se atraem na física, ele viaja na direção da ponta positiva da cuba de eletroforese.",
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
        "explanation": "Gabarito: Letra B. A 'teoria da oscilação' (Wobble) faz com que mutações na 3ª posição de um códon de DNA frequentemente gerem o exato mesmo aminoácido (Mutação Sinônima), atuando como um escudo natural contra erros.",
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
        "explanation": "Gabarito: Letra A. (Opção A é correta neste simulado, repare no gabarito oficial). Proteínas truncadas podem virar 'príons tóxicos' e agregar na célula. O NMD destrói o mRNA defectivo antes que ele seja traduzido a fundo.",
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
        "explanation": "Gabarito: Letra B. Se não há força evolutiva puxando, a proporção de um gene se mantém constante pelas leis estatísticas de HW.",
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
        "explanation": "Gabarito: Letra B. Quebrar ambas as fitas do DNA é letal. Sem BRCA1 (que recruta as ferramentas de conserto), a célula acumula cortes irreparáveis, gerando forte instabilidade e tumorigênese (Câncer de Mama/Ovário).",
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
        "explanation": "Gabarito: Letra B. É um selo que diz: 'Silencie essa cópia porque ela veio do pai'. Doenças como Prader-Willi e Angelman são falhas clássicas do Imprinting.",
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
        "explanation": "Gabarito: Letra B. É o melhor caso mundial de 'Vantagem do Heterozigoto'. Carregar uma cópia ruim te defende do plasmódio na África.",
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
        "explanation": "Gabarito: Letra B. Para evitar dose dupla de carga genética fatal, o RNA XIST abraça e 'desliga' fisicamente todo um cromossomo X nas células femininas (corpúsculo de Barr).",
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
        "explanation": "Gabarito: Letra B. É a temperatura morna exata onde os primers conseguem se encaixar estaticamente às fitas únicas e começar a síntese.",
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
        "explanation": "Gabarito: Letra B. É a base da RT-qPCR para análise de RNA e detecção viral (como na testagem do HIV e do SARS-CoV-2).",
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
        "explanation": "Gabarito: Letra B. O sentido (sense) falhou. É a clássica mutação de troca de bloco (ex: Trocou Ácido Glutâmico por Valina na HbS).",
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
        "explanation": "Gabarito: Letra B. Eles cortam forçosamente o RNA não codificante (íntron) e costuram as bordas.",
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
        "explanation": "Gabarito: Letra B. O Ribossomo queima pesado GTP para atuar fisicamente como uma esteira mecânica que puxa e solta a proteína.",
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
        "explanation": "Gabarito: Letra B. São grandes apagões ou Ctrl+C gigantes no genoma, fortíssimas causadoras de Autismo sindrômico e atrasos intelectuais severos.",
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
        "explanation": "Gabarito: Letra B. Um farol que 'pinta' o DNA em cores diferentes para ser observado em microscópios avançados em citogenética.",
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
        "explanation": "Gabarito: Letra B. Falha no NER causa a grave doença Xeroderma Pigmentoso (alergia letal solar e mutagênese de pele).",
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
        "explanation": "Gabarito: Letra B. Um códon ATG num humano e num besouro produzirão rigorosamente o mesmo aminoácido metionina. A linguagem é literalmente universal.",
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
        "explanation": "Gabarito: C. A heteroplasmia (diferentes genomas mitocondriais na mesma célula) faz com que variantes mitocondriais apareçam em frações baixas (ex: 15% dos reads), exigindo coberturas altíssimas (>1000x) para não serem confundidas com erro da máquina.",
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
        "explanation": "Gabarito: B. A deleção do gene inteiro (ou duplicação, como nos alelos ultrarrápidos) caracteriza uma Copy Number Variation (CNV), alterando a dosagem do gene e, consequentemente, a metabolização de fármacos.",
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
        "explanation": "Gabarito: B. Embora os íntrons não codifiquem proteínas, mutações neles podem 'enganar' o spliceossomo, fazendo-o costurar partes do íntron no RNA maduro (pseudoéxons).",
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
        "explanation": "Gabarito: A. Penetrância incompleta ocorre quando o genótipo da doença está presente, mas por razões genéticas ou ambientais o indivíduo não desenvolve a doença (ex: mutações BRCA1 não causam câncer em 100% das portadoras).",
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
        "explanation": "Gabarito: C. Na haploinsuficiência, perder a cópia do pai ou da mãe (LoF) gera doença, pois a célula precisa de 100% da proteína para funcionar perfeitamente, tornando o traço dominante.",
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
        "explanation": "Gabarito: A. O PCR-Free exige quantidades massivas e precisas de DNA (medidas por fluorimetria - Qubit). Se você usa NanoDrop, ele superestima a quantidade, você coloca menos DNA do que deveria, e sem a PCR para multiplicar a biblioteca, não sobra material para sequenciar.",
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
        "explanation": "Gabarito: B. Até 50% do DNA extraído de saliva pode vir de bactérias da boca. Isso significa que você pagou para sequenciar o genoma bacteriano e perdeu dados valiosos do paciente.",
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
        "explanation": "Gabarito: B. Se a captura falhar (sondas lavadas incorretamente), o sequenciador lerá o genoma inteiro (off-target) em vez de focar apenas nos éxons (on-target), reduzindo drasticamente a cobertura.",
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
        "explanation": "Gabarito: C. Em altas concentrações de álcool, o DNA permanece insolúvel e grudado na bead magnética, permitindo que a água suja (cheia de sais da lise) seja descartada.",
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
        "explanation": "Gabarito: A. Plataformas com patterned flow cells têm problema de 'pulo de índice' entre amostras. O UDI funciona como uma senha e contra-senha: se um índice pular, as senhas não vão bater e o algoritmo joga o read fora.",
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
        "explanation": "Gabarito: B. Se você faz muitos ciclos de PCR, os reagentes acabam e as fitas de DNA começam a se hibridizar entre si, criando um DNA frankenstein (quimera) que o computador vai ler como uma grande variante estrutural falsa.",
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
        "explanation": "Gabarito: B. O Nanopore não usa luz nem câmera. É um sequenciamento elétrico que permite ler moléculas nativas de mais de 100 mil bases de uma só vez.",
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
        "explanation": "Gabarito: C. A etapa de wash com SPRI serve exatamente para lavar as impurezas pequenas (como adaptadores não ligados). Falhar nessa lavagem leva adaptadores direto para a flow cell.",
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
        "explanation": "Gabarito: C. Por seu altíssimo grau de certeza para pequenos fragmentos, o método de Sanger ainda é o árbitro final quando uma variante clínica gera dúvida no NGS.",
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
        "explanation": "Gabarito: B. Quando quebramos o DNA no ultrassom, ele parte de forma torta. O End-Repair atua como uma 'lixa' enzimática, deixando a ponta reta (blunt end) para o adaptador poder colar.",
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
        "explanation": "Gabarito: B. Esses tubos possuem um 'veneno' químico que lisea tudo e destrói as enzimas que degradariam o RNA/DNA, estabilizando a amostra à temperatura ambiente por semanas.",
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
        "explanation": "Gabarito: B. A escala RIN vai de 1 (totalmente destruído) a 10 (intacto). O software do bioanalyzer calcula matematicamente a razão entre as ribossomais 28S e 18S para dar essa nota.",
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
        "explanation": "Gabarito: A. Fitas com muito GC são difíceis de derreter (abrir) na PCR. Isso faz com que essas regiões (geralmente primeiros éxons) percam reads, parecendo que o paciente tem uma deleção que não existe.",
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
        "explanation": "Gabarito: B. Quantificar por Qubit não é suficiente. Fragmentos sem adaptador brilham no Qubit, mas não grudam na máquina. A qPCR (quantificação funcional) mede APENAS o que vai colar no vidro.",
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
        "explanation": "Gabarito: B. Se a amostra é humana normal, os alelos devem ser 100% ou 50%. Se o software mostra muitas variantes com 10%, é porque um paciente 'espirrou' DNA na amostra do outro.",
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
        "explanation": "Gabarito: B. Salas limpas (Mastermix/Pré-PCR) precisam empurrar o ar para fora (pressão positiva) para que partículas sujas não consigam entrar.",
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
        "explanation": "Gabarito: C. Amplicons são minúsculos e resistentes. Álcool 70% apenas fixa o DNA na bancada. É necessário destruição química com água sanitária (hipoclorito) ou removedores próprios de ácidos nucleicos.",
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
        "explanation": "Gabarito: B. Sem Audit Trail (Trilha de Auditoria), qualquer funcionário pode alterar o resultado de um teste sem deixar rastro. A norma FDA CFR 21 Part 11 exige trilhas inalteráveis.",
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
        "explanation": "Gabarito: B. Nunca assuma que o fabricante mandou um kit perfeito. É obrigatório fazer a 'validação cruzada de lote' para garantir que os resultados continuarão consistentes.",
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
        "explanation": "Gabarito: B. Fenol causa queimaduras graves e seus vapores são tóxicos para o sistema nervoso. A Cabine de Fluxo Laminar joga o ar na sua cara, a manipulação exige Capela de Exaustão Química.",
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
        "explanation": "Gabarito: B. Enzimas de NGS operam em janelas térmicas estreitas. Se o termociclador diz que está a 37ºC mas o bloco físico está a 40ºC, você perderá a biblioteca.",
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
        "explanation": "Gabarito: B. A contramostra é a garantia de segurança do laboratório contra processos legais e falsos positivos, garantindo a rastreabilidade original.",
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
        "explanation": "Gabarito: B. Essa é a regra ouro laboratorial. Valores fora de 3 desvios padrão da média são anomalias graves inaceitáveis estatisticamente.",
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
        "explanation": "Gabarito: B. Não basta secar, a superfície deve ficar submersa em desinfetante eficaz (hipoclorito) por 20 a 30 minutos (tempo de contato) para destruir agentes como HBV ou HIV.",
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
        "explanation": "Gabarito: B. Uma variação de 3ºC na sala faz as peças de vidro e metal do laser dilatarem micrômetros, perdendo o foco dos clusters nanométricos.",
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
        "explanation": "Gabarito: B. O patrimônio genético permanece brasileiro. O laboratório externo é apenas prestador de serviço/colaborador, regulado por um MTA (Material Transfer Agreement) estrito.",
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
        "explanation": "Gabarito: B. Essa mutação confere altíssimo risco de câncer. O protocolo prevê que, se o paciente assinou querer saber, o resultado deve ser confirmado isoladamente antes de gerar pânico.",
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
        "explanation": "Gabarito: B. A CONEP exige ritos extras para evitar a exploração biopirata de povos tradicionais sob o verniz da pesquisa genômica (Resolução nº 304).",
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
        "explanation": "Gabarito: B. É o conselho externo que zela pela vida dos pacientes. Se a genômica indicar grave risco nos pacientes em meio à pesquisa, eles abortam o ensaio para proteger as vidas.",
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
        "explanation": "Gabarito: B. O DNA nunca é 100% anônimo. Se a pessoa jogou dados em sites de ancestralidade, a base do governo, mesmo sem CPF, pode ser cruzada com a comercial identificando o paciente.",
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
        "explanation": "Gabarito: B. A autonomia impera. A partir do momento da retirada da assinatura, a instituição cessa imediatamente o uso das alíquotas remanescentes.",
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
        "explanation": "Gabarito: B. Todo POP precisa de controle de versão (ex: Versão 2.1) para que, se um lote dar erro, possamos ver qual instrução exatamente o biomédico seguiu naquele mês.",
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
        "explanation": "Gabarito: B. É o arcabouço de proteção contra pirataria da biodiversidade (Lei 13.123/15). O lucro sobre nosso genoma deve retornar em benefícios de saúde ao nosso país.",
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
        "explanation": "Gabarito: B. Para se transformar de pesquisa para prática rotineira (Clinical Grade), o painel passa por estresse exaustivo confirmando as métricas de segurança.",
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
        "explanation": "Gabarito: B. Genômica populacional não quer substituir o posto de saúde, quer ajudar o médico a saber de antemão qual remédio exato funcionará ou falhará miseravelmente naquele paciente específico.",
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
        "explanation": "Gabarito: B. Portadores da deficiência de DPYD (mutação clássica farmacogenômica) morrem envenenados se receberem as doses padronizadas da droga comum contra Câncer Colorretal. A genômica antevê e reduz a dose.",
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
        "explanation": "Gabarito: B. A triagem de 1ª linha sempre será a gota de sangue/bioquímica por ser barata. Porém, quando detecta algo errado, a 2ª linha moderna passa a ser o WGS instantâneo do bebê.",
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
        "explanation": "Gabarito: B. Sem prontuário único interoperável (RNDS), a genômica não serve de nada, pois o médico no interior não teria como ler que o paciente foi sequenciado na capital do estado.",
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
        "explanation": "Gabarito: B. O sequenciamento é caro, mas estudos de economia da saúde provam que sequenciar a família logo no primeiro mês economiza milhares de reais do SUS que seriam gastos em anos de UTIs às cegas.",
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
        "explanation": "Gabarito: B. Avaliação de Tecnologias em Saúde (ATS - feita pela CONITEC) usa parâmetros econômicos (ex: Dólares por QALY) para provar que a prevenção de um agravo severo paga a máquina milionária da genômica.",
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
        "explanation": "Gabarito: B. Se a ciência baseou seus escores na genética caucasiana, uma mutação encontrada num afrodescendente brasileiro pode ser classificada como VUS, negando o benefício preventivo àquela família (Racismo genômico estrutural).",
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
        "explanation": "Gabarito: B. Saúde Única (One Health) entende que a saúde animal, humana e ambiental está interligada, tudo codificado e monitorado pelo DNA circulante nos patógenos e reservatórios.",
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
        "explanation": "Gabarito: B. Não se pode entregar um PDF cheio de mutações nas mãos do cidadão. O geneticista/conselheiro acolhe, esclarece que 'risco não é diagnóstico absoluto' e guia as tomadas preventivas.",
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
        "explanation": "Gabarito: B. A genômica preventiva no casamento (rastreio de portadores assintomáticos) permite orientação familiar profunda sobre a probabilidade (25%) de ter bebês que exigirão intensos cuidados com dores isquêmicas da doença SS.",
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
        "explanation": "Gabarito: B. O formol causa a desaminação da citosina, que vira uracila. Durante a PCR da biblioteca, a polimerase insere um 'A' onde vê o 'U', gerando falsas mutações C>T. O tratamento prévio com UDG (Uracil-DNA Glicosilase) é usado para corrigir isso.",
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
        "explanation": "Gabarito: B. Quanto menor a quantidade de solução de beads (que contém PEG e Sal), apenas os fragmentos grandes conseguem precipitar e se ligar à sílica. Ratios altos fazem até os fragmentos muito pequenos grudarem.",
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
        "explanation": "Gabarito: D. O pico do TapeStation mostra o fragmento TOTAL (Inserto + Adaptadores). Para saber o tamanho do inserto real (o DNA do paciente), subtrai-se ~130 pb dos adaptadores do tamanho total. 450 - 130 = 320 pb.",
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
        "explanation": "Gabarito: B. A sonicação focada é regulada pela potência do pulso acústico (PIP), pela frequência do pulso (Duty Factor) e pelo número de ondas por pulso (CPB). Ajustar esses 3 parâmetros define se o DNA vai quebrar em 150bp ou 800bp.",
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
        "explanation": "Gabarito: B. A Tn5 transposase não corta o DNA de forma 100% randômica como a força mecânica do Covaris; ela 'gosta' mais de alguns motivos genéticos, gerando um leve viés de quebra que a bioinformática precisa computar.",
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
        "explanation": "Gabarito: C. Se o Qubit leu 40nM e o qPCR leu 10nM, significa que 30nM da sua biblioteca é DNA 'morto' (sem os adaptadores corretos nas pontas). Se você carregar na flow cell baseando-se no Qubit, a máquina ficará subcarregada.",
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
        "explanation": "Gabarito: C. Na biópsia líquida, procurar um DNA de tumor no sangue é achar agulha no palheiro. O UMI é um código de barras colocado em CADA molécula original ANTES da PCR. Assim, a bioinformática sabe o que é cópia e o que é molécula real.",
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
        "explanation": "Gabarito: B. Uma métrica crítica do Exoma. Se o Fold-80 for alto, significa que a captura foi muito desigual (alguns éxons capturaram muito, outros nada), exigindo jogar muito mais dinheiro na corrida para nivelar a cobertura.",
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
        "explanation": "Gabarito: C. A ExAmp chemistry das patterned flow cells sofre desse defeito. A solução obrigatória atual é usar UDI (Unique Dual Indexes), onde nenhuma amostra compartilha o mesmo i5 ou i7 com outra.",
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
        "explanation": "Gabarito: B. O tampão de eluição (água/TE) não consegue reidratar e soltar o DNA de uma matriz de sílica se ela secar a ponto de rachar.",
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
        "explanation": "Gabarito: B. Conforme os ciclos avançam, algumas moléculas no cluster 'atrasam' a incorporação e outras 'adiantam'. A câmera passa a ver um borrão de luz mista in vez de uma cor nítida, baixando a confiança (Q-score) drasticamente no final do read.",
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
        "explanation": "Gabarito: C. A câmera do equipamento se confunde e contabiliza o mesmo amontoado de DNA duas vezes. O software (MarkDuplicates) identifica isso porque os dois reads terão coordenadas x,y (posicionamento físico no vidro) virtualmente idênticas.",
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
        "explanation": "Gabarito: B. Uma razão A260/230 abaixo de 1.8 indica forte contaminação com sais caotrópicos, fenol ou carboidratos. Enzimas ligases e polimerases do NGS serão severamente inibidas.",
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
        "explanation": "Gabarito: C. A heparina é um polissacarídeo ultranegativo, muito semelhante fisicamente à fita do DNA. A polimerase tenta se ligar à heparina em vez do DNA do paciente, paralisando a reação de amplificação/ligação.",
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
        "explanation": "Gabarito: B. Alguns genes essenciais têm 'cópias' quase idênticas no genoma (pseudogenes). Leituras curtas (150pb) da Illumina se perdem e não sabem de qual gene vieram. Leituras longas cruzam a região inteira como uma ponte, dando a coordenada exata.",
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
        "explanation": "Gabarito: C. A contaminação por amplicons é o pesadelo de qualquer biologia molecular. 1 gota de ar de uma sala Pós-PCR carrega trilhões de cópias de DNA alvo, o suficiente para gerar falsos positivos eternos no laboratório inteiro se não for isolada.",
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
        "explanation": "Gabarito: C. O sistema de fluidos da máquina Illumina lida com corantes fluorescentes e sais concentrados. Um entupimento nas agulhas de injeção destrói uma corrida milionária inteira. As lavagens com Tween 20 e NaOCl são críticas.",
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
        "explanation": "Gabarito: C. A sensibilidade analítica (LOD) mede a capacidade 'microscópica' do ensaio. Se uma mutação tumoral está presente em apenas 3 de cada 100 células no tubo, o sequenciamento é sensível o bastante para detectá-la?",
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
        "explanation": "Gabarito: B. A fita zebrada (indicador químico) prova apenas que a máquina esquentou, mas não garante que o vapor penetrou na carga por tempo suficiente para matar a vida. A morte dos esporos bacterianos (indicador biológico) é a prova definitiva exigida pela ANVISA.",
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
        "explanation": "Gabarito: B. Um erro laboratorial sistêmico não se resolve com culpas ou consertos paliativos temporários. A eficácia da correção inserida no processo deve ser monitorada para fechar formalmente o relatório.",
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
        "explanation": "Gabarito: C. A precisão (ou ausência de erro aleatório) significa reprodutibilidade. Se a pipeta marca 10ul e aspira 9,9 / 9,8 / 10,1 sucessivamente, ela é precisa. A exatidão é o erro sistemático (marcar 10ul e aspirar 8ul constantemente).",
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
        "explanation": "Gabarito: C. Brometo de etídio é um potente mutagênico. Autoclavar (calor) resíduo químico apenas faz o laboratório inalar fumaça tóxica, e o descarte no esgoto é crime ambiental severo. Vai para container especializado (Grupo B - Químico).",
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
        "explanation": "Gabarito: B. Durante a ciclagem térmica, as bordas da placa esfriam ou aquecem numa taxa levemente diferente do centro. Para WGS super sensíveis, isso muda o perfil do DNA final das amostras periféricas.",
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
        "explanation": "Gabarito: C. A água sanitária (hipoclorito forte) destrói o aço inoxidável da cabine (Pitting corrosion), gerando ferrugem que vira esconderijo perfeito para colônias de bactérias e fungos indestrutíveis.",
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
        "explanation": "Gabarito: A. Toda medição exige que a balança usada ou a pipeta tenha sido aferida por um equipamento de referência maior (ex: Inmetro), que por sua vez foi aferido por padrões globais inquestionáveis. Isso garante a 'verdade' da medida.",
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
        "explanation": "Gabarito: C. A diretiva de vida é o que importa. Se no TCLE o doador permitiu expressamente o uso de seus dados mesmo após a morte (uso perene/biobanco), a ciência é autorizada a continuar gerando saúde a partir de seu DNA.",
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
        "explanation": "Gabarito: B. Se a máquina da faculdade acha a mutação de uma doença, o pesquisador tem a responsabilidade moral de avisar? Se sim, o pesquisador assume responsabilidade médica baseando-se num teste que talvez não tenha selo clínico (ANVISA/CAP). É um dilema mundial.",
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
        "explanation": "Gabarito: B. A IA é enviesada pela base que a alimenta. Importar um modelo europeu para dizer se um paciente baiano vai ter infarto pela genética é ineficiente e cria injustiça sanitária gravíssima.",
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
        "explanation": "Gabarito: D. Privacidade desde a concepção exige que o LIMS já venha programado de fábrica sem mostrar os nomes dos pacientes nas planilhas e com logs de rastreio blindados, não sendo uma gambiarra instalada no final do projeto.",
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
        "explanation": "Gabarito: B. O envio de DNA humano além fronteiras mexe com soberania de pesquisa (CONEP), segurança de risco biológico e transporte aéreo (ANVISA) e garantia de que o país estrangeiro não roubará ou patenteará sequências nativas (MTA).",
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
        "explanation": "Gabarito: B. Tentar achar milhares de pacientes 10 anos depois de doarem sangue para uma universidade é logisticamente inviável. Se a privacidade for garantida pela anonimização, o CEP emite a 'Dispensa de TCLE' (TCLE Waiver) para que a pesquisa avance.",
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
        "explanation": "Gabarito: C. Foi a prova máxima do porquê o TCLE não pode ser um 'cheque em branco' obscuro. Você só pode pesquisar no genoma aquilo que o cidadão explicitamente autorizou.",
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
        "explanation": "Gabarito: B. Afirmar ao Ministério da Saúde que o gene XYZ causa câncer sem a devida rigidez estatística é um ato de irresponsabilidade ética, pois o estado mobilizará orçamento para criar medicamentos/testes com base numa matemática fraca.",
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
        "explanation": "Gabarito: B. Respeito científico significa descer da torre de marfim e explicar ao povo em linguagem compreensível para onde vai o sangue deles e de que forma o SUS os protegerá.",
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
        "explanation": "Gabarito: B. A ciência ética não deve entregar uma 'sentença' apavorante sem entregar uma 'solução'. Devolvemos resultados incidentais quando, e apenas quando, a medicina atual tiver as ferramentas para salvar aquela vida de forma factível.",
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
        "explanation": "Gabarito: B. É a fase em que a engenharia de precisão testa a parte física (mecânica e sensores) para garantir que a promessa do manual do robô foi cumprida, usando líquidos controle.",
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
        "explanation": "Gabarito: B. Gestão de Risco ISO é pensar em tudo de trágico que pode acontecer (trocar exame de câncer com de paciente são) e botar catracas sistêmicas para que isso nunca se torne realidade.",
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
        "explanation": "Gabarito: B. Uma corrida de produção alta dura de 2 a 3 dias contínuos. Uma falha de energia bruta destrói a coesão da química (desnaturação de proteínas) e trava os computadores internos irreversivelmente daquele ciclo em diante.",
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
        "explanation": "Gabarito: B. O ferro (hemo) reage violentamente nos tampões de extração e age bloqueando a máquina enzimática, zerando o sucesso do yield do banco de DNA.",
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
        "explanation": "Gabarito: B. O Estado gasta um preço moderado na máquina sequenciando logo hoje, mas economiza uma fortuna imensurável num futuro incerto e sombrio de longos anos do paciente nas piores enfermarias de emergência em UTIs neonatais. E de quebra, preserva uma vida normal.",
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
        "explanation": "Gabarito: B. Equipamentos genômicos precisam dos reagentes e placas Illumina/PacBio guardados sob refrigeração de alta exigência constante (-20ºC). Um LACEN na Amazônia, se não planejar a reposição em tempo real na rede da cadeia de frios, vai esgotar tudo em poucos dias num surto e a resposta será travada.",
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
        "explanation": "Gabarito: B. Se a Taxa de Conversão da fábrica NGS despenca de 90% para 60%, a gestão joga fora 40% da verba paga nos kits caríssimos das etapas paralisadas (extração a vazio, biblioteca inutilizada) aumentando brutalmente o custo por exame viável liberado para o SUS.",
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
        "explanation": "Gabarito: B. Uma pesquisa de genômica multicêntrica é blindada e legalista. Os auditores checam ativamente se ninguém mentiu (assinatura do TCLE do participante real no Trial File), e se os pesquisadores que preparam o DNA realmente sabiam o que estavam fazendo formalmente perante os órgãos mundiais (Certificados GCP), e onde eles anotaram sempre que a máquina falhou ou o voluntário quebrou o prazo da consulta da amostra.",
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
        "explanation": "Gabarito: B. A configuração de sequenciamento Illumina 2-Colors (duas cores) revolucionou a velocidade. Ele não tira 4 fotos (A, T, C, G). O C é fotografado em Vermelho, o T em Verde, o A vira Amarelo (porque leva 50% dos reagentes verdes e 50% vermelhos simultâneos, piscando nas duas fotos), e a Guanina (G) não recebe cor (Dark). O PC computa a ausência de flash como Guanina pura. Economiza câmera e reagente num genoma longo.",
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
        "explanation": "Gabarito: B. 'Freeze-thaw cycles' (Congelar e Descongelar o mesmo tubo dez vezes) destroça o DNA pela força expansiva dos cristais de água do gelo esmagando as cadeias contra o tubo plástico ao retornar a estabilidade. Aliquotar a amostra em 5 tubos preserva a origem.",
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
        "explanation": "Gabarito: B. O NanoDrop mede sujeira orgânica geral e proteína misturada ao passar radiação numa gotinha (Mede o que atravessa e o que é sugado pelo bloqueio das peças soltas na água). O Qubit é inteligente e pontual: o corante reativo só pisca seu LED microscópico se estiver confortavelmente escondido no recheio do dsDNA (Dupla Fita), caindo na medição as falhas e os componentes residuais espúrios do tubo de laboratório.",
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
        "explanation": "Gabarito: B. Duplicação de PCR em NGS não significa mutação do paciente. Significa que na bancada nós super-aquecemos o tubo e ele fotocopiou 1 único trecho de DNA dezenas de milhares de vezes. Se ele preenche o vidro, as outras pontas ficam sem espaço. O computador então 'Marca os Duplicados' da PCR e exclui todo mundo que bate no mesmo local exato idêntico (pois a matemática diz que seria quase impossível moléculas únicas aleatórias baterem na fenda exata duas vezes e terem os mesmos códigos indexados de tamanho sem ser uma fotocópia laboratorial).",
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
        "explanation": "Gabarito: B. A ciência tem obrigação de informar (Devolução do resultado / Duty to Return) e tratar ativamente quando a Penetrância (chances reais matemáticas daquela doença acontecer quando você porta a mutação em questão no DNA de nascimento) bate na casa dos 90-100%, como síndromes monogênicas severas e BRCA1 do câncer mamário fulminante. Para isso o sequenciador de grande escala foi validado pelo programa.",
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
        "explanation": "Gabarito: B. É uma regra suprema. A academia processou o DNA da tribo visando achar a cura e os genes do diabetes deles. Sem avisar e quebrando acordos e o respeito, as sobras dos tubos foram parar nas mãos de psiquiatras que fizeram papers humilhantes e publicações sobre 'DNA da esquizofrenia nas tribos americanas' com eles, além de refutarem religiosamente suas origens migratórias históricas com genômica de população ancestral (Destruindo seus dogmas orais publicamente, ofendendo brutalmente a dignidade). Eles foram processados, os vidros devolvidos por agentes do governo em praça pública sob fortes penas e a genômica nunca mais colheu sangue de indígenas ou minorias sem estritas normas de devolução e regras do TCLE amarrado limitador na bancada mundial e conselhos.",
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
        "explanation": "Gabarito: B. Aquecer veneno líquido numa panela de pressão laboratorial a 121º Celsius com vapor expansivo é uma falha inaceitável gravíssima de BPL e Biossegurança em manuseio e rotinas (RDC Resíduos), causando risco a saúde pública operacional. Misturar produto do Grupo B (Químicos Severos) com lixo de Grupo A (Biológico como bactérias ou tecidos sanguíneos de placa) produz reações e punições seríssimas e danos neurológicos por inalação letal com queimaduras severas crônicas para quem abrir a tampa da autoclave sem máscaras antigás exclusivas ou nas salas mal ventiladas em operação do serviço.",
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
        "explanation": "Gabarito: C. O imprinting é governado principalmente pela hipermetilação do DNA nas ilhas CpG (adição de grupos metil), o que silencia fisicamente aquele alelo de forma duradurda (ex: gene herdado da mãe fica 'desligado').",
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
        "explanation": "Gabarito: B. O SWI/SNF é um 'trator' molecular que gasta ATP para afastar as histonas, abrindo o DNA para ser lido. Falhas nele causam fechamento anormal do genoma, característico de tumores severos.",
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
        "explanation": "Gabarito: C. A polimerase 'escorrega' e gagueja ao ler regiões repetitivas (como CAG CAG CAG...), adicionando cópias extras a cada geração (fenômeno da Antecipação).",
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
        "explanation": "Gabarito: C. Enhancers são os 'interruptores de volume' do DNA. Eles podem estar muito longe do gene alvo no genoma linear, mas a arquitetura 3D do DNA se dobra para que eles encostem no promotor.",
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
        "explanation": "Gabarito: B. Uma célula tem milhares de mitocôndrias. Se 20% delas sofrerem mutação (heteroplasmia), a doença só se manifestará se esse percentual for alto o suficiente para falhar o tecido.",
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
        "explanation": "Gabarito: C. Ao separar a dupla hélice, a tensão no DNA torcido à frente da helicase se torna imensa. A topoisomerase corta, desenrola e cola o DNA rapidamente para evitar que ele arrebente.",
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
        "explanation": "Gabarito: B. Pseudogenes (como o do gene SMN1 ou CYP21A2) são clones falsos de genes verdadeiros. Leituras curtas da Illumina grudam neles por engano, gerando falsos positivos na análise.",
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
        "explanation": "Gabarito: B. Na pleiotropia, uma única falha (como no gene FBN1 na S. de Marfan) causa um efeito dominó que afeta vários sistemas orgânicos que parecem distintos na clínica.",
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
        "explanation": "Gabarito: B. Se a mutação stop ocorrer bem no finalzinho do gene, o alarme do NMD não soa. O RNA é lido e gera uma proteína defeituosa que vai atrapalhar a proteína normal que está trabalhando na célula.",
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
        "explanation": "Gabarito: C. Por não sofrerem recombinação (embaralhamento com outros cromossomos), eles passam intactos (exceto pelas mutações de fundo) de pai para filho (Y) e mãe para filhos (mtDNA).",
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
        "explanation": "Gabarito: B. Devido à amplificação química muito rápida das flow cells modernas (ExAmp), índices que não foram lavados direito na biblioteca acabam pulando e colando na amostra vizinha. Solução: UDI (Unique Dual Indexes).",
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
        "explanation": "Gabarito: B. Se você sequenciar o tubo de RNA direto, 90% das leituras (e do seu dinheiro) serão gastos lendo peças do ribossomo em vez dos mRNAs (expressão gênica) que você realmente quer ver.",
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
        "explanation": "Gabarito: C. Quando células morrem e explodem (apoptose), o DNA se parte. Como ele estava enrolado nas histonas (~147bp + linker), as nucleases cortam os fios expostos, e a fita sobrante fica com o tamanho clássico de 166bp flutuando no sangue.",
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
        "explanation": "Gabarito: B. O complexo Biotina (nas sondas) e Estreptavidina (nas beads magnéticas) possui uma das ligações não-covalentes mais fortes da natureza, funcionando como uma 'vara de pescar' os éxons desejados.",
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
        "explanation": "Gabarito: B. Os UMIs colam um 'código de barras randomizado' em cada fita antes da PCR. Se 10 cópias tiverem a mesma mutação MAS vierem do mesmo UMI, o sistema sabe que foi erro da máquina copiando 10 vezes um erro único inicial.",
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
        "explanation": "Gabarito: C. A Flow Cell só agarra o DNA se ele estiver em fita única (para a ligação complementar ocorrer). O NaOH forte 'derrete' e separa a dupla hélice minutos antes de injetar na máquina.",
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
        "explanation": "Gabarito: B. O software ONT lê a molécula passando e, se perceber que é uma região do genoma que você não tem interesse, inverte a corrente do poro, cuspindo o DNA fora em milissegundos.",
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
        "explanation": "Gabarito: B. Causa buracos de cobertura em regiões extremas (ex: genes com muitas pontes triplas G-C não abrem fácil na PCR e são preteridos na amplificação).",
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
        "explanation": "Gabarito: B. O Mate-Pair foi vital na era dos genomas 'De Novo' por conseguir linkar (como uma ponte) duas regiões muito distantes do genoma que estavam separadas por longas repetições.",
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
        "explanation": "Gabarito: B. Quando dezenas de primers estão no mesmo tubo (multíplex), a chance de eles grudarem uns nos outros e formarem bibliotecas 'fantasmas' de 100bp é gigante, dominando a corrida NGS de forma inútil.",
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
        "explanation": "Gabarito: B. As Polimerases da família da Taq têm uma falha natural (sem proofreading 3'-5') que as faz 'cuspir' sempre um 'A' a mais no final das fitas. O NGS usou esse defeito a favor para criar o encaixe TA dos adaptadores.",
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
        "explanation": "Gabarito: B. Sem magnésio as enzimas fragmentadoras (como as do kit FS da NEB) perdem sua 'bateria' e paralisam o corte instantaneamente, mantendo o tamanho de DNA conquistado.",
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
        "explanation": "Gabarito: C. MAPQ baixo indica incerteza. Mapear '0' significa que aquele read encaixa perfeitamente em 10 lugares diferentes do genoma (como famílias de genes ou satélites) e o PC não tem como definir o local correto.",
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
        "explanation": "Gabarito: B. A máquina define onde está cada pontinho (cluster) no vidro tirando uma foto nos 4 primeiros ciclos. Se na primeira letra todo mundo acender vermelho (ex: o amplicon começa com 'A'), a máquina vê um borrão vermelho gigante e não consegue separar os pontos espacialmente.",
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
        "explanation": "Gabarito: B. Graças ao Dual Index, o sistema usa as duas pontas como contraprova de identidade. Se uma bate e a outra é exclusividade de outra amostra, ele consegue salvar o arquivo, embora o alerta e o lixo computacional subam nas métricas finais (Undetermined Reads).",
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
        "explanation": "Gabarito: B. O RNA de Interferência (RNAi) age com um exército microscópico (complexo RISC) que usa um RNA curto como 'radar' para achar mRNAs e cortá-los antes de virarem proteínas. Muito promissor como drogas oncológicas.",
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
        "explanation": "Gabarito: B. Toda mulher 'desliga' aleatoriamente um cromossomo X nas células do corpo. Se a roleta russa fizer com que o X mutante seja desligado na maioria das células do corpo (Skewed), a mulher viverá saudável. Se o X mutante ficar ligado, ela ficará gravemente doente.",
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
        "explanation": "Gabarito: B. Fenol velho e oxidado oxida o DNA e não consegue segurar os lipídios e as proteínas para a parte debaixo do tubo (fase orgânica), misturando tudo e sujando o seu ácido nucleico. A regra é ouro em bancada: fenol vermelho/rosa = lixo de Grupo B.",
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
        "explanation": "Gabarito: B. Quando você pipeta apenas 2 uL de uma enzima altamente viscosa como Master Mixes ligases (contém glicerol e PEG), metade dela fica retida fisicamente na parede da ponteira se a técnica não for impecável e de lavagem no tubo final.",
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
        "explanation": "Gabarito: B. O 'Registro de Trial' (como o ReBEC e o ClinicalTrials.gov) impede que um cientista comece um projeto, perceba que a pesquisa deu errado ou não achou o que queria, e minta no artigo final trocando os objetivos originais metodológicos aprovados.",
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
        "explanation": "Gabarito: B. No mundo molecular o que é curto (menor) é mais rápido e amplifica muito fácil. Moléculas pequenas (dímeros de primers ligados entre si sem o alvo) se replicam furiosamente e dominam os spots fotográficos das flow cells caríssimas.",
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
        "explanation": "Gabarito: B. Ganho de função (Gain-of-Function) é como um acelerador travado num carro. Mesmo que o outro alelo (outro pedal) esteja normal, o carro vai acelerar perigosamente, sendo dominante no fenótipo, como é o clássico do gene BRAF ou KRAS em tumores.",
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
        "explanation": "Gabarito: B. Agilent SureSelect, KAPA HyperExome, Illumina Exome, todos funcionam pelo princípio brilhante de 'Pescagem/Captura em Solução'. Sondas de RNA cheias de iscas grudam no DNA e esferas as puxam para o fundo.",
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
        "explanation": "Gabarito: B. Quebrar o processo de Cold-Chain (Cadeia de frio) e mentir (Falsificação ou Omissão científica) degrada os dados do SUS e cria variantes fantasmas originadas de decomposição química de raios UV e calor excessivo (oxidação) nos bancos do governo.",
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
        "explanation": "Gabarito: B. WGS de tumor circulante quer achar 1 fio de tumor in 10.000 fios normais. Sem Polimerases caríssimas e sem erros acoplados a UMIs matemáticos de correção da bioinformática, é impossível garantir que esse 1 fio é câncer real e não uma simples mutação falha que a enzima cometeu no tubo.",
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
        "explanation": "Gabarito: B. Fotobleaching (Fadiga Química) é a morte dos corantes de DNA. Quando expostos por 30minutos esquecidos e abertos na bancada de luz branca intensa de teto do seu laboratório, o fluoróforo morre. O equipamento medirá metade do valor real que o DNA tem ali dentro.",
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
        "explanation": "Gabarito: B. Se a curva GC do WES estivesse em 41% igual a humana média geral (Global), é a sua captura que falhou (O NGS perdeu as regiões da vida em éxons - super ricas em GC para síntese proteica). Seu exoma 'on-target' sempre terá picos tortos em direção a 50-60% de GC em FASTQC e QCs.",
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
        "explanation": "Gabarito: B. O 'Wash buffer' e os 'Waste Tubes' que os robôs da Qiagen/Roche descartam são puro lixo de solvente orgânico e fenol/etanol. Não vai pro meio ambiente nem pode entrar em calor de panelões de autoclave biológica pois o vapor explode o teto. Têm que ser separados num bombell inerte ventilado (Grupo B - Químico).",
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
        "explanation": "Gabarito: B. O método Copy+Paste dos elementos LINE-1 e Alu. Ele vira RNA, uma enzima copia ele de volta pra DNA num buraco novo de outro cromossomo, arruinando qualquer gene coitado que estivesse ocupando aquela moradia antes e gerando hemofilias ou Duchenne. São ~45% do nosso genoma 'lixo' invasivo histórico do processo evolutivo primitivo de retrovírus incorporados na pré história de hominídeos primitivos.",
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
        "explanation": "Gabarito: B. Um arquivo FASTQ perfeito carrega: Linha 1 = Cabeçalho com o Endereço/Máquina da base (ID), Linha 2 = As letrinhas do DNA puras cruas soltas A-T-C-G. Linha 3 = O Símbolo Demarcador +, e a fundamental sagrada Linha 4 = Código ASCII Criptografado da nota matemática PHRED de erro daquela base (Se é um erro provável Q10 ou base espetacular e limpa brilhante Q30 na câmera), é essencial para a limpeza Fastp de Qualidade.",
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
        "explanation": "Gabarito: B. Erros de phasing mostram no gráfico que as enzimas perderam totalmente a força de acompanhar o cronômetro do robô e ficaram 'mancas' e espalhadas na corrida. Os lasers começam a ver borrões. É a assinatura mecânica das catástfotes químicas: fluido travando as mangueiras dos kits, sala muito fria ou quente arruinando termociclagem de vidro na câmara e insumos vencidos de péssima eficácia.",
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
        "explanation": "Gabarito: B. Se a amostra é rastreável, o achado foi severo acionável preventivo (Câncer Difuso Gástrico Familiar) e o comitê permite a janela incidental: a quebra cega é autorizada de forma hiper criteriosa controlada para devolver o alerta salvando a família, com geneticistas qualificados, baseada puramente na Beneficência da ética humana global do participante que consentiu no termo do TCLE de vida.",
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
        "explanation": "Gabarito: B. Regiões com linhagens fechadas e de consanguinidades endêmicas e rurais forçadas têm cruzamentos onde a mãe carrega o exato mesmo defeito letal recessivo do pai (Run Of Homozygosity severa no alinhamento WGS). As crianças nascem com falhas severas recessivas dobradas que numa metrópole de milhões de habitantes nunca achariam o par complementar 'perfeito' para adoecer por sorte genética do pool genômico aberto de diversidade da reprodução miscigenada. Focam nas doenças raras em alta frequência em pequenas cidades.",
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
        "explanation": "Gabarito: B. A captura (A 'pesca' magnética das sondas por pedaços seletivos de exons na sopa da biblioteca suja) sofre viés massivo. O imã não pega as expansões CGG do Huntington ou os genes tortos pesados por GC, ou as translocações de fusão de câncer longe do éxon. O Exoma fica cego no buraco desses alvos, O WGS varre o genoma de forma igualitária (mesmo com os lixos intrônicos em maioria) cobrindo e entregando a integridade do cariótipo inteiro sem deixar cair o peixe do anzol na purificação da pipeta da máquina e dos reagentes pesados.",
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
        "explanation": "Gabarito: B. É o clássico 'End Replication Problem' de genética basal celular. A polimerase só corre numa pista indo pra uma ponta, o outro lado dela trava porque acabou o caminho da base e o RNA primer que colava o chão sumiu (foi digerido pelas exonucleases) da Lagging Strand. O carro de asfaltamento (polimerase de reparo) cai no precipício e o fim da fita fica mais curto e burro toda santa vez que a célula duplica. Até os genes normais de sobrevida da borda morrerem na velhice.",
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
        "explanation": "Gabarito: B. A maldição/bênção do painel de Amplicon de Câncer. Eles são fotocópias perfeitas por desenho. O computador (MarkDuplicates) tem a regra: Se começou e acabou no mesmo exato pedaço do DNA, é clone de PCR inútil da máquina. Mas no Amplicon nós VIVEMOS DE CLONES de 100bp exatos nos hotspots de câncer (Ex: BRAF V600E focal). Assim, você é OBRIGADO a desligar o removedor de clones do seu software (Desativar a ferramenta Picard), ou ele deleta sua corrida inteira e te deixa sem read nenhum, e sem tumor detectado. Sem MarkDuplicates.",
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
        "explanation": "Gabarito: B. As populações isoladas endêmicas têm DNA 'fechado'. Se você publicar o arquivo na nuvem com a etiqueta 'Moradores da tribo X com 50 pessoas nas margens do Amazonas com a mutação Y para infarto', você feriu o sigilo (Risco de Reidentificação da LGPD do paciente nas vilas locais). Eles poderão sofrer estigmas genéticos laborais com cruzes em bases do IBGE. Isso é violação das RDC do CGEN nas boas práticas clínicas éticas da CONEP em genômica, sem uso dos Comitês DAC (Controle Fechado por aprovação da proposta de terceiros, sem link aberto na internet).",
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
        "explanation": "Gabarito: B. Trizol e Fenos são agentes assassinos por penetração celular da pele em gotículas ou pelos vapores de evaporação rápida na temperatura natural. Queimam e destróem o sistema nervoso respiratório de um técnico inadvertido. Eles só são abertos dentro de capelas de coifas industriais de Química Exaustora (Lembrete: CSB Classe 2 A2 Biológicas com filtros biológicos de HEPA ou papéis de fluxo espalham e matam o funcionário retornando o gás nocivo para a frente e recirculando os venenos não-sólidos para o nariz de quem extrai DNA ali dentro num erro de EPI e EPC, a menos que as capelas sejam modelo 2 B2 totais e conectadas ao teto e as hélices da coifa externa blindada).",
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
        "explanation": "Gabarito: B. Mutação Missense ('Troca de Sentido'). O DNA errou o código na foto, trocou um aminoácido Valina (exemplo) por Glutamato. O pino de ligar do motor da proteína quebra e fica sempre cravado em 'LIGADO'. A célula se multiplica até invadir os tecidos (Metástase Tumoral Ativa Oncogenética em mutações hot-spot somáticas dominantes missense como as kinasés do KRAS, BRAF, AKT).",
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
        "explanation": "Gabarito: B. A base da acreditação mundial. Você só pode liberar exame de vida ou morte no NGS se o seu cano de extração com os mesmos kits foi testado no cego por um DNA referência do NIST e você acertou o mapa de letras com acurácia de relógio cirúrgico idêntica aos padrões de qualidade atestados das plataformas dos laboratórios mestres globais da técnica WGS e Exoma avaliados em concordância estatística e com os dados sem viés reprodutíveis na rotina analítica diária. (Garante segurança BPL total).",
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
        "explanation": "Gabarito: C. A BWT reorganiza o genoma humano em blocos de caracteres que se repetem, permitindo comprimi-lo e buscar sequências (reads) em tempo O(n) sem precisar varrer o genoma inteiro linearmente.",
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
        "explanation": "Gabarito: B. AC = Allele Count (Contagem do alelo mutado), AN = Allele Number (Total de alelos/cromossomos sequenciados). AF = AC/AN (Frequência Alélica). Em diploides, AN=100 significa 50 pessoas genotipadas.",
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
        "explanation": "Gabarito: B. Um tecido tumoral é uma mistura de células normais e de vários clones de células cancerígenas. Uma mutação driver pode estar presente em apenas uma fração pequena das células, gerando um VAF (Variant Allele Frequency) de 5%, 10% ou 15%.",
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
        "explanation": "Gabarito: B. Essa é uma das pegadinhas clássicas da bioinformática. O VCF é 1-based (a primeira base é 1). O BED é 0-based (a primeira base é 0 e o fim é não-inclusivo). Errar isso na conversão de arquivos gera um desvio de 1 base que arruína a anotação clínica.",
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
        "explanation": "Gabarito: B. Se a cobertura cai bruscamente (Read Depth), ou se metade do read mapeia no chr1 e a outra metade no chr5 (Split Read), ou se o par Forward-Reverse está longe demais (Discordant), o software crava a existência de uma Variante Estrutural.",
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
        "explanation": "Gabarito: B. O arquivo gVCF guarda informações de TODAS as bases (mesmo as normais/referência). Ao juntar 10.000 gVCFs, o GATK pode olhar para uma variante que falhou num paciente e usar a estatística dos outros 9.999 para afirmar com certeza seu status alélico.",
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
        "explanation": "Gabarito: D. O N50 é a métrica padrão de qualidade de montagem (assembly). Ele pega todos os pedaços montados do maior pro menor; quando a soma dos pedaços atinge 50% do genoma, o tamanho daquele último pedaço é o N50.",
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
        "explanation": "Gabarito: C. O pseudo-alinhamento foi uma revolução. Ao invés de gastar horas achando o local exato do genoma no arquivo BAM, o software diz 'esse k-mer pertence ao Transcrito X' em minutos, pulando o alinhamento basal exato.",
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
        "explanation": "Gabarito: C. Nunca forneça dados já normalizados (TPM/FPKM) para o DESeq2 ou edgeR. A mágica da estatística Bayesiana do software depende de ver os números inteiros brutos para calcular o 'size factor' e a dispersão.",
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
        "explanation": "Gabarito: C. DAGs são o cérebro de orquestradores de pipelines (como Snakemake e Nextflow). O software mapeia sozinho o que precisa ser feito primeiro (ex: mapear) para depois fazer a chamada de variantes (ex: genotipar), garantindo que nada rode fora de ordem e em paralelo sempre que possível.",
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
        "explanation": "Gabarito: B. Com o pysam, você não precisa fazer parsers manuais que demoram horas. Você abre um arquivo gigante BAM em 1 segundo e solicita algo como `bam.fetch('chr1', 1000, 2000)`.",
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
        "explanation": "Gabarito: B. `sbatch script.sh` envia seu trabalho para o cluster SLURM. O gerenciador analisa os recursos (CPUs, RAM) que você pediu no cabeçalho do script e o coloca na fila de espera dos supercomputadores.",
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
        "explanation": "Gabarito: B. Adiciona os arquivos para a 'staging area' (git add), sela o pacote de código com uma nota explicativa (git commit) e empurra o pacote para a nuvem do repositório (git push).",
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
        "explanation": "Gabarito: C. O JSON é a língua franca da comunicação entre sistemas web hoje. Todas as APIs genômicas (ClinVar, Ensembl, gnomAD) devolvem as requções em blocos chave-valor no formato JSON.",
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
        "explanation": "Gabarito: B. Se você dá acesso ao Docker para um bioinformata em um supercomputador de 20 milhões, ele ganha acesso de 'Deus' (root) no servidor e pode formatar a máquina. O Singularity bloqueia isso, mantendo a permissão limitada do usuário.",
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
        "explanation": "Gabarito: B. Se o seu PCA plotar todas as amostras colhidas na terça-feira do lado esquerdo e as da quinta-feira do lado direito (ao invés de separar Saudáveis de Doentes), você tem um grave 'batch effect' laboratorial que a estatística acaba de desmascarar.",
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
        "explanation": "Gabarito: B. Chama-se Manhattan porque os picos dos SNPs ultra-significativos se destacam da base linear como se fossem os arranha-céus da cidade de Nova Iorque acima do horizonte.",
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
        "explanation": "Gabarito: B. Se você faz RNA-Seq com 20.000 genes humanos, o p-valor limiar de Bonferroni seria 0.05 / 20.000 = 0.0000025. Isso é tão estrito que você quase nunca acharia nenhum gene significativo, afundando a pesquisa por excesso de conservadorismo estatístico.",
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
        "correct": "E",
        "explanation": "Gabarito: B. O HW diz como os alelos deveriam se distribuir na natureza. Se o sequenciador mostra resultados incrivelmente fora do HW em pessoas normais, não é um milagre evolutivo, é a máquina ou o alinhador que errou a contagem.",
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
        "correct": "D",
        "explanation": "Gabarito: B. Na estatística bayesiana, você já entra no problema sabendo de algo. Como sabemos que humanos sofrem 1 mutação a cada 1.000 bases, o algoritmo já começa o cálculo desconfiando que o normal é não ter mutação (Prior muito baixo).",
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
        "explanation": "Gabarito: B. O F1-Score é a nota final da 'perfeição' de um algoritmo preditivo de AI ou Pipeline. Ele pune tanto o pipeline que é sensível demais (gera muito lixo) quanto o que é específico demais (perde mutações reais do paciente).",
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
        "correct": "C",
        "explanation": "Gabarito: B. No HMM, o 'estado' do DNA do paciente (Deletado ou Duplicado) está oculto. A única pista que o computador tem são as emissões observáveis, que é a quantidade de reads caindo lá. A matemática do HMM traça o caminho mais lógico para esses buracos.",
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
        "correct": "A",
        "explanation": "Gabarito: B. A imputação genômica adivinha bases que você não sequenciou (baseado no bloco de correlação de Linkage Disequilibrium). R² próximo de 1.0 atesta que a 'adivinhação' da bioinformática foi matematicamente perfeita com base nos dados ao redor.",
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
        "correct": "C",
        "explanation": "Gabarito: B. O PRS pega milhares de SNPs que causam um dano minúsculo cada um, soma todos eles, e te mostra se sua genética como um todo joga contra ou a favor do infarto/câncer.",
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
        "explanation": "Gabarito: B. Pessoas doentes bebem café ou beber café deixa doente? A Randomização Mendeliana usa genes que afetam naturalmente o metabolismo da cafeína na população para provar estatisticamente quem causa o quê, pois seus genes vieram antes da sua dieta diária.",
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
        "correct": "C",
        "explanation": "Gabarito: B. Economia em Saúde é matemática pura. Evitar um paciente envenenado na UTI do SUS durante semanas paga 1.000 sequenciamentos genéticos preventivos. Custo e Efetividade de ponta.",
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
        "explanation": "Gabarito: B. Como o vírus muta em taxa constante ('Relógio molecular'), rastreando as mutações dos pacientes do Mundo todo o computador descobre que o Vírus X do estado do Pará veio da Inglaterra em avião na Terça-Feira passada. Vigilância Epidemiológica de elite.",
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
        "correct": "E",
        "explanation": "Gabarito: B. É o clássico 'Efeito Fundador' das vilas (Ex: O maior caso de Xeroderma Pigmentoso do Brasil numa vila isolada do Goiás). As poucas famílias fundadoras tinham mutação; no cruzamento fechado ao longo de séculos, a doença rara virou 'comum' na vila.",
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
        "correct": "E",
        "explanation": "Gabarito: B. Pseudonimizar é trocar o nome João por ID_85923, mas guardar o papel que diz 'João=ID_85923' a sete chaves num cofre separado. Se a chave estiver solta na mesa, o dado não está pseudonimizado.",
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
        "explanation": "Gabarito: B. O Beacon Protocol é fantástico. A API só responde 'Verdadeiro' ou 'Falso' e quantidade. Você não envia o genoma do paciente para outro país, você apenas atesta que já viu aquela variante antes. Mantém 100% do sigilo médico intacto.",
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
        "explanation": "Gabarito: B. A nuvem garante que ninguém vai invadir o prédio para roubar seu disco. Mas se você deixar a porta do servidor destrancada na configuração (S3 bucket Public), a culpa e o processo de dados vazados cai direto no CPF/CNPJ do biomédico/pesquisador do seu projeto e do hospital.",
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
        "correct": "A",
        "explanation": "Gabarito: B. Muitas vezes os pesquisadores nomeiam o arquivo como 'Maria_Silva_15021980_Tumor.vcf'. O VCF salva esse nome dentro do próprio código interno no cabeçalho (Header). Publicar o VCF puro sem anonimizar a parte superior expõe toda a família na internet e resulta na cassação do consórcio científico e multas LGPD severas.",
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
        "explanation": "Gabarito: B. Aprendizado Federado: 'Leve a pergunta até os dados, não tire os dados de casa'. Garante segurança suprema, pois o genoma do brasileiro fica no Brasil, mas os estrangeiros conseguem treinar as IAs oncológicas rodando a inteligência dentro da nossa 'caixa forte' com nossa supervisão.",
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
        "correct": "A",
        "explanation": "Gabarito: B. ROH longo = Os pais eram primos. Se os pais são da mesma família, o filho vai herdar fitas de DNA 'clonadas' na árvore genealógica, zerando a diversidade daquele trecho. Altamente propício a revelar doenças raras recessivas.",
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
        "explanation": "Gabarito: B. O algoritmo ADMIXTURE avalia milhares de SNPs de você e diz (usando a constante K) qual o nível percentual de ancestralidade que formou seu genoma ao longo das eras dos navegantes e colonizações. É o gráfico base de papers do Genomas Brasil.",
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
        "correct": "D",
        "explanation": "Gabarito: B. Fst = 0 significa que as populações estão tão misturadas que não dá para diferenciar quem é de onde (Eles acasalam entre si sem restrição). Fst = 1 significa que elas estão ilhadas e separadas em isolamento absoluto a tempo suficiente para fixarem genomas diferentes.",
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
        "explanation": "Gabarito: B. O LD mede quão grudadas duas variantes estão e caminham juntas. O Crossing-over baralha as cartas. Com os séculos, esse baralhamento separa as combinações genéticas, e o LD cai em blocos.",
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
        "correct": "A",
        "explanation": "Gabarito: B. Encontrar pedaços do DNA de outra espécie dentro do nosso mapeamento foi um dos marcos da bioinformática. A IA prova que houve cruzamento entre a nossa espécie migratória e os Neandertais já residentes no frio da Europa.",
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
        "explanation": "Gabarito: B. A humanidade sofreu um 'boom' nos últimos 10 mil anos (expandiu violentamente de milhões para 8 bilhões). Isso gerou uma avalanche de mutações novas, raras e privadas que ainda não tiveram tempo de se fixar. O gráfico SFS reflete isso focando em um peso extremo na casa das mutações < 1% de frequência.",
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
        "correct": "A",
        "explanation": "Gabarito: B. A biologia humana prefere mutar 'Púrina por Purina' (Transição) do que 'Purina por Pirimidina' (Transversão). Por isso o Ti/Tv humano é na casa dos 2.0. Se o QC der 1.0, o computador ou a química do laboratório errou tudo e gerou um FASTQ irreal aleatório.",
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
        "explanation": "Gabarito: B. A anotação bioinformática 'HIGH' pisca em vermelho para o geneticista. O computador leu o código e disse: 'Isso aqui quebrou o motor (frameshift/stop codon) e a proteína do tumor vai desligar o gene inteiro. Avalie isso agora mesmo!'.",
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
        "correct": "A",
        "explanation": "Gabarito: B. Bedtools é o canivete suíço. Ele pega o bloco gigantesco de DNA bruto do paciente e um bloquinho BED e pergunta: 'Quantos reads do tumor caíram exatamente em cima do Gene BRCA1?'. E recorta pra você na hora.",
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
        "correct": "D",
        "explanation": "Gabarito: A. Tabix gera um arquivo .tbi minúsculo ao lado do VCF gigantão. Ele é como o sumário de um livro. O programa lê o índice, descobre em qual megabyte exato o Cromossomo 7 está escondido, pula pra lá e extrai o dado em 1 segundo. Sem isso, demoraria horas rodando arquivos sequencialmente em loop no bash cego da máquina host da faculdade.",
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
        "correct": "D",
        "explanation": "Gabarito: B. FDR de 5% quer dizer: 'Eu sei que tem erro nisso aqui, mas garanto que o ruído não passa de 5% de mentira na minha lista de descobertas publicadas'. É o número mágico dos p-values ajustados na ciência séria (Padj do limiar).",
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
        "correct": "A",
        "explanation": "Gabarito: B. Os modelos biológicos de câncer não são linhas retas na matemática. Uma mutação só causa câncer se a outra estiver ligada. O Random Forest e as Redes Neurais detectam essas complexidades (interações) genômicas escondidas e geram os assinaturas (Signatures) que salvam pacientes na clínica moderna da IA.",
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
        "explanation": "Gabarito: B. A criptografia forte do HTTPS e do SSH assegura o túnel. Se um espião interceptar o VCF viajando na internet entre o Hospital de Belém e o servidor de Brasília, ele só verá códigos ilegíveis de lixo e não o DNA do paciente interceptado.",
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
        "correct": "D",
        "explanation": "Gabarito: B. 'Ransomware' é o vírus que sequestra o hospital exigindo resgate milionário e bloqueia os prontuários e genomas de 20 mil pessoas. O Air-Gap/Object Lock garante que o seu backup está offline (desconectado da internet/rede), ou seja, o vírus não pode alcançar e criptografar seu backup salvador da pátria.",
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
        "correct": "D",
        "explanation": "Gabarito: B. Mutações nos genes DPYD ou TPMT causam acúmulo envenenador fatal de quimioterápicos oncológicos pesados na corrente sanguínea. Sem o exame NGS, o médico dá a dose normal de combate à leucemia infantil, mas as medicações se estocam no fígado/medula sem metabolização e o efeito rebote iatrogênico mata a criança que seria salva. Farmacogenômica pura de ouro do sistema público em prol de vidas.",
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
        "explanation": "Gabarito: B. Transformar o dado (o T do ETL) é 'Lavar e Organizar' a casa para a Big Data corporativa. VCFs são difíceis de consultar nativamente, então o Python entra lavando, descompactando, normalizando a bagunça dos VCFs soltos e fundindo o diagnóstico do médico com os termos internacionais do CID-10 e HPO estruturados em bases potentes do SQL/Parquet para cruzar no Machine Learning das predições estatísticas com painéis analíticos BI e Dashboards governamentais robustos.",
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
        "explanation": "Gabarito: C. A regra de pareamento universal do DNA é A-T (formando duas pontes de hidrogênio) e C-G (formando três pontes de hidrogênio).",
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
        "explanation": "Gabarito: D. A informação genética está estocada no DNA, é transcrita para um 'mensageiro' (RNA) e, em seguida, é traduzida em uma molécula funcional (Proteína).",
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
        "explanation": "Gabarito: B. Essa é a diferença química fundamental. O DNA (Ácido Desoxirribonucleico) perdeu um oxigênio no seu açúcar em relação ao RNA (Ácido Ribonucleico), o que o torna muito mais estável.",
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
        "explanation": "Gabarito: D. O Genótipo é o 'código fonte' escondido. O Fenótipo é como esse código se manifesta fisicamente na realidade (ex: cor dos olhos, altura, presença de uma doença).",
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
        "explanation": "Gabarito: C. Alelos são as variantes de um gene. Como somos diploides, temos um alelo herdado da mãe e outro do pai para cada característica.",
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
        "explanation": "Gabarito: D. 'Homo' significa igual. Indivíduos homozigotos possuem duas cópias idênticas do gene.",
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
        "explanation": "Gabarito: B. Transcrição é o ato de 'transcrever' (copiar) a receita do livro principal (DNA) para um rascunho móvel (RNA) que pode sair do núcleo.",
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
        "explanation": "Gabarito: D. O Ribossomo é a fábrica de proteínas da célula. Ele 'lê' a fita de mRNA e costura os aminoácidos na ordem certa.",
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
        "explanation": "Gabarito: D. O tRNA é como o 'caminhão de entrega'. Ele lê o pedido no mRNA e busca o aminoácido correto para construir a proteína.",
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
        "explanation": "Gabarito: B. Essa é a anatomia de todos os blocos de construção dos ácidos nucleicos. O fosfato e o açúcar formam o 'corrimão' e a base nitrogenada forma os 'degraus' da escada do DNA.",
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
        "explanation": "Gabarito: B. A mitose é a divisão de crescimento e reparo do corpo. Ela faz cópias exatas da célula original (clones naturais).",
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
        "explanation": "Gabarito: C. A meiose reduz o número de cromossomos pela metade (23). Assim, quando o espermatozoide (23) encontra o óvulo (23), o bebê volta a ter o número normal (46).",
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
        "explanation": "Gabarito: B. O pré-mRNA contém o gene inteiro. Durante o 'splicing', os íntrons (intrusos) são cortados fora, e os éxons são colados para formar a mensagem final (o Exoma).",
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
        "explanation": "Gabarito: C. Mutações de ponto (SNVs/SNPs) são os erros mais sutis possíveis, onde a polimerase apenas erra uma única letra ao copiar o genoma.",
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
        "explanation": "Gabarito: C. A Helicase é o 'motor' que desenrola e abre as fitas de DNA formando a forquilha de replicação.",
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
        "explanation": "Gabarito: C. Quase todas as proteínas do corpo humano começam com o aminoácido Metionina, porque o códon AUG é o sinal verde para o ribossomo começar a trabalhar.",
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
        "explanation": "Gabarito: C. Os eucariotos (animais, plantas, fungos) guardam seu material genético primário envelopado pela membrana nuclear.",
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
        "explanation": "Gabarito: D. Genes recessivos são 'fracos' na expressão. Se houver um gene dominante junto, o recessivo se esconde. Ele só aparece se herdar cópias recessivas tanto do pai quanto da mãe.",
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
        "explanation": "Gabarito: B. O NGS permitiu ler milhões de fragmentos de DNA ao mesmo tempo (paralelismo em massa), diferente do método Sanger antigo que lia um pedaço por vez.",
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
        "explanation": "Gabarito: B. A lise celular (usando detergentes e sais caotrópicos) é o ato de 'estourar' as células para que o DNA que está trancado lá dentro vaze para o líquido.",
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
        "explanation": "Gabarito: C. O DNA dissolve na água, mas odeia álcool. Quando você joga etanol, ele se condensa e forma flocos ou gruda na coluna, separando-se da água suja.",
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
        "explanation": "Gabarito: C. A centrífuga gira em altíssima velocidade, jogando as células vermelhas (pesadas) para o fundo do tubo e deixando o plasma (leve) por cima.",
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
        "explanation": "Gabarito: C. As hemácias humanas não têm núcleo (logo, não têm DNA). O DNA do paciente está escondido na fina camada branca de glóbulos brancos do tubo, o famoso Buffy Coat.",
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
        "explanation": "Gabarito: C. O NanoDrop é um aparelho rápido e básico que joga uma luz no líquido. A quantidade de luz bloqueada diz se tem muito ou pouco DNA, e se ele está puro.",
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
        "explanation": "Gabarito: C. O valor clássico nos livros de bancada molecular: ~1.8 para DNA puro, e ~2.0 para RNA puro.",
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
        "explanation": "Gabarito: B. O gel atua como uma 'peneira'. Como o DNA é negativo, ele corre para o polo positivo. Os pedaços curtos correm rápido e chegam primeiro, os pedaços grandes ficam enroscados e lentos.",
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
        "explanation": "Gabarito: C. Inventada por Kary Mullis, a PCR é uma 'máquina de xerox molecular'. Você coloca 1 fita de DNA e ela tira bilhões de cópias daquela exata região para você poder estudá-la.",
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
        "explanation": "Gabarito: C. Aquece a ~95ºC pra soltar o DNA duplo. Esfria a ~60ºC para a isca (primer) colar. Aquece a ~72ºC para a enzima trabalhar velozmente copiando.",
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
        "explanation": "Gabarito: C. Sem primers (iscas), a polimerase fica cega e não sabe de onde até onde ela deve 'xerocar' o genoma.",
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
        "explanation": "Gabarito: B. Uma máquina NGS não lê um fio de DNA humano jogado do nada. O preparo de biblioteca adequa fisicamente esse fio, colando nele alças e ganchos (adaptadores) que são compatíveis com o vidro da máquina.",
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
        "correct": "C",
        "explanation": "Gabarito: B. Essa é a base do barateamento do exame. Você bota o código de barras 'ATC' no João e o 'GGA' na Maria. Mistura os sangues no mesmo tubo da máquina e, no computador, você separa a leitura dos dois olhando os códigos.",
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
        "explanation": "Gabarito: B. A máquina não aguenta fitas com milhões de bases. Ela prefere processar bilhões de fitas de 150 bases (fragments curtos) e o computador remonta o quebra-cabeça depois.",
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
        "explanation": "Gabarito: B. Exoma foca na 'massa fina' e na parte funcional (onde ficam 85% das doenças conhecidas). O WGS varre tudo, de ponta a ponta, sendo o teste mais completo do mundo.",
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
        "explanation": "Gabarito: C. A Flow Cell é a alma do NGS. Custa milhares de dólares, é um vidro nanotecnológico cheio de rodovias onde os fios de DNA grudam em pé como grama, prontos para brilhar na luz do laser.",
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
        "explanation": "Gabarito: B. A multiplexação permitiu democratizar o NGS. Você divide o preço milionário da flow cell rodando 100 pacientes na mesma lâmina de vidro.",
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
        "explanation": "Gabarito: C. Fazer o Branco é igual a tarar uma balança. Você bota o prato (água de eluição) e a máquina zera o peso do prato, pesando só a comida (DNA) depois.",
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
        "explanation": "Gabarito: C. Enzimas (Nucleases) como as RNases são quase imortais e estão na nossa pele, saliva e poeira do ar. Água nuclease-free é tratada agressivamente (DEPC) para garantir que nenhuma enzima viva cortadora de DNA atinja seus tubos vitais.",
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
        "explanation": "Gabarito: B. O TCLE é o documento máximo do respeito à bioética. É ele quem garante que o sujeito não é um rato de laboratório, mas um cidadão ativo e consciente na pesquisa.",
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
        "explanation": "Gabarito: C. Ler a mesma base 100 vezes (Depth de 100x) dá poder estatístico ao sistema. Se 50 lêem 'A' e 50 lêem 'T', o programa sabe que é uma mutação heterozigota real, e não uma sujeira pontual da foto.",
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
        "explanation": "Gabarito: C. A receita de bolo do laboratório. Garante que se o analista 1 fizer de manhã e o analista 2 fizer na madrugada de sábado, o DNA purificado de ambos tenha o mesmíssimo rendimento clínico sem falhas criativas.",
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
        "explanation": "Gabarito: C. Regra mandatória NR-32 e BPL. Todo material afiado/cortante vai para o coletor amarelo resistente a furos para proteção contra perfuração dos encarregados de coleta do lixo hospitalar.",
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
        "explanation": "Gabarito: C. Ter olho azul (Característica A) não te obriga a ter cabelo loiro (Característica B). Na formação do espermatozoide/óvulo, os cromossomos fazem um sorteio na loteria e separam-se de forma independente.",
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
        "explanation": "Gabarito: B. Ligase (como a T4 Ligase) é a 'cola Super Bonder' do nosso laboratório. Ela sela a união química sólida para o adaptador artificial não desgrudar do DNA humano natural do paciente no estresse térmico.",
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
        "explanation": "Gabarito: C. A ética impõe que a doença do João não pode ser falada aos irmãos pelo laboratório, por mais mortal que ela seja. O João dono do dado precisa assinar permitindo a quebra, ou ser encorajado e orientado nas sessões psiquiátricas/genéticas para que a própria família traga os membros para testagem do genoma no painel hereditário de risco no hospital da base ou sistema público SUS.",
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
        "explanation": "Gabarito: B. Se a ponta não for lisa (blunt) e tiver um fosfato, o adaptador não cola de jeito nenhum. A mistura End-Repair atua como o esmeril e uma 'massa corrida', preenchendo as valetas da dupla fita torcida com a polimerase, além de lixar restos usando a atividade de exo digestão química controlada e estrita do protocolo da pipeta.",
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
        "explanation": "Gabarito: C. Não tem como copiar um livro se ele está colado fechado com supercola. O aquecimento 95 graus em blocos desnatura as duas fitas (Afastamento), dando acesso livre e puro aos primers (marcadores de texto) acharem sua região-alvo da sequência.",
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
        "correct": "D",
        "explanation": "Gabarito: B. A hemácia humana não tem DNA, logo você nem quer o conteúdo dela na sua extração. O problema é que, se ela estourar no tubo inteiro por má qualidade e calor da viagem rural, ela derrama hemoglobina misturada nos seus glóbulos brancos. A hemoglobina inibe severamente quase toda PCR da Terra, acabando com sua biblioteca, inutilizando a amostra coletada.",
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
        "correct": "C",
        "explanation": "Gabarito: D. Conservação infinita (décadas) ou matriz biobanco em biologia molecular de ácidos exige ultra freezers de -80 Graus pra baixo (Glacial). Na bancada ou geladeirinha comum, ou mesmo -20, flutuações e enzimas dormentes picotam seu DNA ao passar do tempo arruinando DIN da amostra original preciosa para análises retroativas na investigação forense ou médica do Estado ou SUS global federal ou estadual.",
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
        "explanation": "Gabarito: D. A Cabine de Segurança Biológica é um Equipamento de Proteção Coletiva (EPC). Ela é uma barreira de engenharia que protege o ambiente todo, não sendo algo que o indivíduo 'veste'.",
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
        "explanation": "Gabarito: C. A lavagem das mãos é a medida número um, universal e indiscutível de prevenção de infecções em qualquer ambiente de saúde.",
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
        "explanation": "Gabarito: C. Perfurocortantes nunca vão em sacos, pois furam o plástico e ferem o pessoal da limpeza. Vão sempre nas caixas amarelas rígidas padronizadas.",
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
        "explanation": "Gabarito: B. A pipetagem com a boca era comum no passado, mas causou inúmeras mortes e infecções por ingestão acidental de ácidos ou bactérias. Hoje é falta gravíssima de BPL.",
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
        "explanation": "Gabarito: B. Os sacos de lixo biológico (infectante) são regulamentados como de cor branca leitosa com o símbolo preto de risco biológico estampado.",
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
        "explanation": "Gabarito: B. O POP é a 'receita de bolo' do laboratório. Garante que a rotina seja padronizada e reprodutível, independente de quem seja o técnico do dia.",
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
        "explanation": "Gabarito: C. A PCR é ultrassensível. Qualquer traço de magnésio extra, cloro ou enzimas soltas na água destilada comum vai estragar ou inibir a reação.",
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
        "explanation": "Gabarito: B. Luvas e jalecos retêm respingos imperceptíveis de sangue e venenos químicos. Sair com eles espalha contaminação em maçanetas e mesas onde as pessoas comem.",
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
        "explanation": "Gabarito: C. A autoclave é uma panela de pressão gigante. A pressão aumenta o ponto de ebulição da água, permitindo que o vapor chegue a 121ºC e destrua qualquer forma de vida.",
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
        "explanation": "Gabarito: B. Se você faz um teste de Covid e o controle positivo (que você sabe que é vírus puro) não brilhar, o seu teste falhou. Você não pode liberar o paciente como 'Negativo'.",
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
        "explanation": "Gabarito: C. Enzimas em tampão com glicerol (para não congelarem solidamente e quebrarem) são sempre estocadas em freezers verticais padrão de -20ºC.",
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
        "explanation": "Gabarito: C. São EPCs (Equipamentos de Proteção Coletiva) de uso exclusivo para emergências. Segundos de diferença na lavagem de um ácido nos olhos podem salvar a visão.",
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
        "explanation": "Gabarito: B. O hipoclorito de sódio é letal para vírus (como HIV e Hepatite B) contidos no sangue, sendo a primeira linha de defesa química de desinfecção de bancada.",
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
        "explanation": "Gabarito: C. Pipetas são mecânicas e as molas afrouxam com o tempo. Calibrar é garantir que quando ela marca 10ul, ela de fato puxe 10ul e não 9ul.",
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
        "explanation": "Gabarito: B. Manipular sangue humano padrão recai sobre o Nível 2 de biossegurança (jaleco, luvas, óculos, acesso restrito e descarte em lixo branco).",
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
        "explanation": "Gabarito: C. É o cérebro eletrônico do laboratório. O software que faz o rastreio do código de barras, nome do paciente e resultados de forma digital.",
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
        "explanation": "Gabarito: C. Centrífugas giram a mais de 15.000 Rotações Por Minuto. Qualquer desequilíbrio de peso (1 grama que seja) de um lado gera uma vibração que pode estraçalhar a máquina.",
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
        "explanation": "Gabarito: B. O TCLE é o documento onde o participante assina dizendo: 'Eu fui informado sobre os riscos e os benefícios, e aceito participar desta pesquisa sem ter sido forçado'.",
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
        "explanation": "Gabarito: C. O sistema CEP atua em nível hospitalar/universitário, e a CONEP é o órgão máximo federal que regula as normas para proteger os cidadãos.",
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
        "explanation": "Gabarito: D. Estudos multicêntricos ('Múltiplos Centros') englobam diferentes instituições e estados trabalhando juntos na mesma pesquisa para obter dados populacionais maiores e mais rápidos.",
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
        "explanation": "Gabarito: C. A autonomia é o direito de dizer 'Sim' ou de dizer 'Não, não quero mais participar e quero meu sangue descartado'.",
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
        "explanation": "Gabarito: A. Se você vai testar um novo remédio ou procedimento, ele tem que ser seguro e, fundamentalmente, não pode machucar mais do que a doença original faria.",
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
        "explanation": "Gabarito: B. Esta é uma garantia sagrada do TCLE (Direito de Retirada). O paciente sai quando quiser e o hospital continua tratando ele normalmente.",
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
        "explanation": "Gabarito: B. A anonimização corta o elo entre o DNA e o Nome, impedindo que hackers ou empresas de seguro descubram a doença de um indivíduo específico.",
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
        "explanation": "Gabarito: C. O Brasil proíbe a figura do 'Cobaia de Aluguel'. As pessoas entram na pesquisa por altruísmo. A instituição só deve devolver o dinheiro do ônibus e da alimentação do dia.",
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
        "explanation": "Gabarito: D. O pai assina o consentimento oficial. Mas a criança não é um objeto; o pesquisador tem que explicar para ela, numa linguagem infantil com desenhos, que ela vai levar uma agulhada, e ela assina o 'Assentimento' (TALE).",
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
        "explanation": "Gabarito: B. Se eu recebo 100 mil reais da Empresa X e assino um artigo atestando que a máquina da Empresa X é a melhor do mundo, eu tenho um conflito moral e financeiro. Ele deve ser obrigatoriamente declarado nas revistas.",
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
        "explanation": "Gabarito: C. A Plataforma Brasil digitalizou tudo. É nela que os projetos, Tcles e relatórios são protocolados e lidos pelos relatores do CEP e da CONEP.",
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
        "explanation": "Gabarito: C. O PI (Pesquisador Principal) é o 'Comandante'. Se um técnico errar ou cometer má conduta, o nome e o registro profissional do PI é o primeiro a ser chamado pela comissão de ética na responsabilização.",
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
        "explanation": "Gabarito: B. O conceito de Vulnerabilidade ética foca em proteger quem tem menos capacidade de se defender de abusos devido à desigualdade de poder (médico vs. pessoa carente).",
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
        "explanation": "Gabarito: C. É o conceito de Benefício Pós-Estudo. O voluntário deu seu corpo ao risco; a indústria farmacêutica/patrocinador fica obrigada a manter o remédio ou cura garantida de graça para ele.",
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
        "explanation": "Gabarito: C. Criado pela Constituição de 1988, o Sistema Único de Saúde transformou a saúde de um 'privilégio de trabalhadores com carteira assinada' em um 'direito de todos e dever do Estado'.",
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
        "explanation": "Gabarito: B. Se um turista sueco sofrer um infarto no Rio de Janeiro, ele será atendido no SUS sem apresentar cartão de crédito, pois a vida é o valor máximo (Princípio Universal).",
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
        "explanation": "Gabarito: C. Diferente de igualdade (dar o mesmo para todos). Equidade é dar recursos adequados; ex: a fila do transplante de fígado não anda por ordem de chegada, e sim por quem tem o risco de morrer antes (quem precisa mais, passa na frente).",
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
        "explanation": "Gabarito: C. É não fragmentar a saúde do cidadão. Ele não é 'uma doença', é uma pessoa. A rede deve ter posto de saúde, ambulatório e hospital de base ligados.",
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
        "explanation": "Gabarito: C. A Epidemiologia tenta responder quem está adoecendo, onde está adoecendo, por qual motivo ambiental ou genético estão adoecendo, e como fazemos para barrar o problema.",
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
        "explanation": "Gabarito: D. Incidência é como um filme (quantos pegaram dengue no mês de março). Prevalência é uma fotografia (quantas pessoas têm hipertensão no Brasil hoje, no total).",
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
        "explanation": "Gabarito: C. Fatores de moradia (esgoto a céu aberto), renda (não poder comprar comida nutritiva) e escolaridade são grandes preditores de morte prematura, tão importantes quanto os fatores biológicos.",
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
        "explanation": "Gabarito: D. Níveis de Prevenção: Primária (Evita a doença). Secundária (Pega a doença no começo, sem sintomas ainda). Terciária (Evita que o paciente já doente e operado piore e fique com sequelas).",
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
        "explanation": "Gabarito: B. Como sarampo é fatal e super transmissível, o médico é obrigado por lei federal a avisar o Estado imediatamente, quebrando o sigilo em prol do bem-estar de toda a comunidade da cidade.",
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
        "explanation": "Gabarito: B. Fazer o dinheiro e a ordem descer de Brasília até as mãos do gestor da cidade (Municipalização), porque o prefeito conhece melhor as necessidades locais do povo dele do que a capital.",
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
        "explanation": "Gabarito: B. Se a máquina do sequenciador e o reagente químico foram aprovados no Brasil, é porque a ANVISA atestou que eles não fazem mal e cumprem o que prometem no manual.",
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
        "explanation": "Gabarito: C. A constituição diz 'Saúde é direito de todos'. Como há um conflito sobre faltar dinheiro no cofre contra a vida de um bebê, os pais ganham na justiça liminares que forçam o governador a pagar tratamentos genéticos milionários (ex: remédio Zolgensma da AME).",
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
        "explanation": "Gabarito: B. O Brasil é grande demais. A CONITEC atua como um escudo matemático provando que botar uma técnica Nova no catálogo popular SUS realmente funciona e provando para a economia federal que o estado não vai falir ao oferecer e suprir aquilo a todos os 210 milhões de brasileiros.",
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
        "correct": "D",
        "explanation": "Gabarito: B. Se junta na Saúde unificada: Epidemiológica (O paciente e o vírus da doença), Sanitária (Remédios, vacinas e hambúrgueres contaminados), Ambiental (Mercúrio na água e mosquito do mato) e Trabalhador (Segurança de quem produz na mina de carvão e fumaça e asma ocupacional). É a visão total da Saúde em macro blocos focados na antecipação e qualidade de vida.",
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
        "explanation": "Gabarito: B. GCP é a bíblia mundial (ICH GCP). Surgiu para que erros das guerras passadas do século 20 sem limite não ocorressem novamente. Garante que os dados (O papel) refletem fidedignamente que um Ser Humano ciente da ação recebeu segurança máxima num protocolo validado.",
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
        "explanation": "Gabarito: D. Epidemia é a Explosão. Um pico inesperado que esgota leitos da noite para o dia. Endemia é a doença 'da casa' (habitual). Ex: Em Manaus a malária é endêmica (está sempre lá, o governo já espera x casos por mês). Se tiver Dengue no sul com 10.000 casos e não tinha mês passado, virou Epidemia.",
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
        "correct": "E",
        "explanation": "Gabarito: C. Tubo de laboratório precisa gritar: O que é (Tampão de Lise 10mM), Quando foi Feito (01/Jan/25), Validade (01/Dez/25) e Quem fez (Assinatura: JS). Um frasco incolor sem rótulo ou sem validade transparente no freezer em laboratórios reais não é água, é veneno. E pela lei penal joga-se imediatamente no lixo Químico ou Biológico para descarte.",
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
        "correct": "E",
        "explanation": "Gabarito: B. Eclusa (Air-Lock) de transição num centro avançado de doenças genômicas infecciosas é o filtro de barreira máxima de ar da porta principal. O pesquisador entra, a porta de trás tranca, ele sofre um banho de ar estéril do teto ou irradiação e, só então e quando acabar, a porta da frente das macas do laboratório de Risco 3 se destranca para ele passar ileso, nunca vazando nada pelo corredor central administrativo dos civis para o ambiente exterior livre normal do planeta limpo hospitalar aberto ou corredores.",
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
        "correct": "A",
        "explanation": "Gabarito: B. Essa é a regra número um que mais derruba os cientistas inexperientes e causa reprovação dos Comitês de Ética em Pesquisa do hospital. Se você mandar pro CEP um documento TCLE dizendo que 'vamos usar Fastq com Alinhamento BWT de variantes CNVs', você reprova. O texto que vai para a mão do paciente deve dizer que 'vamos usar programas de computador para ler o seu DNA na máquina que tira fotos para procurar erros na genética'.",
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
        "explanation": "Gabarito: C. A Cas9 é 'cega' sem o PAM (geralmente NGG). Ela só corta o DNA se o RNA guia hibridizar com o alvo E houver um PAM logo ao lado. Isso impede que a bactéria corte seu próprio genoma.",
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
        "explanation": "Gabarito: B. O bissulfito não consegue alterar citosinas que estão protegidas por um grupo metil. Ele converte apenas as 'desprotegidas' (não metiladas) em Uracila (que a PCR lê como Timina). A bioinformática depois compara com a referência para ver o que mudou.",
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
        "explanation": "Gabarito: C. O complexo RISC usa a pequena fita de RNA como um 'guia' para encontrar o mRNA complementar e 'cortá-lo', impedindo a tradução da proteína.",
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
        "explanation": "Gabarito: A. A Recombinação Homóloga é um reparo livre de erros porque 'copia' a informação da fita irmã perfeita. Ela só pode fazer isso após o DNA ter sido duplicado (fases S/G2).",
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
        "explanation": "Gabarito: C. O DNA solto no sangue é rapidamente digerido por nucleases. Apenas a parte que estava protegida ('enrolada') no carretel de histonas do nucleossomo (~147 pb + linker) sobrevive, resultando em fragmentos de ~166 pb.",
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
        "explanation": "Gabarito: B. A captura Poly-A só pega RNAs maduros que têm a cauda. Como muitos lncRNAs e RNAs não codificantes não têm cauda poly-A, a solução é fazer o contrário: destruir os RNAs ribossômicos (que são o lixo que não queremos) e sequenciar o que sobrar.",
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
        "explanation": "Gabarito: C. A enzima Tn5 Transposase é usada. Ela tenta cortar e colar adaptadores no genoma inteiro, mas só consegue fazer isso nas partes da cromatina que estão 'frouxas' ou abertas.",
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
        "explanation": "Gabarito: B. Se a PCR roda ciclos demais, os primers e dNTPs acabam. Fitas de DNA começam a atuar como primers para outras fitas de DNA não relacionadas (Template Switching), criando quimeras artificiais de laboratório.",
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
        "explanation": "Gabarito: B. O SDS é um detergente forte que 'abre' as proteínas globulares. A Proteinase K aproveita essa exposição e corta a proteína em pedacinhos (peptídeos), livrando o DNA de histonas e destruindo DNases.",
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
        "explanation": "Gabarito: B. Off-target é o 'lixo' da captura. Você desenhou a isca para pegar o gene BRCA, mas a isca grudou em outros locais aleatórios ou a lavagem foi muito fraca e não soltou o DNA indesejado.",
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
        "explanation": "Gabarito: C. A mágica do single-cell é que, ao quebrar as gotas e sequenciar tudo junto, o 'Cell Barcode' diz para o computador de qual exata célula microscópica aquele RNA saiu.",
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
        "explanation": "Gabarito: B. Na escala Phred, 0 significa 'probabilidade máxima / nenhuma penalidade'. A ordem dos PLs é sempre (Ref/Ref, Ref/Alt, Alt/Alt). O valor 0 na posição do meio indica um heterozigoto claro.",
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
        "explanation": "Gabarito: C. Ferramentas padrão (Picard/GATK) marcam o read com a bit-flag 1024. Ferramentas subsequentes como o HaplotypeCaller vêm essa flag e fingem que o read não existe, poupando dados originais.",
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
        "explanation": "Gabarito: B. QD evita que uma variante lixo pareça verdadeira só porque teve 5.000 reads amontoados em cima dela. Ele divide a qualidade bruta pela profundidade de reads.",
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
        "explanation": "Gabarito: C. O comando 'slop' expande as coordenadas. Ao fornecer o arquivo do tamanho do genoma (-g), o comando não estenderá a coordenada além do limite físico do cromossomo (evitando erros de out-of-bounds).",
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
        "explanation": "Gabarito: B. Essa é a magia do Pipe. Ele permite processar terabytes de genomas num notebook de 8GB de RAM, pois o dado flui como um cano invisível sem ocupar o disco rígido.",
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
        "explanation": "Gabarito: C. Containers são caixas fechadas. Sem o 'mount de volume (-v)', a ferramenta lá dentro não enxergaria as suas amostras que estão no servidor físico.",
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
        "explanation": "Gabarito: B. FDR = 0.05 significa que, se você declarou 100 genes como mutados, você aceita estatisticamente que 5 deles são erros do acaso, mas 95 são descobertas confiáveis.",
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
        "explanation": "Gabarito: B. Se a linha se descola toda, é problema de estrutura da população (inflação sistêmica). Se a linha segue reta e SÓ a ponta deforma pra cima, você encontrou os genes agressores reais que quebram a hipótese nula.",
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
        "explanation": "Gabarito: C. A heritabilidade restrita (h²) não conta os efeitos complexos de dominância; conta apenas o efeito base aditivo que os pais podem passar com previsibilidade para o filho (útil para cálculo de escores poligenéticos - PRS).",
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
        "explanation": "Gabarito: C. É difícil provar se 'obesidade causa doença X' ou 'a doença X que causou obesidade' num estudo normal. Como os genes para obesidade estavam lá desde bebê, a Randomização Mendeliana prova a direção da causalidade sem erro.",
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
        "explanation": "Gabarito: B. Penetrância: Você tem a mutação, você adoeceu? (Sim/Não). Expressividade: Você adoeceu, mas no seu irmão afetou a perna severamente e em você foi apenas um sintoma brando.",
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
        "explanation": "Gabarito: B. A assimetria do RSA/Curvas Elípticas garante que mesmo que o Hacker tenha a sua chave pública (cadeado), ele não consegue abrir a caixa sem a sua chave privada que nunca transitou pela internet.",
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
        "explanation": "Gabarito: C. Alterar uma única letra 'A' para 'T' num arquivo de 50GB muda completamente o código Hash gerado. É a prova de fogo de que o arquivo chegou 100% perfeito no destino.",
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
        "explanation": "Gabarito: B. IBD é quando duas pessoas compartilham o EXATO mesmo pedaço de DNA que veio do avô deles, sem ter quebrado por recombinação. Alelos 'Identity by State' (IBS) são iguais por coincidência cósmica.",
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
        "explanation": "Gabarito: B. Se uma epidemia mata 90% da tribo, a diversidade genética vai para o ralo. A minoria que sobrevive, se cruza entre si, espalhando suas variantes (boas e ruins) para todo o futuro daquela população isolada.",
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
        "explanation": "Gabarito: B. A IA de priorização de genes (Exomiser) entende que Polidactilia é uma sub-categoria de 'Mão Anormal'. Se a máquina acha um gene focado em deformidade na mão, ela cruza as pontas hierarquicamente com os sintomas do paciente.",
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
        "explanation": "Gabarito: B. O VCF é baseado em 'Linhas' (Row-based). O Parquet salva as coisas em 'Colunas' (Columnar). Se o pesquisador manda buscar todos com 'ID' tal, o Parquet ignora 90% do arquivo e lê apenas o índice da coluna ID, baixando a conta da Amazon/Google de R$ 10.000 para R$ 10 na query (consulta).",
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
        "explanation": "Gabarito: C. É a 'mão' da célula que puxa a ponta principal (Cap) da fita de RNA e enfia na engrenagem do ribossomo.",
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
        "explanation": "Gabarito: B. Clone significa baixar a cópia matriz (o projeto inteiro) da internet para você editar no seu PC.",
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
        "explanation": "Gabarito: B. Regra máxima da NR32: Nunca esprema um acidente percutâneo ou machuque o tecido em pânico, pois isso aumenta o microfluxo vascular absorvendo o patógeno. Lave brandamente, mas com água e sabão exaustivamente.",
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
        "explanation": "Gabarito: B. Phasing determina a estrutura 'cis/trans'. Duas mutações recessivas na mesma fita (cis) ainda deixam a outra fita do pai intacta (doença não ocorre). Mutações em fitas opostas (trans) causam quebra das duas cópias e disparam a doença do paciente.",
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
        "explanation": "Gabarito: B. O Snapshot salva as configurações estruturais do volume do HD sem gastar o peso total. Deu ruim num update e o GATK não abre mais? Você 'reverte' pro momento X do Snapshot e o servidor volta à vida como se nada tivesse ocorrido.",
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
        "explanation": "Gabarito: C. Por isso a qPCR é mandatória na excelência: ela ignora o fragmento do DNA do meio e pergunta: Você tem P5 de um lado e P7 do outro? Se sim, você está pronto pro combate fotográfico na máquina de NGS e eu vou te contar como molécula viável.",
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
        "explanation": "Gabarito: B. A natureza é implacável. Se a mutação num gene motor bate no embrião e mata o organismo na gestação, ela some do radar genômico (Seleção Purificadora / Limpeza de letalidade).",
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
        "explanation": "Gabarito: B. Crianças ou adolescentes não assinam TCLE, assinam TALE (Assentimento). É o pesquisador 'descendo' a uma conversa infantil de confiança dizendo o que farão no braço do voluntário num desenho lúdico sem traumas clínicos da imposição do adulto na sala médica.",
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
        "explanation": "Gabarito: B. Estatística dura: se você joga o dado 20 mil vezes seguidas (genes), vários vão cair no número 6 puramente por sorte. Ajustar o p-value endurece o desafio, separando a 'Sorte' do 'Real achado'.",
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
        "correct": "D",
        "explanation": "Gabarito: C. A luz UV-C é esterilizadora de DNA de nível militar de bancada. Ela derrete as trincas de bases soltas na bancada para que não amplifiquem e sujem sua extração matutina de falsos rastros orgânicos de genomas mortos do ar do hospital laboratório central operante de turnos sequenciais logísticos e limpos operados em escala fabril e de volume intensivo.",
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
        "correct": "C",
        "explanation": "Gabarito: B. Se a sua pipeline Bioinfo consome o banco do ClinVar, ela roda um comando GET (busca o dado). Se a Ensembl API cai, ela devolve um 500 (O servidor do Reino Unido capotou internamente e não processa a ordem de requesta bioinformática atestada pedida no console do analista do país distante sul americano do servidor da nuvem amazon e proxy gateway route).",
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
        "correct": "D",
        "explanation": "Gabarito: B. O Odds Ratio te dá a 'Força' da doença. Se o O.R. do gene for 5.0, significa que portar essa variação do VCF quintuplica seu risco bruto de terminar na cama de uma enfermaria comparado a não possuir o defeito na dupla hélice. A pedra angular estatística de estudos caso/controle do genoma e epidemiologia das capitais brasileiras no projeto populacional geral da IA biomédica e do conselho clínico ético das frentes de base dos laboratórios das regionais ativas nos pólos da pesquisa.",
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
        "explanation": "Gabarito: C. O DPO é o cérebro das leis (Ele manda prender o dado sensível perante a lei e LGPD ética do advogado). O Custodian é a 'Fechadura e a Chave' do sistema Unix. He não inventa a lei, ele apenas programa a porta de chaves digitais no código (Chmod 700 / SELinux / Firewalls lógicos da AWS Bucket / Root permissions e IAM) bloqueando ativamente na parte técnica da computação que o técnico intruso e hackings puxem cópias e zips de variantes. É a engrenagem técnica blindando o tesouro ético jurídico.",
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
        "correct": "E",
        "explanation": "Gabarito: B. Se você sequencia o João, você espera achar alelos em 100% ou 50% em células normais de germinativas. Se o robô de extração pingar e 'tossir' 10% do DNA da Maria no tubo do João, o GATK vai achar milhares de SNPs em níveis estranhos e aberrantes (5, 10, 12%). VAF suja é o farol vermelho das contaminações. Joga o experimento e o vidro NGS caríssimo inteiro no lixo biológico. Recoleta e Refaz tudo nas bancadas sem robôs contaminados e ponteiras frouxas na técnica BPL restrita laboratorial rigorosa.",
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
        "correct": "C",
        "explanation": "Gabarito: B. O rWES em UTI neonatal ('Exoma a jato') é o salvador de vidas. A criança convulsiona na incubatora, em 7 dias a IA com o Exoma descobre a proteína quebrada na enzima cerebral, o médico dá a vitamina ou droga X alvo direcionada de precisão biológica perfeita e o quadro cessa magicamente num milagre tecnológico translacional. E o estado e os cofres economizam rios de dinheiro em exames inúteis diários e internações eternas cegamente perdidas na escuridão sem diagnóstico molecular primário da causa.",
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
        "correct": "D",
        "explanation": "Gabarito: B. Semântica controlada universal (HPO - Human Phenotype Ontology) é o código binário dos sintomas. O robô e a IA de priorização de Genomas de Doenças Raras não sabe o que é 'Menino com cabeção de 6 dedos'. A máquina fala em nós matemáticos lógicos (Macros do HPO de polidactilia cruzados). O HPO é a ponte para a bioinformática agir em dados médicos brutos hospitalares unificados e salvar doentes por estatística globalizada em banco federado e integrado da ciência aberta e de precisão mundial da doença da vida real em humanos e animais nas nuvens das corporações.",
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
        "explanation": "Gabarito: B. Une todos os 1000 VCFs dos pacientes em uma planilhona só para podermos rodar testes de associação e procurar onde doentes e saudáveis divergem na matriz estatística de risco na computação.",
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
        "explanation": "Gabarito: C. DDoS não rouba nada, apenas 'afoga' o servidor com milhões de acessos falsos simultâneos até queimar a CPU, barrando o médico de acessar o resultado de UTI do seu paciente na plataforma em nuvem do laboratório na hora crítica da vida.",
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
        "explanation": "Gabarito: B. Painel Alvo/Exoma é 'pescaria com isca' e anzol. Se On-Target é alto, você pescou só os peixes dourados que queria. Se for baixo, sua rede pegou bota velha (DNA Lixo off-target que não faz parte dos 500 genes do câncer que o médico pediu), torrando dinheiro do SUS na base.",
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
        "correct": "C",
        "explanation": "Gabarito: B. Essa é a regra ouro do Filtro de Doenças Raras. Se a doença é letal infantil e atinge 1 em 1 milhão, o gene causador NUNCA vai estar em 85% de toda a humanidade saudável da rua no banco GnomAD andando no shopping alegre e feliz. O computador ignora tudo que é comum (Frequente Benigno Polimorfismo) e foca no que é bizarro e Único do paciente da doença no VCF (Variantes raras de AF < 0.01).",
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
        "explanation": "Gabarito: B. Fenol não se brinca, é neurotóxico respiratório volátil potente, e queima por contato. Abre-se o vidro EXCLUSIVAMENTE sob capela química exaustora forte de ar industrial negativo (Suga a morte do ar para fora da bancada blindada no EPC coletivo da sala com o acrílico isolador no peito).",
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
        "correct": "C",
        "explanation": "Gabarito: B. Típico do Brasil: algumas poucas famílias europeias ou quilombos isolados fundaram povoados isolados nas montanhas e fundões de vale em 1800 e não receberam imigrantes de fora. Mutações deletérias lá cruzaram entre parentes num funil (Bottle Neck e Efeito Fundador Isolado) criando um pico bizarro regional de doenças genéticas recessivas severas no município endêmico que o Genomas SUS tenta mapear para triagem pré-natal focado lá da rede básica PSF.",
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
        "explanation": "Gabarito: D. A Uracila é a base exclusiva do RNA, substituindo a Timina que é exclusiva do DNA.",
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
        "explanation": "Gabarito: C. A mitocôndria produz ATP (energia) e guarda o DNA mitocondrial (mtDNA), herdado exclusivamente da mãe.",
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
        "explanation": "Gabarito: C. O cromossomo é apenas o DNA enovelado de forma extremamente compacta para caber dentro do núcleo da célula.",
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
        "explanation": "Gabarito: C. Mutação é simplesmente um erro de cópia. Uma letra do DNA foi trocada, adicionada ou apagada por acidente.",
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
        "explanation": "Gabarito: C. A PCR (Reação em Cadeia da Polimerase) é uma máquina de xerox molecular. Ela multiplica o DNA para que possamos enxergá-lo nos exames.",
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
        "explanation": "Gabarito: B. NGS é a tecnologia moderna que permite ler milhões de pedaços de DNA ao mesmo tempo.",
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
        "explanation": "Gabarito: B. A centrífuga usa a força centrífuga para jogar o que é pesado para o fundo (pellet) e deixar o que é leve em cima (sobrenadante).",
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
        "explanation": "Gabarito: C. A Flow Cell é a peça-chave onde o DNA gruda e brilha para a máquina ler as letras.",
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
        "explanation": "Gabarito: C. Ele realiza os 'ciclos térmicos' necessários para separar e copiar o DNA.",
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
        "explanation": "Gabarito: D. Agulhas furam sacos e acidentam os lixeiros. Devem ir direto para caixas rígidas de papelão/plástico grosso.",
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
        "explanation": "Gabarito: C. A autoclave é uma panela de pressão gigante que mata qualquer micróbio com vapor fervente.",
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
        "explanation": "Gabarito: C. O laboratório é cheio de venenos e vírus. Comer ali é um risco de intoxicação gravíssimo.",
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
        "explanation": "Gabarito: B. O jaleco é o seu escudo. Se cair ácido, cai no jaleco e não na sua pele.",
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
        "explanation": "Gabarito: C. O lava-olhos dilui o ácido ou base instantaneamente, salvando o funcionário da cegueira.",
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
        "explanation": "Gabarito: C. É o papel assinado pelo paciente provando que ele sabe dos riscos da pesquisa e aceitou de boa vontade.",
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
        "explanation": "Gabarito: B. O princípio da Autonomia garante que o paciente entra e sai da pesquisa livremente.",
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
        "explanation": "Gabarito: B. Sistema Único de SAÚDE.",
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
        "explanation": "Gabarito: C. É Universal. Abrange todo mundo, independente de raça, cor ou dinheiro.",
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
        "explanation": "Gabarito: D. A vacina é prevenção primária porque age antes do vírus atingir a pessoa.",
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
        "explanation": "Gabarito: B. O FASTA é o texto mais puro do DNA. Ele tem o nome da sequência em cima e as letrinhas embaixo, nada mais.",
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
        "explanation": "Gabarito: B. O 'Q' significa Qualidade. Ele diz se aquele 'A' é realmente um 'A' ou se foi um borrão na foto da máquina.",
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
        "explanation": "Gabarito: C. É como a foto na caixa do quebra-cabeça. Usamos o Genoma de Referência para saber onde encaixar os pedacinhos do genoma do nosso paciente.",
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
        "explanation": "Gabarito: A. VCF é a tabela de Mutações. Ele diz 'No cromossomo 1, deveria ter um A, mas o seu paciente tem um T'.",
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
        "explanation": "Gabarito: C. O BWA pega as milhares de pecinhas do DNA do paciente e monta o quebra-cabeça em cima do mapa guia.",
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
        "explanation": "Gabarito: C. O Linux, operado por tela preta e comandos em texto (terminal), é a base mundial de servidores por ser rápido, seguro e não gastar energia com telas gráficas bonitas.",
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
        "explanation": "Gabarito: C. 'ls' vem de LiSt. É como abrir uma pasta no Windows e ver os arquivos lá dentro.",
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
        "explanation": "Gabarito: B. O GitHub é o 'Google Drive' dos códigos de computador, permitindo que cientistas trabalhem no mesmo programa juntos.",
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
        "explanation": "Gabarito: C. Cat (concatenate) apenas pega o texto do bloco de notas e vomita na sua tela preta para você ler rapidamente.",
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
        "explanation": "Gabarito: C. P < 0.05 é o padrão universal para dizer: 'Opa, a diferença entre o doente e o saudável aqui é real, não foi por acaso'.",
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
        "explanation": "Gabarito: C. Ancestralidade genômica nos conta de qual continente os nossos antepassados vieram há centenas ou milhares de anos.",
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
        "explanation": "Gabarito: B. Ao fundar uma ilha com apenas 5 casais, os filhos terão apenas as genéticas daqueles 10 indivíduos, perdendo a diversidade do resto do mundo.",
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
        "explanation": "Gabarito: B. Cruza consanguínea soma os genes recessivos ruins que estavam escondidos na família, fazendo a doença eclodir nos filhos.",
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
        "explanation": "Gabarito: B. Estudo de Associação. Ele cruza os dados do mapa genético de pessoas sadias e doentes e procura onde está a diferença que causa o risco.",
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
        "explanation": "Gabarito: C. A LGPD pune com multas gigantescas empresas que deixam vazar resultados de exames e CPFs de clientes na web.",
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
        "explanation": "Gabarito: C. Se o colega logado na sua conta deletar o resultado de um tumor, a polícia baterá na sua porta. Senha não se compartilha, nunca.",
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
        "explanation": "Gabarito: B. A Farmacogenômica diz: 'Não dê o remédio X para o João, pois a genética dele avisa que ele sofrerá efeitos colaterais mortais. Dê o remédio Y'.",
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
        "explanation": "Gabarito: C. É o maior programa de rastreio genético populacional primário. Um furo no calcanhar acha doenças que, se tratadas no mês 1, salvam a criança do retardo mental.",
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
        "explanation": "Gabarito: C. Computação na Nuvem é usar um PC fortíssimo que fica num galpão da Amazon no exterior para rodar suas análises genéticas aqui do Brasil, via internet.",
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
        "explanation": "Gabarito: B. ETL é o trabalho de arrumar a casa digital. Você pega os dados caóticos dos médicos, formata direitinho (Transform) e joga na nuvem oficial (Load).",
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
        "explanation": "Gabarito: C. A padronização de vocabulário permite que a Inteligência Artificial e a estatística do Brasil entendam do que o médico japonês ou paulista estão falando com a mesma linguagem (códigos).",
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
        "explanation": "Gabarito: C. Doenças Raras são o alvo principal do Sequenciamento (WES/WGS). Elas são raras isoladamente, mas somadas afetam milhares de famílias.",
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
        "explanation": "Gabarito: B. Falso Positivo é o 'alarme falso'. Gera pânico desnecessário e gasto médico com cirurgias em alguém que não tem a doença.",
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
        "explanation": "Gabarito: D. Falso negativo é um erro fatal na saúde pública. O paciente sai feliz achando que está saudável e a doença continua evoluindo sem tratamento.",
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
        "explanation": "Gabarito: C. Fazer um script é escrever a 'receita' de comandos pro computador fazer todo o seu trabalho chato automaticamente enquanto você toma café.",
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
        "explanation": "Gabarito: C. A seleção natural escolheu os genes que melhor se adaptavam ao sol extremo da África ou ao frio extremo da Europa, moldando o nosso genoma visual ao longo das eras.",
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
        "explanation": "Gabarito: C. 3 Cópias no total, 2 mídias diferentes, e 1 cópia bem longe (Off-site). Se o seu hospital inteiro pegar fogo, a cópia '1' que estava lá na nuvem de outro estado salvará todo mundo.",
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
        "explanation": "Gabarito: C. Criptografia é o cadeado digital. Se um hacker furtar o seu arquivo, ele vai abrir e ver bilhões de números aleatórios absurdos, e não o genoma ou o nome do seu paciente.",
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
        "explanation": "Gabarito: C. Apesar de ser gigante, apenas 2% do nosso DNA de fato produz as peças da nossa vida. O restante são peças de controle estrutural, ligantes ou 'DNA antigo' residual.",
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
        "explanation": "Gabarito: C. O genoma de referência é como a foto na caixa de um quebra-cabeças. Ele nos guia para saber onde cada read do nosso paciente deve se encaixar e o que está diferente.",
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
        "explanation": "Gabarito: B. Variant Calling é a fase onde o computador vasculha o alinhamento e diz: 'Aqui o paciente tem um T, mas a referência dizia que era para ter um G'.",
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
        "explanation": "Gabarito: C. BAM significa 'Binary Alignment Map'. Trabalhar com SAM (texto) gasta centenas de gigabytes. O BAM é a versão compactada para o computador ler mais rápido.",
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
        "explanation": "Gabarito: B. O IGV atua como um 'microscópio virtual' do genoma. Ele permite que o biomédico ou médico visualize a mutação diretamente na tela.",
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
        "explanation": "Gabarito: C. SNP (Polimorfismo de Único Nucleotídeo) mexe com apenas uma posição. InDel (Insertion/Deletion) adiciona ou remove blocos de letras do código.",
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
        "explanation": "Gabarito: B. REF = Referência (o normal da humanidade). ALT = Alternativo (A mutação detectada no seu paciente).",
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
        "explanation": "Gabarito: B. Ter uma lista de letras mutadas não ajuda o médico. A anotação traduz isso e diz: 'Essa mutação G>C está no gene TP53 e destrói a proteína do câncer'.",
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
        "explanation": "Gabarito: C. A 'Profundidade' é a nossa prova real. Se uma letra é fotografada 30 vezes e nas 30 vezes ela é um 'T', temos total certeza de que não foi um erro aleatório da câmera.",
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
        "explanation": "Gabarito: C. Se o gabarito era 'A' e a peça do paciente é 'T', eles não emparelham perfeitamente, ocorrendo um 'mismatch'.",
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
        "correct": "D",
        "explanation": "Gabarito: C. O FastQC é o 'controle de qualidade' primário. Ele mostra gráficos que acusam se a luz do laser enfraqueceu ou se os adaptadores poluiram a amostra.",
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
        "explanation": "Gabarito: B. O DNA é o livro de receitas fechado. O RNA-Seq nos mostra quais receitas o cozinheiro está ativamente lendo e usando para fazer comida naquele dia.",
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
        "explanation": "Gabarito: C. O arquivo BED tem geralmente 3 colunas: O cromossomo, o ponto inicial e o ponto final. Serve para o computador saber exatamente onde ele deve recortar os dados.",
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
        "explanation": "Gabarito: B. Muito usado quando descobrimos uma espécie nova de bactéria ou bicho que a ciência não conhecia, obrigando a bioinformática a reconstruir a fita de DNA do zero.",
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
        "explanation": "Gabarito: C. O zero (0) representa a versão normal (Referência). O um (1) representa a mutação (Alternativo). Logo, 0/1 é um portador heterozigoto.",
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
        "explanation": "Gabarito: B. O câncer de pulmão gerado pelo fumo altera as células do pulmão (somáticas). Ele não afeta o espermatozoide. Apenas mutações germinativas passam de pai para filho.",
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
        "explanation": "Gabarito: B. Se a MAF for de 0.001 (0,1%), significa que esse alelo é muito raro e pode ser forte candidato a causar uma doença rara mendeliana.",
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
        "explanation": "Gabarito: C. O comando 'cd' equivale a você clicar duas vezes numa pasta do Windows para entrar nela na tela de texto preta do Linux.",
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
        "explanation": "Gabarito: C. O 'R' (junto com o Bioconductor) é a ferramenta suprema para RNA-Seq, Microarrays e plotagem de gráficos como Vulcão e PCA na academia de biologia.",
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
        "explanation": "Gabarito: B. É o 'Ctrl+F' turbinado do Linux. O grep vasculha gigabytes e te devolve só o que te interessa.",
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
        "explanation": "Gabarito: B. Pipeline é a linha de montagem. O FASTQ entra, passa pela limpeza, passa pelo alinhador, passa pelo GATK e sai como um VCF perfeitinho no final do cano.",
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
        "explanation": "Gabarito: C. O Pipe conecta comandos. Exemplo: você manda o PC listar arquivos e liga num pipe para que ele apenas conte quantas linhas apareceram.",
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
        "explanation": "Gabarito: C. Na genômica, lidamos com tabelas de 50.000 genes e colunas com pacientes. O Pandas lê isso e permite cruzar dados e achar respostas com apenas duas linhas de código em Python.",
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
        "explanation": "Gabarito: B. O Git é a máquina do tempo do programador. E o GitHub é a nuvem pública onde esses projetos salvos e colaborativos vivem.",
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
        "explanation": "Gabarito: C. O maior problema antigo era 'funciona no meu PC mas quebra no seu'. O Docker resolve isso encapsulando todo o ambiente de uma vez.",
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
        "explanation": "Gabarito: C. O `chmod +x` adiciona a propriedade de eXecução. O Linux, por segurança, bloqueia programas recém-criados até você avisar que ele é executável.",
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
        "explanation": "Gabarito: B. O Jupyter mudou a forma de se ensinar código. Você aperta 'Play' no bloco e o gráfico de biologia já salta em cores logo abaixo.",
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
        "explanation": "Gabarito: B. Um VCF pode ter 40 GB. Tentar abrir no bloco de notas normal vai fritar seu notebook. Com `head`, ele mostra um rascunho instantâneo das primeiras linhas e encerra.",
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
        "explanation": "Gabarito: B. O JSON (JavaScript Object Notation) virou a linguagem base de bancos de dados modernos por ser leve, flexível e universal em qualquer linguagem.",
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
        "explanation": "Gabarito: B. O sinal de maior `>` é o redirecionador (ex: `echo 'Olá' > arquivo.txt`). Ele pega o que ia para a tela e joga dentro de um bloco de texto.",
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
        "explanation": "Gabarito: B. P-valor é a chance da Sorte estar brincando com você. Um P-valor baixo (0.01) significa que a sorte não faria isso; o achado é muito sólido e real.",
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
        "explanation": "Gabarito: C. A média simples é apenas somar tudo (todas as coberturas) e dividir pelo total. É a nota escolar clássica.",
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
        "explanation": "Gabarito: C. Se os salários são 1, 2 e 90. A média infla injustamente para 31. A mediana protege os dados e crava em 2, mostrando o cenário mais real e imune ao valor doido de 90.",
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
        "explanation": "Gabarito: B. Correlação mede o quanto dois valores andam de mãos dadas. Se um sobe e o outro desce sempre, é correlação negativa. Se andam juntos para o alto, positiva.",
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
        "explanation": "Gabarito: C. A hipótese nula (H0) estabelece a premissa de que não há diferença ou efeito real, servindo como base para os testes de significância.",
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
        "explanation": "Gabarito: B. O Boxplot esconde os dados fora da curva nos pontinhos finos lá em cima e deixa na caixa colorida central os 50% dos resultados principais da sua turma, ajudando o olho humano a focar no grosso dos resultados.",
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
        "explanation": "Gabarito: B. Um Volcano plot perfeito tem a forma de V (ejetando pra cima os genes que o pesquisador descobriu como marcadores fortíssimos do câncer).",
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
        "correct": "D",
        "explanation": "Gabarito: B. O Erro Tipo I é a ansiedade da publicação: Você grita 'Eureca, achei a causa!', mas era erro dos números. O Erro Tipo 2 é quando você acha que o Remédio X não funciona, joga ele no lixo, mas ele funcionava (Falso Negativo).",
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
        "correct": "A",
        "explanation": "Gabarito: B. Quanto maior a variância, mais diferente as pessoas daquela amostra são entre si. É a medida de dispersão mais forte.",
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
        "explanation": "Gabarito: B. 'Fold' (dobra/vezes). Se a FC deu negativo (-3), o grupo de doentes tem 3 vezes menos expressão daquele gene (Silenciamento).",
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
        "correct": "A",
        "explanation": "Gabarito: B. PCA resume milhares de números em pontos fáceis na tela. Bolinhas de doentes isoladas das sadias significam que a doença mexeu tanto nos números do corpo que eles não se misturam mais na estatística.",
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
        "correct": "A",
        "explanation": "Gabarito: B. O Log2 centraliza e amansa as proporções exponenciais. Uma subida vira número positivo (+1,+2) e uma queda vira número espelhado (-1,-2). Facilita o mapeamento visual no gráfico do Vulcão de RNA.",
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
        "correct": "C",
        "explanation": "Gabarito: B. Se a variante T231C for fortíssima associada com Obesidade, um 'arranha-céu' vai estourar a reta horizontal e subir no eixo Y no meio do Cromossomo 4, de forma lindamente visual e imediata.",
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
        "correct": "E",
        "explanation": "Gabarito: B. O poliéster não queima, ele 'derrete'. Se o funcionário estiver com tecido sintético num pequeno incêndio de bancada de acetona, o plástico vai grudar no osso derretendo. Jaleco tem que ser grosso e base de algodão puro pra agir de colete de bloqueio térmico ou arrancar a roupa antes.",
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
        "correct": "E",
        "explanation": "Gabarito: B. Por não ter sofrido o 'Gargalo Populacional' da grande migração pelo deserto para sair pelo Oriente e Europa, os povos da África carregam quase toda a variação biológica existente de humanos de forma milenar intacta no pool biológico.",
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
        "correct": "E",
        "explanation": "Gabarito: B. Armazenamento e download de DNA são caríssimos. Compactar (gzip) tudo é a única forma financeira e logística da bioinformática funcionar trocando gigas entre estados e prefeituras sem queimar contas com terabytes caríssimos mensais.",
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
        "correct": "E",
        "explanation": "Gabarito: B. Lixo infectante (Grupo A) exige o saco branco resistente clássico, evitando que os catadores de lixo municipal e as varredeiras públicas na rua sejam fatalmente atingidos com sangue cru hospitalar.",
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
        "correct": "A",
        "explanation": "Gabarito: B. A anonimização pura quebra a ponte pro resto da vida (Nunca mais acharemos que dono é o doente). Na Pseudo, nós escondemos a chave no cofre, assim a Bioinformática analisa cega e tranquila, e o médico chefe que tem a chave resgata a cura pra pessoa real.",
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
        "correct": "C",
        "explanation": "Gabarito: B. Assim como o detergente de cozinha derrete a gordura da panela, o detergente SDS de Lise laboratorial derrete o lipídio da membrana celular do paciente na ampolinha. Ao estourar a proteção gorda, a célula jorra o conteúdo (DNA) pra fora para coletarmos na pipeta.",
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
        "correct": "D",
        "explanation": "Gabarito: B. A genialidade da Illumina: as letrinhas artificiais deles têm 'Cadeado' e 'Lanterna'. A máquina adiciona uma letra no fio (ex: T verde), o cadeado impede o fio de crescer desgovernado. A câmera fotografa o pontinho verde (É um T). Enzimas tiram o cadeado, apagam a lanterna e deixam a próxima letra do genoma entrar pra uma nova foto. Milhões de vezes simultâneas.",
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
        "correct": "D",
        "explanation": "Gabarito: B. O VCF é a listinha de defeitos e trocas da máquina (A tabela de infrações do paciente contra o Genoma de Referência). É o laudo de ouro do pipeline onde mostra que na coordenada tal ele tem a doença, poupando a gente de reler os 3 bilhões de letras do arquivo BAM puro gigantesco e entulhado nas máquinas base.",
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
        "correct": "E",
        "explanation": "Gabarito: B. A LGPD (Lei 13.709/2018) foca na privacidade do cidadão. Ela garante que o dado (como um genoma ou endereço) pertence à pessoa, e a instituição deve tratá-lo com extremo cuidado e permissão.",
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
        "correct": "D",
        "explanation": "Gabarito: B. Phishing (Pescaria) é a engenharia social clássica. O hacker não invade o sistema à força; ele engana o biomédico com um e-mail falso para que o próprio biomédico entregue a senha de bandeja.",
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
        "explanation": "Gabarito: A. A Autenticação de Múltiplos Fatores (MFA) exige 'algo que você sabe' (sua senha) mais 'algo que você tem' (seu celular). Isso impede que um hacker acesse o sistema mesmo se descobrir sua senha.",
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
        "correct": "A",
        "explanation": "Gabarito: C. O estagiário da recepção não precisa ter acesso à pasta que deleta o banco de dados do genoma. Dar apenas o acesso mínimo necessário evita acidentes e vazamentos em massa.",
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
        "explanation": "Gabarito: B. Pendrives são o terror da TI hospitalar. Além de espalharem vírus como o Ransomware, perder um pendrive com 10.000 laudos na rua gera multas milionárias pela LGPD.",
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
        "explanation": "Gabarito: C. O HTTP normal manda textos abertos na internet. O HTTPS (Secure) embaralha os dados. Se alguém interceptar a rede, verá apenas códigos ilegíveis em vez da senha ou do genoma do paciente.",
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
        "explanation": "Gabarito: C. Ransomware é o crime digital moderno. Ele sequestra os arquivos do laboratório. Por isso o backup offline (que não está na rede) é a única salvação contra esse ataque.",
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
        "explanation": "Gabarito: C. Segurança da informação não é só digital. Um visitante ou pessoal da limpeza pode facilmente ler um laudo de HIV/Câncer que ficou esquecido em cima da mesa. Guarde documentos em gavetas e não cole senhas no monitor.",
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
        "correct": "A",
        "explanation": "Gabarito: B. O Backup não é apenas salvar o arquivo, é salvar uma 'cópia' num HD diferente ou na Nuvem. Se o disco principal queimar, você tem a cópia intacta para restaurar.",
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
        "correct": "D",
        "explanation": "Gabarito: B. A trilha de auditoria é a 'câmera de segurança' do software. Garante a integridade e impede que um funcionário mal intencionado adultere um laudo sem ser rastreado.",
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
        "explanation": "Gabarito: A. A nuvem garante que ninguém vai roubar o HD físico com uma arma. Mas se o cientista do laboratório colocar a pasta de genomas em 'Acesso Público' na internet por engano, a culpa do vazamento é 100% do laboratório.",
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
        "correct": "A",
        "explanation": "Gabarito: C. Nunca acesse sistemas sigilosos de saúde em Wi-Fi de padaria sem usar uma VPN corporativa forte, pois qualquer pessoa com um software básico na mesma rede pode ler seu tráfego.",
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
        "explanation": "Gabarito: B. O dado anonimizado perde a capacidade de identificar o cidadão. Sem CPF e Nome, a tabela do genoma pode ser usada em pesquisas sem ferir a privacidade da pessoa.",
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
        "explanation": "Gabarito: B. Curiosidade mata a rede. Hackers jogam pendrives com vírus no chão do estacionamento de propósito, esperando que um funcionário curioso espete o USB no computador do hospital.",
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
        "explanation": "Gabarito: C. A VPN é um túnel blindado. Mesmo trabalhando de casa, o sistema acha que você está sentado dentro da segurança física da TI do hospital.",
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
        "explanation": "Gabarito: C. É o famoso 'hackeamento de pessoas'. É mais fácil ligar chorando pro estagiário e pedir a senha do sistema do que passar meses tentando quebrar o firewall da instituição.",
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
        "explanation": "Gabarito: B. Deixar a tela destravada com o sistema aberto na sua mesa é a mesma coisa que entregar a chave de casa na mão de desconhecidos.",
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
        "explanation": "Gabarito: C. Toda empresa e hospital agora é obrigado a ter um DPO. Ele é o 'xerife da privacidade' que garante que os dados não estão sendo usados para fins indevidos.",
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
        "explanation": "Gabarito: C. Deletar arquivos no Windows não apaga nada, apenas 'esconde'. HDs de saúde devem ser triturados fisicamente ou formatados com softwares especiais antes de sair do hospital.",
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
        "explanation": "Gabarito: B. Software desatualizado é igual a uma porta com a fechadura quebrada. As atualizações (patches) de segurança são os 'consertos' imediatos da fabricante para manter o hacker do lado de fora.",
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
        "explanation": "Gabarito: C. O Firewall (Parede de Fogo) é o porteiro do computador. Ele decide quem entra e quem sai da rede do hospital, bloqueando hackers.",
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
        "explanation": "Gabarito: C. Senhas fortes são longas. Uma senha complexa de 12 letras demora séculos para ser quebrada por um computador hacker.",
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
        "explanation": "Gabarito: C. Se o sistema usa seu cartão e sua digital, você não tem como dizer no tribunal: 'Não fui eu que liberei esse laudo de câncer falso'.",
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
        "explanation": "Gabarito: C. Ocultar vazamento é crime agravante. A instituição deve avisar a ANPD e os pacientes imediatamente para que as pessoas possam trocar suas senhas e monitorar fraudes em seus nomes.",
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
        "explanation": "Gabarito: B. Servidores de NGS custam fortunas e guardam dados sensíveis. O datacenter é o cofre-forte da instituição: blindado, frio, vigiado e de acesso ultra-restrito.",
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
        "explanation": "Gabarito: B. ETL é a alma do Banco de Dados. Ele puxa o dado bruto sujo, limpa e padroniza, e joga bonito nas prateleiras do servidor da nuvem.",
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
        "explanation": "Gabarito: C. Computador é burro para entender sinônimos, gírias e erros de digitação médicos. Usar um Código/Vocabulário único garante que a pesquisa científica funcione redonda.",
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
        "explanation": "Gabarito: C. O HPO traduz um sintoma, como 'Dedos a mais', para o código 'HP:0010442'. Isso permite que a Bioinformática busque esse código na rede mundial de mutações e entregue a doença rara correta.",
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
        "explanation": "Gabarito: C. Transformar é higienizar a bagunça. Arrumar datas, corrigir nomes escritos errados e deletar informações em branco antes de salvar no sistema do governo.",
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
        "explanation": "Gabarito: C. O Warehouse é como uma prateleira de supermercado perfeitinha. O Lake é um grande galpão onde você joga as caixas pesadas do jeito que chegaram (Dados Brutos) e os cientistas fuçam nelas depois.",
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
        "explanation": "Gabarito: B. API é o garçom. O seu software bioinformático pede: 'Garçom, me traga os dados do Gene X'. O garçom vai até a cozinha (O banco global Ensembl), pega a informação e devolve direto pra sua tela.",
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
        "explanation": "Gabarito: B. Interoperabilidade é a palavra chave. Se o Einstein, o Sírio Libanês e o SUS usam FHIR, os prontuários dos 3 conseguem se conversar perfeitamente, o que antes era impossível por causa de sistemas privados isolados.",
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
        "explanation": "Gabarito: B. Big Data na Saúde é lidar com Volume absurdo, gerado em altíssima Velocidade, com enorme Variedade (áudio, foto, tabelas) e garantindo a Veracidade (QC e Ética) do dado.",
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
        "explanation": "Gabarito: B. O CSV é a essência da tabela. Se você tira a roupagem bonita do Excel, o que sobra é um texto limpo separado por vírgulas, maravilhoso e leve para a bioinformática ler no Python (Pandas).",
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
        "explanation": "Gabarito: D. O SQL é a linguagem de consulta mestre. Com comandos simples (SELECT * FROM Genomas WHERE gene='BRCA1') você filtra milhões de linhas numa fração de segundos no banco de dados.",
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
        "explanation": "Gabarito: B. A GO unificou a biologia. Ela diz em código de computador: O Gene XYZ é uma (Enzima Kinase), fica no (Núcleo) e age no (Processo de Divisão Celular). Isso facilita os scripts em R em análises de RNA-Seq.",
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
        "explanation": "Gabarito: C. O dado real é o genoma. O metadado é a etiqueta da caixa dizendo 'Lido num NovaSeq, em 2024, pelo LIMS do Hospital São João'. Sem metadados, o genoma perde o valor científico por falta de rastreio.",
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
        "explanation": "Gabarito: B. Formatos colunares (Parquet, Avro) são a revolução do Big Data. O Python pesca a coluna isolada em segundos e ignora as outras milhares de colunas do VCF.",
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
        "explanation": "Gabarito: B. Se a tabela tem uma coluna chamada 'ST_01', ninguém saberá o que é. O Dicionário de Dados avisa: 'ST_01 significa Status da Doença (1 Vivo, 0 Morto)'. É o mapa para os bioinformatas.",
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
        "explanation": "Gabarito: C. A LOINC padronizou as análises clínicas. Isso impede que o laboratório 1 crie 'Glc.Sng' e o laboratório 2 crie 'Açúcar Sang.', o que impossibilitaria ao computador do estado saber que ambos são exames de Glicose.",
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
        "explanation": "Gabarito: C. Outliers (pontos fora da curva/aberrantes) estragam a estatística da IA. Limpar isso garante a precisão do estudo.",
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
        "explanation": "Gabarito: B. A ontologia flui do geral para o específico. O PC pode agrupar centenas de sub-doenças (filhos) jogando-as na bacia do termo genérico pai (Anomalia do olho) para análise generalista de exoma.",
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
        "explanation": "Gabarito: C. Endpoint é a 'porta de atendimento' do servidor. Cada endpoint da API devolve uma informação diferente (ex: um endpoint dá os genomas, o outro dá o nome dos médicos).",
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
        "explanation": "Gabarito: C. O XML (Extensible Markup Language) organiza dados como etiquetas dentro de etiquetas. Foi substituído aos poucos pelo JSON na Bioinformática por ser um texto mais verboso e pesado de ler no PC.",
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
        "explanation": "Gabarito: B. Você não quer transmitir 10 terabytes do Genomas SUS para o governo todo dia. Você faz Carga Completa uma vez no ano, e no dia a dia você faz a Incremental (manda só os dados de pacientes que deram entrada naquele dia específico).",
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
        "explanation": "Gabarito: B. O SNOMED-CT é o gigante das ontologias médicas mundiais, mapeando cada termo médico com uma precisão cirúrgica de códigos para o mundo inteiro operar digitalmente a saúde dos prontuários das pessoas nas redes sem barreiras nativas e ambiguidades.",
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
        "explanation": "Gabarito: C. A mágica dos bancos Relacionais é o JOIN. É ele quem casa as informações espalhadas por mil planilhas numa visualização única e mastigada para o cientista ou o diretor médico analisar no Dashboard.",
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
        "explanation": "Gabarito: B. Silos de dados são a 'pior praga' do Big Data na Saúde. O Oncologista usa o Sistema X, o Postinho de Saúde usa o Sistema Y, e o Genoma tá na nuvem Z. Ferramentas de Interoperabilidade/ETL existem justamente para quebrar as paredes e unificar todos eles para a Saúde ser inteligente a nível Federal Global.",
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
        "explanation": "Gabarito: D. Import Pandas as pd. Essa é a primeira linha de código de 99% das ferramentas de manipulação de CSV, Data Lakes e estatísticas base ETL em Python. É ela quem manipula os chamados DataFrames turbinados da ciência moderna global.",
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
        "explanation": "A transcriptase reversa é uma DNA polimerase RNA-dependente que sintetiza cDNA a partir de RNA, fundamental para clonagem de genes expressos.",
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
        "explanation": "O splicing alternativo ocorre no processamento do pré-mRNA, permitindo que diferentes combinações de éxons gerem isoformas proteicas distintas.",
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
        "explanation": "As histonas são proteínas básicas que formam octâmeros ao redor dos quais o DNA se enrola, formando nucleossomos e controlando o acesso à cromatina.",
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
        "explanation": "A metilação de citosinas em dinucleotídeos CpG é um mecanismo epigenético chave que silencia genes quando ocorre em ilhas CpG promotoras.",
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
        "explanation": "O dogma central é DNA → RNA → Proteína, mas retrovírus e transcriptase reversa mostraram que RNA pode ser molde para DNA.",
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
        "explanation": "PacBio e Nanopore geram reads longos que atravessam regiões repetitivas, facilitando montagens e detectando grandes rearranjos estruturais.",
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
        "explanation": "Q30 = -10 log10(0,001) significa probabilidade de erro de 0,1% ou acurácia de 99,9% (1 em 1.000 bases está errada).",
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
        "explanation": "RNA-Seq de mRNA processado não deve ter reads em íntrons. Alinhamento intrônico indica DNA genômico contaminante não digerido por DNase.",
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
        "explanation": "A transposase Tn5 na Tagmentation simultaneamente fragmenta o DNA e insere adaptadores nas extremidades, acelerando o preparo de biblioteca.",
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
        "explanation": "UMIs são barcodes únicos adicionados a cada molécula original antes da amplificação, permitindo identificar duplicados de PCR e contar moléculas reais.",
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
        "explanation": "VAF ~50% é esperado para variantes heterozigotas germinativas, onde metade dos alelos vem do pai e metade da mãe (1 normal: 1 mutado).",
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
        "explanation": "VUS indica incerteza: não há evidências suficientes para determinar patogenicidade. Requer reavaliação contínua conforme dados surgem.",
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
        "explanation": "pLI (probability of Loss-of-function Intolerance) ≥0,9 indica genes onde perder uma cópia é deletério, sugerindo haploinsuficiência patogênica.",
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
        "explanation": "Nonsense no último éxon pode escapar de NMD e produzir proteína quase completa funcional, reduzindo evidência de patogenicidade.",
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
        "explanation": "O pipeline GATK germline: alinhar (BWA-MEM), marcar duplicados (Picard), recalibrar qualidade (BQSR), chamar variantes (HaplotypeCaller), filtrar (VQSR).",
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
        "explanation": "GT 0/1 = heterozigoto (0=alelo ref, 1=alelo alt). 0/0=hom ref, 1/1=hom alt, ./.=desconhecido.",
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
        "explanation": "BCFtools é uma suite para manipulação de VCF/BCF: filtrar, merge, annotate, query, stats, e operações set em variantes.",
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
        "explanation": "Docker empacota ferramentas com todas as dependências, garantindo que o pipeline rode identicamente em qualquer sistema, resolvendo 'dependency hell'.",
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
        "explanation": "Lambda (λ) compara p-values observados vs esperados. λ>1,05 indica inflação por estratificação populacional ou viés técnico a ser corrigido.",
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
        "explanation": "FDR (Benjamini-Hochberg) é menos conservador que Bonferroni, controlando a proporção de falsos positivos esperados entre descobertas, preservando poder.",
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
        "explanation": "DESeq2/edgeR usam binomial negativa para modelar counts de RNA-Seq, capturando overdispersão biológica além da variação Poisson.",
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
        "explanation": "F mede endogamia: a probabilidade de dois alelos serem idênticos por descendência. F=0,25 em primos de primeiro grau.",
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
        "explanation": "LD mede associação não-aleatória entre alelos. Loci próximos têm menos recombinação entre eles, mantendo LD alto ao longo das gerações.",
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
        "explanation": "Deriva genética (flutuação aleatória de frequências) é mais forte em populações pequenas, levando à perda de alelos e redução de diversidade.",
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
        "explanation": "Penetrância é a proporção de portadores que manifestam o fenótipo. Penetrância incompleta (< 100%) explica por que nem todos com a mutação adoecem.",
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
        "explanation": "Imprinting causa expressão monoalélica dependente da origem parental. Ex: deleção 15q11-13 paterna causa Prader-Willi, materna causa Angelman.",
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
        "explanation": "Antecipação: a expansão de trincas aumenta a cada geração, causando início mais cedo e sintomas mais graves (ex: Huntington, miotônica).",
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
        "explanation": "Idade materna avançada (>35 anos) aumenta não-disjunção meiótica, elevando risco de aneuploidias como trissomia 21.",
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
        "explanation": "Mutações em FBN1 (fibrilina-1) causam Marfan, uma doença autossômica dominante afetando tecido conectivo (aorta, olhos, esqueleto).",
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
        "explanation": "PKU é tratada com dieta baixa em fenilalanina (evitando proteínas) iniciada no período neonatal, prevenindo retardo mental.",
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
        "explanation": "Hemofilia A é recessiva ligada ao X (gene F8). Homens (XY) com alelo mutado são afetados; mulheres (XX) heterozigotas são portadoras.",
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
        "explanation": "Huntington é dominante. Expansões CAG > 36 repetições causam neurodegeneração; quanto maior a expansão, mais cedo o início (antecipação).",
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
        "explanation": "CYP2D6 metaboliza ~25% dos fármacos incluindo codeína, tamoxifeno, antidepressivos tricíclicos e antipsicóticos. Variantes alteram eficácia/toxicidade.",
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
        "explanation": "Deficiência G6PD (ligada ao X) causa hemólise quando expostos a fármacos oxidantes (antimaláricos, sulfas, aspirina em altas doses).",
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
        "explanation": "TPMT metaboliza tiopurinas (azatioprina, 6-MP). Baixa atividade TPMT causa toxicidade medular severa; requer redução de dose ou alternativa.",
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
        "explanation": "HLA-B*57:01 prediz hipersensibilidade a abacavir (~50% risco). Triagem antes de prescrever abacavir é recomendação FDA/EMA.",
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
        "explanation": "Variantes CYP2C9 afetam metabolismo e VKORC1 afeta sensibilidade à warfarina. Algoritmos farmacogenéticos ajustam dose inicial.",
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
        "explanation": "Genomas Brasil visa sequenciar genomas de brasileiros, construir banco de dados de variantes nacionais, e fomentar medicina de precisão no SUS.",
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
        "explanation": "CONITEC faz avaliação de tecnologias em saúde (HTA) considerando evidências clínicas, econômicas e impacto antes de recomendar incorporação no SUS.",
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
        "explanation": "RENAME lista medicamentos essenciais baseados em evidências e custo-efetividade para guiar compras públicas e garantir acesso a tratamentos básicos.",
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
        "explanation": "A política estrutura atenção às doenças raras em rede: atenção básica, serviços especializados, e centros de referência com diagnóstico e tratamento.",
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
        "explanation": "PALC (Programa de Acreditação de Laboratórios Clínicos), DICQ e CAP (College of American Pathologists) certificam qualidade laboratorial.",
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
        "explanation": "Os ribossomos são as máquinas moleculares que realizam tradução, lendo códons do mRNA e polimerizando aminoácidos.",
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
        "explanation": "Gel de agarose, TapeStation, Bioanalyzer mostram integridade (DNA íntegro = banda alta, degradado = smear).",
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
        "explanation": "Adapter dimers (adaptadores ligados sem insert) competem com bibliotecas reais e reduzem eficiência. Removidos por size selection.",
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
        "explanation": "VCF (Variant Call Format) é padrão para representar variantes: CHROM, POS, ID, REF, ALT, QUAL, FILTER, INFO, FORMAT, samples.",
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
        "explanation": "Variantes em GT-AG (splice donor/acceptor) alteram splicing, gerando transcritos aberrantes com frameshift ou skip de éxons.",
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
        "explanation": "bedtools intersect identifica overlaps entre features genômicas (ex: variantes em BED de genes alvo).",
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
        "explanation": "Tipo I: rejeitar H0 verdadeira (achar associação falsa). Tipo II: não rejeitar H0 falsa (perder associação real). Alfa controla tipo I.",
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
        "explanation": "FST quantifica estruturação: FST=0 (sem diferenciação), FST alto (populações divergentes). Wright's FST=(HT-HS)/HT.",
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
        "explanation": "Prader-Willi: perda da região 15q11-q13 paterna (deleção ~70%, UPD materna ~25%). Hipotonia neonatal, hiperfagia, obesidade.",
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
        "explanation": "CYP2C19 metaboliza clopidogrel (pró-droga), omeprazol, antidepressivos. *2/*2 (poor metabolizer) tem risco de trombose com clopidogrel.",
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
        "explanation": "Mutações driver (oncogenes ativados, supressores inativados) são selecionadas e dirigem oncogênese. Passenger: neutras, acumuladas passivamente.",
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
        "explanation": "Judicialização: pacientes recorrem à Justiça para acesso a tecnologias não incorporadas no SUS, impactando orçamento e equidade.",
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
        "explanation": "Compartilhamento responsável: consentimento amplo/tiered, anonimização/pseudonimização, acesso controlado (DAC), auditorias, LGPD compliance.",
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
        "explanation": "Boas práticas garantem qualidade, segurança e conformidade regulatória em todos os processos.",
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
        "explanation": "Boas práticas garantem qualidade, segurança e conformidade regulatória em todos os processos.",
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
        "explanation": "Boas práticas garantem qualidade, segurança e conformidade regulatória em todos os processos.",
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
        "explanation": "Boas práticas garantem qualidade, segurança e conformidade regulatória em todos os processos.",
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
        "explanation": "Boas práticas garantem qualidade, segurança e conformidade regulatória em todos os processos.",
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
        "explanation": "Boas práticas garantem qualidade, segurança e conformidade regulatória em todos os processos.",
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
        "explanation": "Boas práticas garantem qualidade, segurança e conformidade regulatória em todos os processos.",
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
        "explanation": "Boas práticas garantem qualidade, segurança e conformidade regulatória em todos os processos.",
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
        "explanation": "Boas práticas garantem qualidade, segurança e conformidade regulatória em todos os processos.",
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
        "explanation": "Boas práticas garantem qualidade, segurança e conformidade regulatória em todos os processos.",
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
        "explanation": "Boas práticas garantem qualidade, segurança e conformidade regulatória em todos os processos.",
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
        "explanation": "Boas práticas garantem qualidade, segurança e conformidade regulatória em todos os processos.",
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
        "explanation": "Boas práticas garantem qualidade, segurança e conformidade regulatória em todos os processos.",
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
    }
];
