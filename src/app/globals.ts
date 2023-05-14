export const OPENSEA = "https://opensea.io/collection/uwucrew";

const PROJECT = "uwucrew-thumbnails";
const STORAGE_URL = `https://firebasestorage.googleapis.com/v0/b/${PROJECT}/o/`;
export const uwuImage = (uwuId: number) => {
  return `${STORAGE_URL}${uwuId.toString()}.png?alt=media`;
};
