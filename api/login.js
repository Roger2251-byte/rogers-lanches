
export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      erro: "Método não permitido"
    });
  }

  const senha = process.env.SENHA_ADMINISTRADOR;

  if (!senha) {
    return res.status(500).json({
      erro: "Senha não configurada no servidor"
    });
  }

  const { password } = req.body || {};

  if (password !== senha) {
    return res.status(401).json({
      erro: "Senha incorreta"
    });
  }

  return res.status(200).json({
    sucesso: true
  });
}
