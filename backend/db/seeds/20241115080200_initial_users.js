/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    { name: "oguma", mail_address: "001@nri.co.jp" },
    { name: "oizumi", mail_address: "002@nri.co.jp" },
    { name: "suzui", mail_address: "003@nri.co.jp" },
    { name: "hujimura", mail_address: "004@nri.co.jp" },
    { name: "uresino", mail_address: "005@nri.co.jp" },
  ]);
};
