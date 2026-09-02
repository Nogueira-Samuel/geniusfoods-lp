import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso — Genius Foods",
  description: "Termos de uso da Genius Foods, cardápio digital para restaurantes.",
  alternates: { canonical: "https://geniusfoods.com.br/termos-de-uso" },
};

export default function TermosDeUso() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <a href="/" className="text-sm font-semibold text-secondary hover:underline">
        ← Voltar para a página inicial
      </a>
      <h1 className="mt-6 text-3xl font-extrabold text-primary">Termos de Uso</h1>
      <p className="mt-2 text-sm text-gray-500">Última atualização: 2 de setembro de 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-700">
        <p>
          Ao utilizar a Genius Foods, você concorda com os termos descritos abaixo. Leia com
          atenção antes de criar sua loja.
        </p>
        <section>
          <h2 className="text-lg font-bold text-primary">1. Sobre o serviço</h2>
          <p className="mt-2">
            A Genius Foods fornece um cardápio digital com pedidos via WhatsApp, painel de
            gestão em tempo real, notificações automáticas e assistente de IA, oferecido em
            planos gratuitos e pagos.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-primary">2. Cadastro e responsabilidades</h2>
          <p className="mt-2">
            O restaurante é responsável pelas informações cadastradas no cardápio, incluindo
            preços, disponibilidade de itens e tempo de atendimento.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-primary">3. Cancelamento</h2>
          <p className="mt-2">
            Não há contrato de fidelidade. Planos pagos podem ser cancelados a qualquer momento,
            sem multa, encerrando a cobrança no ciclo seguinte.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-primary">4. Alterações</h2>
          <p className="mt-2">
            Estes termos podem ser atualizados periodicamente. Alterações relevantes serão
            comunicadas aos restaurantes cadastrados.
          </p>
        </section>
      </div>
    </main>
  );
}
