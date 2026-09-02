import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — Genius Foods",
  description: "Política de privacidade da Genius Foods, cardápio digital para restaurantes.",
  alternates: { canonical: "https://geniusfoods.com.br/politica-de-privacidade" },
};

export default function PoliticaDePrivacidade() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <a href="/" className="text-sm font-semibold text-secondary hover:underline">
        ← Voltar para a página inicial
      </a>
      <h1 className="mt-6 text-3xl font-extrabold text-primary">Política de Privacidade</h1>
      <p className="mt-2 text-sm text-gray-500">Última atualização: 2 de setembro de 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-700">
        <p>
          A Genius Foods, produto da Companhia Genius, respeita a privacidade dos seus usuários
          e se compromete a proteger os dados pessoais coletados durante o uso do nosso cardápio
          digital e painel de gestão.
        </p>
        <section>
          <h2 className="text-lg font-bold text-primary">1. Dados coletados</h2>
          <p className="mt-2">
            Coletamos dados fornecidos pelo restaurante (nome, contato, cardápio) e pelos
            clientes finais durante o pedido (nome, telefone e endereço de entrega), sempre com a
            finalidade de processar e notificar pedidos via WhatsApp.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-primary">2. Uso das informações</h2>
          <p className="mt-2">
            As informações são usadas exclusivamente para operar o cardápio digital, processar
            pedidos, enviar notificações automáticas e gerar relatórios para o restaurante.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-primary">3. Compartilhamento</h2>
          <p className="mt-2">
            Não vendemos nem compartilhamos dados pessoais com terceiros para fins de marketing.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-primary">4. Contato</h2>
          <p className="mt-2">
            Dúvidas sobre esta política podem ser enviadas pelo WhatsApp{" "}
            <a href="https://wa.me/5521995902657" className="font-semibold text-secondary">
              (21) 99590-2657
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
