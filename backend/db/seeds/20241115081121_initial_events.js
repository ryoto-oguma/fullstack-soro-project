/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("events").del();
  await knex("events").insert([
    {
      title: "池袋でお昼ごはん",
      place: "池袋",
      start: "2024/11/15 11:00",
      end: "2024/11/15 13:00",
      detail: "池袋でお昼にジンギスカンを食べた!!!",
      owner: 1,
    },
    {
      title: "新宿でお昼ごはん",
      place: "新宿",
      start: "2024/11/17 11:00",
      end: "2024/11/18 13:00",
      detail: "新宿でお昼にジンギスカンを食べたい!!",
      owner: 2,
    },
    {
      title: "札幌旅行",
      place: "札幌",
      start: "2024/11/15 09:00",
      end: "2024/11/17 09:00",
      detail: "札幌に行って水曜どうでしょうの聖地巡りをしたい!!",
      owner: 3,
    },
    {
      title: "韓国旅行",
      place: "韓国",
      start: "2024/12/1 09:00",
      end: "2024/12/5 17:00",
      detail: "韓国に行って食巡りとポーカーがしたい!!",
      owner: 4,
    },
    {
      title: "サイコロの旅",
      place: "日本列島",
      start: "2024/12/10 09:00",
      end: "2024/12/30 17:00",
      detail: "日本列島サイコロの旅をやりたい!!",
      owner: 5,
    },
  ]);
};
