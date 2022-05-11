import data from "../data";

export const getAllTickets = () => {
  try {
    let tids = data.map((d) => {
      return {
        params:{
            id:d.id
        }
      };
    });
    console.log(tids)
    return tids;
  } catch (error) {
    console.log(error);
  }
};
