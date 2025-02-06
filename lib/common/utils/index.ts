export { DateTimeUtilities } from "./dateTimeUtilities.util";
export { StatementBuilder } from "./statementBuilder.util";
export { HttpUtilities } from "./httpUtilities.util";

interface ClientError extends Error {
  response: {
    status: number;
  };
}

interface ServerError extends Error {
  response: {
    status: number;
  };
}

const isClientError = (err: Error): err is  ClientError =>  err.message.startsWith("soap:Client:");

const isServerError = (err: Error): err is ServerError => err.message.startsWith("soap:Server:");

export function promiseFromCallback(
  fn: (callback: (err: Error, result: any) => void) => void,
): Promise<any> {
  return new Promise((resolve, reject) => {
    fn((err, result) => {
      if (err) {
        const error = err.message.split(": ");

        if (isClientError(err)) {
          reject({
            code: err["response"].status,
            name: error[1],
            message: error[3],
          });
        }
        if (isServerError(err)) {
          reject({
            code: err["response"].status,
            name: error[2]?.match(/"xsi:type":"(.*)"},/)?.[1] ?? "",
            message: error[1],
            details: JSON.parse(error[2]),
          });
        }

        reject(err);
        return;
      }

      resolve(result);
    });
  });
}
