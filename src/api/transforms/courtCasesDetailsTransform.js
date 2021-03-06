const courtCasesDetailsTransform = ({
  nr_acoes_propostas_60_dias = 0,
  variacao_12_meses = 0,
  top_n = [],
}) => ({
  proposedActions60Days: nr_acoes_propostas_60_dias,
  proposedActionsVariation12Months: variacao_12_meses,
  topProsecutors: top_n.map(p => ({
    name: p.nm_promotoria,
    proposedActions30Days: p.nr_acoes_propostas_30_dias,
  })),
});

export default courtCasesDetailsTransform;
