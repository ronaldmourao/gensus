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
    correct: "B", explanation: "Gabarito: B. A genômica preventiva no casamento (rastreio de portadores assintomáticos) permite orientação familiar profunda sobre a probabilidade (25%) de ter bebês que exigirão intensos cuidados com dores isquêmicas da doença SS." }
];
