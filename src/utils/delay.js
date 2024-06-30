export const delay = ({ milliseconds }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
};

export const delayFetch = async ({ fetcherPromise, milliseconds }) => {
  const responseList = await Promise.allSettled([
    delay({ milliseconds }),
    fetcherPromise,
  ]);

  if (responseList[1].status === "rejected") {
    throw responseList[1].reason;
  }

  return responseList[1].value;
};
