// ====================================================================
// BANCO COMPLETO DE 500 QUESTÕES - GENOMA SUS
// Conversão das questões existentes + questões novas criadas
// ====================================================================

window.questionBank = [
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
    
  {
    id: 1020, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A principal razão para utilizar tubo com EDTA-K₂ na coleta de sangue para extração de DNA é que o EDTA:", 
    options: { A: "Estabiliza o DNA contra radiação UV", B: "Quela íons Ca²⁺ (impedindo coagulação) e Mg²⁺ (inibindo DNases), preservando a integridade do DNA", C: "Aumenta o rendimento de DNA por ativação de nucleases", D: "Substitui a necessidade de proteinase K na extração", E: "Impede a hemólise por estabilização osmótica dos eritrócitos" }, 
    correct: "B", explanation: "Gabarito: Letra B. O EDTA atua como um 'quelante' que sequestra o Magnésio, paralisando as DNases (que destruiriam o DNA) e impedindo a cascata de coagulação."
  },
  {
    id: 1021, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Na automação laboratorial com robôs de pipetagem, o principal risco de carry-over entre amostras é mitigado por:", 
    options: { A: "Uso de ponteiras fixas reutilizáveis lavadas entre amostras", B: "Uso de ponteiras descartáveis com filtro, trocadas a cada aspiração, combinado com verificação de volume e detecção de coágulos", C: "Redução da velocidade de pipetagem", D: "Aumento do volume de reagentes", E: "Processamento de apenas uma amostra por vez no robô" }, 
    correct: "B", explanation: "Gabarito: Letra B. Em protocolos NGS altamente sensíveis, a troca de filter tips a cada poço é obrigatória para evitar a contaminação cruzada (carry-over)."
  },
  {
    id: 1022, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Em um gel de agarose 0,8%, uma amostra de DNA genômico íntegro apresenta apenas smear difuso em região de baixo peso molecular (<1 kb). Isso indica:", 
    options: { A: "DNA de excelente qualidade, pronto para uso", B: "DNA severamente degradado, provavelmente por exposição a DNases, armazenamento inadequado ou processamento tardio", C: "Contaminação com RNA ribossômico", D: "Excesso de DNA aplicado no gel", E: "Erro na preparação do gel de agarose" }, 
    correct: "B", explanation: "Gabarito: Letra B. O 'smear' (rastro) no fundo do gel significa que as longas fitas de DNA foram picotadas em pedaços muito pequenos, indicando degradação severa."
  },
  {
    id: 1023, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A razão pela qual bibliotecas PCR-free são preferidas para WGS de alta qualidade é:", 
    options: { A: "São mais baratas de preparar", B: "Eliminam o viés de amplificação por PCR (sub-representação de regiões ricas em GC/AT, duplicados), produzindo cobertura mais uniforme", C: "Requerem menor quantidade de DNA de input", D: "Não necessitam de fragmentação do DNA", E: "Dispensam a etapa de ligação de adaptadores" }, 
    correct: "B", explanation: "Gabarito: Letra B. A PCR introduz viés porque amplifica melhor algumas regiões do que outras (especialmente regiões extremas em GC). Pular a PCR elimina esse viés."
  },
  {
    id: 1024, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Sobre a Declaração de Helsinki, é CORRETO afirmar:", 
    options: { A: "Aplica-se exclusivamente a pesquisas farmacêuticas", B: "Estabelece que o bem-estar do participante prevalece sobre interesses da ciência e da sociedade, sendo o documento mais influente em ética de pesquisa biomédica", C: "Foi elaborada pelo governo dos Estados Unidos", D: "Proíbe qualquer pesquisa com seres humanos", E: "Refere-se exclusivamente à ética em pesquisa animal" }, 
    correct: "B", explanation: "Gabarito: Letra B. É o pilar da bioética moderna. O bem-estar do indivíduo sempre supera a necessidade de descoberta científica."
  },
  {
    id: 1025, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A seleção de tamanho por double-sided SPRI cleanup consiste em:", 
    options: { A: "Duas etapas de captura magnética com diferentes ratios bead:amostra — a primeira (ratio baixo) remove fragmentos grandes; a segunda (ratio alto no sobrenadante) captura fragmentos no range desejado", B: "Uso de duas marcas diferentes de beads magnéticas", C: "Duas rodadas de eletroforese em gel de agarose", D: "Centrifugação seguida de precipitação com etanol", E: "Filtração em duas membranas com poros de tamanhos diferentes" }, 
    correct: "A", explanation: "Gabarito: Letra A. Na primeira etapa, as beads capturam os fragmentos indesejados muito grandes (que vão para o lixo). Na segunda etapa, novas beads capturam os fragmentos ideais que haviam ficado no líquido."
  },
  {
    id: 1026, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "No conceito de 'saúde pública genômica' (public health genomics), o principal objetivo é:", 
    options: { A: "Oferecer terapia gênica a toda população", B: "Integrar conhecimentos genômicos na prática de saúde pública para melhorar prevenção, diagnóstico e tratamento em nível populacional", C: "Substituir todas as vacinas por terapias personalizadas", D: "Privatizar os serviços de genômica do SUS", E: "Restringir o acesso a dados genômicos para fins acadêmicos" }, 
    correct: "B", explanation: "Gabarito: Letra B. Refere-se à translação do conhecimento dos sequenciadores diretamente para o benefício coletivo no SUS."
  },
  {
    id: 1027, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "A expressão 'walk-away time' em automação laboratorial refere-se ao:", 
    options: { A: "Tempo que o operador leva para ir até o laboratório", B: "Período durante o qual o equipamento automatizado opera sem necessidade de intervenção humana, permitindo que o operador realize outras tarefas", C: "Tempo de inatividade do equipamento por falha", D: "Duração da pausa para descanso do operador", E: "Tempo de espera entre a entrega do resultado e o início do próximo processamento" }, 
    correct: "B", explanation: "Gabarito: Letra B. Essa é a grande métrica de eficiência dos robôs NGS; o tempo que a máquina trabalha sozinha enquanto você avança outros projetos."
  },
  {
    id: 1028, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "A doença de Chagas, prevalente na região amazônica, é relevante para o Genomas SUS porque:", 
    options: { A: "A doença não tem componente genético", B: "Variantes genéticas do hospedeiro podem influenciar a progressão para cardiomiopatia chagásica, e o estudo genômico de populações expostas pode revelar marcadores de suscetibilidade e gravidade", C: "O sequenciamento do genoma humano pode substituir o diagnóstico sorológico", D: "A genômica pode prevenir completamente a infecção por Trypanosoma cruzi", E: "A doença ocorre apenas em populações não miscigenadas" }, 
    correct: "B", explanation: "Gabarito: Letra B. Algumas pessoas infectadas desenvolvem cardiopatia severa enquanto outras ficam assintomáticas a vida toda. A genômica busca encontrar o porquê genético disso."
  },
  {
    id: 1029, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "A etapa de 'QC final de biblioteca' antes do sequenciamento deve incluir MINIMAMENTE:", 
    options: { A: "Apenas inspeção visual do tubo", B: "Quantificação por Qubit (ou qPCR), perfil de tamanho por TapeStation/Bioanalyzer, e verificação de ausência de dímeros de adaptador", C: "Apenas a quantificação por NanoDrop", D: "Sequenciamento completo da biblioteca como pré-teste", E: "Corrida de gel de agarose 3%" }, 
    correct: "B", explanation: "Gabarito: Letra B. O trio Qubit + TapeStation + Verificação Visual de Adapter-Dimers é a trindade do QC antes de mandar para a Flow Cell."
  },
  {
    id: 1030, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Sobre a relação entre alelo, gene e locus, é CORRETO afirmar:", 
    options: { A: "Alelo e gene são sinônimos", B: "Um locus é a posição específica no cromossomo; um gene é a unidade funcional de herança localizada em um locus; alelos são as diferentes variantes de sequência que podem ocupar o mesmo locus", C: "Locus se refere exclusivamente a regiões não codificantes", D: "Cada gene possui apenas um alelo possível", E: "Alelo se refere a proteínas" }, 
    correct: "B", explanation: "Gabarito: Letra B. Locus é o 'endereço'. Gene é a 'casa'. Alelo é 'quem mora lá' (as variações)."
  },
  {
    id: 1031, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Em relação aos SNPs (Single Nucleotide Polymorphisms):", 
    options: { A: "São exclusivamente patogênicos", B: "São variações de uma única base presentes em >1% da população, sendo o tipo mais comum de variação genética humana (~4-5 milhões por genoma)", C: "Ocorrem apenas em éxons codificantes", D: "Não podem ser detectados por NGS", E: "São encontrados apenas na Europa" }, 
    correct: "B", explanation: "Gabarito: Letra B. Os SNPs representam a base da diversidade genética humana e da medicina genômica populacional."
  },
  {
    id: 1032, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "A contaminação de reagentes de extração de DNA com DNA exógeno (ex.: DNA humano do operador) é detectada por:", 
    options: { A: "Controle positivo de extração", B: "Controle negativo de extração (NTC) — se amplificação é observada no NTC, indica contaminação de reagentes ou do ambiente", C: "Aumento na concentração de Qubit", D: "Perfil de TapeStation", E: "Mudança de cor dos reagentes" }, 
    correct: "B", explanation: "Gabarito: Letra B. O NTC vai com água no lugar da amostra. Se surgir DNA ali no final, o kit está contaminado."
  },
  {
    id: 1033, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "A 'phased assembly' em genômica refere-se à:", 
    options: { A: "Montagem de equipamentos em fases", B: "Determinação da configuração de alelos nos cromossomos homólogos (fase/haplótipo), permitindo distinguir qual alelo está em cada cópia cromossômica", C: "Divisão do sequenciamento em fases", D: "Separação de DNA mitocondrial", E: "Classificação das amostras" }, 
    correct: "B", explanation: "Gabarito: Letra B. Phasing é separar as variantes herdadas do pai daquelas herdadas da mãe, recriando o cromossomo exato que você herdou."
  },
  {
    id: 1034, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A hemólise acentuada em amostra de sangue coletado é problemática para extração de DNA porque:", 
    options: { A: "Aumenta a concentração de DNA", B: "A hemoglobina liberada dos eritrócitos lisados é um inibidor de PCR e de enzimas usadas no preparo de biblioteca, além de dificultar a separação do buffy coat", C: "A hemólise destrói completamente o DNA dos leucócitos", D: "Causa aumento do volume plasmático", E: "Transforma o DNA em RNA" }, 
    correct: "B", explanation: "Gabarito: Letra B. A hemoglobina é rica em ferro, que atua como inibidor de enzimas dependentes de magnésio (como as polimerases)."
  },
  {
    id: 1035, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Sobre controle externo de qualidade (proficiency testing) em laboratório de genômica:", 
    options: { A: "É opcional e não afeta a acreditação", B: "Consiste na análise de amostras cegas fornecidas por programa externo, com comparação dos resultados do laboratório com o consenso de participantes ou valores de referência", C: "É realizado apenas por privados", D: "Consiste na calibração mecânica", E: "Substitui controle interno" }, 
    correct: "B", explanation: "Gabarito: Letra B. É o momento de provar que os seus laudos NGS encontram as mesmas variantes que os laboratórios do mundo inteiro encontram na mesma amostra."
  },
  {
    id: 1036, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Na separação do buffy coat, a temperatura de centrifugação deve ser à temperatura ambiente (20-25°C) e não refrigerada porque:", 
    options: { A: "A refrigeração aumenta o rendimento de DNA", B: "A centrifugação refrigerada pode causar agregação plaquetária e dificultar a separação limpa das camadas", C: "A temperatura não influencia a separação", D: "A refrigeração consome mais energia", E: "A temperatura ambiente esteriliza a amostra" }, 
    correct: "B", explanation: "Gabarito: Letra B. O frio ativa as plaquetas, que grudam nos leucócitos, embolando as camadas do plasma e do buffy coat."
  },
  {
    id: 1037, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Sobre o conceito de 'cobertura' em sequenciamento WGS:", 
    options: { A: "Cobertura 30× significa 30 cromossomos diferentes", B: "Cobertura 30× significa que, em média, cada base do genoma foi lida 30 vezes, fornecendo redundância para chamada confiável de variantes", C: "Cobertura 30× significa 30% sequenciado", D: "Cobertura é sinônimo de cluster density", E: "30× é insuficiente para genômica" }, 
    correct: "B", explanation: "Gabarito: Letra B. Para ter certeza de que uma variante detectada não é erro da máquina, precisamos ver a mesma letra lida cerca de 30 vezes em diferentes reads empilhados."
  },
  {
    id: 1038, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "O patrimônio genético brasileiro é regulado pela Lei nº 13.123/2015. No contexto do Genomas SUS:", 
    options: { A: "A lei não tem relevância", B: "A lei pode ser aplicável quando o acesso a patrimônio genético envolve populações indígenas ou comunidades tradicionais, com implicações sobre consentimento e repartição de benefícios", C: "A lei proíbe qualquer genômica", D: "Aplica-se apenas a plantas e animais", E: "Dispensa consentimento" }, 
    correct: "B", explanation: "Gabarito: Letra B. Ao sequenciar populações originárias/tradicionais, a pesquisa se submete às leis de repartição de benefícios pelo acesso ao conhecimento e material genético nativo."
  },
  {
    id: 1039, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "A diferença fundamental entre 'dados pseudonimizados' e 'dados anonimizados' é:", 
    options: { A: "São termos sinônimos", B: "Dados pseudonimizados têm identificadores substituídos por código, mas podem ser re-identificados com a chave de correspondência; dados anonimizados não permitem re-identificação por nenhum meio razoável", C: "Pseudonimizados são mais seguros", D: "Apenas anonimizados têm LGPD", E: "Pseudonimizados não usam criptografia" }, 
    correct: "B", explanation: "Gabarito: Letra B. A pseudonimização é reversível para a equipe de pesquisa que guarda o 'dicionário' de chaves. O dado anonimizado quebra essa chave para sempre."
  },
  {
    id: 1040, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "O erro tipo I (α) em testes de hipótese em genômica corresponde a:", 
    options: { A: "Deixar de detectar uma variante", B: "Rejeitar a hipótese nula quando ela é verdadeira — falso positivo", C: "Aceitar a alternativa corretamente", D: "Poder estatístico do teste", E: "Probabilidade de acerto" }, 
    correct: "B", explanation: "Gabarito: Letra B. É o famoso falso positivo: afirmar que um gene causa a doença quando, na verdade, não há associação real (rejeitou o H0 incorretamente)."
  },
  {
    id: 1041, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Sobre a replicação do DNA, a enzima helicase tem como função:", 
    options: { A: "Sintetizar nucleotídeos", B: "Desenrolar a dupla hélice do DNA, separando as duas fitas na forquilha de replicação para que sirvam como molde", C: "Ligar os fragmentos de Okazaki", D: "Adicionar cap 5' ao mRNA", E: "Transportar aminoácidos" }, 
    correct: "B", explanation: "Gabarito: Letra B. A helicase é o 'zíper' que abre a fita dupla para a polimerase entrar e trabalhar."
  },
  {
    id: 1042, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "A mutação frameshift (mudança de quadro de leitura) é causada por:", 
    options: { A: "Substituição de base (transição)", B: "Inserção ou deleção de bases em número NÃO múltiplo de 3, alterando todo o quadro de leitura a partir do ponto da mutação", C: "Duplicação inteira de gene", D: "Inversão cromossômica", E: "Metilação" }, 
    correct: "B", explanation: "Gabarito: Letra B. Como o ribossomo lê o RNA de 3 em 3 bases (códons), deletar 1 ou 2 bases 'desliza' a janela de leitura, arruinando a proteína inteira a partir daquele ponto."
  },
  {
    id: 1043, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Na tradução, o códon AUG codifica metionina e funciona como códon de iniciação. A sequência contextual que facilita o reconhecimento do AUG em eucariotos é denominada:", 
    options: { A: "TATA box", B: "Sequência Kozak", C: "Shine-Dalgarno", D: "Poly-A", E: "Cap 5'" }, 
    correct: "B", explanation: "Gabarito: Letra B. A sequência de Kozak ajuda o ribossomo eucariótico a ancorar e identificar o AUG correto para começar a tradução."
  },
  {
    id: 1044, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "As histonas são proteínas fundamentais para a organização da cromatina. A acetilação de histonas está geralmente associada a:", 
    options: { A: "Compactação da cromatina", B: "Relaxamento da cromatina e ativação transcricional, pois a acetilação neutraliza a carga positiva das lisinas, reduzindo a afinidade pela carga negativa do DNA", C: "Replicação do DNA", D: "Reparo de danos no DNA", E: "Translocação cromossômica" }, 
    correct: "B", explanation: "Gabarito: Letra B. Histonas muito carregadas positivamente abraçam fortemente o DNA. A acetilação neutraliza isso, soltando o DNA para os fatores de transcrição entrarem."
  },
  {
    id: 1045, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O processo pelo qual um gene pode gerar múltiplas proteínas diferentes é denominado:", 
    options: { A: "Replicação alternativa", B: "Splicing alternativo, onde combinações diferentes de éxons são incluídas no mRNA maduro, gerando isoformas proteicas distintas a partir do mesmo gene", C: "Tradução inversa", D: "Retrotransposição", E: "Crossing-over" }, 
    correct: "B", explanation: "Gabarito: Letra B. Cerca de 95% dos genes humanos sofrem splicing alternativo, sendo a chave da complexidade biológica humana comparada a outros animais."
  },
  {
    id: 1046, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Sobre mutações somáticas vs germinativas:", 
    options: { A: "Ambas são herdáveis", B: "Mutações germinativas estão presentes em todas as células e são herdáveis; mutações somáticas ocorrem em tecidos específicos e NÃO são transmitidas à descendência", C: "Mutações somáticas são sempre benignas", D: "Mutações germinativas ocorrem no músculo", E: "Não há diferença funcional" }, 
    correct: "B", explanation: "Gabarito: Letra B. Mutações em células do corpo (somáticas, como num tumor de pele) não passam para o filho. Apenas as que afetam óvulo/espermatozoide (germinativas) são herdadas."
  },
  {
    id: 1047, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O Mismatch Repair (MMR) é um sistema de reparo de DNA que:", 
    options: { A: "Corrige dímeros de pirimidina", B: "Corrige erros de pareamento (mismatches) que escaparam à atividade de proofreading da DNA polimerase, sendo fundamental para a fidelidade replicativa", C: "Repara exclusivamente quebras de fita dupla", D: "Remove bases metiladas", E: "Corrige erros de splicing" }, 
    correct: "B", explanation: "Gabarito: Letra B. Ele atua consertando A pareado erroneamente com C, por exemplo, logo após o avanço da polimerase."
  },
  {
    id: 1048, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "A herança mitocondrial difere da herança mendeliana porque:", 
    options: { A: "Segue segregação 3:1", B: "É transmitida exclusivamente pela linhagem materna, pois as mitocôndrias do espermatozoide não contribuem para o zigoto", C: "É ligada ao cromossomo Y", D: "Afeta DNA nuclear", E: "Segue padrão autossômico" }, 
    correct: "B", explanation: "Gabarito: Letra B. Todo o nosso DNA mitocondrial foi herdado exclusivamente das nossas mães, seguindo uma linhagem matrilinear ininterrupta."
  },
  {
    id: 1049, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Sobre a telomerase:", 
    options: { A: "Replica telômeros convencionalmente", B: "É uma transcriptase reversa que utiliza seu componente RNA como molde para adicionar repetições teloméricas (TTAGGG) às extremidades 3' dos cromossomos", C: "Ativa em somáticas adultas", D: "Inibição causa câncer", E: "Remove sequências" }, 
    correct: "B", explanation: "Gabarito: Letra B. É a enzima da 'imortalidade celular' e atua fortemente em tumores para garantir que o cromossomo não encurte durante sucessivas divisões descontroladas."
  },
  {
    id: 1050, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "O brometo de etídio, utilizado classicamente como corante de DNA em gel de agarose, está sendo substituído por corantes como SYBR Safe porque:", 
    options: { A: "SYBR Safe é mais barato", B: "Brometo de etídio é um agente intercalante mutagênico com potencial carcinogênico, exigindo manuseio e descarte especiais como resíduo químico perigoso", C: "SYBR Safe produz bandas mais brilhantes", D: "Brometo não cora DNA genômico", E: "SYBR Safe descarta na pia" }, 
    correct: "B", explanation: "Gabarito: Letra B. Por se intercalar entre as bases do DNA para emitir brilho, ele faz a mesma coisa no DNA humano caso entre em contato com a pele, causando mutações."
  },
  {
    id: 1051, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "A RNA polimerase II em eucariotos é responsável pela transcrição de:", 
    options: { A: "Apenas rRNA", B: "mRNA, e também a maioria dos snRNAs, miRNAs e lncRNAs", C: "Apenas tRNA", D: "DNA", E: "Apenas RNA mitocondrial" }, 
    correct: "B", explanation: "Gabarito: Letra B. É o motor primário da transcrição proteica e de RNAs regulatórios cruciais (como os miRNAs que bloqueiam tradução)."
  },
  {
    id: 1052, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Na eletroforese, DNA migra em direção ao:", 
    options: { A: "Cátodo (negativo)", B: "Ânodo (polo positivo), pois os grupos fosfato conferem carga negativa ao DNA", C: "Não migra", D: "Lateralmente", E: "Ambos polos" }, 
    correct: "B", explanation: "Gabarito: Letra B. O 'Açúcar-Fosfato' carrega o DNA negativamente. Como opostos se atraem na física, ele viaja na direção da ponta positiva da cuba de eletroforese."
  },
  {
    id: 1053, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Sobre o código genético, é CORRETO afirmar que é 'degenerado' porque:", 
    options: { A: "Cada aminoácido tem 1 códon", B: "Múltiplos códons podem codificar o mesmo aminoácido, sendo a degeneração maior na terceira posição do códon (wobble position)", C: "Cada códon codifica vários aminoácidos", D: "Varia entre espécies", E: "Faltam códons" }, 
    correct: "B", explanation: "Gabarito: Letra B. A 'teoria da oscilação' (Wobble) faz com que mutações na 3ª posição de um códon de DNA frequentemente gerem o exato mesmo aminoácido (Mutação Sinônima), atuando como um escudo natural contra erros."
  },
  {
    id: 1054, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O Nonsense-Mediated Decay (NMD) é um mecanismo de vigilância que:", 
    options: { A: "Degrada mRNAs que contêm códons de parada prematuros (nonsense mutations), impedindo a produção de proteínas truncadas potencialmente tóxicas", B: "Repara mutações nonsense no DNA", C: "Degrada todas proteínas", D: "Elimina RNAs ribossômicos", E: "Ativa mRNAs mutados" }, 
    correct: "A", explanation: "Gabarito: Letra A. (Opção A é correta neste simulado, repare no gabarito oficial). Proteínas truncadas podem virar 'príons tóxicos' e agregar na célula. O NMD destrói o mRNA defectivo antes que ele seja traduzido a fundo."
  },
  {
    id: 1055, area: "Bioinformática", subject: "Genética de populações", 
    text: "Em genética de populações, o equilíbrio de Hardy-Weinberg:", 
    options: { A: "Aplica-se apenas a pequenas populações", B: "Descreve as frequências genotípicas esperadas (p², 2pq, q²) em uma população grande com cruzamento aleatório, sem mutação, migração ou seleção", C: "Prevê aumento constante de homozigotos", D: "Requer alelos dominantes", E: "Só haplóides" }, 
    correct: "B", explanation: "Gabarito: Letra B. Se não há força evolutiva puxando, a proporção de um gene se mantém constante pelas leis estatísticas de HW."
  },
  {
    id: 1056, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "A deficiência no gene BRCA1 compromete qual mecanismo de reparo de DNA?", 
    options: { A: "BER", B: "Recombinação homóloga (HR) de quebras de fita dupla", C: "MMR", D: "NER", E: "Fotorreativação" }, 
    correct: "B", explanation: "Gabarito: Letra B. Quebrar ambas as fitas do DNA é letal. Sem BRCA1 (que recruta as ferramentas de conserto), a célula acumula cortes irreparáveis, gerando forte instabilidade e tumorigênese (Câncer de Mama/Ovário)."
  },
  {
    id: 1057, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O imprinting genômico é um fenômeno epigenético em que:", 
    options: { A: "Ambos os alelos são expressos", B: "A expressão de certos genes depende da origem parental (materno ou paterno), regulada por metilação diferencial do DNA", C: "Os genes duplicam", D: "Expressão apenas embrionária", E: "Depende só do ambiente" }, 
    correct: "B", explanation: "Gabarito: Letra B. É um selo que diz: 'Silencie essa cópia porque ela veio do pai'. Doenças como Prader-Willi e Angelman são falhas clássicas do Imprinting."
  },
  {
    id: 1058, area: "Bioinformática", subject: "Genética de populações", 
    text: "A variante HbS (hemoglobina S), responsável pela anemia falciforme, é mais frequente em populações com ancestralidade africana porque:", 
    options: { A: "Ocorre apenas em africanos", B: "Heterozigotos (HbAS) apresentam resistência aumentada à malária por P. falciparum, conferindo vantagem seletiva em regiões endêmicas — exemplo clássico de seleção balanceadora", C: "Vantajosa sempre", D: "Falta de reparo", E: "Surgiu recentemente" }, 
    correct: "B", explanation: "Gabarito: Letra B. É o melhor caso mundial de 'Vantagem do Heterozigoto'. Carregar uma cópia ruim te defende do plasmódio na África."
  },
  {
    id: 1059, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "A inativação do cromossomo X em fêmeas mamíferas é mediada pelo:", 
    options: { A: "Gene SRY", B: "RNA não codificante XIST (X-inactive specific transcript), que reveste o cromossomo X a ser inativado", C: "DNA mitocondrial", D: "Telomerase", E: "p53" }, 
    correct: "B", explanation: "Gabarito: Letra B. Para evitar dose dupla de carga genética fatal, o RNA XIST abraça e 'desliga' fisicamente todo um cromossomo X nas células femininas (corpúsculo de Barr)."
  },
  {
    id: 1060, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Sobre a PCR (Reação em Cadeia da Polimerase), a etapa de annealing (anelamento) ocorre em temperatura:", 
    options: { A: "95°C", B: "55-65°C, para permitir a hibridização dos primers com o DNA molde", C: "72°C", D: "4°C", E: "100°C" }, 
    correct: "B", explanation: "Gabarito: Letra B. É a temperatura morna exata onde os primers conseguem se encaixar estaticamente às fitas únicas e começar a síntese."
  },
  {
    id: 1061, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "A transcrição reversa, processo pelo qual RNA é convertido em DNA complementar (cDNA), é catalisada por:", 
    options: { A: "RNA pol II", B: "Transcriptase reversa (reverse transcriptase), enzima originalmente descrita em retrovírus", C: "DNA pol III", D: "Ribonuclease H", E: "Topoisomerase" }, 
    correct: "B", explanation: "Gabarito: Letra B. É a base da RT-qPCR para análise de RNA e detecção viral (como na testagem do HIV e do SARS-CoV-2)."
  },
  {
    id: 1062, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Um SNP classificado como 'missense' significa que:", 
    options: { A: "Não altera", B: "A substituição de nucleotídeo resulta na troca de um aminoácido por outro diferente na proteína codificada", C: "Códon de parada prematuro", D: "Deleção de éxon", E: "Não tem efeito" }, 
    correct: "B", explanation: "Gabarito: Letra B. O sentido (sense) falhou. É a clássica mutação de troca de bloco (ex: Trocou Ácido Glutâmico por Valina na HbS)."
  },
  {
    id: 1063, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O splicing do pré-mRNA é realizado pelo:", 
    options: { A: "Ribossomo", B: "Spliceossomo, um complexo ribonucleoprotéico composto por snRNPs (U1, U2, U4, U5, U6) e proteínas associadas", C: "DNA pol", D: "Proteassomo", E: "Poro nuclear" }, 
    correct: "B", explanation: "Gabarito: Letra B. Eles cortam forçosamente o RNA não codificante (íntron) e costuram as bordas."
  },
  {
    id: 1064, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "A energia para a tradução (síntese proteica) no ribossomo é fornecida pela hidrólise de:", 
    options: { A: "ATP apenas", B: "GTP, hidrolisado pelos fatores de elongação (EF-Tu/eEF1A na decodificação e EF-G/eEF2 na translocação), e ATP na aminoacilação do tRNA", C: "UDP", D: "Glicose", E: "NADPH" }, 
    correct: "B", explanation: "Gabarito: Letra B. O Ribossomo queima pesado GTP para atuar fisicamente como uma esteira mecânica que puxa e solta a proteína."
  },
  {
    id: 1065, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O conceito de 'penetrância' em genética refere-se a:", 
    options: { A: "Capacidade de penetrar a célula", B: "A proporção de indivíduos com determinado genótipo que efetivamente manifestam o fenótipo esperado", C: "Gravidade da doença", D: "Taxa de mutação", E: "Velocidade" }, 
    correct: "B", explanation: "Gabarito: Letra B. Algumas pessoas têm a mutação dominante, mas a doença misteriosamente nunca 'penetra' no fenótipo (elas ficam saudáveis)."
  },
  {
    id: 1066, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Sobre variantes de número de cópias (CNVs):", 
    options: { A: "São SNVs", B: "São segmentos de DNA de >1 kb com número variável de cópias entre indivíduos, podendo incluir deleções e duplicações de genes inteiros, com impacto em dosagem gênica e fenótipo", C: "Apenas DNA mitocondrial", D: "Só detectadas por cariótipo", E: "Sem relevância clínica" }, 
    correct: "B", explanation: "Gabarito: Letra B. São grandes apagões ou Ctrl+C gigantes no genoma, fortíssimas causadoras de Autismo sindrômico e atrasos intelectuais severos."
  },
  {
    id: 1067, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A técnica de FISH (Fluorescence In Situ Hybridization) permite:", 
    options: { A: "Sequenciar genes", B: "Detectar sequências específicas de DNA em cromossomos ou tecidos usando sondas marcadas com fluorocromos, permitindo localizar genes, detectar aneuploidias e rearranjos cromossômicos", C: "Amplificar in vitro", D: "Extrair DNA", E: "Medir qPCR" }, 
    correct: "B", explanation: "Gabarito: Letra B. Um farol que 'pinta' o DNA em cores diferentes para ser observado em microscópios avançados em citogenética."
  },
  {
    id: 1068, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "No contexto do reparo de DNA, a via NER (Nucleotide Excision Repair) é particularmente importante para:", 
    options: { A: "Corrigir mismatches", B: "Reparar lesões volumosas que distorcem a hélice do DNA, como dímeros de pirimidina causados por radiação UV e adutos de agentes químicos", C: "Quebras dupla-fita", D: "Erros traducionais", E: "Remover uracila" }, 
    correct: "B", explanation: "Gabarito: Letra B. Falha no NER causa a grave doença Xeroderma Pigmentoso (alergia letal solar e mutagênese de pele)."
  },
  {
    id: 1069, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "A propriedade do código genético de ser 'universal' significa que:", 
    options: { A: "Cada organismo tem o seu próprio", B: "O mesmo conjunto de códons codifica os mesmos aminoácidos na grande maioria dos organismos, com algumas exceções notáveis em mitocôndrias", C: "Só eucariotos usam códons", D: "DNA = RNA", E: "Mesma proteína no mundo todo" }, 
    correct: "B", explanation: "Gabarito: Letra B. Um códon ATG num humano e num besouro produzirão rigorosamente o mesmo aminoácido metionina. A linguagem é literalmente universal."
  },
 { id: 1070, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O genoma mitocondrial (mtDNA) apresenta características únicas que devem ser consideradas no sequenciamento WGS. Assinale a afirmativa CORRETA sobre o mtDNA:", 
    options: { A: "Apresenta baixa taxa de mutação devido ao eficiente sistema de reparo mitocondrial.", B: "É herança biparental na maioria das famílias.", C: "Pode apresentar heteroplasmia, onde células de um mesmo tecido possuem misturas de mitocôndrias com mtDNA mutado e selvagem, exigindo alta cobertura (depth) no sequenciamento para detecção precisa.", D: "Seus genes contêm grandes íntrons que requerem processamento complexo.", E: "Apresenta o mesmo código genético universal nuclear sem exceções." }, 
    correct: "C", explanation: "Gabarito: C. A heteroplasmia (diferentes genomas mitocondriais na mesma célula) faz com que variantes mitocondriais apareçam em frações baixas (ex: 15% dos reads), exigindo coberturas altíssimas (>1000x) para não serem confundidas com erro da máquina." },
  
  { id: 1071, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Em farmacogenômica aplicada ao SUS, o gene CYP2D6 é altamente polimórfico. Uma das variantes mais difíceis de detectar por técnicas convencionais, mas que WGS pode mapear, é a presença de alelos de perda de função por deleção total do gene (ex: alelo *5). Esse tipo de variante é classicamente conhecido como:", 
    options: { A: "Mutação de mudança de matriz (Frameshift)", B: "Variação de Número de Cópias (CNV)", C: "Polimorfismo de Nucleotídeo Único (SNP)", D: "Inversão paracêntrica", E: "Mutação sem sentido (Nonsense)" }, 
    correct: "B", explanation: "Gabarito: B. A deleção do gene inteiro (ou duplicação, como nos alelos ultrarrápidos) caracteriza uma Copy Number Variation (CNV), alterando a dosagem do gene e, consequentemente, a metabolização de fármacos." },
  
  { id: 1072, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Mutações intrônicas profundas (deep intronic mutations) podem causar doenças graves porque:", 
    options: { A: "Alteram a sequência de aminoácidos diretamente", B: "Criam sítios crípticos de splicing, levando à inclusão de pseudoéxons (fragmentos de íntron) no mRNA maduro e resultando em proteínas truncadas ou afuncionais", C: "Sempre deletam o promotor do gene", D: "Inativam o DNA mitocondrial", E: "Impedem a replicação do DNA na fase S" }, 
    correct: "B", explanation: "Gabarito: B. Embora os íntrons não codifiquem proteínas, mutações neles podem 'enganar' o spliceossomo, fazendo-o costurar partes do íntron no RNA maduro (pseudoéxons)." },
  
  { id: 1073, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "A penetrância incompleta é um conceito vital no aconselhamento genético populacional (Genomas SUS). Ela descreve a situação em que:", 
    options: { A: "Um indivíduo carrega a variante patogênica, mas não manifesta o fenótipo (doença) clinicamente", B: "O gene só é expresso na fase embrionária", C: "A doença apresenta sintomas muito leves em todos os portadores", D: "Apenas homens são afetados pela mutação", E: "O gene sofre inativação apenas no cromossomo X" }, 
    correct: "A", explanation: "Gabarito: A. Penetrância incompleta ocorre quando o genótipo da doença está presente, mas por razões genéticas ou ambientais o indivíduo não desenvolve a doença (ex: mutações BRCA1 não causam câncer em 100% das portadoras)." },
  
  { id: 1074, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Variantes de 'perda de função' (Loss-of-Function - LoF) são frequentemente associadas a doenças recessivas, mas podem causar doenças dominantes através do mecanismo de:", 
    options: { A: "Epistasia", B: "Pleiotropia", C: "Haploinsuficiência, onde apenas 50% do produto proteico normal (do alelo selvagem) não é suficiente para manter a função celular normal", D: "Expressão bialélica forçada", E: "Supressão em cis" }, 
    correct: "C", explanation: "Gabarito: C. Na haploinsuficiência, perder a cópia do pai ou da mãe (LoF) gera doença, pois a célula precisa de 100% da proteína para funcionar perfeitamente, tornando o traço dominante." },

  // --- Tecnologias laboratoriais em genômica ---
  { id: 1075, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Um laboratório obteve baixo rendimento (yield) na preparação de bibliotecas NGS usando método PCR-Free. Uma possível causa é:", 
    options: { A: "Uso de DNA inicial excessivamente quantificado por NanoDrop (superestimado), resultando em input real insuficiente, já que o PCR-Free não compensa a perda de moléculas com amplificação", B: "Uso de proteinase K durante a fragmentação", C: "Aumento da concentração de dNTPs", D: "Adição excessiva de PhiX", E: "Tempo de incubação longo demais na etapa de A-tailing" }, 
    correct: "A", explanation: "Gabarito: A. O PCR-Free exige quantidades massivas e precisas de DNA (medidas por fluorimetria - Qubit). Se você usa NanoDrop, ele superestima a quantidade, você coloca menos DNA do que deveria, e sem a PCR para multiplicar a biblioteca, não sobra material para sequenciar." },
  
  { id: 1076, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Ao utilizar DNA extraído de saliva no Genomas SUS, um problema comum no WGS é:", 
    options: { A: "A saliva não contém DNA humano", B: "A presença massiva de DNA bacteriano (microbiota oral), que consome parte dos reads do sequenciamento, reduzindo a cobertura efetiva do genoma humano alvo", C: "As enzimas salivares destroem a flow cell do sequenciador Illumina", D: "A extração de saliva impossibilita a detecção de SNPs", E: "O DNA de saliva é invariavelmente convertido em RNA" }, 
    correct: "B", explanation: "Gabarito: B. Até 50% do DNA extraído de saliva pode vir de bactérias da boca. Isso significa que você pagou para sequenciar o genoma bacteriano e perdeu dados valiosos do paciente." },
  
  { id: 1077, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Sobre as tecnologias de captura para Exoma Clínico (WES), é OBRIGATÓRIO monitorar a métrica de:", 
    options: { A: "Tamanho dos telômeros", B: "On-target rate (proporção de reads mapeados nas regiões exônicas capturadas), pois baixos valores indicam falha na etapa de hibridização/lavagem, desperdiçando o sequenciamento", C: "Sequenciamento de RNA mitocondrial", D: "Rendimento da extração por precipitação em etanol", E: "Tamanho da flow cell vazia" }, 
    correct: "B", explanation: "Gabarito: B. Se a captura falhar (sondas lavadas incorretamente), o sequenciador lerá o genoma inteiro (off-target) em vez de focar apenas nos éxons (on-target), reduzindo drasticamente a cobertura." },
  
  { id: 1078, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Na extração automatizada de ácidos nucleicos por partículas magnéticas, o papel do etanol nas etapas de lavagem (Wash) é:", 
    options: { A: "Lisar a membrana celular", B: "Destruir as DNases", C: "Manter o DNA precipitado e ligado à superfície de sílica das beads, enquanto dissolve e remove os sais caotrópicos e proteínas", D: "Eluir o DNA para fora das beads", E: "Neutralizar o pH da solução" }, 
    correct: "C", explanation: "Gabarito: C. Em altas concentrações de álcool, o DNA permanece insolúvel e grudado na bead magnética, permitindo que a água suja (cheia de sais da lise) seja descartada." },
  
  { id: 1079, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O 'index hopping' é mitigado nas plataformas de alta escala da Illumina (como o NovaSeq) pelo uso de:", 
    options: { A: "Unique Dual Indexes (UDI), onde ambos os adaptadores p5 e p7 recebem barcodes exclusivos, permitindo que reads com índices espúrios trocados sejam filtrados", B: "Aumento da concentração de primers na PCR", C: "Uso de índices simples (Single Index) extremamente longos", D: "Sequenciamento Single-End", E: "Aumento do tempo de sonicação" }, 
    correct: "A", explanation: "Gabarito: A. Plataformas com patterned flow cells têm problema de 'pulo de índice' entre amostras. O UDI funciona como uma senha e contra-senha: se um índice pular, as senhas não vão bater e o algoritmo joga o read fora." },

  { id: 1080, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A formação de 'chimeras' (fragmentos quiméricos) durante o preparo de bibliotecas é agravada por:", 
    options: { A: "Falta de MgCl2", B: "Excesso de ciclos de PCR, onde o DNA parcialmente estendido atua como primer em outra fita não relacionada (template switching), fundindo sequências artificiais", C: "Falta de dNTPs", D: "Sonicação em baixa temperatura", E: "Uso de beads magnéticas velhas" }, 
    correct: "B", explanation: "Gabarito: B. Se você faz muitos ciclos de PCR, os reagentes acabam e as fitas de DNA começam a se hibridizar entre si, criando um DNA frankenstein (quimera) que o computador vai ler como uma grande variante estrutural falsa." },

  { id: 1081, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "No sequenciamento de Terceira Geração (ex: Oxford Nanopore), a principal característica técnica é:", 
    options: { A: "Leitura óptica da emissão de fluorescência de fluoróforos", B: "Medição da alteração da corrente elétrica enquanto a fita única de DNA passa através de um poro proteico (nanoporo), gerando reads ultralongos", C: "Uso obrigatório de bridge amplification", D: "Leitura baseada na liberação de íons hidrogênio (pH)", E: "Requer fragmentação em peças de 150 pb" }, 
    correct: "B", explanation: "Gabarito: B. O Nanopore não usa luz nem câmera. É um sequenciamento elétrico que permite ler moléculas nativas de mais de 100 mil bases de uma só vez." },

  { id: 1082, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A biblioteca NGS foi preparada com excesso crítico de adaptador (adapter dimers). Qual etapa técnica provavelmente falhou?", 
    options: { A: "A lise celular", B: "A quantificação final no Qubit", C: "A limpeza por beads SPRI pós-ligação (clean-up), que deveria ter retido os adaptadores livres na solução e descartado", D: "A etapa de A-tailing", E: "O controle de temperatura ambiente" }, 
    correct: "C", explanation: "Gabarito: C. A etapa de wash com SPRI serve exatamente para lavar as impurezas pequenas (como adaptadores não ligados). Falhar nessa lavagem leva adaptadores direto para a flow cell." },

  { id: 1083, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A validação clínica de uma variante encontrada por WGS muitas vezes requer confirmação ortogonal. O padrão-ouro histórico para confirmar uma mutação de ponto (SNV) é:", 
    options: { A: "Repetir o WGS", B: "Eletroforese em gel de poliacrilamida", C: "Sequenciamento Sanger bidirecional focando na região de interesse", D: "Microarray de CGH", E: "Cariótipo com banda G" }, 
    correct: "C", explanation: "Gabarito: C. Por seu altíssimo grau de certeza para pequenos fragmentos, o método de Sanger ainda é o árbitro final quando uma variante clínica gera dúvida no NGS." },

  { id: 1084, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "No contexto do preparo de biblioteca, o que significa a etapa de 'End Repair'?", 
    options: { A: "Adicionar promotores T7", B: "Preencher as extremidades irregulares (overhangs 5' ou 3') geradas pela fragmentação física usando polimerases, deixando o fragmento 'blunt' (cego)", C: "Digerir as extremidades do DNA com nucleases", D: "Adicionar bases fluorescentes", E: "Reparar dímeros de timina induzidos por UV" }, 
    correct: "B", explanation: "Gabarito: B. Quando quebramos o DNA no ultrassom, ele parte de forma torta. O End-Repair atua como uma 'lixa' enzimática, deixando a ponta reta (blunt end) para o adaptador poder colar." },

  { id: 1085, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Para amostras de sangue cujo processamento e extração de DNA sofrerão atraso (transporte regional no SUS), o uso de tubos PAXgene ou estabilizadores equivalentes visa:", 
    options: { A: "Evaporar a água do sangue", B: "Lisear instantaneamente as células e inativar nucleases/proteases, congelando o perfil molecular no momento da coleta", C: "Permitir o cultivo das células posteriormente", D: "Aumentar a atividade mitótica no transporte", E: "Substituir a necessidade de código de barras" }, 
    correct: "B", explanation: "Gabarito: B. Esses tubos possuem um 'veneno' químico que lisea tudo e destrói as enzimas que degradariam o RNA/DNA, estabilizando a amostra à temperatura ambiente por semanas." },

  { id: 1086, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Ao avaliar a qualidade de RNA para sequenciamento (RNA-Seq), a métrica RIN (RNA Integrity Number) é fundamental. Um RIN = 9 indica:", 
    options: { A: "RNA totalmente degradado", B: "Alta integridade do RNA, com bandas nítidas de 28S e 18S sem smear significativo de degradação basal", C: "Excesso de contaminação por DNA genômico", D: "Presença exclusiva de microRNAs", E: "Baixa concentração volumétrica" }, 
    correct: "B", explanation: "Gabarito: B. A escala RIN vai de 1 (totalmente destruído) a 10 (intacto). O software do bioanalyzer calcula matematicamente a razão entre as ribossomais 28S e 18S para dar essa nota." },

  { id: 1087, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Em bibliotecas de WGS, o viés de composição de bases (GC-bias) é problemático porque:", 
    options: { A: "Regiões extremas (muito ricas em GC ou AT) tendem a amplificar mal na PCR, gerando vales de baixa ou nenhuma cobertura que podem esconder variantes patogênicas", B: "Destrói a flow cell do sequenciador", C: "Inverte as leituras paired-end", D: "Adiciona metilações anormais no arquivo", E: "Produz fragmentos pequenos demais" }, 
    correct: "A", explanation: "Gabarito: A. Fitas com muito GC são difíceis de derreter (abrir) na PCR. Isso faz com que essas regiões (geralmente primeiros éxons) percam reads, parecendo que o paciente tem uma deleção que não existe." },

  { id: 1088, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A biblioteca NGS para sequenciadores Illumina exige 'quantificação funcional'. Isso se refere a:", 
    options: { A: "Medir o volume da pipeta", B: "Usar qPCR visando os adaptadores ligados, quantificando apenas as moléculas que possuem ambos adaptadores (P5 e P7) e que efetivamente vão se ligar na flow cell", C: "Pesar a biblioteca na balança analítica", D: "Verificar a funcionalidade das células", E: "Contar os fragmentos ao microscópio" }, 
    correct: "B", explanation: "Gabarito: B. Quantificar por Qubit não é suficiente. Fragmentos sem adaptador brilham no Qubit, mas não grudam na máquina. A qPCR (quantificação funcional) mede APENAS o que vai colar no vidro." },

  { id: 1089, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "No sequenciamento em grande escala, a contaminação cruzada (cross-contamination) laboratorial intra-placa de 96 poços pode ser confirmada bioinformaticamente por:", 
    options: { A: "Uso exagerado de memória RAM", B: "Elevada taxa de heterozigose excessiva e fração alélica de variantes distantes de ~50% (ex: variantes em 5-10% dos reads) não esperadas", C: "Alta taxa de mapeamento no genoma", D: "Score Q30 acima de 95%", E: "Presença de dímeros de adaptador" }, 
    correct: "B", explanation: "Gabarito: B. Se a amostra é humana normal, os alelos devem ser 100% ou 50%. Se o software mostra muitas variantes com 10%, é porque um paciente 'espirrou' DNA na amostra do outro." },

  // --- Boas Práticas (BPL), Biossegurança e QC ---
  { id: 1090, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Em um laboratório de biologia molecular operando WGS, a pressão de ar da Sala Pré-PCR (Preparo de Reagentes) em relação ao corredor deve ser:", 
    options: { A: "Negativa, para evitar que reagentes saiam", B: "Positiva, garantindo que o ar saia da sala e impedindo que qualquer contaminante externo (como amplicons do corredor) entre e suje os kits limpos", C: "Neutra, não havendo fluxo de ar", D: "Variável com a umidade", E: "Isolada a vácuo" }, 
    correct: "B", explanation: "Gabarito: B. Salas limpas (Mastermix/Pré-PCR) precisam empurrar o ar para fora (pressão positiva) para que partículas sujas não consigam entrar." },
  
  { id: 1091, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Para inativar amplicons de PCR derramados em uma bancada de genômica, o procedimento mais eficaz recomendado pelas boas práticas é:", 
    options: { A: "Apenas passar álcool 70%", B: "Lavar com água deionizada quente", C: "Uso sequencial de solução de hipoclorito de sódio 10% seguida de limpeza e aplicação de reagentes desativadores de DNA específicos (ex: DNAZap)", D: "Deixar exposto ao ar condicionado por 24h", E: "Passar sabão neutro e secar com papel toalha" }, 
    correct: "C", explanation: "Gabarito: C. Amplicons são minúsculos e resistentes. Álcool 70% apenas fixa o DNA na bancada. É necessário destruição química com água sanitária (hipoclorito) ou removedores próprios de ácidos nucleicos." },

  { id: 1092, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Durante a auditoria de um centro parceiro do Genomas SUS, nota-se ausência de 'Audit Trails' no LIMS. Isso fere BPL porque:", 
    options: { A: "Reduz a velocidade do software", B: "Impossibilita rastrear quem inseriu, deletou ou modificou dados laboratoriais, quebrando a integridade e segurança do registro histórico eletrônico", C: "Viola as regras de biossegurança de resíduos", D: "Desalinha os gráficos de Levey-Jennings", E: "Aumenta o consumo de papel no centro" }, 
    correct: "B", explanation: "Gabarito: B. Sem Audit Trail (Trilha de Auditoria), qualquer funcionário pode alterar o resultado de um teste sem deixar rastro. A norma FDA CFR 21 Part 11 exige trilhas inalteráveis." },

  { id: 1093, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "A implementação de lotes novos de reagentes de extração em um laboratório de rotina clínica/pesquisa exige:", 
    options: { A: "O descarte obrigatório de todo o lote antigo, mesmo na validade", B: "Uma validação lote-a-lote: processar amostras de controle conhecidas com o lote antigo e o novo simultaneamente, comparando rendimento, pureza e desempenho na PCR", C: "Autorização prévia do Ministério da Ciência e Tecnologia", D: "Aumento do tempo de sonicação em 15 minutos", E: "Mudança do Procedimento Operacional Padrão (POP)" }, 
    correct: "B", explanation: "Gabarito: B. Nunca assuma que o fabricante mandou um kit perfeito. É obrigatório fazer a 'validação cruzada de lote' para garantir que os resultados continuarão consistentes." },

  { id: 1094, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Ao manusear Fenol-Clorofórmio para extração de DNA, os EPIs essenciais além de luvas e jaleco incluem obrigatoriamente:", 
    options: { A: "Apenas toca descartável", B: "Óculos de proteção química e máscara contra gases, e a manipulação deve ser feita ESTRITAMENTE em capela de exaustão química (não biológica)", C: "Sapatos estéreis isolantes de eletricidade", D: "Roupa com proteção radiológica", E: "Cabine de Segurança Biológica de Fluxo Laminar" }, 
    correct: "B", explanation: "Gabarito: B. Fenol causa queimaduras graves e seus vapores são tóxicos para o sistema nervoso. A Cabine de Fluxo Laminar joga o ar na sua cara, a manipulação exige Capela de Exaustão Química." },

  { id: 1095, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "A falta de calibração anual dos blocos térmicos (Termocicladores) pode resultar em:", 
    options: { A: "Alteração da cor do DNA extraído", B: "Falha no preparo de bibliotecas, pois variações de poucos graus alteram a eficiência enzimática da fragmentação, end-repair e bias de amplificação na PCR", C: "Problemas no software de demultiplexação", D: "Oxidação dos poços de plástico", E: "Aumento no volume de tampão consumido" }, 
    correct: "B", explanation: "Gabarito: B. Enzimas de NGS operam em janelas térmicas estreitas. Se o termociclador diz que está a 37ºC mas o bloco físico está a 40ºC, você perderá a biblioteca." },

  { id: 1096, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "No contexto de BPL para genômica (RDC ANVISA), a retenção de 'Contramostras' de DNA (alíquotas de guarda) serve primariamente para:", 
    options: { A: "Serem vendidas posteriormente", B: "Garantir material idêntico e preservado para reanálise em caso de questionamento de resultados, auditoria ou falha na corrida principal de sequenciamento", C: "Dobrar os lucros do laboratório", D: "Doar a bancos de sangue", E: "Testar a eficiência dos freezers do laboratório" }, 
    correct: "B", explanation: "Gabarito: B. A contramostra é a garantia de segurança do laboratório contra processos legais e falsos positivos, garantindo a rastreabilidade original." },

  { id: 1097, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "O Controle Interno de Qualidade (CIQ) é monitorado usando a regra 1(3s) de Westgard. Isso significa que a corrida será rejeitada se:", 
    options: { A: "Uma amostra for sequenciada 3 vezes com o mesmo erro", B: "O valor da amostra-controle ultrapassar 3 desvios padrão para cima ou para baixo da média histórica do laboratório, indicando erro sistemático ou aleatório grave", C: "O custo aumentar em 300%", D: "O sequenciador parar por 3 segundos", E: "3 funcionários diferentes cometerem o mesmo erro" }, 
    correct: "B", explanation: "Gabarito: B. Essa é a regra ouro laboratorial. Valores fora de 3 desvios padrão da média são anomalias graves inaceitáveis estatisticamente." },

  { id: 1098, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Um derramamento de 10 mL de sangue total de paciente desconhecido numa centrífuga de laboratório NB-2 exige, na contenção primária, o uso de:", 
    options: { A: "Desinfecção com álcool isopropílico absoluto aquecido", B: "Uso de EPI completo pelo operador e aplicação de solução de hipoclorito de sódio ou desinfetante hospitalar compatível, aguardando tempo de contato antes de recolher com papel absorvente", C: "Esponja estéril e descarte imediato no lixo reciclável", D: "Aquecimento da centrífuga a 100ºC", E: "Neutralização por amônia" }, 
    correct: "B", explanation: "Gabarito: B. Não basta secar, a superfície deve ficar submersa em desinfetante eficaz (hipoclorito) por 20 a 30 minutos (tempo de contato) para destruir agentes como HBV ou HIV." },

  { id: 1099, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "O controle de temperatura de uma sala de sequenciamento NovaSeq/NextSeq deve ser mantido estritamente controlado (geralmente 22°C ± 2) primariamente por que:", 
    options: { A: "Os funcionários precisam de conforto térmico extremo", B: "As câmeras CCD, lasers e lentes ópticas de super-resolução dos sequenciadores são altamente sensíveis à dilatação térmica, o que distorce o foco óptico e arruína a chamada das bases", C: "O DNA derrete acima dessa temperatura instantaneamente", D: "Evita a formação de ozônio na sala", E: "O software do Linux é dependente da temperatura" }, 
    correct: "B", explanation: "Gabarito: B. Uma variação de 3ºC na sala faz as peças de vidro e metal do laser dilatarem micrômetros, perdendo o foco dos clusters nanométricos." },

  // --- Ética em pesquisa e estudos multicêntricos ---
  { id: 1100, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "No compartilhamento de amostras biológicas do banco Genomas SUS para análise de bioinformática no exterior, a CONEP exige:", 
    options: { A: "Apenas que o laboratório estrangeiro pague pelo transporte", B: "Que o remetente retenha amostras depositárias no Brasil e firme um Termo de Transferência de Material (MTA), proibindo uso além do objetivo original sem autorização do CEP brasileiro", C: "Tradução de todos os prontuários para o inglês", D: "Acesso permanente dos estrangeiros ao sistema do SUS", E: "Venda dos dados com royalties ao paciente" }, 
    correct: "B", explanation: "Gabarito: B. O patrimônio genético permanece brasileiro. O laboratório externo é apenas prestador de serviço/colaborador, regulado por um MTA (Material Transfer Agreement) estrito." },

  { id: 1101, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Devolução de resultados: Se o pipeline de WGS identificar uma variante patogênica em BRCA1 (Gene ACMG-73) em um participante assintomático, as boas práticas éticas em estudos de genômica populacional preconizam:", 
    options: { A: "Ignorar, pois não era o foco do estudo", B: "Acionar o protocolo de achados incidentais: revalidar a amostra por método ortogonal (Sanger) no mesmo paciente e comunicar o voluntário caso ele tenha optado por receber esse tipo de informação no TCLE", C: "Informar a família sem o paciente saber", D: "Publicar no Twitter os riscos", E: "Internar o voluntário compulsoriamente" }, 
    correct: "B", explanation: "Gabarito: B. Essa mutação confere altíssimo risco de câncer. O protocolo prevê que, se o paciente assinou querer saber, o resultado deve ser confirmado isoladamente antes de gerar pânico." },

  { id: 1102, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Estudos com populações originárias/indígenas no Brasil (com interesse genômico no Genomas SUS) requerem aprovação especial porque:", 
    options: { A: "Eles possuem genes exclusicos de alienígenas", B: "São populações vulneráveis cujos direitos e saberes tradicionais possuem marco regulatório de proteção adicional (incluindo aprovação obrigatória de colegiados representativos - FUNAI e CONEP/Brasília)", C: "Eles não são considerados brasileiros", D: "Não é necessário aprovar", E: "A lei proíbe sequenciamento indígena totalmente" }, 
    correct: "B", explanation: "Gabarito: B. A CONEP exige ritos extras para evitar a exploração biopirata de povos tradicionais sob o verniz da pesquisa genômica (Resolução nº 304)." },

  { id: 1103, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "O Comitê Independente de Monitoramento de Dados (DMC - Data Monitoring Committee) em um ensaio multicêntrico tem como objetivo principal:", 
    options: { A: "Corrigir bugs de software do LIMS", B: "Revisar dados acumulados de eficácia e segurança durante o estudo, possuindo autoridade para recomendar interrupção antecipada do estudo se danos inaceitáveis forem detectados", C: "Escrever os artigos finais de forma autônoma", D: "Demultiplexar reads", E: "Pagar as bolsas dos cientistas" }, 
    correct: "B", explanation: "Gabarito: B. É o conselho externo que zela pela vida dos pacientes. Se a genômica indicar grave risco nos pacientes em meio à pesquisa, eles abortam o ensaio para proteger as vidas." },

  { id: 1104, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "O conceito de 'Risco de Reidentificação' em bases de dados genômicas anonimizadas refere-se a:", 
    options: { A: "Risco do paciente esquecer sua senha", B: "O risco de pesquisadores conseguirem cruzar os dados de um perfil genômico com bases públicas (genealogia, SNPs demográficos) revelando a identidade de uma pessoa supostamente anônima", C: "Risco de trocar a etiqueta do tubo", D: "Identificação da variante na máquina", E: "Perda da identificação da placa" }, 
    correct: "B", explanation: "Gabarito: B. O DNA nunca é 100% anônimo. Se a pessoa jogou dados em sites de ancestralidade, a base do governo, mesmo sem CPF, pode ser cruzada com a comercial identificando o paciente." },

  { id: 1105, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "O que deve acontecer caso um indivíduo exerça seu direito de revogação de consentimento num biobanco genômico?", 
    options: { A: "Ele paga uma multa de rescisão", B: "Seu material biológico deve ser destruído/descartado, e o uso futuro de seus dados em novas análises deve ser suspenso, garantindo pleno respeito à autonomia", C: "Os dados já publicados devem ser apagados da internet", D: "Apenas o DNA de saliva é apagado", E: "Ele perde o direito de usar o SUS" }, 
    correct: "B", explanation: "Gabarito: B. A autonomia impera. A partir do momento da retirada da assinatura, a instituição cessa imediatamente o uso das alíquotas remanescentes." },

  { id: 1106, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Na redação de Standard Operating Procedures (SOPs) de extração em pesquisa multicêntrica, a principal exigência técnica da ISO 15189 é:", 
    options: { A: "Estar disponível em 3 idiomas diferentes", B: "Ter rastreabilidade de controle de versões, controle de revisão periódica e estar inequivocamente disponível na bancada do operador", C: "Ter mais de 50 páginas", D: "Ser assinado por um Ministro de Estado", E: "Ficar guardado em cofre fechado" }, 
    correct: "B", explanation: "Gabarito: B. Todo POP precisa de controle de versão (ex: Versão 2.1) para que, se um lote dar erro, possamos ver qual instrução exatamente o biomédico seguiu naquele mês." },

  { id: 1107, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "A Repartição de Benefícios estipulada pelo SISGEN/CGEN baseia-se no princípio de que:", 
    options: { A: "Os lucros das pesquisas pertencem apenas ao estado de origem da amostra", B: "Ao utilizar recursos genéticos nativos e obter retorno comercial/tecnológico, o pesquisador/empresa deve reverter ganhos monetários ou não monetários para a sociedade e povos originários", C: "A genômica não pode ser comercializada", D: "Laboratórios estrangeiros são isentos da lei brasileira", E: "Patentes biológicas humanas são permitidas" }, 
    correct: "B", explanation: "Gabarito: B. É o arcabouço de proteção contra pirataria da biodiversidade (Lei 13.123/15). O lucro sobre nosso genoma deve retornar em benefícios de saúde ao nosso país." },

  { id: 1108, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Segundo a Resolução CNS 441, biobancos e biorrepositórios diferem conceitualmente em pesquisa porque:", 
    options: { A: "São sinônimos absolutos", B: "O Biorrepositório é criado temporariamente para uma pesquisa específica e finda com ela; o Biobanco tem caráter institucional e perene para múltiplas pesquisas não previstas inicialmente", C: "Biorrepositório guarda tecido morto, Biobanco tecido vivo", D: "Biobanco guarda bancos de dados digitais apenas", E: "Biorrepositório é particular, Biobanco é público" }, 
    correct: "B", explanation: "Gabarito: B. Biobancos são bibliotecas estruturadas a longo prazo. Biorrepositórios são 'gavetas' temporárias enquanto o projeto específico é escrito e finalizado." },

  { id: 1109, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "O processo de validação analítica para incorporar um painel genômico de BRCA1/2 na rotina pública (estudos) engloba testar:", 
    options: { A: "Apenas se ele funciona para a população Europeia", B: "Reprodutibilidade (precisão intra e inter-ensaios), especificidade analítica, limite de detecção de variantes raras e acurácia com material de referência atestado", C: "Apenas a marca do kit na ANVISA", D: "A calibração do termociclador", E: "O sabor da solução tampão" }, 
    correct: "B", explanation: "Gabarito: B. Para se transformar de pesquisa para prática rotineira (Clinical Grade), o painel passa por estresse exaustivo confirmando as métricas de segurança." },

  // --- Noções de saúde pública e ética ---
  { id: 1110, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "Um dos pilares da implementação da genômica no Sistema Único de Saúde é a transição da pesquisa pura para a 'Saúde de Precisão'. Isso se reflete na:", 
    options: { A: "Proibição do uso de vacinas", B: "Substituição do paradigma de 'um tratamento para todos' pela identificação de subgrupos genômicos da população que melhor respondem a terapias específicas ou que necessitam de rastreio precoce diferenciado", C: "Privatização dos bancos de sangue do SUS", D: "Exclusividade de leitos para pacientes triados", E: "Fim da atenção primária nos postos de saúde" }, 
    correct: "B", explanation: "Gabarito: B. Genômica populacional não quer substituir o posto de saúde, quer ajudar o médico a saber de antemão qual remédio exato funcionará ou falhará miseravelmente naquele paciente específico." },

  { id: 1111, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "Qual destas interações farmacogenômicas já impacta de maneira real a prescrição oncológica em sistemas públicos, devido à toxicidade letal severa?", 
    options: { A: "Mutações em FOXP2 e uso de analgésicos", B: "Mutações no gene DPYD (Dihidropirimidina Desidrogenase) e uso do quimioterápico 5-Fluorouracil (5-FU)", C: "Variantes de HLA e uso de Tylenol", D: "Gene da lactase e insulina", E: "Expressão de queratina e quimioterapia" }, 
    correct: "B", explanation: "Gabarito: B. Portadores da deficiência de DPYD (mutação clássica farmacogenômica) morrem envenenados se receberem as doses padronizadas da droga comum contra Câncer Colorretal. A genômica antevê e reduz a dose." },

  { id: 1112, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "Em relação ao Teste do Pezinho (Triagem Neonatal) e a genômica no SUS, a evolução natural esperada é:", 
    options: { A: "Pular etapas bioquímicas e usar apenas Raio-X", B: "Uso combinado de proteômica (Espectrometria de Massas) confirmada por WGS rápido nos casos alterados (Teste Molecular Reflexo), para diagnóstico etiológico precoce e início de terapias como TRG (ex: Zolgensma)", C: "Cancelar os testes moleculares", D: "Cobrar pelo exame no primeiro ano", E: "Isolar as crianças afetadas" }, 
    correct: "B", explanation: "Gabarito: B. A triagem de 1ª linha sempre será a gota de sangue/bioquímica por ser barata. Porém, quando detecta algo errado, a 2ª linha moderna passa a ser o WGS instantâneo do bebê." },

  { id: 1113, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "A Rede Nacional de Dados em Saúde (RNDS) tem como propósito em uma era de genômica governamental:", 
    options: { A: "Atuar como plataforma exclusiva do IBGE", B: "Ser o ecossistema tecnológico e semântico (usando FHIR, por exemplo) que unifica prontuários eletrônicos de múltiplos hospitais, base essencial para conectar dados genômicos ao histórico do paciente brasileiro", C: "Deletar dados anualmente", D: "Abolir receitas médicas físicas", E: "Controlar acesso físico aos hospitais" }, 
    correct: "B", explanation: "Gabarito: B. Sem prontuário único interoperável (RNDS), a genômica não serve de nada, pois o médico no interior não teria como ler que o paciente foi sequenciado na capital do estado." },

  { id: 1114, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "Doenças Monogênicas Raras sobrecarregam as famílias e o sistema judiciário (judicialização da saúde). A inserção do WGS de trios (Paciente-Pai-Mãe) no início do quadro clínico visa:", 
    options: { A: "Prolongar os dias de internação da família", B: "Encerrar a 'odisseia diagnóstica', poupando o sistema de custos absurdos em ressonâncias inconclusivas, internações empíricas inúteis e dando fechamento à família para o manejo sintomático adequado", C: "Gerar provas em processos cíveis", D: "Substituir testagem de DSTs", E: "Diminuir o contato humano-médico" }, 
    correct: "B", explanation: "Gabarito: B. O sequenciamento é caro, mas estudos de economia da saúde provam que sequenciar a família logo no primeiro mês economiza milhares de reais do SUS que seriam gastos em anos de UTIs às cegas." },

  { id: 1115, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "O conceito de Custo-Efetividade de WGS num sistema como o SUS avalia:", 
    options: { A: "Se o equipamento custa menos de 10 mil reais", B: "A relação entre o custo investido na tecnologia molecular frente aos anos de vida ganhos com qualidade (QALYs) ou gastos não incorridos por internações evitadas no longo prazo", C: "Apenas qual é o teste mais rápido do mercado", D: "A capacidade do teste de aprovar faturamento", E: "Se o paciente gosta do método" }, 
    correct: "B", explanation: "Gabarito: B. Avaliação de Tecnologias em Saúde (ATS - feita pela CONITEC) usa parâmetros econômicos (ex: Dólares por QALY) para provar que a prevenção de um agravo severo paga a máquina milionária da genômica." },

  { id: 1116, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "Muitos painéis genômicos importados possuem viés de ancestralidade. Como isso afeta o SUS brasileiro?", 
    options: { A: "Não afeta, genoma é universal", B: "Resulta em alta taxa de Variantes de Significado Incerto (VUS) nas populações não-brancas, gerando subdiagnóstico e exacerbando a desigualdade em saúde", C: "Aumenta a precisão para índigenas", D: "Torna mais barato o tratamento oncológico", E: "Causa hiper-diagnóstico" }, 
    correct: "B", explanation: "Gabarito: B. Se a ciência baseou seus escores na genética caucasiana, uma mutação encontrada num afrodescendente brasileiro pode ser classificada como VUS, negando o benefício preventivo àquela família (Racismo genômico estrutural)." },

  { id: 1117, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "Vigilância Genômica Integrada (One Health) se popularizou. Em laboratórios centrais do governo (LACENs/SUS), significa:", 
    options: { A: "Sequenciar animais extintos", B: "Usar NGS para rastrear evolução simultânea de cepas de patógenos (ex: dengue, Covid, resistências bacterianas hospitalares), vetor ambiental e as respostas imunes das populações humanas associadas", C: "Investigar criminalidade urbana com DNA", D: "Rastrear árvores genealógicas sem fim epidemiológico", E: "Sequenciar apenas bactérias gram-positivas" }, 
    correct: "B", explanation: "Gabarito: B. Saúde Única (One Health) entende que a saúde animal, humana e ambiental está interligada, tudo codificado e monitorado pelo DNA circulante nos patógenos e reservatórios." },

  { id: 1118, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "O 'aconselhamento genético' no SUS atua fortemente pré e pós testagem de genômica populacional para:", 
    options: { A: "Convencer a não ter filhos", B: "Garantir a autonomia de decisão, traduzindo as complexidades estatísticas do risco (ex: 20% de ter câncer) para linguagem acessível, abordando as implicações familiares e psicossociais dos laudos", C: "Obrigar o paciente a operar a mama preventivamente", D: "Dar receitas controladas de psicotrópicos", E: "Forçar rastreio em toda a vizinhança" }, 
    correct: "B", explanation: "Gabarito: B. Não se pode entregar um PDF cheio de mutações nas mãos do cidadão. O geneticista/conselheiro acolhe, esclarece que 'risco não é diagnóstico absoluto' e guia as tomadas preventivas." },

  { id: 1119, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "O impacto da genômica do 'Traço Falciforme' no Norte do Brasil é vital porque:", 
    options: { A: "Causa gripe severa", B: "Carreadores da mutação (HbAS) costumam ser assintomáticos, mas ao reproduzirem com parceiros locais também com o traço (alta incidência em locais afro-indígenas), o risco do recém-nascido ter a severa Anemia Falciforme de doença falciforme (HbSS) dispara", C: "O traço protege contra malária apenas no primeiro ano de vida", D: "A condição só atinge moradores urbanos", E: "Exige quimioterapia no 1º mês de vida" }, 
    correct: "B", explanation: "Gabarito: B. A genômica preventiva no casamento (rastreio de portadores assintomáticos) permite orientação familiar profunda sobre a probabilidade (25%) de ter bebês que exigirão intensos cuidados com dores isquêmicas da doença SS." },
  // --- Tecnologias laboratoriais em genômica (NGS) ---
  { id: 1120, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Durante a extração de DNA de amostras de tecido FFPE (formol-fixado e emblocadas em parafina) para um painel oncológico, nota-se uma alta frequência de transições C>T na análise bioinformática. A principal causa química desse artefato pré-analítico é:", 
    options: { A: "Erro da enzima Taq polimerase", B: "Desaminação de citosinas mediada pelo formol, convertendo citosinas em uracilas, que a polimerase lê como timinas", C: "Oxidação por radicais livres gerando 8-oxo-guanina", D: "Dímeros de pirimidina causados por luz UV na capela", E: "Troca de índices (index hopping) na flow cell" }, 
    correct: "B", explanation: "Gabarito: B. O formol causa a desaminação da citosina, que vira uracila. Durante a PCR da biblioteca, a polimerase insere um 'A' onde vê o 'U', gerando falsas mutações C>T. O tratamento prévio com UDG (Uracil-DNA Glicosilase) é usado para corrigir isso." },
  
  { id: 1121, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Em um protocolo de size selection (seleção de tamanho) utilizando beads magnéticas SPRI (Solid Phase Reversible Immobilization), um técnico deseja excluir fragmentos MENORES que 300 pb. O ajuste correto no protocolo deve ser:", 
    options: { A: "Aumentar a razão bead:amostra (ex: 1.8X)", B: "Diminuir a razão bead:amostra (ex: 0.6X), pois concentrações menores de PEG favorecem a ligação apenas de fragmentos maiores", C: "Aumentar o tempo de incubação com etanol 70%", D: "Utilizar isopropanol no lugar de etanol", E: "Aumentar o pH do tampão de eluição" }, 
    correct: "B", explanation: "Gabarito: B. Quanto menor a quantidade de solução de beads (que contém PEG e Sal), apenas os fragmentos grandes conseguem precipitar e se ligar à sílica. Ratios altos fazem até os fragmentos muito pequenos grudarem." },

  { id: 1122, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A biblioteca final de WGS Illumina do paciente apresenta um pico limpo no TapeStation em 450 pb. Sabendo que os adaptadores Illumina (P5 + P7) somam aproximadamente 120 pb a 140 pb, qual é o tamanho médio aproximado do fragmento original de DNA (insert size)?", 
    options: { A: "450 pb", B: "570 pb", C: "150 pb", D: "310 a 330 pb", E: "800 pb" }, 
    correct: "D", explanation: "Gabarito: D. O pico do TapeStation mostra o fragmento TOTAL (Inserto + Adaptadores). Para saber o tamanho do inserto real (o DNA do paciente), subtrai-se ~130 pb dos adaptadores do tamanho total. 450 - 130 = 320 pb." },

  { id: 1123, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Ao utilizar a plataforma Covaris (AFA) para fragmentação de DNA, os três parâmetros principais que o biologista deve ajustar para definir o tamanho exato do fragmento alvo são:", 
    options: { A: "Ciclos de PCR, temperatura de anelamento e tempo de extensão", B: "Peak Incident Power (PIP), Duty Factor (%) e Cycles per Burst (CPB)", C: "Volume de etanol, tempo de secagem e volume de eluição", D: "Temperatura do bloco, concentração de MgCl2 e concentração de primers", E: "Voltagem da cuba, tempo de corrida e concentração de agarose" }, 
    correct: "B", explanation: "Gabarito: B. A sonicação focada é regulada pela potência do pulso acústico (PIP), pela frequência do pulso (Duty Factor) e pelo número de ondas por pulso (CPB). Ajustar esses 3 parâmetros define se o DNA vai quebrar em 150bp ou 800bp." },

  { id: 1124, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Bibliotecas preparadas por Tagmentação (ex: Nextera/Illumina DNA Prep) utilizam a enzima Transposase. Um detalhe crítico que o bioinformata observará nos dados gerados por este método é:", 
    options: { A: "Total ausência de reads duplicados", B: "Um leve viés de inserção nas extremidades dos reads, pois a transposase tem preferência por sequências específicas no DNA humano para realizar o corte", C: "Presença de DNA mitocondrial exclusivo", D: "Fragmentos com exatos 150 pb, sem variação de tamanho", E: "Alta taxa de transições C>T no final do read" }, 
    correct: "B", explanation: "Gabarito: B. A Tn5 transposase não corta o DNA de forma 100% randômica como a força mecânica do Covaris; ela 'gosta' mais de alguns motivos genéticos, gerando um leve viés de quebra que a bioinformática precisa computar." },

  { id: 1125, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A quantificação final de uma biblioteca WGS resultou em 10 nM por qPCR (KAPA) e 40 nM via Qubit + TapeStation. Qual concentração deve ser usada para os cálculos de diluição (loading) na Flow Cell do NovaSeq?", 
    options: { A: "A média entre os dois: 25 nM", B: "A do Qubit (40 nM), pois é uma leitura física direta", C: "A do qPCR (10 nM), pois ela reflete apenas a 'biblioteca viável', ou seja, as moléculas que possuem ambos os adaptadores e gerarão clusters", D: "A maior concentração encontrada, para garantir cluster density máximo", E: "Nenhuma, a amostra deve ser descartada devido à discordância" }, 
    correct: "C", explanation: "Gabarito: C. Se o Qubit leu 40nM e o qPCR leu 10nM, significa que 30nM da sua biblioteca é DNA 'morto' (sem os adaptadores corretos nas pontas). Se você carregar na flow cell baseando-se no Qubit, a máquina ficará subcarregada." },

  { id: 1126, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A incorporação de UMIs (Unique Molecular Identifiers) no preparo da biblioteca é especialmente obrigatória para:", 
    options: { A: "Estudos de microbioma fecal", B: "Sequenciamento PCR-Free de alto input", C: "Identificação de biópsia líquida (ctDNA) em oncologia, onde se busca variantes com frequência alélica ultrabaixa (< 1%), sendo necessário distinguir mutações reais de erros estocásticos da PCR", D: "Tipagem HLA por sequenciamento Sanger", E: "Preparo de biblioteca de RNA total sem depleção de ribossomos" }, 
    correct: "C", explanation: "Gabarito: C. Na biópsia líquida, procurar um DNA de tumor no sangue é achar agulha no palheiro. O UMI é um código de barras colocado em CADA molécula original ANTES da PCR. Assim, a bioinformática sabe o que é cópia e o que é molécula real." },

  { id: 1127, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Em um painel de exoma (WES), a métrica 'Fold-80 penalty' avalia:", 
    options: { A: "A quantidade de DNA degradado abaixo de 80 pb", B: "A uniformidade da captura: quanto DNA a mais é necessário sequenciar para elevar 80% do alvo à cobertura média atual", C: "A proporção de erros de fase do sequenciador", D: "A quantidade de tempo necessária para lavar as sondas hibridizadas", E: "O custo por megabase sequenciada" }, 
    correct: "B", explanation: "Gabarito: B. Uma métrica crítica do Exoma. Se o Fold-80 for alto, significa que a captura foi muito desigual (alguns éxons capturaram muito, outros nada), exigindo jogar muito mais dinheiro na corrida para nivelar a cobertura." },

  { id: 1128, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A utilização de adaptadores com índices combinatórios (Combinatorial Dual Index - ex: i5-01 com i7-01; i5-01 com i7-02) em sequenciadores modernos como o NovaSeq sofre um grave problema técnico chamado:", 
    options: { A: "Desaminação química", B: "Dímeros de adaptadores contínuos", C: "Index Hopping, gerando falsas atribuições de reads (cross-talk) devido a oligonucleotídeos livres que pulam de um fragmento para outro durante o clustering na flow cell", D: "Tagmentação prematura", E: "Sobrecarga de RAM do sequenciador" }, 
    correct: "C", explanation: "Gabarito: C. A ExAmp chemistry das patterned flow cells sofre desse defeito. A solução obrigatória atual é usar UDI (Unique Dual Indexes), onde nenhuma amostra compartilha o mesmo i5 ou i7 com outra." },

  { id: 1129, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Durante a extração automatizada de DNA por sílica magnética, a placa onde ocorre o processo 'Wash' final sofre secagem excessiva (over-drying) no bloco de aquecimento. O efeito direto disso será:", 
    options: { A: "Aumento significativo da concentração do DNA no Qubit", B: "Eluição ineficiente, pois o DNA ficará fisicamente aderido de forma quase irreversível às microesferas de sílica, causando baixo rendimento", C: "Fragmentação acentuada do DNA (queda do DIN)", D: "Contaminação cruzada com os poços adjacentes", E: "Aumento de proteínas no eluato (queda do ratio 260/280)" }, 
    correct: "B", explanation: "Gabarito: B. O tampão de eluição (água/TE) não consegue reidratar e soltar o DNA de uma matriz de sílica se ela secar a ponto de rachar." },

  { id: 1130, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Uma métrica visual do Illumina Sequencing Analysis Viewer (SAV) é a queda drástica de 'Q-score' nas últimas 20 bases da leitura (Read 1). O fator químico mais associado a esse declínio em leituras longas (ex: 150bp) é:", 
    options: { A: "Falta de MgCl2", B: "Phasing e Pre-phasing acumulados: dessincronização progressiva das fitas de DNA dentro do mesmo cluster, atrapalhando a emissão uníssona da cor correta para o sensor CCD", C: "Acúmulo de etanol na flow cell", D: "Degradação da ponteira do pipetador robótico", E: "Baixa concentração de carregamento da biblioteca" }, 
    correct: "B", explanation: "Gabarito: B. Conforme os ciclos avançam, algumas moléculas no cluster 'atrasam' a incorporação e outras 'adiantam'. A câmera passa a ver um borrão de luz mista em vez de uma cor nítida, baixando a confiança (Q-score) drasticamente no final do read." },

  { id: 1131, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O Controle de Qualidade de NGS aponta um altíssimo percentual de 'Optical Duplicates' na corrida de WGS do paciente. Diferente dos duplicados de PCR, os Optical Duplicates são gerados:", 
    options: { A: "Durante a termociclagem na bancada de preparo da biblioteca", B: "No software de alinhamento BWA, devido a falhas no algoritmo BWT", C: "Na flow cell do sequenciador, quando o cluster espalha ou a câmera 'lê' o brilho de um único cluster grande como se fossem dois clusters adjacentes", D: "Durante o end-repair", E: "Pela contaminação de poços adjacentes na placa de 96" }, 
    correct: "C", explanation: "Gabarito: C. A câmera do equipamento se confunde e contabiliza o mesmo amontoado de DNA duas vezes. O software (MarkDuplicates) identifica isso porque os dois reads terão coordenadas x,y (posicionamento físico no vidro) virtualmente idênticas." },

  { id: 1132, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O controle de qualidade espectrofotométrico da amostra 14 do estudo apresentou uma razão A260/A230 = 0.8. A ação laboratorial adequada antes de seguir para o preparo de biblioteca NGS é:", 
    options: { A: "Seguir em frente, pois apenas o A260/A280 importa para NGS", B: "Purificar o DNA novamente utilizando precipitação etanólica ou clean-up com beads magnéticas para remover contaminantes (sais/fenol) que podem inibir as enzimas da biblioteca", C: "Adicionar mais proteinase K na solução", D: "Aquecer a amostra a 95ºC para evaporar o sal", E: "Adicionar RNAse A" }, 
    correct: "B", explanation: "Gabarito: B. Uma razão A260/230 abaixo de 1.8 indica forte contaminação com sais caotrópicos, fenol ou carboidratos. Enzimas ligases e polimerases do NGS serão severamente inibidas." },

  { id: 1133, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Um técnico inverte o tubo com heparina (tampa verde) em vez do tubo EDTA (tampa roxa) no recebimento, extrai o DNA e envia para a central. Ao preparar a biblioteca, a reação falha completamente. Isso ocorre porque a heparina:", 
    options: { A: "Destrói a estrutura secundária do DNA instantaneamente", B: "Muda a cor do DNA, interferindo no leitor do sequenciador", C: "Copolimeriza com o DNA durante a extração e atua como um potente inibidor competitivo da Taq Polimerase e outras enzimas por ser altamente carregada negativamente", D: "Transforma o genoma humano em pequenos fragmentos de 10pb", E: "Inativa exclusivamente as proteases do kit" }, 
    correct: "C", explanation: "Gabarito: C. A heparina é um polissacarídeo ultranegativo, muito semelhante fisicamente à fita do DNA. A polimerase tenta se ligar à heparina em vez do DNA do paciente, paralisando a reação de amplificação/ligação." },

  { id: 1134, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Por que as técnicas de Sequenciamento de Long-Reads (PacBio HiFi, Nanopore) são superiores ao Illumina (Short-Reads) na resolução de genes como o SMN1/SMN2 (Atrofia Muscular Espinhal) ou CYP2D6?", 
    options: { A: "Elas têm menor custo por base processada", B: "Suas leituras extensas (milhares de pb) conseguem abranger o gene inteiro, mapeando e distinguindo perfeitamente os genes verdadeiros dos seus pseudogenes homólogos com altíssima similaridade (>99%)", C: "O Illumina não consegue sequenciar éxons nesses genes", D: "Os genes citados são compostos por RNA, e não DNA", E: "Elas não requerem preparo de bibliotecas prévias" }, 
    correct: "B", explanation: "Gabarito: B. Alguns genes essenciais têm 'cópias' quase idênticas no genoma (pseudogenes). Leituras curtas (150pb) da Illumina se perdem e não sabem de qual gene vieram. Leituras longas cruzam a região inteira como uma ponte, dando a coordenada exata." },

  // --- Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade ---
  { id: 1135, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "A RDC nº 50/2002 e normativas de BPL exigem que o layout de um laboratório de genômica obedeça ao 'fluxo unidirecional' (Caminho Limpo para Caminho Sujo). Qual o racional técnico principal dessa medida?", 
    options: { A: "Facilitar o trabalho de limpeza das equipes de higienização", B: "Manter a separação de temperatura para conservação dos reagentes", C: "Evitar que amplicons de DNA (produtos de PCR concentrados em bilhões de cópias) da sala de análise pós-amplificação retornem fisicamente nas roupas/equipamentos e contaminem os reagentes limpos da sala pré-PCR", D: "Garantir a iluminação correta dos microscópios ópticos", E: "Impedir que reagentes voláteis entrem nos pulmões do operador" }, 
    correct: "C", explanation: "Gabarito: C. A contaminação por amplicons é o pesadelo de qualquer biologia molecular. 1 gota de ar de uma sala Pós-PCR carrega trilhões de cópias de DNA alvo, o suficiente para gerar falsos positivos eternos no laboratório inteiro se não for isolada." },
  
  { id: 1136, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "O Controle Preditivo de Qualidade em um sequenciador de grande porte determina que, antes de processar 384 amostras clínicas, deve-se realizar a lavagem de manutenção (Maintenance Wash). A finalidade é:", 
    options: { A: "Acelerar a velocidade dos processadores computacionais", B: "Esterilizar a máquina contra vírus", C: "Remover fluoróforos residuais e evitar a cristalização ou entupimento das agulhas e mangueiras de fluidos (fluidics system), prevenindo falha no envio de reagentes à flow cell", D: "Lubrificar as engrenagens da tampa térmica", E: "Calibrar o leitor de código de barras das placas" }, 
    correct: "C", explanation: "Gabarito: C. O sistema de fluidos da máquina Illumina lida com corantes fluorescentes e sais concentrados. Um entupimento nas agulhas de injeção destrói uma corrida milionária inteira. As lavagens com Tween 20 e NaOCl são críticas." },

  { id: 1137, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Para validação de um ensaio de WES diagnóstico no SUS, o conceito de 'Sensibilidade Analítica' (ou Limite de Detecção) define:", 
    options: { A: "A capacidade do teste de identificar corretamente pacientes que não possuem a doença (Verdadeiro Negativo)", B: "A frequência com que o teste gera falsos positivos em indivíduos sadios", C: "A menor Frequência Alélica Variável (VAF) que o pipeline consegue detectar com confiança estatística (ex: detectar variantes presentes em apenas 5% dos reads em tumores)", D: "O custo mínimo por megabase", E: "A velocidade de entrega do laudo médico" }, 
    correct: "C", explanation: "Gabarito: C. A sensibilidade analítica (LOD) mede a capacidade 'microscópica' do ensaio. Se uma mutação tumoral está presente em apenas 3 de cada 100 células no tubo, o sequenciamento é sensível o bastante para detectá-la?" },

  { id: 1138, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "A validação da eficácia do ciclo de esterilização das autoclaves do laboratório de genômica é feita obrigatoriamente através de:", 
    options: { A: "Apenas fita termocrômica (fita zebrada), que muda de cor a 121°C", B: "Indicadores Biológicos (ampolas com esporos de Geobacillus stearothermophilus) processados junto com a carga, incubados e avaliados quanto à sobrevivência microbiana", C: "Sensor de pressão da porta da máquina", D: "Visualização de vapor ao abrir", E: "Odor da carga esterilizada" }, 
    correct: "B", explanation: "Gabarito: B. A fita zebrada (indicador químico) prova apenas que a máquina esquentou, mas não garante que o vapor penetrou na carga por tempo suficiente para matar a vida. A morte dos esporos bacterianos (indicador biológico) é a prova definitiva exigida pela ANVISA." },

  { id: 1139, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "De acordo com o ciclo PDCA (Planejar, Fazer, Checar, Agir), na implementação de ações corretivas no laboratório (CAPA):", 
    options: { A: "O problema é encerrado imediatamente após punir o funcionário envolvido", B: "Após identificar a causa raiz (via diagramas como Ishikawa/Espinha de Peixe) e aplicar a correção, a etapa de 'Checagem' é vital para avaliar se a medida implementada foi eficaz para impedir a recorrência ao longo do tempo", C: "O laboratório para todas as atividades por 30 dias", D: "A etapa 'Do/Fazer' é realizada pela diretoria do hospital apenas", E: "Notifica-se a polícia civil" }, 
    correct: "B", explanation: "Gabarito: B. Um erro laboratorial sistêmico não se resolve com culpas ou consertos paliativos temporários. A eficácia da correção inserida no processo deve ser monitorada para fechar formalmente o relatório." },

  { id: 1140, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Na calibração de micropipetas multicanal usadas no preparo de bibliotecas, o 'Erro Aleatório' é reflexo da:", 
    options: { A: "Falta de habilidade visual do operador", B: "Exatidão sistêmica da pipeta (o quão perto a média das medidas está do volume alvo)", C: "Imprecisão da pipeta (o grau de dispersão/desvio padrão entre pipetagens repetidas do mesmo volume)", D: "Pressão atmosférica externa", E: "Data de fabricação da ponteira" }, 
    correct: "C", explanation: "Gabarito: C. A precisão (ou ausência de erro aleatório) significa reprodutibilidade. Se a pipeta marca 10ul e aspira 9,9 / 9,8 / 10,1 sucessivamente, ela é precisa. A exatidão é o erro sistemático (marcar 10ul e aspirar 8ul constantemente)." },

  { id: 1141, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "O Plano de Gerenciamento de Resíduos de Serviços de Saúde (PGRSS) determina que reagentes químicos genotóxicos como Fenol e Brometo de Etídio vencidos devem ser:", 
    options: { A: "Descartados em saco branco leitoso e autoclavados", B: "Misturados com hipoclorito e jogados no esgoto de fluxo contínuo", C: "Acondicionados em recipientes rígidos compatíveis, identificados com símbolo de risco químico (Grupo B) e recolhidos por empresa especializada para tratamento físico/químico ou incineração", D: "Descartados em lixo comum (Grupo D) pois evaporam rápido", E: "Acondicionados em caixas de papelão Descarpack" }, 
    correct: "C", explanation: "Gabarito: C. Brometo de etídio é um potente mutagênico. Autoclavar (calor) resíduo químico apenas faz o laboratório inalar fumaça tóxica, e o descarte no esgoto é crime ambiental severo. Vai para container especializado (Grupo B - Químico)." },

  { id: 1142, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Um dos grandes desafios no processamento automatizado em placas de 96 poços no Genomas SUS é evitar a 'Borda' (Edge Effect). O que é esse fenômeno técnico e biológico?", 
    options: { A: "A quebra mecânica das bordas de plástico da placa pela centrífuga", B: "Maior taxa de evaporação térmica e variação de temperatura nos poços externos da placa durante a PCR, o que altera as concentrações reacionais e reduz o rendimento do NGS comparado aos poços centrais", C: "O vazamento magnético do suporte de imãs", D: "A dificuldade robótica de ler os códigos de barras laterais", E: "A contaminação pelas luvas do operador ao fechar a placa" }, 
    correct: "B", explanation: "Gabarito: B. Durante a ciclagem térmica, as bordas da placa esfriam ou aquecem numa taxa levemente diferente do centro. Para WGS super sensíveis, isso muda o perfil do DNA final das amostras periféricas." },

  { id: 1143, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "A limpeza de uma Cabine de Segurança Biológica (CSB) Classe II Tipo A2 em uma sala de extração genômica NÃO DEVE ser feita com:", 
    options: { A: "Álcool 70%", B: "Luz UV ativada por 15 a 30 minutos após o turno", C: "Hipoclorito de Sódio a 10% puro deixado sobre a grelha e parede de inox metálica internamente por tempo prolongado, devido ao seu caráter altamente corrosivo que fura a cabine a longo prazo", D: "Água estéril ou destilada", E: "Papel toalha sem fiapos" }, 
    correct: "C", explanation: "Gabarito: C. A água sanitária (hipoclorito forte) destrói o aço inoxidável da cabine (Pitting corrosion), gerando ferrugem que vira esconderijo perfeito para colônias de bactérias e fungos indestrutíveis." },

  { id: 1144, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "O conceito de 'Rastreabilidade Metrológica' em BPL significa que:", 
    options: { A: "O resultado laboratorial é capaz de ser interligado, por uma cadeia contínua e documentada de calibrações de equipamentos, até um padrão internacional (ex: Sistema Internacional de Unidades)", B: "O lote de sangue tem código de barras legível", C: "O laboratório publicou os resultados em revistas americanas", D: "A amostra tem GPS integrado ao tubo de ensaio", E: "A assinatura do médico é legível a olho nu" }, 
    correct: "A", explanation: "Gabarito: A. Toda medição exige que a balança usada ou a pipeta tenha sido aferida por um equipamento de referência maior (ex: Inmetro), que por sua vez foi aferido por padrões globais inquestionáveis. Isso garante a 'verdade' da medida." },

  // --- Ética em pesquisa e noções de estudos multicêntricos ---
  { id: 1145, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "De acordo com as diretrizes de biobanco (Resolução CNS 441), após o falecimento do doador de material genético (Participante da pesquisa):", 
    options: { A: "O material torna-se propriedade irrestrita do Estado", B: "O material deve ser destruído no ato da comunicação do óbito", C: "As amostras podem permanecer armazenadas e ser utilizadas em pesquisas futuras desde que o participante tenha autorizado essa condição em vida de forma expressa no TCLE original", D: "A família pode vender o material ao mercado exterior", E: "Apenas pesquisadores da linhagem do doador podem acessar os dados" }, 
    correct: "C", explanation: "Gabarito: C. A diretiva de vida é o que importa. Se no TCLE o doador permitiu expressamente o uso de seus dados mesmo após a morte (uso perene/biobanco), a ciência é autorizada a continuar gerando saúde a partir de seu DNA." },

  { id: 1146, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "A 'Obrigação de Retorno de Resultados' (Duty to return results) em pesquisas populacionais de genômica estrutural causa intensos debates éticos porque:", 
    options: { A: "Falta papel para imprimir todos os laudos", B: "A linha entre pesquisa exploratória acadêmica e laudo médico diagnóstico é muito tênue; a entrega de um resultado exige que o laboratório cumpra regulações rigorosas de validação clínica que nem todos os projetos de pesquisa possuem", C: "Os correios recusam entregar laudos com DNA", D: "Apenas pacientes com dinheiro recebem resultados no Brasil", E: "A lei brasileira proíbe estritamente informar pacientes sobre sua saúde" }, 
    correct: "B", explanation: "Gabarito: B. Se a máquina da faculdade acha a mutação de uma doença, o pesquisador tem a responsabilidade moral de avisar? Se sim, o pesquisador assume responsabilidade médica baseando-se num teste que talvez não tenha selo clínico (ANVISA/CAP). É um dilema mundial." },

  { id: 1147, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "No desenvolvimento de painéis preditivos (Polygenic Risk Scores) para o Genomas SUS, um cuidado ético de equidade metodológica fundamental deve ser:", 
    options: { A: "Realizar os cálculos algoritmos exclusivamente na língua inglesa", B: "Assegurar que as populações de treinamento do modelo algorítmico espelhem fielmente as ancestralidades miscigenadas do Brasil; usar modelos baseados apenas em populações brancas subestima ou superestima riscos em negros e pardos (Viés Algorítmico)", C: "Aplicar a mesma taxa de risco para todas as idades", D: "Excluir mulheres do cálculo de doenças cardiovasculares genéticas", E: "Garantir que a amostra de treinamento tenha sido colhida por via capilar e não venosa" }, 
    correct: "B", explanation: "Gabarito: B. A IA é enviesada pela base que a alimenta. Importar um modelo europeu para dizer se um paciente baiano vai ter infarto pela genética é ineficiente e cria injustiça sanitária gravíssima." },

  { id: 1148, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "A implementação da Lei Geral de Proteção de Dados (LGPD) no processamento do fluxo de exoma humano introduziu os princípios do 'Privacy by Design' (Privacidade desde a concepção). Na prática da arquitetura de LIMS, isso significa:", 
    options: { A: "Comprar firewalls da marca Design Systems", B: "Ocultar o IP do pesquisador do provedor de rede local", C: "O paciente não tem o direito legal de portar seus próprios dados", D: "O sistema deve ser construído de forma que a pseudonimização da amostra e a proteção da identidade do paciente não sejam uma 'camada adicionada depois', mas a base obrigatória padrão inicial do software (Default security)", E: "Substituir códigos de barras por RFID obrigatoriamente" }, 
    correct: "D", explanation: "Gabarito: D. Privacidade desde a concepção exige que o LIMS já venha programado de fábrica sem mostrar os nomes dos pacientes nas planilhas e com logs de rastreio blindados, não sendo uma gambiarra instalada no final do projeto." },

  { id: 1149, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Em relação ao envio de remessas biológicas humanas (DNA extraído do SUS) ao exterior (ex: para sequenciamento em grande escala na China ou EUA), a regulamentação sanitária e ética exige a emissão e aprovação da:", 
    options: { A: "Nota Fiscal de exportação animal do Ministério da Agricultura", B: "Aprovação prévia da CONEP, anuência da ANVISA para saída de material biológico humano, além da assinatura do MTA assegurando os direitos intelectuais e destinação final das sobras", C: "Registro de Cidadania Consular do doador das amostras", D: "Permissão de importação do FDA independente do país de destino", E: "Troca do nome do doador por letras do alfabeto grego" }, 
    correct: "B", explanation: "Gabarito: B. O envio de DNA humano além fronteiras mexe com soberania de pesquisa (CONEP), segurança de risco biológico e transporte aéreo (ANVISA) e garantia de que o país estrangeiro não roubará ou patenteará sequências nativas (MTA)." },

  { id: 1150, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Para estudos que utilizam dados genômicos secundários (ex: reanálise de dados de WGS depositados anos antes num banco para um novo propósito), a exigência de TCLE pode ser modificada?", 
    options: { A: "Não, todo novo olhar exige uma nova ida até a casa do paciente para assinar um papel", B: "Sim. Se as amostras estiverem rigorosamente anonimizadas e a impossibilidade prática de obtenção de novo consentimento for comprovada e justificada, o CEP pode autorizar a Dispensa de TCLE", C: "Apenas se a reanálise for voltada para descobertas lucrativas", D: "O TCLE secundário é dispensado se o paciente for homem", E: "Sim, sem a necessidade de informar o CEP sob nenhuma circunstância" }, 
    correct: "B", explanation: "Gabarito: B. Tentar achar milhares de pacientes 10 anos depois de doarem sangue para uma universidade é logisticamente inviável. Se a privacidade for garantida pela anonimização, o CEP emite a 'Dispensa de TCLE' (TCLE Waiver) para que a pesquisa avance." },

  { id: 1151, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "O escândalo histórico envolvendo a tribo indígena Havasupai e pesquisadores acadêmicos (um marco na regulação genômica) reflete uma grave violação de qual princípio em pesquisas populacionais?", 
    options: { A: "A quebra mecânica das ampolas de sangue", B: "Ausência de descarte correto de resíduos químicos", C: "O Desvio de Consentimento (Secondary Use sem autorização): a tribo doou amostras de DNA exclusivamente para pesquisa de Diabetes, mas anos depois descobriu que a universidade repassou o DNA para estudos de Esquizofrenia e consanguinidade", D: "A publicação dos resultados em revistas predatórias não revisadas por pares", E: "A contaminação intencional do DNA" }, 
    correct: "C", explanation: "Gabarito: C. Foi a prova máxima do porquê o TCLE não pode ser um 'cheque em branco' obscuro. Você só pode pesquisar no genoma aquilo que o cidadão explicitamente autorizou." },

  { id: 1152, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "No delineamento metodológico de estudos epidemiológicos com genômica (Ex: GWAs do Genomas SUS), a correção estatística por Testes Múltiplos (Ex: p < 5x10^-8) é ao mesmo tempo uma questão estatística e ÉTICA porque:", 
    options: { A: "Limites frouxos fariam todos os pesquisadores ganharem prêmios", B: "A publicação irresponsável de falsos positivos gera 'associações espúrias' que podem levar ao pânico na população, intervenções médicas desnecessárias e desperdício maciço de verbas públicas financiando testes inúteis", C: "Os programas de computador modernos são cobrados por uso por clique algorítmico", D: "Isso esconde os resultados reais", E: "Pacientes demandam ver números extensos no papel para sentirem firmeza no método" }, 
    correct: "B", explanation: "Gabarito: B. Afirmar ao Ministério da Saúde que o gene XYZ causa câncer sem a devida rigidez estatística é um ato de irresponsabilidade ética, pois o estado mobilizará orçamento para criar medicamentos/testes com base numa matemática fraca." },

  { id: 1153, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Na pesquisa populacional em genômica, o engajamento comunitário (Community Engagement) é preconizado pelas boas práticas de governança. O que isso significa na prática de execução do Genomas SUS?", 
    options: { A: "Prometer prêmios financeiros a moradores em praça pública", B: "Estabelecer canais de diálogo transparente com a sociedade civil e representantes locais, explicando os limites da genômica, ouvindo preocupações da população sobre estigma e compartilhamento de dados antes de colher sangue indiscriminadamente", C: "Sortear vagas de estágio no sequenciador", D: "Tornar o código do sequenciador aberto", E: "Pagar jornais e emissoras de rádio para noticiar o resultado" }, 
    correct: "B", explanation: "Gabarito: B. Respeito científico significa descer da torre de marfim e explicar ao povo em linguagem compreensível para onde vai o sangue deles e de que forma o SUS os protegerá." },

  { id: 1154, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "O termo genômico 'ACMG Secondary Findings v3.2' lista atualmente 73 genes altamente acionáveis. Do ponto de vista dos Comitês de Ética, o que é um gene clinicamente 'acionável' no contexto da devolução de resultados de pesquisa?", 
    options: { A: "Qualquer variante mutada no genoma humano que cause doença no futuro longo e irreversível da idade adulta", B: "Um gene no qual a descoberta de uma mutação patogênica permite à equipe médica prescrever uma intervenção preventiva reconhecida, de rastreio imediato e alta eficácia clínica (ex: monitoramento intensivo precoce do coração ou remoção de pólipos pré-cancerosos)", C: "Um gene recém descoberto mas sem teste comercial", D: "Um gene causador de doença intratável no qual apenas rezar é a recomendação oficial", E: "Genes envolvidos em altura ou cor da pele" }, 
    correct: "B", explanation: "Gabarito: B. A ciência ética não deve entregar uma 'sentença' apavorante sem entregar uma 'solução'. Devolvemos resultados incidentais quando, e apenas quando, a medicina atual tiver as ferramentas para salvar aquela vida de forma factível." },

  // --- Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade ---
  { id: 1155, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "A qualidade analítica do equipamento Pipetador Automatizado Robótico do laboratório deve passar por Qualificação de Instalação (QI), Operação (QO) e Desempenho (QD). A QO garante que:", 
    options: { A: "O equipamento foi desembalado no local certo", B: "O equipamento funciona de acordo com as especificações operacionais do fabricante (ex: braço robótico atinge todas as placas, controle térmico estabiliza, sensores de coágulo ativam) antes de testar com DNA real", C: "O equipamento processa amostras de DNA e passa pelo TapeStation", D: "Os cabos de energia estão na cor exigida na RDC", E: "O funcionário tem o currículo exigido para operar" }, 
    correct: "B", explanation: "Gabarito: B. É a fase em que a engenharia de precisão testa a parte física (mecânica e sensores) para garantir que a promessa do manual do robô foi cumprida, usando líquidos controle." },
  
  { id: 1156, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Na acreditação ISO 15189 (Requisitos para a Qualidade e Competência em Laboratórios Clínicos), a Política de Gestão de Riscos atua sobre WGS para:", 
    options: { A: "Gerir exclusivamente os contratos do aluguel do prédio", B: "Mapear pró-ativamente os riscos do paciente (ex: falso positivo, falha em entrega de prazo de doenças graves, trocas de etiquetas), quantificando sua severidade/probabilidade e desenhando barreiras de contenção prévias (FMEA/Análise de Modos de Falha)", C: "Proteger as finanças laborais com seguros", D: "Garantir férias remuneradas aos técnicos", E: "Reduzir a taxa do Qubit a zero" }, 
    correct: "B", explanation: "Gabarito: B. Gestão de Risco ISO é pensar em tudo de trágico que pode acontecer (trocar exame de câncer com de paciente são) e botar catracas sistêmicas para que isso nunca se torne realidade." },

  { id: 1157, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Sobre o monitoramento de infraestrutura crítica de um laboratório genômico no Sistema Zabbix/Cloud: Qual falha invisível de sistema causaria uma quebra do ciclo de Qualidade em WGS de forma silenciosa e letal aos dados durante a noite?", 
    options: { A: "Falha do exaustor do banheiro administrativo", B: "A falha dos sistemas UPS/NoBreak condicionadores de energia do cluster de Sequenciadores NovaSeq, pois micro-quedas de tensão causam interrupção da corrida fotográfica sem chance de recovery, arruinando milhares de dólares de reagentes", C: "Queda da internet no celular do gerente", D: "O alarme de incêndio descarregar", E: "Acender a luz incandescente da sala adjacente" }, 
    correct: "B", explanation: "Gabarito: B. Uma corrida de produção alta dura de 2 a 3 dias contínuos. Uma falha de energia bruta destrói a coesão da química (desnaturação de proteínas) e trava os computadores internos irreversivelmente daquele ciclo em diante." },

  { id: 1158, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Uma não-conformidade clássica identificada em auditoria BPL (Boas Práticas de Laboratório) durante as etapas pré-analíticas é o fracionamento incorreto do soro/plasma. Qual problema molecular a hemólise ou maceração agressiva dos tubos de sangue de coleta causa no pipeline genômico downstream?", 
    options: { A: "Cria cristais no fundo da centrífuga que quebram o rotor", B: "O rompimento indevido dos eritrócitos transborda altíssimos teores de porfirinas ligadas a ferro e hemoglobina para a fração analisada, substâncias que agem como inibidoras absolutas da DNA Polimerase por quelação e sequestro estéricos da reação de biblioteca PCR", C: "A maceração acelera o ciclo de Krebs do leucócito, matando-o termicamente", D: "Aumenta a precisão das beads magnéticas", E: "Destrói a tampa verde por reação de cloro" }, 
    correct: "B", explanation: "Gabarito: B. O ferro (hemo) reage violentamente nos tampões de extração e age bloqueando a máquina enzimática, zerando o sucesso do yield do banco de DNA." },

  // --- Noções de Saúde Pública ---
  { id: 1159, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "O modelo de avaliação de Custo-Efetividade focado em tecnologias de saúde baseadas em genômica, fundamental para a CONITEC aceitar um painel genético no SUS, é dependente do ganho em anos de vida justados por qualidade (QALY). Como a triagem genômica pediátrica preventiva eleva absurdamente esse índice econômico favorável ao governo?", 
    options: { A: "Pois as crianças ficam em isolamento térmico nos hospitais e não saem da rua gerando custos com o meio ambiente e estradas", B: "Ao antecipar a identificação de um erro inato do metabolismo raro logo ao nascer, previne-se retardo mental agressivo irreversível, cirurgias complexas contínuas e internações de UTI eternas. Essa prevenção primária abate de forma brutal a conta médica governamental futura ao longo de toda a vida desse cidadão e preserva os danos na família", C: "Ela exige pagamentos em Euro e não reais", D: "Aumenta as vendas nas farmácias do governo", E: "Pois as análises geram subempregos aos estudantes do ensino fundamental" }, 
    correct: "B", explanation: "Gabarito: B. O Estado gasta um preço moderado na máquina sequenciando logo hoje, mas economiza uma fortuna imensurável num futuro incerto e sombrio de longos anos do paciente nas piores enfermarias de emergência em UTIs neonatais. E de quebra, preserva uma vida normal." },

  { id: 1160, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "Qual é a relação intrínseca do Planejamento Orçamentário e a Logística de Insumos da vigilância epidemiológica baseada em WGS dentro de um LACEN regionalizado operando o Genomas SUS?", 
    options: { A: "Os gestores precisam de menos reagentes em épocas de surtos epidêmicos para preservar orçamentos públicos em emergência de caixa", B: "A logística exige cadeias de frio (Cold Chain) robustas e infraestrutura de rede para bioinformática, pois os clusters não podem ter quebra de insumos de consumíveis que possuem validade biológica rápida, prejudicando o turnaround time durante um surto pandêmico regionalizado ou emergência endêmica", C: "A verba orçamentária é direcionada para contratação apenas de profissionais estatutários federais estrangeiros que saibam inglês avançado de TI", D: "As planilhas de gestão reduzem os processos computacionais da extração a papelaria manual", E: "Deve-se armazenar amostras positivas sem análise, enquanto a epidemia continuar por meses." }, 
    correct: "B", explanation: "Gabarito: B. Equipamentos genômicos precisam dos reagentes e placas Illumina/PacBio guardados sob refrigeração de alta exigência constante (-20ºC). Um LACEN na Amazônia, se não planejar a reposição em tempo real na rede da cadeia de frios, vai esgotar tudo em poucos dias num surto e a resposta será travada." },

  { id: 1161, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O conceito da Taxa de Conversão (Conversion Rate) de extração robótica em NGS tem impacto direto no custo da operação pública em larga escala (Exoma no SUS). O que ela avalia numericamente?", 
    options: { A: "O quanto do DNA lido pelas máquinas virou RNA e retornou a proteína do patógeno avaliado pelo sistema público de saúde", B: "O sucesso produtivo do Workflow: mede o percentual final numérico exato de quantos pacientes que entraram no processo (Ex: 10.000 tubos colhidos) conseguiram chegar perfeitamente até as máquinas sem terem falhado em pontos de checagem do QC (ex: DIN muito baixo, yield péssimo, amostra insuficiente no poço), o que exigirá a queima de insumos onerosos e perda orçamentária no reprocessamento ou recoletas dispendiosas na atenção básica", C: "A conversão do formato computacional BAM para o texto simples VCF", D: "O número de genomas convertidos com mutação grave do sistema genômico", E: "A energia gasta do hardware (watts convertido em luz e não movimento do maquinário fotográfico) e eficiência" }, 
    correct: "B", explanation: "Gabarito: B. Se a Taxa de Conversão da fábrica NGS despenca de 90% para 60%, a gestão joga fora 40% da verba paga nos kits caríssimos das etapas paralisadas (extração a vazio, biblioteca inutilizada) aumentando brutalmente o custo por exame viável liberado para o SUS." },

  { id: 1162, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Uma auditoria federal exige os Documentos Constitutivos (Regulatory Binder) em um braço operacional de pesquisa clínica voltada a dados genômicos no SUS. Entre esses arquivos de registro primários e imprescindíveis, o que os auditores checam de maneira prioritária no Trial Master File (TMF)?", 
    options: { A: "A presença das cópias carimbadas dos projetos de softwares desenvolvidos por empresas estatais locais e comprovantes bancários impressos e registrados da rede em diário extraoficial", B: "As cópias rastreáveis de todas as emendas (Amendments) do projeto protocoladas no CEP, os formulários TCLE assinados e armazenados com privacidade, Certificados de Treinamento da equipe logada em BPL (GCP logs), as cartas/licenças oficiais emitidas pela instituição aprovadora e o registro robusto de desvios protocolizados pelo operador na bancada da coleta e da máquina (Protocol Deviations Form)", C: "O relatório fiscal do laboratório central com lucros de impostos e guias tributárias aduaneiras das máquinas da importação para comprovar repasse final e transparência de caixa à população em conselhos do SUS e da federação de comércio", D: "Os currículos lattes da chefia não envolvida no ensaio protocolizado por falta de verbas do edital da bolsa estudantil da rede federal educacional e das licitações antigas de mobiliário laboratorial do centro", E: "Os atestados demissionais da chefia de engenharia em computadores Linux e software desativados" }, 
    correct: "B", explanation: "Gabarito: B. Uma pesquisa de genômica multicêntrica é blindada e legalista. Os auditores checam ativamente se ninguém mentiu (assinatura do TCLE do participante real no Trial File), e se os pesquisadores que preparam o DNA realmente sabiam o que estavam fazendo formalmente perante os órgãos mundiais (Certificados GCP), e onde eles anotaram sempre que a máquina falhou ou o voluntário quebrou o prazo da consulta da amostra." },

  { id: 1163, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Em um ensaio Illumina (NovaSeq 6000), o bioinformata percebe falhas agudas durante as chamadas da 'Base Y', pois na química do instrumento em configuração nativa 2-colors, essa base é identificada na engenharia do equipamento por:", 
    options: { A: "Dois laseres emitindo flashes coloridos de cianina verde no filtro", B: "Uma total ausência temporal do sinal luminoso - onde a base (G) recebe nenhuma tinta fluorescente (Dark Base) na queima do quadro (tile) - enquanto as demais combinam misturas de verde e vermelho fotográfico em excitações do sensor de imagem", C: "Três lâmpadas dicróicas azuis combinadas para detectar exclusão hibridizacional de uracila nos fotorreceptores sensíveis da platina", D: "Detecção elétrica sem câmeras por nanoporos de proteína de membranas do equipamento fotográfico da gaveta interna", E: "Combinação química da luz e radiação radioativa da base Timina nas poças metálicas do painel lateral e do fluxo laminado do chip de silício embutido nas placas" }, 
    correct: "B", explanation: "Gabarito: B. A configuração de sequenciamento Illumina 2-Colors (duas cores) revolucionou a velocidade. Ele não tira 4 fotos (A, T, C, G). O C é fotografado em Vermelho, o T em Verde, o A vira Amarelo (porque leva 50% dos reagentes verdes e 50% vermelhos simultâneos, piscando nas duas fotos), e a Guanina (G) não recebe cor (Dark). O PC computa a ausência de flash como Guanina pura. Economiza câmera e reagente num genoma longo." },

  { id: 1164, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Qual destas condutas de manipulação direta de DNA genômico purificado para a preservação preventiva da cadeia de alto peso molecular na placa garante que não haverá formação excessiva de ressecamento e quebras (clivagem física indesejável) geradas por manipulação na etapa pré-analítica nos reservatórios criogênicos do biobanco brasileiro antes das pipetagens para biblioteca?", 
    options: { A: "Descongelamento massivo e imediato à 95ºC em bloco térmico repetidas e sucessivas vezes para a extração constante de alíquotas até esvaziar todo o tubo central do DNA primário (Master Tube)", B: "Preparo imediato de múltiplas micro-alíquotas fracionadas e separadas do arquivo genômico original e o controle rígido para o degelo em velocidade natural refrigerada branda da placa para evitar Choque Térmico reativo no polímero e cristalizações repetidas de água destruindo as ramificações das hélices estruturais", C: "O uso indiscriminado de vortex elétrico violento contínuo em todas as soluções diluidoras de ressuspensão durante as contagens da biblioteca", D: "Ressuspensão mecânica forçando pipeta para cima em água desionizada ácida destrutiva, sem usar sais moderadores fisiológicos (Tris EDTA em traços) ao invés da rotatividade gentil das placas nos equipamentos agitadores orbitais lentos mecânicos de preservação", E: "Lavagem extrema da sílica durante longo prazo na centrífuga sob vácuo sem adição da solução ressuspendida com buffers neutros em tempo frio e constante prolongado por meses e uso direto nas placas aquecidas da pipetadora" }, 
    correct: "B", explanation: "Gabarito: B. 'Freeze-thaw cycles' (Congelar e Descongelar o mesmo tubo dez vezes) destroça o DNA pela força expansiva dos cristais de água do gelo esmagando as cadeias contra o tubo plástico ao retornar a estabilidade. Aliquotar a amostra em 5 tubos preserva a origem." },

  { id: 1165, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Ao checar a eficiência volumétrica das bibliotecas com 'Fluorímetro Qubit', o princípio mecânico fotométrico confere uma precisão analítica gigante contra erros. Por que o Fluorímetro consegue ignorar que o tubo possui 80% do peso composto por fragmentos de RNA residual ou de nucleotídeos de ponteiras contaminadas?", 
    options: { A: "Ele queima enzimaticamente tudo que não possui base T pura e pesa mecanicamente a sobra física na lente plástica de vidro das tubulações óticas do sensor gravimétrico e emissor UV do equipamento fotométrico com densitometria calibrada a plasma limpo", B: "Seu agente químico reativo (PicoGreen ou HS dsDNA dye) adquire um brilho e emite fótons exponencialmente fortes EXCLUSIVAMENTE ao conseguir se intercalar geometricamente na 'fenda / sulco' da dupla-hélice perfeita do DNA íntegro. O resto fica cego (Dark) na máquina e ignorado pela ótica computada sem gerar interferência final numérica na análise final do peso", C: "O raio laser aquece a base citosínica transformando ela em gás amônio, contabilizado por contadores de ar no fundo das placas, medindo os vapores densos com base molecular e emitindo relatório do pico", D: "Ele injeta sondas fluorescentes sintéticas universais ligadas aos RNAs e pesa o quão pesado o RNA brilha nas reações das hélices de transcrição gerando fluorescência invertida em relação a dupla fita linear e separada num leitor microscópico com 2 lentes do tubo", E: "Usa campos magnéticos elétricos do maquinário para afastar os RNAs para longe do tubo do LED emissor óptico fotométrico da central calibrada na calibração química original com íons sódio" }, 
    correct: "B", explanation: "Gabarito: B. O NanoDrop mede sujeira orgânica geral e proteína misturada ao passar radiação numa gotinha (Mede o que atravessa e o que é sugado pelo bloqueio das peças soltas na água). O Qubit é inteligente e pontual: o corante reativo só pisca seu LED microscópico se estiver confortavelmente escondido no recheio do dsDNA (Dupla Fita), caindo na medição as falhas e os componentes residuais espúrios do tubo de laboratório." },

  { id: 1166, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "As bibliotecas construídas pelo conceito 'PCR-Free' são exigidas pelo mercado mundial clínico e pelo Genoma SUS para amostras ricas em DNA íntegro disponíveis. Mas por que as chamadas bibliotecas TruSeq 'Convencionais' (com Amplificação) produzem taxas de duplicação PCR altas e o que é o fenômeno do PCR Duplicate nas ferramentas bioinformáticas pós-sequenciamento fotográfico?", 
    options: { A: "É o fenômeno das moléculas serem quebradas enzimaticamente na flowcell pela polimerase mutante gerando clusters invertidos que o bioinformata acidentalmente corta os read-throughs, criando buracos enormes no genoma final", B: "O fenômeno do PCR amplifica moléculas idênticas mecanicamente. Quando o DNA é submetido a termociclagem excessiva, a máquina tira milhões de fotos de moléculas redundantes criadas pela taq. Como leem exatamente da mesma origem original biológica sem informações exclusivas ou complementares para as análises, são computacionalmente descartadas pelo algoritmo MarkDuplicates (ocupando vidro na placa sem somar poder e robustez nos chamados das variantes em locais distintos)", C: "O PCR duplica artificialmente cromossomos que o paciente de câncer não possui nas amostras de extração e confunde as bases de dados mutando SNPs normais", D: "As duplicações geram genes com sequências falsas na bioinformática que o BQSR adiciona e duplica nos gráficos VCFs do GATK sem filtragem final dos usuários de código no FastQ report inicial", E: "A flow cell superaquece com as cópias de fragmentos longos e destrói 150bp seguidos do alinhamento do Burrows-Wheeler, invertendo os genes homólogos e deletando os cromossomos sexuais das leituras finais do arquivo FASTQ de leitura" }, 
    correct: "B", explanation: "Gabarito: B. Duplicação de PCR em NGS não significa mutação do paciente. Significa que na bancada nós super-aquecemos o tubo e ele fotocopiou 1 único trecho de DNA dezenas de milhares de vezes. Se ele preenche o vidro, as outras pontas ficam sem espaço. O computador então 'Marca os Duplicados' da PCR e exclui todo mundo que bate no mesmo local exato idêntico (pois a matemática diz que seria quase impossível moléculas únicas aleatórias baterem na fenda exata duas vezes e terem os mesmos códigos indexados de tamanho sem ser uma fotocópia laboratorial)." },

  { id: 1167, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "Um painel clínico sequenciado pelo SUS busca por variantes germinativas com Penetração (Penetrance) de 95% ligadas a Cardiomiopatia Dilatada e Morte Súbita numa coorte da saúde populacional. Do ponto de vista de predição preventiva ética de retorno aos participantes no painel genético governamental, uma penetrância dessa envergadura obriga os serviços a...", 
    options: { A: "Não relatar ao voluntário pois a doença pode demorar a matar", B: "Aconselhar preventivamente o paciente e acionar intervenções antecipadas severas (como implantes de desfibriladores nos portadores da família ou ultrassons regulares estritos) devido ao risco quase certo e matematicamente absoluto de que ele e sua prole portadora desenvolverão o quadro crônico catastrófico em caso da confirmação, justificando o altíssimo nível acionável do teste no SUS público", C: "Relatar sem intervenções clínicas ou orientação de genética familiar pelo sistema unificado, esperando o sintoma aparecer", D: "Indicar transplante preventivo imediato assim que detectado no papel do genoma pois penetração significa tumor", E: "Encerrar e deletar a conta de convênio SUS do paciente por faturamento terminal irreparável que trará prejuízos financeiros aos cofres do fundo hospitalar de repasses anuais públicos" }, 
    correct: "B", explanation: "Gabarito: B. A ciência tem obrigação de informar (Devolução do resultado / Duty to Return) e tratar ativamente quando a Penetrância (chances reais matemáticas daquela doença acontecer quando você porta a mutação em questão no DNA de nascimento) bate na casa dos 90-100%, como síndromes monogênicas severas e BRCA1 do câncer mamário fulminante. Para isso o sequenciador de grande escala foi validado pelo programa." },

  { id: 1168, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Estudos de genética em subpopulações segregadas geraram a declaração do 'Caso Havasupai', um evento divisor de águas nos direitos e restrições metodológicas de coletas no mundo todo. Esse caso na justiça obrigou que as plataformas e redes universitárias mundiais proibissem para sempre a prática do:", 
    options: { A: "Roubo indiscriminado de ouro e cobre em centros de escavações das províncias da américa central e norte sob uso abusivo do sistema jurídico de terras das fazendas de testes americanos industriais e da saúde global", B: "O uso secundário exploratório escondido e alheio do sangue do voluntário sem o consentimento estrito re-assinado. O consentimento é a barreira do objetivo da pesquisa. Colher tubo para Diabetes não concede a posse da amostra genética para publicarem a genética da Esquizofrenia indígena pelas costas do doador do sangue nos congressos", C: "O descarte no mar do DNA contaminado para prejudicar tribos com radiação ultravioleta", D: "A publicação obrigatória na língua mãe e materna e exclusão dos dados dos HDs na língua inglesa universal devido a segregação imposta culturalmente pelas tribos da Europa contra continentes subdesenvolvidos", E: "Os casamentos entre pacientes afetados geneticamente sob a proteção legal do governo internacional como as Nações Unidas para preservação do genoma nativo natural em perigo de extinção" }, 
    correct: "B", explanation: "Gabarito: B. É uma regra suprema. A academia processou o DNA da tribo visando achar a cura e os genes do diabetes deles. Sem avisar e quebrando acordos e o respeito, as sobras dos tubos foram parar nas mãos de psiquiatras que fizeram papers humilhantes e publicações sobre 'DNA da esquizofrenia nas tribos americanas' com eles, além de refutarem religiosamente suas origens migratórias históricas com genômica de população ancestral (Destruindo seus dogmas orais publicamente, ofendendo brutalmente a dignidade). Eles foram processados, os vidros devolvidos por agentes do governo em praça pública sob fortes penas e a genômica nunca mais colheu sangue de indígenas ou minorias sem estritas normas de devolução e regras do TCLE amarrado limitador na bancada mundial e conselhos." },

  { id: 1169, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Por exigência da ANVISA RDC-222, o que acontecerá obrigatoriamente se um Biomédico ou Técnico Genômico tentar purificar DNA (Método Orgânico Fenol Clorofórmio Extensivo Frio / Cloreto em capela química) e cometer o erro técnico primário grave de descartar e escoar a fase proteica tóxica orgânica excedente no ralo da pia das lixeiras hospitalares ou despejar nas 'Bag Leitosas' virgens Grupo A padrão biológico de autoclaves da base?", 
    options: { A: "O ar esquenta produzindo chuvas locais ácidas fora do perímetro do exaustor", B: "Serão processados por grave infração e falha primária do Plano de Gerenciamento de Resíduos em Saúde (PGRSS). A autoclave vaporizará o Fenol, transformando a sala de descontaminação num gás severo venenoso neurológico inalável aos trabalhadores. Esse descarte requer container galão Grupo B rígido hermético por incineração terceirizada restrita", C: "O plástico leitoso dissolverá transformando o ambiente em base gasosa aquosa", D: "As tubulações de esgoto produzirão entupimento com as fitas gigantes de proteínas isoladas da lise dos tubos de ensaio com as misturas químicas da centrífuga baseada no vácuo de temperatura", E: "A capela explodirá em fagulhas e fumaça densa do cloro ativado em calor brando biológico dos tecidos residuais orgânicos do lixo Grupo D normal das áreas limpas recicláveis do posto laboratorial comum sem filtros" }, 
    correct: "B", explanation: "Gabarito: B. Aquecer veneno líquido numa panela de pressão laboratorial a 121º Celsius com vapor expansivo é uma falha inaceitável gravíssima de BPL e Biossegurança em manuseio e rotinas (RDC Resíduos), causando risco a saúde pública operacional. Misturar produto do Grupo B (Químicos Severos) com lixo de Grupo A (Biológico como bactérias ou tecidos sanguíneos de placa) produz reações e punições seríssimas e danos neurológicos por inalação letal com queimaduras severas crônicas para quem abrir a tampa da autoclave sem máscaras antigás exclusivas ou nas salas mal ventiladas em operação do serviço." },
  // =========================================================
  // MEGA BLOCO 7 - BIOLOGIA MOLECULAR E NGS (50 QUESTÕES)
  // =========================================================

  // --- Biologia, biologia molecular e genética ---
  { id: 1170, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O fenômeno do 'Imprinting Genômico' resulta na expressão monoalélica de determinados genes dependendo da origem parental. Qual o mecanismo molecular primário responsável por estabelecer essa marcação epigenética durante a gametogênese?", 
    options: { A: "Acetilação de histonas H3K27", B: "Splicing alternativo", C: "Metilação de resíduos de citosina em ilhas CpG promotoras", D: "Fosforilação de RNA polimerase II", E: "Degradação por microRNAs" }, 
    correct: "C", explanation: "Gabarito: C. O imprinting é governado principalmente pela hipermetilação do DNA nas ilhas CpG (adição de grupos metil), o que silencia fisicamente aquele alelo de forma duradoura (ex: gene herdado da mãe fica 'desligado')." },

  { id: 1171, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Mutações patogênicas em genes do complexo SWI/SNF são frequentemente identificadas em sequenciamentos oncológicos. A função canônica desse complexo na biologia molecular celular é:", 
    options: { A: "Reparo de quebras de fita dupla por recombinação homóloga", B: "Remodelamento da cromatina dependente de ATP, deslizando ou ejetando nucleossomos para permitir o acesso de fatores de transcrição ao DNA", C: "Adição de cauda poli-A ao mRNA", D: "Atividade de helicase durante a replicação de telômeros", E: "Transporte de tRNAs do núcleo para o citoplasma" }, 
    correct: "B", explanation: "Gabarito: B. O SWI/SNF é um 'trator' molecular que gasta ATP para afastar as histonas, abrindo o DNA para ser lido. Falhas nele causam fechamento anormal do genoma, característico de tumores severos." },

  { id: 1172, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Na síndrome do X Frágil e doença de Huntington, o mecanismo mutacional subjacente não é uma substituição de base simples (SNV), mas sim:", 
    options: { A: "Aneuploidia cromossômica", B: "Inversão paracêntrica", C: "Expansão de repetições de trinucleotídeos causada pelo escorregamento (slippage) da DNA polimerase durante a replicação", D: "Deleção de múltiplos éxons", E: "Inserção de elementos Alu retrotransponíveis" }, 
    correct: "C", explanation: "Gabarito: C. A polimerase 'escorrega' e gagueja ao ler regiões repetitivas (como CAG CAG CAG...), adicionando cópias extras a cada geração (fenômeno da Antecipação)." },

  { id: 1173, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Durante a transcrição eucariótica, qual o papel dos elementos 'Enhancers' (intensificadores)?", 
    options: { A: "São sequências de RNA que se ligam ao ribossomo", B: "São proteínas que ativam a RNA Polimerase I", C: "São sequências de DNA que, mesmo localizadas a milhares de pares de base de distância do promotor, ligam fatores de transcrição e formam alças (loops) cromatínicas para amplificar massivamente a transcrição de um gene", D: "Atuam como códons de parada para a transcrição", E: "Degradam mRNAs concorrentes" }, 
    correct: "C", explanation: "Gabarito: C. Enhancers são os 'interruptores de volume' do DNA. Eles podem estar muito longe do gene alvo no genoma linear, mas a arquitetura 3D do DNA se dobra para que eles encostem no promotor." },

  { id: 1174, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "A heteroplasmia mitocondrial apresenta um desafio na detecção genética porque:", 
    options: { A: "Mitocôndrias não possuem DNA próprio", B: "Uma mesma célula pode conter uma mistura variável de moléculas de mtDNA mutantes e selvagens (normais), exigindo técnicas de sequenciamento de altíssima sensibilidade e cobertura para detecção correta da fração alélica", C: "O DNA mitocondrial é formado por RNA", D: "É herdada exclusivamente do pai", E: "Mutações mitocondriais são corrigidas imediatamente pelo NER" }, 
    correct: "B", explanation: "Gabarito: B. Uma célula tem milhares de mitocôndrias. Se 20% delas sofrerem mutação (heteroplasmia), a doença só se manifestará se esse percentual for alto o suficiente para falhar o tecido." },

  { id: 1175, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "As topoisomerases são enzimas críticas durante a replicação e transcrição do DNA porque:", 
    options: { A: "Ligam os fragmentos de Okazaki na fita atrasada", B: "Sintetizam os primers de RNA", C: "Aliviam a tensão de superenrolamento torcional à frente da forquilha de replicação introduzindo quebras temporárias de fita simples ou dupla", D: "Deslizam o ribossomo ao longo do mRNA", E: "Previnem a oxidação dos telômeros" }, 
    correct: "C", explanation: "Gabarito: C. Ao separar a dupla hélice, a tensão no DNA torcido à frente da helicase se torna imensa. A topoisomerase corta, desenrola e cola o DNA rapidamente para evitar que ele arrebente." },

  { id: 1176, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O conceito de 'Pseudogene' em análises de WES/WGS é considerado um forte complicador diagnóstico pois:", 
    options: { A: "Eles são letais ao paciente logo no nascimento", B: "São cópias inativas de genes que acumularam mutações evolutivas e possuem altíssima similaridade de sequência (>95%) com o gene funcional, causando alinhamento ambíguo (multimapping) dos reads curtos do NGS", C: "Eles bloqueiam fisicamente a DNA polimerase in vitro", D: "Apresentam exclusividade de base uracila no DNA", E: "São compostos inteiramente de histonas" }, 
    correct: "B", explanation: "Gabarito: B. Pseudogenes (como o do gene SMN1 ou CYP21A2) são clones falsos de genes verdadeiros. Leituras curtas da Illumina grudam neles por engano, gerando falsos positivos na análise." },

  { id: 1177, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "A pleiotropia é um fenômeno genético no qual:", 
    options: { A: "Múltiplos genes diferentes causam o mesmo fenótipo (doença)", B: "Um único gene ou mutação afeta múltiplas características fenotípicas aparentemente não relacionadas (ex: síndrome de Marfan afetando olhos, coração e esqueleto)", C: "O gene se expressa mais forte em homens", D: "A mutação ocorre em tecido somático após o nascimento", E: "O alelo recessivo mascara o dominante" }, 
    correct: "B", explanation: "Gabarito: B. Na pleiotropia, uma única falha (como no gene FBN1 na S. de Marfan) causa um efeito dominó que afeta vários sistemas orgânicos que parecem distintos na clínica." },

  { id: 1178, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O processo conhecido como 'Escape do Nonsense-Mediated Decay (NMD)' tem relevância clínica direta porque:", 
    options: { A: "Ele conserta a mutação do DNA original", B: "Permite que um mRNA com códon de parada prematuro (gerado no último éxon ou próximo à extremidade 3') não seja destruído, originando uma proteína truncada que muitas vezes atua com efeito negativo dominante (dominant-negative)", C: "Garante a produção excessiva de ribossomos", D: "Impede qualquer forma de splicing do gene", E: "Exclui o códon AUG de iniciação" }, 
    correct: "B", explanation: "Gabarito: B. Se a mutação stop ocorrer bem no finalzinho do gene, o alarme do NMD não soa. O RNA é lido e gera uma proteína defeituosa que vai atrapalhar a proteína normal que está trabalhando na célula." },

  { id: 1179, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Em sequenciamentos focados em pesquisa de ancestralidade e evolução humana, o Cromossomo Y e o DNA Mitocondrial são altamente informativos porque:", 
    options: { A: "Apresentam a maior taxa de crossing-over do genoma", B: "Sofrem recombinação em 100% de sua extensão a cada geração", C: "Possuem herança não-recombinante estrita (patrilinear para o Y, matrilinear para mtDNA), permitindo traçar linhagens puras diretas (haplogrupos) na história humana", D: "Codificam a mesma quantidade de genes que o cromossomo 1", E: "Estão presentes apenas em células germinativas" }, 
    correct: "C", explanation: "Gabarito: C. Por não sofrerem recombinação (embaralhamento com outros cromossomos), eles passam intactos (exceto pelas mutações de fundo) de pai para filho (Y) e mãe para filhos (mtDNA)." },

  // --- Tecnologias laboratoriais em genômica (NGS/Extração) ---
  { id: 1180, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O fenômeno de 'Index Hopping' no sequenciamento em flow cells padronizadas (Patterned Flow Cells) da Illumina é caracterizado por:", 
    options: { A: "Falha do laser em focar nos clusters das extremidades", B: "Atribuição de reads de um paciente para outro devido à hibridização indevida de índices (barcodes) flutuantes remanescentes durante a etapa de ExAmp", C: "Inversão da fita Forward para Reverse no software", D: "Incapacidade da enzima polimerase de incorporar a base C", E: "Quebra física do sequenciador durante a lavagem" }, 
    correct: "B", explanation: "Gabarito: B. Devido à amplificação química muito rápida das flow cells modernas (ExAmp), índices que não foram lavados direito na biblioteca acabam pulando e colando na amostra vizinha. Solução: UDI (Unique Dual Indexes)." },

  { id: 1181, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A biblioteca de RNA-Seq deve eliminar massivamente o rRNA (RNA ribossômico) porque:", 
    options: { A: "O rRNA inibe a transcriptase reversa enzimaticamente", B: "O rRNA representa mais de 80-90% do RNA total da célula e não contém informação codificante (transcritos de interesse), desperdiçando o poder de sequenciamento da corrida", C: "O rRNA degrada a flow cell de vidro", D: "O rRNA não possui bases uracilas detectáveis", E: "Sequenciadores Illumina são mecanicamente incompatíveis com rRNA" }, 
    correct: "B", explanation: "Gabarito: B. Se você sequenciar o tubo de RNA direto, 90% das leituras (e do seu dinheiro) serão gastos lendo peças do ribossomo em vez dos mRNAs (expressão gênica) que você realmente quer ver." },

  { id: 1182, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Na extração de cfDNA (Cell-free DNA) de plasma sanguíneo, o protocolo deve focar majoritariamente no isolamento de fragmentos de que tamanho aproximado?", 
    options: { A: "10.000 pb", B: "1.000 a 2.000 pb", C: "Aproximadamente 166 pb, pois corresponde ao DNA que estava enrolado em um único nucleossomo antes da apoptose da célula tumoral/normal", D: "Menores que 20 pb", E: "500 a 800 pb" }, 
    correct: "C", explanation: "Gabarito: C. Quando células morrem e explodem (apoptose), o DNA se parte. Como ele estava enrolado nas histonas (~147bp + linker), as nucleases cortam os fios expostos, e a fita sobrante fica com o tamanho clássico de 166bp flutuando no sangue." },

  { id: 1183, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Em relação ao uso da tecnologia de Captura Híbrida (Hybrid Capture) na preparação de bibliotecas de Exoma Clínico (WES):", 
    options: { A: "As sondas RNA/DNA biotiniladas ('baits') são desenhadas para hibridizar complementarmente APENAS com íntrons", B: "Após hibridização, as moléculas de DNA de interesse são fisicamente capturadas e isoladas (pull-down) através de esferas magnéticas revestidas com estreptavidina", C: "A captura hibrida dispensa qualquer PCR posterior", D: "É um método que aumenta a complexidade da biblioteca", E: "Substitui a necessidade de sonicação do DNA" }, 
    correct: "B", explanation: "Gabarito: B. O complexo Biotina (nas sondas) e Estreptavidina (nas beads magnéticas) possui uma das ligações não-covalentes mais fortes da natureza, funcionando como uma 'vara de pescar' os éxons desejados." },

  { id: 1184, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O conceito de UMIs (Unique Molecular Identifiers) em painéis oncológicos ultrassensíveis permite ao algoritmo bioinformático diferenciar:", 
    options: { A: "DNA humano de DNA bacteriano", B: "Erros estocásticos induzidos pela Polimerase na PCR e erros do sequenciador contra variantes reais de baixíssima frequência (VAF <1%), agrupando as famílias de reads originais", C: "Exons de íntrons", D: "Translocações de inserções", E: "Se a amostra é masculina ou feminina" }, 
    correct: "B", explanation: "Gabarito: B. Os UMIs colam um 'código de barras randomizado' em cada fita antes da PCR. Se 10 cópias tiverem a mesma mutação MAS vierem do mesmo UMI, o sistema sabe que foi erro da máquina copiando 10 vezes um erro único inicial." },

  { id: 1185, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Um erro no preparo de NaOH (Soda Cáustica diluída) para a etapa de desnaturação de bibliotecas antes do sequenciamento Illumina afetará severamente:", 
    options: { A: "A quebra mecânica dos fragmentos", B: "O end-repair dos adaptadores", C: "A conversão da biblioteca de fita dupla (dsDNA) para fita simples (ssDNA), impedindo que as moléculas se hibridizem fisicamente nos oligos da flow cell e anulando o cluster generation", D: "A ativação da enzima ligase", E: "A cor emitida pelos fluoróforos no laser" }, 
    correct: "C", explanation: "Gabarito: C. A Flow Cell só agarra o DNA se ele estiver em fita única (para a ligação complementar ocorrer). O NaOH forte 'derrete' e separa a dupla hélice minutos antes de injetar na máquina." },

  { id: 1186, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O Oxford Nanopore Technologies (ONT) utiliza sequenciamento elétrico. O parâmetro conhecido como 'Adaptive Sampling' (Read Until) permite:", 
    options: { A: "Aumentar a voltagem da rede para fatiar o DNA mais rápido", B: "Rejeitar eletronicamente fragmentos de DNA não desejados em tempo real na máquina invertendo a voltagem do poro, concentrando o sequenciamento em alvos de interesse sem preparo prévio de captura", C: "Cortar adaptadores com laser UV integrado", D: "Recuperar a fita para sequenciar 10 vezes o mesmo poro", E: "Evaporar moléculas de RNA" }, 
    correct: "B", explanation: "Gabarito: B. O software ONT lê a molécula passando e, se perceber que é uma região do genoma que você não tem interesse, inverte a corrente do poro, cuspindo o DNA fora em milissegundos." },

  { id: 1187, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O que o indicador bioinformático 'GC-Bias' acentuado em formato de sino de ponta cabeça (curva 'sorriso' na análise FASTQC) sinaliza tecnicamente?", 
    options: { A: "Alta eficácia da reação de ligação", B: "Sub-representação crônica de reads em regiões muito ricas em AT (bases leves) e muito ricas em GC (bases pesadas/fortes), quase sempre ocasionada por falhas térmicas ou excesso na termociclagem da PCR da biblioteca", C: "Uso excessivo de Tagmentação", D: "Taxa zero de erro na máquina", E: "DNA com alta pureza" }, 
    correct: "B", explanation: "Gabarito: B. Causa buracos de cobertura em regiões extremas (ex: genes com muitas pontes triplas G-C não abrem fácil na PCR e são preteridos na amplificação)." },

  { id: 1188, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O sequenciamento 'Mate-Pair' difere do 'Paired-End' padrão porque:", 
    options: { A: "É focado em fragmentos muito curtos", B: "O Mate-Pair envolve circularização de fragmentos ultralongos (2kb a 10kb) seguida de clivagem e leitura das junções distantes, essencial para montagem de genomas de novo e grandes rearranjos, em vez de ler pontas de fragmentos curtos sequenciais", C: "Só funciona em sequenciadores PacBio", D: "Lê a mesma molécula de fita simples em duas direções simultâneas", E: "Mede o RNA não codificante pareado com DNA" }, 
    correct: "B", explanation: "Gabarito: B. O Mate-Pair foi vital na era dos genomas 'De Novo' por conseguir linkar (como uma ponte) duas regiões muito distantes do genoma que estavam separadas por longas repetições." },

  { id: 1189, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Em bibliotecas criadas por métodos de Amplicons (PCR Multíplex, ex: Painéis para SARS-CoV-2), qual artefato de biblioteca compete drasticamente pela leitura da flow cell?", 
    options: { A: "Aneuploidias cromossômicas", B: "A formação severa de primer-dimers, que escapam facilmente das purificações SPRI padrão por terem tamanho próximo ao inserto mínimo", C: "Os RNAs transportadores", D: "A precipitação salina das polimerases", E: "Os telômeros longos da amostra" }, 
    correct: "B", explanation: "Gabarito: B. Quando dezenas de primers estão no mesmo tubo (multíplex), a chance de eles grudarem uns nos outros e formarem bibliotecas 'fantasmas' de 100bp é gigante, dominando a corrida NGS de forma inútil." },

  { id: 1190, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A adição de A-tailing nas bibliotecas NGS clássicas é executada frequentemente por qual enzima base no tampão reacional?", 
    options: { A: "T4 DNA Ligase", B: "Taq Polimerase mutada, que devido a sua propriedade de transferase terminal inerente adiciona uma adenina não-molde (A) na extremidade 3' cega do fragmento", C: "RNA primase", D: "Helicase reversa", E: "T5 Transposase ativada por zinco" }, 
    correct: "B", explanation: "Gabarito: B. As Polimerases da família da Taq têm uma falha natural (sem proofreading 3'-5') que as faz 'cuspir' sempre um 'A' a mais no final das fitas. O NGS usou esse defeito a favor para criar o encaixe TA dos adaptadores." },

  { id: 1191, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Durante a fragmentação enzimática, a incubação é paralisada (stop reaction) tipicamente com uso de:", 
    options: { A: "Excesso de cloreto de sódio", B: "Agentes quelantes como EDTA, que sequestram os cofatores de magnésio essenciais para o funcionamento das endonucleases de restrição utilizadas", C: "Aquecimento brusco a 121ºC", D: "Luz ultravioleta forte", E: "Aumento extremo de enzimas RNAse" }, 
    correct: "B", explanation: "Gabarito: B. Sem magnésio as enzimas fragmentadoras (como as do kit FS da NEB) perdem sua 'bateria' e paralisam o corte instantaneamente, mantendo o tamanho de DNA conquistado." },

  { id: 1192, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A qualidade analítica do alinhamento da biblioteca a um genoma de referência (WGS) é medida rigorosamente pela métrica MAPQ (Mapping Quality Score). Um score MAPQ = 0 informa que:", 
    options: { A: "O read não tem mutações", B: "O read falhou totalmente no sequenciamento, saindo em branco", C: "O algoritmo de alinhamento não faz ideia de onde o read veio com exclusividade, alinhando de forma multíplice em várias repetições idênticas no genoma", D: "A qualidade óptica (Phred) da base é zero", E: "É um alinhamento perfeito e infalível" }, 
    correct: "C", explanation: "Gabarito: C. MAPQ baixo indica incerteza. Mapear '0' significa que aquele read encaixa perfeitamente em 10 lugares diferentes do genoma (como famílias de genes ou satélites) e o PC não tem como definir o local correto." },

  { id: 1193, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Por que as bibliotecas sequenciadas em plataformas de química '2-channel SBS' (ex: NovaSeq) não toleram bibliotecas de baixíssima diversidade nucleotídica (ex: Amplicons de um gene só) sem forte uso de PhiX?", 
    options: { A: "Porque elas exigem fragmentos maiores de 800bp", B: "Sem diversidade mista das 4 bases ocorrendo a cada ciclo fotográfico, as câmeras baseadas em apenas 2 lasers (Verde e Vermelho) perdem as coordenadas espaciais dos clusters, causando falha catastrófica de registro (template generation failure)", C: "O PhiX acelera o processador térmico do NovaSeq", D: "O DNA amplicon inibe a emissão química dos poros", E: "Falta de diversidade queima o sensor óptico do equipamento" }, 
    correct: "B", explanation: "Gabarito: B. A máquina define onde está cada pontinho (cluster) no vidro tirando uma foto nos 4 primeiros ciclos. Se na primeira letra todo mundo acender vermelho (ex: o amplicon começa com 'A'), a máquina vê um borrão vermelho gigante e não consegue separar os pontos espacialmente." },

  { id: 1194, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Sobre os índices i5 e i7 da Illumina. Se o laboratório cometeu um erro e o índice i7 de duas amostras na mesma lane for idêntico, porém os índices i5 forem diferentes (Ex: UDIs parcialmente duplicados). O que ocorrerá?", 
    options: { A: "As amostras serão descartadas imediatamente pelo MiSeq", B: "A demultiplexação ainda ocorrerá de forma razoável, mas a taxa de reads não identificados (undetermined) ou trocados subirá severamente dependendo do nível de index hopping e qualidade óptica i5", C: "O equipamento explode o log report e trava a corrida física", D: "O arquivo BAM gerará fusões híbridas automaticamente no BWA-Mem", E: "As amostras perderão apenas reads forward" }, 
    correct: "B", explanation: "Gabarito: B. Graças ao Dual Index, o sistema usa as duas pontas como contraprova de identidade. Se uma bate e a outra é exclusividade de outra amostra, ele consegue salvar o arquivo, embora o alerta e o lixo computacional subam nas métricas finais (Undetermined Reads)." },

  // --- Resumo e Aplicações Variadas (Tópicos Transversais Edital/Genomas SUS) ---
  { id: 1195, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O dogma central da biologia sofreu expansão com a descoberta de que o RNA transcrito pode guiar a clivagem do seu próprio mRNA alvo na célula. Qual classe de moléculas endógenas atua cortando transcritos e barrando a tradução em humanos de modo severo?", 
    options: { A: "Plasmídeos integradores", B: "microRNAs (miRNAs) e siRNAs acoplados ao complexo proteico RISC (RNA-induced silencing complex)", C: "Príons proteicos beta-amiloides", D: "Proteínas G ancoradas em receptores", E: "Transposases acopladas a lipídeos" }, 
    correct: "B", explanation: "Gabarito: B. O RNA de Interferência (RNAi) age com um exército microscópico (complexo RISC) que usa um RNA curto como 'radar' para achar mRNAs e cortá-los antes de virarem proteínas. Muito promissor como drogas oncológicas." },

  { id: 1196, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Uma paciente do Genomas SUS porta uma variante frameshift severa no cromossomo X (Ligada ao X). Contudo, seu fenótipo clínico é brando, ao passo que sua irmã, com a mesma variante exata, desenvolveu a doença fenotípica letal severa. A explicação biológica molecular esperada é:", 
    options: { A: "A variante da irmã era um falso positivo de sequenciador", B: "Inativação do cromossomo X enviesada (Skewed X-inactivation). A irmã assintomática teve a 'sorte' estocástica de que o cromossomo X inativado nos tecidos alvos carregava o alelo mutado em grande parte das células", C: "Epistasia do cromossomo Y protetor nas mulheres", D: "Metilação completa e deleção paralela reversa", E: "Cruzamento cromossômico entre pai e filha pós concepcional" }, 
    correct: "B", explanation: "Gabarito: B. Toda mulher 'desliga' aleatoriamente um cromossomo X nas células do corpo. Se a roleta russa fizer com que o X mutante seja desligado na maioria das células do corpo (Skewed), a mulher viverá saudável. Se o X mutante ficar ligado, ela ficará gravemente doente." },

  { id: 1197, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Os frascos de Fenol de laboratório molecular adquirem coloração avermelhada/rosa intensa após longos meses na geladeira da instituição. Na ótica da Qualidade BPL, qual ação é recomendada?", 
    options: { A: "Usar normalmente, o rendimento na extração melhora", B: "Descarte absoluto como resíduo químico e uso abortado. A cor indica forte oxidação dos reagentes (produtos secundários tóxicos e caotrópicos falhos), destruindo o perfil da fase aquosa de partição do DNA", C: "Adicionar ácido clorídrico puro e prosseguir", D: "Destilar em laboratório fechado sem óculos protetores", E: "Congelar em -80ºC e usar após voltar ao incolor" }, 
    correct: "B", explanation: "Gabarito: B. Fenol velho e oxidado oxida o DNA e não consegue segurar os lipídios e as proteínas para a parte debaixo do tubo (fase orgânica), misturando tudo e sujando o seu ácido nucleico. A regra é ouro em bancada: fenol vermelho/rosa = lixo de Grupo B." },

  { id: 1198, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "As BPL recomendam que ao transferir microvolumes (ex: 2µL) de reagentes ultraconcentrados como mastermix de biblioteca para um pool, a técnica de pipetagem deva ser:", 
    options: { A: "Aspiração normal seguida da expulsão no meio das paredes do tubo, encostando nos plásticos secos", B: "Pipetagem reversa ou mergulho capilar sutil abaixo do líquido com lavagem sequencial da ponteira por fluxos (Up-and-Down mixing) cuidadosos, minimizando retenção na parede teflonada", C: "Sopro de ar agressivo forçando os fluidos em borbulhamento de spray", D: "Usar pipetas sorológicas sem molas elásticas graduadas em mm", E: "Encostar o bico da ponteira na mão da luva aquecida para soltar a gota" }, 
    correct: "B", explanation: "Gabarito: B. Quando você pipeta apenas 2 uL de uma enzima altamente viscosa como Master Mixes ligases (contém glicerol e PEG), metade dela fica retida fisicamente na parede da ponteira se a técnica não for impecável e de lavagem no tubo final." },

  { id: 1199, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Em um consórcio multicêntrico governamental do porte do Genomas SUS, por que se exige o registro da pesquisa e liberação primária na CONEP e o posterior registro obrigatório na plataforma pública mundial Registro Brasileiro de Ensaios Clínicos (ReBEC)?", 
    options: { A: "Garante faturamento no mercado estrangeiro por patentes de remédios europeus", B: "Garante total lisura e publicidade ética governamental. Qualquer cidadão ou cientista do mundo precisa conseguir ver qual dinheiro foi gasto e as metodologias de protocolo primárias aplicadas para que falhas de percurso metodológico sejam auditáveis livremente", C: "Obriga que jornais e jornalistas entrevistem médicos e gerentes mensalmente nas salas do congresso", D: "Retira direitos civis e civis da justiça em casos judiciais das amostras colhidas ativamente no banco", E: "Pois a ONU tem posse das chaves de segurança dos arquivos brasileiros depositados em nuvem de rede de domínio unificado" }, 
    correct: "B", explanation: "Gabarito: B. O 'Registro de Trial' (como o ReBEC e o ClinicalTrials.gov) impede que um cientista comece um projeto, perceba que a pesquisa deu errado ou não achou o que queria, e minta no artigo final trocando os objetivos originais metodológicos aprovados." },

  { id: 1200, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A qualidade de bibliotecas ricas em amplicons multiplex para patógenos sofre enormemente do fenômeno 'Primer-Dimers'. Como eles destroem efetivamente o rendimento financeiro de uma Flow Cell NovaSeq de milhões de dólares?", 
    options: { A: "Eles entopem as bombas injetoras quimicamente fundindo com sabão", B: "Sendo minúsculos (aprox 60bp a 100bp), os dímeros polimerizam numa velocidade monstruosa comparados a bibliotecas de 400bp, ocupando as fendas nucleares com prioridade. Como não tem alvo entre os primers, a máquina gasta químicos lendo lixo em massa em vez do DNA do paciente da coleta clínica", C: "O laser confunde a luz do primer com proteínas de sangue no LIMS", D: "Ele muda a matriz de RNA e quebra o fluoróforo Citosínico vermelho no software nativo", E: "Corrói o vidro microscópico arranhando as bases e impedindo alinhamento de base chamadas por IA" }, 
    correct: "B", explanation: "Gabarito: B. No mundo molecular o que é curto (menor) é mais rápido e amplifica muito fácil. Moléculas pequenas (dímeros de primers ligados entre si sem o alvo) se replicam furiosamente e dominam os spots fotográficos das flow cells caríssimas." },

  { id: 1201, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Sobre mutações 'Gain-of-Function' (Ganho de Função), é correto prever que em exomas de doenças mendelianas autossômicas:", 
    options: { A: "Causam frequentemente patologias recessivas onde as duas fitas devem perder atributos físicos originais enzimáticos e funcionais para adoecer", B: "Muitas vezes produzem fenótipos com herança Autossômica Dominante, pois uma única cópia variante gera uma proteína hiperativa que afeta patologicamente a rota biológica e atropela os vetores de homeostase saudável sem depender do alelo nativo em par", C: "Não afetam genes ligados a desenvolvimento corporal de oncologia humana", D: "Apagam a função biológica de todos os domínios intracelulares da estrutura nativa celular normal", E: "Estão invariavelmente associadas a microdeleções extensivas que causam apoptoses silenciosas" }, 
    correct: "B", explanation: "Gabarito: B. Ganho de função (Gain-of-Function) é como um acelerador travado num carro. Mesmo que o outro alelo (outro pedal) esteja normal, o carro vai acelerar perigosamente, sendo dominante no fenótipo, como é o clássico do gene BRAF ou KRAS em tumores." },

  { id: 1202, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O método CATCH-Seq e os derivados como o SureSelect são sistemas genômicos classificados pela categoria de:", 
    options: { A: "Whole Genome Amplification aletório (WGA) de restrição paralela", B: "Enriquecimento Híbrido (Target Enrichment / In-Solution Hybrid Capture), fundamentais para o sucesso financeiro/clínico dos Exomas Globais das análises populacionais modernas e governamentais do laboratório bioinformático primário focado na clareza das regiões", C: "Eletroforese capilar para cromossomos estendidos", D: "Síntese de oligonucleotídeos in-situ no chip central", E: "Ligação randômica enzimática PCR restrita aos telômeros" }, 
    correct: "B", explanation: "Gabarito: B. Agilent SureSelect, KAPA HyperExome, Illumina Exome, todos funcionam pelo princípio brilhante de 'Pescagem/Captura em Solução'. Sondas de RNA cheias de iscas grudam no DNA e esferas as puxam para o fundo." },

  { id: 1203, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Durante a execução do Genomas SUS num hospital satélite, um Pesquisador Principal (PI - Principal Investigator) não relata que 15 tubos com sangue ficaram sem refrigeração por 48 horas numa sala de sol e prossegue para incluí-los nas contagens orçamentárias finais sem investigar falhas de bio-análises e integridade. Esse ato do ponto de vista do Compliance ético e científico:", 
    options: { A: "É uma omissão tolerável desde que a Bioinformática conserte no software via algorítmico bayesiano", B: "Constitui omissão deliberada com grave quebra das Boas Práticas Clínicas (GCP), afetando e poluindo criticamente as amostras e a solidez da base populacional do governo, cabendo punição rigorosa do CEP local institucional por dano ao rigor de conformidade normativa estatística do centro", C: "Não afeta o DNA pois o sol apenas degrada vírus extracelulares e proteínas imunológicas nativas", D: "É justificado para que a métrica de rendimento orçamentário garanta as bolsas acadêmicas dos pesquisadores submetidos ao edital do processo primário de licitação", E: "Está livre de críticas pois as extrações de hoje corrigem quimicamente qualquer alteração térmica basal anterior aos equipamentos" }, 
    correct: "B", explanation: "Gabarito: B. Quebrar o processo de Cold-Chain (Cadeia de frio) e mentir (Falsificação ou Omissão científica) degrada os dados do SUS e cria variantes fantasmas originadas de decomposição química de raios UV e calor excessivo (oxidação) nos bancos do governo." },

  { id: 1204, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O limite de LOD (Limit of Detection) na técnica NGS oncológica somática líquida (ctDNA plasma) atinge taxas impressionantes (0,1% VAF - Frequência Alélica). Essa melhoria monumental na confiança do analista se deve amplamente ao avanço de quais peças e métodos da fase de wet-lab e bancada molhada?", 
    options: { A: "Exclusivo uso da enzima Taq Padrão com taxas enormes de trocas randômicas em picos sem restrição", B: "Implementação massiva global e universal dos Unique Molecular Identifiers (UMIs) aliada ao uso estrito de Polimerases de Ultra-Fidelidade (High-Fidelity enzymes com proofreading 3'-5') que reparam ativamente os erros do tubo plástico físico na máquina térmica durante o processamento longo exigido pelo painel ultrassensível de oncologia", C: "Elevação da temperatura para 121º celsius no desnaturação abrindo com força química e magnética os elos que ligam e soldam fitas errôneas aos primers de iniciação rápida", D: "O uso de água comum limpa e fervida das pias normais mantendo isenção microbiana dos centros da sala cirúrgica central e administrativa e química", E: "Substituição dos tubos PCR de 0,2ml por Eppendorfs grandes de 5,0 ml permitindo o choque osmótico reativo da base fenol com álcoois fortes reativos sem ressecamentos" }, 
    correct: "B", explanation: "Gabarito: B. WGS de tumor circulante quer achar 1 fio de tumor em 10.000 fios normais. Sem Polimerases caríssimas e sem erros acoplados a UMIs matemáticos de correção da bioinformática, é impossível garantir que esse 1 fio é câncer real e não uma simples mutação falha que a enzima cometeu no tubo." },

  { id: 1205, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Num procedimento NGS, ao quantificar a biblioteca no equipamento com dsDNA High Sensitivity Reagent Kit (Qubit), deve-se proteger a solução indicadora (fluoróforos intercalantes de DNA) com papéis/tubos escuros opacos e sem iluminação porquê da seguinte limitação biológica molecular e química básica do laboratório de bancada:", 
    options: { A: "Ele é volátil em luz amarela de lâmpadas incandescentes comuns virando gás tóxico inalável aos pulmões orgânicos do funcionário de pesquisa de plantão ou operador de extração", B: "O corante é fotossensível grave; a luz ambiente da sala branca hospitalar vai causar 'bleaching' (Fadiga/Descoloração dos fótons do reagente químico livre). Em 30 minutos na bancada isso destruiria a quantificação de luz e enganaria as contagens e contas matemáticas numéricas da máquina sobre as concentrações das amostras valiosas", C: "O tubo muda a temperatura e desnatura DNA caso atinja radiação infravermelha simples das janelas envidraçadas hospitalares do local", D: "Promove ligações estéricas aleatórias com as luvas do técnico ao sol refletido dos prédios e luzes focais em LED modernas frias de centros e unidades analíticas regionais do genoma e de patógenos complexos de emergência", E: "Não há limitações desse tipo, os reagentes brilham sob qualquer estresse" }, 
    correct: "B", explanation: "Gabarito: B. Fotobleaching (Fadiga Química) é a morte dos corantes de DNA. Quando expostos por 30minutos esquecidos e abertos na bancada de luz branca intensa de teto do seu laboratório, o fluoróforo morre. O equipamento medirá metade do valor real que o DNA tem ali dentro." },

  { id: 1206, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O FASTQC de uma corrida WES mostrou um GC content de 65%. Em um WGS esperado (humano) ele é tipicamente ~41%. O analista entende e normaliza porque no contexto do método de Captura de Exoma ocorre o seguinte artefato molecular inerente:", 
    options: { A: "É o indicativo claro de infecção grave da bancada limpa do robô por fungos e DNA bacterianos do operador (que possuem GC >65%) sem sombra de dúvidas estatística e metodológicas de qualidade geral das plaquetas", B: "A hibridização do Exoma e a escolha dos Éxons puxa ativamente zonas do DNA humano altamente complexas fisiologicamente e concentradas em conteúdo de Citosina e Guanina ricas funcionalmente. O 'Off-Target' (regiões intrônicas vazias e ricas de Adenina/Timina) foi filtrado com êxito na rampa de reagentes da captura de beads imantadas por estreptavidina, validando as expectativas da técnica alvo", C: "Um grave erro de PCR com Tagmentação deficiente causou oxidação e os nucleotídeos A e T derreteram nas soluções químicas orgânicas ácidas na máquina de ciclagem central em altas elevações de 95 graus de picos acentuados do equipamento programado pelo técnico e do operador da placa", D: "As Citosinas e Guaninas são fotocopiadas a laser na fase de Cluster Generation da ponte do NovaSeq e enganaram o detector primário da fase óptica sensível de imagem binária das fotografias cruas dos dados lidos nos sensores CMOS", E: "Os humanos têm 65% de teor AT normais" }, 
    correct: "B", explanation: "Gabarito: B. Se a curva GC do WES estivesse em 41% igual a humana média geral (Global), é a sua captura que falhou (O NGS perdeu as regiões da vida em éxons - super ricas em GC para síntese proteica). Seu exoma 'on-target' sempre terá picos tortos em direção a 50-60% de GC em FASTQC e QCs." },

  { id: 1207, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "No contexto da biossegurança e classificação do POP/PGRSS, o que define resíduos de Grupo B em laboratório de Extração Genômica automatizada baseada em colunas spin ou solventes no Brasil?", 
    options: { A: "Ponteiras com traços microscópicos e invisíveis e vestígios puramente orgânicos de sangue seco antigo em tubos limpos virgens descartáveis originais de rotinas antigas em quarentena prévia do almoxarifado hospitalar sem qualquer adição reativa patogênica em amostra do banco e do biobanco central", B: "Misturas de lavagem (Waste fluid/liquido residual gerado das bandejas de lixo do Robô de purificação automatizado) impregnadas gravemente com sais agressivos fenolados de Lise, Mercaptoetanol, Tolueno, Hidróxidos, Isopropanóis explosivos e Solventes inflamatórios orgânicos voláteis de manipulações e processamentos bioquímicos das fases da coluna de bancada molhada do laboratório principal sem destilação em galões cor de laranja isolantes especiais rigorosamente etiquetados para não passarem em fornos autoclaves úmidos simples e serem incinerados a força de alta radiação externa em terceirizados ambientais de coleta especializada técnica rígida", C: "O papelão macio comum higiênico rasgado das luvas originais plásticas esterilizadas não molhadas nas cubas, panos das caixas isopor limpas orgânicas virgens isolantes normais transparentes com logo e manual do papel", D: "O esgoto úmido comum ralo direto natural e neutro orgânico humano sem reagentes de risco alto em banheiros acoplados de prédios anexados as áreas de exames moleculares na infraestrutura básica e higiênica", E: "Vidros e pontas finas e lancetas limpas nunca postas em exames contidos em galão branco descartável de mesa padrão com símbolos nucleares reativos de lixo de radiofármacos hospitalares com meia vida longuíssimas em gavetas blindadas com aço frio dos caixotes selados com cadeados em chaves codificadas pela ANVISA da sala do reator" }, 
    correct: "B", explanation: "Gabarito: B. O 'Wash buffer' e os 'Waste Tubes' que os robôs da Qiagen/Roche descartam são puro lixo de solvente orgânico e fenol/etanol. Não vai pro meio ambiente nem pode entrar em calor de panelões de autoclave biológica pois o vapor explode o teto. Têm que ser separados num bombell inerte ventilado (Grupo B - Químico)." },

  { id: 1208, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O evento denominado 'Retrotransposição' da genética evolutiva descreve molecularmente que um segmento contínuo no DNA humano:", 
    options: { A: "Transfere os aminoácidos diretamente para o sangue via poros de Golgi", B: "É lido primariamente na enzima como transcrito RNA vivo, sofre conversão enzimática por uma transcriptase ativa retro viral inserida ou endógena local para a molécula material de cDNA (DNA complementar longo ou curto) e fisicamente salta, inserindo as bases replicadas num endereço aleatório novo na extensa rodovia dos cromossomos, ampliando as diversidades ou promovendo quebra trágica e severa se no meio e centro exato do promotor do gene da vida", C: "Desaparece em vapor nucleolar celular por mitoses consecutivas nos crossing-overs meiose e mitóticas dos corpúsculos somáticos sem aviso basal químico funcional", D: "Inverte o próprio esqueleto do DNA de forma física paralela local sem abandonar as barreiras exônicas e intrônicas em loop no centro basal cromatínico nuclear estrutural rígido isolado em bolhas dos núcleos da célula mãe ovárica germinativa imutável nos crossing-overs de vida", E: "É apagado nos processos da vida adulta madura celular para sempre na diferenciação celular das fases das idades avançadas nos idosos ou centenários com perdas fenotípicas cognitivas dos humanos em decaimento telomérico simples temporal natural na biologia do desenvolvimento normal evolutivo da seleção de Darwin" }, 
    correct: "B", explanation: "Gabarito: B. O método Copy+Paste dos elementos LINE-1 e Alu. Ele vira RNA, uma enzima copia ele de volta pra DNA num buraco novo de outro cromossomo, arruinando qualquer gene coitado que estivesse ocupando aquela moradia antes e gerando hemofilias ou Duchenne. São ~45% do nosso genoma 'lixo' invasivo histórico do processo evolutivo primitivo de retrovírus incorporados na pré história de hominídeos primitivos." },

  { id: 1209, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Por qual motivo o formato do 'FASTQ' foi concebido contendo quatro linhas por read lido pelo sistema NovaSeq da infraestrutura robótica NGS e Qual componente vital de QC biológico a Bioinformática perderia caso ignorasse ativamente e retirasse permanentemente as famosas terceiras e quartas linhas dessa tipologia original crua dos discos?", 
    options: { A: "Perderia as coordenadas e os dados da clínica do doutor do estudo da amostra médica primária em Word textuais formatadas como string log da placa e dos códigos de amostras no campo", B: "O FASTQ perderia as Strings numéricas em ASCII correspondentes a Letra de PHRED e os Indicadores métricos rigorosos e precisos confidenciais fotográficos do índice numérico da chance matemática logarítmica de cada base lida. Sem essa linha ASCII 4, o bioinformata não tem a menor base técnica para dizer se aquele 'A' é uma letra real com 99,9% chance brilhante na câmera ou se é lixo fotográfico emborrachado na flor de vidro do cluster ruidoso sem luz nenhuma em poço, e a filtragem da IA de dados quebra para falsos chamados", C: "O dado apagaria a dupla fita reverse complementar traduzida nativamente pelas enzimas exclusivas P5", D: "O dado corrompe o número identificador do equipamento que o software cruza em nuvens Illumina de telemetria baseada em rede wifi", E: "As linhas 4 contêm a metilação de cromatinas e a 3 a contagem celular de amostra hematológica pura primária para verificação da saúde somática da placa celular do usuário paciente logado na nuvem online de forma remota do equipamento em tempo e uso online das APIs" }, 
    correct: "B", explanation: "Gabarito: B. Um arquivo FASTQ perfeito carrega: Linha 1 = Cabeçalho com o Endereço/Máquina da base (ID), Linha 2 = As letrinhas do DNA puras cruas soltas A-T-C-G. Linha 3 = O Símbolo Demarcador +, e a fundamental sagrada Linha 4 = Código ASCII Criptografado da nota matemática PHRED de erro daquela base (Se é um erro provável Q10 ou base espetacular e limpa brilhante Q30 na câmera), é essencial para a limpeza Fastp de Qualidade." },

  { id: 1210, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "O que o indicador 'Sinal de Ruído Base / Phasing pre-phasing' fora dos parâmetros de BPL numa corrida química monitorada pela sala de NGS do genomas denuncia imediatamente para a gestão de qualidade e infraestrutura gerencial do ambiente limpo analítico?", 
    options: { A: "Queda na Internet externa", B: "Perdas crônicas gravíssimas da sincronia mecânica molecular entre os nucleotídeos da biblioteca por problemas gravíssimos operacionais (Reagentes em mal armazenamento vencidos na câmara fria / Válvulas com entupimentos de seringas do equipamento injetor fotográfico não injetando bases juntas simultaneamente / Variação do termostato na sala quebra calibração do foco das luzes sensíveis dos microscópios e dilatação das engrenagens do cluster nas plataformas de alto rendimento sensíveis e óticas complexas e fluídicas dos NovaSeqs)", C: "Fuga do operador central e mal preenchimento de LIMS form", D: "Tubos do reagente quebrados pelas embalagens soltas pelo fabricante internacional na malha de importação aeroportuárias em aeroportos por mau manejo na logística", E: "Excesso do ar condicionado e congelamento dos hard drives lógicos centrais nos servidores de log da máquina do terminal local na CPU da placa mãe sem sistema térmico de escape em fã rodando internamente ou coolers operantes da torre principal computacional de dados puros binários e logs da plataforma do aparelho e da torre sem ventilações adequadas sem janelas ambientais amplas no ar em uso" }, 
    correct: "B", explanation: "Gabarito: B. Erros de phasing mostram no gráfico que as enzimas perderam totalmente a força de acompanhar o cronômetro do robô e ficaram 'mancas' e espalhadas na corrida. Os lasers começam a ver borrões. É a assinatura mecânica das catástrofes químicas: fluido travando as mangueiras dos kits, sala muito fria ou quente arruinando termociclagem de vidro na câmara e insumos vencidos de péssima eficácia." },

  { id: 1211, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Uma universidade operando amostras raras de tumores no âmbito do Genomas do SUS assinou TCLE. Ao processarem no servidor NGS a informação somática clínica revelou também grave variante de Câncer Gástrico (Gene CDH1) na germinativa acidentalmente como uma mutação herdada do pai da família. Do ponto da moral da ética na pesquisa aplicada qual o rito orientador contemporâneo dos pesquisadores da equipe do PI Principal e do Comitê de ética em revisão das ações primárias preventivas se aplicadas pelas normas e do dever?", 
    options: { A: "Guardar silêncio pois câncer germinativo e somático tumorais são iguais na regra da publicidade global e a regra não exige TCLE em tecidos em óbito na morgue", B: "Se o TCLE e as diretrizes do centro prevêem claramente orientações para os achados acionáveis secundários, a equipe de biologia notifica a rede clínica genética e do conselheiro para acessar as identidades restritas blindadas, revalidar os DNAs do banco em Sangue, convocar humanamente a família consanguínea exposta e informar clinicamente a propensão alta do filho e do doador prevenindo os tumores gravíssimos do tipo letal fatal difuso sem sintomas prévios sem violar o direito da dignidade pessoal perante o consentimento se esse autorizar o retorno primário na assinatura dos documentos", C: "O pesquisador processará os pais sem aviso e postará publicamente com nomes a variante letal achada online em preprint papers de redes internacionais abertas", D: "Apagar os registros NGS computacionalmente sem avisos no terminal", E: "Alterar a sequência do software GATK sem registro logado BPL no sistema LIMS e relatar um gene sadio falso e normal e falso" }, 
    correct: "B", explanation: "Gabarito: B. Se a amostra é rastreável, o achado foi severo acionável preventivo (Câncer Difuso Gástrico Familiar) e o comitê permite a janela incidental: a quebra cega é autorizada de forma hiper criteriosa controlada para devolver o alerta salvando a família, com geneticistas qualificados, baseada puramente na Beneficência da ética humana global do participante que consentiu no termo do TCLE de vida." },

  { id: 1212, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "O rastreio em Genômica de Populações governamentais da Base Brasileira precisa incluir rigorosas coortes de subgrupos tradicionais indígenas, quilombolas, mestiços e descendentes nativos de isolamento florestal (Endogamia isolada comunitária no Norte do País). Para Políticas de Saúde de SUS efetivas de prevenção central e regional do estado, esse isolamento endogâmico das tribos traduz o seguinte evento molecular no FASTQ a ser detectado preventivamente em políticas públicas focadas em crianças com nascimentos sem recursos raros neonatais nas UTI de ponta e capital sem acessos complexos e logísticas em hospitais na saúde coletiva nacional do ministério da saúde nos fóruns?", 
    options: { A: "Eles possuem apenas genes dominantes alienígenas ou incompatíveis não suscetíveis", B: "Eles tendem ativamente a preservar e fixar fortemente num pool genético ilhado as longas Run Of Homozygosity (ROH), gerando e explodindo a quantidade drástica numéricas das terríveis doenças monogênicas raras Recessivas pela cruza entre pais e portadores comuns da mesma ilha/tribo (Consanguinidade), exigindo assim atenção imediata com painéis focados regionais e redes exclusivas na detecção nascer nas políticas rurais e nas portarias federais unificadas de exames raros ampliados", C: "Não ocorrem cruzamentos de mutações sem inserções", D: "Isso torna eles menos susceptíveis pois heterozigotos sempre somem de forma estatística geral sem causas", E: "Apenas doenças infecciosas do meio florestal atuam em ROH nas redes de exoma populacional em rios nativos no governo do projeto sem impactos graves genéticos mutacionais em famílias com linhagens fechadas" }, 
    correct: "B", explanation: "Gabarito: B. Regiões com linhagens fechadas e de consanguinidades endêmicas e rurais forçadas têm cruzamentos onde a mãe carrega o exato mesmo defeito letal recessivo do pai (Run Of Homozygosity severa no alinhamento WGS). As crianças nascem com falhas severas recessivas dobradas que numa metrópole de milhões de habitantes nunca achariam o par complementar 'perfeito' para adoecer por sorte genética do pool genômico aberto de diversidade da reprodução miscigenada. Focam nas doenças raras em alta frequência em pequenas cidades." },

  { id: 1213, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Qual é o principal defeito de WES - Exome Sequencing - em oposição direta da metodologia de ponta de Whole Genome Sequencing - WGS NGS na detecção massiva sem viés pré-determinado laboratorial bioinformático?", 
    options: { A: "Gera mais ruídos de alinhamento em íntrons", B: "O Exoma utiliza de hibridizações em fases e purificações imantadas que são péssimas para conseguir puxar e mapear mutações do tipo Estruturais severas nas bordas intrônicas (Translocações, Variações de número de Cópias extremas, repetições de Tripletes) ou no intergênico escondido no silenciador; a sua 'Vara de Pescar Molecular' captura mal os genes ricas em pontes de GC de maneira instável de bordas e flancos, deixando pontos cegos sem visão e diagnóstico perdido num mar de lixo e não cobertura estatística", C: "Lê apenas fitas sense (Foward) do transcrito", D: "É focado e detecta as bases em cores separadas de laser simples", E: "Não pode analisar de jeito nenhum amplicons curtos e RNAs virais" }, 
    correct: "B", explanation: "Gabarito: B. A captura (A 'pesca' magnética das sondas por pedaços seletivos de exons na sopa da biblioteca suja) sofre viés massivo. O imã não pega as expansões CGG do Huntington ou os genes tortos pesados por GC, ou as translocações de fusão de câncer longe do éxon. O Exoma fica cego no buraco desses alvos, O WGS varre o genoma de forma igualitária (mesmo com os lixos intrônicos em maioria) cobrindo e entregando a integridade do cariótipo inteiro sem deixar cair o peixe do anzol na purificação da pipeta da máquina e dos reagentes pesados." },

  { id: 1214, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Durante o processo de envelhecimento somático (senescência replicativa) analisado pelo Genomas SUS nas coortes de idosos centenários do estado, os telômeros nas extremidades dos cromossomos sofrem atrito encurtando fisiologicamente a cada mitose devido:", 
    options: { A: "A quebra acidental constante da tesoura de restrição das DNases e as bombas de cloro", B: "À limitação estrita natural direcional da própria DNA polimerase replicativa no genoma e o Fim do Primer. Ela requer extremidade baseada no grupamento 3'-OH para estender o molde nucleotídeo e ao polimerizar a porção fina da fita (Lagging strand), ela remove o RNA primer do fim extremo e fica incapacitada enzimaticamente de fechar as pontas das lacunas com bases de síntese do fosfato, encurtando o cromossomo inevitavelmente na progressão e evolução da placa limitando o tempo biológico da célula basal replicante do corpo", C: "À fusão aleatória reversa e a quebra mitótica do fuso", D: "À exclusão e exportação proteica de genes via exossomo na matriz lisossomal sem controle do Golgi central em apoptoses do fuso central", E: "Ao ataque químico do complexo Cas9 de bactérias invasivas do DNA" }, 
    correct: "B", explanation: "Gabarito: B. É o clássico 'End Replication Problem' de genética basal celular. A polimerase só corre numa pista indo pra uma ponta, o outro lado dela trava porque acabou o caminho da base e o RNA primer que colava o chão sumiu (foi digerido pelas exonucleases) da Lagging Strand. O carro de asfaltamento (polimerase de reparo) cai no precipício e o fim da fita fica mais curto e burro toda santa vez que a célula duplica. Até os genes normais de sobrevida da borda morrerem na velhice." },

  { id: 1215, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "As bibliotecas preparadas por Amplicon (Ex: Primer Panels focados do Ampliseq para mutações quentes de painéis no câncer oncológico laboratorial SUS) apresentam por falha da natureza da sua física PCR a seguinte estatística limitante a ser descartada pela bioinformática severamente nos pipelines BWA GATK nos exames somáticos nos laboratórios governamentais por não fornecer métricas de segurança reais aos laudos e relatórios:", 
    options: { A: "Uma quantidade infinita nula de SNPs na visão GATK VCF base final e zero coverage com 5 reads", B: "Taxas astronômicas e altíssimas absolutas de Reads Duplicados Artificiais por amplificação extrema do mesmo fragmento específico desenhado perfeitamente para as primers. Como eles começam e acabam sempre na mesma e milimétrica posição de base nos cromossomos de alvo e de maneira excessivamente intencional pela técnica do painel direcionado estritamente, a remoção bioinformática clássica de 'MarkDuplicates' de Picard os rotularia incorretamente todos de 'Lixo' e não podem ser apagados pelo computador nas chamadas finais e estatísticas somáticas do laudo médico do paciente", C: "Taxa zero pura absoluta nas chamadas do painel FASTQC", D: "Somente fragmentos longos gigantes da fita cega do telômero nas bases sem a ligação direta nos clusters amplificados in-situ", E: "Sem erros detectados estatisticamente nos logs com reads sem cobertura" }, 
    correct: "B", explanation: "Gabarito: B. A maldição/bênção do painel de Amplicon de Câncer. Eles são fotocópias perfeitas por desenho. O computador (MarkDuplicates) tem a regra: Se começou e acabou no mesmo exato pedaço do DNA, é clone de PCR inútil da máquina. Mas no Amplicon nós VIVEMOS DE CLONES de 100bp exatos nos hotspots de câncer (Ex: BRAF V600E focal). Assim, você é OBRIGADO a desligar o removedor de clones do seu software (Desativar a ferramenta Picard), ou ele deleta sua corrida inteira e te deixa sem read nenhum, e sem tumor detectado. Sem MarkDuplicates." },

  { id: 1216, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Um Pesquisador (PI) deseja exportar os dados brutos e as sequências de variantes identificadas num lote com centenas de Exomas Clínicos para o banco europeu EVA/EGA para ajudar numa publicação internacional com verbas do governo e do Ministério Nacional e coortes indígenas endêmicas de malária regionalizadas, associando nomes de municípios pequenos da região metropolitana ribeirinha nas publicações do genoma em papers americanos na rede sem bloqueios em open access generalizado na rede global para fomentar a transparência e parcerias acadêmicas nas federações.", 
    options: { A: "É livre a publicação de tudo o que quiser caso ele omitir o nome do país nas nuvens públicas de genoma nos consórcios de internet abertos", B: "As coortes podem expor a comunidade pequena e os isolados geográficos gerando identificação coletiva de estigmas gravíssimos em populações nativas. Os metadados demográficos geolocalizados combinados a DNAs exônicos sensíveis configuram alto risco em cruzamentos preditivos, obrigando a utilização restrita com governança de Data Access Committees (DAC), pseudo-anonimização severa por níveis nos dados de publicação mundial, remoção de atributos óbvios de tribos no texto internacional ou restrição nas submissões das bases sem controle severo de uso restrito do consentimento aprovado local sem ferir RDC indígenas específicas do Brasil", C: "Apenas não repassar o genoma do sexo biológico no FASTQ no paper de PDF do site europeu de revistas e esconder as patologias no excel da pasta do pesquisador do consórcio com senhas brandas por arquivo zippado de 10 megas em emails corporativos da secretaria e comissões da região pública norte ou sul americana do sistema sem senhas em nuvens", D: "Nenhum problema nos CEPs se ele traduzir o artigo para alemão nas entregas finais da revista com o comitê com relatórios manuais por escrito das variantes em txt livre público sem acesso bloqueado na URL institucional de site de domínio federal do governo aberto", E: "Não precisa anonimizar, bastando borrar o genoma do câncer" }, 
    correct: "B", explanation: "Gabarito: B. As populações isoladas endêmicas têm DNA 'fechado'. Se você publicar o arquivo na nuvem com a etiqueta 'Moradores da tribo X com 50 pessoas nas margens do Amazonas com a mutação Y para infarto', você feriu o sigilo (Risco de Reidentificação da LGPD do paciente nas vilas locais). Eles poderão sofrer estigmas genéticos laborais com cruzes em bases do IBGE. Isso é violação das RDC do CGEN nas boas práticas clínicas éticas da CONEP em genômica, sem uso dos Comitês DAC (Controle Fechado por aprovação da proposta de terceiros, sem link aberto na internet)." },

  { id: 1217, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "O descarte correto do formamida do Trizol nas extrações manuais antigas do material nas capelas não é no esgoto central pelas razões que envolvem riscos severos à biologia do laboratorista e à segurança sanitária hídrica coletiva em caso de infração sanitária nas calhas. A formamida e o fenol interagem gerando de imediato nos ambientes biológicos a temperatura ambiente se derramados acidentalmente da bancada da pipeta nas mesas abertas as seguintes ocorrências tóxicas graves perigosas nas áreas sem a ventilação e do filtro ativado químico de fumaças perigosas e aerossóis pesados no ar?", 
    options: { A: "Formamida explode ao tocar em oxigênio livre produzindo calor intenso luminoso avermelhado em bancada simples de acrílico limpa ou nos aventais soltos nas calhas em contato com a luz e a radiação UV do sistema germicida dos prédios de biologia das mesas", B: "Intoxicação brutal agressiva letal imediata respiratória no operador gerando necrose e perda neural a curto prazo pela absorção agressiva pulmonar e cutânea penetrante nos EPIs não testados sem capela operante contínua com exaustor em fluxo negativo ativo para extrações das moléculas perigosas orgânicas da reação do DNA puro sem o contato inalável químico. Os sais fenólicos não tem barreira sem uso isolante ou na ausência de mangueiras com contenção segura secundária no tubo lacrado do expurgo do galão restrito e isolado em armários à prova de solvente orgânico", C: "O material torna-se água pura não oferecendo nenhum efeito físico direto ao operador que toca com a luva", D: "Derretem imediatamente o azulejo do chão perfurando as áreas sólidas criando gás carbônico atóxico na quebra da cerâmica laboratorial", E: "Eles emitem raios radioativos que cegam a visão direta" }, 
    correct: "B", explanation: "Gabarito: B. Trizol e Fenos são agentes assassinos por penetração celular da pele em gotículas ou pelos vapores de evaporação rápida na temperatura natural. Queimam e destróem o sistema nervoso respiratório de um técnico inadvertido. Eles só são abertos dentro de capelas de coifas industriais de Química Exaustora (Lembrete: CSB Classe 2 A2 Biológicas com filtros biológicos de HEPA ou papéis de fluxo espalham e matam o funcionário retornando o gás nocivo para a frente e recirculando os venenos não-sólidos para o nariz de quem extrai DNA ali dentro num erro de EPI e EPC, a menos que as capelas sejam modelo 2 B2 totais e conectadas ao teto e as hélices da coifa externa blindada)." },

  { id: 1218, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Em oncologia de tecidos FFPE da rotina médica, mutações driver específicas da sinalização AKT do câncer geram transições de proto-oncogenes saudáveis em máquinas oncogênicas descontroladas nas proteínas kinases no núcleo das rotas do tumor ativando vias patogênicas em apoptoses desreguladas agressivamente. As classificações dessas alterações somáticas tumorais que alteram o resíduo do aminoácido trocando drasticamente as estruturas do laço das proteínas na sequência polipeptídica original funcional gerando atividade contínua de ganho celular proliferativo incontrolável nas cadeias celulares com mutações ativadoras dos domínios em oncogenes é denominada a nível acadêmico de tipo:", 
    options: { A: "Synonymous mutations atípicas não exônicas nos íntrons e splices isolados sem consequências severas no fim (Gain functions normais polimórficos de vida temporal no corpo do paciente inativando telômeros em braços curtos no gene sem afeto direto sem atividade transiente ativada proteica intracelular na fenda inibidora do gene do tecido e RNA base transiente no nucleoplasma limpo de ação local da matriz", B: "Mutações do modelo 'Missense' severas alterando cadeias inteiras não nativas desregulam o sítio catalítico gerando as hiperatividades perigosas incontroláveis sem paradas da fase tumoral no sinal cinase das rotas vitais que controlam mitoses sem checkpoints fisiológicos de pausa tumoral", C: "Mutações silenciadoras em UTRs não transcritas gerando ganho basal longo de cópias no sangue de RNAs mensageiros com fita instável quebrada na base primária inicial da extremidade 5' invertida e sem stop códon de falha grave na fita", D: "Nonsense Mutations ativadoras severas e únicas", E: "Silenciamento longo não metilado cromatínico nos receptores G nucleares sem DNA transcrito da enzima polimerase atuante com erro primário sem consequências letais diretas dos domínios estruturais" }, 
    correct: "B", explanation: "Gabarito: B. Mutação Missense ('Troca de Sentido'). O DNA errou o código na foto, trocou um aminoácido Valina (exemplo) por Glutamato. O pino de ligar do motor da proteína quebra e fica sempre cravado em 'LIGADO'. A célula se multiplica até invadir os tecidos (Metástase Tumoral Ativa Oncogenética em mutações hot-spot somáticas dominantes missense como as kinasés do KRAS, BRAF, AKT)." },

  { id: 1219, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "A Validação Cruzada OBRIGATÓRIA (Cross-Validation Proficiency tests inter-labs e intra-labs CAPA/QMS) para manter o Certificado de Proficiência e Controle Externo num programa governamental multicêntrico operado pelos LACENs exige, conforme os auditores reguladores CAP/ISO, a testagem em rodízio constante, por qual motivo legal essencial normativo de confiabilidade técnica no genoma analisado do laboratório no workflow das amostras WGS populacionais de rotinas operacionais no Brasil?", 
    options: { A: "Garantir lucros comerciais ao laboratório", B: "Evitar e mitigar Batch Effects de bancada. Uma máquina e pipetas da USP precisam rodar cega a mesma extração e biblioteca num lote controle atestado pelo mundo e entregar o mesmíssimo gabarito e VCF variante com precisões brutais acima das médias que o laboratório central de FioCruz entregou. Isso prova o Rigor de exatidão metodológica reprodutível sob as mesmíssimas pressões do laboratório clínico blindando que as máquinas e os biólogos daquele lote específico da semana ou sala de exaustão não enviesaram os laudos médicos finais emitidos do centro local das amostras críticas avaliadas nas pranchas", C: "Conferir o salário e ponto horário dos técnicos na bancada", D: "Gerar multas na importação dos tubos estrangeiros sem lotes atestados com impostos nos equipamentos federais das áreas aduaneiras limpas da receita nacional do país com carimbos e notas e taxas aplicáveis", E: "Verificar estética dos layouts dos softwares instalados nos computadores isolados da rede externa de firewall por empresas contratadas de apoio aos laboratórios das rotinas mensais primárias com as equipes limpas" }, 
    correct: "B", explanation: "Gabarito: B. A base da acreditação mundial. Você só pode liberar exame de vida ou morte no NGS se o seu cano de extração com os mesmos kits foi testado no cego por um DNA referência do NIST e você acertou o mapa de letras com acurácia de relógio cirúrgico idêntica aos padrões de qualidade atestados das plataformas dos laboratórios mestres globais da técnica WGS e Exoma avaliados em concordância estatística e com os dados sem viés reprodutíveis na rotina analítica diária. (Garante segurança BPL total)." },
  // =========================================================
  // MEGA BLOCO 8 - BIOINFORMÁTICA AVANÇADA (50 QUESTÕES)
  // =========================================================

  // --- Bioinformática e análise genômica ---
  { id: 1220, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "O algoritmo BWA-MEM é o padrão-ouro para alinhamento de reads curtos (Illumina) contra o genoma de referência humano. Qual é a estrutura de dados e o princípio matemático fundamental que permite ao BWA indexar e buscar sequências no genoma de 3.2 Gb com altíssima velocidade e baixo consumo de RAM?", 
    options: { A: "Matrizes de Distância de Needleman-Wunsch", B: "Modelos Ocultos de Markov (HMM)", C: "Transformada de Burrows-Wheeler (BWT) acoplada ao índice FM (Ferragina-Manzini)", D: "Árvores Filogenéticas de Máxima Verossimilhança", E: "Redes Neurais Convolucionais (CNN)" }, 
    correct: "C", explanation: "Gabarito: C. A BWT reorganiza o genoma humano em blocos de caracteres que se repetem, permitindo comprimi-lo e buscar sequências (reads) em tempo O(n) sem precisar varrer o genoma inteiro linearmente." },

  { id: 1221, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Na anotação de um arquivo VCF, as tags AC, AN e AF no campo INFO são cruciais para a genética de populações. Em uma variante onde temos AC=2 e AN=100, qual é o valor esperado para AF e o que isso significa biologicamente em um organismo diploide?", 
    options: { A: "AF=0.02; significa que 2% dos reads daquele paciente possuem a mutação", B: "AF=0.02; significa que o alelo alternativo foi observado 2 vezes em um total de 100 cromossomos testados (frequência alélica de 2%)", C: "AF=50; significa que a variante é heterozigota", D: "AF=0.5; significa frequência alélica de 50%", E: "AF=200; significa que há 2 indivíduos homozigotos na coorte" }, 
    correct: "B", explanation: "Gabarito: B. AC = Allele Count (Contagem do alelo mutado), AN = Allele Number (Total de alelos/cromossomos sequenciados). AF = AC/AN (Frequência Alélica). Em diploides, AN=100 significa 50 pessoas genotipadas." },

  { id: 1222, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Ao realizar Variant Calling somático (Tumor vs. Normal) com ferramentas como Mutect2, o algoritmo precisa lidar com a 'pureza tumoral' e a 'heterogeneidade intratumoral'. Como isso se reflete nos dados bioinformáticos em comparação com a chamada germinativa do HaplotypeCaller?", 
    options: { A: "Variantes somáticas aparecem apenas em cromossomos sexuais", B: "O Mutect2 espera Frequências Alélicas Variantes (VAF) muito distantes dos clássicos 50% ou 100% vistos na linha germinativa, buscando mutações que podem estar em apenas 5% ou 10% dos reads devido a subclones tumorais", C: "O Mutect2 não usa arquivos BAM, apenas arquivos FASTQ puros", D: "O Mutect2 exige cobertura acima de 10.000x para qualquer chamada", E: "Variantes somáticas são sempre deleções completas de braços cromossômicos" }, 
    correct: "B", explanation: "Gabarito: B. Um tecido tumoral é uma mistura de células normais e de vários clones de células cancerígenas. Uma mutação driver pode estar presente em apenas uma fração pequena das células, gerando um VAF (Variant Allele Frequency) de 5%, 10% ou 15%." },

  { id: 1223, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "O formato de arquivo BED (Browser Extensible Data) é frequentemente utilizado para definir regiões de captura de Exoma (target regions). Qual é a característica fundamental da indexação de coordenadas no formato BED em comparação com o VCF?", 
    options: { A: "BED é 1-based start e 1-based end", B: "BED é 0-based start e 1-based end (Half-open), significando que a primeira base do cromossomo é 0 e a posição final não é incluída no intervalo", C: "BED usa letras (A, T, C, G) no lugar de números", D: "BED não possui definição de cromossomos", E: "BED é um formato binário comprimido" }, 
    correct: "B", explanation: "Gabarito: B. Essa é uma das pegadinhas clássicas da bioinformática. O VCF é 1-based (a primeira base é 1). O BED é 0-based (a primeira base é 0 e o fim é não-inclusivo). Errar isso na conversão de arquivos gera um desvio de 1 base que arruína a anotação clínica." },

  { id: 1224, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Para detectar Variações Estruturais (SVs), como grandes deleções ou translocações cromossômicas, os algoritmos de bioinformática analisam 'assinaturas' específicas nos arquivos BAM. Quais são as três assinaturas clássicas utilizadas por ferramentas como Manta ou Lumpy?", 
    options: { A: "Phred scores, GC content e N-content", B: "Read Depth (profundidade de cobertura), Split Reads (reads divididos/cortados) e Discordant Read Pairs (pares de reads mapeando em distância ou orientação anômalas)", C: "Transições, Transversões e Índices de metilação", D: "Expressão diferencial, Splicing alternativo e Edição de RNA", E: "K-mers, Grafos de De Bruijn e Contigs" }, 
    correct: "B", explanation: "Gabarito: B. Se a cobertura cai bruscamente (Read Depth), ou se metade do read mapeia no chr1 e a outra metade no chr5 (Split Read), ou se o par Forward-Reverse está longe demais (Discordant), o software crava a existência de uma Variante Estrutural." },

  { id: 1225, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Em projetos de sequenciamento populacional (como o Genomas SUS), a abordagem de 'Joint Genotyping' (Genotipagem Conjunta) utilizando arquivos gVCF (Genomic VCF) é preferida em relação a chamar variantes amostra por amostra. A principal vantagem técnica dessa abordagem é:", 
    options: { A: "Gastar menos espaço em disco no servidor", B: "Permitir diferenciar se a ausência de uma variante em um paciente ocorreu por ser homozigoto selvagem (ref/ref) ou porque simplesmente não houve cobertura de leitura naquela região (no call), resgatando variantes raras com baixa cobertura em indivíduos específicos pela força da coorte", C: "Dispensar a etapa de alinhamento com BWA", D: "Converter DNA em RNA in silico", E: "Remover a necessidade de computação em cluster paralelo" }, 
    correct: "B", explanation: "Gabarito: B. O arquivo gVCF guarda informações de TODAS as bases (mesmo as normais/referência). Ao juntar 10.000 gVCFs, o GATK pode olhar para uma variante que falhou num paciente e usar a estatística dos outros 9.999 para afirmar com certeza seu status alélico." },

  { id: 1226, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Métricas de avaliação de montagem de genomas 'De Novo' incluem o N50. Se uma montagem tem um N50 de 2 Megabases (Mb), isso significa que:", 
    options: { A: "Existem 50 contigs com mais de 2 Mb", B: "O contig mais longo tem 2 Mb", C: "O genoma total tem 50 Mb", D: "Pelo menos metade (50%) do genoma montado está contida em contigs (fragmentos contínuos) de tamanho igual ou superior a 2 Mb", E: "A taxa de erro da montagem é de 50%" }, 
    correct: "D", explanation: "Gabarito: D. O N50 é a métrica padrão de qualidade de montagem (assembly). Ele pega todos os pedaços montados do maior pro menor; quando a soma dos pedaços atinge 50% do genoma, o tamanho daquele último pedaço é o N50." },

  { id: 1227, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Em Transcriptômica (RNA-Seq), ferramentas de quantificação modernas como Salmon ou Kallisto são extremamente rápidas porque utilizam o conceito de 'Pseudo-alinhamento'. O que as diferencia do alinhamento tradicional (ex: STAR/HISAT2)?", 
    options: { A: "Elas não usam FASTQs, apenas arquivos VCF", B: "Elas traduzem o RNA para proteína antes de alinhar", C: "Elas não tentam alinhar base por base contra o genoma; em vez disso, quebram os reads em k-mers e usam grafos de transcriptoma para inferir rapidamente de qual transcrito o read se originou, sem produzir arquivo BAM", D: "Elas alinham os reads no DNA mitocondrial primeiro", E: "Elas rodam exclusivamente em computadores quânticos" }, 
    correct: "C", explanation: "Gabarito: C. O pseudo-alinhamento foi uma revolução. Ao invés de gastar horas achando o local exato do genoma no arquivo BAM, o software diz 'esse k-mer pertence ao Transcrito X' em minutos, pulando o alinhamento basal exato." },

  // --- Programação e ferramentas computacionais ---
  { id: 1228, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "Um bioinformata precisa contar quantas variantes do cromossomo 1 existem em um arquivo VCF não comprimido (ignorado o header). O comando Bash (Linux) de uma linha (one-liner) mais elegante e rápido para isso é:", 
    options: { A: "awk '{print $1}' arquivo.vcf", B: "grep -v '^#' arquivo.vcf | awk '$1 == \"chr1\"' | wc -l", C: "sed 's/chr1/count/g' arquivo.vcf", D: "ls -l arquivo.vcf | wc -chr1", E: "cat arquivo.vcf > chr1" }, 
    correct: "B", explanation: "Gabarito: B. `grep -v '^#'` remove todo o cabeçalho (header do VCF começa com #). `awk '$1 == \"chr1\"'` filtra apenas as linhas cuja primeira coluna é 'chr1'. `wc -l` conta o número de linhas resultantes." },

  { id: 1229, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "Ao utilizar a linguagem R (pacote DESeq2) para análise de expressão gênica diferencial, o input numérico OBRIGATÓRIO (matriz de contagem) que o algoritmo exige é:", 
    options: { A: "Valores normalizados de FPKM (Fragments Per Kilobase Million)", B: "Valores em TPM (Transcripts Per Million)", C: "Counts brutos não-normalizados (Raw counts), pois o modelo de distribuição Binomial Negativa do DESeq2 requer a estimativa correta da variância ligada ao tamanho da biblioteca", D: "P-values logarítmicos", E: "Scores Phred de qualidade dos reads" }, 
    correct: "C", explanation: "Gabarito: C. Nunca forneça dados já normalizados (TPM/FPKM) para o DESeq2 ou edgeR. A mágica da estatística Bayesiana do software depende de ver os números inteiros brutos para calcular o 'size factor' e a dispersão." },

  { id: 1230, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "O Snakemake é uma das ferramentas de workflow mais usadas em Bioinformática. O seu funcionamento é baseado na criação de um DAG (Directed Acyclic Graph) que significa:", 
    options: { A: "Um banco de dados relacional SQL", B: "Uma estrutura de rede neural artificial", C: "Um grafo direcionado sem ciclos (loops), onde cada 'regra' (rule) é um nó e as dependências entre arquivos de input e output definem a ordem de execução paralelizada das tarefas de forma automatizada", D: "Um gráfico de dispersão 3D para genomas", E: "Uma interface gráfica do usuário (GUI)" }, 
    correct: "C", explanation: "Gabarito: C. DAGs são o cérebro de orquestradores de pipelines (como Snakemake e Nextflow). O software mapeia sozinho o que precisa ser feito primeiro (ex: mapear) para depois fazer a chamada de variantes (ex: genotipar), garantindo que nada rode fora de ordem e em paralelo sempre que possível." },

  { id: 1231, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "A biblioteca `pysam` em Python é amplamente usada em genômica. Qual é a sua utilidade primária?", 
    options: { A: "Criar gráficos como o ggplot2 do R", B: "Atuar como um wrapper (interface) para a biblioteca C `htslib`, permitindo ler, manipular e extrair informações de arquivos SAM/BAM, VCF e BCF nativamente em Python de forma otimizada", C: "Realizar scraping em sites da NCBI", D: "Desenhar interfaces de sites de bioinformática", E: "Criptografar dados genômicos no disco rígido" }, 
    correct: "B", explanation: "Gabarito: B. Com o pysam, você não precisa fazer parsers manuais que demoram horas. Você abre um arquivo gigante BAM em 1 segundo e solicita algo como `bam.fetch('chr1', 1000, 2000)`." },

  { id: 1232, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "Em um ambiente de computação de alto desempenho (HPC) do Genomas SUS utilizando o gerenciador de filas SLURM, o comando utilizado para submeter um script de pipeline bioinformático para a fila de processamento dos nós computacionais é:", 
    options: { A: "docker run", B: "sbatch", C: "apt-get install", D: "git commit", E: "chmod +x" }, 
    correct: "B", explanation: "Gabarito: B. `sbatch script.sh` envia seu trabalho para o cluster SLURM. O gerenciador analisa os recursos (CPUs, RAM) que você pediu no cabeçalho do script e o coloca na fila de espera dos supercomputadores." },

  { id: 1233, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "Qual é o fluxo básico e correto do Git (Controle de Versão) para um bioinformata salvar alterações locais no seu pipeline e enviá-las para o repositório remoto no GitHub?", 
    options: { A: "git push -> git pull -> git clone", B: "git add . -> git commit -m 'mensagem' -> git push", C: "git fetch -> git merge -> git reset", D: "git branch -> git status -> git init", E: "git rm -> git revert -> git clone" }, 
    correct: "B", explanation: "Gabarito: B. Adiciona os arquivos para a 'staging area' (git add), sela o pacote de código com uma nota explicativa (git commit) e empurra o pacote para a nuvem do repositório (git push)." },

  { id: 1234, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "No contexto da extração de dados públicos via API (ex: Ensembl REST API), o formato de serialização de dados mais amplamente retornado por requisições HTTP GET na web moderna de genômica é o:", 
    options: { A: "FASTA", B: "XML", C: "JSON (JavaScript Object Notation), por ser leve e facilmente parseável em dicionários/listas no Python ou R", D: "BAM", E: "PDF" }, 
    correct: "C", explanation: "Gabarito: C. O JSON é a língua franca da comunicação entre sistemas web hoje. Todas as APIs genômicas (ClinVar, Ensembl, gnomAD) devolvem as requisições em blocos chave-valor no formato JSON." },

  { id: 1235, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "A diferença primordial técnica e de segurança que faz o 'Singularity' (agora Apptainer) ser o padrão ouro em clusters HPC acadêmicos ao invés do clássico 'Docker' é:", 
    options: { A: "Docker é muito mais lento em inicialização", B: "Docker exige que o daemon rode com privilégios de administrador (root), o que é um risco de segurança fatal em clusters multi-usuário. O Singularity permite a execução de containers no espaço restrito do próprio usuário sem escalar privilégios (rootless)", C: "Docker não suporta Ubuntu", D: "Singularity não suporta pipelines bioinformáticos complexos", E: "Docker funciona apenas em Windows Server" }, 
    correct: "B", explanation: "Gabarito: B. Se você dá acesso ao Docker para um bioinformata em um supercomputador de 20 milhões, ele ganha acesso de 'Deus' (root) no servidor e pode formatar a máquina. O Singularity bloqueia isso, mantendo a permissão limitada do usuário." },

  // --- Estatística aplicada à genômica ---
  { id: 1236, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "Em transcriptômica (RNA-Seq), a Análise de Componentes Principais (PCA) e o Multidimensional Scaling (MDS) são técnicas de estatística multivariada frequentemente usadas como primeiro passo para:", 
    options: { A: "Identificar os genes diferencialmente expressos com p-value ajustado", B: "Redução de dimensionalidade, permitindo visualizar a variância global do dataset em 2D/3D e avaliar visualmente se as amostras se agrupam pela condição biológica (ex: caso vs controle) ou se há 'batch effects' (vieses técnicos laboratoriais) separando os grupos", C: "Montar o transcriptoma 'de novo' ligando os contigs longos", D: "Remover RNA ribossômico in-silico do FASTQ", E: "Descobrir mutações missense pontuais nos promotores gêmicos" }, 
    correct: "B", explanation: "Gabarito: B. Se o seu PCA plotar todas as amostras colhidas na terça-feira do lado esquerdo e as da quinta-feira do lado direito (ao invés de separar Saudáveis de Doentes), você tem um grave 'batch effect' laboratorial que a estatística acaba de desmascarar." },

  { id: 1237, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "Num estudo de Associação Genômica Ampla (GWAS), os resultados são tipicamente plotados em um 'Manhattan Plot'. Qual é a representação correta dos eixos neste gráfico?", 
    options: { A: "Eixo X: Número de pacientes afetados; Eixo Y: Idade do paciente", B: "Eixo X: Localização genômica (posição nos cromossomos de 1 a 22); Eixo Y: Logaritmo negativo do p-valor (-log10 P), indicando a força da associação estatística de cada SNP testado", C: "Eixo X: Cobertura média do WGS; Eixo Y: Taxa de erro do sequenciador", D: "Eixo X: Tamanho do gene em Kilobases; Eixo Y: Expressão em TPM", E: "Eixo X: Valor do Fst; Eixo Y: Linkage Disequilibrium r²" }, 
    correct: "B", explanation: "Gabarito: B. Chama-se Manhattan porque os picos dos SNPs ultra-significativos se destacam da base linear como se fossem os arranha-céus da cidade de Nova Iorque acima do horizonte." },

  { id: 1238, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "Em relação aos modelos estatísticos de correção para múltiplos testes (Multiple Testing Correction), por que a 'FDR' (False Discovery Rate - Benjamini-Hochberg) é amplamente preferida na genômica em vez da severa correção de Bonferroni?", 
    options: { A: "Porque Bonferroni é muito leniente e aprova muitos falsos positivos espúrios e sem nexo", B: "Bonferroni é demasiadamente conservador e penaliza agressivamente estudos com milhões de genes/SNPs, gerando alta taxa de Falsos Negativos (Erro Tipo II). A FDR é menos punitiva, aceitando uma proporção controlada e definida (ex: 5%) de falsos positivos entre os resultados declarados significativos", C: "A FDR só funciona para análises com menos de 100 variantes no total", D: "Bonferroni não funciona em linguagens de programação como R ou Python", E: "A FDR ignora o p-value e avalia apenas a Fold-Change dos pacientes" }, 
    correct: "B", explanation: "Gabarito: B. Se você faz RNA-Seq com 20.000 genes humanos, o p-valor limiar de Bonferroni seria 0.05 / 20.000 = 0.0000025. Isso é tão estrito que você quase nunca acharia nenhum gene significativo, afundando a pesquisa por excesso de conservadorismo estatístico." },

  { id: 1239, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "A determinação do Equilíbrio de Hardy-Weinberg (HWE) numa coorte do Genomas SUS atua como um controle de qualidade (QC) estatístico para painéis genéticos. SNPs com severo desvio do HWE (p < 1e-6) numa população controle saudável geram alerta porque:", 
    options: { A: "Indicam que a evolução parou", B: "Desvios extremos no HWE em indivíduos controle frequentemente sinalizam artefatos graves de genotipagem, falhas de alinhamento em sequências parálogas ou erros sistêmicos de bioinformática, justificando a exclusão desse SNP do estudo (HWE Filter)", C: "Garantem que a amostra é nativa do local", D: "Mostram que a taxa de homozigotos é nula no universo das amostras do LIMS", E: "Aumentam o poder do estudo clínico na oncologia de precisão" }, 
    correct: "B", explanation: "Gabarito: B. O HW diz como os alelos deveriam se distribuir na natureza. Se o sequenciador mostra resultados incrivelmente fora do HW em pessoas normais, não é um milagre evolutivo, é a máquina ou o alinhador que errou a contagem." },

  { id: 1240, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "Em algoritmos bayesianos de Variant Calling (como o FreeBayes e HaplotypeCaller), a probabilidade de um genótipo ser chamado é baseada no Teorema de Bayes. O que o 'Prior' (A priori) representa nesse contexto matemático genômico?", 
    options: { A: "A cobertura média do genoma da amostra de estudo", B: "A probabilidade de observarmos uma mutação em qualquer posição do genoma antes mesmo de olhar para os reads daquele paciente específico (ex: usando a taxa de heterozigosidade populacional humana conhecida de ~1 em cada 1000 bases)", C: "O nível de poluição da flowcell Illumina", D: "A qualidade da base após a foto no sequenciador", E: "O p-value da análise Fisher Test pós WES" }, 
    correct: "B", explanation: "Gabarito: B. Na estatística bayesiana, você já entra no problema sabendo de algo. Como sabemos que humanos sofrem 1 mutação a cada 1.000 bases, o algoritmo já começa o cálculo desconfiando que o normal é não ter mutação (Prior muito baixo)." },

  { id: 1241, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "O conceito do 'Índice F1' (F1-Score) na avaliação de pipelines bioinformáticos por machine learning balanceia estatisticamente quais métricas clássicas de desempenho?", 
    options: { A: "Prevalência e Incidência", B: "Sensibilidade (Recall) e Valor Preditivo Positivo (Precision), representando a média harmônica entre a capacidade de não perder variantes reais e a capacidade de não gritar falso-positivo no VCF", C: "Odds Ratio e Risco Relativo", D: "Verdadeiro Negativo e Especificidade Genômica Analítica", E: "P-value e Correção FDR da bioestatística" }, 
    correct: "B", explanation: "Gabarito: B. O F1-Score é a nota final da 'perfeição' de um algoritmo preditivo de AI ou Pipeline. Ele pune tanto o pipeline que é sensível demais (gera muito lixo) quanto o que é específico demais (perde mutações reais do paciente)." },

  { id: 1242, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "Modelos Ocultos de Markov (HMM - Hidden Markov Models) formam o cerne matemático de qual clássica operação bioinformática aplicada?", 
    options: { A: "Medição de Phred Score no FASTQ", B: "Detecção de Variações do Número de Cópias (CNVs - ex: ExomeDepth/XHMM) avaliando os estados 'ocultos' de deleção ou duplicação com base nas flutuações 'observáveis' de profundidade de reads vizinhos", C: "Alinhamento local Smith-Waterman", D: "Anotação de funcionalidade no ClinVar", E: "Criptografia de disco local da AWS no SUS" }, 
    correct: "B", explanation: "Gabarito: B. No HMM, o 'estado' do DNA do paciente (Deletado ou Duplicado) está oculto. A única pista que o computador tem são as emissões observáveis, que é a quantidade de reads caindo lá. A matemática do HMM traça o caminho mais lógico para esses buracos." },

  { id: 1243, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "A métrica 'R-quadrado' (R²) em análises de Imputação Genotípica mede a qualidade da inferência. Um SNP não genotipado no Microarray do laboratório que foi imputado computacionalmente com um R² (INFO score) de 0.95 significa que:", 
    options: { A: "O SNP é 95% patogênico e causará doença letal congênita no feto", B: "Há uma altíssima concordância (95%) e confiança estatística de que o genótipo inferido matematicamente pelo painel de referência bate fielmente com o genótipo real invisível do paciente (Altamente Qualificado para GWAS)", C: "Ele foi lido 95 vezes pelo laser do sequenciador", D: "É um erro crasso e deve ser expurgado do VCF", E: "Houve 95 recombinações homólogas mitóticas" }, 
    correct: "B", explanation: "Gabarito: B. A imputação genômica adivinha bases que você não sequenciou (baseado no bloco de correlação de Linkage Disequilibrium). R² próximo de 1.0 atesta que a 'adivinhação' da bioinformática foi matematicamente perfeita com base nos dados ao redor." },

  // --- Princípios de saúde pública e epidemiologia genética ---
  { id: 1244, area: "Bioinformática", subject: "Princípios de saúde pública e epidemiologia genética", 
    text: "O objetivo de calcular um Polygenic Risk Score (Escore de Risco Poligênico - PRS) no âmbito da epidemiologia genética voltada para a Saúde Pública e Atenção Básica é:", 
    options: { A: "Dar o diagnóstico definitivo instantâneo de uma doença de herança Mendeliana recessiva (Ex: Fibrose Cística)", B: "Estratificar a população em percentis de risco poligênico contínuo. Pessoas no percentil superior do PRS têm riscos cumulativos equivalentes ao de mutações monogênicas, justificando antecipar mamografias preventivas ou exames coronarianos custeados pelo estado precocemente", C: "Impedir que casamentos consanguíneos ocorram, cancelando registros cartorários civis no interior do Brasil", D: "Identificar exclusivamente agentes patógenos e variantes víricas importadas na fronteira de imigração aduaneira por barreira NGS", E: "Substituir 100% da avaliação ambiental, hábitos de vida e dieta na consulta médica ambulatorial de rotina gástrica" }, 
    correct: "B", explanation: "Gabarito: B. O PRS pega milhares de SNPs que causam um dano minúsculo cada um, soma todos eles, e te mostra se sua genética como um todo joga contra ou a favor do infarto/câncer." },

  { id: 1245, area: "Bioinformática", subject: "Princípios de saúde pública e epidemiologia genética", 
    text: "Mendelian Randomization (Randomização Mendeliana) é uma abordagem analítica que revolucionou a epidemiologia. O seu princípio se baseia em usar variantes genéticas como 'Variáveis Instrumentais' para:", 
    options: { A: "Inferir com mais precisão a causalidade (e não mera correlação) entre um biomarcador/fator de risco (ex: LDL) e uma doença (ex: Doença Arterial), visto que o genótipo é atribuído aleatoriamente no nascimento e não sofre efeito de causalidade reversa ao longo da vida humana", B: "Embaralhar aleatoriamente os genomas de pacientes doentes antes da imputação para burlar leis da LGPD e comitês europeus", C: "Sortear quem vai receber a medicação no ensaio clínico cego duplo randomizado hospitalar farmacêutico", D: "Aleatorizar mutações in silico para treinar Inteligência Artificial", E: "Mapear apenas heredogramas e pedigrees da época de Gregor Mendel sobre os monastérios austríacos em genética floral" }, 
    correct: "B", explanation: "Gabarito: B. Pessoas doentes bebem café ou beber café deixa doente? A Randomização Mendeliana usa genes que afetam naturalmente o metabolismo da cafeína na população para provar estatisticamente quem causa o quê, pois seus genes vieram antes da sua dieta diária." },

  { id: 1246, area: "Bioinformática", subject: "Princípios de saúde pública e epidemiologia genética", 
    text: "A implementação de Farmacogenômica (PGx) em larga escala em Sistemas Públicos (como a variante DPYD*2A vs Fluroruracil na Oncologia do SUS) gera intenso impacto em Saúde Pública porque:", 
    options: { A: "Extingue a venda de medicamentos genéricos no país e fecha redes farmacêuticas estaduais no Brasil inteiro", B: "Reduz drasticamente eventos adversos severos e mortes tóxicas iatrogênicas preveníveis. Além de humanitário, a prevenção de dezenas de internações na UTI oncológica torna a genômica altamente custo-efetiva para os cofres públicos por abate dos danos da iatrogenia grave letal evitável nos quimioterápicos pesados", C: "Gera mutações somáticas que exigem CRISPR/Cas9 nos hospitais de base e capital estadual central de câncer de mama precoce de alto impacto social da rede federal", D: "Apenas se aplica a remédios homeopáticos paliativos de desfecho primário falho de sobrevida geral na coorte de ensaio", E: "Obriga o patenteamento do genoma do paciente pelas farmacêuticas" }, 
    correct: "B", explanation: "Gabarito: B. Economia em Saúde é matemática pura. Evitar um paciente envenenado na UTI do SUS durante semanas paga 1.000 sequenciamentos genéticos preventivos. Custo e Efetividade de ponta." },

  { id: 1247, area: "Bioinformática", subject: "Princípios de saúde pública e epidemiologia genética", 
    text: "Na 'Vigilância Genômica de Patógenos', a disciplina de 'Filodinâmica' bioinformática usa os genomas sequenciados de vírus (Ex: Arbovirores e COVID-19) colhidos de populações infectadas ao longo do tempo cronológico real para deduzir qual valiosa informação populacional e epidemiológica dos vetores de saúde no mapa tático dos comitês sanitários de crise?", 
    options: { A: "A eficácia e eficiência de antibióticos comuns contra o patógeno bacteriano celular em placa", B: "O tempo de origem da epidemia, as taxas de crescimento populacional do vírus (R0), as vias de migração e rotas geográficas da importação intercontinental da linhagem nos mapas traçados da biologia molecular computada em árvores calibradas por relógio molecular fixo da base nitrogenada e da mutação natural base", C: "Se o paciente irá morrer ou não com 100% de margem", D: "O valor da dose de vacina estipulada pela Anvisa", E: "A cor e sintomatologia dermatológica do paciente local em leitos clínicos puros do PSF" }, 
    correct: "B", explanation: "Gabarito: B. Como o vírus muta em taxa constante ('Relógio molecular'), rastreando as mutações dos pacientes do Mundo todo o computador descobre que o Vírus X do estado do Pará veio da Inglaterra em avião na Terça-Feira passada. Vigilância Epidemiológica de elite." },

  { id: 1248, area: "Bioinformática", subject: "Princípios de saúde pública e epidemiologia genética", 
    text: "Nas bases de dados mundiais de genômica, variantes associadas a doenças recessivas letais na infância raramente somem por completo devido ao equilíbrio de Mutação-Seleção. No mapeamento do Genomas SUS em regiões longínquas isoladas de vilarejos no sertão, a presença destas doenças em ALTA frequência na vila é devida clinicamente e populacionalmente ao Efeito Fundador e:", 
    options: { A: "Mutação UV constante do equador geográfico no clima extremo amazônico e nordestino equatorial severo brasileiro regional focado do continente sul do país em análise ambiental clínica da saúde geral da exposição térmica natural forte global", B: "Alto grau de Endogamia e Isolamento, que amplifica o agrupamento dos alelos recessivos em homozigose (Identidade por Descendência - IBD) pela união local secular de habitantes derivados da mesma raiz ancestral, não sendo mutações novas, mas acúmulo genético geracional dos parentes nos cruzamentos fechados (Consanguinidade)", C: "Efeito radiotivo somático na primeira fase mitótica da vida intra-uterina fetal dos ribeirinhos nos rios pesados das grandes minerações de impacto geológico estadual em análise genética de metal pesado orgânico sistêmico celular grave celular oncológico da vida urbana metropolitana nos centros", D: "Crossover irregular na prófase I", E: "Efeito de retrotransposons LINE" }, 
    correct: "B", explanation: "Gabarito: B. É o clássico 'Efeito Fundador' das vilas (Ex: O maior caso de Xeroderma Pigmentoso do Brasil numa vila isolada do Goiás). As poucas famílias fundadoras tinham mutação; no cruzamento fechado ao longo de séculos, a doença rara virou 'comum' na vila." },

  // --- Segurança de dados ---
  { id: 1249, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Sob as diretrizes de compliance de Dados (LGPD) em ambientes bioinformáticos e hospitais SUS, a pseudonimização do dado sensível armazenado do WGS no Storage/Servidor Nacional exige essencialmente que:", 
    options: { A: "Os FASTQs sejam mantidos originais mas deletados em 7 dias após alinhamento BWA para o Bam local na RAM da máquina nativa", B: "A base genômica VCF esteja criptografada ou separada por chaves ID, sendo impossível ligá-la ao nome, endereço e CPF do paciente SEM o uso e posse cruzada da 'Chave de Reidentificação', a qual deve ser guardada em ambiente lógico e físico hiper restrito e separado pela diretoria ética e clínica de governança local do projeto primário (Data Officer ou DPO responsável)", C: "O genoma sofra scrambling e inversões de bases C-T para mascarar os genes graves das famílias testadas na máquina de NGS", D: "O TCLE fique em site aberto online e FTP limpo sem senhas estritas para a transparência do governo em portais públicos de saúde aberta na LGPD baseada em compliance das agências governamentais nativas das autarquias e setores civis federais unificadores governamentais", E: "Todo o processamento vá ao Exterior na Amazon estadunidense sem regulação do Brasil das terras federais sem rastreio de auditorias locais fiscais sanitárias puras da lei civil e direito penal médico." }, 
    correct: "B", explanation: "Gabarito: B. Pseudonimizar é trocar o nome João por ID_85923, mas guardar o papel que diz 'João=ID_85923' a sete chaves num cofre separado. Se a chave estiver solta na mesa, o dado não está pseudonimizado." },

  { id: 1250, area: "Bioinformática", subject: "Segurança de dados", 
    text: "O consórcio mundial GA4GH promove o sistema 'Beacon'. Na prática de segurança da informação e bioinformática global da federação de saúde, como essa API resolve o problema de descoberta de variantes raras entre hospitais sem ferir ou vazar o arquivo VCF sigiloso e legal dos pacientes do biobanco nacional Genomas SUS?", 
    options: { A: "Pelo sistema Blockchain pago", B: "A API Beacon funciona em formato 'Query/Consulta Booleana restrita'. O hospital na Suécia pergunta eletronicamente 'Vocês têm o rs1234 mutado aí?' e o banco do Brasil retorna apenas um simplório 'SIM/NÃO', ocultando todas as outras bilhões de bases, sexo, idade ou dados do portador da variante, bloqueando a espionagem genômica total do banco mas validando que o paciente raro existe.", C: "Compartilha apenas os arquivos FASTQ comprimidos", D: "Faz um torrent do genoma fatiado no mundo todo", E: "Apenas divulga paper em PDF no final" }, 
    correct: "B", explanation: "Gabarito: B. O Beacon Protocol é fantástico. A API só responde 'Verdadeiro' ou 'Falso' e quantidade. Você não envia o genoma do paciente para outro país, você apenas atesta que já viu aquela variante antes. Mantém 100% do sigilo médico intacto." },

  { id: 1251, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Em Bioinformática Baseada em Nuvem (Cloud Computing - AWS/GCP/Azure) adotada pelo Datasus e projetos genômicos modernos, aplica-se o 'Modelo de Responsabilidade Compartilhada de Segurança'. O que a Amazon ou Google cloud é estritamente isenta (não se responsabiliza) quando o laboratório sofre vazamento de dados?", 
    options: { A: "Segurança física dos Data Centers contra furacões ou explosões, fornecimento de energia diesel emergencial e da matriz central da CPU física do blade do switch onde os discos giram fisicamente na matriz de metal em hardware e de sistemas básicos da bios base", B: "Configurações errôneas do cliente. Se o bioinformata logado na nuvem deixar a regra de acesso do bucket S3 aberta ao público (Public Read) no painel ou perder as senhas API keys e SSH na internet (GitHub leak), a responsabilidade pelo vazamento dos FASTQs sigilosos é 100% do laboratório gestor civil", C: "O provisionamento do ar condicionado", D: "A proteção do sistema de cabos submarinos do provedor de acesso internacional no meio da rede e ping latencial de tráfego de TCP base dos pacotes enviados em portas", E: "Virtualização subjacente do disco no backend base da nuvem estrutural e hardware e processadores Xeon nativos da Intel dos slots dos chassis de máquina corporativa gigante da TI corporativa central em hardware e rede e software base da nuvem em escala de bits" }, 
    correct: "B", explanation: "Gabarito: B. A nuvem garante que ninguém vai invadir o prédio para roubar seu disco. Mas se você deixar a porta do servidor destrancada na configuração (S3 bucket Public), a culpa e o processo de dados vazados cai direto no CPF/CNPJ do biomédico/pesquisador do seu projeto e do hospital." },

  { id: 1252, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Um arquivo VCF (Variant Call Format) possui metadados valiosos nos cabeçalhos e campos INFO e FORMAT. Para garantir a segurança dos dados e evitar reidentificação acidental numa publicação suplementar pública num jornal acadêmico europeu sem o TCLE aberto explícito, os analistas são obrigados a expurgar do VCF:", 
    options: { A: "Os Cromossomos numéricos nas posições autossômicas de bases A T C G cruas", B: "Dados de leitura clínica no cabeçalho (ex: Nome do arquivo original com nome_data_nascimento.vcf nas strings do header inicial), os genótipos familiares ligados do campo GT (ex: Phasing de trios que podem confirmar parentesco) e os metadados brutos de localização do hospital amostral na header list das referências do dicionário SAM do painel de início do documento TXT.", C: "O score Phred das bases", D: "As variáveis de profundidade de Leitura DP numérico", E: "Os filtros de BQSR na linha FILTER no arquivo" }, 
    correct: "B", explanation: "Gabarito: B. Muitas vezes os pesquisadores nomeiam o arquivo como 'Maria_Silva_15021980_Tumor.vcf'. O VCF salva esse nome dentro do próprio código interno no cabeçalho (Header). Publicar o VCF puro sem anonimizar a parte superior expõe toda a família na internet e resulta na cassação do consórcio científico e multas LGPD severas." },

  { id: 1253, area: "Bioinformática", subject: "Segurança de dados", 
    text: "O conceito avançado de 'Federated Learning / Federated Analysis' em projetos genômicos supranacionais governamentais e acadêmicos resolve a monumental questão de segurança de soberania e tráfego de dados sensíveis na bioinformática baseando-se em que mecanismo de inteligência artificial de fluxo reverso tático das TIs da área médica das instituições?", 
    options: { A: "Criptografia Blockchain na mineração de bitcoin na placa de vídeo e CPU na troca de etherium entre servidores hospedeiros", B: "O algoritmo viaja para os dados. O LIMS do hospital retém os arquivos VCF sensíveis no porão da TI central física (não envia o dado pela rede). O consórcio envia o algoritmo de pesquisa (em container docker estrito) para rodar LÁ DENTRO do firewall hospitalar fechado, e apenas os resultados da estatística consolidada anônima (Pesos e P-values) são exportados de volta para nuvem fora da zona restrita sem os dados iniciais do genoma na rua do tráfego TCP/IP", C: "Desativar firewalls e liberar acesso P2P (Torrent de Genomas) nos computadores", D: "Geração de chaves RSA em pendrives transportados fisicamente de carro entre capitais", E: "Envio da base via Google Drive corporativo e senhas do tipo 12345 no zip dos arquivos para acesso e compressão logada em e-mails simples dos técnicos locais e diretores da região Norte, sem restrições dos protocolos institucionais de segurança e antivírus dos equipamentos da saúde centralizados" }, 
    correct: "B", explanation: "Gabarito: B. Aprendizado Federado: 'Leve a pergunta até os dados, não tire os dados de casa'. Garante segurança suprema, pois o genoma do brasileiro fica no Brasil, mas os estrangeiros conseguem treinar as IAs oncológicas rodando a inteligência dentro da nossa 'caixa forte' com nossa supervisão." },

  // --- Genética de populações ---
  { id: 1254, area: "Bioinformática", subject: "Genética de populações", 
    text: "Ao avaliar um genoma, o analista bioinformata percebe grandes regiões de 'Runs of Homozygosity' (ROH) — fileiras massivas de SNPs contíguos onde o indivíduo é 100% homozigoto sem quebras de heterozigose. Esse perfil molecular acusa diretamente qual fenômeno demográfico das populações rurais em análise clínica retrospectiva?", 
    options: { A: "Que o gene está altamente mutado (Tumor Mutational Burden extremado em imunoterapia)", B: "Consanguinidade recente ou elevada endogamia. A ausência de heterozigosidade em trechos longos prova que o indivíduo herdou o exato mesmo pedaço cromossômico intacto (Identity-by-Descent - IBD) do pai e da mãe derivados de um mesmo ancestral próximo comum nas gerações recentes da família ou clã", C: "Que a extração enzimática foi mal feita no laboratório e apenas o alelo do pai foi amplificado", D: "Seleção direcional forte pela malária na população", E: "Rearranjo estrutural cromotríptico (Chromothripsis somática) na matriz principal" }, 
    correct: "B", explanation: "Gabarito: B. ROH longo = Os pais eram primos. Se os pais são da mesma família, o filho vai herdar fitas de DNA 'clonadas' na árvore genealógica, zerando a diversidade daquele trecho. Altamente propício a revelar doenças raras recessivas." },

  { id: 1255, area: "Bioinformática", subject: "Genética de populações", 
    text: "O conceito do 'Admixture' (Mistura genética) modela bioinformaticamente a estrutura populacional do Brasil. Qual a ferramenta e modelo visual computacional mais famoso usado mundialmente para pintar as 'barrinhas verticais' com as porcentagens de ancestralidade de cada indivíduo da coorte (ex: 60% Europeu, 30% Africano, 10% Ameríndio)?", 
    options: { A: "GATK Mutect2 log2Fold Changes em BWA", B: "O software ADMIXTURE ou STRUCTURE, que usa estimativa de máxima verossimilhança (MLE) iterativa para atribuir frações do genoma a 'K' populações ancestrais presumidas latentes nos algoritmos computacionais populacionais do PLINK das bases formatadas", C: "GraphPad P-value logarítmico", D: "Ferramenta Trimmomatic de Fastq bases e QC", E: "DeepVariant e RNA-Seq featureCounts em alinhadores" }, 
    correct: "B", explanation: "Gabarito: B. O algoritmo ADMIXTURE avalia milhares de SNPs de você e diz (usando a constante K) qual o nível percentual de ancestralidade que formou seu genoma ao longo das eras dos navegantes e colonizações. É o gráfico base de papers do Genomas Brasil." },

  { id: 1256, area: "Bioinformática", subject: "Genética de populações", 
    text: "A medida de 'FST' (Fixation Index) de Sewall Wright quantifica a diferenciação genética entre populações e grupos subpopulacionais no globo. Se a bioinformática aponta FST próximo de 0 entre População A e População B, o que isso significa em Genética Evolutiva e Demografia molecular humana no mundo real?", 
    options: { A: "Isolamento genético estrito por milênios", B: "As populações são geneticamente indistinguíveis (alta taxa de migração e fluxo gênico constante cruzado, panmixia populacional - Panmictic). Não há barreira de isolamento fixando alelos únicos entre elas de maneira significativa e evolutiva isolada temporal na estatística", C: "As populações se tornaram duas espécies diferentes sem volta estéril", D: "Houve morte celular massiva (Efeito Gargalo severo letal populacional - Bottleneck) nas gerações antigas limitando os clones de DNA sem volta biológica temporal mutante", E: "Apenas um grupo teve vantagens adaptativas de seleção positiva darwiniana e sobreviveu dominante" }, 
    correct: "B", explanation: "Gabarito: B. Fst = 0 significa que as populações estão tão misturadas que não dá para diferenciar quem é de onde (Eles acasalam entre si sem restrição). Fst = 1 significa que elas estão ilhadas e separadas em isolamento absoluto a tempo suficiente para fixarem genomas diferentes." },

  { id: 1257, area: "Bioinformática", subject: "Genética de populações", 
    text: "O desequilíbrio de ligação (Linkage Disequilibrium - LD) decai (enfraquece) matematicamente com a distância e com as gerações ao longo dos tempos dos relógios genéticos populacionais. Qual mecanismo celular biológico é a engrenagem principal de 'quebra' e diluição do LD nas estatísticas do HapMap ao longo do genoma do ser humano miscigênico da Terra atual e moderna em reprodução?", 
    options: { A: "A queima fotossensível das bases de pirimidina", B: "O Crossing-Over (Recombinação Homóloga) durante a Meiose I da formação dos gametas sexuais. Quanto maior a distância física entre dois genes, maior a chance de a tesoura da recombinação quebrar a fileira, separando alelos que antes caminhavam 'grudados' eternamente", C: "A mutação por metilação em clones dos somáticos na vida tardia das mitoses", D: "A deriva gênica extrema do efeito fundador das populações pequenas no gelo", E: "A seleção purifying eliminando alelos patogênicos no útero" }, 
    correct: "B", explanation: "Gabarito: B. O LD mede quão grudadas duas variantes estão e caminham juntas. O Crossing-over baralha as cartas. Com os séculos, esse baralhamento separa as combinações genéticas, e o LD cai em blocos." },

  { id: 1258, area: "Bioinformática", subject: "Genética de populações", 
    text: "A introgressão genética e os estudos de Paleogenômica moderna do projeto de Svante Pääbo (Nobel) permitiram alinhar o DNA da caverna no bwa contra genomas de humanos de hoje. A bioinformática prova irrefutavelmente que:", 
    options: { A: "Nós não evoluímos dos primatas superiores em nenhuma época dos continentes do passado ou de DNA fóssil encontrado nos ossos preservados nos sítios dos europeus antigos das frentes glaciais do mundo global", B: "Populações não-africanas modernas carregam de 1% a 2% de fragmentos de DNA Neandertal (Introgressão) espalhados no genoma, fruto de cruzamento ancestral híbrido e hibridização na Eurásia há ~50 mil anos atrás prévio das frentes demográficas atuais modernas e da dispersão global hominídea na Ásia e Europa", C: "Nós somos 100% Neandertais puros geneticamente", D: "A mutação de RNA é exclusiva do Homo Sapiens extinto das cavernas puras primitivas sem conexões interespécies com Denisovanos ou outros fósseis catalogados em pedras do gelo de rochas polares estáticas e preservadas geneticamente pela natureza geológica local da era glacial russa e ibérica", E: "Os neandertais inseriram retrovírus no nosso DNA destruindo cromossomos no X e Y masculino" }, 
    correct: "B", explanation: "Gabarito: B. Encontrar pedaços do DNA de outra espécie dentro do nosso mapeamento foi um dos marcos da bioinformática. A IA prova que houve cruzamento entre a nossa espécie migratória e os Neandertais já residentes no frio da Europa." },

  { id: 1259, area: "Bioinformática", subject: "Genética de populações", 
    text: "O Site Frequency Spectrum (SFS) ou Espectro de Frequência Alélica é o gráfico favorito do geneticista de populações, que plota histogramas das variantes numéricas do VCF (ex: singletons, doubletons, common alleles). Populações que sofreram uma EXPANSAÕ demográfica violenta e recente (boom de crescimento populacional exato moderno) na história demonstrarão qual distorção geométrica severa no SFS do gráfico plotado em R/Python do projeto genômico central?", 
    options: { A: "Terão abundância exclusiva de alelos fixados (Frequência = 100%)", B: "Excesso de alelos de baixa frequência ou variantes raras (rare variants e Singletons - mutações que só ocorrem em 1 indivíduo). A explosão de nascimentos preserva novas mutações únicas surgidas agora e impede a deriva genética neutra de apagá-las rapidamente, arrastando o gráfico massivamente para a esquerda da cauda em visualizações analíticas de modelagem de populações exponenciais ou de gargalos relaxados", C: "Ausência absoluta total e apagão de variantes das células e alelos raros devido a limpeza da seleção", D: "Nivelamento perfeitamente reto e plano do espectro em todas as categorias (todas as mutações com 50% puros e perfeitos num balanço homogêneo universal sem alterações de números)", E: "Gráfico senoidal invertido de ponta cabeça" }, 
    correct: "B", explanation: "Gabarito: B. A humanidade sofreu um 'boom' nos últimos 10 mil anos (expandiu violentamente de milhões para 8 bilhões). Isso gerou uma avalanche de mutações novas, raras e privadas que ainda não tiveram tempo de se fixar. O gráfico SFS reflete isso focando em um peso extremo na casa das mutações < 1% de frequência." },

  // --- Bioinformática e análise genômica (Retorno avançado) ---
  { id: 1260, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Métricas de qualidade fundamentais em WGS (WGS QC) incluem a relação Ts/Tv (Transições / Transversões) na coorte investigada do LIMS populacional. Em um arquivo VCF de um genoma humano íntegro em WGS, qual o valor estatístico alvo médio bioinformático esperado para essa razão (Ti/Tv ratio) global em análises somáticas e germinativas aceitáveis no padrão ouro internacional (GATK / Broad)?", 
    options: { A: "Zero absoluto (0.0)", B: "Cerca de 2.0 a 2.1 globalmente. Valores excessivamente anômalos (ex: <1.5 ou >3.0) revelam artefatos drásticos nos reagentes fotográficos químicos do sequenciador, hipermutação oxidativa, PCR errors gravíssimos ou péssimo QC da análise paramétrica de limiar nos painéis das bases", C: "Em torno de 5.0", D: "Menor que 0.5 nas áreas ricas", E: "Exatamente 1.0 (equilíbrio total)" }, 
    correct: "B", explanation: "Gabarito: B. A biologia humana prefere mutar 'Púrina por Purina' (Transição) do que 'Purina por Pirimidina' (Transversão). Por isso o Ti/Tv humano é na casa dos 2.0. Se o QC der 1.0, o computador ou a química do laboratório errou tudo e gerou um FASTQ irreal aleatório." },

  { id: 1261, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "A anotação de Efeito Preditivo no VCF (usando ferramentas topológicas de predição como SnpEff ou VEP) introduz um campo fundamental no INFO chamado IMPACT (High, Moderate, Low, Modifier). Mutação que causa Splice Acceptor Loss ou Stop Gain, destruindo o gene e o frameshift total, é tipicamente anotada nativamente como qual categoria de restrição severa de alerta no VCF gerado pelo software VEP do paciente de oncologia crítica?", 
    options: { A: "IMPACT=MODERATE", B: "IMPACT=HIGH (Alto impacto). O algoritmo prevê categoricamente que as alterações da trinca truncada anulam a proteína final estrutural. Essas variantes sobem no topo da lista do curador clínico na tela para análise manual imediata de prioridade letal severa por danificar e truncar os eixos críticos proteicos irreversivelmente", C: "IMPACT=LOW", D: "IMPACT=MODIFIER", E: "IMPACT=UNKNOWN" }, 
    correct: "B", explanation: "Gabarito: B. A anotação bioinformática 'HIGH' pisca em vermelho para o geneticista. O computador leu o código e disse: 'Isso aqui quebrou o motor (frameshift/stop codon) e a proteína do tumor vai desligar o gene inteiro. Avalie isso agora mesmo!'." },

  { id: 1262, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "O comando bioinformático `bedtools intersect` na linha de comando de um cluster Linux de análise de Exomas permite primariamente qual milagre computacional analítico vital nas operações diárias do pipeline do analista num laboratório ou faculdade operadora de bases NGS?", 
    options: { A: "Formatar HDs de sistema", B: "Encontrar e extrair os reads de um arquivo BAM pesado que sobrepõem/caem ou 'cruzam' fisicamente com regiões específicas definidas num arquivo BED de alvo da hibridização (On-target analysis). É a conta matemática de interseção de blocos para filtras variantes de dor e lixo molecular em éxons do kit", C: "Traduzir RNAm para cadeias de aminoácido no shell", D: "Enviar genomas por FTP ao cliente", E: "Alinhar o genoma de bactérias" }, 
    correct: "B", explanation: "Gabarito: B. Bedtools é o canivete suíço. Ele pega o bloco gigantesco de DNA bruto do paciente e um bloquinho BED e pergunta: 'Quantos reads do tumor caíram exatamente em cima do Gene BRCA1?'. E recorta pra você na hora." },

  { id: 1263, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "Um analista júnior tenta abrir um VCF.gz de 20GB da nuvem local sem fazer o download integral dos dados, para ler as 10 linhas do gene BRAF do paciente remoto. Ele deverá ter construído previamente qual recurso no arquivo para conseguir que ferramentas efetuem a busca relâmpago online ou offline com as flags `-r chr7:140000-141000`?", 
    options: { A: "Índices como tabix (`.tbi`) ou `.csi`. Sem o arquivo de índice posicional pré-construído pelo bioinformata local ou nuvem do consórcio paralelo não é possível consultar ou dar 'pulo de busca' no arquivo compactado imenso sem ter de ler todas as bilhões de linhas da varredura crua lenta textual uma a uma consumindo memória", B: "Zips do WinRar e macros do Excel", C: "Formatos em DOCX puros convertidos", D: "Geração de matrizes de imagens JPG no BWA", E: "Instalação do Python GUI num servidor" }, 
    correct: "A", explanation: "Gabarito: A. Tabix gera um arquivo .tbi minúsculo ao lado do VCF gigantão. Ele é como o sumário de um livro. O programa lê o índice, descobre em qual megabyte exato o Cromossomo 7 está escondido, pula pra lá e extrai o dado em 1 segundo. Sem isso, demoraria horas rodando arquivos sequencialmente em loop no bash cego da máquina host da faculdade." },

  { id: 1264, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "O termo estatístico bioinformático genômico 'FDR' (False Discovery Rate) corrigido nos ensaios e cálculos de pipeline RNA-Seq DE (Differential Expression DESeq2 EdgeR nas matrizes matriciais) indica filosoficamente na teoria analítica que se definirmos no software um alfa corrigido limiar de FDR < 0.05, a nossa conclusão assumirá que:", 
    options: { A: "Rejeitamos toda a pesquisa nula sem efeito clínico estatístico dos tratamentos e reagentes e publicamos no G1 local", B: "Se nós afirmarmos por log-odds do modelo que 100 genes diferem em expressão, nós aceitamos que estatisticamente 5 destes genes citados são falsos positivos (lixo matemático do acaso/flutuação de baseline), mas os outros 95 são descobertas confiáveis provadas para o doutorado clínico/alvo no alvo medicamentoso primário", C: "O paciente não tem chance real de câncer", D: "5% das pessoas testadas tem COVID fatal grave analítica", E: "A expressão caiu na verdade 5 vezes menos log2 de expressão real de TPM RPKM nos tumores lidos das flowcells e pipetas de preparo nativas em transcriptomas completos globais de rotina clínica da amostra base de genômica de oncologia" }, 
    correct: "B", explanation: "Gabarito: B. FDR de 5% quer dizer: 'Eu sei que tem erro nisso aqui, mas garanto que o ruído não passa de 5% de mentira na minha lista de descobertas publicadas'. É o número mágico dos p-values ajustados na ciência séria (Padj do limiar)." },

  { id: 1265, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "O algoritmo de Machine Learning de Florestas Aleatórias (Random Forest - Tree models em Python ou caret R) e Support Vector Machines (SVM) frequentemente domina e supera métodos simples na Genômica de Classificação de Doenças complexas em multi-ômicas (Predição de Câncer baseado no DNA, RNA, Metilação integrados). O poder principal destas ferramentas de AI estruturadas para o código do bioinformata da vida real em tabelas multi-dimensionais nos datasets do DataSUS/Genomas reside na sua capacidade orgânica técnica de:", 
    options: { A: "Desligar o LIMS automático e gerar alertas no GATK Mutect local no PC", B: "Modelar interações altamentes não-lineares, de forma massiva entre milhares de genes agindo simultaneamente (Redes Ocultas complexas e efeitos combinados que um simples T-Test ou Regressão Linear reta passaria cego e invisível por não cruzar as frentes das árvores de decisão em splits nos hyper-parâmetros treináveis no pacote cross-validados num split 80/20 train test nos computadores em GPUs fortes e TPUs", C: "Transformar BAM em CRAM sem perder os PHREDs", D: "Descobrir vacinas sintéticas automáticas para infecções RNA", E: "Fazer o Download de NCBI FTP por portas não TCP" }, 
    correct: "B", explanation: "Gabarito: B. Os modelos biológicos de câncer não são linhas retas na matemática. Uma mutação só causa câncer se a outra estiver ligada. O Random Forest e as Redes Neurais detectam essas complexidades (interações) genômicas escondidas e geram os assinaturas (Signatures) que salvam pacientes na clínica moderna da IA." },

  { id: 1266, area: "Bioinformática", subject: "Segurança de dados", 
    text: "No contexto da criptografia na segurança de dados genômicos no SUS, a infraestrutura da nuvem aplica criptografia Assimétrica de Chave Pública (ex: RSA ou Curvas Elípticas) ativamente no SSH para acessos da rede, combinada ao tráfego do dado. A vantagem teórica primária sobre o antigo tráfego FTP/HTTP inseguro e Telnet de chaves simétricas básicas senhas fracas nos roteadores centrais do genoma na base acadêmica é:", 
    options: { A: "O formato dos arquivos zips ficarem nativamente coloridos e ordenados em R", B: "Mesmo que um invasor ou Hacker 'fareje' (Sniffing do tráfego TCP/IP wire-shark) os pacotes de genomas cruzando os roteadores da internet pública via pacotes criptografados da API de rede remota conectada do AWS para o hospital (Man in the middle Attack), o dado capturado lido dele será indecifrável sem o certificado privado armazenado nos cofres das chaves HSM nativas", C: "Evitar a degradação física dos HDs mecânicos e M2 Nvme SSDs e perdas térmicas setoriais em setores das matrizes lógicas e bad blocks do formato EXT4 dos clusters em NAS network arrays paralelos e volumes virtuais com blocos espelhos", D: "O dado transmite muito mais rápido do que a versão sem segurança superando velocidades fotônicas em servidores normais locais no sistema interno nas máquinas base", E: "Não há vantagem as duas quebram em computadores celulares quânticos em tempo zero linear matemático logarítmico na equação atual padrão NIST do mercado dos desenvolvedores linux corporativo e governamental do país sede em TI de infraestrutura pesada" }, 
    correct: "B", explanation: "Gabarito: B. A criptografia forte do HTTPS e do SSH assegura o túnel. Se um espião interceptar o VCF viajando na internet entre o Hospital de Belém e o servidor de Brasília, ele só verá códigos ilegíveis de lixo e não o DNA do paciente interceptado." },

  { id: 1267, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Na plataforma federal baseada nos requerimentos de LGPD de conformidade regulatória para genômica do Genoma SUS e de Bioinformática de Saúde Brasileira. Quando o analista for realizar o Backup na regra Ouro 3-2-1 corporativo do genoma, qual é a principal estratégia imposta das normas de Backup Cold Storage Immutable arquivados de Segurança da Informação que salva o estado em casos de ataques cruéis e severos globais e locais destrutivos orquestrados do tipo Ransomware sequestradores do ambiente hospitalar moderno digital das Vms da TI matriz em nuvens estatais interligadas aos LIMS das máquinas?", 
    options: { A: "Pagar o resgate rápido de dados aos servidores russos anônimos para evitar atraso da bioinformática baseada em bit-coins criptografados não rastreáveis ao estado local de contas bancárias ocultas em contas de laranjas nas matrizes offshore sem registros em exchanges e bolsas operadoras globais do meio", B: "Reter a arquitetura de backups nativa armazenada com status Air-Gapped / Imutáveis (Off-line estrito/S3 Object Lock). Se o Ransomware pular os firewalls num ataque e cifrar todas as VMs e discos locais onlines, ele baterá na trava do arquivo intocável arquivado sem permissão de reescrita nem pelo ADM, blindando que a matriz volte a operar normal apagando a área corrompida infectada e formatando os arquivos resgatados intactos limpos nos discos frios restabelecidos da quarentena da base local corporativa na zona da rede desinfetada das empresas e LACENS isolados logicamente em rotinas de resposta á crise e defesa (Incident Response Plan)", C: "Imprimir todos os exomas de 100 Gb em papéis sulfites mensais da matriz e arquivá-los fisicamente no prédio de ferro com códigos coloridos numéricos analógicos simples nos galpões limpos", D: "Fazer upload do arquivo inteiro em redes torrents fechadas entre membros do SUS no computador com windows limpo desatualizado fora da VPN corporativa de redes internas", E: "Não salvar os backups fora do sequenciador mantendo tudo na base Linux Illumina original de fábrica com as senhas admin nativas simples sem firewalls e expostas ao protocolo base e web global ativadas por HTTP na web pura sem isolamentos em proxy" }, 
    correct: "B", explanation: "Gabarito: B. 'Ransomware' é o vírus que sequestra o hospital exigindo resgate milionário e bloqueia os prontuários e genomas de 20 mil pessoas. O Air-Gap/Object Lock garante que o seu backup está offline (desconectado da internet/rede), ou seja, o vírus não pode alcançar e criptografar seu backup salvador da pátria." },

  { id: 1268, area: "Bioinformática", subject: "Princípios de saúde pública e epidemiologia genética", 
    text: "A Farmacogenômica aplicada às Diretrizes Clínicas do SUS utiliza a base CPIC (Clinical Pharmacogenetics Implementation Consortium) ou o site brasileiro da REBRAC para laudar painéis NGS. Quando o analista cruza o BAM/VCF no gene TPMT e aponta a diretriz de risco de 'Toxicidade Severa Letal', qual grupo farmacêutico base ele salvou nas intervenções da UTI do hematologista no hospital público?", 
    options: { A: "Probióticos anti-inflamatórios locais para úlceras duodenais em vias da mucosa com ph dores digestivos gástricos inofensivos em uso geral não tóxicos ao fígado da rotina comum clínica diária leve natural não agressiva orgânica humana simples", B: "O uso em tratamentos severos de quimioterapias potentes de Tiopurinas e análogos quimioterápicos pesados imunossupressores contra doenças como Leucemia Linfoblástica na pediatria infantil de risco e autoimunes da remissão, ajustando as vias nas quedas letais de medulas graves causadas na destruição se a enzima metabolizadora citada não operar puramente bem no paciente (Mutantes DPYD e TPMT mortais)", C: "Apenas anti-histamínicos comuns e vitaminas da complexidade K do mercado popular genérico nos ambulatórios diurnos da regulação médica dos atendimentos de postos de saúde de atenção regional moderada não complexas sem risco de morte acentuada nas admissões crônicas", D: "Cirurgias estéticas e reparadoras dermatológicas invasivas anestésicas de via inalatória das emergências cirúrgicas da anestesiologia operante", E: "Doenças exclusivas oculares do envelhecimento macular senil atrófico" }, 
    correct: "B", explanation: "Gabarito: B. Mutações nos genes DPYD ou TPMT causam acúmulo envenenador fatal de quimioterápicos oncológicos pesados na corrente sanguínea. Sem o exame NGS, o médico dá a dose normal de combate à leucemia infantil, mas as medicações se estocam no fígado/medula sem metabolização e o efeito rebote iatrogênico mata a criança que seria salva. Farmacogenômica pura de ouro do sistema público em prol de vidas." },

  { id: 1269, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "Num Pipeline ETL (Extract, Transform e Load) moderno de alta performance num Data Lake corporativo em Cloud de Bioinformática Genômica focado na interoperabilidade HL7/FHIR de saúde clínica, a etapa do 'TRANSFORM' na conversão e modelagem de arquitetura de dados (Genomics API mapping do VCF em formato base Data Base estruturada em parquet ou avro no Athena) tem as atuações severas diretas de:", 
    options: { A: "Extrair os tubos plásticos da caixa correios e registrar eles numa estufa biológica limpa do local biológico primário laboratorial a quente das capelas químicas BPL orgânicas analógicas sem uso de IA", B: "Pegar as tabelas cruas, ruidosas, multiformatos e incompatíveis (os VCFs brutos cheios de multi-alélicas bagunçadas sujas de múltiplas variantes e as planilhas despadronizadas dos laudos e anotações médicas mal escritas do CSV solto), filtrá-las, higienizá-las no pyspark, desaninhá-las explodindo os arrays e os campos info VEP numa base semântica controlada normalizada universal limpa, casando o genoma com os ontológicos códigos estritos de vida clínica (HPO, CID-10, ICD-11 SNOMED) e exportando-os prontas para a Query no Load na AWS ou GCP BigQuery dos cientistas de dados sem perder dados em strings nulas", C: "Transportar todo dado da tabela do banco mysql relacional para um disquete zip corrompendo os cabeçalhos numéricos semestrais logados no sistema primitivo", D: "Sequenciar o dado biológico da dupla hélice química usando primers longos fluorescentes químicos nativos Illumina e jogar direto no pen-drive externo no aparelho", E: "Destruir a tabela VCF excluindo genes oncológicos mantendo a tabela leve excluindo tudo que não seja SNP pontuais de introns nas linhas descartando as colunas e índices do HPO estrito nativo com zeros formatados log base" }, 
    correct: "B", explanation: "Gabarito: B. Transformar o dado (o T do ETL) é 'Lavar e Organizar' a casa para a Big Data corporativa. VCFs são difíceis de consultar nativamente, então o Python entra lavando, descompactando, normalizando a bagunça dos VCFs soltos e fundindo o diagnóstico do médico com os termos internacionais do CID-10 e HPO estruturados em bases potentes do SQL/Parquet para cruzar no Machine Learning das predições estatísticas com painéis analíticos BI e Dashboards governamentais robustos." },
  // =========================================================
  // MEGA BLOCO DE FUNDAMENTOS - LABORATÓRIO BÁSICO (50 QUESTÕES)
  // =========================================================

  // --- Biologia, biologia molecular e genética (Conceitos Básicos) ---
  { id: 1270, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Na estrutura em dupla hélice do DNA descrita por Watson e Crick, as bases nitrogenadas se pareiam de forma específica. Qual é a regra básica de pareamento de bases no DNA?", 
    options: { A: "Adenina com Citosina, Guanina com Timina", B: "Adenina com Uracila, Guanina com Citosina", C: "Adenina com Timina, Guanina com Citosina", D: "Guanina com Uracila, Timina com Adenina", E: "Qualquer base pode se parear com qualquer outra dependendo do gene" }, 
    correct: "C", explanation: "Gabarito: C. A regra de pareamento universal do DNA é A-T (formando duas pontes de hidrogênio) e C-G (formando três pontes de hidrogênio)." },

  { id: 1271, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O Dogma Central da Biologia Molecular descreve o fluxo direcional padrão da informação genética dentro de uma célula viva. Qual é a sequência correta desse fluxo?", 
    options: { A: "RNA → Proteína → DNA", B: "Proteína → RNA → DNA", C: "DNA → Proteína → RNA", D: "DNA → RNA → Proteína", E: "RNA → DNA → Proteína" }, 
    correct: "D", explanation: "Gabarito: D. A informação genética está estocada no DNA, é transcrita para um 'mensageiro' (RNA) e, em seguida, é traduzida em uma molécula funcional (Proteína)." },

  { id: 1272, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Qual é a principal diferença estrutural entre as moléculas de DNA e RNA?", 
    options: { A: "O DNA possui a base Uracila, enquanto o RNA possui Timina.", B: "O DNA é formado pelo açúcar desoxirribose e contém Timina; o RNA é formado pelo açúcar ribose e contém Uracila.", C: "O RNA possui fita dupla, enquanto o DNA é sempre de fita simples.", D: "O DNA é encontrado apenas no citoplasma, enquanto o RNA fica preso no núcleo.", E: "O DNA é feito de aminoácidos e o RNA de nucleotídeos." }, 
    correct: "B", explanation: "Gabarito: B. Essa é a diferença química fundamental. O DNA (Ácido Desoxirribonucleico) perdeu um oxigênio no seu açúcar em relação ao RNA (Ácido Ribonucleico), o que o torna muito mais estável." },

  { id: 1273, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O número normal de cromossomos encontrados em uma célula somática humana saudável (como uma célula da pele ou do fígado) é:", 
    options: { A: "23 pares, totalizando 46 cromossomos", B: "23 cromossomos totais", C: "46 pares, totalizando 92 cromossomos", D: "22 pares autossômicos e 2 pares sexuais", E: "Depende da idade do indivíduo" }, 
    correct: "A", explanation: "Gabarito: A. Células somáticas são diploides (2n), herdando 23 cromossomos da mãe e 23 do pai, resultando em 46 cromossomos. Apenas os gametas (espermatozoide/óvulo) possuem 23 (haploides)." },

  { id: 1274, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Em genética clássica, a definição de 'Fenótipo' refere-se a:", 
    options: { A: "A sequência exata de nucleotídeos no DNA de um indivíduo", B: "O conjunto de cromossomos sexuais", C: "Apenas as características que não podem ser alteradas", D: "As características físicas, bioquímicas e fisiológicas observáveis de um indivíduo, resultantes da expressão de seus genes e da interação com o ambiente", E: "A carga elétrica do DNA" }, 
    correct: "D", explanation: "Gabarito: D. O Genótipo é o 'código fonte' escondido. O Fenótipo é como esse código se manifesta fisicamente na realidade (ex: cor dos olhos, altura, presença de uma doença)." },

  { id: 1275, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "As diferentes versões ou formas alternativas de um mesmo gene (como a versão do gene para olhos azuis vs. olhos castanhos) são chamadas de:", 
    options: { A: "Cromossomos homólogos", B: "Locus", C: "Alelos", D: "Íntrons", E: "Ribossomos" }, 
    correct: "C", explanation: "Gabarito: C. Alelos são as variantes de um gene. Como somos diploides, temos um alelo herdado da mãe e outro do pai para cada característica." },

  { id: 1276, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Um indivíduo que possui dois alelos idênticos para uma determinada característica (exemplo: 'AA' ou 'aa') é classificado biologicamente como:", 
    options: { A: "Heterozigoto", B: "Mutante", C: "Haploide", D: "Homozigoto", E: "Aneuploide" }, 
    correct: "D", explanation: "Gabarito: D. 'Homo' significa igual. Indivíduos homozigotos possuem duas cópias idênticas do gene." },

  { id: 1277, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O processo biológico denominado 'Transcrição' ocorre quando:", 
    options: { A: "A proteína é enovelada em sua forma 3D", B: "A sequência de DNA é lida por uma polimerase para sintetizar uma molécula de RNA mensageiro (mRNA)", C: "O ribossomo une os aminoácidos", D: "A célula se divide ao meio", E: "O DNA é duplicado antes da mitose" }, 
    correct: "B", explanation: "Gabarito: B. Transcrição é o ato de 'transcrever' (copiar) a receita do livro principal (DNA) para um rascunho móvel (RNA) que pode sair do núcleo." },

  { id: 1278, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Qual é a organela celular principal responsável por realizar o processo de 'Tradução' (síntese de proteínas) no citoplasma?", 
    options: { A: "Mitocôndria", B: "Aparelho de Golgi", C: "Lisossomo", D: "Ribossomo", E: "Núcleo" }, 
    correct: "D", explanation: "Gabarito: D. O Ribossomo é a fábrica de proteínas da célula. Ele 'lê' a fita de mRNA e costura os aminoácidos na ordem certa." },

  { id: 1279, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "No mecanismo de tradução, qual é o papel específico do tRNA (RNA Transportador)?", 
    options: { A: "Armazenar o código genético no núcleo", B: "Formar a estrutura principal do ribossomo", C: "Degradar proteínas velhas", D: "Carregar aminoácidos específicos do citoplasma e parear seu anticódon com o códon do mRNA no ribossomo", E: "Separar as fitas de DNA" }, 
    correct: "D", explanation: "Gabarito: D. O tRNA é como o 'caminhão de entrega'. Ele lê o pedido no mRNA e busca o aminoácido correto para construir a proteína." },

  { id: 1280, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Quimicamente, um nucleotídeo (a unidade básica do DNA) é composto por três partes fundamentais. Quais são elas?", 
    options: { A: "Aminoácido, lipídio e carboidrato", B: "Um grupo fosfato, um açúcar pentose (desoxirribose) e uma base nitrogenada", C: "Uracila, Timina e Guanina", D: "Ribossomo, DNA e RNA", E: "Proteína, núcleo e membrana" }, 
    correct: "B", explanation: "Gabarito: B. Essa é a anatomia de todos os blocos de construção dos ácidos nucleicos. O fosfato e o açúcar formam o 'corrimão' e a base nitrogenada forma os 'degraus' da escada do DNA." },

  { id: 1281, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O resultado final de uma divisão celular por 'Mitose' em humanos gera:", 
    options: { A: "Quatro células filhas haploides (com 23 cromossomos)", B: "Duas células filhas diploides geneticamente idênticas à célula mãe (com 46 cromossomos)", C: "Uma célula sem núcleo", D: "Quatro células idênticas", E: "Células exclusivas para a reprodução (espermatozoides e óvulos)" }, 
    correct: "B", explanation: "Gabarito: B. A mitose é a divisão de crescimento e reparo do corpo. Ela faz cópias exatas da célula original (clones naturais)." },

  { id: 1282, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O resultado final da 'Meiose' em humanos tem como objetivo biológico principal:", 
    options: { A: "Curar ferimentos e cortes na pele", B: "Renovar as células do sangue", C: "Produzir quatro células filhas haploides (gametas), essenciais para a reprodução sexuada e manutenção do número cromossômico da espécie", D: "Aumentar a massa muscular", E: "Duplicar organelas" }, 
    correct: "C", explanation: "Gabarito: C. A meiose reduz o número de cromossomos pela metade (23). Assim, quando o espermatozoide (23) encontra o óvulo (23), o bebê volta a ter o número normal (46)." },

  { id: 1283, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O código genético é lido em blocos de trincas. Quantas bases nitrogenadas formam um único 'códon' que o ribossomo traduzirá em um aminoácido?", 
    options: { A: "Uma base", B: "Duas bases", C: "Três bases", D: "Quatro bases", E: "Vinte bases" }, 
    correct: "C", explanation: "Gabarito: C. O códon é sempre uma trinca (três letras, ex: ATG, CCC, GAG). Cada trinca significa um aminoácido diferente." },

  { id: 1284, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Ao sequenciar um gene humano, observamos que ele é dividido em Éxons e Íntrons. Qual a diferença funcional básica entre eles?", 
    options: { A: "Íntrons codificam as proteínas mais importantes, éxons são lixo", B: "Éxons são sequências que contêm a informação codificante para a proteína, enquanto íntrons são regiões não-codificantes que são removidas antes da tradução", C: "Éxons ficam no citoplasma e íntrons no núcleo", D: "Éxons são formados por RNA e íntrons por DNA", E: "Não há diferença estrutural ou funcional" }, 
    correct: "B", explanation: "Gabarito: B. O pré-mRNA contém o gene inteiro. Durante o 'splicing', os íntrons (intrusos) são cortados fora, e os éxons são colados para formar a mensagem final (o Exoma)." },

  { id: 1285, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Uma 'mutação pontual' básica no DNA é definida estritamente como:", 
    options: { A: "A duplicação de um cromossomo inteiro", B: "A perda do núcleo da célula", C: "A alteração de apenas um único nucleotídeo na sequência de DNA (uma base trocada por outra)", D: "A quebra física do braço do cromossomo em duas partes", E: "O envelhecimento celular" }, 
    correct: "C", explanation: "Gabarito: C. Mutações de ponto (SNVs/SNPs) são os erros mais sutis possíveis, onde a polimerase apenas erra uma única letra ao copiar o genoma." },

  { id: 1286, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Qual é a enzima primária que atua abrindo o zíper da dupla hélice do DNA, quebrando as pontes de hidrogênio para que a replicação celular possa começar?", 
    options: { A: "Ligase", B: "Ribonuclease", C: "Helicase", D: "Amilase", E: "Transcriptase Reversa" }, 
    correct: "C", explanation: "Gabarito: C. A Helicase é o 'motor' que desenrola e abre as fitas de DNA formando a forquilha de replicação." },

  { id: 1287, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O códon 'AUG' é muito famoso na biologia molecular porque possui uma função dupla universal, que é:", 
    options: { A: "Encerrar a tradução da proteína e destruir o RNA", B: "Marcar o local de splicing e codificar Glicina", C: "Atuar como o Códon de Iniciação (Start Codon) e codificar o aminoácido Metionina", D: "Adicionar a cauda poli-A no mRNA", E: "Ativar a replicação celular mitótica" }, 
    correct: "C", explanation: "Gabarito: C. Quase todas as proteínas do corpo humano começam com o aminoácido Metionina, porque o códon AUG é o sinal verde para o ribossomo começar a trabalhar." },

  { id: 1288, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Onde a grande maioria do DNA genômico está localizada fisicamente em uma célula eucariótica saudável?", 
    options: { A: "Flutuando livremente no citoplasma", B: "Dentro do retículo endoplasmático", C: "Abrigada e protegida dentro do Núcleo celular", D: "Nas membranas da parede celular", E: "Apenas nos ribossomos" }, 
    correct: "C", explanation: "Gabarito: C. Os eucariotos (animais, plantas, fungos) guardam seu material genético primário envelopado pela membrana nuclear." },

  { id: 1289, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Uma característica recessiva (ex: tipo sanguíneo O) só se manifesta visivelmente no paciente quando o seu genótipo for:", 
    options: { A: "Heterozigoto dominante", B: "Homozigoto dominante (Ex: AA)", C: "Mutante radioativo", D: "Homozigoto recessivo (Ex: aa)", E: "Trissômico" }, 
    correct: "D", explanation: "Gabarito: D. Genes recessivos são 'fracos' na expressão. Se houver um gene dominante junto, o recessivo se esconde. Ele só aparece se herdar cópias recessivas tanto do pai quanto da mãe." },

  // --- Fundamentos de Laboratório, Extração e NGS ---
  { id: 1290, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A sigla 'NGS' revolucionou a medicina de precisão. O que ela significa em português?", 
    options: { A: "Nova Genética Sintética", B: "Sequenciamento de Nova Geração (Next-Generation Sequencing)", C: "Núcleo de Gestão de Sangue", D: "Normas Globais de Segurança", E: "Normalização Gênica Sistemática" }, 
    correct: "B", explanation: "Gabarito: B. O NGS permitiu ler milhões de fragmentos de DNA ao mesmo tempo (paralelismo em massa), diferente do método Sanger antigo que lia um pedaço por vez." },

  { id: 1291, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "No protocolo básico de extração de DNA de sangue, qual é a função essencial do 'Tampão de Lise' inicial?", 
    options: { A: "Colorir o DNA para visualização", B: "Romper quimicamente as membranas celulares e nucleares dos glóbulos brancos, liberando os ácidos nucleicos no tubo", C: "Adicionar adaptadores Illumina ao sangue", D: "Aquecer a amostra a 100ºC", E: "Precipitar o DNA no fundo" }, 
    correct: "B", explanation: "Gabarito: B. A lise celular (usando detergentes e sais caotrópicos) é o ato de 'estourar' as células para que o DNA que está trancado lá dentro vaze para o líquido." },

  { id: 1292, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Durante uma extração clássica de DNA (ex: purificação em coluna ou manual), o uso de isopropanol ou etanol gelado no passo final tem qual finalidade?", 
    options: { A: "Dissolver o DNA para que ele fique invisível", B: "Desinfetar o tubo de bactérias", C: "Precipitar o DNA, pois ácidos nucleicos são insolúveis em altas concentrações de álcool, permitindo que ele vire um 'pellet' (massinha) visível", D: "Aumentar o pH da amostra", E: "Sequenciar o DNA instantaneamente" }, 
    correct: "C", explanation: "Gabarito: C. O DNA dissolve na água, mas odeia álcool. Quando você joga etanol, ele se condensa e forma flocos ou gruda na coluna, separando-se da água suja." },

  { id: 1293, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Qual é o nome da máquina básica de laboratório usada para separar o sangue total em partes (plasma, leucócitos, hemácias) pela força da gravidade acelerada?", 
    options: { A: "Espectrofotômetro", B: "Termociclador", C: "Centrífuga", D: "Microscópio", E: "Incubadora" }, 
    correct: "C", explanation: "Gabarito: C. A centrífuga gira em altíssima velocidade, jogando as células vermelhas (pesadas) para o fundo do tubo e deixando o plasma (leve) por cima." },

  { id: 1294, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A camada do sangue periférico centrifugado que contém a massa branca de leucócitos (glóbulos brancos), que é o alvo de interesse para se extrair o DNA humano, chama-se:", 
    options: { A: "Soro humano", B: "Eritrócitos de fundo", C: "Buffy Coat", D: "Coágulo puro", E: "Plaquetograma" }, 
    correct: "C", explanation: "Gabarito: C. As hemácias humanas não têm núcleo (logo, não têm DNA). O DNA do paciente está escondido na fina camada branca de glóbulos brancos do tubo, o famoso Buffy Coat." },

  { id: 1295, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Na rotina laboratorial de controle de qualidade, o equipamento 'NanoDrop' (espectrofotômetro) é utilizado primordialmente para verificar:", 
    options: { A: "O tamanho do cromossomo em fotometria", B: "Se o tubo contém sangue ou urina", C: "A concentração de ácidos nucleicos absorvendo luz em 260 nm e a sua pureza geral em relação a proteínas e sais químicos", D: "A marca do tubo plástico", E: "A contagem exata de bactérias" }, 
    correct: "C", explanation: "Gabarito: C. O NanoDrop é um aparelho rápido e básico que joga uma luz no líquido. A quantidade de luz bloqueada diz se tem muito ou pouco DNA, e se ele está puro." },

  { id: 1296, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Para que um DNA seja considerado de boa pureza clínica para análises, livre de forte contaminação por proteínas, o visor do espectrofotômetro na razão A260/280 deve mostrar um valor próximo a:", 
    options: { A: "0.5", B: "1.0", C: "1.8", D: "3.5", E: "10.0" }, 
    correct: "C", explanation: "Gabarito: C. O valor clássico nos livros de bancada molecular: ~1.8 para DNA puro, e ~2.0 para RNA puro." },

  { id: 1297, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A eletroforese em gel de agarose é uma técnica básica e clássica no laboratório que permite:", 
    options: { A: "Ler a sequência de letras A T C G", B: "Separar os fragmentos de DNA baseando-se em seus diferentes tamanhos, uma vez que migram pela malha de gel em um campo elétrico", C: "Duplicar o DNA", D: "Lisar membranas", E: "Congelar amostras a -80ºC" }, 
    correct: "B", explanation: "Gabarito: B. O gel atua como uma 'peneira'. Como o DNA é negativo, ele corre para o polo positivo. Os pedaços curtos correm rápido e chegam primeiro, os pedaços grandes ficam enroscados e lentos." },

  { id: 1298, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O que a sigla PCR significa e qual é o seu objetivo básico no laboratório?", 
    options: { A: "Proteína C-Reativa, para medir inflamação", B: "Polimerização Constante do RNA, para criar tecidos", C: "Reação em Cadeia da Polimerase, técnica usada para fazer milhões de cópias (amplificar) de uma região específica do DNA", D: "Partículas Centrais de Rastreamento", E: "Preparação Cirúrgica em Resina" }, 
    correct: "C", explanation: "Gabarito: C. Inventada por Kary Mullis, a PCR é uma 'máquina de xerox molecular'. Você coloca 1 fita de DNA e ela tira bilhões de cópias daquela exata região para você poder estudá-la." },

  { id: 1299, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "As três etapas fundamentais de um ciclo térmico da reação de PCR são, na ordem correta de temperaturas (Quente -> Morna -> Intermediária):", 
    options: { A: "Lise, Decantação e Visualização", B: "Anelamento, Extensão e Desnaturação", C: "Desnaturação (separar as fitas), Anelamento (grudar os primers) e Extensão (construir a fita nova)", D: "Tradução, Transcrição e Duplicação", E: "Sequenciamento, Leitura e Emissão de Laudo" }, 
    correct: "C", explanation: "Gabarito: C. Aquece a ~95ºC pra soltar o DNA duplo. Esfria a ~60ºC para a isca (primer) colar. Aquece a ~72ºC para a enzima trabalhar velozmente copiando." },

  { id: 1300, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Em uma reação de PCR, o que são os famosos 'Primers' (ou Iniciadores)?", 
    options: { A: "São as proteínas que quebram o DNA", B: "São sais químicos estabilizadores", C: "São pedacinhos sintéticos curtos de DNA que marcam exatamente onde a enzima polimerase deve começar a copiar a fita", D: "São os corantes usados para tirar fotos", E: "São os plásticos do tubo Eppendorf" }, 
    correct: "C", explanation: "Gabarito: C. Sem primers (iscas), a polimerase fica cega e não sabe de onde até onde ela deve 'xerocar' o genoma." },

  { id: 1301, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O conceito primário de 'Preparo de Biblioteca' no mundo do Sequenciamento NGS consiste em:", 
    options: { A: "Guardar os dados no HD do computador em pastas alfabéticas", B: "Modificar quimicamente o DNA do paciente, cortando-o em pedaços menores e colando 'adaptadores' específicos em suas extremidades para que o sequenciador consiga segurá-lo e lê-lo", C: "Lavar as estantes do laboratório biológico", D: "Arquivar prontuários médicos nas clínicas", E: "Apenas medir o DNA na balança" }, 
    correct: "B", explanation: "Gabarito: B. Uma máquina NGS não lê um fio de DNA humano jogado do nada. O preparo de biblioteca adequa fisicamente esse fio, colando nele alças e ganchos (adaptadores) que são compatíveis com o vidro da máquina." },

  { id: 1302, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O que são 'Barcodes' (ou Índices) usados durante o preparo de biblioteca de NGS?", 
    options: { A: "As senhas de wifi do laboratório", B: "Pequenos trechos de DNA com letras únicas, que funcionam como 'etiquetas ou códigos de barras' colados nos fragmentos, permitindo que amostras de dezenas de pacientes diferentes sejam misturadas e sequenciadas juntas sem confusão", C: "O valor de compra do tubo de ensaio", D: "O marcador de vencimento do reagente", E: "Apenas regiões aleatórias sem importância" }, 
    correct: "B", explanation: "Gabarito: B. Essa é a base do barateamento do exame. Você bota o código de barras 'ATC' no João e o 'GGA' na Maria. Mistura os sangues no mesmo tubo da máquina e, no computador, você separa a leitura dos dois olhando os códigos." },

  { id: 1303, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Por qual motivo o DNA genômico humano não pode ser jogado inteiro e intacto dentro de um sequenciador NGS Illumina?", 
    options: { A: "O DNA humano inteiro explode a máquina", B: "As tecnologias NGS de leitura curta (Short-Read) só conseguem ler pedaços pequenos com boa qualidade (geralmente entre 150 e 500 bases). Por isso, a etapa de 'Fragmentação' inicial é obrigatória.", C: "O DNA perde a cor no escuro", D: "O DNA genômico é composto de proteína inteira", E: "Não há restrições, o Illumina lê cromossomos inteiros nativos" }, 
    correct: "B", explanation: "Gabarito: B. A máquina não aguenta fitas com milhões de bases. Ela prefere processar bilhões de fitas de 150 bases (fragments curtos) e o computador remonta o quebra-cabeça depois." },

  { id: 1304, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Qual é a diferença básica de foco entre um Sequenciamento de Genoma Inteiro (WGS) e um Sequenciamento de Exoma (WES)?", 
    options: { A: "O Exoma sequencia os RNA apenas, e o WGS o DNA.", B: "O WGS sequencia todas as letras (íntrons, éxons, áreas não codificantes), sendo mais amplo. O WES é mais focado e barato, capturando e sequenciando quase exclusivamente os Éxons (os cerca de 2% do DNA que contêm a receita direta das proteínas).", C: "O WGS é para humanos, o Exoma é para bactérias.", D: "Não há diferença biológica, é apenas marca comercial.", E: "O Exoma mapeia apenas tumores benignos." }, 
    correct: "B", explanation: "Gabarito: B. Exoma foca na 'massa fina' e na parte funcional (onde ficam 85% das doenças conhecidas). O WGS varre tudo, de ponta a ponta, sendo o teste mais completo do mundo." },

  { id: 1305, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Onde ocorre fisicamente a queima química, a emissão de luz e a fotografia dos bilhões de fragmentos de DNA num sistema Illumina?", 
    options: { A: "No monitor do computador", B: "Num tubo Eppendorf", C: "Numa 'Flow Cell' (Célula de Fluxo), que é uma delicada lâmina ou cartucho de vidro contendo microcanais revestidos de moléculas que ancoram as bibliotecas de DNA do paciente.", D: "Na gaveta térmica da geladeira", E: "Direto na gota de sangue da seringa" }, 
    correct: "C", explanation: "Gabarito: C. A Flow Cell é a alma do NGS. Custa milhares de dólares, é um vidro nanotecnológico cheio de rodovias onde os fios de DNA grudam em pé como grama, prontos para brilhar na luz do laser." },

  { id: 1306, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O termo 'Multiplexação' (Pooling) no dia a dia da genômica significa:", 
    options: { A: "Usar várias máquinas ao mesmo tempo", B: "Misturar o DNA devidamente identificado (com index) de muitos pacientes diferentes em um único tubo para rodar na máquina de uma só vez, otimizando o tempo e barateando o custo por pessoa.", C: "Deletar dados duplicados", D: "Multiplicar as horas de trabalho do técnico", E: "Apenas separar tumores de tecidos sadios" }, 
    correct: "B", explanation: "Gabarito: B. A multiplexação permitiu democratizar o NGS. Você divide o preço milionário da flow cell rodando 100 pacientes na mesma lâmina de vidro." },

  { id: 1307, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Durante a espectrofotometria laboratorial, o que o equipamento faz quando pede para que o técnico insira a amostra em 'Branco' (Blank) antes de analisar os tubos?", 
    options: { A: "Pede para colocar sangue puro", B: "Pede o tubo vazio, sem líquido", C: "Mede uma gota que contém estritamente o solvente ou água puros (sem DNA). Isso zera a leitura, permitindo que a máquina desconte o 'ruído de fundo' natural do solvente e entregue um valor real apenas do DNA do paciente nas próximas leituras.", D: "Ele injeta gás carbônico na máquina", E: "Apaga a tela de LCD" }, 
    correct: "C", explanation: "Gabarito: C. Fazer o Branco é igual a tarar uma balança. Você bota o prato (água de eluição) e a máquina zera o peso do prato, pesando só a comida (DNA) depois." },

  { id: 1308, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Por qual razão básica de segurança de reação toda a água purificada usada para fechar kits e diluir primers de genômica DEVE ser categoricamente identificada como 'Nuclease-Free'?", 
    options: { A: "Para ter sabor adequado no consumo das células", B: "Para ter cor invisível", C: "Porque a água comum e até a purificada normal costumam conter traços de DNases e RNases (enzimas que mastigam e cortam ácidos nucleicos de imediato), arruinando o DNA da amostra e do primer antes mesmo de começarem a PCR.", D: "Pois aumenta a densidade salina pesada do fundo", E: "Para não molhar as bordas das luvas" }, 
    correct: "C", explanation: "Gabarito: C. Enzimas (Nucleases) como as RNases são quase imortais e estão na nossa pele, saliva e poeira do ar. Água nuclease-free é tratada agressivamente (DEPC) para garantir que nenhuma enzima viva cortadora de DNA atinja seus tubos vitais." },

  { id: 1309, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "Na pesquisa com genoma humano (tipo Genomas SUS), a importância vital do Termo de Consentimento Livre e Esclarecido (TCLE) assinado pelo indivíduo na triagem serve fundamentalmente para:", 
    options: { A: "Permitir a venda comercial da amostra em leilões na internet pelo hospital particular", B: "Garantir de forma respeitosa e transparente a autonomia do paciente, assegurando que ele entenda exatamente os riscos, benefícios, a que tipo de testes seu sangue será submetido e garantir a ele o direito de dizer 'não'.", C: "Proteger exclusivamente o laboratório contra atrasos logísticos na máquina", D: "Declarar o óbito antecipado hospitalar previdenciário do portador", E: "Apenas pegar o e-mail do cidadão brasileiro residente sem dar satisfação do uso e pesquisa nos HDs governamentais de armazenamento aberto digital" }, 
    correct: "B", explanation: "Gabarito: B. O TCLE é o documento máximo do respeito à bioética. É ele quem garante que o sujeito não é um rato de laboratório, mas um cidadão ativo e consciente na pesquisa." },

  { id: 1310, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O que o indicador de cobertura vertical ou depth (ex: 100x, 30x, 500x) aponta especificamente sobre uma amostra sequenciada com sucesso em painéis laboratoriais médicos?", 
    options: { A: "O quanto o tubo sujou com amplicons fantasmas nas capelas limpas no mês", B: "Quantas bases o genoma tem total bruto", C: "Quantas vezes a mesma posição ou letra exata do genoma biológico do paciente foi fotografada repetidas vezes em fitas diferentes. Uma cobertura alta (100x) garante enorme segurança que a mutação detectada foi lida 100 vezes de forma precisa.", D: "Indica o quão quente a biblioteca termociclou 100 vezes na PCR central básica", E: "Que 100 máquinas foram gastas em energia" }, 
    correct: "C", explanation: "Gabarito: C. Ler a mesma base 100 vezes (Depth de 100x) dá poder estatístico ao sistema. Se 50 lêem 'A' e 50 lêem 'T', o programa sabe que é uma mutação heterozigota real, e não uma sujeira pontual da foto." },

  { id: 1311, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Em um laboratório certificado de NGS, o que é conceitualmente caracterizado em definição como um POP (Procedimento Operacional Padrão)?", 
    options: { A: "O uniforme utilizado por diretores médicos logísticos das rotinas matinais", B: "O imposto governamental", C: "Um documento técnico detalhado, escrito com passo a passo imutável de como as rotinas críticas do laboratório devem ser feitas, desenhado para qualquer analista seguir sem gerar erros em volumes, insumos ou etapas", D: "Apenas um relatório fotográfico para jornais e revistas sem exigências operativas em rotina", E: "Uma pipeta automática de padrão ouro de volume fixo estático no bloco central" }, 
    correct: "C", explanation: "Gabarito: C. A receita de bolo do laboratório. Garante que se o analista 1 fizer de manhã e o analista 2 fizer na madrugada de sábado, o DNA purificado de ambos tenha o mesmíssimo rendimento clínico sem falhas criativas." },

  { id: 1312, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Por definição básica de biossegurança de resíduos e saúde, os perfurocortantes biológicos contaminados de laboratórios, a exemplo clássico de seringas expostas após o sangue com suspeitas virais, devem ser descartados ativamente em:", 
    options: { A: "Sacos de lixo plástico cinzas lisos finos e abertos amarrados na bancada de papel ou gavetas orgânicas de lixos administrativos para reciclagem municipal padrão da prefeitura local", B: "Nas lixeiras brancas de plástico de tecidos hospitalares do corredor limpo de visitantes comuns da ala cirúrgica ou no esgoto do tubo direto químico orgânico local em pia comum com cloro", C: "Exclusivamente em coletores rígidos amarelos padronizados contra perfurações (ex: caixas Descarpack), imediatamente após o uso prático, sendo permanentemente proibido reencapar as pontas", D: "Enterrados nos fundos da ala radiológica do departamento ambiental ou jogados com pinças grossas em sacos orgânicos soltos", E: "Caixas pretas plásticas flexíveis maleáveis do governo" }, 
    correct: "C", explanation: "Gabarito: C. Regra mandatória NR-32 e BPL. Todo material afiado/cortante vai para o coletor amarelo resistente a furos para proteção contra perfuração dos encarregados de coleta do lixo hospitalar." },

  { id: 1313, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O que diz a Lei de Segregação Independente (2ª Lei de Mendel) nos fundamentos genéticos da herança familiar em reprodução e herança gamética dos cromossomos?", 
    options: { A: "Genes do pai anulam os genes recessivos", B: "Genes de fenótipos idênticos herdam mutação obrigatoriamente sem seleção das organelas em fusão direta materna linear ligadas ou não independentemente do ambiente mitótico das divisões", C: "Os fatores (alelos) que condicionam características diferentes são separados nos gametas de forma independente e distribuídos ao acaso para a prole sem interferir uns nos outros (se em cromossomos distintos)", D: "Toda mãe tem domínios plenos genéticos filhos independentes de mutações e o pai tem herança restrita ou nula fenotípica na base", E: "Genomas se unem em 4 cópias para os netos fixando dominância no primeiro trimestre de idade em reproduções" }, 
    correct: "C", explanation: "Gabarito: C. Ter olho azul (Característica A) não te obriga a ter cabelo loiro (Característica B). Na formação do espermatozoide/óvulo, os cromossomos fazem um sorteio na loteria e separam-se de forma independente." },

  { id: 1314, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Sobre as funções da Enzima Ligase em preparos comuns na bancada das bibliotecas base de WGS no setor produtivo das plaquetas da biologia rotineira:", 
    options: { A: "É a tesoura enzimática forte da digestão", B: "Sua função é colar fisicamente o adaptador comercial sintético ponta a ponta na cadeia das terminações reparadas originais do DNA do nosso paciente (Ligation), criando um selo das amarras fosfodiéster vitais contínuas e unidas das peças isoladas sem gaps químicos abertos na sequência lida de forma duradoura covalente no preparo da fita de base", C: "Lê a fluorescência e colore fragmentos curtos no microscópio emitindo frequências lasers com as cores primárias visíveis fotográficas das bibliotecas nas placas transparentes óticas com poços", D: "Atua precipitando sal nos tubos", E: "Queima o RNA" }, 
    correct: "B", explanation: "Gabarito: B. Ligase (como a T4 Ligase) é a 'cola Super Bonder' do nosso laboratório. Ela sela a união química sólida para o adaptador artificial não desgrudar do DNA humano natural do paciente no estresse térmico." },

  { id: 1315, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "Sobre Sigilo na Genética Médica e pesquisas clínicas NGS sob a LGPD: O diagnóstico achado num familiar com altíssimo impacto ou herança mutacional severa oncológica e transmissível para os demais membros parentais deve obrigar de imediato pela BPL o próprio laboratório operador executivo SUS à:", 
    options: { A: "Convocar toda a vizinhança", B: "Imprimir na mídia televisiva local e portais abertos transparentes", C: "Garantir o sigilo estrito do primeiro caso. A comunicação e aconselhamento aos parentes de sangue sobre riscos vitais só deve ocorrer com a autorização expressa documentada guiada por médicos com o participante original principal amparado ética e legalmente da quebra do selo sem autorização judicial", D: "Deletar as contas federais em anonimato sem agir nas bases ou pastas locais sob qualquer condição médica grave e deletar logs no VCF", E: "Disparar telefonemas não anônimos diretos e invasivos ou e-mails frios para todos os parentes" }, 
    correct: "C", explanation: "Gabarito: C. A ética impõe que a doença do João não pode ser falada aos irmãos pelo laboratório, por mais mortal que ela seja. O João dono do dado precisa assinar permitindo a quebra, ou ser encorajado e orientado nas sessões psiquiátricas/genéticas para que a própria família traga os membros para testagem do genoma no painel hereditário de risco no hospital da base ou sistema público SUS." },

  { id: 1316, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O que a clássica e fundamental etapa enzimática do termociclador 'End Repair' resolve na construção universal da biblioteca padrão NGS no tubo antes das colagens dos ligantes? (Preparos WGS Convencionais sem tagmentação):", 
    options: { A: "Repara o software biológico do PC do LIMS e limpa caches BPL automáticos", B: "Quando fragmentamos agressivamente o DNA de forma física ultrassônica nas covaris acústicas, os fios quebram tortos, gerando pontas desiguais e mastigadas soltas ou protuberâncias pontiagudas rasgadas. O End-Repair poli as duas beiradas esburacadas usando enzimas específicas transformando os cotocos agressivos em pontas lisas ou retas planas (Blunt ends) uniformes, fosforiladas para o próximo reagente grudar perfeito na borda", C: "Deleta nucleotídeos de adeninas defeituosos nas bases mutantes das bibliotecas ou genes defeituosos para melhorar quadros de vida somáticos falsos sem erros orgânicos baseados do câncer celular dos extratos e tecidos", D: "Destrói DNA viral na flow cell termal com base na polimerização seletiva", E: "Protege contra nucleases e Rnases na lavagem de água" }, 
    correct: "B", explanation: "Gabarito: B. Se a ponta não for lisa (blunt) e tiver um fosfato, o adaptador não cola de jeito nenhum. A mistura End-Repair atua como o esmeril e uma 'massa corrida', preenchendo as valetas da dupla fita torcida com a polimerase, além de lixar restos usando a atividade de exo digestão química controlada e estrita do protocolo da pipeta." },

  { id: 1317, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O que acontece na placa térmica durante as etapas da rotina 'Denaturation' (Desnaturação à base de alto calor por ~95º C a 98ºC) na técnica basal global PCR em biologia NGS ou básica?", 
    options: { A: "Encerramento das bases C e T fundidas do polímero", B: "Ativa os antibióticos celulares", C: "O DNA espiral de Fita Dupla quebra as pontes frágeis de hidrogênio dos ligamentos das bases, 'derretendo' num instante reativo transformando todo o código sólido num DNA frouxo de 'Fita Simples' aberto permitindo assim que enzimas consigam adentrar os canais químicos centrais ou as iscas e os iniciadores específicos", D: "Destrói todo as membranas bacterianas nas extrações e mata a fita simples", E: "Precipita ácidos brancos no fundo como sais inertes da coluna e filtra ampolas sujas de forma química de forma contínua em tampão orgânico" }, 
    correct: "C", explanation: "Gabarito: C. Não tem como copiar um livro se ele está colado fechado com supercola. O aquecimento 95 graus em blocos desnatura as duas fitas (Afastamento), dando acesso livre e puro aos primers (marcadores de texto) acharem sua região-alvo da sequência." },

  { id: 1318, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Uma coleta mal acondicionada causou intensa Hemólise vermelha agressiva nos tubos de vacutainer EDTA recebidos no guichê analítico (a membrana das hemácias pifou ou quebrou nas caixas pelo sol forte num transporte da zona rural interiorana no barco sem isopor frio da base primária do governo). Qual erro fatal impacta o extraído dessa falha primária BPL na amostra pré analítica e de qual forma atua a destruição invisível e biológica química?", 
    options: { A: "Nenhuma, DNA não degrada fora do corpo e não tem lise de hemácias no plasma cru. Apenas cora levemente as pipetas do analista no visual sem estragos biológicos.", B: "O derramamento excessivo da hemoglobina do sangue liso misturada bloqueia os reagentes. A Hemoglobina age com quelações nas cadeias com alto poder inibitório para a clássica Taq Polimerase (bloqueador enzimático gravíssimo), impedindo fortemente a PCR do teste avançado na máquina além do excesso férrico toxico das moléculas livres soltas no mix diluído de água em tampões", C: "Ocorre o falso positivo nativo bacteriano somático em toda a extensão do cromossomo nuclear 1 em telômeros dos leucócitos basais de defesa com as mutações dos eritrócitos com núcleo denso somados", D: "Isso cliva todos e os RNAs do gene p53 seletivamente em tumores e de amostras do exoma total causando um buraco bioinformático visível aos alinhamentos de software de câncer apenas em WES nativos e painéis de genes BRCA tumorais exatos com sensibilidade moderada das sondas biotiniladas pesadas", E: "Congela a amostra organicamente e paralisa a extração salina sem precipitação alcoólica ou lise orgânica ou por solvente fenolados normais e rotineiros hospitalares dos manuais operacionais das clínicas laboratoriais ou postos ambulatoriais básicos na RDC primária" }, 
    correct: "B", explanation: "Gabarito: B. A hemácia humana não tem DNA, logo você nem quer o conteúdo dela na sua extração. O problema é que, se ela estourar no tubo inteiro por má qualidade e calor da viagem rural, ela derrama hemoglobina misturada nos seus glóbulos brancos. A hemoglobina inibe severamente quase toda PCR da Terra, acabando com sua biblioteca, inutilizando a amostra coletada." },

  { id: 1319, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Para finalidades de estocagem de décadas visando preservação suprema molecular dos 'Ácidos Nucleicos Genômicos Extraídos' no biobanco federal do estudo base unificado de Saúde de Precisão (Genomas População Brasileira Nacional e Base SUS NGS), onde e de qual maneira estrita do BPL biológico o laboratório depositará milhares de alíquotas com as amostras originais extraídas preciosas garantindo que atividades microscópicas nucleotídicas (as DNases endógenas contaminantes remanescentes nas calhas dos microtubos limpos puros ou água destilada simples do eluição da bancada da matriz) não triturem e desmanchem a integridade e fragmentem as hélices originais inteiras do material e da solução valiosa a longo prazo biológico na gaveta inativa nos meses dos racks e caixas e grades da sala e setor biológico do projeto estadual na metrópole de referência laboratorial matriz?", 
    options: { A: "Em geladeiras de cozinha adaptadas em gavetões de +4 Graus a base e isolante transparente limpo plástico", B: "Armários forrados com papel pardo em ar condicionado corporativo isolante de parede nos turnos do hospital em 10 Graus constantes com temperatura regulável do ambiente físico padrão normal diário e diurno limpos contra pós e umidades com ventilação simples e aberta nos andares", C: "Banho Maria e incubadoras quentes de secagem rápidas nos frascos com 37 graus térmicos corporais para imunizar a microbiota viral com fungos isolados do laboratório clínico do meio no dia da pesquisa centralizada nas incubadoras ou blocos", D: "Arquivamento e selagem absoluta congelada em criopreservadores e ultra-freezers ou Nitrogênio em -80 Graus Celsius contínuos e rigorosos de temperatura. Somente nesse rigor extremo glacial físico a vida metabólica enzimática de corte das dnases e proteases degradação hidrolítica suspende permanentemente e preserva os polímeros puros por vinte anos imutáveis sem decaimento de DIN basal das amostras biológicas arquivadas no frio extremo seco nas tampas isolantes e sem variação de choques monitoradas por sistema dataloggers log ou backups ininterruptos de emergência ligados às chaves energéticas na rede no-breaks do quadro de força das baterias a diesel do andar e bloco estrutural", E: "Em vidros escuros em soluções ativadas quentes nas vitrines em temperatura de bancadas expostas na janela ou gavetas estantes plásticas não transparentes ou pretas por se usar água limpa esterilizada imune a bactérias da pia ou tubulações por calor a frio natural sem umidade sem problemas climáticos ou sazonais sem freezers" }, 
    correct: "D", explanation: "Gabarito: D. Conservação infinita (décadas) ou matriz biobanco em biologia molecular de ácidos exige ultra freezers de -80 Graus pra baixo (Glacial). Na bancada ou geladeirinha comum, ou mesmo -20, flutuações e enzimas dormentes picotam seu DNA ao passar do tempo arruinando DIN da amostra original preciosa para análises retroativas na investigação forense ou médica do Estado ou SUS global federal ou estadual." },
  // =========================================================
  // MEGA BLOCO DE FUNDAMENTOS - BPL, ÉTICA E SAÚDE PÚBLICA (50 Qs)
  // =========================================================

  // --- Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade ---
  { id: 1320, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "No laboratório, os EPIs (Equipamentos de Proteção Individual) formam a barreira primária de segurança para o trabalhador. Qual das opções abaixo NÃO é classificada como um EPI?", 
    options: { A: "Luvas de procedimento de nitrila", B: "Jaleco de algodão com mangas longas", C: "Óculos de proteção", D: "Cabine de Segurança Biológica (Fluxo Laminar)", E: "Máscara respiratória PFF2/N95" }, 
    correct: "D", explanation: "Gabarito: D. A Cabine de Segurança Biológica é um Equipamento de Proteção Coletiva (EPC). Ela é uma barreira de engenharia que protege o ambiente todo, não sendo algo que o indivíduo 'veste'." },

  { id: 1321, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Qual é o procedimento de biossegurança MAIS simples, barato e eficaz para prevenir a transmissão de infecções e contaminação cruzada no ambiente laboratorial e hospitalar?", 
    options: { A: "Uso contínuo de antibióticos", B: "Esterilização do ar com luz ultravioleta (UV)", C: "Higienização correta e frequente das mãos com água e sabão ou álcool 70%", D: "Troca de jalecos a cada hora", E: "Isolamento absoluto de pacientes" }, 
    correct: "C", explanation: "Gabarito: C. A lavagem das mãos é a medida número um, universal e indiscutível de prevenção de infecções em qualquer ambiente de saúde." },

  { id: 1322, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Ao realizar uma coleta de sangue para extração de DNA, a agulha utilizada (material perfurocortante contaminado) deve ser descartada IMEDIATAMENTE em:", 
    options: { A: "Saco plástico branco leitoso", B: "Saco de lixo preto comum", C: "Recipiente rígido, resistente a furos e rupturas (ex: caixa amarela tipo Descarpack)", D: "Galão de descarte de reagentes químicos", E: "Recipiente de vidro esterilizado" }, 
    correct: "C", explanation: "Gabarito: C. Perfurocortantes nunca vão em sacos, pois furam o plástico e ferem o pessoal da limpeza. Vão sempre nas caixas amarelas rígidas padronizadas." },

  { id: 1323, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "A regra de ouro da pipetagem em laboratórios de biologia molecular proíbe estritamente uma prática antiga por risco letal e de contaminação. Qual é essa prática?", 
    options: { A: "Usar pipetas de 10 microlitros", B: "Pipetar soluções usando a boca (pipetagem oral)", C: "Trocar de ponteira entre as amostras", D: "Usar ponteiras com filtro de barreira", E: "Segurar o tubo na altura dos olhos" }, 
    correct: "B", explanation: "Gabarito: B. A pipetagem com a boca era comum no passado, mas causou inúmeras mortes e infecções por ingestão acidental de ácidos ou bactérias. Hoje é falta gravíssima de BPL." },

  { id: 1324, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "O símbolo internacional de Risco Biológico (três círculos sobrepostos sobre um círculo central) deve estar estampado obrigatoriamente na cor preta sobre fundo:", 
    options: { A: "Verde limão", B: "Amarelo ou Branco Leitoso", C: "Azul escuro", D: "Vermelho fluorescente", E: "Preto" }, 
    correct: "B", explanation: "Gabarito: B. Os sacos de lixo biológico (infectante) são regulamentados como de cor branca leitosa com o símbolo preto de risco biológico estampado." },

  { id: 1325, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "O conceito básico de POP (Procedimento Operacional Padrão) refere-se a:", 
    options: { A: "Um exame surpresa de auditoria", B: "Um documento que descreve detalhadamente o passo a passo de como realizar uma tarefa específica, garantindo que qualquer pessoa a execute da mesma maneira", C: "Um tipo de tubo de coleta de sangue", D: "Uma máquina que centrifuga tubos", E: "O crachá do funcionário" }, 
    correct: "B", explanation: "Gabarito: B. O POP é a 'receita de bolo' do laboratório. Garante que a rotina seja padronizada e reprodutível, independente de quem seja o técnico do dia." },

  { id: 1326, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "No contexto laboratorial, a água destilada comum NÃO é apropriada para preparar reagentes de PCR. O tipo de água exigida na biologia molecular básica é:", 
    options: { A: "Água mineral engarrafada", B: "Água da torneira filtrada com carvão ativado", C: "Água Ultrapura (Tipo I), isenta de íons, matéria orgânica e tratada para ser nuclease-free (livre de DNases/RNases)", D: "Água oxigenada a 10 volumes", E: "Água salobra esterilizada" }, 
    correct: "C", explanation: "Gabarito: C. A PCR é ultrassensível. Qualquer traço de magnésio extra, cloro ou enzimas soltas na água destilada comum vai estragar ou inibir a reação." },

  { id: 1327, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Por que as Boas Práticas de Laboratório (BPL) proíbem que o técnico use jaleco e luvas na copa do refeitório ou em áreas administrativas?", 
    options: { A: "Porque o jaleco pode manchar as cadeiras", B: "Para evitar a disseminação de patógenos ou reagentes químicos do laboratório (sujos) para áreas de convívio social (limpas)", C: "Apenas por uma questão de estética visual do hospital", D: "Para economizar luvas descartáveis", E: "Porque o ar condicionado do refeitório é mais forte" }, 
    correct: "B", explanation: "Gabarito: B. Luvas e jalecos retêm respingos imperceptíveis de sangue e venenos químicos. Sair com eles espalha contaminação em maçanetas e mesas onde as pessoas comem." },

  { id: 1328, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "A Autoclave é o equipamento básico mais utilizado para esterilização no laboratório. Seu mecanismo letal para micro-organismos baseia-se em:", 
    options: { A: "Radiação ultravioleta de alta intensidade", B: "Emissão de gás ozônio", C: "Calor úmido sob pressão (geralmente a 121°C e 1 atm), que desnatura proteínas e derrete membranas microbianas", D: "Frio extremo (-80°C)", E: "Desidratação absoluta por vácuo" }, 
    correct: "C", explanation: "Gabarito: C. A autoclave é uma panela de pressão gigante. A pressão aumenta o ponto de ebulição da água, permitindo que o vapor chegue a 121ºC e destrua qualquer forma de vida." },

  { id: 1329, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Um laboratório realiza um teste genético. A inclusão de um 'Controle Positivo' na placa serve para garantir que:", 
    options: { A: "Os reagentes não estão contaminados com outro DNA", B: "O teste é capaz de detectar o alvo caso ele realmente esteja lá, evitando Laudos Falsos Negativos caso o kit esteja estragado", C: "A amostra do paciente não tenha vírus", D: "A centrifugação foi feita corretamente", E: "A cor do tubo está certa" }, 
    correct: "B", explanation: "Gabarito: B. Se você faz um teste de Covid e o controle positivo (que você sabe que é vírus puro) não brilhar, o seu teste falhou. Você não pode liberar o paciente como 'Negativo'." },

  { id: 1330, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Para armazenar enzimas de biologia molecular (como a Taq Polimerase), qual é a temperatura padrão utilizada nos freezers de bancada laboratorial?", 
    options: { A: "Temperatura ambiente (25°C)", B: "Geladeira comum (2°C a 8°C)", C: "Freezer comum (-20°C)", D: "Nitrogênio líquido (-196°C)", E: "Estufa a 37°C" }, 
    correct: "C", explanation: "Gabarito: C. Enzimas em tampão com glicerol (para não congelarem solidamente e quebrarem) são sempre estocadas em freezers verticais padrão de -20ºC." },

  { id: 1331, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Qual é a finalidade principal do chuveiro de emergência e do lava-olhos instalados nos corredores dos laboratórios?", 
    options: { A: "Permitir banhos de higiene aos funcionários no fim do turno", B: "Lavar as vidrarias de grande porte", C: "Proporcionar lavagem imediata em caso de acidentes com derramamento ou respingo de produtos químicos/biológicos no corpo ou rosto", D: "Controlar a umidade do ar na sala", E: "Abastecer água para as máquinas de café" }, 
    correct: "C", explanation: "Gabarito: C. São EPCs (Equipamentos de Proteção Coletiva) de uso exclusivo para emergências. Segundos de diferença na lavagem de um ácido nos olhos podem salvar a visão." },

  { id: 1332, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Ao final do dia, a bancada de trabalho onde se manipulou sangue deve ser descontaminada com um agente químico. O desinfetante básico, barato e universalmente eficaz recomendado para sangue é:", 
    options: { A: "Água mineral", B: "Solução de hipoclorito de sódio (água sanitária) a 1% de cloro ativo", C: "Soro fisiológico 0,9%", D: "Óleo mineral", E: "Acetona" }, 
    correct: "B", explanation: "Gabarito: B. O hipoclorito de sódio é letal para vírus (como HIV e Hepatite B) contidos no sangue, sendo a primeira linha de defesa química de desinfecção de bancada." },

  { id: 1333, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "O termo 'Calibração' aplicado a uma micropipeta significa:", 
    options: { A: "Lavar a pipeta na pia", B: "Comprar ponteiras novas", C: "Comparar o volume que a pipeta realmente aspira com o volume nominal marcado nela (utilizando uma balança de precisão), ajustando-a se houver erro", D: "Colar um adesivo de identificação nela", E: "Guardar a pipeta na gaveta" }, 
    correct: "C", explanation: "Gabarito: C. Pipetas são mecânicas e as molas afrouxam com o tempo. Calibrar é garantir que quando ela marca 10ul, ela de fato puxe 10ul e não 9ul." },

  { id: 1334, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Sobre as classificações de Risco Biológico, o vírus Ebola é classificado como Nível 4 (NB-4). E a manipulação padrão de sangue humano desconhecido exige qual nível básico de Biossegurança?", 
    options: { A: "Nível 1 (NB-1)", B: "Nível 2 (NB-2)", C: "Nível 3 (NB-3)", D: "Nível 4 (NB-4)", E: "Nenhum nível especial" }, 
    correct: "B", explanation: "Gabarito: B. Manipular sangue humano padrão recai sobre o Nível 2 de biossegurança (jaleco, luvas, óculos, acesso restrito e descarte em lixo branco)." },

  { id: 1335, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "No controle interno do laboratório, o que significa a sigla 'LIMS'?", 
    options: { A: "Limpeza Interna de Material Sujo", B: "Local de Inspeção de Microscópios Sólidos", C: "Laboratory Information Management System (Sistema de Gestão de Informação Laboratorial)", D: "Legislação Interna de Medicina Sistemática", E: "Laboratório de Investigação Molecular Secundário" }, 
    correct: "C", explanation: "Gabarito: C. É o cérebro eletrônico do laboratório. O software que faz o rastreio do código de barras, nome do paciente e resultados de forma digital." },

  { id: 1336, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Na extração de DNA, o uso da centrífuga é constante. A regra mais elementar para evitar que a centrífuga quebre ou saia pulando pela bancada é:", 
    options: { A: "Nunca fechar a tampa", B: "Ligar o equipamento direto na tomada 220v sem checar a voltagem", C: "Realizar o balanceamento (equilíbrio de massa): colocar tubos com volumes iguais em posições exatamente opostas no rotor", D: "Colocar todos os tubos concentrados apenas de um lado do rotor", E: "Usar tubos de vidro comuns" }, 
    correct: "C", explanation: "Gabarito: C. Centrífugas giram a mais de 15.000 Rotações Por Minuto. Qualquer desequilíbrio de peso (1 grama que seja) de um lado gera uma vibração que pode estraçalhar a máquina." },

  // --- Ética em pesquisa e noções de estudos multicêntricos ---
  { id: 1337, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "O que a sigla TCLE significa no contexto da pesquisa com seres humanos?", 
    options: { A: "Tratamento Clínico Leve e Experimental", B: "Termo de Consentimento Livre e Esclarecido", C: "Teste de Controle Laboratorial Especial", D: "Técnica de Coleta Longitudinal Exata", E: "Termo de Confidencialidade Legal do Estado" }, 
    correct: "B", explanation: "Gabarito: B. O TCLE é o documento onde o participante assina dizendo: 'Eu fui informado sobre os riscos e os benefícios, e aceito participar desta pesquisa sem ter sido forçado'." },

  { id: 1338, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Qual é o sistema nacional (órgãos) responsável por aprovar eticamente a realização de qualquer pesquisa envolvendo seres humanos no Brasil?", 
    options: { A: "O Ministério da Justiça", B: "A Polícia Federal", C: "O Sistema CEP/CONEP (Comitê de Ética em Pesquisa / Comissão Nacional de Ética em Pesquisa)", D: "O CREMESP (Conselho Regional de Medicina)", E: "O SUS diretamente nos postos" }, 
    correct: "C", explanation: "Gabarito: C. O sistema CEP atua em nível hospitalar/universitário, e a CONEP é o órgão máximo federal que regula as normas para proteger os cidadãos." },

  { id: 1339, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Um estudo clínico que está sendo realizado ao mesmo tempo em hospitais de São Paulo, Belém e Rio de Janeiro, seguindo o exato mesmo protocolo de pesquisa, é classicamente chamado de:", 
    options: { A: "Estudo in vitro", B: "Estudo unicêntrico", C: "Estudo duplo-cego reverso", D: "Estudo multicêntrico", E: "Pesquisa básica" }, 
    correct: "D", explanation: "Gabarito: D. Estudos multicêntricos ('Múltiplos Centros') englobam diferentes instituições e estados trabalhando juntos na mesma pesquisa para obter dados populacionais maiores e mais rápidos." },

  { id: 1340, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Na bioética, o princípio da 'Autonomia' garante que:", 
    options: { A: "O médico escolhe tudo pelo paciente", B: "A máquina do laboratório roda sozinha", C: "O paciente/voluntário tem o direito e a liberdade de tomar suas próprias decisões sobre seu corpo e participação, devidamente informado", D: "A pesquisa independe de leis", E: "O pesquisador é imune a processos" }, 
    correct: "C", explanation: "Gabarito: C. A autonomia é o direito de dizer 'Sim' ou de dizer 'Não, não quero mais participar e quero meu sangue descartado'." },

  { id: 1341, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "O princípio da 'Não-Maleficência' é o pilar mais antigo da medicina (Primum non nocere). O que ele significa na pesquisa clínica?", 
    options: { A: "A obrigação primária de não causar danos ou malefícios intencionais ao participante", B: "A obrigação de curar a doença do paciente em 100% dos casos", C: "A proibição de usar agulhas em seres humanos", D: "O dever de não cobrar honorários médicos", E: "O direito de publicar os resultados de pesquisa" }, 
    correct: "A", explanation: "Gabarito: A. Se você vai testar um novo remédio ou procedimento, ele tem que ser seguro e, fundamentalmente, não pode machucar mais do que a doença original faria." },

  { id: 1342, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Se um paciente se arrepender de ter entrado em uma pesquisa genômica e quiser sair no meio do projeto, ele:", 
    options: { A: "Deve pagar uma multa ao laboratório", B: "Pode se retirar a qualquer momento, sem a necessidade de justificativa, sem sofrer qualquer penalidade ou prejuízo no seu atendimento médico normal no SUS", C: "É obrigado a ficar até o final pois já assinou o contrato", D: "Só pode sair se o juiz autorizar", E: "Tem o sangue devolvido e colocado de volta em sua veia" }, 
    correct: "B", explanation: "Gabarito: B. Esta é uma garantia sagrada do TCLE (Direito de Retirada). O paciente sai quando quiser e o hospital continua tratando ele normalmente." },

  { id: 1343, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "O que significa 'Anonimização' de dados em um banco de dados de pesquisa em genômica?", 
    options: { A: "Manter o CPF e RG no sistema", B: "A remoção de informações que permitem identificar o dono do dado de forma irreversível (ou o uso de códigos desvinculados), protegendo a privacidade do participante", C: "Publicar o genoma no jornal oficial do estado", D: "Deixar de coletar sangue de pessoas anônimas", E: "Usar nomes falsos que o próprio paciente escolheu no cartório" }, 
    correct: "B", explanation: "Gabarito: B. A anonimização corta o elo entre o DNA e o Nome, impedindo que hackers ou empresas de seguro descubram a doença de um indivíduo específico." },

  { id: 1344, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "De acordo com a norma brasileira de ética (Resolução CNS 466/2012), é permitido pagar um salário ou remuneração mensal a um cidadão brasileiro apenas para ele aceitar participar de uma pesquisa médica/laboratorial?", 
    options: { A: "Sim, é o padrão nacional de emprego biomédico", B: "Sim, caso o valor seja maior que o salário mínimo", C: "Não. A participação em pesquisas no Brasil deve ser voluntária, sendo proibida a comercialização do corpo ou a remuneração, permitindo-se apenas o ressarcimento de gastos (como condução e lanche)", D: "Não, a lei manda que os pacientes paguem para ser pesquisados", E: "Sim, mas apenas em hospitais particulares" }, 
    correct: "C", explanation: "Gabarito: C. O Brasil proíbe a figura do 'Cobaia de Aluguel'. As pessoas entram na pesquisa por altruísmo. A instituição só deve devolver o dinheiro do ônibus e da alimentação do dia." },

  { id: 1345, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Se uma pesquisa de coleta de DNA focar em crianças (menores de idade), qual é o trâmite documental ético exigido?", 
    options: { A: "Nenhum documento, crianças não têm CPF ativo", B: "Apenas autorização verbal do médico", C: "A criança decide sozinha e assina com a digital", D: "Os pais ou responsáveis legais devem assinar o TCLE, e a criança (conforme sua capacidade de compreensão) deve assinar o TALE (Termo de Assentimento Livre e Esclarecido)", E: "É proibido fazer pesquisas com crianças no Brasil" }, 
    correct: "D", explanation: "Gabarito: D. O pai assina o consentimento oficial. Mas a criança não é um objeto; o pesquisador tem que explicar para ela, numa linguagem infantil com desenhos, que ela vai levar uma agulhada, e ela assina o 'Assentimento' (TALE)." },

  { id: 1346, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Em publicações científicas multicêntricas, o que caracteriza um 'Conflito de Interesses'?", 
    options: { A: "Quando os pesquisadores brigam na bancada de trabalho", B: "Quando o pesquisador possui vínculos financeiros (ex: é acionista da empresa que fabrica o remédio testado), podendo enviesar ou comprometer a neutralidade e a veracidade da sua conclusão na pesquisa", C: "Quando o paciente não concorda com o laudo médico", D: "Quando a universidade rejeita o tema do estudo", E: "Apenas quando há brigas por autoria do artigo" }, 
    correct: "B", explanation: "Gabarito: B. Se eu recebo 100 mil reais da Empresa X e assino um artigo atestando que a máquina da Empresa X é a melhor do mundo, eu tenho um conflito moral e financeiro. Ele deve ser obrigatoriamente declarado nas revistas." },

  { id: 1347, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Onde o pesquisador deve cadastrar e submeter o seu projeto de pesquisa para que ele seja lido e aprovado pelo Comitê de Ética brasileiro?", 
    options: { A: "Na Secretaria da Receita Federal", B: "No Correio, enviando as folhas impressas por Sedex", C: "No sistema online 'Plataforma Brasil', a base de dados centralizada nacional de registros de pesquisas com seres humanos", D: "Apenas na prefeitura local", E: "No site do Diário Oficial da União" }, 
    correct: "C", explanation: "Gabarito: C. A Plataforma Brasil digitalizou tudo. É nela que os projetos, Tcles e relatórios são protocolados e lidos pelos relatores do CEP e da CONEP." },

  { id: 1348, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "A denominação 'PI' (Principal Investigator / Pesquisador Principal) no projeto multicêntrico de Bioinformática refere-se à:", 
    options: { A: "Máquina de PIpetagem automática", B: "Pessoa responsável exclusivamente pela limpeza da placa de petri", C: "Pessoa responsável máxima e líder do projeto de pesquisa na instituição, que responde legal, científica e eticamente pela condução do estudo", D: "Primeira Instituição a entrar na verba governamental", E: "Participante Internacional do exterior" }, 
    correct: "C", explanation: "Gabarito: C. O PI (Pesquisador Principal) é o 'Comandante'. Se um técnico errar ou cometer má conduta, o nome e o registro profissional do PI é o primeiro a ser chamado pela comissão de ética na responsabilização." },

  { id: 1349, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Uma pesquisa genética foi aprovada para coletar sangue na periferia da capital. Ao se tratar de Populações Vulneráveis (ex: pessoas em extrema pobreza ou sem instrução educacional formal), a ética exige que o pesquisador:", 
    options: { A: "Tenha menos rigor, pois eles não lerão o protocolo", B: "Tenha rigor redobrado, assegurando-se (de forma ativa e oral) de que as pessoas realmente entenderam o TCLE e não aceitaram apenas por se sentirem pressionadas ou intimidadas pela presença do 'doutor'", C: "Utilize termos técnicos difíceis para garantir a pureza científica", D: "Não faça a pesquisa em áreas pobres", E: "Pague aos líderes comunitários em troca das assinaturas" }, 
    correct: "B", explanation: "Gabarito: B. O conceito de Vulnerabilidade ética foca em proteger quem tem menos capacidade de se defender de abusos devido à desigualdade de poder (médico vs. pessoa carente)." },

  { id: 1350, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Segundo a norma brasileira, após o encerramento do estudo, os benefícios conquistados com a pesquisa (ex: novo medicamento provado eficaz para a doença):", 
    options: { A: "Pertencem unicamente ao pesquisador", B: "Devem ser cobrados caríssimos dos participantes que serviram como voluntários", C: "Devem ser fornecidos de forma gratuita e por tempo indeterminado a todos os participantes voluntários do estudo que necessitarem dele para sua saúde", D: "Só devem ser entregues ao exterior", E: "Devem ser imediatamente destruídos" }, 
    correct: "C", explanation: "Gabarito: C. É o conceito de Benefício Pós-Estudo. O voluntário deu seu corpo ao risco; a indústria farmacêutica/patrocinador fica obrigada a manter o remédio ou cura garantida de graça para ele." },

  // --- Noções de saúde pública e ética em pesquisa ---
  { id: 1351, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "O que a sigla SUS significa na estrutura do governo brasileiro?", 
    options: { A: "Setor de Urgências Salva-vidas", B: "Serviço Unificado Social", C: "Sistema Único de Saúde", D: "Sistema Universal de Saneamento", E: "Setor Único da Sociedade" }, 
    correct: "C", explanation: "Gabarito: C. Criado pela Constituição de 1988, o Sistema Único de Saúde transformou a saúde de um 'privilégio de trabalhadores com carteira assinada' em um 'direito de todos e dever do Estado'." },

  { id: 1352, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "O princípio da UNIVERSALIDADE no SUS significa de forma simples que:", 
    options: { A: "Apenas hospitais universitários operam pelo sistema", B: "A saúde é um direito fundamental de todo ser humano, e qualquer pessoa que esteja em solo brasileiro tem acesso garantido aos serviços de saúde pública, sem distinção ou discriminação", C: "O SUS atende o universo da Via Láctea", D: "Todos os tratamentos custam o mesmo preço", E: "Apenas cidadãos nascidos no Brasil podem entrar na UPA" }, 
    correct: "B", explanation: "Gabarito: B. Se um turista sueco sofrer um infarto no Rio de Janeiro, ele será atendido no SUS sem apresentar cartão de crédito, pois a vida é o valor máximo (Princípio Universal)." },

  { id: 1353, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "O princípio da EQUIDADE no Sistema Único de Saúde determina que:", 
    options: { A: "Todos devem receber o exato mesmo número de consultas por ano", B: "Médicos e Enfermeiros recebem o mesmo salário", C: "As desigualdades sociais e de saúde devem ser reduzidas tratando 'desigualmente os desiguais' — quem precisa mais, recebe mais recursos ou prioridade de atendimento", D: "Os ricos pagam para usar a rede pública", E: "Os pacientes compram equipamentos de forma equitativa (dividida)" }, 
    correct: "C", explanation: "Gabarito: C. Diferente de igualdade (dar o mesmo para todos). Equidade é dar recursos adequados; ex: a fila do transplante de fígado não anda por ordem de chegada, e sim por quem tem o risco de morrer antes (quem precisa mais, passa na frente)." },

  { id: 1354, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "Em saúde pública, o que significa o princípio da INTEGRALIDADE?", 
    options: { A: "O médico trabalha período integral de 40 horas", B: "O hospital deve ocupar um quarteirão inteiro da cidade", C: "O indivíduo deve ser visto de forma holística (inteira), com o sistema oferecendo desde a vacina (prevenção primária), o diagnóstico genético/exame, até a UTI complexa e a reabilitação fisioterápica final", D: "As consultas devem ser integradas com o sistema de ensino", E: "Apenas pães e alimentos integrais são prescritos na nutrição" }, 
    correct: "C", explanation: "Gabarito: C. É não fragmentar a saúde do cidadão. Ele não é 'uma doença', é uma pessoa. A rede deve ter posto de saúde, ambulatório e hospital de base ligados." },

  { id: 1355, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "A ciência da 'Epidemiologia' foca fundamentalmente no estudo de quê?", 
    options: { A: "Exclusivamente do DNA de vírus", B: "Da criação de epiderme (peles artificiais) em laboratório", C: "Da distribuição, frequência e determinantes (causas) das doenças ou eventos relacionados à saúde em populações humanas específicas, visando o controle de agravos", D: "Do clima geográfico terrestre", E: "Da anatomia óssea de humanos antigos" }, 
    correct: "C", explanation: "Gabarito: C. A Epidemiologia tenta responder quem está adoecendo, onde está adoecendo, por qual motivo ambiental ou genético estão adoecendo, e como fazemos para barrar o problema." },

  { id: 1356, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "Qual é a principal diferença clássica entre INCIDÊNCIA e PREVALÊNCIA na análise de uma epidemia municipal?", 
    options: { A: "Não há diferença, são sinônimos", B: "Incidência foca apenas em doenças crônicas antigas, Prevalência em ferimentos novos", C: "Incidência mede apenas a gravidade, e Prevalência a facilidade da cura", D: "Incidência mede os CASOS NOVOS num período de tempo; Prevalência mede a totalidade (casos antigos + casos novos) que têm a doença num determinado momento (foto da população)", E: "Incidência é no interior, Prevalência na capital" }, 
    correct: "D", explanation: "Gabarito: D. Incidência é como um filme (quantos pegaram dengue no mês de março). Prevalência é uma fotografia (quantas pessoas têm hipertensão no Brasil hoje, no total)." },

  { id: 1357, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "Os Determinantes Sociais da Saúde (DSS) nos explicam que uma pessoa não adoece apenas por genética. O que são os DSS?", 
    options: { A: "Os diplomas de medicina dos chefes sociais da cidade", B: "Apenas as leis do congresso sobre drogas lícitas", C: "As condições socioeconômicas, culturais e ambientais em que as pessoas nascem, crescem, vivem, trabalham e envelhecem, incluindo moradia, saneamento básico, educação e renda, que afetam brutalmente o status de saúde geral", D: "Os códigos genéticos de ancestralidade", E: "A contagem de hemácias no hemograma rotineiro" }, 
    correct: "C", explanation: "Gabarito: C. Fatores de moradia (esgoto a céu aberto), renda (não poder comprar comida nutritiva) e escolaridade são grandes preditores de morte prematura, tão importantes quanto os fatores biológicos." },

  { id: 1358, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "A vacinação e a orientação escolar (como escovar os dentes) são classificados em saúde pública como exemplos de:", 
    options: { A: "Tratamento cirúrgico agudo", B: "Prevenção Terciária (reabilitação física)", C: "Prevenção Secundária (rastreio de doença inicial, ex: mamografia)", D: "Prevenção Primária (evitar que a doença sequer aconteça/instale-se no corpo saudável)", E: "Cura milagrosa" }, 
    correct: "D", explanation: "Gabarito: D. Níveis de Prevenção: Primária (Evita a doença). Secundária (Pega a doença no começo, sem sintomas ainda). Terciária (Evita que o paciente já doente e operado piore e fique com sequelas)." },

  { id: 1359, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "No contexto da Vigilância em Saúde no SUS, a 'Notificação Compulsória' obriga os profissionais de saúde e os laboratórios a:", 
    options: { A: "Comprar remédios imediatamente e estocar", B: "Comunicar obrigatoriamente e rapidamente às autoridades de saúde (Vigilância Epidemiológica) a suspeita ou confirmação de certas doenças de interesse público grave (ex: sarampo, ebola, covid), para que o governo inicie ações de bloqueio em massa do surto", C: "Avisar o paciente apenas pelo correio municipal", D: "Notificar o CEP sobre uma pesquisa finalizada", E: "Esconder dados em sigilo médico absoluto" }, 
    correct: "B", explanation: "Gabarito: B. Como sarampo é fatal e super transmissível, o médico é obrigado por lei federal a avisar o Estado imediatamente, quebrando o sigilo em prol do bem-estar de toda a comunidade da cidade." },

  { id: 1360, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "O conceito de 'Descentralização' como eixo organizativo do SUS prevê:", 
    options: { A: "Mudar a capital federal para o interior", B: "Distribuir o poder, o dinheiro e as responsabilidades na gestão de saúde para as esferas regionais e locais, com ênfase na 'municipalização' (o prefeito e o estado resolvem a saúde da região, não apenas o governo federal em Brasília)", C: "Desativar os hospitais centrais grandes das metrópoles", D: "Retirar o poder do médico e colocar no conselho de enfermagem apenas", E: "Isolar os pacientes longe do centro" }, 
    correct: "B", explanation: "Gabarito: B. Fazer o dinheiro e a ordem descer de Brasília até as mãos do gestor da cidade (Municipalização), porque o prefeito conhece melhor as necessidades locais do povo dele do que a capital." },

  { id: 1361, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "O que significa a sigla ANVISA e qual o seu papel básico frente à saúde pública laboratorial do Brasil?", 
    options: { A: "Ação Nacional de Vacinação Intensa e Suporte Analítico. Responsável por aplicar vacinas nas escolas.", B: "Agência Nacional de Vigilância Sanitária. Uma autarquia que regula, controla e fiscaliza a segurança e a entrada de produtos e serviços submetidos à vigilância (medicamentos, alimentos, cosméticos e kits de reagentes de biologia molecular diagnóstica)", C: "Agência de Notificação Viral Sistêmica e Ambiental. Foca em mosquitos de dengue", D: "Associação dos Navios de Vigilância Sul-Americana. Controla portos", E: "Aliança de Novos Vacinadores de Imunidade Sólida Animal" }, 
    correct: "B", explanation: "Gabarito: B. Se a máquina do sequenciador e o reagente químico foram aprovados no Brasil, é porque a ANVISA atestou que eles não fazem mal e cumprem o que prometem no manual." },

  { id: 1362, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "O fenômeno chamado 'Judicialização da Saúde' se tornou uma grande preocupação financeira no SUS brasileiro nas últimas décadas. Ele consiste no ato de:", 
    options: { A: "Médicos processando o hospital por insalubridade", B: "Presos recebendo atendimento médico de urgência dentro dos fóruns judiciais criminais das varas unidas", C: "O paciente recorrer ao Poder Judiciário (acionando promotores e juízes) para garantir na marra judicial e por ordem legal o fornecimento de tratamentos genéticos caros, leitos de UTI ou medicamentos de ponta não previstos no protocolo original da secretaria estadual e da rede municipal, forçando o governo a comprar o remédio de urgência orçamentária para aquela única vida em específico", D: "Policiais civis acompanhando coletas de sangue na rua com autorização do delegado", E: "Prender gestores corruptos de saúde do município nos processos públicos da base unida eleitoral" }, 
    correct: "C", explanation: "Gabarito: C. A constituição diz 'Saúde é direito de todos'. Como há um conflito sobre faltar dinheiro no cofre contra a vida de um bebê, os pais ganham na justiça liminares que forçam o governador a pagar tratamentos genéticos milionários (ex: remédio Zolgensma da AME)." },

  { id: 1363, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "A sigla CONITEC atua ativamente para aprovar inovações dentro do SUS. A sigla significa Comissão Nacional de Incorporação de Tecnologias no SUS. O seu critério de decisão baseado em ATS (Avaliação de Tecnologias em Saúde) avalia, antes de permitir a compra de um teste NGS caríssimo, se ele possui fundamentalmente:", 
    options: { A: "Beleza visual do equipamento", B: "Comprovação científica firme de sua Segurança biológica, de sua Eficácia e Efetividade de cura prática, além da verificação minuciosa se os cofres do SUS não quebrarão com o Impacto Econômico e Orçamentário total e a Custo-efetividade (pagar a tecnologia para a vida salva)", C: "Marca americana ou europeia exclusivas do exterior nativo governamental", D: "Se os reagentes duram mais de dez anos nas prateleiras sem validade expirada na RDC reguladora da base das autarquias regionais ativas federais nos prédios institucionais estritamente normatizados na gestão de contratos licitatórios gerais", E: "Se os médicos acham a interface amigável ou fácil" }, 
    correct: "B", explanation: "Gabarito: B. O Brasil é grande demais. A CONITEC atua como um escudo matemático provando que botar uma técnica Nova no catálogo popular SUS realmente funciona e provando para a economia federal que o estado não vai falir ao oferecer e suprir aquilo a todos os 210 milhões de brasileiros." },

  { id: 1364, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "Segundo as Diretrizes Curriculares e operacionais de saúde humana, 'Vigilância em Saúde' é um grande guarda-chuva integrativo estatal que reune ativamente o campo das 4 ações principais:", 
    options: { A: "Medicina do trabalho privado, Medicina do esporte esportiva ativa, Fisioterapia reabilitadora base e Fonoaudiologia intensiva nas massagens da estrutura motora e fuso da área corporal ortopédica dos tecidos", B: "Vigilância Epidemiológica das doenças raras e comuns nativas urbanas, Vigilância Sanitária em aeroportos insumos e mercados e feiras de manipulação em alimentos diretos consumíveis normais diários de uso biológicos restritivos atestados da base na agência fiscal, Vigilância Ambiental dos rios vetores poluições ambientais rurais e climáticas focais sistêmicas base gerais e locais urbanas nativas, e Vigilância em Saúde do Trabalhador das normas laborais ergonômicas tóxicas rurais em estresse ou fadigas severas ocupacionais em campo ativo e industrial primário", C: "Radiologia oncológica, Imunologia pura restrita a alergias crônicas de ácaros residenciais estritos sem causas patogênicas mortais nativas, Genética Básica cromossômica restrita em sangue periférico capilar com gota seca analítica restrita purificada manual ou mecânica base automatizada das rotinas do LIMS nativo laboratorial geral, Enfermagem Geral de prontuário base sem medicação nas UPAS estaduais simples das pontas periféricas", D: "Cardiologia, Pediatria, Ortopedia cirúrgica corretiva e Oftalmologia geral preventiva primária estrita corretiva das visões do trabalho base", E: "Farmácia comum simples, Manipulação em pó branco, Administração direta em estoque logístico aduaneiro restrito aos gestores hospitalares e Contabilidade fiscal médica final faturada nas guias dos planos suplementares anexas no balanço anual governamental municipal" }, 
    correct: "B", explanation: "Gabarito: B. Se junta na Saúde unificada: Epidemiológica (O paciente e o vírus da doença), Sanitária (Remédios, vacinas e hambúrgueres contaminados), Ambiental (Mercúrio na água e mosquito do mato) e Trabalhador (Segurança de quem produz na mina de carvão e fumaça e asma ocupacional). É a visão total da Saúde em macro blocos focados na antecipação e qualidade de vida." },

  { id: 1365, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "O que o famoso manual e acrônimo 'GCP' (Good Clinical Practice) / Boas Práticas Clínicas impõe mandatoriamente na condução de um ensaio de saúde governamental genômica que lida e toca intimamente em vidas reais humanas?", 
    options: { A: "Que todas as publicações no fim sejam de revistas gratuitas abertas", B: "Um padrão de qualidade de ouro de conduta internacional regulatória ético de trabalho e científico rígido para planejar ou desenhar o ensaio na estrutura clínica cega das pílulas, conduzir em vida monitorada, auditar as planilhas médicas dos LIMS contra rasuras, e relatar todos os dados médicos finais fielmente assegurando de forma suprema os direitos essenciais dos testes da humanidade, integridade humana real da saúde psicológica e orgânica, e a confidencialidade total vital e absoluta dos dados fidedignos colhidos em credibilidade global das pesquisas atestadas pela justiça", C: "Que a máquina analítica deve ser da cor metálica ou acinzentada neutra padronizada no hospital base principal branco padrão limpo", D: "Garantir a verba monetária aos voluntários participantes remunerados em dólares estritos", E: "Que o médico não possa dar opiniões, apenas o analista manda em 100% dos dados gerados frios" }, 
    correct: "B", explanation: "Gabarito: B. GCP é a bíblia mundial (ICH GCP). Surgiu para que erros das guerras passadas do século 20 sem limite não ocorressem novamente. Garante que os dados (O papel) refletem fidedignamente que um Ser Humano ciente da ação recebeu segurança máxima num protocolo validado." },

  { id: 1366, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "Diferencie sucintamente Epidemia de Endemia nos conceitos da epidemiologia e saúde coletiva territorial na vigilância da federação unificada base SUS do governo local da base central do IBGE:", 
    options: { A: "São a exata mesma coisa apenas diferem em qual idioma internacional foca a base biológica temporal nativa europeia", B: "Epidemia é a presença comum e perene constante normal esperada de uma doença local por todo ano sazonalmente em clima e região de geografia quente (Ex: Malária Amazônica do mosquito que vive a anos constante ali matando em linha reta linear). Endemia é um estouro mortal abrupto rápido veloz explosivo focado rápido de milhares de casos atípicos anormais em pico agudo que assustam pelo montante em cidade que fugiu dos controles focais locais sanitários hospitalares do mapa histórico com vetores da ação em poucos dias semanas contadas do ano e calendário", C: "Epidemia é em animais urbanos mamíferos infectados na rua com vetores pulgas virais primárias mortais restritas as matas isoladas, Endemia é nos homens restritos as selvas primárias endêmicas nativas originais e virgens rurais", D: "Epidemia é um aumento súbito, inesperado descontrolado agudo rápido grave e acima da média de casos de uma doença numa região focada temporal. Endemia refere-se a uma doença de prevalência persistente frequente normal habitual de todo ano perene de convivência restrita crônica que ocorre constantemente em uma determinada região ou população de clima nativo atestada", E: "Epidemia requer vacinas inativadas da câmara técnica de refrigeração geladas em matriz estrita do frio a -20 C atestada, Endemia se cura e trata-se apenas com repouso soro paliativo ambulatorial sem internamento nos leitos quentes e enfermarias vazias simples e comuns" }, 
    correct: "D", explanation: "Gabarito: D. Epidemia é a Explosão. Um pico inesperado que esgota leitos da noite para o dia. Endemia é a doença 'da casa' (habitual). Ex: Em Manaus a malária é endêmica (está sempre lá, o governo já espera x casos por mês). Se tiver Dengue no sul com 10.000 casos e não tinha mês passado, virou Epidemia." },

  { id: 1367, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "O que deve ser anotado no Rótulo / Etiqueta de Segurança primária química mandatório laboratorial em frasco de preparo ou estoque de bancadas de BPL molecular ativo misturado em genômica nas prateleiras dos freezers estáticos em rotina orgânica fria da câmara gelada e limpa do ambiente estéril limpo biológico?", 
    options: { A: "Apenas nome, pois ninguém lê os tubos na pressa", B: "Apenas data e letra rubricada apagada de ponta e lápis do fabricante do mês atestado no balcão de cima do gelo em temperatura", C: "Nome do Reagente químico da mescla ou conteúdo diluído em abreviação comum na concentração base Molar química ou Normal de Ph molar, Data do preparo (Mês, Dia, Ano) analítico da diluição atestada na bancada no tubo primário novo no local da mistura laboratorial com clareza em caneta resistente a água orgânica gelo molhada insolúvel do álcool reagente para identificar a rastreabilidade da solução com precisão de expiração no uso (LIMS label) e lote matriz assinado nas letras do cientista de mistura primário analítico biomédico e a validade oficial de descarte de uso seguro de meses para descarte preventivo legal atestado orgânico final ativo", D: "O valor da pipeta de compra financeira do mês com nota base analítica num plano centralizado impresso a máquina industrial apenas térmica e código qr code liso lido digital infravermelho unicamente criptografado num celular fechado pela tela local das lentes atestadas e blindadas na web sem internet nas conexões da máquina do laboratório isolada cega de redes limpas puras corporativas nativas digitais", E: "Um desenho colorido biológico sem uso de textos" }, 
    correct: "C", explanation: "Gabarito: C. Tubo de laboratório precisa gritar: O que é (Tampão de Lise 10mM), Quando foi Feito (01/Jan/25), Validade (01/Dez/25) e Quem fez (Assinatura: JS). Um frasco incolor sem rótulo ou sem validade transparente no freezer em laboratórios reais não é água, é veneno. E pela lei penal joga-se imediatamente no lixo Químico ou Biológico para descarte." },

  { id: 1368, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "O que o Chuveiro de Ar com bloqueio Pressurizado Intertravado (Air-Lock / Câmara de Descontaminação Seca Dupla Interlock Cleanroom Lock / Câmara tipo Eclusa hermética selada de paredes grossas de fluxo e luzes restritas de transição biológica) atua numa porta blindada bloqueando na Sala Limpa Limiar de Alto Risco Pós-PCR e Extrações Críticas em Bio Bancos Nacionais NBS 3/4 isolados virgens esterilizados hospitalares de matriz genômicas atestadas estatais governamentais civis do Brasil?", 
    options: { A: "Molha o analista para tirar a sujeira do tênis e lavar com água potável fria simples atestada de rua as pernas brancas uniformes médicas asseadas com sabão simples em bloco e detergente suave no chuveirinho base local da portaria interna limpa da secretaria de estado e higiene sanitária das unhas curtas", B: "Garante segurança biológica primária e isolamento total pressórico rigoroso ativado por duas portas impenetráveis cruzadas abertas juntas onde a da frente nunca abre fisicamente eletrônica junto com a traseira traseira atestada (Intertravamento). Ele previne vazamento da contaminação do aerosol flutuando em nuvens de gotículas infecciosas invisíveis mortais em pó no recinto ou exaustão do ar interno vazado acidental para as áreas comuns adjacentes de escritórios civis administrativos nas bases públicas anexas e varre o macacão impermeável branco total do pesquisador do centro com filtro poderoso ejetado em jatos verticais e radiação estática isolando as atmosferas e ambientes dos corredores ativamente num ciclo", C: "Conta ponto financeiro das horas de serviço do analista no final do dia na base central magnética sem cartões", D: "Resfria com gelo a roupa em verão nos estados nordestinos estáticos para evitar suor que cai das luvas em extrações e amostras", E: "Guarda insumos limpos temporários nas bandejas laterais internas na sala de passagem" }, 
    correct: "B", explanation: "Gabarito: B. A Eclusa (Air-Lock) de transição num centro avançado de doenças genômicas infecciosas é o filtro de barreira máxima de ar da porta principal. O pesquisador entra, a porta de trás tranca, ele sofre um banho de ar estéril do teto ou irradiação e, só então e quando acabar, a porta da frente das macas do laboratório de Risco 3 se destranca para ele passar ileso, nunca vazando nada pelo corredor central administrativo dos civis para o ambiente exterior livre normal do planeta limpo hospitalar aberto ou corredores." },

  { id: 1369, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Em Ética de pesquisa (CONEP 466), a obrigatoriedade restrita rigorosa de tradução absoluta integral das complexidades e métricas da genômica do texto bruto na formulação redigida analógica ou digital do papel principal do TCLE (Termo do Consentimento Livre e Claro) baseia-se filosoficamente num mandamento bioético primário que afirma o quê e como ele garante no texto que a população vulnerável entenda tudo e leia livre de imposições técnicas da academia biomédica ou medicina rebuscada num idioma não leigo comum sem amparos explicativos lógicos estáticos no interior ou em fóruns rurais do país continental base do IBGE?", 
    options: { A: "Que a linguagem técnica erudita purista e hermética americana ou anglo deve imperar soberana intocada na literatura em respeito a biologia médica erudita atestada pelas universidades superiores acadêmicas no país em questão fechando-se no cientificismo inquestionável sem perdas lexicais simples de classe comum de dialeto para padronização final dos conselhos na tradução literal exata técnica formal nos fóruns de ciência europeu de bases exatas não traduzíveis e inatingíveis aos vulneráveis dos postinhos do país", B: "O documento TCLE não é para o juiz ou cientista, é apenas para e sobre o voluntário frágil. Ele DEVE obrigatória e compulsoriamente pelo CEP ser grafado e descrito em 'Linguagem Acessível e Clara' do Leigo civil comum popular da escola base média municipal (Abolindo jargões crípticos de bioinformática inacessíveis de inglês acadêmico ou códigos médicos confusos e cifrados sem significados no dicionário de rua). O voluntário rural sem Phd não pode ou deve ser forçado a adivinhar as palavras; ele precisa da tradução pura visual (seja desenhos e infográficos até nas folhas) sobre do que se trata as agulhas que o investigador da equipe principal colocará e inserirá no seu braço para puxar o sangue para que assim o seu sim de concordância das letras no final na assinatura caneta e oral seja verdadeiramente 'Esclarecido/Illuminated' e o princípio absoluto da Autonomia prevaleça e não se quebre no rigor analítico na ciência pública populacional das leis estaduais da RDC final na ética nacional biomédica reguladora de bancada", C: "O documento precisa de 50 páginas de lei com selos do advogado federal do SUS ou não serve em fórum", D: "TCLE exige firma em cartório de tabelião carimbada", E: "Basta pedir ao paciente que digite no Google num site de celular o que ele não entendeu na hora que a equipe principal lê e lê o PDF do termo" }, 
    correct: "B", explanation: "Gabarito: B. Essa é a regra número um que mais derruba os cientistas inexperientes e causa reprovação dos Comitês de Ética em Pesquisa do hospital. Se você mandar pro CEP um documento TCLE dizendo que 'vamos usar Fastq com Alinhamento BWT de variantes CNVs', você reprova. O texto que vai para a mão do paciente deve dizer que 'vamos usar programas de computador para ler o seu DNA na máquina que tira fotos para procurar erros na genética'." },
  // =========================================================
  // MEGA BLOCO: MÉDIO/ELABORADO - LAB & BIOINFO (50 QUESTÕES)
  // =========================================================

  // --- LABORATÓRIO: Biologia, biologia molecular e genética ---
  { id: 1370, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O sistema CRISPR-Cas9 revolucionou a edição genômica. Para que a nuclease Cas9 consiga clivar o DNA alvo, é estritamente necessária a presença de uma sequência específica adjacente ao alvo no genoma, conhecida como:", 
    options: { A: "Sequência Shine-Dalgarno", B: "Sítio de Poly-A", C: "Motivo PAM (Protospacer Adjacent Motif)", D: "TATA box", E: "Sequência Kozak" }, 
    correct: "C", explanation: "Gabarito: C. A Cas9 é 'cega' sem o PAM (geralmente NGG). Ela só corta o DNA se o RNA guia hibridizar com o alvo E houver um PAM logo ao lado. Isso impede que a bactéria corte seu próprio genoma." },

  { id: 1371, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Em epigenética, o sequenciamento com bissulfito de sódio (Bisulfite Sequencing) é o padrão-ouro para detectar metilação do DNA. Qual é a reação química que o bissulfito causa no DNA in vitro?", 
    options: { A: "Converte citosinas metiladas em uracilas", B: "Converte citosinas NÃO metiladas em uracilas, que serão lidas como timinas no sequenciamento", C: "Adiciona grupos metil nas adeninas", D: "Cliva o DNA nas ilhas CpG", E: "Transforma guaninas em adeninas" }, 
    correct: "B", explanation: "Gabarito: B. O bissulfito não consegue alterar citosinas que estão protegidas por um grupo metil. Ele converte apenas as 'desprotegidas' (não metiladas) em Uracila (que a PCR lê como Timina). A bioinformática depois compara com a referência para ver o que mudou." },

  { id: 1372, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Os microRNAs (miRNAs) e siRNAs atuam na interferência de RNA (RNAi) silenciando a expressão gênica. Qual é o complexo proteico efetor que se liga a esses pequenos RNAs para degradar o mRNA alvo?", 
    options: { A: "Spliceossomo", B: "Proteassomo", C: "Complexo RISC (RNA-induced silencing complex)", D: "Exossomo", E: "Telomerase" }, 
    correct: "C", explanation: "Gabarito: C. O complexo RISC usa a pequena fita de RNA como um 'guia' para encontrar o mRNA complementar e 'cortá-lo', impedindo a tradução da proteína." },

  { id: 1373, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "A via de Reparo por Recombinação Homóloga (HR) é ativada para consertar quebras de fita dupla (DSBs) no DNA. Por que essa via é restrita principalmente às fases S e G2 do ciclo celular?", 
    options: { A: "Porque depende da cromátide irmã idêntica recém-sintetizada para ser usada como molde de reparo sem erros", B: "Porque nas outras fases a célula não tem ATP", C: "Porque a luz UV só atua na fase G1", D: "Porque a p53 é degradada na fase M", E: "Porque o núcleo desaparece na fase G1" }, 
    correct: "A", explanation: "Gabarito: A. A Recombinação Homóloga é um reparo livre de erros porque 'copia' a informação da fita irmã perfeita. Ela só pode fazer isso após o DNA ter sido duplicado (fases S/G2)." },

  { id: 1374, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Biópsias líquidas em oncologia utilizam o cfDNA (cell-free DNA). O tamanho característico dos fragmentos de cfDNA circulante em humanos saudáveis ou com câncer é de aproximadamente 166 pb. Esse tamanho reflete:", 
    options: { A: "A quebra mecânica causada pela pressão sanguínea", B: "O tamanho do poro do glóbulo vermelho", C: "A proteção do DNA enrolado em um único nucleossomo (histonas) que resiste à degradação por nucleases sanguíneas", D: "O comprimento dos telômeros tumorais", E: "O tamanho padrão de um éxon humano" }, 
    correct: "C", explanation: "Gabarito: C. O DNA solto no sangue é rapidamente digerido por nucleases. Apenas a parte que estava protegida ('enrolada') no carretel de histonas do nucleossomo (~147 pb + linker) sobrevive, resultando em fragmentos de ~166 pb." },

  // --- LABORATÓRIO: Tecnologias laboratoriais em genômica ---
  { id: 1375, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Para preparar bibliotecas de RNA-Seq visando estudar long non-coding RNAs (lncRNAs) que não possuem cauda poly-A, o método de enriquecimento correto a ser utilizado no laboratório é:", 
    options: { A: "Captura por beads magnéticas Poly-T (Oligo-dT)", B: "Depleção de RNA Ribossômico (Ribo-Zero/Ribo-Depletion)", C: "Extração exclusiva com Fenol-Clorofórmio", D: "Tagmentação com transposase Tn5", E: "Precipitação por Cloreto de Césio" }, 
    correct: "B", explanation: "Gabarito: B. A captura Poly-A só pega RNAs maduros que têm a cauda. Como muitos lncRNAs e RNAs não codificantes não têm cauda poly-A, a solução é fazer o contrário: destruir os RNAs ribossômicos (que são o lixo que não queremos) e sequenciar o que sobrar." },

  { id: 1376, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O ensaio ATAC-seq (Assay for Transposase-Accessible Chromatin) mapeia regiões abertas da cromatina. Ele faz isso utilizando uma enzima mutada que:", 
    options: { A: "Metila o DNA fechado", B: "Corta o DNA usando um RNA guia", C: "Insere adaptadores NGS simultaneamente clivando o DNA apenas nas regiões onde não há nucleossomos (cromatina aberta)", D: "Faz transcrição reversa do RNA acessível", E: "Amplifica os telômeros abertos" }, 
    correct: "C", explanation: "Gabarito: C. A enzima Tn5 Transposase é usada. Ela tenta cortar e colar adaptadores no genoma inteiro, mas só consegue fazer isso nas partes da cromatina que estão 'frouxas' ou abertas." },

  { id: 1377, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A presença de 'Chimeric Reads' (reads quiméricos) em uma biblioteca NGS — onde a primeira metade do read mapeia no cromossomo 1 e a segunda metade no cromossomo 8 — pode ser um artefato técnico causado primariamente por:", 
    options: { A: "Erro na leitura óptica do laser verde", B: "Over-amplification (excesso de ciclos de PCR), favorecendo template-switching", C: "Lavagem incompleta das beads SPRI", D: "Tempo insuficiente de sonicação", E: "Uso de tampão Tris-EDTA na eluição" }, 
    correct: "B", explanation: "Gabarito: B. Se a PCR roda ciclos demais, os primers e dNTPs acabam. Fitas de DNA começam a atuar como primers para outras fitas de DNA não relacionadas (Template Switching), criando quimeras artificiais de laboratório." },

  { id: 1378, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Na extração de DNA genômico humano, a adição de Proteinase K juntamente com SDS (Dodecil Sulfato de Sódio) tem ação sinérgica porque:", 
    options: { A: "O SDS neutraliza o pH para a Proteinase K atuar", B: "O SDS desnatura as proteínas (como histonas e nucleases), desenrolando-as e expondo seus sítios internos para a digestão agressiva pela Proteinase K", C: "O SDS precipita o DNA, enquanto a Proteinase K o mantém solúvel", D: "Ambos inibem a extração de RNA simultaneamente", E: "O SDS funciona como um cofator de magnésio para a enzima" }, 
    correct: "B", explanation: "Gabarito: B. O SDS é um detergente forte que 'abre' as proteínas globulares. A Proteinase K aproveita essa exposição e corta a proteína em pedacinhos (peptídeos), livrando o DNA de histonas e destruindo DNases." },

  { id: 1379, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Durante a validação de um painel NGS (ex: BRCA1/2), uma métrica crítica do controle de qualidade de 'captura' é a 'Off-Target Rate'. O que uma taxa off-target elevada (>30%) indica?", 
    options: { A: "O painel detectou muitas variantes patogênicas fora do gene alvo", B: "As sondas de hibridização falharam em sua especificidade ou a etapa de lavagem (wash) não foi rigorosa o suficiente, retendo sequências de DNA não desejadas", C: "O sequenciador gerou muitas leituras curtas", D: "O DNA extraído continha muito RNA", E: "Os adaptadores Illumina não ligaram nas amostras" }, 
    correct: "B", explanation: "Gabarito: B. Off-target é o 'lixo' da captura. Você desenhou a isca para pegar o gene BRCA, mas a isca grudou em outros locais aleatórios ou a lavagem foi muito fraca e não soltou o DNA indesejado." },

  { id: 1380, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Em tecnologia de Single-Cell RNA-Seq (scRNA-Seq) utilizando sistemas microfluídicos de gotas (ex: 10x Genomics), as contas de gel (Gel Beads) fornecem oligonucleotídeos contendo três componentes fundamentais: um primer poly-T, um UMI e um:", 
    options: { A: "Terminador dideoxinucleotídeo", B: "Promotor de RNA Polimerase T7", C: "Barcode celular único (Cell Barcode), que identifica que todos os transcritos ligados a ele vieram da mesma célula individual encapsulada", D: "Adaptador de ligação cega", E: "Fluoróforo de dupla cor" }, 
    correct: "C", explanation: "Gabarito: C. A mágica do single-cell é que, ao quebrar as gotas e sequenciar tudo junto, o 'Cell Barcode' diz para o computador de qual exata célula microscópica aquele RNA saiu." },

  // --- BIOINFORMÁTICA: Bioinformática e análise genômica ---
  { id: 1381, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "No formato VCF (Variant Call Format), o campo FORMAT geralmente inclui a tag 'PL' (Phred-scaled Genotype Likelihoods). Em um sítio bialélico com valores PL de '400, 0, 50', o genótipo mais provável inferido pelo algoritmo (0/0, 0/1 ou 1/1) é:", 
    options: { A: "Homozigoto para a referência (0/0), pois o primeiro valor é o maior", B: "Heterozigoto (0/1), pois o valor 0 (zero) na segunda posição indica que é o estado de maior probabilidade matemática (menor penalidade Phred)", C: "Homozigoto alternativo (1/1), pois 50 é um valor mediano seguro", D: "Indeterminado, requer BQSR", E: "Um erro técnico do GATK" }, 
    correct: "B", explanation: "Gabarito: B. Na escala Phred, 0 significa 'probabilidade máxima / nenhuma penalidade'. A ordem dos PLs é sempre (Ref/Ref, Ref/Alt, Alt/Alt). O valor 0 na posição do meio indica um heterozigoto claro." },

  { id: 1382, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "A etapa de 'MarkDuplicates' no pipeline bioinformático de NGS não apaga fisicamente o read duplicado do arquivo BAM; em vez disso, ela:", 
    options: { A: "Altera a sequência de bases de 'A' para 'N'", B: "Subtrai 10 pontos de todos os Phred scores do read", C: "Adiciona a flag bitwise 0x400 (decimal 1024) ao read, permitindo que ferramentas downstream ignorem esse read no cálculo de profundidade ou variante", D: "Move o read para o final do arquivo de texto", E: "Gera um alerta pop-up no terminal do Linux" }, 
    correct: "C", explanation: "Gabarito: C. Ferramentas padrão (Picard/GATK) marcam o read com a bit-flag 1024. Ferramentas subsequentes como o HaplotypeCaller vêm essa flag e fingem que o read não existe, poupando dados originais." },

  { id: 1383, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Uma 'Hard Filter' (filtragem rígida manual) de variantes num arquivo VCF usando o GATK JEXL envolve critérios como 'QD < 2.0'. O que o parâmetro QD (Qual by Depth) mede e previne?", 
    options: { A: "Mede o tamanho do fragmento inserido, prevenindo chimeras", B: "Normaliza o score de qualidade da variante pela profundidade (cobertura) total daquele local, penalizando posições que têm 'falsa confiança' gerada apenas pelo acúmulo excessivo de reads ruins", C: "Mede o viés de strand (Fwd vs Rev)", D: "Avalia a posição da variante no fim do read", E: "Conta o número de pares discordantes no BAM" }, 
    correct: "B", explanation: "Gabarito: B. QD evita que uma variante lixo pareça verdadeira só porque teve 5.000 reads amontoados em cima dela. Ele divide a qualidade bruta pela profundidade de reads." },

  // --- BIOINFORMÁTICA: Programação e ferramentas computacionais ---
  { id: 1384, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "Um bioinformata precisa ampliar 100 pares de base (bp) para a esquerda e para a direita de cada região codificante em um arquivo BED, a fim de capturar os sítios de splice. Qual comando do `bedtools` faz essa operação de dilatação de coordenadas de forma segura, respeitando os limites dos cromossomos?", 
    options: { A: "bedtools merge", B: "bedtools subtract", C: "bedtools slop -b 100 -i arquivo.bed -g genoma.genome", D: "bedtools intersect", E: "bedtools getfasta" }, 
    correct: "C", explanation: "Gabarito: C. O comando 'slop' expande as coordenadas. Ao fornecer o arquivo do tamanho do genoma (-g), o comando não estenderá a coordenada além do limite físico do cromossomo (evitando erros de out-of-bounds)." },

  { id: 1385, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "Em comandos Linux bash, o pipe `|` é fundamental na bioinformática. Ao rodar `samtools view arquivo.bam | wc -l`, o que o sistema operacional faz na memória RAM?", 
    options: { A: "Cria um arquivo temporário de 100GB no disco para depois contar", B: "Redireciona a saída padrão (stdout) do primeiro comando diretamente como entrada (stdin) do segundo comando em tempo real, sem gravar no disco", C: "Executa os comandos em servidores separados (clustering)", D: "Ignora o primeiro comando e executa apenas o wc -l", E: "Pausa a execução até o usuário dar enter" }, 
    correct: "B", explanation: "Gabarito: B. Essa é a magia do Pipe. Ele permite processar terabytes de genomas num notebook de 8GB de RAM, pois o dado flui como um cano invisível sem ocupar o disco rígido." },

  { id: 1386, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "Ao executar um container Docker com a ferramenta BWA, o bioinformata usa a flag `-v /home/user/dados:/dados_internos`. Qual o objetivo dessa sintaxe?", 
    options: { A: "Limitar o disco virtual a 10 GB", B: "Apagar os dados internos do BWA", C: "Criar um Bind Mount (Volume), mapeando a pasta física do servidor (/home/user/dados) para dentro do container (/dados_internos), permitindo que o BWA leia os FASTQs reais e salve o resultado no HD", D: "Verificar a versão do Docker instalado na máquina local", E: "Criptografar a pasta do usuário" }, 
    correct: "C", explanation: "Gabarito: C. Containers são caixas fechadas. Sem o 'mount de volume (-v)', a ferramenta lá dentro não enxergaria as suas amostras que estão no servidor físico." },

  // --- BIOINFORMÁTICA: Estatística aplicada à genômica ---
  { id: 1387, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "A Correção de Benjamini-Hochberg em análises genômicas controla a Taxa de Falsas Descobertas (FDR). Conceitualmente, a FDR limita:", 
    options: { A: "A proporção de falsos positivos entre todas as hipóteses testadas", B: "A proporção esperada de falsos positivos entre todos os resultados declarados como significativos", C: "A probabilidade de cometer um erro tipo II (falso negativo)", D: "O valor de R-quadrado em uma regressão linear genômica", E: "A variância explicada no PCA" }, 
    correct: "B", explanation: "Gabarito: B. FDR = 0.05 significa que, se você declarou 100 genes como mutados, você aceita estatisticamente que 5 deles são erros do acaso, mas 95 são descobertas confiáveis." },

  { id: 1388, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "O QQ-plot (Quantile-Quantile plot) é essencial na análise final de um GWAS. Se a linha de pontos do QQ-plot apresentar um desvio abrupto ascendente (para cima da linha de 45 graus) apenas no final da cauda, isso indica:", 
    options: { A: "Viés massivo por estratificação populacional", B: "Presença de SNPs com forte e verdadeira associação biológica ao traço/doença estudado, diferenciando-se do acaso", C: "Erro severo na genotipagem da amostra (batch effect)", D: "Falta de controle de parentesco críptico (cryptic relatedness)", E: "Baixa taxa de cobertura de DNA" }, 
    correct: "B", explanation: "Gabarito: B. Se a linha se descola toda, é problema de estrutura da população (inflação sistêmica). Se a linha segue reta e SÓ a ponta deforma pra cima, você encontrou os genes agressores reais que quebram a hipótese nula." },

  { id: 1389, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "O conceito de 'Heritabilidade no sentido estrito' (Narrow-sense heritability - h²) avalia a proporção da variância fenotípica total explicada apenas pela:", 
    options: { A: "Variância genética devida à dominância e epistasia", B: "Variância ambiental compartilhada", C: "Variância genética aditiva (os efeitos acumulados simples e independentes dos alelos transmissíveis)", D: "Variação de fatores de estilo de vida", E: "Taxa de novas mutações de novo" }, 
    correct: "C", explanation: "Gabarito: C. A heritabilidade restrita (h²) não conta os efeitos complexos de dominância; conta apenas o efeito base aditivo que os pais podem passar com previsibilidade para o filho (útil para cálculo de escores poligenéticos - PRS)." },

  // --- BIOINFORMÁTICA: Saúde pública e epidemiologia ---
  { id: 1390, area: "Bioinformática", subject: "Princípios de saúde pública e epidemiologia genética", 
    text: "Em epidemiologia genética populacional (Genomas SUS), o uso da Randomização Mendeliana (MR) resolve qual grande desafio dos estudos observacionais clássicos em saúde?", 
    options: { A: "A dificuldade em recrutar pacientes idosos", B: "O alto custo dos reagentes biológicos em ensaios multicêntricos", C: "A Confusão (Confounding) e a Causalidade Reversa, pois os genótipos são designados aleatoriamente na meiose antes de exposições ambientais ou surgimento de doenças na vida adulta", D: "Os problemas de falta de assinaturas em TCLEs", E: "A contaminação química dos tubos em zonas rurais" }, 
    correct: "C", explanation: "Gabarito: C. É difícil provar se 'obesidade causa doença X' ou 'a doença X que causou obesidade' num estudo normal. Como os genes para obesidade estavam lá desde bebê, a Randomização Mendeliana prova a direção da causalidade sem erro." },

  { id: 1391, area: "Bioinformática", subject: "Princípios de saúde pública e epidemiologia genética", 
    text: "Na devolução de resultados genômicos num hospital, a diferença entre 'Penetrância' e 'Expressividade' é que:", 
    options: { A: "Penetrância é a gravidade dos sintomas; Expressividade é a porcentagem de curados", B: "Penetrância é a probabilidade de apresentar qualquer sintoma da doença tendo a mutação; Expressividade é a severidade e variação dos sintomas entre os indivíduos afetados", C: "São sinônimos absolutos", D: "Expressividade se aplica apenas a câncer somático", E: "Ambos referem-se à eficácia da droga farmacogenômica" }, 
    correct: "B", explanation: "Gabarito: B. Penetrância: Você tem a mutação, você adoeceu? (Sim/Não). Expressividade: Você adoeceu, mas no seu irmão afetou a perna severamente e em você foi apenas um sintoma brando." },

  // --- BIOINFORMÁTICA: Segurança de dados ---
  { id: 1392, area: "Bioinformática", subject: "Segurança de dados", 
    text: "No contexto da criptografia na segurança de dados genômicos no SUS, a infraestrutura da nuvem aplica criptografia Assimétrica de Chave Pública. Uma característica inerente à criptografia assimétrica é:", 
    options: { A: "A mesma chave fecha e abre o arquivo, exigindo troca insegura de chaves", B: "Uso de uma chave Pública (conhecida por todos) para criptografar o genoma, e uma chave Privada (guardada a sete chaves pelo destinatário) para descriptografar, garantindo sigilo total em rede não confiável", C: "Não requer uso de processamento computacional extra", D: "Uso exclusivo de hashes MD5 irreversíveis", E: "Não pode ser usada via protocolo SSH ou HTTPS" }, 
    correct: "B", explanation: "Gabarito: B. A assimetria do RSA/Curvas Elípticas garante que mesmo que o Hacker tenha a sua chave pública (cadeado), ele não consegue abrir a caixa sem a sua chave privada que nunca transitou pela internet." },

  { id: 1393, area: "Bioinformática", subject: "Segurança de dados", 
    text: "O Hash criptográfico (ex: SHA-256) de um arquivo FASTQ garante um pilar da segurança da informação conhecido como:", 
    options: { A: "Confidencialidade", B: "Disponibilidade", C: "Integridade (garante matematicamente que nem um único 'byte' do genoma foi corrompido ou alterado maliciosamente durante o download ou estocagem)", D: "Anonimização", E: "Não repúdio" }, 
    correct: "C", explanation: "Gabarito: C. Alterar uma única letra 'A' para 'T' num arquivo de 50GB muda completamente o código Hash gerado. É a prova de fogo de que o arquivo chegou 100% perfeito no destino." },

  // --- BIOINFORMÁTICA: Genética de Populações ---
  { id: 1394, area: "Bioinformática", subject: "Genética de populações", 
    text: "O conceito de 'Identidade por Descendência' (Identity by Descent - IBD) é o motor genético por trás do mapeamento de doenças em comunidades rurais do Genomas SUS. IBD refere-se a alelos que:", 
    options: { A: "Sofrem a mesma mutação por acaso em dois indivíduos isolados na África e na Ásia", B: "São idênticos porque ambos os cromossomos foram herdados intactos e copiados fisicamente de um mesmo ancestral comum recente na árvore genealógica familiar", C: "Têm o mesmo efeito fenotípico de olhos azuis", D: "Possuem taxas de Linkage Disequilibrium iguais a zero", E: "São gerados por translocações adquiridas em vida" }, 
    correct: "B", explanation: "Gabarito: B. IBD é quando duas pessoas compartilham o EXATO mesmo pedaço de DNA que veio do avô deles, sem ter quebrado por recombinação. Alelos 'Identity by State' (IBS) são iguais por coincidência cósmica." },

  { id: 1395, area: "Bioinformática", subject: "Genética de populações", 
    text: "No contexto da bioinformática populacional, o Efeito Gargalo (Bottleneck) drástico na história de uma subpopulação afeta qual assinatura nos dados de sequenciamento NGS modernos?", 
    options: { A: "Gera excesso astronômico de heterozigose", B: "Reduz drasticamente a diversidade nucleotídica (Pi) geral, resultando na perda estocástica de variantes raras e possível fixação ao acaso de variantes outrora raras ou deletérias", C: "Restaura os cromossomos X inativados das fêmeas", D: "Inverte as frequências do Equilíbrio de Hardy-Weinberg de dominantes para sempre recessivos", E: "Altera o código universal dos códons mitocondriais na tribo local" }, 
    correct: "B", explanation: "Gabarito: B. Se uma epidemia mata 90% da tribo, a diversidade genética vai para o ralo. A minoria que sobrevive, se cruza entre si, espalhando suas variantes (boas e ruins) para todo o futuro daquela população isolada." },

  // --- BIOINFORMÁTICA: Vocabulários e ETL ---
  { id: 1396, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "Na ontologia HPO (Human Phenotype Ontology), os termos estão organizados como um 'Grafo Acíclico Direcionado' (DAG). O que essa estrutura hierárquica permite na bioinformática clínica de exomas?", 
    options: { A: "Apenas listar sintomas alfabeticamente", B: "Permite que algoritmos façam inferência semântica: se o paciente foi anotado com 'Polidactilia' (HP:0001161), o algoritmo entende automaticamente que ele possui o termo-pai 'Anormalidade do número de dedos', propagando a busca por genes alvo lógicos na árvore", C: "Alinhar sequências de aminoácidos em 3D", D: "Traduzir CID-10 para a língua inglesa em hospitais", E: "Converter arquivos BAM em CRAM logicamente" }, 
    correct: "B", explanation: "Gabarito: B. A IA de priorização de genes (Exomiser) entende que Polidactilia é uma sub-categoria de 'Mão Anormal'. Se a máquina acha um gene focado em deformidade na mão, ela cruza as pontas hierarquicamente com os sintomas do paciente." },

  { id: 1397, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "O formato de arquivo Apache Parquet é cada vez mais usado em Data Lakes genômicos como o do Genomas SUS em substituição aos arquivos CSV e VCF abertos. A vantagem principal estrutural do Parquet no Big Data é:", 
    options: { A: "É um arquivo de áudio para gravar laudos", B: "Ser um formato de armazenamento Colunar altamente comprimido, permitindo que a nuvem consulte apenas colunas específicas (ex: buscar apenas a coluna AF - Allele Frequency) em tempo recorde sem ter que ler o arquivo de dezenas de gigabytes por inteiro na memória", C: "Ser um formato não criptografado baseado em HTML", D: "Conter genomas inteiros executáveis em linguagem C", E: "Ser suportado exclusivamente no Windows antigo" }, 
    correct: "B", explanation: "Gabarito: B. O VCF é baseado em 'Linhas' (Row-based). O Parquet salva as coisas em 'Colunas' (Columnar). Se o pesquisador manda buscar todos com 'ID' tal, o Parquet ignora 90% do arquivo e lê apenas o índice da coluna ID, baixando a conta da Amazon/Google de R$ 10.000 para R$ 10 na query (consulta)." },

  // --- MISTAS EXTRAS DE FIXAÇÃO ---
  { id: 1398, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "A função do fator de iniciação eIF4E em eucariotos é:", 
    options: { A: "Quebrar o DNA em fragmentos", B: "Sintetizar o Primer", C: "Ligar-se especificamente ao Cap 5' do mRNA, recrutando o ribossomo para o início do processo de tradução citoplasmática", D: "Finalizar a cadeia proteica ao ler um Stop Codon", E: "Atuar como Helicase durante a meiose" }, 
    correct: "C", explanation: "Gabarito: C. É a 'mão' da célula que puxa a ponta principal (Cap) da fita de RNA e enfia na engrenagem do ribossomo." },

  { id: 1399, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "O comando Git 'git clone https://github.com/repo.git' tem a função primária de:", 
    options: { A: "Apagar o repositório oficial da internet", B: "Copiar localmente para o seu computador todo o código e o histórico completo de versões de um projeto bioinformático hospedado na nuvem", C: "Enviar a sua atualização local para os servidores no exterior", D: "Renomear as pastas de genoma do seu disco", E: "Comparar dois VCFs em diretórios opostos" }, 
    correct: "B", explanation: "Gabarito: B. Clone significa baixar a cópia matriz (o projeto inteiro) da internet para você editar no seu PC." },

  { id: 1400, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Um técnico derruba uma placa de amostras e fura as duas luvas com cacos de vidro contaminado em sangue na sala BPL 2. Qual o protocolo mandatório e instantâneo da norma de segurança?", 
    options: { A: "Remover as luvas, espremer o ferimento ativamente para sangrar", B: "Remover as luvas, lavar o ferimento abundantemente e de forma suave com água corrente e sabão imediatamente (sem esfregar ou espremer fortemente), e relatar a chefia e CIPA para avaliação do risco e PEP em minutos", C: "Colocar outra luva por cima com hipoclorito", D: "Colar fita adesiva e seguir pipetando", E: "Passar iodopovidona no olho em caso de espirros no local cortado" }, 
    correct: "B", explanation: "Gabarito: B. Regra máxima da NR32: Nunca esprema um acidente percutâneo ou machuque o tecido em pânico, pois isso aumenta o microfluxo vascular absorvendo o patógeno. Lave brandamente, mas com água e sabão exaustivamente." },

  { id: 1401, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "O termo 'Phasing' ou faseamento no contexto de genômica estrutural humana baseia-se em:", 
    options: { A: "Desligar o laser do equipamento fotográfico alternadamente", B: "Alocar e agrupar quais alelos mutados daquele indivíduo foram de fato herdados em conjunto no mesmo cromossomo materno (cis) ou em cromossomos homólogos opostos separados (trans) do pai e mãe", C: "Mudar a temperatura na biblioteca fase por fase", D: "Excluir metilação em genomas tumorais", E: "Sequenciar RNA ao invés de DNA nas fases lunares" }, 
    correct: "B", explanation: "Gabarito: B. Phasing determina a estrutura 'cis/trans'. Duas mutações recessivas na mesma fita (cis) ainda deixam a outra fita do pai intacta (doença não ocorre). Mutações em fitas opostas (trans) causam quebra das duas cópias e disparam a doença do paciente." },

  { id: 1402, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Para mitigar riscos de perda irreversível no sistema Linux corporativo da bioinformática pública, a técnica 'LVM Snapshots' (Logical Volume Manager) permite:", 
    options: { A: "Gerar um espelho de 2 meses congelados da máquina", B: "Gravar uma foto exata e congelada do estado do sistema de arquivos em milissegundos num ponto do tempo, permitindo restaurar o servidor em segundos caso uma atualização de software corrompa os pacotes centrais de análise", C: "Excluir volumes sem senha do HD", D: "Aumentar a velocidade do clock da CPU", E: "Compartilhar dados com a Nuvem da Oracle via token" }, 
    correct: "B", explanation: "Gabarito: B. O Snapshot salva as configurações estruturais do volume do HD sem gastar o peso total. Deu ruim num update e o GATK não abre mais? Você 'reverte' pro momento X do Snapshot e o servidor volta à vida como se nada tivesse ocorrido." },

  { id: 1403, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Os kits de Quantificação KAPA Library Quant (qPCR) utilizam primers específicos que grudam em quais regiões obrigatórias do fragmento de DNA recém saído da bancada?", 
    options: { A: "Direto no centro dos éxons da biblioteca", B: "Nas repetições curtas LINE Alu", C: "Nas pontas universais dos Adaptadores P5 e P7 Illumina anexados artificialmente na fita, quantificando apenas as moléculas prontas fisicamente viáveis para fixação no tapete oligo-receptivo da flowcell de vidro", D: "Nas zonas metiladas ativas em repouso da máquina", E: "Em qualquer trecho randômico gerado pela Tagmentação" }, 
    correct: "C", explanation: "Gabarito: C. Por isso a qPCR é mandatória na excelência: ela ignora o fragmento do DNA do meio e pergunta: Você tem P5 de um lado e P7 do outro? Se sim, você está pronto pro combate fotográfico na máquina de NGS e eu vou te contar como molécula viável." },

  { id: 1404, area: "Bioinformática", subject: "Genética de populações", 
    text: "A assinatura molecular de uma 'Seleção Purificadora (Purifying / Negative Selection)' sobre o genoma no cenário demográfico e evolutivo se manifesta nas coortes WGS como:", 
    options: { A: "Um excesso altíssimo de mutações Nonsense de ganho proteico dominantes na amostra com FAF a 90%", B: "A eliminação ativa e o esgotamento frequencial drástico de alelos ou variantes não-sinônimas deletérias nessas regiões gênicas altamente conservadas da espécie (Genes intolerantes à mutação), atestado em bancos pelo índice pLI ou oE", C: "Multiplicação do gene mutado por CNVs de vantagem biológica de vida alta", D: "Translocações que fundem genes do RNA e telômeros", E: "Uma parada estrita de mitoses nas células B raras" }, 
    correct: "B", explanation: "Gabarito: B. A natureza é implacável. Se a mutação num gene motor bate no embrião e mata o organismo na gestação, ela some do radar genômico (Seleção Purificadora / Limpeza de letalidade)." },

  { id: 1405, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Ao utilizar amostras de uma Criança (Menor de idade incapaz civilmente) em ensaios multicêntricos raros (Trios Clínicos), exige-se do laboratório clínico ético a assinatura formal obrigatória dos pais/responsáveis e do menor em:", 
    options: { A: "Apenas no protocolo do SUS hospitalar", B: "No TCLE (pelos responsáveis) exigindo paralelamente o TALE (Termo de Assentimento Livre e Esclarecido) assinado e acatado conscientemente de forma oral e lúdica ou escrita pela criança ou adolescente com discernimento para aprovação ética na base CONEP de Direitos da subpopulação", C: "Num acordo formal financeiro civil com o promotor", D: "Num recibo digitalizado com selfie simples visual da internet do local", E: "A criança é interditada de pesquisa por lei severa federal" }, 
    correct: "B", explanation: "Gabarito: B. Crianças ou adolescentes não assinam TCLE, assinam TALE (Assentimento). É o pesquisador 'descendo' a uma conversa infantil de confiança dizendo o que farão no braço do voluntário num desenho lúdico sem traumas clínicos da imposição do adulto na sala médica." },

  { id: 1406, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "Em análises multivariáveis no pipeline R, a variável 'P-value Ajustado' (Padj) que deve guiar a decisão final no logaritmo das estatísticas de descobertas verdadeiras é gerada para mitigar fundamentalmente que tipo de erro intrínseco numérico das descobertas nas tabelas:", 
    options: { A: "Erro material nas amostras", B: "A inflação insana do Erro Tipo I (Falso Positivo) que ocorreria naturalmente ao testarmos isoladamente e de forma cega mais de 20.000 genes simultâneos numa loteria estatística randômica com P bruto = 0.05 num t-test simples das variáveis normais do array laboratorial em massa", C: "O erro do sequenciador no Phred -Q30", D: "Erro na RNA polimerase nativa orgânica do modelo humano e vida", E: "Falso Negativos generalizados nos tumores metastáticos em biópsias de base" }, 
    correct: "B", explanation: "Gabarito: B. Estatística dura: se você joga o dado 20 mil vezes seguidas (genes), vários vão cair no número 6 puramente por sorte. Ajustar o p-value endurece o desafio, separando a 'Sorte' do 'Real achado'." },

  { id: 1407, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Ao checar a extração automatizada (Bancada HTS), as luzes 'UV C' instaladas nativamente dentro das baias nos robôs do NGS possuem a finalidade severa noturna de:", 
    options: { A: "Colorir as bibliotecas", B: "Aquecer as beads resfriadas magnéticas", C: "Emitir comprimentos de 254nm estritos que induzem quebras inativas transversais de DNA por fotólise intensa (Crosslinks covalentes T-T), assassinando virtualmente e destruindo qualquer DNA contaminante livre ou amplicon aerossol residual perdido no deck metálico blindando a máquina contra contaminações futuras (Decontamination Cycle)", D: "Polimerizar plástico dos tubos Eppendorfs normais brutos plásticos transparentes e ampolas e vidrarias secas base", E: "Iluminar em cores escuras para o operador ver o nível visual na calha" }, 
    correct: "C", explanation: "Gabarito: C. A luz UV-C é esterilizadora de DNA de nível militar de bancada. Ela derrete as trincas de bases soltas na bancada para que não amplifiquem e sujem sua extração matutina de falsos rastros orgânicos de genomas mortos do ar do hospital laboratório central operante de turnos sequenciais logísticos e limpos operados em escala fabril e de volume intensivo." },

  { id: 1408, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "O modelo de APIs baseadas em REST em bases globais de ontologia usam de verbos HTTP padronizados de transações. Para Extrair Informação ou Enviar um Volume Novo ao site, quais verbos e códigos de erro de dados (HTTP/REST status) são classicamente mapeados respectivamente no Python scripts:", 
    options: { A: "PULL e SAVE. Erros: 101 Null, 102 Void", B: "GET e POST. Erros normais clássicos do REST: 404 (Não Achado) e 500 (Erro Interno Servidor) nas lógicas computacionais puras web nativas globais padronizadas na indústria conectada moderna digital open bases unidas governamentais web de arquitetura modular orientada a nuvem limpa", C: "REQUEST e PUT. Erros: 200 Not File, 900 Crash", D: "SEND e RETRIEVE. Erros 90 e 80", E: "DOWN e UP. Erros Linux nativos: 0 ou 1 bash script norm error log local base file transfer system error nat" }, 
    correct: "B", explanation: "Gabarito: B. Se a sua pipeline Bioinfo consome o banco do ClinVar, ela roda um comando GET (busca o dado). Se a Ensembl API cai, ela devolve um 500 (O servidor do Reino Unido capotou internamente e não processa a ordem de requesta bioinformática atestada pedida no console do analista do país distante sul americano do servidor da nuvem amazon e proxy gateway route)." },

  { id: 1409, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "Qual a aplicabilidade direta da medida estatística Odd Ratios (Razão de Chances) computada nos logs dos exames caso-controle dos bancos populacionais VCF em relação à Doença em andamento clínico nas triagens baseadas em frequências em alelos mutados pontuais no locus biológico e nativo somático?", 
    options: { A: "É o fator base na transcrição do RNA para polipeptídeos nas vias das células somáticas do paciente analisadas sem desvios do desequilíbrio das rotinas citoplasmáticas da clínica primária pura metabólica normal baseada em homeostase estrutural nas organelas sadias de origem nativa normalizada do exame básico local diário em hospitais regionais de rotina unificada das capitais ou regionais do estado em plantão diurno", B: "Expressa em quantas vezes (Multiplicador de risco O.R. > 1.0) o grupo de pacientes que possui o alelo mutante 'A' tem chance clínica de estar na UTI com a doença comparativamente contra os indivíduos nativos 'G' que carecem do alelo e estão expostos ao meio e não doentes na coorte analisada do VCF das ferramentas com limiares rigorosos em R de dados limpos do pipeline de epidemiologia exata analítica centralizada nacional na genômica global", C: "Expressão proteômica isolada pura de tecidos", D: "Frequência de erro da base e da máquina fotográfica no read base dos clusters óticos", E: "Tempo exato da polimerase agir nativa sem proofreading interno da via no genoma circular da mitocôndria nuclear da base purificada e isolada laboratorial molecular de exames clínicos das UPAS no sistema estadual do projeto unificado dos postos rurais primários preventivos dos municípios da união sem recursos limpos de água local pura no exame base central primário atestado" }, 
    correct: "B", explanation: "Gabarito: B. O Odds Ratio te dá a 'Força' da doença. Se o O.R. do gene for 5.0, significa que portar essa variação do VCF quintuplica seu risco bruto de terminar na cama de uma enfermaria comparado a não possuir o defeito na dupla hélice. A pedra angular estatística de estudos caso/controle do genoma e epidemiologia das capitais brasileiras no projeto populacional geral da IA biomédica e do conselho clínico ético das frentes de base dos laboratórios das regionais ativas nos pólos da pesquisa." },

  { id: 1410, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Com o avanço do Genomas SUS e bases governamentais estatais interligadas na nuvem. A governança digital obriga a separação entre DPO, Data Steward e Data Custodian. Do ponto da Infra de TI Bioinformática corporativa no sistema LINUX, quem detém as root keys e implementa a ação dos níveis em chmods lógicos na máquina em permissões restritivas das pastas base Linux na base da proteção em LGPD rigorosas?", 
    options: { A: "O médico geral primário da ponta de diagnóstico clínico dos pacientes do plantão na admissão nativa na capital e hospitais satélites públicos de cidades nas triagens do conselho local nas juntas", B: "O zelador chefe ou assistentes analíticos laboratoriais de pipetas do turno de rotina orgânica diária das extrações com tubos plásticos da biologia no posto regional na área externa periférica e de expurgo BPL orgânico restrito em quarentena central de estoque reagente", C: "Data Custodian (O Engenheiro / Bioinformata ADM Linux da TI de base em Nuvem/Storage do Projeto Federal da instituição), executando mecanicamente os vetos com chaves e chmods nas pastas de WGS, isolando quem pode ver (RWX) ou alterar logs das máquinas e firewalls conforme as regras judiciais emanadas pelo oficial responsável superior (DPO - Data Privacy Officer) do instituto ético legal da governança executiva", D: "A Anvisa local aduaneira nas fronteiras e fiscalizações físicas orgânicas e farmacêuticas reguladoras puras em armazéns físicos mecânicos nos terminais de carga atestada da carga aeroportuária orgânica dos aviões nos blocos do exterior na rede portuária alfandegária livre global restrita de carga com selos", E: "Somente advogados externos da federação num sistema judiciário em fóruns e escritórios desvinculados dos dados de hospitais com planilhas docx textuais assinadas em papéis e cartórios puros de assinaturas de registro analógico cível sem conhecimento do linux do terminal ssh da máquina logada e da rede unificada conectada sem VPN ativada online da área biomédica na gestão" }, 
    correct: "C", explanation: "Gabarito: C. O DPO é o cérebro das leis (Ele manda prender o dado sensível perante a lei e LGPD ética do advogado). O Custodian é a 'Fechadura e a Chave' do sistema Unix. Ele não inventa a lei, ele apenas programa a porta de chaves digitais no código (Chmod 700 / SELinux / Firewalls lógicos da AWS Bucket / Root permissions e IAM) bloqueando ativamente na parte técnica da computação que o técnico intruso e hackings puxem cópias e zips de variantes. É a engrenagem técnica blindando o tesouro ético jurídico." },

  { id: 1411, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Ao rodar ferramentas GATK e SAMtools conjuntas em WES de rotina. Qual anomalia visível estatística primária num VCF indica nativamente com a pior probabilidade gravíssima (Flag de QC crítico negativo de Falso-Positivo biológico estrutural e analítico nas métricas GATK JEXL num PC analista em revisão médica) que a biblioteca do WES (Exoma Captura Híbrida em bancada BPL) sofreu 'Contaminação Extrema de DNA Genômico Exógeno Alienígena Cross-contaminação Intra-Placa Humana' grave?", 
    options: { A: "Cobertura de exoma altíssima batendo picos de 300x normais e limpos sem artefatos e zero perdas no coverage médio nos exon centrais profundos das famílias alvo sem chimeras no relatório base log report no BWA", B: "Padrão de Frequência Alélica da Variante (VAF) estocástico bizarro do paciente. Onde deveria haver clusters puros estatísticos matemáticos de 50% (Heterozigotos naturais de mãe e pai humanos puros) ou 100% homozigose, o genoma VCF explode cheio de 'ruídos' com VAF de 5%, 15%, 8% ao longo das posições normais indicando misturas cromossômicas quiméricas e contaminação cruzada severa intra-tudos entre amostras vizinhas de placa suja do robô que destruiu as amostras clínicas e exige expurgo letal e interrupção técnica do ensaio sem laudo do paciente no posto do estado", C: "Reads não alinhados caindo num pacote extra sem impacto", D: "Um erro no adaptador index", E: "Apenas BQSR normal e equilibrado recalibrado da máquina nativa fotográfica" }, 
    correct: "B", explanation: "Gabarito: B. Se você sequencia o João, você espera achar alelos em 100% ou 50% em células normais de germinativas. Se o robô de extração pingar e 'tossir' 10% do DNA da Maria no tubo do João, o GATK vai achar milhares de SNPs em níveis estranhos e aberrantes (5, 10, 12%). VAF suja é o farol vermelho das contaminações. Joga o experimento e o vidro NGS caríssimo inteiro no lixo biológico. Recoleta e Refaz tudo nas bancadas sem robôs contaminados e ponteiras frouxas na técnica BPL restrita laboratorial rigorosa." },

  { id: 1412, area: "Bioinformática", subject: "Princípios de saúde pública e epidemiologia genética", 
    text: "A implementação clínica no país com Exoma Sequenciado Rapidamente (rWES - Rápido no berço neonatal nas UTIs Pediátricas Neonatais Centrais nas frentes do estado hospitalares em crise na vida de choque térmico letal e base estrutural sintomática). Esse fluxo biológico veloz altera radicalmente qual vetor dos desfechos dos médicos nos ambulatórios?", 
    options: { A: "Cria e desenvolve mutações ativas no recém nato ativamente pelas vacinas de RNA do berçário local ou maternidade central urbana periférica na região isolada dos rincões distantes de estradas sem médicos nos postos em vilas sem internet", B: "Põe fim absoluto imediato ou diminui drasticamente a tenebrosa 'Odisseia Diagnóstica'. Devolve em menos de 5 a 10 dias úteis respostas etiológicas salvadoras e críticas na base molecular que os clínicos gastariam milhões do SUS investigando em baterias de exames invasivos, dores com punções na criança sedada de UTI por anos às cegas de terapias falhas, salvando anos vitais e prevenindo debilidades irreversíveis cerebrais e físicas do desenvolvimento neonatal infantil sem a genômica na capital, garantindo sobrevida de ouro populacional e reduzindo a agonia mental catastrófica das famílias afetadas isoladas e os leitos das verbas médicas", C: "O custo por base é muito mais elevado em 20 anos que em leito", D: "O laudo atrasa para poder revisar em microscópios", E: "A genômica apenas causa o fechamento dos hospitais nos centros sem verba paralela com recursos" }, 
    correct: "B", explanation: "Gabarito: B. O rWES em UTI neonatal ('Exoma a jato') é o salvador de vidas. A criança convulsiona na incubadora, em 7 dias a IA com o Exoma descobre a proteína quebrada na enzima cerebral, o médico dá a vitamina ou droga X alvo direcionada de precisão biológica perfeita e o quadro cessa magicamente num milagre tecnológico translacional. E o estado e os cofres economizam rios de dinheiro em exames inúteis diários e internações eternas cegamente perdidas na escuridão sem diagnóstico molecular primário da causa." },

  { id: 1413, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "Por qual premissa lógica informacional, ao construir tabelas gigantes nos Data Lakes Cloud Genomas das coortes epidemiológicas nacionais, o bioinformata e os engenheiros convertem maciçamente e com rigor os achados fenotípicos médicos em jargões textuais médicos ambíguos do prontuário de papel antigo ('Dedos com anomalia, seis dedos nas juntas extras') para os identificadores alfanuméricos globais HPO nativos baseados em dicionários (ex: HP:0010442)?", 
    options: { A: "Para faturar exames no exterior nas agências federais aduaneiras e lucrar com os impostos hospitalares e farmacêuticos em multinacionais europeias e orientais em euro nas empresas", B: "Normalização Semântica Computável e interoperabilidade. Textos livres em português ou em anotações manuscritas cheias de jargão de médicos diferentes impossibilitam a IA e as queries do BigQuery de casarem os sintomas cruzados com as linhagens de milhões de pacientes para treinar predição mutacional em genomas cruzados; Os IDs universais e padronizados do HPO resolvem barreiras de linguagem semânticas entre cientistas do globo criando uma base computacional limpa perfeitamente entendível e ligada algoritmicamente nas APIs internacionais do consórcio médico na web da genômica do projeto federal e de ponta na internet dos hospitais integrados", C: "Pois a lei censura publicações de médicos", D: "Porque a linguagem escrita corrompe HDs antigos de Linux", E: "Apenas para economizar digitação na tela dos hospitais em sistemas Windows das alas de UTI dos leitos com plantão saturado e lotado da região isolada" }, 
    correct: "B", explanation: "Gabarito: B. Semântica controlada universal (HPO - Human Phenotype Ontology) é o código binário dos sintomas. O robô e a IA de priorização de Genomas de Doenças Raras não sabe o que é 'Menino com cabeção de 6 dedos'. A máquina fala em nós matemáticos lógicos (Macros do HPO de polidactilia cruzados). O HPO é a ponte para a bioinformática agir em dados médicos brutos hospitalares unificados e salvar doentes por estatística globalizada em banco federado e integrado da ciência aberta e de precisão mundial da doença da vida real em humanos e animais nas nuvens das corporações." },

  // ... [Fechamento complementar das demais para fechar as 50 no bloco 8 e 9 já englobados no lote gigante]
  { id: 1414, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "O comando `bcftools merge` é frequentemente usado em estudos de GWAS no SUS para:", 
    options: { A: "Dividir VCFs de grandes famílias", B: "Unir múltiplos VCFs contendo diferentes amostras em um único VCF (Joint VCF) gigante, alinhando as posições, essencial para análises comparativas e de associação entre casos e controles populacionais no PLINK", C: "Apagar variantes raras", D: "Mudar as bases T para U nos arquivos de RNA", E: "Traduzir BCF binário em FastQ" }, 
    correct: "B", explanation: "Gabarito: B. Une todos os 1000 VCFs dos pacientes em uma planilhona só para podermos rodar testes de associação e procurar onde doentes e saudáveis divergem na matriz estatística de risco na computação." },

  { id: 1415, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Um ataque de 'Denial of Service' (DDoS) no portal da web de visualização do Genomas SUS impacta principalmente qual pilar da Segurança da Informação de sistemas públicos federais?", 
    options: { A: "Sigilo, porque rouba os dados", B: "Autoria, pois falsifica as senhas médicas das planilhas em LIMS locais das centrais das bases", C: "Disponibilidade, inundando e asfixiando a largura de banda do servidor ou nuvem do serviço (Overload tráfego lixo bots) com conexões maliciosas, tornando o portal inacessível e inativo e derrubando as análises dos hospitais reais paralisados nas regiões da crise analítica e paralisando servidores no meio", D: "Arquivamento Cold-Storage em geladeiras nas regiões leste", E: "Apenas o uso do monitor da máquina central e no-breaks na bancada principal do CPD da empresa de energia da metrópole das nuvens corporativas e racks de rede" }, 
    correct: "C", explanation: "Gabarito: C. DDoS não rouba nada, apenas 'afoga' o servidor com milhões de acessos falsos simultâneos até queimar a CPU, barrando o médico de acessar o resultado de UTI do seu paciente na plataforma em nuvem do laboratório na hora crítica da vida." },

  { id: 1416, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Em um WES (Exoma) oncológico com Painel de 500 genes focado num tumor metastático sujo, o que a métrica 'On-Target Rate' de 90% atesta visualmente para o avaliador da máquina?", 
    options: { A: "Que 90% do genoma falhou", B: "Que o kit funcionou de modo espetacular e brutal na hibridização molhada; de todos os reads e dados da máquina fotográfica paga da corrida laboratorial, impressionantes 90% alinharam caindo exatamente e em cheio em cima dos 500 genes alvos pagos pra serem lidos nas regiões mapeadas da fita capturada (Evitando ler buracos vazios intrônicos lixos fora do alvo de interesse biológico da pesquisa somática de mutação)", C: "Que o DNA tem 90% de água", D: "Que 90% dos pacientes da máquina não têm tumor oncológico e sim benigno", E: "Que o robô demorou 90 minutos para processar os 500 tubos" }, 
    correct: "B", explanation: "Gabarito: B. Painel Alvo/Exoma é 'pescaria com isca' e anzol. Se On-Target é alto, você pescou só os peixes dourados que queria. Se for baixo, sua rede pegou bota velha (DNA Lixo off-target que não faz parte dos 500 genes do câncer que o médico pediu), torrando dinheiro do SUS na base." },

  { id: 1417, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Ao utilizar a base GnomAD para filtras variantes de um paciente no Genomas SUS, um bioinformata detecta um SNP com 'AF (Allele Frequency) = 0.85' na população global em saúde primária geral não oncológica grave letal dominante. Na análise final diagnóstica médica severa do paciente, este SNP é:", 
    options: { A: "Assassino letal severo atestado no gene", B: "Praticamente e virtualmente descartado e expurgado dos laudos severos e filtrado com impacto e rigor (Filter de frequência). Pois uma Frequência Alélica Populacional massiva altíssima e comum e esmagadora de 85% prova cabalmente de maneira cristalina natural estatística e da seleção que essa base faz parte de um Polimorfismo Benigno comum universal da natureza ou ancestralidade e jamais causaria uma doença Mendeliana letal raríssima na UTI", C: "O laudo confirma a doença terminal em estágio avançado somático irreversível e requer internação no leito do PS imediata de forma ativa invasiva de protocolos no Brasil pela equipe clínica", D: "Um erro da polimerase que requer repetição imediata na máquina fotográfica P5/P7 e no reagente do laboratório analítico em bancada molhada das placas transparentes de 96 poços e luvas do analista no turno final de extrações fenoladas no interior das câmaras", E: "Apenas uma fusão de exon sem sentido lido na base A T G C pela bioinformática paralela da rede com falhas mecânicas no laser" }, 
    correct: "B", explanation: "Gabarito: B. Essa é a regra ouro do Filtro de Doenças Raras. Se a doença é letal infantil e atinge 1 em 1 milhão, o gene causador NUNCA vai estar em 85% de toda a humanidade saudável da rua no banco GnomAD andando no shopping alegre e feliz. O computador ignora tudo que é comum (Frequente Benigno Polimorfismo) e foca no que é bizarro e Único do paciente da doença no VCF (Variantes raras de AF < 0.01)." },

  { id: 1418, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Qual é o principal EPC (Equipamento de Proteção Coletiva) obrigatório num ambiente BPL laboratorial de Extração Pesada orgânica (Fenol/Clorofórmio Extensivo) isolado em salas que não é um EPI pessoal no corpo?", 
    options: { A: "Luvas de malha de aço cortantes de açougueiros", B: "Capela Química com exaustão blindada, jogando o vapor venenoso agressivo tóxico neurológico gasoso do composto ativo diluído das ampolas e das extrações do reagente forte para filtros ambientais industriais no teto isolado longe das mucosas olfativas e brônquios do trabalhador biomédico na área da reação das misturas e decantações aquosas de proteína orgânica letal tóxicas", C: "Chuveiro de água térmica natural", D: "Estufa cega sem vento", E: "Pipeta monocanal comum calibrada" }, 
    correct: "B", explanation: "Gabarito: B. Fenol não se brinca, é neurotóxico respiratório volátil potente, e queima por contato. Abre-se o vidro EXCLUSIVAMENTE sob capela química exaustora forte de ar industrial negativo (Suga a morte do ar para fora da bancada blindada no EPC coletivo da sala com o acrílico isolador no peito)." },

  { id: 1419, area: "Bioinformática", subject: "Genética de populações", 
    text: "O que é 'Efeito Fundador' (Founder Effect) na Genética Populacional isolada do Genoma Brasil (Ex: Isolamentos geográficos do passado ou vilas do sertão de fundação por poucos casais ancestrais fugidos)?", 
    options: { A: "O aumento instantâneo do cérebro na cognição por excessos mitóticos anormais das redes do gene em gerações evolutivas aceleradas de tempo curto", B: "Quando um grupo minúsculo se separa da grande massa populacional fundando uma nova vila isolada no interior em séculos passados. Se um dos 4 colonos for portador de uma mutação letal rara (que na grande cidade sumiria no mar de genes), nessa micro-vila que só cruza entre si, essa mutação explode em frequência absurda dominando todo o pool gênico nativo fechado nas futuras gerações (Aumento brutal artificial de frequências de certas doenças regionais em ROH)", C: "Destruição do gene do câncer em massas ativas por cruzamento homólogo celular", D: "Morte das mitocôndrias pelo sol do hemisfério e falhas na ancestralidade", E: "Apenas mutações criadas hoje por reatores nas indústrias da metrópole das grandes malhas urbanas atuais dos grandes e capitais centros de cimentos ativos governamentais das bases industriais" }, 
    correct: "B", explanation: "Gabarito: B. Típico do Brasil: algumas poucas famílias europeias ou quilombos isolados fundaram povoados isolados nas montanhas e fundões de vale em 1800 e não receberam imigrantes de fora. Mutações deletérias lá cruzaram entre parentes num funil (Bottle Neck e Efeito Fundador Isolado) criando um pico bizarro regional de doenças genéticas recessivas severas no município endêmico que o Genomas SUS tenta mapear para triagem pré-natal focado lá da rede básica PSF." },
  // =========================================================
  // MEGA BLOCO 9 - NÍVEL FÁCIL (LAB E BIOINFO - 50 QUESTÕES)
  // =========================================================

  // --- LABORATÓRIO: Biologia, biologia molecular e genética ---
  { id: 1420, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Qual das seguintes bases nitrogenadas NÃO é encontrada na molécula de DNA, sendo exclusiva do RNA?", 
    options: { A: "Adenina", B: "Timina", C: "Guanina", D: "Uracila", E: "Citosina" }, 
    correct: "D", explanation: "Gabarito: D. A Uracila é a base exclusiva do RNA, substituindo a Timina que é exclusiva do DNA." },

  { id: 1421, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "As células reprodutivas humanas (espermatozoides e óvulos) são chamadas de gametas. Quantos cromossomos existem em um gameta humano normal?", 
    options: { A: "46 cromossomos", B: "23 pares", C: "23 cromossomos", D: "92 cromossomos", E: "44 cromossomos" }, 
    correct: "C", explanation: "Gabarito: C. Os gametas são células haploides (possuem apenas metade do material genético, 23). Ao se unirem na fecundação, formam um bebê com 46 cromossomos." },

  { id: 1422, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "A organela celular conhecida como a 'fábrica de energia' da célula, que inclusive possui seu próprio DNA circular, é:", 
    options: { A: "Complexo de Golgi", B: "Ribossomo", C: "Mitocôndria", D: "Lisossomo", E: "Cloroplasto" }, 
    correct: "C", explanation: "Gabarito: C. A mitocôndria produz ATP (energia) e guarda o DNA mitocondrial (mtDNA), herdado exclusivamente da mãe." },

  { id: 1423, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O que é um 'Cromossomo'?", 
    options: { A: "Uma proteína que digere açúcar", B: "Uma molécula de RNA transportador", C: "Uma longa molécula de DNA altamente condensada e enrolada em proteínas, que guarda a informação genética", D: "Uma parede que protege a célula", E: "Um vírus inativo" }, 
    correct: "C", explanation: "Gabarito: C. O cromossomo é apenas o DNA enovelado de forma extremamente compacta para caber dentro do núcleo da célula." },

  { id: 1424, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "O termo 'Mutação' em biologia significa de forma simples:", 
    options: { A: "O ganho de superpoderes", B: "A morte celular programada", C: "Qualquer alteração ou erro na sequência original de letras (bases) do DNA", D: "A cura de uma doença", E: "O transporte de oxigênio pelo sangue" }, 
    correct: "C", explanation: "Gabarito: C. Mutação é simplesmente um erro de cópia. Uma letra do DNA foi trocada, adicionada ou apagada por acidente." },

  // --- LABORATÓRIO: Tecnologias e Extração ---
  { id: 1425, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Qual é o principal objetivo da técnica de PCR no laboratório?", 
    options: { A: "Matar bactérias da amostra", B: "Cortar o DNA em pedaços pequenos", C: "Fazer milhões de cópias (amplificar) de um trecho específico do DNA para que ele possa ser analisado", D: "Transformar DNA em RNA", E: "Mudar a cor do sangue" }, 
    correct: "C", explanation: "Gabarito: C. A PCR (Reação em Cadeia da Polimerase) é uma máquina de xerox molecular. Ela multiplica o DNA para que possamos enxergá-lo nos exames." },

  { id: 1426, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "A sigla NGS em genômica significa:", 
    options: { A: "Novo Guia de Sangue", B: "Next-Generation Sequencing (Sequenciamento de Nova Geração)", C: "Núcleo de Genética Simples", D: "Normalização de Genes Somáticos", E: "Nível Global de Saúde" }, 
    correct: "B", explanation: "Gabarito: B. NGS é a tecnologia moderna que permite ler milhões de pedaços de DNA ao mesmo tempo." },

  { id: 1427, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "Na extração de DNA, usamos centrífugas. O que uma centrífuga faz?", 
    options: { A: "Aquece a amostra até ferver", B: "Gira em alta velocidade para separar os componentes de uma mistura baseando-se no peso (densidade)", C: "Congela a amostra instantaneamente", D: "Lê o código de barras do tubo", E: "Mede o pH da solução" }, 
    correct: "B", explanation: "Gabarito: B. A centrífuga usa a força centrífuga para jogar o que é pesado para o fundo (pellet) e deixar o que é leve em cima (sobrenadante)." },

  { id: 1428, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "No sequenciamento Illumina, o local de vidro onde as reações químicas acontecem e são fotografadas chama-se:", 
    options: { A: "Tubo Eppendorf", B: "Placa de Petri", C: "Flow Cell (Célula de Fluxo)", D: "Lâmina de microscópio", E: "Pipeta" }, 
    correct: "C", explanation: "Gabarito: C. A Flow Cell é a peça-chave onde o DNA gruda e brilha para a máquina ler as letras." },

  { id: 1429, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O aparelho chamado 'Termociclador' é usado para:", 
    options: { A: "Pesar reagentes", B: "Medir a pureza da água", C: "Realizar a técnica de PCR, alternando temperaturas (esquentar e esfriar) rapidamente", D: "Esterilizar luvas", E: "Fotografar células" }, 
    correct: "C", explanation: "Gabarito: C. Ele realiza os 'ciclos térmicos' necessários para separar e copiar o DNA." },

  // --- LABORATÓRIO: BPL e Biossegurança ---
  { id: 1430, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Qual é a regra mais básica para o descarte de agulhas e seringas usadas (perfurocortantes)?", 
    options: { A: "Jogar no cesto de lixo da pia", B: "Colocar em sacos plásticos brancos", C: "Reencapar a agulha com a mão e jogar no lixo preto", D: "Descartar imediatamente na caixa amarela rígida e resistente a furos (Descarpack), sem reencapar", E: "Derreter a agulha com isqueiro" }, 
    correct: "D", explanation: "Gabarito: D. Agulhas furam sacos e acidentam os lixeiros. Devem ir direto para caixas rígidas de papelão/plástico grosso." },

  { id: 1431, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "A máquina Autoclave é usada no laboratório para:", 
    options: { A: "Gelar amostras a -80ºC", B: "Destilar água da torneira", C: "Esterilizar materiais e matar bactérias usando calor e vapor sob alta pressão", D: "Extrair DNA automaticamente", E: "Medir a quantidade de proteínas" }, 
    correct: "C", explanation: "Gabarito: C. A autoclave é uma panela de pressão gigante que mata qualquer micróbio com vapor fervente." },

  { id: 1432, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "É estritamente PROIBIDO pela biossegurança:", 
    options: { A: "Lavar as mãos antes de ir embora", B: "Usar óculos de proteção", C: "Comer, beber ou armazenar comida dentro da geladeira e bancadas do laboratório", D: "Descartar luvas no lixo infectante", E: "Amarrar o cabelo no laboratório" }, 
    correct: "C", explanation: "Gabarito: C. O laboratório é cheio de venenos e vírus. Comer ali é um risco de intoxicação gravíssimo." },

  { id: 1433, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "O uso de Jaleco dentro do laboratório serve principalmente para:", 
    options: { A: "Identificar quem é o chefe", B: "Proteger a pele e as roupas normais do funcionário contra respingos de sangue e venenos químicos", C: "Esquentar o corpo no ar condicionado", D: "Guardar canetas nos bolsos", E: "Substituir o banho diário" }, 
    correct: "B", explanation: "Gabarito: B. O jaleco é o seu escudo. Se cair ácido, cai no jaleco e não na sua pele." },

  { id: 1434, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Em caso de respingo de produto químico perigoso nos olhos do analista, qual deve ser a PRIMEIRA ação de emergência?", 
    options: { A: "Gritar e correr para a rua", B: "Passar álcool 70% no olho", C: "Ir imediatamente para o 'Lava-olhos' de emergência e lavar com água em abundância por vários minutos", D: "Esfregar com papel toalha seco", E: "Aplicar colírio comum" }, 
    correct: "C", explanation: "Gabarito: C. O lava-olhos dilui o ácido ou base instantaneamente, salvando o funcionário da cegueira." },

  // --- LABORATÓRIO: Ética e Saúde Pública ---
  { id: 1435, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "A sigla TCLE significa:", 
    options: { A: "Termo de Consulta Legal Estatística", B: "Teste de Câncer Leve Especial", C: "Termo de Consentimento Livre e Esclarecido", D: "Tratamento Curativo Limitado Exclusivo", E: "Técnica de Centrifugação Lenta Especial" }, 
    correct: "C", explanation: "Gabarito: C. É o papel assinado pelo paciente provando que ele sabe dos riscos da pesquisa e aceitou de boa vontade." },

  { id: 1436, area: "Laboratório", subject: "Ética em pesquisa e noções de estudos multicêntricos", 
    text: "Um paciente voluntário de uma pesquisa genética decide que não quer mais participar. Ele pode sair da pesquisa?", 
    options: { A: "Não, ele é obrigado a ficar até o fim", B: "Sim, a qualquer momento, sem precisar justificar e sem sofrer prejuízos no seu atendimento médico", C: "Apenas se ele pagar uma multa", D: "Apenas se o juiz liberar", E: "Sim, mas o hospital cancelará suas consultas futuras" }, 
    correct: "B", explanation: "Gabarito: B. O princípio da Autonomia garante que o paciente entra e sai da pesquisa livremente." },

  { id: 1437, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "O que significa a letra 'S' em SUS?", 
    options: { A: "Social", B: "Saúde", C: "Segurança", D: "Sistema", E: "Suporte" }, 
    correct: "B", explanation: "Gabarito: B. Sistema Único de SAÚDE." },

  { id: 1438, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "O princípio do SUS que diz que 'todo e qualquer cidadão tem o direito de ser atendido nos hospitais públicos do Brasil' chama-se:", 
    options: { A: "Equidade", B: "Integralidade", C: "Universalidade", D: "Descentralização", E: "Controle Social" }, 
    correct: "C", explanation: "Gabarito: C. É Universal. Abrange todo mundo, independente de raça, cor ou dinheiro." },

  { id: 1439, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "Vacinação em massa de crianças nos postinhos de saúde é um exemplo clássico de:", 
    options: { A: "Tratamento cirúrgico intensivo", B: "Prevenção Terciária", C: "Prevenção Secundária", D: "Prevenção Primária (evitar que a doença ocorra)", E: "Cuidados paliativos" }, 
    correct: "D", explanation: "Gabarito: D. A vacina é prevenção primária porque age antes do vírus atingir a pessoa." },

  // --- BIOINFORMÁTICA: Formatos e Alinhamento ---
  { id: 1440, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Na bioinformática, o arquivo do tipo FASTA é conhecido por:", 
    options: { A: "Conter imagens de células", B: "Conter apenas as sequências de letras do DNA/RNA (A, C, T, G) e um cabeçalho simples, sem dados de qualidade", C: "Ser um arquivo exclusivo do Microsoft Word", D: "Ser um arquivo de vídeo do sequenciador", E: "Conter as planilhas financeiras do genoma" }, 
    correct: "B", explanation: "Gabarito: B. O FASTA é o texto mais puro do DNA. Ele tem o nome da sequência em cima e as letrinhas embaixo, nada mais." },

  { id: 1441, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Diferente do FASTA, o arquivo FASTQ contém uma linha extra muito importante. Qual é ela?", 
    options: { A: "O nome do paciente e CPF", B: "As pontuações de Qualidade (Phred scores) de cada letra, indicando se a máquina teve certeza ou dúvida ao ler aquela base", C: "A data de validade da amostra", D: "A tradução do RNA para espanhol", E: "Uma imagem em miniatura da célula" }, 
    correct: "B", explanation: "Gabarito: B. O 'Q' significa Qualidade. Ele diz se aquele 'A' é realmente um 'A' ou se foi um borrão na foto da máquina." },

  { id: 1442, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Na análise de genomas, o que é o 'Genoma de Referência'?", 
    options: { A: "O genoma de um paciente doente", B: "O DNA de um rato", C: "Um genoma modelo (um mapa padrão) montado por cientistas, usado como guia para compararmos as mutações do nosso paciente", D: "O manual de instruções da máquina", E: "Um arquivo de música digital" }, 
    correct: "C", explanation: "Gabarito: C. É como a foto na caixa do quebra-cabeça. Usamos o Genoma de Referência para saber onde encaixar os pedacinhos do genoma do nosso paciente." },

  { id: 1443, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Um arquivo VCF (Variant Call Format) é gerado no fim da análise bioinformática. Ele serve para:", 
    options: { A: "Listar todas as mutações/variantes que o paciente tem em relação ao genoma de referência", B: "Mostrar o gráfico financeiro do hospital", C: "Tirar fotos em 3D do DNA", D: "Traduzir textos em inglês", E: "Imprimir a receita médica" }, 
    correct: "A", explanation: "Gabarito: A. VCF é a tabela de Mutações. Ele diz 'No cromossomo 1, deveria ter um A, mas o seu paciente tem um T'." },

  { id: 1444, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "O que o algoritmo BWA faz no pipeline de bioinformática?", 
    options: { A: "Extrai sangue", B: "Mede o peso da máquina", C: "É um Alinhador. Ele pega os reads soltos do paciente e tenta alinhar (colar) exatamente na posição correta do genoma de referência", D: "Edita fotos de células", E: "Desliga o computador" }, 
    correct: "C", explanation: "Gabarito: C. O BWA pega as milhares de pecinhas do DNA do paciente e monta o quebra-cabeça em cima do mapa guia." },

  // --- BIOINFORMÁTICA: Programação Básica ---
  { id: 1445, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "Qual é o Sistema Operacional padrão utilizado por 99% dos servidores e supercomputadores de bioinformática no mundo?", 
    options: { A: "Windows XP", B: "Android", C: "Linux (ambiente Unix)", D: "iOS (Apple)", E: "Windows 98" }, 
    correct: "C", explanation: "Gabarito: C. O Linux, operado por tela preta e comandos em texto (terminal), é a base mundial de servidores por ser rápido, seguro e não gastar energia com telas gráficas bonitas." },

  { id: 1446, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "No terminal Linux, o comando 'ls' serve para:", 
    options: { A: "Apagar o computador inteiro", B: "Tocar um som", C: "Listar os arquivos e pastas que estão dentro de um diretório", D: "Criar uma planilha do Excel", E: "Aumentar a letra" }, 
    correct: "C", explanation: "Gabarito: C. 'ls' vem de LiSt. É como abrir uma pasta no Windows e ver os arquivos lá dentro." },

  { id: 1447, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "Qual destas é uma das linguagens de programação mais populares e essenciais ensinadas na Bioinformática moderna para análise de dados?", 
    options: { A: "Cobol", B: "HTML", C: "Python", D: "Assembly", E: "CSS" }, 
    correct: "C", explanation: "Gabarito: C. Python e R são as duas rainhas da bioinformática. São linguagens limpas, com pacotes poderosos para ler genética." },

  { id: 1448, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "O que a plataforma 'GitHub' faz na rotina de um programador/bioinformata?", 
    options: { A: "Edita vídeos de cirurgia", B: "É uma rede social para salvar, compartilhar e versionar os códigos de programação (scripts) de forma segura na nuvem", C: "Imprime laudos em papel", D: "Sequencia o DNA fisicamente", E: "Limpa vírus do pendrive" }, 
    correct: "B", explanation: "Gabarito: B. O GitHub é o 'Google Drive' dos códigos de computador, permitindo que cientistas trabalhem no mesmo programa juntos." },

  { id: 1449, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "No terminal Linux, o comando 'cat arquivo.txt' faz o quê?", 
    options: { A: "Insere uma foto de um gato", B: "Exclui o arquivo", C: "Imprime (mostra) todo o texto que está dentro do arquivo na sua tela", D: "Muda o nome do arquivo", E: "Liga a internet" }, 
    correct: "C", explanation: "Gabarito: C. Cat (concatenate) apenas pega o texto do bloco de notas e vomita na sua tela preta para você ler rapidamente." },

  // --- BIOINFORMÁTICA: Estatística e Genética de Populações Básica ---
  { id: 1450, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "Na estatística básica, um 'Valor-p' (p-value) MENOR que 0.05 (p < 0,05) indica geralmente que:", 
    options: { A: "A pesquisa foi um fracasso", B: "O resultado é lixo", C: "O resultado é 'estatisticamente significativo', ou seja, há pouca chance de o achado ter sido pura sorte ou coincidência", D: "Todos os pacientes morrerão", E: "A mutação é inofensiva" }, 
    correct: "C", explanation: "Gabarito: C. P < 0.05 é o padrão universal para dizer: 'Opa, a diferença entre o doente e o saudável aqui é real, não foi por acaso'." },

  { id: 1451, area: "Bioinformática", subject: "Genética de populações", 
    text: "Em genética de populações, o que é 'Ancestralidade'?", 
    options: { A: "Apenas a cor da pele atual da pessoa", B: "O estudo de quantas pessoas vivem num país hoje", C: "A origem geográfica histórica dos genes de uma pessoa (ex: raízes africanas, indígenas, europeias) passadas de geração em geração", D: "O valor em dinheiro herdado", E: "O estudo de animais de fazenda" }, 
    correct: "C", explanation: "Gabarito: C. Ancestralidade genômica nos conta de qual continente os nossos antepassados vieram há centenas ou milhares de anos." },

  { id: 1452, area: "Bioinformática", subject: "Genética de populações", 
    text: "O 'Efeito Fundador' ocorre quando:", 
    options: { A: "Um hospital é fundado", B: "Um pequeno grupo de indivíduos se separa para fundar uma nova vila/população, levando consigo apenas uma amostra reduzida da diversidade genética original", C: "Os pesquisadores acham uma cura nova", D: "A população cresce para bilhões de pessoas", E: "A pessoa funda uma empresa" }, 
    correct: "B", explanation: "Gabarito: B. Ao fundar uma ilha com apenas 5 casais, os filhos terão apenas as genéticas daqueles 10 indivíduos, perdendo a diversidade do resto do mundo." },

  { id: 1453, area: "Bioinformática", subject: "Genética de populações", 
    text: "Consanguinidade significa o quê em termos populacionais?", 
    options: { A: "Doar sangue no posto de saúde", B: "Cruzamento/Reprodução entre indivíduos com parentesco muito próximo (ex: primos de 1º grau), o que aumenta a chance de doenças genéticas raras aparecerem", C: "Troca de sangue no hospital", D: "Inimigos morando perto", E: "Ser do mesmo tipo sanguíneo O negativo" }, 
    correct: "B", explanation: "Gabarito: B. Cruza consanguínea soma os genes recessivos ruins que estavam escondidos na família, fazendo a doença eclodir nos filhos." },

  { id: 1454, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "O que a sigla GWAS (Genome-Wide Association Study) busca fazer?", 
    options: { A: "Curar o câncer de imediato", B: "Pesquisar dezenas de milhares de pacientes para descobrir quais letras do DNA (SNPs) estão 'associadas' ao risco de ter uma doença complexa (como Diabetes ou Alzheimer)", C: "Imprimir laudos rápidos", D: "Pesar o paciente", E: "Medir a pressão arterial" }, 
    correct: "B", explanation: "Gabarito: B. Estudo de Associação. Ele cruza os dados do mapa genético de pessoas sadias e doentes e procura onde está a diferença que causa o risco." },

  // --- BIOINFORMÁTICA: Segurança e Saúde Pública Básica ---
  { id: 1455, area: "Bioinformática", subject: "Segurança de dados", 
    text: "No Brasil, a Lei que obriga hospitais e pesquisadores a protegerem rigorosamente os dados pessoais e os exames genéticos dos pacientes na internet chama-se:", 
    options: { A: "CLT (Lei do Trabalho)", B: "Código de Trânsito", C: "LGPD (Lei Geral de Proteção de Dados)", D: "ECA (Estatuto da Criança)", E: "Lei da Informática Livre" }, 
    correct: "C", explanation: "Gabarito: C. A LGPD pune com multas gigantescas empresas que deixam vazar resultados de exames e CPFs de clientes na web." },

  { id: 1456, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Qual é a regra mais elementar e inquebrável de segurança digital (Compliance) no laboratório para um analista bioinformata?", 
    options: { A: "Compartilhar sua senha de acesso do banco de dados com os colegas para facilitar o plantão", B: "Usar a senha '123456'", C: "Nunca compartilhar suas senhas de sistema com absolutamente ninguém, pois o seu login é sua assinatura legal do que foi modificado no paciente", D: "Deixar o computador desbloqueado ao ir almoçar", E: "Guardar senhas em post-it no monitor" }, 
    correct: "C", explanation: "Gabarito: C. Se o colega logado na sua conta deletar o resultado de um tumor, a polícia baterá na sua porta. Senha não se compartilha, nunca." },

  { id: 1457, area: "Bioinformática", subject: "Princípios de saúde pública e epidemiologia genética", 
    text: "O que é Farmacogenômica?", 
    options: { A: "A criação de farmácias em bairros rurais", B: "O estudo de como o DNA da pessoa afeta o modo como ela responde a certos remédios (alguns curam, outros podem dar alergias ou não fazer efeito)", C: "O estudo exclusivo de plantas curativas", D: "O processo de venda de remédios caros", E: "A mistura de remédios em copo" }, 
    correct: "B", explanation: "Gabarito: B. A Farmacogenômica diz: 'Não dê o remédio X para o João, pois a genética dele avisa que ele sofrerá efeitos colaterais mortais. Dê o remédio Y'." },

  { id: 1458, area: "Bioinformática", subject: "Princípios de saúde pública e epidemiologia genética", 
    text: "O 'Teste do Pezinho' no Brasil ajuda a diagnosticar precocemente o quê?", 
    options: { A: "Se o pé do bebê tem fraturas", B: "Se a criança terá cabelos lisos", C: "Doenças genéticas e metabólicas graves logo nos primeiros dias de vida, permitindo o tratamento antes que as sequelas comecem", D: "Qual será a altura do adulto", E: "Cáries dentárias" }, 
    correct: "C", explanation: "Gabarito: C. É o maior programa de rastreio genético populacional primário. Um furo no calcanhar acha doenças que, se tratadas no mês 1, salvam a criança do retardo mental." },

  { id: 1459, area: "Bioinformática", subject: "Segurança de dados", 
    text: "O termo 'Cloud Computing' (Computação em Nuvem) na bioinformática se refere a:", 
    options: { A: "Trabalhar apenas em dias chuvosos", B: "Usar computadores voadores", C: "Alugar servidores e supercomputadores potentes de empresas grandes (como Google ou Amazon) pela internet, em vez de comprar um servidor físico enorme para o hospital", D: "Criar uma fumaça na sala de servidores", E: "Perder todos os dados ao desligar" }, 
    correct: "C", explanation: "Gabarito: C. Computação na Nuvem é usar um PC fortíssimo que fica num galpão da Amazon no exterior para rodar suas análises genéticas aqui do Brasil, via internet." },

  // --- BIOINFORMÁTICA: Mistura de ETL, Vocabulários e Populações Básicas ---
  { id: 1460, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "A sigla 'ETL' no banco de dados do Ministério da Saúde significa:", 
    options: { A: "Entender, Trabalhar, Limpar", B: "Extrair (dados do hospital), Transformar (limpar e organizar a bagunça) e Load / Carregar (salvar no banco central limpo)", C: "Eliminar Todas as Leis", D: "Escrever Textos Longos", E: "Enviar Tudo Longe" }, 
    correct: "B", explanation: "Gabarito: B. ETL é o trabalho de arrumar a casa digital. Você pega os dados caóticos dos médicos, formata direitinho (Transform) e joga na nuvem oficial (Load)." },

  { id: 1461, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "Por que usamos dicionários universais de doenças, como a CID-10 (Classificação Internacional de Doenças), em sistemas de saúde?", 
    options: { A: "Para dificultar a vida do médico", B: "Para que o governo cobre taxas", C: "Para padronizar a linguagem no mundo todo. Assim, 'Ataque Cardíaco' e 'Infarto' recebem o mesmo código, e o computador consegue contar quantos casos ocorreram no país sem se confundir com nomes diferentes", D: "Para escrever receitas maiores", E: "Apenas para dar nomes longos" }, 
    correct: "C", explanation: "Gabarito: C. A padronização de vocabulário permite que a Inteligência Artificial e a estatística do Brasil entendam do que o médico japonês ou paulista estão falando com a mesma linguagem (códigos)." },

  { id: 1462, area: "Bioinformática", subject: "Princípios de saúde pública e epidemiologia genética", 
    text: "O que caracteriza uma 'Doença Rara' em termos populacionais?", 
    options: { A: "Uma doença que atinge 50% das pessoas", B: "Uma gripe comum forte", C: "Uma condição que afeta um número muito pequeno de pessoas na população (ex: 1 caso a cada 2000 pessoas), dificultando o diagnóstico comum", D: "Uma doença que só dá em idosos", E: "Uma alergia de pele passageira" }, 
    correct: "C", explanation: "Gabarito: C. Doenças Raras são o alvo principal do Sequenciamento (WES/WGS). Elas são raras isoladamente, mas somadas afetam milhares de famílias." },

  { id: 1463, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "Em um exame de triagem preventiva, o que é um 'Falso Positivo'?", 
    options: { A: "A pessoa está doente e o exame acertou", B: "O exame diz que a pessoa TEM a doença, mas na verdade a pessoa está totalmente SAUDÁVEL", C: "A pessoa está doente, mas o exame não detectou nada", D: "A máquina do exame queimou", E: "A pessoa está saudável e o exame atestou saudável" }, 
    correct: "B", explanation: "Gabarito: B. Falso Positivo é o 'alarme falso'. Gera pânico desnecessário e gasto médico com cirurgias em alguém que não tem a doença." },

  { id: 1464, area: "Laboratório", subject: "Noções de saúde pública e ética em pesquisa", 
    text: "Em um exame laboratorial, o que é um 'Falso Negativo'?", 
    options: { A: "O exame aponta saúde e o paciente está de fato sadio", B: "O exame avisa que o paciente tem câncer corretamente", C: "A máquina quebrou antes de emitir o laudo", D: "O exame diz que está TUDO BEM, mas na verdade o paciente ESTÁ DOENTE, mandando uma pessoa com tumor para casa achando que está curada", E: "O papel do laudo rasgou" }, 
    correct: "D", explanation: "Gabarito: D. Falso negativo é um erro fatal na saúde pública. O paciente sai feliz achando que está saudável e a doença continua evoluindo sem tratamento." },

  { id: 1465, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "O que é um 'Script' no jargão da bioinformática?", 
    options: { A: "O nome de uma proteína extraída", B: "A marca do tubo de ensaio", C: "Um arquivo de texto contendo linhas de comandos/códigos em sequência que o computador lê e executa automaticamente de cima a baixo", D: "O uniforme da limpeza", E: "O modelo de impressora" }, 
    correct: "C", explanation: "Gabarito: C. Fazer um script é escrever a 'receita' de comandos pro computador fazer todo o seu trabalho chato automaticamente enquanto você toma café." },

  { id: 1466, area: "Bioinformática", subject: "Genética de populações", 
    text: "Por que as pessoas de diferentes partes do mundo têm características visíveis diferentes, como a cor da pele ou intolerância à lactose?", 
    options: { A: "Porque não pertencem à mesma espécie", B: "Porque o clima do ano em que nasceram altera o DNA na hora do parto", C: "Porque as populações se adaptaram gradualmente aos diferentes ambientes e dietas em seus continentes ao longo de milhares de anos (Seleção Natural e Adaptação Local)", D: "Porque comeram muito açúcar na infância", E: "Porque pintaram o corpo artificialmente no passado e ficou fixo" }, 
    correct: "C", explanation: "Gabarito: C. A seleção natural escolheu os genes que melhor se adaptavam ao sol extremo da África ou ao frio extremo da Europa, moldando o nosso genoma visual ao longo das eras." },

  { id: 1467, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Na regra de Backup 3-2-1 da TI hospitalar, o número '1' significa que:", 
    options: { A: "Você deve salvar 1 vez por ano", B: "Você pode perder 1 HD sem problema", C: "Pelo menos 1 das cópias de segurança do seu genoma deve ficar guardada FORA do hospital (Off-site, ex: num servidor em outra cidade ou estado) para proteger contra incêndios locais", D: "Devemos ter apenas 1 arquivo no total", E: "Apenas 1 funcionário deve saber a senha" }, 
    correct: "C", explanation: "Gabarito: C. 3 Cópias no total, 2 mídias diferentes, e 1 cópia bem longe (Off-site). Se o seu hospital inteiro pegar fogo, a cópia '1' que estava lá na nuvem de outro estado salvará todo mundo." },

  { id: 1468, area: "Bioinformática", subject: "Segurança de dados", 
    text: "O que significa 'Criptografia' de arquivos na genômica?", 
    options: { A: "Colorir o DNA em azul", B: "Traduzir o resultado pro francês", C: "Baralhar e codificar (trancar) o arquivo VCF com fórmulas matemáticas complexas, de modo que apenas quem tenha a 'chave' (senha especial) consiga ler as letras originais", D: "Apagar os dados de quem já faleceu", E: "Imprimir em folhas seladas com cera" }, 
    correct: "C", explanation: "Gabarito: C. Criptografia é o cadeado digital. Se um hacker furtar o seu arquivo, ele vai abrir e ver bilhões de números aleatórios absurdos, e não o genoma ou o nome do seu paciente." },

  { id: 1469, area: "Laboratório", subject: "Biologia, biologia molecular e genética", 
    text: "Em relação ao nosso genoma humano de mais de 3 bilhões de letras, a parte que REALMENTE codifica as receitas (éxons) para fazer proteínas é de aproximadamente:", 
    options: { A: "100%", B: "50%", C: "Cerca de 1,5% a 2% (O Exoma)", D: "90%", E: "Menos de 0,01%" }, 
    correct: "C", explanation: "Gabarito: C. Apesar de ser gigante, apenas 2% do nosso DNA de fato produz as peças da nossa vida. O restante são peças de controle estrutural, ligantes ou 'DNA antigo' residual." },
  // =========================================================
  // MEGA BLOCO 11 - FÁCIL/MÉDIA - BIOINFORMÁTICA E ESTATÍSTICA (50 Qs)
  // =========================================================

  // --- Bioinformática e análise genômica ---
  { id: 1520, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "O que representa o 'Genoma de Referência' humano (como as versões GRCh37 ou GRCh38) na bioinformática?", 
    options: { A: "É o DNA de um único paciente perfeitamente saudável", B: "É o DNA extraído de chimpanzés", C: "É um mapa modelo, um consenso criado a partir de vários doadores, usado como 'gabarito' para comparar e encontrar mutações em nossos pacientes", D: "É um banco de dados de vírus", E: "É um software de alinhamento" }, 
    correct: "C", explanation: "Gabarito: C. O genoma de referência é como a foto na caixa de um quebra-cabeças. Ele nos guia para saber onde cada read do nosso paciente deve se encaixar e o que está diferente." },

  { id: 1521, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "A etapa de 'Variant Calling' (Chamada de Variantes) em um pipeline NGS tem qual objetivo principal?", 
    options: { A: "Colorir os cromossomos", B: "Descobrir as diferenças (mutações, inserções, deleções) entre o DNA sequenciado do paciente e o genoma de referência", C: "Limpar o computador de vírus", D: "Medir a quantidade de proteínas do sangue", E: "Copiar arquivos para um pendrive" }, 
    correct: "B", explanation: "Gabarito: B. Variant Calling é a fase onde o computador vasculha o alinhamento e diz: 'Aqui o paciente tem um T, mas a referência dizia que era para ter um G'." },

  { id: 1522, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Qual é a principal diferença entre um arquivo SAM e um arquivo BAM?", 
    options: { A: "Nenhuma, são de fabricantes diferentes", B: "SAM é exclusivo para RNA, BAM para DNA", C: "SAM é um arquivo de texto legível por humanos, enquanto o BAM é a versão binária (comprimida) do SAM, economizando muito espaço no HD", D: "SAM contém imagens, BAM contém textos", E: "BAM não guarda scores de qualidade" }, 
    correct: "C", explanation: "Gabarito: C. BAM significa 'Binary Alignment Map'. Trabalhar com SAM (texto) gasta centenas de gigabytes. O BAM é a versão compactada para o computador ler mais rápido." },

  { id: 1523, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "O IGV (Integrative Genomics Viewer) é uma ferramenta gráfica muito famosa na bioinformática. Para que ele serve?", 
    options: { A: "Para montar genomas de vírus", B: "Para abrir uma janela visual interativa onde o cientista pode enxergar 'com os próprios olhos' os reads de DNA do paciente empilhados em cima do genoma de referência", C: "Para escrever códigos em Python", D: "Para fazer planilhas financeiras de custos de NGS", E: "Para desenhar gráficos em 3D de proteínas" }, 
    correct: "B", explanation: "Gabarito: B. O IGV atua como um 'microscópio virtual' do genoma. Ele permite que o biomédico ou médico visualize a mutação diretamente na tela." },

  { id: 1524, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Na sigla de mutações, a diferença entre um SNP (ou SNV) e um InDel é que:", 
    options: { A: "SNP é vírus, InDel é bactéria", B: "SNP afeta RNA, InDel afeta DNA", C: "SNP é a troca de apenas UMA letra (ex: A por G); InDel é a Inserção ou Deleção de uma ou mais letras no DNA", D: "SNP é sempre mortal, InDel é sempre benigno", E: "Não há diferença na contagem de bases" }, 
    correct: "C", explanation: "Gabarito: C. SNP (Polimorfismo de Único Nucleotídeo) mexe com apenas uma posição. InDel (Insertion/Deletion) adiciona ou remove blocos de letras do código." },

  { id: 1525, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "No arquivo VCF de um paciente, o campo 'REF' mostra a letra 'A' e o campo 'ALT' mostra a letra 'C'. O que isso significa?", 
    options: { A: "O genoma normal humano tem 'C' e o paciente tem 'A'", B: "O genoma de referência humano possui a letra 'A' naquela posição, mas o genoma do paciente sofreu mutação e apresenta a letra 'C'", C: "A máquina quebrou a base 'A'", D: "O paciente não tem nenhuma das letras", E: "A letra A sumiu e nada entrou no lugar" }, 
    correct: "B", explanation: "Gabarito: B. REF = Referência (o normal da humanidade). ALT = Alternativo (A mutação detectada no seu paciente)." },

  { id: 1526, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "O que a 'Anotação Funcional' (usando ferramentas como SnpEff ou VEP) adiciona ao arquivo de variantes (VCF) do paciente?", 
    options: { A: "Remove os vírus do arquivo", B: "Prevê o efeito biológico daquela mutação, informando por exemplo se a troca da letra altera uma proteína, quebra o gene ou se é uma mutação silenciosa e inofensiva", C: "Calcula a idade do paciente", D: "Criptografa o arquivo com senha", E: "Muda o genoma de referência" }, 
    correct: "B", explanation: "Gabarito: B. Ter uma lista de letras mutadas não ajuda o médico. A anotação traduz isso e diz: 'Essa mutação G>C está no gene TP53 e destrói a proteína do câncer'." },

  { id: 1527, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "O que significa dizer que um sequenciamento atingiu uma 'Profundidade de Cobertura de 30x' (30x Depth of Coverage)?", 
    options: { A: "A máquina demorou 30 vezes mais para ler", B: "O genoma inteiro tem 30 cromossomos", C: "Na média, cada letra do genoma do paciente foi lida e confirmada 30 vezes por reads diferentes do sequenciador", D: "Foram testados 30 pacientes de uma vez", E: "Apenas 30% do genoma foi lido" }, 
    correct: "C", explanation: "Gabarito: C. A 'Profundidade' é a nossa prova real. Se uma letra é fotografada 30 vezes e nas 30 vezes ela é um 'T', temos total certeza de que não foi um erro aleatório da câmera." },

  { id: 1528, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Em um alinhamento genômico, o que a palavra 'Mismatch' (desemparelhamento) indica?", 
    options: { A: "O computador desligou no meio", B: "Uma falha de internet no cluster", C: "Uma posição onde a letra do read do paciente NÃO BATE (não é igual) à letra do genoma de referência", D: "Um read que colou perfeitamente 100% no alvo", E: "A ausência total de RNA na célula" }, 
    correct: "C", explanation: "Gabarito: C. Se o gabarito era 'A' e a peça do paciente é 'T', eles não emparelham perfeitamente, ocorrendo um 'mismatch'." },

  { id: 1529, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Qual é a função básica da ferramenta de bioinformática chamada 'FastQC'?", 
    options: { A: "Cortar adaptadores fora", B: "Fazer o download de genomas na web", C: "Analisar o arquivo FASTQ recém-saído do sequenciador e gerar relatórios visuais sobre a qualidade das leituras, informando se a corrida foi boa ou se conteve erros graves de química na máquina", D: "Apagar dados duplicados", E: "Montar árvores genealógicas" }, 
    correct: "C", explanation: "Gabarito: C. O FastQC é o 'controle de qualidade' primário. Ele mostra gráficos que acusam se a luz do laser enfraqueceu ou se os adaptadores poluiram a amostra." },

  { id: 1530, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Qual a diferença biológica entre sequenciar o 'Genoma Inteiro' (WGS) e sequenciar o 'Transcriptoma' (RNA-Seq)?", 
    options: { A: "Nenhuma, os dois usam RNA", B: "WGS analisa o DNA estático que a pessoa tem desde o nascimento; O Transcriptoma lê o RNA, mostrando quais genes estão de fato 'ligados' e ativos produzindo proteínas naquele exato momento do tecido", C: "WGS só acha doenças crônicas", D: "Transcriptoma só funciona em vegetais", E: "O Transcriptoma mapeia as mitocôndrias" }, 
    correct: "B", explanation: "Gabarito: B. O DNA é o livro de receitas fechado. O RNA-Seq nos mostra quais receitas o cozinheiro está ativamente lendo e usando para fazer comida naquele dia." },

  { id: 1531, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "O formato de arquivo BED é muito utilizado na bioinformática (ex: bedtools). Ele serve primariamente para:", 
    options: { A: "Armazenar fotos microscópicas", B: "Armazenar a qualidade das bases Phed", C: "Guardar as coordenadas de início e fim de regiões de interesse no genoma, como os limites de um éxon ou de um gene, funcionando como um 'marcador de texto' em coordenadas numéricas", D: "Traduzir espanhol para inglês", E: "Fazer planilhas contábeis" }, 
    correct: "C", explanation: "Gabarito: C. O arquivo BED tem geralmente 3 colunas: O cromossomo, o ponto inicial e o ponto final. Serve para o computador saber exatamente onde ele deve recortar os dados." },

  { id: 1532, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Em Bioinformática, o termo 'De Novo Assembly' (Montagem de Novo) se refere a:", 
    options: { A: "Atualizar o software para uma versão nova", B: "Montar o genoma de um organismo apenas juntando as pecinhas curtas do sequenciador, sem utilizar nenhum genoma de referência guia por trás (como montar um quebra-cabeças sem a imagem da caixa)", C: "Refazer uma PCR que deu errado", D: "Comprar um computador zero na caixa", E: "Substituir o DNA por RNA" }, 
    correct: "B", explanation: "Gabarito: B. Muito usado quando descobrimos uma espécie nova de bactéria ou bicho que a ciência não conhecia, obrigando a bioinformática a reconstruir a fita de DNA do zero." },

  { id: 1533, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "No VCF, o genótipo '0/1' e o genótipo '1/1' indicam, respectivamente, o estado de uma mutação no paciente. O que eles significam?", 
    options: { A: "Menino e Menina", B: "0/1 indica mutação no X, 1/1 mutação no Y", C: "0/1 indica que o paciente é Heterozigoto (tem uma cópia normal e uma mutada); 1/1 indica Homozigoto Mutado (as duas cópias do DNA têm a mutação)", D: "0/1 é sadio e 1/1 é morto", E: "0/1 é tumor benigno, 1/1 maligno" }, 
    correct: "C", explanation: "Gabarito: C. O zero (0) representa a versão normal (Referência). O um (1) representa a mutação (Alternativo). Logo, 0/1 é um portador heterozigoto." },

  { id: 1534, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "Por que as variantes de DNA (Mutações) encontradas no genoma de um tumor raramente são passadas para os filhos desse paciente?", 
    options: { A: "Porque tumores não têm DNA", B: "Porque são mutações SOMÁTICAS (ocorreram em células de órgãos do corpo após o nascimento), e não mutações GERMINATIVAS (presentes no óvulo/espermatozoide)", C: "Porque o DNA da criança se limpa sozinho", D: "Porque mutações não passam em humanos", E: "Porque o RNA protege o feto" }, 
    correct: "B", explanation: "Gabarito: B. O câncer de pulmão gerado pelo fumo altera as células do pulmão (somáticas). Ele não afeta o espermatozoide. Apenas mutações germinativas passam de pai para filho." },

  { id: 1535, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "O que a sigla 'MAF' (Minor Allele Frequency) representa nos bancos de dados genômicos populacionais?", 
    options: { A: "Maior Afinidade Frequente", B: "A frequência com que o segundo alelo menos comum (a mutação rara) aparece na população, ajudando a filtrar doenças raras genéticas", C: "O valor em dinheiro do gene", D: "A quantidade de Macs no servidor", E: "Mutação Acelerada Falha" }, 
    correct: "B", explanation: "Gabarito: B. Se a MAF for de 0.001 (0,1%), significa que esse alelo é muito raro e pode ser forte candidato a causar uma doença rara mendeliana." },

  // --- Programação e ferramentas computacionais ---
  { id: 1536, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "No terminal do sistema Linux, o que o comando 'cd' (Change Directory) faz?", 
    options: { A: "Toca um CD-ROM", B: "Deleta a pasta", C: "Serve para o usuário 'entrar' ou 'sair' de uma pasta (navegar entre os diretórios do computador)", D: "Compacta o arquivo", E: "Mostra as horas do PC" }, 
    correct: "C", explanation: "Gabarito: C. O comando 'cd' equivale a você clicar duas vezes numa pasta do Windows para entrar nela na tela de texto preta do Linux." },

  { id: 1537, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "Qual destas linguagens de programação foi criada por estatísticos, para estatísticos, e é hoje o padrão ouro em Bioinformática para desenhar gráficos e análises matemáticas?", 
    options: { A: "HTML", B: "CSS", C: "A linguagem 'R'", D: "C++", E: "Java" }, 
    correct: "C", explanation: "Gabarito: C. O 'R' (junto com o Bioconductor) é a ferramenta suprema para RNA-Seq, Microarrays e plotagem de gráficos como Vulcão e PCA na academia de biologia." },

  { id: 1538, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "No Linux, o comando 'grep' tem uma função incrivelmente útil para pesquisar dentro de arquivos de DNA gigantescos. Ele serve para:", 
    options: { A: "Jogar o arquivo no lixo", B: "Imprimir na tela apenas as linhas que contêm uma palavra ou sequência de letras específicas que o usuário mandou procurar (ex: grep 'ATCG' genoma.txt)", C: "Traduzir o DNA", D: "Descompactar arquivos .zip", E: "Mostrar as configurações de rede" }, 
    correct: "B", explanation: "Gabarito: B. É o 'Ctrl+F' turbinado do Linux. O grep vasculha gigabytes e te devolve só o que te interessa." },

  { id: 1539, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "O que um bioinformata quer dizer quando fala sobre 'Pipeline' de análise?", 
    options: { A: "A marca do cano de água da pia", B: "Um fluxo de trabalho automatizado (vários programas rodando um após o outro de forma sequencial), onde a saída de uma análise vira a entrada da próxima até gerar o laudo final", C: "Um tipo de impressora", D: "Uma nova linguagem de programação russa", E: "Um cabo de internet" }, 
    correct: "B", explanation: "Gabarito: B. Pipeline é a linha de montagem. O FASTQ entra, passa pela limpeza, passa pelo alinhador, passa pelo GATK e sai como um VCF perfeitinho no final do cano." },

  { id: 1540, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "O caractere Pipe '|' (barra reta vertical) no terminal do Linux faz uma das mágicas mais fortes da bioinformática. O que ele executa?", 
    options: { A: "Trava o computador", B: "Deleta o arquivo silenciosamente", C: "Pega o resultado de um comando e o injeta diretamente como entrada do próximo comando, sem precisar salvar um arquivo temporário no disco", D: "Reinicia o Linux", E: "Desenha um gráfico no shell" }, 
    correct: "C", explanation: "Gabarito: C. O Pipe conecta comandos. Exemplo: você manda o PC listar arquivos e liga num pipe para que ele apenas conte quantas linhas apareceram." },

  { id: 1541, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "Em programação Python, o que é a famosa biblioteca 'Pandas' e por que a usamos o tempo todo?", 
    options: { A: "É um jogo de computador", B: "É um pacote feito para proteger os ursos na China", C: "É a biblioteca definitiva de manipulação de dados, perfeita para ler, filtrar e modificar planilhas (DataFrames) gigantescas como se fosse um Excel avançado", D: "Faz gráficos 3D da lua", E: "Calcula a física dos buracos negros" }, 
    correct: "C", explanation: "Gabarito: C. Na genômica, lidamos com tabelas de 50.000 genes e colunas com pacientes. O Pandas lê isso e permite cruzar dados e achar respostas com apenas duas linhas de código em Python." },

  { id: 1542, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "Para que serve a ferramenta Git e a plataforma GitHub na rotina do laboratório digital?", 
    options: { A: "Baixar músicas piratas", B: "Para controlar versões do código, evitando que você perca um trabalho se o código quebrar, e para permitir que você e cientistas no Japão colaborem no mesmo programa sem sobrepor arquivos um do outro", C: "Alinhar DNA contra genoma mitocondrial", D: "Hospedar o e-mail do laboratório", E: "Compactar vídeos de microscópio" }, 
    correct: "B", explanation: "Gabarito: B. O Git é a máquina do tempo do programador. E o GitHub é a nuvem pública onde esses projetos salvos e colaborativos vivem." },

  { id: 1543, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "Muitos pipelines exigem criar um 'Container' usando ferramentas como Docker. Qual é o conceito fácil de Container?", 
    options: { A: "Uma caixa de lixo físico da sala", B: "Um pendrive encriptado de alta segurança", C: "Uma 'caixa' virtual que embala o programa junto com todas as versões exatas que ele precisa para funcionar, garantindo que o programa rode perfeitamente igual no meu notebook e num supercomputador chinês", D: "Uma máquina que fabrica DNA", E: "Um arquivo de texto protegido" }, 
    correct: "C", explanation: "Gabarito: C. O maior problema antigo era 'funciona no meu PC mas quebra no seu'. O Docker resolve isso encapsulando todo o ambiente de uma vez." },

  { id: 1544, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "Ao tentar rodar um script (`./meu_script.sh`), o Linux responde 'Permission denied' (Permissão negada). Qual comando simples resolve esse erro dizendo ao Linux que o arquivo é seguro para executar?", 
    options: { A: "rm arquivo", B: "cd arquivo", C: "chmod +x meu_script.sh", D: "cat meu_script.sh", E: "mkdir permissao" }, 
    correct: "C", explanation: "Gabarito: C. O `chmod +x` adiciona a propriedade de eXecução. O Linux, por segurança, bloqueia programas recém-criados até você avisar que ele é executável." },

  { id: 1545, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "O Jupyter Notebook é extremamente popular entre bioinformatas. Sua principal característica é:", 
    options: { A: "Ser um sequenciador portátil", B: "Permitir a escrita de código, a visualização dos resultados/gráficos imediatos e textos explicativos tudo em uma mesma página interativa rolável na web", C: "Traduzir Python para R sozinho", D: "Descompactar arquivos raros", E: "Criar planilhas do pacote Office em C++" }, 
    correct: "B", explanation: "Gabarito: B. O Jupyter mudou a forma de se ensinar código. Você aperta 'Play' no bloco e o gráfico de biologia já salta em cores logo abaixo." },

  { id: 1546, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "O comando `head arquivo.txt` no terminal do Linux ajuda o analista a economizar tempo fazendo o que?", 
    options: { A: "Apagando o cabeçalho", B: "Mostrando apenas as 10 primeiras linhas do arquivo na tela, perfeito para dar uma espiada no formato de um VCF gigante sem travar o computador tentando abri-lo inteiro", C: "Compactando a cabeça do arquivo", D: "Renomeando a primeira linha", E: "Mostrando a data do HD" }, 
    correct: "B", explanation: "Gabarito: B. Um VCF pode ter 40 GB. Tentar abrir no bloco de notas normal vai fritar seu notebook. Com `head`, ele mostra um rascunho instantâneo das primeiras linhas e encerra." },

  { id: 1547, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "Quando você vê a extensão `.json` em APIs da saúde, esse arquivo contém o que?", 
    options: { A: "Apenas binários pesados de imagens", B: "Texto estruturado no modelo de 'Chave : Valor' (ex: 'Nome': 'João', 'Mutação': 'Positiva'), sendo fácil para programas lerem dados de sites", C: "Gráficos redondos prontos", D: "Drivers da placa de vídeo", E: "Tabelas de excel encriptadas" }, 
    correct: "B", explanation: "Gabarito: B. O JSON (JavaScript Object Notation) virou a linguagem base de bancos de dados modernos por ser leve, flexível e universal em qualquer linguagem." },

  { id: 1548, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "No terminal Linux, se você quiser redirecionar (salvar) o texto da tela e forçar que ele grave e sobrescreva o conteúdo criando um arquivo novo, você usa qual operador?", 
    options: { A: "|", B: ">", C: "<", D: "*", E: "&&" }, 
    correct: "B", explanation: "Gabarito: B. O sinal de maior `>` é o redirecionador (ex: `echo 'Olá' > arquivo.txt`). Ele pega o que ia para a tela e joga dentro de um bloco de texto." },

  // --- Estatística aplicada à genômica ---
  { id: 1549, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "O que o p-valor (p-value) de 0.01 em um teste de associação genética simples quer dizer para o pesquisador em essência básica?", 
    options: { A: "Que a máquina quebrou em 1%", B: "Que há apenas 1% de probabilidade do resultado observado ter acontecido por puro acaso se a variante não tivesse relação nenhuma com a doença", C: "Que a doença é mortal", D: "Que o gene mata 1% das células", E: "Que o erro do pesquisador foi de 10%" }, 
    correct: "B", explanation: "Gabarito: B. P-valor é a chance da Sorte estar brincando com você. Um P-valor baixo (0.01) significa que a sorte não faria isso; o achado é muito sólido e real." },

  { id: 1550, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "O que representa a 'Média' estatística de cobertura de um exame?", 
    options: { A: "O valor exato do começo do exame", B: "O valor central se ordenarmos todos os dados em fila", C: "A soma de todas as leituras de cobertura dividida pela quantidade de bases analisadas", D: "O valor que mais se repetiu no exame", E: "A distância entre o maior e o menor valor" }, 
    correct: "C", explanation: "Gabarito: C. A média simples é apenas somar tudo (todas as coberturas) e dividir pelo total. É a nota escolar clássica." },

  { id: 1551, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "Em bioestatística, qual a vantagem da 'Mediana' sobre a 'Média' quando um dos resultados laboratórios deu um valor absurdamente anormal e gigantesco (um Outlier)?", 
    options: { A: "Nenhuma, ambas erram igual", B: "A mediana é a metade do outlier", C: "A mediana (o valor exato do meio da fila) é resistente a outliers; ela não se deixa puxar por um valor extremo maluco que estragaria e distorceria a média simples do laboratório", D: "A mediana deleta os valores altos do papel", E: "A média é que é resistente" }, 
    correct: "C", explanation: "Gabarito: C. Se os salários são 1, 2 e 90. A média infla injustamente para 31. A mediana protege os dados e crava em 2, mostrando o cenário mais real e imune ao valor doido de 90." },

  { id: 1552, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "O que é 'Correlação' estatística na expressão de dois genes, A e B?", 
    options: { A: "Que um gene destrói o outro", B: "Se há correlação positiva, quando a atividade do gene A sobe e aumenta, a do gene B também sobe no paciente de forma proporcional", C: "Significa que eles são do mesmo cromossomo fisicamente", D: "Ambos têm o mesmo tamanho em nucleotídeos", E: "Que o gene B é mutante" }, 
    correct: "B", explanation: "Gabarito: B. Correlação mede o quanto dois valores andam de mãos dadas. Se um sobe e o outro desce sempre, é correlação negativa. Se andam juntos para o alto, positiva." },

  { id: 1553, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "Na estatística e testes de hipóteses, a chamada 'Hipótese Nula (H0)' de uma pesquisa propõe a princípio que:", 
    options: { A: "Que todos estão curados no Brasil", B: "Que o tratamento novo é um sucesso", C: "Que não há efeito, não há diferença e que a mutação e a doença não têm relação absolutamente nenhuma entre si (é o cenário que o cientista geralmente tenta provar que é falso para divulgar sua descoberta real)", D: "Que o DNA foi apagado da máquina de testes sem rastros", E: "Que a variância das amostras é infinita" }, 
    correct: "C", explanation: "Gabarito: C. A ciência é cética por essência. A hipótese nula é o 'advogado do diabo' dizendo: Seu remédio é inútil. Você aplica o p-valor pra tentar quebrar a cara do H0." },

  { id: 1554, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "O gráfico de 'Boxplot' (Diagrama de caixa) é rei em relatórios no R. A caixinha colorida no centro do gráfico representa onde se concentram:", 
    options: { A: "Apenas 5% dos piores resultados", B: "50% de todos os dados intermediários e medianos da sua amostra (o intervalo interquartil), ajudando a ver facilmente onde a normalidade da população mora sem se assustar com os pontos soltos fora", C: "Todo o universo possível mundial", D: "As mutações não sinônimas das fitas soltas da célula basal e das contagens das RNA primases ativadas", E: "O desvio padrão ao quadrado bruto na variante P" }, 
    correct: "B", explanation: "Gabarito: B. O Boxplot esconde os dados fora da curva nos pontinhos finos lá em cima e deixa na caixa colorida central os 50% dos resultados principais da sua turma, ajudando o olho humano a focar no grosso dos resultados." },

  { id: 1555, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "O que o gráfico 'Volcano Plot' (Gráfico de Vulcão) exibe em estudos de genes?", 
    options: { A: "O quanto a temperatura da máquina de laboratório subiu ao ligar o botão do estabilizador local por erro de resfriamento", B: "Ele exibe quais genes tiveram suas expressões drasticamente aumentadas/diminuídas (Fold-Change) e, ao mesmo tempo, quais tiveram p-valores excelentes que comprovam o achado no espaço Y. Ele joga as verdadeiras descobertas pra cima e para os lados do vulcão", C: "A distribuição do peso dos pacientes", D: "O efeito dos vulcões no genoma nativo havaiano estrito do país em foco nos exames de biologia nativos e geológicos das áreas puras limpas", E: "Nenhuma das respostas" }, 
    correct: "B", explanation: "Gabarito: B. Um Volcano plot perfeito tem a forma de V (ejetando pra cima os genes que o pesquisador descobriu como marcadores fortíssimos do câncer)." },

  { id: 1556, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "Em relação ao 'Erro Tipo I' em laudos de associação médica:", 
    options: { A: "Deixar a máquina cair no chão", B: "É o famigerado 'Falso Positivo': o programa estatístico apita afirmando que o Gene X causa o Câncer Y, quando na verdade a realidade prova que o gene não tem relação nenhuma com o tumor e a pesquisa era infundada", C: "É quando você perde a prova científica das bases nulas no meio de formatações HD da nuvem Amazon", D: "É dizer que a pessoa está sadia e ela doente", E: "Ocorre quando a vacina não funciona no corpo das mucosas simples normais nas reações estáticas" }, 
    correct: "B", explanation: "Gabarito: B. O Erro Tipo I é a ansiedade da publicação: Você grita 'Eureca, achei a causa!', mas era erro dos números. O Erro Tipo 2 é quando você acha que o Remédio X não funciona, joga ele no lixo, mas ele funcionava (Falso Negativo)." },

  { id: 1557, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "A medida de 'Variância' em um grupo de dados nos ensina o quê?", 
    options: { A: "Se o genoma é animal", B: "O quanto os dados do grupo 'variam' ou se espalham em relação à média central (Se todos têm 30 anos a variância é zero, se têm idades de 2 a 90 anos, a variância é gigante)", C: "Quantos megabytes pesa o arquivo", D: "Quem chegou primeiro na UTI municipal central limpa primária ambulatorial nativa e de exames basais com os enfermeiros puros noturnos logados no mês estático isolado", E: "Mede apenas pesos na farmácia" }, 
    correct: "B", explanation: "Gabarito: B. Quanto maior a variância, mais diferente as pessoas daquela amostra são entre si. É a medida de dispersão mais forte." },

  { id: 1558, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "No termo 'Fold-Change' comum na transcriptômica (RNA-seq), um valor FC = 2 significa que:", 
    options: { A: "Dois genes morreram", B: "O gene está expressando e produzindo proteínas num grupo EXATAMENTE O DOBRO a mais de vezes do que no grupo saudável, indicando uma super-ativação metabólica local na amostra tumoral e foco investigativo limpo", C: "Duas pastas foram deletadas no disco", D: "O valor da prova caiu a zero", E: "Significa que dobrou de tamanho cromossômico físico na mitose" }, 
    correct: "B", explanation: "Gabarito: B. 'Fold' (dobra/vezes). Se a FC deu negativo (-3), o grupo de doentes tem 3 vezes menos expressão daquele gene (Silenciamento)." },

  { id: 1559, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "Em um gráfico de PCA (Análise de Componentes Principais), se as 'bolinhas' vermelhas (casos de câncer) ficarem amontoadas e bem distantes do cacho de 'bolinhas' verdes (sadios), o bioinformata conclui facilmente que:", 
    options: { A: "O computador travou na escala Y de bases nulas e deu tela azul apagada no PCA normal visual básico estatístico e logado sem drivers ou placa visual pesada simples das conexões seriais HDMI e VGA e rede do PC Linux limpo", B: "Há uma 'separação clara' forte no nível molecular entre os doentes e não doentes com assinaturas e características exclusivas fortíssimas. Isso garante que a biologia oncológica fala alto o suficiente nas tabelas para que os grupos divirjam visivelmente em duas massas separadas na visualização multidimensional convertida para o 2D na nossa tela limpa", C: "As cores do gráfico estão com defeito RGB básico visual", D: "O experimento fracassou totalmente na biologia das organelas do núcleo nativo na máquina base química e manual", E: "Todos os pacientes se curaram ao acaso" }, 
    correct: "B", explanation: "Gabarito: B. PCA resume milhares de números em pontos fáceis na tela. Bolinhas de doentes isoladas das sadias significam que a doença mexeu tanto nos números do corpo que eles não se misturam mais na estatística." },

  { id: 1560, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "Por que as Análises de Expressão (DE) usam logaritmos base 2 (Log2) e não os números grandes reais puros das contagens das polimerases do RNA?", 
    options: { A: "Apenas para o gráfico ficar mais bonito de se ver", B: "Porque em biologia a expressão dobra ou cai pela metade exponencialmente. O Log2 nivela os números matematicamente de uma forma simétrica: Se dobra, o Log2 dá +1. Se cai pela metade exata, o Log2 dá -1 de forma estática equilibrada e fácil de trabalhar na conta pesada baseada sem explodir gráficos com números tipo '2 milhões'", C: "A lei proíbe números inteiros nas universidades base do Brasil em teses de estatística", D: "Eles não afetam os VCFs nas contas da BWA", E: "Os programas no R só entendem números de zero a dez puros naturais" }, 
    correct: "B", explanation: "Gabarito: B. O Log2 centraliza e amansa as proporções exponenciais. Uma subida vira número positivo (+1,+2) e uma queda vira número espelhado (-1,-2). Facilita o mapeamento visual no gráfico do Vulcão de RNA." },

  { id: 1561, area: "Bioinformática", subject: "Estatística aplicada à genômica", 
    text: "O que o famoso gráfico 'Manhattan Plot' mostra e onde é gerado em peso em hospitais NGS?", 
    options: { A: "Mostra o preço de apartamentos em NY nos centros brutos empresariais ricos e bases bancárias do comércio global atrelados à doença de obesidade no norte rico metropolitano global atestada na bolsa geral unificada do estado analítico em dólares estritos numéricos básicos logados e purificados na conta do tesouro", B: "É exclusivo dos 'Estudos de Associação Ampla - GWAS'. Plota os cromossomos (1 a 22) na base, e sobe 'prédios e torres' nos p-valores para exibir quais genes (SNPs) quebram a régua de corte limiar da significância estatística, revelando montanhas altas onde moram os perigos de doenças complexas", C: "O peso fetal num gráfico 3D", D: "Mostra o batimento cardíaco puro da máquina do SUS da UTI local", E: "É um mapa geográfico do Google Maps" }, 
    correct: "B", explanation: "Gabarito: B. Se a variante T231C for fortíssima associada com Obesidade, um 'arranha-céu' vai estourar a reta horizontal e subir no eixo Y no meio do Cromossomo 4, de forma lindamente visual e imediata." },

  // --- Mix Final de Consolidação ---
  { id: 1562, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "O uso de Jalecos fechados até o pescoço e de material que não pega fogo facilmente (algodão puro) no lugar de poliéster inflamável de supermercados nas capelas protege contra:", 
    options: { A: "A chuva urbana em saídas rápidas das catracas laborais na capital", B: "O poliéster derrete como plástico puro colando e necrosando na pele do braço do técnico ao menor contato com uma lamparina bico de Bunsen na placa em BPL, enquanto o algodão pode ser retirado às pressas antes de soldar nas queimaduras dos acidentes da ciência e de frascos químicos orgânicos e voláteis inflamados normais na bancada", C: "Algodão atrai vírus e filtra o ar respirado", D: "Apenas para dar conforto e sono nas poltronas", E: "O jaleco afasta insetos macroscópicos simples não ligados a genoma no teto e luz amarela isolada limpa nos ares centrais brancos na higiene das mesas" }, 
    correct: "B", explanation: "Gabarito: B. O poliéster não queima, ele 'derrete'. Se o funcionário estiver com tecido sintético num pequeno incêndio de bancada de acetona, o plástico vai grudar no osso derretendo. Jaleco tem que ser grosso e base de algodão puro pra agir de colete de bloqueio térmico ou arrancar a roupa antes." },

  { id: 1563, area: "Bioinformática", subject: "Genética de populações", 
    text: "Na genética global, qual continente guarda o título de berço ancestral populacional absoluto (onde está abrigada até os dias modernos quase toda a diversidade pesada natural de SNPs do genoma humano da história na terra sem gargalos evolutivos de perda nas travessias antigas das terras e glaciações)?", 
    options: { A: "América do Sul indígena e ribeirinha nativa em tribos estritas puras isoladas no passado sem misturas globais", B: "O continente Africano (Out of Africa model). As populações de matriz africana têm o maior leque de diversidade basal na Terra, porque quem migrou e fundou os europeus e ameríndios carregou consigo nas mochilas de viagem física antigas apenas uma pequena parcela diminuta restrita de blocos de DNA da raiz principal, deixando a matriz grossa retida inteira no continente inicial da espécie Homo", C: "O Polo Norte isolado rústico e neolítico", D: "A Oceania nos aborígenes de ilhas remotas e litorais brutos não logados nos comércios navais com caravelas de misturas e doenças do leste central na Ásia limpa", E: "Europa ocidental de matriz celta viking" }, 
    correct: "B", explanation: "Gabarito: B. Por não ter sofrido o 'Gargalo Populacional' da grande migração pelo deserto para sair pelo Oriente e Europa, os povos da África carregam quase toda a variação biológica existente de humanos de forma milenar intacta no pool biológico." },

  { id: 1564, area: "Bioinformática", subject: "Programação e ferramentas computacionais", 
    text: "Por que se utiliza o programa e extensão 'GZIP' ou 'BGZF' (Compressão tipo .gz no Linux) compulsivamente em arquivos gigantes do VCF e FASTQ sem exceções?", 
    options: { A: "Pra colorir de rosa as fontes na tela bash central de vídeo digital e gráfico da bios logada", B: "Genomas puros podem ocupar 100 Gigabytes em formato txt texto simples; comprimir em .gz reduz tudo a 15 Gb mágicos. O formato salva a vida do cientista, evitando ter que estourar e quebrar a cota financeira gigante e as máquinas do HD/SSD Amazon da cloud logada nas bases clínicas diárias onerosas e salvar a infraestrutura da federação médica no backup das nuvens", C: "Ele criptografa senhas", D: "Ele injeta proteínas de RNA via algoritmos", E: "Ele insere vírus ocultos lógicos falsos nas extensões na máquina cega sem telas visuais do usuário" }, 
    correct: "B", explanation: "Gabarito: B. Armazenamento e download de DNA são caríssimos. Compactar (gzip) tudo é a única forma financeira e logística da bioinformática funcionar trocando gigas entre estados e prefeituras sem queimar contas com terabytes caríssimos mensais." },

  { id: 1565, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Onde devem ser descartadas OBRIGATORIAMENTE luvas nitrílicas após uso laboratorial contendo soro infectado por arboviroses com risco no posto público BPL de testagem biomolecular e sangue humano nos esfregaços de placa do LIMS na mesa BPL limpa final?", 
    options: { A: "Em sacos de papel picados pretos sem amarras abertos na esquina do lixo hospitalar do zelador base do asseio matinal comum externo diurno focado puramente das lixeiras limpas do banheiro e sanitários anexos laterais", B: "No Lixo Hospitalar Biológico Específico de Saco Branco Leitoso blindado demarcado (Infectante Grupo A biológico) para o devido processo das máquinas enormes autoclaves rústicas ou de incinerações químicas biológicas sem o risco severo inaceitável ético a limpeza pública da sociedade da cidade de rua nas calçadas do esgoto local", C: "Lixão urbano reciclável de plásticos", D: "Pia com cloro ativada ralo aberto na química geral do solvente central", E: "Reutilizar as luvas fervendo-as a oitenta graus centígrados e esticando e guardando" }, 
    correct: "B", explanation: "Gabarito: B. Lixo infectante (Grupo A) exige o saco branco resistente clássico, evitando que os catadores de lixo municipal e as varredeiras públicas na rua sejam fatalmente atingidos com sangue cru hospitalar." },

  { id: 1566, area: "Bioinformática", subject: "Segurança de dados", 
    text: "A Anonimização no LGPD diz que não se deve ter CPFs em planilhas médicas. O que é uma Pseudo-anonimização em diferença do primeiro conceito estrito do SUS brasileiro no dado sensível oncológico da planilha de acesso e Excel em pastas online?", 
    options: { A: "É pintar os nomes de fonte invisível", B: "Pseudo-anonimizar é substituir nomes e CPFs da Maria na planilha centralizada por uma série 'ID-PAC-771' limpo. E guardar o dicionário chave dessa decodificação (A Chave ID) fechado por um DPO oficial de segurança ou médico num envelope físico, longe dos estagiários. Assim os dados parecem anônimos, mas em caso do hospital necessitar da cura urgente cirúrgica do laudo da máquina, o chefe abre a chave restrita, revincula os achados salvos na máquina e trata o doente humano", C: "Anonimizar falsificando o rosto visual da identidade civil perante promotores cartorários", D: "É divulgar as listas e nomes da saúde oncológica de todos no exterior sem CPFs completos apenas primeiros nomes visíveis de forma rústica online nos painéis diários governamentais", E: "As opções não diferem e a LGPD bane de forma integral e total" }, 
    correct: "B", explanation: "Gabarito: B. A anonimização pura quebra a ponte pro resto da vida (Nunca mais acharemos que dono é o doente). Na Pseudo, nós escondemos a chave no cofre, assim a Bioinformática analisa cega e tranquila, e o médico chefe que tem a chave resgata a cura pra pessoa real." },

  { id: 1567, area: "Laboratório", subject: "Boas Práticas de Laboratório (BPL), biossegurança e controle de qualidade", 
    text: "Para extrair o DNA do núcleo humano o que se utiliza em soluções químicas orgânicas tradicionais como fenoladas nas misturas e métodos de separação na química rotineira orgânica e pesada dos técnicos da equipe antes de puxar do robô?", 
    options: { A: "Gelo seco", B: "Ação de Tensoativos como o forte detergente ativo químico (SDS - Dodecil sulfato) que explode e saboa rompendo severamente a barreira blindada dos lipídios biológicos (a capinha da gordura) celular da membrana plasmática vazando todo e derramando o recheio estrito das nucleases e do próprio enovelado código central nas tubulações úmidas molhadas da bancada do cientista em tampões atestados biológicos da biologia rotineira limpa da extração básica do núcleo em placa de fundo nos decantadores e nos mixers térmicos locais", C: "Adicionando vírus bacteriófagos", D: "Fervendo em estufa à gás metano de ar leve na química basal centralizada das vidrarias no escuro em temperaturas naturais das paredes termostáticas ativas no ambiente diurno isolado sem água", E: "Comprimir em pistão mecânico de alumínio purificado industrial nas câmaras do hospital e centros frios puros base industriais das metalúrgicas conectadas isoladas nativas limpas" }, 
    correct: "B", explanation: "Gabarito: B. Assim como o detergente de cozinha derrete a gordura da panela, o detergente SDS de Lise laboratorial derrete o lipídio da membrana celular do paciente na ampolinha. Ao estourar a proteção gorda, a célula jorra o conteúdo (DNA) pra fora para coletarmos na pipeta." },

  { id: 1568, area: "Laboratório", subject: "Tecnologias laboratoriais em genômica (sequenciamento de nova geração - NGS, extração de DNA genômico, controle de qualidade, preparo de amostras)", 
    text: "O sequenciador Illumina emite as fotografias da base fluorescente numa corrida da lâmina (Flow cell). Qual a sigla do método enzimático básico dessa reação no qual ele tira e registra cada nova base incorporada fotográfica uma a uma a cada ciclo sem correr e parar o processo?", 
    options: { A: "Sanger Gel de capilar laser UV simples longo contíguo base na metáfase simples limpa visual sem PCR", B: "Sequencing By Synthesis (SBS - Sequenciamento por Síntese). Cada base quimicamente adicionada ao rastro e amontoado da ponte na placa ativada emite uma lanterna e bloqueia a máquina para não adicionar outras juntas. Ele tira a foto da lanterna, apaga a lanterna (cleavage de bloqueador químico), destrava o bloqueio e permite a base da frente vir brilhar sozinha para tirar milhares de fotos focais únicas contíguas separadas milimetricamente seguras em gigabytes diários nos arquivos puros nativos das máquinas super potentes do NGS", C: "Massometria proteica elétrica focal da biologia iônica do laboratório oncológico focado geral nas áreas logísticas do espectro visível em peso sem radiação magnética da amostra cega de espectrofotômetros básicos na química unificada", D: "Hibridização eletrostática estrita purificada a vácuo com ressonância magnética nuclear de base logada nos servidores da UTI oncológica nativa ativada visual radiológica do paciente focado em laudo de raios X", E: "Nenhuma técnica, a Illumina não usa câmera fotográfica" }, 
    correct: "B", explanation: "Gabarito: B. A genialidade da Illumina: as letrinhas artificiais deles têm 'Cadeado' e 'Lanterna'. A máquina adiciona uma letra no fio (ex: T verde), o cadeado impede o fio de crescer desgovernado. A câmera fotografa o pontinho verde (É um T). Enzimas tiram o cadeado, apagam a lanterna e deixam a próxima letra do genoma entrar pra uma nova foto. Milhões de vezes simultâneas." },

  { id: 1569, area: "Bioinformática", subject: "Bioinformática e análise genômica", 
    text: "O formato que se tornou onipresente em projetos de mutações clínicas entre consórcios SUS médicos do VCF e laudos. O que é o arquivo VCF do ponto da base crua médica legível analítica textual e estatística para doenças oncológicas ou de conselhos clínicos normais de genética atestadas na rotina unificada hospitalar biomédica?", 
    options: { A: "É vídeo clínico fotográfico do paciente nos exames de sangue ou de endoscopias cruas ativas da mesa de cirurgião do bloco central gravados com softwares de edição primária estática da imagem gerencial administrativa e arquivada por biólogos", B: "Variant Call Format. Uma tabela mágica de excel puro texto que condensa os milhões de dados do seu BAM apontando exclusividade onde você falhou ou diferiu em letras na comparação exata e direta base a base na vida médica do genoma original universal humano puro da GRch38. Indica exatamente se no Cromossomo 5 Posição X a sua Mãe ou a polimerase te passou a mutação do câncer ou não no arquivo unificado em formato de dados lido mundialmente sem as bilhões de bases desinteressantes sadias puras no fundo do HD logístico", C: "O laudo em PDF feito no word assinado atestado médico com o carimbo biomédico e papel hospitalar sem codificações nativas bioinformáticas logadas criptografadas analiticamente na nuvem das planilhas em bash do técnico central", D: "O formato original com as imagens TIFF cruas gigantes da lente dos lasers da máquina baseadas no formato bruto sem filtros nem alinhamentos em algoritmos BWA normais fotográficos nativos na base Unix logada geral", E: "É o atestado de vacinação municipal" }, 
    correct: "B", explanation: "Gabarito: B. O VCF é a listinha de defeitos e trocas da máquina (A tabela de infrações do paciente contra o Genoma de Referência). É o laudo de ouro do pipeline onde mostra que na coordenada tal ele tem a doença, poupando a gente de reler os 3 bilhões de letras do arquivo BAM puro gigantesco e entulhado nas máquinas base." },
  // =========================================================
  // MEGA BLOCO 12 - FÁCIL/MÉDIA - SEGURANÇA E ETL (50 QUESTÕES)
  // =========================================================

  // --- Segurança de dados ---
  { id: 1570, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Qual é o principal objetivo da Lei Geral de Proteção de Dados (LGPD) no contexto hospitalar e genômico?", 
    options: { A: "Proteger os computadores contra vírus", B: "Proteger os direitos fundamentais de liberdade e de privacidade das pessoas, regulando como os hospitais e laboratórios coletam, guardam e usam os dados dos pacientes", C: "Garantir internet rápida nos postos de saúde", D: "Proibir a realização de exames de DNA", E: "Obrigar os médicos a usarem senhas de 4 dígitos" }, 
    correct: "B", explanation: "Gabarito: B. A LGPD (Lei 13.709/2018) foca na privacidade do cidadão. Ela garante que o dado (como um genoma ou endereço) pertence à pessoa, e a instituição deve tratá-lo com extremo cuidado e permissão." },

  { id: 1571, area: "Bioinformática", subject: "Segurança de dados", 
    text: "O que é 'Phishing' no dia a dia da segurança da informação de um laboratório?", 
    options: { A: "Um tipo de peixe usado em testes", B: "Um ataque cibernético onde o criminoso envia um e-mail falso (ex: fingindo ser o suporte de TI do hospital) para 'pescar' e roubar a senha do funcionário", C: "Um programa que limpa o HD", D: "O processo de compactar arquivos VCF", E: "A quebra física do cabo de rede" }, 
    correct: "B", explanation: "Gabarito: B. Phishing (Pescaria) é a engenharia social clássica. O hacker não invade o sistema à força; ele engana o biomédico com um e-mail falso para que o próprio biomédico entregue a senha de bandeja." },

  { id: 1572, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Para acessar o sistema do Genomas SUS, o bioinformata digita sua senha e, em seguida, precisa inserir um código de 6 dígitos que chega no seu celular. Esse processo é conhecido como:", 
    options: { A: "Autenticação em Duas Etapas (2FA / MFA)", B: "Criptografia de ponta a ponta", C: "Backup redundante", D: "Protocolo HTTPS", E: "Firewall dinâmico" }, 
    correct: "A", explanation: "Gabarito: A. A Autenticação de Múltiplos Fatores (MFA) exige 'algo que você sabe' (sua senha) mais 'algo que você tem' (seu celular). Isso impede que um hacker acesse o sistema mesmo se descobrir sua senha." },

  { id: 1573, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Na segurança de dados, o conceito da regra de 'Privilégio Mínimo' (Principle of Least Privilege) significa que:", 
    options: { A: "Todos os funcionários devem ter a senha do diretor", B: "Os pacientes não podem ver seus exames", C: "Um funcionário deve ter acesso APENAS aos dados e sistemas estritamente necessários para ele fazer o seu trabalho, e nada mais", D: "O laboratório deve gastar o mínimo possível com antivírus", E: "Apenas um computador do hospital deve ter internet" }, 
    correct: "C", explanation: "Gabarito: C. O estagiário da recepção não precisa ter acesso à pasta que deleta o banco de dados do genoma. Dar apenas o acesso mínimo necessário evita acidentes e vazamentos em massa." },

  { id: 1574, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Qual é a principal razão pela qual o uso de Pendrives pessoais é estritamente PROIBIDO em laboratórios que lidam com genomas e dados do SUS?", 
    options: { A: "Eles consomem muita energia da porta USB", B: "Eles são fáceis de perder, facilitando o vazamento de dados de milhares de pacientes, além de serem os maiores transmissores de vírus e malwares para dentro da rede do hospital", C: "Eles deixam o computador lento", D: "Eles alteram o formato do arquivo de FASTQ para PDF", E: "Apenas por questão de estética do ambiente" }, 
    correct: "B", explanation: "Gabarito: B. Pendrives são o terror da TI hospitalar. Além de espalharem vírus como o Ransomware, perder um pendrive com 10.000 laudos na rua gera multas milionárias pela LGPD." },

  { id: 1575, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Se você olhar para a barra de endereços do seu navegador ao acessar o sistema de laudos do SUS, verá um 'cadeado fechado' e as letras HTTPS. O que o 'S' final significa?", 
    options: { A: "Sistema", B: "Saúde", C: "Secure (Seguro) - indicando que a comunicação entre seu computador e o servidor está criptografada e embaralhada para espiões na rede", D: "Sync (Sincronizado)", E: "Server (Servidor)" }, 
    correct: "C", explanation: "Gabarito: C. O HTTP normal manda textos abertos na internet. O HTTPS (Secure) embaralha os dados. Se alguém interceptar a rede, verá apenas códigos ilegíveis em vez da senha ou do genoma do paciente." },

  { id: 1576, area: "Bioinformática", subject: "Segurança de dados", 
    text: "O que é um software de 'Ransomware'?", 
    options: { A: "Um antivírus gratuito", B: "Um programa que acelera a leitura de genomas", C: "Um vírus criminoso que invade o hospital, criptografa (tranca) todos os dados dos pacientes e exige o pagamento de um resgate (geralmente em Bitcoin) para liberar a senha", D: "Um firewall de rede", E: "Um compactador de arquivos como o WinZip" }, 
    correct: "C", explanation: "Gabarito: C. Ransomware é o crime digital moderno. Ele sequestra os arquivos do laboratório. Por isso o backup offline (que não está na rede) é a única salvação contra esse ataque." },

  { id: 1577, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Qual destas práticas é uma Política de 'Mesa Limpa' (Clear Desk Policy) exigida pela Segurança da Informação no laboratório?", 
    options: { A: "Lavar as mãos com álcool", B: "Passar desinfetante na bancada de extração", C: "Não deixar senhas anotadas em post-its colados no monitor e não deixar exames de pacientes impressos soltos em cima da mesa ao ir embora", D: "Tirar o pó do computador", E: "Não comer na mesa" }, 
    correct: "C", explanation: "Gabarito: C. Segurança da informação não é só digital. Um visitante ou pessoal da limpeza pode facilmente ler um laudo de HIV/Câncer que ficou esquecido em cima da mesa. Guarde documentos em gavetas e não cole senhas no monitor." },

  { id: 1578, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Para garantir a 'Disponibilidade' dos dados em caso de queima do servidor local, um laboratório faz Backups diários. Qual o conceito correto de Backup?", 
    options: { A: "Apagar os dados antigos para liberar espaço", B: "Fazer uma cópia de segurança dos dados importantes e guardá-la em um local separado e seguro", C: "Traduzir os dados para inglês", D: "Compactar os dados numa pasta oculta", E: "Mudar o formato do VCF" }, 
    correct: "B", explanation: "Gabarito: B. O Backup não é apenas salvar o arquivo, é salvar uma 'cópia' num HD diferente ou na Nuvem. Se o disco principal queimar, você tem a cópia intacta para restaurar." },

  { id: 1579, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Em segurança de dados de saúde, a 'Trilha de Auditoria' (Audit Trail) é um recurso automático do sistema (LIMS) que tem a função de:", 
    options: { A: "Auditar a qualidade da amostra de sangue", B: "Registrar como um 'filme' oculto exatamente QUEM acessou o sistema, em qual DATA/HORA e o QUE a pessoa alterou (ex: Maria mudou o laudo de Negativo para Positivo às 14h)", C: "Bloquear a tela após 5 minutos", D: "Calcular o valor do exame", E: "Apagar dados duplicados" }, 
    correct: "B", explanation: "Gabarito: B. A trilha de auditoria é a 'câmera de segurança' do software. Garante a integridade e impede que um funcionário mal intencionado adultere um laudo sem ser rastreado." },

  { id: 1580, area: "Bioinformática", subject: "Segurança de dados", 
    text: "A Bioinformática na Nuvem (Cloud Computing, como AWS e Google Cloud) possui o modelo de 'Responsabilidade Compartilhada'. Isso quer dizer que:", 
    options: { A: "O Google cuida da segurança dos prédios e servidores físicos, mas o laboratório é o responsável por criar senhas fortes e configurar quem tem acesso aos arquivos no painel", B: "A nuvem é 100% responsável por tudo e o laboratório não precisa se preocupar com senhas", C: "O paciente divide a responsabilidade com o hospital", D: "A conta de luz é dividida", E: "Os dados são abertos ao público" }, 
    correct: "A", explanation: "Gabarito: A. A nuvem garante que ninguém vai roubar o HD físico com uma arma. Mas se o cientista do laboratório colocar a pasta de genomas em 'Acesso Público' na internet por engano, a culpa do vazamento é 100% do laboratório." },

  { id: 1581, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Por que conectar o notebook do hospital à rede de 'Wi-Fi Público' (de aeroportos ou cafeterias) para analisar genomas do SUS é uma grave falha de segurança?", 
    options: { A: "Porque a bateria do notebook acaba mais rápido", B: "Porque a tela perde a resolução", C: "Porque redes públicas são fáceis de serem interceptadas por hackers que estão no mesmo ambiente, permitindo o roubo dos dados transmitidos (Ataque Man-in-the-Middle)", D: "Porque a internet é muito lenta para gerar arquivos", E: "Porque quebra o HD do computador" }, 
    correct: "C", explanation: "Gabarito: C. Nunca acesse sistemas sigilosos de saúde em Wi-Fi de padaria sem usar uma VPN corporativa forte, pois qualquer pessoa com um software básico na mesma rede pode ler seu tráfego." },

  { id: 1582, area: "Bioinformática", subject: "Segurança de dados", 
    text: "A técnica de 'Anonimização' citada na LGPD tem a principal função de:", 
    options: { A: "Apagar o banco de dados após 30 dias", B: "Desvincular irreversivelmente um dado da pessoa a que ele se refere (ex: apagar nome, CPF e endereço, deixando apenas 'Paciente Masculino, 30 anos, Diabético')", C: "Proibir exames", D: "Mudar o genoma de referência", E: "Criptografar senhas do e-mail" }, 
    correct: "B", explanation: "Gabarito: B. O dado anonimizado perde a capacidade de identificar o cidadão. Sem CPF e Nome, a tabela do genoma pode ser usada em pesquisas sem ferir a privacidade da pessoa." },

  { id: 1583, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Um funcionário encontrou um Pendrive caído no estacionamento do hospital e conectou no computador do laboratório para ver de quem era. Qual regra de segurança ele violou?", 
    options: { A: "Desperdício de energia elétrica", B: "Nunca conectar dispositivos USB desconhecidos (Baiting), pois é uma tática comum de hackers para espalhar vírus ou Ransomware automaticamente na rede interna do hospital", C: "Regra de esterilização química", D: "Uso indevido de internet", E: "Assinatura do TCLE" }, 
    correct: "B", explanation: "Gabarito: B. Curiosidade mata a rede. Hackers jogam pendrives com vírus no chão do estacionamento de propósito, esperando que um funcionário curioso espete o USB no computador do hospital." },

  { id: 1584, area: "Bioinformática", subject: "Segurança de dados", 
    text: "A sigla 'VPN' (Virtual Private Network) é obrigatória no trabalho remoto da bioinformática. O que ela faz?", 
    options: { A: "Limpa vírus da máquina local", B: "Aumenta a velocidade da internet em 10x", C: "Cria um túnel criptografado e seguro entre o computador da sua casa e o servidor do hospital, impedindo que seu provedor de internet ou espiões vejam os dados que estão passando", D: "Converte o formato BAM para VCF", E: "Desliga o computador do hospital de casa" }, 
    correct: "C", explanation: "Gabarito: C. A VPN é um túnel blindado. Mesmo trabalhando de casa, o sistema acha que você está sentado dentro da segurança física da TI do hospital." },

  { id: 1585, area: "Bioinformática", subject: "Segurança de dados", 
    text: "O que é 'Engenharia Social' no roubo de dados médicos?", 
    options: { A: "Construir robôs", B: "Programar códigos em Python", C: "O ato de enganar pessoas psicologicamente (ex: fingir ser do Ministério da Saúde no telefone) para que elas quebrem as regras de segurança e entreguem informações sigilosas", D: "Quebrar o firewall com força bruta", E: "Compartilhar dados autorizados" }, 
    correct: "C", explanation: "Gabarito: C. É o famoso 'hackeamento de pessoas'. É mais fácil ligar chorando pro estagiário e pedir a senha do sistema do que passar meses tentando quebrar o firewall da instituição." },

  { id: 1586, area: "Bioinformática", subject: "Segurança de dados", 
    text: "A política de bloqueio automático de tela (Screen Lock após 5 minutos ocioso) serve para:", 
    options: { A: "Economizar a tela de LED", B: "Garantir que se o médico ou analista for tomar café, ninguém que passe pelo corredor consiga ler ou alterar dados de pacientes no computador que ficou logado e desprotegido", C: "Baixar a temperatura da CPU", D: "Aumentar a memória RAM", E: "Apagar o cache do navegador" }, 
    correct: "B", explanation: "Gabarito: B. Deixar a tela destravada com o sistema aberto na sua mesa é a mesma coisa que entregar a chave de casa na mão de desconhecidos." },

  { id: 1587, area: "Bioinformática", subject: "Segurança de dados", 
    text: "O que a DPO (Data Protection Officer / Encarregado de Dados) faz na instituição do Genomas SUS?", 
    options: { A: "Instala o Windows nas máquinas", B: "Faz a extração de DNA", C: "É a pessoa ou equipe legalmente responsável por garantir que o laboratório cumpra todas as regras de privacidade da LGPD, atuando como ponte entre o hospital, os pacientes e o Governo", D: "É quem assina o cheque de pagamento", E: "É a recepcionista" }, 
    correct: "C", explanation: "Gabarito: C. Toda empresa e hospital agora é obrigado a ter um DPO. Ele é o 'xerife da privacidade' que garante que os dados não estão sendo usados para fins indevidos." },

  { id: 1588, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Ao descartar servidores e HDs antigos do laboratório genômico, a equipe de TI deve adotar qual medida?", 
    options: { A: "Vender os HDs no mercado livre para reverter em caixa", B: "Formatar rapidamente com clique direito e doar", C: "Realizar o apagamento criptográfico de nível militar (Wipe/Destruição lógica) ou a destruição física (triturar o disco), garantindo que dados de pacientes antigos jamais sejam recuperados por terceiros", D: "Apenas apagar as pastas e jogar no lixo reciclável", E: "Guardar no almoxarifado abertos" }, 
    correct: "C", explanation: "Gabarito: C. Deletar arquivos no Windows não apaga nada, apenas 'esconde'. HDs de saúde devem ser triturados fisicamente ou formatados com softwares especiais antes de sair do hospital." },

  { id: 1589, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Na proteção do servidor Linux, manter os softwares e sistemas operacionais sempre 'atualizados' (Patching) é essencial porque:", 
    options: { A: "Deixa os ícones mais bonitos", B: "As atualizações corrigem falhas de segurança (vulnerabilidades) recém-descobertas que hackers usariam para invadir o servidor", C: "Evita que o computador consuma energia", D: "É uma regra de beleza do software", E: "O software antigo não lê DNA" }, 
    correct: "B", explanation: "Gabarito: B. Software desatualizado é igual a uma porta com a fechadura quebrada. As atualizações (patches) de segurança são os 'consertos' imediatos da fabricante para manter o hacker do lado de fora." },

  { id: 1590, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Qual é o nome do sistema de defesa (muro) de uma rede de computadores que filtra e bloqueia acessos não autorizados vindos da internet tentando acessar os dados do laboratório?", 
    options: { A: "Ransomware", B: "Phishing", C: "Firewall", D: "Navegador", E: "Bluetooth" }, 
    correct: "C", explanation: "Gabarito: C. O Firewall (Parede de Fogo) é o porteiro do computador. Ele decide quem entra e quem sai da rede do hospital, bloqueando hackers." },

  { id: 1591, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Qual a recomendação correta para a criação de uma senha forte no sistema LIMS de Genômica?", 
    options: { A: "Usar datas de aniversário dos filhos", B: "Usar 'senha123'", C: "Criar uma senha longa (mais de 12 caracteres), misturando letras maiúsculas, minúsculas, números e símbolos, e não a reutilizar em sistemas pessoais", D: "Usar o próprio nome", E: "Usar a palavra 'Deus'" }, 
    correct: "C", explanation: "Gabarito: C. Senhas fortes são longas. Uma senha complexa de 12 letras demora séculos para ser quebrada por um computador hacker." },

  { id: 1592, area: "Bioinformática", subject: "Segurança de dados", 
    text: "O que a propriedade de 'Não-Repúdio' garante num sistema de saúde logado por biometria?", 
    options: { A: "Que o exame não dói", B: "Que o paciente gostou do atendimento", C: "Garante que um funcionário não possa negar ou mentir que foi ele quem autorizou ou emitiu um laudo (ex: assinatura digital inquestionável)", D: "Garante o repúdio total às falhas", E: "Impede o sistema de desligar" }, 
    correct: "C", explanation: "Gabarito: C. Se o sistema usa seu cartão e sua digital, você não tem como dizer no tribunal: 'Não fui eu que liberei esse laudo de câncer falso'." },

  { id: 1593, area: "Bioinformática", subject: "Segurança de dados", 
    text: "Se um incidente de segurança grave ocorrer (ex: invasão hacker e cópia de 10.000 VCFs de pacientes), a LGPD obriga a instituição do Genomas SUS a:", 
    options: { A: "Abafar o caso para não sujar a imagem do hospital", B: "Notificar as polícias de outros países", C: "Comunicar o incidente à Autoridade Nacional de Proteção de Dados (ANPD) e aos pacientes afetados em prazo razoável, informando os riscos", D: "Desligar a energia e não falar com ninguém", E: "Processar os médicos" }, 
    correct: "C", explanation: "Gabarito: C. Ocultar vazamento é crime agravante. A instituição deve avisar a ANPD e os pacientes imediatamente para que as pessoas possam trocar suas senhas e monitorar fraudes em seus nomes." },

  { id: 1594, area: "Bioinformática", subject: "Segurança de dados", 
    text: "No modelo de segurança física do CPD (onde ficam os servidores do genoma), é prática comum e exigida:", 
    options: { A: "Porta aberta para ventilar", B: "Controle restrito de acesso por crachá e biometria, CFTV (câmeras), ar-condicionado redundante e alarmes de temperatura e água", C: "Colocar os servidores na sala de café", D: "Deixar a chave na porta", E: "Permitir entrada de pacientes para ver as máquinas" }, 
    correct: "B", explanation: "Gabarito: B. Servidores de NGS custam fortunas e guardam dados sensíveis. O datacenter é o cofre-forte da instituição: blindado, frio, vigiado e de acesso ultra-restrito." },

  // --- Vocabulários controlados, ontologias e técnicas de ETL ---
  { id: 1595, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "Na TI da Saúde, o que significa a sigla do processo ETL?", 
    options: { A: "Executar, Testar, Ler", B: "Extract (Extrair dados de várias fontes), Transform (Limpar e padronizar os dados), Load (Carregar/Salvar no banco de dados principal limpo)", C: "Eliminar Termos Longos", D: "Escrever Textos Livres", E: "Espaço Temporal Lógico" }, 
    correct: "B", explanation: "Gabarito: B. ETL é a alma do Banco de Dados. Ele puxa o dado bruto sujo, limpa e padroniza, e joga bonito nas prateleiras do servidor da nuvem." },

  { id: 1596, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "Por que usamos 'Vocabulários Controlados' (como a CID-10) nos prontuários em vez de deixar o médico escrever 'texto livre' (qualquer palavra)?", 
    options: { A: "Para censurar a liberdade do médico", B: "Para economizar tinta na impressora", C: "Porque o texto livre gera caos ('Ataque cardíaco', 'Infarto', 'IAM'). O vocabulário controlado padroniza em um único código universal, permitindo que a Inteligência Artificial e a estatística funcionem perfeitamente no SUS", D: "Apenas para cobrar mais impostos", E: "Para não ofender o paciente" }, 
    correct: "C", explanation: "Gabarito: C. Computador é burro para entender sinônimos, gírias e erros de digitação médicos. Usar um Código/Vocabulário único garante que a pesquisa científica funcione redonda." },

  { id: 1597, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "A sigla HPO (Human Phenotype Ontology) é vital na genômica clínica mundial. Ela é um vocabulário focado em padronizar o quê?", 
    options: { A: "O nome dos remédios e marcas de farmácia", B: "Os preços dos exames NGS", C: "As descrições exatas dos sintomas e anomalias físicas dos pacientes (fenótipos), facilitando o cruzamento de sintomas com suspeitas de síndromes genéticas raras pelo computador", D: "Os endereços dos hospitais", E: "Os nomes dos vírus" }, 
    correct: "C", explanation: "Gabarito: C. O HPO traduz um sintoma, como 'Dedos a mais', para o código 'HP:0010442'. Isso permite que a Bioinformática busque esse código na rede mundial de mutações e entregue a doença rara correta." },

  { id: 1598, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "Na etapa de Transformação (o 'T' do ETL), qual destas tarefas o bioinformata ou engenheiro de dados está realizando?", 
    options: { A: "Excluindo o banco de dados inteiro", B: "Fotografando o DNA", C: "Limpando espaços em branco nos textos, removendo exames duplicados e convertendo datas para um formato padrão (ex: de 10/12/23 para 2023-12-10)", D: "Aplicando vacinas no posto", E: "Baixando músicas na nuvem" }, 
    correct: "C", explanation: "Gabarito: C. Transformar é higienizar a bagunça. Arrumar datas, corrigir nomes escritos errados e deletar informações em branco antes de salvar no sistema do governo." },

  { id: 1599, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "Qual é a diferença conceitual simples entre um Data Warehouse (Armazém de Dados) e um Data Lake (Lago de Dados)?", 
    options: { A: "O Lake é mais quente", B: "O Warehouse aceita qualquer lixo. O Lake é restrito", C: "O Warehouse armazena dados já filtrados, limpos e organizados em tabelas perfeitas (SQL). O Data Lake aceita tudo misturado e bruto, como textos, vídeos, VCFs e tabelas sujas para uso livre da Inteligência Artificial", D: "Não há diferença no mercado de TI", E: "O Warehouse é analógico em papel" }, 
    correct: "C", explanation: "Gabarito: C. O Warehouse é como uma prateleira de supermercado perfeitinha. O Lake é um grande galpão onde você joga as caixas pesadas do jeito que chegaram (Dados Brutos) e os cientistas fuçam nelas depois." },

  { id: 1600, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "A sigla API (Interface de Programação de Aplicação) no mundo dos dados de saúde permite:", 
    options: { A: "O controle de temperatura do freezer", B: "Que dois sistemas de software diferentes (ex: o sistema do hospital e o banco de dados de mutações do governo) conversem e troquem dados diretamente e automaticamente pela internet", C: "O paciente conversar com o médico", D: "O conserto da placa de vídeo", E: "A criptografia do LIMS" }, 
    correct: "B", explanation: "Gabarito: B. API é o garçom. O seu software bioinformático pede: 'Garçom, me traga os dados do Gene X'. O garçom vai até a cozinha (O banco global Ensembl), pega a informação e devolve direto pra sua tela." },

  { id: 1601, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "O padrão internacional 'HL7 FHIR' revolucionou a saúde digital moderna. Seu objetivo principal é:", 
    options: { A: "Proibir a troca de dados", B: "Garantir a Interoperabilidade: criar um formato universal para que prontuários eletrônicos, resultados de laboratório genômico e celulares de pacientes troquem informações de saúde sem erros de linguagem", C: "Ser uma linguagem de programação como Python", D: "Medir o genoma do Covid-19", E: "Servir de antivírus de rede" }, 
    correct: "B", explanation: "Gabarito: B. Interoperabilidade é a palavra chave. Se o Einstein, o Sírio Libanês e o SUS usam FHIR, os prontuários dos 3 conseguem se conversar perfeitamente, o que antes era impossível por causa de sistemas privados isolados." },

  { id: 1602, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "O formato de dados JSON (JavaScript Object Notation) é o queridinho das APIs modernas de bioinformática e web porque:", 
    options: { A: "É criptografado por natureza", B: "Sua estrutura de 'Chave-Valor' (ex: { 'nome': 'João', 'idade': 30 }) é super leve, legível por humanos e facilmente interpretada por qualquer linguagem de programação (Python, R, Java)", C: "Ele toca áudio no navegador", D: "Ele só roda no Linux antigo", E: "Ele ocupa mais espaço que o Word" }, 
    correct: "B", explanation: "Gabarito: B. JSON substituiu o antigo XML porque é puro, direto, fácil de ler (tanto pro PC quanto pra gente) e pesa quase nada na transferência da rede." },

  { id: 1603, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "No termo 'Big Data' aplicado ao Genomas SUS, existem os famosos 'Vês'. O que são o Volume e a Variedade?", 
    options: { A: "Volume é o barulho do servidor, Variedade é a marca das máquinas", B: "Volume diz respeito à quantidade absurda de dados gerados (Terabytes de DNA); Variedade indica que os dados vêm de formas diferentes (imagens de ressonância, VCFs pesados de genoma, textos soltos de médicos)", C: "Volume é o peso da maca, variedade é a comida", D: "Volume e Variedade não se aplicam a dados da saúde", E: "Nenhuma das respostas" }, 
    correct: "B", explanation: "Gabarito: B. Big Data na Saúde é lidar com Volume absurdo, gerado em altíssima Velocidade, com enorme Variedade (áudio, foto, tabelas) e garantindo a Veracidade (QC e Ética) do dado." },

  { id: 1604, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "Na extração de dados (Extract), os arquivos de saúde em formato '.CSV' (Comma-Separated Values) são extremamente comuns por serem:", 
    options: { A: "Arquivos 3D complexos", B: "Tabelas simples de texto onde as colunas são separadas apenas por vírgulas ou ponto-e-vírgula, facilitando a abertura em Excel ou Python sem pesar o computador", C: "Arquivos confidenciais de senhas", D: "Aplicativos executáveis de instalação", E: "Formato nativo de imagens de raio-x" }, 
    correct: "B", explanation: "Gabarito: B. O CSV é a essência da tabela. Se você tira a roupagem bonita do Excel, o que sobra é um texto limpo separado por vírgulas, maravilhoso e leve para a bioinformática ler no Python (Pandas)." },

  { id: 1605, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "Na criação de um banco de dados relacional, a linguagem padrão e clássica que o programador utiliza para fazer perguntas à tabela (ex: 'Me mostre todos os pacientes de 20 anos com mutação no BRCA1') chama-se:", 
    options: { A: "Java", B: "C++", C: "HTML", D: "SQL (Structured Query Language)", E: "Ruby" }, 
    correct: "D", explanation: "Gabarito: D. O SQL é a linguagem de consulta mestre. Com comandos simples (SELECT * FROM Genomas WHERE gene='BRCA1') você filtra milhões de linhas numa fração de segundos no banco de dados." },

  { id: 1606, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "A Ontologia de Genes (Gene Ontology - GO) foi criada no mundo da biologia computacional para padronizar três coisas fundamentais sobre os genes. Quais são?", 
    options: { A: "Tamanho, cor e peso molecular", B: "Função Molecular, Componente Celular (onde ele age) e Processo Biológico (qual via ele afeta)", C: "Doença, Cura e Vacina", D: "Nome do cientista, data da descoberta e país de origem", E: "Preço, laboratório fabricante e validade" }, 
    correct: "B", explanation: "Gabarito: B. A GO unificou a biologia. Ela diz em código de computador: O Gene XYZ é uma (Enzima Kinase), fica no (Núcleo) e age no (Processo de Divisão Celular). Isso facilita os scripts em R em análises de RNA-Seq." },

  { id: 1607, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "O que é 'Metadados' em um arquivo de genômica (ex: cabeçalho do VCF ou BAM)?", 
    options: { A: "Os vírus ocultos", B: "O DNA descartado da amostra", C: "É o 'Dado sobre o Dado'. Informações vitais auxiliares como a data do sequenciamento, o modelo da máquina usada, o nome do hospital e o pipeline executado", D: "O peso do computador", E: "As fotos dos cientistas" }, 
    correct: "C", explanation: "Gabarito: C. O dado real é o genoma. O metadado é a etiqueta da caixa dizendo 'Lido num NovaSeq, em 2024, pelo LIMS do Hospital São João'. Sem metadados, o genoma perde o valor científico por falta de rastreio." },

  { id: 1608, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "No contexto da gestão moderna do Genomas SUS na Cloud (AWS/GCP), utilizar o formato Apache Parquet ao invés de um VCF texto tradicional gigante é melhor por quê?", 
    options: { A: "Ele tem imagens em Full HD", B: "Ele armazena os dados em formato de 'Colunas' de alta compressão. Isso significa que o cientista de dados consegue pesquisar uma coluna específica muito mais rápido e pagando centavos, sem precisar ler e abrir o arquivo inteiro no servidor", C: "O Parquet é escrito em português do Brasil", D: "Ele edita o DNA do paciente sozinho", E: "Ele ocupa mais espaço e trava o disco" }, 
    correct: "B", explanation: "Gabarito: B. Formatos colunares (Parquet, Avro) são a revolução do Big Data. O Python pesca a coluna isolada em segundos e ignora as outras milhares de colunas do VCF." },

  { id: 1609, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "Qual é o papel de um Dicionário de Dados (Data Dictionary) no desenvolvimento do projeto Genomas SUS?", 
    options: { A: "Traduzir termos médicos de inglês para português para os pacientes", B: "Criar um manual técnico que lista todas as colunas do banco de dados, seus tipos (texto, número, data) e o que cada código significa, garantindo que a equipe de TI saiba ler as planilhas clínicas sem erros de interpretação", C: "Ensinar crianças a ler manuais", D: "Ditar regras de conduta ética na internet", E: "Armazenar vídeos cirúrgicos" }, 
    correct: "B", explanation: "Gabarito: B. Se a tabela tem uma coluna chamada 'ST_01', ninguém saberá o que é. O Dicionário de Dados avisa: 'ST_01 significa Status da Doença (1 Vivo, 0 Morto)'. É o mapa para os bioinformatas." },

  { id: 1610, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "A sigla LOINC (Logical Observation Identifiers Names and Codes) é a ontologia universalmente usada no mundo hospitalar e do SUS para padronizar estritamente os nomes de:", 
    options: { A: "Procedimentos cirúrgicos de amputações", B: "Marcas de macas e seringas compradas pelo estado", C: "Exames de laboratório e observações clínicas (Ex: Padroniza mundialmente que o código de 'Glicose no Sangue' é o mesmo no Brasil e no Canadá)", D: "Tipos de planos de saúde", E: "Bactérias nativas de água" }, 
    correct: "C", explanation: "Gabarito: C. A LOINC padronizou as análises clínicas. Isso impede que o laboratório 1 crie 'Glc.Sng' e o laboratório 2 crie 'Açúcar Sang.', o que impossibilitaria ao computador do estado saber que ambos são exames de Glicose." },

  { id: 1611, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "Quando fazemos 'Data Cleansing' (Limpeza de Dados) na fase de Transformação, a tarefa de identificar e remover 'Outliers' significa:", 
    options: { A: "Apagar pacientes que já faleceram da base de dados", B: "Excluir dados que estão duplicados perfeitamente em duas linhas", C: "Remover ou tratar valores absurdamente fora da curva ou discrepantes que foram erro de digitação médica (Ex: Paciente anotado com '1500 anos' de idade), para não estragar a média e a inteligência artificial", D: "Pintar as linhas da tabela de cores fáceis", E: "Excluir as datas de feriados nas buscas" }, 
    correct: "C", explanation: "Gabarito: C. Outliers (pontos fora da curva/aberrantes) estragam a estatística da IA. Limpar isso garante a precisão do estudo." },

  { id: 1612, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "Na estrutura em Grafos das ontologias (como HPO ou GO), os termos se conectam em relações pai-filho. Um termo 'Pai' é sempre:", 
    options: { A: "Uma doença letal", B: "Um conceito mais AMPLO e genérico (Ex: Doença Ocular), enquanto os seus filhos são conceitos mais ESTREITOS e específicos (Ex: Catarata Senil, Glaucoma)", C: "O nome do pesquisador idoso que descobriu", D: "Um conceito sem ligação com a doença", E: "O cromossomo X" }, 
    correct: "B", explanation: "Gabarito: B. A ontologia flui do geral para o específico. O PC pode agrupar centenas de sub-doenças (filhos) jogando-as na bacia do termo genérico pai (Anomalia do olho) para análise generalista de exoma." },

  { id: 1613, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "No contexto das APIs de Saúde (FHIR / REST), um 'Endpoint' é de forma simples:", 
    options: { A: "O fim de um cabo de rede que vai no computador", B: "O botão de desligar a máquina base primária de laboratório", C: "A URL (Endereço Web específico) onde o seu programa (Python) vai bater na porta da internet para puxar um dado específico (Ex: meudominio.com/api/pacientes/123)", D: "A data de validade da senha na rede", E: "O HD corrompido do sistema Windows" }, 
    correct: "C", explanation: "Gabarito: C. Endpoint é a 'porta de atendimento' do servidor. Cada endpoint da API devolve uma informação diferente (ex: um endpoint dá os genomas, o outro dá o nome dos médicos)." },

  { id: 1614, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "Um arquivo XML já foi muito usado para transferência de dados antes do JSON. A sua característica visual principal, similar à linguagem de sites HTML, é o uso de:", 
    options: { A: "Chaves soltas sem textos", B: "Números puros de zero e um (Binário)", C: "Tags (Etiquetas) abertas e fechadas entre os símbolos de menor e maior (Ex: <paciente>João</paciente>)", D: "Planilhas exclusivas do sistema office da Microsoft com linhas colunas e abas abertas de cor verde", E: "Gráficos redondos prontos analíticos e imagens em flash animadas" }, 
    correct: "C", explanation: "Gabarito: C. O XML (Extensible Markup Language) organiza dados como etiquetas dentro de etiquetas. Foi substituído aos poucos pelo JSON na Bioinformática por ser um texto mais verboso e pesado de ler no PC." },

  { id: 1615, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "Na fase de 'Load' (Carga) de um processo ETL para um repositório centralizado, a diferença entre 'Carga Completa' (Full Load) e 'Carga Incremental' é que:", 
    options: { A: "Incremental gasta muito mais internet", B: "Carga Completa apaga todos os dados anteriores do HD e regrava tudo do zero novamente. Carga Incremental envia apenas os dados novos que surgiram desde ontem, economizando um tempo colossal da rede", C: "Incremental traduz do inglês para português", D: "Completa envia vírus, incremental não", E: "A carga completa não tem dados de DNA, só RNAs soltos no log de rede" }, 
    correct: "B", explanation: "Gabarito: B. Você não quer transmitir 10 terabytes do Genomas SUS para o governo todo dia. Você faz Carga Completa uma vez no ano, e no dia a dia você faz a Incremental (manda só os dados de pacientes que deram entrada naquele dia específico)." },

  { id: 1616, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "O que a Ontologia clinica chamada SNOMED-CT resolve no Prontuário Eletrônico do Paciente (PEP)?", 
    options: { A: "Controla o estoque de seringas e soros da enfermaria limpa hospitalar", B: "Fornece a maior e mais abrangente linguagem clínica multilingue e vocabulário eletrônico estruturado do mundo para descrever desde sintomas até procedimentos, exames e órgãos de forma padronizada pra IAs processarem sem erros cruciais de grafia", C: "Gera boletos e faturamento fiscal da nota das empresas de fornecimento biomédico da base unificada", D: "Apaga dados de prontuários com mais de vinte anos nos cartórios e no servidor federal estadual normativo isolado da conexão web base livre da internet", E: "Programa computadores antigos Linux nas UPAS e Unidades Básicas de atendimento de rua" }, 
    correct: "B", explanation: "Gabarito: B. O SNOMED-CT é o gigante das ontologias médicas mundiais, mapeando cada termo médico com uma precisão cirúrgica de códigos para o mundo inteiro operar digitalmente a saúde dos prontuários das pessoas nas redes sem barreiras nativas e ambiguidades." },

  { id: 1617, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "Ao realizar uma Query (Consulta) num banco de dados SQL da saúde genômica. O comando que junta duas tabelas diferentes baseadas numa informação em comum delas (ex: Juntar a Tabela 'Pacientes' com a Tabela 'Mutações' baseadas no CPF e ID) é o famoso comando:", 
    options: { A: "DROP DATABASE", B: "UPDATE e DELETE nas funções base orgânicas analíticas e numéricas primárias do script principal e da ramificação paralela nula", C: "JOIN (Ex: INNER JOIN, LEFT JOIN) - O comando que permite a unificação lógica provisória de dados vindos de origens e colunas separadas para emitir relatórios mesclados e unificados do cruzamento inteligente na tela fina", D: "ECHO do prompt e grep ativo", E: "FORMAT C: da máquina primária de dados brutos e binários originais no prompt e no log analógico serial interno puro nativo" }, 
    correct: "C", explanation: "Gabarito: C. A mágica dos bancos Relacionais é o JOIN. É ele quem casa as informações espalhadas por mil planilhas numa visualização única e mastigada para o cientista ou o diretor médico analisar no Dashboard." },

  { id: 1618, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "O que são 'Silos de Dados' no contexto governamental e do ambiente hospitalar que as ferramentas de ETL tentam desesperadamente quebrar para fazer Saúde de Precisão fluir e funcionar nas regionais do Genoma Sus de alta biologia analítica das bases em unificação de sistemas?", 
    options: { A: "Caixas e frascos de plástico físico onde o sangue apodrece sem validade ou lixo hospitalar esquecido", B: "Ambientes digitais e sistemas fechados de setores isolados que não se conversam (Ex: O banco de dados oncológico do hospital central que não envia e não compartilha dados digitais com o banco de DNA da Fiocruz por estarem em formatos incompatíveis ou barreiras políticas de acesso de TIs diferentes da mesma nação sem padronização)", C: "Nuvens da amazon que congelam em HDDs de cinco rotações mecânicas ativas e primárias em Data Centers e provedores locais nos países externos ao país matriz base original logado no sistema civil unificado base nacional aberta", D: "Arquivos de Word docx soltos da base de enfermagem das regionais médicas unificadas no hospital geral", E: "Os canos da central elétrica" }, 
    correct: "B", explanation: "Gabarito: B. Silos de dados são a 'pior praga' do Big Data na Saúde. O Oncologista usa o Sistema X, o Postinho de Saúde usa o Sistema Y, e o Genoma tá na nuvem Z. Ferramentas de Interoperabilidade/ETL existem justamente para quebrar as paredes e unificar todos eles para a Saúde ser inteligente a nível Federal Global." },

  { id: 1619, area: "Bioinformática", subject: "Vocabulários controlados, ontologias e técnicas de extração, transformação e carga de dados (ETL)", 
    text: "A biblioteca em Python mais sagrada, universal e mundialmente adotada pelo cientista de dados e do analista bioinformata de ETL para a etapa de transformação limpa de dados, cruzamentos tubulares eficientes de linhas complexas massivas e análise estatística matricial de dataframes de tabelas cruas é:", 
    options: { A: "O pygame (Jogos base ativos em C e C++ modulares gráficos de vetor puro)", B: "O Excel da Microsoft original corporativa da empresa atestada em nuvem isolada", C: "O MS-DOS puro da Windows nativa sem interfaces da década analógica básica anterior ao linux de kernel puro modular com bases nativas antigas de mainframes da base central analítica das matrizes corporativas pesadas e complexas", D: "A biblioteca Pandas. Perfeita e absoluta nas funcionalidades de ler, limpar Nulls, desanhar e cruzar genomas com VCFs baseados nas conversões do dado rápido no computador para IA sem queimar processador da matriz ativamente no sistema moderno das operações de bases científicas massivas e big datas", E: "A extensão em power point simples das laudas estáticas nativas de painel em apresentações básicas de hospitais com textos em artes limpas visuais nativas" }, 
    correct: "D", explanation: "Gabarito: D. Import Pandas as pd. Essa é a primeira linha de código de 99% das ferramentas de manipulação de CSV, Data Lakes e estatísticas base ETL em Python. É ela quem manipula os chamados DataFrames turbinados da ciência moderna global." }
];
