import superagent from "superagent";

export const getOrgInfo = async (orgId: string) => {
  const response = await superagent
    .get("https://www.opensecrets.org/api")
    .query({
      apikey: process.env.OPENSECRETS_API_KEY,
      method: "orgSummary",
      id: orgId,
      output: "json",
    });
    return JSON.parse(response.text);
};

export const findOrg = async (searchString: string) => {
  const response = await superagent
    .get("https://www.opensecrets.org/api")
    .query({
      apikey: process.env.OPENSECRETS_API_KEY,
      method: "getOrgs",
      org: searchString,
      output: "json",
    });
    return JSON.parse(response.text);
};
