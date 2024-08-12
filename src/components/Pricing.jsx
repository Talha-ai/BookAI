export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container mx-auto p-8 mb-2 w-[936px] bg-[#1E293B] rounded-lg border border-[#334155]"
    >
      <h2 className="mt-8 text-2xl font-bold text-[#A5B4FC]">API Pricing</h2>
      <p className="text-base text-[#E2E8F0]">
        Our API pricing is based on the model used and the number of tokens
        processed. Here's a breakdown of the costs:
      </p>

      <div className="mt-6 overflow-hidden rounded-xl">
        <table className="w-full text-left bg-[#1E293B] border border-[#334155]">
          <thead className="bg-[#6366F1]">
            <tr>
              <th className="p-4 text-[12.8px] text-white">API</th>
              <th className="p-4 text-[12.8px] text-white">MODEL</th>
              <th className="p-4 text-[12.8px] text-white">
                PRICE PER 1K TOKENS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#334155]">
              <td className="p-4 text-[#E2E8F0]">OpenAI</td>
              <td className="p-4 text-[#E2E8F0]">GPT-3.5</td>
              <td className="p-4 text-[#E2E8F0]">$0.002</td>
            </tr>
            <tr className="border-b border-[#334155]">
              <td className="p-4 text-[#E2E8F0]">OpenAI</td>
              <td className="p-4 text-[#E2E8F0]">GPT-4</td>
              <td className="p-4 text-[#E2E8F0]">$0.03</td>
            </tr>
            <tr className="border-b border-[#334155]">
              <td className="p-4 text-[#E2E8F0]">Together AI</td>
              <td className="p-4 text-[#E2E8F0]">Llama-2-70b</td>
              <td className="p-4 text-[#E2E8F0]">$0.0008</td>
            </tr>
            <tr>
              <td className="p-4 text-[#E2E8F0]">Together AI</td>
              <td className="p-4 text-[#E2E8F0]">Llama-2-13b</td>
              <td className="p-4 text-[#E2E8F0]">$0.0006</td>
            </tr>
          </tbody>
        </table>
      </div>

      <article className="mt-8">
        <h3 className="text-lg font-bold text-[#A5B4FC]">Token Estimation</h3>
        <p className="text-base text-[#E2E8F0]">
          On average, 1 token is approximately 4 characters or 0.75 words. For
          precise pricing, we recommend using our token calculator tool.
        </p>
      </article>

      <article className="mt-8">
        <h3 className="text-lg font-bold text-[#A5B4FC]">Billing</h3>
        <p className="text-base text-[#E2E8F0]">
          You will only be charged for the tokens used in generating the book.
          The API tracks token usage and bills accordingly. Detailed usage
          reports are available in your account dashboard.
        </p>
      </article>
    </section>
  );
};

export default Pricing;
