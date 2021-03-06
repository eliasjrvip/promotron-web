function orgaoTransformer(orgao) {
  const { cpf, nome, tipo, cdorgao, nm_org, dps } = orgao;
  return {
    nomeOrgao: nm_org,
    cpf,
    nomeUser: nome,
    tipo,
    codigo: cdorgao,
    dps,
  };
}

export function scaUserTranform(user) {
  const {
    cpf,
    matricula,
    nome,
    sexo,
    first_login,
    first_login_today,
    orgao_selecionado,
    orgaos_validos,
    token,
  } = user;
  return {
    nome,
    sexo,
    firstLogin: first_login,
    firstLoginToday: first_login_today,
    cpf,
    matricula,
    token,
    orgaoSelecionado: orgaoTransformer(orgao_selecionado),
    orgaosValidos: orgaos_validos.map(item => orgaoTransformer(item)),
  };
}

export function jwtUserTransform(user) {
  const {
    cpf,
    matricula,
    nome,
    sexo,
    first_login,
    first_login_today,
    token,
    orgao,
    tipo_orgao,
  } = user;
  return {
    nome,
    sexo,
    firstLogin: first_login,
    firstLoginToday: first_login_today,
    cpf,
    matricula,
    token,
    orgaoSelecionado: {
      nomeOrgao: undefined,
      cpf,
      nomeUser: nome,
      tipo: tipo_orgao,
      codigo: orgao,
    },
    orgaosValidos: [],
  };
}
