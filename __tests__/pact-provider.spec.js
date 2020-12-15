const { Verifier } = require("@pact-foundation/pact")

describe("Clients Service Verification", () => {
  before(() => {
    server = require("../index");
  })
  after(() => {
    server.close();
  })
  it("validates the expectations of Client Service", async () => {
    let opts = {
      provider: "provider-ox",
      providerVersion: "1",
      providerBaseUrl: "http://localhost:3001",
      pactBrokerUrl: "https://test.pact.dius.com.au",
      pactBrokerUsername: "dXfltyFMgNOFZAxr8io9wJ37iUpY42M",
      pactBrokerPassword: "O5AIZWxelWbLvqMd8PkAVycBJh2Psyg1",
      publishVerificationResult: true,
      logLevel: "DEBUG",
      verbose: true
    }
    const output = await new Verifier(opts).verifyProvider();
    console.log("Pact Verification Complete!");
    console.log(output);
  })
})