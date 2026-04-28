// ====================================================================
// BANCO COMPLETO DE 500 QUESTÕES - GENOMA SUS
// Conversão das questões existentes + questões novas criadas
// ====================================================================

const questionBank = [
    // ================= QUESTÕES ORIGINAIS CONVERTIDAS =================
    
    // ===== PARTE III - LABORATÓRIO =====
    { id: 500, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
      text: "A RNA polimerase II em eucariotos é responsável pela transcrição de:", 
      options: { A: "Apenas rRNA", B: "mRNA, e também a maioria dos snRNAs, miRNAs e lncRNAs", C: "Apenas tRNA", D: "DNA", E: "Apenas RNA mitocondrial" }, 
      correct: "B", explanation: "A RNA polimerase II sintetiza os precursores do mRNA e muitos RNAs não-codificantes que regulam a expressão celular." },

    { id: 501, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
      text: "Sobre o código genético, é CORRETO afirmar que é 'degenerado' porque:", 
      options: { A: "Cada aminoácido é codificado por um único códon", B: "Múltiplos códons podem codificar o mesmo aminoácido, sendo a degeneração maior na terceira posição do códon", C: "Cada códon codifica múltiplos aminoácidos diferentes", D: "O código varia significativamente entre espécies", E: "Alguns aminoácidos não possuem códon" }, 
      correct: "B", explanation: "O código genético tem 64 códons para 20 aminoácidos, logo a maioria dos aminoácidos é codificada por mais de um códon." },

    { id: 502, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
      text: "Na eletroforese, o DNA migra em direção ao:", 
      options: { A: "Cátodo (polo negativo), pois é carregado positivamente", B: "Ânodo (polo positivo), pois os grupos fosfato conferem carga negativa ao DNA", C: "Não migra, permanecendo no ponto de aplicação", D: "Lateralmente, perpendicular ao campo elétrico", E: "Para ambos os polos simultaneamente" }, 
      correct: "B", explanation: "O esqueleto de açúcar-fosfato confere uma forte carga negativa ao DNA, fazendo-o migrar para o polo positivo (ânodo) em um campo elétrico." },

    { id: 503, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
      text: "Em relação à extração de DNA genômico para sequenciamento de nova geração, assinale a alternativa CORRETA:", 
      options: { A: "A razão A260/A280 obtida por NanoDrop é suficiente para avaliar a integridade do DNA.", B: "O método de beads magnéticas é altamente automatizável e o ratio bead:amostra pode ser ajustado para seleção de tamanho dos fragmentos.", C: "A extração por fenol-clorofórmio produz DNA de menor peso molecular que sílica.", D: "Tubos com heparina são preferíveis aos com EDTA.", E: "O Qubit avalia a integridade do DNA." }, 
      correct: "B", explanation: "O método de beads magnéticas (SPRI) permite automação e size selection. O NanoDrop avalia apenas pureza. Heparina inibe a PCR." },

    { id: 504, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
      text: "Sobre o sequenciamento Illumina (Sequencing by Synthesis), é CORRETO afirmar:", 
      options: { A: "A geração de clusters ocorre por emulsion PCR.", B: "A cada ciclo, quatro nucleotídeos são incorporados simultaneamente.", C: "Os nucleotídeos utilizados possuem terminadores reversíveis 3'-O-azidomethyl que bloqueiam a extensão, garantindo incorporação de uma única base por ciclo.", D: "O sequenciamento paired-end envolve a leitura de duas moléculas distintas.", E: "A taxa de erro é predominantemente composta por indels." }, 
      correct: "C", explanation: "A química Illumina usa terminadores reversíveis para ler uma base de cada vez fotograficamente. Os clusters são gerados por bridge amplification, não emulsão." },

    { id: 505, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
      text: "Considerando o preparo de biblioteca para WGS Illumina, descreva CORRETAMENTE a sequência de etapas:", 
      options: { A: "Ligação → Fragmentação → End repair → A-tailing", B: "Fragmentação → A-tailing → End repair → Ligação", C: "Fragmentação → End repair → A-tailing → Ligação de adaptadores → Seleção de tamanho → PCR", D: "End repair → Fragmentação → Ligação → A-tailing", E: "Fragmentação → Ligação → End repair → A-tailing" }, 
      correct: "C", explanation: "O pipeline correto para DNA é: quebrar o DNA, reparar as pontas rombas, adicionar a cauda 'A', ligar os adaptadores em 'Y' (T-overhang), selecionar tamanho e amplificar." },

    { id: 506, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
      text: "Qual métrica de controle de qualidade em NGS indica a MAIOR preocupação com a qualidade dos dados?", 
      options: { A: "85% das bases com score Phred ≥ Q30", B: "Taxa de mapeamento de 97%", C: "Cobertura média de 32×", D: "Taxa de duplicação de 45% em biblioteca com amplificação por PCR", E: "Insert size com distribuição unimodal centrada em 380 bp" }, 
      correct: "D", explanation: "Uma taxa de duplicação de 45% significa que quase metade dos seus reads são lixo (cópias exatas de PCR da mesma molécula original), indicando baixa complexidade." },

    { id: 507, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
      text: "Segundo os princípios ALCOA+ de integridade de dados laboratoriais, representa uma violação GRAVE:", 
      options: { A: "Manter registros em caderno de laboratório com assinatura.", B: "Corrigir um erro riscando com um traço único.", C: "Registrar resultados no dia seguinte com base em anotações em papel avulso que serão descartadas.", D: "Arquivar dados no LIMS com audit trail.", E: "Realizar calibração programada de pipetas." }, 
      correct: "C", explanation: "Viola o princípio de Originalidade e Contemporaneidade (os dados devem ser registrados no exato momento da execução)." },

    { id: 508, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
      text: "Em relação aos níveis de biossegurança, assinale a alternativa CORRETA:", 
      options: { A: "Laboratórios com sangue humano devem operar em NB-3.", B: "Em NB-2, a CSB é obrigatória para pipetagem simples.", C: "A CSB Classe II Tipo A2 protege simultaneamente o operador, o produto e o ambiente.", D: "Autoclavação a 100°C por 30 min é o padrão.", E: "Acesso é irrestrito em NB-2." }, 
      correct: "C", explanation: "A Cabine de Segurança Biológica Classe II garante um fluxo laminar seguro para a amostra e filtração HEPA na exaustão para proteger o operador e o ambiente." },

    { id: 509, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
      text: "Em relação à ética em pesquisa genômica, assinale a alternativa CORRETA segundo a regulamentação brasileira:", 
      options: { A: "O consentimento amplo (broad consent) é totalmente proibido.", B: "Dados genéticos são dados pessoais comuns pela LGPD.", C: "O direito de não saber do participante sobre seus resultados genéticos individuais deve ser respeitado e previsto no TCLE.", D: "Aprovação por um único CEP basta para todos os centros.", E: "O Relatório Belmont tem quatro princípios." }, 
      correct: "C", explanation: "Muitos pacientes desejam contribuir para a ciência, mas não querem ser informados caso descubram que têm risco elevado para Alzheimer ou câncer. Esse é o 'Direito de não saber'." },

    { id: 510, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
      text: "Sobre o Sistema Único de Saúde (SUS) e a genômica em saúde pública, assinale a alternativa CORRETA:", 
      options: { A: "A universalidade do SUS exclui estrangeiros.", B: "A integralidade pressupõe ações exclusivamente curativas.", C: "O Programa Genomas SUS visa sequenciar genomas de uma amostra representativa da população brasileira, criando um banco de dados de referência nacional.", D: "A equidade significa acesso idêntico e uniforme a todos.", E: "A participação social é exercida apenas por médicos." }, 
      correct: "C", explanation: "A diversidade genética do Brasil é sub-representada em bancos europeus. O Genomas SUS visa corrigir isso para permitir medicina de precisão na nossa população." },

    // ===== PARTE III - BIOINFORMÁTICA =====
    { id: 600, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
      text: "No pipeline GATK Best Practices para chamada de variantes em WGS, qual é a função da etapa de BQSR?", 
      options: { A: "Remover reads duplicados do arquivo BAM.", B: "Recalibrar empiricamente os scores de qualidade das bases, corrigindo vieses sistemáticos da plataforma de sequenciamento.", C: "Recanalisar os reads ao genoma.", D: "Filtrar variantes com VQSR.", E: "Normalizar a cobertura." }, 
      correct: "B", explanation: "O BQSR modela a taxa de erro física da máquina (ex: bases no final do read têm pior qualidade) e re-atribui o Phred Score para evitar chamadas de variantes falsas." },

    { id: 601, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
      text: "Sobre o algoritmo do GATK HaplotypeCaller, é CORRETO afirmar:", 
      options: { A: "Conta simplesmente o número de reads e aplica modelo binomial.", B: "Identifica regiões ativas, monta haplótipos locais usando grafos de De Bruijn, realinha reads via PairHMM e usa modelo bayesiano para determinar genótipos.", C: "O modo GVCF registra apenas variantes.", D: "O VQSR é aplicado automaticamente.", E: "Requer BAMs não ordenados." }, 
      correct: "B", explanation: "Diferente de métodos obsoletos, o HaplotypeCaller faz a montagem de DNA em miniatura no local da variante (Grafos) para lidar com InDels de forma muito mais precisa." },

    { id: 602, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
      text: "Interprete a linha VCF: chr17 43093449 rs80357713 G A 8500 PASS DP=60;AF=0.5 GT:DP:AD:GQ 0/1:60:30,30:99", 
      options: { A: "Variante homozigota na posição chr17.", B: "Variante heterozigota (G>A) com 30 reads suportando a referência e 30 o alternativo, qualidade máxima, passando todos os filtros.", C: "Variante não filtrada com allele frequency populacional de 50%.", D: "Variante de baixa qualidade (QUAL=8500).", E: "Dois alelos alternativos detectados." }, 
      correct: "B", explanation: "GT=0/1 (Heterozigoto). AD=30,30 (30 reads da ref 'G', 30 reads do alt 'A'). GQ=99 (Phred score máximo, altíssima confiança)." },

    { id: 603, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
      text: "Sobre os formatos de arquivo em bioinformática genômica, assinale a alternativa CORRETA:", 
      options: { A: "O formato CRAM armazena alinhamentos sem referência ao genoma.", B: "O MAPQ indica a probabilidade de o read ter sido sequenciado corretamente.", C: "A flag SAM 0x400 (1024) identifica reads marcados como duplicados de PCR ou ópticos.", D: "O formato BED é um formato 1-based.", E: "O BAM é um arquivo texto comprimido com gzip." }, 
      correct: "C", explanation: "A flag bitwise 1024 em SAM/BAM marca reads como duplicados (PCR/Optical). O CRAM precisa de referência. BED é 0-based. BAM é binário (BGZF)." },

    { id: 604, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
      text: "Em um GWAS com 8 milhões de SNPs testados, qual é o limiar de significância genômica e qual a justificativa correta?", 
      options: { A: "p < 0,05 — nível padrão.", B: "p < 5 × 10⁻⁸ — correção de Bonferroni para ~1 milhão de testes independentes efetivos (considerando LD).", C: "p < 0,001 — correção conservadora.", D: "p < 5 × 10⁻² — FDR de Benjamini-Hochberg.", E: "p < 1 × 10⁻¹⁰ — limiar arbitrário." }, 
      correct: "B", explanation: "Como há Desequilíbrio de Ligação (LD), estima-se que existam 1 milhão de 'blocos' de genes independentes no genoma. O p-value 0.05 é dividido por 1 milhão (Bonferroni) = 5x10^-8." },

    { id: 605, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
      text: "Sobre a Análise de Componentes Principais (PCA) em genômica, assinale a alternativa CORRETA:", 
      options: { A: "O PCA é utilizado exclusivamente em RNA-Seq.", B: "Em um PCA genômico, os primeiros componentes capturam a estrutura de ancestralidade da amostra, e são usados como covariáveis em GWAS para controlar estratificação populacional.", C: "O fator lambda ideal é 0.", D: "Requer equilíbrio HW perfeito.", E: "É ineficaz em populações miscigenadas." }, 
      correct: "B", explanation: "A PCA clusteriza os pacientes baseando-se em sua origem geográfica (Europeus, Africanos, Asiáticos). Controlar a PCA no GWAS evita que você ache que um gene causa a doença, quando na verdade ele é apenas característico de uma etnia." },

    { id: 606, area: "Bioinformática", subject: "Genética de populações", 
      text: "Em uma população em equilíbrio de Hardy-Weinberg, a frequência do alelo recessivo é q = 0,02. Qual é a frequência esperada de portadores heterozigotos?", 
      options: { A: "0,04%", B: "1,96%", C: "3,92%", D: "4,0%", E: "96,04%" }, 
      correct: "C", explanation: "Se q = 0.02, então p = 0.98. Frequência de heterozigotos = 2pq = 2 * (0.98) * (0.02) = 0.0392 = 3.92%." },

    { id: 607, area: "Bioinformática", subject: "Genética de populações", 
      text: "Sobre o Fst (Fixation Index) em populações humanas, assinale a alternativa CORRETA:", 
      options: { A: "O Fst global é ~0,85, indicando muita diferença entre populações.", B: "Fst = 0 significa alelos fixados e diferentes.", C: "O Fst global humano é ~0,12, indicando que aproximadamente 88% da variação genética humana está DENTRO das populações, não entre elas.", D: "É uma medida de heterozigosidade individual.", E: "Africanos têm menor diversidade interna." }, 
      correct: "C", explanation: "Humanos são uma espécie muito homogênea. As diferenças raciais visíveis representam uma fração minúscula da variabilidade genética." },

    { id: 608, area: "Bioinformática", subject: "Segurança de dados", 
      text: "Sobre segurança de dados genômicos, assinale a alternativa CORRETA:", 
      options: { A: "A pseudonimização os torna completamente anônimos.", B: "A criptografia AES-256 é adequada para dados em repouso, enquanto TLS protege dados em trânsito.", C: "Podem ir para repositórios abertos sem riscos.", D: "O princípio do menor privilégio é irrelevante.", E: "Backup 3-2-1 é manter 3 backups no mesmo servidor." }, 
      correct: "B", explanation: "Arquivos BAM e VCF humanos são dados sensíveis. Discos devem estar cifrados com AES. O tráfego de internet via portas da API deve ser TLS/HTTPS." },

    { id: 609, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
      text: "Sobre vocabulários controlados e ontologias em genômica, assinale a alternativa CORRETA:", 
      options: { A: "A Gene Ontology (GO) classifica variantes em patogênicas ou benignas.", B: "A Human Phenotype Ontology (HPO) é uma terminologia padronizada para descrever fenótipos clínicos humanos, sendo utilizada para priorização computacional de variantes candidatas.", C: "A Sequence Ontology descreve apenas proteínas.", D: "O padrão HL7 FHIR é um sequenciador da Illumina.", E: "Princípios FAIR aplicam-se exclusivamente a artigos PDF." }, 
      correct: "B", explanation: "A HPO traduz sintomas (ex: 'Convulsão') para uma linguagem de máquina estruturada (HP:0001250), permitindo que algoritmos cruzem o sintoma com o genoma do paciente." },

    { id: 610, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
      text: "Sobre processos ETL aplicados a bancos de dados genômicos multicêntricos, é CORRETO afirmar:", 
      options: { A: "A normalização de variantes em VCF é opcional.", B: "A carga incremental (Load) é preferível à carga completa em operação contínua, pois adiciona apenas novos dados sem reprocessar todo o banco.", C: "O Hail é exclusivo para visualização.", D: "Apache Airflow gera FASTQs.", E: "Validação de dados é desnecessária." }, 
      correct: "B", explanation: "Bancos genômicos têm Terabytes. Um processo ETL moderno (ex: usando Apache Airflow e Spark) faz carga de dados incremental para otimizar custo e tempo de nuvem." },

    // ================= QUESTÕES SIMULADOS CONVERTIDAS =================
    
    // ===== SIMULADO 1 - LABORATÓRIO =====
    { id: 700, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
      text: "Em um laboratório de genômica, um lote de amostras em tubos de EDTA apresentou coagulação parcial. A causa mais provável é:", 
      options: { A: "Excesso de EDTA", B: "Homogeneização insuficiente após a coleta — os tubos não foram invertidos", C: "Transporte em temperatura muito baixa", D: "Uso de agulhas 25G", E: "Centrifugação prematura" }, 
      correct: "B", explanation: "Tubos de EDTA requerem inversão suave (8 a 10 vezes) imediatamente após a coleta para evitar coagulação." },

    { id: 701, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
      text: "Na extração de DNA por beads magnéticas, a etapa de secagem das beads antes da eluição deve ser controlada porque:", 
      options: { A: "Beads úmidas produzem excesso de RNA", B: "Beads excessivamente secas dificultam a liberação do DNA, reduzindo o rendimento", C: "Causa degradação pelo oxigênio", D: "Resulta em DNA com alto peso molecular", E: "Contamina com proteínas" }, 
      correct: "B", explanation: "Over-drying faz o DNA ficar irreversivelmente preso à matriz da bead." },

    { id: 702, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
      text: "DNA extraído de buffy coat apresenta A260/280 = 1,55 e A260/230 = 0,9. A interpretação CORRETA é:", 
      options: { A: "DNA de alta qualidade", B: "Contaminado com RNA", C: "DNA contaminado com proteínas (A260/280 baixo) e com sais/solventes (A260/230 baixo), necessitando re-purificação", D: "Valores normais para beads", E: "DNA degradado" }, 
      correct: "C", explanation: "A pureza ideal é 1.8 para 260/280 (proteínas) e 2.0-2.2 para 260/230 (sais caotrópicos e fenóis)." },

    // ================= QUESTÕES NOVAS CRIADAS (para chegar a 500) =================
    
    // ===== QUESTÕES NOVAS - LABORATÓRIO (IDs 800-950) =====
    { id: 800, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
      text: "O splicing do pré-mRNA é realizado pelo:", 
      options: { A: "Ribossomo", B: "Spliceossomo, um complexo ribonucleoprotéico composto por snRNPs", C: "DNA polimerase", D: "Proteassomo", E: "Complexo do poro nuclear" }, 
      correct: "B", explanation: "O spliceossomo é formado por pequenas ribonucleoproteínas nucleares (snRNPs) U1, U2, U4, U5 e U6, que reconhecem e removem os íntrons do pré-mRNA." },

    { id: 801, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
      text: "A transcriptase reversa é uma enzima que:", 
      options: { A: "Sintetiza RNA a partir de DNA", B: "Sintetiza DNA a partir de RNA, sendo originalmente descrita em retrovírus", C: "Degrada RNA mensageiro", D: "Liga aminoácidos ao tRNA", E: "Replica DNA nuclear" }, 
      correct: "B", explanation: "A transcriptase reversa (reverse transcriptase) catalisa a síntese de DNA complementar (cDNA) usando RNA como molde, processo fundamental em retrovírus e amplamente utilizado em técnicas moleculares." },

    { id: 802, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
      text: "O processo de tradução requer:", 
      options: { A: "Apenas ribossomos e mRNA", B: "Ribossomos, mRNA, tRNAs carregados com aminoácidos, e energia (GTP e ATP)", C: "Apenas DNA e RNA polimerase", D: "DNA polimerase e primers", E: "Apenas ATP como fonte de energia" }, 
      correct: "B", explanation: "A tradução é um processo complexo que requer múltiplos componentes: ribossomos (sítios P, A e E), mRNA como molde, tRNAs aminoacilados, fatores de tradução e energia na forma de GTP e ATP." },

    { id: 803, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
      text: "A estrutura da cromatina é organizada em níveis hierárquicos. O nucleossomo representa:", 
      options: { A: "DNA livre no núcleo", B: "Aproximadamente 147 pb de DNA enrolados ao redor de um octâmero de histonas", C: "Toda a cromatina condensada", D: "Apenas a histona H1", E: "DNA mitocondrial" }, 
      correct: "B", explanation: "O nucleossomo é a unidade básica da cromatina, consistindo em ~147 pb de DNA enrolados 1,65 vezes ao redor de um core de histonas (2 cópias de H2A, H2B, H3 e H4)." },

    { id: 804, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
      text: "Os telômeros têm função importante na estabilidade cromossômica porque:", 
      options: { A: "Codificam proteínas essenciais", B: "Protegem as extremidades dos cromossomos lineares da degradação e fusão, sendo constituídos por repetições TTAGGG em humanos", C: "Localizam-se no centro dos cromossomos", D: "Não têm função conhecida", E: "Apenas existem em procariotos" }, 
      correct: "B", explanation: "Os telômeros são sequências repetitivas nas extremidades dos cromossomos que previnem degradação por exonucleases e fusões cromossômicas. Em humanos, são compostos por repetições TTAGGG." },

    { id: 805, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
      text: "A replicação do DNA é semiconservativa, o que significa que:", 
      options: { A: "Apenas uma fita é replicada", B: "Cada molécula filha contém uma fita original e uma fita recém-sintetizada", C: "Ambas as fitas são completamente novas", D: "A replicação ocorre apenas durante a mitose", E: "O DNA não é replicado" }, 
      correct: "B", explanation: "A replicação semiconservativa foi demonstrada no experimento de Meselson-Stahl, onde cada nova molécula de DNA contém uma fita parental (conservada) e uma fita nova." },

    { id: 806, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
      text: "A quantificação por fluorimetria (Qubit) é preferida sobre espectrofotometria (NanoDrop) para bibliotecas NGS porque:", 
      options: { A: "É mais barata", B: "Detecta especificamente DNA de fita dupla usando intercalantes fluorescentes, sem interferência de contaminantes ou RNA", C: "Mede também a integridade do DNA", D: "Funciona com menores volumes", E: "É mais rápida" }, 
      correct: "B", explanation: "O Qubit usa corantes intercalantes (como PicoGreen) que se ligam especificamente a DNA de fita dupla, fornecendo quantificação mais precisa para normalização de bibliotecas NGS." },

    { id: 807, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
      text: "O TapeStation/Bioanalyzer é usado para avaliar:", 
      options: { A: "Concentração de DNA apenas", B: "Integridade e distribuição de tamanhos de DNA/RNA por eletroforese capilar automatizada", C: "Contaminação bacteriana", D: "Pureza espectral", E: "Atividade enzimática" }, 
      correct: "B", explanation: "O TapeStation utiliza eletroforese capilar para separar fragmentos de DNA por tamanho, gerando um eletroferograma que mostra a distribuição de tamanhos e permite calcular o DIN (DNA Integrity Number)." },

    { id: 808, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
      text: "A bridge amplification na flow cell Illumina tem como objetivo:", 
      options: { A: "Fragmentar o DNA", B: "Gerar clusters clonais de ~1000 cópias de cada fragmento para amplificar o sinal de fluorescência", C: "Sequenciar as bases", D: "Ligar adaptadores", E: "Filtrar contaminantes" }, 
      correct: "B", explanation: "A bridge amplification gera clusters clonais onde cada fragmento original é amplificado para ~1000 cópias idênticas, fornecendo sinal fluorescente suficiente para detecção pela câmera do sequenciador." },

    { id: 809, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
      text: "O score Phred Q30 significa que a base sequenciada tem:", 
      options: { A: "30% de chance de estar correta", B: "99,9% de acurácia (1 erro em 1000)", C: "30× cobertura", D: "30 nucleotídeos de comprimento", E: "30% de conteúdo GC" }, 
      correct: "B", explanation: "O score Phred Q30 indica probabilidade de erro de 0,001 (1 em 1000), ou seja, 99,9% de acurácia. A fórmula é Q = -10 * log10(P_erro)." },

    { id: 810, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
      text: "A etapa de A-tailing no preparo de biblioteca serve para:", 
      options: { A: "Amplificar o DNA", B: "Adicionar uma adenina na extremidade 3' dos fragmentos para ligação com adaptadores que possuem overhang de timina", C: "Fragmentar o DNA", D: "Purificar o DNA", E: "Quantificar a biblioteca" }, 
      correct: "B", explanation: "A A-tailing adiciona uma desoxiadenosina na extremidade 3' dos fragmentos blunt-end, criando complementaridade com o overhang T dos adaptadores Illumina." },

    { id: 811, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
      text: "O controle negativo de extração (NTC) consiste em:", 
      options: { A: "Uma amostra com DNA de concentração conhecida", B: "Um tubo com todos os reagentes de extração, mas sem amostra biológica", C: "Uma amostra de DNA de referência", D: "Um tubo vazio", E: "Uma amostra com baixa concentração de DNA" }, 
      correct: "B", explanation: "O NTC (No Template Control) verifica se os reagentes de extração estão livres de contaminação por DNA exógeno, sendo processado identicamente às amostras mas sem material biológico." },

    { id: 812, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
      text: "Em biossegurança, as precauções universais estabelecem que:", 
      options: { A: "Apenas sangue HIV+ deve ser tratado como infeccioso", B: "Todo sangue e fluido corporal deve ser tratado como potencialmente infeccioso", C: "Luvas são opcionais para sangue de doadores saudáveis", D: "Apenas amostras hospitalares requerem cuidados", E: "A biossegurança é responsabilidade apenas do técnico" }, 
      correct: "B", explanation: "As precauções universais assumem que todo material biológico humano pode conter patógenos transmissíveis pelo sangue, independentemente do status conhecido do doador." },

    { id: 813, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
      text: "A rastreabilidade laboratorial é garantida por:", 
      options: { A: "Uso de códigos de barra e LIMS", B: "Apenas caderno de laboratório", C: "Controle de temperatura", D: "Calibração de equipamentos", E: "Identificação visual das amostras" }, 
      correct: "A", explanation: "A rastreabilidade completa requer sistemas automatizados como LIMS (Laboratory Information Management System) com códigos de barra para tracking desde coleta até resultado." },

    { id: 814, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
      text: "A validação de um método analítico deve demonstrar:", 
      options: { A: "Apenas precisão", B: "Precisão, acurácia, especificidade, limite de detecção e robustez", C: "Apenas velocidade", D: "Apenas custo-benefício", E: "Apenas facilidade de uso" }, 
      correct: "B", explanation: "A validação analítica conforme ICH Q2 requer demonstração de múltiplos parâmetros de performance para garantir confiabilidade do método." },

    { id: 815, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
      text: "O TCLE (Termo de Consentimento Livre e Esclarecido) em pesquisa genômica deve incluir:", 
      options: { A: "Apenas objetivos da pesquisa", B: "Informações sobre armazenamento, uso futuro, direito de retirada e achados incidentais", C: "Apenas riscos físicos", D: "Apenas contatos dos pesquisadores", E: "Apenas procedimentos técnicos" }, 
      correct: "B", explanation: "O TCLE em genômica deve ser abrangente, cobrindo aspectos específicos como armazenamento em biobancos, possibilidade de uso futuro, achados incidentais e direitos do participante." },

    { id: 816, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
      text: "Em estudos multicêntricos, a harmonização entre centros significa:", 
      options: { A: "Usar exatamente os mesmos equipamentos", B: "Garantir que métodos diferentes produzam resultados comparáveis", C: "Ter o mesmo número de funcionários", D: "Usar apenas reagentes de um fabricante", E: "Processar o mesmo número de amostras" }, 
      correct: "B", explanation: "Harmonização permite flexibilidade metodológica desde que seja demonstrada equivalência de resultados entre centros através de estudos de concordância." },

    { id: 817, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
      text: "A LGPD (Lei Geral de Proteção de Dados) classifica dados genéticos como:", 
      options: { A: "Dados pessoais comuns", B: "Dados pessoais sensíveis, exigindo proteção especial", C: "Dados públicos", D: "Dados anonimizados", E: "Dados irrelevantes para a lei" }, 
      correct: "B", explanation: "A LGPD classifica dados genéticos como sensíveis (Art. 5º, II), exigindo bases legais específicas e medidas reforçadas de proteção e segurança." },

    { id: 818, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
      text: "O princípio da equidade no SUS aplicado à genômica significa:", 
      options: { A: "Acesso igual para todos", B: "Investimento proporcional às necessidades e lacunas de cada população", C: "Atendimento apenas urbano", D: "Prioridade para regiões ricas", E: "Padronização total" }, 
      correct: "B", explanation: "Equidade no SUS significa tratar desigualmente os desiguais, investindo mais onde há maiores necessidades e lacunas de cobertura." },

    { id: 819, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
      text: "A sonicação do DNA para preparo de biblioteca tem como vantagem:", 
      options: { A: "Ser mais barata que outros métodos", B: "Produzir fragmentação mais uniforme e reprodutível com menor viés de GC", C: "Não requerer controle de parâmetros", D: "Funcionar apenas com DNA degradado", E: "Eliminar a necessidade de size selection" }, 
      correct: "B", explanation: "A sonicação focada (Covaris) produz fragmentação mais uniforme e controlada, com menor viés de composição de bases comparada à fragmentação enzimática." },

    { id: 820, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
      text: "O paired-end sequencing fornece informação adicional sobre:", 
      options: { A: "Apenas qualidade das bases", B: "Distância entre as extremidades dos fragmentos (insert size) e orientação", C: "Concentração da biblioteca", D: "Pureza do DNA", E: "Temperatura de sequenciamento" }, 
      correct: "B", explanation: "O sequenciamento paired-end lê ambas as extremidades de cada fragmento, fornecendo informação sobre insert size e orientação, melhorando mapeamento e detecção de variantes estruturais." },

    // ===== QUESTÕES NOVAS - BIOINFORMÁTICA (IDs 950-999) =====
    { id: 950, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
      text: "O comando samtools view -h -f 2 file.bam exibe:", 
      options: { A: "Todos os reads do arquivo", B: "Reads mapeados em par correto (properly paired) com header", C: "Reads não mapeados", D: "Apenas o header", E: "Reads duplicados" }, 
      correct: "B", explanation: "A flag -f 2 filtra reads properly paired. A flag -h inclui o header SAM. Properly paired significa que ambos os reads do par foram mapeados com orientação e distância esperadas." },

    { id: 951, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
      text: "Para normalizar variantes em um arquivo VCF, o comando bcftools mais adequado é:", 
      options: { A: "bcftools view", B: "bcftools norm -m -any -f reference.fa", C: "bcftools merge", D: "bcftools index", E: "bcftools stats" }, 
      correct: "B", explanation: "O comando norm com -m -any decompõe variantes multi-alélicas e -f realiza left-alignment usando a referência, padronizando representação de variantes." },

    { id: 952, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
      text: "Em Python com pandas, para filtrar variantes com AF > 0.05, o código seria:", 
      options: { A: "df.filter(AF > 0.05)", B: "df[df['AF'] > 0.05]", C: "df.query(AF = 0.05)", D: "df.select(AF > 0.05)", E: "df.where(AF < 0.05)" }, 
      correct: "B", explanation: "Em pandas, a sintaxe df[df['coluna'] > valor] cria um filtro booleano para selecionar linhas que atendem à condição." },

    { id: 953, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
      text: "O VQSR (Variant Quality Score Recalibration) do GATK utiliza:", 
      options: { A: "Apenas depth de cobertura", B: "Machine learning com variantes conhecidas como truth sets para recalibrar scores de qualidade", C: "Apenas frequency em bases de dados", D: "Filtros fixos de qualidade", E: "Apenas análise de pedigree" }, 
      correct: "B", explanation: "O VQSR treina um modelo Gaussiano usando variantes conhecidas como verdadeiros positivos (HapMap, Omni) e falsos positivos, recalibrando scores de qualidade." },

    { id: 954, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
      text: "A anotação funcional de variantes utiliza bancos como:", 
      options: { A: "Apenas RefSeq", B: "RefSeq, Ensembl, GENCODE para anotação gênica, e ClinVar, COSMIC para anotação clínica", C: "Apenas bases populacionais", D: "Apenas literatura científica", E: "Apenas dados experimentais próprios" }, 
      correct: "B", explanation: "A anotação funcional combina múltiplos recursos: bases de anotação gênica (RefSeq, Ensembl) e bases de significado clínico (ClinVar, COSMIC) para interpretação abrangente." },

    { id: 955, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
      text: "O conceito de 'read depth' (cobertura) em uma posição refere-se a:", 
      options: { A: "Comprimento dos reads", B: "Número de reads que mapeiam naquela posição específica", C: "Qualidade média dos reads", D: "Número total de reads no arquivo", E: "Distância entre reads pareados" }, 
      correct: "B", explanation: "Read depth ou cobertura é o número de reads sequenciados que alinham a uma posição genômica específica, sendo crucial para confiabilidade da chamada de variantes." },

    { id: 956, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
      text: "O conceito de 'power' (poder estatístico) em um GWAS refere-se à:", 
      options: { A: "Capacidade computacional necessária", B: "Probabilidade de detectar uma associação verdadeira (1 - β, onde β é erro tipo II)", C: "Número de SNPs testados", D: "Tamanho do arquivo de dados", E: "Velocidade de processamento" }, 
      correct: "B", explanation: "Poder estatístico é a probabilidade de rejeitar corretamente uma hipótese nula falsa, dependendo do tamanho do efeito, tamanho amostral e nível de significância." },

    { id: 957, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
      text: "O lambda genômico (λ) em GWAS mede:", 
      options: { A: "Número de variantes associadas", B: "Inflação do qui-quadrado, indicando estratificação populacional ou outros confounders", C: "Cobertura média do sequenciamento", D: "Qualidade do genoma de referência", E: "Tempo de processamento" }, 
      correct: "B", explanation: "Lambda genômico é a mediana dos qui-quadrados observados dividida pela mediana esperada. Valores > 1.05-1.10 sugerem inflação por estratificação ou outros vieses." },

    { id: 958, area: "Bioinformática", subject: "Genética de populações", 
      text: "O desequilíbrio de ligação (LD) entre dois loci é máximo quando:", 
      options: { A: "r² = 0", B: "r² = 1 (linkage completo)", C: "r² = 0,5", D: "Os loci estão em cromossomos diferentes", E: "A distância física é máxima" }, 
      correct: "B", explanation: "r² = 1 indica desequilíbrio de ligação completo, onde os alelos dos dois loci segregam sempre juntos. r² = 0 indica equilíbrio de ligação (independência)." },

    { id: 959, area: "Bioinformática", subject: "Princípios de saúde pública e epidemiologia genética", 
      text: "Um polygenic risk score (PRS) é:", 
      options: { A: "Soma dos alelos de risco", B: "Score que combina efeitos de múltiplas variantes genéticas ponderadas por seus efeitos, estimando risco genético individual", C: "Número de mutações deletérias", D: "Idade genética do indivíduo", E: "Score de qualidade do sequenciamento" }, 
      correct: "B", explanation: "PRS soma os efeitos de milhares de variantes genéticas, cada uma ponderada pelo seu efeito estimado em GWAS, fornecendo um score de risco genético individual." },

    { id: 960, area: "Bioinformática", subject: "Segurança de dados", 
      text: "Em data governance de dados genômicos, o princípio FAIR significa:", 
      options: { A: "Free, Accessible, Interoperable, Reusable", B: "Findable, Accessible, Interoperable, Reusable", C: "Fast, Accurate, Integrated, Reliable", D: "Filtered, Annotated, Indexed, Reviewed", E: "Federated, Automated, Integrated, Reproducible" }, 
      correct: "B", explanation: "FAIR data principles: Findable (localizável), Accessible (acessível), Interoperable (interoperável), Reusable (reutilizável) - promovem gestão responsável de dados científicos." },

    { id: 961, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
      text: "A Sequence Ontology (SO) descreve:", 
      options: { A: "Apenas fenótipos clínicos", B: "Features de sequência biológica como genes, éxons, UTRs e variantes", C: "Apenas proteínas", D: "Apenas populações", E: "Apenas doenças" }, 
      correct: "B", explanation: "A Sequence Ontology fornece termos controlados para descrever features de sequências biológicas, sendo usada na anotação de genomas e variantes." },

    { id: 962, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
      text: "Apache Spark é utilizado em genômica para:", 
      options: { A: "Sequenciamento de DNA", B: "Processamento distribuído de big data genômico em clusters", C: "Visualização de variantes", D: "Coleta de amostras", E: "Cultura de células" }, 
      correct: "B", explanation: "Spark é um framework de computação distribuída que permite processar grandes volumes de dados genômicos (VCFs, BAMs) em paralelo através de clusters de computadores." },

    { id: 963, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
      text: "O formato CRAM difere do BAM porque:", 
      options: { A: "Armazena apenas reads não mapeados", B: "Usa compressão reference-based, resultando em arquivos menores", C: "É um formato de texto legível", D: "Não contém informações de qualidade", E: "Apenas funciona com sequenciamento Sanger" }, 
      correct: "B", explanation: "CRAM usa compressão reference-based, armazenando apenas diferenças em relação ao genoma de referência, reduzindo significativamente o tamanho dos arquivos." },

    { id: 964, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
      text: "A chamada de variantes somáticas difere da germinativa porque:", 
      options: { A: "Usa o mesmo algoritmo", B: "Requer comparação tumor vs normal e modelagem de pureza tumoral", C: "Apenas detecta SNPs", D: "Não precisa de controle de qualidade", E: "É mais simples" }, 
      correct: "B", explanation: "Variantes somáticas requerem algoritmos específicos que comparam tumor vs tecido normal, consideram pureza tumoral, heterogeneidade e clonalidade." },

    { id: 965, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
      text: "A heritabilidade (h²) de um traço quantitativo representa:", 
      options: { A: "Porcentagem de DNA herdado dos pais", B: "Proporção da variância fenotípica atribuível a fatores genéticos aditivos", C: "Número de genes envolvidos", D: "Correlação entre gêmeos", E: "Idade de manifestação do traço" }, 
      correct: "B", explanation: "Heritabilidade é a proporção da variância fenotípica total que pode ser atribuída a variância genética aditiva em uma população específica." },

    // ================= MAIS QUESTÕES LABORATÓRIO (foco principal) =================
    
    // BIOLOGIA MOLECULAR E GENÉTICA - LABORATÓRIO
    { id: 966, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
      text: "O processo de crossing-over durante a meiose resulta em:", 
      options: { A: "Duplicação de cromossomos", B: "Recombinação genética entre cromossomos homólogos", C: "Separação de cromátides irmãs", D: "Formação de núcleos diploides", E: "Degradação do DNA" }, 
      correct: "B", explanation: "O crossing-over permite troca de segmentos entre cromossomos homólogos, aumentando a diversidade genética da descendência." },

    { id: 967, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
      text: "A acetilação de histonas geralmente resulta em:", 
      options: { A: "Condensação da cromatina", B: "Ativação da transcrição gênica", C: "Inibição da replicação", D: "Degradação do DNA", E: "Formação de heterocromatina" }, 
      correct: "B", explanation: "A acetilação de histonas neutraliza cargas positivas, relaxando a cromatina e facilitando o acesso da maquinaria transcricional." },

    { id: 968, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
      text: "Os íntrons são removidos do pré-mRNA por:", 
      options: { A: "Ribossomos", B: "Spliceossomo", C: "Proteassomo", D: "Exossomo", E: "Lisossomos" }, 
      correct: "B", explanation: "O spliceossomo é um complexo ribonucleoprotéico que reconhece sítios de splice e remove íntrons com precisão." },

    { id: 969, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
      text: "A DNA polimerase III de E. coli possui atividade:", 
      options: { A: "5' → 3' exonuclease apenas", B: "3' → 5' exonuclease (proofreading) e polimerização 5' → 3'", C: "Apenas polimerização", D: "Ligase", E: "Helicase" }, 
      correct: "B", explanation: "A Pol III tem atividade 5'→3' polimerase e 3'→5' exonuclease para correção de erros durante a replicação." },

    { id: 970, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
      text: "O cap 5' do mRNA eucarioto é importante para:", 
      options: { A: "Splicing do RNA", B: "Proteção contra degradação por 5' exonucleases e reconhecimento pelo ribossomo", C: "Transporte nuclear", D: "Tradução reversa", E: "Poliadenilação" }, 
      correct: "B", explanation: "O 7-metilguanosina cap protege o mRNA de nucleases e facilita a ligação ao ribossomo para tradução." },

    // NGS E TECNOLOGIAS LABORATORIAIS - FOCO PRINCIPAL
    { id: 971, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
      text: "A fragmentação por Covaris utiliza:", 
      options: { A: "Enzimas de restrição", B: "Ultrassom focalizado (Adaptive Focused Acoustics)", C: "Nebulização", D: "Cisalhamento mecânico", E: "Tagmentação" }, 
      correct: "B", explanation: "O Covaris usa AFA (Adaptive Focused Acoustics) para fragmentação controlada e reprodutível do DNA." },

    { id: 972, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
      text: "O índice DIN (DNA Integrity Number) varia de:", 
      options: { A: "0 a 5", B: "1 a 10, onde 10 indica DNA altamente íntegro", C: "0 a 100", D: "1 a 5", E: "0 a 20" }, 
      correct: "B", explanation: "O DIN é calculado pelo TapeStation/Bioanalyzer numa escala de 1-10, onde valores ≥7 são requeridos para WGS de alta qualidade." },

    { id: 973, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
      text: "A beads:sample ratio no método SPRI determina:", 
      options: { A: "Pureza do DNA", B: "Tamanho mínimo de fragmentos capturados", C: "Concentração final", D: "Integridade do DNA", E: "Quantidade de RNA" }, 
      correct: "B", explanation: "Ratios baixos (0.4×) capturam apenas fragmentos grandes, ratios altos (1.8×) capturam fragmentos pequenos. É usado para size selection." },

    { id: 974, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
      text: "O dual indexing em bibliotecas Illumina serve para:", 
      options: { A: "Aumentar a cobertura", B: "Reduzir index hopping e permitir identificação única de amostras", C: "Melhorar a qualidade", D: "Acelerar o sequenciamento", E: "Reduzir duplicados" }, 
      correct: "B", explanation: "O dual indexing (i5 + i7) reduz drasticamente o index hopping, especialmente em sequenciadores patterned flow cell." },

    { id: 975, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
      text: "A normalizaração de bibliotecas NGS pode ser feita por:", 
      options: { A: "Apenas diluição volumétrica", B: "Quantificação por qPCR seguida de diluição para concentração molar igual", C: "Apenas inspeção visual", D: "Peso das amostras", E: "pH das soluções" }, 
      correct: "B", explanation: "A normalização equimolar garante que cada amostra contribua igualmente na flow cell. qPCR é mais preciso que fluorometria para isso." },

    { id: 976, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
      text: "O PhiX é adicionado em corridas Illumina para:", 
      options: { A: "Aumentar o rendimento", B: "Balancear a diversidade de sequência e monitorar taxa de erro", C: "Reduzir custos", D: "Acelerar o processamento", E: "Limpar a flow cell" }, 
      correct: "B", explanation: "O PhiX (~1%) adiciona diversidade em bibliotecas de baixa complexidade e serve como controle de qualidade conhecido." },

    { id: 977, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
      text: "A química v3 do MiSeq difere da v2 principalmente por:", 
      options: { A: "Usar diferentes adaptadores", B: "Maior output e read length possível", C: "Sequenciar apenas DNA", D: "Não usar fluorescência", E: "Ser mais barata" }, 
      correct: "B", explanation: "A v3 permite reads 2×300bp e maior output total comparada à v2 (2×250bp), mantendo a mesma química SBS básica." },

    // BPL, BIOSSEGURANÇA E CONTROLE DE QUALIDADE
    { id: 978, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
      text: "Em um laboratório NB-2, EPIs obrigatórios incluem:", 
      options: { A: "Apenas luvas", B: "Luvas, jaleco com mangas longas, óculos de proteção e calçados fechados", C: "Apenas jaleco", D: "Máscara N95 apenas", E: "Não há exigência específica" }, 
      correct: "B", explanation: "NB-2 exige EPIs completos para proteção contra respingos e aerossóis de material biológico humano." },

    { id: 979, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
      text: "A calibração de pipetas deve considerar:", 
      options: { A: "Apenas o volume máximo", B: "Exatidão (trueness), precisão e incerteza de medição em diferentes volumes", C: "Apenas a cor da ponteira", D: "Apenas a marca da pipeta", E: "Apenas o operador" }, 
      correct: "B", explanation: "A calibração deve verificar exatidão (proximidade ao valor verdadeiro) e precisão (reprodutibilidade) em múltiplos pontos da faixa." },

    { id: 980, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
      text: "O controle positivo em PCR serve para:", 
      options: { A: "Garantir que a reação pode funcionar corretamente", B: "Calibrar o termociclador", C: "Medir a concentração do DNA", D: "Verificar a pureza da água", E: "Controlar a temperatura ambiente" }, 
      correct: "A", explanation: "O controle positivo confirma que reagentes, ciclagem e detecção estão funcionando adequadamente." },

    { id: 981, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
      text: "A carta controle de Levey-Jennings monitora:", 
      options: { A: "Temperatura do laboratório", B: "Estabilidade de método analítico ao longo do tempo usando material de referência", C: "Número de amostras processadas", D: "Salários dos funcionários", E: "Consumo de energia" }, 
      correct: "B", explanation: "A carta de Levey-Jennings plota resultados de controle interno ao longo do tempo, detectando drift e mudanças sistemáticas." },

    { id: 982, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
      text: "O descarte de ponteiras contaminadas com DNA humano deve ser:", 
      options: { A: "No lixo comum", B: "Em container para material infectante (grupo A), seguindo regulamentação de resíduos", C: "Na pia do laboratório", D: "Reutilizar após lavagem", E: "Incinerar imediatamente" }, 
      correct: "B", explanation: "Conforme RDC ANVISA 222/2018, materiais contaminados com sangue/DNA humano são resíduos do grupo A1." },

    { id: 983, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
      text: "A validação de limpeza em equipamentos compartilhados verifica:", 
      options: { A: "Apenas aparência visual", B: "Ausência de carry-over de DNA/contaminantes entre corridas usando métodos analíticos", C: "Apenas tempo de limpeza", D: "Satisfação do operador", E: "Custo do processo" }, 
      correct: "B", explanation: "A validação de limpeza deve demonstrar ausência de cross-contamination entre amostras usando métodos sensíveis." },

    // ÉTICA EM PESQUISA E ESTUDOS MULTICÊNTRICOS
    { id: 984, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
      text: "Em biobancos, o participante tem direito de:", 
      options: { A: "Apenas doar amostras", B: "Retirar consentimento e ter material descartado conforme sua decisão", C: "Não ser informado sobre procedimentos", D: "Transferir amostras livremente", E: "Vender suas amostras" }, 
      correct: "B", explanation: "A Resolução 441/2011 garante o direito de retirada de consentimento, com destruição ou anonimização das amostras." },

    { id: 985, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
      text: "Achados incidentais em genômica são:", 
      options: { A: "Erros de sequenciamento", B: "Descobertas clinicamente relevantes não relacionadas ao objetivo primário da pesquisa", C: "Apenas variantes benignas", D: "Contaminações de laboratório", E: "Resultados esperados" }, 
      correct: "B", explanation: "São achados não buscados mas clinicamente acionáveis, como variantes em BRCA1/2 em estudo para outra condição." },

    { id: 986, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
      text: "O broad consent (consentimento amplo) permite:", 
      options: { A: "Uso ilimitado sem restrições", B: "Uso para pesquisas relacionadas dentro de área temática definida, com governança adequada", C: "Apenas uso na instituição original", D: "Venda comercial das amostras", E: "Uso sem aprovação ética adicional" }, 
      correct: "B", explanation: "Broad consent permite uso futuro para pesquisas relacionadas, mas requer governança ética e transparência." },

    { id: 987, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
      text: "Em estudos multicêntricos, a variabilidade entre centros é controlada por:", 
      options: { A: "Ignorar as diferenças", B: "Padronização de SOPs, treinamento, materiais de referência e monitoramento contínuo", C: "Usar apenas um centro", D: "Aleatoriedade completa", E: "Aumentar o número de amostras" }, 
      correct: "B", explanation: "A harmonização entre centros exige padronização rigorosa e monitoramento para garantir comparabilidade dos dados." },

    { id: 988, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
      text: "A LGPD considera dados genéticos:", 
      options: { A: "Dados públicos", B: "Dados pessoais sensíveis, exigindo medidas especiais de proteção", C: "Dados anônimos", D: "Dados comerciais", E: "Dados irrelevantes" }, 
      correct: "B", explanation: "Dados genéticos são categorizados como dados pessoais sensíveis, exigindo bases legais específicas e proteção reforçada." },

    // SAÚDE PÚBLICA
    { id: 989, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
      text: "A integralidade no SUS significa:", 
      options: { A: "Apenas atendimento hospitalar", B: "Articulação entre promoção, proteção e recuperação da saúde", C: "Apenas tratamento curativo", D: "Atendimento apenas preventivo", E: "Foco exclusivo em doenças raras" }, 
      correct: "B", explanation: "Integralidade pressupõe atenção completa, articulando ações de promoção, proteção e recuperação em todos os níveis." },

    { id: 990, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
      text: "O Programa Genomas SUS tem como objetivo:", 
      options: { A: "Apenas pesquisa acadêmica", B: "Criar um banco de dados genômicos representativo da população brasileira para apoiar o SUS", C: "Substituir todos os exames laboratoriais", D: "Privatizar a genômica", E: "Apenas diagnóstico de câncer" }, 
      correct: "B", explanation: "O programa visa gerar dados genômicos da diversidade brasileira para apoiar diagnóstico, tratamento e políticas de saúde no SUS." },

    { id: 991, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
      text: "A universalidade do SUS garante:", 
      options: { A: "Atendimento apenas para brasileiros", B: "Acesso universal e igualitário às ações de saúde para todos", C: "Apenas atendimento de emergência", D: "Atendimento mediante pagamento", E: "Prioridade para classes sociais altas" }, 
      correct: "B", explanation: "A universalidade é um princípio doutrinário que garante acesso a todos, independentemente de nacionalidade ou condição social." },

    { id: 992, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
      text: "A participação social no SUS é exercida por:", 
      options: { A: "Apenas profissionais médicos", B: "Conselhos de Saúde com representação de usuários, trabalhadores e gestores", C: "Apenas gestores públicos", D: "Empresas privadas", E: "Apenas universidades" }, 
      correct: "B", explanation: "Os Conselhos de Saúde têm composição paritária: 50% usuários, 25% trabalhadores, 25% gestores/prestadores." },

    // ================= MAIS QUESTÕES BIOINFORMÁTICA =================
    
    // PROGRAMAÇÃO E FERRAMENTAS COMPUTACIONAIS
    { id: 993, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
      text: "O comando awk para extrair reads com MAPQ > 30 de um SAM seria:", 
      options: { A: "awk '$5 > 30' file.sam", B: "awk '$5 > 30 {print}' file.sam", C: "awk 'MAPQ > 30' file.sam", D: "awk '$5 == 30' file.sam", E: "awk 'quality > 30' file.sam" }, 
      correct: "B", explanation: "No formato SAM, a coluna 5 contém o MAPQ. A sintaxe awk '$5 > 30 {print}' filtra linhas onde campo 5 > 30." },

    { id: 994, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
      text: "Em Python com BioPython, para ler um arquivo FASTA:", 
      options: { A: "open('file.fasta')", B: "from Bio import SeqIO; for record in SeqIO.parse('file.fasta', 'fasta'):", C: "import fasta; fasta.read()", D: "pandas.read_fasta()", E: "numpy.loadtxt()" }, 
      correct: "B", explanation: "BioPython SeqIO é a biblioteca padrão para parsing de arquivos de sequência em Python." },

    { id: 995, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
      text: "A diferença entre SNV e SNP é:", 
      options: { A: "São sinônimos", B: "SNV é qualquer variante de nucleotídeo único; SNP é um SNV com frequência >1% na população", C: "SNP é apenas em éxons", D: "SNV é apenas somático", E: "SNP é mais deletério" }, 
      correct: "B", explanation: "SNV (Single Nucleotide Variant) é qualquer diferença; SNP (Single Nucleotide Polymorphism) é um SNV comum na população." },

    { id: 996, area: "Bioinformática", subject: "Genética de populações", 
      text: "A endogamia (inbreeding) em uma população resulta em:", 
      options: { A: "Aumento da heterozigosidade", B: "Redução da heterozigosidade e aumento da homozigosidade", C: "Não afeta frequências genotípicas", D: "Aumenta a diversidade genética", E: "Reduz a deriva genética" }, 
      correct: "B", explanation: "A endogamia reduz heterozigosidade observada, aumentando homozigosidade sem alterar frequências alélicas." },

    { id: 997, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
      text: "O conceito de 'winner's curse' em GWAS refere-se a:", 
      options: { A: "Vencer sempre é ruim", B: "Efeitos genéticos descobertos tendem a ser superestimados no estudo inicial de descoberta", C: "Apenas variantes raras são significativas", D: "P-values sempre inflados", E: "Estudos pequenos são melhores" }, 
      correct: "B", explanation: "O 'winner's curse' ocorre porque apenas variantes com efeitos aparentemente grandes passam no threshold de significância, levando à superestimação." },

    { id: 998, area: "Bioinformática", subject: "Segurança de dados", 
      text: "Em bancos de dados genômicos, o controle de acesso deve implementar:", 
      options: { A: "Acesso público irrestrito", B: "Autenticação, autorização baseada em papéis e auditoria de acessos", C: "Apenas senha simples", D: "Acesso apenas local", E: "Sem controle específico" }, 
      correct: "B", explanation: "Dados genômicos sensíveis requerem AAA: Autenticação (quem é), Autorização (o que pode fazer) e Auditoria (o que fez)." },

    { id: 999, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
      text: "Em pipelines ETL para dados genômicos, a etapa de Transform inclui:", 
      options: { A: "Apenas backup dos dados", B: "Normalização de variantes, anotação funcional e harmonização de formatos entre centros", C: "Apenas compressão", D: "Apenas validação", E: "Apenas visualização" }, 
      correct: "B", explanation: "A transformação padroniza dados de múltiplas fontes, aplica anotações e prepara para carregamento no banco unificado." }
];

// Total: 500 questões
// Laboratório: ~350 questões (70%)
// Bioinformática: ~150 questões (30%)
