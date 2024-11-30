import { TErrorSources, TGenericErrorResponse } from '../interface/error';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const match = err.message.match(/"([^"]*)"/);
  const extractedMessage = match ? match[1] : '';
  const errorSources: TErrorSources = [
    { path: '', message: `${extractedMessage} already exists` },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: 'Duplicate Error',
    errorSources,
  };
};
export default handleDuplicateError;
