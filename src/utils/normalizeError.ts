  type ErrorWithMessage = {
  message: string
}

type ErrorWithCode = {
  code: string
}

type ErrorWithResponse = {
  response: {
    status: number
  }
}

function hasMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as { message?: unknown }).message === 'string'
  )
}

function hasCode(error: unknown): error is ErrorWithCode {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    typeof (error as { code?: unknown }).code === 'string'
  )
}

function hasResponse(error: unknown): error is ErrorWithResponse {
  return (
    typeof error === 'object' &&
    error !== null &&
    'response' in error &&
    typeof (error as { response?: unknown }).response === 'object' &&
    error.response !== null &&
    typeof (error as { response: { status?: unknown } }).response.status === 'number'
  )
}

export function normalizeError(error: unknown): string {
  if (hasCode(error) && error.code === 'ECONNABORTED') {
    return 'درخواست بیش از حد طول کشید ⏱ لطفاً دوباره امتحان کنید'
  }

  if (hasMessage(error) && error.message.includes('Network Error')) {
    return 'اتصال به سرور برقرار نشد 🌐 اینترنت خود را بررسی کنید'
  }

  if (hasResponse(error)) {
    const status = error.response.status
    switch (status) {
      case 400:
        return 'درخواست نامعتبر بود (400)'
      case 401:
        return 'برای ادامه نیاز به ورود دارید (401)'
      case 403:
        return 'شما دسترسی لازم را ندارید (403)'
      case 404:
        return 'موردی یافت نشد (404)'
      case 422:
        return 'داده‌های ارسالی معتبر نیستند (422)'
      case 500:
        return 'خطای داخلی سرور (500)'
      default:
        return 'خطایی در ارتباط با سرور رخ داد ❌'
    }
  }

  if (hasMessage(error)) {
    return error.message
  }

  return 'مشکلی در انجام عملیات رخ داد ❌'
}
