import { LIGHT_NOVELS } from "@consumet/extensions";

const novels = new LIGHT_NOVELS.ReadLightNovels();

export const getNovels = async (id) => {
  const response = await novels.fetchLightNovelInfo(`${id}`);
  return response;
};
